from pydantic import BaseModel

class ToDoBase(BaseModel):
    title: str
    description: str

class ToDoCreate(ToDoBase):
    pass

class ToDoOut(ToDoBase):
    id: int
    class Config:
        orm_mode = True
