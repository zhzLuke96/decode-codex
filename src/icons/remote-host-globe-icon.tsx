// Restored from ref/webview/assets/remote-host-globe-icon-CG8BOH-9.js
// remote-host-globe-icon-CG8BOH-9 chunk restored from the Codex webview bundle.
import React from "react";
import { useAppScopeValue } from "../boundaries/app-scope";
import { GlobeIcon } from "../icons/globe-icon";
import { createPersistedSignal } from "../runtime/persisted-signal";
type HueRange = {
  end: number;
  start: number;
};
type RemoteHostGlobeIconProps = {
  className?: string;
  hostId: string;
  hostIdsForColorAssignment: string[];
};
const remoteHostGlobeIconR = createPersistedSignal<
  Record<string, string> | undefined
>("remote-host-globe-color-by-host-id", undefined);
const forbiddenRemoteHostHueRanges: HueRange[] = [
  {
    start: 330,
    end: 45,
  },
  {
    start: 95,
    end: 165,
  },
];
function getAllowedHueRanges(forbiddenHueRanges: HueRange[]): HueRange[] {
  const normalizedForbiddenRanges = forbiddenHueRanges
    .flatMap((range) => {
      const start = normalizeHue(range.start);
      const end = normalizeHue(range.end);
      return start <= end
        ? [
            {
              start,
              end,
            },
          ]
        : [
            {
              start,
              end: 360,
            },
            {
              start: 0,
              end,
            },
          ];
    })
    .sort((left, right) => left.start - right.start);
  if (normalizedForbiddenRanges.length === 0) {
    return [
      {
        start: 0,
        end: 360,
      },
    ];
  }
  const mergedForbiddenRanges: HueRange[] = [];
  normalizedForbiddenRanges.forEach((range) => {
    const previousRange =
      mergedForbiddenRanges[mergedForbiddenRanges.length - 1];
    if (!previousRange || range.start > previousRange.end) {
      mergedForbiddenRanges.push({
        ...range,
      });
      return;
    }
    previousRange.end = Math.max(previousRange.end, range.end);
  });
  const allowedRanges: HueRange[] = [];
  let cursor = 0;
  mergedForbiddenRanges.forEach((range) => {
    if (range.start > cursor) {
      allowedRanges.push({
        start: cursor,
        end: range.start,
      });
    }
    cursor = range.end;
  });
  if (cursor < 360) {
    allowedRanges.push({
      start: cursor,
      end: 360,
    });
  }
  return allowedRanges;
}
function normalizeHue(hue: number): number {
  return ((hue % 360) + 360) % 360;
}
function assignHostHues(
  hostIds: string[],
  {
    forbiddenHueRanges = [],
  }: {
    forbiddenHueRanges?: HueRange[];
  } = {},
): Record<string, number> {
  const sortedHostIds = [...new Set(hostIds)].sort((left, right) =>
    left.localeCompare(right),
  );
  const hueByHostId: Record<string, number> = {};
  const allowedRanges = getAllowedHueRanges(forbiddenHueRanges);
  const allowedHueCount = allowedRanges.reduce(
    (total, range) => total + (range.end - range.start),
    0,
  );
  if (allowedHueCount === 0) return hueByHostId;
  sortedHostIds.forEach((hostId, index) => {
    hueByHostId[hostId] = pickHueFromAllowedRanges(
      ((index + 0.5) * allowedHueCount) / sortedHostIds.length,
      allowedRanges,
    );
  });
  return hueByHostId;
}
function pickHueFromAllowedRanges(offset: number, ranges: HueRange[]): number {
  let remainingOffset = offset;
  for (const range of ranges) {
    const rangeSize = range.end - range.start;
    if (remainingOffset <= rangeSize) return range.start + remainingOffset;
    remainingOffset -= rangeSize;
  }
  return ranges[ranges.length - 1]?.end ?? 0;
}
function oklabHueToHex({ chroma, hue }: { chroma: number; hue: number }) {
  const hueRadians = (hue * Math.PI) / 180;
  const labA = chroma * Math.cos(hueRadians);
  const labB = chroma * Math.sin(hueRadians);
  const linearR = 0.74 + 0.3963377774 * labA + 0.2158037573 * labB;
  const linearG = 0.74 - 0.1055613458 * labA - 0.0638541728 * labB;
  const linearB = 0.74 - 0.0894841775 * labA - 1.291485548 * labB;
  return `#${[4.0767416621 * linearR ** 3 - 3.3077115913 * linearG ** 3 + 0.2309699292 * linearB ** 3, -1.2684380046 * linearR ** 3 + 2.6097574011 * linearG ** 3 - 0.3413193965 * linearB ** 3, -0.0041960863 * linearR ** 3 - 0.7034186147 * linearG ** 3 + 1.707614701 * linearB ** 3].map(linearColorChannelToHex).join("")}`;
}
function chromaForHostIndex({
  hostCount,
  hostIndex,
}: {
  hostCount: number;
  hostIndex: number;
}): number {
  return hostCount <= 1 ? 0.135 : 0.09 + (0.09 / (hostCount - 1)) * hostIndex;
}
function remoteHostGlobeIconN(
  hostIds: string[],
  savedColorByHostId?: Record<string, string>,
): Record<string, string> {
  const hueByHostId = assignHostHues(hostIds, {
    forbiddenHueRanges: forbiddenRemoteHostHueRanges,
  });
  const sortedHostIds = Object.keys(hueByHostId).sort((left, right) =>
    left.localeCompare(right),
  );
  return Object.fromEntries(
    sortedHostIds.map((hostId, index) => [
      hostId,
      savedColorByHostId?.[hostId] ??
        oklabHueToHex({
          chroma: chromaForHostIndex({
            hostCount: sortedHostIds.length,
            hostIndex: index,
          }),
          hue: hueByHostId[hostId],
        }),
    ]),
  );
}
function linearColorChannelToHex(value: number): string {
  const srgb =
    value <= 0.0031308
      ? value * 12.92
      : 1.055 * value ** 0.4166666666666667 - 0.055;
  return Math.round(Math.min(1, Math.max(0, srgb)) * 255)
    .toString(16)
    .padStart(2, "0");
}
function remoteHostGlobeIconT({
  className,
  hostId,
  hostIdsForColorAssignment,
}: RemoteHostGlobeIconProps): React.ReactElement {
  const savedColorByHostId = useAppScopeValue(remoteHostGlobeIconR);
  const hostIds = hostIdsForColorAssignment.includes(hostId)
    ? hostIdsForColorAssignment
    : [hostId, ...hostIdsForColorAssignment];
  const colorByHostId = remoteHostGlobeIconN(hostIds, savedColorByHostId);
  return (
    <GlobeIcon
      className={className}
      style={{
        color: colorByHostId[hostId],
      }}
    />
  );
}
const RemoteHostGlobeIcon = remoteHostGlobeIconT;

export {
  RemoteHostGlobeIcon,
  remoteHostGlobeIconN,
  remoteHostGlobeIconR,
  remoteHostGlobeIconT,
};
