"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "Brand campaign",
  "ATL / OOH",
  "Digital / Social",
  "Art direction",
  "Something else",
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
          >
            <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-white">
              ✓
            </span>
            <h3 className="text-2xl font-bold">Message sent</h3>
            <p className="mt-2 max-w-sm text-muted">
              Thanks for reaching out — I’ll get back to you within 48 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {/* honeypot — hidden from humans */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                  First name
                </label>
                <input id="firstName" className={inputCls} placeholder="Ama" {...register("firstName")} />
                {errors.firstName && <p className="mt-1.5 text-xs text-accent">{errors.firstName.message}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                  Last name
                </label>
                <input id="lastName" className={inputCls} placeholder="Mensah" {...register("lastName")} />
                {errors.lastName && <p className="mt-1.5 text-xs text-accent">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" className={inputCls} placeholder="you@company.com" {...register("email")} />
              {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="mb-2 block text-sm font-medium">
                Project type
              </label>
              <select id="projectType" className={`${inputCls} appearance-none`} defaultValue="" {...register("projectType")}>
                <option value="" disabled className="bg-ink">
                  Select a project type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-ink">
                    {t}
                  </option>
                ))}
              </select>
              {errors.projectType && <p className="mt-1.5 text-xs text-accent">{errors.projectType.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Tell me about your project, timeline and goals…"
                {...register("message")}
              />
              {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message.message}</p>}
            </div>

            {status === "error" && (
              <p className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                Something went wrong sending your message. Please try again or reach out via WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
