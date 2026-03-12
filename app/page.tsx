import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* ─── NAVIGATION ─── */}
      <nav className="max-w-[1140px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
        <span className="font-serif font-bold text-[18px] text-text-primary">
          10xyourteams.com
        </span>
        <a
          href="#contact"
          className="bg-sage text-white text-[13px] font-medium px-5 py-2.5 rounded-[8px] hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Honeycomb background */}
        <div className="absolute top-0 right-0 w-[65%] h-full pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/honeycomb.png"
              alt=""
              width={1792}
              height={2358}
              className="absolute top-[-50px] right-[-30px] w-[650px] h-auto opacity-[0.12]"
              priority
              aria-hidden="true"
            />
            <Image
              src="/honeycomb.png"
              alt=""
              width={1792}
              height={2358}
              className="absolute top-[-10px] right-[20px] w-[460px] h-auto"
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #F7F4EF 0%, #F7F4EF 15%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #F7F4EF 0%, transparent 30%)",
            }}
          />
        </div>

        <div className="max-w-[1140px] mx-auto px-8 md:px-16 pt-14 md:pt-20 pb-24 md:pb-32 relative z-10">
          <div className="max-w-[600px]">
            <h1
              className="font-serif font-bold text-[3rem] md:text-[4rem] leading-[1.06] text-text-primary"
              style={{ fontStyle: "normal" }}
            >
              10X Your Teams.
            </h1>
            <p className="mt-6 text-[16px] text-text-body max-w-[480px] leading-[1.65]">
              We diagnose your organisation&apos;s AI gaps and rebuild your
              operating model so every team delivers 10x the output. Not by
              replacing people — by amplifying them.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-terracotta text-white font-medium text-[14px] px-6 py-3 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Talk to Us →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="max-w-[1140px] mx-auto px-8 md:px-16 pb-16">
        <p className="text-[14px] text-text-body italic border-l-2 border-terracotta pl-4">
          Led by a COO rebuilding a 1,000-person company with AI right now.
        </p>
      </div>

      {/* ─── HOW WE TRANSFORM ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <h2 className="font-serif font-bold text-[28px] md:text-[32px] text-text-primary mb-4">
          How we transform your organisation
        </h2>
        <p className="text-[15px] text-text-body max-w-[640px] leading-[1.6] mb-12">
          We audit how your teams actually work. We redesign roles, workflows,
          and structures around AI. We implement the changes with you — not
          from a slide deck.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Diagnose",
              body: "We map your organisation's real workflows — task by task, team by team. Where is judgment? Where is mechanical repetition? Where does work exist that shouldn't? You get a complete picture of what AI can unlock.",
            },
            {
              step: "02",
              title: "Redesign",
              body: "We rebuild your operating model. New role definitions, restructured teams, AI embedded into actual workflows. Not a strategy doc — a blueprint for how your company runs with 10x output per person.",
            },
            {
              step: "03",
              title: "Implement",
              body: "We work alongside your leadership through the transition. Identifying the right people to build around, removing friction, sequencing the changes so nothing breaks.",
            },
          ].map((card) => (
            <div
              key={card.step}
              className="bg-card-bg border border-[#C8C8C8] rounded-[10px] overflow-hidden flex flex-col"
            >
              <div className="h-[4px] bg-sage" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[13px] font-medium text-sage mb-1">
                  Step {card.step}
                </span>
                <h3 className="font-serif font-bold text-[20px] text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-body leading-[1.55] flex-1">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT CHANGES ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <h2 className="font-serif font-bold text-[28px] md:text-[32px] text-text-primary mb-10">
          What changes
        </h2>
        <div className="bg-card-bg border border-[#C8C8C8] rounded-[10px] p-6 md:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Before */}
            <div className="flex-1 pb-6 md:pb-0 md:pr-8">
              <h3 className="font-serif font-bold text-[20px] text-text-body/70 mb-5">
                Before
              </h3>
              <ul className="space-y-3">
                {[
                  "3 people spend 3 weeks shipping a feature",
                  "Managers manage process, not outcomes",
                  "AI is a side project, not the operating model",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-text-body/40 shrink-0" />
                    <span className="text-[14px] text-text-body leading-[1.5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Declining sparkline */}
              <div className="mt-6">
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-[80px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 10 L30 8 L60 16 L90 14 L120 22 L150 20 L180 30 L210 28 L240 38 L270 42 L300 50 L330 58 L360 65 L400 74"
                    stroke="#999999"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#D5D5D5]" />
            <div className="md:hidden h-px bg-[#D5D5D5]" />

            {/* After */}
            <div className="flex-1 pt-6 md:pt-0 md:pl-8">
              <h3 className="font-serif font-bold text-[20px] text-terracotta mb-5">
                After
              </h3>
              <ul className="space-y-3">
                {[
                  "1 person ships the same feature in a day",
                  "Roles are designed around judgment, not coordination",
                  "Every workflow has AI built in from the start",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-terracotta shrink-0" />
                    <span className="text-[14px] text-text-body leading-[1.5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Ascending sparkline */}
              <div className="mt-6">
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-[80px]"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 70 L30 68 L60 66 L90 64 L120 60 L150 54 L180 46"
                    stroke="#999999"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M180 46 L210 36 L240 26 L270 18 L300 12 L330 8 L360 5 L400 3"
                    stroke="#C0704A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THIS ISN'T CONSULTING ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[640px]">
          <h2 className="font-serif font-bold text-[28px] md:text-[32px] text-text-primary mb-6">
            This isn&apos;t consulting
          </h2>
          <div className="space-y-4 text-[15px] text-text-body leading-[1.65]">
            <p>
              We don&apos;t hand you a PDF and leave. We don&apos;t run a
              6-week discovery phase. We don&apos;t sell you a platform.
            </p>
            <p>
              We diagnose. We redesign. We implement. We stay until your teams
              are operating at 10x.
            </p>
            <p>
              Built on a practical framework —{" "}
              <span className="text-text-primary font-medium">
                Directive, Measurement, Enablement
              </span>{" "}
              — born inside a real company, not a consulting firm.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[640px]">
          <h2 className="font-serif font-bold text-[28px] md:text-[32px] text-text-primary mb-6">
            Who we work with
          </h2>
          <div className="space-y-4 text-[15px] text-text-body leading-[1.65]">
            <p>
              Operations leaders at companies with 100–5,000 people who know AI
              should be transforming how they work — but can&apos;t bridge the
              gap between demos and structural change.
            </p>
            <p>
              You&apos;ve seen the tools. You believe it&apos;s possible. You
              need someone who&apos;s done it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section
        id="contact"
        className="max-w-[1140px] mx-auto px-8 md:px-16 pb-24 md:pb-32"
      >
        <div className="bg-card-bg border border-[#C8C8C8] rounded-[10px] p-8 md:p-12 text-center">
          <h2 className="font-serif font-bold text-[26px] md:text-[30px] text-text-primary mb-4">
            Ready to 10x your teams?
          </h2>
          <p className="text-[15px] text-text-body mb-8 max-w-[400px] mx-auto">
            Your CEO is going to ask about AI headcount this quarter. Will you
            have a framework — or just opinions?
          </p>
          <a
            href="mailto:marc@10xyourteams.com"
            className="inline-block bg-terracotta text-white font-medium text-[14px] px-8 py-3.5 rounded-[8px] hover:opacity-90 transition-opacity"
          >
            Talk to Us →
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-footer-bg">
        <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <span className="font-serif font-bold text-xl text-text-primary">
                10xyourteams.com
              </span>
              <p className="mt-1 text-[14px] text-text-body">
                Diagnose. Redesign. Implement.
              </p>
            </div>
            <div className="flex gap-8 text-[14px] text-text-body">
              <a
                href="https://wyww.co"
                className="hover:text-text-primary transition-colors"
              >
                WYWW Newsletter
              </a>
              <a
                href="mailto:marc@10xyourteams.com"
                className="hover:text-text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-text-primary transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-text-body/20">
          <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-4 flex justify-between items-center">
            <span className="text-[13px] text-text-body">
              10xyourteams.com
            </span>
            <span className="text-[13px] text-text-body">
              © 2026 Marc Vallverdú
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
