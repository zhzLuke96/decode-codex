// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Chronicle research preview controls for personalization memory settings.
import React, { type ReactNode } from "react";
import clsx from "clsx";

import {
  _appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  CHRONICLE_TRY_CODEX_PROMPT,
  buildChronicleSetupState,
  isChronicleSetupCompletionState,
} from "../../onboarding/chronicle-setup-state";
import { ChronicleSetupDialog } from "../../onboarding/chronicle-setup-state/setup-dialog";
import type {
  ChroniclePermissionStatus,
  ChronicleSidecarProcessState,
} from "../../onboarding/chronicle-setup-state/types";
import { useStartThreadWithPrefill } from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  setGlobalStateValue,
  useGlobalStateQuery,
} from "../../runtime/global-state-runtime";
import { useHostQuery } from "../../runtime/host-query-runtime";
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../../ui/dialog-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { Tooltip } from "../../ui/tooltip-b";
import { Toggle } from "../../utils/toggle";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  CHRONICLE_CONSENT_ACCEPTED_KEY,
  CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
} from "./queries";
import { CHRONICLE_DOCS_URL, chronicleMessages } from "./chronicle-messages";

type ChroniclePermissions = {
  accessibility?: ChroniclePermissionStatus | null;
  chronicleSidecarPresent?: boolean | null;
  chronicleSidecarProcessState?: ChronicleSidecarProcessState | null;
  screenRecording?: ChroniclePermissionStatus | null;
};

type ChronicleSettingsRowProps = {
  chronicleEnabled: boolean;
  disabled: boolean;
  onChronicleResearchPreviewToggled?: (
    previousEnabled: boolean,
    selectedEnabled: boolean,
  ) => void;
  writeChronicleEnabled: (enabled: boolean) => Promise<unknown>;
};

export function ChronicleSettingsRow({
  chronicleEnabled,
  disabled,
  onChronicleResearchPreviewToggled,
  writeChronicleEnabled,
}: ChronicleSettingsRowProps): JSX.Element | null {
  const intl = useIntl();
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const startThreadWithPrefill = useStartThreadWithPrefill();
  const consentAcceptedQuery = useGlobalStateQuery<boolean>(
    CHRONICLE_CONSENT_ACCEPTED_KEY,
  );
  const permissionsQuery = useHostQuery<ChroniclePermissions>(
    "chronicle-permissions",
    {
      queryConfig: {
        intervalMs: 1_000,
        refetchIntervalInBackground: true,
        refetchOnMount: "always",
      },
    },
  );
  const permissions = permissionsQuery.data;
  const [consentDialogOpen, setConsentDialogOpen] = React.useState(false);
  const [setupDialogOpen, setSetupDialogOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isUpdatingChronicle, setIsUpdatingChronicle] = React.useState(false);
  const displayName = intl.formatMessage(chronicleMessages.name);

  const setupState = buildChronicleSetupState({
    accessibilityStatus: permissions?.accessibility,
    errorMessage,
    isSidecarPresent: permissions?.chronicleSidecarPresent === true,
    isUpdatingChronicle,
    processState: permissions?.chronicleSidecarProcessState ?? "disabled",
    screenRecordingStatus: permissions?.screenRecording,
  });

  React.useEffect(() => {
    if (
      setupDialogOpen &&
      isChronicleSetupCompletionState(setupState.kind)
    ) {
      void setGlobalStateValue(
        appScopeStore,
        CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
        true,
      );
    }
  }, [appScopeStore, setupDialogOpen, setupState.kind]);

  const enableChronicle = React.useCallback(
    async ({
      rememberConsentAccepted = false,
      showSetupDialog,
    }: {
      rememberConsentAccepted?: boolean;
      showSetupDialog: boolean;
    }) => {
      const previousEnabled = chronicleEnabled;
      setIsUpdatingChronicle(true);
      setErrorMessage(null);
      setConsentDialogOpen(false);
      setSetupDialogOpen(showSetupDialog);

      try {
        if (rememberConsentAccepted) {
          await setGlobalStateValue(
            appScopeStore,
            CHRONICLE_CONSENT_ACCEPTED_KEY,
            true,
          );
        }
        if (!showSetupDialog) {
          void setGlobalStateValue(
            appScopeStore,
            CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
            false,
          );
        }
        await writeChronicleEnabled(true);
        onChronicleResearchPreviewToggled?.(previousEnabled, true);
        await permissionsQuery.refetch?.();
      } catch (error) {
        const nextErrorMessage =
          error instanceof Error ? error.message : "Failed to enable Chronicle";
        setErrorMessage(nextErrorMessage);
        void setGlobalStateValue(
          appScopeStore,
          CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
          false,
        );
        vscodeLogger.error("Failed to enable Chronicle", {
          safe: {
            error: String(error),
          },
          sensitive: {},
        });
      } finally {
        setIsUpdatingChronicle(false);
      }
    },
    [
      appScopeStore,
      chronicleEnabled,
      onChronicleResearchPreviewToggled,
      permissionsQuery,
      writeChronicleEnabled,
    ],
  );

  const disableChronicle = React.useCallback(async () => {
    const previousEnabled = chronicleEnabled;
    setIsUpdatingChronicle(true);
    setErrorMessage(null);
    void setGlobalStateValue(
      appScopeStore,
      CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
      false,
    );
    try {
      await writeChronicleEnabled(false);
      onChronicleResearchPreviewToggled?.(previousEnabled, false);
    } finally {
      setIsUpdatingChronicle(false);
    }
  }, [
    appScopeStore,
    chronicleEnabled,
    onChronicleResearchPreviewToggled,
    writeChronicleEnabled,
  ]);

  const isCheckingPermissions =
    permissions == null && permissionsQuery.isFetching === true;
  const isPending =
    isUpdatingChronicle || consentAcceptedQuery.isLoading === true;
  const toggleDisabled = isPending || disabled;

  return (
    <>
      <SettingsControlRow
        label={displayName}
        description={
          <ChronicleDescription
            chronicleEnabled={chronicleEnabled}
            isCheckingPermissions={isCheckingPermissions}
            onOpenChronicleSetup={() => {
              setErrorMessage(null);
              setSetupDialogOpen(true);
            }}
            permissions={permissions}
          />
        }
        control={
          <Tooltip
            disabled={!disabled}
            tooltipContent={
              <FormattedMessage
                {...chronicleMessages.memoriesRequiredTooltip}
              />
            }
          >
            <span
              className={clsx(
                "inline-flex",
                disabled && "cursor-not-allowed",
              )}
              tabIndex={disabled ? 0 : undefined}
            >
              <Toggle
                checked={chronicleEnabled}
                className={disabled ? "pointer-events-none" : undefined}
                disabled={toggleDisabled}
                onChange={(enabled) => {
                  if (enabled) {
                    if (consentAcceptedQuery.data === true) {
                      void enableChronicle({ showSetupDialog: false });
                      return;
                    }
                    setConsentDialogOpen(true);
                    return;
                  }
                  void disableChronicle();
                }}
                ariaLabel={intl.formatMessage(
                  chronicleMessages.buttonAriaLabel,
                  {
                    featureName: displayName,
                  },
                )}
              />
            </span>
          </Tooltip>
        }
      />
      <ChronicleConsentDialog
        chronicleDisplayName={displayName}
        isPending={isPending}
        open={consentDialogOpen}
        onContinue={() => {
          void enableChronicle({
            rememberConsentAccepted: true,
            showSetupDialog: true,
          });
        }}
        onOpenChange={setConsentDialogOpen}
      />
      <ChronicleSetupDialog
        open={setupDialogOpen}
        setupState={setupState}
        onOpenChange={(open) => {
          if (!open) {
            void setGlobalStateValue(
              appScopeStore,
              CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
              false,
            );
          }
          setSetupDialogOpen(open);
        }}
        onAskCodex={() => {
          void setGlobalStateValue(
            appScopeStore,
            CHRONICLE_SETUP_COMPLETION_PENDING_KEY,
            false,
          );
          setSetupDialogOpen(false);
          startThreadWithPrefill({
            prefillPrompt: CHRONICLE_TRY_CODEX_PROMPT,
          });
        }}
      />
    </>
  );
}

function ChronicleDescription({
  chronicleEnabled,
  isCheckingPermissions,
  onOpenChronicleSetup,
  permissions,
}: {
  chronicleEnabled: boolean;
  isCheckingPermissions: boolean;
  onOpenChronicleSetup: () => void;
  permissions?: ChroniclePermissions;
}): JSX.Element {
  const requiredPermissionsGranted =
    permissions?.accessibility === "granted" &&
    permissions.screenRecording === "granted";

  return (
    <span className="flex min-w-0 flex-col gap-1.5">
      <span>
        <FormattedMessage
          {...chronicleMessages.description}
          values={{ link: chronicleDocsInlineLink }}
        />
      </span>
      {chronicleEnabled ? (
        <span className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <ChroniclePermissionSummary
            accessibilityStatus={permissions?.accessibility}
            isChecking={isCheckingPermissions}
            onOpenChronicleSetup={onOpenChronicleSetup}
            processState={permissions?.chronicleSidecarProcessState}
            requiredPermissionsGranted={requiredPermissionsGranted}
            screenRecordingStatus={permissions?.screenRecording}
          />
        </span>
      ) : null}
    </span>
  );
}

function ChroniclePermissionSummary({
  accessibilityStatus,
  isChecking,
  onOpenChronicleSetup,
  processState,
  requiredPermissionsGranted,
  screenRecordingStatus,
}: {
  accessibilityStatus?: ChroniclePermissionStatus | null;
  isChecking: boolean;
  onOpenChronicleSetup: () => void;
  processState?: ChronicleSidecarProcessState | null;
  requiredPermissionsGranted: boolean;
  screenRecordingStatus?: ChroniclePermissionStatus | null;
}): JSX.Element {
  const missingPermission = getDeniedRequiredPermission({
    accessibilityStatus,
    screenRecordingStatus,
  });

  if (!isChecking && missingPermission != null) {
    return (
      <MissingPermissionLink
        permission={missingPermission}
        onOpenChronicleSetup={onOpenChronicleSetup}
      />
    );
  }

  if (!isChecking && screenRecordingStatus === "granted") {
    const statusClassName =
      processState === "running" && requiredPermissionsGranted
        ? "font-medium text-token-charts-green"
        : "font-medium text-token-description-foreground";

    return (
      <span className="inline-flex min-w-0 whitespace-nowrap">
        <span className="min-w-0 truncate">
          <FormattedMessage
            {...chronicleMessages.runningStatus}
            values={{
              status: (
                <span className={statusClassName}>
                  <ChronicleProcessStatus processState={processState} />
                </span>
              ),
            }}
          />
          {accessibilityStatus === "granted" ? null : (
            <>
              {"; "}
              <button
                className="inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline"
                onClick={onOpenChronicleSetup}
                type="button"
              >
                <FormattedMessage
                  {...chronicleMessages.runningStatusAccessibility}
                  values={{
                    status: (
                      <span
                        className={clsx(
                          "font-medium",
                          getPermissionStatusClassName({
                            isChecking,
                            status: accessibilityStatus,
                          }),
                        )}
                      >
                        <ChroniclePermissionStatusText
                          isChecking={isChecking}
                          status={accessibilityStatus}
                        />
                      </span>
                    ),
                  }}
                />
              </button>
            </>
          )}
        </span>
      </span>
    );
  }

  return (
    <PermissionStatusLabel
      isChecking={isChecking}
      label={
        <FormattedMessage {...chronicleMessages.screenRecordingPermission} />
      }
      status={screenRecordingStatus}
    />
  );
}

function MissingPermissionLink({
  onOpenChronicleSetup,
  permission,
}: {
  onOpenChronicleSetup: () => void;
  permission: "accessibility" | "screen-recording";
}): JSX.Element {
  return (
    <button
      className="inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap text-token-error-foreground underline-offset-2 hover:underline"
      onClick={onOpenChronicleSetup}
      type="button"
    >
      <span className="min-w-0 truncate">
        <FormattedMessage
          {...chronicleMessages.permissionNotGranted}
          values={{
            permission: <PermissionName permission={permission} />,
            statusLabel: (
              <span className="font-medium">
                <FormattedMessage {...chronicleMessages.permissionStatusLabel} />
              </span>
            ),
          }}
        />
      </span>
    </button>
  );
}

function PermissionStatusLabel({
  isChecking,
  label,
  status,
}: {
  isChecking: boolean;
  label: ReactNode;
  status?: ChroniclePermissionStatus | null;
}): JSX.Element {
  return (
    <span className="inline-flex min-w-0 whitespace-nowrap">
      <span className="min-w-0 truncate">
        <FormattedMessage
          {...chronicleMessages.permissionStatus}
          values={{
            permission: label,
            status: (
              <span
                className={clsx(
                  "font-medium",
                  getPermissionStatusClassName({ isChecking, status }),
                )}
              >
                <ChroniclePermissionStatusText
                  isChecking={isChecking}
                  status={status}
                />
              </span>
            ),
          }}
        />
      </span>
    </span>
  );
}

function PermissionName({
  permission,
}: {
  permission: "accessibility" | "screen-recording";
}): JSX.Element {
  return permission === "accessibility" ? (
    <FormattedMessage {...chronicleMessages.accessibilityPermission} />
  ) : (
    <FormattedMessage {...chronicleMessages.screenRecordingPermission} />
  );
}

function ChronicleProcessStatus({
  processState,
}: {
  processState?: ChronicleSidecarProcessState | null;
}): JSX.Element {
  switch (processState) {
    case "running":
      return <FormattedMessage {...chronicleMessages.processRunning} />;
    case "restarting":
    case "starting":
      return <FormattedMessage {...chronicleMessages.processStarting} />;
    case "stopping":
      return <FormattedMessage {...chronicleMessages.processStopping} />;
    case "disabled":
    case "stopped":
    case undefined:
    case null:
      return <FormattedMessage {...chronicleMessages.processPaused} />;
  }
}

function ChroniclePermissionStatusText({
  isChecking,
  status,
}: {
  isChecking: boolean;
  status?: ChroniclePermissionStatus | null;
}): JSX.Element {
  if (isChecking) {
    return <FormattedMessage {...chronicleMessages.statusChecking} />;
  }
  switch (status) {
    case "granted":
      return <FormattedMessage {...chronicleMessages.statusGranted} />;
    case "not-determined":
      return <FormattedMessage {...chronicleMessages.statusNotDetermined} />;
    case "denied":
      return <FormattedMessage {...chronicleMessages.statusDenied} />;
    case "restricted":
      return <FormattedMessage {...chronicleMessages.statusRestricted} />;
    case "unknown":
    case undefined:
    case null:
      return <FormattedMessage {...chronicleMessages.statusUnknown} />;
  }
}

function ChronicleConsentDialog({
  chronicleDisplayName,
  isPending,
  onContinue,
  onOpenChange,
  open,
}: {
  chronicleDisplayName: string;
  isPending: boolean;
  onContinue: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}): JSX.Element {
  return (
    <DialogLayout
      open={open}
      onOpenChange={onOpenChange}
      size="default"
      contentClassName="max-h-[calc(100vh-6rem)] min-h-0"
    >
      <DialogBody className="min-h-0">
        <h2 className="sr-only">{chronicleDisplayName}</h2>
        <DialogSection>
          <DialogHeader
            title={<FormattedMessage {...chronicleMessages.consentTitle} />}
          />
        </DialogSection>
        <DialogSection className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70">
          <p>
            <FormattedMessage {...chronicleMessages.consentBodyIntro} />
          </p>
          <p>
            <FormattedMessage
              {...chronicleMessages.consentBodyConsiderations}
            />
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <FormattedMessage
                {...chronicleMessages.consentBodyCost}
                values={{ strong: boldConsentText }}
              />
            </li>
            <li>
              <FormattedMessage
                {...chronicleMessages.consentBodyPrivacy}
                values={{ strong: boldConsentText }}
              />
            </li>
            <li>
              <FormattedMessage
                {...chronicleMessages.consentBodyPromptInjection}
                values={{ strong: boldConsentText }}
              />
            </li>
          </ul>
          <p>
            <FormattedMessage
              {...chronicleMessages.consentBodyStorageHeading}
            />
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <FormattedMessage
                {...chronicleMessages.consentBodyStorageProcessing}
              />
            </li>
            <li>
              <FormattedMessage
                {...chronicleMessages.consentBodyStorageLocal}
              />
            </li>
          </ul>
          <p>
            <FormattedMessage
              {...chronicleMessages.consentBodyDisableIntro}
              values={{ link: chronicleDocsLink }}
            />
          </p>
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button
              color="ghost"
              disabled={isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              <FormattedMessage {...chronicleMessages.consentCancel} />
            </Button>
            <Button color="primary" loading={isPending} onClick={onContinue}>
              <FormattedMessage {...chronicleMessages.consentContinue} />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}

function getDeniedRequiredPermission({
  accessibilityStatus,
  screenRecordingStatus,
}: {
  accessibilityStatus?: ChroniclePermissionStatus | null;
  screenRecordingStatus?: ChroniclePermissionStatus | null;
}): "accessibility" | "screen-recording" | null {
  if (screenRecordingStatus === "denied") return "screen-recording";
  if (
    screenRecordingStatus === "granted" &&
    accessibilityStatus === "denied"
  ) {
    return "accessibility";
  }
  return null;
}

function getPermissionStatusClassName({
  isChecking,
  status,
}: {
  isChecking: boolean;
  status?: ChroniclePermissionStatus | null;
}): string {
  if (isChecking || status == null) {
    return "text-token-description-foreground";
  }
  switch (status) {
    case "granted":
      return "text-token-charts-green";
    case "denied":
    case "restricted":
      return "text-token-charts-red";
    case "not-determined":
    case "unknown":
      return "text-token-description-foreground";
  }
}

function chronicleDocsInlineLink(chunks: ReactNode): JSX.Element {
  return (
    <a
      className="inline-flex text-token-text-link-foreground"
      href={CHRONICLE_DOCS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {chunks}
    </a>
  );
}

function chronicleDocsLink(chunks: ReactNode): JSX.Element {
  return (
    <a
      className="text-token-link"
      href={CHRONICLE_DOCS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {chunks}
    </a>
  );
}

function boldConsentText(chunks: ReactNode): JSX.Element {
  return (
    <span className="font-bold text-token-foreground/90">{chunks}</span>
  );
}
