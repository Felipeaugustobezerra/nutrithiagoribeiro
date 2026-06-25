declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (event: string) => {
  console.log("sending", event);

  window.gtag?.("event", event);
};
