// Restored from ref/webview/assets/home-onboarding-assistant-tutorial-card-CacqQsHt.js
// Public Setup Codex ambient suggestion surface.

import { initRecommendedSkillStatsigOverridesChunk } from "../../../plugins/recommended-skill-statsig-overrides";
import { once } from "../../../runtime/commonjs-interop";
import { initAmbientSuggestionsStateChunk } from "./state";

export { SetupCodexOnboardingSuggestionCard } from "./card";
export {
  ONBOARDING_ASSISTANT_SUGGESTION_ID,
  activeAmbientSuggestionIdSignal,
  ambientSuggestionDefaultStatusIdsSignal,
  ambientSuggestionDefaultStatusesSignal,
  ambientSuggestionsLoadedSignal,
  ambientSuggestionsQuery,
  ambientSuggestionsRefreshQuery,
  clearAmbientSuggestionDefaultStatus,
  initAmbientSuggestionsStateChunk,
  pendingGeneratedAmbientSuggestionsSignal,
  setAmbientSuggestionDefaultStatus,
  updateAmbientSuggestionStatusInCache,
} from "./state";
export type {
  AmbientSuggestion,
  AmbientSuggestionQueryParams,
  AmbientSuggestionsFile,
  AmbientSuggestionsResponse,
  AmbientSuggestionStatus,
  SetupCodexOnboardingSuggestionCardProps,
} from "./types";

export const initHomeOnboardingAssistantTutorialCardChunk = once(() => {
  initAmbientSuggestionsStateChunk();
  initRecommendedSkillStatsigOverridesChunk();
});
