// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Artifact identity, labels, and icons for thread panel suggestions.
import type { MouseEvent } from "react";
import { AppArtifactIcon, BrowserPanelIcon, FilePanelIcon } from "./icons";
import type { OutputArtifact } from "./types";

export function getArtifactStableKey(artifact: OutputArtifact) {
  switch (artifact.type) {
    case "file":
    case "generated-image":
      return `file:${artifact.path}`;
    case "google-drive":
      return `google-drive:${artifact.url}`;
    case "appgen-app":
      return `appgen-app:${artifact.projectId}`;
    case "website":
      return `website:${artifact.target}`;
  }
}

export function getArtifactDisplayTitle(artifact: OutputArtifact) {
  switch (artifact.type) {
    case "file":
    case "generated-image":
      return getPathBasename(artifact.path);
    case "google-drive":
      return artifact.title;
    case "appgen-app":
      return artifact.title ?? getUrlHost(artifact.url) ?? artifact.url;
    case "website":
      return formatWebsiteArtifactTarget(artifact.target);
  }
}

export function getArtifactTooltipTitle(artifact: OutputArtifact) {
  switch (artifact.type) {
    case "file":
    case "generated-image":
      return artifact.path;
    case "google-drive":
      return artifact.url;
    case "appgen-app":
      return getUrlHost(artifact.url) ?? artifact.url;
    case "website":
      return artifact.target;
  }
}

export function formatWebsiteArtifactTarget(target: string) {
  try {
    const targetUrl = new URL(target);
    const path = targetUrl.pathname === "/" ? "" : targetUrl.pathname;
    return `${targetUrl.host}${path}${targetUrl.search}`;
  } catch {
    return getPathBasename(target) || target;
  }
}

export interface ThreadPanelArtifactIconProps {
  artifact: OutputArtifact;
  iconClassName?: string;
  imageClassName?: string;
}

export function ThreadPanelArtifactIcon({
  artifact,
  iconClassName,
  imageClassName,
}: ThreadPanelArtifactIconProps) {
  if (artifact.type === "generated-image") {
    return (
      <img
        alt=""
        className={imageClassName ?? iconClassName}
        src={artifact.path}
      />
    );
  }

  if (artifact.type === "appgen-app") {
    return <AppArtifactIcon className={iconClassName} />;
  }

  if (artifact.type === "website") {
    return <BrowserPanelIcon className={iconClassName} />;
  }

  return <FilePanelIcon className={iconClassName} />;
}

export function isModifiedClick(event: MouseEvent<HTMLElement>) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1;
}

function getPathBasename(path: string) {
  const normalizedPath = path.replace(/\\/g, "/");
  return normalizedPath.split("/").filter(Boolean).at(-1) ?? normalizedPath;
}

function getUrlHost(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}
