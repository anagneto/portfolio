"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Phone Frame Component for mobile screenshots
function PhoneFrame({
  src,
  label,
  sublabel,
}: {
  src: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="group flex flex-col items-center">
      <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[8px] border-[#2a2a3a] bg-[#1a1a2a] p-2 shadow-2xl shadow-black/50">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#2a2a3a] rounded-b-2xl z-10" />
          <div className="rounded-[2rem] overflow-hidden">
            <Image
              src={src}
              alt={label}
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-base font-medium text-[#a78bfa]">
        {label}
      </p>
      <p className="text-center text-sm text-[#606070]">{sublabel}</p>
    </div>
  );
}

// Section Header Component
function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#a78bfa] px-4 py-2 border border-[#a78bfa]/30 rounded-full mb-6">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-[#a0a0b0] max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/5"
          : ""
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-mono text-sm text-[#fb7185]">
          ana.neto
        </Link>
        <Link
          href="/#work"
          className="text-sm text-[#a0a0b0] hover:text-white transition-colors flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Work
        </Link>
      </div>
    </nav>
  );
}

// Main Page
export default function UnspiralPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="grid-bg min-h-screen relative">
        <Navigation />

        {/* Hero */}
        <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 text-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#fb7185]/10 rounded-full blur-[120px] translate-x-1/2" />

          <p className="font-mono text-sm text-[#a78bfa] tracking-wider mb-4 animate-fade-in opacity-0">
            FOUNDER PROJECT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0 animate-delay-1">
            Unspiral
          </h1>

          <p className="text-xl text-[#a0a0b0] max-w-2xl mb-8 animate-fade-in opacity-0 animate-delay-2">
            AI-powered emotional coach that helps you decode anxiety, overwhelm,
            and avoidance. Solo-built from concept to Google Play.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in opacity-0 animate-delay-3">
            {[
              "React Native",
              "Expo",
              "TypeScript",
              "Supabase",
              "Claude AI",
            ].map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#606070] animate-fade-in opacity-0 animate-delay-4">
            <span>Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#a78bfa] to-transparent animate-pulse" />
          </div>
        </header>

        {/* Onboarding Experience */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="User Experience"
              title="Onboarding Flow"
              subtitle="A warm introduction that explains what Unspiral is and how it helps"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <PhoneFrame
                src="/projects/unspiral/01-onboarding-hook.jpeg"
                label="Welcome"
                sublabel="The hook that resonates"
              />
              <PhoneFrame
                src="/projects/unspiral/02-onboarding-chat.jpeg"
                label="Chat Preview"
                sublabel="See the AI coach in action"
              />
              <PhoneFrame
                src="/projects/unspiral/03-onboarding-journal.jpeg"
                label="Journal"
                sublabel="Conversations become insights"
              />
              <PhoneFrame
                src="/projects/unspiral/04-onboarding-calendar.jpeg"
                label="Patterns"
                sublabel="Track emotional patterns over time"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Core Flow"
              title="How It Works"
              subtitle="From emotional overwhelm to clarity in one conversation"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Start a conversation",
                  desc: "Open the app when you notice anxiety, overwhelm, or avoidance. The AI coach meets you where you are with warm, precise questions.",
                },
                {
                  step: "02",
                  title: "Decode the signal",
                  desc: "The coach classifies what you're experiencing: intuition, anxiety response, intrusive thought, avoidance, or emotional processing.",
                },
                {
                  step: "03",
                  title: "Get a journal entry",
                  desc: "Each conversation is summarized into a structured journal entry with your emotion, threatened need, and a concrete next step.",
                },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-2xl p-8">
                  <span className="font-mono text-3xl font-bold text-[#a78bfa]/30">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a0a0b0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Psychology Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Psychology"
              title="Signal Classification"
              subtitle="Grounded in behavioral psychology — every response is mapped to a type of emotional signal"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  signal: "Intuition",
                  desc: "A calm, quiet knowing. Present-moment and rational. The coach helps you honor it.",
                  color: "#22c55e",
                },
                {
                  signal: "Anxiety Response",
                  desc: 'Jumping to worst case without thinking through resolution. "Under-thinking" disguised as overthinking.',
                  color: "#f59e0b",
                },
                {
                  signal: "Intrusive Thought",
                  desc: "Loud, persistent, irrational. The coach labels it and redirects — no analysis needed.",
                  color: "#ef4444",
                },
                {
                  signal: "Avoidance",
                  desc: "Self-sabotage meeting an unconscious need. The coach finds the need underneath.",
                  color: "#3b82f6",
                },
                {
                  signal: "Emotional Processing",
                  desc: "A legitimate feeling that needs to be felt, not fixed. Grief, sadness, anger as healthy responses.",
                  color: "#a78bfa",
                },
              ].map((item) => (
                <div
                  key={item.signal}
                  className="glass-card rounded-2xl p-6 border-l-2"
                  style={{ borderLeftColor: item.color }}
                >
                  <h3
                    className="font-mono text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{ color: item.color }}
                  >
                    {item.signal}
                  </h3>
                  <p className="text-sm text-[#a0a0b0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Technical Details"
              title="What I Built"
              subtitle="Solo full-stack development from architecture to app store submission"
            />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#fb7185] uppercase tracking-wider mb-4">
                  Mobile App
                </h3>
                <ul className="space-y-3">
                  {[
                    "React Native + Expo with file-based routing",
                    "Glassmorphism design system (lavender + frosted glass)",
                    "Streaming AI chat with real-time responses",
                    "Animated onboarding with 5 screens",
                    "Swipeable calendar for journal navigation",
                    "Drawer navigation with conversation history",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#a0a0b0]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#a78bfa] uppercase tracking-wider mb-4">
                  AI & Backend
                </h3>
                <ul className="space-y-3">
                  {[
                    "Claude Sonnet for chat + emotion classification",
                    "Claude Haiku for structured journal generation",
                    "Prompt caching for cost optimization",
                    "Tool-use loop for persistent user memory",
                    "Supabase Edge Functions (Deno runtime)",
                    "Row Level Security for data isolation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#a0a0b0]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Challenges */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-mono text-xs text-[#f59e0b] uppercase tracking-wider mb-6">
                Key Challenges Solved
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    challenge: "Streaming AI in React Native",
                    solution:
                      "Built custom streaming handler for Supabase Edge Functions that delivers real-time token-by-token responses to the mobile client",
                  },
                  {
                    challenge: "Consistent emotion classification",
                    solution:
                      "Designed a 5-type signal taxonomy with structured prompts, ensuring the AI produces reliable classifications grounded in psychology",
                  },
                  {
                    challenge: "Cross-conversation memory",
                    solution:
                      "Implemented a tool-use loop where the AI saves relevant facts during chat, then loads them into context for future conversations",
                  },
                  {
                    challenge: "Journal generation from chat",
                    solution:
                      "Used Claude Haiku with structured JSON extraction to convert freeform conversations into categorized journal entries",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-white mb-1">
                      {item.challenge}
                    </p>
                    <p className="text-sm text-[#a0a0b0]">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <a
              href="https://unspiral.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#a78bfa] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#a78bfa]/90 transition-all mb-6"
            >
              Visit unspiral.co
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <p className="text-sm text-[#606070] mb-6">
              Solo-built by Ana Neto
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[#fb7185] hover:text-[#fda4af] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              View more projects
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
