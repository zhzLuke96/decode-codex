// Restored from ref/webview/assets/thread-scroll-layout-BNp7nttn.js
// Type surface for the thread scroll layout restored from the Codex webview bundle.
import type React from "react";
import type { motion } from "framer-motion";

type MotionDivStyle = React.ComponentProps<typeof motion.div>["style"];

export type MotionX = NonNullable<MotionDivStyle>["x"];

export type ThreadContentStyle = MotionDivStyle & {
  "--thread-wide-block-inline-shift"?: string;
};

export type ThreadScrollLayoutHandle = {
  scrollToBottom(): void;
};

type ScrollTopLoadResult = "stop" | void | null | undefined;

export type ThreadScrollLayoutProps = {
  children: React.ReactNode;
  contentX?: MotionX;
  footer?: React.ReactNode;
  hasLiveMcpAppFrame?: boolean;
  initialOffset?: number;
  onScroll?: (distanceFromBottomPx: number, isAtBottom: boolean) => void;
  onUserScrollToTop?: () => ScrollTopLoadResult | Promise<ScrollTopLoadResult>;
  ref?: React.Ref<ThreadScrollLayoutHandle>;
  remoteHostedPIPAnchorHostId?: string | null;
};

export type BottomPanelScrollSync = (
  onScrollDelta: (deltaPx: number) => void,
) => void | (() => void);

export type PendingScrollPreservation = {
  distanceFromBottomPx: number;
  scrollHeightPx: number;
  wheelDistanceFromBottomPx: number;
};
