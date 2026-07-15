// Restored from ref/webview/assets/tooltip-B-u9JAuV.js

import React from "react";
import { TOOLTIP_DISMISS_EVENT } from "../../utils/tooltip-dismiss";
import type {
  TooltipContextValue,
  TooltipProviderProps,
  TooltipVariant,
} from "./types";
export const TooltipRerenderContext = React.createContext<number | undefined>(
  undefined,
);
export const TooltipDelayContext = React.createContext<number | null>(null);
export const TooltipContext = React.createContext<TooltipContextValue | null>(
  null,
);
export function TooltipProvider({
  delayDuration = 700,
  skipDelayDuration = 300,
  children,
}: TooltipProviderProps) {
  const [rerenderVersion, setRerenderVersion] = React.useState<number | null>(
    null,
  );
  const [activeTooltipId, setActiveTooltipIdState] = React.useState<
    string | null
  >(null);
  const [activeTooltipVariant, setActiveTooltipVariant] =
    React.useState<TooltipVariant | null>(null);
  const [activeSkipDelayKey, setActiveSkipDelayKey] = React.useState<
    string | null
  >(null);
  const [skipDelayActive, setSkipDelayActive] = React.useState(false);
  const activeTooltipIdRef = React.useRef<string | null>(null);
  const hoverHandoffLockTooltipIdRef = React.useRef<string | null>(null);
  const mountedRef = React.useRef(true);
  const skipDelayTimeoutRef = React.useRef<number | null>(null);
  const clearSkipDelayTimeout = () => {
    if (skipDelayTimeoutRef.current != null && typeof window !== "undefined") {
      window.clearTimeout(skipDelayTimeoutRef.current);
      skipDelayTimeoutRef.current = null;
    }
  };
  const setActiveTooltipId = (
    tooltipId: string | null,
    skipDelayKey = "default",
    variant: TooltipVariant | null = null,
  ) => {
    if (!mountedRef.current) {
      return;
    }
    activeTooltipIdRef.current = tooltipId;
    if (
      tooltipId == null ||
      hoverHandoffLockTooltipIdRef.current !== tooltipId
    ) {
      hoverHandoffLockTooltipIdRef.current = null;
    }
    setActiveTooltipIdState(tooltipId);
    setActiveTooltipVariant(variant);
    clearSkipDelayTimeout();
    if (tooltipId != null) {
      setActiveSkipDelayKey(skipDelayKey);
      setSkipDelayActive(true);
      return;
    }
    if (skipDelayDuration === 0 || typeof window === "undefined") {
      setActiveSkipDelayKey(null);
      setSkipDelayActive(false);
      return;
    }
    skipDelayTimeoutRef.current = window.setTimeout(() => {
      skipDelayTimeoutRef.current = null;
      setActiveSkipDelayKey(null);
      setSkipDelayActive(false);
    }, skipDelayDuration);
  };
  const clearActiveTooltipId = (tooltipId: string) => {
    if (activeTooltipIdRef.current === tooltipId) {
      hoverHandoffLockTooltipIdRef.current = null;
      setActiveTooltipId(null);
    }
  };
  const clearHoverHandoffLock = (tooltipId: string) => {
    if (hoverHandoffLockTooltipIdRef.current === tooltipId) {
      hoverHandoffLockTooltipIdRef.current = null;
    }
  };
  const isHoverOpenBlocked = (tooltipId: string) =>
    hoverHandoffLockTooltipIdRef.current != null &&
    hoverHandoffLockTooltipIdRef.current !== tooltipId;
  const setHoverHandoffLockTooltipId = (tooltipId: string) => {
    hoverHandoffLockTooltipIdRef.current = tooltipId;
  };
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    mountedRef.current = true;
    const handleTooltipDismiss = () => {
      setRerenderVersion((version) => (version ?? 0) + 1);
      activeTooltipIdRef.current = null;
      hoverHandoffLockTooltipIdRef.current = null;
      setActiveTooltipIdState(null);
      setActiveTooltipVariant(null);
      setActiveSkipDelayKey(null);
      clearSkipDelayTimeout();
      setSkipDelayActive(false);
    };
    window.addEventListener(TOOLTIP_DISMISS_EVENT, handleTooltipDismiss);
    return () => {
      mountedRef.current = false;
      window.removeEventListener(TOOLTIP_DISMISS_EVENT, handleTooltipDismiss);
      clearSkipDelayTimeout();
    };
  }, [clearSkipDelayTimeout]);
  const contextValue: TooltipContextValue = {
    activeSkipDelayKey,
    activeTooltipId,
    activeTooltipVariant,
    clearActiveTooltipId,
    clearHoverHandoffLock,
    isHoverOpenBlocked,
    setActiveTooltipId,
    setHoverHandoffLockTooltipId,
    skipDelayActive,
  };
  return (
    <TooltipRerenderContext.Provider value={rerenderVersion ?? undefined}>
      <TooltipDelayContext.Provider value={delayDuration}>
        <TooltipContext.Provider value={contextValue}>
          {children}
        </TooltipContext.Provider>
      </TooltipDelayContext.Provider>
    </TooltipRerenderContext.Provider>
  );
}
