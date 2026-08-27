const tasks = [
  {
    title: "Complete FastAPI authentication",
    category: "Backend",
    duration: "60 min",
    completed: true,
  },
  {
    title: "Study JWT and refresh tokens",
    category: "Backend",
    duration: "45 min",
    completed: true,
  },
  {
    title: "Solve 2 DSA problems",
    category: "DSA",
    duration: "60 min",
    completed: true,
  },
  {
    title: "Build dashboard components",
    category: "Frontend",
    duration: "90 min",
    completed: false,
  },
  {
    title: "Review PostgreSQL indexing",
    category: "Database",
    duration: "30 min",
    completed: false,
  },
];

export function TodayTasks() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-medium">
            Today&apos;s tasks
          </h2>

          <p className="mt-1 text-sm text-zinc-600">
            Your highest-priority actions.
          </p>
        </div>

        <span className="text-sm text-zinc-500">
          3 / 5
        </span>
      </div>

      <div className="mt-6 divide-y divide-white/5">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-4 py-4"
          >
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                task.completed
                  ? "border-white bg-white text-black"
                  : "border-white/20"
              }`}
            >
              {task.completed ? "✓" : ""}
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`text-sm ${
                  task.completed
                    ? "text-zinc-600 line-through"
                    : "text-zinc-300"
                }`}
              >
                {task.title}
              </p>

              <div className="mt-1 flex gap-3 text-xs text-zinc-700">
                <span>{task.category}</span>
                <span>{task.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}