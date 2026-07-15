// Restored from ref/webview/assets/plugins-settings-BqBINsWY.js
// Semantic PluginsSettings wrapper with restored dependency imports.

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedMember0505 as pluginDirectoryEntrypoints,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceEnum,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  initPluginsPageChunk,
  PluginsPage,
} from "../runtime/current-app-initial/plugins-page-current-runtime";
function PluginsSettings() {
  return (
    <SettingsContentLayout>
      <PluginsPage
        directoryEntrypoint={
          pluginDirectoryEntrypoints.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS
        }
      />
    </SettingsContentLayout>
  );
}
runOnce(() => {
  initRemoteControlRefreshSourceEnum();
  initPluginsPageChunk();
  initSettingsContentLayoutChunk();
})();
export { PluginsSettings };
