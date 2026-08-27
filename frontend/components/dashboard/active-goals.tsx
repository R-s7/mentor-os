const goals = [
  {
    name: "AI Agents",
    progress: 68,
    milestone: "Build first tool-using agent",
  },
  {
    name: "Backend Engineering",
    progress: 54,
    milestone: "Complete FastAPI + PostgreSQL",
  },
  {
    name: "Frontend Engineering",
    progress: 42,
    milestone: "Build production dashboard",
  },
];

export function ActiveGoals() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div>
        <h2 className="font-medium">
          Active goals
        </h2>

        <p className="mt-1 text-sm text-zinc-600">
          What you are currently building toward.
        </p>
      </div>

      <div className="mt-7 space-y-7">
        {goals.map((goal) => (
          <div key={goal.name}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-300">
                {goal.name}
              </span>

              <span className="text-sm text-zinc-600">
                {goal.progress}%
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${goal.progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-zinc-700">
              Next: {goal.milestone}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full rounded-lg border border-white/10 py-2.5 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
        View all goals
      </button>
    </div>
  );
}