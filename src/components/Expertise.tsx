import { expertise } from "../data/content";
import { Reveal } from "./Reveal";

export function Expertise() {
  return (
    <section id="focus" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28">
      <Reveal className="mb-16">
        <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
          // Core domains
        </span>
        <h2 className="mt-2 max-w-3xl font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          Security Expertise To Transform Vulnerabilities Into Fortresses
        </h2>
      </Reveal>

      <div className="space-y-4">
        {expertise.map((item, i) => (
          <Reveal key={item.num} delay={i * 0.08}>
            <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-card-border bg-card-dark/40 p-6 transition duration-300 hover:border-brand-red sm:p-8 md:flex-row md:items-center">
              <div className="flex items-baseline gap-5 sm:gap-6">
                <span className="outline-num font-mono text-5xl font-black sm:text-7xl">{item.num}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-card-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-sub-gray transition group-hover:border-brand-red/40 group-hover:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-sub-gray">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
