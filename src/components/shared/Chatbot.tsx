"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  isHtml?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am your EEC Admissions & Visa Assistant. 🎓 How can I help you guide your study abroad or immigration path today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const quickReplies = [
    { label: "Canada SDS rules 🇨🇦", text: "What are Canada SDS visa rules?" },
    { label: "IELTS/PTE classes 📚", text: "Tell me about IELTS and PTE coaching" },
    { label: "Australia GS check 🇦🇺", text: "What is Australia Genuine Student check?" },
    { label: "Book Free consultation 🗓️", text: "How can I book a free consultation?" }
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Dynamic automated replies with typing delay
    setTimeout(() => {
      let botText = "";
      const lower = text.toLowerCase();

      if (lower.includes("canada") || lower.includes("sds") || lower.includes("gic")) {
        botText = `For **Canada Study Permits (SDS Stream)**, you need:<br />
        1. **Guaranteed Investment Certificate (GIC)** of CAD 20,635.<br />
        2. Paid first-year tuition fee receipt from a DLI college.<br />
        3. IELTS Academic score minimum 6.0 in each band, or PTE overall 60.<br />
        <br />
        Would you like to review full course requirements on our <a href="/services/study-visa" class="text-secondary font-bold hover:underline">Canada Study Visa Page</a>?`;
      } else if (lower.includes("australia") || lower.includes("genuine student") || lower.includes("gs")) {
        botText = `Australia has introduced the **Genuine Student (GS) Requirement** to evaluate visa profiles:<br />
        • You must demonstrate academic progression matching your past qualification.<br />
        • Provide proof of funding for at least 1 year of living cost (~AUD 29,710).<br />
        • Clear ROI and career tie-backs to your home country.<br />
        <br />
        Read our full <a href="/study-abroad/australia" class="text-secondary font-bold hover:underline">Australia Study Guide</a>.`;
      } else if (lower.includes("ielts") || lower.includes("pte") || lower.includes("coaching") || lower.includes("class")) {
        botText = `Our digital prep suites support **IELTS, PTE, TOEFL, and Spoken English**:<br />
        • Live interactive classrooms & standard practice sets.<br />
        • Regular full-length mock tests assessed by certified examiners.<br />
        • 95%+ success rate for students targeting 7.0+ Bands / 65+ PTE points.<br />
        <br />
        Check out schedules and fee sheets on our <a href="/coaching" class="text-secondary font-bold hover:underline">Coaching Index</a>.`;
      } else if (lower.includes("uk") || lower.includes("united kingdom") || lower.includes("cas")) {
        botText = `To study in the **United Kingdom (UK Student Route)**, you need:<br />
        • Confirmed **CAS** (Confirmation of Acceptance for Studies) from a licensed sponsor.<br />
        • Financial proof for 9 months' living costs (£12,006 inside London / £9,207 outside).<br />
        • English language assessment verified by British Council benchmarks.<br />
        <br />
        Review pathways on our <a href="/study-abroad/uk" class="text-secondary font-bold hover:underline">UK Study Guide</a>.`;
      } else if (lower.includes("usa") || lower.includes("f-1") || lower.includes("f1") || lower.includes("stanford") || lower.includes("i-20")) {
        botText = `For the **USA F-1 Student Visa**, you require:<br />
        • Form **I-20** issued by an SEVP-certified institution.<br />
        • SEVIS fee ($350) payment receipt & DS-160 application registration.<br />
        • Clear liquid funds for tuition + living costs.<br />
        • In-person mock prep sessions with our visa counselors to pass the embassy interview.<br />
        <br />
        Read more on our <a href="/study-abroad/usa" class="text-secondary font-bold hover:underline">USA Study Guide</a>.`;
      } else if (lower.includes("nz") || lower.includes("new zealand") || lower.includes("green list")) {
        botText = `**New Zealand** offers direct residency matches for graduates under the **Green List** occupation list:<br />
        • Requires Tier-1 NZ college offer letters.<br />
        • Evidence of NZD 20,000 yearly living expenses.<br />
        • Post-study work search visa of up to 3 years.<br />
        <br />
        Read the checklist on our <a href="/study-abroad/new-zealand" class="text-secondary font-bold hover:underline">New Zealand Guide</a>.`;
      } else if (lower.includes("book") || lower.includes("consultation") || lower.includes("free") || lower.includes("fee") || lower.includes("schedule")) {
        botText = `You can easily book a **Free Profile Evaluation** with our certified advisors:<br />
        • Input your academic details, scores, and target country.<br />
        • Choose a convenient date & live video slot.<br />
        • Receive a custom study roadmap outline.<br />
        <br />
        🚀 Go straight to our <a href="/book-consultation" class="text-secondary font-bold hover:underline">Online Booking Wizard</a> to secure your slot!`;
      } else if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("office") || lower.includes("location")) {
        botText = `We are headquartered in Connaught Place, New Delhi. You can reach our counselors directly:<br />
        • 📞 **Phone**: +91-98765 43210<br />
        • ✉️ **Email**: info@experteduconsultant.com<br />
        <br />
        Full directions and map locations are detailed on our <a href="/contact" class="text-secondary font-bold hover:underline">Contact Page</a>.`;
      } else {
        botText = `I want to make sure you get the most accurate support.<br />
        You can ask me about study visas for **Canada**, **Australia**, **UK**, **USA**, or **New Zealand**.<br />
        Alternatively, ask about our **IELTS/PTE classes** or how to **book a free consultation**.<br />
        <br />
        Or submit your profile directly via the <a href="/book-consultation" class="text-secondary font-bold hover:underline">Admissions Booking Wizard</a>.`;
      }

      const botMsg: Message = {
        sender: "bot",
        text: botText,
        timestamp: new Date(),
        isHtml: true
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="mb-2 mr-1 bg-white border border-border px-3.5 py-1.5 rounded-full shadow-lg text-[10px] font-bold text-primary flex items-center gap-1.5 pointer-events-none"
            >
              <Sparkles className="w-3 h-3 text-accent fill-accent animate-pulse" />
              <span>Need help? Chat with EEC AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform active:scale-95 border",
            isOpen
              ? "bg-white text-primary border-border hover:bg-neutral-50"
              : "bg-primary text-white border-primary hover:border-accent hover:shadow-primary/25"
          )}
          aria-label="Toggle chat assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-6 h-6 text-accent" />
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-24 right-6 w-[360px] max-w-[90vw] h-[500px] bg-white border border-border shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 p-0.5 border border-white/10 relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="EEC Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-bold text-sm text-white">EEC AI Advisor</h4>
                  <span className="text-[9px] text-emerald-400 font-semibold tracking-wider block">ONLINE • RESPONDING</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-5 overflow-y-auto bg-neutral-50 space-y-4 text-left">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed border",
                    msg.sender === "user"
                      ? "ml-auto bg-primary text-white border-primary rounded-tr-none"
                      : "bg-white text-foreground border-border rounded-tl-none"
                  )}
                >
                  {msg.isHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                      className="space-y-1 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-0.5"
                    />
                  ) : (
                    <p>{msg.text}</p>
                  )}
                  <span
                    className={cn(
                      "text-[8px] mt-1 block self-end",
                      msg.sender === "user" ? "text-white/50" : "text-foreground/40"
                    )}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}

              {/* Typing indicator bubble */}
              {isTyping && (
                <div className="bg-white border border-border text-foreground max-w-[70px] rounded-2xl rounded-tl-none p-3 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce delay-200" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Helper quick actions panel */}
            <div className="px-4 py-2 border-t bg-white flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
              {quickReplies.map((qr, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(qr.text)}
                  className="bg-neutral-50 border border-border/80 hover:bg-neutral-100/80 text-foreground/75 px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all select-none flex-shrink-0"
                >
                  {qr.label}
                </button>
              ))}
            </div>

            {/* Chat input block */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about study visa, IELTS, coaching..."
                className="flex-1 bg-neutral-50 border border-border/80 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-foreground"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-primary hover:bg-secondary text-white flex items-center justify-center flex-shrink-0 hover:shadow-md transition-all active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-accent" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
