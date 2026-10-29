import { Crosshair, ShieldCheck, Wrench } from "lucide-react";
import { skillsRowA, skillsRowB, skillsRowC } from "../data/content";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: Crosshair,
    label: "01 · Core Domains",
    title: "Operational Disciplines",
    body: "The day-to-day practices that keep estates hardened and adversaries contained.",
    items: skillsRowA,
    accent: true,
  },
  {
    icon: ShieldCheck,
    label: "02 · Governance",
    title: "Frameworks & Standards",
    body: "Industry doctrine that structures every assessment, control set, and report.",
    items: skillsRowB,
  },
  {
    icon: Wrench,
    label: "03 · Arsenal",
    title: "Tooling & Platforms",
    body: "The instruments used across detection, hunting, forensics, and red-team work.",
    items: skillsRowC,
  },
];

export function SkillOrbit() {
  return (
    <section id="skills" className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0 hex-grid opacity-40" />

      <Reveal className="relative mb-10 text-center">
        <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
          // Professional arsenal
        </span>
        <h2 className="mt-2 font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Skills In Perpetual Motion
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-sub-gray">
          A curated inventory of disciplines, standards, and tools — organized the way a
          defense program is actually run.
        </p>
      </Reveal>

      <div className="relative mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <Reveal key={group.title}>
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 ${
                group.accent
                  ? "border-brand-red/40 bg-card-dark/70"
                  : "border-card-border bg-card-dark/40 hover:border-brand-red/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    group.accent
                      ? "border-brand-red/50 bg-brand-red/10"
                      : "border-card-border bg-obsidian/60"
                  }`}
                >
                  <group.icon className={`h-5 w-5 ${group.accent ? "text-brand-red" : "text-sub-gray"}`} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-sub-gray uppercase">
                  {group.label}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-lg font-bold tracking-tight uppercase">
                {group.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-sub-gray">{group.body}</p>

              <ul className="mt-5 space-y-2 border-t border-card-border pt-5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-mono text-xs text-white/90">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red shadow-[0_0_8px_rgba(240,16,2,0.6)]" />
                    <span className="tracking-[0.08em]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative mt-8 text-center">
        <p className="font-mono text-[10px] tracking-[0.24em] text-sub-gray uppercase">
          Continuously expanding · verified against field operations
        </p>
      </Reveal>
    </section>
  );
}
