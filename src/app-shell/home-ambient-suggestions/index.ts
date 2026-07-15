// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// Public surface for the home ambient suggestions current runtime.
export {
  hasSeenFastModeAnnouncementSignal,
  hasSeenKnowledgeWorkAnnouncementSignal,
  hasSeenWorkPluginsAnnouncementSignal,
  homeAnnouncementDismissedSignal,
  initHomeAnnouncementSignalsChunk,
} from "./state";
export { useIsHomeAmbientSuggestionsRoute } from "./routes";
export {
  initModelUpgradeAnnouncementStateChunk,
  useLatestModelUpgradeAnnouncement,
  useModelAvailabilityNuxAnnouncement,
  usePriorityServiceTierAnnouncement,
  type ModelAnnouncementContent,
  type ModelAnnouncementState,
} from "./model-announcements";
export {
  initWorkspaceMessagesQueryChunk,
  useWorkspaceAnnouncement,
  useWorkspaceHeadline,
  type WorkspaceAnnouncementState,
  type WorkspaceHeadlineState,
  type WorkspaceMessage,
  type WorkspaceMessagesResponse,
} from "./workspace-messages";
export {
  ONBOARDING_ASSISTANT_SUGGESTION_ID,
  SetupCodexOnboardingSuggestionCard,
  activeAmbientSuggestionIdSignal,
  ambientSuggestionDefaultStatusIdsSignal,
  ambientSuggestionDefaultStatusesSignal,
  ambientSuggestionsLoadedSignal,
  ambientSuggestionsQuery,
  ambientSuggestionsRefreshQuery,
  clearAmbientSuggestionDefaultStatus,
  initAmbientSuggestionsStateChunk,
  initHomeOnboardingAssistantTutorialCardChunk,
  pendingGeneratedAmbientSuggestionsSignal,
  setAmbientSuggestionDefaultStatus,
  updateAmbientSuggestionStatusInCache,
  type AmbientSuggestion,
  type AmbientSuggestionQueryParams,
  type AmbientSuggestionStatus,
  type AmbientSuggestionsFile,
  type AmbientSuggestionsResponse,
  type SetupCodexOnboardingSuggestionCardProps,
} from "./setup-codex";
