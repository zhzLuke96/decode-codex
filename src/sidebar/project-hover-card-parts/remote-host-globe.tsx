// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Also covers ref/webview/assets/app-initial~app-main~appgen-page~remote-conversation-page~new-thread-panel-page~onboarding-~q51dlew8-DBFLWh48.js
// Stable remote host globe coloring and the colored globe icon component.
import { once } from "../../runtime/commonjs-interop";
import {
  createPersistentSignal,
  getChunkModuleExports,
  GlobeIcon,
  initPersistentSignalRuntime,
  initScopeRuntime,
  initSignalHooksRuntime,
  useSignalValue,
} from "../../runtime/project-hover-card-runtime";

const REMOTE_HOST_GLOBE_LIGHTNESS = 0.74;
const MIN_REMOTE_HOST_GLOBE_CHROMA = 0.09;
const MAX_REMOTE_HOST_GLOBE_CHROMA = 0.18;
const FORBIDDEN_REMOTE_HOST_HUE_RANGES = [
  {
    start: 330,
    end: 45,
  },
  {
    start: 95,
    end: 165,
  },
];

export let remoteHostGlobeColorByHostIdSignal: unknown;

export const initRemoteHostGlobeColorSignal = once(() => {
  initPersistentSignalRuntime();
  remoteHostGlobeColorByHostIdSignal = createPersistentSignal(
    "remote-host-globe-color-by-host-id",
    undefined,
  );
});

function assignStableHostHues(
  hostIds: string[],
  {
    forbiddenHueRanges = [],
  }: {
    forbiddenHueRanges?: Array<{ end: number; start: number }>;
  } = {},
) {
  const sortedHostIds = [...new Set(hostIds)].sort((left, right) =>
    left.localeCompare(right),
  );
  const hueByHostId: Record<string, number> = {};
  const allowedHueRanges = getAllowedHueRanges(forbiddenHueRanges);
  const totalAllowedHue = allowedHueRanges.reduce(
    (total, range) => total + (range.end - range.start),
    0,
  );

  if (totalAllowedHue === 0) {
    return hueByHostId;
  }

  sortedHostIds.forEach((hostId, index) => {
    hueByHostId[hostId] = resolveHueFromAllowedRanges(
      ((index + 0.5) * totalAllowedHue) / sortedHostIds.length,
      allowedHueRanges,
    );
  });

  return hueByHostId;
}

function getAllowedHueRanges(
  forbiddenHueRanges: Array<{ end: number; start: number }>,
) {
  const normalizedForbiddenRanges = forbiddenHueRanges
    .flatMap((range) => {
      const start = ((range.start % 360) + 360) % 360;
      const end = ((range.end % 360) + 360) % 360;
      return start <= end
        ? [{ start, end }]
        : [
            { start, end: 360 },
            { start: 0, end },
          ];
    })
    .sort((left, right) => left.start - right.start);

  if (normalizedForbiddenRanges.length === 0) {
    return [{ start: 0, end: 360 }];
  }

  const mergedForbiddenRanges: Array<{ end: number; start: number }> = [];
  for (const range of normalizedForbiddenRanges) {
    const previousRange = mergedForbiddenRanges.at(-1);
    if (previousRange == null || range.start > previousRange.end) {
      mergedForbiddenRanges.push({ ...range });
      continue;
    }
    previousRange.end = Math.max(previousRange.end, range.end);
  }

  const allowedRanges: Array<{ end: number; start: number }> = [];
  let cursor = 0;
  for (const range of mergedForbiddenRanges) {
    if (range.start > cursor) {
      allowedRanges.push({ start: cursor, end: range.start });
    }
    cursor = range.end;
  }
  if (cursor < 360) {
    allowedRanges.push({ start: cursor, end: 360 });
  }

  return allowedRanges;
}

function resolveHueFromAllowedRanges(
  offset: number,
  allowedHueRanges: Array<{ end: number; start: number }>,
) {
  let remainingOffset = offset;
  for (const range of allowedHueRanges) {
    const width = range.end - range.start;
    if (remainingOffset <= width) {
      return range.start + remainingOffset;
    }
    remainingOffset -= width;
  }

  return allowedHueRanges.at(-1)?.end ?? 0;
}

function oklchHostColorToHex({ chroma, hue }: { chroma: number; hue: number }) {
  const hueRadians = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRadians);
  const b = chroma * Math.sin(hueRadians);
  const long =
    REMOTE_HOST_GLOBE_LIGHTNESS + 0.3963377774 * a + 0.2158037573 * b;
  const medium =
    REMOTE_HOST_GLOBE_LIGHTNESS - 0.1055613458 * a - 0.0638541728 * b;
  const short =
    REMOTE_HOST_GLOBE_LIGHTNESS - 0.0894841775 * a - 1.291485548 * b;
  const longCubed = long ** 3;
  const mediumCubed = medium ** 3;
  const shortCubed = short ** 3;

  return `#${[
    4.0767416621 * longCubed -
      3.3077115913 * mediumCubed +
      0.2309699292 * shortCubed,
    -1.2684380046 * longCubed +
      2.6097574011 * mediumCubed -
      0.3413193965 * shortCubed,
    -0.0041960863 * longCubed -
      0.7034186147 * mediumCubed +
      1.707614701 * shortCubed,
  ]
    .map(toSrgbHexChannel)
    .join("")}`;
}

function getRemoteHostColorChroma({
  hostCount,
  hostIndex,
}: {
  hostCount: number;
  hostIndex: number;
}) {
  return hostCount <= 1
    ? (MIN_REMOTE_HOST_GLOBE_CHROMA + MAX_REMOTE_HOST_GLOBE_CHROMA) / 2
    : MIN_REMOTE_HOST_GLOBE_CHROMA +
        ((MAX_REMOTE_HOST_GLOBE_CHROMA - MIN_REMOTE_HOST_GLOBE_CHROMA) /
          (hostCount - 1)) *
          hostIndex;
}

export function buildRemoteHostGlobeColors(
  hostIds: string[],
  customColorByHostId?: Record<string, string> | null,
) {
  const hueByHostId = assignStableHostHues(hostIds, {
    forbiddenHueRanges: FORBIDDEN_REMOTE_HOST_HUE_RANGES,
  });
  const sortedHostIds = Object.keys(hueByHostId).sort((left, right) =>
    left.localeCompare(right),
  );

  return Object.fromEntries(
    sortedHostIds.map((hostId, index) => [
      hostId,
      customColorByHostId?.[hostId] ??
        oklchHostColorToHex({
          chroma: getRemoteHostColorChroma({
            hostCount: sortedHostIds.length,
            hostIndex: index,
          }),
          hue: hueByHostId[hostId],
        }),
    ]),
  );
}

function toSrgbHexChannel(linearChannel: number) {
  const srgbChannel =
    linearChannel <= 0.0031308
      ? linearChannel * 12.92
      : 1.055 * linearChannel ** 0.4166666666666667 - 0.055;
  return Math.round(Math.min(1, Math.max(0, srgbChannel)) * 255)
    .toString(16)
    .padStart(2, "0");
}

export const initRemoteHostGlobeColorMath = once(() => {});

export function RemoteHostGlobeIcon({
  className,
  hostId,
  hostIdsForColorAssignment,
}: {
  className?: string;
  hostId: string;
  hostIdsForColorAssignment: string[];
}) {
  const customColorByHostId = useSignalValue(
    remoteHostGlobeColorByHostIdSignal,
  ) as Record<string, string> | null | undefined;
  const candidateHostIds = hostIdsForColorAssignment.includes(hostId)
    ? hostIdsForColorAssignment
    : [hostId, ...hostIdsForColorAssignment];
  const colorByHostId = buildRemoteHostGlobeColors(
    candidateHostIds,
    customColorByHostId,
  );

  return (
    <GlobeIcon
      className={className}
      style={{
        color: colorByHostId[hostId],
      }}
    />
  );
}

export const initRemoteHostGlobeIconChunk = once(() => {
  getChunkModuleExports();
  initScopeRuntime();
  initSignalHooksRuntime();
  initRemoteHostGlobeColorSignal();
  initRemoteHostGlobeColorMath();
});
