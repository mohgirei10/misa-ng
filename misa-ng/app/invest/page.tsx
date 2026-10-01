import LeadForm from '@/components/LeadForm';
export const metadata = { title: 'Invest | MISA NG LTD' };
export default function Page() {
  return (
    <div className="wrap grid gap-16 py-20 lg:grid-cols-2">
      <div><p className="eyebrow">Investment</p><h1 className="mt-3 font-serif text-5xl">Invest in property with guidance</h1><p className="mt-5 max-w-md text-soft">Share your budget and focus. An advisor will introduce vetted opportunities and explain the costs, risks and timelines. MISA is paid by commission on completed transactions.</p></div>
      <LeadForm type="investment" title="Investor enquiry" cta="Request introductions" steps={[[
        { n: 'name', l: 'Full name', r: true }, { n: 'email', l: 'Email', t: 'email', r: true, h: true }, { n: 'phone', l: 'Phone', t: 'tel', r: true, h: true },
        { n: 'amount', l: 'Investment range', r: true, o: ['₦10m to ₦50m', '₦50m to ₦200m', '₦200m to ₦1bn', 'Above ₦1bn'] },
        { n: 'focus', l: 'Focus', r: true, h: true, o: ['Residential', 'Commercial', 'Land', 'Off-plan development'] }, { n: 'horizon', l: 'Time horizon', h: true, o: ['Under 2 years', '2 to 5 years', '5+ years'] },
        { n: 'message', l: 'Notes', t: 'area' }]]} />
    </div>
  );
}
