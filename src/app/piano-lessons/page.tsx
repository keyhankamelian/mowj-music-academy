import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImageBox from "@/components/ImageBox";
import Reveal from "@/components/Reveal";
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

        <div className="mt-12 space-y-5 font-display text-lg font-bold uppercase tracking-wide sm:text-xl">
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

        <div className="mt-12 space-y-2 font-display text-lg font-bold sm:text-xl">
          <p>Summer &amp; Fall 2026 Enrollment Open</p>
          <p>Limited Spots Available</p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="pill-btn">
            Get In Touch
          </Link>
        </div>
      </Hero>

      {/* Meet Your Instructor */}
      <Reveal>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Meet Your Instructor
              </h2>
              <p className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-black/80">
                Keyhan Kamelian
              </p>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-black/80 sm:text-lg">
                <p>
                  A classically trained pianist fluent in both jazz and
                  contemporary styles, Keyhan Kamelian graduated{" "}
                  <em>Magna Cum Laude</em> from Berklee College of Music in 2017,
                  where he studied under acclaimed pianists Alain Mallet, Yoko
                  Miwa, and Vadim Neselovskyi.
                </p>
                <p>
                  A Steinway Educational Partner who has mentored over 100
                  students, Keyhan brings both artistry and clarity to piano
                  education, helping players of all levels build mastery and
                  creative confidence.
                </p>
                <p>
                  His journey has taken him from Carnegie Hall and Boston
                  Symphony Hall to <em>Jimmy Kimmel Live</em>, performing with
                  artists including Sattar, Antonio Serrano, Boston Philharmonic,
                  Fiji Blue, Dhruv, and Mishaal Tamar to name a few.
                </p>
              </div>
            </div>

            {/* Portrait — replace with /images/instructor.jpg */}
            <div className="order-first md:order-last">
              <ImageBox
                src="/images/instructor.jpg"
                alt="Portrait of instructor Keyhan Kamelian"
                label="Portrait"
                className="mx-auto aspect-[4/5] w-full max-w-sm grayscale md:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
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
