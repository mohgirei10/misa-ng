import LeadForm from '@/components/LeadForm';
export const metadata = { title: 'Developer onboarding | MISA NG LTD' };
export default function Page() {
  return (
    <div className="wrap grid gap-16 py-20 lg:grid-cols-2">
      <div><p className="eyebrow">Developers</p><h1 className="mt-3 font-serif text-5xl">List your project with MISA</h1><p className="mt-5 max-w-md text-soft">Tell us about your company and development. We review each submission, verify documents, and respond within two working days. Our fee is a commission on completed sales.</p></div>
      <LeadForm type="developer-onboarding" title="Developer onboarding" cta="Submit for review" steps={[[
        { n: 'company', l: 'Company name', r: true }, { n: 'rc', l: 'CAC RC number', r: true, h: true }, { n: 'contact', l: 'Contact person', r: true, h: true },
        { n: 'email', l: 'Email', t: 'email', r: true, h: true }, { n: 'phone', l: 'Phone', t: 'tel', r: true, h: true },
        { n: 'location', l: 'Project location', r: true }, { n: 'ptype', l: 'Project type', r: true, h: true, o: ['Residential', 'Commercial', 'Mixed use', 'Land'] },
        { n: 'units', l: 'Number of units', t: 'number', h: true }, { n: 'message', l: 'Project summary', t: 'area' }]]} />
    </div>
  );
}
