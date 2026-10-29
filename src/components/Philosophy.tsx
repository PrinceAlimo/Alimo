import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
          // Stories & philosophy
        </span>
        <h2 className="mt-2 font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          Principles of Defense
        </h2>
      </Reveal>

      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand-red p-10 text-white shadow-2xl sm:p-14">
          <div className="pointer-events-none absolute -right-10 -bottom-12 select-none font-serif text-[200px] leading-none font-black opacity-10">
            “
          </div>
          <p className="relative z-10 font-serif text-xl leading-relaxed font-medium italic sm:text-3xl">
            “True security begins with awareness, grows through preparation, and is strengthened by the
            commitment to protect what matters.”
          </p>
          <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 font-mono font-bold">
              PA
            </div>
            <div>
              <h4 className="text-base font-bold tracking-wider uppercase">Prince Alimo</h4>
              <p className="font-mono text-xs text-white/80">Cybersecurity Specialist</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { k: "01", t: "Awareness", d: "See the board before the piece moves." },
          { k: "02", t: "Preparation", d: "Controls before crisis. Always." },
          { k: "03", t: "Vigilance", d: "The watch does not end at dusk." },
        ].map((p, i) => (
          <Reveal key={p.k} delay={0.1 * i}>
            <div className="rounded-2xl border border-card-border bg-card-dark p-6">
              <div className="font-mono text-xs text-brand-red">{p.k}</div>
              <h3 className="mt-2 font-serif text-2xl font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-sub-gray">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
