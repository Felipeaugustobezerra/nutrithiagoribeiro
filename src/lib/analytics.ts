declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  const payload = {
    event,
    ...data,
  };

  console.log("Payload:", payload);

  window.dataLayer.push(payload);

  console.log("Último item:", window.dataLayer.at(-1));
};
