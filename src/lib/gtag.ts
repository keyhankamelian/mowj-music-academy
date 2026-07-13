/**
 * Google tag + Google Ads conversion tracking.
 *
 * GOOGLE_TAG_ID is the base "Google tag" (e.g. G-XXXXXXX) loaded on every page
 * in layout.tsx. GOOGLE_ADS_CONVERSION_ID/LABEL identify the specific "Submit
 * lead form" conversion action (e.g. AW-XXXXXXXXX/yyyyyyyyyyyyyyyyy) — this can
 * differ from GOOGLE_TAG_ID and doesn't need its own gtag('config', ...) call;
 * gtag.js resolves the destination from `send_to` directly.
 *
 * All read from env vars (set on Vercel/Netlify) so nothing is hardcoded and
 * tracking simply no-ops until they're configured.
 */
export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_CONVERSION_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire the "contact form submitted" conversion event for Google Ads. */
export function reportContactFormConversion() {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!GOOGLE_ADS_CONVERSION_ID || !GOOGLE_ADS_CONVERSION_LABEL) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
}
