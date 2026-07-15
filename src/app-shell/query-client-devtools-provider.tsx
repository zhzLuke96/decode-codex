// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Provides the app-wide react-query client (no refetch-on-focus, capped retries
// that only retry retryable HTTP statuses) and, when devtools are enabled for the
// build flavor, a resizable bottom panel toggled by the host "toggle-query-devtools"
// message. The devtools panel itself is stubbed to render nothing in this build.
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QueryClient } from "../runtime/query-client";
import { QueryClientProvider } from "../runtime/query-client/react-query-context";
import { useHostMessageSubscription } from "../runtime/app-main-host-runtime";
import {
  getBuildFlavor,
  HostRequestError,
  queryDevtoolsToggleEventSource,
  useIsQueryDevtoolsEnabled,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_QUERY_RETRIES = 3;
const DEVTOOLS_MIN_HEIGHT = 200;
const DEVTOOLS_MAX_HEIGHT_FRACTION = 0.8;

function isRetryableStatus(status: number): boolean {
  return (
    status === 408 ||
    status === 425 ||
    status === 429 ||
    (status >= 500 && status <= 599)
  );
}

function getErrorStatus(error: unknown): number | null {
  return error instanceof HostRequestError ||
    (typeof error === "object" &&
      error !== null &&
      "status" in error &&
      typeof (error as { status?: unknown }).status === "number")
    ? (error as { status: number }).status
    : null;
}

const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: unknown) => {
        if (failureCount >= MAX_QUERY_RETRIES) return false;
        const status = getErrorStatus(error);
        return !status || isRetryableStatus(status);
      },
    },
  },
};

function createQueryClient(): QueryClient {
  return new QueryClient(queryClientConfig);
}

const ReactQueryDevtoolsPanel: React.FC<{ style?: React.CSSProperties }> = () =>
  null;

function getInitialDevtoolsHeight(): number {
  return Math.round(window.innerHeight * 0.5);
}

interface QueryDevtoolsPanelProps {
  isOpen: boolean;
}

function QueryDevtoolsPanel({ isOpen }: QueryDevtoolsPanelProps) {
  const [height, setHeight] = useState(getInitialDevtoolsHeight);
  if (!isOpen) return null;

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const startY = event.clientY;
    const startHeight = height;
    const maxHeight = Math.round(
      window.innerHeight * DEVTOOLS_MAX_HEIGHT_FRACTION,
    );
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const delta = startY - moveEvent.clientY;
      setHeight(
        Math.min(Math.max(startHeight + delta, DEVTOOLS_MIN_HEIGHT), maxHeight),
      );
    };
    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return createPortal(
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div
        className="h-2 cursor-row-resize bg-token-border/60"
        onPointerDown={handlePointerDown}
      />
      <div
        className="max-h-[80vh] min-h-[200px] overflow-auto"
        style={{ height }}
      >
        <ReactQueryDevtoolsPanel style={{ height: "100%" }} />
      </div>
    </div>,
    document.body,
  );
}

function noopDevtoolsEvent(): void {}

function getDevtoolsEventListener(): () => void {
  return noopDevtoolsEvent;
}

function registerDevtoolsEventListener(): void {
  queryDevtoolsToggleEventSource.setEventListener(getDevtoolsEventListener);
}

function toggleOpen(previous: boolean): boolean {
  return !previous;
}

export interface QueryClientDevtoolsProviderProps {
  children: React.ReactNode;
}

export function QueryClientDevtoolsProvider({
  children,
}: QueryClientDevtoolsProviderProps) {
  const isDevtoolsEnabled = useIsQueryDevtoolsEnabled({
    buildFlavor: getBuildFlavor(),
    isDev: false,
  });
  const [isDevtoolsOpen, setIsDevtoolsOpen] = useState(false);

  useHostMessageSubscription(
    "toggle-query-devtools",
    () => {
      setIsDevtoolsOpen(toggleOpen);
    },
    [],
  );

  const [queryClient] = useState(createQueryClient);
  useEffect(registerDevtoolsEventListener, []);

  const devtools = isDevtoolsEnabled ? (
    <QueryDevtoolsPanel isOpen={isDevtoolsOpen} />
  ) : null;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {devtools}
    </QueryClientProvider>
  );
}
