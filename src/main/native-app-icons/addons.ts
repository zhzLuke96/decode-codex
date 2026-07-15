// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native addon resolution for desktop app icons.

import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import type { NativeIconAddon, RequireLike } from "./types";

export const COMPUTER_USE_APP_ICONS_ADDON_FILENAME =
  "computer-use-app-icons.node";
export const SKY_NATIVE_ADDON_FILENAME = "sky.node";

const requireFromHere = createRequire(import.meta.url);

export function loadWindowsComputerUseAppIconsAddon({
  electronAppPath,
  requireLike = requireFromHere,
  resourcesPath,
}: {
  electronAppPath: string;
  requireLike?: RequireLike;
  resourcesPath?: string | null;
}): NativeIconAddon {
  for (const candidatePath of getWindowsComputerUseAppIconsAddonPaths({
    electronAppPath,
    resourcesPath,
  })) {
    if (existsSync(candidatePath)) {
      return assertNativeIconAddon(requireLike(candidatePath));
    }
  }
  throw Error("Computer Use app icons native addon is unavailable");
}

export function loadSkyNativeIconAddon({
  electronAppPath,
  requireLike = requireFromHere,
  resourcesPath,
}: {
  electronAppPath: string;
  requireLike?: RequireLike;
  resourcesPath?: string | null;
}): NativeIconAddon {
  for (const candidatePath of getSkyNativeAddonPaths({
    electronAppPath,
    resourcesPath,
  })) {
    if (existsSync(candidatePath))
      return assertNativeIconAddon(requireLike(candidatePath));
  }
  throw Error("Sky native addon is unavailable");
}

export function getWindowsComputerUseAppIconsAddonPaths({
  electronAppPath,
  resourcesPath,
}: {
  electronAppPath: string;
  resourcesPath?: string | null;
}): string[] {
  return [
    ...(resourcesPath == null
      ? []
      : [
          path.join(
            resourcesPath,
            "native",
            COMPUTER_USE_APP_ICONS_ADDON_FILENAME,
          ),
        ]),
    path.join(
      electronAppPath,
      "native",
      "computer-use-app-icons-addon",
      "build",
      `Release-${process.arch}`,
      "computer_use_app_icons.node",
    ),
  ];
}

export function getSkyNativeAddonPaths({
  electronAppPath,
  resourcesPath,
}: {
  electronAppPath: string;
  resourcesPath?: string | null;
}): string[] {
  return [
    ...(resourcesPath == null
      ? []
      : [path.join(resourcesPath, "native", SKY_NATIVE_ADDON_FILENAME)]),
    path.join(
      electronAppPath,
      "native",
      "sky-addon",
      "build",
      `Release-${process.arch}`,
      SKY_NATIVE_ADDON_FILENAME,
    ),
  ];
}

function assertNativeIconAddon(value: unknown): NativeIconAddon {
  if (
    typeof value === "object" &&
    value != null &&
    typeof (value as NativeIconAddon).iconSmallForAppPath === "function"
  ) {
    return value as NativeIconAddon;
  }
  throw Error("Native icon addon has an invalid shape");
}
