// Restored from ref/webview/assets/appgen-gating-C3NQrPIO.js
// Resolves the Sites/Appgen access gate and exposes the route guard status.
import { useGateValue } from "../vendor/statsig-current-runtime";
import {
  _appScopeC,
  _appScopeL,
  _appScopeM,
  _appScopeT,
} from "../boundaries/app-scope";
import { vscodeApiU as queryTimings } from "../boundaries/vscode-api";
import { codexRequest } from "../runtime/request";
type AppgenAccessStatus = "available" | "loading" | "unavailable";
type AppgenAccessResponse = {
  enabled?: boolean | null;
};
type QuerySnapshot<T> = {
  data?: T | null;
  isError?: boolean;
};
type AppScopeGetter = {
  get<T>(signal: unknown, ...params: unknown[]): T;
};
type StatsigClientLike = {
  checkGate(gateName: string): boolean;
};
type StatsigGlobalLike = {
  firstInstance?: StatsigClientLike;
  instance?: (sdkKey?: string) => StatsigClientLike | undefined;
  instances?: Record<string, StatsigClientLike | undefined>;
};
const APPGEN_ACCESS_GATE = "637432221";
const APPGEN_ENTRY_POINT_GATE = "1741944562";
function getStatsigGlobal(): StatsigGlobalLike | null {
  return (
    (
      globalThis as {
        __STATSIG__?: StatsigGlobalLike;
      }
    ).__STATSIG__ ?? null
  );
}
function getStatsigClient(): StatsigClientLike | null {
  const statsigGlobal = getStatsigGlobal();
  if (statsigGlobal == null) return null;
  const globalInstance = statsigGlobal.instance?.();
  if (globalInstance != null) return globalInstance;
  if (statsigGlobal.firstInstance != null) return statsigGlobal.firstInstance;
  const [firstNamedInstance] = Object.values(statsigGlobal.instances ?? {});
  return firstNamedInstance ?? null;
}
function getStatsigGateValue(gateName: string): boolean {
  return getStatsigClient()?.checkGate(gateName) ?? false;
}
const statsigGateValueSignal = _appScopeL(
  _appScopeT,
  (gateName: string): boolean => getStatsigGateValue(gateName),
);
function useAppgenSitesEntryPointEnabled(): boolean {
  const hasAppgenAccessGate = useGateValue(APPGEN_ACCESS_GATE);
  const hasEntryPointGate = useGateValue(APPGEN_ENTRY_POINT_GATE);
  return hasAppgenAccessGate && hasEntryPointGate;
}
const appgenAccessQuery = _appScopeM(_appScopeT, ({ get }: AppScopeGetter) => ({
  enabled: get<boolean>(statsigGateValueSignal, APPGEN_ACCESS_GATE),
  queryKey: ["appgen", "access"],
  queryFn: () =>
    codexRequest.safeGet("/wham/sites/access") as Promise<AppgenAccessResponse>,
  retry: false,
  staleTime: queryTimings.TEN_MINUTES,
}));
const appgenAccessStatusSignal = _appScopeC(
  _appScopeT,
  ({ get }: AppScopeGetter): AppgenAccessStatus => {
    if (!get<boolean>(statsigGateValueSignal, APPGEN_ACCESS_GATE))
      return "unavailable";
    const { data, isError } =
      get<QuerySnapshot<AppgenAccessResponse>>(appgenAccessQuery);
    if (isError || data?.enabled === false) return "unavailable";
    return data?.enabled === true ? "available" : "loading";
  },
);
export { useAppgenSitesEntryPointEnabled, appgenAccessStatusSignal };
