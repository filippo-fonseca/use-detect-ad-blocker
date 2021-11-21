/**
 * A simple React hook that detects whether or not the user has enabled an ad blocker.
 * @return A boolean (whether or not an ad blocker is enabled).
 */
export const useDetectAdBlocker = async () => {
  let adBlockEnabled = false;
  const googleAdUrl = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  try {
    await fetch(new Request(googleAdUrl)).catch((_) => (adBlockEnabled = true));
  } catch (e) {
    adBlockEnabled = true;
  } finally {
    return adBlockEnabled;
  }
};
