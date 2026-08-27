import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { StatCard } from "@/components/dashboard/stat-card";
import { TodayTasks } from "@/components/dashboard/today-tasks";
import { ActiveGoals } from "@/components/dashboard/active-goals";
import { MentorInsight } from "@/components/dashboard/mentor-insight";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#08090b] text-white">
      <Sidebar />

      <div className="lg:pl-64">
        <Topbar />

        <main className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div>
              <p className="text-sm text-zinc-500">
                Wednesday, August 26
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Good afternoon.
              </h1>

              <p className="mt-2 text-sm text-zinc-500">
                Let&apos;s make today count.
              </p>
            </div>

            {/* Stats */}
            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Tasks completed"
                value="7 / 10"
                detail="+2 from yesterday"
              />

              <StatCard
                label="Current streak"
                value="17 days"
                detail="Personal best: 23 days"
              />

              <StatCard
                label="Learning time"
                value="2h 40m"
                detail="Target: 3 hours"
              />

              <StatCard
                label="Overall progress"
                value="68%"
                detail="Across active goals"
              />
            </section>

            {/* Main grid */}
            <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
              <TodayTasks />
              <ActiveGoals />
            </section>

            {/* AI insight */}
            <section className="mt-6">
              <MentorInsight />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}