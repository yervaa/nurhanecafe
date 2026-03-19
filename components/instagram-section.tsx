import Link from "next/link";
import { Instagram } from "lucide-react";

import type { SocialLink } from "@/lib/types";

type InstagramSectionProps = {
  socialLinks: SocialLink[];
};

const socialProof = [
  "“The presentation feels like a gift before you even open the box.”",
  "“Soft centers, crisp edges, and somehow still elegant.”",
  "“The kind of cookies people ask about after every event.”",
];

export function InstagramSection({ socialLinks }: InstagramSectionProps) {
  const instagramLink = socialLinks.find((link) => link.platform === "Instagram");
  const instagramUrl = instagramLink?.url;
  const hasInstagram = Boolean(instagramUrl);

  return (
    <section className="section-shell py-12 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card px-5 py-7 sm:px-10 sm:py-10">
          <p className="section-kicker">Instagram</p>
          <h2 className="section-title mt-3">See the latest bakes, boxes, and behind-the-scenes moments.</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:mt-4 sm:text-base sm:leading-7">
            {hasInstagram
              ? "Follow NurHane for fresh drops, order updates, and bakery styling."
              : "NurHane shares fresh drops, order updates, and bakery styling through social and email."}
          </p>
          {hasInstagram ? (
            <Link href={instagramUrl!} target="_blank" rel="noreferrer" className="button-primary mt-5 sm:mt-8">
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </Link>
          ) : (
            <p className="mt-5 rounded-[1.25rem] bg-ivory px-4 py-3 text-[13px] leading-5 text-ink/65 sm:mt-8 sm:rounded-[1.5rem] sm:px-5 sm:py-4 sm:text-sm sm:leading-6">
              Social links are being refreshed. Check back soon or reach out by email for the latest menu updates.
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {socialProof.map((quote) => (
            <article key={quote} className="glass-card flex min-h-32 items-end p-4 transition duration-300 hover:-translate-y-1 sm:min-h-48 sm:p-5">
              <p className="font-display text-lg leading-tight text-ink/90 sm:text-2xl">{quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
