// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import type { DragEvent, ReactNode } from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { appServices } from "../../boundaries/rpc.facade";
import { appIdentity } from "../../utils/app-identity";
import { extensionInfo } from "../../utils/extension-info";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import {
  DIALOG_FOOTER_BUTTON_CLASS,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "../../ui/dialog-layout";
import type { ChronicleSetupState } from "./types";
export interface ChronicleSetupDialogProps {
  onAskCodex: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  setupState: ChronicleSetupState;
}
interface PermissionDragCardProps {
  appIconMedium: string | null;
  bundleName: string;
  onDragStart: (event: DragEvent<HTMLDivElement>) => void;
  permissionSettingsName: string;
}
interface SetupStateProps {
  setupState: ChronicleSetupState;
}
interface SetupDescriptionProps extends SetupStateProps {
  bundleName: string;
}
export function ChronicleSetupDialog({
  onAskCodex,
  onOpenChange,
  open,
  setupState,
}: ChronicleSetupDialogProps) {
  const intl = useIntl();
  const isReady = setupState.kind === "ready";
  const isFailed = setupState.kind === "failed";
  const needsScreenRecording =
    setupState.kind === "screen-recording-permission-needed";
  const needsAccessibility =
    setupState.kind === "accessibility-permission-needed";
  const needsPermission = needsScreenRecording || needsAccessibility;
  const isStarting =
    setupState.kind === "preparing" || setupState.kind === "starting";
  const allowEscapeClose = isStarting || isReady || isFailed;
  const permissionSettingsName = needsScreenRecording
    ? setupState.status === "denied"
      ? intl.formatMessage({
          id: "settings.general.experimentalFeatures.chronicle.screenRecordingSettingsName",
          defaultMessage: "Screen Recording",
          description:
            "Name of the macOS Screen Recording permission settings page",
        })
      : null
    : needsAccessibility && setupState.status === "denied"
      ? intl.formatMessage({
          id: "settings.general.experimentalFeatures.chronicle.accessibilitySettingsName",
          defaultMessage: "Accessibility",
          description:
            "Name of the macOS Accessibility permission settings page",
        })
      : null;
  const { data: extensionData } = useAppScopeValue(extensionInfo);
  const bundleName = extensionData?.appName ?? "Codex";
  return (
    <DialogLayout
      open={open}
      onOpenChange={onOpenChange}
      contentProps={{
        onEscapeKeyDown: (event) => {
          if (!allowEscapeClose) {
            event.preventDefault();
          }
        },
      }}
      shouldIgnoreClickOutside
      showDialogClose
      size="default"
    >
      <DialogBody>
        <DialogSection>
          <DialogTitle asChild>
            <h2 className="sr-only">
              <FormattedMessage
                id="settings.general.experimentalFeatures.chronicle.setupTitle"
                defaultMessage="Setting up Chronicle"
                description="Accessible title for the Chronicle setup dialog"
              />
            </h2>
          </DialogTitle>
          <DialogHeader
            title={<ChronicleSetupTitle setupState={setupState} />}
            subtitle={<ChronicleSetupSubtitle setupState={setupState} />}
          />
        </DialogSection>

        <DialogSection className="space-y-3">
          <p className="text-token-description-foreground">
            <ChronicleSetupDescription
              bundleName={bundleName}
              setupState={setupState}
            />
          </p>
          {isFailed ? (
            <p className="text-token-error-foreground">{setupState.message}</p>
          ) : null}
        </DialogSection>

        {permissionSettingsName == null ? null : (
          <DialogSection>
            <PermissionDragCard
              appIconMedium={extensionData?.appIconMedium ?? null}
              bundleName={bundleName}
              permissionSettingsName={permissionSettingsName}
              onDragStart={startPermissionSettingsAppDrag}
            />
          </DialogSection>
        )}

        <DialogSection>
          <DialogFooter className={DIALOG_FOOTER_BUTTON_CLASS}>
            {isStarting ? (
              <Button color="ghost" onClick={() => onOpenChange(false)}>
                <FormattedMessage
                  id="settings.general.experimentalFeatures.chronicle.setupDismiss"
                  defaultMessage="Close"
                  description="Button that dismisses the Chronicle setup dialog while setup is still preparing or starting"
                />
              </Button>
            ) : needsScreenRecording ? (
              <Button color="primary" onClick={openScreenRecordingSettings}>
                <FormattedMessage
                  id="settings.general.experimentalFeatures.chronicle.openScreenRecordingSettings"
                  defaultMessage="Open System Settings"
                  description="Button that opens macOS System Settings to the Screen Recording permission page"
                />
              </Button>
            ) : needsAccessibility ? (
              <Button color="primary" onClick={openAccessibilitySettings}>
                <FormattedMessage
                  id="settings.general.experimentalFeatures.chronicle.openAccessibilitySettings"
                  defaultMessage="Open System Settings"
                  description="Button that opens macOS System Settings to the Accessibility permission page"
                />
              </Button>
            ) : isReady ? (
              <Button color="primary" onClick={onAskCodex}>
                <FormattedMessage
                  id="settings.general.experimentalFeatures.chronicle.askCodex"
                  defaultMessage="Try it out"
                  description="Button that opens a new thread to try out Codex Chronicle"
                />
              </Button>
            ) : (
              <Button color="ghost" onClick={() => onOpenChange(false)}>
                <FormattedMessage
                  id="settings.general.experimentalFeatures.chronicle.setupClose"
                  defaultMessage="Close"
                  description="Button that closes the Chronicle setup dialog"
                />
              </Button>
            )}
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
function openAccessibilitySettings() {
  appServices.systemPermissions
    ?.openAccessibilitySettings()
    .catch(ignorePermissionSettingsError);
}
function openScreenRecordingSettings() {
  appServices.systemPermissions
    ?.openScreenRecordingSettings()
    .catch(ignorePermissionSettingsError);
}
function startPermissionSettingsAppDrag(event: DragEvent<HTMLDivElement>) {
  event.preventDefault();
  appServices.systemPermissions
    ?.startPermissionSettingsAppDrag()
    .catch(ignorePermissionSettingsError);
}
function ignorePermissionSettingsError() {}
function PermissionDragCard({
  appIconMedium,
  bundleName,
  onDragStart,
  permissionSettingsName,
}: PermissionDragCardProps) {
  const intl = useIntl();
  const dragLabel = intl.formatMessage(
    {
      id: "settings.general.experimentalFeatures.chronicle.permissionDragAppLabel",
      defaultMessage: "Drag {appName} into {permissionSettingsName} settings",
      description:
        "Accessible label for the draggable Codex app icon used to add Codex to a macOS permission settings page",
    },
    {
      appName: appIdentity,
      permissionSettingsName,
    },
  );
  return (
    <div
      className="flex cursor-grab items-center gap-3 rounded-lg border border-token-border bg-token-bg-fog p-2.5 active:cursor-grabbing"
      draggable
      onDragStart={onDragStart}
    >
      <div
        aria-label={dragLabel}
        className="flex h-16 w-16 shrink-0 items-center justify-center"
        role="img"
      >
        {appIconMedium == null ? null : (
          <img
            alt=""
            aria-hidden
            className="h-14 w-14 object-contain"
            draggable={false}
            src={appIconMedium}
          />
        )}
      </div>
      <p className="text-sm text-token-description-foreground">
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.permissionDragApp"
          defaultMessage="If {bundleName} doesn't appear in the list, drag this app icon into {permissionSettingsName} settings"
          values={{
            bundleName,
            permissionSettingsName,
          }}
          description="Instruction shown next to a draggable app icon when a macOS permission settings page does not list the app"
        />
      </p>
    </div>
  );
}
function ChronicleSetupTitle({ setupState }: SetupStateProps): ReactNode {
  switch (setupState.kind) {
    case "ready":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupReadyTitle"
          defaultMessage="Chronicle is ready to use!"
          description="Title shown when Chronicle setup has completed"
        />
      );
    case "failed":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupFailedTitle"
          defaultMessage="Chronicle setup failed"
          description="Title shown when Chronicle setup fails"
        />
      );
    case "screen-recording-permission-needed":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupScreenRecordingPermissionNeededTitle"
          defaultMessage="Allow Screen Recording to use Chronicle"
          description="Title shown when Chronicle setup is waiting for macOS Screen Recording permission"
        />
      );
    case "accessibility-permission-needed":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupAccessibilityPermissionNeededTitle"
          defaultMessage="Allow Accessibility to use Chronicle"
          description="Title shown when Chronicle setup is waiting for macOS Accessibility permission"
        />
      );
    case "preparing":
    case "starting":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupInProgressTitle"
          defaultMessage="Setting up Chronicle"
          description="Title shown while Chronicle setup is in progress"
        />
      );
  }
}
function ChronicleSetupSubtitle({ setupState }: SetupStateProps): ReactNode {
  switch (setupState.kind) {
    case "preparing":
    case "starting":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupWaiting"
          defaultMessage="Waiting..."
          description="Short status shown while Chronicle setup is waiting for prerequisites to complete"
        />
      );
    case "screen-recording-permission-needed":
    case "accessibility-permission-needed":
    case "ready":
    case "failed":
      return null;
  }
}
function ChronicleSetupDescription({
  bundleName,
  setupState,
}: SetupDescriptionProps): ReactNode {
  switch (setupState.kind) {
    case "preparing":
    case "starting":
      return null;
    case "screen-recording-permission-needed":
      if (setupState.status === "restricted") {
        return (
          <FormattedMessage
            id="settings.general.experimentalFeatures.chronicle.setupScreenRecordingRestricted"
            defaultMessage="Screen Recording is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Screen Recording permission."
            description="Status shown when macOS Screen Recording permission is blocked by policy"
            values={{
              appName: appIdentity,
            }}
          />
        );
      }
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupScreenRecordingDenied"
          defaultMessage="Please open System Settings -> Privacy & Security -> Screen Recording and enable {bundleName}. You may need to restart {appName} to apply the change."
          description="Instructions shown when macOS Screen Recording permission has been denied"
          values={{
            appName: appIdentity,
            bundleName,
          }}
        />
      );
    case "accessibility-permission-needed":
      if (setupState.status === "restricted") {
        return (
          <FormattedMessage
            id="settings.general.experimentalFeatures.chronicle.setupAccessibilityRestricted"
            defaultMessage="Accessibility is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Accessibility permission"
            description="Status shown when macOS Accessibility permission is blocked by policy"
            values={{
              appName: appIdentity,
            }}
          />
        );
      }
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupAccessibilityDenied"
          defaultMessage="Please open System Settings -> Privacy & Security -> Accessibility and enable {bundleName}."
          description="Instructions shown when macOS Accessibility permission has not been granted"
          values={{
            bundleName,
          }}
        />
      );
    case "ready":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupReady"
          defaultMessage='You can pause Chronicle at any time by clicking "Pause Chronicle" in the {appName} menu bar.'
          description="Status when Chronicle setup has completed"
          values={{
            appName: appIdentity,
          }}
        />
      );
    case "failed":
      return (
        <FormattedMessage
          id="settings.general.experimentalFeatures.chronicle.setupFailed"
          defaultMessage="Chronicle setup failed."
          description="Status when Chronicle setup fails"
        />
      );
  }
}
