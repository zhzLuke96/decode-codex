// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Host request bridge for Statsig SDK network override calls.
import { vscodeApiL as VscodeFetchBridge } from "../boundaries/vscode-api";

export const statsigBase64BodyHeaderName = "x-codex-base64";

export interface HostRequestBridgeSendOptions {
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export interface HostRequestBridgeResponse {
  body?: unknown;
  headers?: Record<string, string>;
  status: number;
}

class StatsigHostRequestBridge {
  private static instance: StatsigHostRequestBridge | null = null;

  static getInstance(): StatsigHostRequestBridge {
    StatsigHostRequestBridge.instance ??= new StatsigHostRequestBridge();
    return StatsigHostRequestBridge.instance;
  }

  async sendRequest(
    method: string,
    url: string,
    options: HostRequestBridgeSendOptions = {},
  ): Promise<HostRequestBridgeResponse> {
    const bridge = VscodeFetchBridge.getInstance() as {
      sendRequest?: (
        method: string,
        url: string,
        options?: HostRequestBridgeSendOptions,
      ) => Promise<unknown>;
    };
    if (typeof bridge.sendRequest === "function") {
      return normalizeHostBridgeResponse(
        await bridge.sendRequest(method, url, options),
      );
    }
    return fetchHostRequest(method, url, options);
  }
}

export const hostRequestBridge = {
  getInstance: StatsigHostRequestBridge.getInstance,
};

async function fetchHostRequest(
  method: string,
  url: string,
  options: HostRequestBridgeSendOptions,
): Promise<HostRequestBridgeResponse> {
  const response = await fetch(url, {
    body: options.body as BodyInit | null | undefined,
    headers: options.headers,
    method,
    signal: options.signal,
  });
  return {
    body: await response.text(),
    headers: Object.fromEntries(response.headers.entries()),
    status: response.status,
  };
}

function normalizeHostBridgeResponse(
  response: unknown,
): HostRequestBridgeResponse {
  if (response != null && typeof response === "object") {
    const record = response as Record<string, unknown>;
    return {
      body: "body" in record ? record.body : response,
      headers: normalizeResponseHeaders(record.headers),
      status: typeof record.status === "number" ? record.status : 200,
    };
  }
  return { body: response, headers: {}, status: 200 };
}

function normalizeResponseHeaders(
  headers: unknown,
): Record<string, string> | undefined {
  if (headers == null) return {};
  if (headers instanceof Headers) {
    return Object.fromEntries(headers.entries());
  }
  if (Array.isArray(headers)) {
    return Object.fromEntries(
      headers.map(([name, value]) => [String(name), String(value)]),
    );
  }
  if (typeof headers === "object") {
    return Object.fromEntries(
      Object.entries(headers as Record<string, unknown>).map(
        ([name, value]) => [name, String(value)],
      ),
    );
  }
  return {};
}
