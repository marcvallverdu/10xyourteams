import Honeycomb from "./components/Honeycomb";
import Sparkline from "./components/Sparkline";

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* ─── NAVIGATION ─── */}
      <nav className="max-w-[1140px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
        <span className="font-serif font-bold text-xl text-text-primary">
          10xyourteams.co
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-[15px] font-medium text-text-primary hover:text-terracotta transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-sage text-white text-[15px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Customize
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pt-12 md:pt-16 pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-4">
          {/* Text */}
          <div className="flex-1 md:max-w-[60%] pt-4">
            <h1 className="font-serif font-black text-[2.75rem] md:text-[3.5rem] leading-[1.06] text-text-primary not-italic" style={{ fontStyle: "normal" }}>
              Stop Cutting.
              <br />
              Start Multiplying.
            </h1>
            <p className="mt-6 text-[16px] text-text-body max-w-[400px] leading-[1.65]">
              The companies winning with AI aren&apos;t just getting leaner —
              they&apos;re building engines where every person does the work of
              ten. We help ops leaders make that shift.
            </p>
            <a
              href="#scorecard"
              className="inline-block mt-8 bg-terracotta text-white font-medium text-[15px] px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Get started →
            </a>
          </div>

          {/* Honeycomb illustration */}
          <div className="flex-1 flex justify-center md:justify-end md:max-w-[40%] md:-mt-4">
            <Honeycomb />
          </div>
        </div>
      </section>

      {/* ─── COMPARISON CARD ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-24 md:pb-32">
        <div className="bg-card-bg border border-sage rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row">
            {/* Left — The Shrink Trap */}
            <div className="flex-1 pb-8 md:pb-0 md:pr-10">
              <h2 className="font-serif font-bold text-[26px] text-text-primary mb-6">
                The Shrink Trap
              </h2>
              <ul className="space-y-4">
                {[
                  ["Declining", "growth as headcount drops without reinvestment"],
                  ["Improving", "processes without changing roles or structure"],
                  ["Cutting", "to boost margins instead of reinvesting savings"],
                  ["Identifying", "losses instead of opportunities for growth"],
                ].map(([keyword, rest], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    <span className="text-[15px] text-text-body leading-relaxed">
                      <span className="text-terracotta font-medium">
                        {keyword}
                      </span>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Sparkline direction="down" />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block w-px bg-divider mx-0" />
            {/* Horizontal divider on mobile */}
            <div className="md:hidden h-px bg-divider my-0" />

            {/* Right — The 10x Engine */}
            <div className="flex-1 pt-8 md:pt-0 md:pl-10">
              <h2 className="font-serif font-bold text-[26px] text-text-primary mb-6">
                The{" "}
                <span className="text-terracotta">10x Engine</span>
              </h2>
              <ul className="space-y-4">
                {[
                  [
                    "The 10x engine",
                    "for compounding growth through AI-augmented people",
                  ],
                  [
                    "Hiring",
                    "environments built for multiplication, not just replacement",
                  ],
                  [
                    "Multiplying",
                    "output through AI-augmented people and redesigned roles",
                  ],
                  [
                    "Ascending",
                    "revenue per employee, not just margins",
                  ],
                ].map(([keyword, rest], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    <span className="text-[15px] text-text-body leading-relaxed">
                      <span className="text-terracotta font-medium">
                        {keyword}
                      </span>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Sparkline direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLAR CARDS ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Directive",
              color: "bg-terracotta",
              linkColor: "text-terracotta",
              body: "Your CEO says \"lean into AI.\" Your team hears \"do nothing.\" That's not a directive — that's a vibe. We help you build the real mandate.",
            },
            {
              title: "Measurement",
              color: "bg-sage",
              linkColor: "text-sage",
              body: "Before you can transform anything, you need to know what your people actually do. Hour by hour. Task by task. Which work should exist at all?",
            },
            {
              title: "Enablement",
              color: "bg-forest",
              linkColor: "text-forest",
              body: "The tools, the permissions, the people infrastructure. Champions who scout. Superstars who multiply. And explicit permission to redesign how work gets done.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-card-bg border border-sage rounded-2xl overflow-hidden flex flex-col"
            >
              <div className={`h-1.5 ${card.color}`} />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-[22px] text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-body leading-relaxed flex-1 mb-6">
                  {card.body}
                </p>
                <a
                  href="#"
                  className={`text-[14px] font-medium ${card.linkColor} hover:opacity-80 transition-opacity`}
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-footer-bg">
        <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
            {/* Brand */}
            <div>
              <span className="font-serif font-bold text-2xl text-text-primary">
                10xyourteams.co
              </span>
              <p className="mt-2 text-[15px] text-text-body">
                Exponential growth through AI-augmented teams
              </p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-medium text-[16px] text-text-primary mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {["Home", "About", "Workshop"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-text-body hover:text-text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <div>
              <h4 className="font-medium text-[16px] text-text-primary mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5">
                {["Get in touch", "Privacy", "Terms"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-text-body hover:text-text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-sage/40">
          <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-5 flex justify-between items-center">
            <span className="text-[13px] text-text-body">10xyourteams.co</span>
            <span className="text-[13px] text-text-body">
              © 2026 Marc Vallverdú
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
