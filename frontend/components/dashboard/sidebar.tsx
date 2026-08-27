const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
  },
  {
    label: "Today's Tasks",
    href: "/dashboard/tasks",
  },
  {
    label: "Goals",
    href: "/dashboard/goals",
  },
  {
    label: "Learning",
    href: "/dashboard/learning",
  },
  {
    label: "Tests",
    href: "/dashboard/tests",
  },
  {
    label: "Progress",
    href: "/dashboard/progress",
  },
  {
    label: "Portfolio",
    href: "/dashboard/portfolio",
  },
  {
    label: "Jobs",
    href: "/dashboard/jobs",
  },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-[#08090b] lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
            M
          </div>

          <span className="font-semibold tracking-tight">
            MentorOS
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                index === 0
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-3">
          <a
            href="/dashboard/settings"
            className="block rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-white/[0.04] hover:text-zinc-300"
          >
            Settings
          </a>
        </div>
      </div>
    </aside>
  );
}