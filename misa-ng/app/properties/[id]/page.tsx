import { notFound } from 'next/navigation';
import Art from '@/components/Art';
import LeadForm from '@/components/LeadForm';
import { properties, money } from '@/lib/data';
export function generateStaticParams() { return properties.map((p) => ({ id: p.id })); }
export default function Page({ params }: { params: { id: string } }) {
  const p = properties.find((x) => x.id === params.id);
  if (!p) return notFound();
  return (
    <div className="wrap grid gap-12 py-20 lg:grid-cols-2">
      <Art i={properties.indexOf(p)} className="aspect-[4/5] w-full border border-line" />
      <div>
        <p className="eyebrow">{p.type} · {p.area}, {p.city}</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">{p.name}</h1>
        <p className="mt-3 font-serif text-2xl text-brand">{money(p.price)}</p>
        <p className="mt-5 text-soft">{p.blurb}{p.beds ? ` ${p.beds} bedrooms.` : ''}</p>
        <div className="mt-10"><LeadForm type="property-enquiry" title="Enquire about this property" extra={{ property: p.name }} cta="Send enquiry" steps={[[{ n: 'name', l: 'Full name', r: true }, { n: 'phone', l: 'Phone', t: 'tel', r: true }, { n: 'email', l: 'Email', t: 'email', r: true }, { n: 'message', l: 'Message', t: 'area' }]]} /></div>
      </div>
    </div>
  );
}
