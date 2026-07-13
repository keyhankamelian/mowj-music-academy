import type { ReactNode } from "react";
import WaveDivider from "./WaveDivider";

/**
 * Dark, moody hero section with a curved white "wave" divider at the bottom.
 * Background photo: public/images/hero.jpg, with a dark overlay so the
 * white text stays readable.
 */
export default function Hero({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      {/* Background */}
      <div aria-hidden className="hero-gradient absolute inset-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div aria-hidden className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-52 pb-44 text-center sm:pt-56">
        {children}
      </div>

      <WaveDivider position="bottom" className="h-16 sm:h-24 md:h-28" />
    </section>
  );
}
