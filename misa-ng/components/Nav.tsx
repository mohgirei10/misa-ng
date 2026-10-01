'use client';
import Link from 'next/link';
import { useState } from 'react';
const links = [['Properties', '/properties'], ['News', '/journal'], ['Invest', '/invest'], ['About', '/about']];
export default function Nav() {
  const [o, setO] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link href="/" className="font-serif text-xl">MISA <span className="text-brand">NG</span></Link>
        <nav className="hidden gap-8 text-[13px] text-soft lg:flex">{links.map(([l, h]) => <Link key={h} href={h} className="transition hover:text-brand">{l}</Link>)}</nav>
        <div className="hidden gap-3 lg:flex"><Link href="/#register" className="btn btn-brand">Register with us</Link><Link href="/developers" className="btn btn-line">Developers</Link></div>
        <button aria-label="Toggle menu" aria-expanded={o} onClick={() => setO(!o)} className="text-2xl lg:hidden">{o ? '✕' : '☰'}</button>
      </div>
      {o && (
        <div onClick={() => setO(false)} className="flex flex-col gap-4 border-t border-line bg-ink px-6 py-6 lg:hidden">
          {links.map(([l, h]) => <Link key={h} href={h} className="text-soft">{l}</Link>)}
          <Link href="/developers" className="text-soft">Developers</Link>
          <Link href="/#register" className="btn btn-brand text-center">Register with us</Link>
        </div>
      )}
    </header>
  );
}
