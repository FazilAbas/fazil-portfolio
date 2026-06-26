import React from "react";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EDUCATION_LIST } from "../data";

export const AcademicCard: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-black border-t border-zinc-900 relative overflow-hidden text-white">
      {/* Decorative subtle ambient blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Academic Pedigree
          </span>
          <h2 className="font-display text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-2">
            Education Credentials
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Grounded in academic rigor, finance, economics, and business analytics.
          </p>
        </div>

        {/* Sequential List of Wide, Compact Cards */}
        <div id="education-sequence" className="space-y-4">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              id={`edu-card-${edu.id}`}
              className="bg-zinc-900/10 hover:bg-zinc-900/30 border border-zinc-850 hover:border-sky-500/30 p-4 md:p-5 rounded-xl relative overflow-hidden transition-all duration-300 group shadow-sm flex flex-col gap-3.5 animate-fade-in-slide-up"
            >
              {/* Top Accent Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/5 to-transparent group-hover:via-sky-450/30 transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-900/50 pb-3">
                
                {/* Logo & Core Info */}
                <div className="flex items-center gap-3.5">
                  {/* Compact Icon Shield */}
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sky-450 flex-shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-display text-base font-bold text-white group-hover:text-sky-400 transition-colors leading-snug">
                        {edu.institution}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[9px] font-mono font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900/30 uppercase tracking-wide">
                          {edu.id === "ca-foundation" ? "ICAI" : edu.id.toUpperCase()}
                        </span>
                        {edu.id === "srcc" && (
                          <span className="text-[9px] font-mono font-bold text-amber-450 bg-amber-950/45 px-2 py-0.5 rounded border border-amber-900/30">
                            SRCC Alum
                          </span>
                        )}
                        {edu.id === "higher-secondary" && (
                          <span className="text-[9px] font-mono font-bold text-emerald-450 bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-900/30">
                            10.00 / 10.00 CGPA
                          </span>
                        )}
                        {edu.id === "secondary" && (
                          <span className="text-[9px] font-mono font-bold text-emerald-450 bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-900/30">
                            9.40 / 10.00 CGPA
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xs md:text-sm text-zinc-300 font-sans leading-tight flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-0">
                      <span className="font-medium text-white">{edu.degree}</span>
                      {edu.majors && (
                        <span className="hidden sm:inline text-zinc-500 font-mono text-xs ml-2.5 border-l border-zinc-800 pl-2.5">
                          {edu.majors}
                        </span>
                      )}
                    </p>
                    {edu.majors && (
                      <p className="sm:hidden text-zinc-500 font-mono text-[11px] mt-0.5">
                        {edu.majors}
                      </p>
                    )}
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div className="flex items-center md:items-end md:flex-col gap-3 md:gap-0.5 text-xs text-zinc-400 font-mono flex-shrink-0">
                  <span className="flex items-center gap-1.5 bg-zinc-950 px-2 md:px-0 md:bg-transparent py-0.5 md:py-0 border border-zinc-850 md:border-none rounded">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5 text-zinc-650" />
                    {edu.location}
                  </span>
                </div>

              </div>

              {/* Achievements grouped in an ultra-modern dual-column grid to save vertical space */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-400 pt-0.5">
                  {edu.achievements.map((ach, index) => (
                    <div key={index} className="flex items-start gap-2 leading-relaxed font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-450 mt-0.5 flex-shrink-0 opacity-90" />
                      <span className="text-zinc-200">{ach}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Micro-badge skills certifications note */}
        <div id="edu-cert-badge" className="mt-6 p-4 border border-zinc-900 bg-zinc-950/40 rounded-xl flex items-center gap-3.5 max-w-6xl mx-auto shadow-inner">
          <Award className="w-5 h-5 text-sky-400 flex-shrink-0 animate-pulse" />
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Professional credentials & badges held from <strong>CFI</strong> (Capital IQ, Bloomberg Essentials), <strong>AICPA-CIMA</strong> (R Data Analytics), and <strong>Educba</strong> (Corporate Valuation & Portfolio Theory).
          </p>
        </div>

      </div>
    </section>
  );
};
