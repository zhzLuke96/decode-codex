// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Context used by app-shell descendants that need to be notified when the
// bottom panel's animated height changes.
import { createContext, type Context } from "react";

export type BottomPanelHeightSubscriber = (delta: number) => void;
export type SubscribeBottomPanelHeight = (
  subscriber: BottomPanelHeightSubscriber,
) => () => void;

export const appShellBottomPanelHeightSubscriberContext: Context<SubscribeBottomPanelHeight | null> =
  createContext<SubscribeBottomPanelHeight | null>(null);

export function initAppShellBottomPanelHeightSubscriberContextChunk(): void {}
