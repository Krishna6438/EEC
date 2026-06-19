import React from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function TermsAndConditions() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <Breadcrumbs items={[{ name: "Terms & Conditions", href: "/terms-and-conditions" }]} />
          <h1 className="font-heading text-3xl font-bold text-primary">Terms & Conditions</h1>
          <p className="text-foreground/50 text-xs">Last updated: June 19, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="bg-white border border-border p-8 rounded-2xl shadow-sm text-left space-y-6 text-sm text-foreground/75 leading-relaxed">
          <p>
            Welcome to Expert Education Consultant. By using our website, consult schedulers, test preps, or filing services, you agree to comply with the terms and conditions outlined below.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">1. Scope of Service</h3>
          <p>
            Expert Education Consultant provides professional advisory services regarding student admissions, immigration, and language preps. While we maintain a 98.2% historical success rate, final approval decisions rest solely with relevant university boards and host country consulate/embassy officers.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">2. Accuracy of Information</h3>
          <p>
            Applicants must guarantee that all qualifications, transcripts, employment references, and financial declarations submitted are completely authentic. EEC is not liable for visa rejections resulting from falsified or misleading documentation provided by applicants.
          </p>

          <h3 className="font-heading font-bold text-primary text-base pt-2">3. Payments & Fees</h3>
          <p>
            Fees for exam coaching classes (IELTS, PTE, TOEFL) are payable in advance. Professional consultancy retainer fees are structured under clear engagement letter schedules, details of which are customized per candidate file.
          </p>
        </div>
      </section>
    </div>
  );
}
