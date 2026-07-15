// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for desktop DeviceCheck attestation.

export type DeviceCheckSignals = {
  appSessionId: string;
  locale: string;
  preferredLanguages: readonly string[];
  schemaVersion: number;
  screenScale: number;
  screenSizeSum: number;
  timezone: string;
};

export type DeviceCheckNativeAddon = {
  generateToken(): Promise<{
    latencyMs?: number | null;
    supported: boolean;
    tokenBase64?: string | null;
  }>;
};

export type DeviceCheckLogger = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};

export type DeviceCheckAttestationRequest = {
  method: string;
};

export type DeviceCheckAttestationResponse = {
  token: string;
};

export type DeviceCheckAttestationHandlerOptions = {
  addon?: DeviceCheckNativeAddon;
  arch?: string;
  bundleIdentifier: string;
  getSignals(): DeviceCheckSignals | undefined;
  logger: DeviceCheckLogger;
  platform?: string;
  resourcesPath?: string;
};

export type GenerateDeviceCheckAttestationOptions = {
  addon?: DeviceCheckNativeAddon;
  arch?: string;
  bundleIdentifier: string;
  logger: DeviceCheckLogger;
  platform?: string;
  resourcesPath?: string;
  signals?: DeviceCheckSignals;
};
