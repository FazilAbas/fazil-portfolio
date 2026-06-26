import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Database,
  Code2,
  BarChart3,
  FileText,
  Search,
  ArrowUpRight,
  Layers,
  TrendingUp,
  Users,
  CreditCard,
  Target,
} from "lucide-react";

const TECH_STACK = [
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "SQLite", icon: Database },
  { name: "Pandas", icon: Layers },
  { name: "Chart.js", icon: BarChart3 },
  { name: "HTML/CSS/JS", icon: Code2 },
];

const METRICS = [
  { label: "Records Analyzed", value: "5,010" },
  { label: "SQL Queries", value: "25+" },
  { label: "Interactive Charts", value: "11" },
  { label: "Deliverables", value: "6 Tasks" },
];

const PIPELINE_STEPS = [
  {
    icon: Database,
    label: "Raw Data",
    detail: "5 datasets: accounts, subscriptions, invoices, ad performance, server events",
  },
  {
    icon: Code2,
    label: "Python Cleaning",
    detail: "Pandas scripts for type normalization, typo fixes, deduplication",
  },
  {
    icon: Database,
    label: "SQLite DB",
    detail: "5 tables with indexes, optimized for analytical queries",
  },
  {
    icon: Search,
    label: "SQL Analysis",
    detail: "25+ queries across 6 dimensions: Acquisition, Activation, Conversion, Retention, Revenue, Marketing",
  },
  {
    icon: BarChart3,
    label: "Dashboard",
    detail: "Interactive Chart.js dashboard with 11 visualizations",
  },
];

const TASKS = [
  {
    id: 1,
    title: "Data Preparation & Schema Design",
    icon: Database,
    description:
      "Ingested 5 raw datasets (5,010 accounts, 2,505 subscriptions, 1,690 invoices, 500 ad records, 10,000 events). Identified and fixed data quality issues: date format inconsistencies, typos (\"Googel Ads\", \"montly\"), case inconsistencies, negative values, and missing fields.",
    keyFindings: [
      "Standardized 5 different date formats to YYYY-MM-DD",
      "Fixed 12+ typo patterns across all datasets",
      "Created SQLite DB with 5 tables and 6 performance indexes",
      "Defined activation, conversion, and churn metrics with documented assumptions",
    ],
    pdfName: "Task 1 Product Understanding & Data Preparation (CookieYes - Fazil A).pdf",
  },
  {
    id: 2,
    title: "Funnel & Lifecycle Analysis",
    icon: TrendingUp,
    description:
      "Built a full-lifecycle funnel analysis: Acquisition → Activation → Conversion → Retention → Revenue. Wrote 25+ SQL queries covering signup trends, feature adoption, conversion rates by plan/source, churn analysis, cohort retention, and revenue breakdowns.",
    keyFindings: [
      "Activation is the biggest bottleneck at 20% (80% of signups never use a feature)",
      "Google Ads drives most signups (33.5%) but has lowest retention (36.7%)",
      "Organic traffic has highest conversion (50.3%) with zero acquisition cost",
      "LinkedIn has best retention (43.1%) — professional audience quality signal",
    ],
    pdfName: "Task 2 Product, Growth & Revenue Analysis (CookieYes - Fazil A).pdf",
  },
  {
    id: 3,
    title: "Visualization Dashboard",
    icon: BarChart3,
    description:
      "Built a self-contained interactive HTML dashboard using Chart.js. Created 6 analysis sections with 11 visualizations: lifecycle funnel, donut charts for subscription status, bar charts for conversion/retention by source, line charts for revenue trends, and campaign ROAS comparison.",
    keyFindings: [
      "Dashboard is fully responsive and works in any browser",
      "6 analysis sections tell a cohesive customer lifecycle story",
      "Interactive tooltips and legends for deep-diving into segments",
      "Hardcoded verified data — no external dependencies required",
    ],
    pdfName: "Task 3 Visualization & Dashboard (CookieYes - Fazil A).pdf",
  },
  {
    id: 4,
    title: "Stakeholder Report",
    icon: FileText,
    description:
      "Authored an executive-ready stakeholder report summarizing key findings, business impact, and strategic recommendations. Translated raw analytics into actionable insights for product and marketing leadership.",
    keyFindings: [
      "Total revenue: $111,041 across 4 months (Jun-Sep 2025)",
      "Invoice failure rate of 24.7% — nearly 1 in 4 payments fail",
      "Pro plan has highest churn (40.3%) despite mid-tier pricing",
      "Campaign C wastes $263K+ annually with 0.09x ROAS",
    ],
    pdfName: "Task 4 Stakeholder Report (CookieYes - Fazil A).pdf",
  },
  {
    id: 5,
    title: "Recommendations & Experiments",
    icon: Target,
    description:
      "Designed 3 structured experiments with hypotheses, metrics, control/treatment groups, and expected outcomes. Prioritized recommendations by impact and effort: immediate (pause bad campaigns), short-term (fix activation), medium-term (churn prevention).",
    keyFindings: [
      "Pause Campaign C immediately — save $263K+ annually",
      "Fix activation flow to increase subscription rate from 39.5%",
      "Audit invoice failures to recover lost revenue",
      "Invest in organic/SEO for higher-quality signups",
    ],
    pdfName: "Task 5 Recommendations & Experiments (CookieYes - Fazil A).pdf",
  },
  {
    id: 6,
    title: "Product Thinking Questions",
    icon: Search,
    description:
      "Answered 10 product thinking questions demonstrating analytical rigor, product intuition, and data-driven decision-making. Covered topics from metric definition to prioritization frameworks to trade-off analysis.",
    keyFindings: [
      "Demonstrated ability to define and defend metric choices",
      "Applied frameworks like RICE, ICE, and impact-effort matrix",
      "Showed capacity to reason about edge cases and data limitations",
      "Connected analytical findings to product strategy decisions",
    ],
    pdfName: "Task 6 Product Thinking Questions (CookieYes - Fazil A).pdf",
  },
];

const KEY_FINDINGS = [
  {
    icon: Target,
    title: "Activation Crisis",
    text: "80% of signups never use a core feature — the single biggest growth blocker in the entire funnel.",
  },
  {
    icon: CreditCard,
    title: "Revenue Leak",
    text: "24.7% invoice failure rate means nearly 1 in 4 payments fail, directly eroding MRR.",
  },
  {
    icon: Users,
    title: "Channel Quality Gap",
    text: "Google Ads drives 33.5% of signups but has the lowest retention (36.7%). Organic converts at 50.3% with zero CAC.",
  },
  {
    icon: TrendingUp,
    title: "Wasted Ad Spend",
    text: "Campaign C has 0.09x ROAS — wasting $263K+ annually. Pausing it is an immediate win.",
  },
];

export const CookieYesProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [expandedTask, setExpandedTask] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-sky-400 transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
          <a
            href="/cookieyes-dashboard.html"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors no-underline"
          >
            Open Dashboard
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-xs font-mono text-amber-400/80 tracking-wider uppercase">
              Product Analytics Case Study
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            CookieYes Product Analytics
          </h1>
          <p className="text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            End-to-end analysis of CookieYes product data (Jun–Sep 2025) covering 5,010 user accounts
            across the full customer lifecycle: Acquisition → Activation → Conversion → Retention → Revenue.
            Identified critical bottlenecks, revenue leaks, and growth opportunities through 25+ SQL queries
            and an interactive executive dashboard.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-300"
              >
                <tech.icon className="w-4 h-4 text-amber-400" />
                {tech.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headline Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400 font-mono">
                {m.value}
              </div>
              <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Data Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Data Pipeline
          </h2>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/20" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 relative z-10">
                    <step.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.label}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                    {step.detail}
                  </p>
                  {i < PIPELINE_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-[40px] -right-3 text-amber-500/40 text-lg">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Task Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Task Breakdown — 6 Deliverables
          </h2>
          <div className="space-y-3">
            {TASKS.map((task) => (
              <div
                key={task.id}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                  className="w-full flex items-center gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <task.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-amber-400/60">Task {task.id}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mt-0.5">{task.title}</h3>
                  </div>
                  <div className="flex-shrink-0 text-zinc-500">
                    {expandedTask === task.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedTask === task.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-zinc-800/50">
                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                          {task.description}
                        </p>
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                            Key Findings
                          </h4>
                          <ul className="space-y-1.5">
                            {task.keyFindings.map((finding, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                                <span className="text-amber-400 mt-1.5 text-xs">●</span>
                                {finding}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={`/${task.pdfName}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors no-underline"
                        >
                          <FileText className="w-4 h-4" />
                          View Task {task.id} PDF
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Interactive Dashboard
          </h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/8] mb-6">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="text-sm font-bold text-white mb-1">CookieYes Product Analytics</p>
                  <p className="text-xs text-zinc-500">Full-Lifecycle SaaS Analysis Dashboard</p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="text-xs font-mono text-amber-400">5,010 Records</span>
                    <span className="text-xs text-zinc-700">|</span>
                    <span className="text-xs font-mono text-amber-400">25+ Queries</span>
                    <span className="text-xs text-zinc-700">|</span>
                    <span className="text-xs font-mono text-amber-400">11 Charts</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">
                  Interactive Dashboard — 11 Charts, 6 Sections
                </span>
                <a
                  href="/cookieyes-dashboard.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 text-black text-xs font-extrabold hover:bg-amber-300 transition-colors no-underline"
                >
                  Open Full Dashboard
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Key Business Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KEY_FINDINGS.map((finding) => (
              <div
                key={finding.title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-amber-500/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <finding.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{finding.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{finding.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center py-12 border-t border-zinc-900"
        >
          <p className="text-sm text-zinc-500 mb-4">
            Full code, data, and analysis available in the project repository
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/cookieyes-dashboard.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-400 text-black text-sm font-extrabold hover:bg-amber-300 transition-colors no-underline"
            >
              <BarChart3 className="w-4 h-4" />
              View Dashboard
            </a>
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-300 hover:border-zinc-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
