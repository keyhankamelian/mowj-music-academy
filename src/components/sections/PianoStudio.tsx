/* eslint-disable @next/next/no-img-element */

export default function PianoStudio() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <figure>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/piano-studio.jpg"
              alt="Keyhan Kamelian's piano studio at Mowj Music Academy"
              className="w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-black/55">
            Piano Studio &mdash; Mowj Music Academy
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
