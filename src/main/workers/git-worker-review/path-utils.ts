// Restored from ref/.vite/build/worker.js
// Review path normalization helpers.

import type { WorkerExecutionHostClient } from "../worker-execution-host-client";

export function normalizeReviewPath({
  cwd,
  filePath,
  pathApi,
  root,
}: {
  cwd: string;
  filePath: string;
  pathApi: Awaited<ReturnType<WorkerExecutionHostClient["platformPath"]>>;
  root: string;
}): string {
  const base =
    filePath.startsWith("./") ||
    filePath.startsWith("../") ||
    filePath.startsWith(".\\") ||
    filePath.startsWith("..\\")
      ? cwd
      : root;
  const absolutePath = pathApi.isAbsolute(filePath)
    ? filePath
    : pathApi.resolve(base, filePath);
  return absolutePath === root
    ? ""
    : pathApi
        .relative(root, absolutePath)
        .split(/[\\/]+/)
        .join("/");
}
