// Restored from ref/.vite/build/worker.js
// Platform wrapper scripts used around local-environment setup and cleanup.

import type { LocalEnvironmentShellKind } from "./git-worker-local-environment-types";

export function createEnvironmentWrapperScript(
  shellKind: LocalEnvironmentShellKind,
  scriptPath: string,
  capturedEnvironmentPath: string,
  beforeEnvironmentPath: string,
): string {
  switch (shellKind) {
    case "cmd":
      return createCmdWrapperScript(
        scriptPath,
        capturedEnvironmentPath,
        beforeEnvironmentPath,
      );
    case "powershell":
      return createPowerShellWrapperScript(
        scriptPath,
        capturedEnvironmentPath,
        beforeEnvironmentPath,
      );
    case "posix":
      return createPosixWrapperScript(
        scriptPath,
        capturedEnvironmentPath,
        beforeEnvironmentPath,
      );
  }
}

function createPosixWrapperScript(
  scriptPath: string,
  capturedEnvironmentPath: string,
  beforeEnvironmentPath: string,
): string {
  return [
    "set -xeo pipefail",
    `capture_path=${quotePosix(capturedEnvironmentPath)}`,
    `before_capture_path=${quotePosix(beforeEnvironmentPath)}`,
    'env > "$before_capture_path"',
    'trap \'code=$?; if [ "$code" -eq 0 ]; then env > "$capture_path"; fi\' EXIT',
    `. ${quotePosix(scriptPath)}`,
  ].join("\n");
}

function createCmdWrapperScript(
  scriptPath: string,
  capturedEnvironmentPath: string,
  beforeEnvironmentPath: string,
): string {
  return [
    "@echo off",
    `set > ${quoteCmd(beforeEnvironmentPath)}`,
    `call ${quoteCmd(scriptPath)}`,
    "set CODEX_SETUP_EXIT_CODE=%ERRORLEVEL%",
    `if "%CODEX_SETUP_EXIT_CODE%"=="0" set > ${quoteCmd(
      capturedEnvironmentPath,
    )}`,
    "exit /b %CODEX_SETUP_EXIT_CODE%",
  ].join("\r\n");
}

function createPowerShellWrapperScript(
  scriptPath: string,
  capturedEnvironmentPath: string,
  beforeEnvironmentPath: string,
): string {
  return [
    "$ErrorActionPreference = 'Stop'",
    "$PSNativeCommandUseErrorActionPreference = $true",
    "$exitCode = 0",
    `Get-ChildItem Env: | Sort-Object Name | ForEach-Object { '{0}={1}' -f $_.Name, $_.Value } | Set-Content -LiteralPath ${quotePowerShell(
      beforeEnvironmentPath,
    )} -Encoding utf8`,
    "try {",
    `  & ${quotePowerShell(scriptPath)}`,
    "} finally {",
    "  $exitCode = if ($null -eq $LASTEXITCODE) {",
    "    if ($?) { 0 } else { 1 }",
    "  } else {",
    "    [int]$LASTEXITCODE",
    "  }",
    "  if ($exitCode -eq 0) {",
    `    Get-ChildItem Env: | Sort-Object Name | ForEach-Object { '{0}={1}' -f $_.Name, $_.Value } | Set-Content -LiteralPath ${quotePowerShell(
      capturedEnvironmentPath,
    )} -Encoding utf8`,
    "  }",
    "}",
    "exit $exitCode",
  ].join("\n");
}

function quotePosix(value: string): string {
  return `'${value.replace(/'/g, "'\\''")}'`;
}

function quoteCmd(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

function quotePowerShell(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}
