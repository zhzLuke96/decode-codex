// Restored from ref/webview/assets/pkg-CsBnWPsQ.js
// Segment browser SDK chunks are stock npm packages. This shim preserves the
// Codex bundle alias surface while delegating implementation and types to npm.
import {
  CoreEventFactory,
  CoreEventQueue,
  CoreStats,
  type CoreContext,
  type CorePlugin,
} from "@segment/analytics-core";

export {
  Analytics,
  AnalyticsBrowser,
  AnalyticsBrowser as pkgAnalyticsBrowser,
  AnalyticsNode,
  AnalyticsNode as pkgAnalyticsNode,
  Context,
  ContextCancelation,
  EventFactory,
  Group,
  UniversalStorage,
  User,
  getGlobalAnalytics,
  isDestinationPluginWithAddMiddleware,
  resolveAliasArguments,
  resolveArguments,
  resolvePageArguments,
  resolveUserArguments,
  segmentio,
} from "@segment/analytics-next";

export {
  PriorityQueue as segmentRetryQueue,
  attempt as applySegmentPlugin,
  dispatch as dispatchSegmentContext,
  isFunction as segmentIsFunction,
  isNumber as segmentIsNumber,
  isPlainObject as segmentIsPlainObject,
  isString as segmentIsString,
  pTimeout as segmentPromiseWithTimeout,
} from "@segment/analytics-core";

export {
  Emitter as segmentEventEmitter,
  createDeferred as createSegmentDeferred,
} from "@segment/analytics-generic-utils";

export type {
  AnalyticsBrowserSettings,
  AnalyticsSettings,
  AnalyticsSnippet,
  CDNSettings,
  InitOptions,
  MiddlewareFunction,
  Options,
  Plugin,
  RemoteIntegrationSettings,
  SegmentEvent,
  Traits,
} from "@segment/analytics-next";

export type {
  Callback,
  CancelationOptions,
  CompactMetric,
  CoreMetric,
  CoreMetricType,
  CoreOptions,
  CorePlugin,
  CoreSegmentEvent,
  DispatchOptions,
  EventProperties,
  GroupTraits,
  IntegrationsOptions,
  SerializedContext,
  UserTraits,
} from "@segment/analytics-core";

export type { EmitterOptions } from "@segment/analytics-generic-utils";

export class SegmentEventNormalizer extends CoreEventFactory {}

export class SegmentDispatchQueue<
  ContextType extends CoreContext = CoreContext,
  PluginType extends CorePlugin<ContextType> = CorePlugin<ContextType>,
> extends CoreEventQueue<ContextType, PluginType> {}

export class SegmentMetricsBuffer extends CoreStats {}

export const segmentEventNormalizer = SegmentEventNormalizer;
export const segmentDispatchQueue = SegmentDispatchQueue;
export const segmentMetricsBuffer = SegmentMetricsBuffer;
export const createSegmentMessageId = (): string =>
  globalThis.crypto?.randomUUID?.() ??
  `${Date.now().toString(36)}-${Math.random().toString(16).slice(2)}`;

export function initSegmentAnalyticsCoreChunk(): void {}

export function initSegmentAnalyticsEventEmitterChunk(): void {}

export function initSegmentAnalyticsUuidChunk(): void {}
