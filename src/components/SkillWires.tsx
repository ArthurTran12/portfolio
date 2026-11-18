"use client";

import { useEffect, useRef, useState } from "react";

type Wire = { d: string; x1: number; y1: number; x2: number; y2: number };

/**
 * Vẽ dây nối từ mỗi icon kỹ năng ([data-skill-node]) xuống lõi ([data-skill-core]).
 * Đo vị trí thật trên trang nên đúng ở mọi kích thước màn hình.
 */
export default function SkillWires() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [wires, setWires] = useState<Wire[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.parentElement;
    if (!svg || !section) return;

    const measure = () => {
      const base = section.getBoundingClientRect();
      const core = section.querySelector("[data-skill-core]")?.getBoundingClientRect();
      const nodes = [...section.querySelectorAll("[data-skill-node]")].map((n) => n.getBoundingClientRect());
      if (!core || nodes.length === 0) return;

      const coreCx = core.left + core.width / 2 - base.left;
      const coreTop = core.top - base.top + core.height * 0.12;
      const spread = core.width * 0.18;
      const minX = Math.min(...nodes.map((n) => n.left));
      const maxX = Math.max(...nodes.map((n) => n.right));

      setSize({ w: base.width, h: base.height });
      setWires(
        nodes.map((n) => {
          const x1 = n.left + n.width / 2 - base.left;
          const y1 = n.bottom - base.top - 2;
          // điểm cuối toả nhẹ quanh đỉnh lõi theo vị trí ngang của icon
          const t = maxX === minX ? 0.5 : (n.left + n.width / 2 - minX) / (maxX - minX);
          const x2 = coreCx + (t - 0.5) * 2 * spread;
          const y2 = coreTop;
          const dy = y2 - y1;
          const d = `M${x1},${y1} C${x1},${y1 + dy * 0.45} ${x2},${y1 + dy * 0.45} ${x2},${y2}`;
          return { d, x1, y1, x2, y2 };
        }),
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-0 overflow-visible"
      width={size.w}
      height={size.h}
    >
      <defs>
        {wires.map((w, i) => (
          <linearGradient key={i} id={`wire-${i}`} gradientUnits="userSpaceOnUse" x1={w.x1} y1={w.y1} x2={w.x2} y2={w.y2}>
            <stop offset="0" stopColor="#3d1768" />
            <stop offset="1" stopColor="#3d1768" stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {wires.map((w, i) => (
        <path key={i} d={w.d} stroke={`url(#wire-${i})`} strokeWidth={1} fill="none" />
      ))}
    </svg>
  );
}
