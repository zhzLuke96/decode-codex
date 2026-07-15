// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// New-tab dropdown shared by the right and bottom thread panels.
import { useRef, type ReactNode } from "react";
import {
  buildThreadPanelNewTabModel,
  ThreadPanelNewTabMenuContent,
} from "./new-tab-model";
import { PlusIcon } from "./icons";
import type { PanelTarget, ThreadPanelNewTabModelOptions } from "./types";

export interface ThreadPanelOpenTabDropdownProps
  extends Omit<ThreadPanelNewTabModelOptions, "target"> {
  target: PanelTarget;
  title: ReactNode;
}

export function ThreadPanelOpenTabDropdown({
  target,
  title,
  ...modelOptions
}: ThreadPanelOpenTabDropdownProps) {
  const deferredActionRef = useRef<(() => void | Promise<void>) | null>(null);
  const model = buildThreadPanelNewTabModel({ ...modelOptions, target });
  const selectAction = (action: (typeof model.actions)[number]) => {
    if (action.deferSelectionUntilDropdownClose) {
      deferredActionRef.current = action.onSelect;
      return;
    }
    action.onSelect();
  };

  return (
    <details
      className="relative inline-flex"
      onToggle={(event) => {
        if (!event.currentTarget.open && deferredActionRef.current != null) {
          const deferredAction = deferredActionRef.current;
          deferredActionRef.current = null;
          deferredAction();
        }
      }}
    >
      <summary
        className="flex h-token-button-composer cursor-interaction list-none items-center justify-center rounded-lg px-2 py-0 text-token-text-tertiary hover:bg-token-list-hover-background"
        title={typeof title === "string" ? title : undefined}
        aria-label={typeof title === "string" ? title : undefined}
      >
        <PlusIcon className="icon-xs" />
      </summary>
      <div className="absolute right-0 z-50 mt-2 flex min-w-64 flex-col gap-1 rounded-lg border border-token-border bg-token-dropdown-background p-1 shadow-lg">
        <ThreadPanelNewTabMenuContent
          actions={model.actions}
          hasOutputArtifacts={model.hasOutputArtifacts}
          onActionSelect={selectAction}
          onOpenArtifact={model.onOpenArtifact}
          outputArtifacts={model.outputArtifacts}
        />
      </div>
    </details>
  );
}
