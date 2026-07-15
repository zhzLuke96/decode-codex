import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $1 as t,
  $g as n,
  $q as r,
  AG as i,
  AY as a,
  A_ as o,
  BG as s,
  BX as c,
  Bg as ee,
  FG as te,
  HG as l,
  IA as u,
  IG as d,
  J1 as f,
  K1 as p,
  KG as m,
  Kq as h,
  LG as g,
  Lg as ne,
  MG as _,
  NA as re,
  NG as ie,
  P$ as ae,
  PG as v,
  RA as y,
  RG as b,
  SV as oe,
  Sm as se,
  UG as ce,
  Ug as le,
  VG as x,
  WG as S,
  Xg as ue,
  _C as de,
  a0 as fe,
  aJ as pe,
  aX as C,
  bm as me,
  dT as he,
  fm as ge,
  gC as _e,
  h0 as ve,
  hJ as w,
  hm as ye,
  jG as T,
  k_ as be,
  lm as xe,
  mJ as E,
  m_ as D,
  mm as Se,
  nJ as Ce,
  o0 as O,
  qG as we,
  qq as k,
  r0 as A,
  t0 as Te,
  u0 as j,
  uT as Ee,
  um as De,
  vC as Oe,
  zA as ke,
  zG as Ae,
  zg as je,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Fc as Me,
  Ic as Ne,
  Lo as Pe,
  Nc as Fe,
  Pa as Ie,
  Ra as Le,
  Ss as Re,
  Uo as ze,
  Vo as Be,
  Wo as Ve,
  _s as He,
  bs as Ue,
  ms as We,
  ws as Ge,
  ys as Ke,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  $t as qe,
  Qt as M,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  a as N,
  i as Je,
  o as P,
  r as Ye,
  t as Xe,
} from "./app-initial~app-main~register-app-actions-CRo2cOka.js";
import {
  E as Ze,
  O as Qe,
  S as $e,
  T as F,
  b as et,
  k as tt,
} from "./app-initial~app-main~settings-page~appearance-settings~general-settings-CQ9vQcAr.js";
var I,
  L,
  nt = e(() => {
    (a(),
      p(),
      h(),
      P(),
      (I = O({ type: A(`app.appearance.get`) })),
      (L = N({
        schema: I,
        run: async () => {
          let [e, t, n, r, i] = await Promise.all([
            k(C.theme),
            k(C.lightCodeThemeId),
            k(C.darkCodeThemeId),
            k(C.lightChromeTheme),
            k(C.darkChromeTheme),
          ]);
          return {
            schemaVersion: 1,
            mode: e,
            themes: {
              light: { codeThemeId: t, chromeTheme: r },
              dark: { codeThemeId: n, chromeTheme: i },
            },
          };
        },
      })));
  }),
  R,
  z,
  rt = e(() => {
    (p(),
      F(),
      P(),
      (R = O({ type: A(`app.appearance.get_available_themes`) })),
      (z = N({
        schema: R,
        run: () => ({
          schemaVersion: 1,
          themes: $e().map((e) => ({
            id: e.id,
            label: e.label,
            supportsDark: e.registrationByVariant.dark != null,
            supportsLight: e.registrationByVariant.light != null,
          })),
        }),
      })));
  });
async function B(e, t, n, i) {
  let a = Ce(`get-settings`),
    o = e.queryClient?.getQueryData(a),
    s = i?.optimistic ?? !0;
  s &&
    e.queryClient?.setQueryData(a, {
      ...o,
      values: { ...o?.values, [t.key]: n },
    });
  try {
    (await r(t, n),
      s ||
        e.queryClient?.setQueryData(a, {
          ...o,
          values: { ...o?.values, [t.key]: n },
        }));
  } catch (t) {
    throw (o != null && e.queryClient?.setQueryData(a, o), t);
  } finally {
    (await e.queryClient?.invalidateQueries({ queryKey: a }),
      w.dispatchMessage(`query-cache-invalidate`, { queryKey: [...a] }));
  }
}
var V = e(() => {
    (E(), h(), pe());
  }),
  H,
  U,
  it = e(() => {
    (a(),
      p(),
      P(),
      V(),
      (H = O({
        type: A(`app.appearance.set_mode`),
        mode: f([`light`, `dark`, `system`]),
      })),
      (U = N({
        schema: H,
        run: async ({ mode: e }, t) => (
          await B(t, C.theme, e, { optimistic: !1 }),
          { schemaVersion: 1, mode: e }
        ),
      })));
  });
async function W(e, t, n) {
  let { chromeThemeSetting: r, codeThemeSetting: i } = ot(t),
    a = Qe(await k(r), t);
  if (n.kind === `custom`) {
    let t = at(a, n.patch);
    return (await B(e, r, t), t);
  }
  let o = await et(n.themeId, t),
    s = {
      ...a,
      ...o,
      fonts: { ...a.fonts, ...o.fonts },
      semanticColors: { ...a.semanticColors, ...o.semanticColors },
    };
  return (await Promise.all([B(e, i, n.themeId), B(e, r, s)]), s);
}
function at(e, t) {
  return {
    ...e,
    ...t,
    fonts: t.fonts == null ? e.fonts : { ...e.fonts, ...t.fonts },
    semanticColors:
      t.semanticColors == null
        ? e.semanticColors
        : { ...e.semanticColors, ...t.semanticColors },
  };
}
function ot(e) {
  return e === `light`
    ? {
        chromeThemeSetting: C.lightChromeTheme,
        codeThemeSetting: C.lightCodeThemeId,
      }
    : {
        chromeThemeSetting: C.darkChromeTheme,
        codeThemeSetting: C.darkCodeThemeId,
      };
}
var G,
  K,
  q,
  J,
  st,
  ct,
  lt = e(() => {
    (a(),
      p(),
      h(),
      tt(),
      F(),
      P(),
      V(),
      (G = j().regex(/^#[0-9a-fA-F]{6}$/)),
      (K = O({
        code: j().nullable().optional(),
        ui: j().nullable().optional(),
      })),
      (q = O({ diffAdded: G, diffRemoved: G, skill: G })),
      (J = O({
        accent: G.optional(),
        contrast: fe().int().min(0).max(100).optional(),
        fonts: K.optional(),
        ink: G.optional(),
        opaqueWindows: t().optional(),
        semanticColors: q.partial().optional(),
        surface: G.optional(),
      })),
      (st = O({
        type: A(`app.appearance.set_theme`),
        theme: Te(`kind`, [
          O({
            kind: A(`preset`),
            themeId: j().refine(Ze, `Invalid code theme id`),
          }),
          O({ kind: A(`custom`), patch: J }),
        ]),
        variant: f([`light`, `dark`, `both`]).default(`both`),
      })),
      (ct = N({
        schema: st,
        run: async ({ theme: e, variant: t }, n) => {
          let r = [],
            i = { schemaVersion: 1, theme: e, updated: r };
          if (t === `light` || t === `both`) {
            let t = await W(n, `light`, e);
            (r.push(`light`), (i.appearanceLightChromeTheme = t));
          }
          if (t === `dark` || t === `both`) {
            let t = await W(n, `dark`, e);
            (r.push(`dark`), (i.appearanceDarkChromeTheme = t));
          }
          return ((i.updated = r), i);
        },
      })));
  });
function Y(e) {
  if (e.scope == null) throw Error(`App action requires a route scope`);
  return e.scope;
}
var X = e(() => {});
function ut(e) {
  switch (e.routeKind) {
    case `local-thread`:
    case `remote-thread`:
    case `chatgpt-thread`:
    case `client-local-thread`:
      return !0;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return !1;
  }
}
function dt(e) {
  switch (e.value.routeKind) {
    case `local-thread`:
      return {
        id: e.value.conversationId,
        kind: `local`,
        hostId: e.get(Ee, e.value.conversationId) ?? `local`,
        title: e.get(De, e.value.conversationId),
      };
    case `remote-thread`:
      return { id: e.value.taskId, kind: `remote`, title: null };
    case `chatgpt-thread`:
      return { id: e.value.conversationId, kind: `chatgpt`, title: null };
    case `client-local-thread`:
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function ft(e) {
  switch (e.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
      };
    case `local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
    case `client-local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.clientThreadId,
      };
    case `remote-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        taskId: e.taskId,
      };
    case `chatgpt-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
  }
}
function pt(e, t, n, r, i) {
  let a = t == null ? [] : We(e, t),
    o = t == null ? null : Ke(t, e.get(D), { bottom: n, right: r }),
    s = o == null ? null : (a.find((e) => e.browserTabId === o) ?? null),
    c = t == null || o == null ? null : M.getSnapshot(t, o);
  return {
    canGoBack: c?.canGoBack ?? !1,
    canGoForward: c?.canGoForward ?? !1,
    fullscreen: s?.target === `right` && i,
    isLoading: c?.isLoading ?? !1,
    open: s != null,
    tabs: mt(
      t,
      a.map((e) => e.browserTabId),
      o,
    ),
    title: c?.title ?? null,
    url: c?.url ?? null,
  };
}
function mt(e, t, n) {
  if (e == null) return [];
  let r = M.getBrowserUseBrowserTabIds(e),
    i = [...t, ...r],
    a = new Set(r),
    o = new Set();
  return i.flatMap((t) => {
    if (o.has(t)) return [];
    o.add(t);
    let r = M.getSnapshot(e, t);
    return [
      {
        active: t === n,
        browserTabId: t,
        isBrowserUseActive: M.isBrowserUseActive(e, t),
        isBrowserUseManaged: a.has(t),
        isLoading: r?.isLoading ?? !1,
        title: r?.title ?? null,
        url: r?.url ?? null,
      },
    ];
  });
}
function Z(e) {
  let t = document.querySelector(e);
  return t == null
    ? { present: !1 }
    : {
        present: !0,
        scrollTop: Math.round(t.scrollTop),
        scrollHeight: Math.round(t.scrollHeight),
        clientHeight: Math.round(t.clientHeight),
      };
}
function ht() {
  return Array.from(document.querySelectorAll(we)).map((e, t) => gt(e, t));
}
function gt(e, t) {
  let n = bt(e);
  return e.matches(m.sidebarSection)
    ? {
        type: `section`,
        index: t,
        heading: e.dataset.appActionSidebarSectionHeading ?? ``,
        collapsed: e.dataset.appActionSidebarSectionCollapsed === `true`,
        visibility: n,
      }
    : e.matches(m.sidebarProjectRow)
      ? {
          type: `project`,
          index: t,
          projectId: e.dataset.appActionSidebarProjectId ?? ``,
          label: e.dataset.appActionSidebarProjectLabel ?? ``,
          collapsed: e.dataset.appActionSidebarProjectCollapsed === `true`,
          visibility: n,
        }
      : {
          type: `thread`,
          index: t,
          active: e.dataset.appActionSidebarThreadActive === `true`,
          hostId: e.dataset.appActionSidebarThreadHostId || null,
          id: e.dataset.appActionSidebarThreadId ?? ``,
          kind: e.dataset.appActionSidebarThreadKind ?? ``,
          pinned: e.dataset.appActionSidebarThreadPinned === `true`,
          title: e.dataset.appActionSidebarThreadTitle ?? ``,
          visibility: n,
        };
}
function _t(e) {
  let t = yt(),
    n = new Set(e.get(Ge).map((e) => e.path));
  return [
    ...e.get(Ge).map((e) => ({
      path: e.path,
      additions: e.summary?.additions ?? e.diff?.additions ?? 0,
      deletions: e.summary?.deletions ?? e.diff?.deletions ?? 0,
      ...vt(t.get(e.path)),
    })),
    ...Array.from(t.entries()).flatMap(([e, t]) =>
      n.has(e) ? [] : [{ path: e, additions: null, deletions: null, ...vt(t) }],
    ),
  ].map((e, t) => ({ index: t, ...e }));
}
function vt(e) {
  let t = e?.querySelector(m.reviewFileToggle);
  return {
    expanded:
      t == null ? null : t.dataset.appActionReviewFileExpanded === `true`,
    visibility: e == null ? `not_mounted` : bt(e),
  };
}
function yt() {
  let e = Array.from(document.querySelectorAll(m.reviewFile));
  return new Map(
    e.flatMap((e) => {
      let t = e.dataset.reviewPath;
      return t == null ? [] : [[t, e]];
    }),
  );
}
function bt(e) {
  let t = e.getBoundingClientRect();
  return t.bottom <= 0 ||
    t.right <= 0 ||
    t.top >= window.innerHeight ||
    t.left >= window.innerWidth
    ? `offscreen`
    : `visible`;
}
var xt,
  St,
  Ct = e(() => {
    (p(),
      he(),
      qe(),
      be(),
      Se(),
      n(),
      xe(),
      Fe(),
      Re(),
      oe(),
      Ue(),
      u(),
      Pe(),
      se(),
      ke(),
      X(),
      P(),
      g(),
      (xt = O({ type: A(`app.get_summary`) })),
      (St = N({
        schema: xt,
        run: (e, t) => {
          let n = Y(t),
            r = n.get(le),
            a = n.get(je),
            s = n.get(ee),
            c = a && s ? n.get(ye.activeTab$) : null,
            te = n.get(ye.tabs$),
            l = n.get(ne) ? n.get(ge.activeTab$) : null,
            u = c?.tabId ?? null,
            d = null;
          u === y.DIFF ? (d = `right`) : l?.tabId === y.DIFF && (d = `bottom`);
          let f = d != null,
            p = n.get(o),
            h = He(n.get(D), { bottom: n.get(Be), right: n.get(ze) });
          return {
            schemaVersion: 1,
            window: {
              windowId: i,
              route: ft(n.value),
              thread: dt(n),
              panels: {
                browser: pt(n, ut(n.value) ? re(n) : null, l, c, p),
                sidebar: { open: r },
                review: {
                  open: f,
                  placement: d,
                  fullscreen: d === `right` && p,
                  fileTreeOpen: f && n.get(ue),
                  view: n.get(Me),
                },
                terminal: { open: h != null, placement: h },
                rightPanel: {
                  fullscreen: p,
                  kind: u,
                  open: a,
                  tabs: te.map((e) => ({
                    focused: e.tabId === c?.tabId,
                    type: me(e),
                  })),
                },
              },
              ...(r
                ? { sidebar: { viewport: Z(m.sidebarScroll), rows: ht() } }
                : {}),
              ...(f
                ? { review: { viewport: Z(m.reviewScroll), files: _t(n) } }
                : {}),
              ...(ut(n.value) ? { timeline: Z(m.timelineScroll) } : {}),
            },
          };
        },
      })));
  });
function wt(e) {
  return N({ schema: Et, run: ({ action: t }) => Tt(e(), t) });
}
function Tt(e, t, n = Dt) {
  return {
    schemaVersion: 1,
    prompt: n,
    actions: e
      .filter((e) => (t == null ? !0 : e.type === t))
      .map((e) => ({
        type: e.type,
        jsonSchema: JSON.stringify(ve(e.schema), null, 2),
      })),
  };
}
var Et,
  Dt,
  Ot = e(() => {
    (p(),
      P(),
      (Et = O({ type: A(`app.help`), action: j().optional() })),
      (Dt = `You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.

Use this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. It can show workspace files, browser tabs, terminals, and reviews inside Codex with windows.tabs.open. Use the relevant browser, shell, or file tool to inspect or interact with their contents.

Use {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.

Use {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.

The current implementation targets the active primary app window. Use "current" for windowId.

Common workflow examples:
- Read the current appearance mode, preset ids, and custom chrome colors with app.appearance.get.
- Switch app appearance mode with app.appearance.set_mode and {"mode":"light"}, {"mode":"dark"}, or {"mode":"system"}.
- Pick a code theme preset with app.appearance.set_theme and {"variant":"light","theme":{"kind":"preset","themeId":"monokai"}}.
- Adjust custom chrome theme colors with app.appearance.set_theme and {"variant":"dark","theme":{"kind":"custom","patch":{"accent":"#ff8800"}}}.
- Get available theme ids with app.appearance.get_available_themes.
- Open a review file: call app.get_summary while the review panel is open, choose a file path from window.review.files, then call windows.review.scroll_to_file or windows.review.file_set_expanded.
- Scroll Codex UI surfaces: use the relevant windows.sidebar.scroll, windows.review.scroll, or windows.timeline.scroll action with a pixels, pages, or edge scroll object. Use the dedicated browser-use tool for browser navigation and page scrolling.

- Go to the first pinned thread: call app.get_summary, find the first row in window.sidebar.rows with type "thread" and pinned true, then call windows.show_thread with that row's id as threadId.
- Go home: call windows.show_home.
- Toggle panels: call windows.sidebar.toggle, windows.terminal.toggle, or windows.review.toggle.
- Show a workspace file, browser tab, terminal, or review in a Codex panel with windows.tabs.open.

Prefer the smallest action that directly satisfies the user request.`));
  }),
  kt,
  At,
  jt = e(() => {
    (p(),
      E(),
      P(),
      g(),
      (kt = O({ type: A(`windows.nav.back`), windowId: T })),
      (At = N({
        schema: kt,
        run: () => {
          w.dispatchHostMessage({ type: `navigate-back` });
        },
      })));
  }),
  Mt,
  Nt,
  Pt = e(() => {
    (p(),
      E(),
      P(),
      g(),
      (Mt = O({ type: A(`windows.nav.forward`), windowId: T })),
      (Nt = N({
        schema: Mt,
        run: () => {
          w.dispatchHostMessage({ type: `navigate-forward` });
        },
      })));
  }),
  Ft,
  It,
  Lt = e(() => {
    (p(),
      P(),
      g(),
      (Ft = O({ type: A(`windows.review.collapse_all`), windowId: T })),
      (It = N({
        schema: Ft,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: { open: !1, scope: `review` },
            }),
          );
        },
      })));
  }),
  Rt,
  zt,
  Bt = e(() => {
    (p(),
      P(),
      g(),
      (Rt = O({ type: A(`windows.review.expand_all`), windowId: T })),
      (zt = N({
        schema: Rt,
        run: () => {
          window.dispatchEvent(
            new CustomEvent(`wham-toggle-all-diffs`, {
              detail: { open: !0, scope: `review` },
            }),
          );
        },
      })));
  }),
  Vt,
  Ht,
  Ut = e(() => {
    (p(),
      P(),
      g(),
      (Vt = O({
        type: A(`windows.review.file_set_expanded`),
        windowId: T,
        path: j(),
        expanded: t(),
      })),
      (Ht = N({
        schema: Vt,
        run: ({ path: e, expanded: t }) => {
          let n = ie(e).querySelector(m.reviewFileToggle);
          if (n == null) throw Error(`Missing review file toggle: ${e}`);
          n.dataset.appActionReviewFileExpanded !== String(t) && n.click();
        },
      })));
  }),
  Wt,
  Gt,
  Kt = e(() => {
    (p(),
      P(),
      g(),
      (Wt = O({ type: A(`windows.review.scroll`), windowId: T, scroll: S })),
      (Gt = N({
        schema: Wt,
        run: ({ scroll: e }) => {
          b(_(m.reviewScroll), e);
        },
      })));
  });
function qt(e) {
  switch (e) {
    case `top`:
      return `start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `end`;
  }
}
var Jt,
  Yt,
  Xt = e(() => {
    (p(),
      Ie(),
      X(),
      P(),
      g(),
      (Jt = O({
        type: A(`windows.review.scroll_to_file`),
        windowId: T,
        path: j(),
        align: f([`top`, `center`, `bottom`]).optional(),
      })),
      (Yt = N({
        schema: Jt,
        run: ({ path: e, align: t }, n) => {
          let r = ie(e);
          (Le(Y(n), r.dataset.reviewPath ?? e),
            r.scrollIntoView({ block: qt(t ?? `top`), behavior: `auto` }));
        },
      })));
  }),
  Zt,
  Qt,
  $t = e(() => {
    (p(),
      be(),
      X(),
      P(),
      g(),
      (Zt = O({
        type: A(`windows.review.set_fullscreen`),
        windowId: T,
        fullscreen: t(),
      })),
      (Qt = N({
        schema: Zt,
        run: ({ fullscreen: e }, t) => {
          Y(t).set(o, e);
        },
      })));
  }),
  en,
  tn,
  nn = e(() => {
    (p(),
      Fe(),
      X(),
      P(),
      g(),
      (en = O({
        type: A(`windows.review.set_view`),
        windowId: T,
        view: f([`turn`, `branch`, `unstaged`, `staged`]),
      })),
      (tn = N({
        schema: en,
        run: ({ view: e }, t) => {
          Ne(Y(t), e === `turn` ? `last-turn` : e);
        },
      })));
  }),
  rn,
  an,
  on = e(() => {
    (p(),
      E(),
      P(),
      g(),
      (rn = O({ type: A(`windows.review.toggle`), windowId: T })),
      (an = N({
        schema: rn,
        run: () => {
          w.dispatchHostMessage({ type: `toggle-diff-panel` });
        },
      })));
  }),
  sn,
  cn,
  ln = e(() => {
    (p(),
      E(),
      P(),
      g(),
      (sn = O({ type: A(`windows.show_home`), windowId: T })),
      (cn = N({
        schema: sn,
        run: () => {
          w.dispatchHostMessage({ type: `new-chat` });
        },
      })));
  });
function un(e) {
  let t = Oe(e);
  return t == null ? c(ae(e)) : _e(t.key);
}
var dn,
  fn,
  pn = e(() => {
    (a(),
      p(),
      E(),
      de(),
      P(),
      g(),
      (dn = O({ type: A(`windows.show_thread`), windowId: T, threadId: j() })),
      (fn = N({
        schema: dn,
        run: ({ threadId: e }) => {
          w.dispatchHostMessage({ type: `navigate-to-route`, path: un(e) });
        },
      })));
  }),
  mn,
  hn,
  gn = e(() => {
    (p(),
      P(),
      g(),
      (mn = O({
        type: A(`windows.sidebar.project_set_collapsed`),
        windowId: T,
        project: x,
        collapsed: t(),
      })),
      (hn = N({
        schema: mn,
        run: ({ project: e, collapsed: t }) => {
          let n = v(e);
          n.dataset.appActionSidebarProjectCollapsed !== String(t) && n.click();
        },
      })));
  }),
  _n,
  vn,
  yn = e(() => {
    (p(),
      P(),
      g(),
      (_n = O({
        type: A(`windows.sidebar.project_set_show_all`),
        windowId: T,
        project: x,
        showAll: t(),
      })),
      (vn = N({
        schema: _n,
        run: ({ project: e, showAll: t }) => {
          let n = v(e);
          if (n.dataset.appActionSidebarProjectCollapsed === `true` && !t)
            return;
          let r = n.dataset.appActionSidebarProjectId;
          if (r == null) throw Error(`Missing sidebar project id`);
          let i = _(te(r));
          if (i.dataset.appActionSidebarProjectShowAll === String(t)) return;
          let a = i.querySelector(m.sidebarProjectShowAllToggle);
          if (a == null)
            throw Error(`Missing sidebar project show more toggle: ${r}`);
          a.click();
        },
      })));
  }),
  bn,
  xn,
  Sn = e(() => {
    (p(),
      P(),
      g(),
      (bn = O({ type: A(`windows.sidebar.scroll`), windowId: T, scroll: S })),
      (xn = N({
        schema: bn,
        run: ({ scroll: e }) => {
          b(_(m.sidebarScroll), e);
        },
      })));
  }),
  Cn,
  wn,
  Tn = e(() => {
    (p(),
      P(),
      g(),
      (Cn = O({
        type: A(`windows.sidebar.section_set_collapsed`),
        windowId: T,
        section: l,
        collapsed: t(),
      })),
      (wn = N({
        schema: Cn,
        run: ({ section: e, collapsed: t }) => {
          let n = d(e);
          if (n.dataset.appActionSidebarSectionCollapsed === String(t)) return;
          let r = n.querySelector(m.sidebarSectionToggle);
          if (r == null)
            throw Error(`Sidebar section does not have a collapse toggle`);
          r.click();
        },
      })));
  }),
  En,
  Dn,
  On = e(() => {
    (p(),
      P(),
      g(),
      (En = O({
        type: A(`windows.sidebar.select_project`),
        windowId: T,
        project: x,
      })),
      (Dn = N({
        schema: En,
        run: ({ project: e }) => {
          let t = v(e).querySelector(m.sidebarProjectSelect);
          if (t == null) throw Error(`Missing sidebar project select action`);
          t.click();
        },
      })));
  }),
  Q,
  kn,
  An = e(() => {
    (p(),
      E(),
      P(),
      g(),
      (Q = O({ type: A(`windows.sidebar.toggle`), windowId: T })),
      (kn = N({
        schema: Q,
        run: () => {
          w.dispatchHostMessage({ type: `toggle-sidebar` });
        },
      })));
  }),
  jn,
  Mn,
  Nn = e(() => {
    (p(),
      Pe(),
      X(),
      P(),
      g(),
      (jn = O({ type: A(`windows.terminal.toggle`), windowId: T })),
      (Mn = N({
        schema: jn,
        run: (e, t) => {
          Ve(Y(t));
        },
      })));
  }),
  Pn,
  Fn,
  In = e(() => {
    (p(),
      P(),
      g(),
      (Pn = O({ type: A(`windows.timeline.scroll`), windowId: T, scroll: S })),
      (Fn = N({
        schema: Pn,
        run: ({ scroll: e }) => {
          Ae(_(m.timelineScroll), e);
        },
      })));
  }),
  Ln,
  Rn,
  zn = e(() => {
    (p(),
      P(),
      g(),
      (Ln = O({
        type: A(`windows.timeline.scroll_to_turn`),
        windowId: T,
        direction: ce,
      })),
      (Rn = N({
        schema: Ln,
        run: ({ direction: e }) => {
          s(_(m.timelineScroll), e);
        },
      })));
  });
function Bn() {
  return $;
}
var Vn, $, Hn;
e(() => {
  (P(),
    nt(),
    rt(),
    it(),
    lt(),
    Ct(),
    Ot(),
    jt(),
    Pt(),
    Lt(),
    Bt(),
    Ut(),
    Kt(),
    Xt(),
    $t(),
    nn(),
    on(),
    ln(),
    pn(),
    gn(),
    yn(),
    Sn(),
    Tn(),
    On(),
    An(),
    Xe(),
    Nn(),
    In(),
    zn(),
    (Vn = [
      St,
      L,
      z,
      U,
      ct,
      At,
      Nt,
      It,
      zt,
      Ht,
      Gt,
      Yt,
      Qt,
      tn,
      an,
      cn,
      fn,
      hn,
      vn,
      xn,
      wn,
      Dn,
      kn,
      Mn,
      Ye,
      Fn,
      Rn,
    ]),
    ($ = [wt(Bn), ...Vn]),
    (Hn = Je($)));
})();
export { Hn as appActionRegistry };
//# sourceMappingURL=register-app-actions-CFATNwSD.js.map
