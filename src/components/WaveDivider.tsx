/**
 * Curved "wave" divider used to transition between the dark (hero/testimonial)
 * sections and the white content sections. Place inside a `relative` parent.
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
  const d =
    position === "bottom"
      ? "M0 22 C 480 132 960 132 1440 22 L1440 130 L0 130 Z"
      : "M0 0 L1440 0 L1440 108 C 960 -2 480 -2 0 108 Z";

  return (
    <svg
      className={`pointer-events-none absolute left-0 w-full ${
        position === "bottom" ? "bottom-0" : "top-0"
      } ${className}`}
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path fill={fill} d={d} />
    </svg>
  );
}
