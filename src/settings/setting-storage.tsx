// Restored from ref/webview/assets/setting-storage-DpOcYU7S.js
// setting-storage-DpOcYU7S chunk restored from the Codex webview bundle.
import { _appScopeS, _appScopeT } from "../boundaries/app-scope";
import {
  _vscodeApiA,
  vscodeApiF,
  vscodeApiN,
  vscodeApiU,
} from "../boundaries/vscode-api";
type SettingDefinition<T> = {
  default: T;
  key: string;
};
type SettingsPayload = {
  values?: Record<string, unknown>;
};
type SettingsQueryResult = {
  data?: SettingsPayload;
  isLoading: boolean;
};
type SettingsQueryReader = (query: unknown) => SettingsQueryResult;
type QuerySnapshot<T> = {
  cancel(): Promise<void>;
  getData(): T | undefined;
  invalidate(): Promise<void>;
  queryKey: readonly unknown[];
  setData(data: T | undefined): void;
};
type ScopedSettingsStore = {
  query: {
    snapshot<T>(query: unknown): QuerySnapshot<T>;
  };
};
type WriteSettingOptions = {
  optimistic?: boolean;
};
const settingsQuery = _vscodeApiA(_appScopeT, "get-settings", {
  networkMode: "always",
  staleTime: vscodeApiU.FIVE_SECONDS,
});
function valueFromSettings<T>(
  payload: SettingsPayload | undefined,
  setting: SettingDefinition<T>,
) {
  return (payload?.values?.[setting.key] as T | undefined) ?? setting.default;
}
function useSettingValue<T>(setting: SettingDefinition<T>) {
  return valueFromSettings(
    (_appScopeS(settingsQuery) as SettingsQueryResult).data,
    setting,
  );
}
async function writeSettingValue<T>(
  store: ScopedSettingsStore,
  setting: SettingDefinition<T>,
  value: T,
  options?: WriteSettingOptions,
) {
  const settingsSnapshot = store.query.snapshot<SettingsPayload>(settingsQuery);
  await settingsSnapshot.cancel();
  const previousSettings = settingsSnapshot.getData();
  const shouldOptimisticallyWrite = options?.optimistic ?? true;
  if (shouldOptimisticallyWrite) {
    settingsSnapshot.setData({
      values: {
        ...previousSettings?.values,
        [setting.key]: value,
      },
    });
  }
  try {
    await setSettingValue(setting, value);
    if (!shouldOptimisticallyWrite) {
      settingsSnapshot.setData({
        values: {
          ...previousSettings?.values,
          [setting.key]: value,
        },
      });
    }
  } catch (error) {
    settingsSnapshot.setData(previousSettings);
    throw error;
  } finally {
    await settingsSnapshot.invalidate();
    vscodeApiF.dispatchMessage("query-cache-invalidate", {
      queryKey: [...settingsSnapshot.queryKey],
    });
  }
}
async function readSettingValue<T>(setting: SettingDefinition<T>) {
  const response = (await vscodeApiN("get-setting", {
    params: {
      key: setting.key,
    },
  })) as {
    value?: T | null;
  };
  return response.value ?? setting.default;
}
function useSettingsLoading() {
  return (_appScopeS(settingsQuery) as SettingsQueryResult).isLoading;
}
function setCachedSettingValue<T>(
  store: ScopedSettingsStore,
  setting: SettingDefinition<T>,
  value: T,
) {
  const settingsSnapshot = store.query.snapshot<SettingsPayload>(settingsQuery);
  const currentSettings = settingsSnapshot.getData();
  settingsSnapshot.setData({
    values: {
      ...currentSettings?.values,
      [setting.key]: value,
    },
  });
}
async function setSettingValue<T>(setting: SettingDefinition<T>, value: T) {
  await vscodeApiN("set-setting", {
    params: {
      key: setting.key,
      value,
    },
  });
}
function getSettingValue<T>(
  readQuery: SettingsQueryReader,
  setting: SettingDefinition<T>,
) {
  return valueFromSettings(readQuery(settingsQuery).data, setting);
}
export {
  useSettingValue,
  writeSettingValue,
  readSettingValue,
  useSettingsLoading,
  setCachedSettingValue,
  setSettingValue,
  getSettingValue,
};
