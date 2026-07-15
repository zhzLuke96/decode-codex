// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Semantic personalization settings surface.
import React from "react";

import { SettingsTitle } from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { WithWindow } from "../../utils/with-window";
import { useSettingsHostContext } from "../settings-host-context";
import { AgentsEditorSection } from "./agents-editor";
import { MemorySettingsSection } from "./memory-settings";
import { PERSONALIZATION_SETTINGS_SLUG } from "./messages";
import { PersonalitySection } from "./personality-section";

export function PersonalizationSettings(): JSX.Element {
  const { selectedHostId } = useSettingsHostContext();

  return (
    <SettingsContentLayout
      title={<SettingsTitle slug={PERSONALIZATION_SETTINGS_SLUG} />}
    >
      <PersonalitySection hostId={selectedHostId} />
      <AgentsEditorSection key={selectedHostId} hostId={selectedHostId} />
      <WithWindow electron={true} extension={true}>
        <MemorySettingsSection hostId={selectedHostId} />
      </WithWindow>
    </SettingsContentLayout>
  );
}

export function initPersonalizationSettingsPage(): void {}
