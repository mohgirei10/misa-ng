import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import LeadModal from "@/components/LeadModal";
import LeadButton from "@/components/LeadButton";
import Reveal from "@/components/Reveal";
import { news } from "@/lib/data";

const pillars = [
  {
    number: "01",
    title: "Curated property",
    text: "Residential, commercial and land opportunities reviewed before they reach our network.",
  },
  {
    number: "02",
    title: "Market intelligence",
    text: "Clear insights on property markets, finance, policy and the forces shaping real estate.",
  },
  {
    number: "03",
    title: "Developer access",
    text: "A structured route for developers to connect with qualified buyers and investors.",
  },
  {
    number: "04",
    title: "Investment opportunities",
    text: "Selected opportunities designed around transparency, documentation and completion.",
  },
];

export default function Home() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

  return (
    <main id="top" className="overflow-hidden bg-ink text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <Hero />

      {/* =========================================================
          TRUST / VALUE STRIP
      ========================================================= */}
      <section className="border-y border-line bg-[#0a111b]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="group min-h-[250px] px-2 py-12 md:px-8 lg:px-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-gold">
                      {item.number}
                    </span>

                    <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
                  </div>

                  <h3 className="mt-10 font-serif text-[1.45rem] leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-soft">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED INVESTMENT
      ========================================================= */}
      <section id="invest" className="relative">
        <div className="grid min-h-[680px] lg:grid-cols-2">
          {/* Visual */}
          <div className="relative min-h-[520px] overflow-hidden bg-[#17110b]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#f59a16_0%,#b56b10_35%,#24170b_70%,#050505_100%)]" />

            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:70px_70px]" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6 lg:left-12 lg:right-12">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Featured development
                </p>

                <p className="mt-2 font-serif text-2xl text-white">
                  Maitama Terraces
                </p>
              </div>

              <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                Abuja
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center bg-[#f4efe7] px-7 py-20 text-[#111] sm:px-10 lg:px-16">
            <Reveal>
              <div className="max-w-xl">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#b77a24]" />
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9a651d]">
                    Featured opportunity
                  </p>
                </div>

                <h2 className="mt-7 font-serif text-[clamp(2.7rem,5vw,4.7rem)] leading-[0.95] tracking-[-0.03em]">
                  Maitama
                  <br />
                  Terraces
                </h2>

                <p className="mt-7 max-w-lg text-base leading-8 text-black/60">
                  A gated terrace community in Abuja featuring four-bedroom
                  homes, private parking and title documentation prepared for
                  transfer.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 sm:max-w-md">
                  <div className="bg-[#f4efe7] p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                      Price from
                    </p>
                    <p className="mt-2 font-serif text-2xl">₦450m</p>
                  </div>

                  <div className="bg-[#f4efe7] p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                      Bedrooms
                    </p>
                    <p className="mt-2 font-serif text-2xl">4</p>
                  </div>
                </div>

                <div className="mt-9">
                  <LeadButton type="Investment pack: Maitama Terraces">
                    Request investment pack
                  </LeadButton>
                </div>

                <p className="mt-4 text-xs text-black/40">
                  Documentation and availability subject to verification.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROPERTIES
      ========================================================= */}
      <section id="properties" className="bg-[#070d15]">
        <div className="mx-auto max-w-7xl px-6 pt-24">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    The portfolio
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em]">
                  Properties worth
                  <br />
                  looking twice.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-soft">
                Explore selected opportunities across residential, commercial
                and land markets.
              </p>
            </div>
          </Reveal>
        </div>

        <Properties />
      </section>

      {/* =========================================================
          DEVELOPERS
      ========================================================= */}
      <section id="developers" className="relative border-t border-line bg-[#0a111b]">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  For developers
                </p>
              </div>

              <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-[-0.035em]">
                Put your development
                <br />
                in front of the
                <br />
                right people.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-soft">
                MISA helps developers present their projects professionally,
                qualify enquiries and connect with serious buyers and
                investors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-line bg-[#0e1722] p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Developer service
                </span>

                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-gold">
                  ↗
                </span>
              </div>

              <h3 className="mt-16 font-serif text-3xl">
                A simpler route to qualified enquiries.
              </h3>

              <div className="mt-8 space-y-4 border-t border-line pt-7">
                <div className="flex gap-4">
                  <span className="text-xs text-gold">01</span>
                  <p className="text-sm text-soft">
                    Submit your development details.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs text-gold">02</span>
                  <p className="text-sm text-soft">
                    We review and structure the listing.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs text-gold">03</span>
                  <p className="text-sm text-soft">
                    Qualified enquiries are introduced to you.
                  </p>
                </div>
              </div>

              <div className="mt-9">
                <LeadButton type="Developer onboarding">
                  Start developer onboarding
                </LeadButton>
              </div>

              <p className="mt-4 text-xs leading-6 text-muted">
                Commission is payable upon a completed sale, subject to agreed
                terms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          NEWS
      ========================================================= */}
      <section id="newsfeed" className="bg-[#f4efe7] px-6 py-24 text-[#111] sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 border-b border-black/10 pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#9a651d]">
                  MISA intelligence
                </p>

                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.7rem,5vw,4.5rem)] leading-none tracking-[-0.03em]">
                  Market notes.
                  <br />
                  Better decisions.
                </h2>
              </div>

              <div>
                <LeadButton
                  type="Newsfeed subscription"
                  className="btn-line"
                >
                  Subscribe to newsfeed
                </LeadButton>
              </div>
            </div>
          </Reveal>

          <ul className="mt-3">
            {news.map((n, index) => (
              <li
                key={n.title}
                className="group grid gap-5 border-b border-black/10 py-7 md:grid-cols-[80px_1fr_auto] md:items-center"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a651d]">
                    {n.tag}
                  </p>

                  <p className="mt-2 max-w-3xl font-serif text-2xl leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {n.title}
                  </p>
                </div>

                <span className="hidden text-xl text-black/30 transition-transform group-hover:translate-x-1 md:block">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer id="contact" className="border-t border-line bg-[#050a10]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_.6fr_.6fr]">
            <div>
              <p className="max-w-xl font-serif text-4xl leading-tight text-white">
                Real estate,
                <br />
                approached differently.
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-soft">
                Municipal Integrated Service Agent NG Ltd — MISA NG LTD — is
                part of Strategic Infrastructure and Resource Partners
                (SIR-Partners).
              </p>

              <div className="mt-8">
                <LeadButton type="Contact request">
                  Start a conversation
                </LeadButton>
              </div>
            </div>

            <nav className="grid content-start gap-4 text-sm">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-muted">
                Explore
              </p>

              <a
                href="#properties"
                className="text-soft transition-colors hover:text-brand"
              >
                Properties
              </a>

              <a
                href="#invest"
                className="text-soft transition-colors hover:text-brand"
              >
                Investments
              </a>

              <a
                href="#newsfeed"
                className="text-soft transition-colors hover:text-brand"
              >
                Market notes
              </a>
            </nav>

            <nav className="grid content-start gap-4 text-sm">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-muted">
                Connect
              </p>

              <a
                href="#developers"
                className="text-soft transition-colors hover:text-brand"
              >
                Developers
              </a>

              <a
                href="#contact"
                className="text-soft transition-colors hover:text-brand"
              >
                Contact
              </a>

              <a
                href="#top"
                className="text-soft transition-colors hover:text-brand"
              >
                Back to top ↑
              </a>
            </nav>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
            <p>
              © {new Date().getFullYear()} MISA NG LTD. All rights reserved.
            </p>

            <p>Abuja · Nigeria</p>
          </div>
        </div>
      </footer>

      {/* =========================================================
          WHATSAPP
      ========================================================= */}
      {wa && (
        <a
          href={`https://wa.me/${wa}?text=${encodeURIComponent(
            "Hello MISA NG, I would like to enquire about a property."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-profit text-ink shadow-2xl shadow-black/30 transition duration-300 hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.1-.3.3-.1.6.6 1 1.4 1.8 2.4 2.3.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.8-.1 1.4Z" />
          </svg>
        </a>
      )}

      <LeadModal />
    </main>
  );
}