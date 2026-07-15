// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~hc7acb17-o4mgW3b3.js
// Project appearance lookup backed by the global-state project-appearances map.
import {
  GLOBAL_STATE_KEYS,
  initGlobalStateQueryRuntime,
  useGlobalStateQuery,
} from "../runtime/global-state-runtime";

export type ProjectAppearanceColor =
  | "black"
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow";

export type ProjectAppearanceMarker =
  | { emoji: string; kind: "emoji" }
  | { icon: string; kind: "icon" };

export type ProjectAppearance = {
  color: ProjectAppearanceColor;
  marker: ProjectAppearanceMarker;
};

const PROJECT_APPEARANCE_KEY =
  (GLOBAL_STATE_KEYS as Record<string, string>).PROJECT_APPEARANCES ??
  "project-appearances";

const PROJECT_APPEARANCE_COLORS = new Set<ProjectAppearanceColor>([
  "black",
  "blue",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
]);

const PROJECT_APPEARANCE_ICONS = new Set(
  "folder.currency-dollar.book.graduation-cap.edit.writing.function.terminal.music.popcorn.customize.palette.stethoscope.health.lotus.suitcase.bar-chart.kettlebell.dumbbell.logs.scale.desk-globe.plane.globe.wrench.paw.flask.brain.heart.plant".split(
    ".",
  ),
);

const LEGACY_PROJECT_ICON_ALIASES: Record<string, string> = {
  "balancing-scale": "scale",
  building: "folder",
  bug: "folder",
  cat: "paw",
  code: "function",
  "code-brackets": "function",
  cube: "folder",
  gift: "folder",
  "globe-spin": "desk-globe",
  graduation: "graduation-cap",
  lightbulb: "brain",
  lightning: "folder",
  lite: "lotus",
  network: "brain",
  notebook: "logs",
  openai: "folder",
  pencil: "edit",
  pens: "customize",
  pointer: "folder",
  presentation: "bar-chart",
  puzzle: "customize",
  search: "globe",
  star: "folder",
  target: "folder",
  waveform: "music",
};

export function initProjectAppearanceChunk(): void {
  initGlobalStateQueryRuntime();
}

export function getProjectAppearance(
  projectId: string,
): ProjectAppearance | null {
  initProjectAppearanceChunk();
  const { data } = useGlobalStateQuery<Record<string, unknown>>(
    PROJECT_APPEARANCE_KEY,
  );
  return normalizeProjectAppearances(data)[projectId] ?? null;
}

function normalizeProjectAppearances(
  value: unknown,
): Record<string, ProjectAppearance> {
  if (!isRecord(value)) return {};

  const appearances: Record<string, ProjectAppearance> = {};
  for (const [projectId, appearanceValue] of Object.entries(value)) {
    const appearance = normalizeProjectAppearance(appearanceValue);
    if (appearance != null) appearances[projectId] = appearance;
  }
  return appearances;
}

function normalizeProjectAppearance(value: unknown): ProjectAppearance | null {
  if (!isRecord(value)) return null;

  const color = value.color;
  if (
    typeof color !== "string" ||
    !PROJECT_APPEARANCE_COLORS.has(color as ProjectAppearanceColor)
  ) {
    return null;
  }

  const marker = normalizeProjectAppearanceMarker(value.marker);
  return marker == null
    ? null
    : { color: color as ProjectAppearanceColor, marker };
}

function normalizeProjectAppearanceMarker(
  value: unknown,
): ProjectAppearanceMarker | null {
  if (!isRecord(value) || typeof value.kind !== "string") return null;

  if (value.kind === "emoji") {
    return typeof value.emoji === "string" && value.emoji.length > 0
      ? { emoji: value.emoji, kind: "emoji" }
      : null;
  }

  if (value.kind !== "icon" || typeof value.icon !== "string") return null;
  const icon = LEGACY_PROJECT_ICON_ALIASES[value.icon] ?? value.icon;
  return PROJECT_APPEARANCE_ICONS.has(icon) ? { icon, kind: "icon" } : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
