import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BA as n,
  I2 as r,
  L2 as i,
  S0 as a,
  Us as o,
  WA as s,
  Ws as c,
  _0 as l,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function u(e) {
  let t = (0, f.c)(4),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = { hostId: n, locationKey: r, previewFiles: i }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    d(a),
    null
  );
}
function d(e) {
  let t = (0, f.c)(6),
    { hostId: r, locationKey: i, previewFiles: o } = e,
    s = a(n),
    l = (0, p.useRef)(null),
    u,
    d;
  (t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s
    ? ((u = () => {
        if (!(o == null || o.length === 0 || l.current === i)) {
          l.current = i;
          for (let e of o) {
            let t = e.fsPath || e.path;
            t == null ||
              t.length === 0 ||
              c(s, t, { hostId: r, title: e.label });
          }
        }
      }),
      (d = [r, i, o, s]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5])),
    (0, p.useEffect)(u, d));
}
var f, p;
e(() => {
  ((f = r()), l(), (p = t(i(), 1)), o(), s());
})();
export { u as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview-DJ8gSlC-.js.map
