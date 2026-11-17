/**
 * Limited-time pricing for online lessons. Pages that show it set
 * `revalidate`, so the promo disappears on its own within the hour after it
 * ends; no redeploy needed.
 */
export type Promo = {
  label: string;
  /** Promo price per lesson, keyed by lesson length in minutes. */
  prices: Record<number, number>;
  /** Terms shown under the rates. */
  terms: string;
  endsAt: Date;
};

const ONLINE_PROMO: Promo = {
  label: "Winter Special",
  prices: { 30: 60, 45: 85 },
  terms:
    "Winter Special: online lessons are $60 (30 min) and $85 (45 min) through December 31. Enroll by then and keep this rate for as long as you stay enrolled.",
  endsAt: new Date("2027-01-01T00:00:00-08:00"),
};

/** The online-lesson promo, or null once it has ended. */
export function activeOnlinePromo(now = new Date()): Promo | null {
  return now < ONLINE_PROMO.endsAt ? ONLINE_PROMO : null;
}
