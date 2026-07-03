import ImageBox from "@/components/ImageBox";

const features: { title: string; body: React.ReactNode }[] = [
  {
    title: "Customized Lessons",
    body: (
      <>
        Built around your goals, learning style, and favorite genres such as
        Jazz, Classical, Pop, &hellip;
      </>
    ),
  },
  {
    title: "Music Theory & Ear Training",
    body: (
      <>
        Understand harmony, rhythm, and notation so you can play, and{" "}
        <em>hear</em>, with confidence.
      </>
    ),
  },
  {
    title: "Technique & Repertoire",
    body: <>Build skill, agility, and control for any piece.</>,
  },
  {
    title: "Composition & Improvisation",
    body: <>Explore your creativity and find your own musical voice.</>,
  },
  {
    title: "Performance Skills",
    body: (
      <>
        Play comfortably for friends, record your music, or perform simply for
        the joy of it.
      </>
    ),
  },
];

export default function WhyMowj() {
  return (
    <section className="bg-white text-black">
      <div className="grid items-stretch md:grid-cols-2">
        {/* Photo — replace with /images/why-mowj.jpg */}
        <div className="relative min-h-[320px] md:min-h-[600px]">
          <ImageBox
            src="/images/why-mowj.png"
            alt="Student's hands playing an upright piano"
            label="Piano photo"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Copy */}
        <div className="px-6 py-16 text-center md:px-14 md:py-24">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Why Mowj?
          </h2>
          <div className="mx-auto mt-10 max-w-md space-y-7 text-base leading-relaxed text-black/80 sm:text-lg">
            {features.map((f) => (
              <p key={f.title}>
                <span className="font-display font-bold text-black">
                  {f.title}
                </span>{" "}
                &ndash; {f.body}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
