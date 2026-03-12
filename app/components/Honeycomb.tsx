"use client";

export default function Honeycomb() {
  // Flat 2D honeycomb — flat-top hexagons, viewed straight-on
  const size = 38; // radius of each hexagon
  const w = size * 2;
  const h = size * Math.sqrt(3);
  const gapX = w * 0.76;
  const gapY = h * 1.02;

  // [col, row, fill] — 0=outline, 1=filled terracotta
  const hexagons: [number, number, number][] = [
    // Top area — sparse outlines
    [4, 0, 0], [5, 0, 0],
    [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 0],
    // Upper middle
    [2, 2, 0], [3, 2, 0], [4, 2, 0], [5, 2, 0], [6, 2, 0],
    // Middle — some filled
    [2, 3, 0], [3, 3, 0], [4, 3, 1], [5, 3, 1], [6, 3, 0],
    // Core cluster
    [1, 4, 0], [2, 4, 0], [3, 4, 1], [4, 4, 1], [5, 4, 1], [6, 4, 0],
    // Lower middle
    [2, 5, 0], [3, 5, 1], [4, 5, 1], [5, 5, 0], [6, 5, 0],
    // Bottom
    [2, 6, 0], [3, 6, 0], [4, 6, 0], [5, 6, 0],
    [3, 7, 0], [4, 7, 0],
  ];

  function getCenter(col: number, row: number): [number, number] {
    const x = col * gapX + (row % 2 === 1 ? gapX * 0.5 : 0);
    const y = row * gapY * 0.5;
    return [x, y];
  }

  // Flat-top hexagon path
  function hexPath(cx: number, cy: number, r: number): string {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i);
      pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
    }
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + " Z";
  }

  // Calculate bounding box
  const allCenters = hexagons.map(([c, r]) => getCenter(c, r));
  const minX = Math.min(...allCenters.map(([x]) => x)) - size - 5;
  const minY = Math.min(...allCenters.map(([, y]) => y)) - size - 5;
  const maxX = Math.max(...allCenters.map(([x]) => x)) + size + 5;
  const maxY = Math.max(...allCenters.map(([, y]) => y)) + size + 5;

  return (
    <svg
      viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Decorative stem lines at bottom */}
      {(() => {
        const bottomCenter = getCenter(3, 7);
        return (
          <>
            <line
              x1={bottomCenter[0] - 15}
              y1={bottomCenter[1] + size + 10}
              x2={bottomCenter[0] - 35}
              y2={bottomCenter[1] + size + 45}
              stroke="#BBBBBB"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <line
              x1={bottomCenter[0] + 5}
              y1={bottomCenter[1] + size + 10}
              x2={bottomCenter[0] - 10}
              y2={bottomCenter[1] + size + 50}
              stroke="#BBBBBB"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          </>
        );
      })()}

      {hexagons.map(([col, row, fill], i) => {
        const [cx, cy] = getCenter(col, row);

        if (fill === 1) {
          return (
            <path
              key={i}
              d={hexPath(cx, cy, size)}
              fill="#C0704A"
              stroke="#A85D3A"
              strokeWidth="1"
            />
          );
        }

        return (
          <path
            key={i}
            d={hexPath(cx, cy, size)}
            fill="none"
            stroke="#999999"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}
