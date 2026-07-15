// Restored from ref/webview/assets/metric-helpers-7nP-wnaS.js
// Segment metric helper compatibility shim backed by upstream Segment packages.
export {
  ON_REMOVE_FROM_FUTURE as metricHelpersL,
  PriorityQueue as metricHelpersU,
  attempt as metricHelpersS,
  ensure as metricHelpersC,
} from "@segment/analytics-core";
export { Emitter as metricHelpersD } from "@segment/analytics-generic-utils";
export { createDeferred as metricHelpersF } from "@segment/analytics-generic-utils";

export { isOffline as metricHelpersA } from "./segment-metric-helpers/connection";
export { isOnline as metricHelpersO } from "./segment-metric-helpers/connection";
export { mergeIntegrationSettings as metricHelpersN } from "./segment-metric-helpers/integration-metrics";
export { recordIntegrationMetric as metricHelpersT } from "./segment-metric-helpers/integration-metrics";
export { runWhile as metricHelpersR } from "./segment-metric-helpers/p-while";
export { PersistedPriorityQueue as metricHelpersI } from "./segment-metric-helpers/persisted-priority-queue";

export { isOffline, isOnline } from "./segment-metric-helpers/connection";
export {
  mergeIntegrationSettings,
  recordIntegrationMetric,
} from "./segment-metric-helpers/integration-metrics";
export { runWhile } from "./segment-metric-helpers/p-while";
export { PersistedPriorityQueue } from "./segment-metric-helpers/persisted-priority-queue";
export type {
  IntegrationMetricOptions,
  IntegrationSettings,
  QueueItem,
  QueueStorage,
  SegmentIntegrationConfig,
  SegmentIntegrationOptions,
  SegmentMetricContext,
} from "./segment-metric-helpers/types";

export function initSegmentMetricHelpersRetryRuntime(): void {}
export function initSegmentMetricHelpersPersistedQueueRuntime(): void {}
export function initSegmentMetricHelpersAnalyticsCoreRuntime(): void {}
export function initSegmentMetricHelpersTslibRuntime(): void {}
export function initSegmentMetricHelpersNoopRuntime(): void {}
export function initSegmentMetricHelpersLoadScriptRuntime(): void {}
