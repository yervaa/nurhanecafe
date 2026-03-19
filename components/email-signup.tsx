import type { SiteSettings } from "@/lib/types";

type EmailSignupProps = {
  siteSettings: SiteSettings;
};

export function EmailSignup({ siteSettings }: EmailSignupProps) {
  return (
    <section className="section-shell pb-14 pt-2 sm:pb-20 sm:pt-4">
      <div className="overflow-hidden rounded-[2rem] bg-ink px-5 py-7 text-cream shadow-soft sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="section-kicker text-butter">Email Signup</p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[0.98] sm:text-5xl">
              Be first to hear about fresh drops and gift box releases.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/75 sm:mt-4 sm:text-base sm:leading-7">
              Seasonal flavors, restocks, and bakery updates, sent occasionally.
            </p>
          </div>

          <form className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur sm:rounded-[1.75rem] sm:p-5" action="#">
            <label htmlFor="email" className="text-sm font-medium text-cream/90">
              Join the list
            </label>
            <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:flex-row sm:gap-3">
              <input
                id="email"
                type="email"
                placeholder={siteSettings.emailSignupPlaceholder}
                suppressHydrationWarning
                className="h-11 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-cream placeholder:text-cream/45 focus:border-butter focus:outline-none sm:h-12 sm:px-5"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="rounded-full bg-butter px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-[#ffe28d] sm:px-6 sm:py-3"
              >
                Notify Me
              </button>
            </div>
            <p className="mt-2.5 text-xs leading-5 text-cream/55 sm:mt-3 sm:leading-6">No spam. Just warm updates and new cookie releases.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
