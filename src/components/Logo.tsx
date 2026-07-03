import Image from "next/image";

/**
 * Mowj Music Academy logo lockup (wave + serif wordmark + "Music Academy").
 * Source file is white line-art on transparent — used as-is on dark
 * backgrounds ("light" variant) and inverted to black on light backgrounds
 * ("dark" variant, e.g. the footer).
 */
type LogoProps = {
  variant?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
};

const heights = { md: "h-24", lg: "h-28" } as const;

export default function Logo({
  variant = "light",
  size = "md",
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Mowj Music Academy"
      width={735}
      height={522}
      priority={variant === "light"}
      unoptimized
      className={`${heights[size]} w-auto ${
        variant === "dark" ? "invert" : ""
      } ${className}`}
    />
  );
}
