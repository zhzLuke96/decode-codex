import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  BI as t,
  FI as n,
  II as r,
  LI as i,
  PB as a,
  PI as o,
  RI as s,
  VI as c,
  bI as l,
  vI as u,
  zI as d,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function f(e, t, { annotationModeEnabled: n, startSource: i }) {
  l(e, r, { ...g(t), annotationModeEnabled: n, startSource: v(i) });
}
function p(e, t) {
  l(e, c, { ...g(t) });
}
function m(e, t) {
  l(e, o, { ...g(t) });
}
function h(
  e,
  t,
  {
    annotationModeEnabled: n,
    annotationTargetKind: r,
    submitMode: i,
    submitSource: a,
  },
) {
  l(e, d, {
    ...g(t),
    annotationModeEnabled: n,
    annotationTargetKind: r,
    submitMode: y(i),
    submitSource: b(a),
  });
}
function g({ artifactTabId: e, artifactType: t, importKind: n, threadId: r }) {
  return {
    artifactKind: _(t),
    artifactImportKind: n,
    artifactTabId: e ?? void 0,
    threadId: r ?? void 0,
  };
}
function _(e) {
  switch (e) {
    case `document`:
      return t.CODEX_ARTIFACT_KIND_DOCUMENT;
    case `notebook`:
      return t.CODEX_ARTIFACT_KIND_NOTEBOOK;
    case `pdf`:
      return t.CODEX_ARTIFACT_KIND_PDF;
    case `slides`:
      return t.CODEX_ARTIFACT_KIND_PRESENTATION;
    case `spreadsheet`:
      return t.CODEX_ARTIFACT_KIND_SPREADSHEET;
  }
}
function v(e) {
  switch (e) {
    case `annotation_mode_pointer`:
      return n.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER;
    case `ask_codex_button`:
      return n.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON;
    case `ask_codex_shortcut`:
      return n.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT;
  }
}
function y(e) {
  switch (e) {
    case `direct`:
      return i.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT;
    case `saved`:
      return i.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED;
  }
}
function b(e) {
  switch (e) {
    case `button`:
      return s.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON;
    case `dictation`:
      return s.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION;
    case `keyboard`:
      return s.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD;
  }
}
var x = e(() => {
  (a(), u());
});
export { p as a, h as i, m as n, f as r, x as t };
//# sourceMappingURL=artifact-analytics-_VZ59Pug.js.map
