// Restored from ref/.vite/build/worker.js
// Platform-specific OpenIn application discovery helpers.

import { existsSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import {
  basename,
  delimiter,
  dirname,
  extname,
  join,
  posix,
  win32,
} from "node:path";
import { spawnSync } from "node:child_process";
import type { OpenInShortcutResolver } from "./types";

export function createOpenInPlatformHelpers() {
  return {
    detectCmder,
    detectCursorDarwin,
    detectCursorWin32,
    detectGitBash,
    detectGitHubDesktop,
    detectJetBrainsWin32,
    detectSublimeTextDarwin,
    detectSublimeTextWin32,
    detectVisualStudio,
    detectWindowsCommandApplication,
    detectWindowsExplorer,
    detectWindowsTerminal,
    detectXcodeDarwin,
    detectZedDarwin,
    detectZedWin32,
    findAdjacentWindowsExecutable,
    findExistingMacPath,
    findMacApplicationByName,
    findMacExecutableByAppPrefix,
    findWindowsPathCommand,
    findWindowsProgramPath,
    findWindowsStartMenuShortcut,
    getGitBashIconPath,
    getJetBrainsToolboxInstallations,
    hasWslDistribution,
    isPlatformAbsolutePath,
    resolveExecutableFromPath,
    resolveWindowsAppsExecutionAlias,
    resolveWindowsExecutableCandidate,
    resolveWindowsShortcutIconPath,
    stripWindowsIconResourceSuffix,
  };
}

const USER_APPLICATIONS_DIR = join(homedir(), "Applications");
const MAC_APPLICATION_ROOTS = ["/Applications", USER_APPLICATIONS_DIR];
const WINDOWS_LOCAL_APPDATA =
  process.env.LOCALAPPDATA ?? join(homedir(), "AppData", "Local");
const WINDOWS_PROGRAM_ROOTS = [
  join(WINDOWS_LOCAL_APPDATA, "Programs"),
  process.env.ProgramFiles,
  process.env["ProgramFiles(x86)"],
].flatMap((entry) => (entry ? [entry] : []));
const WINDOWS_APPS_DIR = join(
  WINDOWS_LOCAL_APPDATA,
  "Microsoft",
  "WindowsApps",
);
const WINDOWS_START_MENU_ROOTS = [
  process.env.APPDATA
    ? join(
        process.env.APPDATA,
        "Microsoft",
        "Windows",
        "Start Menu",
        "Programs",
      )
    : null,
  process.env.ProgramData
    ? join(
        process.env.ProgramData,
        "Microsoft",
        "Windows",
        "Start Menu",
        "Programs",
      )
    : null,
].flatMap((entry) => (entry ? [entry] : []));
const WINDOWS_JETBRAINS_ROOTS = [
  process.env.ProgramFiles,
  process.env["ProgramFiles(x86)"],
].flatMap((entry) => (entry ? [join(entry, "JetBrains")] : []));
const JETBRAINS_TOOLBOX_ROOT = join(
  homedir(),
  "Library",
  "Application Support",
  "JetBrains",
  "Toolbox",
  "apps",
);
const WINDOWS_TERMINAL_SHORTCUT_NAMES = [
  "Terminal.lnk",
  "Windows Terminal.lnk",
];
const JETBRAINS_BUNDLE_HINTS = [
  {
    target: "androidStudio",
    bundlePrefixes: ["android studio"],
    executable: "studio",
  },
  { target: "intellij", bundlePrefixes: ["intellij idea"], executable: "idea" },
  { target: "rider", bundlePrefixes: ["rider"], executable: "rider" },
  { target: "goland", bundlePrefixes: ["goland"], executable: "goland" },
  {
    target: "rustrover",
    bundlePrefixes: ["rustrover"],
    executable: "rustrover",
  },
  { target: "pycharm", bundlePrefixes: ["pycharm"], executable: "pycharm" },
  { target: "webstorm", bundlePrefixes: ["webstorm"], executable: "webstorm" },
  { target: "phpstorm", bundlePrefixes: ["phpstorm"], executable: "phpstorm" },
] as const;
let jetBrainsToolboxCache: Map<string, string> | null = null;

function findExistingMacPath(paths: string[]): string | null {
  if (process.platform !== "darwin") return null;
  for (const path of paths) {
    for (const candidate of expandMacApplicationPath(path)) {
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function expandMacApplicationPath(path: string): string[] {
  return path.startsWith("/Applications/")
    ? [path, join(USER_APPLICATIONS_DIR, path.slice("/Applications/".length))]
    : [path];
}

function findMacApplicationByName(appName: string): string | null {
  if (process.platform !== "darwin") return null;
  const lowerName = appName.toLowerCase();
  for (const root of MAC_APPLICATION_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!lowerEntry.startsWith(lowerName) || !lowerEntry.endsWith(".app")) {
        continue;
      }
      const appPath = join(root, entry);
      if (existsSync(appPath)) return appPath;
    }
  }
  return null;
}

function findMacExecutableByAppPrefix(
  appName: string,
  executable: string,
): string | null {
  const lowerName = appName.toLowerCase();
  for (const root of MAC_APPLICATION_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!lowerEntry.startsWith(lowerName) || !lowerEntry.endsWith(".app")) {
        continue;
      }
      const executablePath = join(root, entry, "Contents", "MacOS", executable);
      if (existsSync(executablePath)) return executablePath;
    }
  }
  return null;
}

function findWindowsPathCommand(commands: string[]): string | null {
  for (const command of commands) {
    const resolved =
      resolveExecutableFromPath(command) ?? resolveWindowsWhere(command);
    if (resolved != null) return resolveWindowsExecutableCandidate(resolved);
  }
  return null;
}

function findWindowsProgramPath(fallbackPaths: string[][]): string | null {
  for (const root of WINDOWS_PROGRAM_ROOTS) {
    for (const fallbackPath of fallbackPaths) {
      const candidate = join(root, ...fallbackPath);
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function resolveWindowsExecutableCandidate(candidate: string): string | null {
  if (!existsSync(candidate)) return null;
  if (extname(candidate)) return candidate;
  for (const extension of [".cmd", ".bat", ".exe"]) {
    const withExtension = `${candidate}${extension}`;
    if (existsSync(withExtension)) return withExtension;
  }
  return candidate;
}

function findAdjacentWindowsExecutable(
  executablePath: string,
  executableName: string,
): string | null {
  const executableDirectory = dirname(executablePath);
  if (basename(executableDirectory).toLowerCase() === "bin") {
    const adjacentToBin = join(dirname(executableDirectory), executableName);
    if (existsSync(adjacentToBin)) return adjacentToBin;
  }
  const adjacent = join(executableDirectory, executableName);
  return existsSync(adjacent) ? adjacent : null;
}

function detectWindowsCommandApplication({
  pathCommand,
  executableName,
  installDirName,
}: {
  pathCommand: string;
  executableName: string;
  installDirName: string;
}): string | null {
  const commandPath =
    resolveExecutableFromPath(pathCommand) ?? resolveWindowsWhere(pathCommand);
  if (commandPath != null) {
    const executablePath = resolveWindowsExecutableCandidate(commandPath);
    if (executablePath != null) {
      return (
        findAdjacentWindowsExecutable(executablePath, executableName) ??
        (basename(executablePath).toLowerCase() === executableName.toLowerCase()
          ? executablePath
          : null)
      );
    }
  }
  return findWindowsProgramPath([[installDirName, executableName]]);
}

function resolveWindowsAppsExecutionAlias(alias: string): string | null {
  return resolveWindowsExecutableCandidate(join(WINDOWS_APPS_DIR, alias));
}

function resolveWindowsWhere(command: string): string | null {
  if (process.platform !== "win32") return null;
  const result = spawnSync("where.exe", [command], {
    windowsHide: true,
    encoding: "utf8",
  });
  if (result.status !== 0 || typeof result.stdout !== "string") return null;
  return (
    result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.length > 0) ?? null
  );
}

function findWindowsStartMenuShortcut(shortcutNames: string[]): string | null {
  const lowerNames = new Set(shortcutNames.map((name) => name.toLowerCase()));
  for (const root of WINDOWS_START_MENU_ROOTS) {
    const shortcut = findWindowsStartMenuShortcutInDirectory(root, lowerNames);
    if (shortcut != null) return shortcut;
  }
  return null;
}

function findWindowsStartMenuShortcutInDirectory(
  directory: string,
  lowerNames: Set<string>,
): string | null {
  if (!existsSync(directory)) return null;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isFile() && lowerNames.has(entry.name.toLowerCase())) {
      return entryPath;
    }
    if (!entry.isDirectory()) continue;
    const nested = findWindowsStartMenuShortcutInDirectory(
      entryPath,
      lowerNames,
    );
    if (nested != null) return nested;
  }
  return null;
}

async function detectWindowsTerminal(
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const terminalPath =
    resolveExecutableFromPath("wt.exe") ??
    resolveWindowsAppsExecutionAlias("wt.exe");
  if (terminalPath != null) return terminalPath;
  const shortcutPath = findWindowsStartMenuShortcut(
    WINDOWS_TERMINAL_SHORTCUT_NAMES,
  );
  if (shortcutPath == null) return null;
  const shortcut = await readShortcutLink(shortcutPath);
  return (
    resolveWindowsExecutableCandidate(
      stripWindowsIconResourceSuffix(shortcut.target) ?? "",
    ) ?? "wt.exe"
  );
}

function detectWindowsExplorer(): string {
  const systemRoot = process.env.SystemRoot ?? process.env.windir;
  if (systemRoot != null) {
    const explorerPath = join(systemRoot, "explorer.exe");
    if (existsSync(explorerPath)) return explorerPath;
  }
  return "explorer.exe";
}

function detectGitBash(): string | null {
  const pathCommand = findWindowsPathCommand(["git-bash.exe", "git-bash"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "git-bash.exe") ?? pathCommand
    );
  }
  return findWindowsProgramPath([
    ["Git", "git-bash.exe"],
    ["Git", "bin", "bash.exe"],
  ]);
}

function getGitBashIconPath(command: string): string | null {
  return (
    findWindowsStartMenuShortcut(["Git Bash.lnk"]) ??
    findWindowsProgramPath([["Git", "git-bash.exe"]]) ??
    findAdjacentWindowsExecutable(command, "git-bash.exe") ??
    command
  );
}

async function detectCmder(
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const cmderRoot = process.env.CMDER_ROOT?.trim();
  if (cmderRoot) {
    const cmderPath = join(cmderRoot, "Cmder.exe");
    if (existsSync(cmderPath)) return cmderPath;
  }
  const pathCommand = findWindowsPathCommand(["cmder.exe", "cmder"]);
  if (pathCommand != null) return pathCommand;
  const shortcutPath = findWindowsStartMenuShortcut(["Cmder.lnk"]);
  if (shortcutPath == null) return null;
  const shortcut = await readShortcutLink(shortcutPath);
  return resolveWindowsExecutableCandidate(
    stripWindowsIconResourceSuffix(shortcut.target) ?? "",
  );
}

function detectCursorDarwin(): { electronBin: string; cliJs: string } | null {
  if (process.platform !== "darwin") return null;
  const appPaths = [
    "/Applications/Cursor.app",
    "/Applications/Cursor Preview.app",
    "/Applications/Cursor Nightly.app",
  ];
  const discoveredCursorApp = findMacApplicationByName("Cursor");
  if (discoveredCursorApp != null) appPaths.push(discoveredCursorApp);
  for (const appPath of appPaths) {
    for (const candidate of expandMacApplicationPath(appPath)) {
      const electronBin = join(candidate, "Contents", "MacOS", "Cursor");
      const cliJs = join(
        candidate,
        "Contents",
        "Resources",
        "app",
        "out",
        "cli.js",
      );
      if (existsSync(electronBin) && existsSync(cliJs)) {
        return { electronBin, cliJs };
      }
    }
  }
  return null;
}

function detectCursorWin32(): string | null {
  const cursorCommand =
    resolveExecutableFromPath("cursor") ?? resolveWindowsWhere("cursor");
  if (cursorCommand != null) {
    const executablePath = resolveWindowsExecutableCandidate(cursorCommand);
    if (executablePath != null) {
      if (basename(executablePath).toLowerCase() === "cursor.exe") {
        return executablePath;
      }
      const binDirectory = dirname(executablePath);
      if (basename(binDirectory).toLowerCase() === "bin") {
        const appDirectory = dirname(binDirectory);
        if (basename(appDirectory).toLowerCase() === "app") {
          const resourcesDirectory = dirname(appDirectory);
          if (basename(resourcesDirectory).toLowerCase() === "resources") {
            const cursorExe = join(dirname(resourcesDirectory), "Cursor.exe");
            if (existsSync(cursorExe)) return cursorExe;
          }
        }
      }
    }
  }
  return findWindowsProgramPath([["Cursor", "Cursor.exe"]]);
}

function detectSublimeTextDarwin(): string | null {
  const pathCommand = resolveExecutableFromPath("subl");
  if (pathCommand != null) return pathCommand;
  const appPath = findMacApplicationByName("Sublime Text");
  if (appPath != null) {
    const cliPath = join(appPath, "Contents", "SharedSupport", "bin", "subl");
    if (existsSync(cliPath)) return cliPath;
  }
  return findExistingMacPath([
    "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
  ]);
}

function detectSublimeTextWin32(): string | null {
  const pathCommand = findWindowsPathCommand(["subl.exe", "subl"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "sublime_text.exe") ??
      pathCommand
    );
  }
  return findWindowsProgramPath([
    ["Sublime Text", "sublime_text.exe"],
    ["Sublime Text", "subl.exe"],
  ]);
}

function detectZedDarwin(): string | null {
  return (
    resolveExecutableFromPath("zed") ??
    findExistingMacPath([
      "/Applications/Zed.app/Contents/MacOS/zed",
      "/Applications/Zed Preview.app/Contents/MacOS/zed",
      "/Applications/Zed Nightly.app/Contents/MacOS/zed",
    ]) ??
    findMacExecutableByAppPrefix("Zed", "zed")
  );
}

function detectZedWin32(): string | null {
  const pathCommand = findWindowsPathCommand(["zed.exe", "zed"]);
  return pathCommand ?? findWindowsProgramPath([["Zed", "Zed.exe"]]);
}

function detectGitHubDesktop(): string | null {
  const pathCommand = findWindowsPathCommand(["github.exe", "github"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "GitHubDesktop.exe") ??
      pathCommand
    );
  }
  for (const fallbackPath of [
    ["GitHubDesktop", "GitHubDesktop.exe"],
    ["GitHub Desktop", "GitHubDesktop.exe"],
  ]) {
    const candidate = join(WINDOWS_LOCAL_APPDATA, ...fallbackPath);
    if (existsSync(candidate)) return candidate;
  }
  return findWindowsProgramPath([
    ["GitHub Desktop", "GitHubDesktop.exe"],
    ["GitHubDesktop", "GitHubDesktop.exe"],
  ]);
}

function detectVisualStudio(): string | null {
  const pathCommand = findWindowsPathCommand(["devenv.exe", "devenv"]);
  return (
    pathCommand ??
    findWindowsProgramPath(
      ["2022", "2019", "2017"].flatMap((version) =>
        [
          "Community",
          "Professional",
          "Enterprise",
          "Preview",
          "BuildTools",
        ].map((edition) => [
          "Microsoft Visual Studio",
          version,
          edition,
          "Common7",
          "IDE",
          "devenv.exe",
        ]),
      ),
    ) ??
    findVisualStudioWithVswhere("**\\Common7\\IDE\\devenv.exe")
  );
}

function findVisualStudioWithVswhere(pattern: string): string | null {
  const vswhereCandidates = [
    process.env["ProgramFiles(x86)"],
    process.env.ProgramFiles,
  ].flatMap((root) =>
    root
      ? [join(root, "Microsoft Visual Studio", "Installer", "vswhere.exe")]
      : [],
  );
  const vswhere = vswhereCandidates.find((candidate) => existsSync(candidate));
  if (vswhere == null) return null;
  const result = spawnSync(
    vswhere,
    [
      "-products",
      "*",
      "-all",
      "-find",
      pattern,
      "-utf8",
      "-nologo",
      "-prerelease",
    ],
    { windowsHide: true, encoding: "utf8" },
  );
  if (result.status !== 0 || typeof result.stdout !== "string") return null;
  return (
    result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.length > 0 && existsSync(line)) ?? null
  );
}

function hasWslDistribution(): boolean {
  return (
    resolveWindowsAppsExecutionAlias("wsl.exe") != null ||
    resolveExecutableFromPath("wsl.exe") != null
  );
}

function detectXcodeDarwin(): {
  appPath: string | null;
  xedPath: string | null;
} | null {
  if (process.platform !== "darwin") return null;
  const appPath =
    findMacApplicationByName("Xcode") ??
    findExistingMacPath(["/Applications/Xcode.app"]);
  let xedPath: string | null = null;
  try {
    const result = spawnSync("xcode-select", ["-p"], {
      encoding: "utf8",
      timeout: 1000,
    });
    const developerPath = result.status === 0 ? result.stdout?.trim() : "";
    if (developerPath) {
      const selectedXed = join(developerPath, "usr", "bin", "xed");
      if (existsSync(selectedXed)) xedPath = selectedXed;
    }
  } catch {}
  if (xedPath == null && appPath != null) {
    const appXed = join(appPath, "Contents", "Developer", "usr", "bin", "xed");
    if (existsSync(appXed)) xedPath = appXed;
  }
  return appPath == null && xedPath == null ? null : { appPath, xedPath };
}

function getJetBrainsToolboxInstallations(): Map<string, string> {
  if (jetBrainsToolboxCache != null) return jetBrainsToolboxCache;
  jetBrainsToolboxCache = new Map();
  collectJetBrainsToolboxInstallations(
    JETBRAINS_TOOLBOX_ROOT,
    0,
    jetBrainsToolboxCache,
  );
  return jetBrainsToolboxCache;
}

function collectJetBrainsToolboxInstallations(
  directory: string,
  depth: number,
  found: Map<string, string>,
): void {
  if (process.platform !== "darwin" || depth > 6 || !existsSync(directory)) {
    return;
  }
  let entries: string[];
  try {
    entries = readdirSync(directory);
  } catch {
    return;
  }
  for (const entry of entries.sort((left, right) =>
    right.localeCompare(left),
  )) {
    const entryPath = join(directory, entry);
    const lowerEntry = entry.toLowerCase();
    if (lowerEntry.endsWith(".app")) {
      for (const hint of JETBRAINS_BUNDLE_HINTS) {
        if (
          found.has(hint.target) ||
          !hint.bundlePrefixes.some((prefix) => lowerEntry.startsWith(prefix))
        ) {
          continue;
        }
        const executablePath = join(
          entryPath,
          "Contents",
          "MacOS",
          hint.executable,
        );
        if (existsSync(executablePath)) found.set(hint.target, executablePath);
      }
      continue;
    }
    try {
      if (statSync(entryPath).isDirectory()) {
        collectJetBrainsToolboxInstallations(entryPath, depth + 1, found);
      }
    } catch {}
  }
}

function detectJetBrainsWin32({
  pathCommands,
  installDirPrefixes,
  installExecutables,
  fallbackPaths,
}: {
  pathCommands: string[];
  installDirPrefixes: string[];
  installExecutables: string[];
  fallbackPaths?: string[][];
}): string | null {
  const pathCommand = findWindowsPathCommand(pathCommands);
  if (pathCommand != null) return pathCommand;
  const installPrefixSet = installDirPrefixes.map((prefix) =>
    prefix.toLowerCase(),
  );
  for (const root of WINDOWS_JETBRAINS_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root).sort((left, right) =>
        right.localeCompare(left),
      );
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!installPrefixSet.some((prefix) => lowerEntry.startsWith(prefix))) {
        continue;
      }
      for (const executableName of installExecutables) {
        const executablePath = join(root, entry, "bin", executableName);
        if (existsSync(executablePath)) return executablePath;
      }
    }
  }
  return fallbackPaths ? findWindowsProgramPath(fallbackPaths) : null;
}

async function resolveWindowsShortcutIconPath(
  shortcutPath: string,
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const shortcut = await readShortcutLink(shortcutPath);
  return (
    stripWindowsIconResourceSuffix(shortcut.icon) ??
    stripWindowsIconResourceSuffix(shortcut.target)
  );
}

function stripWindowsIconResourceSuffix(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const trimmed = value.trim().replace(/^"(.*)"$/, "$1");
  const commaIndex = trimmed.lastIndexOf(",");
  if (commaIndex < 0) return trimmed || null;
  const resourceIndex = Number(trimmed.slice(commaIndex + 1));
  return Number.isInteger(resourceIndex)
    ? trimmed.slice(0, commaIndex) || null
    : trimmed || null;
}

function isPlatformAbsolutePath(
  candidate: string,
  platform = process.platform,
): boolean {
  if (platform !== "win32") return posix.isAbsolute(candidate);
  const parsedRoot = win32.parse(candidate).root;
  return (
    win32.isAbsolute(candidate) &&
    (parsedRoot.includes(":") || parsedRoot.startsWith("\\\\"))
  );
}

function resolveExecutableFromPath(command: string): string | null {
  const pathEntries = (process.env.PATH ?? "")
    .split(delimiter)
    .filter((entry) => entry.length > 0);
  const extensions =
    process.platform === "win32"
      ? (process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM")
          .split(";")
          .filter((entry) => entry.length > 0)
      : [""];
  const commandCandidates =
    process.platform === "win32" && /\.[A-Za-z0-9]+$/.test(command)
      ? [command]
      : extensions.map((extension) => `${command}${extension}`);
  for (const pathEntry of pathEntries) {
    for (const candidate of commandCandidates) {
      const fullPath =
        process.platform === "win32"
          ? win32.join(pathEntry, candidate)
          : posix.join(pathEntry, candidate);
      if (existsSync(fullPath)) return fullPath;
    }
  }
  return null;
}
