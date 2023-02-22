from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Content(BaseModel):
    title: str
    description: str
    startTime: str = None
    endTime: str = None
    done: bool = False
    
@app.get("/")
async def root():
    return {"message":"Hello World"}

@app.post("/sublist/")
async def root(item: Content):
    return {"title":item.title, "description":item.description}
    
@app.post("/mainlist/")
async def add_food(item: Content):
    with open("./data/mainlist.txt", "a") as file:
        file.write(f"{item.title} | {item.description} | {item.done}\n")
