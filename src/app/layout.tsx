import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Yadav | Backend & Applied AI Engineer",
  description: "Portfolio of Ayush Yadav — Specialized in high-performance backends, WebSockets, cryptographic zero-trust architectures, and applied AI systems.",
  keywords: [
    "Ayush Yadav",
    "Backend Developer",
    "Applied AI Engineer",
    "OpenSearch k-NN",
    "PyTorch",
    "MediaPipe",
    "ethers.js",
    "FastAPI",
    "Next.js",
    "Distributed Systems"
  ],
  authors: [{ name: "Ayush Yadav", url: "https://github.com/yadavayush834" }],
  creator: "Ayush Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/yadavayush834",
    title: "Ayush Yadav | Backend & Applied AI Engineer",
    description: "Architecting real-time distributed systems, cryptographic security workflows, and production AI pipelines.",
    siteName: "Ayush Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Yadav | Backend & Applied AI Engineer",
    description: "Architecting real-time distributed systems, cryptographic security workflows, and production AI pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#09090b] text-[#f4f4f5] min-h-screen selection:bg-zinc-800 selection:text-white flex flex-col font-sans relative antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
