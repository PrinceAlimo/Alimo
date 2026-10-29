import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import portrait from "../assets/portrait.jpg";

const terminalLines = [
  "boot sequence: DEFENSE_KERNEL v4.2",
  "loading intel feeds ............... OK",
  "MITRE ATT&CK map .................. LIVE",
  "perimeter sensors 240/240 ......... ARMED",
  "anomaly engine .................... HOT",
  "status: SEC_DEFENSE_MODE // ACTIVE",
];

function UtcClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[10px] tracking-widest text-sub-gray">
      {t.toISOString().replace("T", " ").slice(0, 19)} UTC
    </span>
  );
}

function Terminal() {
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 2600);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready || count >= terminalLines.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 420);
    return () => clearTimeout(id);
  }, [count, ready]);

  return (
    <div className="space-y-1 font-mono text-[10px] leading-relaxed text-emerald-400/90 sm:text-[11px]">
      {terminalLines.slice(0, count).map((line) => (
        <p key={line} className={line.startsWith("status") ? "text-brand-red" : ""}>
          <span className="text-sub-gray">$</span> {line}
        </p>
      ))}
      {count < terminalLines.length && <span className="caret text-brand-red">█</span>}
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 140]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 hex-grid opacity-80" />
      <motion.p
        aria-hidden
        style={{ y, opacity }}
        className="pointer-events-none absolute -bottom-8 left-0 font-serif text-[18vw] font-black uppercase leading-none text-white/[0.035] select-none"
      >
        Defense
      </motion.p>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full border border-card-border bg-card-dark px-4 py-1.5 font-mono text-[11px] text-sub-gray"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-red opacity-70" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-brand-red" />
            </span>
            <span className="font-medium text-white">Cybersecurity Specialist</span>
            <span className="text-card-border">|</span>
            <span className="text-brand-red">Defense & Vigilance</span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl font-black uppercase leading-[0.88] tracking-tight sm:text-8xl"
              data-text="PRINCE ALIMO"
            >
              Prince
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-brand-red">
                  Alimo
                </span>
                <span className="text-brand-red">.</span>
                <span
                  aria-hidden
                  className="glitch-layer pointer-events-none absolute inset-0 text-brand-red/70"
                  style={{ mixBlendMode: "screen" }}
                >
                  Alimo
                </span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-lg font-light leading-relaxed text-sub-gray sm:text-xl"
          >
            Securing the Digital World. Protecting What Matters. Driven by a mission to safeguard critical
            systems, personal privacy, and digital infrastructure against evolving cyber threats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition duration-300 hover:bg-brand-red hover:text-white"
            >
              Explore Profile
            </a>
            <a
              href="#contact"
              className="rounded-full border border-card-border px-8 py-4 font-mono text-xs uppercase tracking-widest transition duration-300 hover:border-brand-red"
            >
              Initiate Contact
            </a>
            <a
              href="#cipher"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-sub-gray hover:text-white"
            >
              Enter Cipher Space
              <ArrowDownRight size={14} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-sub-gray"
          >
            <UtcClock />
            <span className="h-3 w-px bg-card-border" />
            <span className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-brand-red" />
              Channel encrypted
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-6 rounded-[28px] bg-brand-red/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-gradient-to-b from-brand-red/25 via-card-dark to-obsidian p-3">
            <div className="relative h-[460px] overflow-hidden rounded-xl bg-card-dark sm:h-[500px]">
              <img
                src={portrait}
                alt="Prince Alimo"
                className="absolute inset-0 h-full w-full object-cover object-[50%_20%] grayscale-[0.15] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-brand-red/25" />
              <div className="scanlines absolute inset-0 opacity-40" />
              <div className="animate-scan-y absolute left-0 right-0 h-16 bg-gradient-to-b from-brand-red/0 via-brand-red/40 to-brand-red/0" />

              <div className="target-corner absolute top-4 left-4 border-t-2 border-l-2" />
              <div className="target-corner absolute top-4 right-4 border-t-2 border-r-2" />
              <div className="target-corner absolute bottom-4 left-4 border-b-2 border-l-2" />
              <div className="target-corner absolute right-4 bottom-4 border-r-2 border-b-2" />

              <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-brand-red uppercase">
                  SEC_DEFENSE_MODE // ACTIVE
                </span>
              </div>

              <div className="absolute top-16 right-5 z-10 flex flex-col items-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-brand-red/40">
                  <div className="animate-radar absolute inset-0 rounded-full border border-brand-red border-t-transparent border-l-transparent" />
                  <div className="animate-pulse-ring absolute inset-0 rounded-full border border-brand-red/50" />
                  <ShieldCheck className="h-6 w-6 text-brand-red" />
                </div>
              </div>

              <div className="absolute top-16 left-5 z-10 space-y-1 font-mono text-[10px] uppercase tracking-widest">
                <p className="text-sub-gray">Subject</p>
                <p className="text-white">Alimo.Prince</p>
                <p className="pt-2 text-sub-gray">Biometric</p>
                <p className="text-brand-red">Match 99.97%</p>
              </div>

              <div className="absolute right-0 bottom-0 left-0 z-10 border-t border-white/10 bg-obsidian/70 p-4 backdrop-blur-md">
                <Terminal />
                <div className="mt-3 flex items-end justify-between font-mono text-[10px] uppercase tracking-widest">
                  <div>
                    <span className="block text-sub-gray">Operational status</span>
                    <span className="font-bold text-white">100% Secure</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-sub-gray">Location</span>
                    <span className="text-brand-red">Global Defense</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-sub-gray"
      >
        <span>Scroll the perimeter</span>
        <span className="relative h-10 w-[18px] rounded-full border border-white/25">
          <span className="absolute top-1.5 left-1/2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-brand-red" />
        </span>
      </motion.a>
    </section>
  );
}
