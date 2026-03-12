import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (dark) ─── */}
      <section className="relative bg-[#1A1A18] overflow-hidden min-h-[90vh] flex flex-col">
        {/* Honeycomb background — muted on dark */}
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none">
          <Image
            src="/honeycomb.png"
            alt=""
            width={1792}
            height={2358}
            className="absolute top-[-40px] right-[-20px] w-[500px] h-auto opacity-[0.06]"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #1A1A18 0%, #1A1A18 20%, transparent 60%)",
            }}
          />
        </div>

        {/* Nav */}
        <nav className="max-w-[1200px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between w-full relative z-10">
          <span className="font-serif font-bold text-[18px] text-white">
            10xyourteams.com
          </span>
          <a
            href="#contact"
            className="bg-terracotta text-white text-[13px] font-medium px-5 py-2.5 rounded-[6px] hover:opacity-90 transition-opacity"
          >
            Get Started →
          </a>
        </nav>

        {/* Hero content */}
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex-1 flex items-center relative z-10">
          <div className="max-w-[700px] py-16">
            <h1
              className="font-serif font-bold text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.02] text-white"
              style={{ fontStyle: "normal" }}
            >
              10X Your
              <br />
              Teams.
            </h1>
            <p className="mt-8 text-[17px] md:text-[18px] text-[#A8A8A0] max-w-[500px] leading-[1.6]">
              We diagnose your organisation&apos;s AI gaps and rebuild your
              operating model so every team delivers 10x the output. Not by
              replacing people — by amplifying them.
            </p>
            <a
              href="#contact"
              className="inline-block mt-10 bg-terracotta text-white font-medium text-[15px] px-8 py-4 rounded-[6px] hover:opacity-90 transition-opacity"
            >
              Talk to Us →
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 pb-10 relative z-10">
          <p className="text-[14px] text-[#6B6B63] border-l border-terracotta pl-4">
            Led by a COO rebuilding a 1,000-person company with AI right now.
          </p>
        </div>
      </section>

      {/* ─── HOW WE TRANSFORM (cream) ─── */}
      <section className="bg-page-bg py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <h2
            className="font-serif font-bold text-[2.25rem] md:text-[2.75rem] text-text-primary mb-5"
            style={{ fontStyle: "normal" }}
          >
            How we transform
            <br />
            your organisation
          </h2>
          <p className="text-[16px] text-text-body max-w-[560px] leading-[1.6] mb-16">
            We audit how your teams actually work. We redesign roles, workflows,
            and structures around AI. We implement the changes with you — not
            from a slide deck.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Diagnose",
                body: "We map your organisation's real workflows — task by task, team by team. Where is judgment? Where is mechanical repetition? Where does work exist that shouldn't?",
              },
              {
                step: "02",
                title: "Redesign",
                body: "We rebuild your operating model. New role definitions, restructured teams, AI embedded into actual workflows. A blueprint, not a strategy doc.",
              },
              {
                step: "03",
                title: "Implement",
                body: "We work alongside your leadership through the transition. Right people, removed friction, sequenced changes. Nothing breaks.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="border-t-[3px] border-terracotta pt-8"
              >
                <span className="text-[13px] font-medium text-terracotta tracking-wider uppercase">
                  Step {card.step}
                </span>
                <h3
                  className="font-serif font-bold text-[24px] md:text-[28px] text-text-primary mt-2 mb-4"
                  style={{ fontStyle: "normal" }}
                >
                  {card.title}
                </h3>
                <p className="text-[15px] text-text-body leading-[1.6]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT CHANGES (dark) ─── */}
      <section className="bg-[#1A1A18] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <h2
            className="font-serif font-bold text-[2.25rem] md:text-[2.75rem] text-white mb-14"
            style={{ fontStyle: "normal" }}
          >
            What changes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Before */}
            <div>
              <h3 className="font-serif font-bold text-[20px] text-[#6B6B63] mb-6">
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
                    className="text-[16px] text-[#8A8A82] leading-[1.5] pl-5 border-l border-[#333]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* Declining line */}
              <div className="mt-8">
                <svg
                  viewBox="0 0 400 60"
                  className="w-full h-[60px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 L50 12 L100 18 L150 22 L200 30 L250 36 L300 42 L350 50 L400 56"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="font-serif font-bold text-[20px] text-terracotta mb-6">
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
                    className="text-[16px] text-[#D0D0C8] leading-[1.5] pl-5 border-l border-terracotta"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* Ascending line */}
              <div className="mt-8">
                <svg
                  viewBox="0 0 400 60"
                  className="w-full h-[60px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 54 L50 50 L100 46 L150 40 L200 32"
                    stroke="#555"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M200 32 L250 22 L300 14 L350 8 L400 3"
                    stroke="#C0704A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THIS ISN'T CONSULTING (cream) ─── */}
      <section className="bg-page-bg py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="max-w-[640px]">
            <h2
              className="font-serif font-bold text-[2.25rem] md:text-[2.75rem] text-text-primary mb-8"
              style={{ fontStyle: "normal" }}
            >
              This isn&apos;t consulting
            </h2>
            <div className="space-y-5 text-[16px] text-text-body leading-[1.65]">
              <p>
                We don&apos;t hand you a PDF and leave. We don&apos;t run a
                6-week discovery phase. We don&apos;t sell you a platform.
              </p>
              <p className="text-text-primary font-medium text-[17px]">
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

      {/* ─── WHO WE WORK WITH (cream, continued) ─── */}
      <section className="bg-page-bg pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="max-w-[640px]">
            <h2
              className="font-serif font-bold text-[2.25rem] md:text-[2.75rem] text-text-primary mb-8"
              style={{ fontStyle: "normal" }}
            >
              Who we work with
            </h2>
            <div className="space-y-5 text-[16px] text-text-body leading-[1.65]">
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

      {/* ─── BOTTOM CTA (dark) ─── */}
      <section id="contact" className="bg-[#1A1A18] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 text-center">
          <h2
            className="font-serif font-bold text-[2.25rem] md:text-[3rem] text-white mb-5"
            style={{ fontStyle: "normal" }}
          >
            Ready to 10x your teams?
          </h2>
          <p className="text-[16px] text-[#8A8A82] mb-10 max-w-[420px] mx-auto">
            Your CEO is going to ask about AI headcount this quarter. Will you
            have a framework — or just opinions?
          </p>
          <a
            href="mailto:marc@10xyourteams.com"
            className="inline-block bg-terracotta text-white font-medium text-[16px] px-10 py-4 rounded-[6px] hover:opacity-90 transition-opacity"
          >
            Talk to Us →
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#141412] border-t border-[#2A2A28]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <span className="font-serif font-bold text-[18px] text-white">
                10xyourteams.com
              </span>
              <p className="mt-1 text-[14px] text-[#6B6B63]">
                Diagnose. Redesign. Implement.
              </p>
            </div>
            <div className="flex gap-8 text-[14px] text-[#6B6B63]">
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
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
