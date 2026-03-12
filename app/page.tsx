export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (navy) ─── */}
      <section className="bg-navy min-h-[100vh] flex flex-col">
        {/* Nav */}
        <nav className="max-w-[1200px] mx-auto px-10 md:px-20 py-6 flex items-center justify-between w-full">
          <span className="font-sans font-semibold text-[17px] text-white">
            10xyourteams.com
          </span>
          <a
            href="#contact"
            className="bg-terracotta text-white text-[14px] font-semibold px-5 py-2.5 rounded-[7px] hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </nav>

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-10 md:px-20 flex-1 flex items-center w-full">
          <div className="py-8 w-full">
            <h1
              className="font-display text-[5rem] md:text-[8.5rem] lg:text-[11rem] leading-[0.88] text-white uppercase"
              style={{ letterSpacing: "-3px" }}
            >
              10X
              <br />
              YOUR
              <br />
              <span className="relative inline-block">
                TEAMS.
                {/* Brush-style terracotta underline */}
                <svg
                  className="absolute bottom-[-0.02em] left-[-4px] w-[105%] h-[16px]"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 C30 6, 60 12, 100 8 C140 4, 180 11, 220 7 C260 3, 300 10, 340 6 C360 4, 380 9, 398 7"
                    stroke="#C0704A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-7 text-[17px] text-[#C0BAB0] max-w-[440px] leading-[1.55]">
              We diagnose your AI gaps and rebuild your operating model.
            </p>
            <a
              href="#contact"
              className="inline-block mt-7 border-2 border-white text-white text-[14px] font-medium px-6 py-3 rounded-[7px] hover:bg-white/10 transition-colors"
            >
              Talk to Us →
            </a>
          </div>
        </div>
      </section>

      {/* ─── CARDS SECTION (cream) ─── */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-white border-2 border-navy rounded-[11px] p-7 relative"
                style={{ boxShadow: "4px 4px 0px #1B2A4A" }}
              >
                <span className="font-sans font-bold text-[3.2rem] text-terracotta leading-none block">
                  {card.num}
                </span>
                <h3 className="font-sans font-bold text-[22px] text-navy mt-2 mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#2A2A2A] leading-[1.55]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT CHANGES (cream continued) ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-10">
            What changes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Before */}
            <div>
              <h3 className="font-sans font-bold text-[20px] text-navy mb-5">
                Before
              </h3>
              <div className="space-y-4">
                {[
                  "3 people spend 3 weeks shipping a feature",
                  "Managers manage process, not outcomes",
                  "AI is a side project, not the operating model",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[#2A2A2A] leading-[1.5]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="font-sans font-bold text-[20px] text-navy mb-5">
                After
              </h3>
              <div className="space-y-4">
                {[
                  "1 person ships the same feature in a day",
                  "Roles designed around judgment, not coordination",
                  "Every workflow has AI built in from the start",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[#2A2A2A] leading-[1.5]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THIS ISN'T CONSULTING (cream) ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[600px]">
            <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-8">
              This isn&apos;t consulting
            </h2>
            <div className="space-y-5 text-[15px] text-[#2A2A2A] leading-[1.6]">
              <p>
                We don&apos;t hand you a PDF and leave. We don&apos;t run a
                6-week discovery phase. We don&apos;t sell you a platform.
              </p>
              <p className="text-navy font-semibold text-[16px]">
                We diagnose. We redesign. We implement. We stay until your
                teams are operating at 10x.
              </p>
              <p>
                Built on a practical framework —{" "}
                <span className="text-terracotta font-semibold">
                  Directive, Measurement, Enablement
                </span>{" "}
                — born inside a real company, not a consulting firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH (cream) ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[600px]">
            <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-8">
              Who we work with
            </h2>
            <div className="space-y-5 text-[15px] text-[#2A2A2A] leading-[1.6]">
              <p>
                Operations leaders at companies with 100–5,000 people who know
                AI should be transforming how they work — but can&apos;t bridge
                the gap between demos and structural change.
              </p>
              <p className="text-navy font-semibold">
                You&apos;ve seen the tools. You believe it&apos;s possible.
                You need someone who&apos;s done it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA (navy) ─── */}
      <section id="contact" className="bg-navy py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-sans font-bold text-[1.8rem] md:text-[2.4rem] text-white">
            Ready to 10x your teams?
          </h2>
          <a
            href="mailto:marc@10xyourteams.com"
            className="shrink-0 bg-terracotta text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity"
          >
            Talk to Us →
          </a>
        </div>
      </section>

      {/* ─── FOOTER (cream) ─── */}
      <footer className="bg-cream border-t border-navy/10">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20 py-8 flex flex-col md:flex-row justify-between gap-4">
          <span className="font-sans font-semibold text-[15px] text-navy">
            10xyourteams.com
          </span>
          <div className="flex gap-8 text-[14px] text-navy/60">
            <a
              href="https://wyww.co"
              className="hover:text-navy transition-colors"
            >
              WYWW Newsletter
            </a>
            <a
              href="mailto:marc@10xyourteams.com"
              className="hover:text-navy transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
