// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Electron Codex application root shell. The real root mounts the entire UI
// inside a react-router MemoryRouter (AppRouterProvider) so the shell and its
// pages can use react-router hooks; the app's route signals (parseRouteLocation)
// drive which page renders. The full window-region panel tree is a follow-up
// restore — this keeps the router mount faithful to the bundle (CodexApp → Xne
// → HM → MemoryRouter).
import React, { type ReactNode } from "react";
import { AppPreloader } from "../ui/app-preloader";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";
import { once } from "../runtime/commonjs-interop";
import { AppRouterProvider } from "./app-router-provider";

export type CodexAppProps = {
  children?: ReactNode;
};

export function CodexApp({ children }: CodexAppProps = {}) {
  React.useEffect(() => {
    vscodeBridge.dispatchMessage("log-message", {
      level: "info",
      message: `[startup][renderer] restored CodexApp shell mounted after ${Math.round(performance.now())}ms`,
    });
    vscodeBridge.dispatchMessage("ready", {});
  }, []);

  return (
    <AppRouterProvider>
      {children != null ? (
        children
      ) : (
        <main
          className="bg-token-main-surface-primary text-token-text-primary flex h-full min-h-0 w-full min-w-0 flex-col"
          data-codex-app-root=""
        >
          <AppPreloader debugName="CodexApp" />
        </main>
      )}
    </AppRouterProvider>
  );
}

export const initAutomationsRuntimeChunk = once(() => {});
export const initAutomationsStateChunk = once(() => {});
export const initCodexAppChunk = once(() => {});
