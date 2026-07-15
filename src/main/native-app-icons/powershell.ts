// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Windows PowerShell fallback for native desktop app icon extraction.

import { promisify } from "node:util";
import { execFile } from "node:child_process";
import type { ExecFileLike } from "./types";

export const CODEX_NATIVE_DESKTOP_APP_ICON_PATH_ENV =
  "CODEX_NATIVE_DESKTOP_APP_ICON_PATH";

export const WINDOWS_ICON_EXTRACTION_POWERSHELL = `
$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$code = @"
using System;
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Sequential)]
public struct SIZE {
  public int cx;
  public int cy;
  public SIZE(int x, int y) { cx = x; cy = y; }
}

[StructLayout(LayoutKind.Sequential)]
public struct BITMAPINFOHEADER {
  public uint biSize;
  public int biWidth;
  public int biHeight;
  public ushort biPlanes;
  public ushort biBitCount;
  public uint biCompression;
  public uint biSizeImage;
  public int biXPelsPerMeter;
  public int biYPelsPerMeter;
  public uint biClrUsed;
  public uint biClrImportant;
}

[StructLayout(LayoutKind.Sequential)]
public struct BITMAPINFO {
  public BITMAPINFOHEADER bmiHeader;
  public uint bmiColors;
}

[ComImport]
[InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
[Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b")]
public interface IShellItemImageFactory {
  void GetImage(SIZE size, int flags, out IntPtr phbm);
}

public static class CodexShellIconNative {
  const int BI_RGB = 0;
  const int DIB_RGB_COLORS = 0;
  const int ICON_ONLY = 4;

  [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
  public static extern void SHCreateItemFromParsingName(
    string pszPath,
    IntPtr pbc,
    ref Guid riid,
    [MarshalAs(UnmanagedType.Interface)] out IShellItemImageFactory ppv
  );

  [DllImport("gdi32.dll")]
  public static extern bool DeleteObject(IntPtr hObject);

  [DllImport("gdi32.dll")]
  static extern int GetDIBits(
    IntPtr hdc,
    IntPtr hbmp,
    uint uStartScan,
    uint cScanLines,
    byte[] lpvBits,
    ref BITMAPINFO lpbi,
    uint uUsage
  );

  [DllImport("user32.dll")]
  static extern IntPtr GetDC(IntPtr hWnd);

  [DllImport("user32.dll")]
  static extern int ReleaseDC(IntPtr hWnd, IntPtr hDC);

  public static string GetAppsFolderIconDataUrl(string appId) {
    Guid iid = new Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b");
    IShellItemImageFactory factory;
    SHCreateItemFromParsingName("shell:AppsFolder\\\\" + appId, IntPtr.Zero, ref iid, out factory);

    IntPtr hbitmap;
    factory.GetImage(new SIZE(32, 32), ICON_ONLY, out hbitmap);
    try {
      using (var bitmap = BitmapFromHBitmapPreserveAlpha(hbitmap, 32, 32))
      using (var stream = new System.IO.MemoryStream()) {
        bitmap.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
        return "data:image/png;base64," + Convert.ToBase64String(stream.ToArray());
      }
    } finally {
      DeleteObject(hbitmap);
    }
  }

  static System.Drawing.Bitmap BitmapFromHBitmapPreserveAlpha(IntPtr hbitmap, int width, int height) {
    var info = new BITMAPINFO();
    info.bmiHeader.biSize = (uint)Marshal.SizeOf(typeof(BITMAPINFOHEADER));
    info.bmiHeader.biWidth = width;
    info.bmiHeader.biHeight = -height;
    info.bmiHeader.biPlanes = 1;
    info.bmiHeader.biBitCount = 32;
    info.bmiHeader.biCompression = BI_RGB;
    info.bmiHeader.biSizeImage = (uint)(width * height * 4);

    byte[] pixels = new byte[width * height * 4];
    IntPtr hdc = GetDC(IntPtr.Zero);
    try {
      int scanLines = GetDIBits(hdc, hbitmap, 0, (uint)height, pixels, ref info, DIB_RGB_COLORS);
      if (scanLines == 0) {
        throw new InvalidOperationException("GetDIBits failed.");
      }
    } finally {
      ReleaseDC(IntPtr.Zero, hdc);
    }

    var bitmap = new System.Drawing.Bitmap(width, height, System.Drawing.Imaging.PixelFormat.Format32bppArgb);
    var data = bitmap.LockBits(
      new System.Drawing.Rectangle(0, 0, width, height),
      System.Drawing.Imaging.ImageLockMode.WriteOnly,
      System.Drawing.Imaging.PixelFormat.Format32bppArgb
    );
    try {
      Marshal.Copy(pixels, 0, data.Scan0, pixels.Length);
    } finally {
      bitmap.UnlockBits(data);
    }
    return bitmap;
  }
}
"@

Add-Type -AssemblyName System.Drawing
if (-not ("CodexShellIconNative" -as [type])) {
  Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
}

function Convert-ImageFileToDataUrl([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
    return $null
  }

  $extension = [System.IO.Path]::GetExtension($Path).ToLowerInvariant()
  $mimeType = switch ($extension) {
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".ico" { "image/x-icon" }
    ".bmp" { "image/bmp" }
    default { $null }
  }
  if ($null -eq $mimeType) {
    return $null
  }

  $bytes = [System.IO.File]::ReadAllBytes($Path)
  return "data:$mimeType;base64,$([Convert]::ToBase64String($bytes))"
}

function Convert-ExeIconToDataUrl([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
    return $null
  }

  Add-Type -AssemblyName System.Drawing
  $icon = [System.Drawing.Icon]::ExtractAssociatedIcon($Path)
  if ($null -eq $icon) {
    return $null
  }

  $bitmap = $null
  $stream = New-Object System.IO.MemoryStream
  try {
    $bitmap = $icon.ToBitmap()
    $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
    return "data:image/png;base64,$([Convert]::ToBase64String($stream.ToArray()))"
  } finally {
    if ($null -ne $bitmap) { $bitmap.Dispose() }
    $icon.Dispose()
    $stream.Dispose()
  }
}

$AppPath = $env:CODEX_NATIVE_DESKTOP_APP_ICON_PATH
if ([string]::IsNullOrWhiteSpace($AppPath)) {
  exit 0
}

$trimmedAppPath = $AppPath.Trim()
if (Test-Path -LiteralPath $trimmedAppPath -PathType Leaf) {
  $extension = [System.IO.Path]::GetExtension($trimmedAppPath).ToLowerInvariant()
  $dataUrl = if ($extension -eq ".exe" -or $extension -eq ".dll") {
    Convert-ExeIconToDataUrl $trimmedAppPath
  } else {
    Convert-ImageFileToDataUrl $trimmedAppPath
  }
  if ($null -ne $dataUrl) {
    Write-Output $dataUrl
  }
  exit 0
}

try {
  Write-Output ([CodexShellIconNative]::GetAppsFolderIconDataUrl($trimmedAppPath))
} catch {
  exit 0
}
`;

const execFileAsync = promisify(execFile) as ExecFileLike;

export async function extractWindowsDesktopAppIconDataUrl({
  appPath,
  env = process.env,
  execFileLike = execFileAsync,
}: {
  appPath: string;
  env?: NodeJS.ProcessEnv;
  execFileLike?: ExecFileLike;
}): Promise<string | null> {
  const normalizedPath = normalizeWindowsDesktopAppIconPath(appPath);
  if (!normalizedPath) return null;
  try {
    const { stdout } = await execFileLike(
      "powershell.exe",
      [
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-EncodedCommand",
        Buffer.from(WINDOWS_ICON_EXTRACTION_POWERSHELL, "utf16le").toString(
          "base64",
        ),
      ],
      {
        encoding: "utf8",
        env: {
          ...sanitizeProcessEnv(env),
          [CODEX_NATIVE_DESKTOP_APP_ICON_PATH_ENV]: normalizedPath,
        },
        timeout: 10_000,
        windowsHide: true,
      },
    );
    return extractLastImageDataUrl(stdout);
  } catch {
    return null;
  }
}

export function normalizeWindowsDesktopAppIconPath(value: string): string {
  const trimmed = value.trim();
  if (trimmed.toLowerCase().startsWith("process:")) {
    const processPath = trimmed.slice(8).trim();
    if (processPath.includes("\\") || processPath.includes("/")) {
      return processPath;
    }
  }
  return trimmed;
}

export function createWindowsDesktopAppIconCacheKey(value: string): string {
  return value.trim().toLowerCase();
}

export function extractLastImageDataUrl(output: string): string | null {
  return (
    output.match(/data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi)?.at(-1) ??
    null
  );
}

function sanitizeProcessEnv(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  const sanitized: NodeJS.ProcessEnv = {};
  for (const [key, value] of Object.entries(env)) {
    if (value != null) sanitized[key] = value;
  }
  return sanitized;
}
