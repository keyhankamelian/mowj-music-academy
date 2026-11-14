import type { Promo } from "@/lib/promo";

const LESSONS_PER_MONTH = 4;

export const rates = [
  { minutes: 30, length: "30 Minute Lesson", price: 80 },
  { minutes: 45, length: "45 Minute Lesson", price: 105 },
  { minutes: 60, length: "60 Minute Lesson", price: 130 },
];

/**
 * Lesson rate options as "30 Minute Lesson ($80)" for the lead form, using
 * promo prices where a promo applies.
 */
export function lessonLengthOptions(minutes?: number[], promo?: Promo | null) {
  return rates
    .filter((rate) => !minutes || minutes.includes(rate.minutes))
    .map((rate) => {
      const promoPrice = promo?.prices[rate.minutes];
      return promoPrice
        ? `${rate.length} ($${promoPrice}, ${promo.label})`
        : `${rate.length} ($${rate.price})`;
    });
}

export default function LessonRates({
  showFormats = true,
  minutes,
  promo,
  promoNote,
}: {
  /** List the lesson formats and format notes (off on single-format pages). */
  showFormats?: boolean;
  /** Only show these lesson lengths (defaults to all). */
  minutes?: number[];
  /** Show promo prices, with the regular price struck through. */
  promo?: Promo | null;
  /** A highlighted line about a promo that applies to only some formats. */
  promoNote?: string | null;
}) {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <h2 className="section-title font-display font-extrabold uppercase tracking-tight">
          Lesson Rates
        </h2>
        {showFormats && (
          <p className="mt-4 flex flex-col items-center gap-1 text-sm font-semibold uppercase tracking-wide text-black/70 sm:flex-row sm:justify-center sm:gap-0 sm:text-base">
            <span>Online (US &amp; Canada)</span>
            <span aria-hidden="true" className="hidden px-2 sm:inline">
              &middot;
            </span>
            <span>In-Studio (Echo Park, Los Angeles)</span>
          </p>
        )}
        {promo && (
          <p className="mt-6 inline-block rounded-full border border-black/20 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-black/75 sm:text-[13px]">
            {promo.label}
          </p>
        )}

        <ul className="arpeggio mx-auto mt-12 max-w-md space-y-8">
          {rates
            .filter((rate) => !minutes || minutes.includes(rate.minutes))
            .map((rate) => {
              const promoPrice = promo?.prices[rate.minutes];
              return (
                <li key={rate.length}>
                  <div className="font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                    {rate.length}
                  </div>
                  <div className="mt-1 flex items-baseline justify-center gap-2.5">
                    {promoPrice && (
                      <s className="font-display text-lg font-semibold text-black/40 sm:text-xl">
                        ${rate.price}
                      </s>
                    )}
                    <span className="font-display text-[1.375rem] font-semibold text-black/75 sm:text-[1.6rem]">
                      ${promoPrice ?? rate.price}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-[13px]">
                      per lesson
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>

        <div className="mt-16 space-y-4 text-[15px] leading-relaxed text-black/75 sm:text-base">
          {promoNote && (
            <p className="font-semibold text-black">{promoNote}</p>
          )}
          {promo && <p>{promo.terms}</p>}
          <p>
            Lessons are billed monthly, based on {LESSONS_PER_MONTH} weekly
            lessons per month.
          </p>
          {showFormats && (
            <p>60-minute lessons are available in-studio only.</p>
          )}
          <p className="italic">All Rates in USD.</p>
        </div>
      </div>
    </section>
  );
}
