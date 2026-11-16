import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import MeetInstructor from "@/components/sections/MeetInstructor";
import WhyMowj from "@/components/sections/WhyMowj";
import OnlineLessons from "@/components/sections/OnlineLessons";
import LessonRates from "@/components/sections/LessonRates";
import Testimonials from "@/components/sections/Testimonials";
import Media from "@/components/sections/Media";

export const metadata: Metadata = {
  title: "Piano Lessons | Mowj Music Academy",
  description:
    "Private piano lessons in all styles, for all levels and ages — online (US & Canada) and in-studio (Echo Park, Los Angeles). Meet your instructor, Keyhan Kamelian.",
};

export default function PianoLessons() {
  return (
    <>
      <Hero>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          Private Piano Lessons
        </h1>

        <div className="mt-12 space-y-5 text-balance font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
          <p>Online (US &amp; Canada)</p>
          <p>In-Studio (Echo Park, Los Angeles)</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-8 text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
          <p>
            Mowj Music Academy offers private piano lessons in all styles,
            catered to all levels and ages, personalized to your goals and
            learner profile.
          </p>
          <p>
            Whether you&rsquo;re just starting or getting back to the keys, you
            will receive customized, one-on-one instruction designed to help you
            progress faster towards your goals.
          </p>
        </div>

        <div className="mt-12 space-y-2 font-display text-xl font-bold sm:text-2xl">
          <p>Fall 2026 Enrollment Open</p>
          <p>Limited Spots Available</p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="pill-btn">
            Get In Touch
          </Link>
        </div>
      </Hero>

      <Reveal>
        <MeetInstructor />
      </Reveal>

      <Reveal>
        <WhyMowj />
      </Reveal>
      <Reveal>
        <OnlineLessons />
      </Reveal>
      <Reveal>
        <LessonRates />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Media />
      </Reveal>
    </>
  );
}
