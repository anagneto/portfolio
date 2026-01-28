"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Screenshot Component
function Screenshot({
  src,
  label,
  sublabel,
}: {
  src: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="group">
      <div className="transition-transform duration-500 ease-out group-hover:scale-[1.01]">
        <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50">
          <Image
            src={src}
            alt={label}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="mt-6 text-center text-base font-medium text-[#22c55e]">
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
      <span className="inline-block font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#22c55e] px-4 py-2 border border-[#22c55e]/30 rounded-full mb-6">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-[#a0a0b0] max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

// Flow Title Component
function FlowTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-medium text-[#22c55e] text-center mb-6 flex items-center justify-center gap-4">
      <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#22c55e]/50" />
      {children}
      <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#22c55e]/50" />
    </h3>
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
export default function OneShotPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="grid-bg min-h-screen relative">
        <Navigation />

        {/* Hero */}
        <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 text-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#fb7185]/10 rounded-full blur-[120px] translate-x-1/2" />

          <p className="font-mono text-sm text-[#22c55e] tracking-wider mb-4 animate-fade-in opacity-0">
            FOUNDER PROJECT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0 animate-delay-1">
            OneShot
          </h1>

          <p className="text-xl text-[#a0a0b0] max-w-2xl mb-8 animate-fade-in opacity-0 animate-delay-2">
            AI-powered video screening platform that helps companies hire faster.
            Solo-built from idea to production.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in opacity-0 animate-delay-3">
            {["Next.js", "TypeScript", "Supabase", "OpenAI", "Stripe"].map(
              (tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#606070] animate-fade-in opacity-0 animate-delay-4">
            <span>Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#22c55e] to-transparent animate-pulse" />
          </div>
        </header>

        {/* Recruiter Experience Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="Recruiter Experience"
              title="Hiring Dashboard"
              subtitle="Where companies manage roles, review candidates, and make hiring decisions"
            />

            {/* Dashboard Flow */}
            <div className="mb-20">
              <FlowTitle>Role Management</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                The dashboard shows all hiring roles at a glance. Each card displays
                applicant count, activity, and AI-generated fit scores. Companies can
                have multiple roles running simultaneously.
              </p>
              <Screenshot
                src="/projects/oneshot/dashboard.png"
                label="Dashboard"
                sublabel="Active roles with candidate fit breakdown"
              />
            </div>

            {/* AI Setup Flow */}
            <div className="mb-20">
              <FlowTitle>AI-Assisted Setup</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                Creating a new role is conversational. The AI assistant guides recruiters
                through defining the position, crafting screening questions, and setting
                up scoring criteria—all through natural chat.
              </p>
              <Screenshot
                src="/projects/oneshot/ai-setup.png"
                label="Role Setup Chat"
                sublabel="Conversational AI for role configuration"
              />
            </div>

            {/* Role Definition */}
            <div className="mb-20">
              <FlowTitle>Scoring System</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                Each role has custom scoring dimensions. The AI evaluates candidates
                across these criteria, providing consistent and objective assessments.
                Recruiters can see exactly how each dimension is weighted.
              </p>
              <Screenshot
                src="/projects/oneshot/role-definition.png"
                label="Role Definition"
                sublabel="Custom scoring dimensions and job details"
              />
            </div>
          </div>
        </section>

        {/* Assessment Reports Section */}
        <section className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="AI Analysis"
              title="Candidate Assessment"
              subtitle="How OneShot surfaces the best candidates automatically"
            />

            {/* Report List */}
            <div className="mb-20">
              <FlowTitle>Ranked Shortlist</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                Candidates are automatically ranked by total score. Each card shows
                the AI-generated summary, dimension scores, and quick actions to
                watch videos or download CVs. Top performers are highlighted.
              </p>
              <Screenshot
                src="/projects/oneshot/report-list.png"
                label="Assessment Report"
                sublabel="AI-ranked candidates with scores"
              />
            </div>

            {/* Candidate Detail */}
            <div>
              <FlowTitle>Deep Dive</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                Expanding a candidate reveals detailed AI analysis for each scoring
                dimension. Recruiters see exactly why a candidate scored well or poorly,
                with specific evidence from their video responses.
              </p>
              <Screenshot
                src="/projects/oneshot/candidate-detail.png"
                label="Candidate Details"
                sublabel="Dimension-by-dimension AI breakdown"
              />
            </div>
          </div>
        </section>

        {/* Candidate Experience Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="Candidate Experience"
              title="Application Flow"
              subtitle="A frictionless experience for applicants—no app downloads, no accounts"
            />

            {/* Application Overview */}
            <div className="mb-20">
              <FlowTitle>Welcome & Instructions</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                Candidates receive a unique link to apply. The overview page explains
                the 3-step process clearly: get the question, record your answer,
                submit. No prep needed—just think out loud.
              </p>
              <Screenshot
                src="/projects/oneshot/candidate-overview.png"
                label="Application Start"
                sublabel="Clear instructions, no barriers"
              />
            </div>

            {/* Candidate Form */}
            <div>
              <FlowTitle>Basic Info</FlowTitle>
              <p className="text-center text-[#a0a0b0] mb-8 max-w-2xl mx-auto">
                A simple form collects name, email, LinkedIn, and optional CV.
                Privacy-first messaging reassures candidates their data is only
                shared with the hiring team. Then straight to recording.
              </p>
              <Screenshot
                src="/projects/oneshot/candidate-form.png"
                label="Candidate Info"
                sublabel="Minimal friction, privacy-focused"
              />
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Technical Details"
              title="What I Built"
              subtitle="Solo full-stack development from architecture to deployment"
            />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#fb7185] uppercase tracking-wider mb-4">
                  Frontend
                </h3>
                <ul className="space-y-3">
                  {[
                    "Next.js 14 with App Router",
                    "TypeScript for type safety",
                    "Tailwind CSS + custom design system",
                    "WebRTC video recording",
                    "Framer Motion animations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#a0a0b0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#22c55e] uppercase tracking-wider mb-4">
                  Backend
                </h3>
                <ul className="space-y-3">
                  {[
                    "Supabase Edge Functions (Deno)",
                    "OpenAI API for transcription + analysis",
                    "Stripe for payments + webhooks",
                    "Resend for transactional emails",
                    "Row Level Security policies",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#a0a0b0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 shrink-0" />
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
                    challenge: "Video recording across devices",
                    solution: "Built custom WebRTC recorder with fallbacks for Safari, mobile browsers, and various permissions states",
                  },
                  {
                    challenge: "AI scoring consistency",
                    solution: "Engineered prompts with structured output, calibration examples, and scoring rubrics for reliable results",
                  },
                  {
                    challenge: "Payment edge cases",
                    solution: "Handled failed charges, subscription changes, refunds, and invoice generation with Stripe webhooks",
                  },
                  {
                    challenge: "Multi-language support",
                    solution: "Full PT/EN internationalization with next-intl, including AI prompts and email templates",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-white mb-1">{item.challenge}</p>
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
              href="https://oneshothiring.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#22c55e] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#22c55e]/90 transition-all mb-6"
            >
              Visit oneshothiring.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
