/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function trackEvent(
  action: string,

  category: string,

  label?: string,
) {
  console.log({
    action,

    category,

    label,
  });

  if (!window.gtag) return;

  window.gtag("event", action, {
    event_category: category,

    event_label: label,
  });
}
