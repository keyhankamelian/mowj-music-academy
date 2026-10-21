import ImageBox from "@/components/ImageBox";

export default function MeetInstructor() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="section-title font-display font-extrabold uppercase tracking-tight">
              Meet Your Instructor
            </h2>
            <p className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-black/80">
              Keyhan Kamelian
            </p>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-black/80 sm:text-lg">
              <p>
                A classically trained pianist fluent in both jazz and
                contemporary styles, Keyhan Kamelian graduated{" "}
                <em>Magna Cum Laude</em> from Berklee College of Music in 2017,
                where he studied under acclaimed pianists Alain Mallet, Yoko
                Miwa, and Vadim Neselovskyi.
              </p>
              <p>
                A Steinway Educational Partner who has mentored over 100
                students, Keyhan brings both artistry and clarity to piano
                education, helping players of all levels build mastery and
                creative confidence.
              </p>
              <p>
                His journey has taken him from Carnegie Hall and Boston
                Symphony Hall to <em>Jimmy Kimmel Live</em>, performing with
                artists including Sattar, Antonio Serrano, Boston Philharmonic,
                Fiji Blue, Dhruv, and Mishaal Tamar to name a few.
              </p>
            </div>
          </div>

          {/* Portrait — replace with /images/instructor.jpg */}
          <div className="order-first md:order-last">
            <ImageBox
              src="/images/instructor.jpg"
              alt="Portrait of instructor Keyhan Kamelian"
              label="Portrait"
              className="mx-auto aspect-[4/5] w-full max-w-sm grayscale md:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
