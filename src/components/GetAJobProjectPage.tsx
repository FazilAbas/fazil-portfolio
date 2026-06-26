import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Bot,
  Mail,
  FileText,
  Globe,
  BarChart3,
  Search,
  Users,
  Send,
  ClipboardCheck,
  Settings,
  Eye,
  Briefcase,
} from "lucide-react";

const TECH_STACK = [
  { name: "Node.js", category: "Runtime" },
  { name: "Express.js", category: "Backend" },
  { name: "Puppeteer", category: "Automation" },
  { name: "Groq (LLaMA)", category: "AI" },
  { name: "Google Gemini", category: "AI" },
  { name: "Anthropic Claude", category: "AI" },
  { name: "Supabase", category: "Database" },
  { name: "Gmail API", category: "Email" },
  { name: "LinkedIn", category: "Data" },
  { name: "RSS Feeds", category: "Data" },
];

const METRICS = [
  { label: "Data Sources", value: "3" },
  { label: "LLM Providers", value: "3" },
  { label: "Companies Applied", value: "25+" },
  { label: "Dashboard Tabs", value: "10" },
];

const PIPELINE_STEPS = [
  { icon: Globe, label: "LinkedIn", detail: "RSS feeds, CDP scraping, activity monitoring" },
  { icon: Search, label: "Classify", detail: "Rule-based filter + LLM deep analysis" },
  { icon: FileText, label: "Generate", detail: "LLM creates personalized emails & form answers" },
  { icon: Send, label: "Email Apply", detail: "Gmail API with resume + tracking pixel" },
  { icon: ClipboardCheck, label: "Form Apply", detail: "Puppeteer fills ATS forms automatically" },
  { icon: BarChart3, label: "Track", detail: "Open rates, submission logs, analytics" },
];

const DASHBOARD_TABS = [
  {
    name: "Dashboard",
    image: "/getajob-dashboard.png",
    description: "Stats grid with Posts Classified, Emails Sent, Drafts Ready, Success Rate. Agent action buttons and data source selector.",
  },
  {
    name: "Activity",
    image: "/getajob-activity.png",
    description: "Paginated table of all applications with Company, Job Title, Method, Status badges, Fit Score, and Link.",
  },
  {
    name: "Drafts",
    image: "/getajob-drafts.png",
    description: "AI-generated email drafts with subject, body, recipient. Edit, Regenerate, or Send per draft. Batch send option.",
  },
  {
    name: "Forms",
    image: "/getajob-forms.png",
    description: "Form submissions with screenshots, view answers modal, submit/reject actions for review.",
  },
  {
    name: "Analytics",
    image: "/getajob-analytics.png",
    description: "Performance breakdown by data source (RSS/CDP/Activity), by date, and summary totals.",
  },
  {
    name: "Config",
    image: "/getajob-config.png",
    description: "Agent controls, schedules, target designations, keywords, API keys, Gmail auth, and Chrome CDP status.",
  },
];

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Multi-Source Scraping",
    items: ["RSS Feeds via rss.app (no browser needed)", "Chrome DevTools Protocol (live Chrome)", "LinkedIn Activity/Reactions page"],
  },
  {
    icon: Search,
    title: "Two-Stage Classification",
    items: ["Rule-based filter (keywords, experience, designation)", "LLM deep analysis (Groq/Gemini/Claude)", "Fit score 0-100 with match reasoning"],
  },
  {
    icon: Mail,
    title: "Autonomous Email Applications",
    items: ["LLM-generated personalized emails", "Resume attached to every email", "1x1 tracking pixel for open detection", "Rate-limited (120-300s between sends)"],
  },
  {
    icon: ClipboardCheck,
    title: "Autonomous Form Filling",
    items: ["Detects ATS platform (Lever, Greenhouse, Workday, etc.)", "Fills standard fields from candidate profile", "LLM generates answers for open-ended questions", "Screenshots saved for review before submission"],
  },
];

export const GetAJobProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

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

  const nextScreenshot = () => setActiveScreenshot((prev) => (prev + 1) % DASHBOARD_TABS.length);
  const prevScreenshot = () => setActiveScreenshot((prev) => (prev - 1 + DASHBOARD_TABS.length) % DASHBOARD_TABS.length);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
          <span className="text-xs font-mono text-zinc-600">Local Only — Not Deployed</span>
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
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-violet-400" />
            </div>
            <span className="text-xs font-mono text-violet-400/80 tracking-wider uppercase">
              Autonomous AI Agent
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Get-a-Job Agent
          </h1>
          <p className="text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            An autonomous AI agent that monitors LinkedIn for hiring posts, classifies them against your
            profile, generates personalized application emails, and automatically applies via email or
            web forms — all orchestrated on a cron schedule with a full-featured admin dashboard.
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
                <span className="text-violet-400 font-bold">{tech.name}</span>
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
              <div className="text-2xl md:text-3xl font-extrabold text-violet-400 font-mono">{m.value}</div>
              <div className="text-xs text-zinc-500 mt-1.5 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Autonomous Pipeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 text-center h-full">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{step.label}</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{step.detail}</p>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 text-violet-500/30 text-sm">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Screenshots Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Admin Dashboard — 10 Tabs
          </h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden">
            {/* Screenshot display */}
            <div className="relative aspect-[16/8] bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScreenshot}
                  src={DASHBOARD_TABS[activeScreenshot].image}
                  alt={DASHBOARD_TABS[activeScreenshot].name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prevScreenshot}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Tab label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 bg-black/60 px-2 py-1 rounded">
                  {DASHBOARD_TABS[activeScreenshot].name}
                </span>
                <span className="text-[11px] text-zinc-500 bg-black/60 px-2 py-1 rounded max-w-[60%] text-right">
                  {DASHBOARD_TABS[activeScreenshot].description}
                </span>
              </div>
            </div>

            {/* Tab thumbnails */}
            <div className="flex gap-2 p-3 overflow-x-auto">
              {DASHBOARD_TABS.map((tab, i) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveScreenshot(i)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-0 ${
                    activeScreenshot === i
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-zinc-900 text-zinc-500 hover:text-zinc-300"
                  }`}
                  style={activeScreenshot === i ? { border: '1px solid rgba(139,92,246,0.3)' } : {}}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            Core Capabilities
          </h2>
          <div className="space-y-3">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <button
                  onClick={() => setExpandedCapability(expandedCapability === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white">{cap.title}</h3>
                  </div>
                  <div className="flex-shrink-0 text-zinc-500">
                    {expandedCapability === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedCapability === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-zinc-800/50">
                        <ul className="mt-4 space-y-1.5">
                          {cap.items.map((item, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm text-zinc-400">
                              <span className="text-violet-400 mt-1.5 text-xs">●</span>
                              {item}
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

        {/* How to Run */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
            How to Run Locally
          </h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
            <div className="font-mono text-xs text-zinc-400 space-y-2">
              <p><span className="text-zinc-600"># Install dependencies</span></p>
              <p className="text-zinc-300">npm install</p>
              <p className="mt-3"><span className="text-zinc-600"># Configure .env with API keys</span></p>
              <p className="text-zinc-300">cp .env.example .env</p>
              <p className="mt-3"><span className="text-zinc-600"># Start the agent + dashboard</span></p>
              <p className="text-zinc-300">npm start</p>
              <p className="mt-3"><span className="text-zinc-600"># Open dashboard</span></p>
              <p className="text-zinc-300">http://localhost:3001</p>
            </div>
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
            Runs locally — fully autonomous job application pipeline
          </p>
          <div className="flex items-center justify-center gap-4">
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
