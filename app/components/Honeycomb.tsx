"use client";

export default function Honeycomb() {
  const hexSize = 32;
  const hexW = hexSize * 2;
  const hexH = hexSize * Math.sqrt(3);
  const isoX = hexW * 0.75;
  const isoY = hexH * 0.5;

  // Grid positions [col, row, fill] — fill: 0=wireframe, 1=terracotta, 0.5=light terracotta
  const hexagons: [number, number, number][] = [
    // Top rows (wireframe, sparse)
    [3, 0, 0], [4, 0, 0],
    [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0],
    [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [5, 2, 0], [6, 2, 0],
    // Middle rows (transition zone)
    [1, 3, 0], [2, 3, 0], [3, 3, 0.3], [4, 3, 0.3], [5, 3, 0], [6, 3, 0],
    // Core filled area
    [0, 4, 0], [1, 4, 0], [2, 4, 0.5], [3, 4, 1], [4, 4, 1], [5, 4, 0.5], [6, 4, 0],
    [1, 5, 0], [2, 5, 1], [3, 5, 1], [4, 5, 1], [5, 5, 1],
    [2, 6, 0.5], [3, 6, 1], [4, 6, 1], [5, 6, 0.3],
    // Bottom (taper)
    [3, 7, 0.3], [4, 7, 0],
  ];

  function getHexCenter(col: number, row: number): [number, number] {
    const x = col * isoX + (row % 2 === 1 ? isoX / 2 : 0);
    const y = row * isoY;
    return [x + 40, y + 15];
  }

  function topFace(cx: number, cy: number, s: number): string {
    const points = [
      [cx, cy - s * 0.58],
      [cx + s * 0.5, cy - s * 0.29],
      [cx, cy],
      [cx - s * 0.5, cy - s * 0.29],
    ];
    return points.map((p) => p.join(",")).join(" ");
  }

  function leftFace(cx: number, cy: number, s: number): string {
    const h = s * 0.35;
    const points = [
      [cx - s * 0.5, cy - s * 0.29],
      [cx, cy],
      [cx, cy + h],
      [cx - s * 0.5, cy - s * 0.29 + h],
    ];
    return points.map((p) => p.join(",")).join(" ");
  }

  function rightFace(cx: number, cy: number, s: number): string {
    const h = s * 0.35;
    const points = [
      [cx + s * 0.5, cy - s * 0.29],
      [cx, cy],
      [cx, cy + h],
      [cx + s * 0.5, cy - s * 0.29 + h],
    ];
    return points.map((p) => p.join(",")).join(" ");
  }

  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting stem lines at bottom-left */}
      <line x1="30" y1="270" x2="70" y2="240" stroke="#C8C8C8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="15" y1="290" x2="55" y2="260" stroke="#C8C8C8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="40" y1="285" x2="80" y2="255" stroke="#C8C8C8" strokeWidth="1" strokeDasharray="4 3" />

      {hexagons.map(([col, row, fill], i) => {
        const [cx, cy] = getHexCenter(col, row);
        const s = hexSize;

        if (fill === 0) {
          return (
            <g key={i}>
              <polygon
                points={topFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="1.2"
              />
              <polygon
                points={leftFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="0.8"
              />
              <polygon
                points={rightFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="0.8"
              />
            </g>
          );
        }

        const opacity = fill;
        return (
          <g key={i}>
            <polygon
              points={topFace(cx, cy, s)}
              fill="#C0704A"
              fillOpacity={opacity}
              stroke="#B06040"
              strokeWidth="0.5"
              strokeOpacity={opacity}
            />
            <polygon
              points={leftFace(cx, cy, s)}
              fill="#9A5535"
              fillOpacity={opacity}
              stroke="#8A4A2E"
              strokeWidth="0.5"
              strokeOpacity={opacity}
            />
            <polygon
              points={rightFace(cx, cy, s)}
              fill="#D88060"
              fillOpacity={opacity}
              stroke="#C87050"
              strokeWidth="0.5"
              strokeOpacity={opacity}
            />
          </g>
        );
      })}
    </svg>
  );
}
