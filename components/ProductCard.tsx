import type { Product } from "@/content/products";

export default function ProductCard({ p }: { p: Product }) {
  const initials = p.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md">
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient}`}>
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="text-5xl font-bold tracking-tight opacity-90">{initials}</span>
            <span className="mt-2 px-4 text-center text-sm font-medium opacity-90">{p.name}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{p.description}</p>

        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-xs text-slate-500">
          <div>
            <dt className="font-medium text-slate-400">Location</dt>
            <dd className="text-slate-700">{p.location}</dd>
          </div>
          {p.moq && (
            <div>
              <dt className="font-medium text-slate-400">MOQ</dt>
              <dd className="text-slate-700">{p.moq}</dd>
            </div>
          )}
          {p.leadTime && (
            <div>
              <dt className="font-medium text-slate-400">Lead time</dt>
              <dd className="text-slate-700">{p.leadTime}</dd>
            </div>
          )}
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium text-brand-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
