from sqlalchemy.future import select
from .models import ToDo

async def get_todos(db):
    result = await db.execute(select(ToDo))
    return result.scalars().all()

async def create_todo(db, todo):
    db_todo = ToDo(**todo.dict())
    db.add(db_todo)
    await db.commit()
    await db.refresh(db_todo)
    return db_todo

async def delete_todo(db, todo_id):
    todo = await db.get(ToDo, todo_id)
    if todo:
        await db.delete(todo)
        await db.commit()
    return todo