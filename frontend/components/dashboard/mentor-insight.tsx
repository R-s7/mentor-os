export function MentorInsight() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-bold text-black">
              M
            </div>

            <span className="text-sm font-medium">
              Mentor insight
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            You&apos;re making good progress, but your learning is
            currently spread across too many topics. Finish the
            authentication milestone before starting another backend
            concept. Once it&apos;s complete, I&apos;ll recommend the
            next step based on your assessment results.
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-600">
          AI analysis
        </span>
      </div>
    </div>
  );
}