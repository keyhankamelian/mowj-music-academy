const LESSONS_PER_MONTH = 4;

const rates = [
  { length: "30 Minute Lesson", price: 70 },
  { length: "45 Minute Lesson", price: 90 },
  { length: "60 Minute Lesson", price: 110 },
];

export default function LessonRates() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Lesson Rates
        </h2>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-black/60 sm:text-base">
          Online (US &amp; Canada) &middot; In-Studio (Echo Park, Los
          Angeles) &middot; In-Home (Los Angeles Metro)
        </p>

        <ul className="mx-auto mt-12 max-w-md space-y-8">
          {rates.map((rate) => (
            <li key={rate.length}>
              <div className="font-display text-lg font-extrabold uppercase tracking-wide sm:text-xl">
                {rate.length}
              </div>
              <div className="mt-1.5 text-base text-black/75 sm:text-lg">
                ${rate.price} per lesson
                <span className="px-2 text-black/50">&middot;</span>
                <span className="font-bold text-black">
                  ${rate.price * LESSONS_PER_MONTH} per month
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 space-y-4 text-sm text-black/70 sm:text-base">
          <p>
            Monthly price is based on {LESSONS_PER_MONTH} lessons per month,
            scheduled weekly.
          </p>
          <p>60-minute lessons are available in-studio and in-home only.</p>
          <p>
            A flat fee of $25 applies for in-home lessons beyond 3 miles of
            the studio location.
          </p>
          <p className="italic">All Rates in USD.</p>
        </div>
      </div>
    </section>
  );
}
