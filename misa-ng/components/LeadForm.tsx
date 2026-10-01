'use client';
import { useState } from 'react';
export type Field = { n: string; l: string; t?: string; o?: string[]; r?: boolean; h?: boolean };
export default function LeadForm({ type, title, steps, cta = 'Submit', extra = {} }: { type: string; title: string; steps: Field[][]; cta?: string; extra?: Record<string, string> }) {
  const [i, setI] = useState(0);
  const [d, setD] = useState<Record<string, string>>({});
  const [s, setS] = useState<'idle' | 'busy' | 'done' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  const last = i === steps.length - 1;
  const set = (n: string) => (e: React.ChangeEvent<any>) => setD({ ...d, [n]: e.target.value });
  async function go(e: React.FormEvent) {
    e.preventDefault();
    if (!last) return setI(i + 1);
    setS('busy');
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, ...extra, ...d }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setS('done');
    } catch (x: any) { setMsg(x.message || 'Request failed. Check your details and try again.'); setS('err'); }
  }
  if (s === 'done') return (
    <div className="border border-line bg-panel p-8"><p className="eyebrow text-profit">Received</p><h3 className="mt-3 font-serif text-2xl">Thank you. A MISA advisor will contact you shortly.</h3></div>
  );
  return (
    <form onSubmit={go} className="border border-line bg-panel/90 p-6 backdrop-blur md:p-8">
      <div className="flex justify-between"><span className="eyebrow">{title}</span>{steps.length > 1 && <span className="text-xs italic text-muted">{i + 1}/{steps.length}</span>}</div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {steps[i].map((f) => (
          <label key={f.n} className={f.h ? 'col-span-2 sm:col-span-1' : 'col-span-2'}>
            <span className="eyebrow">{f.l}{f.r && ' *'}</span>
            {f.o ? (
              <select required={f.r} value={d[f.n] || ''} onChange={set(f.n)} className="inp"><option value="">Select</option>{f.o.map((o) => <option key={o}>{o}</option>)}</select>
            ) : f.t === 'area' ? (
              <textarea rows={3} value={d[f.n] || ''} onChange={set(f.n)} className="inp" />
            ) : (
              <input type={f.t || 'text'} required={f.r} value={d[f.n] || ''} onChange={set(f.n)} className="inp" />
            )}
          </label>
        ))}
      </div>
      {s === 'err' && <p className="mt-4 text-sm text-red-400" role="alert">{msg}</p>}
      <div className="mt-6 flex justify-end gap-3">
        {i > 0 && <button type="button" onClick={() => setI(i - 1)} className="btn btn-line">Back</button>}
        <button disabled={s === 'busy'} className="btn btn-brand">{last ? (s === 'busy' ? 'Sending…' : cta) : 'Next'}</button>
      </div>
    </form>
  );
}
