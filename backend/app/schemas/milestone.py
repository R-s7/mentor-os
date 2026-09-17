from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class MilestoneCreate(BaseModel):
    title: str
    description: str | None = None
    order: int


class MilestoneUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    order: int | None = None
    status: str | None = None


class MilestoneResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    goal_id: UUID
    title: str
    description: str | None
    order: int
    status: str
    created_at: datetime