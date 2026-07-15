// Restored from ref/webview/assets/src-l0hb-mz-p.js
type CommentAttachmentInput = Record<string, unknown>;
type LocalProjectMap = Record<string, unknown>;

export function serializeCommentAttachmentInputItem(
  attachment: CommentAttachmentInput,
): CommentAttachmentInput {
  return { ...attachment };
}

export function isPdfCommentAttachment(attachment: unknown): boolean {
  return (
    (attachment as { type?: string; kind?: string } | null)?.type === "pdf" ||
    (attachment as { kind?: string } | null)?.kind === "pdf"
  );
}

export function isArtifactAnnotationCommentAttachment(
  attachment: unknown,
): boolean {
  const kind =
    (attachment as { type?: string; kind?: string } | null)?.type ??
    (attachment as { kind?: string } | null)?.kind;
  return kind === "artifact_annotation" || kind === "localArtifactAnnotation";
}

export function formatUnknownError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export const rendererSentryDsn =
  "https://6719eaa18601933a26ac21499dcaba2f@o33249.ingest.us.sentry.io/4510999349821440";

export function isRendererTracingBuildFlavor(): boolean {
  return false;
}

export function formatRendererSentryRelease(version: string): string {
  return `codex@${version}`;
}

export function normalizeRendererSentryVersion(
  version: unknown,
): string | null {
  return typeof version === "string" && version.trim() ? version.trim() : null;
}

export function toFeatureConfigKeyPath(
  value: string | readonly string[],
): string {
  return Array.isArray(value) ? value.join(".") : value;
}

export function normalizeBrowserTabId(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export function normalizePersonality(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export function moveThreadIdBefore(
  ids: readonly string[],
  threadId: string,
  beforeId?: string | null,
): string[] {
  const remaining = ids.filter((id) => id !== threadId);
  const index = beforeId == null ? -1 : remaining.indexOf(beforeId);
  if (index === -1) return [...remaining, threadId];
  return [...remaining.slice(0, index), threadId, ...remaining.slice(index)];
}

export function srcMi(id: string): { id: string } {
  return { id };
}

export function srcWt({
  locale,
  subdomain,
}: {
  locale: string;
  subdomain: string;
}): string {
  const url = new URL("https://web-sandbox.oaiusercontent.com");
  url.hostname = `${subdomain}.${url.hostname}`;
  url.searchParams.set("app", "skybridge");
  url.searchParams.set("locale", locale);
  url.searchParams.set("deviceType", "desktop");
  url.searchParams.set("unsafeSkipTargetOriginCheck", "true");
  return url.toString();
}

export function _srcZt(value: unknown): LocalProjectMap {
  return value != null && typeof value === "object" && !Array.isArray(value)
    ? { ...(value as LocalProjectMap) }
    : {};
}

export function srcEt(value: unknown): Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value)
    ? { ...(value as Record<string, unknown>) }
    : {};
}

export function srcRt({
  localProjects,
  project,
  projectId,
}: {
  localProjects: LocalProjectMap;
  project: unknown | null;
  projectId: string;
}): LocalProjectMap {
  const next = { ...localProjects };
  if (project == null) delete next[projectId];
  else next[projectId] = project;
  return next;
}

export function srcBi(automation: unknown): boolean {
  return (automation as { kind?: string } | null)?.kind === "heartbeat";
}

export const isHeartbeatAutomation = srcBi;

export function srcVi(environment: unknown): unknown {
  return environment ?? null;
}

export function srcRi({
  automation,
}: {
  automation?: { model?: unknown; reasoningEffort?: unknown };
}): { model: unknown; reasoningEffort: unknown } {
  return {
    model: automation?.model ?? null,
    reasoningEffort: automation?.reasoningEffort ?? null,
  };
}

export const browserAutofillAndPasswordsCapabilityName =
  "browser-autofill-and-passwords";
export const browserDownloadsCapabilityName = "browser-downloads";
export const browserExtensionsCapabilityName = "browser-extensions";
export const browserPermissionsCapabilityName = "browser-permissions";
export const browserWebViewEnhancementsCapabilityName =
  "browser-webview-enhancements";
export const browserTabTypes = ["atlas", "chrome"];
export const bundledPluginMarketplaceName = "openai-bundled";
export function isBundledPluginMarketplaceName(name: unknown): boolean {
  return name === bundledPluginMarketplaceName;
}

export const _srcL = ["subAgentThreadSpawn"];
export const _srcJ = { CODEX: "codex" };
export const srcSn = "OpenAI-Beta";
export const _srcEr = "chrome://settings/content";
export const _srcIr = "/settings/browser-use/site-settings";
export const _srcNr = "chrome://settings/cookies";
export const _srcTr = "persist:codex-site-settings";
export const _srcZn = "chrome://settings/handlers";
export const srcBn = "/settings/browser-use/downloads";
export const srcGn = "persist:codex-extension-settings";
export const srcHn = "persist:codex-browser-app";
export const srcRn = "chrome://settings/addresses";
export const srcIn = [srcRn, "chrome://settings/contactInfo"];
export const srcJn = "chrome://password-manager/passwords";
export const srcKn = "chrome://password-manager/";
export const srcLn = "/settings/browser-use/contact-info";
export const srcN = "/settings/browser-use/site-settings/*";
export const srcQn = "/settings/browser-use/passwords";
export const srcUn = "/settings/browser-use/extensions";
export const srcVn = "chrome://downloads/";
export const srcWn = "chrome://extensions/";
export const srcYn = "persist:codex-password-manager-settings";
export const contactInfoSettingsPartition =
  "persist:codex-contact-info-settings";
export const srcQ = "chatgpt-workspace";
export const _srcOt = "openai-curated-remote";
export const _srcAt = "openai-curated";
export const _srcCt = "manage";
export const srcSt = "/skills/plugins/:pluginId";
