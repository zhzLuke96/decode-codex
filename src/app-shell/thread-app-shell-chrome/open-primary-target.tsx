// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Local project primary open-target control for the thread header.
import { useMemo, useState, type SyntheticEvent } from "react";
import type { OpenTarget, OpenTargetRequest } from "./types";

export interface OpenPrimaryTargetButtonProps {
  cwd?: string | null;
  hostDisplayName?: string | null;
  onOpenTarget?: (target: OpenTarget, request: OpenTargetRequest) => void;
  openTargets?: readonly OpenTarget[];
  preferredOpenTargetId?: string | null;
}

export function OpenPrimaryTargetButton({
  cwd,
  hostDisplayName,
  onOpenTarget,
  openTargets = [],
  preferredOpenTargetId,
}: OpenPrimaryTargetButtonProps) {
  const [iconCache, setIconCache] = useState<Map<string, string> | null>(null);
  const visibleTargets = useMemo(
    () => openTargets.filter(isVisibleAvailableTarget),
    [openTargets],
  );
  const preferredTarget =
    visibleTargets.find((target) => target.id === preferredOpenTargetId) ??
    visibleTargets.find((target) => target.kind === "editor") ??
    visibleTargets[0] ??
    null;
  const isLoading =
    openTargets.length > 0 && openTargets.some(isTargetAvailabilityPending);

  if (!cwd || (visibleTargets.length === 0 && !isLoading)) return null;

  const title =
    preferredTarget == null
      ? "Open in"
      : `Open in ${preferredTarget.label}${
          hostDisplayName ? ` on ${hostDisplayName}` : ""
        }`;
  const openPreferredTarget = () => {
    if (preferredTarget == null) return;
    onOpenTarget?.(preferredTarget, {
      appPath: preferredTarget.appPath,
      openMode: "workspace",
      persistPreferred: false,
    });
  };
  const cacheTargetIcons = (open: boolean) => {
    setIconCache(
      open ? new Map(visibleTargets.map(readTargetIconCacheEntry)) : null,
    );
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        className="flex h-token-button-composer cursor-interaction items-center gap-1.5 rounded-l-lg border border-token-border bg-token-bg-fog px-2 py-0 text-sm text-token-button-tertiary-foreground hover:bg-token-list-hover-background"
        aria-label={title}
        title={title}
        disabled={preferredTarget == null}
        onClick={openPreferredTarget}
      >
        <OpenTargetIcon target={preferredTarget} iconCache={iconCache} />
        <span
          className="truncate"
          data-message-id="localConversationPage.openPrimaryTarget"
        >
          Open in
        </span>
      </button>
      <details
        className="relative"
        onToggle={(event) => cacheTargetIcons(event.currentTarget.open)}
      >
        <summary
          className="flex h-token-button-composer cursor-interaction list-none items-center rounded-r-lg border border-l-0 border-token-border bg-token-bg-fog px-1.5 py-0 text-sm text-token-button-tertiary-foreground hover:bg-token-list-hover-background"
          aria-label="Choose open target"
          title="Choose open target"
        >
          <span aria-hidden="true">v</span>
        </summary>
        <div className="absolute right-0 z-50 mt-2 flex min-w-48 flex-col gap-1 rounded-lg border border-token-border bg-token-dropdown-background p-1 shadow-lg">
          {visibleTargets.length === 0 ? (
            <OpenTargetLoadingItem />
          ) : (
            visibleTargets.map((target) => (
              <button
                key={target.id}
                type="button"
                className="flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-token-list-hover-background"
                onClick={() =>
                  onOpenTarget?.(target, {
                    appPath: target.appPath,
                    openMode: "workspace",
                    persistPreferred: true,
                  })
                }
              >
                <OpenTargetIcon target={target} iconCache={iconCache} />
                <span className="truncate">{target.label}</span>
              </button>
            ))
          )}
        </div>
      </details>
    </div>
  );
}

interface OpenTargetIconProps {
  iconCache: Map<string, string> | null;
  target: OpenTarget | null;
}

function OpenTargetIcon({ iconCache, target }: OpenTargetIconProps) {
  if (target == null) {
    return (
      <span className="icon-sm inline-flex shrink-0 items-center justify-center">
        <span className="size-4 rounded bg-token-bg-tertiary" />
      </span>
    );
  }

  const iconSource =
    iconCache?.get(target.id) ?? target.resolvedIcon ?? target.icon;

  return (
    <span className="icon-sm inline-flex shrink-0 items-center justify-center">
      {iconSource ? (
        <img
          alt=""
          className="icon-sm"
          src={iconSource}
          onError={handleTargetIconError}
        />
      ) : (
        <span className="size-4 rounded bg-token-bg-tertiary" />
      )}
    </span>
  );
}

function OpenTargetLoadingItem() {
  return (
    <div className="flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5">
      <span className="size-4 rounded bg-token-bg-tertiary" />
      <span className="h-3 w-24 rounded bg-token-bg-tertiary" />
    </div>
  );
}

function readTargetIconCacheEntry(target: OpenTarget): [string, string] {
  return [target.id, target.resolvedIcon ?? target.icon ?? "apps/vscode.png"];
}

function isVisibleAvailableTarget(target: OpenTarget) {
  return !target.hidden && target.available === true;
}

function isTargetAvailabilityPending(target: OpenTarget) {
  return target.available == null || target.resolvedIcon === undefined;
}

function handleTargetIconError(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.src = "apps/vscode.png";
}
