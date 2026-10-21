"use client";

import { useState, type FormEvent } from "react";
import { reportContactFormConversion } from "@/lib/gtag";
import { reportMetaLead } from "@/lib/metaPixel";

type Status = "idle" | "submitting" | "success" | "error";

// Submissions go to Formspree (mowjmusicacademy). The form id is public (it's
// visible in the request URL), so it's fine as a default; override with
// NEXT_PUBLIC_FORMSPREE_ID if the form ever changes.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xvzjvloe";
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

const fieldClass =
  "w-full rounded-lg border border-black/10 bg-neutral-200/70 px-4 py-3 text-black outline-none placeholder:text-black/60 transition focus:border-black/60 focus:bg-white";

const labelClass = "mb-1.5 block text-sm font-bold";
const requiredHint = <span className="font-normal text-black/60"> (required)</span>;

// Ad attribution parameters copied from the page URL into each submission, so
// the lead email shows which campaign and ad it came from.
const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

type ContactFormProps = {
  /**
   * Fixes the lesson format (e.g. on an ad landing page) instead of asking
   * for it; the form then asks for a preferred lesson length.
   */
  lessonFormat?: string;
  /** Lesson lengths offered when `lessonFormat` is set. */
  lessonLengths?: string[];
};

export default function ContactForm({
  lessonFormat,
  lessonLengths = [],
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(
      new FormData(form).entries(),
    );
    const params = new URLSearchParams(window.location.search);
    for (const key of TRACKING_PARAMS) {
      const value = params.get(key);
      if (value) data[key] = value;
    }
    data.page = window.location.pathname;

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
      reportMetaLead();
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

      {lessonFormat ? (
        <>
          <input type="hidden" name="lessonFormat" value={lessonFormat} />
          <div>
            <label htmlFor="lessonLength" className={labelClass}>
              Preferred Lesson Length{requiredHint}
            </label>
            <select
              id="lessonLength"
              name="lessonLength"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Choose a lesson length
              </option>
              {lessonLengths.map((length) => (
                <option key={length} value={length}>
                  {length}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="notes" className={labelClass}>
              Anything Else We Should Know?
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Who the lessons are for, your goals, availability…"
              className={`${fieldClass} resize-y`}
            />
          </div>
        </>
      ) : (
        <div>
          <label htmlFor="lessonFormat" className={labelClass}>
            Preferred Lesson Format{requiredHint}
          </label>
          <textarea
            id="lessonFormat"
            name="lessonFormat"
            rows={4}
            required
            placeholder="Online or in-studio?"
            className={`${fieldClass} resize-y`}
          />
        </div>
      )}

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
