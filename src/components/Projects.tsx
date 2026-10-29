import { Lock } from "lucide-react";
import lab from "../assets/polaroid-lab.jpg";
import workshop from "../assets/polaroid-workshop.jpg";
import audit from "../assets/polaroid-audit.jpg";
import { classified } from "../data/content";
import { Reveal } from "./Reveal";

const images = [lab, workshop, audit];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <Reveal>
          <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
            // Practical work
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Projects & Security Research
          </h2>
        </Reveal>
        <span className="font-mono text-xs text-sub-gray">[ UPDATES IN PROGRESS ]</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {classified.map((d, i) => (
          <Reveal key={d.code} delay={i * 0.1}>
            <article className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-dark">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={images[i]}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-obsidian/40 to-transparent" />
                <div className="scanlines absolute inset-0 opacity-30" />
                <span className="absolute top-4 left-4 rotate-[-8deg] border-2 border-brand-red px-3 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase shadow-[0_0_20px_rgba(240,16,2,0.35)]">
                  {d.status}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <p className="font-mono text-[10px] tracking-[0.22em] text-brand-red uppercase">{d.code}</p>
                <h3 className="text-xl font-bold">{d.title}</h3>
                <p className="text-sm leading-relaxed text-sub-gray">{d.blurb}</p>
                <div className="flex items-center justify-between pt-2 font-mono text-[10px] uppercase tracking-widest text-sub-gray">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock size={11} className="text-brand-red" />
                    Sealed
                  </span>
                  <span>Declass {d.eta}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-dashed border-card-border bg-card-dark p-10 text-center transition hover:border-brand-red/50 sm:p-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/30 bg-brand-red/10">
            <Lock className="h-6 w-6 animate-pulse text-brand-red" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Building toward a more secure digital future.</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-sub-gray">
            New projects, security explorations, and practical work will be featured here soon. Stay tuned
            for upcoming additions.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
