from fastapi import APIRouter, Request
from services.nlp import extract_kb_suggestion

router = APIRouter()

@router.post("/events")
async def slack_events(request: Request):
    payload = await request.json()

    message = payload.get("event", {}).get("text", "")

    if message:
        suggestion = extract_kb_suggestion(message)
        print("Suggestion:", suggestion)

        # TODO: save to DB or return it
        return suggestion

    return {"ok": True}