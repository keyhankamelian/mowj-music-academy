/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Logo from "./Logo";
import GetInTouchButton from "./GetInTouchButton";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/piano-lessons", label: "Piano Lessons" },
  { href: "/contact", label: "Contact" },
];

const associations = [
  {
    src: "/images/associations/berklee.png",
    alt: "Berklee College of Music",
    className: "h-12 md:h-16",
  },
  {
    src: "/images/associations/steinway.png",
    alt: "Steinway & Sons — Teacher & Educational Partner",
    className: "h-16 md:h-[84px]",
  },
  {
    src: "/images/associations/trinity.png",
    alt: "Trinity Guildhall — part of Trinity College London",
    className: "h-10 md:h-14",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-black/15" />
        <GetInTouchButton />

        <div className="grid gap-12 py-14 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <nav className="flex flex-col items-center gap-1 md:items-start">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1.5 text-lg underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Associations — grayscale to match the monochrome brand */}
          <div className="flex items-center justify-center gap-7 sm:gap-12">
            {associations.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto object-contain opacity-90 grayscale ${logo.className}`}
              />
            ))}
          </div>

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
