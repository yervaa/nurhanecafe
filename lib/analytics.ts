import type { Product } from "@/lib/types";

export function trackProductOrderClick(product: Pick<Product, "_id" | "name" | "price">) {
  const payload = {
    event: "product_order_click",
    productId: product._id,
    productName: product.name,
    price: product.price,
  };

  // Placeholder for Vercel Analytics, Plausible, or a custom event pipeline.
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("nurhane:analytics", { detail: payload }));
  }
}
