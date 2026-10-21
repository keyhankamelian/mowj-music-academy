import type { Metadata } from "next";
import LessonLandingPage from "@/components/LessonLandingPage";
import OnlineLessons from "@/components/sections/OnlineLessons";

// Landing page for the online Meta campaign. Online lessons are 30 or 45
// minutes; 60-minute lessons are in-studio only.
export const metadata: Metadata = {
  title: "Online Piano Lessons | Mowj Music Academy",
  description:
    "Live, one-on-one online piano lessons anywhere in the US and Canada, for all ages, levels and styles. Book your trial lesson for Fall 2026.",
};

export default function OnlineLessonsPage() {
  return (
    <LessonLandingPage
      eyebrow="Online · US & Canada"
      title="Private Online Piano Lessons"
      intro="Live, one-on-one lessons from home, for all ages, levels and styles. Whether you’re just starting or coming back to the keys, you’ll pick up right where you are, wherever you are."
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
          title: "Live, Not Pre-Recorded",
          text: "Real-time lessons with personal feedback, shaped around your goals and the music you love.",
        },
      ]}
      details={<OnlineLessons />}
      minutes={[30, 45]}
      lessonFormat="Online"
      bookText="Fill out the form and we’ll reach out to schedule a complimentary intro call and your first online lesson."
    />
  );
}
