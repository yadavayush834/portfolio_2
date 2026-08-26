import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "amber";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", size = "md", icon, ...props }, ref) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_28px_rgba(0,242,254,0.55)] hover:scale-[1.02] active:scale-[0.98] border border-cyan-400/30",
      secondary:
        "bg-white/[0.07] text-white hover:bg-white/[0.12] active:scale-[0.98] border border-white/10 hover:border-white/20 shadow-sm",
      outline:
        "bg-transparent text-zinc-300 border border-zinc-700/80 hover:border-cyan-500/60 hover:text-white active:scale-[0.98]",
      ghost:
        "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] active:scale-[0.98]",
      cyan:
        "bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.2)] active:scale-[0.98]",
      amber:
        "bg-amber-500/10 text-amber-300 border border-amber-500/40 hover:bg-amber-500/20 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5 rounded-lg",
      md: "px-4 py-2 text-sm gap-2 rounded-xl",
      lg: "px-5 py-2.5 text-sm sm:text-base gap-2.5 rounded-xl font-medium",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center cursor-pointer transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
