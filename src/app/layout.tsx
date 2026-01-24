import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Neto | Full-Stack JavaScript Developer",
  description:
    "8+ years building web and mobile apps. React, React Native, Next.js specialist. From AI-powered platforms to real-time systems.",
  openGraph: {
    title: "Ana Neto — Full-Stack JavaScript Developer",
    description:
      "8+ years building web and mobile apps. I take projects from idea to deployment.",
    siteName: "Ana Neto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
