import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
const pages: Record<string, { t: string; p: string[]; form?: boolean }> = {
  about: { t: 'About MISA NG LTD', p: ['Municipal Integrated Service Agent NG Ltd (MISA NG LTD) is part of Strategic Infrastructure and Resource Partners (SIR-Partners).', 'We are a commission agency. We list verified properties, publish real estate and finance news, onboard developers and introduce investors to suitable opportunities.'] },
  contact: { t: 'Contact us', p: ['Send a message and an advisor will reply by email or phone.'], form: true },
  privacy: { t: 'Privacy', p: ['Replace this placeholder with your counsel-reviewed privacy policy. Enquiries submitted on this site are stored so MISA can respond.'] },
  terms: { t: 'Terms', p: ['Replace this placeholder with your counsel-reviewed terms of use.'] },
  cookies: { t: 'Cookies', p: ['Replace this placeholder with your cookie policy. This starter site sets no tracking cookies.'] },
};
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export default function Page({ params }: { params: { slug: string } }) {
  const c = pages[params.slug];
  if (!c) return notFound();
  return (
    <div className="wrap max-w-3xl py-20">
      <h1 className="font-serif text-5xl">{c.t}</h1>
      <div className="mt-6 space-y-4 text-soft">{c.p.map((x) => <p key={x}>{x}</p>)}</div>
      {c.form && <div className="mt-10"><LeadForm type="contact" title="Message" cta="Send message" steps={[[{ n: 'name', l: 'Full name', r: true }, { n: 'email', l: 'Email', t: 'email', r: true }, { n: 'message', l: 'Message', t: 'area', r: true }]]} /></div>}
    </div>
  );
}
