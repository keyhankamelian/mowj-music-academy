const columns: { title: string; items: string[] }[] = [
  {
    title: "Online (US & Canada)",
    items: ["30 Minute Lesson | $75", "45 Minute Lesson | $100"],
  },
  {
    title: "In-Studio (Echo Park, Los Angeles)",
    items: [
      "30 Minute Lesson | $75",
      "45 Minute Lesson | $100",
      "60 Minute Lesson | $130",
    ],
  },
];

export default function LessonRates() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Lesson Rates
        </h2>

        <div className="mx-auto mt-14 grid max-w-3xl gap-12 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight underline decoration-2 underline-offset-4 sm:text-2xl">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-4 font-display text-sm font-semibold uppercase tracking-wide text-black/80 sm:text-base">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-4 text-sm text-black/70 sm:text-base">
          <p>4 lessons per month, scheduled weekly.</p>
          <p className="italic">All Rates in USD.</p>
        </div>
      </div>
    </section>
  );
}
