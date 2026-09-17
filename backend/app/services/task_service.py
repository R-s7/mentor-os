from datetime import datetime, timezone
from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.task import Task
from app.schemas.task import TaskCreate, TaskUpdate


async def create_task(
    db: AsyncSession,
    milestone_id: UUID,
    data: TaskCreate,
) -> Task:
    task = Task(
        milestone_id=milestone_id,
        title=data.title,
        description=data.description,
        priority=data.priority,
        due_date=data.due_date,
    )

    db.add(task)
    await db.commit()
    await db.refresh(task)

    return task


async def get_tasks(
    db: AsyncSession,
    milestone_id: UUID,
) -> list[Task]:
    result = await db.execute(
        select(Task)
        .where(Task.milestone_id == milestone_id)
        .order_by(Task.priority.asc(), Task.created_at.asc())
    )

    return list(result.scalars().all())


async def get_task(
    db: AsyncSession,
    task_id: UUID,
) -> Task | None:
    result = await db.execute(
        select(Task).where(Task.id == task_id)
    )

    return result.scalar_one_or_none()


async def update_task(
    db: AsyncSession,
    task: Task,
    data: TaskUpdate,
) -> Task:
    update_data = data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(task, field, value)

    if update_data.get("status") == "completed":
        task.completed_at = datetime.now(timezone.utc)

    elif update_data.get("status") and update_data["status"] != "completed":
        task.completed_at = None

    await db.commit()
    await db.refresh(task)

    return task


async def delete_task(
    db: AsyncSession,
    task: Task,
) -> None:
    await db.delete(task)
    await db.commit()