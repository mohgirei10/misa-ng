'use client';
import Link from 'next/link';
import { useState } from 'react';
import Art from './Art';
import Reveal from './Reveal';
import { properties, money } from '@/lib/data';
const types = ['All', 'Residential', 'Commercial', 'Land', 'Development'];
export default function PropertyGrid({ limit }: { limit?: number }) {
  const [t, setT] = useState('All');
  const list = properties.filter((p) => t === 'All' || p.type === t).slice(0, limit);
  return (
    <div>
      {!limit && <div className="mb-10 flex flex-wrap gap-3">{types.map((x) => <button key={x} onClick={() => setT(x)} className={`btn ${t === x ? 'btn-brand' : 'btn-line'}`}>{x}</button>)}</div>}
      <div className="grid gap-8 md:grid-cols-3">
        {list.map((p) => (
          <Reveal key={p.id}>
            <Link href={`/properties/${p.id}`} className="group block">
              <div className="overflow-hidden border border-line"><Art i={properties.indexOf(p)} className="aspect-[4/5] w-full transition duration-700 group-hover:scale-105" /></div>
              <p className="eyebrow mt-4">{p.area}, {p.city}</p>
              <h3 className="mt-1 font-serif text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-brand">{money(p.price)}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
