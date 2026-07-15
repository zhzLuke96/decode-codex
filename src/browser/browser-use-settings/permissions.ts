// Restored from ref/webview/assets/browser-use-settings-Ct3jD7gG.js
// Browser Use site-permission normalization and mutation planning helpers.

import type {
  BrowserUseDomainListResource,
  BrowserUseOriginRuleUpdate,
  BrowserUseOriginState,
  BrowserUsePermissionKind,
  BrowserUsePermissionResource,
  BrowserUsePermissionValue,
  BrowserUsePermissionValues,
  BrowserUseSitePermissionPreset,
  BrowserUseSitePermissionRow,
} from "./types";

export const browserUsePermissionResources = {
  origin: "origin",
  download: "download",
  upload: "upload",
  fullCdp: "fullCdp",
} as const;

export const defaultBrowserUsePermissionValues: BrowserUsePermissionValues = {
  origin: "default",
  download: "default",
  upload: "default",
  fullCdp: "default",
};

export const defaultAdvancedBrowserUsePermissionValues: Omit<
  BrowserUsePermissionValues,
  "origin"
> = {
  download: "default",
  upload: "default",
  fullCdp: "default",
};

const PERMISSION_RESOURCE_FIELDS = {
  origin: {
    allowed: "allowedOrigins",
    denied: "deniedOrigins",
  },
  download: {
    allowed: "allowedDownloadOrigins",
    denied: "deniedDownloadOrigins",
  },
  upload: {
    allowed: "allowedUploadOrigins",
    denied: "deniedUploadOrigins",
  },
  fullCdp: {
    allowed: "allowedFullCdpOrigins",
    denied: "deniedFullCdpOrigins",
  },
} as const satisfies Record<
  BrowserUsePermissionResource,
  Record<BrowserUsePermissionKind, keyof BrowserUseOriginState>
>;

const DOMAIN_LIST_RESOURCE_TO_PERMISSION_RESOURCE = {
  origins: "origin",
  downloads: "download",
  uploads: "upload",
} as const satisfies Record<
  BrowserUseDomainListResource,
  Exclude<BrowserUsePermissionResource, "fullCdp">
>;

export function getVisibleBrowserUsePermissionResources(
  isFullCdpAccessEnabled: boolean,
): BrowserUsePermissionResource[] {
  const resources: BrowserUsePermissionResource[] = [
    "origin",
    "download",
    "upload",
  ];
  if (isFullCdpAccessEnabled) resources.push("fullCdp");
  return resources;
}

export function buildBrowserUseSitePermissionRows(
  state: BrowserUseOriginState,
  resources: BrowserUsePermissionResource[],
): BrowserUseSitePermissionRow[] {
  const origins = new Set<string>();
  for (const resource of resources) {
    for (const origin of getBrowserUseOriginsForResource(
      state,
      resource,
      "allowed",
    )) {
      origins.add(origin);
    }
    for (const origin of getBrowserUseOriginsForResource(
      state,
      resource,
      "denied",
    )) {
      origins.add(origin);
    }
  }
  return [...origins]
    .sort((left, right) => left.localeCompare(right))
    .map((origin) => ({
      origin,
      values: {
        origin: getBrowserUsePermissionValue(state, "origin", origin),
        download: getBrowserUsePermissionValue(state, "download", origin),
        upload: getBrowserUsePermissionValue(state, "upload", origin),
        fullCdp: getBrowserUsePermissionValue(state, "fullCdp", origin),
      },
    }));
}

export function getBrowserUseSitePermissionPreset(
  row: BrowserUseSitePermissionRow,
  resources: BrowserUsePermissionResource[],
): BrowserUseSitePermissionPreset {
  if (
    resources.some(
      (resource) => resource !== "origin" && row.values[resource] !== "default",
    )
  ) {
    return "custom";
  }
  switch (row.values.origin) {
    case "allowed":
      return "allowed";
    case "denied":
      return "denied";
    case "default":
      return "custom";
  }
}

export function buildBrowserUseOriginRuleUpdates({
  nextValues,
  origin,
  resources,
  values,
}: {
  nextValues: BrowserUsePermissionValues;
  origin: string;
  resources: BrowserUsePermissionResource[];
  values: BrowserUsePermissionValues;
}): BrowserUseOriginRuleUpdate[] {
  return resources.flatMap((resource) => {
    const previousValue = values[resource];
    const nextValue = nextValues[resource];
    if (nextValue === previousValue) return [];
    switch (nextValue) {
      case "default":
        return [
          {
            action: "remove",
            kind: "allowed",
            origin,
            resource,
          },
          {
            action: "remove",
            kind: "denied",
            origin,
            resource,
          },
        ];
      case "allowed":
      case "denied":
        return [
          {
            action: "add",
            kind: nextValue,
            origin,
            resource,
          },
        ];
    }
  });
}

export function getBrowserUsePermissionValue(
  state: BrowserUseOriginState,
  resource: BrowserUsePermissionResource,
  origin: string,
): BrowserUsePermissionValue {
  if (
    getBrowserUseOriginsForResource(state, resource, "denied").includes(origin)
  ) {
    return "denied";
  }
  if (
    getBrowserUseOriginsForResource(state, resource, "allowed").includes(origin)
  ) {
    return "allowed";
  }
  return "default";
}

export function getBrowserUseOriginsForResource(
  state: BrowserUseOriginState,
  resource: BrowserUsePermissionResource,
  kind: BrowserUsePermissionKind,
): string[] {
  const field = PERMISSION_RESOURCE_FIELDS[resource][kind];
  return state[field] ?? [];
}

export function getBrowserUseDomainListOrigins(
  state: BrowserUseOriginState,
  resource: BrowserUseDomainListResource,
  kind: BrowserUsePermissionKind,
): string[] {
  return getBrowserUseOriginsForResource(
    state,
    DOMAIN_LIST_RESOURCE_TO_PERMISSION_RESOURCE[resource],
    kind,
  );
}
