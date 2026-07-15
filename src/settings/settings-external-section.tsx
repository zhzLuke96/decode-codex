// Restored from ref/webview/assets/settings-external-section-j-RLbjnz.js
// External settings section placeholder used for browser-backed settings pages.
import { FormattedMessage } from "react-intl";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsNavLabel } from "./settings-shared";
export function SettingsExternalSection() {
  return (
    <SettingsContentLayout
      title={<SettingsNavLabel slug="environments" />}
      subtitle={
        <FormattedMessage
          id="settings.section.external"
          defaultMessage="Opens in your browser during Alpha"
          description="Subtitle for settings sections that open in a browser during the Alpha build"
        />
      }
    />
  );
}
