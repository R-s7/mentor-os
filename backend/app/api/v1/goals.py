from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.goal import GoalCreate, GoalResponse, GoalUpdate
from app.services import goal_service


router = APIRouter(
    prefix="/goals",
    tags=["Goals"],
)


# Temporary user ID.
# Authentication will replace this later.
DEMO_USER_ID = UUID("00000000-0000-0000-0000-000000000001")


@router.post(
    "",
    response_model=GoalResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_goal(
    data: GoalCreate,
    db: AsyncSession = Depends(get_db),
):
    return await goal_service.create_goal(
        db=db,
        user_id=DEMO_USER_ID,
        data=data,
    )


@router.get(
    "",
    response_model=list[GoalResponse],
)
async def list_goals(
    db: AsyncSession = Depends(get_db),
):
    return await goal_service.get_goals(
        db=db,
        user_id=DEMO_USER_ID,
    )


@router.get(
    "/{goal_id}",
    response_model=GoalResponse,
)
async def get_goal(
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

    return goal


@router.patch(
    "/{goal_id}",
    response_model=GoalResponse,
)
async def update_goal(
    goal_id: UUID,
    data: GoalUpdate,
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

    return await goal_service.update_goal(
        db=db,
        goal=goal,
        data=data,
    )


@router.delete(
    "/{goal_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_goal(
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

    await goal_service.delete_goal(
        db=db,
        goal=goal,
    )