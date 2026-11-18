import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Preahvihear } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600"],
  subsets: ["latin", "latin-ext"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["600"],
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Trần Đăng Tân — Mobile Developer";
const description = "Portfolio của Trần Đăng Tân — Flutter & React developer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  // Ảnh thumbnail tự sinh từ src/app/opengraph-image.tsx
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Trần Đăng Tân",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${preahvihear.variable} ${poppins.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
