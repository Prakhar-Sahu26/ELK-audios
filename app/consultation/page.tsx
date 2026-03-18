"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

type ConsultationFormValues = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  preferredDateTime?: string;
  needs?: string;
  message?: string;
};

export default function ConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      preferredDateTime: "",
      needs: "",
      message: "",
    },
  });

  const onSubmit = async (values: ConsultationFormValues) => {
    setStatus(null);
    setIsSubmitting(true);

    try {
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company: values.company?.trim() ? values.company.trim() : undefined,
        preferredDateTime: values.preferredDateTime?.trim() ? values.preferredDateTime.trim() : undefined,
        needs: values.needs?.trim() ? values.needs.trim() : undefined,
        message: values.message?.trim() ? values.message.trim() : undefined,
      };

      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(body?.error || "Failed to submit your request.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your consultation request has been received. We’ll get back to you soon.",
      });
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/IMG_6506.JPG"
            alt="Consultation background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10">
          <div className="min-h-[520px] sm:min-h-[600px] flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="max-w-2xl py-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
                  Book a Consultation
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200/90 font-body">
                  Tell us about your project and we’ll get back to you
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("consultation-form");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-base sm:text-lg font-body font-medium text-white backdrop-blur-sm transition-all hover:border-amber-400/60 hover:bg-amber-500/15 active:scale-[0.99]"
                >
                  <span>Start Your Request</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="M19 12l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="consultation-form" className="relative z-10 py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 backdrop-blur-xl rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/5 overflow-hidden">
              {/* Golden ambient accents */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl" />
              </div>

              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                    Consultation Request
                  </h2>
                  <p className="mt-3 text-gray-300 font-body">
                    Share the essentials below. We’ll follow up via email.
                  </p>
                </div>

                {status && (
                  <div
                    role="status"
                    className={`mb-6 rounded-xl border px-4 py-3 text-sm font-body ${
                      status.type === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                        : "border-rose-500/30 bg-rose-500/10 text-rose-100"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                      >
                        Full Name <span className="text-amber-400/60">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body hover:border-amber-500/20 focus:bg-black/35"
                        {...register("fullName", {
                          required: "Full name is required",
                        })}
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm text-amber-300/90 font-body">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                      >
                        Email <span className="text-amber-400/60">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body hover:border-amber-500/20 focus:bg-black/35"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-amber-300/90 font-body">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                      >
                        Phone Number <span className="text-amber-400/60">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body hover:border-amber-500/20 focus:bg-black/35"
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: { value: 7, message: "Phone number looks too short" },
                        })}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-amber-300/90 font-body">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Optional"
                        className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body hover:border-amber-500/20 focus:bg-black/35"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDateTime"
                      className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                    >
                      Preferred Date &amp; Time
                    </label>
                    <input
                      id="preferredDateTime"
                      type="datetime-local"
                      className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body hover:border-amber-500/20 focus:bg-black/35"
                      {...register("preferredDateTime")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="needs"
                      className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                    >
                      Tell Us About Your Needs
                    </label>
                    <textarea
                      id="needs"
                      rows={5}
                      placeholder="What are you trying to achieve?"
                      className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body resize-none hover:border-amber-500/20 focus:bg-black/35 leading-relaxed"
                      {...register("needs")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-body text-gray-300 mb-2 font-medium tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Any additional details..."
                      className="w-full px-5 py-4 bg-black/25 backdrop-blur-sm border border-amber-500/15 rounded-xl text-white placeholder-gray-500 outline-none focus:outline-none focus:ring-1 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-300 font-body resize-none hover:border-amber-500/20 focus:bg-black/35 leading-relaxed"
                      {...register("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full group relative overflow-hidden border-2 border-amber-500/30 bg-amber-500/10 backdrop-blur-sm text-white px-10 py-5 text-base sm:text-lg font-body font-medium rounded-full hover:border-amber-400/40 hover:bg-amber-500/15 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <span
                            className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"
                            aria-hidden="true"
                          />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Request</span>
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </form>

                <p className="mt-6 text-xs sm:text-sm text-gray-400/90 font-body text-center">
                  By submitting, you agree we may contact you about your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

