import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Anton } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "10xyourteams.com — 10X Your Teams",
  description:
    "We diagnose your organisation's AI gaps and rebuild your operating model. Diagnose. Redesign. Implement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${anton.variable}`}
    >
      <head>
        <Script
          src="https://dashboard.remarcablevc.com/script.js"
          data-website-id="341f6db1-b6b0-4db4-92a5-4928ac6025eb"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-page-bg text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
