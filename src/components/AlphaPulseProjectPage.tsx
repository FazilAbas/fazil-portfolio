import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Brain,
  TrendingUp,
  BarChart3,
  Activity,
  Shield,
  Zap,
  LineChart,
  Newspaper,
  Target,
  Gauge,
  Bot,
  RefreshCw,
} from "lucide-react";

const TECH_STACK = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python 3.12", category: "Backend" },
  { name: "SQLAlchemy", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Google Gemini", category: "AI/ML" },
  { name: "pandas-ta", category: "AI/ML" },
  { name: "Yahoo Finance", category: "Data" },
  { name: "Supabase", category: "Infra" },
  { name: "Railway", category: "Deploy" },
  { name: "Vercel", category: "Deploy" },
  { name: "Docker", category: "Deploy" },
];

const METRICS = [
  { label: "AI Engines", value: "3" },
  { label: "Stocks Covered", value: "108" },
  { label: "Schedulers", value: "13+" },
  { label: "Technical Indicators", value: "20+" },
];

const ENGINES = [
  {
    icon: Brain,
    name: "AI Stock Picks",
    description:
      "Google Gemini LLM with 7-stage reasoning pipeline. 8-category weighted scoring across Trend, Momentum, Volume, Volatility, Candlestick, News, Financial, and Market signals.",
    features: [
      "7-stage LLM reasoning with temperature=0.0",
      "8-category weighted scoring system",
      "Evidence assembly from market data, technicals, news, financials",
      "JSON-structured output for deterministic results",
    ],
  },
  {
    icon: TrendingUp,
    name: "Premium Swing Trading",
    description:
      "0-100 composite score with 3 probability-weighted sell targets. Optimized for 5-20 day holding periods on NSE stocks.",
    features: [
      "Composite scoring (0-100)",
      "3 probability-weighted sell targets",
      "ATR-based stop losses",
      "Risk:Reward ratio gates",
    ],
  },
  {
    icon: Shield,
    name: "Damani 6-Filter Engine",
    description:
      "Philosophy-based stock selection inspired by Radhakishan Damani. 6 qualitative and quantitative filters for quality stock identification.",
    features: [
      "Quality filter (management, moat)",
      "Earnings consistency filter",
      "Technical trend alignment",
      "Volume confirmation",
      "Event/catalyst check",
      "Risk assessment",
    ],
  },
];

const ARCHITECTURE_STEPS = [
  { icon: LineChart, label: "Market Data", detail: "Yahoo Finance, Twelve Data for live CMP" },
  { icon: BarChart3, label: "Technical Analysis", detail: "20+ indicators via pandas-ta" },
  { icon: Newspaper, label: "News Intelligence", detail: "Multi-source aggregation + sentiment" },
  { icon: Zap, label: "Evidence Assembly", detail: "Structured package for LLM context" },
  { icon: Brain, label: "LLM Reasoning", detail: "Gemini 7-stage pipeline" },
  { icon: Target, label: "Recommendation", detail: "BUY signals with entry/target/stop" },
  { icon: Activity, label: "Price Monitor", detail: "5-min candle tracking during market hours" },
  { icon: RefreshCw, label: "Self-Learning", detail: "Outcome tracking + calibration" },
];

const KEY_FINDINGS = [
  {
    icon: Brain,
    title: "Hybrid AI Approach",
    text: "Combines deterministic weighted scoring with LLM reasoning — not just prompt-and-pray. Each recommendation has auditable evidence.",
  },
  {
    icon: Gauge,
    title: "Real-Time Tracking",
    text: "5-minute candle monitoring during NSE market hours with automatic state detection (PENDING → BUY_REACHED → TARGET/STOP_HIT).",
  },
  {
    icon: Bot,
    title: "Self-Learning System",
    text: "Every recommendation outcome feeds back into prompt version performance tracking and calibration — the system improves over time.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    text: "ATR-based stops, R:R gates, circuit breaker detection. No recommendation goes out without validated risk parameters.",
  },
];

export const AlphaPulseProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [expandedEngine, setExpandedEngine] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/#projects");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
          <a
            href="https://alphapulse-ai.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors no-underline"
          >
            Live Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-xs font-mono text-cyan-400/80 tracking-wider uppercase">
              AI-Powered Fintech
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            AlphaPulse AI
          </h1>
          <p className="text-lg text-cyan-400/80 font-mono mb-4">Trade Smarter, Not Harder</p>
          <p className="text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            An AI-powered stock recommendation platform purpose-built for Indian equity swing traders.
            Features 3 distinct recommendation engines — Gemini LLM, Premium Swing, and Damani 6-Filter —
            with real-time 5-minute price tracking and a transparent P&L performance tracker.
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
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300"
              >
                <span className="text-cyan-400 font-bold">{tech.name}</span>
                <span className="text-zinc-600 ml-1.5">{tech.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-mono">{m.value}</div>
              <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">Live Platform</h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="relative aspect-[16/8] bg-zinc-950">
              <img
                src="/alphapulse-home.png"
                alt="AlphaPulse AI Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">Live at alphapulse-ai.vercel.app</span>
                <a
                  href="https://alphapulse-ai.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-400 text-black text-xs font-extrabold hover:bg-cyan-300 transition-colors no-underline"
                >
                  Open Live Platform
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 AI Engines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            3 AI Recommendation Engines
          </h2>
          <div className="space-y-3">
            {ENGINES.map((engine, i) => (
              <div
                key={engine.name}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <button
                  onClick={() => setExpandedEngine(expandedEngine === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <engine.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white">{engine.name}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{engine.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-zinc-500">
                    {expandedEngine === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedEngine === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-zinc-800/50">
                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">{engine.description}</p>
                        <ul className="mt-3 space-y-1.5">
                          {engine.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm text-zinc-400">
                              <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Architecture Pipeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ARCHITECTURE_STEPS.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 text-center h-full">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{step.label}</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{step.detail}</p>
                </div>
                {i < ARCHITECTURE_STEPS.length - 1 && i % 4 !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-cyan-500/30 text-sm">→</div>
                )}
              </div>
            ))}
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
            Key Differentiators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KEY_FINDINGS.map((f) => (
              <div
                key={f.title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{f.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.text}</p>
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
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://alphapulse-ai.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-sm font-extrabold hover:bg-cyan-300 transition-colors no-underline"
            >
              <TrendingUp className="w-4 h-4" />
              Open Live Platform
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
