const advantages = [
  {
    title: "Proven Supplier Network",
    body: "Years of relationships with reliable suppliers across multiple product categories. No more spending months testing unknown factories from scratch.",
    icon: "M3 7l9-4 9 4-9 4-9-4Zm0 6l9 4 9-4M3 17l9 4 9-4",
  },
  {
    title: "Fast Sample Delivery",
    body: "Selected samples can usually be prepared and shipped within one week so you can validate quality quickly.",
    icon: "M13 2 3 14h7l-1 8 10-12h-7l1-8Z",
  },
  {
    title: "Better Supplier Evaluation",
    body: "Suppliers are evaluated on product quality, communication efficiency, pricing, production capability, and delivery reliability.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Custom Packaging Support",
    body: "Packaging design, packaging supplier sourcing, and brand customization — all coordinated through one point of contact.",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
  },
];

const story = [
  "Identify trustworthy factories quickly",
  "Negotiate fair pricing",
  "Reduce sourcing risks",
  "Solve supplier communication problems",
  "Speed up the sourcing process",
];

export default function WhyBeeqik() {
  return (
    <section id="why" className="border-t border-slate-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Work With Beeqik Instead of Alibaba?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beeqik is built on direct factory experience — not just a directory listing.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">From the founder</p>
              <p className="mt-3 text-slate-700">
                Years ago, I was on the other side of the table — an Alibaba seller. I spent
                countless hours negotiating with buyers, handling factory production issues, and
                navigating the platform&apos;s pricing and trading rules.
              </p>
              <p className="mt-3 text-slate-700">
                Later, I worked as a sourcing agent helping overseas clients find reliable
                suppliers and manage production more efficiently. Those experiences taught me how to:
              </p>
              <ul className="mt-4 space-y-2">
                {story.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-slate-700">
                    <svg className="mt-1 h-4 w-4 flex-none text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.7 3.7 6.8-6.8a1 1 0 0 1 1.5.1Z" />
                    </svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={a.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-slate-700">
              With Beeqik, you are not simply hiring a sourcing agent. You are gaining direct
              access to experience, trusted supplier relationships, and a sourcing process
              designed to save time, reduce risks, and improve efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
