/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Logo from "./Logo";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/piano-lessons", label: "Piano Lessons" },
  { href: "/contact", label: "Contact" },
];

const associations = [
  {
    src: "/images/associations/berklee.png",
    alt: "Berklee College of Music",
    className: "h-[72px]",
  },
  {
    src: "/images/associations/steinway.png",
    alt: "Steinway & Sons — Teacher & Educational Partner",
    className: "h-[104px]",
  },
  {
    src: "/images/associations/trinity.png",
    alt: "Trinity Guildhall — part of Trinity College London",
    className: "h-[62px]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-black/15" />

        {/* Call to action + associations */}
        <div className="py-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
          >
            Get In Touch
          </Link>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3">
            {associations.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto object-contain ${logo.className}`}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-black/15" />
        <div className="grid gap-12 py-14 md:grid-cols-2 md:items-center">
          <nav className="flex flex-col items-center gap-4 md:items-start">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center md:justify-end">
            <Logo variant="dark" size="lg" />
          </div>
        </div>
      </div>
      <div className="border-t border-black/15">
        <p className="py-6 text-center text-sm font-semibold tracking-wide">
          © 2026 Mowj Music Academy | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
