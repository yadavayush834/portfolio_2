import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "amber" | "emerald" | "none";
  interactive?: boolean;
}

export function Card({
  children,
  className,
  glow = "none",
  interactive = false,
  ...props
}: CardProps) {
  const glowStyles = {
    none: "",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(0,242,254,0.18)]",
    amber: "hover:border-amber-500/40 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.18)]",
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-[#0E111A]/80 backdrop-blur-xl p-6 transition-all duration-300 relative overflow-hidden",
        interactive && "hover:-translate-y-1 hover:border-white/20 cursor-pointer",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
