import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import heroHud from "../assets/hero-hud.jpg";
import { quotes } from "../data/content";

const INTERVAL = 10000;

export function CipherSpace() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    const raf = { id: 0 };
    const loop = () => {
      const elapsed = Date.now() - start;
      const p = (elapsed % INTERVAL) / INTERVAL;
      setTick(p);
      raf.id = requestAnimationFrame(loop);
    };
    raf.id = requestAnimationFrame(loop);
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, INTERVAL);
    return () => {
      cancelAnimationFrame(raf.id);
      clearInterval(id);
    };
  }, [paused, index]);

  const q = quotes[index];
  const remain = Math.max(0, Math.ceil((1 - Math.min(tick, 1)) * 10));
  const circ = 2 * Math.PI * 18;

  return (
    <section id="cipher" className="relative overflow-hidden border-y border-card-border py-24 sm:py-32">
      <img src={heroHud} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-obsidian/80" />
      <div className="hex-grid absolute inset-0 opacity-50" />
      <div className="scanlines absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
        {quotes.map((item, i) => (
          <p
            key={item.text}
            className="absolute font-mono text-[10px] text-white/70 uppercase"
            style={{
              top: `${(i * 17) % 90}%`,
              left: `${(i * 29) % 80}%`,
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * ((i * 7) % 12)}deg)`,
            }}
          >
            {item.text.slice(0, 42)}…
          </p>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
              // Cipher space
            </span>
            <h2 className="mt-2 font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              Doctrine Feed
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-sub-gray">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Auto-rotate every 10s
            <span className="text-white">
              {String(index + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-card-border bg-card-dark/70 p-8 shadow-2xl backdrop-blur-md sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -right-4 -bottom-6 h-40 w-40 text-brand-red/10" />
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] tracking-[0.28em] text-brand-red uppercase">
              Transmission // open
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous quote"
                onClick={() => setIndex((i) => (i - 1 + quotes.length) % quotes.length)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border text-sub-gray hover:border-brand-red hover:text-white"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                aria-label="Next quote"
                onClick={() => setIndex((i) => (i + 1) % quotes.length)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border text-sub-gray hover:border-brand-red hover:text-white"
              >
                <ChevronRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="inline-flex items-center gap-2 rounded-full border border-card-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-sub-gray hover:border-brand-red hover:text-white"
              >
                {paused ? <Play size={11} /> : <Pause size={11} />}
                {paused ? "Resume" : "Hold"}
              </button>
            </div>
          </div>

          <div className="relative min-h-[220px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-2xl leading-relaxed font-medium italic sm:text-3xl"
                aria-live="polite"
              >
                “{q.text}”
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={q.author + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6"
            >
              <div className="relative flex h-14 w-14 items-center justify-center">
                <svg className="absolute inset-0 h-14 w-14 -rotate-90" viewBox="0 0 44 44" aria-hidden>
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke="#f01002"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - Math.min(tick, 1))}
                  />
                </svg>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20 font-mono text-xs font-bold text-brand-red">
                  {q.author
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider uppercase">{q.author}</h4>
                <p className="font-mono text-xs text-sub-gray">{q.role}</p>
              </div>
              <div className="ml-auto hidden text-right font-mono text-[10px] uppercase tracking-widest text-sub-gray sm:block">
                Next packet in {paused ? "—" : `00:${String(remain).padStart(2, "0")}`}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 h-[3px] overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-brand-red transition-[width] duration-75"
              style={{ width: `${Math.min(tick, 1) * 100}%` }}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Quote ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-red" : "w-2 bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
