import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "MISA NG LTD | Property, investment and developer partnerships",
  description: "Commission-based property agency in Nigeria: listings, real estate and finance news, developer onboarding and investment.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>);
}
