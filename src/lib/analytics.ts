declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  window.gtag?.("event", event, data);
};
