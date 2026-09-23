const rates = [
  "30 Minute Lesson | $70",
  "45 Minute Lesson | $90",
  "60 Minute Lesson | $110",
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

        <ul className="mx-auto mt-12 max-w-xs space-y-4 font-display text-lg font-extrabold uppercase tracking-wide sm:text-xl">
          {rates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-16 space-y-4 text-sm text-black/70 sm:text-base">
          <p>4 lessons per month, scheduled weekly.</p>
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
