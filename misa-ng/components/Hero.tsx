"use client";
import { ChangeEvent, useState } from "react";
import { sendLead } from "@/lib/lead";
const interests = ["Buy a property", "List a property", "Invest", "Onboard as a developer"];
export default function Hero() {
  const [step, setStep] = useState(1);
  const [d, setD] = useState({ name: "", phone: "", email: "", interest: interests[0], note: "" });
  const [msg, setMsg] = useState("");
  const set = (k: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setD({ ...d, [k]: e.target.value });
  async function next() {
    if (step === 1 && (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email))) return setMsg("Enter your name and a valid email address.");
    setMsg("");
    if (step < 3) return setStep(step + 1);
    setMsg("Sending");
    try { await sendLead({ ...d, type: "Hero registration" }); setMsg(""); setStep(4); }
    catch (e) { setMsg((e as Error).message); }
  }
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(245,154,22,.22),transparent_55%),linear-gradient(#050505,#0A0F17)]" />
      <div aria-hidden className="absolute inset-0 opacity-[.07] [background-image:linear-gradient(#F5F5F5_1px,transparent_1px),linear-gradient(90deg,#F5F5F5_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.25fr_1fr] lg:py-32">
        <div>
          <p className="animate-rise text-sm text-gold">MISA NG LTD, part of SIR-Partners</p>
          <h1 className="mt-5 animate-rise font-serif text-5xl leading-[1.05] [animation-delay:.15s] md:text-7xl">Nigerian property, brokered on commission.</h1>
          <p className="mt-6 max-w-xl animate-rise text-lg text-soft [animation-delay:.3s]">Verified listings, developer partnerships and investment opportunities from an agency that earns when your deal closes.</p>
          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:.45s]">
            <button onClick={() => go("properties")} className="btn-solid">Explore properties</button>
            <button onClick={() => go("developers")} className="btn-line">Onboard a project</button>
          </div>
        </div>
        <div className="animate-rise border border-line bg-panel/90 p-7 backdrop-blur [animation-delay:.6s]">
          {step === 4 ? (
            <div><h2 className="font-serif text-2xl text-profit">You are registered</h2><p className="mt-3 text-sm text-soft">An MISA agent will send you a shortlist that fits your brief.</p></div>
          ) : (
            <>
              <div className="flex justify-between text-xs text-muted"><span>Register with us</span><span>Step {step} of 3</span></div>
              <h2 className="mt-3 font-serif text-2xl">Get a private shortlist.</h2>
              <div className="mt-5 grid gap-4">
                {step === 1 && (<>
                  <div><label className="label" htmlFor="h-name">Full name</label><input id="h-name" value={d.name} onChange={set("name")} className="field" /></div>
                  <div><label className="label" htmlFor="h-phone">Phone</label><input id="h-phone" type="tel" value={d.phone} onChange={set("phone")} placeholder="+234" className="field" /></div>
                  <div><label className="label" htmlFor="h-email">Email</label><input id="h-email" type="email" value={d.email} onChange={set("email")} className="field" /></div>
                </>)}
                {step === 2 && (
                  <div><label className="label" htmlFor="h-int">What do you need?</label>
                    <select id="h-int" value={d.interest} onChange={set("interest")} className="field">{interests.map((i) => <option key={i}>{i}</option>)}</select></div>
                )}
                {step === 3 && (
                  <div><label className="label" htmlFor="h-note">Location, budget or anything else</label><textarea id="h-note" rows={4} value={d.note} onChange={set("note")} className="field" /></div>
                )}
                {msg && <p role="alert" className="text-sm text-brand">{msg}</p>}
                <div className="flex justify-between">
                  {step > 1 ? <button onClick={() => setStep(step - 1)} className="btn-line">Back</button> : <span />}
                  <button onClick={next} className="btn-solid">{step === 3 ? "Submit" : "Next"}</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
