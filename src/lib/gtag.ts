/**
 * Google Tag Manager + Google tag + Google Ads conversion tracking.
 *
 * GTM_ID is the Google Tag Manager container (GTM-XXXXXXX). Tags configured
 * inside the GTM UI fire through it. The id is public (visible in page source),
 * so it's safe as a default — override with NEXT_PUBLIC_GTM_ID.
 *
 * GOOGLE_TAG_ID is the base "Google tag" (e.g. G-XXXXXXX) loaded on every page
 * in layout.tsx. GOOGLE_ADS_CONVERSION_ID/LABEL identify the specific "Submit
 * lead form" conversion action (e.g. AW-XXXXXXXXX/yyyyyyyyyyyyyyyyy) — this can
 * differ from GOOGLE_TAG_ID and doesn't need its own gtag('config', ...) call;
 * gtag.js resolves the destination from `send_to` directly.
 *
 * NOTE: if a Google Ads conversion tag for the same action is also configured
 * inside the GTM container, conversions would be counted twice — the direct
 * reportContactFormConversion() call below and the GTM-fired tag. Keep the
 * conversion in exactly one place.
 *
 * The Google/Ads values read from env vars (set on Vercel) so tracking simply
 * no-ops until they're configured.
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T249BN7V";
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
