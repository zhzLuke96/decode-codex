import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $0 as t,
  AV as n,
  AY as r,
  Fj as i,
  I2 as a,
  K1 as o,
  LD as s,
  MD as c,
  MV as l,
  NV as u,
  P$ as d,
  P2 as f,
  PD as p,
  Q0 as m,
  Qw as ee,
  RD as h,
  S0 as g,
  SU as _,
  _0 as v,
  a0 as y,
  aJ as b,
  cY as x,
  dJ as S,
  dT as C,
  e2 as te,
  fJ as w,
  hE as ne,
  hU as T,
  i2 as re,
  jV as ie,
  kV as ae,
  nJ as oe,
  o0 as se,
  rJ as ce,
  s0 as E,
  sT as le,
  sY as D,
  tJ as ue,
  u0 as O,
  uT as de,
  x0 as k,
  xU as fe,
  y2 as pe,
  zZ as A,
  zj as me,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function he(e, t) {
  e.query.invalidate(j, t);
}
var j,
  M,
  N = e(() => {
    (v(),
      x(),
      w(),
      b(),
      (j = ce(D, `gh-cli-status`, (e) => ({
        gcTime: S.INFINITE,
        params: { hostId: e },
        staleTime: (e) =>
          e.state.data?.isInstalled === !0 &&
          e.state.data.isAuthenticated === !0
            ? S.INFINITE
            : S.FIVE_SECONDS,
      }))),
      (M = t(D, (e, { get: t }) => {
        let n = t(j, e);
        return n.isError
          ? `error`
          : n.data == null
            ? `loading`
            : n.data.isInstalled
              ? n.data.isAuthenticated
                ? `available`
                : `unauthenticated`
              : `missing`;
      })));
  });
function ge(e, t) {
  return P(e) &&
    e.mergeBlocker === `conflicts` &&
    P(t) &&
    e.url != null &&
    e.url === t.url &&
    t.mergeBlocker === `unknown`
    ? f(e, { ...t, mergeBlocker: `conflicts` })
    : f(e, t);
}
function P(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `status` in e &&
    e.status === `success` &&
    `mergeBlocker` in e &&
    `url` in e
  );
}
function _e(e) {
  return e === `sidebar_task_pr_chip`
    ? S.ONE_MINUTE
    : e === `local_conversation_git_summary`
      ? S.FIFTEEN_SECONDS
      : S.FIVE_SECONDS;
}
var F,
  I,
  L,
  R,
  z = e(() => {
    (pe(),
      v(),
      r(),
      x(),
      w(),
      b(),
      N(),
      (F = re(D, (e, { get: t }) => ({
        enabled:
          e.cwd != null &&
          e.headBranch.length > 0 &&
          t(M, e.hostId) === `available`,
        queryFn: () =>
          ue(`gh-pr-status`, {
            source: e.operationSource,
            params: {
              cwd: A(e.cwd ?? `/`),
              headBranch: e.headBranch,
              hostId: e.hostId,
            },
          }),
        queryKey: oe(`gh-pr-status`, {
          cwd: A(e.cwd ?? `/`),
          headBranch: e.headBranch,
          hostId: e.hostId,
        }),
        staleTime: _e(e.operationSource),
        structuralSharing: ge,
      }))),
      (I = t(D, (e, { get: t }) => {
        let n = t(F, e);
        return n.isError
          ? { type: `error` }
          : n.isLoading || n.data == null
            ? { type: `loading` }
            : n.data.status === `not-found`
              ? { type: `not-found` }
              : { type: `success`, data: n.data };
      })),
      (L = t(D, (e, { get: t }) => {
        let n = t(F, e);
        return n.data?.status === `success` && n.data.hasOpenPr;
      })),
      (R = t(D, (e, { get: t }) => {
        let n = t(F, e);
        return n.data?.status === `success` ? n.data.url : null;
      })));
  });
function B(e, t, n) {
  u(e, `diff_comments`, (e) => {
    let r = e?.[t] ?? V,
      i = typeof n == `function` ? n(r) : n;
    if (i === r) return e;
    if (i.length > 0) return { ...e, [t]: i };
    if (e?.[t] == null) return e;
    let a = { ...e };
    return (delete a[t], Object.keys(a).length === 0 ? void 0 : a);
  });
}
var V,
  H,
  U = e(() => {
    (v(),
      _(),
      x(),
      i(),
      l(),
      (V = []),
      (H = t(D, (e, { get: t }) =>
        e == null ? V : (ie(t, `diff_comments`)?.[e] ?? V),
      )),
      me((e, { clientThreadId: t, conversationId: n }) => {
        let r = e.get(H, t);
        r.length !== 0 &&
          (B(e, n, (e) => {
            let t = new Set(e.map(T)),
              n = r.filter((e) => {
                let n = T(e);
                return t.has(n) ? !1 : (t.add(n), !0);
              });
            return n.length === 0 ? e : [...e, ...n];
          }),
          B(e, t, []));
      }));
  });
function W(e) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (typeof e == `string`) {
    let t = e.trim();
    if (t.length === 0) return;
    let n = Number(t);
    if (Number.isFinite(n)) return n;
  }
}
function ve(e) {
  let t = W(e);
  return t == null ? void 0 : Math.trunc(t);
}
function ye(e) {
  let t = e.match(K);
  return t
    ? { priority: t[1].toUpperCase(), rest: t[2].trim() }
    : { priority: null, rest: e };
}
function be(e, t) {
  return t != null && ye(e).priority == null ? `[P${t}] ${e}` : e;
}
function xe({ body: e, title: t }) {
  let n = t.trim(),
    r = e.trim();
  return n.length === 0 ? r : r.length === 0 ? n : `${n}\n\n${r}`;
}
function Se(e, t) {
  let n = Y.safeParse(e ?? {});
  if (!n.success) return null;
  let { title: r, body: i, file: a, priority: o, start: s, end: c } = n.data,
    l = Math.max(1, s ?? 1),
    u = Math.max(1, c ?? l),
    d = u < l ? l : u,
    f = xe({ title: be(r, o), body: i });
  return f.length === 0
    ? null
    : {
        content: [{ content_type: `text`, text: f }],
        position: {
          side: `right`,
          path: fe(a, t ?? void 0),
          line: d,
          ...(d === l ? {} : { start_line: l }),
        },
      };
}
function G(e, t) {
  let n = [];
  for (let r of s(e, { lineStartNames: [c] })) {
    if (r.name !== `code-comment`) continue;
    let e = Se(r.attributes, t);
    e != null && n.push(e);
  }
  return n;
}
function Ce({ current: e, incoming: t }) {
  if (t.length === 0) return e;
  let n = new Set(e.map(T)),
    r = [...e],
    i = !1;
  for (let e of t) {
    let t = T(e);
    n.has(t) || (n.add(t), r.push(e), (i = !0));
  }
  return i ? r : e;
}
function we({ comments: e, conversationId: t, setDiffComments: n }) {
  e.length !== 0 &&
    n((n) => {
      let r = { ...n },
        i = r[t] ?? [],
        a = Ce({ current: i, incoming: e });
      return a.length === i.length ? n : ((r[t] = a), r);
    });
}
var K,
  q,
  J,
  Y,
  X = e(() => {
    (o(),
      _(),
      h(),
      p(),
      (K = /^(?:<sub>\s*)*\[(p\d)\](?:\s*<\/sub>)*\s*(.*)$/i),
      (q = E((e) => W(e), y().finite()).optional()),
      (J = E((e) => ve(e), y().int()).optional()),
      (Y = se({
        title: O().trim().min(1),
        body: O().trim().min(1),
        file: O().trim().min(1),
        priority: J,
        confidence: q,
        start: J,
        end: J,
      })));
  });
function Te({ cache: e, storedModelComments: t, turns: n }) {
  if (n == null || n.length === 0) return t;
  let r = new Set(t.map(T)),
    i = [...t],
    a = !1;
  for (let t of n)
    if (t.status === `completed`)
      for (let n of Ee(t, e)) {
        let e = T(n);
        r.has(e) || (r.add(e), i.push(n), (a = !0));
      }
  return a ? i : t;
}
function Ee(e, t) {
  let n = t?.get(e);
  if (n?.items === e.items) return n.comments;
  let r = [];
  for (let t of e.items)
    t.type !== `agentMessage` ||
      t.phase === `commentary` ||
      r.push(...G(t.text, e.params.cwd ?? null));
  return (t?.set(e, { comments: r, items: e.items }), r);
}
var De = e(() => {
  (X(), _());
});
function Z(e, t) {
  let r = (0, Q.c)(10),
    i = g(D),
    a = k(H, e),
    [o] = n(`diff_comments_from_model`),
    s = k(Ae, t),
    c = o?.[e] ?? $,
    l;
  r[0] !== c || r[1] !== s
    ? ((l = Oe({ storedModelComments: c, turnModelComments: s })),
      (r[0] = c),
      (r[1] = s),
      (r[2] = l))
    : (l = r[2]);
  let u = l,
    d;
  r[3] !== e || r[4] !== i
    ? ((d = (t) => {
        B(i, e, t);
      }),
      (r[3] = e),
      (r[4] = i),
      (r[5] = d))
    : (d = r[5]);
  let f = d,
    p;
  return (
    r[6] !== a || r[7] !== u || r[8] !== f
      ? ((p = { comments: a, modelComments: u, setComments: f }),
        (r[6] = a),
        (r[7] = u),
        (r[8] = f),
        (r[9] = p))
      : (p = r[9]),
    p
  );
}
function Oe({ storedModelComments: e, turnModelComments: t }) {
  if (t.length === 0) return e;
  let n = new Set(e.map(T)),
    r = [...e],
    i = !1;
  for (let e of t) {
    let t = T(e);
    n.has(t) || (n.add(t), r.push(e), (i = !0));
  }
  return i ? r : e;
}
function ke(e, t) {
  return e.length === t.length
    ? e.every((e, n) => {
        let r = t[n];
        return r != null && T(e) === T(r);
      })
    : !1;
}
var Q,
  $,
  Ae,
  je = e(() => {
    ((Q = a()),
      v(),
      C(),
      U(),
      x(),
      ae(),
      De(),
      _(),
      ($ = []),
      (Ae = te(D, (e) => {
        let t = new WeakMap();
        return m(
          D,
          ({ get: n }) =>
            Te({ cache: t, storedModelComments: $, turns: n(ne, e) }),
          { isEqual: ke },
        );
      })));
  });
function Me(e) {
  let t = (0, Ne.c)(11),
    {
      conversationId: n,
      enablePullRequestComments: r,
      localConversationId: i,
    } = e,
    a = r === void 0 ? !0 : r,
    { comments: o, modelComments: s, setComments: c } = Z(n, i),
    l = String(n),
    u;
  t[0] === l ? (u = t[1]) : ((u = d(l)), (t[0] = l), (t[1] = u));
  let f = u,
    p = k(le, f) ?? ``,
    m = k(ee, f),
    h = k(de, f) ?? void 0,
    g;
  t[2] !== p || t[3] !== m || t[4] !== h
    ? ((g = {
        cwd: m,
        headBranch: p,
        hostId: h,
        operationSource: `diff_comment_sources`,
      }),
      (t[2] = p),
      (t[3] = m),
      (t[4] = h),
      (t[5] = g))
    : (g = t[5]);
  let _ = k(I, g),
    v = a && _.type === `success` ? _.data.commentAttachments : void 0,
    y;
  return (
    t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== v
      ? ((y = {
          commentProps: {
            enableComments: !0,
            comments: o,
            modelComments: s,
            onCommentsChange: c,
            readonlyComments: v,
          },
        }),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = v),
        (t[10] = y))
      : (y = t[10]),
    y
  );
}
var Ne,
  Pe = e(() => {
    ((Ne = a()), v(), r(), C(), z(), je());
  });
export {
  N as _,
  X as a,
  H as c,
  L as d,
  I as f,
  M as g,
  z as h,
  Z as i,
  U as l,
  R as m,
  Me as n,
  G as o,
  F as p,
  je as r,
  we as s,
  Pe as t,
  B as u,
  he as v,
};
//# sourceMappingURL=app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~pr~hvg1xey5-Civ_pNCm.js.map
