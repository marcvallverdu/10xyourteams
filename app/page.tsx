import Image from "next/image";
import Sparkline from "./components/Sparkline";

export default function Home() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* ─── NAVIGATION ─── */}
      <nav className="max-w-[1140px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
        <span className="font-serif font-bold text-[18px] text-text-primary">
          10xyourteams.com
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-[14px] text-text-primary hover:text-terracotta transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-sage text-white text-[13px] font-medium px-4 py-2 rounded-[8px] hover:opacity-90 transition-opacity"
          >
            Customize
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Honeycomb background — positioned behind everything */}
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
            {/* Main honeycomb — more opaque, slightly inset */}
            <Image
              src="/honeycomb.png"
              alt="Honeycomb illustration"
              width={1792}
              height={2358}
              className="absolute top-[-10px] right-[20px] w-[460px] h-auto"
              priority
            />
          </div>
          {/* Left fade gradient to blend into cream bg */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #F7F4EF 0%, #F7F4EF 15%, transparent 50%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #F7F4EF 0%, transparent 30%)",
            }}
          />
        </div>

        {/* Hero content — floats over the honeycomb */}
        <div className="max-w-[1140px] mx-auto px-8 md:px-16 pt-10 md:pt-14 pb-24 md:pb-32 relative z-10">
          <div className="max-w-[600px]">
            <h1
              className="font-serif font-bold text-[3rem] md:text-[4rem] leading-[1.08] text-text-primary"
              style={{ fontStyle: "normal" }}
            >
              Stop Cutting.
              <br />
              Start Multiplying.
            </h1>
            <p className="mt-5 text-[15px] text-text-body max-w-[380px] leading-[1.6]">
              The companies winning with AI aren&apos;t just getting leaner —
              they&apos;re building engines where every person does the work of
              ten. We help ops leaders make that shift.
            </p>
            <a
              href="#scorecard"
              className="inline-block mt-6 bg-sage text-white font-medium text-[13px] px-5 py-2.5 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Get started in →
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON CARD ─── */}
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="bg-card-bg border border-[#C8C8C8] rounded-[10px] p-6 md:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Left — The Shrink Trap */}
            <div className="flex-1 pb-6 md:pb-0 md:pr-8">
              <h2 className="font-serif font-bold text-[22px] text-text-primary mb-5">
                The Shrink Trap
              </h2>
              <ul className="space-y-3">
                {[
                  ["Declining", "growth as headcount drops without reinvestment"],
                  ["Improving", "processes without changing roles or structure"],
                  ["Cutting", "to boost margins instead of reinvesting savings"],
                  ["Identifying", "losses instead of opportunities for growth"],
                ].map(([keyword, rest], i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-text-body shrink-0" />
                    <span className="text-[14px] text-text-body leading-[1.5]">
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
            <div className="hidden md:block w-px bg-[#D5D5D5]" />
            <div className="md:hidden h-px bg-[#D5D5D5]" />

            {/* Right — The 10x Engine */}
            <div className="flex-1 pt-6 md:pt-0 md:pl-8">
              <h2 className="font-serif font-bold text-[22px] text-text-primary mb-5">
                The{" "}
                <span className="text-terracotta">10x</span> Engine
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
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-text-body shrink-0" />
                    <span className="text-[14px] text-text-body leading-[1.5]">
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
      <section className="max-w-[1140px] mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Directive",
              body: "Your CEO says \"lean into AI.\" Your team hears \"do nothing.\" That's not a directive — that's a vibe. We help you build the real mandate.",
            },
            {
              title: "Measurement",
              body: "Before you can transform anything, you need to know what your people actually do. Hour by hour. Task by task. Which work should exist at all?",
            },
            {
              title: "Enablement",
              body: "The tools, the permissions, the people infrastructure. Champions who scout. Superstars who multiply. And explicit permission to redesign how work gets done.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-card-bg border border-[#C8C8C8] rounded-[10px] overflow-hidden flex flex-col"
            >
              <div className="h-[4px] bg-sage" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-[18px] text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-[13px] text-text-body leading-[1.55] flex-1 mb-4">
                  {card.body}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-medium text-terracotta hover:opacity-80 transition-opacity"
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
        <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
            {/* Brand */}
            <div>
              <span className="font-serif font-bold text-xl text-text-primary">
                10xyourteams.com
              </span>
              <p className="mt-1 text-[14px] text-text-body">
                Exponential growth through AI-augmented teams
              </p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-semibold text-[14px] text-text-primary mb-3">
                Product
              </h4>
              <ul className="space-y-1.5">
                {["Home", "About", "Workshop"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-text-body hover:text-text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <div>
              <h4 className="font-semibold text-[14px] text-text-primary mb-3">
                Contact
              </h4>
              <ul className="space-y-1.5">
                {["Contact us", "Privacy", "Terms"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-text-body hover:text-text-primary transition-colors"
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
        <div className="border-t border-text-body/20">
          <div className="max-w-[1140px] mx-auto px-8 md:px-16 py-4 flex justify-between items-center">
            <span className="text-[13px] text-text-body">10xyourteams.com</span>
            <span className="text-[13px] text-text-body">
              10xyourteams.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
