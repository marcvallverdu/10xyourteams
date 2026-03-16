"use client";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO (navy) ─── */}
      <section className="bg-navy min-h-[70vh] flex flex-col">
        <nav className="max-w-[1200px] mx-auto px-10 md:px-20 py-6 flex items-center justify-between w-full">
          <span className="font-sans font-semibold text-[17px] text-white">
            10xyourteams.com
          </span>
          <a
            href="mailto:marc@10xyourteams.com"
            className="bg-terracotta text-white text-[14px] font-semibold px-5 py-2.5 rounded-[7px] hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </nav>

        <div className="max-w-[1200px] mx-auto px-10 md:px-20 flex-1 flex items-center w-full">
          <div className="py-10 w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/60 px-4 py-1.5 text-[13px] text-terracotta font-semibold bg-white/5">
              £497 founding price (10 spots) → £997 after
            </div>
            <h1 className="mt-6 font-sans font-bold text-[2.6rem] md:text-[3.6rem] text-white leading-[1.1] max-w-[760px]">
              Build Your AI Ops Playbook in Half a Day
            </h1>
            <p className="mt-5 text-[17px] text-[#C0BAB0] max-w-[640px] leading-[1.6]">
              The three-pillar workshop for ops leaders who need to be ready
              when the CEO asks &ldquo;what&apos;s our plan?&rdquo;
            </p>
            <a
              href="mailto:marc@10xyourteams.com"
              className="inline-block mt-8 bg-terracotta text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Book Your Spot →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FORMAT ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.6rem] text-navy mb-10">
            Format
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Half-day (4 hours), three 90-minute blocks",
              "Small group (max 10) — direct input, not a webinar",
              "Virtual (Zoom) — recorded, playback for 30 days",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border-2 border-navy rounded-[11px] p-6"
                style={{ boxShadow: "4px 4px 0px #1B2A4A" }}
              >
                <p className="text-[15px] text-[#2A2A2A] leading-[1.6]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE FORK ─── */}
      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[780px]">
            <p className="text-[13px] uppercase tracking-[0.2em] text-navy/60 font-semibold">
              Opening section (15 min)
            </p>
            <h2 className="mt-3 font-sans font-bold text-[2.3rem] md:text-[2.7rem] text-navy">
              The Fork
            </h2>
            <p className="mt-4 text-[16px] text-[#2A2A2A] leading-[1.65]">
              Ground in one question: are you shrinking or multiplying? 38% of
              US occupations score 7+ on AI exposure (BLS data, 342 occupations
              scored).
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-navy rounded-[12px] p-6">
              <h3 className="font-sans font-bold text-[20px] text-terracotta mb-3">
                Path one: Shrink
              </h3>
              <ul className="space-y-2 text-[14px] text-[#2A2A2A] leading-[1.6]">
                <li>Atlassian cut 1,600</li>
                <li>Block cut 4,000</li>
                <li>Klarna cut 700 CS agents</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-navy rounded-[12px] p-6">
              <h3 className="font-sans font-bold text-[20px] text-forest mb-3">
                Path two: Multiply
              </h3>
              <ul className="space-y-2 text-[14px] text-[#2A2A2A] leading-[1.6]">
                <li>Fintech ships 500 features/year with 25 PMs</li>
                <li>Revenue &gt;$1B</li>
                <li>50% AI-generated code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 1 ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="border-2 border-navy rounded-[14px] bg-white overflow-hidden">
            <div className="bg-terracotta text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-sans font-bold text-[22px]">Block 1: Directive (90 min)</h3>
              <span className="text-[14px] font-semibold">Leave with: a draft mandate for your CEO</span>
            </div>
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Covers
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>Vibe vs directive framework</li>
                  <li>Block/Stripe/Klarna memo language</li>
                  <li>Three elements (specific outcome, deadline, named owner)</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Working session
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>Score current mandate</li>
                  <li>Draft using template</li>
                  <li>Peer review, refine</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Deliverables
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  {[
                    "Scored assessment",
                    "Draft mandate document",
                    "Exec brief one-pager",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-terracotta">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 2 ─── */}
      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="border-2 border-navy rounded-[14px] bg-white overflow-hidden">
            <div className="bg-sage text-navy px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-sans font-bold text-[22px]">Block 2: Measurement (90 min)</h3>
              <span className="text-[14px] font-semibold">
                Leave with: an exposure map and workflow map of one real process
              </span>
            </div>
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Covers
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>AI Exposure Map</li>
                  <li>&ldquo;Should this work exist?&rdquo; decision tree</li>
                  <li>Role compression vs replacement</li>
                  <li>McKinsey finding (3x more likely to see returns)</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Working session
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>Build company AI Exposure Map</li>
                  <li>Pick highest-exposure function</li>
                  <li>Workflow Mapping Template + task classification</li>
                  <li>Calculate baseline</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Deliverables
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  {[
                    "AI Exposure Map",
                    "Completed workflow map",
                    "Task classification",
                    "Hours saved baseline",
                    "One-page Baseline Report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sage">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3 ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="border-2 border-navy rounded-[14px] bg-white overflow-hidden">
            <div className="bg-forest text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-sans font-bold text-[22px]">Block 3: Enablement (90 min)</h3>
              <span className="text-[14px] font-semibold">
                Leave with: a people assessment, adoption score, and 90-day plan
              </span>
            </div>
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Covers
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>L0-L3 proficiency ladder</li>
                  <li>Champions/superstars/key people overlay</li>
                  <li>7 adoption levers + friction audit</li>
                  <li>Token budget reframe</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Working session
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  <li>Assess direct reports on L0-L3</li>
                  <li>Overlay three types</li>
                  <li>Score 7 adoption levers</li>
                  <li>Run Friction Audit</li>
                  <li>Draft Permission Memo</li>
                  <li>Sequence 90-day plan</li>
                </ul>
              </div>
              <div>
                <p className="font-sans font-bold text-[16px] text-navy mb-3">
                  Deliverables
                </p>
                <ul className="space-y-2 text-[14px] text-[#2A2A2A]">
                  {[
                    "L0-L3 people map",
                    "7-lever adoption score",
                    "Friction score",
                    "Draft permission memo",
                    "90-day enablement plan",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-forest">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AFTER THE WORKSHOP ─── */}
      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.6rem] text-navy mb-10">
            After the workshop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-navy rounded-[12px] p-6">
              <p className="text-[13px] uppercase tracking-[0.2em] text-navy/60 font-semibold">
                Same day
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-[#2A2A2A]">
                <li>All templates (£79 value included)</li>
                <li>Recording (30 days)</li>
                <li>Three working outputs</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-navy rounded-[12px] p-6">
              <p className="text-[13px] uppercase tracking-[0.2em] text-navy/60 font-semibold">
                Week 1–4
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-[#2A2A2A]">
                <li>Private Slack channel</li>
                <li>One 30-min 1:1 call with Marc</li>
                <li>Email support</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-[15px] text-navy font-semibold">
            Optional: advisory retainer (£2,500/mo)
          </p>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR / NOT FOR ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-sans font-bold text-[2.2rem] text-navy mb-6">
                Who this is for
              </h2>
              <ul className="space-y-3 text-[15px] text-[#2A2A2A] leading-[1.6]">
                <li>Ops/product/leadership at 50+ people</li>
                <li>AI conversation happening but nothing structural changed</li>
              </ul>
            </div>
            <div>
              <h2 className="font-sans font-bold text-[2.2rem] text-navy mb-6">
                Who this is not for
              </h2>
              <ul className="space-y-3 text-[15px] text-[#2A2A2A] leading-[1.6]">
                <li>Technical AI training</li>
                <li>Under 20 people</li>
                <li>General AI learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE OFFER ─── */}
      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.6rem] text-navy mb-10">
            The offer
          </h2>
          <div className="bg-white border-2 border-navy rounded-[12px] overflow-hidden">
            {[
              { label: "Half-day workshop", value: "£497" },
              { label: "Three pillar kits (19 tools)", value: "£79 (included)" },
              { label: "Recording (30 days)", value: "Included" },
              { label: "Private Slack", value: "Included" },
              { label: "1:1 review call", value: "Included" },
              { label: "Founding price", value: "£497 / Standard: £997" },
            ].map((row, index) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 text-[15px] text-navy ${
                  index < 5 ? "border-b border-navy/10" : ""
                }`}
              >
                <span className="font-sans font-semibold">{row.label}</span>
                <span className="font-sans font-bold text-terracotta">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA (navy) ─── */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[520px]">
              <h2 className="font-sans font-bold text-[1.8rem] md:text-[2.2rem] text-white mb-3">
                Walk into the next leadership meeting with a plan.
              </h2>
              <p className="text-[16px] text-[#A0AABB]">
                Half-day workshop. Three pillars. Real outputs.
              </p>
            </div>
            <a
              href="mailto:marc@10xyourteams.com"
              className="shrink-0 bg-terracotta text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity"
            >
              Book Your Spot →
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
