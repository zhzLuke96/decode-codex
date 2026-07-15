// Restored from ref/webview/assets/import-settings-Di3LdE0B.js
// Import settings page shell for external-agent setup migration.
import { FormattedMessage } from "react-intl";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsNavLabel } from "./settings-shared";

export function ImportSettings() {
  return (
    <SettingsContentLayout
      title={<SettingsNavLabel slug="import" />}
      subtitle={
        <FormattedMessage
          id="settings.import.subtitle"
          defaultMessage="Bring setup, projects, and chats from other AI apps into Codex"
          description="Subtitle for the import settings page"
        />
      }
    />
  );
}
