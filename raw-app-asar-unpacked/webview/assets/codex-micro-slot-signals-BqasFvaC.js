import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $T as t,
  AY as n,
  Dd as r,
  GK as i,
  Gq as a,
  KK as o,
  Kq as s,
  LS as c,
  Od as l,
  P$ as u,
  Q0 as d,
  R$ as f,
  SV as p,
  W1 as m,
  _0 as h,
  _C as g,
  _d as ee,
  cY as _,
  dC as te,
  dT as v,
  fG as ne,
  hd as y,
  id as re,
  jS as ie,
  kd as b,
  lT as ae,
  lm as x,
  nX as S,
  pC as oe,
  pG as se,
  s2 as ce,
  sY as C,
  uT as le,
  um as w,
  z1 as T,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Mn as ue,
  Nn as de,
  On as E,
  Pn as D,
  kn as O,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  Pt as k,
  Rt as A,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Ar as j,
  Er as M,
  Qn as N,
  ir as P,
  kr as F,
  lr as I,
  or as L,
  rr as R,
  sr as z,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  c as B,
  l as V,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ksbzhge1-nyqcMWLP.js";
import {
  v as H,
  y as fe,
} from "./app-initial~app-main~projects-index-page~quick-chat-window-page-CbAzMxjV.js";
import {
  at as pe,
  it as me,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~jodr0e7v-CZ6beq_4.js";
function U(e, t, n) {
  let r = { ...e };
  if (n != null)
    for (let e of T) r[e]?.threadKey === n.threadKey && (r[e] = null);
  return ((r[t] = n), r);
}
function he({
  assignments: e,
  clientThreadId: t,
  conversationId: n,
  hostId: r,
  pending: i,
  title: a,
}) {
  return i?.clientThreadId === t
    ? U(e, i.agentKeyId, { hostId: r, threadKey: te(n), title: a })
    : null;
}
function ge(e, t, n) {
  return f(n) ? (e.set(J, { agentKeyId: t, clientThreadId: n }), !0) : !1;
}
function _e(e, t, n) {
  (e.set(q, U(e.get(q) ?? K, t, n)),
    e.get(J)?.agentKeyId === t && e.set(J, null));
}
function ve(e, t, n) {
  if (!f(t) || a(e.get, S.agentSource) !== `custom`) return !1;
  let r = e.get(J),
    i = he({
      assignments: e.get(q) ?? K,
      clientThreadId: t,
      conversationId: n,
      hostId: e.get(le, n) ?? `local`,
      pending: r,
      title: e.get(w, n),
    });
  return i == null ? !1 : (e.set(q, i), e.get(J) === r && e.set(J, null), !0);
}
function ye(e, n, r) {
  if (a(e.get, S.agentSource) !== `custom`) return;
  let i = W(n),
    o = i == null ? null : (e.get(q) ?? K)[i];
  if (o?.threadKey !== r || o.hostId == null) return;
  let s = oe(o.threadKey);
  s != null && t(e, u(s), o.hostId);
}
function W(e) {
  return T[e] ?? null;
}
var G,
  K,
  q,
  J,
  Y = e(() => {
    (h(),
      n(),
      v(),
      x(),
      _(),
      s(),
      p(),
      g(),
      i(),
      (G = `codex-micro-custom-agent-assignments`),
      (K = {
        AG00: null,
        AG01: null,
        AG02: null,
        AG03: null,
        AG04: null,
        AG05: null,
      }),
      (q = o(G, K)),
      (J = ce(C, null)));
  });
function be(e) {
  return JSON.stringify({
    inactivityTimeoutMs: e.inactivityTimeoutMs,
    preserveSelectionLighting: !!e.preserveSelectionLighting,
    snakingAmbientStatus: e.snakingAmbientStatus,
    suspendDeviceStatusRefresh: !!e.suspendDeviceStatusRefresh,
    slots: e.slots.map(
      ({ id: e, pulsing: t, selected: n, status: r, threadKey: i }) => ({
        id: e,
        pulsing: !!t,
        selected: n,
        status: r,
        threadKey: i,
      }),
    ),
    voiceState: e.voiceState,
  });
}
function xe({
  isAppWindowFocused: e,
  threadKeys: t,
  threads: n,
  selectedThreadKey: r,
}) {
  return Array.from({ length: 6 }, (i, a) => {
    let o = t[a];
    if (o == null)
      return {
        id: a,
        threadKey: null,
        title: null,
        status: `off`,
        selected: !1,
      };
    let s = n.find((e) => e.threadKey === o) ?? { threadKey: o, title: null },
      c = o === r,
      l = we(s);
    return {
      id: a,
      threadKey: o,
      title: s.title,
      status: c && e && l === `unread` ? `idle` : l,
      selected: c,
    };
  });
}
function Se({
  source: e,
  pinnedThreadKeys: t,
  pinnedProjectThreadKeys: n,
  recentlyUpdatedThreadKeys: r,
  priorityThreadKeys: i,
  customAgentThreadKeys: a,
}) {
  switch (e) {
    case `pinned`:
      return [...t, ...n].slice(0, 6);
    case `recent`:
      return r.slice(0, 6);
    case `priority`:
      return i.slice(0, 6);
    case `custom`:
      return a.slice(0, 6);
  }
}
function Ce({
  unpinnedThreadKeys: e,
  pinnedThreadKeys: t,
  pinnedProjectThreadKeys: n,
  updatedAtByThreadKey: r,
}) {
  let i = [...e, ...t, ...n];
  return [...new Set(i)].sort((e, t) => (r.get(t) ?? 0) - (r.get(e) ?? 0));
}
function X({
  threadKeys: e,
  attentionStateByThreadKey: t,
  recencyAtByThreadKey: n,
}) {
  return H(
    e.map((e) => ({
      threadKey: e,
      attentionState: t.get(e) ?? `idle`,
      recencyAt: n.get(e) ?? 0,
    })),
  ).map(({ threadKey: e }) => e);
}
function we(e) {
  if (e.localStatus != null) {
    let { pendingChip: t, status: n, unread: r } = e.localStatus;
    return n === `error`
      ? `error`
      : t === `approval`
        ? `awaiting-approval`
        : t === `response`
          ? `awaiting-response`
          : n === `loading`
            ? `working`
            : r
              ? `unread`
              : `idle`;
  }
  let t = e.remoteStatus;
  return t == null
    ? `idle`
    : t.latestTurnStatus === `failed`
      ? `error`
      : t.latestTurnStatus === `pending` || t.latestTurnStatus === `in_progress`
        ? `working`
        : t.unread
          ? `unread`
          : `idle`;
}
var Z = e(() => {
    fe();
  }),
  Q,
  $,
  Te = e(() => {
    (h(),
      n(),
      v(),
      pe(),
      Z(),
      V(),
      r(),
      x(),
      _(),
      s(),
      O(),
      N(),
      ue(),
      F(),
      c(),
      re(),
      A(),
      P(),
      z(),
      ne(),
      Y(),
      (Q = d(C, ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(L),
          n = a(e, S.agentSource),
          r = e(q) ?? K,
          i = e(M),
          o = e(j),
          s = e(de, {
            canStartProjectlessChat: i,
            localProjectActionsEnabled: o,
          }),
          c = e(D, {
            canStartProjectlessChat: i,
            localProjectActionsEnabled: o,
          }),
          u = e(se, `12346831`),
          d = [],
          f = [];
        if (n === `recent`) {
          let n;
          if (u) {
            let t = e(R);
            ((n = t.threadKeys), (d = t.pinnedProjectThreadKeys));
          } else
            ((n = e(c).recentRenderableThreadKeys),
              (d = e(s).pinnedProjectGroups.flatMap((e) => e.threadKeys)));
          let r = new Map();
          for (let i of [...n, ...t, ...d]) r.set(i, e(ee, i));
          f = Ce({
            unpinnedThreadKeys: n,
            pinnedThreadKeys: t,
            pinnedProjectThreadKeys: d,
            updatedAtByThreadKey: r,
          });
        } else
          n === `pinned` &&
            (d = u
              ? e(R).pinnedProjectThreadKeys
              : e(s).pinnedProjectGroups.flatMap((e) => e.threadKeys));
        let p = [];
        if (n === `priority`) {
          let t = e(R);
          p = X({
            threadKeys: t.threadKeys,
            attentionStateByThreadKey: t.threadAttentionStateByKey,
            recencyAtByThreadKey: t.threadRecencyAtByKey,
          });
        }
        let m = t;
        if (n === `pinned`) {
          let n = k(
            t.flatMap((t) => {
              let n = e(y, t);
              return n == null ? [] : [n];
            }),
          );
          m = E({
            threadKeys: t,
            pinnedThreadIds: e(I),
            referencesByThreadKey: n,
          });
        }
        let h = Se({
            source: n,
            pinnedThreadKeys: m,
            pinnedProjectThreadKeys: d,
            recentlyUpdatedThreadKeys: f,
            priorityThreadKeys: p,
            customAgentThreadKeys: T.map((e) => r[e]?.threadKey ?? null),
          }),
          g = h.flatMap((t) => {
            if (t == null) return [];
            let n = e(y, t);
            if (n == null) return [];
            switch (n.kind) {
              case `local`:
                return n.conversation == null
                  ? [{ threadKey: t, title: n.pendingWorktree.label }]
                  : [
                      {
                        threadKey: t,
                        title: e(w, n.conversation.id),
                        localStatus: {
                          status: e(b, n.conversation.id),
                          pendingChip: e(l, n.conversation.id),
                          unread: e(ae, n.conversation.id) === !0,
                        },
                      },
                    ];
              case `remote`: {
                let e =
                    n.task.task_status_display?.latest_turn_status_display
                      ?.turn_status,
                  r =
                    e === `pending` || e === `in_progress` || e === `failed`
                      ? e
                      : null;
                return [
                  {
                    threadKey: t,
                    title: n.task.title ?? null,
                    remoteStatus: {
                      latestTurnStatus: r,
                      unread: n.task.has_unread_turn === !0,
                    },
                  },
                ];
              }
            }
          });
        if (n === `custom`) {
          let e = new Set(g.map((e) => e.threadKey));
          for (let t of Object.values(r))
            t != null &&
              !e.has(t.threadKey) &&
              g.push({ threadKey: t.threadKey, title: t.title });
        }
        return xe({
          isAppWindowFocused: e(me) === !0,
          threadKeys: h,
          threads: g,
          selectedThreadKey: e(ie),
        });
      })),
      ($ = d(C, ({ get: e }) => ({
        inactivityTimeoutMs: m(a(e, S.lightingAutoOff)),
        slots: e(Q),
        voiceState: e(B),
      }))));
  });
export {
  Z as a,
  _e as c,
  W as d,
  Y as f,
  be as i,
  ve as l,
  Q as n,
  K as o,
  ye as p,
  Te as r,
  ge as s,
  $ as t,
  q as u,
};
//# sourceMappingURL=codex-micro-slot-signals-BqasFvaC.js.map
