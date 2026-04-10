export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (navy) ─── */}
      <section className="bg-navy min-h-[100vh] flex flex-col">
        <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-20 py-5 md:py-6 flex items-center justify-between gap-3 w-full">
          <span className="font-sans font-semibold text-[15px] sm:text-[17px] text-white shrink-0">
            10xyourteams.com
          </span>
          <a
            href="https://cal.com/marcvallverdu/20min"
            className="bg-terracotta text-white text-[12px] sm:text-[14px] font-semibold px-3.5 sm:px-5 py-2.5 rounded-[7px] hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
          >
            Book a call
          </a>
        </nav>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-20 flex-1 flex items-center w-full">
          <div className="py-8 md:py-10 w-full">
            <h1
              className="font-display text-[4.25rem] sm:text-[5rem] md:text-[8.5rem] lg:text-[11rem] leading-[0.88] text-white uppercase"
              style={{ letterSpacing: "-3px" }}
            >
              10X
              <br />
              YOUR
              <br />
              <span className="relative inline-block">
                TEAMS.
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
            <p className="mt-6 md:mt-7 text-[16px] md:text-[17px] text-[#C0BAB0] max-w-[560px] leading-[1.55]">
              <span className="block text-white font-semibold mb-2">
                Same headcount. 10x the output.
              </span>
              <span className="block text-[#E5DED3] mb-2">
                From AI experiments to operational advantage.
              </span>
              10xyourteams helps ambitious ops leaders redesign how work gets
              done, so AI becomes a real advantage across the team, not just
              another tool people use occasionally.
            </p>
            <p className="mt-3 text-[13px] md:text-[14px] text-[#8A95A8] max-w-[520px]">
              Built by a COO doing this inside a 1,000-person company right now.
            </p>
            <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://cal.com/marcvallverdu/20min"
                className="inline-block w-full sm:w-auto text-center bg-terracotta text-white text-[14px] font-semibold px-5 sm:px-6 py-3 rounded-[7px] hover:opacity-90 transition-opacity"
              >
                Book a 20-minute call →
              </a>
              <a
                href="/audit"
                className="inline-block w-full sm:w-auto text-center border-2 border-white text-white text-[14px] font-medium px-5 sm:px-6 py-3 rounded-[7px] hover:bg-white/10 transition-colors"
              >
                See how the audit works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS CARDS (cream) ─── */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Map the Work",
                body: "We break work down to the task level and separate what needs judgment from what can be automated, accelerated, or removed entirely. You can’t redesign what you haven’t made visible.",
              },
              {
                num: "02",
                title: "Redesign the Operating Model",
                body: "We reshape workflows, decision flows, and team structure around AI, so people spend more time on judgment, creativity, and leverage, and less time on coordination and repetition.",
              },
              {
                num: "03",
                title: "Enable the Shift",
                body: "We help leadership turn the redesign into a real operating model, with the right roles, expectations, workflows, and internal momentum to make it stick.",
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

      {/* ─── WHAT CHANGES ─── */}
      <section className="bg-cream-mid py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-10">
            What changes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="font-sans font-bold text-[20px] text-navy mb-5">
                Before
              </h3>
              <div className="space-y-4">
                {[
                  "AI is a side tool some people use when they remember",
                  "Managers spend their time coordinating handoffs",
                  "Work moves slowly because the operating model hasn’t changed",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[#2A2A2A] leading-[1.5] pl-5 border-l-2 border-navy/20"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-sans font-bold text-[20px] text-terracotta mb-5">
                After
              </h3>
              <div className="space-y-4">
                {[
                  "AI is built into how work gets done",
                  "Managers spend more time making decisions, less time chasing execution",
                  "Teams ship faster with fewer handoffs and less drag",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[#2A2A2A] leading-[1.5] pl-5 border-l-2 border-terracotta"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE FRAMEWORK ─── */}
      <section className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[1.75rem] md:text-[2.8rem] text-navy mb-4 max-w-[760px]">
            AI doesn&apos;t create advantage on its own. Operating models do.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4A4440] leading-[1.7] max-w-[760px]">
            Most companies are still treating AI like a better piece of
            software. They roll out tools, run pilots, and hope productivity
            follows. It usually doesn&apos;t. The gains come when workflows,
            decision-making, team structure, and expectations change with the
            technology.
          </p>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#4A4440] leading-[1.7] max-w-[760px]">
            That&apos;s the real shift. Not AI as a tool, AI as part of the
            operating model.
          </p>
          <h3 className="font-sans font-bold text-[1.5rem] md:text-[2rem] text-navy mt-14 mb-4 max-w-[680px]">
            Redesigning the operating model takes three things.
          </h3>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Directive",
                body: "Leadership needs a clear mandate. Not vague ambition, an actual change with an owner, a number, and a deadline.",
              },
              {
                title: "Measurement",
                body: "Do you know what your people actually do, hour by hour? Not job titles — real tasks. If you can't measure the work, you can't make the case for change.",
              },
              {
                title: "Enablement",
                body: "Teams need the tools, access, permission, and support to work in a new way. Licences alone do not change how companies operate.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border-t-2 border-terracotta pt-6"
              >
                <h3 className="font-sans font-bold text-[22px] text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-[#4A4440] leading-[1.6]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-[17px] text-navy font-semibold">
            This is process redesign, not tool rollout.
          </p>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="bg-cream-mid py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[600px]">
            <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-8">
              Who this is for
            </h2>
            <div className="space-y-5 text-[15px] text-[#2A2A2A] leading-[1.6]">
              <p className="text-navy font-semibold text-[16px]">
                10xyourteams is for senior operators responsible for how work
                gets done: COOs, VPs of Ops, Heads of Transformation, and
                product or operating leaders under pressure to make AI real.
              </p>
              <p>
                Typically at companies with 200 to 2,000 people, where AI tools
                are already in the business, adoption is uneven, productivity
                gains are unclear, and leadership knows the organisation needs
                to change, not just the tooling.
              </p>
              <p className="text-navy font-semibold">
                You don&apos;t need another strategy deck. You need someone
                who can turn AI into an operating advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.5rem] md:text-[2.8rem] text-navy mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Understand the pressure",
                body: "We start with what’s been tried, what’s stuck, and where the business actually needs leverage.",
              },
              {
                step: "2",
                title: "Diagnose the gap",
                body: "We map the work, identify where AI can change the economics of execution, and pinpoint what has to change in the operating model.",
              },
              {
                step: "3",
                title: "Redesign for advantage",
                body: "We redesign workflows, decision flows, and team structure so AI improves how the company actually runs, not just how individuals work.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-sans font-bold text-[2.5rem] text-terracotta/30 leading-none block">
                  {item.step}
                </span>
                <h3 className="font-sans font-bold text-[20px] text-navy mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#3A3530] leading-[1.6]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA (navy) ─── */}
      <section id="contact" className="bg-navy py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[560px]">
              <h2 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] text-white mb-3">
                Your board is going to ask what AI means for headcount.
              </h2>
              <p className="text-[16px] text-[#A0AABB] leading-[1.6]">
                Don’t show up with tool usage stats. Show up with a clear view of where AI creates leverage, what has to change, and what happens next.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://cal.com/marcvallverdu/20min"
                className="bg-terracotta text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity"
              >
                Book a 20-minute call →
              </a>
              <a
                href="/audit"
                className="border-2 border-white text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:bg-white/10 transition-colors"
              >
                See how the audit works
              </a>
            </div>
          </div>
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
