// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Memory controls for personalization settings.
import React, { type ReactNode } from "react";

import {
  _appScopeA as useAppScopeFamilyValue,
  _appScopeO as useAppScopeStore,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { LOCAL_HOST_ID, sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { userConfigQueryOptions } from "../../config/config-queries";
import {
  MEMORY_EXPERIMENTAL_FEATURE_NAME,
  experimentalFeaturesQueryOptions,
  isMemoriesFeatureEnabled,
  useExperimentalFeatureMutation,
} from "../../features/experimental-features/queries";
import {
  buildCodexMemoryStateSnapshot,
  codexMemoryResetClickedEvent,
  codexMemorySettingToggledEvent,
  useIsChronicleResearchPreviewEnabled,
} from "../../onboarding/chronicle-setup-state";
import type { MemoryConfig } from "../../onboarding/chronicle-setup-state/types";
import {
  __productLoggerR as productLoggerSignal,
  type ProductLogger,
} from "../../analytics/product-logger";
import { useHostQuery } from "../../runtime/host-query-runtime";
import {
  vscodeApiH as vscodeLogger,
  vscodeApiUnderscore as useMutation,
} from "../../boundaries/vscode-api";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../../ui/dialog-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { toastApiSignal } from "../../ui/toast-signal";
import { Toggle } from "../../utils/toggle";
import { SettingsGroup } from "../../utils/settings-group";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { ChronicleSettingsRow } from "./chronicle-settings";
import {
  buildChronicleConfigEdit,
  buildMemoryConfigEdits,
  buildSkipToolAssistedChatsEdits,
  readChronicleResearchPreviewEnabled,
  readMemoryConfig,
  useWritePersonalizationConfigMutation,
  type UserConfigResponse,
} from "./queries";
import {
  CODEX_MEMORIES_DOCS_URL,
  personalizationMessages,
} from "./messages";

type QueryResult<TData> = {
  data?: TData;
  isLoading?: boolean;
};

type ExperimentalFeature = {
  enabled: boolean;
  name: string;
};

type ChroniclePermissions = {
  chronicleSidecarPresent?: boolean | null;
};

type ToastApi = {
  danger(message: ReactNode): void;
  success(message: ReactNode): void;
};

type MemoryAnalyticsState = ReturnType<typeof buildCodexMemoryStateSnapshot> & {
  chronicleResearchPreviewEnabled: boolean;
  chronicleResearchPreviewVisible: boolean;
  skipToolAssistedChatsEnabled?: boolean;
};

const MEMORY_SETTINGS_GATE = "875176429";

export function MemorySettingsSection({
  hostId,
}: {
  hostId: string;
}): JSX.Element | null {
  const intl = useIntl();
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const productLogger = useAppScopeValue(productLoggerSignal) as ProductLogger;
  const memorySettingsGateEnabled = useMemorySettingsGate();
  const chronicleResearchPreviewGateEnabled =
    useIsChronicleResearchPreviewEnabled();
  const userConfigQuery = useAppScopeFamilyValue(
    userConfigQueryOptions,
    hostId,
  ) as QueryResult<UserConfigResponse>;
  const experimentalFeaturesQuery = useAppScopeFamilyValue(
    experimentalFeaturesQueryOptions,
    hostId,
  ) as QueryResult<ExperimentalFeature[]>;
  const chroniclePermissionsQuery = useHostQuery<ChroniclePermissions>(
    "chronicle-permissions",
    {
      queryConfig: {
        enabled:
          hostId === LOCAL_HOST_ID && chronicleResearchPreviewGateEnabled,
        refetchOnMount: "always",
        refetchOnWindowFocus: true,
      },
    },
  );
  const experimentalFeatures = experimentalFeaturesQuery.data ?? [];
  const memorySettingsVisible = isMemoriesFeatureEnabled(
    experimentalFeatures,
    memorySettingsGateEnabled,
  );
  const memoryFeatureEnabled = experimentalFeatures.some(
    (feature) =>
      feature.name === MEMORY_EXPERIMENTAL_FEATURE_NAME && feature.enabled,
  );
  const memoryConfig = readMemoryConfig(userConfigQuery.data?.config);
  const chronicleResearchPreviewEnabled =
    readChronicleResearchPreviewEnabled(userConfigQuery.data?.config);
  const chronicleResearchPreviewVisible =
    hostId === LOCAL_HOST_ID &&
    chronicleResearchPreviewGateEnabled &&
    chroniclePermissionsQuery.data?.chronicleSidecarPresent === true;
  const memoriesEnabled =
    memoryFeatureEnabled &&
    memoryConfig.generateMemories &&
    memoryConfig.useMemories;
  const writeConfigMutation = useWritePersonalizationConfigMutation({
    hostId,
    userConfig: userConfigQuery.data,
  });
  const experimentalFeatureMutation = useExperimentalFeatureMutation({
    hostId,
  });
  const [resetDialogOpen, setResetDialogOpen] = React.useState(false);
  const resetMemoriesMutation = useResetMemoriesMutation({
    hostId,
    onError: () => {
      appScopeStore
        .get<ToastApi>(toastApiSignal)
        .danger(<FormattedMessage {...personalizationMessages.resetError} />);
    },
    onSuccess: () => {
      setResetDialogOpen(false);
      appScopeStore
        .get<ToastApi>(toastApiSignal)
        .success(
          <FormattedMessage {...personalizationMessages.resetSuccess} />,
        );
    },
  });

  if (!memorySettingsVisible) return null;

  const isBusy =
    experimentalFeaturesQuery.isLoading === true ||
    writeConfigMutation.isPending ||
    experimentalFeatureMutation.isPending ||
    resetMemoriesMutation.isPending;

  const currentAnalyticsState = buildMemoryAnalyticsState({
    chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: memoryFeatureEnabled,
    memoryConfig,
  });

  const toggleMemories = (enabled: boolean) => {
    const previousState = currentAnalyticsState;
    const disableChronicle =
      !enabled && hostId === LOCAL_HOST_ID
        ? () =>
            writeConfigMutation.mutateAsync({
              edits: [buildChronicleConfigEdit(false)],
            })
        : undefined;

    void Promise.allSettled([
      experimentalFeatureMutation.mutateAsync({
        featureName: MEMORY_EXPERIMENTAL_FEATURE_NAME,
        enabled,
      }),
      writeConfigMutation.mutateAsync({
        edits: buildMemoryConfigEdits(enabled),
      }),
      disableChronicle?.() ?? Promise.resolve(),
    ]).then((results) => {
      const featureSucceeded = results[0]?.status === "fulfilled";
      const configSucceeded = results[1]?.status === "fulfilled";
      const chronicleSucceeded = results[2]?.status === "fulfilled";
      const nextState = {
        ...previousState,
        chronicleResearchPreviewEnabled:
          disableChronicle != null && chronicleSucceeded
            ? false
            : previousState.chronicleResearchPreviewEnabled,
        memoryFeatureEnabled: featureSucceeded
          ? enabled
          : previousState.memoryFeatureEnabled,
        generateMemoriesEnabled: configSucceeded
          ? enabled
          : previousState.generateMemoriesEnabled,
        useMemoriesEnabled: configSucceeded
          ? enabled
          : previousState.useMemoriesEnabled,
      };
      const nextMemoriesEnabled =
        nextState.memoryFeatureEnabled &&
        nextState.generateMemoriesEnabled &&
        nextState.useMemoriesEnabled;

      if (nextMemoriesEnabled !== previousState.memoriesEnabled) {
        logMemorySettingToggled(productLogger, {
          previousEnabled: previousState.memoriesEnabled,
          selectedEnabled: enabled,
          settingName: "memories",
          state: {
            ...nextState,
            memoriesEnabled: nextMemoriesEnabled,
          },
        });
      }
    });
  };

  const toggleSkipToolAssistedChats = (enabled: boolean) => {
    const previousEnabled = memoryConfig.disableOnExternalContext === true;
    void writeConfigMutation
      .mutateAsync({
        edits: buildSkipToolAssistedChatsEdits(enabled),
      })
      .then(() => {
        logMemorySettingToggled(productLogger, {
          previousEnabled,
          selectedEnabled: enabled,
          settingName: "skip_tool_assisted_chats",
          state: buildMemoryAnalyticsState({
            chronicleResearchPreviewEnabled,
            chronicleResearchPreviewVisible,
            isMemoryFeatureEnabled: memoryFeatureEnabled,
            memoryConfig: {
              ...memoryConfig,
              disableOnExternalContext: enabled,
            },
          }),
        });
      })
      .catch(() => {});
  };

  const writeChronicleEnabled = (enabled: boolean) =>
    writeConfigMutation.mutateAsync({
      edits: [buildChronicleConfigEdit(enabled)],
    });

  return (
    <>
      <SettingsGroup className="gap-2">
        <SettingsGroup.Header
          title={<FormattedMessage {...personalizationMessages.memory} />}
          subtitle={
            <FormattedMessage
              {...personalizationMessages.memorySubtitle}
              values={{ a: memoriesDocsLink }}
            />
          }
        />
        <SettingsGroup.Content>
          <SettingsControlRow
            label={
              <FormattedMessage {...personalizationMessages.enableMemories} />
            }
            description={
              <FormattedMessage
                {...personalizationMessages.enableMemoriesDescription}
              />
            }
            control={
              <Toggle
                checked={memoriesEnabled}
                disabled={isBusy}
                ariaLabel={intl.formatMessage(
                  personalizationMessages.enableMemoriesAriaLabel,
                )}
                onChange={toggleMemories}
              />
            }
          />
          {chronicleResearchPreviewVisible ? (
            <ChronicleSettingsRow
              chronicleEnabled={chronicleResearchPreviewEnabled}
              disabled={!memoriesEnabled || isBusy}
              writeChronicleEnabled={writeChronicleEnabled}
              onChronicleResearchPreviewToggled={(
                previousEnabled,
                selectedEnabled,
              ) => {
                logMemorySettingToggled(productLogger, {
                  previousEnabled,
                  selectedEnabled,
                  settingName: "chronicle_research_preview",
                  state: buildMemoryAnalyticsState({
                    chronicleResearchPreviewEnabled: selectedEnabled,
                    chronicleResearchPreviewVisible,
                    isMemoryFeatureEnabled: memoryFeatureEnabled,
                    memoryConfig,
                  }),
                });
              }}
            />
          ) : null}
          <SettingsControlRow
            label={
              <FormattedMessage
                {...personalizationMessages.skipToolAssistedChats}
              />
            }
            description={
              <FormattedMessage
                {...personalizationMessages.skipToolAssistedChatsDescription}
              />
            }
            control={
              <Toggle
                checked={memoryConfig.disableOnExternalContext === true}
                disabled={isBusy || !memoryFeatureEnabled}
                ariaLabel={intl.formatMessage(
                  personalizationMessages.skipToolAssistedChatsAriaLabel,
                )}
                onChange={toggleSkipToolAssistedChats}
              />
            }
          />
          <SettingsControlRow
            label={
              <FormattedMessage {...personalizationMessages.resetMemories} />
            }
            description={
              <FormattedMessage
                {...personalizationMessages.resetMemoriesDescription}
              />
            }
            control={
              <Button
                color="danger"
                disabled={resetMemoriesMutation.isPending}
                loading={resetMemoriesMutation.isPending}
                onClick={() => {
                  setResetDialogOpen(true);
                }}
              >
                <FormattedMessage
                  {...personalizationMessages.resetMemoriesButton}
                />
              </Button>
            }
          />
        </SettingsGroup.Content>
      </SettingsGroup>
      <ResetMemoriesDialog
        isPending={resetMemoriesMutation.isPending}
        open={resetDialogOpen}
        onCancel={() => {
          setResetDialogOpen(false);
        }}
        onConfirm={() => {
          productLogger.logProductEvent(codexMemoryResetClickedEvent, {
            resetScope: "all_memories",
          });
          resetMemoriesMutation.mutate(undefined);
        }}
        onOpenChange={setResetDialogOpen}
      />
    </>
  );
}

function useMemorySettingsGate(): boolean {
  return useGateValue(MEMORY_SETTINGS_GATE);
}

function useResetMemoriesMutation({
  hostId,
  onError,
  onSuccess,
}: {
  hostId: string;
  onError: () => void;
  onSuccess: () => void;
}) {
  return useMutation<void, unknown>({
    mutationFn: () =>
      sendAppServerRequest("reset-memories-for-host", {
        hostId,
      }),
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      vscodeLogger.error("Failed to reset memories", {
        safe: {
          error: String(error),
        },
        sensitive: {},
      });
      onError();
    },
  });
}

function ResetMemoriesDialog({
  isPending,
  onCancel,
  onConfirm,
  onOpenChange,
  open,
}: {
  isPending: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}): JSX.Element {
  return (
    <DialogLayout open={open} onOpenChange={onOpenChange} size="compact">
      <DialogBody>
        <DialogSection>
          <DialogHeader
            title={
              <FormattedMessage
                {...personalizationMessages.resetDialogTitle}
              />
            }
            subtitle={
              <FormattedMessage
                {...personalizationMessages.resetDialogSubtitle}
              />
            }
          />
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="ghost" disabled={isPending} onClick={onCancel}>
              <FormattedMessage
                {...personalizationMessages.resetDialogCancel}
              />
            </Button>
            <Button color="danger" loading={isPending} onClick={onConfirm}>
              <FormattedMessage
                {...personalizationMessages.resetDialogConfirm}
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}

function buildMemoryAnalyticsState({
  chronicleResearchPreviewEnabled,
  chronicleResearchPreviewVisible,
  isMemoryFeatureEnabled,
  memoryConfig,
}: {
  chronicleResearchPreviewEnabled: boolean;
  chronicleResearchPreviewVisible: boolean;
  isMemoryFeatureEnabled: boolean;
  memoryConfig: MemoryConfig;
}): MemoryAnalyticsState {
  return {
    chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible,
    ...buildCodexMemoryStateSnapshot({
      isMemoryFeatureEnabled,
      memoryConfig,
    }),
    skipToolAssistedChatsEnabled: memoryConfig.disableOnExternalContext,
  };
}

function logMemorySettingToggled(
  productLogger: ProductLogger,
  {
    previousEnabled,
    selectedEnabled,
    settingName,
    state,
  }: {
    previousEnabled: boolean;
    selectedEnabled: boolean;
    settingName: string;
    state: MemoryAnalyticsState;
  },
): void {
  productLogger.logProductEvent(codexMemorySettingToggledEvent, {
    settingName,
    previousEnabled,
    selectedEnabled,
    ...state,
  });
}

function memoriesDocsLink(chunks: ReactNode): JSX.Element {
  return (
    <a
      className="inline-flex text-token-text-link-foreground"
      href={CODEX_MEMORIES_DOCS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {chunks}
    </a>
  );
}
