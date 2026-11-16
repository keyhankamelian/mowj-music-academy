/**
 * Limited-time pricing for online lessons. Pages that show it set
 * `revalidate`, so the promo disappears on its own within the hour after it
 * ends; no redeploy needed.
 */
export type Promo = {
  label: string;
  /** Promo price per lesson, keyed by lesson length in minutes. */
  prices: Record<number, number>;
  /** Terms shown under the rates where promo prices are shown. */
  terms: string;
  /** Short description for pages that list all formats together. */
  note: string;
  endsAt: Date;
};

const ONLINE_PROMO: Promo = {
  label: "Winter Special",
  prices: { 30: 50, 45: 75 },
  terms: "Winter special pricing applies to online lessons through December 31.",
  note: "Winter special: online lessons are $50 (30 min) and $75 (45 min) through December 31.",
  endsAt: new Date("2027-01-01T00:00:00-08:00"),
};

/** The online-lesson promo, or null once it has ended. */
export function activeOnlinePromo(now = new Date()): Promo | null {
  return now < ONLINE_PROMO.endsAt ? ONLINE_PROMO : null;
}
