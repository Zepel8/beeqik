"use client";

import { useState } from "react";
import Image from "next/image";
import { whatsappLink } from "@/content/site";

const links = [
  { href: "#why", label: "Why Beeqik" },
  { href: "#suppliers", label: "Suppliers" },
  { href: "#how", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Beeqik home" className="flex items-center">
          <Image
            src="/logo-main.png"
            alt="Beeqik"
            width={408}
            height={127}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            data-cta="nav-whatsapp"
          >
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-content flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-slate-900 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              data-cta="nav-whatsapp-mobile"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
