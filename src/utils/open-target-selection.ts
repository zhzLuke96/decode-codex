// Restored from ref/webview/assets/open-target-selection-D_PPYsC7.js
// open-target-selection-D_PPYsC7 chunk restored from the Codex webview bundle.
type OpenTarget = {
  appPath?: string | null;
  hidden?: boolean;
  kind?: string;
  target: string;
};

type OpenTargetMode = "editor" | "native" | string;

export function filterOpenTargets({
  targets,
  availableTargets,
  includeHiddenTargets = false,
  mode = "editor",
}: {
  targets: OpenTarget[];
  availableTargets: string[];
  includeHiddenTargets?: boolean;
  mode?: OpenTargetMode;
}): OpenTarget[] {
  const appTargets = targets.filter((target) => target.appPath != null);
  if (appTargets.length > 0) return appTargets;
  if (mode === "native") {
    return targets.filter(
      (target) =>
        target.target === "systemDefault" || target.target === "fileManager",
    );
  }
  const available = new Set(availableTargets);
  return targets.filter(
    (target) =>
      available.has(target.target) && (includeHiddenTargets || !target.hidden),
  );
}

export function selectOpenTarget({
  preferredTarget,
  targets,
  availableTargets,
  includeHiddenTargets = true,
  mode = "editor",
}: {
  preferredTarget?: string | null;
  targets: OpenTarget[];
  availableTargets: string[];
  includeHiddenTargets?: boolean;
  mode?: OpenTargetMode;
}): OpenTarget | null {
  const options = filterOpenTargets({
    targets,
    availableTargets,
    includeHiddenTargets,
    mode,
  });
  return options.length === 0
    ? null
    : preferredTarget
      ? (options.find((target) => target.target === preferredTarget) ??
        options[0] ??
        null)
      : (options[0] ?? null);
}

export function isEditorOpenTarget(target: OpenTarget): boolean {
  return target.appPath == null && target.kind === "editor";
}
