from fastapi import FastAPI

from app.api.v1.health import router as health_router
from app.api.v1.goals import router as goals_router

from app.api.v1.milestones import router as milestones_router
from app.api.v1.tasks import router as tasks_router


app = FastAPI(
    title="MentorOS API",
    description="Backend API for the MentorOS personal AI operating system.",
    version="0.1.0",
)

app.include_router(
    goals_router,
    prefix="/api/v1",
)


app.include_router(
    health_router,
    prefix="/api/v1",
)

app.include_router(
    milestones_router,
    prefix="/api/v1",
)

app.include_router(
    tasks_router,
    prefix="/api/v1",
)


@app.get("/")
def root():
    return {
        "message": "MentorOS API is running",
    }