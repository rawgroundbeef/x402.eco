"use client";

interface InfoButtonProps {
  label: string;
  onClick: () => void;
}

export function InfoButton({ label, onClick }: InfoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors group"
    >
      <svg
        className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-medium link-underline">{label}</span>
    </button>
  );
}
