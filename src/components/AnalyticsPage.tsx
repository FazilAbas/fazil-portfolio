import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  MousePointerClick,
  Clock,
  BarChart3,
  TrendingUp,
  Eye,
  Download,
  Linkedin,
  FileText,
  ExternalLink,
  LogOut,
  Shield,
  Trash2,
  DownloadCloud,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import {
  isSuperAdmin,
  isAdminEmail,
  setAdminSession,
  clearAdminSession,
  getRecentEvents,
  getUniqueVisitors,
  getEventsByCategory,
  getEventsByType,
  getEvents,
  clearAllData,
  exportData,
  TrackingEvent,
} from "../tracking";

const EVENT_ICONS: Record<string, React.ReactNode> = {
  page_view: <Eye className="w-3.5 h-3.5" />,
  resume_view: <FileText className="w-3.5 h-3.5" />,
  resume_download: <Download className="w-3.5 h-3.5" />,
  linkedin_click: <Linkedin className="w-3.5 h-3.5" />,
  project_click: <FolderOpen className="w-3.5 h-3.5" />,
  project_pdf: <FileText className="w-3.5 h-3.5" />,
  project_live: <ExternalLink className="w-3.5 h-3.5" />,
  experience_click: <Briefcase className="w-3.5 h-3.5" />,
  education_click: <GraduationCap className="w-3.5 h-3.5" />,
  scroll_click: <MousePointerClick className="w-3.5 h-3.5" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  navigation: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  resume: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  social: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  projects: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  experience: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  education: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  products: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  interaction: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
};

function formatTimestamp(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatFullTimestamp(ts: number): string {
  return new Date(ts).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function StatCard({
  label,
  value,
  icon,
  color = "text-sky-400",
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`p-2 rounded-lg ${color.replace("text-", "bg-")}/10 border ${color.replace("text-", "border-")}/20`}
        >
          <span className={color}>{icon}</span>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-2xl font-display font-bold text-white block">
        {value}
      </span>
    </div>
  );
}

function EventRow({ event }: React.PropsWithoutRef<{ event: TrackingEvent } & Record<string, unknown>>) {
  const icon = EVENT_ICONS[event.type] || (
    <MousePointerClick className="w-3.5 h-3.5" />
  );
  const colorClass =
    CATEGORY_COLORS[event.category] || CATEGORY_COLORS.interaction;

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-900/50 hover:bg-zinc-900/30 transition-colors">
      <div
        className={`p-1.5 rounded-lg border flex-shrink-0 ${colorClass}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-zinc-200 truncate">
            {event.label}
          </span>
          <span
            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${colorClass} flex-shrink-0`}
          >
            {event.category}
          </span>
        </div>
        <span className="text-[10px] text-zinc-600 font-mono">
          {event.path}
        </span>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="text-[10px] text-zinc-500 font-mono block">
          {formatFullTimestamp(event.timestamp)}
        </span>
        <span className="text-[9px] text-zinc-700 font-mono">
          {event.visitorId.slice(0, 12)}…
        </span>
      </div>
    </div>
  );
}

function EventBreakdown({
  events,
}: {
  events: TrackingEvent[];
}) {
  const [expanded, setExpanded] = useState(false);

  const breakdown = useMemo(() => {
    const counts: Record<string, { count: number; label: string }> = {};
    events.forEach((e) => {
      const key = `${e.category}:${e.type}`;
      if (!counts[key]) {
        counts[key] = { count: 0, label: `${e.category} → ${e.type}` };
      }
      counts[key].count++;
    });
    return Object.values(counts)
      .sort((a, b) => b.count - a.count)
      .slice(0, expanded ? 50 : 10);
  }, [events, expanded]);

  const maxCount = breakdown.length > 0 ? breakdown[0].count : 1;

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-bold text-white">Event Breakdown</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
        >
          {expanded ? "Show less" : "Show all"}
          {expanded ? (
            <ChevronUp className="w-3 h-3" />
          ) : (
            <ChevronDown className="w-3 h-3" />
          )}
        </button>
      </div>
      <div className="divide-y divide-zinc-900/50">
        {breakdown.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-5 py-2.5 hover:bg-zinc-900/20 transition-colors"
          >
            <span className="text-[11px] text-zinc-400 font-mono w-56 truncate flex-shrink-0">
              {item.label}
            </span>
            <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500/60 rounded-full transition-all duration-500"
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-zinc-300 w-10 text-right flex-shrink-0">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AnalyticsPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    if (isSuperAdmin()) {
      setAuthorized(true);
    }
  }, []);

  const handleLogin = () => {
    if (isAdminEmail(email)) {
      setAdminSession(email);
      setAuthorized(true);
      setEmail("");
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    setAuthorized(false);
  };

  const events = useMemo(() => (authorized ? getEvents() : []), [authorized]);
  const recentEvents = useMemo(
    () => (authorized ? getRecentEvents(100) : []),
    [authorized]
  );
  const uniqueVisitors = useMemo(
    () => (authorized ? getUniqueVisitors() : 0),
    [authorized]
  );
  const categoryBreakdown = useMemo(
    () => (authorized ? getEventsByCategory() : {}),
    [authorized]
  );
  const typeBreakdown = useMemo(
    () => (authorized ? getEventsByType() : {}),
    [authorized]
  );

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fazil-portfolio-analytics-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (confirmClear) {
      clearAllData();
      setConfirmClear(false);
      setAuthorized(false);
      clearAdminSession();
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
    }
  };

  // Login screen
  if (!authorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Portfolio</span>
          </button>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                <Shield className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Analytics</h1>
                <p className="text-[11px] text-zinc-500 font-mono">
                  Superadmin access only
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-zinc-400 font-mono block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="fazilabbaz@gmail.com"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full bg-sky-500 text-black font-bold text-sm py-2.5 rounded-lg hover:bg-sky-400 transition-colors cursor-pointer"
              >
                Access Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Analytics dashboard
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Portfolio</span>
            </button>
            <div className="h-5 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-bold text-white">
                Analytics Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="Export analytics data"
            >
              <DownloadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button
              onClick={handleClear}
              className={`flex items-center gap-1.5 text-xs border px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                confirmClear
                  ? "text-red-400 bg-red-500/10 border-red-500/30"
                  : "text-zinc-500 hover:text-zinc-300 border-zinc-800 hover:border-zinc-700"
              }`}
              title="Clear all analytics data"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {confirmClear ? "Confirm Clear" : "Clear"}
              </span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Unique Visitors"
            value={uniqueVisitors}
            icon={<Users className="w-4 h-4" />}
            color="text-sky-400"
          />
          <StatCard
            label="Total Events"
            value={events.length}
            icon={<MousePointerClick className="w-4 h-4" />}
            color="text-emerald-400"
          />
          <StatCard
            label="Page Views"
            value={typeBreakdown.page_view || 0}
            icon={<Eye className="w-4 h-4" />}
            color="text-violet-400"
          />
          <StatCard
            label="Categories Tracked"
            value={Object.keys(categoryBreakdown).length}
            icon={<TrendingUp className="w-4 h-4" />}
            color="text-amber-400"
          />
        </div>

        {/* Category Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {Object.entries(categoryBreakdown)
            .sort(([, a], [, b]) => (b as number) - (a as number))
            .map(([cat, count]) => (
              <div
                key={cat}
                className="bg-zinc-950/80 border border-zinc-800 rounded-lg p-3 text-center"
              >
                <span className="text-lg font-bold text-white block">
                  {count}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                  {cat}
                </span>
              </div>
            ))}
        </div>

        {/* Event Breakdown Chart */}
        <div className="mb-8">
          <EventBreakdown events={events} />
        </div>

        {/* Recent Events */}
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-bold text-white">
                Recent Events
              </span>
              <span className="text-[10px] text-zinc-600 font-mono">
                (last {recentEvents.length})
              </span>
            </div>
            <button
              onClick={() => setShowEvents(!showEvents)}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              {showEvents ? "Collapse" : "Expand"}
              {showEvents ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          </div>
          {showEvents && (
            <div className="max-h-[600px] overflow-y-auto">
              {recentEvents.length === 0 ? (
                <div className="px-5 py-12 text-center text-zinc-600 text-sm">
                  No events tracked yet. Interact with the portfolio to see
                  events appear here.
                </div>
              ) : (
                recentEvents.map((event) => (
                  <EventRow key={event.id} event={event} />
                ))
              )}
            </div>
          )}
          {!showEvents && (
            <div className="px-5 py-3 text-[11px] text-zinc-600 font-mono">
              Click "Expand" to view {recentEvents.length} recent events
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
