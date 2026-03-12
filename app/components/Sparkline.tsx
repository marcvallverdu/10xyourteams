"use client";

interface SparklineProps {
  direction: "down" | "up";
}

export default function Sparkline({ direction }: SparklineProps) {
  if (direction === "down") {
    return (
      <svg viewBox="0 0 400 100" className="w-full h-[100px]" fill="none" preserveAspectRatio="none">
        <path
          d="M0 8 L30 6 L60 16 L90 12 L120 24 L150 20 L180 34 L210 30 L240 46 L270 52 L300 62 L330 72 L360 82"
          stroke="#777777"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M360 82 L380 88 L400 96"
          stroke="#C0704A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="400,96 394,88 398,92" fill="#C0704A" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 100" className="w-full h-[100px]" fill="none" preserveAspectRatio="none">
      <path
        d="M0 88 L30 86 L60 88 L90 84 L120 85 L150 80 L180 76 L210 70"
        stroke="#777777"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M210 70 L240 56 L270 40 L300 26 L330 16 L360 8 L400 3"
        stroke="#C0704A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
