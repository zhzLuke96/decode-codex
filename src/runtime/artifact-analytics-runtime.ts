// Restored from ref/webview/assets/artifact-analytics-DeyIRgFu.js

import { __productLoggerR as productLoggerSignal } from "../analytics/product-logger";

type ProductLogger = {
  logProductEvent(event: unknown, payload?: unknown): void;
};

type ProductLoggerScope = {
  get?(signal: unknown): ProductLogger | null | undefined;
  logProductEvent?(event: unknown, payload?: unknown): void;
};

export type ProductAnalyticsEventDescriptor = {
  $type: string;
};

function analyticsEvent($type: string): ProductAnalyticsEventDescriptor {
  return { $type };
}

export const artifactAnnotationStartedEvent = analyticsEvent(
  "protobuf_analytics_events.v1.CodexArtifactAnnotationStarted",
);
export const artifactAnnotationCanceledEvent = analyticsEvent(
  "protobuf_analytics_events.v1.CodexArtifactRefreshClicked",
);
export const artifactAnnotationSavedEvent = analyticsEvent(
  "protobuf_analytics_events.v1.CodexArtifactAnnotationModeEnabled",
);
export const artifactAnnotationSubmittedEvent = analyticsEvent(
  "protobuf_analytics_events.v1.CodexArtifactAnnotationSubmitted",
);

export const ArtifactKind = {
  CODEX_ARTIFACT_KIND_UNSPECIFIED: "CODEX_ARTIFACT_KIND_UNSPECIFIED",
  CODEX_ARTIFACT_KIND_DOCUMENT: "CODEX_ARTIFACT_KIND_DOCUMENT",
  CODEX_ARTIFACT_KIND_PRESENTATION: "CODEX_ARTIFACT_KIND_PRESENTATION",
  CODEX_ARTIFACT_KIND_SPREADSHEET: "CODEX_ARTIFACT_KIND_SPREADSHEET",
  CODEX_ARTIFACT_KIND_PDF: "CODEX_ARTIFACT_KIND_PDF",
  CODEX_ARTIFACT_KIND_NOTEBOOK: "CODEX_ARTIFACT_KIND_NOTEBOOK",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const ArtifactAnnotationStartSource = {
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT",
  CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER:
    "CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const ArtifactAnnotationSubmitMode = {
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const ArtifactAnnotationSubmitSource = {
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_UNSPECIFIED:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_UNSPECIFIED",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD",
  CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION:
    "CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export function initArtifactAnalyticsEventDescriptors(): void {
  // Artifact analytics descriptors and enums are initialized as module constants.
}

export function initProductLoggerRuntime(): void {
  // The restored product logger signal is initialized by analytics/product-logger.
}

export function logProductEvent(
  scope: ProductLoggerScope,
  productEvent: ProductAnalyticsEventDescriptor,
  payload: unknown = {},
): void {
  let scopedLogger = scope.get?.(productLoggerSignal);
  let logger = scopedLogger ?? scope;
  logger.logProductEvent?.(productEvent, payload);
}
