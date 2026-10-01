import LeadForm from '@/components/LeadForm';
import { news } from '@/lib/data';
export const metadata = { title: 'News | MISA NG LTD' };
export default function Page() {
  return (
    <div className="wrap grid gap-16 py-20 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <p className="eyebrow">Real estate and finance</p><h1 className="mt-3 font-serif text-5xl">News</h1>
        <div className="mt-10">{news.map((a) => (
          <details key={a.slug} className="group border-b border-line py-6">
            <summary className="cursor-pointer list-none"><p className="eyebrow">{a.tag} · {a.date}</p><h2 className="mt-2 font-serif text-2xl transition group-hover:text-brand">{a.title}</h2><p className="mt-2 text-soft">{a.excerpt}</p></summary>
            <p className="mt-4 max-w-prose text-soft">{a.body}</p>
          </details>
        ))}</div>
      </div>
      <div><LeadForm type="newsletter" title="Get the weekly briefing" cta="Subscribe" steps={[[{ n: 'email', l: 'Email', t: 'email', r: true }]]} /></div>
    </div>
  );
}
