from fastapi import FastAPI
from api.routes_status import router as status_router
from api.routes_slack import router as slack_router
from dotenv import load_dotenv

app = FastAPI()

app.include_router(status_router)
app.include_router(slack_router, prefix="/slack")

load_dotenv()

@app.get("/")
def health():
    return {"status": "ok"}