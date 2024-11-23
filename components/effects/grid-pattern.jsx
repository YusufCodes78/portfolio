"use client";
import { React, useId } from "react";
export const Grid = ({ pattern, size, direction }) => {
  function generateUniquePairs() {
    const pairs = new Set();

    while (pairs.size < 5) {
      const pair = [
        Math.floor(Math.random() * 3) + 7,
        Math.floor(Math.random() * 2) + 3,
      ];

      // Convert the array to a string to use in Set (since Set only stores unique values)
      pairs.add(pair.toString());
    }

    // Convert back to array of arrays
    return Array.from(pairs).map((pair) => pair.split(",").map(Number));
  }
  const p = pattern ?? generateUniquePairs();
  return direction === "left" ? (
    <div className="pointer-events-none absolute md:left-1/2 left-1/3 -bottom-64 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(transparent,white)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#0b011d]/10 dark:to-[#0b011d]/30 from-[#0b011d]/10 to-[#0b011d]/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlayfill-white/10 stroke-white/10"
        />
      </div>
    </div>
  ) : (
    <div className="pointer-events-none absolute md:right-72 right-96 top-0  -mr-40 -mt-2 h-full w-full [mask-image:linear-gradient(transparent,white)]">
      <div className="absolute inset-0 bg-gradient-to-bl [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#0b011d]/10 dark:to-[#0b011d]/30 from-[#0b011d]/10 to-[#0b011d]/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-30"
          y="-10"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/40 fill-white/60 stroke-white/40"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="200"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
