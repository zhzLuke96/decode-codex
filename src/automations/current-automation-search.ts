// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
type AutomationStatusRecord = {
  status: string;
};

export function matchesAutomationSearchQuery(
  query: string,
  values: readonly unknown[],
): boolean {
  const normalizedQuery = normalizeAutomationSearchText(query);
  return (
    normalizedQuery.length === 0 ||
    normalizeAutomationSearchText(values.join(" ")).includes(normalizedQuery)
  );
}

export function normalizeAutomationSearchText(value: unknown): string {
  return String(value ?? "")
    .toLocaleLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function isPausedAutomation<TAutomation extends AutomationStatusRecord>(
  automation: TAutomation,
): boolean {
  return automation.status === "PAUSED";
}

export function isCurrentAutomation<TAutomation extends AutomationStatusRecord>(
  automation: TAutomation,
): boolean {
  return automation.status !== "PAUSED";
}
