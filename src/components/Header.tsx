import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, tickerItems } from "../data/content";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 120 && !open);
    setScrolled(latest > 12);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-card-border bg-obsidian/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="#top" className="font-serif text-xl font-black uppercase tracking-wider sm:text-2xl">
            Prince Alimo<span className="text-brand-red">.</span>
          </a>

          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-sub-gray lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="relative transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-red/25 transition hover:bg-brand-red-dark sm:flex"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Get In Touch
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className="overflow-hidden border-t border-card-border/80 bg-obsidian/90">
          <div className="marquee-track animate-marquee flex w-max gap-10 py-2 pr-10">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.28em] text-sub-gray"
              >
                <span className="text-brand-red">◆</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="scanlines absolute inset-0 opacity-30" />
            <div className="relative flex h-full flex-col justify-center gap-6 overflow-y-auto px-8 pt-24 pb-10">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="font-serif text-4xl font-black uppercase"
                >
                  <span className="mr-3 font-mono text-sm text-brand-red">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-widest"
              >
                Initiate Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
