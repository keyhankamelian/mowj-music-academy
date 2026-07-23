"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger multiple reveals within the same section, in ms. */
  delayMs?: number;
};

/**
 * Fades + rises a block into place the first time it scrolls into view.
 * Triggers once (doesn't re-hide when scrolled past). Uses
 * IntersectionObserver for the common case, plus a scroll-position fallback:
 * a programmatic/instant scroll jump (e.g. dragging the scrollbar straight to
 * the bottom) can skip an element past the viewport without ever crossing the
 * observer's threshold, which would otherwise leave it stuck invisible.
 * See .reveal in globals.css for the animation and reduced-motion guard.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let cleanup = () => {};
    const reveal = () => {
      setVisible(true);
      cleanup();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    const checkPassed = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal();
    };
    window.addEventListener("scroll", checkPassed, { passive: true });

    cleanup = () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkPassed);
    };

    checkPassed(); // catch elements already in (or above) view on mount

    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
