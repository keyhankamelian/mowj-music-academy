import { NextResponse } from "next/server";

/**
 * Local development fallback for the contact form. In production the form posts
 * directly to Formspree (see NEXT_PUBLIC_FORMSPREE_ID in ContactForm). This
 * route just validates and logs the submission so the form works without
 * Formspree configured.
 */
type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  city?: string;
  musicalLevel?: string;
  lessonFormat?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fields = {
    firstName: data.firstName?.trim() ?? "",
    lastName: data.lastName?.trim() ?? "",
    email: data.email?.trim() ?? "",
    phone: data.phone?.trim() ?? "",
    city: data.city?.trim() ?? "",
    musicalLevel: data.musicalLevel?.trim() ?? "",
    lessonFormat: data.lessonFormat?.trim() ?? "",
  };

  if (Object.values(fields).some((v) => !v)) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!isEmail(fields.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  console.log(
    "[contact] New submission (dev fallback — configure Formspree to receive by email):\n" +
      `Name: ${fields.firstName} ${fields.lastName}\n` +
      `Email: ${fields.email}\n` +
      `Phone: ${fields.phone}\n` +
      `City: ${fields.city}\n` +
      `Musical Level: ${fields.musicalLevel}\n` +
      `Preferred Lesson Format: ${fields.lessonFormat}`
  );

  return NextResponse.json({ ok: true });
}
