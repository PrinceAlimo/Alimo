import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import lab from "../assets/polaroid-lab.jpg";
import network from "../assets/polaroid-network.jpg";
import workshop from "../assets/polaroid-workshop.jpg";
import audit from "../assets/polaroid-audit.jpg";
import { CountUp, Reveal } from "./Reveal";

const snaps = [
  { src: lab, caption: "Threat Lab Setup", stamp: "[ Threat Analysis Lab ]", rotate: -7 },
  { src: network, caption: "Packet Inspection", stamp: "[ Network Traffic Monitor ]", rotate: 4 },
  { src: workshop, caption: "Security Workshop", stamp: "[ Defense Workshop ]", rotate: -3 },
  { src: audit, caption: "Code Audit Review", stamp: "[ Vulnerability Assessment ]", rotate: 6 },
];

function Polaroid({
  src,
  caption,
  stamp,
  rotate,
  delay,
}: {
  src: string;
  caption: string;
  stamp: string;
  rotate: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy = useSpring(my, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
      className="polaroid-card rounded-sm p-3 pb-8"
    >
      <div className="relative h-40 overflow-hidden rounded-sm bg-neutral-900 sm:h-44">
        <img src={src} alt={caption} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
        <span className="absolute bottom-2 left-2 font-mono text-[9px] tracking-wider text-white/80">{stamp}</span>
      </div>
      <p className="mt-3 text-center font-mono text-xs font-bold text-neutral-800">{caption}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-6">
          <Reveal>
            <span className="font-mono text-xs font-bold tracking-[0.28em] text-brand-red uppercase">
              // Securing the digital world
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
              Protecting Systems, Information, <span className="text-brand-red">& Human Trust</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-base leading-relaxed text-sub-gray">
              Security is more than preventing threats; it is about protecting what matters most. In an
              interconnected world, cybersecurity serves as the vital foundation for preserving privacy,
              enabling business resilience, and keeping people safe.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-base leading-relaxed text-sub-gray">
              My work is driven by proactive risk management, analytical investigation, and a constant
              commitment to stay ahead of modern threat vectors.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          {[
            { n: 2600, suffix: "+", label: "Systems Evaluated", accent: true },
            { n: 10, suffix: "+", label: "Security Frameworks", accent: false },
            { n: 100, suffix: "%", label: "Defense Mindset", accent: false },
            { n: 24, suffix: "/7", label: "Threat Vigilance", accent: true },
          ].map((m, i) => (
            <Reveal key={m.label} delay={0.08 * i}>
              <div className="rounded-2xl border border-card-border bg-card-dark p-6 transition hover:border-brand-red/50">
                <div
                  className={`font-mono text-3xl font-black sm:text-4xl ${
                    m.accent ? "text-brand-red" : "text-white"
                  }`}
                >
                  <CountUp to={m.n} suffix={m.suffix} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-sub-gray">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-8 text-center font-mono text-xs uppercase tracking-[0.28em] text-sub-gray">
          // Field work & research snapshots
        </div>
        <div className="grid grid-cols-2 gap-5 pt-2 sm:grid-cols-4 sm:gap-6">
          {snaps.map((s, i) => (
            <Polaroid key={s.caption} {...s} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
