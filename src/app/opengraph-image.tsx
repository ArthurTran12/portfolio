import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile, projects } from "@/data/profile";

// Ảnh thumbnail khi chia sẻ link (Facebook, Zalo, X, Messenger, Slack...)
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/app/_og-fonts");
const font = (file: string) => readFile(join(fontDir, file));

export default async function Image() {
  const [avatar, ...fontData] = await Promise.all([
    readFile(join(process.cwd(), "public/figma/avatar.png")),
    font("jakarta-latin-400.woff"),
    font("jakarta-latin-ext-400.woff"),
    font("jakarta-vietnamese-400.woff"),
    font("jakarta-latin-700.woff"),
    font("jakarta-latin-ext-700.woff"),
    font("jakarta-vietnamese-700.woff"),
  ]);
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;
  const tags = ["Flutter", "React", "Next.js", "Zalo Mini App"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#11071f",
          fontFamily: "Jakarta",
          color: "#ccd6f6",
          overflow: "hidden",
        }}
      >
        {/* Glow nền */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(113,39,186,0.55) 0%, rgba(17,7,31,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -200,
            bottom: -320,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(163,98,255,0.28) 0%, rgba(17,7,31,0) 70%)",
          }}
        />

        {/* Nội dung chữ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 80px",
            width: 720,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#a362ff" }}>Hello! I Am</div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -1,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 40, fontWeight: 700 }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 22, lineHeight: 1.4, color: "rgba(204,214,246,0.75)" }}>
            {profile.tagline.note}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
            {tags.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 22,
                  color: "#e9dcff",
                  background: "rgba(113,39,186,0.35)",
                  border: "1px solid rgba(163,98,255,0.5)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 20, color: "rgba(204,214,246,0.55)" }}>
            {`${projects.length}+ featured projects · EV charging · Zalo Mini Apps`}
          </div>
        </div>

        {/* Ảnh đại diện */}
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 0,
            width: 400,
            height: 560,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 10,
              width: 380,
              height: 380,
              borderRadius: 9999,
              background: "linear-gradient(160deg, #7127ba 0%, #2c1250 100%)",
              boxShadow: "0 0 120px rgba(113,39,186,0.6)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatarSrc} width={400} height={540} style={{ objectFit: "contain", objectPosition: "bottom" }} alt="" />
        </div>

        {/* Viền accent dưới */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 8,
            background: "linear-gradient(90deg, #7127ba, #a362ff, #7127ba)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: fontData[0], weight: 400, style: "normal" },
        { name: "Jakarta", data: fontData[1], weight: 400, style: "normal" },
        { name: "Jakarta", data: fontData[2], weight: 400, style: "normal" },
        { name: "Jakarta", data: fontData[3], weight: 700, style: "normal" },
        { name: "Jakarta", data: fontData[4], weight: 700, style: "normal" },
        { name: "Jakarta", data: fontData[5], weight: 700, style: "normal" },
      ],
    },
  );
}
