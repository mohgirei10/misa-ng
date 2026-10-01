export type Listing = { id: string; name: string; area: string; type: "Residential" | "Commercial" | "Land"; price: string; detail: string; tone: string };
// Sample data: replace with your database or CMS.
export const listings: Listing[] = [
  { id: "1", name: "Maitama Terraces", area: "Maitama, Abuja", type: "Residential", price: "From N450m", detail: "4 bed terraces", tone: "#A85F08" },
  { id: "2", name: "Lekki Waterfront Residences", area: "Lekki, Lagos", type: "Residential", price: "From N280m", detail: "2 to 4 bed apartments", tone: "#0A0F17" },
  { id: "3", name: "Jabi Lake Commercial Plaza", area: "Jabi, Abuja", type: "Commercial", price: "From N1.2bn", detail: "Grade A office floors", tone: "#252D3A" },
  { id: "4", name: "Jimeta Growth Plots", area: "Jimeta, Adamawa", type: "Land", price: "From N15m", detail: "600 sqm titled plots", tone: "#8a5a10" },
  { id: "5", name: "Guzape Heights", area: "Guzape, Abuja", type: "Residential", price: "From N380m", detail: "3 bed penthouses", tone: "#0D121B" },
  { id: "6", name: "Ikeja Logistics Park", area: "Ikeja, Lagos", type: "Commercial", price: "From N900m", detail: "Warehouse units", tone: "#3a2a0a" },
];
export const news = [
  { tag: "Real estate", title: "What rising construction costs mean for off-plan buyers in 2026" },
  { tag: "Finance", title: "Mortgage and cooperative housing finance: options compared" },
  { tag: "Investment", title: "How to read a developer's track record before you invest" },
  { tag: "Real estate", title: "Title documents explained: C of O, Governor's consent and survey plans" },
];
