import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FileText, ArrowUpRight, BarChart3, ExternalLink, Rocket, Search, Palette } from "lucide-react";

import zomatoRetentionImage from "../assets/images/zomato_retention_slide_1780940588942.png";
import districtCrmImage from "../assets/images/district_crm_slide_1780940606582.png";
import salaryseImage from "../assets/images/salaryse_benefits_1780939941992.png";
import linnkAtlasImage from "../assets/images/linnk_atlas_ai_1780993073500.png";

const TIER_1_PRODUCTS = [
  {
    id: "alphapulse",
    title: "AlphaPulse AI",
    tagline: "AI-Powered Stock Intelligence",
    description:
      "3-engine AI platform for Indian swing traders — Gemini LLM analysis, Premium Swing signals, and Damani 6-Filter screening. Real-time portfolio tracking with a self-learning recommendation system.",
    image: "/alphapulse_thumbnail.svg",
    route: "/project/alphapulse",
    accent: "cyan",
    accentHex: "rgba(6,182,212,0.15)",
    accentBorder: "hover:border-cyan-500/40",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentRing: "ring-cyan-500/20",
    metrics: ["3 AI Engines", "Real-time Tracking", "Self-Learning"],
    liveUrl: "https://alphapulse-ai.vercel.app",
  },
  {
    id: "getajob",
    title: "Get-a-Job Agent",
    tagline: "Autonomous Job Search Agent",
    description:
      "AI agent that monitors LinkedIn, classifies hiring posts with LLM analysis, and auto-applies via email and web forms on a cron schedule — fully autonomous job search on autopilot.",
    image: "/getajob_thumbnail.svg",
    route: "/project/getajob",
    accent: "violet",
    accentHex: "rgba(139,92,246,0.15)",
    accentBorder: "hover:border-violet-500/40",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentRing: "ring-violet-500/20",
    metrics: ["LinkedIn Monitoring", "LLM Classification", "Auto-Apply"],
    liveUrl: null,
  },
];

const TIER_2_CONSULTING = {
  id: "cookieyes",
  title: "CookieYes Product Analytics",
  tagline: "SaaS Analytics Consulting",
  description:
    "End-to-end product analytics across 5,010 users covering the full customer lifecycle. Python, SQL, SQLite, and Chart.js — 25+ queries, 11 interactive charts, 6 structured deliverables uncovering activation bottlenecks, revenue leaks, and growth opportunities.",
  image: "/cookieyes_thumbnail.svg",
  route: "/project/cookieyes",
  accent: "amber",
  accentHex: "rgba(245,158,11,0.15)",
  accentBorder: "hover:border-amber-500/40",
  accentText: "text-amber-400",
  accentBg: "bg-amber-500/10",
  accentRing: "ring-amber-500/20",
  metrics: ["5,010 Users Analyzed", "25+ SQL Queries", "6 Deliverables"],
};

const TIER_3_DESIGNS = [
  {
    id: "linnk-atlas",
    title: "Linnk Atlas AI",
    label: "PRD",
    description: "Staffing sales intelligence PRD with a live interactive prototype.",
    image: linnkAtlasImage,
    pdfPath: "/Linnk_Atlas_AI_v1_0_PRD.pdf",
    liveUrl: "https://linnk-atlas-ai-755469473055.asia-southeast1.run.app/",
    accent: "sky",
    accentHex: "rgba(56,189,248,0.15)",
    borderColor: "hover:border-sky-500/40",
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/10",
  },
  {
    id: "zomato-retention",
    title: "Zomato User Retention",
    label: "Retention Strategy",
    description: "Retention cohort analysis, gamification mechanics, and activation-stage user flows.",
    image: zomatoRetentionImage,
    pdfPath: "/PRD_Zomato_User_Retention.pdf",
    liveUrl: null,
    accent: "red",
    accentHex: "rgba(239,68,68,0.15)",
    borderColor: "hover:border-red-500/40",
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
  },
  {
    id: "district-crm",
    title: "District CRM Lifecycle",
    label: "Product Teardown",
    description: "Zomato District app teardown — push notifications, CRM triggers, and user lifecycle maps.",
    image: districtCrmImage,
    pdfPath: "/District_CRM_Growth_Lifecycle_Orchestration_Concept.pdf",
    liveUrl: null,
    accent: "teal",
    accentHex: "rgba(20,184,166,0.15)",
    borderColor: "hover:border-teal-500/40",
    accentText: "text-teal-400",
    accentBg: "bg-teal-500/10",
  },
  {
    id: "salaryse",
    title: "SalarySe Flexi Benefits",
    label: "Feature Design",
    description: "Salary flexi-allowance systems, tax advantages, and corporate integration blueprints.",
    image: salaryseImage,
    pdfPath: "/SalarySe_Flexi_Benefits_Maximize_Salary.pdf",
    liveUrl: null,
    accent: "emerald",
    accentHex: "rgba(16,185,129,0.15)",
    borderColor: "hover:border-emerald-500/40",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
  },
  {
    id: "phishing",
    title: "Phishing Detection Module",
    label: "Workflow Automation",
    description: "AI-powered phishing detection and automated takedown workflows.",
    image: "/phishing_thumbnail.svg",
    pdfPath: "/Phishing_Detection_Takedowns_Module.pdf",
    liveUrl: null,
    accent: "red",
    accentHex: "rgba(239,68,68,0.15)",
    borderColor: "hover:border-red-500/40",
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
  },
];

export const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden text-white"
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            My <span className="text-sky-400">Projects</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
            Products I've built, analytics consulting, and product thinking — spanning AI, FinTech, and SaaS.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            TIER 1 — PRODUCTS I BUILT
            ═══════════════════════════════════════════════════════════ */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <Rocket className="w-4 h-4 text-sky-400" />
            </div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
              Products I Built
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TIER_1_PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-[22px] opacity-10 group-hover:opacity-30 blur-md transition-all duration-500"></div>

                <button
                  onClick={() => navigate(product.route)}
                  className={`w-full text-left relative bg-zinc-950/90 border border-zinc-800 ${product.accentBorder} rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer flex flex-col`}
                >
                  {/* Image area */}
                  <div className="relative aspect-[16/9] border-b border-zinc-900 bg-zinc-900 overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.025] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Live badge - top right */}
                    {product.liveUrl && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${product.accentBg} border border-current/20 ${product.accentText} text-[11px] font-bold backdrop-blur-sm hover:scale-105 transition-transform`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {/* Title overlay on thumbnail */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-zinc-300 font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  {/* Content area - fixed height with flex */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="min-h-[72px] mb-4">
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Metrics chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.metrics.map((m) => (
                        <span
                          key={m}
                          className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* CTA - pushed to bottom */}
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-sky-400 group-hover:text-sky-300 transition-colors">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${product.accentText} ${product.accentBg} px-2 py-0.5 rounded border border-current/20 uppercase tracking-wider`}>
                        Built & Shipped
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            TIER 2 — ANALYTICS & CONSULTING (TEMPORARILY HIDDEN)
            ═══════════════════════════════════════════════════════════ */}
        {false && (
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <BarChart3 className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              Analytics & Consulting
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-[22px] opacity-10 group-hover:opacity-30 blur-md transition-all duration-500"></div>

            <button
              onClick={() => navigate(TIER_2_CONSULTING.route)}
              className={`w-full text-left relative bg-zinc-950/90 border border-zinc-800 ${TIER_2_CONSULTING.accentBorder} rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px] border-b lg:border-b-0 lg:border-r border-zinc-900 bg-zinc-900 overflow-hidden">
                  <img
                    src={TIER_2_CONSULTING.image}
                    alt={TIER_2_CONSULTING.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.025] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 lg:block hidden" />
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase tracking-wider">
                      Consulting Engagement
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {TIER_2_CONSULTING.title}
                  </h3>
                  <p className="text-sm text-amber-400/80 font-medium mb-3">{TIER_2_CONSULTING.tagline}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {TIER_2_CONSULTING.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {TIER_2_CONSULTING.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                    <span>View Full Analysis</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            TIER 3 — PRODUCT THINKING & DESIGN
            ═══════════════════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <Palette className="w-4 h-4 text-violet-400" />
            </div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
              Product Thinking & Design
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIER_3_DESIGNS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-[18px] opacity-5 group-hover:opacity-20 blur-sm transition-all duration-500"></div>

                <div className="relative bg-zinc-950/90 border border-zinc-800 group-hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-400 shadow-xl flex flex-col w-full">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-zinc-900 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href={project.pdfPath}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors no-underline"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        PDF
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg ${project.accentBg} ${project.accentText} text-xs font-bold border border-current/20 hover:scale-105 transition-all no-underline`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Prototype
                        </a>
                      )}
                    </div>

                    {/* Live badge for Linnk Atlas */}
                    {project.liveUrl && (
                      <div className="absolute top-3 right-3">
                        <span className={`flex items-center gap-1 px-2 py-1 rounded-full ${project.accentBg} ${project.accentText} text-[9px] font-bold border border-current/20 backdrop-blur-sm`}>
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                          LIVE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-display text-sm font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-900">
                      <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
                        <FileText className="w-3 h-3" />
                        <span>{project.label}</span>
                        {project.liveUrl && (
                          <>
                            <span className="text-zinc-700 mx-1">|</span>
                            <ExternalLink className="w-3 h-3" />
                            <span>Live Prototype</span>
                          </>
                        )}
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
