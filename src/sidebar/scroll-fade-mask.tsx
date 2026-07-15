// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Scrollable sidebar body wrapper: provides the thread/project drag-and-drop
// context and renders the scroll container with the top/bottom edge fade mask
// (`.vertical-scroll-fade-mask` + the header fade CSS module). Throttles a
// "scroll activity" ping used to pause hover cards while the user scrolls.
import React, { type ReactNode, type Ref, type UIEvent } from "react";
import {
  clsx as cn,
  markSidebarScrollActivity,
  SidebarDragDropProvider,
  SidebarPinnedSection,
  sidebarStyles,
} from "../boundaries/onboarding-commons-externals.facade";

// Compiled CSS module for the header fade overlay.
const scrollFadeMaskStyles = {
  headerFadeMask: "_headerFadeMask_hrdr8_1",
} as const;

// Minimum gap (ms) between successive scroll-activity pings.
const SCROLL_ACTIVITY_THROTTLE_MS = 250;

// Reduced-motion / disabled-effects overrides for the scroll fade mask. Injected
// into a global <style> when the corresponding rendering effect is turned off.
export const disableScrollFadeMaskAnimationCss = `
.horizontal-scroll-fade-mask,
.vertical-scroll-fade-mask,
.vertical-scroll-fade-mask-top,
.vertical-scroll-fade-mask-bottom {
  --top-fade: var(--edge-fade-distance, 1rem);
  --bottom-fade: var(--edge-fade-distance, 1rem);
  --left-fade: var(--edge-fade-distance, 1rem);
  --right-fade: var(--edge-fade-distance, 1rem);
  animation: none;
  animation-timeline: auto;
}`;

export const disableScrollFadeMaskCss = `
.horizontal-scroll-fade-mask,
.vertical-scroll-fade-mask,
.vertical-scroll-fade-mask-top,
.vertical-scroll-fade-mask-bottom {
  mask: none;
  animation: none;
  animation-timeline: auto;
}`;

interface DragState {
  isDraggingProject: boolean;
  isDraggingThread: boolean;
}

export interface SidebarScrollFadeMaskProps {
  handleSidebarScroll: (scrollTop: number) => void;
  floatStatusIconsRight?: boolean;
  hidePinnedThreadTimestamps?: boolean;
  homeContainerIdByThreadId: unknown;
  onProjectDrop: (drop: unknown) => void;
  onThreadDrop: (drop: unknown) => void;
  pinnedProjectThreadKeysInDisplayOrder?: readonly string[];
  sidebarRef: Ref<HTMLDivElement>;
  sidebarSectionNodes: ReactNode;
  topContent?: ReactNode;
  showPinnedProjectHoverCards?: boolean;
  showPinnedProjectGroups?: boolean;
  showPinnedSection?: boolean;
}

export function SidebarScrollFadeMask({
  handleSidebarScroll,
  floatStatusIconsRight = false,
  hidePinnedThreadTimestamps = false,
  homeContainerIdByThreadId,
  onProjectDrop,
  onThreadDrop,
  pinnedProjectThreadKeysInDisplayOrder,
  sidebarRef,
  sidebarSectionNodes,
  topContent,
  showPinnedProjectHoverCards = false,
  showPinnedProjectGroups = true,
  showPinnedSection = true,
}: SidebarScrollFadeMaskProps) {
  const lastScrollActivityRef = React.useRef<number | null>(null);

  const renderScrollArea = ({
    isDraggingProject,
    isDraggingThread,
  }: DragState) => (
    <div
      {...sidebarStyles.sidebarScroll}
      className={cn(
        "vertical-scroll-fade-mask relative isolate flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto pb-[calc(var(--sidebar-footer-height)+var(--padding-row-x))] [--height-token-row:30px] [--radius-token-row:10px] [contain:layout_paint]",
        scrollFadeMaskStyles.headerFadeMask,
        topContent == null
          ? "-mt-2 pt-6"
          : "-mt-[var(--sidebar-scroll-header-spacing,8px)] pt-[var(--sidebar-scroll-header-spacing,8px)]",
      )}
      ref={sidebarRef}
      onScroll={(event: UIEvent<HTMLDivElement>) => {
        const last = lastScrollActivityRef.current;
        if (
          last == null ||
          event.timeStamp - last >= SCROLL_ACTIVITY_THROTTLE_MS
        ) {
          markSidebarScrollActivity();
          lastScrollActivityRef.current = event.timeStamp;
        }
        handleSidebarScroll(event.currentTarget.scrollTop);
      }}
    >
      {topContent}
      {showPinnedSection ? (
        <SidebarPinnedSection
          floatStatusIconsRight={floatStatusIconsRight}
          hideThreadTimestamps={hidePinnedThreadTimestamps}
          isDraggingThread={isDraggingThread || isDraggingProject}
          pinnedProjectThreadKeysInDisplayOrder={
            pinnedProjectThreadKeysInDisplayOrder
          }
          showProjectHoverCard={showPinnedProjectHoverCards}
          showPinnedProjectGroups={showPinnedProjectGroups}
        />
      ) : null}
      {sidebarSectionNodes}
    </div>
  );

  return (
    <SidebarDragDropProvider
      homeContainerIdByThreadId={homeContainerIdByThreadId}
      onProjectDrop={onProjectDrop}
      onThreadDrop={onThreadDrop}
    >
      {renderScrollArea}
    </SidebarDragDropProvider>
  );
}
