// Restored from ref/webview/assets/git-settings-Bv6LnZbi.js
// Shared setting mutation helper for the Git settings page.
import { appScopeO, appScopeT } from "../../boundaries/app-scope";
import { vscodeApiUnderscore } from "../../boundaries/vscode-api";
import { writeSettingValue } from "../setting-storage";
import { toastApiSignal } from "../../ui/toast-signal";
import { useIntl } from "../../vendor/react-intl";
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};
type SettingMutationOptions<T> = {
  errorMessage: MessageDescriptor;
  onSuccess?: () => void;
  setting: unknown;
  successMessage: MessageDescriptor | ((value: T) => MessageDescriptor);
};
export function useSettingMutation<T>({
  errorMessage,
  onSuccess,
  setting,
  successMessage,
}: SettingMutationOptions<T>) {
  const store = appScopeO(appScopeT);
  const intl = useIntl();
  return vscodeApiUnderscore({
    mutationFn: (value: T) => writeSettingValue(store, setting as never, value),
    onSuccess: (_result: unknown, value: T) => {
      onSuccess?.();
      const message =
        typeof successMessage === "function"
          ? successMessage(value)
          : successMessage;
      store.get(toastApiSignal).success(intl.formatMessage(message));
    },
    onError: () => {
      store.get(toastApiSignal).danger(intl.formatMessage(errorMessage));
    },
  });
}
