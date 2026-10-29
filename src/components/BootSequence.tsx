import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { bootLines } from "../data/content";
import { usePrefersReducedMotion } from "../hooks";

export function BootSequence() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      return;
    }
    const lineTimers: number[] = [];
    bootLines.forEach((_, i) => {
      lineTimers.push(window.setTimeout(() => setShown(i + 1), 180 + i * 220));
    });
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 2200, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const hide = window.setTimeout(() => setVisible(false), 2500);
    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(hide);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex cursor-pointer items-center justify-center bg-obsidian"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setVisible(false)}
        >
          <div className="absolute inset-0 hex-grid opacity-70" />
          <div
            className="relative w-full max-w-lg px-6"
            onClick={() => setVisible(false)}
            role="presentation"
          >
            <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-brand-red">
              <span>boot // defense kernel</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
            <div className="space-y-2 font-mono text-xs text-sub-gray sm:text-sm">
              {bootLines.slice(0, shown).map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={i === 0 ? "text-white" : i === bootLines.length - 1 ? "text-brand-red" : ""}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="mt-10 h-[3px] overflow-hidden rounded-full bg-card-border">
              <motion.div
                className="h-full bg-brand-red"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-sub-gray">
              Click to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
