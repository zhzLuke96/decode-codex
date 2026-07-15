// Restored from ref/webview/assets/use-element-in-view-CZGmoMvk.js
// Boundary facade for shared utility hooks, small icons, and vendored helpers.
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  onboardingWizardAction,
} from "./app-host-services-runtime";
import {
  getChunkModuleExports,
  getJsxRuntime,
  initReactRuntime,
} from "./app-main-host-runtime";
import { initClassNameRuntime } from "../utils/class-names";
import { initAppScope, initScopeRuntime } from "./app-scope-runtime";

export {
  createArrayPush,
  createBaseAt,
  createDefineProperty,
  createEq,
  createIdentity,
  createIsArguments,
  createIsArray,
  createIsArrayLike,
  createIsIndex,
  createIsObject,
  createSymbolConstructor,
} from "../vendor/lodash-runtime-helpers";

// Current bj5tp28r Uf/ub aliases are not these initializers; keep the legacy init
// hooks as explicit no-ops until their current producer aliases are restored.
export function initHostWorkspaceQueries(): void {}

export function initOnboardingWizardTrackingRuntime(): void {}

export {
  createPersistentSignal,
  getChunkModuleExports,
  getJsxRuntime,
  initAppScope,
  initClassNameRuntime,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  initReactRuntime,
  initScopeRuntime,
  onboardingWizardAction,
};
