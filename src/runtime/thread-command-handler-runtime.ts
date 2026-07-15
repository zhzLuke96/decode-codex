// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// React hook for subscribing thread-scoped host command messages.
import * as React from "react";

import { ElectronHostMessageBridge } from "./app-main-host-runtime";

export type ThreadCommandMessage = {
  type: string;
  [key: string]: unknown;
};

export type ThreadCommandDispatch = (
  type: string,
  payload?: Record<string, unknown>,
) => void;

export type ThreadCommandHandler<
  TMessage extends ThreadCommandMessage = ThreadCommandMessage,
> = (message: TMessage, dispatchMessage: ThreadCommandDispatch) => void;

type ReactWithEffectEvent = typeof React & {
  useEffectEvent?: <TArgs extends unknown[], TResult>(
    handler: (...args: TArgs) => TResult,
  ) => (...args: TArgs) => TResult;
};

const EMPTY_DEPENDENCIES: React.DependencyList = [];

function useStableEffectHandler<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult,
): (...args: TArgs) => TResult {
  const handlerRef = React.useRef(handler);
  handlerRef.current = handler;

  const stableHandler = React.useCallback(
    (...args: TArgs) => handlerRef.current(...args),
    [],
  );

  return (
    (React as ReactWithEffectEvent).useEffectEvent?.(handler) ?? stableHandler
  );
}

export function useThreadCommandHandler<
  TMessage extends ThreadCommandMessage = ThreadCommandMessage,
>(
  commandType: string,
  handler: ThreadCommandHandler<TMessage>,
  dependencies: React.DependencyList = EMPTY_DEPENDENCIES,
): void {
  const bridge = React.useMemo(
    () => ElectronHostMessageBridge.getInstance(),
    [],
  );
  const commandHandler = useStableEffectHandler(handler);

  React.useEffect(
    () => bridge.subscribe(commandType, commandHandler),
    [bridge, commandType, ...dependencies],
  );
}
