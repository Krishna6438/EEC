export interface SuccessStory {
  id: string;
  name: string;
  avatar: string;
  country: string;
  visaType: string;
  university: string;
  course: string;
  rating: number;
  testimonial: string;
  videoUrl?: string; // Optional link to a success video
}

export const successStoriesData: SuccessStory[] = [
  {
    id: "story-1",
    name: "Kabir Mehta",
    avatar: "KM",
    country: "Canada",
    visaType: "Study Visa (SDS)",
    university: "University of Waterloo",
    course: "M.Eng in Software Engineering",
    rating: 5,
    testimonial: "Expert Education Consultant made my Canadian dreams a reality. Their guidance on the SDS stream and help with the SOP and GIC setup was seamless. The visa got approved in just 12 days! I highly recommend their professional services.",
    videoUrl: "#"
  },
  {
    id: "story-2",
    name: "Priya Nair",
    avatar: "PN",
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    university: "University of Melbourne",
    course: "Master of Public Health",
    rating: 5,
    testimonial: "The new Genuine Student (GS) requirement for Australia seemed daunting at first, but the EEC team prepared me through multiple mock interviews. Their attention to detail on my financial documents was top-notch. Absolutely stellar experience!",
    videoUrl: "#"
  },
  {
    id: "story-3",
    name: "Dr. Rohan Chawla",
    avatar: "RC",
    country: "United Kingdom",
    visaType: "Skilled Work Visa",
    university: "NHS Trust Hospital",
    course: "Registrar - Cardiology",
    rating: 5,
    testimonial: "Securing a Certificate of Sponsorship and navigating the UK's points-based work permit system required expert advisory. EEC audited my profile, coordinated with my employer's legal counsel, and submitted a flawless application. Highly recommended for professionals.",
    videoUrl: "#"
  },
  {
    id: "story-4",
    name: "Meera Deshmukh",
    avatar: "MD",
    country: "USA",
    visaType: "F-1 Student Visa",
    university: "Stanford University",
    course: "M.S. in Data Science",
    rating: 5,
    testimonial: "Applying to an Ivy League-level university in the US requires a highly compelling profile. The consultants at EEC helped me refine my statement of purpose, polished my resume, and conducted rigorous mock interviews for the embassy appointment. A truly premium consultancy.",
    videoUrl: "#"
  },
  {
    id: "story-5",
    name: "Sandeep & Ritu Gill",
    avatar: "SR",
    country: "Canada",
    visaType: "Spouse Visa & Open Work Permit",
    university: "Toronto, ON",
    course: "N/A",
    rating: 5,
    testimonial: "Reuniting with my wife in Canada was our highest priority. EEC handled our spousal sponsorship and inland open work permit concurrently. Their list of relationship proofs was incredibly thorough. We got our approval without a single query.",
    videoUrl: "#"
  }
];
