const LESSONS_PER_MONTH = 4;

export const rates = [
  { minutes: 30, length: "30 Minute Lesson", price: 80 },
  { minutes: 45, length: "45 Minute Lesson", price: 105 },
  { minutes: 60, length: "60 Minute Lesson", price: 130 },
];

/** Lesson rate options as "30 Minute Lesson ($80)" for the lead form. */
export function lessonLengthOptions(minutes?: number[]) {
  return rates
    .filter((rate) => !minutes || minutes.includes(rate.minutes))
    .map((rate) => `${rate.length} ($${rate.price})`);
}

export default function LessonRates({
  showFormats = true,
  minutes,
}: {
  /** List the lesson formats and format notes (off on single-format pages). */
  showFormats?: boolean;
  /** Only show these lesson lengths (defaults to all). */
  minutes?: number[];
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

        <ul className="mx-auto mt-12 max-w-md space-y-8">
          {rates
            .filter((rate) => !minutes || minutes.includes(rate.minutes))
            .map((rate) => (
              <li key={rate.length}>
                <div className="font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                  {rate.length}
                </div>
                <div className="mt-1.5 text-lg font-bold sm:text-xl">
                  ${rate.price} per lesson
                </div>
                <div className="mt-0.5 text-[15px] text-black/60 sm:text-base">
                  ${rate.price * LESSONS_PER_MONTH} billed monthly
                </div>
              </li>
            ))}
        </ul>

        <div className="mt-16 space-y-4 text-[15px] leading-relaxed text-black/75 sm:text-base">
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
