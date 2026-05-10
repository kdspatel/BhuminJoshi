"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o0xbrwj",
        "template_rrr2ddu",
        formRef.current!,
        "ynR0TF6L7lCEsmRYJ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="text-white mt-24">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[420px] md:h-[680px] lg:h-[780px]">

        <Image
          src="/images/contact.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/75" />

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white">
            Let’s Create Something Timeless
          </h1>

          <p className="mt-4 text-neutral-200 max-w-xl text-sm md:text-base leading-relaxed">
            Weddings, emotions, and stories captured in their purest cinematic form.
          </p>

        </div>
      </div>

      {/* INFO SECTION */}
      <div className="container max-w-3xl py-14 text-center">

        <p className="text-neutral-300 leading-relaxed">
          Please complete the form below with as much detail as possible.
          We aim to respond within 48 hours. For urgent inquiries, reach us directly.
        </p>

        <p className="mt-6 text-neutral-300">
          <Link
            href="/#faq"
            className="text-white underline underline-offset-4 hover:text-neutral-400 transition"
          >
            FAQ
          </Link>{" "}
          — find answers to commonly asked questions.
        </p>

        <div className="mt-8 space-y-1">
          <p className="text-white">yourname@gmail.com</p>
          <p className="text-white">+91 0000 000000</p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="container max-w-2xl pb-28">

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-12"
          autoComplete="off"
        >

          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                autoComplete="new-password"
                className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                autoComplete="new-password"
                className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
              />
            </div>

          </div>

          {/* WHATSAPP */}
          <div>
            <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
              WhatsApp Number
            </label>
            <input
              name="whatsapp"
              type="text"
              required
              autoComplete="new-password"
              className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
              Tell us about your wedding
            </label>
            <textarea
              name="message"
              rows={6}
              required
              autoComplete="new-password"
              className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition resize-none"
            />
          </div>

          {/* LOCATION + DAYS */}
          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
                Wedding Location
              </label>
              <input
                name="location"
                type="text"
                autoComplete="new-password"
                className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
                Duration (Days)
              </label>
              <input
                name="days"
                type="text"
                autoComplete="new-password"
                className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
              />
            </div>

          </div>

          {/* DATE */}
          <div>
            <label className="text-xs tracking-[0.3em] text-neutral-300 uppercase">
              Wedding Date
            </label>
            <input
              name="date"
              type="text"
              placeholder="e.g. 31/12/2024"
              autoComplete="new-password"
              className="w-full mt-3 bg-transparent border-b border-neutral-600 pb-3 outline-none focus:border-white transition"
            />
          </div>

          {/* BUTTON */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full border border-white py-4 text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition"
            >
              Send Inquiry
            </button>
          </div>

        </form>

      </div>

    </section>
  );
};

export default ContactPage;