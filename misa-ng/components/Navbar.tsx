"use client";
import { useEffect, useState } from "react";
import { openLead } from "@/lib/lead";
const links = [["Properties", "#properties"], ["Developers", "#developers"], ["Invest", "#invest"], ["Newsfeed", "#newsfeed"], ["Contact", "#contact"]];
export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid || open ? "border-b border-line bg-ink/85 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl">MISA <span className="text-brand">NG</span></a>
        <nav className="hidden gap-8 text-sm text-soft md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="transition hover:text-brand">{l}</a>)}
        </nav>
        <div className="hidden gap-3 md:flex">
          <button onClick={() => openLead("Registration")} className="btn-solid">Register with us</button>
          <button onClick={() => openLead("Developer onboarding")} className="btn-line">List a project</button>
        </div>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="text-sm text-brand md:hidden">{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <div className="grid gap-4 px-6 pb-6 text-soft md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <button onClick={() => { setOpen(false); openLead("Registration"); }} className="btn-solid">Register with us</button>
        </div>
      )}
    </header>
  );
}
