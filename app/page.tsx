import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EmailSignup } from "@/components/email-signup";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstagramSection } from "@/components/instagram-section";
import { getSiteContent } from "@/lib/get-site-content";

export default async function HomePage() {
  const content = await getSiteContent();

  return (
    <div className="relative overflow-hidden">
      <Header socialLinks={content.socialLinks} />
      <main>
        <Hero hero={content.hero} siteSettings={content.siteSettings} />
        <FeaturedProducts products={content.featuredProducts} />
        <AboutSection about={content.about} />
        <InstagramSection socialLinks={content.socialLinks} />
        <ContactSection siteSettings={content.siteSettings} socialLinks={content.socialLinks} />
        <EmailSignup siteSettings={content.siteSettings} />
      </main>
      <Footer siteSettings={content.siteSettings} socialLinks={content.socialLinks} />
    </div>
  );
}
