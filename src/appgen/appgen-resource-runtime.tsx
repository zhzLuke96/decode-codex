// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Restored from the appgen resource/share paths.
// Shared helpers for generated-site resource cards and assistant link badges.
import React from "react";
import {
  _appScopeA as useAppScopeQueryValue,
  appScopeO as useAppScopeStore,
} from "../boundaries/app-scope";
import { ii as appgenProjectQuery } from "../boundaries/thread-context-inputs.facade";
import { openModalControllerModal } from "../ui/modal-controller-state";
import { AppgenShareDialog } from "../features/appgen-share-dialog";
import { AppgenSitesIcon } from "./appgen-sites-icon";
import type {
  AppgenProject,
  QueryResult,
} from "../features/appgen-share-dialog/types";

type ModalControllerStore = Parameters<typeof openModalControllerModal>[0];

export type AssistantResourceBadge = {
  customIcon: React.ReactNode;
  customTooltip: React.ReactNode;
  tooltipDelayDuration: number;
};

export type AssistantResourceHoverRenderer = React.ComponentType<{
  children: (badge: AssistantResourceBadge | null) => React.ReactNode;
  href: string;
  iconClassName?: string;
}>;

export const AppgenSiteIcon = AppgenSitesIcon;

export const AssistantResourceHoverContext =
  React.createContext<AssistantResourceHoverRenderer | null>(null);

export function useAppgenProject(
  projectId: string,
): QueryResult<AppgenProject> {
  return useAppScopeQueryValue(appgenProjectQuery, projectId);
}

export const useModalController = useAppScopeStore;

export function openAppgenShareDialog(
  modalController: ModalControllerStore,
  projectId: string,
) {
  openModalControllerModal(modalController, AppgenShareDialog, { projectId });
}

export function matchesResourceUrl(
  href: string | null | undefined,
  resourceUrl: string | null | undefined,
): boolean {
  const normalizedHref = normalizeComparableResourceUrl(href);
  const normalizedResourceUrl = normalizeComparableResourceUrl(resourceUrl);
  if (normalizedHref == null || normalizedResourceUrl == null) {
    return false;
  }
  if (normalizedHref === normalizedResourceUrl) {
    return true;
  }
  const hrefWithoutSlash = trimTrailingSlash(normalizedHref);
  const resourceWithoutSlash = trimTrailingSlash(normalizedResourceUrl);
  return (
    hrefWithoutSlash === resourceWithoutSlash ||
    hrefWithoutSlash.startsWith(`${resourceWithoutSlash}/`)
  );
}

function normalizeComparableResourceUrl(
  url: string | null | undefined,
): string | null {
  if (url == null) return null;
  const trimmedUrl = url.trim();
  if (trimmedUrl.length === 0) return null;
  try {
    const base =
      typeof window === "undefined" ? "https://codex.local/" : window.location.href;
    const parsedUrl = new URL(trimmedUrl, base);
    parsedUrl.hash = "";
    if (
      (parsedUrl.protocol === "https:" && parsedUrl.port === "443") ||
      (parsedUrl.protocol === "http:" && parsedUrl.port === "80")
    ) {
      parsedUrl.port = "";
    }
    return parsedUrl.toString();
  } catch {
    return trimmedUrl;
  }
}

function trimTrailingSlash(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}
