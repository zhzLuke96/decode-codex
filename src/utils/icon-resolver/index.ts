// Restored from ref/webview/assets/iconResolver-DrMXO_qJ.js

import {
  completeOnlyExtensionIconTokens,
  fileExtensionIconTokens,
  fileNameIconTokens,
  spriteSetsWithCompleteBuiltins,
  standardFileIconTokens,
} from "./icon-mappings";
import { fileTreeIconSpriteBySet } from "./sprite-data";
import type {
  FileTreeIconResolver,
  FileTreeIconResolverConfig,
  FileTreeIconResolverInput,
  FileTreeIconSet,
  IconRemapValue,
  IconResolution,
  NormalizedFileTreeIconResolverConfig,
} from "./types";

function builtinIconName(token: string): string {
  return `file-tree-builtin-${token}`;
}

function hasCustomResolutionRules(config: FileTreeIconResolverConfig): boolean {
  return (
    config.spriteSheet != null ||
    config.remap != null ||
    config.byFileName != null ||
    config.byFileExtension != null ||
    config.byFileNameContains != null
  );
}

function normalizeFileExtension(extension: string): string {
  return extension.trim().toLowerCase();
}

function basename(filePath: string): string {
  return filePath.split("/").at(-1) ?? filePath;
}

function extensionSuffixes(fileName: string): string[] {
  const parts = fileName.toLowerCase().split(".");
  const suffixes: string[] = [];

  for (let index = 1; index < parts.length; index += 1) {
    suffixes.push(parts.slice(index).join("."));
  }

  return suffixes;
}

function normalizeRemap(
  value: IconRemapValue,
  remappedFrom: string,
): IconResolution {
  return typeof value === "string"
    ? { name: value, remappedFrom }
    : { ...value, remappedFrom };
}

function resolveBuiltinToken(
  set: FileTreeIconSet,
  fileName: string,
  suffixes: string[],
): string | undefined {
  if (set === "minimal" || set === "none") {
    return undefined;
  }

  const useCompleteSet = set === "complete";
  const tokenByName =
    fileNameIconTokens[
      fileName.toLowerCase() as keyof typeof fileNameIconTokens
    ];

  if (
    tokenByName != null &&
    (useCompleteSet || standardFileIconTokens.has(tokenByName))
  ) {
    return tokenByName;
  }

  for (const suffix of suffixes) {
    if (useCompleteSet) {
      const completeToken =
        completeOnlyExtensionIconTokens[
          suffix as keyof typeof completeOnlyExtensionIconTokens
        ];

      if (completeToken != null) {
        return completeToken;
      }
    }

    const tokenByExtension =
      fileExtensionIconTokens[suffix as keyof typeof fileExtensionIconTokens];

    if (
      tokenByExtension != null &&
      (useCompleteSet || standardFileIconTokens.has(tokenByExtension))
    ) {
      return tokenByExtension;
    }
  }

  return "default";
}

function normalizeIconResolverConfig(
  input?: FileTreeIconResolverInput,
): NormalizedFileTreeIconResolverConfig {
  if (input == null) {
    return { set: "complete", colored: true };
  }

  if (typeof input === "string") {
    return { set: input, colored: true };
  }

  return {
    ...input,
    set: input.set ?? (hasCustomResolutionRules(input) ? "none" : "complete"),
    colored: input.colored ?? true,
  };
}

function hasCompleteBuiltinSprites(set: FileTreeIconSet): boolean {
  return set !== "none" && spriteSetsWithCompleteBuiltins.has(set);
}

function getFileTreeIconSprite(set: FileTreeIconSet): string | undefined {
  return fileTreeIconSpriteBySet[
    (set === "none" ? "minimal" : set) as keyof typeof fileTreeIconSpriteBySet
  ];
}

function createFileTreeIconResolver(
  input?: FileTreeIconResolverInput,
): FileTreeIconResolver {
  const config = normalizeIconResolverConfig(input);
  const remap = config.remap;
  const byFileName = new Map<string, IconRemapValue>();

  for (const [fileName, value] of Object.entries(config.byFileName ?? {})) {
    byFileName.set(fileName.toLowerCase(), value);
  }

  const byFileExtension = new Map<string, IconRemapValue>();

  for (const [extension, value] of Object.entries(
    config.byFileExtension ?? {},
  )) {
    byFileExtension.set(normalizeFileExtension(extension), value);
  }

  const byFileNameContains = Object.entries(
    config.byFileNameContains ?? {},
  ).map(([needle, value]) => [needle.toLowerCase(), value] as const);

  return {
    resolveIcon(iconName, filePath) {
      if (iconName === "file-tree-icon-file" && filePath != null) {
        const fileName = basename(filePath);
        const lowerFileName = fileName.toLowerCase();
        const exactFileNameIcon = byFileName.get(lowerFileName);

        if (exactFileNameIcon != null) {
          return normalizeRemap(exactFileNameIcon, iconName);
        }

        for (const [needle, value] of byFileNameContains) {
          if (lowerFileName.includes(needle)) {
            return normalizeRemap(value, iconName);
          }
        }

        const suffixes = extensionSuffixes(fileName);

        for (const suffix of suffixes) {
          const extensionIcon = byFileExtension.get(suffix);

          if (extensionIcon != null) {
            return normalizeRemap(extensionIcon, iconName);
          }
        }

        const builtinToken = resolveBuiltinToken(
          config.set,
          fileName,
          suffixes,
        );

        if (builtinToken != null && config.set !== "none") {
          return {
            name: builtinIconName(builtinToken),
            remappedFrom: iconName,
            token: builtinToken,
          };
        }
      }

      const remappedIcon = remap?.[iconName];
      return remappedIcon == null
        ? { name: iconName }
        : normalizeRemap(remappedIcon, iconName);
    },
  };
}

export {
  hasCompleteBuiltinSprites,
  normalizeIconResolverConfig,
  getFileTreeIconSprite,
  createFileTreeIconResolver,
};
