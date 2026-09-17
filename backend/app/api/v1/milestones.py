from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.milestone import (
    MilestoneCreate,
    MilestoneResponse,
    MilestoneUpdate,
)
from app.services import goal_service, milestone_service


router = APIRouter(
    tags=["Milestones"],
)


DEMO_USER_ID = UUID("00000000-0000-0000-0000-000000000001")


@router.post(
    "/goals/{goal_id}/milestones",
    response_model=MilestoneResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_milestone(
    goal_id: UUID,
    data: MilestoneCreate,
    db: AsyncSession = Depends(get_db),
):
    goal = await goal_service.get_goal(
        db=db,
        user_id=DEMO_USER_ID,
        goal_id=goal_id,
    )

    if goal is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Goal not found",
        )

    return await milestone_service.create_milestone(
        db=db,
        goal_id=goal_id,
        data=data,
    )


@router.get(
    "/goals/{goal_id}/milestones",
    response_model=list[MilestoneResponse],
)
async def list_milestones(
    goal_id: UUID,
    db: AsyncSession = Depends(get_db),
):
    goal = await goal_service.get_goal(
        db=db,
        user_id=DEMO_USER_ID,
        goal_id=goal_id,
    )

    if goal is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Goal not found",
        )

    return await milestone_service.get_milestones(
        db=db,
        goal_id=goal_id,
    )


@router.patch(
    "/milestones/{milestone_id}",
    response_model=MilestoneResponse,
)
async def update_milestone(
    milestone_id: UUID,
    data: MilestoneUpdate,
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

    return await milestone_service.update_milestone(
        db=db,
        milestone=milestone,
        data=data,
    )


@router.delete(
    "/milestones/{milestone_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_milestone(
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

    await milestone_service.delete_milestone(
        db=db,
        milestone=milestone,
    )