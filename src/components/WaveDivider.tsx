/**
 * Curved "wave" divider used to transition between the dark (hero/testimonial)
 * sections and the white content sections. Place inside a `relative` parent.
 * The curve slowly breathes, with a translucent swell drifting behind it
 * (see .wave-main / .wave-swell in globals.css).
 */
type WaveDividerProps = {
  position: "top" | "bottom";
  fill?: string;
  className?: string;
};

export default function WaveDivider({
  position,
  fill = "#ffffff",
  className = "",
}: WaveDividerProps) {
  const isBottom = position === "bottom";
  const d = isBottom
    ? "M0 22 C 480 132 960 132 1440 22 L1440 130 L0 130 Z"
    : "M0 0 L1440 0 L1440 108 C 960 -2 480 -2 0 108 Z";
  // Slightly wider than the viewBox so its edges never show while it drifts.
  const swell = isBottom
    ? "M-120 6 C 420 128 1020 128 1560 6 L1560 130 L-120 130 Z"
    : "M-120 0 L1560 0 L1560 124 C 1020 2 420 2 -120 124 Z";

  return (
    <svg
      className={`pointer-events-none absolute left-0 w-full ${
        isBottom ? "wave-bottom-edge bottom-0" : "wave-top-edge top-0"
      } ${className}`}
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path className="wave-swell" fill={fill} d={swell} />
      <path className="wave-main" fill={fill} d={d} />
    </svg>
  );
}
