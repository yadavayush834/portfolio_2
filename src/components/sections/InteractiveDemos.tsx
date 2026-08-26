"use client";

import React, { useState } from "react";
import { Sparkles, KeyRound, Hand, CheckCircle2, ShieldCheck, RefreshCw, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const gestureSamples = [
  { name: "HELLO", confidence: "99.4%", description: "Open palm wave with high thumb spread", points: 21 },
  { name: "THANK YOU", confidence: "98.1%", description: "Flat hand extending forward from chin", points: 21 },
  { name: "PEACE", confidence: "99.8%", description: "Index and middle fingers extended in V shape", points: 21 },
  { name: "AGREE", confidence: "97.6%", description: "Closed fist nodding motion", points: 21 },
];

export function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState<"isl" | "crypto">("isl");

  // ISL Simulator State
  const [selectedGesture, setSelectedGesture] = useState(gestureSamples[0]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [spokenText, setSpokenText] = useState("");

  // Crypto Simulator State
  const [nonce, setNonce] = useState("0x7f9a2b48e1c6993d");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    valid: boolean;
    hash: string;
    signer: string;
  }>({
    valid: true,
    hash: "0x3e18a...8849b",
    signer: "0x892aF09...e37B",
  });

  const handleSpeak = (text: string) => {
    setIsSynthesizing(true);
    setSpokenText(text);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSynthesizing(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsSynthesizing(false), 1200);
    }
  };

  const handleGenerateNonce = () => {
    setIsVerifying(true);
    const newNonce = "0x" + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    const newHash = "0x" + Array.from({ length: 10 }, () => Math.floor(Math.random() * 16).toString(16)).join("") + "...";
    
    setTimeout(() => {
      setNonce(newNonce);
      setVerificationResult({
        valid: true,
        hash: newHash,
        signer: "0x" + Array.from({ length: 6 }, () => Math.floor(Math.random() * 16).toString(16)).join("") + "...e37B",
      });
      setIsVerifying(false);
    }, 400);
  };

  return (
    <section id="demos" className="py-24 bg-[#090C14] border-y border-white/[0.08] relative overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Sandboxes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Live Interactive Mini-Simulators
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Interact with simulated versions of my core research projects right inside the browser.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("isl")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "isl"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.3)] font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Hand className="w-4 h-4" />
              <span>ISL Gesture & Speech Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab("crypto")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "crypto"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.3)] font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Zero-Trust Cryptographic Challenge</span>
            </button>
          </div>
        </div>

        {/* Tab 1: ISL Gesture Recognition Simulator */}
        {activeTab === "isl" && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D111D] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Sign Language Landmark & Speech Synthesis</span>
                  <Badge variant="cyan">MediaPipe • TF.js</Badge>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Simulates client-side 21-point hand tracking with realtime speech synthesis output.
                </p>
              </div>
              <Button
                variant="cyan"
                size="sm"
                icon={<Volume2 className="w-4 h-4" />}
                onClick={() => handleSpeak(selectedGesture.name)}
                disabled={isSynthesizing}
              >
                {isSynthesizing ? "Synthesizing Audio..." : `Pronounce "${selectedGesture.name}"`}
              </Button>
            </div>

            {/* Gesture Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {gestureSamples.map((gesture) => (
                <button
                  key={gesture.name}
                  onClick={() => setSelectedGesture(gesture)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    selectedGesture.name === gesture.name
                      ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]"
                      : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="text-xs font-mono font-bold">{gesture.name}</div>
                  <div className="text-[10px] text-cyan-400 mt-1">{gesture.confidence} match</div>
                </button>
              ))}
            </div>

            {/* Simulated 21-Point Hand Coordinate Canvas Box */}
            <div className="relative rounded-2xl bg-[#080A10] border border-white/[0.08] p-6 flex flex-col items-center justify-center min-h-[220px]">
              <div className="absolute top-3 left-3 text-[11px] font-mono text-zinc-400">
                [TENSORFLOW.JS GRAPH: 21 LANDMARK VECTORS]
              </div>
              <div className="absolute top-3 right-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CONFIDENCE: {selectedGesture.confidence}</span>
              </div>

              {/* Hand landmark schematic preview */}
              <div className="flex flex-col items-center space-y-3 my-4">
                <div className="flex gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe] animate-pulse" />
                      <span className="w-0.5 h-4 bg-cyan-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    </div>
                  ))}
                </div>
                <div className="w-20 h-0.5 bg-cyan-500/50" />
                <div className="w-5 h-5 rounded-full bg-blue-500/80 shadow-[0_0_10px_#3b82f6]" />
                <div className="text-sm font-mono text-white font-bold tracking-widest pt-2">
                  DETECTED: &quot;{selectedGesture.name}&quot;
                </div>
              </div>

              <div className="text-xs text-zinc-400 text-center max-w-md">
                {selectedGesture.description}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cryptographic Zero-Trust Challenge Simulator */}
        {activeTab === "crypto" && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D111D] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Zero-Trust secp256k1 Signature Challenge</span>
                  <Badge variant="amber">ethers.js • ECC</Badge>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Demonstrates SecureChat&apos;s authentication without server-stored passwords.
                </p>
              </div>
              <Button
                variant="amber"
                size="sm"
                icon={<RefreshCw className={`w-4 h-4 ${isVerifying ? "animate-spin" : ""}`} />}
                onClick={handleGenerateNonce}
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Generate New Nonce Challenge"}
              </Button>
            </div>

            {/* Cryptographic telemetry box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-zinc-400">EPHEMERAL SERVER CHALLENGE NONCE</div>
                <div className="font-mono text-sm text-amber-300 break-all bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.06]">
                  {nonce}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-zinc-400">RECOVERED CLIENT SIGNER ADDRESS</div>
                <div className="font-mono text-sm text-cyan-300 break-all bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.06]">
                  {verificationResult.signer}
                </div>
              </div>
            </div>

            {/* Verification Status Banner */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-emerald-300 font-bold">
                    CRYPTOGRAPHIC PROOF VERIFIED
                  </div>
                  <div className="text-[11px] text-zinc-300">
                    Signature matches private key without password transmission. Replay attacks blocked.
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                VALID
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
