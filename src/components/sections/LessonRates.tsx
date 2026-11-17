import type { Promo } from "@/lib/promo";

export type LessonFormat = "in-studio" | "online";

const LESSONS_PER_MONTH = 4;

/**
 * Regular per-lesson prices in USD. A missing price means that length isn't
 * offered in that format.
 */
export const rates: {
  minutes: number;
  length: string;
  prices: Partial<Record<LessonFormat, number>>;
}[] = [
  {
    minutes: 30,
    length: "30 Minute Lesson",
    prices: { "in-studio": 80, online: 80 },
  },
  {
    minutes: 45,
    length: "45 Minute Lesson",
    prices: { "in-studio": 105, online: 105 },
  },
  { minutes: 60, length: "60 Minute Lesson", prices: { "in-studio": 130 } },
];

const formatLabels: Record<LessonFormat, string> = {
  "in-studio": "In-Studio",
  online: "Online",
};

/**
 * Lesson rate options as "30 Minute Lesson ($80)" for the lead form, using
 * the online promo price where one applies.
 */
export function lessonLengthOptions(
  format: LessonFormat,
  onlinePromo?: Promo | null,
) {
  return rates
    .filter((rate) => rate.prices[format] !== undefined)
    .map((rate) => {
      const promoPrice =
        format === "online" ? onlinePromo?.prices[rate.minutes] : undefined;
      return promoPrice && onlinePromo
        ? `${rate.length} ($${promoPrice}, ${onlinePromo.label})`
        : `${rate.length} ($${rate.prices[format]})`;
    });
}

const priceClass =
  "font-display text-[1.375rem] font-semibold text-black/75 sm:text-[1.6rem]";
const labelClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-[13px]";

export default function LessonRates({
  format,
  onlinePromo,
}: {
  /** Show one format's rates (landing pages). Omit to show both. */
  format?: LessonFormat;
  /** Limited-time online prices, shown with the regular price struck through. */
  onlinePromo?: Promo | null;
}) {
  const formats: LessonFormat[] = format ? [format] : ["in-studio", "online"];
  const promo = formats.includes("online") ? onlinePromo : null;

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <h2 className="section-title font-display font-extrabold uppercase tracking-tight">
          Lesson Rates
        </h2>
        {!format && (
          <p className="mt-4 flex flex-col items-center gap-1 text-sm font-semibold uppercase tracking-wide text-black/70 sm:flex-row sm:justify-center sm:gap-0 sm:text-base">
            <span>Online (US &amp; Canada)</span>
            <span aria-hidden="true" className="hidden px-2 sm:inline">
              &middot;
            </span>
            <span>In-Studio (Echo Park, Los Angeles)</span>
          </p>
        )}
        {promo && format === "online" && (
          <p className="mt-6 inline-block rounded-full border border-black/20 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-black/75 sm:text-[13px]">
            {promo.label}
          </p>
        )}

        <ul className="arpeggio mx-auto mt-12 max-w-md space-y-8">
          {rates
            .filter((rate) => formats.some((f) => rate.prices[f] !== undefined))
            .map((rate) => {
              const offered = formats.filter(
                (f) => rate.prices[f] !== undefined,
              );
              const promoPrice = offered.includes("online")
                ? promo?.prices[rate.minutes]
                : undefined;
              // One price when every format shown costs the same.
              const samePrice =
                !promoPrice &&
                offered.every((f) => rate.prices[f] === rate.prices[offered[0]]);
              const shown = samePrice ? offered.slice(0, 1) : offered;
              return (
                <li key={rate.length}>
                  <div className="font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                    {rate.length}
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline justify-center gap-x-8 gap-y-1">
                    {shown.map((f) => {
                      const discounted =
                        f === "online" ? promoPrice : undefined;
                      return (
                        <div key={f} className="flex items-baseline gap-2.5">
                          {discounted && (
                            <s className="font-display text-lg font-semibold text-black/40 sm:text-xl">
                              ${rate.prices[f]}
                            </s>
                          )}
                          <span className={priceClass}>
                            ${discounted ?? rate.prices[f]}
                          </span>
                          <span className={labelClass}>
                            {format || (samePrice && offered.length > 1)
                              ? "per lesson"
                              : formatLabels[f]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
        </ul>

        <div className="mt-16 space-y-4 text-[15px] leading-relaxed text-black/75 sm:text-base">
          {promo && <p className="font-semibold text-black">{promo.terms}</p>}
          <p>
            {!format && promo && "Rates are per lesson. "}Lessons are billed
            monthly, based on {LESSONS_PER_MONTH} weekly lessons per month.
          </p>
          {!format && <p>60-minute lessons are available in-studio only.</p>}
          <p className="italic">All Rates in USD.</p>
        </div>
      </div>
    </section>
  );
}
