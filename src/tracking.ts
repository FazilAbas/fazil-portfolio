const VISITOR_ID_KEY = "fazil_portfolio_vid";
const EVENTS_KEY = "fazil_portfolio_events";
const ADMIN_EMAIL_KEY = "fazil_portfolio_admin";
const SUPERADMIN_EMAIL = "fazilabbaz@gmail.com";

export interface TrackingEvent {
  id: string;
  visitorId: string;
  type: string;
  category: string;
  label: string;
  timestamp: number;
  path: string;
  meta?: Record<string, string | number | boolean>;
}

function generateVisitorId(): string {
  const stored = localStorage.getItem(VISITOR_ID_KEY);
  if (stored) return stored;
  const id = `v_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  localStorage.setItem(VISITOR_ID_KEY, id);
  return id;
}

export function getVisitorId(): string {
  return generateVisitorId();
}

export function trackEvent(
  type: string,
  category: string,
  label: string,
  meta?: Record<string, string | number | boolean>
): void {
  try {
    const visitorId = getVisitorId();
    const event: TrackingEvent = {
      id: `e_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      visitorId,
      type,
      category,
      label,
      timestamp: Date.now(),
      path: window.location.pathname,
      meta,
    };

    const stored = localStorage.getItem(EVENTS_KEY);
    const events: TrackingEvent[] = stored ? JSON.parse(stored) : [];
    events.push(event);

    // Keep last 5000 events max
    if (events.length > 5000) {
      events.splice(0, events.length - 5000);
    }

    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch {
    // localStorage might be full or disabled
  }
}

export function getEvents(): TrackingEvent[] {
  try {
    const stored = localStorage.getItem(EVENTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function getUniqueVisitors(): number {
  const events = getEvents();
  const ids = new Set(events.map((e) => e.visitorId));
  return ids.size;
}

export function getVisitorCount(): number {
  return getUniqueVisitors();
}

export function getTotalEvents(): number {
  return getEvents().length;
}

export function getEventsByCategory(): Record<string, number> {
  const events = getEvents();
  const counts: Record<string, number> = {};
  events.forEach((e) => {
    counts[e.category] = (counts[e.category] || 0) + 1;
  });
  return counts;
}

export function getEventsByType(): Record<string, number> {
  const events = getEvents();
  const counts: Record<string, number> = {};
  events.forEach((e) => {
    counts[e.type] = (counts[e.type] || 0) + 1;
  });
  return counts;
}

export function getVisitorEvents(visitorId: string): TrackingEvent[] {
  return getEvents().filter((e) => e.visitorId === visitorId);
}

export function getRecentEvents(limit = 50): TrackingEvent[] {
  return getEvents()
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);
}

export function isAdminEmail(email: string): boolean {
  return email.toLowerCase().trim() === SUPERADMIN_EMAIL;
}

export function setAdminSession(email: string): void {
  if (isAdminEmail(email)) {
    localStorage.setItem(ADMIN_EMAIL_KEY, email.toLowerCase().trim());
  }
}

export function getAdminSession(): string | null {
  return localStorage.getItem(ADMIN_EMAIL_KEY);
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_EMAIL_KEY);
}

export function isSuperAdmin(): boolean {
  const email = getAdminSession();
  return email !== null && isAdminEmail(email);
}

export function clearAllData(): void {
  localStorage.removeItem(EVENTS_KEY);
  localStorage.removeItem(VISITOR_ID_KEY);
  localStorage.removeItem(ADMIN_EMAIL_KEY);
}

export function exportData(): string {
  return JSON.stringify(
    {
      events: getEvents(),
      exportedAt: new Date().toISOString(),
      totalEvents: getTotalEvents(),
      uniqueVisitors: getUniqueVisitors(),
    },
    null,
    2
  );
}
