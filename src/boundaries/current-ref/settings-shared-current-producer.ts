// Restored from ref/webview/assets/app-initial~app-main~page~remote-conversation-page~new-thread-panel-page~settings-page~appg~ibjpfz58-Cm2ohVFa.js
// Current settings shared producer: section copy, menu trigger, and title/subtitle helpers.
import { initReactIntlRuntimeChunk } from "./react-intl-approval-review-producer";
import {
  initClassNamesChunk,
  initThreadResourceChevronIconChunk,
} from "./thread-resource-card-producer";

export {
  getSettingsNavMessage,
  SettingsMenuButton,
  SettingsNavLabel,
  SettingsSectionSubtitle,
  SettingsSectionTitle,
} from "../../settings/settings-shared";

export function initSettingsSharedMessagesChunk(): void {
  initReactIntlRuntimeChunk();
}

export function initSettingsSharedCurrentChunk(): void {
  initClassNamesChunk();
  initReactIntlRuntimeChunk();
  initSettingsSharedMessagesChunk();
  initThreadResourceChevronIconChunk();
}
