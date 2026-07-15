// Restored from ref/webview/assets/get-project-name-C44mbjEu.js
// get-project-name-C44mbjEu chunk restored from the Codex webview bundle.
export function getProjectName(
  projectPath: string | null | undefined,
  explicitName?: string | null,
): string | null {
  if (explicitName && explicitName.trim().length > 0) {
    return trimProjectName(explicitName);
  }
  if (!projectPath) return null;

  const normalizedPath = projectPath.trim();
  if (!normalizedPath) return null;

  const pathSegments = normalizedPath.split(/[/\\]+/).filter(Boolean);
  return trimProjectName(
    pathSegments[pathSegments.length - 1] ?? normalizedPath,
  );
}

function trimProjectName(name: string): string {
  const trimmed = name.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  return words.length <= 3 ? trimmed : words.slice(0, 3).join(" ");
}
