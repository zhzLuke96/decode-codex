// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Runtime initialization for the semantic AppgenSettingsPage restore.

import { once } from "../runtime/commonjs-interop";
import {
  initRemoteProjectsAppSharedSemanticRuntime,
  appgenProjectAccessSchemas as initAppgenProjectAccessSchemas,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { initWorktreeNewThreadOrchestratorSemanticRuntime } from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  initButtonRuntime,
  initOpenExternalUrlRuntime,
  initToastControllerRuntime,
  worktreeNewThreadQueryCompatSlotUpperDLowerM as initLoadingSpinnerRuntime,
  worktreeNewThreadQueryCompatSlotUpperELowerM as initButtonGroupRuntime,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as initButtonTextRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appMainCurrentCompatSlotUpperILowerN as initSettingsRowRuntime,
  appMainCurrentCompatSlotUpperILowerO as initAccessMessageRuntime,
  appMainCurrentCompatSlotUpperKLowerO as initAccessPolicyIconRuntime,
  appMainCurrentCompatSlotUpperPLowerO as initAccessPolicyDescriptionRuntime,
  appMainCurrentCompatSlotUpperZ as initAppMainRuntime,
} from "../vendor/app-main-current-runtime";
import { initProjectSiteRoutesChunk } from "../runtime/current-app-initial/appgen-site-route-icon-runtime";
import { initAppgenShareDialogChunk } from "../features/appgen-share-dialog";
import { initToolbarBreadcrumbChunk } from "../ui/toolbar-breadcrumb";
import { initDialogLayoutComponents } from "../ui/dialog-layout";
import { initExternalLinkIconChunk } from "../icons/external-link-icon";
import { initPlusSmIconChunk } from "../icons/plus-sm-icon";
import { initSettingsGroupChunk } from "../utils/settings-group";
import { initSettingsEmptyStateChunk } from "../utils/settings-empty-state";
import { initModalControllerStateChunk } from "../ui/modal-controller-state";

const initAppgenSettingsPageRuntimeOnce = once(() => {
  initRemoteProjectsAppSharedSemanticRuntime();
  initOpenAiNativeAppDefinition();
  initAppgenProjectAccessSchemas();
  initWorktreeNewThreadOrchestratorSemanticRuntime();
  initButtonRuntime();
  initButtonTextRuntime();
  initButtonGroupRuntime();
  initLoadingSpinnerRuntime();
  initOpenExternalUrlRuntime();
  initToastControllerRuntime();
  initProjectSiteRoutesChunk();
  initToolbarBreadcrumbChunk();
  initDialogLayoutComponents();
  initSettingsGroupChunk();
  initSettingsEmptyStateChunk();
  initModalControllerStateChunk();
  initAppgenShareDialogChunk();
  initExternalLinkIconChunk();
  initPlusSmIconChunk();
  initAppMainRuntime();
  initSettingsRowRuntime();
  initAccessMessageRuntime();
  initAccessPolicyIconRuntime();
  initAccessPolicyDescriptionRuntime();
});

export function initAppgenSettingsPageRuntime(): void {
  initAppgenSettingsPageRuntimeOnce();
}
