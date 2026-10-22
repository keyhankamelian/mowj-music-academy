import type { ReactNode } from "react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import LessonRates, {
  lessonLengthOptions,
} from "@/components/sections/LessonRates";
import MeetInstructor from "@/components/sections/MeetInstructor";
import Testimonials from "@/components/sections/Testimonials";
import WhyMowj from "@/components/sections/WhyMowj";

/**
 * Ad landing page (/lessons/*): pricing up front and the lead form inline, so
 * visitors never have to leave the page to sign up.
 */
type LessonLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: { title: string; text: string }[];
  /** Optional section shown between Why Mowj and the rates. */
  details?: ReactNode;
  /** Lesson lengths offered in this format, in minutes. */
  minutes?: number[];
  /** Saved with each lead, e.g. "In-Studio (Echo Park)". */
  lessonFormat: string;
  bookText: string;
};

const darkButton =
  "inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black";

export default function LessonLandingPage({
  eyebrow,
  title,
  intro,
  highlights,
  details,
  minutes,
  lessonFormat,
  bookText,
}: LessonLandingPageProps) {
  return (
    <>
      <Hero>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80 sm:text-base">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
          {intro}
        </p>
        <p className="mt-10 font-display text-xl font-bold sm:text-2xl">
          Fall 2026 &middot; Limited Spots Remain
        </p>
        <div className="mt-12">
          <a href="#book" className="pill-btn">
            Book Your Trial Lesson
          </a>
        </div>
      </Hero>

      <Reveal>
        <section className="bg-white text-black">
          <div className="arpeggio mx-auto grid max-w-6xl gap-12 px-6 pt-16 text-center md:grid-cols-3 md:pt-24">
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
        <MeetInstructor />
      </Reveal>

      <Reveal>
        <WhyMowj />
      </Reveal>

      {details && <Reveal>{details}</Reveal>}

      <Reveal>
        <LessonRates showFormats={false} minutes={minutes} />
        <div className="bg-white pb-20 text-center md:pb-28">
          <a href="#book" className={darkButton}>
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
              {bookText}
            </p>
          </div>
          <div className="mt-12">
            <ContactForm
              lessonFormat={lessonFormat}
              lessonLengths={lessonLengthOptions(minutes)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
