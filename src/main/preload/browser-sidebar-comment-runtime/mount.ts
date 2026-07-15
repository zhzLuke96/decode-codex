// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment runtime mount host and message controller.

import { BROWSER_SIDEBAR_COMMENTS_ROOT_ID } from "./event-interactions";

export const BROWSER_SIDEBAR_COMMENT_ROOT_Z_INDEX = 2147483647;
export const BROWSER_SIDEBAR_RUNTIME_BOUNDARY_ATTRIBUTE =
  "data-browser-sidebar-runtime-boundary";

export type BrowserSidebarInteractionMode = "browse" | "comment";
export type BrowserSidebarAnnotationMode = "comment" | "design";

export type BrowserSidebarComment = Record<string, unknown> & {
  id: string;
};

export type BrowserSidebarIntlConfig = {
  defaultLocale: string;
  locale: string;
  messages: Record<string, string>;
};

export type BrowserSidebarRuntimeState = {
  activeDesignChange?: unknown;
  annotationEditorMode: BrowserSidebarAnnotationMode;
  canUseTweaks: boolean;
  comments: BrowserSidebarComment[];
  interactionMode: BrowserSidebarInteractionMode;
  intlConfig: BrowserSidebarIntlConfig;
  isAgentControllingBrowser: boolean;
  isDesignModifierPressed: boolean;
  isOriginalViewEnabled?: boolean;
  isTweaksEditorOpen: boolean;
  viewportScale: number;
  zoomPercent: number;
};

export type BrowserSidebarRuntimeSyncMessage = {
  type: "browser-sidebar-runtime-sync";
} & Partial<BrowserSidebarRuntimeState>;

export type BrowserSidebarHostMessage =
  | BrowserSidebarRuntimeSyncMessage
  | {
      type: "browser-sidebar-runtime-history-shortcuts";
      backAccelerators: string[];
      forwardAccelerators: string[];
    }
  | { type: "browser-sidebar-runtime-capture-text-selection" }
  | {
      type: "browser-sidebar-runtime-close-editor";
      target?: BrowserSidebarEditorTarget | null;
    }
  | {
      type: "browser-sidebar-runtime-prepare-comment-screenshot";
      commentId: string;
    }
  | { type: "browser-sidebar-runtime-clear-comment-screenshot" }
  | {
      type: "browser-sidebar-runtime-select-comment";
      commentId: string;
    }
  | {
      type: "browser-sidebar-runtime-create-comment-at-point";
      viewportPoint: BrowserSidebarViewportPoint;
    }
  | {
      fallbackViewportPoint?: BrowserSidebarViewportPoint | null;
      type: "browser-sidebar-runtime-create-comment-from-selection";
    }
  | {
      type: "browser-sidebar-runtime-open-design-editor-at-point";
      viewportPoint: BrowserSidebarViewportPoint;
    }
  | {
      type: "browser-sidebar-runtime-restore-editor";
      [key: string]: unknown;
    }
  | {
      property?: string | null;
      type: "browser-sidebar-runtime-design-scrub-changed";
    };

export type BrowserSidebarRuntimeMessage = Record<string, unknown> & {
  type: string;
};

export type BrowserSidebarViewportPoint = {
  x: number;
  y: number;
};

export type BrowserSidebarEditorTarget =
  | { mode: "create" }
  | { commentId: string; mode: "edit" }
  | { groupId: string; mode: "design" };

export type BrowserSidebarRuntimeHost = {
  initialState: BrowserSidebarRuntimeState;
  createDocumentContextResolver(pageUrl: string): unknown;
  sendMessageToHost(message: BrowserSidebarRuntimeMessage): void;
  subscribeToHostMessages(
    listener: (message: BrowserSidebarHostMessage) => void,
  ): () => void;
};

export type BrowserSidebarRuntimeController = {
  dispose(): void;
};

export function mountBrowserSidebarCommentRuntime(
  host: BrowserSidebarRuntimeHost,
): BrowserSidebarRuntimeController {
  const rootHost = ensureBrowserSidebarCommentRootHost();
  const shadowRoot =
    rootHost.shadowRoot ?? rootHost.attachShadow({ mode: "open" });
  shadowRoot.replaceChildren();

  const mountElement = document.createElement("div");
  mountElement.setAttribute(BROWSER_SIDEBAR_RUNTIME_BOUNDARY_ATTRIBUTE, "true");
  shadowRoot.appendChild(mountElement);

  const controller = new BrowserSidebarCommentRuntimeMountController(
    rootHost,
    mountElement,
    host,
  );
  controller.mount();
  return controller;
}

export function ensureBrowserSidebarCommentRootHost(): HTMLDivElement {
  const existingRoot = document.getElementById(
    BROWSER_SIDEBAR_COMMENTS_ROOT_ID,
  );
  if (existingRoot instanceof HTMLDivElement) return existingRoot;

  const rootHost = document.createElement("div");
  rootHost.id = BROWSER_SIDEBAR_COMMENTS_ROOT_ID;
  rootHost.style.position = "fixed";
  rootHost.style.inset = "0";
  rootHost.style.pointerEvents = "none";
  rootHost.style.zIndex = String(BROWSER_SIDEBAR_COMMENT_ROOT_Z_INDEX);
  document.documentElement.appendChild(rootHost);
  return rootHost;
}

class BrowserSidebarCommentRuntimeMountController
  implements BrowserSidebarRuntimeController
{
  #disposed = false;
  #latestForwardedMessage: BrowserSidebarHostMessage | null = null;
  #runtimeState: BrowserSidebarRuntimeState;
  #unsubscribeFromHost: (() => void) | null = null;
  #warnedAboutOverlayBoundary = false;
  private readonly host: BrowserSidebarRuntimeHost;
  private readonly mountElement: HTMLDivElement;
  private readonly rootHost: HTMLDivElement;

  constructor(
    rootHost: HTMLDivElement,
    mountElement: HTMLDivElement,
    host: BrowserSidebarRuntimeHost,
  ) {
    this.rootHost = rootHost;
    this.mountElement = mountElement;
    this.host = host;
    this.#runtimeState = host.initialState;
  }

  mount(): void {
    this.#renderBoundarySurface();
    this.#unsubscribeFromHost = this.host.subscribeToHostMessages((message) => {
      if (this.#disposed) return;
      if (message.type === "browser-sidebar-runtime-sync") {
        this.#runtimeState = mergeBrowserSidebarRuntimeState(
          this.#runtimeState,
          message,
        );
      } else if (isBrowserSidebarRuntimeOverlayMessage(message)) {
        this.#latestForwardedMessage = message;
      }
      this.#renderBoundarySurface();
    });
  }

  dispose(): void {
    if (this.#disposed) return;
    this.#disposed = true;
    this.#unsubscribeFromHost?.();
    this.#unsubscribeFromHost = null;
    this.rootHost.remove();
  }

  #renderBoundarySurface(): void {
    if (!this.#warnedAboutOverlayBoundary) {
      this.#warnedAboutOverlayBoundary = true;
      console.warn(
        "Codex browser sidebar comment React overlay rendering remains an open restoration boundary.",
      );
    }

    this.mountElement.hidden = true;
    this.mountElement.style.display = "none";
    this.mountElement.dataset.interactionMode =
      this.#runtimeState.interactionMode;
    this.mountElement.dataset.annotationEditorMode =
      this.#runtimeState.annotationEditorMode;
    this.mountElement.dataset.commentCount = String(
      this.#runtimeState.comments.length,
    );
    this.mountElement.dataset.lastHostMessage =
      this.#latestForwardedMessage?.type ?? "";
  }
}

function mergeBrowserSidebarRuntimeState(
  current: BrowserSidebarRuntimeState,
  message: BrowserSidebarRuntimeSyncMessage,
): BrowserSidebarRuntimeState {
  return {
    activeDesignChange: message.activeDesignChange,
    annotationEditorMode: message.annotationEditorMode ?? "comment",
    canUseTweaks: message.canUseTweaks !== false,
    comments: message.comments ?? current.comments,
    interactionMode: message.interactionMode ?? current.interactionMode,
    intlConfig: message.intlConfig ?? current.intlConfig,
    isAgentControllingBrowser:
      message.isAgentControllingBrowser ?? current.isAgentControllingBrowser,
    isDesignModifierPressed: message.isDesignModifierPressed === true,
    isOriginalViewEnabled: message.isOriginalViewEnabled === true,
    isTweaksEditorOpen: message.isTweaksEditorOpen === true,
    viewportScale: message.viewportScale ?? 1,
    zoomPercent: message.zoomPercent ?? current.zoomPercent,
  };
}

function isBrowserSidebarRuntimeOverlayMessage(
  message: BrowserSidebarHostMessage,
): boolean {
  return (
    message.type === "browser-sidebar-runtime-prepare-comment-screenshot" ||
    message.type === "browser-sidebar-runtime-clear-comment-screenshot" ||
    message.type === "browser-sidebar-runtime-capture-text-selection" ||
    message.type === "browser-sidebar-runtime-select-comment" ||
    message.type === "browser-sidebar-runtime-close-editor" ||
    message.type === "browser-sidebar-runtime-design-scrub-changed" ||
    message.type === "browser-sidebar-runtime-create-comment-at-point" ||
    message.type === "browser-sidebar-runtime-create-comment-from-selection" ||
    message.type === "browser-sidebar-runtime-open-design-editor-at-point" ||
    message.type === "browser-sidebar-runtime-restore-editor"
  );
}
