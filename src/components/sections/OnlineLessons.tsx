import ImageBox from "@/components/ImageBox";

export default function OnlineLessons() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        {/* Copy */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Online Lessons That Feel In-Person
          </h2>
          <div className="mx-auto mt-8 max-w-md space-y-6 text-base leading-relaxed text-black/80 sm:text-lg">
            <p>
              With use of a multi-camera setup, online lessons recreate the
              in-studio experience with clear visuals and audio through the Zoom
              application.
            </p>
            <p>
              All you need is a computer, webcam, and a stable internet
              connection.
            </p>
          </div>
        </div>

        {/* Photo — replace with /images/online-lessons.jpg */}
        <div className="order-first md:order-last">
          <ImageBox
            src="/images/online-lessons.png"
            alt="Keyhan Kamelian performing at a grand piano"
            label="Performance photo"
            className="aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  );
}
