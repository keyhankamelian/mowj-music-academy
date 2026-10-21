import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import LessonRates, {
  lessonLengthOptions,
} from "@/components/sections/LessonRates";
import Testimonials from "@/components/sections/Testimonials";

// Ad landing page for the in-studio Meta campaign: pricing up front and the
// lead form inline, so visitors never have to leave the page to sign up.
export const metadata: Metadata = {
  title: "In-Studio Piano Lessons in Echo Park | Mowj Music Academy",
  description:
    "Private, one-on-one piano lessons in Echo Park, Los Angeles, for all ages, levels and styles. Lessons from $80. Book your trial lesson for Fall 2026.",
};

const highlights = [
  {
    title: "Berklee-Trained",
    text: "Classical, jazz and contemporary training, graduated Magna Cum Laude from Berklee College of Music.",
  },
  {
    title: "Steinway Educational Partner",
    text: "Over 100 students mentored, from first-time beginners to adults returning to the keys.",
  },
  {
    title: "Built Around You",
    text: "Every lesson is shaped around your goals, the music you love and the way you learn.",
  },
];

export default function InStudioLessons() {
  return (
    <>
      <Hero>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80 sm:text-base">
          In-Studio &middot; Los Angeles
        </p>
        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          Private Piano Lessons in Echo Park
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
          One-on-one lessons for all ages, levels and styles, in a calm,
          light-filled studio. Whether you&rsquo;re just starting or coming
          back to the keys, you&rsquo;ll pick up right where you are.
        </p>
        <div className="mt-10 space-y-2 font-display text-xl font-bold sm:text-2xl">
          <p>Lessons from $80</p>
          <p>Fall 2026 &middot; Limited Spots Remain</p>
        </div>
        <div className="mt-12">
          <a href="#book" className="pill-btn">
            Book Your Trial Lesson
          </a>
        </div>
      </Hero>

      <Reveal>
        <section className="bg-white text-black">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 text-center md:grid-cols-3 md:pt-24">
            {highlights.map((item) => (
              <div key={item.title}>
                <h2 className="font-display text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-black/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <LessonRates showFormats={false} />
        <div className="bg-white pb-20 text-center md:pb-28">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
          >
            Book Your Trial Lesson
          </a>
        </div>
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <section id="book" className="scroll-mt-6 bg-white text-black">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          <div className="text-center">
            <h2 className="section-title font-display font-extrabold uppercase tracking-tight">
              Book Your Trial Lesson
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/80 sm:text-lg">
              Fill out the form and we&rsquo;ll reach out to schedule a
              complimentary intro call and your first lesson at the Echo Park
              studio.
            </p>
          </div>
          <div className="mt-12">
            <ContactForm
              lessonFormat="In-Studio (Echo Park)"
              lessonLengths={lessonLengthOptions}
            />
          </div>
        </div>
      </section>
    </>
  );
}
