// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Overlay, portal, and host-action primitives shared by onboarding chunks.
import * as React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { OpenConfigTomlLink } from "../composer/open-config-toml-button";
import { OpenFileButton } from "../review/file-preview-runtime";
import {
  TerminalErrorToast,
  type TerminalErrorToastProps,
} from "../review/terminal-error-toast";
import { PlatformGate } from "../app-shell/platform-gate";
import { ErrorBoundary } from "./error-boundary";

type PortalRoot = "body" | HTMLElement | null | undefined;

export interface AnchoredOverlayLayerProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  className?: string;
  constrainHeightToViewport?: boolean;
  gap?: number;
  isActive?: boolean;
  placement?: "bottom" | "top";
  portalRoot?: PortalRoot;
}

type OverlayLayout = {
  left: number;
  maxHeight?: number;
  minWidth: number;
  top: number;
};

export function AnchoredOverlayLayer({
  anchorRef,
  children,
  className,
  constrainHeightToViewport = false,
  gap = 0,
  isActive = true,
  placement = "bottom",
  portalRoot = "body",
}: AnchoredOverlayLayerProps) {
  const [layout, setLayout] = React.useState<OverlayLayout | null>(null);

  React.useLayoutEffect(() => {
    if (!isActive || typeof window === "undefined") return;
    let frameId: number | null = null;
    const updateLayout = () => {
      if (frameId != null) window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const anchor = anchorRef.current;
        if (anchor == null) {
          setLayout(null);
          return;
        }
        const rect = anchor.getBoundingClientRect();
        const top = placement === "top" ? rect.top - gap : rect.bottom + gap;
        setLayout({
          left: rect.left,
          maxHeight: constrainHeightToViewport
            ? Math.max(0, window.innerHeight - top - 8)
            : undefined,
          minWidth: rect.width,
          top,
        });
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    window.addEventListener("scroll", updateLayout, true);
    return () => {
      if (frameId != null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("scroll", updateLayout, true);
    };
  }, [anchorRef, constrainHeightToViewport, gap, isActive, placement]);

  if (!isActive || layout == null || typeof document === "undefined") {
    return null;
  }

  const target = resolvePortalRoot(portalRoot);
  if (target == null) return null;

  return createPortal(
    <div
      className={clsx("fixed z-50", className)}
      style={{
        left: layout.left,
        maxHeight: layout.maxHeight,
        minWidth: layout.minWidth,
        top: layout.top,
      }}
    >
      {children}
    </div>,
    target,
  );
}

function resolvePortalRoot(portalRoot: PortalRoot): HTMLElement | null {
  if (typeof document === "undefined") return null;
  if (portalRoot == null || portalRoot === "body") return document.body;
  return portalRoot;
}

export function AppShellPortalRoot() {
  return (
    <div
      id="app-shell-portal-root"
      className="contents"
      data-app-shell-portal-root=""
    />
  );
}

type TerminalExecOutput = {
  command?: string | null;
  output?: string | null;
};

export interface TerminalCommandToastProps
  extends Omit<TerminalErrorToastProps, "execOutput"> {
  execOutput?: unknown;
}

export function TerminalCommandToast({
  execOutput,
  ...props
}: TerminalCommandToastProps) {
  return (
    <TerminalErrorToast
      {...props}
      execOutput={normalizeExecOutput(execOutput)}
    />
  );
}

function normalizeExecOutput(value: unknown): TerminalExecOutput | null {
  if (value == null || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  return {
    command: typeof record.command === "string" ? record.command : null,
    output: typeof record.output === "string" ? record.output : null,
  };
}

export const ElectronOnlyGate = PlatformGate;
export const NamedErrorBoundary = ErrorBoundary;
export const OpenConfigLinkButton = OpenConfigTomlLink;
export const OpenImageInButton = OpenFileButton;
