import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Mowj Music Academy",
  description:
    "How Mowj Music Academy collects, uses and protects your information.",
};

const EFFECTIVE_DATE = "October 21, 2026";

const sectionTitle =
  "mt-12 font-display text-2xl font-extrabold uppercase tracking-wide";

export default function Privacy() {
  return (
    <>
      <Hero>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>
      </Hero>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-3xl px-6 py-16 text-base leading-relaxed text-black/80 sm:text-lg md:py-24 [&_a]:underline [&_a]:underline-offset-4 [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <p className="!mt-0 text-sm italic text-black/60">
            Effective {EFFECTIVE_DATE}
          </p>
          <p>
            Mowj Music Academy (&ldquo;we&rdquo;, &ldquo;us&rdquo;) offers
            private piano lessons online and in-studio in Los Angeles. This
            policy explains what information we collect through
            mowjmusicacademy.com, how we use it, and the choices you have.
          </p>

          <h2 className={sectionTitle}>Information You Give Us</h2>
          <p>
            When you fill out a contact or booking form, we collect what you
            enter: your name, email, phone number, musical level, when
            you&rsquo;d like to start, preferred lesson format or length, and
            any notes you add. If you
            arrive from an ad, we also record which campaign and ad led you to
            the form.
          </p>

          <h2 className={sectionTitle}>Information Collected Automatically</h2>
          <p>
            Like most websites, we use cookies and similar technologies to
            understand how the site is used and to measure and improve our
            advertising. These tools may collect your IP address, browser and
            device type, pages viewed, referring site, and actions such as
            submitting a form. We use:
          </p>
          <ul>
            <li>
              <strong>Google Analytics, Google Tag Manager and Google Ads</strong>{" "}
              to measure site traffic and the results of our Google ads.
            </li>
            <li>
              <strong>Meta Pixel</strong> (Facebook and Instagram) to measure
              the results of our Meta ads and to show our ads to people who
              have visited the site or are likely to be interested in lessons.
            </li>
          </ul>

          <h2 className={sectionTitle}>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiry and schedule lessons.</li>
            <li>To communicate with you about lessons you&rsquo;ve booked.</li>
            <li>To understand how visitors use the site and improve it.</li>
            <li>To measure and improve our advertising.</li>
          </ul>

          <h2 className={sectionTitle}>How We Share Information</h2>
          <p>
            We do not sell your personal information. We share it only with
            service providers that help us run the site and our business:
            Formspree (which delivers form submissions to us), Vercel (which
            hosts the site), Google and Meta (for the analytics and
            advertising described above). We may also disclose information if
            required by law.
          </p>
          <p>
            Sharing website activity with Google and Meta for ad measurement
            and targeting may be considered &ldquo;sharing&rdquo; for
            cross-context behavioral advertising under California law. You can
            opt out as described below.
          </p>

          <h2 className={sectionTitle}>Your Choices</h2>
          <ul>
            <li>
              Block or delete cookies in your browser settings. The site works
              without them.
            </li>
            <li>
              Manage ad personalization in your{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google ad settings
              </a>{" "}
              and your{" "}
              <a
                href="https://accountscenter.facebook.com/ad_preferences"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta ad preferences
              </a>
              .
            </li>
            <li>
              Opt out of Google Analytics with the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics opt-out add-on
              </a>
              .
            </li>
            <li>
              Ask us to access, correct or delete the information you&rsquo;ve
              sent us, or to opt out of sharing, by contacting us below.
              California residents have these rights under the CCPA/CPRA, and
              we will not discriminate against you for using them.
            </li>
          </ul>

          <h2 className={sectionTitle}>Children</h2>
          <p>
            We teach students of all ages, but lesson inquiries for minors
            should be submitted by a parent or guardian. We do not knowingly
            collect personal information online directly from children under
            13. If you believe a child has sent us information, contact us and
            we will delete it.
          </p>

          <h2 className={sectionTitle}>Retention &amp; Security</h2>
          <p>
            We keep inquiry information only as long as needed to respond,
            schedule and provide lessons, or as required by law. We use
            reasonable measures to protect it, though no method of
            transmission or storage is completely secure.
          </p>

          <h2 className={sectionTitle}>Changes</h2>
          <p>
            We may update this policy from time to time. The effective date
            above shows when it last changed.
          </p>

          <h2 className={sectionTitle}>Contact Us</h2>
          <p>
            Questions or requests about your information? Call us at{" "}
            <a href="tel:+13106947875">310-694-7875</a> or reach us through our{" "}
            <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
