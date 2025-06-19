// src/utils/analytics.js
export const sendAnalytics = async ({ type, source, sourceId, device }) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/api/analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, source, sourceId, device }),
    });
  } catch (err) {
    console.warn("Analytics gönderilemedi:", err);
  }
};
