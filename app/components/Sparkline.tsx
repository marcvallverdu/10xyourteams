"use client";

interface SparklineProps {
  direction: "down" | "up";
}

export default function Sparkline({ direction }: SparklineProps) {
  if (direction === "down") {
    return (
      <svg viewBox="0 0 400 60" className="w-full h-[60px]" fill="none" preserveAspectRatio="none">
        <path
          d="M0 12 L30 10 L60 18 L90 14 L120 22 L150 19 L180 28 L210 25 L240 33 L270 36 L300 40 L330 44 L360 48"
          stroke="#777777"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M360 48 L380 52 L400 56"
          stroke="#C0704A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="400,56 394,50 398,54" fill="#C0704A" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 60" className="w-full h-[60px]" fill="none" preserveAspectRatio="none">
      <path
        d="M0 50 L30 48 L60 49 L90 46 L120 47 L150 44 L180 42 L210 40"
        stroke="#777777"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M210 40 L240 34 L270 26 L300 18 L330 12 L360 7 L400 3"
        stroke="#C0704A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
