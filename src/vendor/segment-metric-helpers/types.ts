// Restored from ref/webview/assets/metric-helpers-7nP-wnaS.js
// Shared typed contracts for Segment metric helper compatibility modules.
import type { CoreContext, IntegrationsOptions } from "@segment/analytics-core";

export interface QueueItem {
  id: string;
}

export interface QueueStorage {
  getItem(key: string): string | null | undefined;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export type IntegrationSettings = Record<string, Record<string, unknown>>;

export interface SegmentIntegrationConfig {
  integrations: IntegrationSettings;
}

export interface SegmentIntegrationOptions {
  integrations?: IntegrationsOptions;
}

export interface IntegrationMetricOptions {
  methodName: string;
  integrationName: string;
  type: string;
  didError?: boolean;
}

export type SegmentMetricContext = CoreContext;
