import PropertyGrid from '@/components/PropertyGrid';
export const metadata = { title: 'Properties | MISA NG LTD' };
export default function Page() {
  return <div className="wrap py-20"><p className="eyebrow">Listings</p><h1 className="mt-3 font-serif text-5xl">Properties</h1><p className="mb-12 mt-4 max-w-xl text-soft">Filter by type and open a listing to make an enquiry.</p><PropertyGrid /></div>;
}
