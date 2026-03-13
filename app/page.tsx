export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (navy) ─── */}
      <section className="bg-navy min-h-[100vh] flex flex-col">
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
            <p className="mt-7 text-[17px] text-[#C0BAB0] max-w-[480px] leading-[1.55]">
              Same headcount. 10x the output. We redesign your operating model
              around AI — from how work flows to how teams are structured.
            </p>
            <p className="mt-3 text-[14px] text-[#8A95A8]">
              Built by a COO doing this inside a 1,000-person company right now.
            </p>
            <a
              href="#contact"
              className="inline-block mt-7 border-2 border-white text-white text-[14px] font-medium px-6 py-3 rounded-[7px] hover:bg-white/10 transition-colors"
            >
              Get Started →
            </a>
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
                body: "We sit inside your teams and map every workflow to the task level. What requires human judgment? What's mechanical? What shouldn't exist at all? You can't redesign what you haven't mapped.",
              },
              {
                num: "02",
                title: "Redesign the Roles",
                body: "We restructure roles and workflows around AI — so your people spend their time on judgment, creativity, and decisions. Not coordination, not copy-paste, not reporting.",
              },
              {
                num: "03",
                title: "Unlock the People",
                body: "The right people are already in your company. We work out who to build around, who to move, and who to develop — so your restructured teams are led by the people everyone already trusts.",
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
                  "3 people, 3 weeks to ship a feature",
                  "Managers coordinate handoffs between humans",
                  "AI is a tool some people use sometimes",
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
                  "1 person, 3 days — same feature, same quality",
                  "Managers make decisions — coordination is automated",
                  "AI is the operating model, not an add-on",
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
          <h2 className="font-sans font-bold text-[1.75rem] md:text-[2.8rem] text-navy mb-4 max-w-[680px]">
            Productive individuals don&apos;t make productive firms. Redesigning
            the operating model takes three things.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Directive",
                body: "Has leadership committed to a specific structural change? Not \"we're leaning into AI\" — a mandate with a deadline, a number, and an owner.",
              },
              {
                title: "Measurement",
                body: "Do you know what your people actually do, hour by hour? Not job titles — real tasks. If you can't measure the work, you can't make the case for change.",
              },
              {
                title: "Enablement",
                body: "Do your teams have the tools, the data access, and the permission to redesign how they work? Most companies hand out AI licences and call it a strategy.",
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
            This is process engineering, not tool deployment. We diagnose which
            pillar you&apos;re missing — then redesign the operating model to
            fix it.
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
                Senior leaders responsible for how work gets done — COOs, VPs,
                Heads of Transformation, and anyone accountable for team
                structure at companies with 200–2,000 people.
              </p>
              <p>
                You&apos;ve been told to &ldquo;figure out AI.&rdquo;
                You&apos;ve run the pilots. You&apos;ve bought the tools. But
                the org chart looks the same as it did two years ago — and
                your people are doing the same work, just with a chatbot open
                in another tab.
              </p>
              <p>
                In the 1890s, textile mills swapped steam engines for electric
                motors and saw zero productivity gains for thirty years. The
                technology was superior. The organisation wasn&apos;t. It
                wasn&apos;t until they redesigned the factory floor that
                electrification delivered. Most companies are at the
                &ldquo;faster motor&rdquo; stage with AI right now.
              </p>
              <p className="text-navy font-semibold">
                You don&apos;t need another strategy deck. You need someone
                who&apos;ll redesign the operating model — and who&apos;s
                already doing it inside their own company.
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
                title: "A conversation",
                body: "We start with your situation — what's been tried, what's stuck, and where the pressure is coming from. No pitch deck. Just an honest assessment of where you are.",
              },
              {
                step: "2",
                title: "The diagnosis",
                body: "We embed with your teams and map the work. You get a clear picture of your three-pillar gaps and a concrete plan for what to change first.",
              },
              {
                step: "3",
                title: "The transformation",
                body: "We redesign roles, workflows, and decision flows — the actual operating model. We identify who to build around and implement alongside your leadership. Process engineering, not tool deployment.",
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
            <div className="max-w-[480px]">
              <h2 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] text-white mb-3">
                Your board is going to ask what AI means for headcount.
              </h2>
              <p className="text-[16px] text-[#A0AABB]">
                Have the answer ready.
              </p>
            </div>
            <a
              href="mailto:marc@10xyourteams.com"
              className="shrink-0 bg-terracotta text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity"
            >
              Get Started →
            </a>
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
