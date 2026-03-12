export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (navy) ─── */}
      <section className="bg-navy min-h-[100vh] flex flex-col">
        {/* Nav */}
        <nav className="max-w-[1200px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between w-full">
          <span className="font-sans font-semibold text-[16px] text-white">
            10xyourteams.com
          </span>
          <a
            href="#contact"
            className="bg-terracotta text-white text-[13px] font-medium px-5 py-2.5 rounded-[6px] hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </nav>

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex-1 flex items-center w-full">
          <div className="py-8 w-full">
            <h1 className="font-display text-[5.5rem] md:text-[9rem] lg:text-[12rem] leading-[0.88] text-white uppercase">
              10X
              <br />
              YOUR
              <br />
              <span className="relative inline-block">
                TEAMS.
                {/* Terracotta underline bar */}
                <span className="absolute bottom-[0.02em] left-[-0.05em] right-[-0.05em] h-[0.13em] bg-terracotta rounded-[4px]" />
              </span>
            </h1>
            <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] text-[#8A95A8] max-w-[460px] leading-[1.6]">
              We diagnose your AI gaps and rebuild your operating model.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 border border-white/30 text-white text-[14px] font-medium px-7 py-3.5 rounded-[6px] hover:bg-white/10 transition-colors"
            >
              Talk to Us →
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW WE TRANSFORM (cream) ─── */}
      <section className="bg-page-bg py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-text-primary mb-4">
            How we transform your organisation
          </h2>
          <p className="text-[15px] md:text-[16px] text-text-body max-w-[540px] leading-[1.6] mb-14">
            We audit how your teams actually work. We redesign roles, workflows,
            and structures around AI. We implement with you — not from a slide
            deck.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Diagnose",
                body: "We map your organisation's real workflows — task by task, team by team. Where is judgment? Where is repetition? You get a complete picture of what AI can unlock.",
              },
              {
                num: "02",
                title: "Redesign",
                body: "We rebuild your operating model. New role definitions, restructured teams, AI embedded into actual workflows. A blueprint, not a strategy doc.",
              },
              {
                num: "03",
                title: "Implement",
                body: "We work alongside your leadership through the transition. Right people, removed friction, sequenced changes. Nothing breaks.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-white border border-[#D5D0C8] rounded-[10px] p-7 flex flex-col"
              >
                <span className="font-display text-[3rem] md:text-[3.5rem] text-terracotta leading-none">
                  {card.num}
                </span>
                <h3 className="font-serif font-bold text-[22px] md:text-[24px] text-text-primary mt-2 mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-body leading-[1.55] flex-1">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT CHANGES (cream continued) ─── */}
      <section className="bg-page-bg pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-text-primary mb-12">
            What changes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Before */}
            <div>
              <h3 className="font-sans font-semibold text-[16px] text-text-body/60 uppercase tracking-wider mb-6">
                Before
              </h3>
              <ul className="space-y-4">
                {[
                  "3 people spend 3 weeks shipping a feature",
                  "Managers manage process, not outcomes",
                  "AI is a side project, not the operating model",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-text-body leading-[1.5] pl-5 border-l-2 border-[#D5D0C8]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* Declining sparkline */}
              <div className="mt-6">
                <svg
                  viewBox="0 0 400 60"
                  className="w-full h-[50px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 L50 12 L100 18 L150 24 L200 32 L250 40 L300 46 L350 52 L400 56"
                    stroke="#D5D0C8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="font-sans font-semibold text-[16px] text-terracotta uppercase tracking-wider mb-6">
                After
              </h3>
              <ul className="space-y-4">
                {[
                  "1 person ships the same feature in a day",
                  "Roles designed around judgment, not coordination",
                  "Every workflow has AI built in from the start",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-text-primary leading-[1.5] pl-5 border-l-2 border-terracotta"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* Ascending sparkline */}
              <div className="mt-6">
                <svg
                  viewBox="0 0 400 60"
                  className="w-full h-[50px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 54 L60 50 L120 44 L180 36"
                    stroke="#D5D0C8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M180 36 L240 24 L300 14 L360 7 L400 3"
                    stroke="#C0704A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THIS ISN'T CONSULTING (cream) ─── */}
      <section className="bg-page-bg pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="max-w-[600px]">
            <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-text-primary mb-8">
              This isn&apos;t consulting
            </h2>
            <div className="space-y-5 text-[15px] md:text-[16px] text-text-body leading-[1.65]">
              <p>
                We don&apos;t hand you a PDF and leave. We don&apos;t run a
                6-week discovery phase. We don&apos;t sell you a platform.
              </p>
              <p className="text-text-primary font-medium text-[16px] md:text-[17px]">
                We diagnose. We redesign. We implement. We stay until your
                teams are operating at 10x.
              </p>
              <p>
                Built on a practical framework —{" "}
                <span className="text-terracotta font-medium">
                  Directive, Measurement, Enablement
                </span>{" "}
                — born inside a real company, not a consulting firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH (cream) ─── */}
      <section className="bg-page-bg pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="max-w-[600px]">
            <h2 className="font-serif font-bold text-[28px] md:text-[36px] text-text-primary mb-8">
              Who we work with
            </h2>
            <div className="space-y-5 text-[15px] md:text-[16px] text-text-body leading-[1.65]">
              <p>
                Operations leaders at companies with 100–5,000 people who know
                AI should be transforming how they work — but can&apos;t bridge
                the gap between demos and structural change.
              </p>
              <p className="text-text-primary font-medium">
                You&apos;ve seen the tools. You believe it&apos;s possible.
                You need someone who&apos;s done it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA (navy) ─── */}
      <section id="contact" className="bg-navy py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif font-bold text-[26px] md:text-[34px] text-white">
            Ready to 10x your teams?
          </h2>
          <a
            href="mailto:marc@10xyourteams.com"
            className="shrink-0 bg-terracotta text-white font-medium text-[15px] px-8 py-4 rounded-[6px] hover:opacity-90 transition-opacity"
          >
            Talk to Us →
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy-dark border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <span className="font-sans font-semibold text-[16px] text-white">
                10xyourteams.com
              </span>
              <p className="mt-1 text-[14px] text-[#6B7A94]">
                Diagnose. Redesign. Implement.
              </p>
            </div>
            <div className="flex gap-8 text-[14px] text-[#6B7A94]">
              <a
                href="https://wyww.co"
                className="hover:text-white transition-colors"
              >
                WYWW Newsletter
              </a>
              <a
                href="mailto:marc@10xyourteams.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
