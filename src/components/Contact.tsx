import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "encrypting" | "sent";

function scramble(len = 18) {
  const hex = "0123456789ABCDEF";
  return Array.from({ length: len }, () => hex[Math.floor(Math.random() * hex.length)]).join("");
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [label, setLabel] = useState("Send Transmission");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    setStatus("encrypting");
    let n = 0;
    const id = window.setInterval(() => {
      setLabel(`ENCRYPT ${scramble(12)}`);
      n += 1;
      if (n > 10) {
        clearInterval(id);
        setStatus("sent");
        setLabel("Transmission Received");
        form.reset();
        window.setTimeout(() => {
          setStatus("idle");
          setLabel("Send Transmission");
        }, 2800);
      }
    }, 90);
  };

  return (
    <section id="contact" className="relative border-t border-card-border bg-neutral-950 pt-24 pb-0">
      <div className="mx-auto mb-20 max-w-4xl space-y-8 px-5 text-center sm:px-6">
        <Reveal>
          <h2 className="font-serif text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            Let's Build A Safer Digital Future Together
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto max-w-lg text-sm text-sub-gray">
            Have a security question, collaboration opportunity, or research inquiry? Send a direct
            transmission below.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-card-border bg-card-dark p-8 text-left"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase text-sub-gray">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Operator name"
                  className="w-full rounded-xl border border-card-border bg-obsidian px-4 py-3 text-sm text-white transition outline-none focus:border-brand-red"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase text-sub-gray">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@secure.mail"
                  className="w-full rounded-xl border border-card-border bg-obsidian px-4 py-3 text-sm text-white transition outline-none focus:border-brand-red"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs uppercase text-sub-gray">
                Secure Message Transmission
              </label>
              <textarea
                rows={4}
                required
                placeholder="Complaints, suggestions, collaborations, and encrypted thoughts…"
                className="w-full rounded-xl border border-card-border bg-obsidian px-4 py-3 text-sm text-white transition outline-none focus:border-brand-red"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full rounded-xl bg-brand-red py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-red/20 transition hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-90"
            >
              {label}
            </button>
            {status === "sent" && (
              <p className="text-center font-mono text-xs text-emerald-400">
                Packet acknowledged. Prince Alimo will respond shortly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
