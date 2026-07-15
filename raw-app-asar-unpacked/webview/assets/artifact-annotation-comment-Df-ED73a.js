import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  O$ as n,
  k$ as r,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function i({ line: e, path: t, payload: r, title: i }) {
  switch (r.target.type) {
    case `presentation-element-selection`:
    case `presentation-region`:
    case `workbook-floating-element`:
    case `workbook-range`:
      return n({
        annotationId: r.annotationId,
        artifactKind: r.artifactKind,
        body: r.body,
        label: r.label,
        line: e,
        metadata: { target: r.target },
        path: t,
        title: i,
      });
  }
}
function a(e, t) {
  return e.filter((e) => r(e) && e.localArtifactAnnotationContext?.path === t);
}
function o({ currentComments: e, path: t, previousComments: n }) {
  let r = new Set();
  for (let n of a(e, t)) {
    let e = n.localArtifactAnnotationContext?.annotationId;
    e != null && r.add(e);
  }
  let i = [];
  for (let e of a(n, t)) {
    let t = e.localArtifactAnnotationContext?.annotationId;
    t != null && !r.has(t) && i.push(t);
  }
  return i;
}
function s(e, t) {
  let n = e.filter(
    (e) => !r(e) || e.localArtifactAnnotationContext?.path !== t,
  );
  return n.length === e.length ? e : n;
}
function c(e) {
  return Math.max(0, ...e.map((e) => e.position.line)) + 1;
}
var l = e(() => {
  t();
});
export { l as a, o as i, a as n, s as o, c as r, i as t };
//# sourceMappingURL=artifact-annotation-comment-Df-ED73a.js.map
