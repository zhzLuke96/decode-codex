// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Tracks the document root font size (the px value of 1rem) and re-renders
// subscribers whenever it changes, so rem-based layout math stays accurate.
import { useSyncExternalStore } from "react";

const FALLBACK_REM_PX = 16;

let currentRemPx = FALLBACK_REM_PX;
let isListeningForResize = false;
const subscribers = new Set<() => void>();

function readRootFontSizePx(): number {
  if (typeof window === "undefined") return FALLBACK_REM_PX;
  const fontSize = Number.parseFloat(
    window.getComputedStyle(document.documentElement).fontSize,
  );
  return Number.isNaN(fontSize) || fontSize <= 0 ? FALLBACK_REM_PX : fontSize;
}

function notifySubscribers(): void {
  subscribers.forEach((listener) => listener());
}

function handleResize(): void {
  const nextRemPx = readRootFontSizePx();
  if (nextRemPx !== currentRemPx) {
    currentRemPx = nextRemPx;
    notifySubscribers();
  }
}

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  if (typeof window !== "undefined" && !isListeningForResize) {
    isListeningForResize = true;
    currentRemPx = readRootFontSizePx();
    window.addEventListener("resize", handleResize);
  }
  return () => {
    subscribers.delete(listener);
    if (
      typeof window !== "undefined" &&
      isListeningForResize &&
      subscribers.size === 0
    ) {
      window.removeEventListener("resize", handleResize);
      isListeningForResize = false;
    }
  };
}

function getSnapshot(): number {
  return currentRemPx;
}

function getServerSnapshot(): number {
  return FALLBACK_REM_PX;
}

export function useRemUnitMultiplier(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
