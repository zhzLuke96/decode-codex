// Restored from ref/webview/assets/reduced-motion-preference-BFM-v_UB.js
// App-scope signals for resolving the reduced-motion preference.
import { useEffect, useState } from "react";
import { _appScopeC, _appScopeG, _appScopeT } from "../boundaries/app-scope";
import { getSettingValue } from "../settings/setting-storage";
type ReducedMotionPreference = "system" | "on" | "off";
const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
const reducedMotionPreferenceSetting = {
  default: "system" as ReducedMotionPreference,
  key: "reduced-motion-preference",
};
const systemPrefersReducedMotionSignal = _appScopeG(
  _appScopeT,
  getSystemPrefersReducedMotion(),
);
const reducedMotionPreferenceSignal = _appScopeC(_appScopeT, ({ get }) =>
  getSettingValue(get, reducedMotionPreferenceSetting),
);
const shouldReduceMotionSignal = _appScopeC(_appScopeT, ({ get }) =>
  resolveReducedMotionPreference({
    preference: get(reducedMotionPreferenceSignal),
    systemPrefersReducedMotion: get(systemPrefersReducedMotionSignal),
  }),
);
function resolveReducedMotionPreference({
  preference,
  systemPrefersReducedMotion,
}: {
  preference: ReducedMotionPreference;
  systemPrefersReducedMotion: boolean;
}) {
  switch (preference) {
    case "off":
      return false;
    case "on":
      return true;
    case "system":
      return systemPrefersReducedMotion;
  }
}
function getSystemPrefersReducedMotion() {
  return typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
    ? false
    : window.matchMedia(REDUCED_MOTION_MEDIA_QUERY).matches;
}
function getReducedMotionMediaQuery() {
  return typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
    ? null
    : window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
}

function useSystemPrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getSystemPrefersReducedMotion,
  );

  useEffect(() => {
    const mediaQuery = getReducedMotionMediaQuery();
    if (mediaQuery == null) return;

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", updatePreference);
    updatePreference();
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}
export {
  systemPrefersReducedMotionSignal,
  getSystemPrefersReducedMotion,
  shouldReduceMotionSignal,
  getReducedMotionMediaQuery,
  useSystemPrefersReducedMotion,
};
