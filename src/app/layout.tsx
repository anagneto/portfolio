import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ananeto.eu"),
  title: "Ana Neto — Product Engineer",
  description:
    "I design, build, and ship complete products. Web, mobile, and AI, from the first idea to live in production.",
  openGraph: {
    title: "Ana Neto — Product Engineer",
    description:
      "I design, build, and ship complete products. Web, mobile, and AI, from the first idea to live in production.",
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
