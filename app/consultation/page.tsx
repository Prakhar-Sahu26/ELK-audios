"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ CLEAN SUBMIT (NO RAZORPAY)
  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error(result.error);
        return;
      }

      reset();
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/IMG_6506.JPG"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* HERO */}
      <section className="relative z-10 py-20 border-b border-gray-800/50 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to transform your space? Let’s talk.
        </p>
      </section>

      {/* FORM SECTION */}
      <section
        ref={sectionRef}
        className="relative z-10 py-20"
      >
        <div className="max-w-3xl mx-auto px-6">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-slate-800/40 p-8 rounded-2xl border border-white/10 backdrop-blur"
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full p-4 rounded-lg bg-black/30 border border-white/10"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full p-4 rounded-lg bg-black/30 border border-white/10"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: true })}
              className="w-full p-4 rounded-lg bg-black/30 border border-white/10"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows={5}
              {...register("message", { required: true })}
              className="w-full p-4 rounded-lg bg-black/30 border border-white/10"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}