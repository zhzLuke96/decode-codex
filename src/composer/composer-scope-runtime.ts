// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Composer scope initialization and scope token for local conversation panels.

import {
  _appScopeH as createScopedScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import { initScopeRuntime } from "../runtime/app-scope-runtime";

export const composerScope = createScopedScope("ComposerScope", {
  parent: appScopeRoot,
  retain: {
    max: 100,
  },
});

export function initComposerScopeRuntime(): void {
  initScopeRuntime();
}
