type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({
  label,
  value,
  detail,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <p className="mt-4 text-2xl font-semibold tracking-tight">
        {value}
      </p>

      <p className="mt-2 text-xs text-zinc-600">
        {detail}
      </p>
    </div>
  );
}