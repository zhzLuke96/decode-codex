// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Current-ref Statsig binding. The original bundle loaded @statsig/client-core
// and @statsig/js-client/@statsig/react-bindings through shared current-ref
// loaders; keep this file as the compatibility boundary but resolve those
// packages through npm directly.
import type { ReactElement, ReactNode } from "react";
import {
  StableID as statsigStableID,
  StatsigMetadataProvider as statsigMetadataProvider,
  StatsigSession as statsigSession,
} from "@statsig/client-core";
import { StatsigClient as StatsigClientRaw } from "@statsig/js-client";
import {
  StatsigProvider as StatsigProviderRaw,
  useClientAsyncInit as useClientAsyncInitRaw,
  useDynamicConfig as useDynamicConfigRaw,
  useGateValue as useGateValueRaw,
  useLayer as useLayerRaw,
  useStatsigClient as useStatsigClientRaw,
} from "@statsig/react-bindings";

type StatsigSessionRecord = {
  data: {
    sessionID: string;
    startTime: number;
    lastUpdate: number;
  };
};

type StableIDModule = {
  get(statsigClientKey: string): string | null;
  setOverride(stableId: string, statsigClientKey: string): void;
};

type StatsigSessionModule = {
  get(statsigClientKey: string, updateLastUsed?: boolean): StatsigSessionRecord;
  overrideInitialSessionID(sessionId: string, statsigClientKey: string): void;
  checkForIdleSession(statsigClientKey: string): void;
};

type StatsigMetadataProviderModule = {
  get(): Record<string, unknown>;
  add(metadata: Record<string, unknown>): void;
};

type StatsigUserCustomValue = string | number | boolean | string[] | number[];

type StatsigUserLike = {
  userID?: string;
  customIDs?: Record<string, string | undefined>;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  appVersion?: string;
  custom?: Record<string, StatsigUserCustomValue>;
  privateAttributes?: Record<string, StatsigUserCustomValue> | null;
  analyticsOnlyMetadata?: Record<string, string | number | boolean>;
  [key: string]: unknown;
};

type StatsigUpdateUserResult = {
  success?: boolean;
  error?: unknown;
};

type StatsigConfigLike = {
  value: unknown;
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

type StatsigLayerLike = {
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

type StatsigClientLike = {
  loadingStatus?: string;
  dataAdapter: {
    setData(payload: string): void;
    prefetchData(user: unknown): Promise<unknown>;
  };
  getContext(): { user: StatsigUserLike };
  initializeSync(): void;
  updateUserAsync(user: unknown): Promise<StatsigUpdateUserResult>;
  updateUserSync(
    user: unknown,
    options: { disableBackgroundCacheRefresh: boolean },
  ): StatsigUpdateUserResult;
  on(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  off(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  checkGate(name: string, options?: unknown): boolean;
  getFeatureGate(
    name: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(name: string, options?: unknown): StatsigConfigLike;
  getLayer(name: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  flush(): Promise<void>;
};

type UseStatsigClientResult = {
  client: StatsigClientLike;
  checkGate(gateName: string, options?: unknown): boolean;
  getFeatureGate(
    gateName: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(configName: string, options?: unknown): StatsigConfigLike;
  getLayer(layerName: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  isLoading: boolean;
};

type StatsigClientConstructor = new (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => StatsigClientLike;

type StatsigClientStatic = StatsigClientConstructor & {
  instance(statsigClientKey?: string): StatsigClientLike;
};

type StatsigProviderComponent = (
  props:
    | {
        client: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      }
    | {
        sdkKey: string;
        user: unknown;
        options?: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      },
) => ReactElement | null;

type UseClientAsyncInit = (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => {
  client: StatsigClientLike;
  isLoading: boolean;
};

export const StableID = statsigStableID as unknown as StableIDModule;
export const StatsigSession = statsigSession as unknown as StatsigSessionModule;
export const StatsigMetadataProvider =
  statsigMetadataProvider as unknown as StatsigMetadataProviderModule;
export const StatsigClient = StatsigClientRaw as unknown as StatsigClientStatic;
export const StatsigProvider =
  StatsigProviderRaw as unknown as StatsigProviderComponent;
export const useClientAsyncInit =
  useClientAsyncInitRaw as unknown as UseClientAsyncInit;
export const useDynamicConfig = useDynamicConfigRaw as unknown as (
  configName: string,
  options?: unknown,
) => StatsigConfigLike;
export const useGateValue = useGateValueRaw as unknown as (
  gateName: string,
  options?: unknown,
) => boolean;
export const useLayer = useLayerRaw as unknown as (
  layerName: string,
  options?: unknown,
) => StatsigLayerLike;
export const useStatsigClient =
  useStatsigClientRaw as unknown as () => UseStatsigClientResult;

export function loadStatsigCore(): {
  StableID: StableIDModule;
  StatsigSession: StatsigSessionModule;
  StatsigMetadataProvider: StatsigMetadataProviderModule;
} {
  return {
    StableID,
    StatsigSession,
    StatsigMetadataProvider,
  };
}

export function getStatsigClient(statsigClientKey?: string): StatsigClientLike {
  return StatsigClient.instance(statsigClientKey);
}

export function readStatsigGateValue(gateName: string): boolean {
  return getStatsigClient().checkGate(gateName);
}

export function getStatsigDynamicConfig(
  client: StatsigClientLike,
  configName: string,
  options?: unknown,
): StatsigConfigLike {
  return client.getDynamicConfig(configName, options);
}

export function useStatsigLoading(): boolean {
  return useStatsigClient().isLoading;
}
