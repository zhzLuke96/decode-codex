import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $g as n,
  BA as r,
  C0 as i,
  FA as a,
  I2 as o,
  IA as s,
  L2 as c,
  Lg as l,
  Lp as u,
  Mp as d,
  Mq as f,
  NA as p,
  Nq as m,
  S0 as h,
  SK as g,
  WA as _,
  _0 as v,
  aG as y,
  bK as b,
  ca as x,
  fm as S,
  gJ as C,
  hJ as w,
  hm as ee,
  k2 as T,
  kY as E,
  la as D,
  mJ as O,
  mY as k,
  mm as A,
  nd as j,
  rG as M,
  td as N,
  x0 as P,
  yY as F,
  zg as te,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Co as I,
  Gn as L,
  Hn as R,
  Ja as z,
  Jn as B,
  Kn as ne,
  Qa as re,
  Un as ie,
  Wn as ae,
  Xa as oe,
  _o as se,
  ao as V,
  bo as H,
  co as ce,
  do as le,
  eo as ue,
  fo as U,
  go as de,
  ho as fe,
  io as pe,
  lo as W,
  mo as me,
  no as G,
  oo as he,
  po as ge,
  qn as _e,
  ro as ve,
  so as ye,
  uo as be,
  vo as xe,
  wo as K,
  xo as Se,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  F as Ce,
  N as we,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Al as Te,
  jl as Ee,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  In as De,
  Ln as Oe,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  M as ke,
  N as Ae,
  ct as je,
  gt as Me,
  mt as Ne,
  pt as Pe,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
var q,
  Fe = e(() => {
    q = `3796967399`;
  });
function J(e, t) {
  e != null &&
    w.dispatchMessage(`browser-sidebar-command`, {
      browserTabId: e.browserTabId,
      command: t,
      conversationId: e.conversationId,
    });
}
var Y = e(() => {
  O();
});
function Ie() {
  let e = (0, Le.c)(9),
    t = h(r),
    n = F(),
    a = i(G),
    o = i(V),
    s;
  e[0] === n
    ? (s = e[1])
    : ((s = n.formatMessage({
        id: `codex.threadFindBar.close`,
        defaultMessage: `Close find`,
        description: `Button label to close the find bar`,
      })),
      (e[0] = n),
      (e[1] = s));
  let c;
  e[2] !== a || e[3] !== o || e[4] !== t
    ? ((c = () => {
        (o === `browser` && (de(t, a), J(a, { type: `close-find` }), K(t, z)),
          oe(t));
      }),
      (e[2] = a),
      (e[3] = o),
      (e[4] = t),
      (e[5] = c))
    : (c = e[5]);
  let l;
  return (
    e[6] !== s || e[7] !== c
      ? ((l = (0, Re.jsx)(ae, { label: s, onClose: c })),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Le,
  Re,
  ze = e(() => {
    ((Le = o()), v(), k(), _(), Y(), B(), U(), (Re = T()));
  });
function Be() {
  let e = (0, Ve.c)(30),
    t = h(r),
    n = F(),
    a = i(G),
    o = i(pe),
    s = i(V),
    c = i(W),
    l = t.value.routeKind === `chatgpt-thread`,
    u;
  e[0] !== a || e[1] !== s || e[2] !== c || e[3] !== t
    ? ((u = (e) => {
        if (s === `browser` && e !== `browser`) {
          (J(a, { type: `close-find` }), H(t, e), K(t, z));
          return;
        }
        (H(t, e),
          e === `browser` &&
            c.length > 0 &&
            J(a, { type: `set-find-query`, query: c }));
      }),
      (e[0] = a),
      (e[1] = s),
      (e[2] = c),
      (e[3] = t),
      (e[4] = u))
    : (u = e[4]);
  let d = u;
  if (o == null && a == null) return null;
  let p = s === `conversation` ? `ghostActive` : `ghost`,
    m;
  e[5] === d
    ? (m = e[6])
    : ((m = () => {
        d(`conversation`);
      }),
      (e[5] = d),
      (e[6] = m));
  let g = s === `conversation`,
    _;
  e[7] !== n || e[8] !== l
    ? ((_ = l
        ? n.formatMessage({
            id: `chatgpt.threadFindBar.chatFilter`,
            defaultMessage: `Search chat`,
            description: `Button label to scope find results to the ChatGPT chat`,
          })
        : n.formatMessage({
            id: `codex.threadFindBar.chatFilter`,
            defaultMessage: `Search task`,
            description: `Button label to scope find results to the Codex task`,
          })),
      (e[7] = n),
      (e[8] = l),
      (e[9] = _))
    : (_ = e[9]);
  let v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(x, { className: `size-4` })), (e[10] = v))
    : (v = e[10]);
  let y;
  e[11] !== p || e[12] !== m || e[13] !== g || e[14] !== _
    ? ((y = (0, X.jsx)(f, {
        className: `-m-0.5 size-6`,
        size: `icon`,
        color: p,
        uniform: !0,
        onClick: m,
        "aria-pressed": g,
        "aria-label": _,
        children: v,
      })),
      (e[11] = p),
      (e[12] = m),
      (e[13] = g),
      (e[14] = _),
      (e[15] = y))
    : (y = e[15]);
  let b;
  e[16] !== o || e[17] !== s || e[18] !== n || e[19] !== d
    ? ((b =
        o == null
          ? null
          : (0, X.jsx)(f, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: s === `diff` ? `ghostActive` : `ghost`,
              uniform: !0,
              onClick: () => {
                d(`diff`);
              },
              "aria-pressed": s === `diff`,
              "aria-label": n.formatMessage({
                id: `codex.threadFindBar.diffFilter`,
                defaultMessage: `Search diffs`,
                description: `Button label to scope find results to diffs`,
              }),
              children: (0, X.jsx)(Te, { className: `size-4` }),
            })),
      (e[16] = o),
      (e[17] = s),
      (e[18] = n),
      (e[19] = d),
      (e[20] = b))
    : (b = e[20]);
  let S;
  e[21] !== a || e[22] !== s || e[23] !== n || e[24] !== d
    ? ((S =
        a == null
          ? null
          : (0, X.jsx)(f, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: s === `browser` ? `ghostActive` : `ghost`,
              uniform: !0,
              onClick: () => {
                d(`browser`);
              },
              "aria-pressed": s === `browser`,
              "aria-label": n.formatMessage({
                id: `codex.threadFindBar.browserFilter`,
                defaultMessage: `Search browser page`,
                description: `Button label to scope find results to browser page`,
              }),
              children: (0, X.jsx)(N, { className: `size-4` }),
            })),
      (e[21] = a),
      (e[22] = s),
      (e[23] = n),
      (e[24] = d),
      (e[25] = S))
    : (S = e[25]);
  let C;
  return (
    e[26] !== y || e[27] !== b || e[28] !== S
      ? ((C = (0, X.jsxs)(`div`, {
          className: `col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2`,
          children: [y, b, S],
        })),
        (e[26] = y),
        (e[27] = b),
        (e[28] = S),
        (e[29] = C))
      : (C = e[29]),
    C
  );
}
var Ve,
  X,
  He = e(() => {
    ((Ve = o()), v(), k(), m(), D(), Ee(), j(), _(), Y(), U(), (X = T()));
  });
function Ue(e) {
  let t = (0, We.c)(8),
    {
      commandId: n,
      enabled: r,
      onKeyDown: i,
      onKeyUp: a,
      capture: o,
      ignoreWithin: s,
      keyboardEventTarget: c,
    } = e,
    l = r === void 0 ? !0 : r,
    u = P(je, n),
    d = u ?? ``,
    f = l && u != null,
    p;
  (t[0] !== o ||
  t[1] !== s ||
  t[2] !== c ||
  t[3] !== i ||
  t[4] !== a ||
  t[5] !== d ||
  t[6] !== f
    ? ((p = {
        accelerator: d,
        enabled: f,
        onKeyDown: i,
        onKeyUp: a,
        capture: o,
        ignoreWithin: s,
        keyboardEventTarget: c,
      }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = i),
      (t[4] = a),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]),
    Ce(p));
}
var We,
  Ge = e(() => {
    ((We = o()), v(), we(), Pe());
  });
function Ke() {
  let e = (0, Qe.c)(43),
    t = h(r),
    n = y(q),
    a = i(ve),
    o = i(G),
    s = i(pe),
    c = i(S.tabs$),
    u = i(S.activeTab$),
    d = i(ee.tabs$),
    f = i(ee.activeTab$),
    m = i(l),
    _ = i(te),
    v,
    b;
  e[0] !== u ||
  e[1] !== f ||
  e[2] !== c ||
  e[3] !== m ||
  e[4] !== _ ||
  e[5] !== d ||
  e[6] !== t
    ? ((v = p(t)),
      (b = Je({
        activeTabs: { bottom: u, right: f },
        browserConversationId: v,
        openPanels: { bottom: m, right: _ },
        tabs: { bottom: c, right: d },
      })),
      (e[0] = u),
      (e[1] = f),
      (e[2] = c),
      (e[3] = m),
      (e[4] = _),
      (e[5] = d),
      (e[6] = t),
      (e[7] = v),
      (e[8] = b))
    : ((v = e[7]), (b = e[8]));
  let x = b,
    w;
  e[9] !== x || e[10] !== t
    ? ((w = () => {
        xe(t, x);
      }),
      (e[9] = x),
      (e[10] = t),
      (e[11] = w))
    : (w = e[11]);
  let T = x?.browserTabId,
    E = x?.conversationId,
    D;
  (e[12] !== x || e[13] !== t || e[14] !== T || e[15] !== E
    ? ((D = [x, T, E, t]),
      (e[12] = x),
      (e[13] = t),
      (e[14] = T),
      (e[15] = E),
      (e[16] = D))
    : (D = e[16]),
    (0, $e.useEffect)(w, D));
  let O;
  e[17] !== u ||
  e[18] !== f ||
  e[19] !== v ||
  e[20] !== o ||
  e[21] !== a ||
  e[22] !== s ||
  e[23] !== m ||
  e[24] !== _ ||
  e[25] !== t
    ? ((O = function () {
        if (Ze()) return;
        let e = qe({
            activeTabs: { bottom: u, right: f },
            browserConversationId: v,
            openPanels: { bottom: m, right: _ },
          }),
          n = document.activeElement?.id === `content-search-input`,
          r = n ? void 0 : Xe(),
          i = a;
        if (
          (n
            ? (i = le({
                currentDomain: t.get(V),
                hasDiffSource: s != null,
                hasBrowserTarget: o != null,
              }))
            : e == null
              ? i === `diff` && s == null && (i = `conversation`)
              : (i = `browser`),
          e != null && xe(t, e),
          H(t, i),
          r != null && (i === `browser` ? se(t, r) : Se(t, r)),
          i === `browser`)
        ) {
          let n = r ?? t.get(W);
          n.length > 0 && J(e ?? o, { type: `set-find-query`, query: n });
        }
        (me(t), window.requestAnimationFrame(Ye));
      }),
      (e[17] = u),
      (e[18] = f),
      (e[19] = v),
      (e[20] = o),
      (e[21] = a),
      (e[22] = s),
      (e[23] = m),
      (e[24] = _),
      (e[25] = t),
      (e[26] = O))
    : (O = e[26]);
  let k = O,
    A;
  (e[27] === k
    ? (A = e[28])
    : ((A = () => {
        k();
      }),
      (e[27] = k),
      (e[28] = A)),
    C(`find-in-thread`, A));
  let j;
  e[29] !== n || e[30] !== t
    ? ((j = (e) => {
        if (!t.get(ce)) {
          e === `next` &&
            n &&
            t.get(g).info(
              t.get(Oe).formatMessage(
                t.value.routeKind === `chatgpt-thread`
                  ? {
                      id: `chatgpt.contentSearch.searchChatsShortcutToast`,
                      defaultMessage: `Search chats with {shortcut}`,
                      description: `Toast shown in a ChatGPT chat when Find Next is used without an open find bar`,
                    }
                  : {
                      id: `contentSearch.searchChatsShortcutToast`,
                      defaultMessage: `Search tasks with {shortcut}`,
                      description: `Toast shown in a Codex task when Find Next is used without an open find bar`,
                    },
                { shortcut: Ne() ? `⌘K` : `Control+K` },
              ),
              { id: `find-next-search-chats-shortcut` },
            );
          return;
        }
        if (t.get(V) === `browser`) {
          J(t.get(G), { type: e === `next` ? `find-next` : `find-previous` });
          return;
        }
        e === `next` ? ge(t) : fe(t);
      }),
      (e[29] = n),
      (e[30] = t),
      (e[31] = j))
    : (j = e[31]);
  let M = j,
    N;
  (e[32] === M
    ? (N = e[33])
    : ((N = () => {
        M(`next`);
      }),
      (e[32] = M),
      (e[33] = N)),
    C(`find-next-in-thread`, N));
  let P;
  (e[34] === M
    ? (P = e[35])
    : ((P = () => {
        M(`previous`);
      }),
      (e[34] = M),
      (e[35] = P)),
    C(`find-previous-in-thread`, P));
  let F;
  (e[36] === t
    ? (F = e[37])
    : ((F = (e) => {
        let n = t.get(G);
        e.conversationId !== n?.conversationId ||
          e.browserTabId !== n.browserTabId ||
          K(t, e.state);
      }),
      (e[36] = t),
      (e[37] = F)),
    C(`browser-sidebar-find-state`, F));
  let I = !n,
    L;
  e[38] === k
    ? (L = e[39])
    : ((L = (e) => {
        (e.preventDefault(), k());
      }),
      (e[38] = k),
      (e[39] = L));
  let R;
  return (
    e[40] !== I || e[41] !== L
      ? ((R = {
          commandId: `findInThread`,
          enabled: I,
          ignoreWithin: Z,
          onKeyDown: L,
        }),
        (e[40] = I),
        (e[41] = L),
        (e[42] = R))
      : (R = e[42]),
    Ue(R),
    null
  );
}
function qe({ activeTabs: e, browserConversationId: t, openPanels: n }) {
  if (t == null) return null;
  let r = document.activeElement;
  if (!(r instanceof HTMLElement)) return null;
  for (let i of d) {
    if (!n[i]) continue;
    let o = a(e[i], t);
    if (
      o != null &&
      ((r.tagName.toLowerCase() === `webview` &&
        r.getAttribute(`data-browser-sidebar-conversation-id`) === t &&
        (r.getAttribute(`data-browser-sidebar-browser-tab-id`) ?? o) === o) ||
        r.closest(`[data-app-shell-focus-area="${i}-panel"]`) != null)
    )
      return { browserTabId: o, conversationId: t };
  }
  return null;
}
function Je({
  activeTabs: e,
  browserConversationId: t,
  openPanels: n,
  tabs: r,
}) {
  if (t == null) return null;
  for (let r of d) {
    if (!n[r]) continue;
    let i = a(e[r], t);
    if (i != null) return { browserTabId: i, conversationId: t };
  }
  for (let e of d)
    if (n[e])
      for (let n of r[e]) {
        let e = a(n, t);
        if (e != null) return { browserTabId: e, conversationId: t };
      }
  return null;
}
function Ye() {
  let e = document.getElementById(`content-search-input`);
  e instanceof HTMLInputElement && (e.focus(), e.select());
}
function Xe() {
  let e = document.activeElement,
    t;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
    if (e.selectionStart == null || e.selectionEnd == null) return;
    t = e.value.slice(e.selectionStart, e.selectionEnd);
  } else t = window.getSelection?.()?.toString();
  let n = t?.trim();
  if (n) return /[\r\n]/.test(n) ? `` : n;
}
function Ze() {
  let e = document.activeElement;
  if (e?.closest(Z) == null) return !1;
  let t = e;
  for (; t.shadowRoot?.activeElement != null; ) t = t.shadowRoot.activeElement;
  let n = Ne();
  return (
    t.dispatchEvent(
      new KeyboardEvent(`keydown`, {
        bubbles: !0,
        composed: !0,
        ctrlKey: !n,
        key: `f`,
        metaKey: n,
      }),
    ),
    !0
  );
}
var Qe,
  $e,
  Z,
  et = e(() => {
    ((Qe = o()),
      v(),
      ($e = t(c(), 1)),
      Ge(),
      A(),
      n(),
      b(),
      De(),
      Me(),
      O(),
      _(),
      M(),
      s(),
      u(),
      Y(),
      Fe(),
      U(),
      (Z = `[data-pierre-editor-surface], [data-editor-search-surface]`));
  });
function tt() {
  let e = (0, nt.c)(22),
    t = h(r),
    n = F(),
    a = i(G),
    o = i(V),
    s = i(ye),
    c = i(W),
    l = t.value.routeKind === `chatgpt-thread`,
    u;
  e[0] !== o || e[1] !== n || e[2] !== l
    ? ((u =
        o === `browser`
          ? n.formatMessage({
              id: `codex.threadFindBar.placeholder.browser`,
              defaultMessage: `Find in page…`,
              description: `Placeholder for the browser page find input`,
            })
          : o === `diff`
            ? n.formatMessage({
                id: `codex.threadFindBar.placeholder.review`,
                defaultMessage: `Search diff…`,
                description: `Placeholder for the review find input`,
              })
            : l
              ? n.formatMessage({
                  id: `chatgpt.threadFindBar.placeholder`,
                  defaultMessage: `Search chat…`,
                  description: `Placeholder for the ChatGPT chat find input`,
                })
              : n.formatMessage({
                  id: `codex.threadFindBar.placeholder`,
                  defaultMessage: `Search task…`,
                  description: `Placeholder for the task find input`,
                })),
      (e[0] = o),
      (e[1] = n),
      (e[2] = l),
      (e[3] = u))
    : (u = e[3]);
  let d = u,
    f;
  e[4] !== o || e[5] !== n || e[6] !== l
    ? ((f =
        o === `browser`
          ? n.formatMessage({
              id: `codex.threadFindBar.label.browser`,
              defaultMessage: `Find in page`,
              description: `Accessible label for the browser page find input`,
            })
          : l
            ? n.formatMessage({
                id: `chatgpt.threadFindBar.label`,
                defaultMessage: `Find in chat`,
                description: `Accessible label for the ChatGPT chat find input`,
              })
            : n.formatMessage({
                id: `codex.threadFindBar.label`,
                defaultMessage: `Find in task`,
                description: `Accessible label for the Codex task find input`,
              })),
      (e[4] = o),
      (e[5] = n),
      (e[6] = l),
      (e[7] = f))
    : (f = e[7]);
  let p = f,
    m,
    g,
    _;
  e[8] !== a || e[9] !== o || e[10] !== t
    ? ((m = (e) => {
        if (o === `browser`) {
          (se(t, e), J(a, { type: `set-find-query`, query: e }));
          return;
        }
        Se(t, e);
      }),
      (g = (e) => {
        if (o === `browser`) {
          J(a, { type: e ? `find-previous` : `find-next` });
          return;
        }
        I(t, { shift: e });
      }),
      (_ = () => {
        (o === `browser` && (de(t, a), J(a, { type: `close-find` }), K(t, z)),
          oe(t));
      }),
      (e[8] = a),
      (e[9] = o),
      (e[10] = t),
      (e[11] = m),
      (e[12] = g),
      (e[13] = _))
    : ((m = e[11]), (g = e[12]), (_ = e[13]));
  let v;
  return (
    e[14] !== s ||
    e[15] !== p ||
    e[16] !== d ||
    e[17] !== c ||
    e[18] !== m ||
    e[19] !== g ||
    e[20] !== _
      ? ((v = (0, rt.jsx)(L, {
          id: `content-search-input`,
          isLoading: s,
          label: p,
          placeholder: d,
          value: c,
          onChange: m,
          onEnter: g,
          onEscape: _,
        })),
        (e[14] = s),
        (e[15] = p),
        (e[16] = d),
        (e[17] = c),
        (e[18] = m),
        (e[19] = g),
        (e[20] = _),
        (e[21] = v))
      : (v = e[21]),
    v
  );
}
var nt,
  rt,
  it = e(() => {
    ((nt = o()), v(), k(), _(), Y(), B(), U(), (rt = T()));
  });
function at() {
  let e = (0, ot.c)(16),
    t = h(r),
    n = F(),
    a = i(ue),
    o = i(G),
    s = i(V),
    c = i(be),
    l = s === `browser` ? a.matches : (c?.totalMatches ?? 0),
    u = i(he),
    d;
  e[0] === n
    ? (d = e[1])
    : ((d = n.formatMessage({
        id: `codex.threadFindBar.nextResult`,
        defaultMessage: `Next result`,
        description: `Button label to move to the next find match`,
      })),
      (e[0] = n),
      (e[1] = d));
  let f;
  e[2] === n
    ? (f = e[3])
    : ((f = n.formatMessage({
        id: `codex.threadFindBar.previousResult`,
        defaultMessage: `Previous result`,
        description: `Button label to move to the previous find match`,
      })),
      (e[2] = n),
      (e[3] = f));
  let p, m;
  e[4] !== o || e[5] !== s || e[6] !== t
    ? ((p = () => {
        if (s === `browser`) {
          J(o, { type: `find-next` });
          return;
        }
        ge(t);
      }),
      (m = () => {
        if (s === `browser`) {
          J(o, { type: `find-previous` });
          return;
        }
        fe(t);
      }),
      (e[4] = o),
      (e[5] = s),
      (e[6] = t),
      (e[7] = p),
      (e[8] = m))
    : ((p = e[7]), (m = e[8]));
  let g;
  return (
    e[9] !== u ||
    e[10] !== l ||
    e[11] !== d ||
    e[12] !== f ||
    e[13] !== p ||
    e[14] !== m
      ? ((g = (0, st.jsx)(ne, {
          isVisible: u,
          matches: l,
          nextLabel: d,
          previousLabel: f,
          onNext: p,
          onPrevious: m,
        })),
        (e[9] = u),
        (e[10] = l),
        (e[11] = d),
        (e[12] = f),
        (e[13] = p),
        (e[14] = m),
        (e[15] = g))
      : (g = e[15]),
    g
  );
}
var ot,
  st,
  ct = e(() => {
    ((ot = o()), v(), k(), _(), Y(), B(), U(), (st = T()));
  });
function lt() {
  let e = (0, ut.c)(10),
    t = F(),
    n = i(ue),
    r = i(V),
    a = i(he),
    o = i(be),
    s = i(re),
    c = r === `browser` ? n.matches : (o?.totalMatches ?? 0),
    l =
      r === `browser`
        ? n.activeMatchOrdinal
        : s == null
          ? c > 0
            ? 1
            : 0
          : s + 1,
    u = null;
  if (a && c === 0) {
    let n;
    (e[0] === t
      ? (n = e[1])
      : ((n = t.formatMessage({
          id: `codex.threadFindBar.noResults`,
          defaultMessage: `0 results`,
          description: `Find-in-thread label when there are no matches`,
        })),
        (e[0] = t),
        (e[1] = n)),
      (u = n));
  } else if (a) {
    let n;
    (e[2] !== l || e[3] !== t || e[4] !== o?.isCapped || e[5] !== c
      ? ((n = t.formatMessage(
          o?.isCapped
            ? {
                id: `codex.threadFindBar.results.capped`,
                defaultMessage: `{active} / {matches}+ results`,
                description: `Find-in-thread label showing the active match index when matches are capped`,
              }
            : {
                id: `codex.threadFindBar.results`,
                defaultMessage: `{active} / {matches} results`,
                description: `Find-in-thread label showing the active match index`,
              },
          { active: l, matches: c },
        )),
        (e[2] = l),
        (e[3] = t),
        (e[4] = o?.isCapped),
        (e[5] = c),
        (e[6] = n))
      : (n = e[6]),
      (u = n));
  }
  let d;
  return (
    e[7] !== a || e[8] !== u
      ? ((d = (0, dt.jsx)(_e, { isVisible: a, label: u })),
        (e[7] = a),
        (e[8] = u),
        (e[9] = d))
      : (d = e[9]),
    d
  );
}
var ut,
  dt,
  ft = e(() => {
    ((ut = o()), v(), k(), B(), U(), (dt = T()));
  });
function pt(e) {
  let t = (0, Q.c)(3),
    { children: n, className: r } = e;
  if (!i(ce)) return null;
  let a;
  return (
    t[0] !== n || t[1] !== r
      ? ((a = (0, $.jsx)(R, { className: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function mt(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)($.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function ht() {
  let e = (0, Q.c)(8),
    t = Ae(),
    n = (0, yt.useSyncExternalStore)(_t, vt, gt),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(Ke, {})), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== n || e[2] !== t
    ? ((i = n
        ? null
        : (0, $.jsx)(`div`, {
            className: `pointer-events-none fixed top-2 z-[55] flex justify-end`,
            style: { right: 16 + t.right },
            children: (0, $.jsxs)(pt, {
              children: [
                (0, $.jsx)(tt, {}),
                (0, $.jsx)(Be, {}),
                (0, $.jsx)(at, {}),
                (0, $.jsx)(lt, {}),
                (0, $.jsx)(Ie, {}),
              ],
            }),
          })),
      (e[1] = n),
      (e[2] = t),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === i
    ? (a = e[5])
    : ((a = (0, $.jsxs)($.Fragment, { children: [r, i] })),
      (e[4] = i),
      (e[5] = a));
  let o = a;
  if (typeof document > `u`) return o;
  let s;
  return (
    e[6] === o
      ? (s = e[7])
      : ((s = (0, bt.createPortal)(o, document.body)), (e[6] = o), (e[7] = s)),
    s
  );
}
function gt() {
  return !1;
}
function _t(e) {
  if (typeof document > `u` || typeof MutationObserver > `u`) return () => {};
  let t = new MutationObserver(e);
  return (
    t.observe(document.body, { childList: !0, subtree: !0 }),
    () => {
      t.disconnect();
    }
  );
}
function vt() {
  return (
    typeof document < `u` &&
    document.querySelector(`.codex-dialog-overlay`) != null
  );
}
var Q,
  yt,
  bt,
  $,
  xt,
  St = e(() => {
    ((Q = o()),
      v(),
      (yt = t(c(), 1)),
      (bt = t(E(), 1)),
      ke(),
      U(),
      ze(),
      He(),
      ie(),
      et(),
      it(),
      ct(),
      ft(),
      ($ = T()),
      (xt = Object.assign(mt, {
        Frame: pt,
        Surface: ht,
        Input: tt,
        DomainToggle: Be,
        Navigation: at,
        ResultLabel: lt,
        Close: Ie,
      })));
  });
export { q as a, Ue as i, St as n, Fe as o, Ge as r, xt as t };
//# sourceMappingURL=app-initial~app-main~chatgpt-conversation-page~keyboard-shortcuts-settings~remote-conversat~e5c4ajsk-Df0kRLgc.js.map
