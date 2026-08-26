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
        {/* Subtle Ambient Background Motion Layer */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute inset-0 ambient-grid opacity-30" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-zinc-800/20 blur-[130px] ambient-orb-1" />
          <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-cyan-950/15 blur-[140px] ambient-orb-2" />
        </div>

        {children}
      </body>
    </html>
  );
}
