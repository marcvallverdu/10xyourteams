"use client";

import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: { score: number; label: string }[];
};

const pillars: { name: string; color: string; questions: Question[] }[] = [
  {
    name: "Directive",
    color: "terracotta",
    questions: [
      {
        id: 1,
        text: "Has your CEO or board made a specific statement about what AI means for your org's headcount or structure?",
        options: [
          { score: 3, label: "Yes — with a timeline and targets" },
          { score: 2, label: "Sort of — they've talked about AI but nothing specific about structure" },
          { score: 1, label: "They've mentioned AI in an all-hands but no mandate" },
          { score: 0, label: "No — AI hasn't been linked to structural change" },
        ],
      },
      {
        id: 2,
        text: "Is there a named person accountable for AI transformation outcomes (not just \"exploring AI\")?",
        options: [
          { score: 3, label: "Yes — with clear KPIs and a deadline" },
          { score: 2, label: "Someone owns it loosely but without hard targets" },
          { score: 1, label: "It's spread across multiple people with no single owner" },
          { score: 0, label: "Nobody owns it" },
        ],
      },
      {
        id: 3,
        text: "Do department heads know they're expected to rethink their team structure around AI?",
        options: [
          { score: 3, label: "Yes — it's an explicit expectation with a timeline" },
          { score: 2, label: "It's been implied but not formally mandated" },
          { score: 1, label: "A few have taken initiative, most haven't been asked" },
          { score: 0, label: "No — team structure hasn't been connected to AI" },
        ],
      },
      {
        id: 4,
        text: "Are there consequences for ignoring AI adoption?",
        options: [
          { score: 3, label: "Yes — it's tied to performance and resource decisions" },
          { score: 2, label: "Soft consequences — it's noticed but not penalised" },
          { score: 1, label: "No consequences, but there's social pressure" },
          { score: 0, label: "None — you can completely ignore AI with no impact" },
        ],
      },
      {
        id: 5,
        text: "If you asked your CEO \"what does AI mean for our headcount in 18 months?\" — would they have a clear answer?",
        options: [
          { score: 3, label: "Yes — they've already said it publicly or to leadership" },
          { score: 2, label: "They'd give a directional answer but nothing specific" },
          { score: 1, label: "They'd deflect or say \"it's too early to tell\"" },
          { score: 0, label: "They haven't thought about it in those terms" },
        ],
      },
    ],
  },
  {
    name: "Measurement",
    color: "sage",
    questions: [
      {
        id: 6,
        text: "Can you describe, task by task, what your team does in a given week — not job descriptions, actual work?",
        options: [
          { score: 3, label: "Yes — we've mapped workflows at task level with time estimates" },
          { score: 2, label: "For some teams or processes, not all" },
          { score: 1, label: "We have job descriptions and rough process docs" },
          { score: 0, label: "No — we measure outputs, not the work behind them" },
        ],
      },
      {
        id: 7,
        text: "Do you know how many hours per week your team spends on work that requires human judgment vs. mechanical/repetitive work?",
        options: [
          { score: 3, label: "Yes — we've measured it" },
          { score: 2, label: "We have rough estimates" },
          { score: 1, label: "We'd guess but haven't quantified it" },
          { score: 0, label: "No idea" },
        ],
      },
      {
        id: 8,
        text: "Have you mapped any workflow end-to-end before deciding what to automate?",
        options: [
          { score: 3, label: "Yes — we mapped first, then chose the tool" },
          { score: 2, label: "We've done it for one or two processes" },
          { score: 1, label: "We picked the AI tool first and tried to fit it into existing workflows" },
          { score: 0, label: "We haven't mapped any workflows" },
        ],
      },
      {
        id: 9,
        text: "When evaluating AI impact, do you measure business outcomes or activity metrics?",
        options: [
          { score: 3, label: "Business outcomes with baselines" },
          { score: 2, label: "Mix of both" },
          { score: 1, label: "Mostly activity metrics (logins, prompts sent, training completed)" },
          { score: 0, label: "We don't measure AI impact at all" },
        ],
      },
      {
        id: 10,
        text: "Could you walk into a leadership meeting and say \"if AI handled the mechanical parts of [team X], we'd save Y hours per week\" — with evidence?",
        options: [
          { score: 3, label: "Yes — for multiple teams" },
          { score: 2, label: "For one team or process" },
          { score: 1, label: "I could make the argument but without hard data" },
          { score: 0, label: "No — I don't have the baseline to make that case" },
        ],
      },
    ],
  },
  {
    name: "Enablement",
    color: "forest",
    questions: [
      {
        id: 11,
        text: "Do your people have AI tools embedded in their actual workflows — or just access to ChatGPT?",
        options: [
          { score: 3, label: "Embedded in the tools they already use daily" },
          { score: 2, label: "Some integration, but mostly standalone AI tools" },
          { score: 1, label: "They have licences but tools aren't connected to workflows" },
          { score: 0, label: "Just ChatGPT/Claude access (or nothing)" },
        ],
      },
      {
        id: 12,
        text: "Can you identify your AI champions, superstars, and key people?",
        options: [
          { score: 3, label: "Yes — we know who's who and have plans for each group" },
          { score: 2, label: "We know our champions but haven't mapped superstars or key people" },
          { score: 1, label: "A few enthusiasts exist but we haven't categorised anyone" },
          { score: 0, label: "No — we don't know who's ahead and who's not" },
        ],
      },
      {
        id: 13,
        text: "If someone wants to solve a problem with AI right now, how many hoops do they jump through?",
        options: [
          { score: 3, label: "Minimal — data is accessible and approved tools are available" },
          { score: 2, label: "Some friction — 1-2 approvals but manageable" },
          { score: 1, label: "Significant friction — multiple approvals, weeks of waiting" },
          { score: 0, label: "Nearly impossible without executive intervention" },
        ],
      },
      {
        id: 14,
        text: "Have you explicitly told your team leads they have permission to redesign how their team works?",
        options: [
          { score: 3, label: "Yes — it's an explicit expectation with support" },
          { score: 2, label: "It's been implied but not formally stated" },
          { score: 1, label: "Some have done it on their own initiative" },
          { score: 0, label: "No — people are waiting to be asked" },
        ],
      },
      {
        id: 15,
        text: "If you had to restructure one team to be 30% smaller using AI, could you actually do it?",
        options: [
          { score: 3, label: "Yes — we could start next month" },
          { score: 2, label: "We'd need a few weeks to prepare but the pieces are mostly there" },
          { score: 1, label: "We'd need months of preparation" },
          { score: 0, label: "We're nowhere near ready" },
        ],
      },
    ],
  },
];

function getLevel(score: number): { label: string; color: string } {
  if (score >= 12) return { label: "Strong", color: "text-sage" };
  if (score >= 7) return { label: "Partial", color: "text-terracotta" };
  return { label: "Weak", color: "text-red-600" };
}

function getPattern(d: number, m: number, e: number) {
  const weak = (s: number) => s < 7;
  const strong = (s: number) => s >= 12;

  if (weak(d) && weak(m) && weak(e))
    return {
      title: "Starting from scratch",
      desc: "You're where 90% of companies are. Start with measurement — it gives you evidence, and evidence gets you everything else.",
      cta: "Begin with the Measurement Kit",
    };
  if (strong(d) && weak(m))
    return {
      title: "Strong directive, weak measurement",
      desc: "Your CEO means it, but you can't prove what works. You'll make cuts based on gut feeling, not evidence. Priority: map one workflow this month.",
      cta: "Get the Measurement Kit",
    };
  if (weak(d) && strong(m))
    return {
      title: "Strong measurement, weak directive",
      desc: "You have the data but no mandate to act on it. You know exactly where AI could save time, but nobody's told the org to do it. Take your measurement data to your CEO.",
      cta: "Get the Directive Kit",
    };
  if (strong(d) && strong(m) && weak(e))
    return {
      title: "Ready to go — but your people can't execute",
      desc: "Leadership means it, you have the data, but your people can't execute. This is the \"chaos\" pattern — cuts get announced before the tools are ready.",
      cta: "Get the Enablement Kit",
    };
  if (strong(d) && strong(m) && strong(e))
    return {
      title: "You're ready",
      desc: "The question isn't whether to restructure — it's when. You have the mandate, the data, and the people. Time to move.",
      cta: "Book a strategy call",
    };

  // Find weakest
  const min = Math.min(d, m, e);
  if (min === d)
    return {
      title: "Your directive needs work",
      desc: "Without a clear mandate from leadership, your AI efforts will stay scattered. Sharpen the directive before investing in tools or training.",
      cta: "Get the Directive Kit",
    };
  if (min === m)
    return {
      title: "Your measurement gap is holding you back",
      desc: "You need to understand what your people actually do before you can redesign how they work. Map one workflow end-to-end this month.",
      cta: "Get the Measurement Kit",
    };
  return {
    title: "Your enablement is the bottleneck",
    desc: "Your people need the right tools, permissions, and explicit mandate to redesign their work. Remove the friction first.",
    cta: "Get the Enablement Kit",
  };
}

export default function ScorecardPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentPillar, setCurrentPillar] = useState(0);

  const totalQuestions = 15;
  const answeredCount = Object.keys(answers).length;

  const pillarScores = pillars.map((p) =>
    p.questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
  );

  const allAnswered = answeredCount === totalQuestions;

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleSubmit = () => {
    if (allAnswered) setShowResults(true);
  };

  const pillar = pillars[currentPillar];
  const pillarAnswered = pillar.questions.filter((q) => answers[q.id] !== undefined).length;

  if (showResults) {
    const [d, m, e] = pillarScores;
    const pattern = getPattern(d, m, e);
    const maxScore = 15;

    return (
      <div className="min-h-screen bg-page-bg">
        <nav className="max-w-[720px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <a href="/" className="font-serif font-bold text-lg text-text-primary">
            10xyourteams
          </a>
          <a
            href="/audit"
            className="text-sm font-medium text-text-body hover:text-text-primary transition-colors"
          >
            Explore the Audit
          </a>
        </nav>

        <main className="max-w-[720px] mx-auto px-6 pt-8 pb-20">
          <h1 className="font-serif font-black text-3xl md:text-4xl text-text-primary mb-2">
            Your Results
          </h1>
          <p className="text-text-body mb-10">
            Here&apos;s where your organisation stands across the three pillars that determine whether AI becomes real operating leverage or just more activity.
          </p>

          {/* Score bars */}
          <div className="space-y-6 mb-12">
            {pillars.map((p, i) => {
              const score = pillarScores[i];
              const level = getLevel(score);
              const pct = (score / maxScore) * 100;
              const barColor =
                p.color === "terracotta"
                  ? "bg-terracotta"
                  : p.color === "sage"
                  ? "bg-sage"
                  : "bg-forest";

              return (
                <div key={p.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-lg text-text-primary">
                      {p.name}
                    </span>
                    <span className={`text-sm font-medium ${level.color}`}>
                      {score}/15 — {level.label}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-divider rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pattern diagnosis */}
          <div className="bg-card-bg border border-sage rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="font-serif font-bold text-2xl text-text-primary mb-3">
              {pattern.title}
            </h2>
            <p className="text-text-body leading-relaxed mb-4">{pattern.desc}</p>
            <p className="text-sm text-text-body mb-6">
              If you want a practical read on where AI can create real leverage, what is blocking it, and what should change first, the next step is the AI Leverage Audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/audit"
                className="inline-block bg-terracotta text-white font-medium text-[15px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Explore the AI Leverage Audit →
              </a>
              <a
                href="mailto:marc@10xyourteams.com?subject=AI%20Leverage%20Audit"
                className="inline-block border border-divider text-text-primary font-medium text-[15px] px-6 py-3 rounded-full hover:border-sage transition-colors"
              >
                Book an intro call
              </a>
            </div>
          </div>

          {/* Pillar breakdowns */}
          <div className="space-y-6">
            {pillars.map((p, i) => {
              const score = pillarScores[i];
              const level = getLevel(score);
              return (
                <div
                  key={p.name}
                  className="bg-card-bg border border-divider rounded-xl p-5"
                >
                  <h3 className="font-serif font-bold text-lg text-text-primary mb-1">
                    {p.name}{" "}
                    <span className={`text-sm font-sans ${level.color}`}>
                      {score}/15
                    </span>
                  </h3>
                  <p className="text-sm text-text-body">
                    {score >= 12
                      ? `Your ${p.name.toLowerCase()} is strong. This isn't your bottleneck.`
                      : score >= 7
                      ? `Your ${p.name.toLowerCase()} is partial. There are gaps to close here.`
                      : `Your ${p.name.toLowerCase()} is weak. This is likely holding back your AI transformation.`}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Retake */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setAnswers({});
                setShowResults(false);
                setCurrentPillar(0);
              }}
              className="text-sm text-text-body hover:text-text-primary transition-colors underline"
            >
              Retake the scorecard
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Nav */}
      <nav className="max-w-[720px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <a href="/" className="font-serif font-bold text-lg text-text-primary">
          10xyourteams
        </a>
        <div className="flex items-center gap-4">
          <a
            href="/audit"
            className="hidden sm:inline text-sm font-medium text-text-body hover:text-text-primary transition-colors"
          >
            Explore the Audit
          </a>
          <span className="text-sm text-text-body">
            {answeredCount}/{totalQuestions} answered
          </span>
        </div>
      </nav>

      <main className="max-w-[720px] mx-auto px-6 pt-8 pb-20">
        {/* Header */}
        <h1 className="font-serif font-black text-3xl md:text-4xl text-text-primary mb-2">
          AI Advantage Scorecard
        </h1>
        <p className="text-text-body mb-3">
          15 questions. 3 minutes. Find out where AI is getting stuck between experimentation and operational advantage.
        </p>
        <p className="text-sm text-text-body mb-8">
          This scorecard looks at the three conditions that determine whether AI changes how work actually runs: directive, measurement, and enablement.
        </p>

        {/* Pillar tabs */}
        <div className="flex gap-2 mb-8">
          {pillars.map((p, i) => {
            const isActive = i === currentPillar;
            const pillarDone = p.questions.every((q) => answers[q.id] !== undefined);
            return (
              <button
                key={p.name}
                onClick={() => setCurrentPillar(i)}
                className={`flex-1 text-center py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-text-primary text-white"
                    : "bg-card-bg border border-divider text-text-body hover:border-sage"
                }`}
              >
                {p.name}
                {pillarDone && " ✓"}
              </button>
            );
          })}
        </div>

        {/* Pillar progress */}
        <div className="mb-8">
          <div className="w-full h-1.5 bg-divider rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                pillar.color === "terracotta"
                  ? "bg-terracotta"
                  : pillar.color === "sage"
                  ? "bg-sage"
                  : "bg-forest"
              }`}
              style={{ width: `${(pillarAnswered / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {pillar.questions.map((q, qi) => (
            <div
              key={q.id}
              className="bg-card-bg border border-divider rounded-2xl p-5 md:p-6"
            >
              <p className="font-medium text-text-primary mb-4 leading-relaxed">
                <span className="text-text-body mr-2">Q{q.id}.</span>
                {q.text}
              </p>
              <div className="space-y-2.5">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={opt.score}
                      onClick={() => handleAnswer(q.id, opt.score)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                        selected
                          ? "border-terracotta bg-terracotta/5 text-text-primary"
                          : "border-divider bg-white text-text-body hover:border-sage"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={() => setCurrentPillar((p) => Math.max(0, p - 1))}
            disabled={currentPillar === 0}
            className="text-sm text-text-body hover:text-text-primary transition-colors disabled:opacity-30"
          >
            ← Previous pillar
          </button>

          {currentPillar < 2 ? (
            <button
              onClick={() => setCurrentPillar((p) => Math.min(2, p + 1))}
              className="bg-text-primary text-white font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Next pillar →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`font-medium text-sm px-6 py-2.5 rounded-full transition-opacity ${
                allAnswered
                  ? "bg-terracotta text-white hover:opacity-90"
                  : "bg-divider text-text-body cursor-not-allowed"
              }`}
            >
              See results ({answeredCount}/{totalQuestions})
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
