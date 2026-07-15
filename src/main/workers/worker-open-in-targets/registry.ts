// Restored from ref/.vite/build/worker.js
// Built-in OpenIn target registry and platform target selection.

import { createOpenInPlatformHelpers } from "./platform";
import {
  buildCodeEditorArgs,
  buildFileManagerArgs,
  buildJetBrainsArgs,
  buildLaunchServicesArgs,
  buildTextMateArgs,
  buildWindowsTerminalArgs,
  buildWslTerminalArgs,
  buildZedArgs,
  createCursorDarwinCliEnv,
  getDirectoryToOpen,
  openMacDefault,
  openWindowsFileManagerPath,
  openWindowsStartTarget,
  openWithElectronShell,
  openXcodePath,
  openZedPath,
} from "./launch";
import type {
  OpenInPlatformName,
  OpenInPlatformTarget,
  OpenInTargetDefinition,
  OpenInTargetKind,
} from "./types";

const platform = createOpenInPlatformHelpers();

const OPEN_IN_TARGET_DEFINITIONS: OpenInTargetDefinition[] = [
  createCodeFamilyOpenInTarget({
    id: "vscode",
    label: "VS Code",
    icon: "apps/vscode.png",
    darwinCliPaths: [
      "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code",
      "/Applications/Code.app/Contents/Resources/app/bin/code",
    ],
    windowsPathCommand: "code",
    windowsExecutableName: "Code.exe",
    windowsInstallDirName: "Microsoft VS Code",
  }),
  createCodeFamilyOpenInTarget({
    id: "vscodeInsiders",
    label: "VS Code Insiders",
    icon: "apps/vscode-insiders.png",
    darwinCliPaths: [
      "/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/bin/code",
      "/Applications/Code - Insiders.app/Contents/Resources/app/bin/code",
    ],
    windowsPathCommand: "code-insiders",
    windowsExecutableName: "Code - Insiders.exe",
    windowsInstallDirName: "Microsoft VS Code Insiders",
  }),
  createCodeFamilyOpenInTarget({
    id: "antigravity",
    label: "Antigravity",
    icon: "apps/antigravity.png",
    darwinCliPaths: [
      "/Applications/Antigravity.app/Contents/Resources/app/bin/antigravity",
    ],
    windowsPathCommands: ["antigravity.exe", "antigravity.cmd", "antigravity"],
    windowsFallbackPaths: [
      ["Antigravity", "Antigravity.exe"],
      ["antigravity", "Antigravity.exe"],
      ["Antigravity", "bin", "antigravity.cmd"],
      ["antigravity", "bin", "antigravity.cmd"],
      ["Antigravity", "resources", "app", "bin", "antigravity.cmd"],
      ["antigravity", "resources", "app", "bin", "antigravity.cmd"],
    ],
  }),
  createCursorOpenInTarget(),
  {
    id: "visualStudio",
    platforms: {
      win32: {
        label: "Visual Studio",
        icon: "apps/vscode.png",
        kind: "editor",
        detect: platform.detectVisualStudio,
        args: (path) => [path],
      },
    },
  },
  createDarwinLaunchServicesTarget({
    id: "bbedit",
    label: "BBEdit",
    icon: "apps/bbedit.png",
    kind: "editor",
    appName: "BBEdit",
    explicitAppPaths: ["/Applications/BBEdit.app"],
  }),
  createDarwinLaunchServicesTarget({
    id: "emacs",
    label: "Emacs",
    icon: "apps/emacs.png",
    kind: "editor",
    appName: "Emacs",
    explicitAppPaths: ["/Applications/Emacs.app"],
  }),
  createSublimeTextTarget(),
  createZedOpenInTarget(),
  {
    id: "windsurf",
    platforms: {
      darwin: {
        label: "Windsurf",
        icon: "apps/windsurf.png",
        kind: "editor",
        detect: () =>
          platform.findExistingMacPath([
            "/Applications/Windsurf.app/Contents/Resources/app/bin/windsurf",
          ]),
        args: buildCodeEditorArgs,
        supportsSsh: true,
      },
    },
  },
  {
    id: "githubDesktop",
    platforms: {
      win32: {
        label: "GitHub Desktop",
        icon: "apps/vscode.png",
        kind: "editor",
        detect: platform.detectGitHubDesktop,
        args: (path) => [getDirectoryToOpen(path)],
      },
    },
  },
  {
    id: "systemDefault",
    platforms: {
      darwin: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
        args: (path) => [path],
        open: ({ appPath, path }) => openMacDefault(path, appPath),
      },
      win32: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
        args: (path) => [path],
        open: ({ path }) => openWithElectronShell(path),
      },
      linux: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
        args: (path) => [path],
        open: ({ path }) => openWithElectronShell(path),
      },
    },
  },
  {
    id: "fileManager",
    platforms: {
      darwin: {
        label: "Finder",
        icon: "apps/finder.png",
        kind: "fileManager",
        detect: () => "open",
        args: buildFileManagerArgs,
      },
      win32: {
        label: "File Explorer",
        icon: "apps/file-explorer.png",
        kind: "fileManager",
        detect: platform.detectWindowsExplorer,
        args: buildFileManagerArgs,
        open: ({ path }) => openWindowsFileManagerPath(path),
      },
    },
  },
  createTerminalTarget(),
  createGitBashTarget(),
  createCmderTarget(),
  createDarwinTerminalTarget({
    id: "iterm2",
    label: "iTerm2",
    icon: "apps/iterm2.png",
    appPaths: ["/Applications/iTerm.app", "/Applications/iTerm2.app"],
    appName: "iTerm",
  }),
  createDarwinTerminalTarget({
    id: "ghostty",
    label: "Ghostty",
    icon: "apps/ghostty.png",
    appPaths: ["/Applications/Ghostty.app"],
  }),
  createDarwinTerminalTarget({
    id: "warp",
    label: "Warp",
    icon: "apps/warp.png",
    appPaths: ["/Applications/Warp.app"],
  }),
  createWslTarget(),
  createXcodeTarget(),
  createJetBrainsTarget({
    id: "androidStudio",
    label: "Android Studio",
    icon: "apps/android-studio.png",
    toolboxTarget: "androidStudio",
    macExecutable: "studio",
    windowsPathCommands: ["studio64.exe", "studio.exe", "studio"],
    windowsInstallDirPrefixes: ["android studio"],
    windowsInstallExecutables: ["studio64.exe", "studio.exe"],
    windowsFallbackPaths: [
      ["Android", "Android Studio", "bin", "studio64.exe"],
      ["Android", "Android Studio", "bin", "studio.exe"],
    ],
  }),
  createJetBrainsTarget({
    id: "intellij",
    label: "IntelliJ IDEA",
    icon: "apps/intellij.png",
    toolboxTarget: "intellij",
    macExecutable: "idea",
    windowsPathCommands: ["idea64.exe", "idea.exe", "idea"],
    windowsInstallDirPrefixes: ["intellij idea", "idea"],
    windowsInstallExecutables: ["idea64.exe", "idea.exe"],
  }),
  createJetBrainsTarget({
    id: "rider",
    label: "Rider",
    icon: "apps/rider.png",
    toolboxTarget: "rider",
    macExecutable: "rider",
    windowsPathCommands: ["rider64.exe", "rider.exe", "rider"],
    windowsInstallDirPrefixes: ["rider"],
    windowsInstallExecutables: ["rider64.exe", "rider.exe"],
  }),
  createJetBrainsTarget({
    id: "goland",
    label: "GoLand",
    icon: "apps/goland.png",
    toolboxTarget: "goland",
    macExecutable: "goland",
  }),
  createJetBrainsTarget({
    id: "rustrover",
    label: "RustRover",
    icon: "apps/rustrover.png",
    toolboxTarget: "rustrover",
    macExecutable: "rustrover",
  }),
  createJetBrainsTarget({
    id: "pycharm",
    label: "PyCharm",
    icon: "apps/pycharm.png",
    toolboxTarget: "pycharm",
    macExecutable: "pycharm",
    windowsPathCommands: ["pycharm64.exe", "pycharm.exe", "pycharm"],
    windowsInstallDirPrefixes: ["pycharm"],
    windowsInstallExecutables: ["pycharm64.exe", "pycharm.exe"],
  }),
  createJetBrainsTarget({
    id: "webstorm",
    label: "WebStorm",
    icon: "apps/webstorm.svg",
    toolboxTarget: "webstorm",
    macExecutable: "webstorm",
    windowsPathCommands: ["webstorm64.exe", "webstorm.exe", "webstorm"],
    windowsInstallDirPrefixes: ["webstorm"],
    windowsInstallExecutables: ["webstorm64.exe", "webstorm.exe"],
  }),
  createJetBrainsTarget({
    id: "phpstorm",
    label: "PhpStorm",
    icon: "apps/phpstorm.png",
    toolboxTarget: "phpstorm",
    macExecutable: "phpstorm",
    windowsPathCommands: ["phpstorm64.exe", "phpstorm.exe", "phpstorm"],
    windowsInstallDirPrefixes: ["phpstorm"],
    windowsInstallExecutables: ["phpstorm64.exe", "phpstorm.exe"],
  }),
  createTextMateTarget(),
];
const OPEN_IN_TARGETS_BY_ID = new Map(
  OPEN_IN_TARGET_DEFINITIONS.map((definition) => [definition.id, definition]),
);

export function getOpenInPlatformTarget(
  targetId: string | null | undefined,
): OpenInPlatformTarget {
  if (!targetId) throw Error("Open target is required.");
  const definition = OPEN_IN_TARGETS_BY_ID.get(targetId);
  const platform = currentOpenInPlatform();
  const platformTarget =
    platform == null ? undefined : definition?.platforms[platform];
  if (definition == null || platformTarget == null) {
    throw Error(`Unknown open target "${targetId}"`);
  }
  return platformTarget;
}

function currentOpenInPlatform(): OpenInPlatformName | null {
  switch (process.platform) {
    case "darwin":
    case "linux":
    case "win32":
      return process.platform;
    default:
      return null;
  }
}

function createCodeFamilyOpenInTarget({
  id,
  label,
  icon,
  darwinCliPaths,
  windowsPathCommand,
  windowsPathCommands,
  windowsExecutableName,
  windowsInstallDirName,
  windowsFallbackPaths,
}: {
  id: string;
  label: string;
  icon: string;
  darwinCliPaths: string[];
  windowsPathCommand?: string;
  windowsPathCommands?: string[];
  windowsExecutableName?: string;
  windowsInstallDirName?: string;
  windowsFallbackPaths?: string[][];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "editor",
        detect: () => platform.findExistingMacPath(darwinCliPaths),
        args: buildCodeEditorArgs,
        supportsSsh: true,
      },
      win32: {
        label,
        icon,
        kind: "editor",
        detect: () => {
          if (
            windowsPathCommand &&
            windowsExecutableName &&
            windowsInstallDirName
          ) {
            return platform.detectWindowsCommandApplication({
              pathCommand: windowsPathCommand,
              executableName: windowsExecutableName,
              installDirName: windowsInstallDirName,
            });
          }
          return (
            platform.findWindowsPathCommand(windowsPathCommands ?? []) ??
            (windowsFallbackPaths
              ? platform.findWindowsProgramPath(windowsFallbackPaths)
              : null)
          );
        },
        args: buildCodeEditorArgs,
        supportsSsh: true,
      },
    },
  };
}

function createCursorOpenInTarget(): OpenInTargetDefinition {
  return {
    id: "cursor",
    platforms: {
      darwin: {
        label: "Cursor",
        icon: "apps/cursor.png",
        kind: "editor",
        detect: () => platform.detectCursorDarwin()?.electronBin ?? null,
        env: createCursorDarwinCliEnv,
        args: (...args) => {
          const cursor = platform.detectCursorDarwin();
          if (cursor == null) {
            throw Error("Cursor CLI entrypoint not available");
          }
          return [cursor.cliJs, ...buildCodeEditorArgs(...args)];
        },
        supportsSsh: true,
      },
      win32: {
        label: "Cursor",
        icon: "apps/cursor.png",
        kind: "editor",
        detect: platform.detectCursorWin32,
        args: buildCodeEditorArgs,
        supportsSsh: true,
      },
    },
  };
}

function createDarwinLaunchServicesTarget({
  id,
  label,
  icon,
  kind,
  appName,
  explicitAppPaths,
}: {
  id: string;
  label: string;
  icon: string;
  kind: OpenInTargetKind;
  appName: string;
  explicitAppPaths: string[];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind,
        detect: () =>
          platform.findMacApplicationByName(appName) ||
          platform.findExistingMacPath(explicitAppPaths)
            ? "open"
            : null,
        args: (path) => buildLaunchServicesArgs(appName, path),
      },
    },
  };
}

function createDarwinTerminalTarget({
  id,
  label,
  icon,
  appPaths,
  appName = label,
}: {
  id: string;
  label: string;
  icon: string;
  appPaths: string[];
  appName?: string;
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "terminal",
        detect: () => (platform.findExistingMacPath(appPaths) ? "open" : null),
        args: (path) =>
          buildLaunchServicesArgs(appName, getDirectoryToOpen(path)),
      },
    },
  };
}

function createSublimeTextTarget(): OpenInTargetDefinition {
  return {
    id: "sublimeText",
    platforms: {
      darwin: {
        label: "Sublime Text",
        icon: "apps/sublime-text.png",
        kind: "editor",
        detect: platform.detectSublimeTextDarwin,
        args: buildZedArgs,
      },
      win32: {
        label: "Sublime Text",
        icon: "apps/sublime-text.png",
        kind: "editor",
        detect: platform.detectSublimeTextWin32,
        args: buildZedArgs,
      },
    },
  };
}

function createZedOpenInTarget(): OpenInTargetDefinition {
  return {
    id: "zed",
    platforms: {
      darwin: {
        label: "Zed",
        icon: "apps/zed.png",
        kind: "editor",
        detect: platform.detectZedDarwin,
        args: buildZedArgs,
        open: openZedPath,
      },
      win32: {
        label: "Zed",
        icon: "apps/zed.png",
        kind: "editor",
        detect: platform.detectZedWin32,
        args: buildZedArgs,
      },
    },
  };
}

function createTerminalTarget(): OpenInTargetDefinition {
  return {
    id: "terminal",
    platforms: {
      darwin: {
        label: "Terminal",
        icon: "apps/terminal.png",
        kind: "terminal",
        detect: () =>
          platform.findExistingMacPath([
            "/System/Applications/Utilities/Terminal.app",
          ])
            ? "open"
            : null,
        args: (path) =>
          buildLaunchServicesArgs("Terminal", getDirectoryToOpen(path)),
      },
      win32: {
        label: "Terminal",
        icon: "apps/microsoft-terminal.png",
        kind: "terminal",
        detect: platform.detectWindowsTerminal,
        iconPath: () => null,
        args: buildWindowsTerminalArgs,
        open: ({ command, path }) =>
          openWindowsStartTarget(command, buildWindowsTerminalArgs(path)),
      },
    },
  };
}

function createGitBashTarget(): OpenInTargetDefinition {
  return {
    id: "gitBash",
    platforms: {
      win32: {
        label: "Git Bash",
        icon: "apps/vscode.png",
        kind: "terminal",
        detect: platform.detectGitBash,
        iconPath: platform.getGitBashIconPath,
        args: (path) => [`--cd=${getDirectoryToOpen(path)}`],
      },
    },
  };
}

function createCmderTarget(): OpenInTargetDefinition {
  return {
    id: "cmder",
    platforms: {
      win32: {
        label: "Cmder",
        icon: "apps/cmder.png",
        kind: "terminal",
        detect: platform.detectCmder,
        args: (path) => ["/START", getDirectoryToOpen(path)],
      },
    },
  };
}

function createWslTarget(): OpenInTargetDefinition {
  return {
    id: "wsl",
    platforms: {
      win32: {
        label: "WSL",
        icon: "apps/terminal.png",
        kind: "terminal",
        detect: async (readShortcutLink) =>
          platform.hasWslDistribution()
            ? platform.detectWindowsTerminal(readShortcutLink)
            : null,
        iconPath: () =>
          platform.findWindowsStartMenuShortcut(["WSL.lnk"]) ??
          platform.resolveWindowsAppsExecutionAlias("wsl.exe"),
        args: buildWslTerminalArgs,
        open: ({ command, path }) =>
          openWindowsStartTarget(command, buildWslTerminalArgs(path)),
      },
    },
  };
}

function createXcodeTarget(): OpenInTargetDefinition {
  return {
    id: "xcode",
    platforms: {
      darwin: {
        label: "Xcode",
        icon: "apps/xcode.png",
        kind: "editor",
        detect: () => {
          const xcode = platform.detectXcodeDarwin();
          return xcode?.xedPath ?? xcode?.appPath ?? null;
        },
        args: (path) => [path],
        open: openXcodePath,
      },
    },
  };
}

function createJetBrainsTarget({
  id,
  label,
  icon,
  toolboxTarget,
  macExecutable,
  windowsPathCommands,
  windowsInstallDirPrefixes,
  windowsInstallExecutables,
  windowsFallbackPaths,
}: {
  id: string;
  label: string;
  icon: string;
  toolboxTarget: string;
  macExecutable: string;
  windowsPathCommands?: string[];
  windowsInstallDirPrefixes?: string[];
  windowsInstallExecutables?: string[];
  windowsFallbackPaths?: string[][];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "editor",
        detect: () =>
          platform.findExistingMacPath([
            `/Applications/${label}.app/Contents/MacOS/${macExecutable}`,
          ]) ??
          platform.getJetBrainsToolboxInstallations().get(toolboxTarget) ??
          platform.findMacExecutableByAppPrefix(label, macExecutable),
        args: buildJetBrainsArgs,
      },
      win32:
        windowsPathCommands &&
        windowsInstallDirPrefixes &&
        windowsInstallExecutables
          ? {
              label,
              icon,
              kind: "editor",
              detect: () =>
                platform.detectJetBrainsWin32({
                  pathCommands: windowsPathCommands,
                  installDirPrefixes: windowsInstallDirPrefixes,
                  installExecutables: windowsInstallExecutables,
                  fallbackPaths: windowsFallbackPaths,
                }),
              args: buildJetBrainsArgs,
            }
          : undefined,
    },
  };
}

function createTextMateTarget(): OpenInTargetDefinition {
  return {
    id: "textmate",
    platforms: {
      darwin: {
        label: "TextMate",
        icon: "apps/textmate.png",
        kind: "editor",
        detect: () =>
          platform.findMacApplicationByName("TextMate") ||
          platform.findExistingMacPath(["/Applications/TextMate.app"])
            ? "open"
            : null,
        args: buildTextMateArgs,
      },
    },
  };
}
