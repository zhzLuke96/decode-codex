// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Analytics logger/client externals that were shared through the onboarding facade.
type StatsigClientLike = {
  flush?: () => void;
  getContext?: () => { user?: unknown };
  logEvent?: (eventName: string, value?: unknown, metadata?: unknown) => void;
};

type AnalyticsLoggerInit = {
  statsigClient?: StatsigClientLike;
  user?: unknown;
};

type AnalyticsLoggerConfig = {
  appName?: string;
  appVersion?: string;
  browserLocale?: string;
  deviceId?: string;
  options?: unknown;
  settings?: unknown;
};

type AnalyticsRequestInit = RequestInit & {
  headers: Record<string, string>;
};

type ProductEventDescriptor = {
  $type: string;
};

class AnalyticsHttpClient {
  async post(
    path: string,
    body: BodyInit,
    init: RequestInit = {},
  ): Promise<Response | null> {
    if (typeof fetch !== "function") return null;
    const response = await fetch(path, {
      ...init,
      body,
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(
        `Analytics request failed with status ${response.status}`,
      );
    }
    return response;
  }
}

export class AnalyticsLogger {
  private statsigClient: StatsigClientLike | null = null;

  constructor(private readonly config: AnalyticsLoggerConfig = {}) {}

  async initialize(init: AnalyticsLoggerInit): Promise<void> {
    this.statsigClient = init.statsigClient ?? null;
  }

  async trackStructuredEvent(
    messageType: ProductEventDescriptor | string,
    payload?: unknown,
  ): Promise<void> {
    const eventName =
      typeof messageType === "string" ? messageType : messageType.$type;
    this.statsigClient?.logEvent?.(eventName, undefined, {
      appName: this.config.appName,
      appVersion: this.config.appVersion,
      payload,
    });
  }

  async trackCounter(counter: unknown, value?: unknown): Promise<void> {
    const eventName =
      typeof counter === "string"
        ? counter
        : ((counter as ProductEventDescriptor | null)?.$type ?? "counter");
    this.statsigClient?.logEvent?.(eventName, value);
  }

  async flush(_reason?: unknown): Promise<void> {
    this.statsigClient?.flush?.();
  }
}

const analyticsHttpClient = new AnalyticsHttpClient();

export const analyticsApiClient = {
  getInstance(): AnalyticsHttpClient {
    return analyticsHttpClient;
  },
};

export function buildAnalyticsRequestInit(): AnalyticsRequestInit {
  return {
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  };
}

function productEventDescriptor(type: string): ProductEventDescriptor {
  return { $type: type };
}

export const gitBlameEnabledEventToken = productEventDescriptor(
  "codex_git_blame_enabled",
);
export const gitCommittedProductEvent = productEventDescriptor(
  "codex_git_commit_created",
);
export const branchPushedProductEvent = productEventDescriptor(
  "codex_branch_pushed",
);
export const pullRequestCreatedProductEvent = productEventDescriptor(
  "codex_pull_request_created",
);
export const reviewPatchActionEvent = productEventDescriptor(
  "codex_review_patch_action",
);
