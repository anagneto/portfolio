import "./deck.css";
import Deck from "./Deck";

const TITLE = "Claude Code for Leaders";
const DESCRIPTION =
  "How non-technical leaders run a whole team of AI specialists with Claude Code, no coding required. A guest session for Happyfact, by Ana Neto.";
const URL = "/talks/claude-code-for-leaders";

export const metadata = {
  title: `${TITLE} — Ana Neto`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Ana Neto",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <div id="deck-root" className="deck-root">
      <Deck />
    </div>
  );
}
