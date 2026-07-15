// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Command normalization used when matching stored terminal rows to OS process metrics.
export function normalizeCommandForMatching(command: string): string {
  const trimmedCommand = command.trim();
  if (trimmedCommand.length === 0) return "";

  const quotedExecutableMatch = /^"([^"]+)"(.*)$/u.exec(trimmedCommand);
  if (quotedExecutableMatch != null) {
    return `${normalizeExecutableName(quotedExecutableMatch[1] ?? "")}${
      quotedExecutableMatch[2] ?? ""
    }`
      .trim()
      .toLowerCase();
  }

  const executableMatch = /^(\S+)(.*)$/u.exec(trimmedCommand);
  if (executableMatch == null) return trimmedCommand.toLowerCase();

  return `${normalizeExecutableName(executableMatch[1] ?? "")}${
    executableMatch[2] ?? ""
  }`
    .trim()
    .toLowerCase();
}

export function normalizeExecutableName(executablePath: string): string {
  const normalizedPath = executablePath.replaceAll("\\", "/");
  const lastSeparatorIndex = normalizedPath.lastIndexOf("/");
  const executableName =
    lastSeparatorIndex < 0
      ? normalizedPath
      : normalizedPath.slice(lastSeparatorIndex + 1);

  return executableName.replace(/\.(?:bat|cmd|com|exe)$/iu, "");
}

export function commandTextMatches(
  expectedCommand: string,
  actualCommand: string,
): boolean {
  const normalizedActualCommand = normalizeCommandForMatching(actualCommand);
  return (
    normalizedActualCommand === expectedCommand ||
    normalizedActualCommand.startsWith(`${expectedCommand} `) ||
    (normalizedActualCommand.includes(" ") &&
      expectedCommand.startsWith(`${normalizedActualCommand} `)) ||
    normalizedActualCommand.endsWith(` ${expectedCommand}`) ||
    normalizedActualCommand.includes(` ${expectedCommand} `) ||
    commandArgumentsMatch(expectedCommand, normalizedActualCommand)
  );
}

function commandArgumentsMatch(
  expectedCommand: string,
  actualCommand: string,
): boolean {
  const expectedParts = expectedCommand.split(/\s+/u);
  const actualParts = actualCommand.split(/\s+/u);
  return (
    expectedParts.length === actualParts.length &&
    expectedParts.every((expectedPart, index) => {
      const actualPart = actualParts[index];
      return actualPart == null
        ? false
        : expectedPart === actualPart
          ? true
          : index === 0
            ? false
            : normalizeExecutableName(expectedPart) ===
              normalizeExecutableName(actualPart);
    })
  );
}
