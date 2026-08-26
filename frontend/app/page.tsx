const features = [
  {
    number: "01",
    title: "Turn goals into systems",
    description:
      "Tell MentorOS what you want to achieve. It breaks the goal into milestones, learning paths, and realistic daily actions.",
  },
  {
    number: "02",
    title: "Build with accountability",
    description:
      "Track what you actually completed. MentorOS adjusts your plan when you fall behind instead of pretending everything is fine.",
  },
  {
    number: "03",
    title: "Prove what you know",
    description:
      "Finish a topic and MentorOS can test you, identify weak areas, and feed the results back into your learning plan.",
  },
  {
    number: "04",
    title: "Turn progress into proof",
    description:
      "Your learning activity, projects, skills, and developer activity become an evolving technical portfolio.",
  },
];

const stats = [
  { value: "01", label: "AI Mentor" },
  { value: "∞", label: "Goals & Milestones" },
  { value: "24/7", label: "Progress Memory" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
            M
          </div>
          <span className="text-lg font-semibold tracking-tight">
            MentorOS
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#portfolio" className="transition hover:text-white">
            Portfolio
          </a>
        </div>

        <a
          href="/dashboard"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
        >
          Open MentorOS
        </a>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 text-center lg:px-8 lg:pb-32 lg:pt-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Your personal AI operating system
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            Stop planning your future.
            <span className="block text-zinc-500">
              Start building it.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            MentorOS is an AI mentor that turns ambitious goals into
            structured plans, daily action, measurable progress, and
            real proof of what you can build.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Enter MentorOS
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/5"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f12] shadow-2xl shadow-black/40">
          {/* Fake browser header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <div className="ml-4 h-7 flex-1 rounded-lg bg-white/[0.03]" />
          </div>

          <div className="grid min-h-[460px] lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-white/10 p-5 lg:block">
              <div className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                MentorOS
              </div>

              <div className="space-y-2 text-sm">
                {[
                  "Overview",
                  "Today's Tasks",
                  "Goals",
                  "Learning",
                  "Progress",
                  "Portfolio",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2.5 ${
                      index === 0
                        ? "bg-white/10 text-white"
                        : "text-zinc-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            {/* Dashboard preview */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-sm text-zinc-500">Wednesday, August 26</p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Good morning.
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Here&apos;s what matters today.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-xs text-zinc-600">Current streak</p>
                  <p className="mt-1 text-xl font-semibold">17 days</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Today&apos;s tasks</p>
                    <span className="text-xs text-zinc-600">3 / 5</span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Learn FastAPI", true],
                      ["Build authentication flow", true],
                      ["Solve 2 DSA problems", true],
                      ["Review PostgreSQL", false],
                      ["Update project notes", false],
                    ].map(([task, completed]) => (
                      <div
                        key={String(task)}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            completed
                              ? "border-white bg-white text-black"
                              : "border-white/20"
                          }`}
                        >
                          {completed ? "✓" : ""}
                        </div>

                        <span
                          className={
                            completed
                              ? "text-zinc-500 line-through"
                              : "text-zinc-300"
                          }
                        >
                          {String(task)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm font-medium">Active goals</p>

                  <div className="mt-6 space-y-6">
                    {[
                      ["AI Agents", "68%"],
                      ["Backend Engineering", "54%"],
                      ["Frontend", "42%"],
                    ].map(([goal, progress]) => (
                      <div key={goal}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-zinc-400">{goal}</span>
                          <span className="text-zinc-600">{progress}</span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-white"
                            style={{ width: progress }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-medium">Mentor insight</p>
                    <p className="mt-1 text-sm text-zinc-500">
                      You&apos;re progressing well. Focus on FastAPI
                      authentication before starting another topic.
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-xs text-zinc-600">
                    AI analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
            The system
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            More than a productivity app.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-500">
            MentorOS connects your goals, learning, execution, knowledge,
            and career activity into one system.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="bg-[#08090b] p-8 sm:p-10"
            >
              <p className="text-sm text-zinc-600">{feature.number}</p>

              <h3 className="mt-12 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                How it works
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Intent becomes action.
              </h2>
            </div>

            <div className="space-y-10">
              {[
                [
                  "01",
                  "Tell MentorOS what you want.",
                  "Describe a goal naturally. The system understands what you are trying to achieve.",
                ],
                [
                  "02",
                  "Get a strategic plan.",
                  "The AI turns your goal into milestones, learning topics, deadlines, and daily tasks.",
                ],
                [
                  "03",
                  "Do the work.",
                  "Complete tasks, log learning sessions, build projects, and keep moving.",
                ],
                [
                  "04",
                  "Get evaluated.",
                  "MentorOS tests your understanding and identifies where you actually need more work.",
                ],
                [
                  "05",
                  "Build your proof.",
                  "Your skills, projects, progress, and developer activity become part of your living portfolio.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-4 sm:grid-cols-[60px_1fr]"
                >
                  <span className="text-sm text-zinc-600">{number}</span>

                  <div>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f12] p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
              Living portfolio
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Don&apos;t just say you know it.
              <span className="block text-zinc-500">
                Show the evidence.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              MentorOS turns your actual work into a portfolio that can
              evolve with you. Skills are backed by projects, assessments,
              learning activity, and developer activity.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["327", "DSA problems"],
              ["184", "GitHub contributions"],
              ["17", "day streak"],
              ["07", "projects"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-32 text-center lg:px-8">
        <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          Build the system.
          <span className="block text-zinc-500">Become the proof.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-zinc-500">
          MentorOS is being built to make ambitious technical growth
          measurable, adaptive, and visible.
        </p>

        <a
          href="/dashboard"
          className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Start building
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>MentorOS — Personal AI Operating System</p>

          <p>Built in public.</p>
        </div>
      </footer>
    </main>
  );
}