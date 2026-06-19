export interface CoachingDetail {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  duration: string;
  batchTimings: string[];
  structure: { section: string; details: string }[];
  mockTests: string;
  faculty: { name: string; designation: string; bio: string }[];
  materials: string[];
  price: string;
  faqs: { question: string; answer: string }[];
}

export const coachingData: Record<string, CoachingDetail> = {
  ielts: {
    slug: "ielts",
    name: "IELTS Prep",
    tagline: "International English Language Testing System - Academic & General Training",
    overview: "Our IELTS coaching course is engineered to help students and professionals achieve a band score of 7.5 or higher. Led by certified master trainers, the program combines strategies for Listening, Reading, Writing, and Speaking with extensive practice and assessment feedback.",
    duration: "4 Weeks / 8 Weeks programs available",
    batchTimings: [
      "Morning Batch: 08:00 AM - 10:00 AM",
      "Noon Batch: 12:00 PM - 02:00 PM",
      "Evening Batch: 06:00 PM - 08:00 PM",
      "Weekend Intensive: Saturday & Sunday 10:00 AM - 02:00 PM"
    ],
    structure: [
      { section: "Listening", details: "40 questions, 30 minutes. Focuses on matching, labeling, multiple-choice strategies, and accent familiarity (UK, Aus, US)." },
      { section: "Reading", details: "3 texts, 40 questions, 60 minutes. Focuses on skimming, scanning, locating information, and vocabulary building." },
      { section: "Writing", details: "Task 1 (Report/Letter) and Task 2 (Essay), 60 minutes. Learn structural planning, cohesion, and advanced grammar." },
      { section: "Speaking", details: "In-person interview simulation, 11-14 minutes. Focuses on fluency, vocabulary, pronunciation, and structures." }
    ],
    mockTests: "Every Saturday (Full-length mock exams mimicking actual test conditions with detailed band score analysis).",
    faculty: [
      { name: "Dr. Sarah Jenkins", designation: "Chief IELTS Master Trainer", bio: "15+ years experience, IDP Certified Trainer, ex-IELTS Examiner with a passion for helping students unlock band 8.0+." },
      { name: "Prof. Rohan Dev", designation: "Senior Writing & Speaking Coach", bio: "Author of English Grammar guides, CELTA certified with over a decade of experience in academic test prep." }
    ],
    materials: [
      "Official Cambridge Prep books and practice test sets.",
      "Custom vocabulary banks and idiom lists.",
      "Access to an online practice portal with over 100+ module-wise tests.",
      "Speaking recording archives with benchmark scores."
    ],
    price: "INR 8,500 (4 Weeks) | INR 15,000 (8 Weeks)",
    faqs: [
      { question: "What is the difference between IELTS Academic and General?", answer: "Academic IELTS is required for admissions to universities or professional registrations. General Training IELTS is used for immigration and work permits in countries like Canada and Australia." },
      { question: "How long is my IELTS score valid?", answer: "Your IELTS test report is valid for a period of 2 years from the date of the test." }
    ]
  },
  toefl: {
    slug: "toefl",
    name: "TOEFL Prep",
    tagline: "Test of English as a Foreign Language - Internet Based Test (iBT)",
    overview: "Our TOEFL prep course focuses on preparing students for the computer-based format. We cover all four modules, helping candidates master note-taking, keyboard timing, speaking into microphones, and structuring academic essays.",
    duration: "6 Weeks comprehensive course",
    batchTimings: [
      "Morning Batch: 09:00 AM - 11:00 AM",
      "Evening Batch: 07:00 PM - 09:00 PM"
    ],
    structure: [
      { section: "Reading", details: "Academic reading comprehension texts. Strategies for detail, inference, and vocabulary questions." },
      { section: "Listening", details: "Lectures and classroom conversations. Master note-taking techniques to capture key points." },
      { section: "Speaking", details: "Microphone-recorded integrated tasks. Learn timing, templates, and delivery structure." },
      { section: "Writing", details: "Integrated and Academic Discussion writing tasks. Master typing efficiency and argument structure." }
    ],
    mockTests: "Bi-weekly computer-based mock tests on specialized software that mimics the ETS TOEFL interface.",
    faculty: [
      { name: "Ms. Elena Rostova", designation: "Head TOEFL Instructor", bio: "ETS Certified TOEFL Trainer with 8+ years experience guiding students to average scores of 105+." }
    ],
    materials: [
      "ETS Official Guide to the TOEFL Test.",
      "Specialized computer testing software credentials.",
      "Daily practice sheets for integrated speaking and writing."
    ],
    price: "INR 10,000 (6 Weeks)",
    faqs: [
      { question: "How is the TOEFL speaking section scored?", answer: "The speaking section is recorded on a computer and evaluated by a combination of AI scoring and human raters certified by ETS." },
      { question: "Which countries accept TOEFL?", answer: "TOEFL is widely accepted by universities in the USA, Canada, UK, Australia, and New Zealand." }
    ]
  },
  pte: {
    slug: "pte",
    name: "PTE Academic",
    tagline: "Pearson Test of English Academic - Computerized Language Assessment",
    overview: "PTE is a fully computer-based test graded by advanced AI algorithms. Our specialized coaching program focuses on understanding the scoring engine, mastering prompt templates, and scoring high in speaking, reading, and listening modules.",
    duration: "4 Weeks crash course / 8 Weeks comprehensive",
    batchTimings: [
      "Morning Batch: 10:00 AM - 12:00 PM",
      "Evening Batch: 05:00 PM - 07:00 PM"
    ],
    structure: [
      { section: "Speaking & Writing", details: "Read Aloud, Repeat Sentence, Describe Image, Retell Lecture, Essay Writing. Focuses on oral fluency, pronunciation, and template usage." },
      { section: "Reading", details: "Multiple choice, Re-order paragraphs, Fill in the blanks. Focuses on grammar rules and contextual vocabulary." },
      { section: "Listening", details: "Summarize spoken text, Highlight correct summary, Write from dictation. Focuses on audio comprehension and spellings." }
    ],
    mockTests: "3 Full-length AI-scored mock tests with diagnostics pointing out spelling, pronunciation, or grammar errors.",
    faculty: [
      { name: "Mr. Amit Sharma", designation: "Lead PTE Coach", bio: "Scored perfect 90/90 in PTE Academic. Pearson Certified Trainer with over 6 years of coaching experience." }
    ],
    materials: [
      "Pearson Official Prep Material and sample question banks.",
      "Daily vocabulary lists and collocations guide.",
      "Access to online PTE AI scoring tool with immediate feedback."
    ],
    price: "INR 9,000 (4 Weeks) | INR 16,000 (8 Weeks)",
    faqs: [
      { question: "Why is PTE considered easier by some students?", answer: "Because PTE is entirely computer-graded, some students find it less stressful than a face-to-face IELTS interview, and standard templates can be used effectively for speaking and writing tasks." },
      { question: "How fast do I get PTE results?", answer: "PTE results are typically released very quickly, often within 24 to 48 hours after taking the test." }
    ]
  },
  "spoken-english": {
    slug: "spoken-english",
    name: "Spoken English",
    tagline: "Build Professional Communication, Fluency, and Confidence",
    overview: "Designed for students, professionals, and homemakers looking to communicate clearly. We focus on grammar fundamentals, public speaking, group discussions, business etiquette, and accent correction.",
    duration: "8 Weeks standard course",
    batchTimings: [
      "Noon Batch: 02:00 PM - 03:30 PM",
      "Evening Batch: 07:00 PM - 08:30 PM"
    ],
    structure: [
      { section: "Conversational English", details: "Daily dialogue practice, role-plays, situational conversations (at airport, hotel, office)." },
      { section: "Public Speaking", details: "Prepared speeches, extempore, presentations, and overcoming stage fear." },
      { section: "Business Writing & Etiquette", details: "E-mail writing, cover letter writing, mock interviews, and resume structuring." }
    ],
    mockTests: "Weekly interactive sessions and debates with peer feedback and individual review reports.",
    faculty: [
      { name: "Ms. Tanya Sen", designation: "Soft Skills & Communication Expert", bio: "Corporate communication coach with 12+ years experience shaping conversational fluency for executives and students." }
    ],
    materials: [
      "EEC Custom Spoken English Workbook.",
      "Daily conversation sheets and idioms dictionaries.",
      "Video recordings of mock interviews and speeches for self-assessment."
    ],
    price: "INR 6,000 (8 Weeks)",
    faqs: [
      { question: "Do you start from basic grammar?", answer: "Yes, our curriculum starts from sentence structure, tenses, and parts of speech, and transitions into advanced debate and interview prep." },
      { question: "Will this course help me prepare for job interviews?", answer: "Absolutely. The final two weeks of the course are dedicated to interview prep, resume writing, body language, and professional self-introductions." }
    ]
  }
};
