// Restored from ref/webview/assets/global-dictation-page-BV05fEU5.js
// Floating and native-pet global dictation page renderer.
import React, { type ReactElement, type ReactNode } from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import clsx from "clsx";
import {
  vscodeApiF as vscodeMessageBus,
  vscodeApiP as useVscodeMessage,
} from "../../boundaries/vscode-api";
import { RegenerateIcon } from "../../icons/regenerate-icon";
import { XIcon } from "../../icons/x-icon";
import {
  ContextMenu,
  type ContextMenuItemDefinition,
} from "../../ui/context-menu";
import { Spinner } from "../../ui/spinner";
import { Tooltip, TooltipShortcut } from "../../ui/tooltip-b";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  GlobalDictationOrb,
  retryGlobalDictation,
  startGlobalDictation,
  stopGlobalDictation,
} from "../global-dictation-orb";
import { dictationErrorMessage } from "../../utils/dictation-error-message";
import { getCommandShortcutLabel } from "../../utils/electron-menu-shortcuts";
import { dictationStreamingUploadHeaderValue } from "../../utils/transcribe-audio";
import { useFloatingWindowPointerInteractivity } from "../../utils/use-floating-window-pointer-interactivity";
import {
  UseRecordingWaveformIcon,
  useRecordingWaveform,
} from "../../utils/use-recording-waveform";
type GlobalDictationStatus =
  | "initializing"
  | "idle"
  | "listening"
  | "transcribing"
  | "error";
type GlobalDictationHotkeyMessage = {
  configuredHotkey: string | null;
  configuredToggleHotkey: string | null;
};
type GlobalDictationSessionMessage = {
  sessionId: string;
};
type DictationErrorStage = "start" | "transcription";
type StartDictationControls = Parameters<typeof startGlobalDictation>[1];
const globalDictationPageStyles = {
  darkTheme: "_darkTheme_1xq4w_1",
  miniSurface: "_miniSurface_1xq4w_15",
  expandedSurface: "_expandedSurface_1xq4w_22",
};
const closeWindowMessage = {
  id: "globalDictation.closeWindow",
  defaultMessage: "Close window",
  description:
    "Context menu item that closes the global dictation floating window",
};
export function GlobalDictationPage(): JSX.Element {
  const useNativePetRenderer = useGateValue("3563904085");
  React.useEffect(() => {
    let isMounted = true;
    queueMicrotask(() => {
      if (isMounted) {
        vscodeMessageBus.dispatchMessage("global-dictation-renderer-ready", {});
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return useNativePetRenderer ? (
    <NativePetGlobalDictationPage />
  ) : (
    <FloatingGlobalDictationPage />
  );
}
function NativePetGlobalDictationPage(): JSX.Element {
  const cleanupEnabled = useGateValue("1025755912");
  const streamingEnabled = useGateValue(dictationStreamingUploadHeaderValue);
  const [activeSessionId, setActiveSessionId] = React.useState<string | null>(
    null,
  );
  const [isVisible, setIsVisible] = React.useState(false);
  const interactiveRegionRef = React.useRef<HTMLDivElement | null>(null);
  const handleClose = React.useCallback(() => {
    if (activeSessionId != null) {
      vscodeMessageBus.dispatchMessage("global-dictation-close", {
        sessionId: activeSessionId,
      });
    }
  }, [activeSessionId]);
  useFloatingWindowPointerInteractivity({
    includeInteractiveRegion: true,
    interactiveRegionRef,
    onInteractiveChange: publishPointerInteractivity,
    publishInitialNonInteractive: false,
  });
  return (
    <main
      className={clsx(
        globalDictationPageStyles.darkTheme,
        "flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary",
      )}
    >
      <GlobalDictationContextMenu onClose={handleClose}>
        <div
          ref={interactiveRegionRef}
          data-testid="global-dictation-hitbox"
          className={clsx(
            "flex items-center justify-center",
            isVisible ? "size-10" : "size-0",
          )}
        >
          <GlobalDictationOrb
            cleanupEnabled={cleanupEnabled}
            streamingEnabled={streamingEnabled}
            onActiveSessionIdChange={setActiveSessionId}
            registerNativePetRenderer={false}
            onVisibilityChange={setIsVisible}
          />
        </div>
      </GlobalDictationContextMenu>
    </main>
  );
}
function FloatingGlobalDictationPage(): JSX.Element {
  const intl = useIntl();
  const cleanupEnabled = useGateValue("1025755912");
  const streamingEnabled = useGateValue(dictationStreamingUploadHeaderValue);
  const [activeSessionId, setActiveSessionId] = React.useState<string | null>(
    null,
  );
  const [configuredHotkey, setConfiguredHotkey] = React.useState<string | null>(
    null,
  );
  const [configuredToggleHotkey, setConfiguredToggleHotkey] = React.useState<
    string | null
  >(null);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [activationNonce, setActivationNonce] = React.useState(0);
  const [status, setStatus] =
    React.useState<GlobalDictationStatus>("initializing");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [canRetryError, setCanRetryError] = React.useState(false);
  const interactiveRegionRef = React.useRef<HTMLDivElement | null>(null);
  const {
    waveformCanvasRef,
    startWaveformCapture,
    stopWaveformCapture,
    resetWaveformDisplay,
  } = useRecordingWaveform({
    variant: "compact",
  });
  const showDictationError = React.useCallback(
    (stage: DictationErrorStage, error: unknown) => {
      const nextError = dictationErrorMessage(intl, stage, error);
      setErrorMessage(nextError.message);
      setCanRetryError(nextError.canRetry);
      setStatus("error");
    },
    [intl],
  );
  const handleRetry = React.useCallback(() => {
    if (activeSessionId == null) return;
    setStatus("transcribing");
    setErrorMessage(null);
    setCanRetryError(false);
    void retryGlobalDictation(activeSessionId, cleanupEnabled).catch(
      (error) => {
        showDictationError("transcription", error);
      },
    );
  }, [activeSessionId, cleanupEnabled, showDictationError]);
  const handleDismiss = React.useCallback(() => {
    if (activeSessionId == null) return;
    vscodeMessageBus.dispatchMessage("global-dictation-dismiss", {
      sessionId: activeSessionId,
    });
    setActiveSessionId(null);
    setErrorMessage(null);
    setCanRetryError(false);
  }, [activeSessionId]);
  const handleClose = React.useCallback(() => {
    if (activeSessionId == null && status !== "idle") return;
    vscodeMessageBus.dispatchMessage("global-dictation-close", {
      sessionId: activeSessionId,
    });
  }, [activeSessionId, status]);
  const handleTooltipOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (status === "idle") {
        setIsTooltipOpen(nextOpen);
      }
    },
    [status],
  );
  useFloatingWindowPointerInteractivity({
    activationNonce,
    includeInteractiveRegion: true,
    interactiveRegionRef,
    onInteractiveChange: publishPointerInteractivity,
    publishInitialNonInteractive: false,
  });
  useVscodeMessage(
    "global-dictation-idle",
    (message: GlobalDictationHotkeyMessage) => {
      setActiveSessionId(null);
      setConfiguredHotkey(message.configuredHotkey);
      setConfiguredToggleHotkey(message.configuredToggleHotkey);
      setIsTooltipOpen(false);
      setErrorMessage(null);
      setCanRetryError(false);
      setActivationNonce((value) => value + 1);
      setStatus(
        message.configuredHotkey != null ||
          message.configuredToggleHotkey != null
          ? "idle"
          : "initializing",
      );
    },
    [],
  );
  useVscodeMessage(
    "global-dictation-start",
    (message: GlobalDictationSessionMessage) => {
      setActiveSessionId(message.sessionId);
      setIsTooltipOpen(false);
      setErrorMessage(null);
      setCanRetryError(false);
      setStatus("listening");
      const controls: StartDictationControls = {
        startWaveformCapture,
        stopWaveformCapture,
        resetWaveformDisplay,
        onTranscriptionFailed: (error) => {
          showDictationError("transcription", error);
        },
      };
      void startGlobalDictation(
        message.sessionId,
        controls,
        cleanupEnabled,
        streamingEnabled,
      ).catch((error) => {
        showDictationError("start", error);
      });
    },
    [],
  );
  useVscodeMessage(
    "global-dictation-stop",
    (message: GlobalDictationSessionMessage) => {
      setStatus("transcribing");
      setErrorMessage(null);
      setCanRetryError(false);
      void stopGlobalDictation(message.sessionId);
    },
    [],
  );
  const isActive = status !== "idle";
  const tooltipOpen = status === "idle" && isTooltipOpen;
  const tooltipClassName = clsx(
    globalDictationPageStyles.darkTheme,
    "!rounded-full px-4 py-2",
  );
  const readyTooltipContent = (
    <GlobalDictationReadyTooltip
      configuredHotkey={configuredHotkey}
      configuredToggleHotkey={configuredToggleHotkey}
    />
  );
  const hitboxClassName = clsx(
    "group flex items-end justify-center",
    status === "error" ? "w-fit" : "h-[30px] w-[120px]",
  );
  const ariaLabel =
    status === "initializing"
      ? undefined
      : status === "idle"
        ? intl.formatMessage({
            id: "globalDictation.readyAriaLabel",
            defaultMessage: "Global dictation ready",
            description:
              "Accessible label for the persistent global dictation reminder",
          })
        : intl.formatMessage({
            id: "globalDictation.waveformAriaLabel",
            defaultMessage: "Global dictation waveform",
            description:
              "Accessible label for the minimal global dictation waveform",
          });
  const surfaceClassName = clsx(
    "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-100 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
    status === "error" ? "draggable" : "no-drag",
    (status === "initializing" || status === "idle") &&
      globalDictationPageStyles.miniSurface,
    (status === "initializing" || status === "idle") &&
      "h-2 w-10 justify-center rounded-[4px] border-token-text-secondary/70 px-0",
    status === "idle" &&
      "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-token-border-default/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-token-border-default/80",
    status !== "initializing" &&
      status !== "idle" &&
      globalDictationPageStyles.expandedSurface,
    status !== "initializing" &&
      status !== "idle" &&
      "border-token-border-default/80",
    (status === "listening" || status === "transcribing") &&
      "h-[30px] w-[72px] justify-center rounded-full px-2",
    status === "error" && "h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2",
  );
  const surface = (
    <section
      aria-live="polite"
      aria-label={ariaLabel}
      className={surfaceClassName}
    >
      {status === "idle" ? (
        <span className="relative flex h-full w-full items-center justify-center text-token-text-secondary">
          <UseRecordingWaveformIcon className="icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-100 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none" />
        </span>
      ) : null}
      {status === "transcribing" ? (
        <Spinner className="icon-xs text-token-text-secondary" />
      ) : null}
      {status === "error" ? (
        <>
          <span className="max-w-[252px] min-w-0 truncate text-xs font-medium text-token-error-foreground">
            {errorMessage}
          </span>
          {canRetryError ? (
            <button
              type="button"
              className="no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none"
              aria-label={intl.formatMessage({
                id: "globalDictation.retry",
                defaultMessage: "Retry",
                description:
                  "Accessible label for the button that retries global dictation transcription",
              })}
              onClick={handleRetry}
            >
              <RegenerateIcon className="icon-2xs" />
            </button>
          ) : null}
          <button
            type="button"
            className="no-drag flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary focus:outline-none"
            aria-label={intl.formatMessage({
              id: "globalDictation.dismissError",
              defaultMessage: "Dismiss",
              description:
                "Accessible label for the button that dismisses the global dictation error window",
            })}
            onClick={handleDismiss}
          >
            <XIcon className="icon-2xs" />
          </button>
        </>
      ) : null}
      {status === "listening" ? (
        <canvas
          ref={waveformCanvasRef}
          className="h-4 min-w-0 flex-1 text-token-text-primary"
          aria-hidden="true"
        />
      ) : null}
      <span className="sr-only">
        {status === "idle" ? (
          <FormattedMessage
            id="globalDictation.ready"
            defaultMessage="Dictation ready"
            description="Status text for the persistent global dictation reminder"
          />
        ) : null}
        {status === "listening" ? (
          <FormattedMessage
            id="globalDictation.listening"
            defaultMessage="Listening"
            description="Status text shown in the global dictation window while recording"
          />
        ) : null}
        {status === "transcribing" ? (
          <FormattedMessage
            id="globalDictation.transcribing"
            defaultMessage="Transcribing..."
            description="Status text shown in the global dictation window while audio is being transcribed"
          />
        ) : null}
        {status === "error" ? errorMessage : null}
      </span>
    </section>
  );
  const hitbox = (
    <div
      ref={interactiveRegionRef}
      data-testid="global-dictation-hitbox"
      className={hitboxClassName}
    >
      {surface}
    </div>
  );
  return (
    <main
      className={clsx(
        globalDictationPageStyles.darkTheme,
        "flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-token-text-primary",
        status === "error" && "p-1",
      )}
    >
      <GlobalDictationContextMenu onClose={handleClose}>
        <Tooltip
          delayDuration={250}
          disableHoverOpen={isActive}
          disablePadding
          open={tooltipOpen}
          sideOffset={10}
          tooltipClassName={tooltipClassName}
          tooltipMaxWidth="36rem"
          tooltipContent={readyTooltipContent}
          onOpenChange={handleTooltipOpenChange}
        >
          {hitbox}
        </Tooltip>
      </GlobalDictationContextMenu>
    </main>
  );
}
function publishPointerInteractivity(isInteractive: boolean): void {
  vscodeMessageBus.dispatchMessage(
    "global-dictation-pointer-interaction-changed",
    {
      isInteractive,
    },
  );
}
type GlobalDictationContextMenuProps = {
  children: ReactElement;
  onClose: () => void;
};
function GlobalDictationContextMenu({
  children,
  onClose,
}: GlobalDictationContextMenuProps): JSX.Element {
  const items: ContextMenuItemDefinition[] = [
    {
      id: "close-window",
      message: closeWindowMessage,
      onSelect: onClose,
    },
  ];
  return <ContextMenu items={items}>{children}</ContextMenu>;
}
type GlobalDictationReadyTooltipProps = {
  configuredHotkey: string | null;
  configuredToggleHotkey: string | null;
};
function GlobalDictationReadyTooltip({
  configuredHotkey,
  configuredToggleHotkey,
}: GlobalDictationReadyTooltipProps): ReactNode {
  if (configuredHotkey != null && configuredToggleHotkey != null) {
    const holdShortcutLabel = getCommandShortcutLabel(configuredHotkey);
    const toggleShortcutLabel = getCommandShortcutLabel(configuredToggleHotkey);
    return (
      <FormattedMessage
        id="globalDictation.readyTooltip.holdAndToggle"
        defaultMessage="Hold {holdShortcut} or press {toggleShortcut} to dictate"
        description="Tooltip explaining both global dictation shortcuts"
        values={{
          holdShortcut: (
            <TooltipShortcut keysLabel={holdShortcutLabel} key="hold" />
          ),
          toggleShortcut: (
            <TooltipShortcut keysLabel={toggleShortcutLabel} key="toggle" />
          ),
        }}
      />
    );
  }
  if (configuredHotkey != null) {
    const shortcutLabel = getCommandShortcutLabel(configuredHotkey);
    return (
      <FormattedMessage
        id="globalDictation.readyTooltip.hold"
        defaultMessage="Hold {shortcut} to dictate"
        description="Tooltip explaining the hold-to-dictate shortcut"
        values={{
          shortcut: <TooltipShortcut keysLabel={shortcutLabel} key="hold" />,
        }}
      />
    );
  }
  if (configuredToggleHotkey != null) {
    const shortcutLabel = getCommandShortcutLabel(configuredToggleHotkey);
    return (
      <FormattedMessage
        id="globalDictation.readyTooltip.toggle"
        defaultMessage="Press {shortcut} to dictate"
        description="Tooltip explaining the toggle dictation shortcut"
        values={{
          shortcut: <TooltipShortcut keysLabel={shortcutLabel} key="toggle" />,
        }}
      />
    );
  }
  return null;
}
