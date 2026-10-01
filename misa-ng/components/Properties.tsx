"use client";
import { useEffect, useState } from "react";
import type { Listing } from "@/lib/data";
import { openLead } from "@/lib/lead";
import Reveal from "./Reveal";
const tabs = ["All", "Residential", "Commercial", "Land"];
export default function Properties() {
  const [tab, setTab] = useState("All");
  const [items, setItems] = useState<Listing[]>([]);
  useEffect(() => { fetch(`/api/listings?type=${tab}`).then((r) => r.json()).then(setItems); }, [tab]);
  return (
    <section id="properties" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
        <h2 className="max-w-xl font-serif text-4xl">Properties and developments to know this season</h2>
        <div className="flex gap-2" role="tablist">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`border px-4 py-2 text-sm transition ${tab === t ? "border-brand bg-brand text-ink" : "border-line text-soft hover:border-brand"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((l, i) => (
          <Reveal key={l.id} delay={i * 80}>
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden border border-line">
                <div className="h-full w-full transition duration-700 group-hover:scale-105" style={{ background: `linear-gradient(160deg, ${l.tone}, #050505)` }} />
              </div>
              <p className="mt-4 text-xs text-muted">{l.area}</p>
              <h3 className="font-serif text-2xl">{l.name}</h3>
              <p className="mt-1 text-sm text-soft">{l.detail}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-gold">{l.price}</span>
                <button onClick={() => openLead(`Enquiry: ${l.name}`)} className="text-sm text-brand underline-offset-4 hover:underline">Enquire</button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
