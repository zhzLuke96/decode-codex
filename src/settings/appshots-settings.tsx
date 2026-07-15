// Restored from ref/webview/assets/appshots-settings-DWXasG5t.js
// Settings page for Appshots capture, hotkey configuration, and sound effects.
import React, { type ReactNode } from "react";
import {
  _appScopeM as createAppScopeQuery,
  _appScopeO as useAppScopeContext,
  appScopeRoot,
  useAppScopeValue,
} from "../boundaries/app-scope";
import {
  vscodeApiU as queryTimes,
  vscodeApiUnderscore as useMutation,
} from "../boundaries/vscode-api";
import { appshotSettingDefinitions } from "../boundaries/src-l0hb-mz-p";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../vendor/react-intl";
import { useSettingValue, writeSettingValue } from "./setting-storage";
import { CheckMdIcon } from "../icons/check-md-icon";
import { appServices } from "../boundaries/rpc.facade";
import { useStatsigLoading } from "../vendor/statsig-current-runtime";
import {
  ___productLoggerT as trackProductEvent,
  productLoggerX as appshotShortcutChangedEvent,
} from "../analytics/product-logger";
import { invalidateQueriesAndBroadcast } from "../utils/invalidate-queries-and-broadcast";
import { usePlatform } from "../utils/use-platform";
import { getCommandShortcutLabel } from "../utils/electron-menu-shortcuts";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { selectedHostAppshotAvailability } from "../features/appshot/availability";
import { appshotLogo } from "../utils/appshot-logo";
import { Toggle } from "../utils/toggle";
import { SettingsMenuButton, SettingsSectionTitle } from "./settings-shared";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsControlRow } from "../ui/settings-row";
import { SettingsSurface } from "../utils/settings-surface";
import { SettingsGroup } from "../utils/settings-group";
const appshotDemoVideoUrl =
  "" + new URL("appshot-demo-DcV9m9GT.mp4", import.meta.url).href;
const APP_SHOT_HOTKEY_STATE_QUERY_KEY = ["appshot-hotkey-state"] as const;
type AppshotHotkey = "DoubleCommand" | "DoubleOption" | "DoubleShift";
type AppshotHotkeySource = "capture" | "disable";
type AppshotHotkeyState = {
  configuredHotkey: AppshotHotkey | string | null;
  isActive: boolean;
  supported: boolean;
};
type SetAppshotHotkeyVariables = {
  hotkey: AppshotHotkey | null;
};
type SetAppshotHotkeyResult = {
  error?: string;
  state: AppshotHotkeyState;
  success: boolean;
};
type AppshotHotkeysService = {
  getState: () => AppshotHotkeyState | Promise<AppshotHotkeyState>;
  setHotkey: (hotkey: AppshotHotkey | null) => Promise<SetAppshotHotkeyResult>;
};
type AppScopeContext = {
  query: {
    setData: (query: unknown, data: unknown) => void;
  };
};
type MutationResult<TVariables, TResult> = {
  isPending: boolean;
  mutateAsync: (variables: TVariables) => Promise<TResult>;
};
type UseMutation = <TVariables, TResult>(options: {
  mutationFn: (variables: TVariables) => Promise<TResult>;
  onSuccess?: (result: TResult) => void;
}) => MutationResult<TVariables, TResult>;
const HOTKEY_OPTIONS: Array<{
  hotkey: AppshotHotkey;
  label: string;
}> = [
  {
    hotkey: "DoubleCommand",
    label: "⌘ + ⌘",
  },
  {
    hotkey: "DoubleOption",
    label: "⌥ + ⌥",
  },
  {
    hotkey: "DoubleShift",
    label: "⇧ + ⇧",
  },
];
const appshotMessages = defineMessages({
  captureTitle: {
    id: "settings.appshots.hero.title",
    defaultMessage: "Take an appshot to show Codex your frontmost window",
    description: "Title for the Appshots settings explainer",
  },
  soundEffectLabel: {
    id: "settings.appshots.soundEffect.label",
    defaultMessage: "Play sound effect",
    description: "Label for the Appshots sound effect setting row",
  },
});
const appshotHotkeyStateQuery = createAppScopeQuery(appScopeRoot, () => ({
  queryKey: APP_SHOT_HOTKEY_STATE_QUERY_KEY,
  queryFn: async (): Promise<AppshotHotkeyState> => {
    const hotkeys = appServices.appshotHotkeys as
      | AppshotHotkeysService
      | undefined;
    return hotkeys == null
      ? {
          supported: false,
          configuredHotkey: null,
          isActive: false,
        }
      : hotkeys.getState();
  },
  staleTime: queryTimes.ONE_MINUTE,
}));
async function setAppshotHotkey({
  hotkey,
}: SetAppshotHotkeyVariables): Promise<SetAppshotHotkeyResult> {
  const hotkeys = appServices.appshotHotkeys as
    | AppshotHotkeysService
    | undefined;
  if (hotkeys == null) {
    throw new Error("Appshot hotkeys are unavailable");
  }
  return hotkeys.setHotkey(hotkey);
}
function AppshotHotkeyDescription({
  hotkey,
}: {
  hotkey: AppshotHotkey;
}): ReactNode {
  switch (hotkey) {
    case "DoubleCommand":
      return (
        <FormattedMessage
          id="settings.appshotHotkey.description.command"
          defaultMessage="Press both ⌘ keys simultaneously"
          description="Description shown when the appshot hotkey is both Command keys"
        />
      );
    case "DoubleOption":
      return (
        <FormattedMessage
          id="settings.appshotHotkey.description.option"
          defaultMessage="Press both ⌥ keys simultaneously"
          description="Description shown when the appshot hotkey is both Option keys"
        />
      );
    case "DoubleShift":
      return (
        <FormattedMessage
          id="settings.appshotHotkey.description.shift"
          defaultMessage="Press both ⇧ keys simultaneously"
          description="Description shown when the appshot hotkey is both Shift keys"
        />
      );
  }
}
function AppshotHotkeySettingRow(): ReactNode {
  const appScopeContext = useAppScopeContext(appScopeRoot) as AppScopeContext;
  const isAppshotAvailable = useAppScopeValue(
    selectedHostAppshotAvailability,
  ) as boolean;
  const invalidateQueries = invalidateQueriesAndBroadcast();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const { data } = useAppScopeValue(appshotHotkeyStateQuery) as {
    data?: AppshotHotkeyState;
  };
  const typedUseMutation = useMutation as UseMutation;
  const hotkeyMutation = typedUseMutation<
    SetAppshotHotkeyVariables,
    SetAppshotHotkeyResult
  >({
    mutationFn: setAppshotHotkey,
    onSuccess: (result) => {
      appScopeContext.query.setData(appshotHotkeyStateQuery, result.state);
      void invalidateQueries(APP_SHOT_HOTKEY_STATE_QUERY_KEY);
    },
  });
  if (!isAppshotAvailable || data?.supported === false) {
    return null;
  }
  const updateHotkey = async (
    hotkey: AppshotHotkey | null,
    source: AppshotHotkeySource,
  ) => {
    setErrorMessage(null);
    try {
      const result = await hotkeyMutation.mutateAsync({
        hotkey,
      });
      if (!result.success) {
        setErrorMessage(result.error ?? null);
        return;
      }
      trackProductEvent(appScopeContext, appshotShortcutChangedEvent, {
        hotkey: hotkey ?? undefined,
        enabled: hotkey != null,
        source,
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : String(error));
    }
  };
  const configuredHotkey = data?.configuredHotkey ?? null;
  const selectedOption =
    HOTKEY_OPTIONS.find((option) => option.hotkey === configuredHotkey) ?? null;
  const selectedHotkeyLabel =
    selectedOption?.label ??
    (configuredHotkey == null
      ? null
      : getCommandShortcutLabel(configuredHotkey));
  const selectedHotkey = selectedOption?.hotkey ?? null;
  const description =
    selectedHotkey == null && errorMessage == null ? undefined : (
      <div className="flex flex-col gap-1">
        {selectedHotkey == null ? null : (
          <AppshotHotkeyDescription hotkey={selectedHotkey} />
        )}
        {errorMessage ? (
          <span className="text-token-error-foreground">{errorMessage}</span>
        ) : null}
      </div>
    );
  const triggerButton = (
    <SettingsMenuButton
      disabled={hotkeyMutation.isPending}
      style={{
        width: 80,
      }}
    >
      {selectedHotkeyLabel ?? (
        <FormattedMessage
          id="settings.appshotHotkey.none"
          defaultMessage="None"
          description="Label for disabling the appshot hotkey"
        />
      )}
    </SettingsMenuButton>
  );
  return (
    <SettingsControlRow
      label={
        <FormattedMessage
          id="settings.appshotHotkey.label"
          defaultMessage="Hotkey"
          description="Label for appshot hotkey setting"
        />
      }
      description={description}
      control={
        <DropdownMenu
          align="end"
          contentClassName="min-w-20"
          disabled={hotkeyMutation.isPending}
          triggerButton={triggerButton}
        >
          <Dropdown.Section>
            {HOTKEY_OPTIONS.map((option) => (
              <Dropdown.Item
                key={option.hotkey}
                RightIcon={
                  option.hotkey === selectedHotkey ? CheckMdIcon : undefined
                }
                onSelect={() => {
                  setErrorMessage(null);
                  if (option.hotkey !== configuredHotkey) {
                    void updateHotkey(option.hotkey, "capture");
                  }
                }}
              >
                {option.label}
              </Dropdown.Item>
            ))}
            <Dropdown.Item
              RightIcon={configuredHotkey == null ? CheckMdIcon : undefined}
              onSelect={() => {
                setErrorMessage(null);
                if (configuredHotkey != null) {
                  void updateHotkey(null, "disable");
                }
              }}
            >
              <FormattedMessage
                id="settings.appshotHotkey.none"
                defaultMessage="None"
                description="Label for disabling the appshot hotkey"
              />
            </Dropdown.Item>
          </Dropdown.Section>
        </DropdownMenu>
      }
    />
  );
}
function AppshotSoundEffectSettingRow(): ReactNode {
  const appScopeContext = useAppScopeContext(appScopeRoot);
  const intl = useIntl();
  const soundEffectEnabled = useSettingValue(
    appshotSettingDefinitions.soundEnabled,
  ) as boolean;
  const ariaLabel = intl.formatMessage({
    id: "settings.appshots.soundEffect.ariaLabel",
    defaultMessage: "Play appshot sound effect",
    description: "Accessible label for the Appshots sound effect toggle",
  });
  const updateSoundEffect = (enabled: boolean) => {
    void writeSettingValue(
      appScopeContext,
      appshotSettingDefinitions.soundEnabled,
      enabled,
    );
  };
  return (
    <SettingsControlRow
      label={<FormattedMessage {...appshotMessages.soundEffectLabel} />}
      control={
        <Toggle
          ariaLabel={ariaLabel}
          checked={soundEffectEnabled}
          onChange={updateSoundEffect}
        />
      }
    />
  );
}
export function AppshotsSettings(): ReactNode {
  const intl = useIntl();
  const isAppshotAvailable = useAppScopeValue(
    selectedHostAppshotAvailability,
  ) as boolean;
  const isStatsigLoading = useStatsigLoading();
  const { isLoading: isPlatformLoading } = usePlatform();
  if (isStatsigLoading || isPlatformLoading || !isAppshotAvailable) {
    return null;
  }
  const videoLabel = intl.formatMessage({
    id: "settings.appshots.demoVideo.label",
    defaultMessage: "Appshots walkthrough video",
    description: "Accessible label for the Appshots settings walkthrough video",
  });
  return (
    <SettingsContentLayout title={<SettingsSectionTitle slug="appshots" />}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="grid gap-4 self-start">
          <SettingsGroup>
            <SettingsGroup.Content>
              <SettingsSurface className="divide-y-0">
                <div className="flex items-start gap-2 p-2">
                  <img
                    alt=""
                    aria-hidden={true}
                    className="h-[41.4px] w-[47.7px] shrink-0 object-contain"
                    src={appshotLogo}
                  />
                  <div className="flex min-w-0 flex-col gap-[2.5pt]">
                    <div className="text-base leading-[16pt] font-medium text-token-text-primary">
                      <FormattedMessage {...appshotMessages.captureTitle} />
                    </div>
                    <div className="text-sm text-token-text-secondary">
                      <FormattedMessage
                        id="settings.appshots.hero.description"
                        defaultMessage="Appshots include visual and text content, including text scrolled offscreen."
                        description="Description for the Appshots settings explainer"
                      />
                    </div>
                  </div>
                </div>
              </SettingsSurface>
            </SettingsGroup.Content>
          </SettingsGroup>
          <SettingsGroup>
            <SettingsGroup.Content>
              <SettingsSurface variant="secondary">
                <AppshotHotkeySettingRow />
                <AppshotSoundEffectSettingRow />
              </SettingsSurface>
            </SettingsGroup.Content>
          </SettingsGroup>
        </div>
        <SettingsGroup className="w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch">
          <SettingsGroup.Content>
            <SettingsSurface className="divide-y-0 overflow-hidden rounded-none border-0">
              <video
                aria-label={videoLabel}
                autoPlay={true}
                className="aspect-[901/1095] w-full bg-token-bg-secondary object-cover"
                loop={true}
                muted={true}
                playsInline={true}
                preload="auto"
                src={appshotDemoVideoUrl}
              />
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      </div>
    </SettingsContentLayout>
  );
}
