import os.path

from fastapi import FastAPI, Request, APIRouter, HTTPException
from app.routers.translator import translator_router

app = FastAPI(docs_url='/api/data/docs', redoc_url='/api/data/redoc')

router = APIRouter(prefix="/api/data")


# main은 깔끔하게 사용하기
# main은 routers에서 호출만!!!!!!!

@app.get("/")
async def root():
    return {"message": "Hello World"}

@router.get("/test")
def test():
    return {"message": "this is just test"}

app.include_router(router)
app.include_router(translator_router.router)