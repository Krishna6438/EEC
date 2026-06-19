"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, ChevronRight, ChevronLeft, Calendar, Clock, MapPin, Compass } from "lucide-react";

// Schema definitions for each step
const stepOneSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const stepTwoSchema = z.object({
  country: z.string().min(1, "Please select a destination country"),
  service: z.string().min(1, "Please select a service of interest"),
  qualification: z.string().min(1, "Please select your current qualification"),
});

const stepThreeSchema = z.object({
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time slot"),
  message: z.string().optional(),
});

type StepOneInput = z.infer<typeof stepOneSchema>;
type StepTwoInput = z.infer<typeof stepTwoSchema>;
type StepThreeInput = z.infer<typeof stepThreeSchema>;

interface CompleteFormInput extends StepOneInput, StepTwoInput, StepThreeInput {}

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<CompleteFormInput | null>(null);

  // Form hooks for each step to validate independently
  const formStepOne = useForm<StepOneInput>({
    resolver: zodResolver(stepOneSchema),
    mode: "onTouched",
  });

  const formStepTwo = useForm<StepTwoInput>({
    resolver: zodResolver(stepTwoSchema),
    mode: "onTouched",
    defaultValues: { country: "", service: "", qualification: "" },
  });

  const formStepThree = useForm<StepThreeInput>({
    resolver: zodResolver(stepThreeSchema),
    mode: "onTouched",
    defaultValues: { date: "", time: "", message: "" },
  });

  const handleNextStepOne = async () => {
    const isValid = await formStepOne.trigger();
    if (isValid) setStep(2);
  };

  const handleNextStepTwo = async () => {
    const isValid = await formStepTwo.trigger();
    if (isValid) setStep(3);
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async () => {
    const isStepThreeValid = await formStepThree.trigger();
    if (!isStepThreeValid) return;

    setIsSubmitting(true);

    // Merge all form values
    const allData: CompleteFormInput = {
      ...formStepOne.getValues(),
      ...formStepTwo.getValues(),
      ...formStepThree.getValues(),
    };

    try {
      // Simulate API Submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmittedData(allData);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success view
  if (submittedData) {
    return (
      <div className="bg-white border border-border p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl mx-auto text-center space-y-6 animate-fade-up">
        <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Consultation Scheduled!</h2>
          <p className="text-foreground/70 text-sm max-w-md mx-auto leading-relaxed">
            Your premium consultation session has been successfully booked. An email confirmation has been sent to <span className="font-semibold text-primary">{submittedData.email}</span>.
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-neutral-50 rounded-2xl p-6 border border-border text-left space-y-4 max-w-md mx-auto text-sm">
          <h4 className="font-heading font-semibold text-primary border-b pb-2 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-accent" />
            Session Overview
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-foreground/50 text-xs block uppercase tracking-wider font-semibold">Client Name</span>
              <span className="text-primary font-medium">{submittedData.name}</span>
            </div>
            <div>
              <span className="text-foreground/50 text-xs block uppercase tracking-wider font-semibold">Visa Service</span>
              <span className="text-primary font-medium">{submittedData.service}</span>
            </div>
            <div>
              <span className="text-foreground/50 text-xs block uppercase tracking-wider font-semibold">Date & Time</span>
              <span className="text-primary font-medium flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-secondary" />
                {submittedData.date}
              </span>
              <span className="text-primary font-medium flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                {submittedData.time}
              </span>
            </div>
            <div>
              <span className="text-foreground/50 text-xs block uppercase tracking-wider font-semibold">Destination</span>
              <span className="text-primary font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {submittedData.country}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setSubmittedData(null);
              setStep(1);
              formStepOne.reset();
              formStepTwo.reset();
              formStepThree.reset();
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-secondary hover:shadow-lg transition-all"
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-border rounded-3xl shadow-xl p-6 md:p-10 space-y-8">
      {/* Form Progress Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-foreground/50 uppercase tracking-widest">
          <span>Step {step} of 3</span>
          <span>
            {step === 1 && "Personal Profile"}
            {step === 2 && "Consultation Scope"}
            {step === 3 && "Timing & Notes"}
          </span>
        </div>
        <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-primary">Personal Details</h3>
              <p className="text-foreground/60 text-xs">Provide your contact info so our visa officers can reach you.</p>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...formStepOne.register("name")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
              {formStepOne.formState.errors.name && (
                <p className="text-red-500 text-xs font-medium">{formStepOne.formState.errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...formStepOne.register("email")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
              {formStepOne.formState.errors.email && (
                <p className="text-red-500 text-xs font-medium">{formStepOne.formState.errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...formStepOne.register("phone")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
              {formStepOne.formState.errors.phone && (
                <p className="text-red-500 text-xs font-medium">{formStepOne.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNextStepOne}
                className="group inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary transition-all"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-primary">Consultation Scope</h3>
              <p className="text-foreground/60 text-xs">Help us match you with the right specialist advisor.</p>
            </div>

            {/* Destination Country */}
            <div className="space-y-1.5">
              <label htmlFor="country" className="text-xs font-semibold text-foreground/80">
                Destination Country
              </label>
              <select
                id="country"
                {...formStepTwo.register("country")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              >
                <option value="">Select Target Country</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Other">Other / Multiple</option>
              </select>
              {formStepTwo.formState.errors.country && (
                <p className="text-red-500 text-xs font-medium">{formStepTwo.formState.errors.country.message}</p>
              )}
            </div>

            {/* Visa Service */}
            <div className="space-y-1.5">
              <label htmlFor="service" className="text-xs font-semibold text-foreground/80">
                Visa Service Type
              </label>
              <select
                id="service"
                {...formStepTwo.register("service")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              >
                <option value="">Select Service Scope</option>
                <option value="Study Visa">Study Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Visitor Visa">Visitor / Tourist Visa</option>
                <option value="Business / Investor Visa">Business & Investor Visa</option>
                <option value="Permanent Residency">Permanent Residency (PR)</option>
                <option value="Spouse Visa">Spouse Visa / Sponsorship</option>
                <option value="Super Visa">Super Visa (Parents/Grandparents)</option>
                <option value="Refusal Case Appeal">Refusal Cases Audit & Re-filing</option>
              </select>
              {formStepTwo.formState.errors.service && (
                <p className="text-red-500 text-xs font-medium">{formStepTwo.formState.errors.service.message}</p>
              )}
            </div>

            {/* Current Qualification */}
            <div className="space-y-1.5">
              <label htmlFor="qualification" className="text-xs font-semibold text-foreground/80">
                Current Qualification
              </label>
              <select
                id="qualification"
                {...formStepTwo.register("qualification")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              >
                <option value="">Select Highest Qualification</option>
                <option value="High School / 12th Std">High School / 12th Grade</option>
                <option value="Diploma / Vocational">Diploma / Vocational course</option>
                <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                <option value="Master's Degree">Master&apos;s Degree</option>
                <option value="PhD / Doctorate">PhD / Doctorate</option>
                <option value="Undergraduate Student">Currently in Undergraduate study</option>
              </select>
              {formStepTwo.formState.errors.qualification && (
                <p className="text-red-500 text-xs font-medium">{formStepTwo.formState.errors.qualification.message}</p>
              )}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-lg border border-border text-foreground/85 text-sm font-semibold hover:bg-neutral-50 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNextStepTwo}
                className="group inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary transition-all"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-primary">Time & Preferences</h3>
              <p className="text-foreground/60 text-xs">Pick a convenient schedule for your 1-on-1 advisor slot.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label htmlFor="date" className="text-xs font-semibold text-foreground/80 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  {...formStepThree.register("date")}
                  className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
                />
                {formStepThree.formState.errors.date && (
                  <p className="text-red-500 text-xs font-medium">{formStepThree.formState.errors.date.message}</p>
                )}
              </div>

              {/* Preferred Time Slot */}
              <div className="space-y-1.5">
                <label htmlFor="time" className="text-xs font-semibold text-foreground/80 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  Preferred Time Slot
                </label>
                <select
                  id="time"
                  {...formStepThree.register("time")}
                  className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
                >
                  <option value="">Select Time Slot</option>
                  <option value="10:00 AM - 11:30 AM (Morning)">10:00 AM - 11:30 AM</option>
                  <option value="12:00 PM - 01:30 PM (Noon)">12:00 PM - 01:30 PM</option>
                  <option value="03:00 PM - 04:30 PM (Afternoon)">03:00 PM - 04:30 PM</option>
                  <option value="05:30 PM - 07:00 PM (Evening)">05:30 PM - 07:00 PM</option>
                </select>
                {formStepThree.formState.errors.time && (
                  <p className="text-red-500 text-xs font-medium">{formStepThree.formState.errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Custom message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
                Additional Information / Background (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Mention any score targets or specific questions you'd like answered..."
                {...formStepThree.register("message")}
                className="w-full bg-neutral-50 border border-border text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
              />
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-lg border border-border text-foreground/85 text-sm font-semibold hover:bg-neutral-50 disabled:opacity-50 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={onSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Scheduling Session...</span>
                  </>
                ) : (
                  <span>Book Consultation</span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
