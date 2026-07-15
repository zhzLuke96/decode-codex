// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// User-message dependencies resolved from restored composer, settings, and
// app-scope runtime modules.

import { fr as createEditComposerController } from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";

export {
  appScopeO as useAppStore,
  appScopeRoot,
  appScopeUnderscore as createScopedAtom,
  useAppScopeValue as useScopedAtomValue,
  useAppScopeValue as useSignalValue,
} from "./app-scope";
export { ComposerEditor } from "../composer/composer-editor-runtime";
export {
  settingsAtoms as composerSettingKeys,
  useSettingValue,
} from "../composer/composer-settings";
export type { HookRunStats } from "../conversations/hook-stats-tooltip-button";
export { HookStatsTooltipButton } from "../conversations/hook-stats-tooltip-button";
export type { ThreadDetailLevel } from "../utils/thread-detail-level";
export { useMeasuredTextCollapse as useCollapsibleText } from "../utils/use-measured-text-collapse";
export {
  Fs as getExternalLinkContextMenuConversationId,
  Gc as stripMarkdownForClipboard,
  jf as hostContextSignal,
  t_ as isPlanFollowUp,
  xv as normalizeMessageText,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj";
export {
  as as hasPromptSyntax,
  is as hasFileMentions,
  to as codeModeSignal,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG";
export {
  Jn as SkillAutocompletePopover,
  Vr as dispatchComposerSuggestion,
  Zr as MentionAutocompleteList,
  _r as useMentionAutocomplete,
  da as MentionAutocompletePopover,
  f as useAnchoredPlacement,
  qn as useSkillAutocomplete,
  sr as useOnUnmount,
  xr as subscribeToComposerUpdates,
} from "../vendor/app-main-legacy-deps/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_";

export { createEditComposerController };

export type EditComposerController = ReturnType<
  typeof createEditComposerController
>;
export type UserMessageModel = string;
