// Tải asset từ Figma về public/figma. Chạy 1 lần: npm run assets
// Link asset của Figma MCP hết hạn sau 7 ngày (tạo ngày 18/11/2026).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://www.figma.com/api/mcp/asset/f9768967-0701-4825-9854-39a567c26e89";
const OUT = path.join(process.cwd(), "public", "figma");

const assets = {
  "b51ae.svg": "logo.svg",
  "012e7.svg": "background.svg",
  "ad02b.svg": "glow-1.svg",
  "a12fb.svg": "glow-2.svg",
  "8b695.svg": "glow-3.svg",
  "1b157.svg": "glow-hero.svg",
  "3d229.png": "avatar.png",
  "a50e1.svg": "avatar-glow.svg",
  "0f0ff.svg": "arrow.svg",
  "fbd20.svg": "cover-circle.svg",
  "2fbf5.svg": "btn-outline.svg",
  "251bb.png": "exp-1.png",
  "864c9.png": "exp-2.png",
  "08842.png": "exp-3.png",
  "4c9a8.png": "exp-4.png",
  "5d777.svg": "exp-shadow-1.svg",
  "deb0e.svg": "exp-shadow-2.svg",
  "2ddc5.svg": "exp-shadow-3.svg",
  "5d994.svg": "dot-1.svg",
  "0571f.svg": "dot-2.svg",
  "303dc.svg": "skill-circle.svg",
  "f9278.svg": "beam-1.svg",
  "f1284.svg": "beam-2.svg",
  "7494f.svg": "beam-3.svg",
  "b65dc.svg": "beam-4.svg",
  "7701c.svg": "beam-5.svg",
  "9320f.svg": "beam-6.svg",
  "a76d1.svg": "orbit-glow.svg",
  "ffb89.svg": "core.svg",
  "78bbd.svg": "core-logo.svg",
  "d6339.svg": "orbit-1.svg",
  "6cced.svg": "orbit-2.svg",
  "f35ed.svg": "orbit-3.svg",
  "ebf17.svg": "core-ring.svg",
  "42505.svg": "orbit-icon-1.svg",
  "d3cbf.svg": "orbit-icon-2.svg",
  "0bb40.svg": "orbit-icon-3.svg",
  "0336d.svg": "orbit-icon-4.svg",
  "c5eea.svg": "orbit-icon-5.svg",
  "e7eb6.svg": "orbit-icon-6.svg",
  "8acb5.svg": "orbit-icon-7.svg",
  "80c6d.svg": "orbit-icon-8.svg",
  "944bd.svg": "orbit-icon-9.svg",
  "1d10a.svg": "orbit-icon-10.svg",
  "9ec7b.svg": "orbit-icon-11.svg",
  "d7219.png": "project-1.png",
  "206b3.png": "project-2.png",
  "78d9d.png": "card-noise.png",
  "9de93.svg": "click.svg",
};

await mkdir(OUT, { recursive: true });
let failed = 0;
for (const [remote, local] of Object.entries(assets)) {
  try {
    const res = await fetch(`${BASE}/${remote}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(path.join(OUT, local), Buffer.from(await res.arrayBuffer()));
    console.log("✓", local);
  } catch (e) {
    failed++;
    console.error("✗", local, e.message);
  }
}
console.log(failed ? `${failed} file lỗi` : "Xong, đã tải đủ asset.");
