export type Listing = {
  id: string;
  name: string;
  area: string;
  city: string;
  type: "Residential" | "Commercial" | "Land";
  price: string;
  detail: string;
  tone: string;
  blurb: string;
  beds: string;
};

// ============================================================
// PROPERTY LISTINGS
// ============================================================

export const listings: Listing[] = [
  {
    id: "1",
    name: "Maitama Terraces",
    area: "Maitama, Abuja",
    city: "Abuja",
    type: "Residential",
    price: "From N450m",
    detail: "4 bed terraces",
    tone: "#A85F08",
    blurb: "Luxury 4-bedroom terraces located in the heart of Maitama.",
    beds: "4",
  },
  {
    id: "2",
    name: "Lekki Waterfront Residences",
    area: "Lekki, Lagos",
    city: "Lagos",
    type: "Residential",
    price: "From N280m",
    detail: "2 to 4 bed apartments",
    tone: "#0A0F17",
    blurb: "Modern waterfront apartments offering serene ocean views.",
    beds: "2 to 4",
  },
  {
    id: "3",
    name: "Jabi Lake Commercial Plaza",
    area: "Jabi, Abuja",
    city: "Abuja",
    type: "Commercial",
    price: "From N1.2bn",
    detail: "Grade A office floors",
    tone: "#252D3A",
    blurb: "Prime office space and commercial floors overlooking Jabi Lake.",
    beds: "N/A",
  },
  {
    id: "4",
    name: "Jimeta Growth Plots",
    area: "Jimeta, Adamawa",
    city: "Adamawa",
    type: "Land",
    price: "From N15m",
    detail: "600 sqm titled plots",
    tone: "#8a5a10",
    blurb: "Titled 600 sqm land plots ready for instant development.",
    beds: "N/A",
  },
  {
    id: "5",
    name: "Guzape Heights",
    area: "Guzape, Abuja",
    city: "Abuja",
    type: "Residential",
    price: "From N380m",
    detail: "3 bed penthouses",
    tone: "#0D121B",
    blurb: "Exclusive penthouse suites with high-end luxury finishes.",
    beds: "3",
  },
  {
    id: "6",
    name: "Ikeja Logistics Park",
    area: "Ikeja, Lagos",
    city: "Lagos",
    type: "Commercial",
    price: "From N900m",
    detail: "Warehouse units",
    tone: "#3a2a0a",
    blurb: "Spacious industrial warehouse units located in Ikeja.",
    beds: "N/A",
  },
];

// ============================================================
// BACKWARD-COMPATIBILITY ALIAS
// Existing components use `properties`.
// Keep `listings` as the main source of truth.
// ============================================================

export const properties = listings;

// ============================================================
// MONEY FORMATTER
// Used by PropertyGrid and property detail pages.
// ============================================================

export function money(value: string | number) {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(value);
  }

  return value;
}

// ============================================================
// NEWS
// ============================================================

export type NewsArticle = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export const news: NewsArticle[] = [
  {
    slug: "rising-construction-costs-2026",
    tag: "Real estate",
    title: "What rising construction costs mean for off-plan buyers in 2026",
    date: "October 1, 2026",
    excerpt: "An analysis of material cost impacts on off-plan property purchases.",
    body: "Rising inflationary pressures and material import dynamics continue to adjust off-plan developer timelines and pricing clauses across key metropolitan markets.",
  },
  {
    slug: "mortgage-cooperative-finance",
    tag: "Finance",
    title: "Mortgage and cooperative housing finance: options compared",
    date: "September 28, 2026",
    excerpt: "Comparing different financing options for your next home.",
    body: "Evaluating conventional equity matching against institutional cooperative contributions helps identify flexible interest exposure over extended multi-year terms.",
  },
  {
    slug: "developer-track-record",
    tag: "Investment",
    title: "How to read a developer's track record before you invest",
    date: "September 25, 2026",
    excerpt: "Key indicators of a reliable real estate developer.",
    body: "Thorough verification of historical handover speed, structural audit history, and title registration compliance serves as the groundwork for capital protection.",
  },
  {
    slug: "title-documents-explained",
    tag: "Real estate",
    title: "Title documents explained: C of O, Governor's consent and survey plans",
    date: "September 20, 2026",
    excerpt: "A beginner's guide to understanding Nigerian property titles.",
    body: "Navigating legal instruments requires distinguishing between state allocation certificates, legal assignment transfers, and official land registry filings.",
  },
];