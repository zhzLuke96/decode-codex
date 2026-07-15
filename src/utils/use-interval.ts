// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// React interval hook that keeps the latest callback without restarting the timer.
import { useEffect, useRef } from "react";

export function useInterval(
  callback: () => void,
  delayMs: number | null | undefined,
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delayMs == null) return;

    const intervalId = window.setInterval(() => {
      callbackRef.current();
    }, delayMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [delayMs]);
}

export function initUseIntervalChunk(): void {}
