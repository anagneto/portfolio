import "./deck.css";
import Deck from "./Deck";

export const metadata = {
  title: "Claude Code for Leaders — Ana Neto",
  description: "Your team of specialists. Guest session for Happyfact.",
};

export default function Page() {
  return (
    <div className="deck-root">
      <Deck />
    </div>
  );
}
