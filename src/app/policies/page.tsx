import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Studio Policies | Mowj Music Academy",
  description:
    "Tuition, billing, cancellation, make-up and scheduling policies for private piano lessons at Mowj Music Academy.",
};

const EFFECTIVE_DATE = "October 22, 2026";

const policies: { title: string; items: ReactNode[] }[] = [
  {
    title: "Tuition & Billing",
    items: [
      "Lessons are month-to-month and billed monthly, with one lesson per week at your chosen lesson length.",
      "Monthly tuition covers 4 weekly lessons. Lessons continue in months with a fifth week, and the fifth lesson is billed at your regular per-lesson rate.",
      "Payment is due on the 1st of each month by Zelle, Venmo or PayPal. Payment details are shared when you enroll.",
      "Your first month is prorated from your start date. There is no registration fee or deposit.",
      "If payment is more than 7 days late, lessons are paused until the balance is settled, and your weekly time slot may be offered to another student.",
    ],
  },
  {
    title: "Cancellations & Make-Up Lessons",
    items: [
      "Cancel at least 48 hours before your lesson to receive a make-up lesson.",
      "Cancellations with less than 48 hours’ notice, and missed lessons without notice, are not made up.",
      "Make-up lessons must be scheduled and completed within 4 weeks of the missed lesson, and can take place online or in-studio.",
      "Feeling unwell? Switch that week’s in-studio lesson to an online lesson at your regular time. Just let us know as early as you can.",
      "If your instructor needs to cancel, the lesson will be rescheduled at a time that works for you.",
    ],
  },
  {
    title: "Scheduling & Holidays",
    items: [
      "Each student keeps a regular weekly day and time, reserved for them throughout enrollment.",
      "Permanent schedule changes can be requested with at least 2 weeks’ notice, subject to availability.",
      "The studio is open year-round, including most holidays. Any time off is coordinated with you in advance, and affected lessons are rescheduled.",
    ],
  },
  {
    title: "Punctuality",
    items: [
      "Lessons start and end at the scheduled time. Time missed due to a late arrival can’t be added to the end of the lesson.",
      "If your instructor is late, the missed time will be made up.",
      "For online lessons, if a connection problem on our end cuts a lesson short, the missed time will be made up.",
    ],
  },
  {
    title: "Withdrawing From Lessons",
    items: [
      "There’s no long-term commitment. To withdraw, give 30 days’ notice by text or email.",
      "Tuition already paid isn’t refundable, but any lessons remaining within your notice period can still be taken or made up.",
    ],
  },
  {
    title: "What You’ll Need",
    items: [
      "An acoustic piano, or an 88-key keyboard with full-size weighted keys, kept tuned and in good working order.",
      "A metronome (a free app works well) and short fingernails for proper technique.",
      "Books and materials are purchased by the student or family. We’ll recommend exactly what to get.",
      "Not sure which keyboard to buy? Ask before you purchase and we’ll point you to a good fit for your budget.",
    ],
  },
  {
    title: "Online Lessons",
    items: [
      "Lessons take place on Zoom, from a laptop, tablet or phone, with a stable internet connection.",
      "Position your camera so your hands and the keyboard are clearly visible. A second camera angle is a bonus.",
      "Choose a quiet space and join a few minutes early to check your audio and video.",
    ],
  },
  {
    title: "Parents & Younger Students",
    items: [
      "Parents are welcome to sit in on lessons, in-studio or online.",
      "Progress comes from practice between lessons. For beginners, 15–20 minutes a day with a consistent routine makes a real difference.",
      "Encouragement goes a long way. We’ll keep you updated on assignments and progress so you can support practice at home.",
    ],
  },
];

const sectionTitle =
  "mt-12 font-display text-2xl font-extrabold uppercase tracking-wide print:mt-6 print:text-lg";

export default function Policies() {
  return (
    <>
      <div className="print:hidden">
        <Hero>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Studio Policies
          </h1>
        </Hero>
      </div>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-3xl px-6 py-16 text-base leading-relaxed text-black/80 sm:text-lg md:py-24 print:max-w-none print:px-0 print:py-0 print:text-[11pt] [&_a]:underline [&_a]:underline-offset-4 [&_li]:mt-2 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          {/* Print-only heading for the PDF copy */}
          <div className="hidden text-center print:block">
            <p className="font-display text-3xl font-extrabold uppercase tracking-wide text-black">
              Mowj Music Academy
            </p>
            <p className="mt-1 font-display text-xl font-bold uppercase tracking-wide">
              Studio Policies
            </p>
          </div>

          <p className="text-sm italic text-black/60 print:mt-4 print:text-center">
            Effective {EFFECTIVE_DATE}
          </p>
          <p className="mt-4">
            These policies keep lessons consistent and fair for every student.
            They apply to both online and in-studio lessons.
          </p>

          {policies.map((section) => (
            <div key={section.title} className="print:break-inside-avoid">
              <h2 className={sectionTitle}>{section.title}</h2>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className={sectionTitle}>Questions</h2>
          <p className="mt-4">
            Call us at <a href="tel:+13106947875">310-694-7875</a> or reach us
            through our{" "}
            <Link href="/contact" className="print:no-underline">
              contact form
            </Link>
            <span className="hidden print:inline"> at mowjmusicacademy.com</span>
            .
          </p>
          <p className="mt-6 font-semibold text-black">
            By enrolling in lessons, you agree to these policies.
          </p>
        </div>
      </section>
    </>
  );
}
