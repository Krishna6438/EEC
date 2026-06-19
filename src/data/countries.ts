export interface CountryDetail {
  slug: string;
  name: string;
  flag: string; // Emoji flag or code
  heroSubtitle: string;
  overview: string;
  topUniversities: string[];
  popularPrograms: string[];
  tuitionFees: string;
  scholarships: string[];
  livingCosts: string;
  studentVisaInfo: string;
  careerOpportunities: string;
  prPathway: string;
  faqs: { question: string; answer: string }[];
}

export const countriesData: Record<string, CountryDetail> = {
  canada: {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    heroSubtitle: "Study in the world's most welcoming nation with high-quality education and excellent post-grad opportunities.",
    overview: "Canada is globally recognized for its exceptional quality of life, outstanding education system, and welcoming multicultural environment. It ranks among the top international study destinations, offering robust post-graduation work opportunities and transparent pathways to permanent residency.",
    topUniversities: [
      "University of Toronto (U of T)",
      "University of British Columbia (UBC)",
      "McGill University",
      "University of Waterloo",
      "McMaster University",
      "University of Alberta"
    ],
    popularPrograms: [
      "Computer Science & Software Engineering",
      "Business Administration & MBA",
      "Data Science & Analytics",
      "Engineering (Civil, Mechanical, Electrical)",
      "Healthcare & Nursing"
    ],
    tuitionFees: "CAD 15,000 - CAD 35,000 per year (Undergraduate) | CAD 18,000 - CAD 40,000 per year (Postgraduate)",
    scholarships: [
      "Vanier Canada Graduate Scholarships",
      "Lester B. Pearson International Scholarship Program",
      "Karen McKellin International Leader of Tomorrow Award",
      "University of Waterloo International Master's Awards"
    ],
    livingCosts: "CAD 12,000 - CAD 20,000 per year (depends on location and accommodation style)",
    studentVisaInfo: "Requires a study permit issued under the SDS (Student Direct Stream) or non-SDS path. SDS offers faster processing for candidates with an IELTS band score of 6.0 overall (or equivalent), tuition payment confirmation, and a CAD 20,635 Guaranteed Investment Certificate (GIC).",
    careerOpportunities: "Highly active labor market. International students can work up to 20-24 hours per week off-campus during terms. High demand in tech, engineering, healthcare, and finance sectors.",
    prPathway: "Canada offers excellent PR pathways through the Post-Graduation Work Permit (PGWP), which matches study duration up to 3 years. This work experience can be leveraged for PR via Express Entry (Canadian Experience Class) or Provincial Nominee Programs (PNPs).",
    faqs: [
      { question: "What is the SDS stream for Canada?", answer: "The Student Direct Stream (SDS) is an expedited study permit processing program for students from selected countries. It has specific prerequisites like paying first-year tuition, purchasing a GIC, and scoring minimum bands in IELTS." },
      { question: "Can I bring my spouse to Canada while I study?", answer: "Yes, spouses of full-time international students enrolled in eligible degree or graduate-level programs can apply for an Open Work Permit, letting them work full-time." }
    ]
  },
  australia: {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    heroSubtitle: "Study down under at top-ranking institutions, enjoying stunning landscapes and global career options.",
    overview: "Australia offers world-class education, a laid-back lifestyle, and dynamic cities. With 7 universities in the global top 100, Australia provides top-tier academic standards, practical industry integration, and extensive post-study work rights.",
    topUniversities: [
      "Australian National University (ANU)",
      "University of Melbourne",
      "University of Sydney",
      "University of New South Wales (UNSW)",
      "University of Queensland (UQ)",
      "Monash University"
    ],
    popularPrograms: [
      "Information Technology & Cyber Security",
      "Engineering & Architecture",
      "Accounting & Finance",
      "Nursing & Public Health",
      "Agricultural Sciences"
    ],
    tuitionFees: "AUD 20,000 - AUD 45,000 per year (Undergraduate) | AUD 22,000 - AUD 48,000 per year (Postgraduate)",
    scholarships: [
      "Destination Australia Scholarships",
      "Australia Awards Scholarships",
      "Vice-Chancellor's International Scholarships",
      "Research Training Program (RTP) Scholarships"
    ],
    livingCosts: "AUD 21,000 - AUD 29,000 per year (covering food, transport, and utilities)",
    studentVisaInfo: "Student Visa (Subclass 500) requires a Confirmation of Enrolment (CoE), Genuine Student (GS) assessment compliance, proof of financials matching the required annual threshold, and Overseas Student Health Cover (OSHC).",
    careerOpportunities: "Students can work up to 48 hours per fortnight. Excellent opportunities in hospitality, retail, IT, and skilled trades. Major cities offer vibrant business hubs.",
    prPathway: "Australia has a clear points-based migration system. Grads can apply for a Temporary Graduate Visa (Subclass 485) to gain professional experience, which counts towards Skilled Independent (Subclass 189) or Skilled Nominated (Subclass 190) PR visas.",
    faqs: [
      { question: "What is the Genuine Student (GS) requirement?", answer: "The Genuine Student (GS) requirement is a metric used by Australian immigration to assess the applicant's background, study motivations, course relevance, and future plans, ensuring their primary goal is temporary study." },
      { question: "Is health insurance mandatory in Australia?", answer: "Yes, Overseas Student Health Cover (OSHC) is a mandatory requirement for Australia's student visa and must cover the entire duration of your stay." }
    ]
  },
  uk: {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    heroSubtitle: "Study in historic universities with fast-paced, high-value degrees and access European markets.",
    overview: "The United Kingdom hosts some of the oldest and most prestigious universities in the world. Offering shorter degree structures (typically 3-year bachelor's and 1-year master's), the UK is a cost-effective, high-prestige choice for international education.",
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
      "University of Edinburgh",
      "University of Manchester"
    ],
    popularPrograms: [
      "MBA & Business Management",
      "Law & International Relations",
      "Medicine & Biomedical Sciences",
      "Art, Design & Media",
      "Artificial Intelligence & Software Engineering"
    ],
    tuitionFees: "GBP 12,000 - GBP 26,000 per year (Undergraduate) | GBP 14,000 - GBP 32,000 per year (Postgraduate)",
    scholarships: [
      "Chevening Scholarships (Fully Funded)",
      "Commonwealth Scholarships",
      "GREAT Scholarships",
      "Marshall Scholarships"
    ],
    livingCosts: "GBP 12,000 - GBP 16,000 per year (higher in London)",
    studentVisaInfo: "Requires a Student Visa (formerly Tier 4) based on a points system. Applicants must receive a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor and prove financial adequacy via bank deposits held for 28 consecutive days.",
    careerOpportunities: "Allowable work hours are up to 20 hours per week during term-time. Strong internship availability in London and major regional hubs.",
    prPathway: "Under the UK's Graduate Route (Post-Study Work Visa), graduates can stay and work for 2 years (3 years for PhDs). Securing a skilled job during this time allows a transition to the Skilled Worker Visa, which offers a path to Indefinite Leave to Remain (ILR).",
    faqs: [
      { question: "How long can I work in the UK after graduating?", answer: "You can work for 2 years after graduating from a bachelor's or master's program, and 3 years after a PhD, via the Graduate Route visa." },
      { question: "Can I pay my tuition in installments in the UK?", answer: "Yes, most UK universities offer structured installment payment plans (typically 2 or 3 payments per academic year) to help manage financial planning." }
    ]
  },
  usa: {
    slug: "usa",
    name: "United States of America",
    flag: "🇺🇸",
    heroSubtitle: "Study at top-tier research hubs in the world's largest economy with high industry integration.",
    overview: "The United States is home to world-renowned research facilities, Ivy League universities, and unmatched networking connections in the heart of Silicon Valley, Wall Street, and global corporations. It offers unparalleled academic flexibility and research prestige.",
    topUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Harvard University",
      "California Institute of Technology (Caltech)",
      "University of California, Berkeley (UCB)",
      "Columbia University"
    ],
    popularPrograms: [
      "STEM Programs (Computer Science, Data, Biotech)",
      "MBA & Finance",
      "Psychology & Social Sciences",
      "Film, Arts & Journalism",
      "Mechanical & Aerospace Engineering"
    ],
    tuitionFees: "USD 22,000 - USD 55,000 per year (State Universities) | USD 40,000 - USD 75,000 per year (Private / Ivy League)",
    scholarships: [
      "Fulbright Foreign Student Program",
      "Hubert H. Humphrey Fellowship Program",
      "University Merit Scholarships (Institutional)",
      "AAUW International Fellowships"
    ],
    livingCosts: "USD 15,000 - USD 25,000 per year (varies significantly between states)",
    studentVisaInfo: "Requires an F-1 Student Visa. The process involves securing an I-20 form from the university, paying the SEVIS fee, and passing a mandatory in-person visa interview at the local US embassy.",
    careerOpportunities: "Students can work on-campus for up to 20 hours per week. Access to global tech giants, investment banks, and research facilities.",
    prPathway: "Graduates are eligible for 12 months of Optional Practical Training (OPT). STEM degree graduates can apply for a 24-month OPT extension, allowing up to 3 years of work. Many transition to H-1B specialty occupation visas, leading to employer-sponsored Green Cards.",
    faqs: [
      { question: "What is OPT and CPT?", answer: "CPT (Curricular Practical Training) allows F-1 students to do off-campus internships related to their major during study. OPT (Optional Practical Training) allows them to work full-time in their field for 1 to 3 years after graduation." },
      { question: "How hard is the US embassy interview?", answer: "The interview is a critical step. Officers assess academic intent, capability to fund the program, and ties to the home country. We provide specialized mock training to help you answer questions confidently." }
    ]
  },
  "new-zealand": {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    heroSubtitle: "Study in a safe, pristine environment with world-class education and relaxed post-study work rules.",
    overview: "New Zealand offers a combination of world-class academic institutions, a safe and friendly environment, and exceptional natural beauty. With all of its universities ranked in the top 3% globally, it is an excellent destination for research, engineering, and vocational studies.",
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "Lincoln University"
    ],
    popularPrograms: [
      "Information Technology & Software Development",
      "Tourism, Hospitality & Culinary Arts",
      "Agriculture & Environmental Management",
      "Construction Management & Engineering",
      "Biotechnology"
    ],
    tuitionFees: "NZD 22,000 - NZD 38,000 per year (Undergraduate) | NZD 26,000 - NZD 42,000 per year (Postgraduate)",
    scholarships: [
      "New Zealand Manaaki Scholarships",
      "University of Auckland International Student Scholarships",
      "Tongarewa Scholarship at Victoria University",
      "Lincoln University International Graduate Scholarships"
    ],
    livingCosts: "NZD 18,000 - NZD 25,000 per year",
    studentVisaInfo: "Requires a Student Visa. Requires a Fee Paying student visa application, showing an offer of place, confirmation of tuition fee payment, and proof of NZD 20,000 per year for living expenses.",
    careerOpportunities: "Students can work up to 20 hours per week during study terms and full-time during holidays. Strong vocational demand in construction, hospitality, and agriculture.",
    prPathway: "New Zealand offers Post-Study Work Visas (PSWV) for up to 3 years. Graduates with qualification levels matching the Skilled Migrant Category or Green List occupations have direct or fast-tracked pathways to residency.",
    faqs: [
      { question: "What is New Zealand's Green List?", answer: "The Green List is a list of high-skill, in-demand roles that offer fast-tracked or direct-to-residence pathways for qualified professionals, including engineers, doctors, and IT specialists." },
      { question: "Is IELTS mandatory for New Zealand?", answer: "Yes, New Zealand requires proof of English language proficiency. IELTS Academic, PTE Academic, or TOEFL are accepted, with scores depending on the level of course." }
    ]
  }
};
