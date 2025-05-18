from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.middleware.cors import CORSMiddleware
from .database import SessionLocal, engine, Base
from . import crud, schemas

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/todos", response_model=list[schemas.ToDoOut])
async def read_todos(db: AsyncSession = Depends(get_db)):
    return await crud.get_todos(db)

@app.post("/todos", response_model=schemas.ToDoOut)
async def create(todo: schemas.ToDoCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_todo(db, todo)

@app.delete("/todos/{todo_id}", response_model=schemas.ToDoOut)
async def delete(todo_id: int, db: AsyncSession = Depends(get_db)):
    deleted = await crud.delete_todo(db, todo_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="ToDo not found")
    return deleted
