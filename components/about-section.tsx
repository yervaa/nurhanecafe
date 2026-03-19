import Image from "next/image";

import type { AboutContent } from "@/lib/types";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell py-12 sm:py-20">
      <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] sm:gap-8">
        <div className="glass-card overflow-hidden p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={960}
              height={1100}
              className="aspect-[4/4.3] h-full w-full object-cover sm:aspect-[4/5]"
            />
          </div>
        </div>
        <div className="glass-card px-5 py-7 sm:px-10 sm:py-10">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title mt-3">{about.heading}</h2>
          <p className="mt-3 text-[14px] leading-6 text-ink/75 sm:mt-5 sm:text-lg sm:leading-8">{about.body}</p>
          <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-3 sm:gap-4">
            {about.highlights.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] bg-ivory px-4 py-4 sm:rounded-[1.5rem] sm:px-5 sm:py-5">
                <p className="font-display text-xl text-ink sm:text-2xl">{item.title}</p>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
