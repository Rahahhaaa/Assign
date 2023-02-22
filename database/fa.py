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


class Food(BaseModel):
    food: str
    description: str = None


@app.get("/")
async def root():
    return {"messag": "Hello World"}


@app.post("/addfood/")
async def add_food(item: Food):
    f = open(f"./foods/{item.food}.txt", "w")
    f.write(item.description)
    f.close()
    print(item.food, item.description)
    return {"food_name": item.food, "description": item.description}


@app.post("/deletefood/")
async def delete_food(item: Food):
    os.remove(f"./foods/{item.food}.txt")
    return {"food_name": item.food}


@app.get("/foods/")
async def foods():
    path = "./foods"
    food_list = os.listdir(path)
    print("file_list: {}".format(food_list))
    foods = []
    for food in food_list:
        f = open(f"./foods/{food}", "r")
        foods.append({"foodName": food[:-4], "description": f.read()})
    print(foods)
    return {"foods": foods}


@app.get("/foods-num")
async def foods_num():
    path = "./foods"
    foodsNum = len(os.listdir(path))
    return {"foodsNum": foodsNum}
