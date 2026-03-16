"use client";

import { useMemo, useState } from "react";

type RoleOption = {
  name: string;
  exposure: number;
};

type SelectedRole = RoleOption & {
  headcount: number;
};

const roleOptions: RoleOption[] = [
  { name: "Customer Service Representative", exposure: 9 },
  { name: "Data Entry Clerk", exposure: 10 },
  { name: "Bookkeeper / Accountant", exposure: 8 },
  { name: "Marketing Coordinator", exposure: 8 },
  { name: "Content Writer / Editor", exposure: 9 },
  { name: "HR Coordinator", exposure: 7 },
  { name: "Administrative Assistant", exposure: 9 },
  { name: "Financial Analyst", exposure: 8 },
  { name: "Legal Assistant", exposure: 7 },
  { name: "IT Support Specialist", exposure: 6 },
  { name: "Sales Development Rep", exposure: 8 },
  { name: "Project Manager", exposure: 5 },
  { name: "Recruiter", exposure: 7 },
  { name: "Social Media Manager", exposure: 8 },
  { name: "Graphic Designer", exposure: 6 },
  { name: "Software Developer", exposure: 4 },
  { name: "Product Manager", exposure: 4 },
  { name: "Operations Manager", exposure: 5 },
  { name: "Executive Assistant", exposure: 8 },
  { name: "Compliance Officer", exposure: 6 },
  { name: "Business Analyst", exposure: 7 },
  { name: "Quality Assurance", exposure: 7 },
  { name: "Training Coordinator", exposure: 6 },
  { name: "Procurement Specialist", exposure: 7 },
  { name: "Supply Chain Analyst", exposure: 8 },
  { name: "Copywriter", exposure: 9 },
  { name: "Paralegal", exposure: 8 },
  { name: "Medical Coder", exposure: 8 },
  { name: "Claims Processor", exposure: 9 },
  { name: "Underwriter", exposure: 7 },
];

function getRiskLabel(score: number) {
  if (score >= 7) return "High";
  if (score >= 4) return "Medium";
  return "Low";
}

function getExposureStyles(score: number) {
  if (score >= 7) {
    return "bg-terracotta text-white";
  }
  if (score >= 4) {
    return "bg-[#D9B26F] text-navy";
  }
  return "bg-sage text-navy";
}

export default function ScannerPage() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedRole[]>([]);
  const [showResults, setShowResults] = useState(false);

  const filteredOptions = useMemo(() => {
    const lower = query.toLowerCase();
    return roleOptions
      .filter((role) => !selected.some((item) => item.name === role.name))
      .filter((role) => role.name.toLowerCase().includes(lower))
      .slice(0, 8);
  }, [query, selected]);

  const activeRoles = useMemo(
    () => selected.filter((role) => role.headcount > 0),
    [selected]
  );

  const totalHeadcount = useMemo(
    () => activeRoles.reduce((sum, role) => sum + role.headcount, 0),
    [activeRoles]
  );

  const highExposureCount = useMemo(
    () =>
      activeRoles
        .filter((role) => role.exposure >= 7)
        .reduce((sum, role) => sum + role.headcount, 0),
    [activeRoles]
  );

  const highExposurePercent = totalHeadcount
    ? Math.round((highExposureCount / totalHeadcount) * 100)
    : 0;

  const diagnosis = useMemo(() => {
    if (highExposurePercent > 70) {
      return "Your workforce is heavily exposed. The restructuring conversation isn't optional — it's urgent.";
    }
    if (highExposurePercent >= 40) {
      return "Significant exposure. You have time to be strategic, but not much.";
    }
    return "Lower overall exposure, but check which specific roles are critical.";
  }, [highExposurePercent]);

  const sortedByExposure = useMemo(() => {
    return [...activeRoles].sort((a, b) => b.exposure - a.exposure);
  }, [activeRoles]);

  const sortedByHeadcount = useMemo(() => {
    return [...activeRoles].sort((a, b) => b.headcount - a.headcount);
  }, [activeRoles]);

  const handleAddRole = (role: RoleOption) => {
    setSelected((prev) => [...prev, { ...role, headcount: 0 }]);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* ─── NAV ─── */}
      <section className="bg-navy">
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
      </section>

      {/* ─── HEADER ─── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="max-w-[720px]">
            <p className="text-[13px] uppercase tracking-[0.2em] text-navy/60 font-semibold">
              AI Exposure Scanner
            </p>
            <h1 className="mt-3 font-sans font-bold text-[2.4rem] md:text-[3rem] text-navy">
              See where AI hits your organisation hardest.
            </h1>
            <p className="mt-4 text-[16px] text-[#2A2A2A] leading-[1.65]">
              Add your roles, enter headcount, and get an instant exposure map.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INPUTS ─── */}
      <section className="bg-cream-mid py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20">
          <div className="bg-white border-2 border-navy rounded-[14px] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8">
              <div>
                <label className="font-sans font-semibold text-[15px] text-navy">
                  Add roles
                </label>
                <div className="relative mt-3">
                  <input
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => {
                      window.setTimeout(() => setIsOpen(false), 120);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && filteredOptions[0]) {
                        event.preventDefault();
                        handleAddRole(filteredOptions[0]);
                      }
                    }}
                    placeholder="Search a role"
                    className="w-full rounded-[8px] border-2 border-navy/20 px-4 py-3 text-[14px] text-navy focus:outline-none focus:border-terracotta"
                  />
                  {isOpen && filteredOptions.length > 0 && (
                    <div className="absolute z-10 mt-2 w-full bg-white border-2 border-navy rounded-[10px] shadow-sm overflow-hidden">
                      {filteredOptions.map((role) => (
                        <button
                          key={role.name}
                          type="button"
                          onClick={() => handleAddRole(role)}
                          className="w-full text-left px-4 py-2.5 text-[14px] text-navy hover:bg-cream"
                        >
                          {role.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <p className="mt-2 text-[12px] text-navy/60">
                  Tip: hit Enter to add the top match.
                </p>
              </div>

              <div>
                <p className="font-sans font-semibold text-[15px] text-navy">
                  Selected roles
                </p>
                <div className="mt-3 space-y-3">
                  {selected.length === 0 && (
                    <p className="text-[13px] text-navy/60">
                      No roles added yet.
                    </p>
                  )}
                  {selected.map((role) => (
                    <div
                      key={role.name}
                      className="flex items-center gap-3 border border-navy/15 rounded-[8px] px-3 py-2"
                    >
                      <div className="flex-1">
                        <p className="text-[14px] text-navy font-semibold">
                          {role.name}
                        </p>
                        <p className="text-[12px] text-navy/60">
                          Exposure score: {role.exposure}/10
                        </p>
                      </div>
                      <input
                        type="number"
                        min={0}
                        value={role.headcount}
                        onChange={(event) => {
                          const value = Number(event.target.value);
                          setSelected((prev) =>
                            prev.map((item) =>
                              item.name === role.name
                                ? {
                                    ...item,
                                    headcount: Number.isNaN(value) ? 0 : value,
                                  }
                                : item
                            )
                          );
                        }}
                        className="w-[90px] rounded-[6px] border border-navy/20 px-2 py-1.5 text-[13px] text-navy focus:outline-none focus:border-terracotta"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setSelected((prev) =>
                            prev.filter((item) => item.name !== role.name)
                          )
                        }
                        className="text-[12px] text-navy/60 hover:text-terracotta"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
              <button
                type="button"
                onClick={() => setShowResults(true)}
                disabled={activeRoles.length === 0}
                className="bg-terracotta text-white text-[14px] font-semibold px-6 py-3 rounded-[8px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Generate Report
              </button>
              <p className="text-[13px] text-navy/60">
                Add at least one role with headcount to unlock the report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      {showResults && (
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-[1200px] mx-auto px-10 md:px-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-sans font-bold text-[2.2rem] md:text-[2.6rem] text-navy">
                  Exposure map
                </h2>
                <p className="mt-2 text-[15px] text-[#2A2A2A]">
                  {highExposurePercent}% of your {totalHeadcount} employees are
                  in the high-exposure zone (7+). Total exposed headcount:
                  {" "}
                  <span className="font-semibold text-terracotta">
                    {highExposureCount}
                  </span>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-[12px] text-navy">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-sage" /> Low (0-3)
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#D9B26F]" /> Medium
                  (4-6)
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-terracotta" /> High
                  (7-10)
                </span>
              </div>
            </div>

            <div className="mt-8">
              {activeRoles.length === 0 ? (
                <div className="border-2 border-navy rounded-[12px] bg-white p-6 text-[14px] text-navy">
                  Add headcount values to see the heatmap.
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {sortedByHeadcount.map((role) => (
                    <div
                      key={role.name}
                      className={`rounded-[12px] p-4 flex flex-col justify-between ${getExposureStyles(
                        role.exposure
                      )}`}
                      style={{
                        flex: `${Math.max(1, role.headcount)} 1 160px`,
                        minHeight: `${Math.min(180, 90 + role.headcount * 2)}px`,
                      }}
                    >
                      <div>
                        <p className="text-[13px] font-semibold leading-[1.4]">
                          {role.name}
                        </p>
                        <p className="text-[12px] opacity-80 mt-1">
                          Exposure {role.exposure}/10
                        </p>
                      </div>
                      <p className="text-[18px] font-bold mt-4">
                        {role.headcount} headcount
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
              <div className="bg-white border-2 border-navy rounded-[12px] p-6 overflow-x-auto">
                <h3 className="font-sans font-bold text-[18px] text-navy mb-4">
                  Role breakdown
                </h3>
                <table className="w-full text-left text-[13px] text-navy">
                  <thead>
                    <tr className="text-navy/60">
                      <th className="pb-2">Role</th>
                      <th className="pb-2">Headcount</th>
                      <th className="pb-2">Exposure</th>
                      <th className="pb-2">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedByExposure.map((role) => (
                      <tr
                        key={role.name}
                        className="border-t border-navy/10"
                      >
                        <td className="py-2 pr-2 font-semibold">
                          {role.name}
                        </td>
                        <td className="py-2">{role.headcount}</td>
                        <td className="py-2">{role.exposure}/10</td>
                        <td className="py-2">{getRiskLabel(role.exposure)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white border-2 border-navy rounded-[12px] p-6">
                <h3 className="font-sans font-bold text-[18px] text-navy mb-3">
                  Pattern diagnosis
                </h3>
                <p className="text-[14px] text-[#2A2A2A] leading-[1.6]">
                  {diagnosis}
                </p>
                <div className="mt-6">
                  <p className="text-[12px] uppercase tracking-[0.2em] text-navy/50 font-semibold">
                    Next steps
                  </p>
                  <p className="mt-2 text-[14px] text-navy">
                    Prioritise the top 2 roles in the high-exposure zone for
                    workflow mapping.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
              <div className="bg-navy text-white rounded-[12px] p-6">
                <h3 className="font-sans font-bold text-[18px]">
                  Want the full breakdown?
                </h3>
                <p className="mt-2 text-[14px] text-[#C0BAB0]">
                  Get your detailed report + action plan.
                </p>
                <form
                  action="mailto:marc@10xyourteams.com"
                  className="mt-4 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="flex-1 rounded-[7px] px-3 py-2 text-[13px] text-navy"
                  />
                  <button
                    type="submit"
                    className="bg-terracotta text-white text-[13px] font-semibold px-4 py-2 rounded-[7px]"
                  >
                    Get the report →
                  </button>
                </form>
              </div>
              <div className="bg-cream-mid border-2 border-navy rounded-[12px] p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-navy">
                    Ready to act?
                  </h3>
                  <p className="mt-2 text-[14px] text-[#2A2A2A]">
                    Book the AI Ops Workshop.
                  </p>
                </div>
                <a
                  href="/workshop"
                  className="mt-6 inline-flex items-center justify-center bg-terracotta text-white text-[13px] font-semibold px-4 py-2 rounded-[7px]"
                >
                  Book the AI Ops Workshop →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

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
