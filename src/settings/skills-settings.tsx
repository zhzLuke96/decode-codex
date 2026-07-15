// Restored from ref/webview/assets/skills-settings-77Mu8VFb.js
// Semantic SkillsSettings wrapper with restored dependency imports.

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  initSkillsPageChunk,
  SkillsPage,
} from "./skills-page";
function SkillsSettings() {
  return (
    <SettingsContentLayout>
      <SkillsPage />
    </SettingsContentLayout>
  );
}
runOnce(() => {
  initSkillsPageChunk();
  initSettingsContentLayoutChunk();
})();
export { SkillsSettings };
