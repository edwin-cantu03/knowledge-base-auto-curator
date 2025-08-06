from pydantic import BaseModel
from typing import Optional

class Suggestion(BaseModel):
    id: Optional[int]
    message: str
    topic: str
    source: str
    created_at: Optional[str]