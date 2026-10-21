import type { Metadata } from "next";
import LessonLandingPage from "@/components/LessonLandingPage";

// Landing page for the in-studio Meta campaign.
export const metadata: Metadata = {
  title: "In-Studio Piano Lessons in Echo Park | Mowj Music Academy",
  description:
    "Private, one-on-one piano lessons in Echo Park, Los Angeles, for all ages, levels and styles. Book your trial lesson for Fall 2026.",
};

export default function InStudioLessons() {
  return (
    <LessonLandingPage
      eyebrow="In-Studio · Los Angeles"
      title="Private Piano Lessons in Echo Park"
      intro="One-on-one lessons for all ages, levels and styles, in a calm, light-filled studio. Whether you’re just starting or coming back to the keys, you’ll pick up right where you are."
      highlights={[
        {
          title: "Berklee-Trained",
          text: "Classical, jazz and contemporary training, graduated Magna Cum Laude from Berklee College of Music.",
        },
        {
          title: "Steinway Educational Partner",
          text: "Over 100 students mentored, from first-time beginners to adults returning to the keys.",
        },
        {
          title: "Built Around You",
          text: "Every lesson is shaped around your goals, the music you love and the way you learn.",
        },
      ]}
      lessonFormat="In-Studio (Echo Park)"
      bookText="Fill out the form and we’ll reach out to schedule a complimentary intro call and your first lesson at the Echo Park studio."
    />
  );
}
