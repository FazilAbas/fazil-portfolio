import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EDUCATION_LIST } from "../data";
import { useTracking } from "./TrackingProvider";

const CERTIFICATIONS = [
  { name: "CFA Level 1", issuer: "CFA Institute", status: "Active Candidate" },
  { name: "Capital IQ & Bloomberg Essentials", issuer: "Corporate Finance Institute (CFI)" },
  { name: "Data Analytics with R Programming", issuer: "AICPA-CIMA" },
  { name: "Corporate Valuation & Portfolio Theory", issuer: "EDUCBA" },
  { name: "Product-Led Growth (PLG) Fundamentals", issuer: "ProductLed" },
  { name: "Financial Modeling using Excel", issuer: "Bay Street School" },
  { name: "Equity: Technical Analysis", issuer: "Stock Wizard Academy" },
  { name: "Public Policy & Impact Consulting", issuer: "Global Governance Initiative" },
];

export const AcademicCard: React.FC = () => {
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);
  const [showCerts, setShowCerts] = useState(false);
  const { track } = useTracking();

  return (
    <section id="education" className="py-20 bg-black border-t border-zinc-900 relative overflow-hidden text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Education
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
            Academic foundation in commerce, finance, and economics — complemented by ongoing professional certifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-3">
          {EDUCATION_LIST.map((edu) => {
            const isExpanded = expandedEdu === edu.id;
            const hasDetails = edu.achievements && edu.achievements.length > 0;

            return (
              <div
                key={edu.id}
                className="border border-zinc-800/80 rounded-xl overflow-hidden transition-colors hover:border-zinc-700"
              >
                {/* Header row - always visible */}
                <button
                  onClick={() => { if (hasDetails) { setExpandedEdu(isExpanded ? null : edu.id); track("education_click", "education", `Education: ${edu.institution}`, { eduId: edu.id, expanded: !isExpanded }); } }}
                  className={`w-full text-left p-5 flex items-start justify-between gap-4 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors cursor-pointer ${!hasDetails ? "cursor-default" : ""}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {edu.institution}
                      </h3>
                      {edu.id === "cfa" && (
                        <span className="text-[9px] font-mono font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400">
                      <span className="text-zinc-300 font-medium">{edu.degree}</span>
                      {edu.majors && (
                        <span className="text-zinc-600 mx-1.5">·</span>
                      )}
                      {edu.majors}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 font-mono">{edu.period}</p>
                      <p className="text-[11px] text-zinc-600">{edu.location}</p>
                    </div>
                    {hasDetails && (
                      <div className="text-zinc-600">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    )}
                  </div>
                </button>

                {/* Expandable details */}
                {isExpanded && hasDetails && (
                  <div className="px-5 pb-5 border-t border-zinc-800/50">
                    <ul className="mt-4 space-y-2.5">
                      {edu.achievements!.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                          <span className="text-zinc-600 mt-0.5 select-none">—</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <button
            onClick={() => { setShowCerts(!showCerts); track("education_click", "education", `Certifications: ${!showCerts ? "Expand" : "Collapse"}`); }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer mb-3"
          >
            <span>Professional Certifications</span>
            {showCerts ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showCerts && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-zinc-400 py-2 border-b border-zinc-900/50 last:border-0"
                >
                  <span className="text-zinc-600 mt-0.5 select-none">—</span>
                  <div>
                    <span className="text-zinc-300 font-medium">{cert.name}</span>
                    <span className="text-zinc-600 mx-1">·</span>
                    <span className="text-zinc-500">{cert.issuer}</span>
                    {cert.status && (
                      <span className="text-zinc-600 ml-1">({cert.status})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
