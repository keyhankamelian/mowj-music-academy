/**
 * Renders a real image when `src` is set, otherwise a labeled placeholder.
 * Lets us lay out the design now and drop real photos into /public/images/ later
 * (just pass the `src`). Uses a plain <img> so a missing file never breaks the build.
 */
type ImageBoxProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
};

export default function ImageBox({
  src,
  alt,
  label = "Photo",
  className = "",
}: ImageBoxProps) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }

  return (
    <div
      className={`flex items-center justify-center bg-neutral-200 text-neutral-500 ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="text-xs font-semibold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
