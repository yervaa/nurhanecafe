import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { getSiteContent } from "@/lib/get-site-content";

function formatUpdatedAt(value?: string) {
  if (!value) return null;

  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return null;
  }
}

export const metadata = {
  title: "Order | NurHane",
  description: "Browse the NurHane cookie collection and order directly via Stripe payment links.",
};

export default async function OrderPage() {
  const content = await getSiteContent();
  const hasProducts = content.products.length > 0;
  const updatedAt = formatUpdatedAt(content.contentLastUpdated);
  const supportCopy = content.siteSettings.orderSupportText || `Questions? Email ${content.siteSettings.email}.`;
  const fulfillmentCopy = content.siteSettings.pickupDeliveryNote || content.siteSettings.availability;

  return (
    <div className="min-h-screen">
      <Header socialLinks={content.socialLinks} />
      <main className="section-shell pb-12 pt-6 sm:pb-16 sm:pt-14">
        <section className="glass-card relative overflow-hidden px-4 py-6 sm:px-10 sm:py-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-butter/20 to-transparent" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="section-kicker">Order Fresh</p>
            <h1 className="section-title mt-2.5 max-w-[12ch] mx-auto">Shop signature cookies and baked treats.</h1>
            <p className="mt-3 text-sm leading-6 text-ink/70 sm:mt-4 sm:text-base sm:leading-7">
              Choose a favorite, check availability, and order directly from the menu below.
            </p>
            <div className="mt-4 grid gap-2.5 text-left sm:mt-6 sm:grid-cols-2 sm:gap-3">
              <div className="rounded-[1.25rem] bg-white/70 px-4 py-3 sm:rounded-[1.5rem] sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[11px] sm:tracking-[0.3em]">Fulfillment</p>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/70 sm:mt-2 sm:text-sm sm:leading-6">{fulfillmentCopy}</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/70 px-4 py-3 sm:rounded-[1.5rem] sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[11px] sm:tracking-[0.3em]">Ordering Help</p>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/70 sm:mt-2 sm:text-sm sm:leading-6">{supportCopy}</p>
              </div>
            </div>
            {updatedAt ? (
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink/45 sm:mt-4 sm:text-xs sm:tracking-[0.24em]">Last updated {updatedAt}</p>
            ) : null}
          </div>
        </section>

        <section className="mt-5 sm:mt-10">
          {hasProducts ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:gap-5">
              {content.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="glass-card flex min-h-80 flex-col items-center justify-center px-6 py-12 text-center">
              <p className="font-display text-3xl text-ink">Fresh batch coming soon.</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-ink/70 sm:text-base">
                No products are live right now. Check back soon or email NurHane for the next drop.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer siteSettings={content.siteSettings} socialLinks={content.socialLinks} />
    </div>
  );
}
