"use client";

import Image from "next/image";
import Link from "next/link";

import { trackProductOrderClick } from "@/lib/analytics";
import { getIllustrationForProductName } from "@/lib/product-illustrations";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

const availabilityMeta = {
  available: {
    label: "Available",
    cta: "Order Now",
    badgeClass: "bg-[#f7f1e7] text-ink border border-gold/20",
  },
  soldOut: {
    label: "Sold Out",
    cta: "Sold Out",
    badgeClass: "bg-white/85 text-ink/55 border border-ink/10",
  },
  comingSoon: {
    label: "Coming Soon",
    cta: "Coming Soon",
    badgeClass: "bg-white/85 text-gold border border-gold/20",
  },
} as const;

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const availability = availabilityMeta[product.availability];
  const canOrder = product.availability === "available" && Boolean(product.orderLink);
  const hasPrice = Boolean(product.price);
  const hasFulfillmentNote = Boolean(product.pickupDeliveryNote);
  const mappedIllustration = getIllustrationForProductName(product.name);
  const imageSrc =
    product.image.src === "/images/product-placeholder.svg" ? mappedIllustration : product.image.src;
  const usesFallbackImage = imageSrc === "/images/product-placeholder.svg";
  const imageAspectClass = compact ? "aspect-[4/4]" : "aspect-[4/4]";

  return (
    <article className="group glass-card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold/20 hover:shadow-card">
      <div className="relative overflow-hidden transition-shadow duration-500 group-hover:shadow-[inset_0_-32px_72px_rgba(28,20,13,0.1)]">
        <Image
          src={imageSrc}
          alt={product.image.alt}
          width={900}
          height={900}
          className={`w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.05] ${imageAspectClass}`}
        />
        {usesFallbackImage ? (
          <div className="absolute inset-x-3 bottom-12 rounded-full bg-white/82 px-3 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/55 backdrop-blur sm:inset-x-4 sm:bottom-16 sm:py-2 sm:tracking-[0.26em]">
            Photo coming soon
          </div>
        ) : null}
        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          {product.category}
        </div>
        <div className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:bottom-4 sm:left-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.24em] ${availability.badgeClass}`}>
          {availability.label}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 max-w-[75%]">
            <h3 className="font-display text-[1.55rem] leading-none text-ink sm:text-[2rem]">{product.name}</h3>
            <p className="mt-2 text-[13px] leading-6 text-ink/70 sm:mt-3 sm:text-sm sm:leading-7">{product.description}</p>
          </div>
          {hasPrice ? (
            <div className="shrink-0 rounded-full border border-gold/20 bg-ivory px-3 py-1.5 text-[13px] font-semibold text-ink shadow-sm sm:px-4 sm:py-2 sm:text-sm">
              {product.price}
            </div>
          ) : (
            <div className="shrink-0 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
              Inquire
            </div>
          )}
        </div>
        <div className="mt-auto flex flex-col gap-3 pt-4 sm:gap-4 sm:pt-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink/40 sm:text-[11px] sm:tracking-[0.28em]">{product.servingNote}</p>
          {hasFulfillmentNote ? (
            <p className="rounded-[1.05rem] bg-ivory px-3.5 py-2.5 text-[13px] leading-5 text-ink/65 sm:rounded-[1.25rem] sm:px-4 sm:py-3 sm:text-sm sm:leading-6">{product.pickupDeliveryNote}</p>
          ) : null}
          {canOrder ? (
            <Link
              href={product.orderLink!}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackProductOrderClick(product)}
              className="button-primary w-full px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] sm:py-3 sm:text-xs sm:tracking-[0.25em]"
            >
              {availability.cta}
            </Link>
          ) : product.availability === "available" ? (
            <span className="inline-flex w-full items-center justify-center rounded-full border border-dashed border-ink/15 bg-white/60 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink/45 sm:py-3 sm:text-xs sm:tracking-[0.25em]">
              Order by inquiry
            </span>
          ) : (
            <span className="inline-flex w-full items-center justify-center rounded-full border border-ink/10 bg-white/60 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink/55 sm:py-3 sm:text-xs sm:tracking-[0.25em]">
              {availability.cta}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
