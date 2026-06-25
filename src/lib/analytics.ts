declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  console.log("TRACK EVENT:", event);
  window.gtag?.("event", event, data);
};
