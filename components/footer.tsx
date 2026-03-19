import Link from "next/link";

import type { SiteSettings, SocialLink } from "@/lib/types";

type FooterProps = {
  siteSettings: SiteSettings;
  socialLinks: SocialLink[];
};

export function Footer({ siteSettings, socialLinks }: FooterProps) {
  const activeSocialLinks = socialLinks.filter((link) => link.url);

  return (
    <footer className="border-t border-ink/5 bg-white/60">
      <div className="section-shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-8">
        <div className="text-center sm:text-left">
          <p className="font-script text-[2rem] leading-none text-ink sm:text-4xl">{siteSettings.brandName}</p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-gold sm:mt-2 sm:text-xs sm:tracking-[0.35em]">{siteSettings.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-ink/70 sm:justify-end sm:gap-5 sm:text-sm">
          <Link href="/order" className="soft-link">
            Order
          </Link>
          {activeSocialLinks.map((link) => (
            <Link key={link._key} href={link.url || "#"} className="soft-link">
              {link.platform}
            </Link>
          ))}
          <Link href={`mailto:${siteSettings.email}`} className="soft-link">
            {siteSettings.email}
          </Link>
          {siteSettings.phone ? <span>{siteSettings.phone}</span> : null}
        </div>
      </div>
    </footer>
  );
}
