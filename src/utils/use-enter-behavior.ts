// Restored from ref/webview/assets/use-enter-behavior-BVLcEqrX.js
// Reads the composer Enter-key behavior setting as a stable hook result.
import { useMemo } from "react";
import { useSettingValue } from "../settings/setting-storage";
type ComposerEnterBehavior = "enter" | "cmdIfMultiline";
const composerEnterBehaviorSetting = {
  default: "enter" as ComposerEnterBehavior,
  key: "composerEnterBehavior",
};
function useEnterBehavior() {
  const enterBehavior = useSettingValue(composerEnterBehaviorSetting);
  return useMemo(
    () => ({
      enterBehavior,
    }),
    [enterBehavior],
  );
}
export { useEnterBehavior };
