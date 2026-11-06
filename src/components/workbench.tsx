"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Workbench() {
  const [selected,setSelected]=useState(0);
  const [screen,setScreen]=useState("dark");
  const [color,setColor]=useState(0);
  const [word,setWord]=useState("Make it yours.");
  const [step,setStep]=useState(0);
  const titles=["A desktop that feels like home.","A little room to make something.","From a gesture to an idea."];
  const captions=["Desktop customization","Visual website builder","Machine learning project"];
  const stages=["Capture","Find landmarks","Interpret"];
  return <section className="bench" aria-label="Explore selected projects">
    <nav className="project-selector" aria-label="Choose a project">{projects.map((p,i)=><button key={p.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span className="project-symbol" aria-hidden="true">{i===0?"⌘":i===1?"▦":"✳"}</span><span>{i===2?"Sign language":p.name}</span></button>)}</nav>
    <article className="exhibit" key={selected}>
      <div className="exhibit-heading"><h2>{titles[selected]}</h2><span className="project-kind">{captions[selected]}</span></div>
      {selected===0 && <figure className="project-stage mac-stage"><Image src={`/work/machypr-${screen}.png`} alt={`Actual MacHypr ${screen} desktop screenshot`} width={1920} height={1080} priority unoptimized/><figcaption><span>My Arch + Hyprland setup</span><div className="stage-controls">{["dark","light","controls"].map(s=><button key={s} aria-pressed={screen===s} onClick={()=>setScreen(s)}>{s=== "controls"?"Control center":s}</button>)}</div></figcaption></figure>}
      {selected===1 && <div className="project-stage patch-stage"><div className={`composition palette-${color}`}><span className="composition-small">Your own little corner of the internet.</span><p style={word.length > 8 ? { fontSize: "28px", maxWidth: "100%" } : undefined}>{word || "Make it yours."}</p><div className="composition-shapes" aria-hidden="true"><span/><span/><span/></div><span className="composition-foot">Made to be played with.</span></div><div className="patch-tools"><label>Try a headline<input aria-label="Composition headline" maxLength={45} value={word} onChange={e=>setWord(e.target.value)}/></label><div className="swatches" aria-label="Composition colors">{["Paper","Cobalt","Terracotta"].map((c,i)=><button className={`swatch swatch-${i}`} key={c} aria-label={c} aria-pressed={color===i} onClick={()=>setColor(i)}/>)}</div></div><p className="demo-note">An interactive sketch of the idea behind Patchwork.</p></div>}
      {selected===2 && <div className="project-stage sign-stage"><div className="landmark-field"><svg viewBox="0 0 440 300" role="img" aria-label="Illustrative hand landmark diagram"><g className={step===0?"landmarks dim":"landmarks"}><path d="M210 260L150 215L112 170L82 147L63 116M150 215L156 135L146 90L137 57L133 32M156 135L203 120L204 71L205 37L207 14M203 120L245 135L257 90L266 60L273 37M245 135L277 159L298 127L314 107L326 90M277 159L210 260L156 135M210 260L203 120M210 260L245 135"/>{[[210,260],[150,215],[112,170],[82,147],[63,116],[156,135],[146,90],[137,57],[133,32],[203,120],[204,71],[205,37],[207,14],[245,135],[257,90],[266,60],[273,37],[277,159],[298,127],[314,107],[326,90]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r={step===1?5:3}/>)}</g></svg><p>{["Start with a camera frame.","Locate the joints of the hand.","Use the landmarks to interpret a sign."][step]}</p></div><div className="pipeline">{stages.map((s,i)=><button key={s} aria-pressed={i===step} onClick={()=>setStep(i)}>{s}</button>)}</div><p className="demo-note">Illustrated project flow; this page does not run recognition.</p></div>}
      <div className="exhibit-bottom"><div><h3>{projects[selected].name}</h3><p>{projects[selected].description}</p></div>{projects[selected].repository?<a className="source-link" href={projects[selected].repository} target="_blank" rel="noopener noreferrer">View source ↗</a>:<span className="private-note">Private project</span>}</div>
    </article>
  </section>;
}
