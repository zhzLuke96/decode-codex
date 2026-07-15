import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as t,
  I2 as n,
  S0 as r,
  _0 as i,
  _Y as a,
  cY as o,
  k2 as s,
  mY as c,
  sY as l,
  yY as u,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  a as d,
  d as f,
  o as p,
  p as m,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as h,
  p as g,
  v as _,
  y as v,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as y,
  rt as b,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as x,
  t as S,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import {
  n as C,
  r as w,
  t as T,
} from "./app-initial~app-main~debug-settings-75n3GpQi.js";
function E() {
  let e = (0, O.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsx)(f, {
          title: (0, k.jsx)(d, { slug: `debug` }),
          children: (0, k.jsx)(D, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function D() {
  let e = (0, O.c)(19),
    n = r(l),
    i = u(),
    o = t(T),
    s,
    c,
    d,
    f,
    p;
  if (e[0] !== i || e[1] !== n || e[2] !== o) {
    let t = [
      {
        settingKey: `disableScrollFadeMask`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.label`,
          defaultMessage: `Disable scroll fade mask`,
          description: `Label for GPU tearing debug setting that disables scroll fade masks`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.description`,
          defaultMessage: `Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger`,
          description: `Description for GPU tearing debug setting that disables scroll fade masks`,
        }),
      },
      {
        settingKey: `disableScrollFadeMaskAnimation`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label`,
          defaultMessage: `Disable scroll fade animation`,
          description: `Label for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description`,
          defaultMessage: `Keeps static fade masks but removes the scroll-linked animation timeline`,
          description: `Description for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
      },
      {
        settingKey: `disableBackdropBlur`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.label`,
          defaultMessage: `Disable backdrop blur`,
          description: `Label for GPU tearing debug setting that disables backdrop blur`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.description`,
          defaultMessage: `Forces backdrop filters off across the web UI to reduce layered blur composition`,
          description: `Description for GPU tearing debug setting that disables backdrop blur`,
        }),
      },
      {
        settingKey: `disableCssMotion`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.label`,
          defaultMessage: `Disable CSS motion`,
          description: `Label for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.description`,
          defaultMessage: `Turns off CSS animations and transitions to isolate compositor animation work`,
          description: `Description for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
      },
      {
        settingKey: `disableSquircles`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.label`,
          defaultMessage: `Disable squircles`,
          description: `Label for GPU tearing debug setting that disables squircle corners`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.description`,
          defaultMessage: `Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost`,
          description: `Description for GPU tearing debug setting that disables squircle corners`,
        }),
      },
      {
        settingKey: `forceOpaqueRendererBackground`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label`,
          defaultMessage: `Force opaque web background`,
          description: `Label for GPU tearing debug setting that forces an opaque web background`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description`,
          defaultMessage: `Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition`,
          description: `Description for GPU tearing debug setting that forces an opaque web background`,
        }),
      },
    ];
    ((d = S),
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, k.jsx)(S.Header, {
            title: (0, k.jsx)(a, {
              id: `settings.general.gpuTearingDebug`,
              defaultMessage: `GPU Tearing Debug`,
              description: `Heading for GPU tearing debug settings group`,
            }),
            subtitle: (0, k.jsx)(a, {
              id: `settings.general.gpuTearingDebug.subtitle`,
              defaultMessage: `Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.`,
              description: `Subtitle for GPU tearing debug settings group`,
            }),
          })),
          (e[8] = p))
        : (p = e[8]),
      (c = S.Content),
      (s = h),
      (f = t.map((e) =>
        (0, k.jsx)(
          _,
          {
            label: e.label,
            description: e.description,
            control: (0, k.jsx)(b, {
              checked: o[e.settingKey],
              onChange: (t) => {
                w(n, e.settingKey, t);
              },
              ariaLabel: i.formatMessage(
                {
                  id: `settings.general.gpuTearingDebug.toggle`,
                  defaultMessage: `Toggle {settingName}`,
                  description: `Aria label for toggling a GPU tearing debug setting`,
                },
                { settingName: e.label },
              ),
            }),
          },
          e.settingKey,
        ),
      )),
      (e[0] = i),
      (e[1] = n),
      (e[2] = o),
      (e[3] = s),
      (e[4] = c),
      (e[5] = d),
      (e[6] = f),
      (e[7] = p));
  } else ((s = e[3]), (c = e[4]), (d = e[5]), (f = e[6]), (p = e[7]));
  let m;
  e[9] !== s || e[10] !== f
    ? ((m = (0, k.jsx)(s, { children: f })),
      (e[9] = s),
      (e[10] = f),
      (e[11] = m))
    : (m = e[11]);
  let g;
  e[12] !== c || e[13] !== m
    ? ((g = (0, k.jsx)(c, { children: m })),
      (e[12] = c),
      (e[13] = m),
      (e[14] = g))
    : (g = e[14]);
  let v;
  return (
    e[15] !== d || e[16] !== p || e[17] !== g
      ? ((v = (0, k.jsxs)(d, { children: [p, g] })),
        (e[15] = d),
        (e[16] = p),
        (e[17] = g),
        (e[18] = v))
      : (v = e[18]),
    v
  );
}
var O, k;
e(() => {
  ((O = n()), i(), c(), y(), o(), C(), m(), x(), v(), p(), g(), (k = s()));
})();
export { E as DebugSettings };
//# sourceMappingURL=debug-settings-bJrz8OUV.js.map
