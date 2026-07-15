// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Host command that asks the desktop shell to open the active host's config.toml.
// Used by the loading/fatal-error fallback page's "Open Config.toml" button.
import { vscodeApiF } from "../boundaries/vscode-api";

export function openConfigTomlCommand(): void {
  vscodeApiF.dispatchMessage("open-config-toml", {});
}
