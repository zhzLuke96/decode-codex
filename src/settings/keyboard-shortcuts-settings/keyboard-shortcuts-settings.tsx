// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
// keyboard-shortcuts-settings-BuLGCo4B chunk restored from the Codex webview bundle.
import React from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useAppScopeValue } from "../../boundaries/app-scope";
import {
  vscodeApiA as useVscodeQueryClient,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiS as useVscodeMutation,
} from "../../boundaries/vscode-api";
import { Button } from "../../ui/button";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { Tooltip } from "../../ui/tooltip-b";
import {
  compareKeyboardShortcutCommands,
  getKeyboardShortcutCommandCopy,
  isKeyboardShortcutCommandFeatureEnabled,
  KeyboardShortcutsSearchInput,
} from "../../features/keyboard-shortcuts";
import { launcherHotkeyStateQueryKey } from "../../features/hotkey-window-state";
import { KeyboardIcon } from "../../icons/keyboard-icon";
import { SettingsSectionTitle } from "../settings-shared";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import { formatAccelerator } from "../../utils/electron-menu-shortcuts";
import {
  commandKeymapStateQuery,
  getCommandKeybindingOptions,
} from "../../utils/command-keybindings";
import {
  commandMenuStacksSignal,
  getCommandMenuStackSize,
  getTopCommandMenuItem,
  type CommandMenuStackByScope,
} from "../../utils/command-menu-state";
import { keyboardEventAccelerator } from "../../utils/keyboard-event-accelerator";
import { scoreQueryMatch } from "../../utils/score-query-match";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { usePlatform } from "../../utils/use-platform";
import { KeyboardShortcutTable } from "./keyboard-shortcuts-table";
import { ResetAllShortcutsDialog } from "./reset-all-shortcuts-dialog";
import {
  preventDefault,
  shortcutLabelStartsWith,
} from "./keyboard-shortcuts-utils";
import {
  SHORTCUT_COMMANDS,
  type ErrorByCommandId,
  type KeymapState,
  type MutationLike,
} from "./types";

export function KeyboardShortcutsSettings(): JSX.Element {
  return <KeyboardShortcutsSettingsContent />;
}

function KeyboardShortcutsSettingsContent(): JSX.Element {
  const intl = useIntl();
  const { platform } = usePlatform();
  const queryClient = useVscodeQueryClient();
  const registeredCommands = useAppScopeValue(
    commandMenuStacksSignal,
  ) as CommandMenuStackByScope;
  const invalidateQuery = invalidateQueriesAndBroadcast();
  const isGlobalDictationEnabled = useGateValue("1244621283");
  const isHotkeyWindowEnabled = useGateValue("1372061905");
  const isProcessManagerEnabled = useGateValue("3264431617");
  const isRealtimeConversationEnabled = useGateValue("2380644311");
  const isVoiceInputEnabled = useGateValue("4100906017");
  const modeSwitchAvailable =
    getCommandMenuStackSize(registeredCommands, "switchToMode1") > 0;
  const [searchValue, setSearchValue] = React.useState("");
  const [searchByKeystrokes, setSearchByKeystrokes] = React.useState(false);
  const [captureState, setCaptureState] = React.useState(null);
  const [errorByCommandId, setErrorByCommandId] =
    React.useState<ErrorByCommandId>({});
  const [resetAllOpen, setResetAllOpen] = React.useState(false);
  const [resetAllError, setResetAllError] = React.useState<string | null>(null);
  const { data: keymapState } = useAppScopeValue(commandKeymapStateQuery) as {
    data: KeymapState | null | undefined;
  };

  const setKeybindingMutation = useVscodeMutation(
    "set-codex-command-keybinding",
    {
      onSuccess: (nextKeymapState: KeymapState, variables: unknown) => {
        const { commandId } = variables as { commandId: string };
        const key = createVscodeQueryKey("codex-command-keymap-state");
        queryClient.setQueryData(key, nextKeymapState);
        const keysToInvalidate = [key];
        if (commandId === "hotkeyWindow") {
          keysToInvalidate.push(launcherHotkeyStateQueryKey);
        }
        if (
          commandId === "globalDictationHold" ||
          commandId === "globalDictationToggle"
        ) {
          keysToInvalidate.push(
            createVscodeQueryKey("global-dictation-hotkey-state"),
          );
        }
        void Promise.all(keysToInvalidate.map((item) => invalidateQuery(item)));
      },
    },
  ) as MutationLike;
  const resetKeybindingsMutation = useVscodeMutation(
    "reset-codex-command-keybindings",
    {
      onSuccess: (nextKeymapState: KeymapState) => {
        const key = createVscodeQueryKey("codex-command-keymap-state");
        queryClient.setQueryData(key, nextKeymapState);
        void Promise.all(
          [
            key,
            launcherHotkeyStateQueryKey,
            createVscodeQueryKey("global-dictation-hotkey-state"),
          ].map((item) => invalidateQuery(item)),
        );
      },
    },
  ) as MutationLike;

  const allCommands = React.useMemo(() => {
    const featureAvailability = {
      modeSwitchAvailable,
      isGlobalDictationEnabled,
      isHotkeyWindowEnabled,
      isProcessManagerEnabled,
      isRealtimeConversationEnabled,
      isVoiceInputEnabled,
    };
    return SHORTCUT_COMMANDS.filter((command) =>
      isKeyboardShortcutCommandFeatureEnabled(command.id, featureAvailability),
    )
      .map((command) => ({
        command,
        title: getKeyboardShortcutCommandCopy(
          command,
          intl,
          getTopCommandMenuItem(registeredCommands, command.id) as never,
        ).title,
      }))
      .sort((first, second) =>
        compareKeyboardShortcutCommands(first.command, second.command),
      );
  }, [
    intl,
    isGlobalDictationEnabled,
    isHotkeyWindowEnabled,
    isProcessManagerEnabled,
    isRealtimeConversationEnabled,
    isVoiceInputEnabled,
    modeSwitchAvailable,
    registeredCommands,
  ]);

  const visibleCommands = React.useMemo(() => {
    const query = searchValue.trim();
    if (query.length === 0) return allCommands;
    return allCommands.filter(({ command, title }) => {
      const description = getKeyboardShortcutCommandCopy(
        command,
        intl,
        getTopCommandMenuItem(registeredCommands, command.id) as never,
      ).description;
      return searchByKeystrokes
        ? getCommandKeybindingOptions(command.id, keymapState, platform).some(
            ({ label }) => shortcutLabelStartsWith(label, query),
          )
        : [command.id, title, description].some(
            (item) => scoreQueryMatch(item, query) > 0,
          );
    });
  }, [
    allCommands,
    intl,
    keymapState,
    platform,
    registeredCommands,
    searchByKeystrokes,
    searchValue,
  ]);

  const searchInput =
    keymapState == null ? null : (
      <KeyboardShortcutsSearchInput
        autoFocus={searchByKeystrokes}
        isSearchingByKeystrokes={searchByKeystrokes}
        trailingContent={
          <Tooltip
            tooltipContent={
              <FormattedMessage
                id="settings.keyboardShortcuts.searchByKeystrokes.tooltip"
                defaultMessage="Search by keystrokes"
                description="Tooltip label for the keyboard shortcut search mode button"
              />
            }
          >
            <Button
              aria-label={intl.formatMessage({
                id: "settings.keyboardShortcuts.searchByKeystrokes.ariaLabel",
                defaultMessage: "Search by keystrokes",
                description:
                  "Accessible label for the keyboard shortcut search mode button",
              })}
              aria-pressed={searchByKeystrokes}
              color={searchByKeystrokes ? "secondary" : "ghost"}
              size="toolbar"
              uniform
              onMouseDown={preventDefault}
              onClick={() => {
                setSearchValue("");
                setSearchByKeystrokes((current) => !current);
              }}
            >
              <KeyboardIcon className="icon-sm" />
            </Button>
          </Tooltip>
        }
        value={searchValue}
        onKeyDown={
          searchByKeystrokes
            ? (event) => {
                if (event.repeat) return;
                event.preventDefault();
                event.stopPropagation();
                if (event.key === "Escape") {
                  setSearchValue("");
                  setSearchByKeystrokes(false);
                  return;
                }
                const accelerator = keyboardEventAccelerator(event.nativeEvent);
                if (accelerator == null) return;
                const label = formatAccelerator(
                  accelerator,
                  platform === "macOS",
                  platform === "linux",
                );
                const nextSearch =
                  searchValue.length === 0 ? label : `${searchValue} ${label}`;
                setSearchValue(
                  searchValue.length > 0 &&
                    allCommands.some(({ command }) =>
                      getCommandKeybindingOptions(
                        command.id,
                        keymapState,
                        platform,
                      ).some(({ label }) =>
                        shortcutLabelStartsWith(label, nextSearch),
                      ),
                    )
                    ? nextSearch
                    : label,
                );
              }
            : undefined
        }
        onValueChange={setSearchValue}
      />
    );

  const loadingState =
    keymapState == null ? (
      <div className="px-4 py-3 text-sm text-token-text-secondary">
        <FormattedMessage
          id="settings.keyboardShortcuts.loading"
          defaultMessage="Loading shortcuts..."
          description="Loading label while keyboard shortcuts are being fetched"
        />
      </div>
    ) : null;
  const shortcutTable =
    keymapState == null ? null : (
      <KeyboardShortcutTable
        allCommands={allCommands}
        captureState={captureState}
        errorByCommandId={errorByCommandId}
        intl={intl}
        keymapState={keymapState}
        platform={platform}
        registeredCommands={registeredCommands}
        setCaptureState={setCaptureState}
        setErrorByCommandId={setErrorByCommandId}
        setKeybindingMutation={setKeybindingMutation}
        visibleCommands={visibleCommands}
      />
    );
  const resetAllButton =
    keymapState != null && keymapState.bindings.length > 0 ? (
      <div className="flex items-center justify-end gap-2">
        <Button
          color="secondary"
          disabled={resetKeybindingsMutation.isPending}
          onClick={() => {
            setResetAllError(null);
            setResetAllOpen(true);
          }}
        >
          <FormattedMessage
            id="settings.keyboardShortcuts.resetAll"
            defaultMessage="Reset all to defaults"
            description="Button label to reset all customized keyboard shortcuts to their defaults"
          />
        </Button>
      </div>
    ) : null;
  const closeResetAllDialog = (open: boolean) => {
    setResetAllOpen(open);
    if (!open) setResetAllError(null);
  };
  const resetAll = async () => {
    setResetAllError(null);
    try {
      await resetKeybindingsMutation.mutateAsync(undefined);
      setResetAllOpen(false);
    } catch (error) {
      setResetAllError(
        error instanceof Error
          ? error.message
          : intl.formatMessage({
              id: "settings.keyboardShortcuts.resetAllError",
              defaultMessage: "Failed to reset keyboard shortcuts",
              description:
                "Fallback error shown when resetting all customized keyboard shortcuts fails",
            }),
      );
    }
  };

  return (
    <SettingsContentLayout
      title={<SettingsSectionTitle slug="keyboard-shortcuts" />}
    >
      <SettingsGroup>
        <SettingsGroup.Content>
          {searchInput}
          <SettingsSurface className="overflow-hidden">
            {loadingState}
            {shortcutTable}
          </SettingsSurface>
          {resetAllButton}
        </SettingsGroup.Content>
      </SettingsGroup>
      <ResetAllShortcutsDialog
        error={resetAllError}
        isPending={resetKeybindingsMutation.isPending}
        open={resetAllOpen}
        onConfirm={resetAll}
        onOpenChange={closeResetAllDialog}
      />
    </SettingsContentLayout>
  );
}
