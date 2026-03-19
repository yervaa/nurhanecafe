export type ImageAsset = {
  src: string;
  alt: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  gallery: ImageAsset[];
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type AboutContent = {
  heading: string;
  body: string;
  image: ImageAsset;
  highlights: AboutHighlight[];
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  orderLink?: string;
  featured: boolean;
  category: string;
  servingNote: string;
  availability: "available" | "soldOut" | "comingSoon";
  pickupDeliveryNote?: string;
  lastUpdated?: string;
  image: ImageAsset;
};

export type SocialLink = {
  _key: string;
  platform: string;
  url?: string;
};

export type ContactPrompt = {
  title: string;
  description: string;
};

export type SiteSettings = {
  brandName: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  availability: string;
  pickupDeliveryNote?: string;
  orderSupportText?: string;
  emailSignupPlaceholder: string;
  contactPrompts: ContactPrompt[];
  lastUpdated?: string;
};

export type SiteContent = {
  siteSettings: SiteSettings;
  hero: HeroContent;
  about: AboutContent;
  products: Product[];
  featuredProducts: Product[];
  socialLinks: SocialLink[];
  contentLastUpdated?: string;
};
