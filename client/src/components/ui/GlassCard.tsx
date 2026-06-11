import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "gold" | "dark";
}

export default function GlassCard({
  children,
  variant = "default",
  className = "",
  ...props
}: GlassCardProps) {
  const baseStyle = "backdrop-blur-md rounded-2xl transition-all duration-500";

  const variants = {
    default: "bg-white/[0.02] border border-white/[0.05] p-6",
    gold: "bg-white/[0.01] border border-gold-vintage/15 p-6 hover:border-gold-vintage/30",
    dark: "bg-black/65 border border-white/[0.08] p-6",
  };

  return (
    <div
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
