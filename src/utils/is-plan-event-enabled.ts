// Restored from ref/webview/assets/is-plan-event-enabled-Bmz4BLlB.js
// Resolve whether a plan event is enabled from defaults plus an optional override.
type PlanEventDefaults = {
  __default?: {
    enabled?: boolean;
  };
};
type PlanEventOverride = {
  enabled?: boolean;
};
export function isPlanEventEnabled(
  defaults: PlanEventDefaults | null | undefined,
  override: PlanEventOverride | null | undefined,
): boolean {
  return typeof override?.enabled === "boolean"
    ? override.enabled
    : (defaults?.__default?.enabled ?? true);
}
export function initIsPlanEventEnabledChunk(): void {}
