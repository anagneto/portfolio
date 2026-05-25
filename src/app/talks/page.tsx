import Link from "next/link";

export const metadata = {
  title: "Talks — Ana Neto",
  description: "Guest talks and presentations by Ana Neto.",
};

interface Talk {
  title: string;
  description: string;
  href: string;
  label: string;
  download?: { href: string; label: string };
}

const talks: Talk[] = [
  {
    title: "Claude Code for Leaders — Your Team of Specialists",
    description:
      "Guest session for Happyfact. A ~30 min talk on directing a team of AI specialists.",
    href: "/talks/claude-code-for-leaders",
    label: "Happyfact",
    download: {
      href: "/talks/claude-code-for-leaders-workspace.zip",
      label: "Download the starter workspace (.zip)",
    },
  },
];

export default function TalksPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Background gradient orbs */}
      <div
        className="fixed top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(251,113,133,0.08)" }}
      />
      <div
        className="fixed bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(168,85,247,0.08)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm mb-16 transition-colors"
          style={{ color: "var(--text-muted)" }}
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
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          ana.neto
        </Link>

        {/* Header */}
        <div className="mb-20">
          <p
            className="font-mono text-sm mb-4 tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            TALKS
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Guest sessions &amp; presentations
          </h1>
          <p
            className="mt-4 text-lg max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Talks I&apos;ve given on building with AI, product development, and
            engineering.
          </p>
        </div>

        {/* Talks list */}
        <div className="flex flex-col gap-6">
          {talks.map((talk) => (
            <div
              key={talk.href}
              className="group border-gradient glass-card rounded-2xl p-8 hover-lift transition-all duration-300"
            >
              <Link href={talk.href} className="block">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block font-mono text-xs uppercase tracking-widest mb-3 px-3 py-1 rounded-full border"
                    style={{
                      color: "var(--accent)",
                      borderColor: "rgba(251,113,133,0.3)",
                      background: "rgba(251,113,133,0.07)",
                    }}
                  >
                    {talk.label}
                  </span>
                  <h2
                    className="text-2xl font-bold mb-3 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {talk.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {talk.description}
                  </p>
                </div>

                <div
                  className="shrink-0 mt-1 p-2 rounded-lg transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--accent)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
              </Link>

              {talk.download && (
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  <a
                    href={talk.download.href}
                    download
                    className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-lg border transition-colors"
                    style={{
                      color: "var(--accent)",
                      borderColor: "rgba(251,113,133,0.3)",
                      background: "rgba(251,113,133,0.07)",
                    }}
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
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                      />
                    </svg>
                    {talk.download.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
