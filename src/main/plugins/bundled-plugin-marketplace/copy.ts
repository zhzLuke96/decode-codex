// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Directory copy helper for bundled plugin payloads.

import { execFile as execFileCallback } from "node:child_process";
import { cp } from "node:fs/promises";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);

export async function copyBundledPluginDirectory({
  copyDirectory = cp,
  execFileCommand = execFile,
  platform = process.platform,
  source,
  target,
}: {
  copyDirectory?: typeof cp;
  execFileCommand?: (
    file: string,
    args: string[],
  ) => Promise<unknown> | unknown;
  platform?: NodeJS.Platform | string;
  source: string;
  target: string;
}): Promise<void> {
  if (platform === "darwin") {
    await execFileCommand("ditto", ["--noqtn", source, target]);
    return;
  }

  await copyDirectory(source, target, {
    recursive: true,
    verbatimSymlinks: true,
  });
}
