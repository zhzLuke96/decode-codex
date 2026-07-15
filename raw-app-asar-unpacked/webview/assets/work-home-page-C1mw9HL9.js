import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C0 as n,
  Hf as r,
  I2 as i,
  JA as a,
  K1 as o,
  KA as ee,
  KJ as te,
  L2 as s,
  PB as c,
  S0 as ne,
  Uf as l,
  Yv as re,
  _0 as u,
  _Y as ie,
  ax as ae,
  cj as oe,
  cp as se,
  dx as d,
  jv as ce,
  k2 as f,
  lp as p,
  mY as m,
  o0 as le,
  oj as ue,
  qA as h,
  qJ as g,
  u0 as _,
  wR as de,
  yY as fe,
  zv as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { Ft as pe, It as y } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  B as me,
  V as b,
  l as he,
  u as x,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  C as ge,
  w as S,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  a as C,
  i as w,
  n as _e,
  o as T,
  r as ve,
  t as ye,
} from "./new-chat-page-suggestions-CYOnFoP4.js";
import {
  n as E,
  t as be,
} from "./app-initial~app-main~new-thread-panel-page~work-home-page~home-announcements-O8w6zHCt.js";
import {
  a as D,
  r as xe,
} from "./app-initial~app-main~appgen-library-page~remote-conversation-page~local-conversation-page-D8rujHdw.js";
import {
  n as O,
  t as Se,
} from "./app-initial~app-main~projects-index-page~appgen-library-page~work-home-page~chatgpt-convers~n7kdxxbv-_36znuKl.js";
function Ce(e) {
  let t = k.safeParse(e);
  return !t.success || t.data.chatGptProjectId == null
    ? null
    : { id: t.data.chatGptProjectId, name: t.data.chatGptProjectName ?? null };
}
function we(e, t, n) {
  let r = k.safeParse(e);
  return {
    ...(r.success ? r.data : {}),
    chatGptProjectId: t,
    chatGptProjectName: n,
  };
}
var k,
  A = e(() => {
    (o(),
      (k = le({
        chatGptProjectId: _().min(1).nullable().optional(),
        chatGptProjectName: _().min(1).nullable().optional(),
        prefillPrompt: _().optional(),
      }).passthrough()));
  });
function j(e) {
  let t = (0, De.c)(64),
    i;
  t[0] === e
    ? (i = t[1])
    : ((i = e === void 0 ? {} : e), (t[0] = e), (t[1] = i));
  let { announcementStorybookOverride: a } = i,
    o = ne(ae),
    s = fe(),
    c = oe(),
    l = n(ce),
    u = n(be),
    { state: d } = ue(),
    f;
  t[2] === d ? (f = t[3]) : ((f = Ce(d)), (t[2] = d), (t[3] = f));
  let p = f,
    m;
  t[4] !== l || t[5] !== d?.prefillPrompt
    ? ((m = () => d?.prefillPrompt ?? l),
      (t[4] = l),
      (t[5] = d?.prefillPrompt),
      (t[6] = m))
    : (m = t[6]);
  let [le, h] = (0, M.useState)(m),
    g;
  t[7] !== p || t[8] !== d?.prefillPrompt
    ? ((g = () => (p == null ? {} : { [p.id]: d?.prefillPrompt ?? `` })),
      (t[7] = p),
      (t[8] = d?.prefillPrompt),
      (t[9] = g))
    : (g = t[9]);
  let [_, v] = (0, M.useState)(g),
    [y, b] = (0, M.useState)(null),
    x = p == null ? le : (_[p.id] ?? ``),
    S = x === y?.prompt ? y : null,
    C = (0, M.useRef)(Ee),
    [w, _e] = (0, M.useState)(!1),
    T;
  t[10] === s
    ? (T = t[11])
    : ((T = ve({ intl: s, mode: `work`, plugins: [] })),
      (t[10] = s),
      (t[11] = T));
  let E = T,
    D;
  t[12] !== o || t[13] !== p
    ? ((D = (e) => {
        if (p == null) {
          (h(e), re(o, e));
          return;
        }
        v((t) => ({ ...t, [p.id]: e }));
      }),
      (t[12] = o),
      (t[13] = p),
      (t[14] = D))
    : (D = t[14]);
  let O = D,
    k;
  t[15] === O
    ? (k = t[16])
    : ((k = (e) => {
        (b(e), O(e.prompt));
      }),
      (t[15] = O),
      (t[16] = k));
  let A = k,
    j;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, N.jsx)(se, {
        electron: !0,
        children: (0, N.jsx)(ge.Header, { children: (0, N.jsx)(Se, {}) }),
      })),
      (t[17] = j))
    : (j = t[17]);
  let P;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        C.current(e);
      }),
      (t[18] = P))
    : (P = t[18]);
  let F, I;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { viewTransitionName: `var(--vt-splash-screen-headline)` }),
      (I = (0, N.jsx)(r, {
        "aria-hidden": `true`,
        className: `size-10 text-token-foreground/40`,
      })),
      (t[19] = F),
      (t[20] = I))
    : ((F = t[19]), (I = t[20]));
  let L;
  t[21] === p
    ? (L = t[22])
    : ((L = (0, N.jsxs)(`div`, {
        className: `flex max-w-full min-w-0 flex-col items-center gap-4 text-center select-none`,
        style: F,
        children: [
          I,
          (0, N.jsx)(`h1`, {
            className: `heading-xl font-normal whitespace-pre-wrap text-token-foreground`,
            children:
              p?.name == null
                ? (0, N.jsx)(ie, {
                    id: `chatgptConversations.home.hero`,
                    defaultMessage: `What can I help with?`,
                    description: `Primary heading on the Work home page in Codex Desktop`,
                  })
                : (0, N.jsx)(ie, {
                    id: `chatgptConversations.home.projectHero`,
                    defaultMessage: `What can I help with in {projectName}?`,
                    description: `Primary heading on the Work home page when creating a chat inside a selected project`,
                    values: { projectName: p.name },
                  }),
          }),
        ],
      })),
      (t[21] = p),
      (t[22] = L));
  let R;
  t[23] !== S || t[24] !== u || t[25] !== x || t[26] !== A || t[27] !== E
    ? ((R =
        u || (x.trim().length > 0 && S == null)
          ? null
          : (0, N.jsx)(ye, {
              activeSuggestionId: null,
              apps: void 0,
              categories: E,
              selection: S,
              onSelectCategory: (e) => {
                A({
                  categoryId: e.id,
                  prompt: e.starterPrompt,
                  suggestionLevel: de.CODEX_NEW_CHAT_SUGGESTION_LEVEL_CATEGORY,
                });
              },
              onSelectTask: (e, t) => {
                A(t);
              },
              onStartSuggestion: (e, t, n) => {
                A(n);
              },
              renderSurface: Te,
            })),
      (t[23] = S),
      (t[24] = u),
      (t[25] = x),
      (t[26] = A),
      (t[27] = E),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] === R
    ? (z = t[30])
    : ((z = (0, N.jsx)(`div`, {
        className: `mt-6 flex min-w-0 flex-col gap-2`,
        children: R,
      })),
      (t[29] = R),
      (t[30] = z));
  let B;
  t[31] !== L || t[32] !== z
    ? ((B = (0, N.jsx)(`div`, {
        className: `[container-type:size] relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto [container-name:home-main-content]`,
        role: `main`,
        children: (0, N.jsxs)(`div`, {
          className: `mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-3 px-panel py-6`,
          children: [L, z],
        }),
      })),
      (t[31] = L),
      (t[32] = z),
      (t[33] = B))
    : (B = t[33]);
  let V;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = te(xe, `flex flex-col gap-2`)), (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] === a
    ? (H = t[36])
    : ((H = a ?? (0, N.jsx)(pe, {})), (t[35] = a), (t[36] = H));
  let U;
  t[37] === H
    ? (U = t[38])
    : ((U = (0, N.jsx)(`div`, {
        className: `home-banners flex w-full min-w-0 flex-col gap-2 empty:hidden`,
        children: H,
      })),
      (t[37] = H),
      (t[38] = U));
  let W;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        let { disabled: t, onFilesDropped: n } = e;
        ((C.current = n), _e(t));
      }),
      (t[39] = W))
    : (W = t[39]);
  let G;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        b(null);
      }),
      (t[40] = G))
    : (G = t[40]);
  let K = p?.id ?? null,
    q = p?.name ?? null,
    J;
  t[41] === c
    ? (J = t[42])
    : ((J = (e) => {
        c(ee(e), { replace: !0 });
      }),
      (t[41] = c),
      (t[42] = J));
  let Y;
  t[43] !== c || t[44] !== x || t[45] !== o || t[46] !== d
    ? ((Y = (e, t) => {
        (b(null),
          e == null ? (h(x), re(o, x)) : v((t) => ({ ...t, [e]: x })),
          c(`.`, { replace: !0, state: we(d, e, t) }));
      }),
      (t[43] = c),
      (t[44] = x),
      (t[45] = o),
      (t[46] = d),
      (t[47] = Y))
    : (Y = t[47]);
  let X;
  t[48] !== x ||
  t[49] !== O ||
  t[50] !== K ||
  t[51] !== q ||
  t[52] !== J ||
  t[53] !== Y
    ? ((X = (0, N.jsx)(me, {
        className: `w-full`,
        conversationOrigin: `tpp`,
        isHomeMenu: !0,
        prompt: x,
        showError: !0,
        onFileDropTargetChange: W,
        onPromptChange: O,
        onUserInput: G,
        projectId: K,
        projectName: q,
        onSubmitAccepted: J,
        onProjectChange: Y,
      })),
      (t[48] = x),
      (t[49] = O),
      (t[50] = K),
      (t[51] = q),
      (t[52] = J),
      (t[53] = Y),
      (t[54] = X))
    : (X = t[54]);
  let Z;
  t[55] !== U || t[56] !== X
    ? ((Z = (0, N.jsx)(`div`, {
        className: `relative z-20 shrink-0 pb-4`,
        children: (0, N.jsxs)(`div`, { className: V, children: [U, X] }),
      })),
      (t[55] = U),
      (t[56] = X),
      (t[57] = Z))
    : (Z = t[57]);
  let Q;
  t[58] !== B || t[59] !== Z
    ? ((Q = (0, N.jsxs)(`div`, {
        className: `@container/left-panel relative flex h-full min-h-0 flex-col`,
        children: [B, Z],
      })),
      (t[58] = B),
      (t[59] = Z),
      (t[60] = Q))
    : (Q = t[60]);
  let $;
  return (
    t[61] !== w || t[62] !== Q
      ? (($ = (0, N.jsxs)(N.Fragment, {
          children: [
            j,
            (0, N.jsx)(he, { disabled: w, onFilesDropped: P, children: Q }),
          ],
        })),
        (t[61] = w),
        (t[62] = Q),
        (t[63] = $))
      : ($ = t[63]),
    $
  );
}
function Te(e) {
  let { items: t } = e;
  return (0, N.jsx)(C, { items: t });
}
function Ee() {}
var De, M, N;
e(() => {
  ((De = i()),
    c(),
    g(),
    u(),
    (M = t(s(), 1)),
    m(),
    a(),
    T(),
    w(),
    _e(),
    S(),
    p(),
    v(),
    E(),
    y(),
    l(),
    d(),
    D(),
    O(),
    b(),
    x(),
    A(),
    h(),
    (N = f()));
})();
export { j as WorkHomePage };
//# sourceMappingURL=work-home-page-C1mw9HL9.js.map
