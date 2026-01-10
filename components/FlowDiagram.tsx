"use client";

const steps = [
  {
    label: "Agent",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Request",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "402",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: "Pay",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Delivered",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export function FlowDiagram() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-6">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center gap-2 md:gap-4">
          <div
            className={`flex flex-col items-center gap-2 ${
              step.highlight ? "animate-slide-in" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-105 ${
                step.highlight
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-card border border-border text-text-muted"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`text-xs md:text-sm font-medium ${
                step.highlight ? "text-accent" : "text-text-muted"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-border flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
