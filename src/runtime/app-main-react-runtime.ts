// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// React, JSX, and React compiler runtime loaders shared by app-main chunks.
import * as React from "react";

type ReactCompilerRuntime = {
  c(cacheSize: number): unknown[];
};
type ReactElementFactoryRuntime = {
  Fragment: typeof React.Fragment;
  jsx: (
    type: React.ElementType,
    props: Record<string, unknown> | null | undefined,
    key?: React.Key,
  ) => React.ReactElement;
  jsxs: (
    type: React.ElementType,
    props: Record<string, unknown> | null | undefined,
    key?: React.Key,
  ) => React.ReactElement;
};
type ReactWithCompilerInternals = typeof React & {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE?: {
    H?: {
      useMemoCache?: (cacheSize: number) => unknown[];
    };
  };
};

const reactCompilerRuntime: ReactCompilerRuntime = {
  c(cacheSize) {
    const compilerDispatcher = (React as ReactWithCompilerInternals)
      .__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE?.H;
    if (compilerDispatcher?.useMemoCache == null) {
      throw Error("React compiler runtime is unavailable");
    }
    return compilerDispatcher.useMemoCache(cacheSize);
  },
};

function createJsxElement(
  type: React.ElementType,
  props: Record<string, unknown> | null | undefined,
  key?: React.Key,
): React.ReactElement {
  return React.createElement(
    type,
    key === undefined ? props : { ...props, key },
  );
}

const reactElementFactoryRuntime: ReactElementFactoryRuntime = {
  Fragment: React.Fragment,
  jsx: createJsxElement,
  jsxs: createJsxElement,
};

export function initReactRuntime(): typeof React {
  return React;
}

export function getJsxRuntime(): ReactElementFactoryRuntime {
  return reactElementFactoryRuntime;
}

export function getChunkModuleExports(
  _chunkName?: string,
): ReactCompilerRuntime {
  return reactCompilerRuntime;
}

export function noopReactRuntimeCallback(): void {}
