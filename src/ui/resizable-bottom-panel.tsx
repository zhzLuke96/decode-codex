// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Bottom-anchored panel with a row-resize drag handle. Portals a fixed drawer to
// document.body; dragging the top handle adjusts its height between a minimum and
// 80% of the viewport. Panel body content is code-split out of this build.
import { useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

const MIN_PANEL_HEIGHT_PX = 200;
const MAX_PANEL_HEIGHT_RATIO = 0.8;

function getInitialPanelHeight(): number {
  return Math.round(window.innerHeight * 0.5);
}

function BottomPanelContent(_props: { style?: CSSProperties }): null {
  return null;
}

export interface ResizableBottomPanelProps {
  isOpen: boolean;
}

export function ResizableBottomPanel({ isOpen }: ResizableBottomPanelProps) {
  const [height, setHeight] = useState(getInitialPanelHeight);
  if (!isOpen) return null;

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const startY = event.clientY;
    const startHeight = height;
    const maxHeight = Math.round(window.innerHeight * MAX_PANEL_HEIGHT_RATIO);
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const delta = startY - moveEvent.clientY;
      setHeight(
        Math.min(Math.max(startHeight + delta, MIN_PANEL_HEIGHT_PX), maxHeight),
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
        <BottomPanelContent style={{ height: "100%" }} />
      </div>
    </div>,
    document.body,
  );
}
