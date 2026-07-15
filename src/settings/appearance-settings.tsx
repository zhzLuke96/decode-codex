// Restored from ref/webview/assets/appearance-settings-ig-5Lyy_.js
// Semantic AppearanceSettings wrapper restored from the current ref chunk.
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  appgenLibraryHotDjo67r4nCompatSlotUpperH as initSettingsTitleSlugChunk,
  appgenLibraryHotDjo67r4nCompatSlotUpperV as SettingsTitleSlug,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  generalSettingsN as GeneralSettings,
  generalSettingsO as initGeneralSettingsChunk,
} from "../runtime/current-app-initial/general-settings-current-runtime";
function AppearanceSettings() {
  return (
    <SettingsContentLayout title={<SettingsTitleSlug slug="appearance" />}>
      <GeneralSettings />
    </SettingsContentLayout>
  );
}

const initAppearanceSettingsRuntime = runOnce(() => {
  initSettingsContentLayoutChunk();
  initSettingsTitleSlugChunk();
  initGeneralSettingsChunk();
});

initAppearanceSettingsRuntime();

export { AppearanceSettings };
