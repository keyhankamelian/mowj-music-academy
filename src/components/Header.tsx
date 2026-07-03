"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "home" },
  { href: "/piano-lessons", label: "piano lessons" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-8 pb-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <Link href="/" aria-label="Mowj Music Academy — home">
          <Logo variant="light" size="md" />
        </Link>
        <nav className="flex items-center gap-6 text-sm tracking-wide text-white/85 sm:gap-9">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-0.5 transition-colors hover:text-white ${
                  active
                    ? "border-b border-white text-white"
                    : "border-b border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
