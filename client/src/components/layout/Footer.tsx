import { Quote } from "../../types/types";

interface FooterProps {
  dailyQuote: Quote | null;
  route: string;
}

export default function Footer({ dailyQuote, route }: FooterProps) {
  if (!dailyQuote || route === "landing") return null;

  return (
    <footer className="w-full border-t border-white/5 py-5 px-6 text-center bg-black/40 relative z-10">
      <p className="font-serif italic text-slate-400 text-xs max-w-2xl mx-auto">
        &ldquo;{dailyQuote.text}&rdquo;{" "}
        <span className="text-gold-vintage font-mono text-[10px] ml-1.5">
          — {dailyQuote.author} ({dailyQuote.category})
        </span>
      </p>
    </footer>
  );
}
