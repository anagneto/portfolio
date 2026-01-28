"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Phone Frame Component
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
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02]">
        {/* Phone bezel */}
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[40px] p-3 shadow-2xl shadow-black/40">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
          {/* Screen */}
          <div className="relative rounded-[32px] overflow-hidden bg-[#153d4a] w-[220px]">
            <Image
              src={src}
              alt={label}
              width={220}
              height={476}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-[#fb7185]">{label}</p>
      <p className="text-xs text-[#606070]">{sublabel}</p>
    </div>
  );
}

// Display Frame Component
function DisplayFrame({
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
        {/* Monitor bezel */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-4 pb-10 shadow-2xl shadow-black/50">
          {/* Screen */}
          <div className="rounded-lg overflow-hidden bg-[#153d4a]">
            <Image
              src={src}
              alt={label}
              width={1080}
              height={608}
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Stand */}
        <div
          className="w-28 h-14 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] mx-auto -mt-5"
          style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
        />
      </div>
      <p className="mt-6 text-center text-base font-medium text-[#fb7185]">
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
      <span className="inline-block font-mono text-xs font-semibold tracking-[0.3em] uppercase text-[#fb7185] px-4 py-2 border border-[#fb7185]/30 rounded-full mb-6">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-[#a0a0b0] max-w-lg mx-auto">{subtitle}</p>
    </div>
  );
}

// Flow Title Component
function FlowTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-medium text-[#fb7185] text-center mb-10 flex items-center justify-center gap-4">
      <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#fb7185]/50" />
      {children}
      <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#fb7185]/50" />
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
export default function QQSCPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="grid-bg min-h-screen relative">
        <Navigation />

        {/* Hero */}
        <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 text-center overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#e8a838]/10 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#fb7185]/10 rounded-full blur-[120px] translate-x-1/2" />

          <p className="font-mono text-sm text-[#fb7185] tracking-wider mb-4 animate-fade-in opacity-0">
            CLIENT PROJECT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0 animate-delay-1">
            Quem Quer Ser Contabilista
          </h1>

          <p className="text-xl text-[#a0a0b0] max-w-2xl mb-8 animate-fade-in opacity-0 animate-delay-2">
            Real-time quiz game for accounting professionals. Built for 5,000+
            concurrent players at the Portuguese Certified Accountants Congress.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in opacity-0 animate-delay-3">
            {["React", "React Native", "Node.js", "WebSockets", "Redis"].map(
              (tech) => (
                <span
                  key={tech}
                  className="tech-badge"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#606070] animate-fade-in opacity-0 animate-delay-4">
            <span>Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#fb7185] to-transparent animate-pulse" />
          </div>
        </header>

        {/* Mobile Screens Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              label="Mobile Experience"
              title="Player App"
              subtitle="Native mobile experience for joining games and competing in real-time"
            />

            {/* Welcome Flow */}
            <div className="mb-20">
              <FlowTitle>Welcome & Entry</FlowTitle>
              <div className="flex flex-wrap justify-center gap-8">
                <PhoneFrame
                  src="/projects/qqsc/Initial Screen.png"
                  label="Home"
                  sublabel="Main entry point"
                />
                <PhoneFrame
                  src="/projects/qqsc/Login Screen 1.png"
                  label="Login"
                  sublabel="Enter game code"
                />
                <PhoneFrame
                  src="/projects/qqsc/Login Screen 2.png"
                  label="Profile"
                  sublabel="Create your identity"
                />
              </div>
            </div>

            {/* Onboarding Flow */}
            <div className="mb-20">
              <FlowTitle>Onboarding Flow</FlowTitle>
              <div className="flex flex-wrap justify-center gap-8">
                <PhoneFrame
                  src="/projects/qqsc/Onboarding Screen 1.png"
                  label="Step 1"
                  sublabel="How to play"
                />
                <PhoneFrame
                  src="/projects/qqsc/Onboarding Screen 2.png"
                  label="Step 2"
                  sublabel="Answer questions"
                />
                <PhoneFrame
                  src="/projects/qqsc/Onboarding Screen 3.png"
                  label="Step 3"
                  sublabel="Score points"
                />
                <PhoneFrame
                  src="/projects/qqsc/Onboarding Screen 4.png"
                  label="Step 4"
                  sublabel="Win prizes"
                />
              </div>
            </div>

            {/* Results */}
            <div>
              <FlowTitle>Results</FlowTitle>
              <div className="flex justify-center">
                <PhoneFrame
                  src="/projects/qqsc/Score Board.png"
                  label="Leaderboard"
                  sublabel="Final rankings"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Display Screens Section */}
        <section className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="Display Experience"
              title="Event Screen"
              subtitle="Large format displays for live events and conferences"
            />

            <div className="space-y-16">
              <DisplayFrame
                src="/projects/qqsc/Display App Game Starting.png"
                label="Game Starting"
                sublabel="Waiting for players to join"
              />

              <DisplayFrame
                src="/projects/qqsc/Display App Show Question.png"
                label="Live Question"
                sublabel="Real-time gameplay with leaderboard"
              />

              <DisplayFrame
                src="/projects/qqsc/Display App Show Question Copy.png"
                label="Answer Reveal"
                sublabel="Showing the correct answer"
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Technical Details"
              title="How It Was Built"
              subtitle="Architecture designed for real-time performance at scale"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#fb7185] uppercase tracking-wider mb-4">
                  The Challenge
                </h3>
                <p className="text-[#a0a0b0] leading-relaxed">
                  Build a live trivia game that could handle 5,000+ simultaneous
                  players at Portugal&apos;s largest accounting conference, with
                  sub-second response times for fair competition.
                </p>
              </div>

              {/* Solution */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-mono text-xs text-[#22c55e] uppercase tracking-wider mb-4">
                  The Solution
                </h3>
                <p className="text-[#a0a0b0] leading-relaxed">
                  WebSocket server with Redis for real-time state management.
                  React Native app for players, React web app for the stage
                  display, and a custom admin dashboard for game control.
                </p>
              </div>

              {/* Stack */}
              <div className="glass-card rounded-2xl p-8 md:col-span-2">
                <h3 className="font-mono text-xs text-[#f59e0b] uppercase tracking-wider mb-4">
                  What I Built
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Real-time WebSocket server (5K concurrent connections)",
                    "Player mobile app with instant feedback",
                    "Admin control dashboard for game masters",
                    "Stage leaderboard display with animations",
                    "Score calculation engine with fair timing",
                    "Load-balanced architecture for reliability",
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
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-[#606070]">
              Designed for the Portuguese Order of Certified Accountants
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[#fb7185] hover:text-[#fda4af] transition-colors"
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
