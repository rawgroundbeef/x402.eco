"use client";

interface LogoProps {
  size?: "sm" | "md";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const dimensions = size === "sm" ? "w-7 h-7" : "w-9 h-9";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={`${dimensions} text-accent ${className}`}
    >
      {/* Earth globe */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Equator */}
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Prime meridian */}
      <ellipse
        cx="16"
        cy="16"
        rx="5"
        ry="14"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}
