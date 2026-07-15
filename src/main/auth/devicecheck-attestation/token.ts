// Restored from ref/.vite/build/main-Cfnoc8EH.js
// DeviceCheck attestation token generation and envelope encoding.

import { createRequire } from "node:module";
import { join } from "node:path";
import {
  encodeArray,
  encodeByteString,
  encodeFloat64,
  encodeFloatPair,
  encodeIntegerPair,
  encodeMap,
  encodeStringPair,
  encodeUtf8Text,
  encodeUnsignedInteger,
} from "./cbor";
import type {
  DeviceCheckAttestationHandlerOptions,
  DeviceCheckAttestationRequest,
  DeviceCheckAttestationResponse,
  DeviceCheckNativeAddon,
  GenerateDeviceCheckAttestationOptions,
} from "./types";

const DEVICECHECK_NATIVE_ADDON = "devicecheck.node";
const TOKEN_FORMAT_VERSION = "v1";
const requireFromBundle = createRequire(import.meta.url);

export function isDeviceCheckPlatformSupported({
  platform = process.platform,
}: { platform?: string } = {}): boolean {
  return platform === "darwin" || platform === "win32";
}

export function isDeviceCheckNativeAddonSupported({
  arch = process.arch,
  platform = process.platform,
}: { arch?: string; platform?: string } = {}): boolean {
  return platform === "darwin" && arch === "arm64";
}

export function createDeviceCheckAttestationHandler({
  addon,
  arch = process.arch,
  bundleIdentifier,
  getSignals,
  logger,
  platform = process.platform,
  resourcesPath = process.resourcesPath,
}: DeviceCheckAttestationHandlerOptions): (
  request: DeviceCheckAttestationRequest,
) => Promise<DeviceCheckAttestationResponse> | null {
  return (request) => {
    if (request.method !== "attestation/generate") return null;
    if (!isDeviceCheckPlatformSupported({ platform })) {
      return Promise.resolve(
        unavailableDeviceCheckToken({
          bundleIdentifier,
          errorCode: 1,
          logger,
          startedAtMs: Date.now(),
        }),
      );
    }
    return generateDeviceCheckAttestation({
      addon,
      arch,
      bundleIdentifier,
      logger,
      platform,
      resourcesPath,
      signals: getSignals(),
    });
  };
}

export async function generateDeviceCheckAttestation({
  addon,
  arch = process.arch,
  bundleIdentifier,
  logger,
  platform = process.platform,
  resourcesPath = process.resourcesPath,
  signals,
}: GenerateDeviceCheckAttestationOptions): Promise<DeviceCheckAttestationResponse> {
  const startedAtMs = Date.now();
  if (!isDeviceCheckPlatformSupported({ platform })) {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      errorCode: 1,
      logger,
      startedAtMs,
    });
  }
  if (platform !== "darwin") {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      errorCode: 1,
      logger,
      signals,
      startedAtMs,
    });
  }
  if (!isDeviceCheckNativeAddonSupported({ arch, platform })) {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      errorCode: 2,
      logger,
      signals,
      startedAtMs,
    });
  }

  let nativeToken;
  try {
    nativeToken = await (
      addon ?? loadDeviceCheckAddon(resourcesPath)
    ).generateToken();
  } catch (error) {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      error,
      errorCode: 4,
      logger,
      signals,
      startedAtMs,
    });
  }

  if (!nativeToken.supported) {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      deviceCheckLatencyMs: nativeToken.latencyMs,
      errorCode: 3,
      logger,
      signals,
      startedAtMs,
    });
  }

  if (nativeToken.tokenBase64 == null) {
    return unavailableDeviceCheckToken({
      bundleIdentifier,
      deviceCheckLatencyMs: nativeToken.latencyMs,
      errorCode: 4,
      logger,
      signals,
      startedAtMs,
    });
  }

  logger.info("DeviceCheck attestation generated", {
    safe: {
      deviceCheckLatencyMs: nativeToken.latencyMs ?? null,
      durationMs: Date.now() - startedAtMs,
    },
    sensitive: {},
  });
  return {
    token: encodeDeviceCheckAttestationToken({
      bundleIdentifier,
      latencyMs: nativeToken.latencyMs,
      signals,
      token: nativeToken.tokenBase64,
    }),
  };
}

export async function generateRawDeviceCheckToken({
  addon,
  arch = process.arch,
  platform = process.platform,
  resourcesPath = process.resourcesPath,
}: {
  addon?: DeviceCheckNativeAddon;
  arch?: string;
  platform?: string;
  resourcesPath?: string;
} = {}): Promise<string | null> {
  if (!isDeviceCheckNativeAddonSupported({ arch, platform })) return null;
  const token = await (
    addon ?? loadDeviceCheckAddon(resourcesPath)
  ).generateToken();
  return token.supported ? (token.tokenBase64 ?? null) : null;
}

export function loadDeviceCheckAddon(
  resourcesPath?: string,
): DeviceCheckNativeAddon {
  if (resourcesPath == null) throw Error("DeviceCheck requires resourcesPath");
  return requireFromBundle(
    join(resourcesPath, "native", DEVICECHECK_NATIVE_ADDON),
  );
}

export function encodeDeviceCheckAttestationToken({
  bundleIdentifier,
  errorCode,
  latencyMs,
  signals,
  token,
}: {
  bundleIdentifier: string;
  errorCode?: number;
  latencyMs?: number | null;
  signals?: GenerateDeviceCheckAttestationOptions["signals"];
  token?: string;
}): string {
  const fields =
    token != null
      ? [encodeStringPair("token", token)]
      : [encodeIntegerPair("error_code", errorCode ?? 4)];
  fields.push(encodeStringPair("bundle_id", bundleIdentifier));
  if (signals != null) fields.push(encodeSignals(signals));
  if (latencyMs != null) fields.push(encodeFloatPair("t", latencyMs));
  return `${TOKEN_FORMAT_VERSION}.${base64Url(Buffer.concat([Buffer.from([0xa0 + fields.length]), ...fields]))}`;
}

function unavailableDeviceCheckToken({
  bundleIdentifier,
  deviceCheckLatencyMs,
  error,
  errorCode,
  logger,
  signals,
  startedAtMs,
}: {
  bundleIdentifier: string;
  deviceCheckLatencyMs?: number | null;
  error?: unknown;
  errorCode: number;
  logger: GenerateDeviceCheckAttestationOptions["logger"];
  signals?: GenerateDeviceCheckAttestationOptions["signals"];
  startedAtMs: number;
}): DeviceCheckAttestationResponse {
  const safe = {
    deviceCheckLatencyMs: deviceCheckLatencyMs ?? null,
    durationMs: Date.now() - startedAtMs,
    errorCode,
  };
  if (error == null) {
    logger.info("DeviceCheck attestation unavailable", { safe, sensitive: {} });
  } else {
    logger.warning("DeviceCheck attestation failed", {
      safe,
      sensitive: { error },
    });
  }
  return {
    token: encodeDeviceCheckAttestationToken({
      bundleIdentifier,
      errorCode,
      latencyMs: deviceCheckLatencyMs,
      signals,
    }),
  };
}

function encodeSignals(
  signals: NonNullable<GenerateDeviceCheckAttestationOptions["signals"]>,
): Buffer {
  const signalMap = encodeMap([
    [0, encodeUnsignedInteger(signals.schemaVersion)],
    [1, encodeArray(signals.preferredLanguages.map(encodeUtf8Text))],
    [2, encodeUtf8Text(signals.locale)],
    [3, encodeUtf8Text(signals.timezone)],
    [4, encodeUnsignedInteger(signals.screenSizeSum)],
    [5, encodeScreenScale(signals.screenScale)],
    [6, encodeUtf8Text(signals.appSessionId)],
  ]);
  return Buffer.concat([encodeUtf8Text("f"), encodeByteString(signalMap)]);
}

function encodeScreenScale(value: number): Buffer {
  return Number.isSafeInteger(value) && value >= 0
    ? encodeUnsignedInteger(value)
    : encodeFloat64(value);
}

function base64Url(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/u, "");
}
