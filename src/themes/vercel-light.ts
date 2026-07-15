// Restored from ref/webview/assets/vercel-light-0e9RLoNq.js
// Editor theme data restored from the Codex webview bundle.
export const bg = "#ffffff";
export const chromeTheme = {
  accent: "#006aff",
  contrast: 40,
  fonts: {
    code: '"Geist Mono", ui-monospace, "SFMono-Regular"',
    ui: "Geist, Inter",
  },
  ink: "#171717",
  opaqueWindows: true,
  semanticColors: {
    diffAdded: "#28A948",
    diffRemoved: "#EB001D",
    skill: "#A100F8",
  },
  surface: "#ffffff",
};
export const colors = {
  "activityBar.activeBorder": "#006aff",
  "activityBar.background": "#ffffff",
  "activityBarBadge.background": "#006aff",
  "button.background": "#006aff",
  "editor.background": "#ffffff",
  "editor.foreground": "#171717",
  "editorCursor.foreground": "#006aff",
  "editorGroupHeader.tabsBackground": "#ffffff",
  focusBorder: "#006aff",
  foreground: "#171717",
  "panel.background": "#ffffff",
  "sideBar.background": "#ffffff",
  "sideBar.foreground": "#666666",
  "sideBarTitle.foreground": "#171717",
  "textLink.foreground": "#006aff",
};
export const vercelLightFg = "#171717";
export const name = "Vercel Light";
export const settings = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#666666",
    },
  },
  {
    scope: [
      "string",
      "string.quoted",
      "constant.other.symbol",
      "entity.other.attribute-name",
    ],
    settings: {
      foreground: "#28A948",
    },
  },
  {
    scope: [
      "constant.numeric",
      "constant.language",
      "constant.language.boolean",
      "constant.character.escape",
      "regexp",
      "string.regexp",
    ],
    settings: {
      foreground: "#A100F8",
    },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "storage.modifier",
    ],
    settings: {
      foreground: "#006aff",
    },
  },
  {
    scope: [
      "entity.name.type",
      "entity.other.inherited-class",
      "support.class",
      "support.type",
    ],
    settings: {
      foreground: "#0059D1",
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "variable.function",
      "meta.function-call",
    ],
    settings: {
      foreground: "#A100F8",
    },
  },
  {
    scope: [
      "keyword.operator",
      "punctuation.accessor",
      "punctuation.definition.tag",
      "punctuation",
      "punctuation.bracket",
      "punctuation.separator",
    ],
    settings: {
      foreground: "#666666",
    },
  },
  {
    scope: [
      "variable",
      "meta.object-literal.key",
      "meta.object.member",
      "meta.property-name",
    ],
    settings: {
      foreground: "#171717",
    },
  },
];
export const type = "light";
const vercelLightTheme = {
  bg,
  chromeTheme,
  colors,
  fg: vercelLightFg,
  name,
  settings,
  type,
};
export default vercelLightTheme;
