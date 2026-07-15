// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Boundary facade for appgen publication-terms resource opening and panel tabs.
import { createElement, isValidElement } from "react";
import { getPathBasename } from "./path-basename-runtime";

import { initArtifactPreviewRuntime } from "./artifact-preview-runtime";

import { resolveWorkspacePathFromCwd } from "../conversations/output-artifact-runtime";

import { sendHostRequest } from "./host-request-runtime";

import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";

import { isAbsoluteOrWindowsPath } from "../boundaries/src-l0hb-mz-p";
import {
  ConnectorLogoImage,
  McpServerIcon,
} from "../boundaries/onboarding-commons-externals.facade";
import { getRouteThreadId as readRouteScopeValue } from "../app-shell/app-view-route-helpers";
import {
  _c as getSidePanelController,
  bc as activateSidePanelPlacement,
  dn as createReadFileContents,
  Kr as openArtifactPanelTab,
  mc as sidePanelPlacements,
  pn as mcpCapabilityPanelTab,
  ti as getWorkspaceFilePanelTabSource,
  vc as getPanelTabPlacement,
  Yt as openWorkspaceFilePanelTab,
  a_ as initFileTypeDetectionHelpers,
  Rl as initOpenFileOutcomeEventRuntime,
  i_ as getPathExtension,
  o_ as isMarkdownPreviewPath,
  r_ as getImagePreviewDisplayMode,
  s_ as isPdfPreviewPath,
  Bl as logScopedProductEvent,
} from "../vendor/projects-app-shared-runtime";

const readFileContentSampleByteLimit = 4096;
const urlLikePathPattern = /\.html?$/i;
const openFileOutcomeEvent = {
  $type: "protobuf_analytics_events.v1.CodexWorkspaceFilePreviewAttempted",
};

type McpCapabilityLogoIcon = {
  logoDarkUrl?: string | null;
  logoUrl?: string | null;
};

type RemoteHostConfigLike = {
  kind?: string | null;
};

function isRemoteHostConfig(
  hostConfig: RemoteHostConfigLike | null | undefined,
) {
  return (
    hostConfig?.kind === "ssh" ||
    hostConfig?.kind === "wsl" ||
    hostConfig?.kind === "remote-control"
  );
}

function isUrlLikePath(path: string) {
  return urlLikePathPattern.test(path);
}

function isMcpCapabilityLogoIcon(icon: unknown): icon is McpCapabilityLogoIcon {
  return (
    icon != null &&
    typeof icon === "object" &&
    ("logoUrl" in icon || "logoDarkUrl" in icon)
  );
}

function renderMcpCapabilityIcon(icon: unknown, className: string) {
  const fallback = createElement(McpServerIcon, {
    className: `${className} text-token-text-secondary`,
  });
  if (isValidElement(icon)) return icon;
  if (typeof icon === "function") return createElement(icon, { className });
  if (!isMcpCapabilityLogoIcon(icon)) return fallback;

  return createElement(ConnectorLogoImage, {
    alt: "",
    className: `${className} object-contain`,
    fallback,
    logoDarkUrl: icon.logoDarkUrl ?? undefined,
    logoUrl: icon.logoUrl ?? undefined,
  });
}

export {
  activateSidePanelPlacement,
  createReadFileContents,
  getImagePreviewDisplayMode,
  getPanelTabPlacement,
  getPathBasename,
  getPathExtension,
  getSidePanelController,
  getWorkspaceFilePanelTabSource,
  initArtifactPreviewRuntime,
  initFileTypeDetectionHelpers,
  initOpenFileOutcomeEventRuntime,
  initVscodeApiBridge,
  isAbsoluteOrWindowsPath,
  isMarkdownPreviewPath,
  isPdfPreviewPath,
  isRemoteHostConfig,
  isUrlLikePath,
  logScopedProductEvent,
  mcpCapabilityPanelTab,
  openArtifactPanelTab,
  openFileOutcomeEvent,
  openWorkspaceFilePanelTab,
  readFileContentSampleByteLimit,
  readRouteScopeValue,
  renderMcpCapabilityIcon,
  resolveWorkspacePathFromCwd,
  sendHostRequest,
  sidePanelPlacements,
};
