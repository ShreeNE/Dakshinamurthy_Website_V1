import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-6 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer font-semibold inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gold-vintage hover:bg-gold-bright text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    secondary:
      "bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white",
    outline:
      "border border-gold-vintage/35 hover:border-gold-bright bg-gold-vintage/5 hover:bg-gold-vintage/10 text-gold-vintage",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
