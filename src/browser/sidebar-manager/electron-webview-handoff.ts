// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import type {
  BrowserSidebarHostKind,
  BrowserSidebarWebviewHost,
  BrowserSidebarWebviewRef,
  BrowserSidebarWebviewState,
} from "./types";
type HandoffHostKind = "bottom-panel" | "right-panel";
type HandoffWebviewEntry = {
  host: BrowserSidebarWebviewHost;
  mountGeneration: number;
  webviewRef: BrowserSidebarWebviewRef;
};
type PendingHandoff = {
  incoming: HandoffWebviewEntry;
  outgoing: HandoffWebviewEntry;
  prewarmFrameId: number | null;
  releaseFrameId: number | null;
  removeIncomingDidAttachListener: (() => void) | null;
  timeoutId: number | null;
};
const HANDOFF_TIMEOUT_MS = 100;
const HANDOFF_PREWARM_FRAME_COUNT = 2;
const HANDOFF_HOST_KINDS: HandoffHostKind[] = ["right-panel", "bottom-panel"];
export class BrowserSidebarElectronWebviewHandoff {
  private paintedWebviews: Record<HandoffHostKind, HandoffWebviewEntry | null> =
    {
      "bottom-panel": null,
      "right-panel": null,
    };
  private pendingHandoffs: Record<HandoffHostKind, PendingHandoff | null> = {
    "bottom-panel": null,
    "right-panel": null,
  };
  sync(
    host: BrowserSidebarWebviewHost,
    state: BrowserSidebarWebviewState,
    webviewRef: BrowserSidebarWebviewRef,
    hostKind: BrowserSidebarHostKind,
  ): void {
    const incomingEntry = {
      host,
      mountGeneration: state.mountGeneration ?? host.getMountGeneration(),
      webviewRef,
    };
    const handoffHostKind = toHandoffHostKind(hostKind);
    if (
      handoffHostKind == null ||
      !state.isVisible ||
      state.bounds == null ||
      state.shouldBootstrap === true ||
      state.shouldPaint === false
    ) {
      if (handoffHostKind != null) {
        const pendingHandoff = this.pendingHandoffs[handoffHostKind];
        if (
          pendingHandoff?.incoming.host === host ||
          pendingHandoff?.outgoing.host === host
        ) {
          this.cancel(handoffHostKind, "incoming-hidden", true);
        }
      }
      host.sync(state, webviewRef);
      if (
        handoffHostKind != null &&
        this.paintedWebviews[handoffHostKind]?.host === host &&
        !host.isPainted()
      ) {
        this.paintedWebviews[handoffHostKind] = null;
      }
      return;
    }
    const pendingHandoff = this.pendingHandoffs[handoffHostKind];
    if (pendingHandoff != null) {
      if (pendingHandoff.incoming.host === host) {
        pendingHandoff.incoming = incomingEntry;
        if (pendingHandoff.releaseFrameId == null) {
          host.stage(state, webviewRef);
        } else {
          host.sync(state, webviewRef);
          this.paintedWebviews[handoffHostKind] = incomingEntry;
        }
        return;
      }
      if (pendingHandoff.releaseFrameId != null) {
        window.cancelAnimationFrame(pendingHandoff.releaseFrameId);
        this.releaseOutgoing(
          handoffHostKind,
          pendingHandoff,
          "incoming-replaced",
        );
      } else {
        const { outgoing } = pendingHandoff;
        this.cancel(handoffHostKind, "incoming-replaced", false);
        if (outgoing.host === host) {
          host.sync(state, webviewRef);
          this.paintedWebviews[handoffHostKind] = incomingEntry;
          return;
        }
        if (canHandoffWebview(outgoing, incomingEntry)) {
          this.stage(handoffHostKind, outgoing, incomingEntry, state);
          return;
        }
      }
    }
    const paintedEntry = this.paintedWebviews[handoffHostKind];
    if (
      paintedEntry != null &&
      canHandoffWebview(paintedEntry, incomingEntry)
    ) {
      this.stage(handoffHostKind, paintedEntry, incomingEntry, state);
      return;
    }
    host.sync(state, webviewRef);
    this.paintedWebviews[handoffHostKind] = host.isPainted()
      ? incomingEntry
      : null;
  }
  detach(
    host: BrowserSidebarWebviewHost,
    webviewRef: BrowserSidebarWebviewRef,
    hostKind: BrowserSidebarHostKind,
    mountGeneration?: number,
  ): void {
    const handoffHostKind = toHandoffHostKind(hostKind);
    if (handoffHostKind != null) {
      const pendingHandoff = this.pendingHandoffs[handoffHostKind];
      if (pendingHandoff?.outgoing.host === host) {
        host.releaseRef?.(webviewRef, mountGeneration);
        return;
      }
      if (pendingHandoff?.incoming.host === host) {
        this.cancel(handoffHostKind, "incoming-detached", true);
        return;
      }
      if (this.paintedWebviews[handoffHostKind]?.host === host) {
        this.paintedWebviews[handoffHostKind] = null;
      }
    }
    host.detach(webviewRef, mountGeneration);
  }
  acknowledgeAttachment(
    conversationId: string,
    browserTabId: string,
    acknowledgedMountGeneration: number,
    currentMountGeneration: number,
  ): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      const pendingHandoff = this.pendingHandoffs[hostKind];
      if (
        pendingHandoff?.incoming.host.getConversationId() === conversationId &&
        pendingHandoff.incoming.host.getBrowserTabId() === browserTabId &&
        pendingHandoff.incoming.mountGeneration ===
          acknowledgedMountGeneration &&
        currentMountGeneration === acknowledgedMountGeneration
      ) {
        vscodeLogger.info(
          "IAB_TAB_SWITCH renderer acknowledged Owl webview handoff",
          {
            safe: {
              ...getHandoffLogFields(pendingHandoff),
              acknowledgedMountGeneration,
              currentMountGeneration,
              hostKind,
            },
            sensitive: {},
          },
        );
        this.scheduleCommitAfterPrewarm(hostKind, pendingHandoff);
        return;
      }
      if (pendingHandoff != null) {
        vscodeLogger.info(
          "IAB_TAB_SWITCH renderer ignored stale Owl webview handoff acknowledgement",
          {
            safe: {
              ...getHandoffLogFields(pendingHandoff),
              acknowledgedMountGeneration,
              currentMountGeneration,
              hostKind,
            },
            sensitive: {},
          },
        );
      }
    }
  }
  removeTab(host: BrowserSidebarWebviewHost): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      const pendingHandoff = this.pendingHandoffs[hostKind];
      if (pendingHandoff?.outgoing.host === host) {
        this.commit(hostKind, pendingHandoff);
        if (pendingHandoff.releaseFrameId != null) {
          window.cancelAnimationFrame(pendingHandoff.releaseFrameId);
          pendingHandoff.releaseFrameId = null;
        }
        this.releaseOutgoing(hostKind, pendingHandoff, "tab-removed");
        continue;
      }
      if (pendingHandoff?.incoming.host === host) {
        this.cancel(hostKind, "tab-removed", true);
        continue;
      }
      const paintedEntry = this.paintedWebviews[hostKind];
      if (paintedEntry?.host === host) {
        this.paintedWebviews[hostKind] = null;
        host.detach(paintedEntry.webviewRef, paintedEntry.mountGeneration);
      }
    }
  }
  transferRoute(host: BrowserSidebarWebviewHost): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      const pendingHandoff = this.pendingHandoffs[hostKind];
      if (
        pendingHandoff?.incoming.host === host ||
        pendingHandoff?.outgoing.host === host
      ) {
        this.cancel(hostKind, "route-transferred", true);
      }
    }
  }
  removeConversation(conversationId: string): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      const pendingHandoff = this.pendingHandoffs[hostKind];
      if (
        pendingHandoff?.incoming.host.getConversationId() === conversationId ||
        pendingHandoff?.outgoing.host.getConversationId() === conversationId
      ) {
        this.cancel(hostKind, "conversation-removed", true);
      }
      if (
        this.paintedWebviews[hostKind]?.host.getConversationId() ===
        conversationId
      ) {
        this.paintedWebviews[hostKind] = null;
      }
    }
  }
  disposeHost(host: BrowserSidebarWebviewHost): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      const pendingHandoff = this.pendingHandoffs[hostKind];
      if (
        pendingHandoff?.incoming.host === host ||
        pendingHandoff?.outgoing.host === host
      ) {
        this.cancel(hostKind, "host-disposed", true);
      }
      if (this.paintedWebviews[hostKind]?.host === host) {
        this.paintedWebviews[hostKind] = null;
      }
    }
  }
  disposeAll(): void {
    for (const hostKind of HANDOFF_HOST_KINDS) {
      this.cancel(hostKind, "manager-disposed", true);
      this.paintedWebviews[hostKind] = null;
    }
  }
  private stage(
    hostKind: HandoffHostKind,
    outgoing: HandoffWebviewEntry,
    incoming: HandoffWebviewEntry,
    state: BrowserSidebarWebviewState,
  ): void {
    outgoing.host.blockInteraction?.();
    const pendingHandoff: PendingHandoff = {
      incoming,
      outgoing,
      prewarmFrameId: null,
      releaseFrameId: null,
      removeIncomingDidAttachListener: null,
      timeoutId: null,
    };
    this.pendingHandoffs[hostKind] = pendingHandoff;
    pendingHandoff.removeIncomingDidAttachListener =
      incoming.host.listenForDidAttach(() => {
        if (this.pendingHandoffs[hostKind] !== pendingHandoff) return;
        vscodeLogger.info(
          "IAB_TAB_SWITCH renderer observed Owl webview did-attach during handoff",
          {
            safe: {
              ...getHandoffLogFields(pendingHandoff),
              hostKind,
            },
            sensitive: {},
          },
        );
        this.scheduleCommitAfterPrewarm(hostKind, pendingHandoff);
      });
    pendingHandoff.timeoutId = window.setTimeout(() => {
      if (this.pendingHandoffs[hostKind] !== pendingHandoff) return;
      if (pendingHandoff.prewarmFrameId != null) {
        window.cancelAnimationFrame(pendingHandoff.prewarmFrameId);
        pendingHandoff.prewarmFrameId = null;
      }
      vscodeLogger.info(
        "IAB_TAB_SWITCH renderer timed out Owl webview handoff",
        {
          safe: {
            ...getHandoffLogFields(pendingHandoff),
            hostKind,
          },
          sensitive: {},
        },
      );
      this.commit(hostKind, pendingHandoff);
    }, HANDOFF_TIMEOUT_MS);
    vscodeLogger.info("IAB_TAB_SWITCH renderer staged Owl webview handoff", {
      safe: {
        ...getHandoffLogFields(pendingHandoff),
        hostKind,
      },
      sensitive: {},
    });
    incoming.host.stage(state, incoming.webviewRef);
  }
  private scheduleCommitAfterPrewarm(
    hostKind: HandoffHostKind,
    pendingHandoff: PendingHandoff,
    remainingFrames = HANDOFF_PREWARM_FRAME_COUNT,
  ): void {
    if (
      this.pendingHandoffs[hostKind] !== pendingHandoff ||
      pendingHandoff.prewarmFrameId != null ||
      pendingHandoff.releaseFrameId != null
    ) {
      return;
    }
    if (remainingFrames === 0) {
      vscodeLogger.info(
        "IAB_TAB_SWITCH renderer prewarmed Owl webview handoff before reveal",
        {
          safe: {
            ...getHandoffLogFields(pendingHandoff),
            hostKind,
          },
          sensitive: {},
        },
      );
      this.commit(hostKind, pendingHandoff);
      return;
    }
    vscodeLogger.info(
      "IAB_TAB_SWITCH renderer prewarming Owl webview handoff before reveal",
      {
        safe: {
          ...getHandoffLogFields(pendingHandoff),
          hostKind,
          remainingFrames,
        },
        sensitive: {},
      },
    );
    pendingHandoff.prewarmFrameId = window.requestAnimationFrame(() => {
      if (this.pendingHandoffs[hostKind] === pendingHandoff) {
        pendingHandoff.prewarmFrameId = null;
        this.scheduleCommitAfterPrewarm(
          hostKind,
          pendingHandoff,
          remainingFrames - 1,
        );
      }
    });
  }
  private commit(
    hostKind: HandoffHostKind,
    pendingHandoff: PendingHandoff,
  ): void {
    if (
      this.pendingHandoffs[hostKind] !== pendingHandoff ||
      pendingHandoff.releaseFrameId != null
    ) {
      return;
    }
    if (pendingHandoff.timeoutId != null) {
      window.clearTimeout(pendingHandoff.timeoutId);
      pendingHandoff.timeoutId = null;
    }
    if (pendingHandoff.prewarmFrameId != null) {
      window.cancelAnimationFrame(pendingHandoff.prewarmFrameId);
      pendingHandoff.prewarmFrameId = null;
    }
    pendingHandoff.removeIncomingDidAttachListener?.();
    pendingHandoff.removeIncomingDidAttachListener = null;
    pendingHandoff.incoming.host.reveal(pendingHandoff.incoming.webviewRef);
    this.paintedWebviews[hostKind] = pendingHandoff.incoming;
    vscodeLogger.info("IAB_TAB_SWITCH renderer committed Owl webview handoff", {
      safe: {
        ...getHandoffLogFields(pendingHandoff),
        hostKind,
      },
      sensitive: {},
    });
    pendingHandoff.releaseFrameId = window.requestAnimationFrame(() => {
      this.releaseOutgoing(hostKind, pendingHandoff, "next-animation-frame");
    });
  }
  private releaseOutgoing(
    hostKind: HandoffHostKind,
    pendingHandoff: PendingHandoff,
    timing: string,
  ): void {
    if (this.pendingHandoffs[hostKind] !== pendingHandoff) return;
    this.pendingHandoffs[hostKind] = null;
    pendingHandoff.outgoing.host.detach(
      pendingHandoff.outgoing.webviewRef,
      pendingHandoff.outgoing.mountGeneration,
    );
    vscodeLogger.info(
      "IAB_TAB_SWITCH renderer released outgoing Owl webview handoff",
      {
        safe: {
          ...getHandoffLogFields(pendingHandoff),
          hostKind,
          timing,
        },
        sensitive: {},
      },
    );
  }
  private cancel(
    hostKind: HandoffHostKind,
    reason: string,
    detachOutgoing: boolean,
  ): void {
    const pendingHandoff = this.pendingHandoffs[hostKind];
    if (pendingHandoff == null) return;
    this.pendingHandoffs[hostKind] = null;
    if (pendingHandoff.timeoutId != null) {
      window.clearTimeout(pendingHandoff.timeoutId);
    }
    if (pendingHandoff.prewarmFrameId != null) {
      window.cancelAnimationFrame(pendingHandoff.prewarmFrameId);
    }
    if (pendingHandoff.releaseFrameId != null) {
      window.cancelAnimationFrame(pendingHandoff.releaseFrameId);
    }
    pendingHandoff.removeIncomingDidAttachListener?.();
    pendingHandoff.incoming.host.detach(
      pendingHandoff.incoming.webviewRef,
      pendingHandoff.incoming.mountGeneration,
    );
    if (detachOutgoing) {
      pendingHandoff.outgoing.host.detach(
        pendingHandoff.outgoing.webviewRef,
        pendingHandoff.outgoing.mountGeneration,
      );
      this.paintedWebviews[hostKind] = null;
    } else if (pendingHandoff.outgoing.host.isConnected()) {
      pendingHandoff.outgoing.host.restoreInteraction?.();
      this.paintedWebviews[hostKind] = pendingHandoff.outgoing;
    } else {
      this.paintedWebviews[hostKind] = null;
    }
    vscodeLogger.info("IAB_TAB_SWITCH renderer cancelled Owl webview handoff", {
      safe: {
        ...getHandoffLogFields(pendingHandoff),
        detachOutgoing,
        hostKind,
        reason,
      },
      sensitive: {},
    });
  }
}
function canHandoffWebview(
  outgoing: HandoffWebviewEntry,
  incoming: HandoffWebviewEntry,
): boolean {
  return (
    outgoing.host !== incoming.host &&
    outgoing.host.getConversationId() === incoming.host.getConversationId() &&
    outgoing.host.isPainted()
  );
}
function getHandoffLogFields(pendingHandoff: PendingHandoff) {
  return {
    incomingBrowserTabId: pendingHandoff.incoming.host.getBrowserTabId(),
    incomingConversationId: pendingHandoff.incoming.host.getConversationId(),
    incomingMountGeneration: pendingHandoff.incoming.mountGeneration,
    outgoingBrowserTabId: pendingHandoff.outgoing.host.getBrowserTabId(),
    outgoingConversationId: pendingHandoff.outgoing.host.getConversationId(),
    outgoingMountGeneration: pendingHandoff.outgoing.mountGeneration,
  };
}
function toHandoffHostKind(
  hostKind: BrowserSidebarHostKind,
): HandoffHostKind | null {
  return hostKind === "hidden-browser-use" ? null : hostKind;
}
