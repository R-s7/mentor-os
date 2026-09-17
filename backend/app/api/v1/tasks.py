from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.task import TaskCreate, TaskResponse, TaskUpdate
from app.services import milestone_service, task_service


router = APIRouter(
    tags=["Tasks"],
)


@router.post(
    "/milestones/{milestone_id}/tasks",
    response_model=TaskResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_task(
    milestone_id: UUID,
    data: TaskCreate,
    db: AsyncSession = Depends(get_db),
):
    milestone = await milestone_service.get_milestone(
        db=db,
        milestone_id=milestone_id,
    )

    if milestone is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Milestone not found",
        )

    return await task_service.create_task(
        db=db,
        milestone_id=milestone_id,
        data=data,
    )


@router.get(
    "/milestones/{milestone_id}/tasks",
    response_model=list[TaskResponse],
)
async def list_tasks(
    milestone_id: UUID,
    db: AsyncSession = Depends(get_db),
):
    milestone = await milestone_service.get_milestone(
        db=db,
        milestone_id=milestone_id,
    )

    if milestone is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Milestone not found",
        )

    return await task_service.get_tasks(
        db=db,
        milestone_id=milestone_id,
    )


@router.patch(
    "/tasks/{task_id}",
    response_model=TaskResponse,
)
async def update_task(
    task_id: UUID,
    data: TaskUpdate,
    db: AsyncSession = Depends(get_db),
):
    task = await task_service.get_task(
        db=db,
        task_id=task_id,
    )

    if task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )

    return await task_service.update_task(
        db=db,
        task=task,
        data=data,
    )


@router.delete(
    "/tasks/{task_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_task(
    task_id: UUID,
    db: AsyncSession = Depends(get_db),
):
    task = await task_service.get_task(
        db=db,
        task_id=task_id,
    )

    if task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )

    await task_service.delete_task(
        db=db,
        task=task,
    )