import { whatsappLink } from "@/content/site";

const highlights = [
  "Verified Suppliers",
  "Fast Sample Delivery",
  "Competitive Pricing",
  "Custom Packaging Support",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute inset-x-0 -top-24 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_top,_rgba(47,142,255,0.18),_transparent_60%)]" />
      <div className="mx-auto max-w-content px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Your Trusted Sourcing Partner in China
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Reliable China Sourcing <span className="text-brand-600">Without the Alibaba Headache</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Work directly with verified suppliers, receive fast samples, and source with confidence
            through Beeqik&apos;s trusted factory network.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:w-auto"
              data-cta="hero-quote"
            >
              Get a Free Quote
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-brand-400 hover:text-brand-700 sm:w-auto"
              data-cta="hero-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.5h-.01a9.66 9.66 0 0 1-4.93-1.35l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.65 9.65 0 0 1-1.48-5.12c0-5.34 4.35-9.69 9.7-9.69a9.62 9.62 0 0 1 6.85 2.84 9.62 9.62 0 0 1 2.84 6.85c0 5.34-4.35 9.76-9.6 9.76Zm5.5-7.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51l-.58-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.71.3 1.27.49 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.71.25-1.31.18-1.43-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Contact on WhatsApp
            </a>
          </div>

          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
