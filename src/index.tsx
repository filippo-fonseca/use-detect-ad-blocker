import React from "react";

/**
 * A simple React hook that detects whether or not the user has enabled an ad blocker.
 * @return A boolean (whether or not an ad blocker is enabled).
 */
export const useDetectAdBlocker = async () => {
  const [adBlockEnabled, setAdBlockEnabled] = React.useState(false);
  const googleAdUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  try {
    await fetch(new Request(googleAdUrl)).catch((_) => setAdBlockEnabled(false));
  } catch (e) {
    setAdBlockEnabled(true);
  } finally {
    return adBlockEnabled;
  }
};
