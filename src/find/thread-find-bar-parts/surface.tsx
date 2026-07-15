// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Compound surface for the restored thread find bar.
import React, { type ReactNode } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { useSignalValue } from "../../conversations/local-conversation-page-runtime";
import { useWindowControlsSafeArea } from "../../runtime/use-window-controls-safe-area";
import { findOpenAtom } from "../thread-find-atoms";
import { ThreadFindClose } from "./close";
import { ThreadFindCommandBridge } from "./command-bridge";
import { ThreadFindDomainToggle } from "./domain-toggle";
import { ThreadFindInput } from "./input";
import { ThreadFindNavigation } from "./navigation";
import { ThreadFindResultLabel } from "./result-label";

type ThreadFindFrameProps = {
  children?: ReactNode;
  className?: string;
};

function ThreadFindFrame({ children, className }: ThreadFindFrameProps) {
  const open = useSignalValue<boolean>(findOpenAtom);
  if (!open) return null;
  return (
    <div
      className={clsx(
        "no-drag pointer-events-auto grid w-[340px] max-w-[70vw] grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-token-border bg-token-side-bar-background shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function isDialogOverlayMounted(): boolean {
  return (
    typeof document !== "undefined" &&
    document.querySelector(".codex-dialog-overlay") != null
  );
}

function useDialogOverlayMounted(): boolean {
  const [mounted, setMounted] = React.useState(isDialogOverlayMounted);
  React.useEffect(() => {
    if (
      typeof document === "undefined" ||
      typeof MutationObserver === "undefined"
    ) {
      return;
    }
    const observer = new MutationObserver(() => {
      setMounted(isDialogOverlayMounted());
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return mounted;
}

function ThreadFindSurface() {
  const safeArea = useWindowControlsSafeArea();
  const hasDialogOverlay = useDialogOverlayMounted();
  const content = (
    <>
      <ThreadFindCommandBridge />
      {hasDialogOverlay ? null : (
        <div
          className="pointer-events-none fixed top-2 z-[55] flex justify-end"
          style={{ right: 16 + safeArea.right }}
        >
          <ThreadFindFrame>
            <ThreadFindInput />
            <ThreadFindDomainToggle />
            <ThreadFindNavigation />
            <ThreadFindResultLabel />
            <ThreadFindClose />
          </ThreadFindFrame>
        </div>
      )}
    </>
  );

  if (typeof document === "undefined") return content;
  return createPortal(content, document.body);
}

function ThreadFindRoot({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export const ThreadFindBar = Object.assign(ThreadFindRoot, {
  Frame: ThreadFindFrame,
  Surface: ThreadFindSurface,
  Input: ThreadFindInput,
  DomainToggle: ThreadFindDomainToggle,
  Navigation: ThreadFindNavigation,
  ResultLabel: ThreadFindResultLabel,
  Close: ThreadFindClose,
});
