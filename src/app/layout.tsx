import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const serif = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], display: "swap" });
const description = "Ayush Yadav’s projects in backend development, applied AI, and Linux desktop tools. Selected work, experience, and contact details.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushyadavres.vercel.app"),
  title: "Ayush Yadav — Software Developer",
  description,
  authors: [{ name: "Ayush Yadav", url: "https://github.com/yadavayush834" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Ayush Yadav — Software Developer",
    description,
    siteName: "Ayush Yadav",
  },
  twitter: { card: "summary", title: "Ayush Yadav — Software Developer", description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}<Analytics /></body>
    </html>
  );
}
