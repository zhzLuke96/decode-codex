// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// UI and imperative helpers used by the local turn-diff card.

import type { ReactNode, SVGProps } from "react";
import { createAtom } from "../../vendor/jotai-runtime";
import type { ContextMenuItemDefinition } from "../../ui/context-menu";
import { ThreadResourceCardHeader as ResourceCardHeaderRow } from "../../ui/thread-resource-card";
import { ArrowTopRightIcon } from "../../icons/arrow-top-right-icon";
import { UnifiedDiffIcon } from "../../icons/unified-diff-icon";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { appLogger } from "../../runtime/app-logger";
import { openFileInEditor } from "../../runtime/commons-utility-runtime";
import { recordProductEvent } from "../../runtime/query-scope-runtime";
import { joinPath, normalizePath } from "../../runtime/path-helpers-runtime";
import {
  navigateToReviewFilePath,
  reviewSourceAtom,
  reviewTargetConversationIdAtom,
} from "../../review/review-view-state-runtime";
import { isAbsoluteFilesystemPath } from "./turn-diff-patch-runtime";

export {
  buildScopedDiff,
  gitDirOriginsQueryAtom,
  nodePath,
  refreshGitStatus,
  relativePath,
} from "./turn-diff-patch-runtime";
export { ResourceCardHeaderRow };
export { UnifiedDiffIcon as DiffFileIcon };
export { ArrowTopRightIcon as LinkArrowIcon };

type AppStoreLike = {
  get?<TValue = unknown>(atom: unknown, params?: unknown): TValue;
  queryClient?: unknown;
  set?(atom: unknown, value: unknown): void;
};

type OpenFileMenuParams = {
  column?: number;
  cwd?: string | null;
  endLine?: number;
  hostId?: string | null;
  line?: number;
  openInSidePanel?: boolean;
  path: string;
};

export const turnDiffActionsDisabledAtom = createAtom(false);

export const turnDiffRevertProductEvent = {
  $type: "protobuf_analytics_events.v1.CodexPatchActionResult",
  name: "codex.turn_diff.revert",
};

function resolveOpenFilePath({ cwd, path }: OpenFileMenuParams): string {
  return cwd == null || isAbsoluteFilesystemPath(normalizePath(path))
    ? path
    : joinPath(cwd, path);
}

export function buildOpenFileContextMenuItems(
  store: AppStoreLike,
  params: OpenFileMenuParams,
): ContextMenuItemDefinition[] {
  const absolutePath = resolveOpenFilePath(params);
  return [
    {
      id: "open-file",
      message: {
        id: "codex.openFileContextMenu.openFile",
        defaultMessage: "Open file",
        description: "Context menu action to open a file",
      },
      onSelect: () => {
        void openFileInEditor({ ...params, path: absolutePath, scope: store });
      },
    },
    {
      id: "open-file-side-panel",
      message: {
        id: "codex.openFileContextMenu.openInSidePanel",
        defaultMessage: "Open in side panel",
        description: "Context menu action to open a file in the side panel",
      },
      onSelect: () => {
        void openFileInEditor({
          ...params,
          openInSidePanel: true,
          path: absolutePath,
          scope: store,
        });
      },
    },
    { id: "open-file-separator", type: "separator" },
    {
      id: "copy-file-path",
      message: {
        id: "codex.openFileContextMenu.copyPath",
        defaultMessage: "Copy path",
        description: "Context menu action to copy a file path",
      },
      onSelect: () => {
        void copyToClipboard(absolutePath);
      },
    },
  ];
}

export function dispatchProductEvent(
  store: AppStoreLike,
  event: unknown,
  payload: Record<string, unknown> = {},
): void {
  try {
    recordProductEvent(store, event, payload);
  } catch (error) {
    appLogger.debug("Failed to record turn diff product event", {
      safe: { event },
      sensitive: { error, payload },
    });
  }
}

export function requireConversationId(
  conversationId: string | null | undefined,
): string {
  if (conversationId == null || conversationId.length === 0) {
    throw new Error("Expected a conversation id");
  }
  return conversationId;
}

export function openReviewView(
  store: AppStoreLike,
  options: { conversationId: string; path?: string },
): boolean {
  store.set?.(reviewTargetConversationIdAtom, options.conversationId);
  store.set?.(reviewSourceAtom, "last-turn");
  if (options.path != null) {
    navigateToReviewFilePath(store as never, options.path);
  }
  void import("../../review/review-side-panel-tab-commands")
    .then(({ openReviewTabForConversation }) => {
      openReviewTabForConversation(store as never, options);
    })
    .catch((error) => {
      appLogger.error("Failed to open review view", {
        safe: { conversationId: options.conversationId },
        sensitive: { error },
      });
    });
  return true;
}

export function notifyDiffApplied(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("codex:diff-applied"));
  }
}

export function useActivityScrollContainer(): HTMLElement | null {
  return null;
}

export function scrollElementIntoActivityView(
  element: HTMLElement,
  scrollContainer?: HTMLElement | null,
): void {
  if (scrollContainer == null || !scrollContainer.contains(element)) {
    element.scrollIntoView({ block: "nearest", behavior: "smooth" });
    return;
  }
  const elementRect = element.getBoundingClientRect();
  const containerRect = scrollContainer.getBoundingClientRect();
  if (elementRect.top < containerRect.top) {
    scrollContainer.scrollTop -= containerRect.top - elementRect.top;
  } else if (elementRect.bottom > containerRect.bottom) {
    scrollContainer.scrollTop += elementRect.bottom - containerRect.bottom;
  }
}

export function PlatformVisibility({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function RedoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.002 10.833C4.0022 8.439 5.9429 6.49805 8.337 6.49805H15.0645L12.8663 8.69629L12.7813 8.80078C12.6109 9.05884 12.6392 9.40947 12.8663 9.63672C13.0935 9.86394 13.4441 9.89207 13.7022 9.72168L13.8067 9.63672L17.1407 6.30371C17.4001 6.04411 17.4 5.62295 17.1407 5.36328L13.8067 2.0293C13.547 1.76998 13.1259 1.76987 12.8663 2.0293C12.6066 2.289 12.6066 2.711 12.8663 2.9707L15.0635 5.16797H8.337C5.2084 5.16797 2.6721 7.70446 2.6719 10.833C2.6719 13.9617 5.2083 16.498 8.337 16.498H11.67C12.0372 16.498 12.335 16.2003 12.335 15.833C12.3348 15.4659 12.0371 15.168 11.67 15.168H8.337C5.9428 15.168 4.002 13.2272 4.002 10.833Z"
        fill="currentColor"
      />
    </svg>
  );
}
