// Restored from ref/webview/assets/toast-signal-D5jJGQGW.js
// toast-signal-D5jJGQGW chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import {
  _appScopeG,
  _appScopeT,
  appScopeUnderscore,
} from "../boundaries/app-scope";
type ToastLevel = "info" | "success" | "warning" | "danger";
type ToastCloseHandle = {
  close(): void;
};
type ToastContentContext = {
  close(): void;
  level: ToastLevel;
};
type ToastOptions = {
  content?: (context: ToastContentContext) => ReactNode;
  description?: ReactNode;
  duration?: number;
  hasCloseButton?: boolean;
  id?: string;
  level?: ToastLevel;
  onRemove?: () => void;
  testId?: string;
};
type ToastRecord = {
  content?: ReactNode;
  description?: ReactNode;
  duration: number;
  hasCloseButton: boolean;
  isShown: boolean;
  level: ToastLevel;
  testId?: string;
  title: ReactNode | null;
};
type ToastApi = {
  info(title: ReactNode, options?: ToastOptions): ToastCloseHandle;
  success(title: ReactNode, options?: ToastOptions): ToastCloseHandle;
  warning(title: ReactNode, options?: ToastOptions): ToastCloseHandle;
  danger(title: ReactNode, options?: ToastOptions): ToastCloseHandle;
  custom(options: ToastOptions): ToastCloseHandle;
  closeAll(): void;
};
type ScopedToastStore = {
  get<T>(signal: unknown): T;
  set<T>(signal: unknown, updater: T | ((current: T) => T)): void;
  set<T>(
    familySignal: unknown,
    key: string,
    updater: T | ((current: T) => T),
  ): void;
};
const defaultToastDurationSeconds = 5;
const initialToastId = 1;
const defaultToastRecord: ToastRecord = {
  duration: defaultToastDurationSeconds,
  hasCloseButton: true,
  isShown: true,
  level: "info",
  title: null,
};
const noopCloseHandle: ToastCloseHandle = {
  close: () => {},
};
const noopToastApi: ToastApi = {
  info: () => noopCloseHandle,
  success: () => noopCloseHandle,
  warning: () => noopCloseHandle,
  danger: () => noopCloseHandle,
  custom: () => noopCloseHandle,
  closeAll: () => {},
};
const toastRemoveCallbacks = new Map<string, () => void>();
const toastIdsSignal = _appScopeG(_appScopeT, [] as string[]);
const nextToastIdSignal = _appScopeG(_appScopeT, initialToastId);
const toastRecordSignal = appScopeUnderscore(
  _appScopeT,
  () => defaultToastRecord,
);
const toastApiSignal = _appScopeG(_appScopeT, noopToastApi);
function showToast(
  store: ScopedToastStore,
  payload: {
    customId?: string;
    id: string;
    toast: ToastRecord;
  },
) {
  const currentIds = store.get<string[]>(toastIdsSignal);
  if (payload.customId != null) {
    const existingPrefix = `${payload.customId}-`;
    for (const toastId of currentIds) {
      if (toastId.startsWith(existingPrefix)) {
        store.set<ToastRecord>(toastRecordSignal, toastId, (toast) => ({
          ...toast,
          isShown: false,
        }));
      }
    }
  }
  store.set<number>(nextToastIdSignal, (toastId) => toastId + 1);
  store.set<ToastRecord>(toastRecordSignal, payload.id, payload.toast);
  store.set<string[]>(toastIdsSignal, [
    payload.id,
    ...currentIds.filter((toastId) => toastId !== payload.id),
  ]);
}
function hideToast(store: ScopedToastStore, toastId: string) {
  store.set<ToastRecord>(toastRecordSignal, toastId, (toast) => ({
    ...toast,
    isShown: false,
  }));
}
function removeToast(store: ScopedToastStore, toastId: string) {
  toastRemoveCallbacks.get(toastId)?.();
  toastRemoveCallbacks.delete(toastId);
  store.set<string[]>(toastIdsSignal, (toastIds) =>
    toastIds.filter((id) => id !== toastId),
  );
}
function hideAllToasts(store: ScopedToastStore) {
  for (const toastId of store.get<string[]>(toastIdsSignal)) {
    hideToast(store, toastId);
  }
}
function createToastApi(store: ScopedToastStore): ToastApi {
  return {
    info(title, options) {
      return createToast(store, title, options, "info");
    },
    success(title, options) {
      return createToast(store, title, options, "success");
    },
    warning(title, options) {
      return createToast(store, title, options, "warning");
    },
    danger(title, options) {
      return createToast(store, title, options, "danger");
    },
    custom(options) {
      return createToast(store, null, options, options.level ?? "info");
    },
    closeAll() {
      hideAllToasts(store);
    },
  };
}
function resolveToastContent(
  options: ToastOptions | undefined,
  close: () => void,
  level: ToastLevel,
) {
  if (options == null || !("content" in options)) return undefined;
  return options.content({
    close,
    level,
  });
}
function createToast(
  store: ScopedToastStore,
  title: ReactNode | null,
  options: ToastOptions | undefined,
  level: ToastLevel,
) {
  const nextToastId = store.get<number>(nextToastIdSignal);
  const toastId =
    options?.id == null ? `${nextToastId}` : `${options.id}-${nextToastId}`;
  const close = () => {
    hideToast(store, toastId);
  };
  if (options?.onRemove != null) {
    toastRemoveCallbacks.set(toastId, options.onRemove);
  }
  showToast(store, {
    customId: options?.id,
    id: toastId,
    toast: {
      content: resolveToastContent(options, close, level),
      description: options?.description,
      duration: options?.duration ?? defaultToastDurationSeconds,
      hasCloseButton: options?.hasCloseButton ?? true,
      isShown: true,
      level,
      testId: options?.testId,
      title,
    },
  });
  return {
    close,
  };
}

export {
  toastIdsSignal,
  toastRecordSignal,
  removeToast,
  toastApiSignal,
  createToastApi,
};
