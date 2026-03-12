"use client";

interface SparklineProps {
  direction: "down" | "up";
}

export default function Sparkline({ direction }: SparklineProps) {
  if (direction === "down") {
    return (
      <svg viewBox="0 0 130 50" className="w-[130px] h-[50px]" fill="none">
        {/* Gray declining line with sharp angles */}
        <path
          d="M5 10 L15 8 L28 15 L38 12 L48 20 L58 18 L68 28 L78 25 L88 32 L98 35 L108 38"
          stroke="#777777"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Terracotta final segment continuing down */}
        <path
          d="M108 38 L118 42 L125 46"
          stroke="#C0704A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Small downward arrow */}
        <polygon points="125,46 121,41 128,43" fill="#C0704A" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 130 50" className="w-[130px] h-[50px]" fill="none">
      {/* Gray flat-ish line start */}
      <path
        d="M5 38 L15 36 L28 37 L38 34 L48 35 L58 32 L68 30"
        stroke="#777777"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Terracotta hockey-stick upward */}
      <path
        d="M68 30 L78 25 L88 18 L98 12 L108 7 L118 4 L125 3"
        stroke="#C0704A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
