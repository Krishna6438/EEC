export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubtitle: string;
  overview: string;
  eligibility: string[];
  documents: string[];
  process: { step: number; title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "study-visa": {
    slug: "study-visa",
    title: "Study Visa Consultancy",
    shortDescription: "Unlock global academic opportunities at top-tier universities worldwide.",
    heroSubtitle: "Transform your future with international education in leading global destinations.",
    overview: "Our Study Visa service is designed to guide aspiring students through the complex process of securing admission and student visas for top-ranking universities in Canada, Australia, UK, USA, and New Zealand. We provide end-to-end support from university selection, statement of purpose (SOP) writing, and scholarship applications to final visa filing and pre-departure briefings.",
    eligibility: [
      "A valid offer letter from a Designated Learning Institution (DLI) or accredited university.",
      "Proof of sufficient funds to cover tuition fees and living expenses for the duration of study.",
      "Language proficiency test scores (IELTS Academic, PTE Academic, or TOEFL).",
      "Academic transcripts and certificates meeting minimum criteria of the selected program.",
      "No criminal record and clean medical history as required by host country regulations."
    ],
    documents: [
      "Valid Passport (with at least 6 months validity from planned arrival).",
      "Letter of Acceptance (LOA) / Confirmation of Enrolment (CoE).",
      "Academic Transcripts, Degrees, and Diplomas.",
      "Language Proficiency Test Score Report.",
      "Proof of Financial Support (Bank statements, GIC certificates, Education loan documents).",
      "Statement of Purpose (SOP) outlining academic intent and career goals.",
      "Medical Certificate and Police Clearance Certificate (PCC)."
    ],
    process: [
      { step: 1, title: "Initial Profile Evaluation", description: "Assess your academic background, language skills, budget, and destination preferences." },
      { step: 2, title: "University & Course Selection", description: "Shortlist matching accredited courses and institutions that fit your profile and career aspirations." },
      { step: 3, title: "Application Submission", description: "Compile documentation and submit high-quality applications to secure letters of acceptance." },
      { step: 4, title: "Financial & GIC Planning", description: "Guide you on structuring your financial files, paying tuition fees, and setting up GIC/blocked bank accounts." },
      { step: 5, title: "Visa File Preparation & Submission", description: "Review and organize all required forms, drafting a compelling SOP, and filing the visa application." },
      { step: 6, title: "Pre-Departure Orientation", description: "Provide critical briefings on travel requirements, accommodation, part-time work limits, and student life." }
    ],
    benefits: [
      "Access to premium global educational networks and accredited universities.",
      "98% historical success rate on student visa applications through meticulous document vetting.",
      "Assistance in securing merit-based scholarships and student grants.",
      "Comprehensive guidance on post-study work permits (PGWP) and PR pathways."
    ],
    faqs: [
      { question: "Can I work while studying on a student visa?", answer: "Yes, most major destinations like Canada, Australia, and the UK allow international students to work part-time (typically up to 20-24 hours per week) during academic terms and full-time during official breaks." },
      { question: "How long does student visa processing take?", answer: "Processing times vary from 2 weeks to 3 months depending on the country, intake season, and visa stream (such as SDS in Canada or Fast-track programs in the UK)." },
      { question: "What is a GIC or Blocked Account?", answer: "It is a specialized security account required by countries like Canada (Guaranteed Investment Certificate) and Germany. It holds the mandatory living funds for your first year and pays them out in monthly installments to verify your financial stability." }
    ]
  },
  "work-visa": {
    slug: "work-visa",
    title: "Work Visa Solutions",
    shortDescription: "Advance your career globally with employer-sponsored and independent work permits.",
    heroSubtitle: "Take the next major step in your career with professional work authorization abroad.",
    overview: "Our Work Visa program assists qualified professionals and skilled tradespeople in securing legal work authorization across international jurisdictions. Whether you have received a foreign job offer, qualify for an open work permit, or are seeking skilled migration pathways, we guide you through employer sponsorship, labor market assessments, and official permit filings.",
    eligibility: [
      "A valid job offer from a registered employer in the destination country (if employer-sponsored).",
      "Relevant professional experience, university degrees, or technical certifications.",
      "Positive labor market impact assessment (e.g., LMIA in Canada, Sponsor License in the UK).",
      "Meeting English or French language requirements appropriate for the occupational code.",
      "Clean background search and proof of financial sustainability for initial relocation."
    ],
    documents: [
      "Signed Employment Contract / Job Offer Letter.",
      "Approved labor market assessment (LMIA / CoS / equivalent sponsorship certificate).",
      "Detailed resume, reference letters from past employers, and work portfolios.",
      "Educational Credential Assessment (ECA) report (if applicable).",
      "Language exam reports (IELTS General Training or equivalent).",
      "Valid Passport, identity certificates, and medical reports."
    ],
    process: [
      { step: 1, title: "Job Profile & Credentials Review", description: "Audit your job title, credentials, and work history to match global occupational classifications." },
      { step: 2, title: "Sponsorship Verification", description: "Ensure the employer's authorization to sponsor foreign nationals is valid and legally compliant." },
      { step: 3, title: "LMIA/Sponsorship Filing Support", description: "Coordinate with the employer to ensure Labor Market Impact Assessments or Certificates of Sponsorship are cleared." },
      { step: 4, title: "Visa Documentation Assembly", description: "Compile references, declarations, tax forms, and proof of experience for submission." },
      { step: 5, title: "Visa Application Submission", description: "Submit application forms online, schedule biometrics, and monitor communication with immigration authorities." }
    ],
    benefits: [
      "Direct pathway to high-paying international careers and standard of living.",
      "Expert support navigating employer-facing sponsorship regulations.",
      "Step-by-step preparation for any potential consulate interview.",
      "Clear guidance on transitioning from temporary work permits to Permanent Residency (PR)."
    ],
    faqs: [
      { question: "What is an LMIA or CoS?", answer: "An LMIA (Labor Market Impact Assessment - Canada) or CoS (Certificate of Sponsorship - UK) is a document that an employer must obtain before hiring a foreign worker, proving that no local citizen or permanent resident is available to do the job." },
      { question: "Can my spouse work on my work permit?", answer: "In many jurisdictions (such as Canada and Australia), spouses of highly-skilled work permit holders are eligible to apply for an Open Work Permit, allowing them to work for any employer." }
    ]
  },
  "visitor-visa": {
    slug: "visitor-visa",
    title: "Visitor & Tourist Visas",
    shortDescription: "Explore the world or visit family with fast, stress-free travel visa approvals.",
    heroSubtitle: "Explore the world, visit family, or attend business meetings with ease.",
    overview: "Whether you want to explore tourist attractions, visit family and friends, or attend overseas business conferences, we handle all aspects of visitor visa preparation. We specialize in drafting strong cover letters, organizing financial records, and establishing strong ties to your home country to maximize approval chances.",
    eligibility: [
      "Intention to visit the country temporarily for tourism, family, or business meetings.",
      "Proof of strong ties to your home country (job, property, family) indicating guaranteed return.",
      "Adequate financial status to support yourself and any dependents for the duration of stay.",
      "An invitation letter from a resident or host (strongly recommended for family visits)."
    ],
    documents: [
      "Valid passport with multiple blank pages.",
      "Comprehensive travel itinerary, including hotel bookings and return flight reservations.",
      "Bank statements showing stable balance for the past 6 months, plus recent tax returns.",
      "Employment verification letter, pay slips, or business registration certificates.",
      "Invitation letter from host with proof of host's legal status in the destination country.",
      "Detailed Cover Letter outlining the itinerary, intent, and commitment to return."
    ],
    process: [
      { step: 1, title: "Purpose & Duration Review", description: "Analyze the trip's objectives, itinerary, and relationship to hosts to customize the profile." },
      { step: 2, title: "Home Ties Documentation", description: "Identify and structure evidence of your employment, property ownership, and family roots." },
      { step: 3, title: "Financial Status Presentation", description: "Review bank records to present clean, logical, and sufficient self-funding proof." },
      { step: 4, title: "Application Preparation & Cover Letter", description: "Draft a personalized cover letter highlighting key strengths and submit the visa forms." }
    ],
    benefits: [
      "Custom cover letter drafting addressing common visa officer concerns.",
      "Expert scrutiny of financial files to eliminate red flags.",
      "Fast response processing with exact checklists tailored to your profile."
    ],
    faqs: [
      { question: "What is the most common reason for visitor visa refusal?", answer: "The most common reason is 'lack of strong ties to the home country,' leading visa officers to believe the applicant will not return, followed by unexplained or insufficient funds." },
      { question: "How long can I stay on a tourist visa?", answer: "Typically, visitor visas allow stays of up to 6 months per entry. Multi-entry visas can be valid for up to 10 years or until your passport expires." }
    ]
  },
  "business-visa": {
    slug: "business-visa",
    title: "Business & Investor Programs",
    shortDescription: "Establish or acquire businesses in major global economies with investor pathways.",
    heroSubtitle: "Expand your business horizons or invest in robust international economies.",
    overview: "Our Business and Investor Visa consultancy is tailored for entrepreneurs, high-net-worth individuals, and corporate executives seeking to invest, expand, or start a business abroad. We guide clients through complex investment programs, corporate transfers, and start-up visa regulations in countries like Canada, the USA, and UK.",
    eligibility: [
      "Minimum net worth requirements as specified by the designated investment program.",
      "Proven business management or ownership experience (usually 2-5 years).",
      "Feasible, innovative business plan showing benefit to the local economy.",
      "Commitment to making the minimum qualifying investment in a local enterprise."
    ],
    documents: [
      "Verified Net Worth statements compiled by a Chartered Accountant.",
      "Comprehensive Business Plan showing market research, job creation, and financials.",
      "Source of Funds documentation (verifying legal accumulation of assets).",
      "Corporate registration papers, tax reports, and business bank statements.",
      "Background verification records and clean record credentials."
    ],
    process: [
      { step: 1, title: "Net Worth & Profile Assessment", description: "Evaluate your net worth, business ownership history, and investment goals." },
      { step: 2, title: "Program Selection", description: "Match your profile with Start-Up Visa, Intra-Company Transfer, or provincial investor programs." },
      { step: 3, title: "Business Plan Development", description: "Co-write an executive-grade, fully compliant business plan targeting the host market." },
      { step: 4, title: "Sponsorship or Endorsement Filing", description: "Obtain required support letters (e.g., from designated venture capital funds or incubator programs)." },
      { step: 5, title: "Immigration Application", description: "Submit the work permit or residency application and guide you through investment verification." }
    ],
    benefits: [
      "Access to strategic global markets and trade networks.",
      "Fast-tracked pathways to Permanent Residency for your family.",
      "Professional business plan alignment with immigration benchmarks."
    ],
    faqs: [
      { question: "What is the Start-up Visa program?", answer: "It is a pathway for immigrant entrepreneurs with innovative business ideas who secure backing from designated venture capital funds, angel groups, or business incubators to launch their company abroad." },
      { question: "Must I prove the legal source of my investment funds?", answer: "Yes, all immigration departments strictly check the origin of funds to verify they were legally acquired through business profits, inheritance, investments, or property sales." }
    ]
  },
  "permanent-residency": {
    slug: "permanent-residency",
    title: "Permanent Residency (PR)",
    shortDescription: "Secure long-term residency status for your family through points-based immigration.",
    heroSubtitle: "Build a stable, long-term future with full residency rights in premium destinations.",
    overview: "Permanent Residency offers the freedom to live, work, and study anywhere in your chosen country, along with healthcare, social benefits, and a pathway to citizenship. We specialize in skilled migration programs, including Canada's Express Entry, Provincial Nominee Programs (PNPs), and Australia's General Skilled Migration (GSM) system.",
    eligibility: [
      "Age, education, work experience, and language skills scoring above the program cutoff.",
      "Credentials assessed and recognized as equivalent to local education standards.",
      "Language scores in IELTS, CELPIP, or PTE meeting benchmark requirements.",
      "Clean security clearances and medical examinations."
    ],
    documents: [
      "Educational Credential Assessment (ECA) certificate.",
      "Language test results (IELTS General / CELPIP / PTE).",
      "Detailed Employment Reference Letters with job duties matching occupational codes.",
      "Proof of funds showing required settlement amounts.",
      "Police Clearance Certificates (PCC) from all countries lived in for 6+ months.",
      "Passports, birth certificates, and marriage certificates."
    ],
    process: [
      { step: 1, title: "CRS / Points Calculation", description: "Calculate your points score to evaluate competitiveness in active pools." },
      { step: 2, title: "ECA & Language Test Guidance", description: "Advise on credential evaluation and help you prepare for language exams to maximize scores." },
      { step: 3, title: "Expression of Interest (EOI) Filing", description: "Submit your online profile to the Express Entry pool or state immigration portals." },
      { step: 4, title: "ITA Submission Prep", description: "Once an Invitation to Apply (ITA) is received, compile all reference letters, financials, and forms." },
      { step: 5, title: "e-APR Filing & Verification", description: "Perform final review of documentation and submit the electronic application for permanent residence." }
    ],
    benefits: [
      "Unconditional right to live, work, and study anywhere in the country.",
      "Access to state-funded healthcare, school systems, and social security benefits.",
      "Pathways to full citizenship and a powerful passport after meeting physical presence rules.",
      "Sponsorship privileges for eligible family members."
    ],
    faqs: [
      { question: "What is Express Entry?", answer: "It is Canada's online selection system for managing PR applications under the Federal Skilled Worker, Federal Skilled Trades, and Canadian Experience Class programs, using the Comprehensive Ranking System (CRS) to rank candidates." },
      { question: "How can I increase my CRS score?", answer: "You can increase your score by retaking language tests for higher bands, gaining additional years of skilled work experience, obtaining a master's degree, learning French, or securing a provincial nomination (PNP)." }
    ]
  },
  "spouse-visa": {
    slug: "spouse-visa",
    title: "Spousal Sponsorship",
    shortDescription: "Reunite with your husband, wife, or common-law partner quickly and securely.",
    heroSubtitle: "Bring your loved ones close with legally secure family sponsorship pathways.",
    overview: "Spousal Sponsorship enables citizens and permanent residents to sponsor their spouse, common-law partner, or conjugal partner to live with them as permanent residents. Our experts navigate the rigorous requirements to prove the genuineness of the relationship, ensuring couples are reunited without unnecessary delays.",
    eligibility: [
      "The sponsor must be a citizen or permanent resident of the destination country, at least 18 years old.",
      "The relationship must be legally valid (marriage certificate) or meet common-law definitions (cohabitation for 12 consecutive months).",
      "The sponsor must commit to a financial undertaking to support the sponsored partner.",
      "The relationship must be genuine and not entered into primarily for immigration purposes."
    ],
    documents: [
      "Marriage Certificate / Cohabitation declarations.",
      "Joint financial records (bank accounts, lease agreements, utility bills).",
      "Relationship history proof (photos together, chat logs, flight tickets, letters from friends/family).",
      "Sponsor's proof of citizenship or permanent residency.",
      "Sponsored partner's medical exam and Police Clearance certificates."
    ],
    process: [
      { step: 1, title: "Eligibility & Relationship Review", description: "Review relationship history, timelines, and living arrangements to confirm compliance." },
      { step: 2, title: "Relationship Portfolio Compilation", description: "Organize photos, chat history, and declarations into a structured narrative proof." },
      { step: 3, title: "Sponsorship Undertaking Preparation", description: "Assist the sponsor with undertaking declarations and financial background files." },
      { step: 4, title: "Application Packet Submission", description: "Assemble and submit the sponsorship package (both sponsor and applicant applications) to the processing center." }
    ],
    benefits: [
      "Sponsors are guided by clear checklists to avoid relationship authenticity refutations.",
      "Access to Open Work Permit options for the sponsored spouse during inland processing.",
      "Support with complex cases including previous marriages, children, or long separations."
    ],
    faqs: [
      { question: "How does immigration verify if a relationship is genuine?", answer: "Officers review joint financial assets, lease agreements, communication logs, photos, travel history, and detailed reference letters. In some cases, couples are called for separate, in-depth interviews." },
      { question: "What is the difference between Inland and Outland sponsorship?", answer: "Inland sponsorship is for couples already living together in the country, allowing the spouse to apply for an open work permit. Outland sponsorship is for spouses residing abroad, and typically has a faster appeal process if refused." }
    ]
  },
  "super-visa": {
    slug: "super-visa",
    title: "Super Visa for Parents & Grandparents",
    shortDescription: "Bring your parents and grandparents for extended family stays of up to 5 years.",
    heroSubtitle: "Reunite with your parents and grandparents for longer, stress-free family visits.",
    overview: "The Super Visa is a multi-entry visa designed specifically for parents and grandparents of citizens or permanent residents. It allows eligible family members to stay for up to 5 years per entry without renewing their status, keeping families united and close.",
    eligibility: [
      "Applicant must be the parent or grandparent of a citizen or permanent resident.",
      "Sponsor must meet minimum income thresholds (LICO) and provide financial support proof.",
      "Applicant must purchase valid private medical insurance from an approved company.",
      "Applicant must undergo a medical exam to ensure they do not pose health risks."
    ],
    documents: [
      "Letter of invitation from the child or grandchild residing in the destination country.",
      "Sponsor's proof of status (PR Card, Citizenship certificate) and tax forms (e.g., NOA in Canada).",
      "Proof of 1-year private medical insurance coverage matching minimum benefit requirements.",
      "Evidence of relationship (birth certificates linking parent to child).",
      "Valid passport and medical exam clearance report."
    ],
    process: [
      { step: 1, title: "Sponsor Income Check", description: "Verify the sponsor's household income against the Low-Income Cut-Off (LICO) criteria." },
      { step: 2, title: "Medical Insurance Sourcing", description: "Help source and verify standard-compliant private health insurance policies." },
      { step: 3, title: "Invitation Drafting", description: "Guide the sponsor in writing a detailed invitation letter summarizing support details." },
      { step: 4, title: "Super Visa Filing", description: "Complete the immigration forms, attach all supporting documents, and file the visa application." }
    ],
    benefits: [
      "Longer stay limits (up to 5 years per visit) compared to standard visitor visas (6 months).",
      "Valid for up to 10 years, allowing multiple entries and exits.",
      "Straightforward documentation and fast processing."
    ],
    faqs: [
      { question: "How is a Super Visa different from a standard visitor visa?", answer: "While both are multi-entry visas valid for up to 10 years, a visitor visa restricts the stay to 6 months per entry. The Super Visa allows eligible parents/grandparents to stay for up to 5 years continuously per visit." },
      { question: "Can a Super Visa holder work or study?", answer: "No, a Super Visa is strictly a visitor visa category. Holders are not authorized to work or enroll in academic programs during their stay." }
    ]
  },
  "refusal-cases": {
    slug: "refusal-cases",
    title: "Refusal & Appeal Services",
    shortDescription: "Analyze refusal grounds and file robust reapplications or appeals to reverse decisions.",
    heroSubtitle: "Overcome visa denials with expert case audits and professional re-filing.",
    overview: "Receiving a visa refusal can be stressful, but it is not necessarily the end of the road. Our specialist team audits refusal letters, requests visa officer notes (such as GCMS notes in Canada), identifies weak points in the original submission, and compiles a comprehensive, revised application to address every concern and secure approval.",
    eligibility: [
      "Applicants who have received a refusal for a study, work, tourist, or residency visa.",
      "Having a copy of the refusal letter and, if available, past application records.",
      "A willingness to address the specific grounds cited by the visa officer (such as insufficient funds or lack of home ties)."
    ],
    documents: [
      "Official Refusal Letter from the immigration authority.",
      "Complete copy of the previously submitted application forms and support files.",
      "Official Officer Notes (GCMS notes, CAIPS notes, or equivalent if retrieved).",
      "New, updated documentation addressing the refusal grounds (e.g., fresh financial statements, stronger home ties proof, updated employment verification).",
      "Detailed, advocate-level Cover Letter addressing each refusal point."
    ],
    process: [
      { step: 1, title: "Refusal Letter Audit", description: "Examine the checklist categories checked by the visa officer to determine the core rejection reasons." },
      { step: 2, title: "GCMS / Officer Notes Retrieval", description: "File requests to retrieve internal officer comments, revealing the precise concerns behind the refusal." },
      { step: 3, title: "Gap Analysis & Remediation", description: "Identify missing details, confusing financials, or weak declarations in the original package, and gather new evidence." },
      { step: 4, title: "Reapplication Composition", description: "Draft a legal-style submission letter addressing previous refusal points and submit a polished new application." }
    ],
    benefits: [
      "Deep understanding of internal visa officer evaluation frameworks.",
      "High rate of reversal/approval on second filings by resolving latent concerns.",
      "Clear, professional advice on whether to appeal to a tribunal or file a fresh, strengthened application."
    ],
    faqs: [
      { question: "Should I appeal or reapply after a visa refusal?", answer: "For most temporary resident visas (visitor, study, work), reapplying with stronger documents is faster and more cost-effective. For residency or family sponsorship, formal appeals to a tribunal or judicial review may be appropriate." },
      { question: "What are GCMS notes?", answer: "GCMS (Global Case Management System) notes are the detailed, internal notes written by Canadian visa officers while evaluating an application, explaining the exact rationale behind their decision." }
    ]
  }
};
