"use client";

interface SparklineProps {
  direction: "down" | "up";
}

export default function Sparkline({ direction }: SparklineProps) {
  if (direction === "down") {
    return (
      <svg viewBox="0 0 150 50" className="w-[150px] h-[50px]" fill="none">
        <path
          d="M5 8 L18 11 L30 7 L42 16 L55 13 L68 20 L80 18 L92 26 L105 30 L118 33 L132 36 L145 43"
          stroke="#8B9A6B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8 L18 11 L30 7 L42 16 L55 13 L68 20 L80 18 L92 26 L105 30 L118 33 L132 36 L145 43 L145 50 L5 50 Z"
          fill="#8B9A6B"
          fillOpacity="0.08"
        />
        <polygon points="145,43 141,37 149,37" fill="#8B9A6B" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 40" className="w-[120px] h-[40px]" fill="none">
      <defs>
        <linearGradient id="upGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B9A6B" />
          <stop offset="60%" stopColor="#8B9A6B" />
          <stop offset="100%" stopColor="#C0704A" />
        </linearGradient>
        <linearGradient id="upFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B9A6B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#C0704A" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M5 43 L18 41 L30 38 L42 40 L55 35 L68 30 L80 27 L92 22 L105 24 L118 16 L132 11 L145 5"
        stroke="url(#upGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 43 L18 41 L30 38 L42 40 L55 35 L68 30 L80 27 L92 22 L105 24 L118 16 L132 11 L145 5 L145 50 L5 50 Z"
        fill="url(#upFill)"
      />
      <polygon points="145,5 141,11 149,11" fill="#C0704A" />
    </svg>
  );
}
