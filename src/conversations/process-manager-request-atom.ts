// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scope signal holding the most recent request to open the process manager
// for a given chat process (set by the inline PID badge, read by the host).
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";

export interface ProcessManagerRequest {
  processId: string;
  requestId: number;
}

export const processManagerRequestSignal =
  createAppScopeSignal<ProcessManagerRequest | null>(appScopeRoot, () => null);

export function initProcessManagerRequestSignalChunk(): void {}
