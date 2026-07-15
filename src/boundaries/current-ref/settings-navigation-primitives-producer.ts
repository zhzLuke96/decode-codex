// Restored from ref/webview/assets/app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel-BHOEvyvO.js
// Current settings navigation primitives producer.
import { initSettingsNavigationDisclosureIconChunk } from "../../icons/settings-navigation-disclosure-icon";
import { initComposeRefsChunk } from "../../utils/compose-refs";

export {
  initSettingsNavigationDisclosureIconChunk,
  SettingsNavigationDisclosureIcon,
} from "../../icons/settings-navigation-disclosure-icon";
export { SettingsNavRow } from "../../settings/settings-navigation/nav-row";
export { SettingsNavSection } from "../../settings/settings-navigation/nav-section";
export { composeRefs, initComposeRefsChunk } from "../../utils/compose-refs";

export function initSettingsNavigationPrimitivesChunk(): void {
  initComposeRefsChunk();
  initSettingsNavigationDisclosureIconChunk();
}
