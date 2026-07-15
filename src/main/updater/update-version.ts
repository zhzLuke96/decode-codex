// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

export function resolveUpdateCheckIntervalMs(): number {
  const value = process.env.SPARKLE_UPDATE_INTERVAL_MINUTES;
  if (!value) return 15 * 60 * 1000;
  const minutes = Number(value);
  return Number.isFinite(minutes)
    ? minutes <= 0
      ? 0
      : minutes * 60 * 1000
    : 15 * 60 * 1000;
}

export function compareBuildVersions(left: string, right: string): number {
  const leftParts = parseBuildVersion(left);
  const rightParts = parseBuildVersion(right);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const leftPart = leftParts[index] ?? 0;
    const rightPart = rightParts[index] ?? 0;
    if (leftPart !== rightPart) return leftPart - rightPart;
  }
  return 0;
}

export function isBuildVersionComparable(value: string): boolean {
  const parts = value.trim().split(".");
  return parts.length > 1 && parts.every((part) => /^\d+$/.test(part));
}

function parseBuildVersion(value: string): number[] {
  const parts = value.trim().split(".");
  if (parts.some((part) => !/^\d+$/.test(part))) {
    throw Error(`Invalid build version '${value}'.`);
  }
  return parts.map((part) => Number.parseInt(part, 10));
}
