"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactInput = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white border border-border p-8 rounded-2xl shadow-lg text-center space-y-4 animate-fade-up">
        <div className="mx-auto w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-xl font-bold text-primary">Message Sent Successfully!</h3>
        <p className="text-foreground/70 text-sm max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. A senior advisor from Expert Education Consultant will contact you within the next 24 business hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-lg space-y-5"
    >
      <h3 className="font-heading text-lg font-bold text-primary border-b pb-3 mb-2">
        Send Us a Message
      </h3>

      {submitError && (
        <div className="p-3 bg-red-50 border border-red-100 text-red-700 text-xs rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
        />
        {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          />
          {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          />
          {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-foreground/80">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Study Visa Query for Canada"
          {...register("subject")}
          className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
        />
        {errors.subject && <p className="text-red-500 text-xs font-medium">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Please describe your background and target country..."
          {...register("message")}
          className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all shadow-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}
