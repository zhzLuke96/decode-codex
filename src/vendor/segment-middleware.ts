// Restored from ref/webview/assets/middleware-CcPovR3s.js
// Segment middleware compatibility shim backed by the upstream Segment packages.
import {
  Context as SegmentContext,
  type MiddlewareFunction,
  type Plugin,
  type SegmentEvent,
} from "@segment/analytics-next";
import {
  ContextCancelation as SegmentContextCancelation,
  CoreStats,
} from "@segment/analytics-core";
import {
  Alias,
  Facade,
  Group,
  Identify,
  Page,
  Screen,
  Track,
} from "@segment/facade";
import * as segmentFacadePackage from "@segment/facade";

export { Context as middlewareA } from "@segment/analytics-next";
export {
  ContextCancelation as middlewareF,
  CoreContext as middlewareP,
  CoreStats as segmentCoreStats,
} from "@segment/analytics-core";
export { Facade as segmentFacadeBase } from "@segment/facade";

export interface SegmentFacadeOptions {
  clone?: boolean;
  traverse?: boolean;
}

export type SegmentFacade = Facade<SegmentEvent> & {
  obj: SegmentEvent;
  rawEvent(): SegmentEvent;
};

export interface DestinationMiddlewareParams {
  payload: SegmentFacade;
  integration: string;
  next: (payload: SegmentFacade | null) => void;
}

export type DestinationMiddlewareFunction = (
  params: DestinationMiddlewareParams,
) => void | Promise<void>;

export interface RemoteMetricsOptions {
  host?: string;
  sampleRate?: number;
  flushTimer?: number;
  maxQueueSize?: number;
  protocol?: string;
}

interface RemoteMetric {
  type: "Counter";
  metric: string;
  value: 1;
  tags: Record<string, string>;
}

type AnalyticsPackageType = "npm" | "web";

const analyticsVersion = "1.84.0";
const analyticsPackageType: AnalyticsPackageType = "npm";
const analyticsApiHost = "api.segment.io/v1";

export function getAnalyticsPackageType(): AnalyticsPackageType {
  return analyticsPackageType;
}

export function getGlobalScope(): typeof globalThis {
  return globalThis;
}

export function setObjectPath(
  target: Record<string, unknown>,
  path: string | readonly (string | number)[],
  value: unknown,
): void {
  const segments =
    typeof path === "string" ? path.split(".") : path.map(String);
  let cursor: Record<string, unknown> = target;

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    if (
      segment == null ||
      segment === "__proto__" ||
      segment === "constructor" ||
      segment === "prototype"
    ) {
      return;
    }

    if (index === segments.length - 1) {
      cursor[segment] = value;
      return;
    }

    const nextSegment = segments[index + 1];
    const currentValue = cursor[segment];
    if (currentValue == null || typeof currentValue !== "object") {
      cursor[segment] =
        Number.isNaN(Number(nextSegment)) || String(nextSegment).includes(".")
          ? {}
          : [];
    }
    cursor = cursor[segment] as Record<string, unknown>;
  }
}

export function createUuid(): string {
  const cryptoScope = getGlobalScope().crypto;
  const randomUUID = cryptoScope?.randomUUID;
  if (typeof randomUUID === "function") return randomUUID.call(cryptoScope);
  const bytes = new Uint8Array(16);
  if (cryptoScope?.getRandomValues) {
    cryptoScope.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  return [...bytes]
    .map((byte, index) => {
      const value = byte.toString(16).padStart(2, "0");
      return [4, 6, 8, 10].includes(index) ? `-${value}` : value;
    })
    .join("");
}

export function segmentFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const globalScope = getGlobalScope();
  if (typeof globalScope.fetch !== "function") {
    return Promise.reject(new Error("Segment fetch is unavailable"));
  }
  return globalScope.fetch(input, init);
}

function formatRemoteMetricTags(
  tags: readonly string[],
): Record<string, string> {
  const formattedTags = tags.reduce<Record<string, string>>((acc, tag) => {
    const [key, tagValue = ""] = tag.split(":");
    if (key) acc[key] = tagValue;
    return acc;
  }, {});

  return {
    ...formattedTags,
    library: "analytics.js",
    library_version:
      getAnalyticsPackageType() === "web"
        ? `next-${analyticsVersion}`
        : `npm:next-${analyticsVersion}`,
  };
}

class SegmentRemoteMetrics {
  private readonly host: string;
  private readonly sampleRate: number;
  private readonly flushTimer: number;
  private readonly maxQueueSize: number;
  private readonly protocol: string;
  private queue: RemoteMetric[] = [];
  private flushScheduled = false;

  constructor(options: RemoteMetricsOptions = {}) {
    this.host = options.host ?? analyticsApiHost;
    this.sampleRate = options.sampleRate ?? 1;
    this.flushTimer = options.flushTimer ?? 30_000;
    this.maxQueueSize = options.maxQueueSize ?? 20;
    this.protocol = options.protocol ?? "https";
    this.scheduleFlush();
  }

  increment(metric: string, tags: readonly string[]): void {
    if (
      !metric.includes("analytics_js.") ||
      tags.length === 0 ||
      Math.random() > this.sampleRate ||
      this.queue.length >= this.maxQueueSize
    ) {
      return;
    }

    this.queue.push({
      type: "Counter",
      metric,
      value: 1,
      tags: formatRemoteMetricTags(tags),
    });

    if (metric.includes("error")) {
      void this.flush();
    }
  }

  async flush(): Promise<void> {
    if (this.queue.length === 0) return;
    try {
      await this.send();
    } catch (error) {
      console.error("Error sending segment performance metrics", error);
    }
  }

  private async send(): Promise<void> {
    const series = this.queue;
    this.queue = [];

    await segmentFetch(`${this.protocol}://${this.host}/m`, {
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ series }),
      method: "POST",
    });
  }

  private scheduleFlush(): void {
    if (this.flushScheduled || this.sampleRate <= 0) return;
    this.flushScheduled = true;
    setTimeout(() => {
      this.flushScheduled = false;
      void this.flush().finally(() => this.scheduleFlush());
    }, this.flushTimer);
  }
}

let remoteMetrics: SegmentRemoteMetrics | undefined;

export class RemoteMetricsStore extends CoreStats {
  static initRemoteMetrics(options?: RemoteMetricsOptions): void {
    remoteMetrics = new SegmentRemoteMetrics(options);
  }

  override increment(metric: string, by = 1, tags?: string[]): void {
    super.increment(metric, by, tags);
    remoteMetrics?.increment(metric, tags ?? []);
  }
}

export function createSegmentFacade(
  event: SegmentEvent,
  options?: SegmentFacadeOptions,
): SegmentFacade {
  let facade: Facade<SegmentEvent>;

  switch (event.type) {
    case "track":
      facade = new Track(event, options);
      break;
    case "identify":
      facade = new Identify(event, options);
      break;
    case "page":
      facade = new Page(event, options);
      break;
    case "alias":
      facade = new Alias(event, options);
      break;
    case "group":
      facade = new Group(event, options);
      break;
    case "screen":
      facade = new Screen(event, options);
      break;
    default:
      facade = new Facade(event, options);
  }

  Object.defineProperty(facade, "obj", {
    value: event,
    writable: true,
  });

  return facade as SegmentFacade;
}

export async function applyDestinationMiddleware(
  destination: string,
  event: SegmentEvent,
  middleware: readonly DestinationMiddlewareFunction[],
): Promise<SegmentEvent | null> {
  let modifiedEvent = createSegmentFacade(event, {
    clone: true,
    traverse: false,
  }).rawEvent() as SegmentEvent;

  async function applyMiddleware(
    currentEvent: SegmentEvent,
    middlewareFunction: DestinationMiddlewareFunction,
  ): Promise<SegmentEvent | null> {
    let nextCalled = false;
    let returnedEvent: SegmentEvent | null = null;

    await middlewareFunction({
      payload: createSegmentFacade(currentEvent, {
        clone: true,
        traverse: false,
      }),
      integration: destination,
      next(nextEvent) {
        nextCalled = true;

        if (nextEvent === null) {
          returnedEvent = null;
        }

        if (nextEvent) {
          returnedEvent = nextEvent.obj;
        }
      },
    });

    if (!nextCalled && returnedEvent !== null) {
      returnedEvent = {
        ...currentEvent,
        integrations: {
          ...currentEvent.integrations,
          [destination]: false,
        },
      };
    }

    return returnedEvent;
  }

  for (const middlewareFunction of middleware) {
    const result = await applyMiddleware(modifiedEvent, middlewareFunction);
    if (result === null) return null;
    modifiedEvent = result;
  }

  return modifiedEvent;
}

export function sourceMiddlewarePlugin(
  middlewareFunction: MiddlewareFunction,
  integrations: SegmentEvent["integrations"] = {},
): Plugin {
  async function apply(ctx: SegmentContext): Promise<SegmentContext> {
    let nextCalled = false;

    await middlewareFunction({
      payload: createSegmentFacade(ctx.event, {
        clone: true,
        traverse: false,
      }),
      integrations,
      next(nextEvent) {
        nextCalled = true;
        if (nextEvent) ctx.event = nextEvent.obj;
      },
    });

    if (!nextCalled) {
      throw new SegmentContextCancelation({
        retry: false,
        type: "middleware_cancellation",
        reason: "Middleware `next` function skipped",
      });
    }

    return ctx;
  }

  return {
    name: `Source Middleware ${middlewareFunction.name}`,
    type: "before",
    version: "0.1.0",
    isLoaded: () => true,
    load: (ctx: SegmentContext): Promise<SegmentContext> =>
      Promise.resolve(ctx),
    track: apply,
    page: apply,
    screen: apply,
    identify: apply,
    alias: apply,
    group: apply,
  };
}

export const middlewareC = getAnalyticsPackageType;
export const middlewareD = getGlobalScope;
export const middlewareH = setObjectPath;
export const middlewareI = segmentFacadePackage;
export const middlewareL = analyticsVersion;
export const middlewareM = createUuid;
export const middlewareO = RemoteMetricsStore;
export const middlewareR = createSegmentFacade;
export const middlewareS = analyticsApiHost;
export const middlewareT = applyDestinationMiddleware;
export const middlewareU = segmentFetch;
export { sourceMiddlewarePlugin as middlewareN };
