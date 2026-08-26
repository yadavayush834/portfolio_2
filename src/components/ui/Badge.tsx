import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "amber" | "emerald" | "outline" | "mono";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white/[0.06] text-zinc-300 border-white/10 hover:border-white/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_12px_-3px_rgba(0,242,254,0.3)]",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400/60 shadow-[0_0_12px_-3px_rgba(245,158,11,0.25)]",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_12px_-3px_rgba(16,185,129,0.25)]",
    outline: "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200",
    mono: "font-mono bg-zinc-900/80 text-zinc-300 border-zinc-700/60 text-[11px]",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
