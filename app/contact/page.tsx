"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const MAP_URL = "https://share.google/ZWNzR1wXpl2151nUn";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormMessage("");
    setFormStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason: formData.get("reason"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormStatus("error");
        setFormMessage(
          data.error ||
            "Your message could not be sent. Please try again."
        );
        return;
      }

      setFormStatus("success");
      setFormMessage(
        data.message || "Your message was sent successfully."
      );

      form.reset();
    } catch (error) {
      console.error("Contact submission error:", error);

      setFormStatus("error");
      setFormMessage(
        "We could not connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-brand-cream text-slate-900">
            <SiteHeader />

      {/* Page Header */}
      <section className="bg-brand-teal px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">
            Contact Music Heals Sierra Leone
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            We&apos;d love to hear from you.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Whether you want to ask a question, support our work, volunteer,
            explore a partnership or learn more about our programs, our team
            is ready to hear from you.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <aside className="rounded-[2rem] bg-brand-teal p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Talk to our team.
            </h2>

            <p className="mt-4 leading-7 text-slate-200">
              Reach Music Heals Sierra Leone using the contact details below.
            </p>

            <div className="mt-10 space-y-8">
              {/* Email */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Email
                </p>

                <a
                  href="mailto:musichealsinitiativesierraleon@gmail.com"
                  className="mt-2 block break-all text-lg font-medium hover:text-orange-300"
                >
                  musichealsinitiativesierraleon@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+23276967247"
                  className="mt-2 block text-lg font-medium hover:text-orange-300"
                >
                  +232 76967247
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Office
                </p>

                <address className="mt-2 not-italic leading-7 text-slate-200">
                  C/O W.A.M. Collegiate Secondary School
                  <br />
                  Wilkinson Road
                  <br />
                  Freetown, Sierra Leone
                </address>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-brand-teal"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Working Hours
                </p>

                <p className="mt-2 leading-7 text-slate-200">
                  Monday – Friday
                  <br />
                  9:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                Follow Us
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/share/1FMoGGTWmq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white hover:text-brand-teal"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/musicheals0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white hover:text-brand-teal"
                >
                  Instagram
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white hover:text-brand-teal"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div
            id="contact-form"
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Send Us a Message
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-teal">
              How can we help?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Complete the form below and provide enough detail for our team
              to understand your enquiry.
            </p>

            <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            >
              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone / WhatsApp
                  <span className="ml-1 font-normal text-slate-500">
                    (Optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+232 ..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Reason for Contact *
                </label>

                <select
                  id="reason"
                  name="reason"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                >
                  <option value="" disabled>
                    Select a reason
                  </option>

                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Donation / Support</option>
                  <option>Volunteering</option>
                  <option>Program Inquiry</option>
                  <option>Event Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Briefly describe your enquiry"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Privacy */}
              <label className="flex items-start gap-3">
                <input
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-brand-orange"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I agree that Music Heals Sierra Leone may use the
                  information submitted through this form to respond to my
                  enquiry.
                </span>
              </label>

              {/* Temporary button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-brand-orange px-6 py-4 font-bold text-brand-teal-dark transition hover:bg-brand-orange-light disabled:cursor-not-allowed disabled:opacity-60"
                        >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

        {formMessage && (
            <div
               className={`rounded-xl px-4 py-3 text-sm font-medium ${
                 formStatus === "success"
                   ? "bg-green-50 text-green-700"
                   : "bg-red-50 text-red-700"
               }`}
            >
               {formMessage}
            </div>
        )}
            </form>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-200 bg-orange-50 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
                Safeguarding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-brand-teal">
                Need to report a safeguarding concern?
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Safeguarding concerns involving children, young people or
                beneficiaries should be treated separately from general
                enquiries and communicated through the designated
                safeguarding contact.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+23270347228"
                className="rounded-full bg-brand-teal px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-teal-dark"
              >
                Call +232 70347228
              </a>

              <a
                href="mailto:musichealsinitiativesierraleon@gmail.com"
                className="rounded-full border border-brand-teal px-6 py-3 text-center font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                Email Safeguarding
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section
        id="get-involved"
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Get Involved
            </p>

            <h2 className="mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
              There are different ways to support our mission.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Donate */}
            <article className="rounded-3xl border border-slate-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
                ♥
              </div>

              <h3 className="mt-6 text-2xl font-bold text-brand-teal">
                Support Our Work
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Help expand access to music, education, healing and
                empowerment programs.
              </p>

              <a
                href="#contact-form"
                className="mt-6 inline-block font-bold text-brand-orange-deep hover:text-brand-teal"
              >
                Donation Enquiry →
              </a>
            </article>

            {/* Volunteer */}
            <article className="rounded-3xl border border-slate-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
                ♫
              </div>

              <h3 className="mt-6 text-2xl font-bold text-brand-teal">
                Volunteer With Us
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Contribute your time, skills and experience to meaningful
                programs and activities.
              </p>

              <a
                href="#contact-form"
                className="mt-6 inline-block font-bold text-brand-orange-deep hover:text-brand-teal"
              >
                Volunteer Enquiry →
              </a>
            </article>

            {/* Partnership */}
            <article className="rounded-3xl border border-slate-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
                ✦
              </div>

              <h3 className="mt-6 text-2xl font-bold text-brand-teal">
                Partner With Us
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Collaborate with Music Heals Sierra Leone to strengthen
                programs and expand community impact.
              </p>

              <a
                href="#contact-form"
                className="mt-6 inline-block font-bold text-brand-orange-deep hover:text-brand-teal"
              >
                Partnership Enquiry →
              </a>
            </article>
          </div>

          {/* Secondary Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-3xl bg-brand-cream p-8 sm:flex-row">
            <span className="font-semibold text-brand-teal">
              Other ways to connect:
            </span>

            <a
              href="#contact-form"
              className="rounded-full border border-brand-teal px-5 py-2.5 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
            >
              Sponsor a Program
            </a>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-teal px-5 py-2.5 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
            >
              Arrange a Visit
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}