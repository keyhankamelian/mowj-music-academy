"use client";

import { useState, type FormEvent } from "react";
import { reportContactFormConversion } from "@/lib/gtag";

type Status = "idle" | "submitting" | "success" | "error";

// Submissions go to Formspree (mowjmusicacademy). The form id is public (it's
// visible in the request URL), so it's fine as a default; override with
// NEXT_PUBLIC_FORMSPREE_ID if the form ever changes.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xvzjvloe";
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

const fieldClass =
  "w-full rounded-lg border border-black/10 bg-neutral-200/70 px-4 py-3 text-black outline-none transition focus:border-black/60 focus:bg-white";

const labelClass = "mb-1.5 block text-sm font-bold";
const requiredHint = <span className="font-normal text-black/50"> (required)</span>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const message =
          body.error ||
          body.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        throw new Error(message);
      }
      setStatus("success");
      reportContactFormConversion();
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-black/10 bg-neutral-50 p-8 text-center">
        <p className="font-display text-xl font-bold uppercase tracking-wide">
          Thank you!
        </p>
        <p className="mt-3 text-black/70">
          Your message has been sent. We&rsquo;ll be in touch soon to schedule
          your complimentary intro call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset>
        <legend className="mb-2 text-sm font-bold">Name</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name{requiredHint}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name{requiredHint}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={fieldClass}
            />
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email{requiredHint}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone{requiredHint}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="city" className={labelClass}>
          City{requiredHint}
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          autoComplete="address-level2"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="musicalLevel" className={labelClass}>
          Musical Level{requiredHint}
        </label>
        <input
          id="musicalLevel"
          name="musicalLevel"
          type="text"
          required
          placeholder="Beginner, intermediate, advanced…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="lessonFormat" className={labelClass}>
          Preferred Lesson Format{requiredHint}
        </label>
        <textarea
          id="lessonFormat"
          name="lessonFormat"
          rows={4}
          required
          placeholder="Online or in home?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">{error}</p>
      )}

      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-neutral-800 px-12 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
