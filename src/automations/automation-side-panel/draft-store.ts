// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import {
  appRootScope,
  createScopedStoreFactory,
} from "../../boundaries/onboarding-commons-externals.facade";

export const automationDraftStoreFactory = createScopedStoreFactory(
  appRootScope,
  (
    { initialDraft }: { initialDraft: unknown },
    { signal }: { signal: <T>(value: T) => unknown },
  ) => ({
    draft$: signal(initialDraft),
    hasUserEdited$: signal(false),
  }),
  { excludeFieldsFromKey: ["initialDraft"] },
);
