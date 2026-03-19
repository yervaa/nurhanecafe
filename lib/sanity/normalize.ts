import type { AboutContent, HeroContent, Product, SiteContent, SocialLink, SiteSettings } from "@/lib/types";
import { fallbackContent } from "@/lib/fallback-content";
import { hasSanityConfig } from "@/lib/sanity/env";
import { urlForImage } from "@/lib/sanity/image";

type SanityImage = {
  asset?: unknown;
  alt?: string;
};

type RawProduct = {
  _id: string;
  _updatedAt?: string;
  name?: string;
  slug?: { current?: string };
  description?: string;
  price?: string;
  stripePaymentLink?: string;
  featured?: boolean;
  category?: string;
  servingNote?: string;
  availability?: Product["availability"];
  pickupDeliveryNote?: string;
  image?: SanityImage;
};

type RawSiteContent = {
  siteSettings?: {
    _updatedAt?: string;
    brandName?: string;
    tagline?: string;
    email?: string;
    phone?: string;
    location?: string;
    availability?: string;
    pickupDeliveryNote?: string;
    orderSupportText?: string;
    emailSignupPlaceholder?: string;
    contactPrompts?: SiteSettings["contactPrompts"];
  };
  hero?: {
    _updatedAt?: string;
    eyebrow?: string;
    headline?: string;
    subheadline?: string;
    gallery?: SanityImage[];
  };
  about?: {
    _updatedAt?: string;
    heading?: string;
    body?: string;
    image?: SanityImage;
    highlights?: AboutContent["highlights"];
  };
  products?: RawProduct[];
  socialLinks?: {
    _updatedAt?: string;
    links?: SocialLink[];
  };
};

const defaultProductImage = {
  src: "/images/product-placeholder.svg",
  alt: "NurHane bakery item",
};

function cleanString(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function imageOrFallback(image: SanityImage | undefined, fallback: { src: string; alt: string }) {
  if (!image?.asset || !hasSanityConfig()) {
    return fallback;
  }

  return {
    src: urlForImage(image as never).width(1200).height(1200).fit("crop").url(),
    alt: image.alt || fallback.alt,
  };
}

function normalizeSiteSettings(raw?: RawSiteContent["siteSettings"]): SiteSettings {
  return {
    brandName: cleanString(raw?.brandName) || fallbackContent.siteSettings.brandName,
    tagline: cleanString(raw?.tagline) || fallbackContent.siteSettings.tagline,
    email: cleanString(raw?.email) || fallbackContent.siteSettings.email,
    phone: cleanString(raw?.phone),
    location: cleanString(raw?.location) || fallbackContent.siteSettings.location,
    availability: cleanString(raw?.availability) || fallbackContent.siteSettings.availability,
    pickupDeliveryNote: cleanString(raw?.pickupDeliveryNote) || fallbackContent.siteSettings.pickupDeliveryNote,
    orderSupportText: cleanString(raw?.orderSupportText) || fallbackContent.siteSettings.orderSupportText,
    emailSignupPlaceholder:
      cleanString(raw?.emailSignupPlaceholder) || fallbackContent.siteSettings.emailSignupPlaceholder,
    contactPrompts:
      raw?.contactPrompts?.length ? raw.contactPrompts : fallbackContent.siteSettings.contactPrompts,
    lastUpdated: raw?._updatedAt || fallbackContent.siteSettings.lastUpdated,
  };
}

function normalizeHero(raw?: RawSiteContent["hero"]): HeroContent {
  const fallbackHero = fallbackContent.hero;
  const gallery = raw?.gallery?.length
    ? raw.gallery.slice(0, 2).map((image, index) => imageOrFallback(image, fallbackHero.gallery[index] || fallbackHero.gallery[0]))
    : fallbackHero.gallery;

  return {
    eyebrow: cleanString(raw?.eyebrow) || fallbackHero.eyebrow,
    headline: cleanString(raw?.headline) || fallbackHero.headline,
    subheadline: cleanString(raw?.subheadline) || fallbackHero.subheadline,
    gallery,
  };
}

function normalizeAbout(raw?: RawSiteContent["about"]): AboutContent {
  const fallbackAbout = fallbackContent.about;

  return {
    heading: cleanString(raw?.heading) || fallbackAbout.heading,
    body: cleanString(raw?.body) || fallbackAbout.body,
    image: imageOrFallback(raw?.image, fallbackAbout.image),
    highlights: raw?.highlights?.length ? raw.highlights : fallbackAbout.highlights,
  };
}

function normalizeProducts(rawProducts?: RawProduct[]): Product[] {
  if (rawProducts === undefined) {
    return fallbackContent.products;
  }

  if (rawProducts.length === 0) {
    return [];
  }

  return rawProducts.map((product, index) => {
    const fallbackProduct = fallbackContent.products[index % fallbackContent.products.length];
    const productName = cleanString(product.name) || "Seasonal Bake";
    const category = cleanString(product.category) || "Bakery";
    const description = cleanString(product.description) || "A small-batch NurHane bake with soft texture and elegant finish.";
    const servingNote = cleanString(product.servingNote) || "Small batch";

    return {
      _id: product._id,
      name: productName,
      slug: cleanString(product.slug?.current) || product._id || fallbackProduct.slug,
      description,
      price: cleanString(product.price) || "",
      orderLink: cleanString(product.stripePaymentLink),
      featured: Boolean(product.featured),
      category,
      servingNote,
      availability: product.availability || fallbackProduct.availability,
      pickupDeliveryNote: cleanString(product.pickupDeliveryNote),
      lastUpdated: product._updatedAt || fallbackProduct.lastUpdated,
      image: imageOrFallback(product.image, {
        src: defaultProductImage.src,
        alt: productName,
      }),
    };
  });
}

function getContentLastUpdated(raw?: RawSiteContent, products: Product[] = []) {
  const candidates = [
    raw?.siteSettings?._updatedAt,
    raw?.hero?._updatedAt,
    raw?.about?._updatedAt,
    raw?.socialLinks?._updatedAt,
    ...products.map((product) => product.lastUpdated),
    fallbackContent.contentLastUpdated,
  ].filter(Boolean) as string[];

  return candidates.sort().at(-1);
}

export function normalizeSiteContent(raw?: RawSiteContent): SiteContent {
  const products = normalizeProducts(raw?.products);

  return {
    siteSettings: normalizeSiteSettings(raw?.siteSettings),
    hero: normalizeHero(raw?.hero),
    about: normalizeAbout(raw?.about),
    products,
    featuredProducts: products.filter((product) => product.featured).slice(0, 3),
    socialLinks: raw?.socialLinks ? raw.socialLinks.links || [] : fallbackContent.socialLinks,
    contentLastUpdated: getContentLastUpdated(raw, products),
  };
}
