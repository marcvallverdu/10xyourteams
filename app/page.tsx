import Honeycomb from "./components/Honeycomb";
import Sparkline from "./components/Sparkline";

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* ─── NAVIGATION ─── */}
      <nav className="max-w-[1100px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <span className="font-serif font-bold text-lg text-text-primary">
          10xyourteams.co
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-sm text-text-primary hover:text-terracotta transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-sage text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Customize
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
          {/* Text */}
          <div className="flex-1 md:max-w-[55%]">
            <h1 className="font-serif font-black text-[2.75rem] md:text-[3.5rem] leading-[1.08] text-text-primary">
              Stop Cutting.
              <br />
              Start Multiplying.
            </h1>
            <p className="mt-5 text-base text-text-body max-w-[420px] leading-relaxed">
              The companies winning with AI aren&apos;t just getting leaner —
              they&apos;re building engines where every person does the work of
              ten. We help ops leaders make that shift.
            </p>
            <a
              href="#scorecard"
              className="inline-block mt-7 bg-terracotta text-white font-medium text-[15px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get started →
            </a>
          </div>

          {/* Honeycomb illustration */}
          <div className="flex-1 flex justify-center md:justify-end md:max-w-[45%]">
            <Honeycomb />
          </div>
        </div>
      </section>

      {/* ─── COMPARISON CARD ─── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="bg-card-bg border border-sage rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Left — The Shrink Trap */}
            <div className="flex-1 pb-8 md:pb-0 md:pr-8">
              <h2 className="font-serif font-bold text-2xl text-text-primary mb-5">
                The Shrink Trap
              </h2>
              <ul className="space-y-3">
                {[
                  ["Declining", "growth as headcount drops without reinvestment"],
                  ["Improving", "processes without changing roles or structure"],
                  ["Cutting", "to boost margins instead of reinvesting savings"],
                  ["Identifying", "losses instead of opportunities for growth"],
                ].map(([keyword, rest], i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    <span className="text-sm text-text-body leading-relaxed">
                      <span className="text-terracotta font-medium">
                        {keyword}
                      </span>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Sparkline direction="down" />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block w-px bg-divider mx-0" />
            {/* Horizontal divider on mobile */}
            <div className="md:hidden h-px bg-divider my-0" />

            {/* Right — The 10x Engine */}
            <div className="flex-1 pt-8 md:pt-0 md:pl-8">
              <h2 className="font-serif font-bold text-2xl text-text-primary mb-5">
                The{" "}
                <span className="text-terracotta">10x Engine</span>
              </h2>
              <ul className="space-y-3">
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
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    <span className="text-sm text-text-body leading-relaxed">
                      <span className="text-terracotta font-medium">
                        {keyword}
                      </span>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Sparkline direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLAR CARDS ─── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Directive */}
          <div className="bg-card-bg border border-sage rounded-2xl overflow-hidden">
            <div className="h-1.5 bg-terracotta" />
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl text-text-primary mb-3">
                Directive
              </h3>
              <p className="text-sm text-text-body leading-relaxed mb-5">
                Your CEO says &quot;lean into AI.&quot; Your team hears &quot;do
                nothing.&quot; That&apos;s not a directive — that&apos;s a vibe.
                We help you build the real mandate.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-terracotta hover:opacity-80 transition-opacity"
              >
                Explore →
              </a>
            </div>
          </div>

          {/* Measurement */}
          <div className="bg-card-bg border border-sage rounded-2xl overflow-hidden">
            <div className="h-1.5 bg-sage" />
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl text-text-primary mb-3">
                Measurement
              </h3>
              <p className="text-sm text-text-body leading-relaxed mb-5">
                Before you can transform anything, you need to know what your
                people actually do. Hour by hour. Task by task. Which work
                should exist at all?
              </p>
              <a
                href="#"
                className="text-sm font-medium text-sage hover:opacity-80 transition-opacity"
              >
                Explore →
              </a>
            </div>
          </div>

          {/* Enablement */}
          <div className="bg-card-bg border border-sage rounded-2xl overflow-hidden">
            <div className="h-1.5 bg-forest" />
            <div className="p-6">
              <h3 className="font-serif font-bold text-xl text-text-primary mb-3">
                Enablement
              </h3>
              <p className="text-sm text-text-body leading-relaxed mb-5">
                The tools, the permissions, the people infrastructure. Champions
                who scout. Superstars who multiply. And explicit permission to
                redesign how work gets done.
              </p>
              <a
                href="#"
                className="text-sm font-medium text-forest hover:opacity-80 transition-opacity"
              >
                Explore →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-footer-bg">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
            {/* Brand */}
            <div>
              <span className="font-serif font-bold text-xl text-text-primary">
                10xyourteams.co
              </span>
              <p className="mt-2 text-sm text-text-body">
                Exponential growth through AI-augmented teams
              </p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-medium text-[15px] text-text-primary mb-3">
                Product
              </h4>
              <ul className="space-y-2">
                {["Home", "About", "Workshop"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-body hover:text-text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <div>
              <h4 className="font-medium text-[15px] text-text-primary mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                {["Get in touch", "Privacy", "Terms"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-body hover:text-text-primary transition-colors"
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
        <div className="border-t border-sage/30">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
            <span className="text-xs text-text-body">10xyourteams.co</span>
            <span className="text-xs text-text-body">
              © 2026 Marc Vallverdú
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
