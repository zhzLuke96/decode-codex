// Restored from ref/webview/assets/use-app-server-connection-state-urqZ7B3X.js
// use-app-server-connection-state-urqZ7B3X chunk restored from the Codex webview bundle.
import { _appScopeA as useScopedSignalValue } from "../boundaries/app-scope";
import {
  appServerConnectionErrorSignal,
  appServerConnectionManagerSignal,
  appServerConnectionStateSignal,
  appServerVersionSignal,
  installedCodexVersionSignal,
} from "../boundaries/thread-context-inputs.facade";
type AppServerConnectionState = {
  appServerVersion: unknown;
  error: unknown;
  installedCodexVersion: unknown;
  state: unknown;
};
export function useAppServerConnectionState(
  hostId: string,
): AppServerConnectionState {
  const appServerManager = useScopedSignalValue(
    appServerConnectionManagerSignal,
    hostId,
  );
  const connectionState = useScopedSignalValue(
    appServerConnectionStateSignal,
    hostId,
  );
  const appServerVersion = useScopedSignalValue(appServerVersionSignal, hostId);
  const error = useScopedSignalValue(appServerConnectionErrorSignal, hostId);
  const installedCodexVersion = useScopedSignalValue(
    installedCodexVersionSignal,
    hostId,
  );
  return {
    appServerVersion,
    error,
    installedCodexVersion,
    state: appServerManager == null ? null : connectionState,
  };
}
