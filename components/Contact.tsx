"use client";

import { useState } from "react";
import { SITE, whatsappLink, mailtoLink, telLink } from "@/content/site";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      const subject = `Sourcing inquiry from ${data.get("name") || "website"}`;
      const body =
        `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n` +
        `Company: ${data.get("company") || "-"}\n` +
        `Country: ${data.get("country") || "-"}\n\n` +
        `Message:\n${data.get("message")}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", `New sourcing inquiry from ${data.get("name") || "Beeqik website"}`);
      data.append("from_name", "Beeqik Website");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "inquiry_submit");
        }
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try WhatsApp or email.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try WhatsApp or email.");
    }
  }

  return (
    <section id="contact" className="border-t border-slate-100 bg-gradient-to-b from-white to-brand-50/40 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ready to source with confidence?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Contact Beeqik today and get started with trusted suppliers in China.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Direct contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-300 hover:bg-brand-50/40"
                    data-cta="contact-whatsapp"
                  >
                    <span>
                      <span className="block text-xs font-medium text-slate-400">WhatsApp / Tel</span>
                      <span className="font-semibold text-slate-800">{SITE.phoneDisplay}</span>
                    </span>
                    <span className="text-brand-600">→</span>
                  </a>
                </li>
                <li>
                  <a
                    href={mailtoLink()}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-300 hover:bg-brand-50/40"
                    data-cta="contact-email"
                  >
                    <span>
                      <span className="block text-xs font-medium text-slate-400">Email</span>
                      <span className="font-semibold text-slate-800">{SITE.email}</span>
                    </span>
                    <span className="text-brand-600">→</span>
                  </a>
                </li>
                <li>
                  <a
                    href={telLink}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-300 hover:bg-brand-50/40"
                    data-cta="contact-tel"
                  >
                    <span>
                      <span className="block text-xs font-medium text-slate-400">WeChat</span>
                      <span className="font-semibold text-slate-800">{SITE.wechat}</span>
                    </span>
                    <span className="text-brand-600">→</span>
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                We typically respond within one business day (GMT+8).
              </p>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Country" name="country" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">
                What are you sourcing?
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  placeholder="Product type, target quantity, target price, packaging needs, deadline…"
                />
              </label>
            </div>

            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              data-cta="form-submit"
            >
              {status === "submitting" ? "Sending…" : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Thanks — your inquiry has been received. We&apos;ll reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                {errorMsg}
              </p>
            )}
            {!WEB3FORMS_KEY && (
              <p className="mt-3 text-xs text-slate-400">
                Form will open your email client until the Web3Forms key is configured.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {required && <span className="text-rose-500"> *</span>}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </label>
  );
}
