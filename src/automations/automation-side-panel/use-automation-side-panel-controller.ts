// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import React from "react";
import { useIntl } from "../../vendor/react-intl";
import {
  DEFAULT_AUTOMATION_DRAFT,
  validateAutomationDraft,
  getAutomationDraftRrule,
  createAutomationDraftFromAutomation,
  createAutomationDraftFromSeed,
  applyAutomationDraftModelDefaults,
  toAutomationUpdatePayload,
  toAutomationCreatePayload,
  applyHeartbeatTargetThread,
  setAutomationDraftCwds,
  getAutomationDestinationOptions,
  getAutomationDraftDestination,
  setAutomationDraftDestination,
} from "../shared";
import { areAutomationRecordsEqual } from "../automation-record-sync";
import { getAutomationTelemetryProperties } from "../../settings/automations/automation-telemetry";
import { isHeartbeatAutomation } from "../../boundaries/src-l0hb-mz-p";
import { formatAutomationNextRun } from "../../inbox/automation-next-run-format";
import { useHeartbeatThreadOptions } from "../use-heartbeat-thread-options";
import {
  useAppScope,
  useAtomValue,
  useSetSignal,
  useQueryClient,
  useFeatureGate,
  useModelSettings,
  useScopedStore,
  useDebouncedValue,
  useHostRequest,
  appRootScope,
  codexAnalyticsConfigAtom,
  pendingAutomationDirectiveSignal,
  workspaceFoldersQuerySignal,
  workspaceGroupsSignal,
  LOCAL_HOST_ID,
  buildQueryKey,
  formatWorkspaceRootLabel,
  buildWorkspaceFolderOptions,
  getAutomationSessionKey,
  arePayloadsEqual,
  shouldHideAutomationExecutionEnvironment,
  codexAutomationProductEvent,
  AutomationActionProto,
  AutomationSourceProto,
  AutomationFailureReasonProto,
} from "../../boundaries/onboarding-commons-externals.facade";
import {
  ALLOW_THREAD_DESTINATION_GATE_ID,
  MISSING_AUTOMATION_ERROR_MESSAGE,
} from "./constants";
import { automationDraftStoreFactory } from "./draft-store";
import { showAutomationSaveErrorToast } from "./save-error-toast";
import type {
  AutomationDraft,
  AutomationRecord,
  AutomationSession,
  AutomationSidePanelProps,
} from "./types";

export interface AutomationSidePanelController {
  automation: AutomationRecord | null;
  canSave: boolean;
  draft: AutomationDraft;
  executionEnvironmentId: string;
  executionEnvironmentOptions: string[];
  folderOptions: unknown[];
  handleExecutionEnvironmentSelect: (value: string) => void;
  handleFolderChange: (value: string[]) => void;
  handleModelSelect: (model: string, reasoningEffort: string) => void;
  handleNameChange: (value: string) => void;
  handleRetry: () => void;
  handleScheduleConfigChange: (scheduleConfig: unknown) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleThreadSelect: (selection: { threadId: string; title: string }) => void;
  hasPinnedThreads: boolean;
  hideExecutionEnvironment: boolean;
  intl: ReturnType<typeof useIntl>;
  isHeartbeat: boolean;
  isSaving: boolean;
  isUpdatePending: boolean;
  lastRunLabel: string;
  nextRunLabel: string;
  onClose: () => void;
  retryNeeded: boolean;
  roots: string[];
  session: AutomationSession;
  threadOptions: unknown[];
  updateDraft: (
    update: AutomationDraft | ((draft: AutomationDraft) => AutomationDraft),
  ) => void;
  updatePayload: unknown;
}

export function useAutomationSidePanelController({
  automation,
  draftInstanceId,
  models,
  session,
  onClose,
  onNameChange,
  onSaved,
}: AutomationSidePanelProps): AutomationSidePanelController {
  const store = useAppScope(appRootScope);
  const intl = useIntl();
  const queryClient = useQueryClient();
  const analytics = useAtomValue(codexAnalyticsConfigAtom);
  const setResolvedDirective = useSetSignal(pendingAutomationDirectiveSignal);
  const modelSettings = useModelSettings({ hostId: LOCAL_HOST_ID, cwd: null });

  const initialDraft =
    session.type === "proposal"
      ? createAutomationDraftFromSeed({
          seed: session.seed,
          targetAutomation: automation,
          models,
        })
      : automation == null
        ? DEFAULT_AUTOMATION_DRAFT
        : createAutomationDraftFromAutomation(automation, models);
  const sessionKey = getAutomationSessionKey(session);
  const draftStore = useScopedStore(automationDraftStoreFactory, {
    draftInstanceId,
    initialDraft,
    sessionKey,
  });
  const draftValue = useAtomValue(draftStore.draft$) as AutomationDraft;
  const hasUserEdited = useAtomValue(draftStore.hasUserEdited$) as boolean;
  const [lastFailedDraft, setLastFailedDraft] = React.useState<unknown>(null);

  const draft = applyAutomationDraftModelDefaults({
    draft: draftValue,
    modelSettings,
  });
  const updateDraft = (
    update: AutomationDraft | ((draft: AutomationDraft) => AutomationDraft),
  ) => {
    const current = applyAutomationDraftModelDefaults({
      draft: store.get(draftStore.draft$) as AutomationDraft,
      modelSettings,
    });
    const next = typeof update === "function" ? update(current) : update;
    if (next !== current) {
      store.set(draftStore.hasUserEdited$, true);
      store.set(draftStore.draft$, next);
    }
  };

  const { data: workspaceData } = useAtomValue(workspaceFoldersQuerySignal);
  const roots: string[] = workspaceData?.roots ?? [];
  const labels: Record<string, string> = workspaceData?.labels ?? {};
  const formatRootLabel = (root: string) =>
    formatWorkspaceRootLabel({ root, labels });
  const workspaceGroups = useAtomValue(workspaceGroupsSignal);
  const allowThreadDestination = useFeatureGate(
    ALLOW_THREAD_DESTINATION_GATE_ID,
  );
  const { options: threadOptions, hasPinnedThreads } =
    useHeartbeatThreadOptions(draft.targetThreadId as string | null);
  const { trimmedName, trimmedPrompt, canSave } =
    validateAutomationDraft(draft);
  const rrule = getAutomationDraftRrule(draft);
  const updatePayload =
    draft.id != null && canSave && rrule != null && draft.status !== "DELETED"
      ? toAutomationUpdatePayload({
          draft,
          name: trimmedName,
          prompt: trimmedPrompt,
          status: draft.status,
          rrule,
        })
      : null;
  const debouncedUpdatePayload = useDebouncedValue(updatePayload, 600);
  const retryNeeded = arePayloadsEqual(lastFailedDraft, updatePayload);

  const upsertAutomation = (item: AutomationRecord) => {
    queryClient.setQueryData(
      buildQueryKey("list-automations"),
      (previous: { items: AutomationRecord[] } | undefined) =>
        previous == null
          ? { items: [item] }
          : {
              items: previous.items.some((entry) => entry.id === item.id)
                ? previous.items.map((entry) =>
                    entry.id === item.id ? item : entry,
                  )
                : [...previous.items, item],
            },
    );
    queryClient.invalidateQueries({
      queryKey: buildQueryKey("list-automations"),
    });
    setLastFailedDraft(null);
  };

  const onCreateSuccess = ({ item }: { item: AutomationRecord }) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_CREATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: true,
      ...getAutomationTelemetryProperties(item),
    });
    upsertAutomation(item);
    if (session.type === "proposal") {
      setResolvedDirective({
        directiveKey: session.seed.directiveKey,
        automationId: item.id,
      });
    }
    onSaved(item);
  };
  const onCreateError = (error: Error, payload: unknown) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_CREATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: false,
      ...getAutomationTelemetryProperties(payload),
      failureReason:
        AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
    });
    showAutomationSaveErrorToast(store, intl, error.message);
  };
  const createMutation = useHostRequest("automation-create", {
    onSuccess: onCreateSuccess,
    onError: onCreateError,
  });

  const onUpdateSuccess = ({ item }: { item: AutomationRecord }) => {
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_UPDATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: true,
      ...getAutomationTelemetryProperties(item),
    });
    upsertAutomation(item);
    if (session.type === "proposal") {
      setResolvedDirective({
        directiveKey: session.seed.directiveKey,
        automationId: item.id,
      });
      onSaved(item);
    }
  };
  const onUpdateError = (error: Error, payload: unknown) => {
    setLastFailedDraft(payload);
    analytics.logProductEvent(codexAutomationProductEvent, {
      action: AutomationActionProto.CODEX_AUTOMATION_ACTION_UPDATED,
      source: AutomationSourceProto.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
      success: false,
      ...getAutomationTelemetryProperties(payload),
      failureReason:
        error.message === MISSING_AUTOMATION_ERROR_MESSAGE
          ? AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
          : AutomationFailureReasonProto.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
    });
    showAutomationSaveErrorToast(store, intl, error.message);
  };
  const updateMutation = useHostRequest("automation-update", {
    onSuccess: onUpdateSuccess,
    onError: onUpdateError,
  });

  React.useEffect(() => {
    if (
      session.type !== "persisted" ||
      !hasUserEdited ||
      automation == null ||
      debouncedUpdatePayload == null ||
      updateMutation.isPending ||
      areAutomationRecordsEqual(automation, debouncedUpdatePayload) ||
      arePayloadsEqual(lastFailedDraft, debouncedUpdatePayload)
    ) {
      return;
    }
    updateMutation.mutate(debouncedUpdatePayload);
  }, [
    automation,
    debouncedUpdatePayload,
    lastFailedDraft,
    hasUserEdited,
    session.type,
    updateMutation,
    updateMutation.isPending,
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (session.type !== "proposal" || !canSave || rrule == null) {
      return;
    }
    if (updatePayload != null) {
      updateMutation.mutate(updatePayload);
      return;
    }
    createMutation.mutate(
      toAutomationCreatePayload({
        draft,
        name: trimmedName,
        prompt: trimmedPrompt,
        rrule,
      }),
    );
  };
  const handleRetry = () => {
    if (updatePayload == null || updateMutation.isPending) {
      return;
    }
    setLastFailedDraft(null);
    updateMutation.mutate(updatePayload);
  };

  const isHeartbeat = draft.kind === "heartbeat";
  const executionEnvironmentOptions =
    automation == null
      ? getAutomationDestinationOptions({ allowThreadDestination })
      : isHeartbeatAutomation(automation)
        ? ["thread"]
        : ["local", "worktree"];

  return {
    automation,
    canSave,
    draft,
    executionEnvironmentId: getAutomationDraftDestination(draft) as string,
    executionEnvironmentOptions,
    folderOptions: buildWorkspaceFolderOptions({
      workspaceGroups,
      roots,
      formatRootLabel,
    }),
    handleExecutionEnvironmentSelect: (value: string) => {
      updateDraft((current) => setAutomationDraftDestination(current, value));
    },
    handleFolderChange: (value: string[]) => {
      updateDraft((current) => setAutomationDraftCwds(current, value));
    },
    handleModelSelect: (model: string, reasoningEffort: string) => {
      updateDraft((current) => ({ ...current, model, reasoningEffort }));
    },
    handleNameChange: (value: string) => {
      updateDraft((current) => ({ ...current, name: value }));
      onNameChange(value);
    },
    handleRetry,
    handleScheduleConfigChange: (scheduleConfig: unknown) => {
      updateDraft((current) => ({
        ...current,
        rawRrule: null,
        scheduleConfig,
        scheduleDirty: true,
      }));
    },
    handleSubmit,
    handleThreadSelect: (selection: { threadId: string; title: string }) => {
      updateDraft((current) =>
        applyHeartbeatTargetThread({
          draft: current,
          threadId: selection.threadId,
          title: selection.title,
        }),
      );
    },
    hasPinnedThreads,
    hideExecutionEnvironment: shouldHideAutomationExecutionEnvironment(draft),
    intl,
    isHeartbeat,
    isSaving: createMutation.isPending || updateMutation.isPending,
    isUpdatePending: updateMutation.isPending,
    lastRunLabel:
      automation?.lastRunAt == null
        ? intl.formatMessage({
            id: "inbox.automations.lastRun.none",
            defaultMessage: "-",
            description: "Fallback label when an automation has not run yet",
          })
        : intl.formatDate(new Date(automation.lastRunAt), {
            dateStyle: "medium",
            timeStyle: "short",
          }),
    nextRunLabel: formatAutomationNextRun({
      intl,
      nextRunAt: automation?.nextRunAt ?? null,
      status: draft.status as string,
    }),
    onClose,
    retryNeeded,
    roots,
    session,
    threadOptions,
    updateDraft,
    updatePayload,
  };
}
