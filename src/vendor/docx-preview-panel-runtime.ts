// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// App-runtime compatibility shim for the Codex DOCX preview panel.
// Semantic panel modules live in ../features/documents/docx-preview-panel.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview"]),
) => i.map((i) => d[i]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  D as n,
  E as r,
  Go as i,
  Ko as o,
  O as s,
  Vo as c,
  _ as l,
  _c as u,
  ar as d,
  gc as f,
  ir as p,
  lc as m,
  v as eeHostMessageBridge,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  aa as g,
  ac as _,
  bs as v,
  ic as y,
  oc as b,
  sa as useResizeObserverRef,
  ws as te,
} from "./worktree-new-thread-orchestrator-current-bundle";
import {
  $t as S,
  Np as ne,
  Xt as C,
  Yt as w,
  Zt as re,
  an as computeWheelZoomPercent,
  hh as oe,
  in as computePinchZoomPercent,
  jp as se,
  nn as le,
  on as measureTouchDistance,
  rn as normalizeZoomPercent,
  sn as de,
  tn as fe,
} from "./worktree-new-thread-query-current-bundle";
import {
  Hi as D,
  Iy as O,
  Ri as pe,
  Vi as me,
  ba as k,
  ya as ge,
} from "./remote-projects-app-shared-current-bundle";
import {
  appMainCurrentCompatSlotUpperILowerT as M,
  appMainCurrentCompatSlotUpperOLowerT as Ce,
  appMainCurrentCompatSlotUpperQLowerU as we,
  appMainCurrentCompatSlotLowerRLowerD as I,
} from "./app-main-current-runtime";
import { initComposeRefsChunk as R } from "../utils/compose-refs";
import { initArtifactAnalyticsChunk as z } from "../features/artifact-analytics";
import { initArtifactAnnotationCommentChunk as je } from "../ui/artifact-annotation-comment";
import { initArtifactPreviewStatusChunk as Ne } from "../utils/artifact-preview-status";
import {
  createDocxPreviewStyleText,
  DocxPreviewPanel as DocxPreviewPanelSurface,
} from "../features/documents/docx-preview-panel";
var At = e(() => {
  (f(), oe(), c(), s(), u(), O(), we(), I(), l(), n(), z(), Ce(), M());
});
function jt(e) {
  let {
      bytes: n,
      chromeMode: r,
      disableAnnotations: a,
      disableFileActions: s,
      hostId: c,
      onBeforeOpen: l,
      path: u,
      ref: d,
      tabId: f,
      title: p,
    } = e,
    m = r === void 0 ? `default` : r,
    h = a === void 0 ? !1 : a,
    ee = s === void 0 ? !1 : s,
    g = o(pe),
    _ = (0, Z.use)(Zt),
    v = ne(),
    x = me(g.value),
    T = x ?? ge({ entrypoint: `home` }),
    ke = i(y, T) ?? [],
    se = (e) => {
      b(g, T, e);
    };
  return (0, Q.jsx)(DocxPreviewPanelSurface, {
    bytes: n,
    chromeMode: m,
    commentSource: ke,
    conversationId: T,
    disableAnnotations: h,
    disableFileActions: ee,
    hostId: c,
    hostMessageBridge: eeHostMessageBridge,
    onBeforeOpen: l,
    onCommentsChange: se,
    pageNavigationZoomScale: v,
    path: u,
    productLoggerScope: o(r),
    ref: d,
    renderAsync: _,
    runtimeComponents: {
      ArtifactPreviewHeader: C,
      DownloadFileButton: w,
      OpenFileButton: re,
      ZoomControl: S,
    },
    styleText: qt,
    tabId: f,
    threadId: x,
    title: p,
    zoomTools: {
      computePinchZoomPercent,
      computeWheelZoomPercent,
      measureTouchDistance,
      normalizeZoomPercent,
      useResizeObserverRef,
      zoomOptions: le,
    },
  });
}
var Z, Q, qt, Zt;
e(() => {
  (c(),
    s(),
    (Z = t(u(), 1)),
    se(),
    _(),
    k(),
    g(),
    D(),
    te(),
    R(),
    je(),
    fe(),
    Ne(),
    de(),
    At(),
    (Q = m()),
    d(),
    (qt = createDocxPreviewStyleText(v)),
    (Zt = p(
      async () => {
        let { renderAsync: e } = await import(`./docx-preview`);
        return { renderAsync: e };
      },
      __vite__mapDeps([0]),
      import.meta.url,
    ).then(
      ({ renderAsync: e }) => e,
      () => null,
    )));
})();
export { jt as DocxPreviewPanel };
