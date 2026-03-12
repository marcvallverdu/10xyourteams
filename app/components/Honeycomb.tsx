"use client";

export default function Honeycomb() {
  // Isometric hexagon generator — top face + left face + right face
  const hexSize = 36;
  const hexW = hexSize * 2;
  const hexH = hexSize * Math.sqrt(3);

  // Isometric projection offsets
  const isoX = hexW * 0.75;
  const isoY = hexH * 0.5;

  // Grid positions [col, row, fill] — fill: 0=wireframe, 1=terracotta, 0.5=light terracotta
  const hexagons: [number, number, number][] = [
    // Top area (wireframe)
    [2, 0, 0], [3, 0, 0], [4, 0, 0],
    [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0],
    [1, 2, 0], [2, 2, 0], [3, 2, 0.3], [4, 2, 0], [5, 2, 0],
    // Middle (mixed)
    [0, 3, 0], [1, 3, 0], [2, 3, 0.5], [3, 3, 1], [4, 3, 1], [5, 3, 0],
    // Lower center (terracotta cluster)
    [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0],
    [2, 5, 0.5], [3, 5, 1], [4, 5, 0],
    [3, 6, 0],
  ];

  function getHexCenter(col: number, row: number): [number, number] {
    const x = col * isoX + (row % 2 === 1 ? isoX / 2 : 0);
    const y = row * isoY;
    return [x + 60, y + 20];
  }

  // 3D isometric hexagon: top face
  function topFace(cx: number, cy: number, s: number): string {
    const h = s * 0.3; // depth
    const points = [
      [cx, cy - s * 0.58],
      [cx + s * 0.5, cy - s * 0.29],
      [cx, cy],
      [cx - s * 0.5, cy - s * 0.29],
    ];
    return points.map((p) => p.join(",")).join(" ");
  }

  // Left face
  function leftFace(cx: number, cy: number, s: number): string {
    const h = s * 0.3;
    const points = [
      [cx - s * 0.5, cy - s * 0.29],
      [cx, cy],
      [cx, cy + h],
      [cx - s * 0.5, cy - s * 0.29 + h],
    ];
    return points.map((p) => p.join(",")).join(" ");
  }

  // Right face
  function rightFace(cx: number, cy: number, s: number): string {
    const h = s * 0.3;
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
      viewBox="0 0 460 340"
      className="w-full h-auto max-w-[460px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting stem lines */}
      <line x1="60" y1="220" x2="100" y2="190" stroke="#CCCCCC" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="45" y1="240" x2="85" y2="210" stroke="#CCCCCC" strokeWidth="1" strokeDasharray="4 3" />

      {hexagons.map(([col, row, fill], i) => {
        const [cx, cy] = getHexCenter(col, row);
        const s = hexSize;

        if (fill === 0) {
          // Wireframe hexagon
          return (
            <g key={i}>
              <polygon
                points={topFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="1.5"
              />
              <polygon
                points={leftFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="1"
              />
              <polygon
                points={rightFace(cx, cy, s)}
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="1"
              />
            </g>
          );
        }

        // Filled hexagons (terracotta)
        const opacity = fill;
        return (
          <g key={i}>
            <polygon
              points={topFace(cx, cy, s)}
              fill="#C0704A"
              fillOpacity={opacity}
              stroke="#C0704A"
              strokeWidth="0.5"
            />
            <polygon
              points={leftFace(cx, cy, s)}
              fill="#A05A38"
              fillOpacity={opacity}
              stroke="#A05A38"
              strokeWidth="0.5"
            />
            <polygon
              points={rightFace(cx, cy, s)}
              fill="#D4825A"
              fillOpacity={opacity}
              stroke="#D4825A"
              strokeWidth="0.5"
            />
          </g>
        );
      })}
    </svg>
  );
}
