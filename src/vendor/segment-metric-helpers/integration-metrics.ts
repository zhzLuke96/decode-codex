// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// Integration settings and stats helpers for Segment compatibility aliases.
import type {
  IntegrationMetricOptions,
  IntegrationSettings,
  SegmentIntegrationConfig,
  SegmentIntegrationOptions,
  SegmentMetricContext,
} from "./types";

function isIntegrationOverride(
  value: unknown,
): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

export function mergeIntegrationSettings(
  config: SegmentIntegrationConfig,
  options: SegmentIntegrationOptions,
): IntegrationSettings {
  const optionOverrides = Object.entries(
    options.integrations ?? {},
  ).reduce<IntegrationSettings>((overrides, [integrationName, value]) => {
    overrides[integrationName] = isIntegrationOverride(value) ? value : {};
    return overrides;
  }, {});

  return Object.entries(config.integrations).reduce<IntegrationSettings>(
    (mergedSettings, [integrationName, integrationSettings]) => {
      mergedSettings[integrationName] = {
        ...integrationSettings,
        ...optionOverrides[integrationName],
      };
      return mergedSettings;
    },
    {},
  );
}

export function recordIntegrationMetric(
  ctx: SegmentMetricContext,
  options: IntegrationMetricOptions,
): void {
  ctx.stats.increment(
    `analytics_js.integration.invoke${options.didError ? ".error" : ""}`,
    1,
    [
      `method:${options.methodName}`,
      `integration_name:${options.integrationName}`,
      `type:${options.type}`,
    ],
  );
}
