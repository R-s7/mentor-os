export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#08090b]/90 px-6 backdrop-blur lg:px-10">
      <div>
        <p className="text-sm font-medium text-zinc-300">
          Personal Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-300 sm:block">
          ⌘ K
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm">
          R
        </button>
      </div>
    </header>
  );
}