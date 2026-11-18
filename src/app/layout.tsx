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

export const metadata: Metadata = {
  title: "Trần Đăng Tân — Mobile Developer",
  description: "Portfolio của Trần Đăng Tân — Flutter & React developer.",
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
