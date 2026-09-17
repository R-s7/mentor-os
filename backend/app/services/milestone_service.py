from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.milestone import Milestone
from app.schemas.milestone import MilestoneCreate, MilestoneUpdate


async def create_milestone(
    db: AsyncSession,
    goal_id: UUID,
    data: MilestoneCreate,
) -> Milestone:
    milestone = Milestone(
        goal_id=goal_id,
        title=data.title,
        description=data.description,
        order=data.order,
    )

    db.add(milestone)
    await db.commit()
    await db.refresh(milestone)

    return milestone


async def get_milestones(
    db: AsyncSession,
    goal_id: UUID,
) -> list[Milestone]:
    result = await db.execute(
        select(Milestone)
        .where(Milestone.goal_id == goal_id)
        .order_by(Milestone.order.asc())
    )

    return list(result.scalars().all())


async def get_milestone(
    db: AsyncSession,
    milestone_id: UUID,
) -> Milestone | None:
    result = await db.execute(
        select(Milestone).where(Milestone.id == milestone_id)
    )

    return result.scalar_one_or_none()


async def update_milestone(
    db: AsyncSession,
    milestone: Milestone,
    data: MilestoneUpdate,
) -> Milestone:
    update_data = data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(milestone, field, value)

    await db.commit()
    await db.refresh(milestone)

    return milestone


async def delete_milestone(
    db: AsyncSession,
    milestone: Milestone,
) -> None:
    await db.delete(milestone)
    await db.commit()