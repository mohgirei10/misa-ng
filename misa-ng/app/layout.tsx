import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MISA NG LTD | Property, Investment & Developer Partnerships",
  description:
    "Commission-based property agency in Nigeria: property listings, real estate and finance news, developer onboarding, and investment opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}