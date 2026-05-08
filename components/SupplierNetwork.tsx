import { PRODUCTS } from "@/content/products";
import ProductCard from "./ProductCard";

export default function SupplierNetwork() {
  return (
    <section id="suppliers" className="border-t border-slate-100 bg-slate-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted Supplier Network
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These product categories come from suppliers with whom we have established strong and
            reliable partnerships. You don&apos;t need to spend months testing factories from scratch.
          </p>
          <p className="mt-3 text-base text-slate-600">
            With Beeqik, you can immediately access stable quality, competitive pricing, and trusted
            manufacturing resources. Leave Alibaba behind and take your first smooth sourcing step
            with us today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
