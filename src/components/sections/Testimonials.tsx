import WaveDivider from "@/components/WaveDivider";

const testimonials: { quote: string; name: string }[] = [
  {
    quote:
      "Keyhan is an excellent teacher. His lessons are varied and fun. He is patient, while at the same time holding his students to high standards. Keyhan’s lessons strike a great balance between the fundamentals, theory and technique, and creativity and musicality.",
    name: "Laura H.",
  },
  {
    quote:
      "I’m very happy I found Keyhan. He has been great with his instruction and supporting me as I learn. I look forward to my lessons every week.",
    name: "Scotty S.",
  },
  {
    quote:
      "I enjoy taking lessons with Keyhan. He is kind, patient and talented. He structures his lessons with a blend of things, depending on your personal goals. My piano playing is intermediate, learned classical then played pop songs by sight. I am excited to have exposure to other genres, and to better understand them!",
    name: "Cami C.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div aria-hidden className="hero-gradient absolute inset-0" />
      <WaveDivider position="top" className="z-10 h-16 sm:h-24 md:h-28" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
        <h2 className="text-center font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
          Student Testimonials
        </h2>

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="text-center">
              <blockquote className="text-base leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-semibold">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <WaveDivider position="bottom" className="z-10 h-16 sm:h-24 md:h-28" />
    </section>
  );
}
