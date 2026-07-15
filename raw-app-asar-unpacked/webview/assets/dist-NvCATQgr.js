const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./register-CZ-paYlL-D1PEJc8N.js",
      "./register-CZ-paYlL-_cFDg6qC.js",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-BSdCI8xr.css",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js",
      "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js",
      "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-DJDX7Pvr.css",
      "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js",
      "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js",
      "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-Bj9zvK4d.css",
      "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js",
      "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~lpb6mnim-BqYcBFmq.js",
      "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~lpb6mnim-BbfEVAy3.css",
      "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~kzfwp7ln-BctphohA.js",
      "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~nm3myve5-B4Ur2gOD.js",
      "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-C_bcV-sW.css",
      "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~b8am3atz-CACjZP_E.js",
      "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js",
      "./app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~pr~hvg1xey5-Civ_pNCm.js",
      "./app-initial~app-main~settings-page~appearance-settings~general-settings-CQ9vQcAr.js",
      "./app-initial~app-main~pull-request-route~onboarding-page~projects-index-page~hotkey-window-t~m0tlgaoz-yN8hPDfE.js",
      "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~cp3jsiva-DdQ_7QaC.js",
      "./app-initial~app-main~new-thread-panel-page~onboarding-page~appgen-library-page~hotkey-windo~k98yhiib-BpDLU_eD.js",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-vPlG4NkK.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  HZ as n,
  I2 as r,
  L2 as i,
  UZ as a,
  k2 as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function s(e) {
  let t = (0, u.c)(21),
    {
      widget: n,
      initialState: r,
      theme: i,
      dir: a,
      mapboxAccessToken: o,
      streaming: s,
      className: f,
      customCss: m,
      onAction: h,
      onError: g,
      onLoad: _,
    } = e,
    v = (0, d.useRef)(null),
    y;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = []), (t[0] = y))
    : (y = t[0]),
    (0, d.useEffect)(c, y));
  let b, x;
  (t[1] === _
    ? ((b = t[2]), (x = t[3]))
    : ((b = () => {
        if (!v.current) return;
        let e = new AbortController();
        return (
          v.current.addEventListener(
            `dil.load`,
            (e) => {
              let { detail: t } = e;
              _?.(t.imperativeApi);
            },
            { signal: e.signal },
          ),
          () => {
            e.abort();
          }
        );
      }),
      (x = [_]),
      (t[1] = _),
      (t[2] = b),
      (t[3] = x)),
    (0, d.useEffect)(b, x));
  let S, C;
  (t[4] === h
    ? ((S = t[5]), (C = t[6]))
    : ((S = () => {
        if (!v.current || !h) return;
        let e = new AbortController();
        return (
          v.current.addEventListener(
            `dil.action`,
            (e) => {
              let { detail: t } = e,
                { action: n, resolve: r, reject: i } = t;
              h(n).then(r, i);
            },
            { signal: e.signal },
          ),
          () => {
            e.abort();
          }
        );
      }),
      (C = [h]),
      (t[4] = h),
      (t[5] = S),
      (t[6] = C)),
    (0, d.useEffect)(S, C));
  let w, T;
  (t[7] === g
    ? ((w = t[8]), (T = t[9]))
    : ((w = () => {
        if (!v.current || !g) return;
        let e = new AbortController();
        return (
          v.current.addEventListener(
            `dil.error`,
            (e) => {
              let { error: t } = e;
              g(t);
            },
            { signal: e.signal },
          ),
          () => {
            e.abort();
          }
        );
      }),
      (T = [g]),
      (t[7] = g),
      (t[8] = w),
      (t[9] = T)),
    (0, d.useEffect)(w, T));
  let E, D;
  (t[10] !== m ||
  t[11] !== a ||
  t[12] !== r ||
  t[13] !== o ||
  t[14] !== s ||
  t[15] !== i ||
  t[16] !== n
    ? ((E = () => {
        if (!v.current) return;
        let e = v.current;
        p().then(() => {
          e.setState({
            widget: n,
            initialState: r,
            theme: i,
            streaming: s,
            mapboxAccessToken: o,
            dir: a,
            customCss: m,
          });
        });
      }),
      (D = [n, r, i, s, o, a, m]),
      (t[10] = m),
      (t[11] = a),
      (t[12] = r),
      (t[13] = o),
      (t[14] = s),
      (t[15] = i),
      (t[16] = n),
      (t[17] = E),
      (t[18] = D))
    : ((E = t[17]), (D = t[18])),
    (0, d.useEffect)(E, D));
  let O;
  return (
    t[19] === f
      ? (O = t[20])
      : ((O = (0, l.jsx)(`dil-renderer`, { ref: v, className: f })),
        (t[19] = f),
        (t[20] = O)),
    O
  );
}
function c() {
  p();
}
var l, u, d, f, p;
e(() => {
  ((l = o()),
    (u = r()),
    (d = t(i(), 1)),
    a(),
    (f = null),
    (p = () => (
      (f ??= n(
        () => import(`./register-CZ-paYlL-D1PEJc8N.js`).then((e) => e.r),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24,
        ]),
        import.meta.url,
      ).then((e) => {
        e.registerTag();
      })),
      f
    )));
})();
export { s as DILRenderer };
//# sourceMappingURL=dist-NvCATQgr.js.map
