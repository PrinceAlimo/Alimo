export function Footer() {
  const banner = ["SAFETY FIRST", "DEFENSE", "VIGILANCE", "AWARENESS", "ZERO TRUST", "HUMAN LAYER"];
  const loop = [...banner, ...banner, ...banner, ...banner];

  return (
    <div className="bg-neutral-950">
      <div className="overflow-hidden border-t border-card-border bg-brand-red py-8">
        <div className="marquee-track animate-marquee flex w-max items-center gap-10 pr-10">
          {loop.map((w, i) => (
            <h2
              key={`${w}-${i}`}
              className="font-serif text-[12vw] leading-none font-black tracking-[-0.06em] whitespace-nowrap uppercase text-white select-none"
            >
              {w}
              <span className="text-black/30">.</span>
            </h2>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-sub-gray sm:flex-row">
        <p>© 2026 Prince Alimo. Cybersecurity Specialist.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" className="transition hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" className="transition hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#projects" className="transition hover:text-white">
            Security Research
          </a>
        </div>
      </div>
    </div>
  );
}
