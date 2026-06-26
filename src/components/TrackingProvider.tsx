import React, { createContext, useContext, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent, getVisitorId } from "../tracking";

interface TrackingContextType {
  track: (
    type: string,
    category: string,
    label: string,
    meta?: Record<string, string | number | boolean>
  ) => void;
  visitorId: string;
}

const TrackingContext = createContext<TrackingContextType>({
  track: () => {},
  visitorId: "",
});

export const useTracking = () => useContext(TrackingContext);

export const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const visitorId = getVisitorId();

  // Track page views on route change
  useEffect(() => {
    trackEvent("page_view", "navigation", location.pathname, {
      path: location.pathname,
      hash: location.hash,
    });
  }, [location.pathname, location.hash]);

  const track = useCallback(
    (
      type: string,
      category: string,
      label: string,
      meta?: Record<string, string | number | boolean>
    ) => {
      trackEvent(type, category, label, meta);
    },
    []
  );

  return (
    <TrackingContext.Provider value={{ track, visitorId }}>
      {children}
    </TrackingContext.Provider>
  );
};
