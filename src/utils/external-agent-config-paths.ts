// Restored from ref/webview/assets/external-agent-config-paths-BKS908XB.js
// external-agent-config-paths-BKS908XB chunk restored from the Codex webview bundle.
export function joinExternalAgentConfigPath(
  rootPath: string,
  ...segments: string[]
): string {
  const separator = pathSeparatorFor(rootPath);
  return [
    rootPath.replace(/[\\/]+$/, ""),
    ...segments.map((segment) => segment.replace(/^[\\/]+|[\\/]+$/g, "")),
  ].join(separator);
}

export function dirnameExternalAgentConfigPath(filePath: string): string {
  const separator = pathSeparatorFor(filePath);
  const trimmed = filePath.replace(/[\\/]+$/, "");
  const index = trimmed.lastIndexOf(separator);
  if (index === -1) return ".";
  if (index === 0) return separator;
  const parent = trimmed.slice(0, index);
  return isWindowsDriveRoot(parent) || isUncShareRoot(parent)
    ? `${parent}${separator}`
    : parent;
}

function pathSeparatorFor(filePath: string): "\\" | "/" {
  return filePath.includes("\\") ? "\\" : "/";
}

function isWindowsDriveRoot(filePath: string): boolean {
  return /^[A-Za-z]:$/.test(filePath);
}

function isUncShareRoot(filePath: string): boolean {
  return /^\\\\[^\\]+\\[^\\]+$/.test(filePath);
}
