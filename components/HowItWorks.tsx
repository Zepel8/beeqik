const steps = [
  { n: "01", title: "Send your requirements", body: "Tell us the product, target price, MOQ, and any quality or packaging needs." },
  { n: "02", title: "Receive supplier options", body: "We match your request to vetted suppliers from our trusted network." },
  { n: "03", title: "Review samples", body: "Selected samples are usually prepared and shipped within one week." },
  { n: "04", title: "Confirm production", body: "Approve the sample, finalize specs, and we coordinate the production run." },
  { n: "05", title: "Arrange shipping", body: "We handle export packing, documentation, and freight forwarding for delivery." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-slate-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple &amp; Efficient Sourcing Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From your first message to the goods arriving — five clear steps.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300"
            >
              <span className="text-xs font-bold tracking-widest text-accent-600">{s.n}</span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
