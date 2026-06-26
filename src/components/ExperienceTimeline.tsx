import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "../data";

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeExp = EXPERIENCES[activeTab];

  return (
    <section id="experience" className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden text-white">
      {/* Decorative dark background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-sky-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Career Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="font-sans text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
            A comprehensive track record spanning B2B enterprise AI systems, high-growth consumer workflows, tech startup formulation, and capital markets.
          </p>
        </div>

        {/* Tabbed Experience Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto min-h-[420px] px-2">
          
          {/* Left Panel: Vertical Navigation Tabs (Dynamic horiz-scroll on smaller devices) */}
          <div className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none border-b border-zinc-800 lg:border-b-0 lg:border-l lg:border-zinc-800 gap-1.5 lg:gap-2 w-full">
            {EXPERIENCES.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex-shrink-0 text-left px-5 py-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-4 w-auto lg:w-full whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                  activeTab === index
                    ? "bg-zinc-900/85 text-sky-400 border border-zinc-800/90 shadow-[0_4px_20px_rgba(56,189,248,0.06)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/30"
                }`}
              >
                {/* Visual Sky Blue Indicator Bar for Desktop Tab List */}
                {activeTab === index && (
                  <motion.div
                    layoutId="desktopTabIndicator"
                    className="absolute left-0 top-3.5 bottom-3.5 w-[3px] bg-sky-400 rounded-r hidden lg:block"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                {/* Small Logo initials */}
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-[11px] border flex-shrink-0 ${
                  activeTab === index
                    ? "bg-sky-400/10 border-sky-400/80 text-sky-450"
                    : "bg-zinc-950 border-zinc-900 text-zinc-500"
                }`}>
                  {exp.logoText}
                </span>

                <div className="text-left overflow-hidden">
                  <span className="block font-bold text-white/95 tracking-tight text-xs md:text-sm truncate lg:whitespace-normal">{exp.company}</span>
                  <span className="block text-[10.5px] text-zinc-500 font-mono mt-0.5">{exp.period.split(" - ")[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Panel: Selected Experience Content with Micro Animations */}
          <div className="lg:col-span-9 bg-zinc-900/40 border border-zinc-800/80 hover:border-sky-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 min-h-[380px] flex flex-col justify-between">
            {/* Top decorative accent glow */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="space-y-5"
              >
                {/* Header Information */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-800/60 pb-4 mb-4">
                    <div className="md:max-w-[73%]">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
                        {activeExp.role}
                      </h3>
                      <span className="text-sm font-semibold text-sky-400 mt-1 block font-display">
                        {activeExp.company}
                      </span>
                    </div>
                    <div className="flex flex-row md:flex-col items-start md:items-end gap-3 md:gap-1.5 text-xs text-zinc-400 font-mono flex-shrink-0">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs md:text-sm text-zinc-300 italic mb-5 leading-relaxed bg-zinc-950/40 px-4 py-3 rounded-xl border border-zinc-900">
                    {activeExp.description}
                  </p>
                </div>

                {/* Achievements points checklist */}
                <ul className="space-y-3.5">
                  {activeExp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-[13px] text-zinc-200 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags category bar */}
                <div className="flex flex-wrap gap-2.5 pt-5 border-t border-zinc-800/80">
                  {activeExp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 bg-zinc-950 rounded-md text-zinc-400 border border-zinc-850"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
