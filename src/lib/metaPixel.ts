/**
 * Meta (Facebook / Instagram) Pixel.
 *
 * The base code in layout.tsx loads the pixel and tracks the first PageView;
 * MetaPixelPageView tracks the client-side navigations after that. The id is
 * public (visible in page source), so it's safe as a default — override with
 * NEXT_PUBLIC_META_PIXEL_ID.
 */
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1436266487837353";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaPageView() {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
}

/** Fire Meta's standard Lead event after a successful contact form submit. */
export function reportMetaLead() {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "Lead");
}
