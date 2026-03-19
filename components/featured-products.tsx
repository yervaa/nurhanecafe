import Link from "next/link";

import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const hasProducts = products.length > 0;

  return (
    <section className="section-shell py-12 sm:py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <div className="max-w-2xl">
          <p className="section-kicker">Featured Bakes</p>
          <h2 className="section-title mt-3">Signature cookies and customer favorites.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink/70 sm:mt-4 sm:text-base sm:leading-7">
            A quick look at the bakes people ask for first.
          </p>
        </div>
        {hasProducts ? (
          <Link href="/order" className="button-secondary">
            View Full Menu
          </Link>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:mt-8 sm:gap-5">
        {hasProducts ? (
          products.map((product) => <ProductCard key={product._id} product={product} compact />)
        ) : (
          <div className="glass-card col-span-full flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">
            <p className="font-display text-3xl text-ink">A fresh lineup is on the way.</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/70">
              The next featured bakes will appear here as soon as they are ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
