// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import { useGateValue } from "../../vendor/statsig-current-runtime";
export const CHRONICLE_RESEARCH_PREVIEW_GATE = "2574306096";
export function useIsChronicleResearchPreviewEnabled(): boolean {
  return useGateValue(CHRONICLE_RESEARCH_PREVIEW_GATE);
}
