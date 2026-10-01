"use client";
import { FormEvent, useEffect, useState } from "react";
import { sendLead } from "@/lib/lead";
export default function LeadModal() {
  const [type, setType] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "busy" | "done">("idle");
  const [err, setErr] = useState("");
  useEffect(() => {
    const open = (e: Event) => { setType((e as CustomEvent<string>).detail); setStatus("idle"); setErr(""); };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setType(null);
    window.addEventListener("misa:lead", open); window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("misa:lead", open); window.removeEventListener("keydown", esc); };
  }, []);
  if (!type) return null;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("busy"); setErr("");
    try {
      await sendLead({ ...(Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>), type: type! });
      setStatus("done");
    } catch (x) { setErr((x as Error).message); setStatus("idle"); }
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4 backdrop-blur-sm" onClick={() => setType(null)}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} className="w-full max-w-md animate-rise border border-line bg-panel p-8">
        {status === "done" ? (
          <div>
            <h2 className="font-serif text-2xl text-profit">Request received</h2>
            <p className="mt-3 text-sm text-soft">An MISA agent will contact you shortly about: {type}.</p>
            <button onClick={() => setType(null)} className="btn-line mt-6">Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4">
            <div>
              <h2 className="font-serif text-2xl">{type}</h2>
              <p className="mt-1 text-sm text-soft">Tell us how to reach you.</p>
            </div>
            <div><label className="label" htmlFor="name">Full name</label><input id="name" name="name" required className="field" /></div>
            <div><label className="label" htmlFor="email">Email</label><input id="email" name="email" type="email" required className="field" /></div>
            <div><label className="label" htmlFor="phone">Phone or WhatsApp</label><input id="phone" name="phone" type="tel" className="field" /></div>
            <div><label className="label" htmlFor="note">Message</label><textarea id="note" name="note" rows={3} className="field" /></div>
            {err && <p role="alert" className="text-sm text-brand">{err}</p>}
            <div className="flex gap-3">
              <button disabled={status === "busy"} className="btn-solid disabled:opacity-60">{status === "busy" ? "Sending" : "Send request"}</button>
              <button type="button" onClick={() => setType(null)} className="btn-line">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
