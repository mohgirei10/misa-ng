import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505", navy: "#0A0F17", panel: "#0D121B", line: "#252D3A",
        brand: "#F59A16", gold: "#FFB52A", deep: "#A85F08",
        snow: "#F5F5F5", soft: "#A7AFBF", muted: "#737B89", profit: "#32D583",
      },
      fontFamily: { serif: ["var(--font-serif)", "serif"], sans: ["var(--font-sans)", "sans-serif"] },
      keyframes: { rise: { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "none" } } },
      animation: { rise: "rise .9s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
export default config;
