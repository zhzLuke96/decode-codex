// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resizable right-hand side panel for the review / file-source surfaces. Hosts a
// drag-to-resize handle plus either the "changed files" panel or the workspace
// file-source tree, with width clamping, persistence, and open/close animation.
import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChangedFilesPanel } from "./changed-files-panel";
import {
  useStore,
  useAtomValue,
  routeAtom,
  fileTreeOpenAtom,
  reviewSidePanelAnimationAtom,
  reviewSidePanelWidthAtom,
  reviewReserveBottomPaddingAtom,
  reviewReserveBottomPaddingWidthThresholdAtom,
  useWindowZoom,
  useResizableSize,
  usePanelResizeAnimation,
  scaleToDevicePx,
  setFileTreeOpen,
  PanelResizeHandle,
  WorkspaceFileSourceTree,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_WIDTH_FRACTION = 0.6;
const MIN_WIDTH_PX = 200;

export type FileSourceSidePanelProps =
  | {
      type: "changed-files";
      root?: never;
      activeFilePath?: never;
      autoFocusSearch?: never;
      hostId?: never;
      onSelectFile?: never;
    }
  | {
      type: "workspace";
      root: string | null;
      activeFilePath?: string | null;
      autoFocusSearch?: boolean;
      hostId: string;
      onSelectFile: (path: string) => void;
    };

export function FileSourceSidePanel(props: FileSourceSidePanelProps) {
  const scope = useStore(routeAtom);
  const isOpen = useAtomValue(fileTreeOpenAtom);
  const animation = useAtomValue(reviewSidePanelAnimationAtom);
  const persistedWidth = useAtomValue(reviewSidePanelWidthAtom);
  const reserveBottomPaddingEnabled = useAtomValue(
    reviewReserveBottomPaddingAtom,
  );
  const reserveBottomPaddingThreshold = useAtomValue(
    reviewReserveBottomPaddingWidthThresholdAtom,
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const windowZoom = useWindowZoom();

  const isVisible =
    isOpen && (props.type === "changed-files" || props.root != null);

  const clampSize = useCallback(
    (size: number) => {
      const available =
        (panelRef.current?.parentElement?.getBoundingClientRect().width ??
          window.innerWidth) / windowZoom;
      const max = Math.max(MIN_WIDTH_PX, available * MAX_WIDTH_FRACTION);
      return Math.min(Math.max(size, MIN_WIDTH_PX), max);
    },
    [windowZoom],
  );

  const width = clampSize(persistedWidth);
  const reserveBottomPadding =
    props.type === "changed-files" &&
    reserveBottomPaddingEnabled &&
    width > reserveBottomPaddingThreshold;

  const animatedWidth = useResizableSize(width);
  if (!isOpen && animatedWidth.get() !== width) animatedWidth.set(width);

  const { isMounted, opacity, animatedSize } = usePanelResizeAnimation({
    animation,
    size: animatedWidth,
    isVisible,
  });

  const setSize = useCallback(
    (size: number) => {
      if (size < scaleToDevicePx(MIN_WIDTH_PX)) {
        setFileTreeOpen(scope, false);
        return;
      }
      const clamped = clampSize(size);
      animatedWidth.set(clamped);
      scope.set(reviewSidePanelWidthAtom, clamped);
    },
    [animatedWidth, clampSize, scope],
  );

  if (!isMounted && !isVisible) return null;

  return (
    <motion.div
      ref={panelRef}
      style={{
        maxWidth: `${MAX_WIDTH_FRACTION * 100}%`,
        opacity,
        width: animatedSize,
      }}
      className="relative flex h-full shrink-0 border-l border-token-border-default"
    >
      <PanelResizeHandle
        edge="left"
        defaultSize={width}
        getCurrentSize={() => animatedWidth.get()}
        setSize={setSize}
      />
      {props.type === "changed-files" ? (
        <ChangedFilesPanel reserveBottomPadding={reserveBottomPadding} />
      ) : props.root == null ? null : (
        <WorkspaceFileSourceTree
          activeFilePath={props.activeFilePath}
          autoFocusSearch={props.autoFocusSearch}
          hostId={props.hostId}
          includeHidden={true}
          onSelectFile={props.onSelectFile}
          root={props.root}
        />
      )}
    </motion.div>
  );
}
