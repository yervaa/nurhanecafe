const productIllustrationMap: Record<string, string> = {
  "m&m brownie cookie": "/images/m-and-m-brownie-cookie.svg",
  "birthday rice crispy treat": "/images/birthday-rice-crispy-treat.svg",
  "pistachio chocolate cookie": "/images/pistachio-chocolate-cookie.svg",
  "cookies & cream cookie": "/images/cookies-and-cream-cookie.svg",
  "classic chocolate chip cookie": "/images/chocolate-chip-cookie.svg",
  "s'mores cookie": "/images/smores-cookie.svg",
};

export function getIllustrationForProductName(name?: string) {
  if (!name) return "/images/product-placeholder.svg";

  return productIllustrationMap[name.trim().toLowerCase()] || "/images/product-placeholder.svg";
}
