import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Mowj Music Academy",
  description:
    "Book a complimentary intro call with Mowj Music Academy to start private piano lessons — online (US & Canada) or in-studio (Echo Park, Los Angeles).",
};

export default function Contact() {
  return (
    <>
      <Hero>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          Contact
        </h1>
      </Hero>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
              Begin Your Piano Journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/80 sm:text-lg">
              Fill out the form below to schedule your complimentary intro call.
              We&rsquo;ll go over your goals, lesson details and set up a trial
              lesson to kickstart your musical journey.
            </p>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
