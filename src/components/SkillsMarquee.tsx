import { skillsRowA, skillsRowB, skillsRowC } from "../data/content";

function Row({
  items,
  className,
}: {
  items: string[];
  className: string;
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track flex w-max gap-3 ${className}`}>
        {loop.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            data-cursor="hover"
            className="flex items-center gap-2 rounded-full border border-card-border bg-card-dark/80 px-5 py-2.5 backdrop-blur-sm transition hover:border-brand-red/70 hover:bg-brand-red/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#f01002]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section className="relative border-y border-card-border py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian to-transparent" />
      <div className="mb-5 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-sub-gray">
        <span className="h-px w-10 bg-card-border" />
        Live skillstream // always moving
        <span className="h-px w-10 bg-card-border" />
      </div>
      <div className="space-y-3">
        <Row items={skillsRowA} className="animate-marquee" />
        <Row items={skillsRowB} className="animate-marquee-reverse" />
        <Row items={skillsRowC} className="animate-marquee-slow" />
      </div>
    </section>
  );
}
