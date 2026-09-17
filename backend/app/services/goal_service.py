from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.goal import Goal
from app.schemas.goal import GoalCreate, GoalUpdate


async def create_goal(
    db: AsyncSession,
    user_id: UUID,
    data: GoalCreate,
) -> Goal:
    goal = Goal(
        user_id=user_id,
        title=data.title,
        description=data.description,
        target_date=data.target_date,
    )

    db.add(goal)
    await db.commit()
    await db.refresh(goal)

    return goal


async def get_goals(
    db: AsyncSession,
    user_id: UUID,
) -> list[Goal]:
    result = await db.execute(
        select(Goal)
        .where(Goal.user_id == user_id)
        .order_by(Goal.created_at.desc())
    )

    return list(result.scalars().all())


async def get_goal(
    db: AsyncSession,
    user_id: UUID,
    goal_id: UUID,
) -> Goal | None:
    result = await db.execute(
        select(Goal).where(
            Goal.id == goal_id,
            Goal.user_id == user_id,
        )
    )

    return result.scalar_one_or_none()


async def update_goal(
    db: AsyncSession,
    goal: Goal,
    data: GoalUpdate,
) -> Goal:
    update_data = data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(goal, field, value)

    await db.commit()
    await db.refresh(goal)

    return goal


async def delete_goal(
    db: AsyncSession,
    goal: Goal,
) -> None:
    await db.delete(goal)
    await db.commit()