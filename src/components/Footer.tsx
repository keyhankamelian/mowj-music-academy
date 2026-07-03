import Link from "next/link";
import Logo from "./Logo";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/piano-lessons", label: "Piano Lessons" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6">
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
