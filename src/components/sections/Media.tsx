/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const audioTracks = [
  { src: "/media/journey.mp3", title: "Journey", credit: "Keyhan Kamelian" },
  {
    src: "/media/fantasie-impromptu.mp3",
    title: "Fantasie Impromptu",
    credit: "Chopin",
  },
];

const associations = [
  {
    src: "/images/associations/berklee.png",
    alt: "Berklee College of Music",
    className: "h-[72px]",
  },
  {
    src: "/images/associations/steinway.png",
    alt: "Steinway & Sons — Teacher & Educational Partner",
    className: "h-[104px]",
  },
  {
    src: "/images/associations/trinity.png",
    alt: "Trinity Guildhall — part of Trinity College London",
    className: "h-[62px]",
  },
];

export default function Media() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Media
        </h2>

        {/* Audio */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {audioTracks.map((track) => (
            <figure
              key={track.src}
              className="rounded-2xl border border-black/10 bg-neutral-50 p-6"
            >
              <figcaption className="mb-4">
                <span className="font-display text-2xl font-bold">
                  {track.title}
                </span>
                <span className="ml-2 text-sm text-black/55">
                  {track.credit}
                </span>
              </figcaption>
              <audio controls preload="none" className="w-full">
                <source src={track.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </figure>
          ))}
        </div>

        {/* Videos with a photo in between */}
        <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
          <figure>
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full rounded-2xl bg-black"
            >
              <source src="/media/dhruv-tragedy.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <figcaption className="mt-3 text-center text-sm text-black/55">
              Dhruv &mdash; &ldquo;Tragedy&rdquo; (Jimmy Kimmel Live)
            </figcaption>
          </figure>

          <figure>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/media/media-photo.png"
                alt="Keyhan Kamelian performing live at The Roxy on the Fiji Blue US tour"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-black/55">
              Fiji Blue US Tour &mdash; The Roxy
            </figcaption>
          </figure>

          <figure>
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full rounded-2xl bg-black"
            >
              <source src="/media/sia-helium.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <figcaption className="mt-3 text-center text-sm text-black/55">
              Sia &mdash; &ldquo;Helium&rdquo; (feat. Stephanie James)
            </figcaption>
          </figure>
        </div>

        {/* Associations */}
        <div className="mt-20 border-t border-black/10 pt-14">
          <div className="mx-auto grid max-w-3xl grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3">
            {associations.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={`w-auto object-contain ${logo.className}`}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
