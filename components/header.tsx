import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

import type { SocialLink } from "@/lib/types";

type HeaderProps = {
  socialLinks: SocialLink[];
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header({ socialLinks }: HeaderProps) {
  const instagramLink = socialLinks.find((link) => link.platform === "Instagram");

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/85 backdrop-blur-xl">
      <div className="section-shell flex flex-wrap items-center justify-between gap-2 py-2.5 sm:gap-4 sm:py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-11 w-12 overflow-hidden rounded-[1.1rem] border border-ink/5 bg-ink p-1 shadow-card sm:h-14 sm:w-16 sm:rounded-2xl sm:p-1.5">
            {/* The supplied black-and-white logo stays prominent in the brand system. */}
            <Image src="/logo.png" alt="NurHane logo" fill sizes="64px" className="object-contain p-1.5" />
          </div>
          <div>
            <p className="font-script text-[2rem] leading-none text-ink sm:text-3xl">NurHane</p>
            <p className="text-[9px] uppercase tracking-[0.24em] text-gold sm:text-[10px] sm:tracking-[0.35em]">Boutique Cookies</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="order-3 flex w-full items-center gap-4 overflow-x-auto pb-0.5 pt-1 md:order-none md:w-auto md:justify-center md:gap-7 md:pb-0 md:pt-0">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="soft-link shrink-0 text-[13px] font-medium text-ink/80 sm:text-sm">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {instagramLink?.url ? (
            <Link
              href={instagramLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/80 transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-ivory sm:h-11 sm:w-11"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          ) : null}
          <Link href="/order" className="button-primary hidden sm:inline-flex">
            Shop Cookies
          </Link>
        </div>
      </div>
    </header>
  );
}
