import Image from "next/image";
import { SITE, whatsappLink, mailtoLink } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center">
            <Image
              src="/logo-footer.png"
              alt="Beeqik"
              width={357}
              height={85}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Reliable China sourcing partner. Verified suppliers, fast samples, custom packaging.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp · {SITE.phoneDisplay}
          </a>
          <a href={mailtoLink()} className="hover:text-white">
            {SITE.email}
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
