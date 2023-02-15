from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

class content(BaseModel):
    title: str
    description: str
    startTime: str = None
    endTime: str = None
    
@app.get("/")
async def root():
    return {"message":"Hello World"}

