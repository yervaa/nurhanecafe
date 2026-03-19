import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import type { SiteSettings, SocialLink } from "@/lib/types";

type ContactSectionProps = {
  siteSettings: SiteSettings;
  socialLinks: SocialLink[];
};

export function ContactSection({ siteSettings, socialLinks }: ContactSectionProps) {
  const instagramLink = socialLinks.find((link) => link.platform === "Instagram");
  const instagramUrl = instagramLink?.url;
  const hasInstagram = Boolean(instagramUrl);

  return (
    <section id="contact" className="section-shell py-12 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="glass-card px-5 py-7 sm:px-10 sm:py-10">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-3">Order inquiries, gifting, and desserts made to order.</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:mt-4 sm:text-base sm:leading-7">
            Reach out for cookie boxes, baked treats, event quantities, and bakery questions.
          </p>

          <div className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
            <Link href={`mailto:${siteSettings.email}`} className="glass-card flex items-center gap-3 px-4 py-3 transition hover:-translate-y-0.5 hover:border-gold/20 sm:gap-4 sm:px-5 sm:py-4">
              <Mail className="h-5 w-5 text-gold" />
              <span className="text-[13px] text-ink/80 sm:text-sm">{siteSettings.email}</span>
            </Link>
            {siteSettings.phone ? (
              <Link href={`tel:${siteSettings.phone}`} className="glass-card flex items-center gap-3 px-4 py-3 transition hover:-translate-y-0.5 hover:border-gold/20 sm:gap-4 sm:px-5 sm:py-4">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-[13px] text-ink/80 sm:text-sm">{siteSettings.phone}</span>
              </Link>
            ) : null}
            <div className="glass-card flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
              <MapPin className="h-5 w-5 text-gold" />
              <span className="text-[13px] text-ink/80 sm:text-sm">{siteSettings.location}</span>
            </div>
            <div className="glass-card flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
              <Phone className="h-5 w-5 text-gold" />
              <span className="text-[13px] text-ink/80 sm:text-sm">{siteSettings.availability}</span>
            </div>
            {siteSettings.pickupDeliveryNote ? (
              <div className="rounded-[1.25rem] bg-ivory px-4 py-3 sm:rounded-[1.5rem] sm:px-5 sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[11px] sm:tracking-[0.28em]">Pickup & Delivery</p>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-6">{siteSettings.pickupDeliveryNote}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="glass-card px-5 py-7 sm:px-10 sm:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="section-kicker">Find NurHane</p>
              <h3 className="mt-3 font-display text-[1.8rem] text-ink sm:text-4xl">Stay close to new drops and order windows.</h3>
            </div>
            {hasInstagram ? (
              <Link href={instagramUrl!} target="_blank" rel="noreferrer" className="button-secondary">
                Visit Instagram
              </Link>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/65 sm:mt-4 sm:leading-7">
            {hasInstagram
              ? "Instagram is the fastest place to catch restocks, previews, and drop dates."
              : "Email is the best way to ask about current availability, gifting, and custom requests."}
          </p>

          <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {siteSettings.contactPrompts.map((prompt) => (
              <div key={prompt.title} className="rounded-[1.35rem] bg-ivory px-4 py-4 sm:rounded-[1.75rem] sm:px-5 sm:py-6">
                <p className="font-display text-xl text-ink sm:text-2xl">{prompt.title}</p>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-6">{prompt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
