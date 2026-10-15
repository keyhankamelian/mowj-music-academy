"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Footer call-to-action. Hidden on /contact, where the form is already the page. */
export default function GetInTouchButton() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="mb-12">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
      >
        Get In Touch
      </Link>
    </div>
  );
}
