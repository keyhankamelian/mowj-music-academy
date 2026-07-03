import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero>
      <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
        Mowj Music Academy
      </h1>

      <p className="mt-16 font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">
        Private Piano Lessons
      </p>

      <div className="mt-10 space-y-5 font-display text-lg font-bold uppercase tracking-wide sm:text-xl">
        <p>Online (US &amp; Canada)</p>
        <p>In-Studio (Echo Park, Los Angeles)</p>
      </div>

      <p className="mx-auto mt-14 max-w-xl text-base font-semibold text-white/90 sm:text-lg">
        Summer &amp; Fall 2026 Enrollment Now Open. Limited Slots Remain
      </p>

      <div className="mt-12">
        <Link href="/piano-lessons" className="pill-btn">
          Learn More
        </Link>
      </div>
    </Hero>
  );
}
