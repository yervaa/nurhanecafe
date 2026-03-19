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
      <div className="section-shell py-2.5 sm:py-4">
        <div className="grid grid-cols-[44px_1fr_44px] items-center gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <Link href="/" aria-label="NurHane home" className="justify-self-start sm:flex sm:items-center sm:gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-[1rem] border border-ink/5 bg-ink p-1 shadow-card sm:h-14 sm:w-16 sm:rounded-2xl sm:p-1.5">
              {/* The supplied black-and-white logo stays prominent in the brand system. */}
              <Image src="/logo.png" alt="NurHane logo" fill sizes="64px" className="object-contain p-1.5" />
            </div>
          </Link>

          <div className="min-w-0 text-center sm:ml-0 sm:text-left">
            <Link href="/" className="inline-block">
              <p className="font-script text-[1.8rem] leading-none text-ink sm:text-3xl">NurHane</p>
            </Link>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.22em] text-gold sm:mt-1 sm:text-[10px] sm:tracking-[0.35em]">
              Boutique Cookies
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
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
            ) : (
              <div className="h-9 w-9 sm:hidden" aria-hidden="true" />
            )}
            <Link href="/order" className="button-primary hidden sm:inline-flex">
              Shop Cookies
            </Link>
          </div>
        </div>

        <div className="mt-2.5 sm:hidden">
          <Link href="/order" className="inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition duration-300 hover:bg-gold hover:text-ink">
            Shop Cookies
          </Link>
        </div>

        <nav aria-label="Primary" className="mt-2.5 flex w-full items-center gap-3 overflow-x-auto pb-0.5 text-nowrap sm:mt-0 sm:order-none sm:w-auto sm:justify-center sm:gap-7 sm:pb-0 sm:pt-0">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="soft-link shrink-0 text-[12px] font-medium text-ink/80 sm:text-sm">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
