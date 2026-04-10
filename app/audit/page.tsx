export default function AuditPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy min-h-[100vh] flex flex-col">
        <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-20 py-5 md:py-6 flex items-center justify-between gap-3 w-full">
          <a href="/" className="font-sans font-semibold text-[17px] sm:text-[19px] text-white shrink-0">
            10xyourteams.com
          </a>
          <a
            href="https://cal.com/marcvallverdu/20min"
            className="bg-terracotta text-white text-[12px] sm:text-[14px] font-semibold px-3.5 sm:px-5 py-2.5 rounded-[7px] hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
          >
            Book a call
          </a>
        </nav>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-20 flex-1 flex items-center w-full">
          <div className="py-10 w-full max-w-[760px]">
            <h1 className="font-sans font-bold text-[2.8rem] md:text-[4rem] text-white leading-[1.05] max-w-[760px]">
              AI Leverage Audit
            </h1>
            <p className="mt-5 text-[18px] text-[#E5DED3] leading-[1.65] max-w-[720px]">
              A two-week diagnostic for leadership teams that have plenty of AI activity, but not enough operational change to show for it.
            </p>
            <p className="mt-5 text-[16px] text-[#C0BAB0] max-w-[700px] leading-[1.7]">
              We look at where AI can create real leverage across the business, what is blocking that today, and what needs to change first in workflows, ownership, and operating rhythm.
            </p>
            <div className="mt-6 text-[14px] text-[#C0BAB0]">
              <a href="/" className="underline underline-offset-4 hover:text-white transition-colors">
                See the main overview
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/marcvallverdu/20min"
                className="inline-block bg-terracotta text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] hover:opacity-90 transition-opacity"
              >
                Book a 20-minute call →
              </a>
              <a
                href="mailto:marc@10xyourteams.com?subject=AI%20Leverage%20Audit"
                className="inline-block border-2 border-white text-white text-[15px] font-medium px-7 py-3.5 rounded-[8px] hover:bg-white/10 transition-colors"
              >
                Prefer email? Reach out directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[760px]">
            <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.7rem] text-navy mb-5">
              Who it&apos;s for
            </h2>
            <p className="text-[16px] text-[#2A2A2A] leading-[1.7]">
              COOs, VPs of Ops, Heads of Ops, Chiefs of Staff, and transformation leaders in companies where AI tools are already in circulation, but the way work gets done has not meaningfully changed.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "AI tools are already being used across the business",
              "Adoption is fragmented and uneven across teams",
              "Leadership expects leverage, but the gains still feel patchy",
              "Nobody has a clean view of what should actually change operationally",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border-2 border-navy rounded-[11px] p-6"
                style={{ boxShadow: "4px 4px 0px #1B2A4A" }}
              >
                <p className="text-[15px] text-[#2A2A2A] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.7rem] text-navy mb-10">
            What the audit does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Diagnose the current state",
                body: "Make sense of what is already happening with AI across the organisation, where the gains are real, and where activity is mostly noise."
              },
              {
                title: "Find the leverage",
                body: "Identify the workflows, teams, and decisions where AI can create meaningful gains in speed, quality, capacity, or managerial leverage."
              },
              {
                title: "Set the next 90 days",
                body: "Turn the diagnosis into a practical 90-day plan with priorities, ownership, and the operating changes that should happen first."
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white border-2 border-navy rounded-[11px] p-7"
                style={{ boxShadow: "4px 4px 0px #1B2A4A" }}
              >
                <span className="font-sans font-bold text-[3.2rem] text-terracotta leading-none block">
                  0{i + 1}
                </span>
                <h3 className="font-sans font-bold text-[22px] text-navy mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#2A2A2A] leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[860px]">
            <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.7rem] text-navy mb-10">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Current-state diagnosis",
              "Top 3-5 high-leverage AI opportunities",
              "Workflow and operating model blockers",
              "Team, ownership, and policy recommendations",
              "30/60/90-day action plan",
              "Executive readout with clear next steps",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-navy/10 pb-4">
                <span className="text-terracotta font-bold text-[20px] leading-none">✓</span>
                <p className="text-[16px] text-[#2A2A2A] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[820px]">
            <h2 className="font-sans font-bold text-[2rem] md:text-[2.5rem] text-navy mb-4">
              By the end of the audit, you should know three things.
            </h2>
            <div className="space-y-5 text-[16px] text-[#4A4440] leading-[1.75] mt-8">
              <p>
                <span className="text-navy font-semibold">First,</span> where AI is actually worth operationalising, and where experimentation is creating noise instead of leverage.
              </p>
              <p>
                <span className="text-navy font-semibold">Second,</span> what needs to change in workflows, decision-making, and operating rhythm for the gains to become durable.
              </p>
              <p>
                <span className="text-navy font-semibold">Third,</span> what the next 90 days should look like if you want to move from scattered activity to operational advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-mid py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="bg-white border-2 border-navy rounded-[14px] p-8 md:p-10" style={{ boxShadow: "4px 4px 0px #1B2A4A" }}>
            <p className="text-[13px] uppercase tracking-[0.18em] text-navy/60 font-semibold mb-4">
              Important boundary
            </p>
            <h2 className="font-sans font-bold text-[2rem] md:text-[2.4rem] text-navy mb-4 max-w-[700px]">
              This is not another AI strategy deck, and it is not a disguised custom build project.
            </h2>
            <p className="text-[16px] text-[#2A2A2A] leading-[1.75] max-w-[760px]">
              The point of the audit is to create clarity fast. It helps leadership see where the leverage really is, what is blocking it, and what should change first. It is designed to lead to sharper decisions, better prioritisation, and a cleaner path into execution, not months of vague recommendations or outsourced implementation sludge.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[560px]">
              <h2 className="font-sans font-bold text-[1.9rem] md:text-[2.3rem] text-white mb-3">
                If AI is everywhere and the gains still feel fuzzy, start here.
              </h2>
              <p className="text-[16px] text-[#A0AABB] leading-[1.6]">
                If the problem is execution, not awareness, the cleanest next step is a 20-minute call. We’ll quickly work out whether an AI Leverage Audit is the right move.
              </p>
              <p className="mt-4 text-[14px] text-[#C0BAB0] leading-[1.6] max-w-[520px]">
                Not sure if you need an audit, a sprint, or just a sanity check? The call is the right first step.
              </p>
            </div>
            <a
              href="https://cal.com/marcvallverdu/20min"
              className="shrink-0 bg-terracotta text-white font-semibold text-[15px] px-8 py-3.5 rounded-[7px] hover:opacity-90 transition-opacity"
            >
              Book a 20-minute call →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
