import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { HeroContent, SiteSettings } from "@/lib/types";

type HeroProps = {
  hero: HeroContent;
  siteSettings: SiteSettings;
};

export function Hero({ hero, siteSettings }: HeroProps) {
  return (
    <section className="section-shell relative pt-4 sm:pt-10">
      <div className="grid items-center gap-5 overflow-hidden rounded-[2rem] bg-hero-glow px-4 py-5 shadow-soft sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-16">
        <div className="relative z-10 max-w-2xl animate-rise">
          <div className="eyebrow-pill">{hero.eyebrow}</div>
          <div className="mt-3 flex items-center gap-3 sm:mt-5 sm:gap-5">
            <div className="rounded-[1.35rem] bg-ink p-2.5 shadow-card sm:rounded-[2rem] sm:p-3">
              <Image
                src="/logo.png"
                alt={`${siteSettings.brandName} logo`}
                width={150}
                height={150}
                priority
                className="h-14 w-14 object-contain sm:h-28 sm:w-28"
              />
            </div>
            <div className="min-w-0">
              <p className="font-script text-[2.2rem] leading-none text-ink sm:text-7xl">{siteSettings.brandName}</p>
              <p className="mt-1 max-w-[12rem] text-[10px] uppercase tracking-[0.2em] text-gold sm:mt-2 sm:max-w-xs sm:text-xs sm:tracking-[0.35em]">{siteSettings.tagline}</p>
            </div>
          </div>
          <h1 className="mt-4 max-w-[12ch] font-display text-[2.15rem] font-semibold leading-[0.98] text-ink sm:mt-6 sm:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-xl text-[14px] leading-6 text-ink/72 sm:mt-4 sm:text-lg sm:leading-8">{hero.subheadline}</p>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
            <div className="eyebrow-pill border-ink/10 bg-ivory/80 text-ink/75">Cookies</div>
            <div className="eyebrow-pill border-ink/10 bg-ivory/80 text-ink/75">Baked Treats</div>
            <div className="eyebrow-pill border-ink/10 bg-ivory/80 text-ink/75">Desserts Made to Order</div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4">
            <Link href="/order" className="button-primary">
              Shop Cookies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/#about" className="button-secondary">
              About Me
            </Link>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="glass-card relative overflow-hidden p-2.5 sm:p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-butter/25 via-transparent to-gold/15" />
            <div className="relative grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 sm:gap-3">
              {hero.gallery.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-[1.75rem] bg-ivory">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={640}
                    className="aspect-[4/3.15] h-full w-full object-cover transition duration-500 hover:scale-105 sm:aspect-[4/4.2]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
