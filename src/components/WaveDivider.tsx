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
  // Wider than the viewBox so its edges never show while it drifts, and set
  // a little lower than the main curve so it has room to rise without being
  // clipped by the top of the SVG.
  const swell = isBottom
    ? "M-220 30 C 380 120 1060 120 1660 30 L1660 130 L-220 130 Z"
    : "M-220 0 L1660 0 L1660 100 C 1060 10 380 10 -220 100 Z";

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
