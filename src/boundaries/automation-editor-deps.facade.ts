// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Automation editor dependencies resolved from composer, app metadata, model,
// popover, and icon modules.

export { LOCAL_HOST_ID } from "./use-host-config.facade";
export { motion } from "framer-motion";

export type ModelOption = {
  defaultReasoningEffort: string;
  defaultServiceTier?: string | null;
  description: string;
  displayName?: string | null;
  model: string;
  serviceTiers?: readonly { id: string; name: string; [key: string]: unknown }[];
  supportedReasoningEfforts: ReasoningEffortOption[];
  [key: string]: unknown;
};
export { PlatformGate } from "../app-shell/platform-gate";
export type ReasoningEffortOption = {
  description: string;
  reasoningEffort: string;
};
export { WorktreeIcon } from "../icons/worktree-icon";
export { useSkills } from "../plugins/use-skills";
export { ClockIcon as ScheduleClockIcon } from "../icons/clock-icon";
export {
  Popover as SchedulePopoverRoot,
  PopoverContent as SchedulePopoverContent,
  PopoverTrigger as SchedulePopoverTrigger,
} from "../ui/popover";
export {
  ComposerEditor as PromptComposerInput,
  MentionAutocompleteList as MentionAutocompletePanel,
  MentionAutocompletePopover as ComposerAnchoredOverlay,
  SkillAutocompletePopover as SkillAutocompleteOverlay,
  createEditComposerController as createPromptComposerController,
  dispatchComposerSuggestion as handleComposerSuggestionEvent,
  subscribeToComposerUpdates as subscribeComposerDocChanges,
  useMentionAutocomplete,
  useSkillAutocomplete,
} from "./user-message.facade";
export {
  selectFirstPluginWithApp as selectActivePlugins,
  useAvailablePlugins as usePluginAvailability,
  useNativeApps as useConfiguredApps,
  useNativeMcpApps as useNativeApps,
} from "./mention-metadata.facade";
export {
  coerceReasoningEffort,
  isVerboseModelDescriptionLocale,
  modelSupportsServiceTier,
  normalizeModelDisplayName,
  resolveReasoningEffort,
} from "../composer/model-option-helpers";
export { isHotkeyWindowContext as isFlyoutSubmenuDisabled } from "../utils/is-hotkey-window-context";
export { useModelListQuery as useModelsQuery } from "../utils/model-queries";
