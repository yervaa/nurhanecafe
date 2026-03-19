import type { SiteContent } from "@/lib/types";

export const fallbackContent: SiteContent = {
  siteSettings: {
    brandName: "NurHane",
    tagline: "Luxury Cookies, Softly Made",
    email: "nurhanecafe@gmail.com",
    phone: "",
    location: "Based in New York, available for pickup and local dessert drops",
    availability: "Custom orders by request",
    pickupDeliveryNote: "Pickup and local delivery details are shared with each order drop.",
    orderSupportText: "Questions about pickup, delivery windows, or custom quantities? Reach out before ordering.",
    emailSignupPlaceholder: "Enter your email for fresh drops",
    lastUpdated: "2026-03-19T00:00:00.000Z",
    contactPrompts: [
      {
        title: "Events",
        description: "Cookie trays and dessert moments styled for showers, birthdays, and intimate gatherings.",
      },
      {
        title: "Gifting",
        description: "Elegant packaging and elevated flavors for thoughtful gifting without the corporate feel.",
      },
      {
        title: "Custom Orders",
        description: "Build around colors, textures, and flavor notes that still feel very NurHane.",
      },
    ],
  },
  hero: {
    eyebrow: "Small Batch Bakery",
    headline: "Signature cookies and baked treats, styled for gifting and everyday cravings.",
    subheadline:
      "NurHane serves soft-baked cookies, crisp treats, and desserts made to order with a warm, polished finish.",
    gallery: [
      { src: "/images/cookie-stack.svg", alt: "Stacked butter cookies on a plate" },
      { src: "/images/cookie-box.svg", alt: "Luxury cookie gift box with ribbon" },
    ],
  },
  about: {
    heading: "Warm, polished, and made to feel special.",
    body:
      "NurHane is built around signature cookies and baked treats with thoughtful flavor, clean presentation, and a gift-ready feel. Every box is meant to look beautiful, taste comforting, and arrive with intention.",
    image: {
      src: "/images/baker-portrait.svg",
      alt: "Illustrated bakery portrait for the founder story",
    },
    highlights: [
      {
        title: "Small Batch",
        description: "Every flavor is developed for softness, depth, and clean presentation.",
      },
      {
        title: "Gift-Ready",
        description: "Packaging and styling are built to feel elevated from the first glance.",
      },
      {
        title: "Expandable",
        description: "The menu structure supports cookies now and more dessert categories later.",
      },
    ],
  },
  products: [
    {
      _id: "mm-brownie-cookie",
      name: "M&M Brownie Cookie",
      slug: "mm-brownie-cookie",
      description: "Rich, fudgy brownie-style cookie loaded with colorful M&Ms.",
      price: "$6",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: true,
      category: "Cookies",
      servingNote: "Sold individually",
      availability: "available",
      pickupDeliveryNote: "Pickup window shared after checkout.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/m-and-m-brownie-cookie.svg",
        alt: "M&M brownie cookies styled on a plate",
      },
    },
    {
      _id: "birthday-rice-crispy-treat",
      name: "Birthday Rice Crispy Treat",
      slug: "birthday-rice-crispy-treat",
      description: "Soft, gooey marshmallow treat topped with white chocolate drizzle and sprinkles.",
      price: "$5",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: true,
      category: "Treats",
      servingNote: "Box of 2 available",
      availability: "available",
      pickupDeliveryNote: "Best enjoyed the day of pickup.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/birthday-rice-crispy-treat.svg",
        alt: "Birthday rice crispy treats inside an elegant bakery box",
      },
    },
    {
      _id: "pistachio-chocolate-cookie",
      name: "Pistachio Chocolate Cookie",
      slug: "pistachio-chocolate-cookie",
      description: "Buttery cookie infused with pistachio and finished with a smooth chocolate drizzle.",
      price: "$7",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: true,
      category: "Cookies",
      servingNote: "Best served slightly warm",
      availability: "available",
      pickupDeliveryNote: "Local delivery available on select weekends.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/pistachio-chocolate-cookie.svg",
        alt: "Pistachio chocolate cookies on an ivory tray",
      },
    },
    {
      _id: "cookies-and-cream-cookie",
      name: "Cookies & Cream Cookie",
      slug: "cookies-and-cream-cookie",
      description: "Thick vanilla cookie packed with Oreo chunks and creamy white chocolate.",
      price: "$6",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: false,
      category: "Cookies",
      servingNote: "Small batch",
      availability: "available",
      pickupDeliveryNote: "Pickup details confirmed after ordering.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/cookies-and-cream-cookie.svg",
        alt: "Cookies and cream cookies styled on a plate",
      },
    },
    {
      _id: "classic-chocolate-chip-cookie",
      name: "Classic Chocolate Chip Cookie",
      slug: "classic-chocolate-chip-cookie",
      description: "Warm, soft-baked cookie with rich chocolate chips in every bite.",
      price: "$5",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: false,
      category: "Cookies",
      servingNote: "Customer favorite",
      availability: "soldOut",
      pickupDeliveryNote: "Restock timing is announced with each drop.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/chocolate-chip-cookie.svg",
        alt: "Classic chocolate chip cookies on a serving plate",
      },
    },
    {
      _id: "smores-cookie",
      name: "S'mores Cookie",
      slug: "smores-cookie",
      description: "Graham-inspired cookie with melted chocolate and toasted marshmallow flavor.",
      price: "$6",
      orderLink: "https://buy.stripe.com/test_placeholder",
      featured: false,
      category: "Cookies",
      servingNote: "Weekend drop",
      availability: "comingSoon",
      pickupDeliveryNote: "Join Instagram for the next release date.",
      lastUpdated: "2026-03-19T00:00:00.000Z",
      image: {
        src: "/images/smores-cookie.svg",
        alt: "S'mores cookies with chocolate styling",
      },
    },
  ],
  featuredProducts: [],
  socialLinks: [
    {
      _key: "instagram",
      platform: "Instagram",
      url: "https://instagram.com/nurhanecafe",
    },
  ],
};

fallbackContent.featuredProducts = fallbackContent.products.filter((product) => product.featured).slice(0, 3);
fallbackContent.contentLastUpdated = "2026-03-19T00:00:00.000Z";
