import Link from 'next/link';
const cols: [string, [string, string][]][] = [
  ['Discover', [['Properties', '/properties'], ['News', '/journal'], ['Invest', '/invest'], ['Developers', '/developers']]],
  ['Company', [['About', '/about'], ['Contact', '/contact']]],
  ['Legal', [['Privacy', '/privacy'], ['Terms', '/terms'], ['Cookies', '/cookies']]],
];
export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div><p className="font-serif text-2xl">MISA NG LTD</p><p className="mt-3 max-w-xs text-sm text-muted">Municipal Integrated Service Agent NG Ltd. A commission agency for property, finance news and investment, part of SIR-Partners.</p></div>
        {cols.map(([t, ls]) => (
          <div key={t}><p className="eyebrow">{t}</p><ul className="mt-4 space-y-3 text-sm text-soft">{ls.map(([l, h]) => <li key={h}><Link href={h} className="transition hover:text-brand">{l}</Link></li>)}</ul></div>
        ))}
      </div>
      <div className="wrap flex justify-between border-t border-line py-6 text-xs text-muted"><span>© 2026 MISA NG LTD. All rights reserved.</span><span>Nigeria</span></div>
    </footer>
  );
}
export function WhatsApp() {
  const n = process.env.NEXT_PUBLIC_WHATSAPP || '234XXXXXXXXXX';
  return (
    <a href={`https://wa.me/${n}?text=${encodeURIComponent('Hello MISA NG, I would like to enquire about a property.')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-profit text-ink shadow-lg transition hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.800 0-1.300.7-1.900.9-2.200.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.500l.9 2.100c.1.200.1.400 0 .600l-.4.600c-.1.200-.3.300-.1.600.6 1 1.400 1.800 2.400 2.300.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.700-.1l1.900.9c.3.100.5.200.5.400.1.200.1.700-.1 1.200Z" /></svg>
    </a>
  );
}
