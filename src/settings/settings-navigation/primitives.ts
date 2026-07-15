// Restored from ref/webview/assets/app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel-BHOEvyvO.js
// Semantic facade for settings navigation primitives.

import { initSettingsNavigationDisclosureIconChunk } from "../../icons/settings-navigation-disclosure-icon";
import { initComposeRefsChunk } from "../../utils/compose-refs";

export {
  initSettingsNavigationDisclosureIconChunk,
  SettingsNavigationDisclosureIcon,
} from "../../icons/settings-navigation-disclosure-icon";
export { SettingsNavRow } from "./nav-row";
export { SettingsNavSection } from "./nav-section";
export { composeRefs, initComposeRefsChunk } from "../../utils/compose-refs";

export function initSettingsNavigationPrimitivesChunk(): void {
  initComposeRefsChunk();
  initSettingsNavigationDisclosureIconChunk();
}
