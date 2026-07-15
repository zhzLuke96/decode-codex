import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ds as t,
  Fq as n,
  GJ as r,
  Gb as i,
  I2 as a,
  Kb as o,
  Mq as s,
  Nq as c,
  Pq as l,
  RK as u,
  T2 as d,
  Ts as f,
  VW as p,
  WJ as m,
  WW as h,
  _Y as g,
  cS as _,
  dJ as v,
  fJ as y,
  js as b,
  k2 as x,
  lS as S,
  mY as C,
  y2 as w,
  zK as T,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function E(e) {
  let n = (0, D.c)(30),
    { options: r, renderLabel: i, value: a, onChange: o } = e,
    s;
  if (n[0] !== r || n[1] !== a) {
    let e;
    (n[3] === a
      ? (e = n[4])
      : ((e = (e) => e.value === a), (n[3] = a), (n[4] = e)),
      (s = r.find(e)),
      (n[0] = r),
      (n[1] = a),
      (n[2] = s));
  } else s = n[2];
  let c = s?.Icon,
    l;
  n[5] === c
    ? (l = n[6])
    : ((l =
        c == null
          ? null
          : (0, O.jsx)(c, { "aria-hidden": !0, className: `icon-xs` })),
      (n[5] = c),
      (n[6] = l));
  let d;
  n[7] === l
    ? (d = n[8])
    : ((d = (0, O.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10`,
        children: l,
      })),
      (n[7] = l),
      (n[8] = d));
  let p;
  n[9] !== i || n[10] !== a
    ? ((p = i(a)), (n[9] = i), (n[10] = a), (n[11] = p))
    : (p = n[11]);
  let h;
  n[12] === p
    ? (h = n[13])
    : ((h = (0, O.jsx)(`span`, { className: `truncate`, children: p })),
      (n[12] = p),
      (n[13] = h));
  let g;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, O.jsx)(m, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (n[14] = g))
    : (g = n[14]);
  let _;
  n[15] !== d || n[16] !== h
    ? ((_ = (0, O.jsxs)(`button`, {
        type: `button`,
        className: `flex min-w-0 cursor-interaction items-center gap-3 text-left text-base`,
        children: [d, h, g],
      })),
      (n[15] = d),
      (n[16] = h),
      (n[17] = _))
    : (_ = n[17]);
  let v;
  if (n[18] !== o || n[19] !== r || n[20] !== i || n[21] !== a) {
    let e;
    (n[23] !== o || n[24] !== i || n[25] !== a
      ? ((e = (e) =>
          (0, O.jsx)(
            t.Item,
            {
              disabled: e.disabled,
              LeftIcon: e.Icon,
              RightIcon: e.value === a ? u : void 0,
              onSelect: () => {
                o(e.value);
              },
              children: i(e.value),
            },
            e.value,
          )),
        (n[23] = o),
        (n[24] = i),
        (n[25] = a),
        (n[26] = e))
      : (e = n[26]),
      (v = r.map(e)),
      (n[18] = o),
      (n[19] = r),
      (n[20] = i),
      (n[21] = a),
      (n[22] = v));
  } else v = n[22];
  let y;
  return (
    n[27] !== _ || n[28] !== v
      ? ((y = (0, O.jsx)(f, {
          align: `start`,
          contentWidth: `menu`,
          triggerButton: _,
          children: v,
        })),
        (n[27] = _),
        (n[28] = v),
        (n[29] = y))
      : (y = n[29]),
    y
  );
}
var D,
  O,
  k = e(() => {
    ((D = a()), b(), T(), r(), (O = x()));
  });
function A(e) {
  let t = (0, N.c)(23),
    {
      actions: n,
      cancelAction: r,
      disabled: i,
      hasPendingAccessChange: a,
      hasPendingInvitees: o,
      idleActions: c,
      isSaving: u,
      savingAriaLabel: d,
      size: f,
      spinnerClassName: p,
    } = e,
    m;
  t[0] !== a || t[1] !== o
    ? ((m = M({ hasPendingAccessChange: a, hasPendingInvitees: o })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = m))
    : (m = t[2]);
  let h = m;
  if (h == null) return c ?? null;
  let _;
  t[3] !== r || t[4] !== i || t[5] !== u || t[6] !== f
    ? ((_ =
        r == null
          ? null
          : (0, P.jsx)(s, {
              color: `secondary`,
              disabled: i || u,
              size: f,
              onClick: r.onClick,
              children: (0, P.jsx)(g, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = u),
      (t[6] = f),
      (t[7] = _))
    : (_ = t[7]);
  let v = u ? d : void 0,
    y = i || u,
    b = n[h],
    x = n[h],
    S;
  t[8] !== h || t[9] !== n || t[10] !== u || t[11] !== p
    ? ((S = u
        ? (0, P.jsx)(l, { className: p })
        : (n[h].label ?? (0, P.jsx)(j, { action: h }))),
      (t[8] = h),
      (t[9] = n),
      (t[10] = u),
      (t[11] = p),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== f ||
  t[14] !== v ||
  t[15] !== y ||
  t[16] !== b.onClick ||
  t[17] !== x.type ||
  t[18] !== S
    ? ((C = (0, P.jsx)(s, {
        "aria-label": v,
        color: `primary`,
        disabled: y,
        size: f,
        onClick: b.onClick,
        type: x.type,
        children: S,
      })),
      (t[13] = f),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b.onClick),
      (t[17] = x.type),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  return (
    t[20] !== _ || t[21] !== C
      ? ((w = (0, P.jsxs)(P.Fragment, { children: [_, C] })),
        (t[20] = _),
        (t[21] = C),
        (t[22] = w))
      : (w = t[22]),
    w
  );
}
function j(e) {
  let t = (0, N.c)(2),
    { action: n } = e;
  switch (n) {
    case `invite`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(g, {
              id: `shareDialog.primaryAction.invite`,
              defaultMessage: `Invite`,
              description: `Button label for inviting selected people or groups in a share dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `share`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(g, {
              id: `shareDialog.primaryAction.save`,
              defaultMessage: `Save`,
              description: `Button label for saving a share dialog access change`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function M({ hasPendingAccessChange: e, hasPendingInvitees: t }) {
  return !e && !t ? null : e && !t ? `share` : `invite`;
}
var N,
  P,
  F = e(() => {
    ((N = a()), C(), c(), n(), (P = x()));
  });
function I(e) {
  return e.name ?? e.email ?? e.id;
}
function L(e) {
  return {
    chipLabel: e.email ?? void 0,
    id: `user:${e.account_user_id}`,
    label: I(e),
    secondaryLabel: e.email ?? void 0,
  };
}
function R({
  currentAccountUserId: e,
  existingAccountUserIds: t,
  selectedAccountUserIds: n,
  workspaceUsers: r,
}) {
  let i = new Set(t),
    a = new Set(n);
  return r?.filter(
    (t) =>
      t.account_user_id !== e &&
      !i.has(t.account_user_id) &&
      !a.has(t.account_user_id),
  );
}
var z = e(() => {});
function B(e) {
  let n = (0, V.c)(23),
    {
      options: r,
      renderLabel: i,
      removeLabel: a,
      triggerButtonClassName: o,
      value: s,
      onChange: c,
      onRemoveAccess: l,
    } = e,
    d =
      o === void 0
        ? `flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground`
        : o,
    p;
  n[0] !== i || n[1] !== s
    ? ((p = i(s)), (n[0] = i), (n[1] = s), (n[2] = p))
    : (p = n[2]);
  let h;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, H.jsx)(m, {
        "aria-hidden": !0,
        className: `icon-xs text-token-description-foreground`,
      })),
      (n[3] = h))
    : (h = n[3]);
  let g;
  n[4] !== p || n[5] !== d
    ? ((g = (0, H.jsxs)(`button`, {
        type: `button`,
        className: d,
        children: [p, h],
      })),
      (n[4] = p),
      (n[5] = d),
      (n[6] = g))
    : (g = n[6]);
  let _;
  if (n[7] !== c || n[8] !== r || n[9] !== i || n[10] !== s) {
    let e;
    (n[12] !== c || n[13] !== i || n[14] !== s
      ? ((e = (e) =>
          (0, H.jsx)(
            t.Item,
            {
              disabled: e.disabled,
              RightIcon: e.value === s ? u : void 0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                c?.(e.value);
              },
              children: i(e.value),
            },
            e.value,
          )),
        (n[12] = c),
        (n[13] = i),
        (n[14] = s),
        (n[15] = e))
      : (e = n[15]),
      (_ = r.map(e)),
      (n[7] = c),
      (n[8] = r),
      (n[9] = i),
      (n[10] = s),
      (n[11] = _));
  } else _ = n[11];
  let v;
  n[16] !== l || n[17] !== a
    ? ((v =
        l == null
          ? null
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(t.Separator, {}),
                (0, H.jsx)(t.Item, {
                  onSelect: l,
                  children: (0, H.jsx)(`span`, {
                    className: `text-token-error-foreground`,
                    children: a,
                  }),
                }),
              ],
            })),
      (n[16] = l),
      (n[17] = a),
      (n[18] = v))
    : (v = n[18]);
  let y;
  return (
    n[19] !== g || n[20] !== _ || n[21] !== v
      ? ((y = (0, H.jsxs)(f, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: g,
          children: [_, v],
        })),
        (n[19] = g),
        (n[20] = _),
        (n[21] = v),
        (n[22] = y))
      : (y = n[22]),
    y
  );
}
var V,
  H,
  U = e(() => {
    ((V = a()), b(), T(), r(), (H = x()));
  });
function W(e) {
  let t = (0, K.c)(15),
    { label: n, avatarLabel: r, secondaryLabel: i, trailingContent: a } = e,
    o = r === void 0 ? n : r,
    s;
  t[0] === o ? (s = t[1]) : ((s = G(o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, q.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l = (0, q.jsx)(`div`, {
        className: `truncate text-base`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u =
        i == null
          ? null
          : (0, q.jsx)(`div`, {
              className: `truncate text-sm text-token-description-foreground`,
              children: i,
            })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, q.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [l, u],
      })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== c || t[12] !== d || t[13] !== a
      ? ((f = (0, q.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [c, d, a],
        })),
        (t[11] = c),
        (t[12] = d),
        (t[13] = a),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function G(e) {
  return e
    .split(` `)
    .map((e) => e[0])
    .join(``)
    .slice(0, 2)
    .toUpperCase();
}
var K,
  q,
  J = e(() => {
    ((K = a()), (q = x()));
  });
function Y(e) {
  let t = (0, Z.c)(12),
    { accountId: n, authMethod: r } = S(),
    i;
  t[0] === e ? (i = t[1]) : ((i = e.trim()), (t[0] = e), (t[1] = i));
  let a = o(i, 200),
    s;
  t[2] !== n || t[3] !== a
    ? ((s = [`workspace-users`, n, a]), (t[2] = n), (t[3] = a), (t[4] = s))
    : (s = t[4]);
  let c = r === `chatgpt` && n != null && a.length > 0,
    l;
  t[5] !== n || t[6] !== a
    ? ((l = async () => {
        if (n == null) throw Error(`account id is required`);
        return (
          await p.safeGet(`/accounts/{account_id}/users`, {
            parameters: {
              path: { account_id: n },
              query: { limit: 10, offset: 0, query: a },
            },
          })
        ).items;
      }),
      (t[5] = n),
      (t[6] = a),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = { queryKey: s, enabled: c, queryFn: l, staleTime: v.ONE_MINUTE }),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    d(u)
  );
}
function X(e) {
  let t = (0, Z.c)(12),
    { accountId: n, authMethod: r } = S(),
    i;
  t[0] === e ? (i = t[1]) : ((i = e.trim()), (t[0] = e), (t[1] = i));
  let a = o(i, 200),
    s;
  t[2] !== n || t[3] !== a
    ? ((s = [`workspace-groups`, n, a]), (t[2] = n), (t[3] = a), (t[4] = s))
    : (s = t[4]);
  let c = r === `chatgpt` && n != null && a.length > 0,
    l;
  t[5] !== n || t[6] !== a
    ? ((l = async () => {
        if (n == null) throw Error(`account id is required`);
        return (
          await p.safeGet(`/accounts/{account_id}/groups`, {
            parameters: {
              path: { account_id: n },
              query: { limit: 10, offset: 0, query: a },
            },
          })
        ).items;
      }),
      (t[5] = n),
      (t[6] = a),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = { queryKey: s, enabled: c, queryFn: l, staleTime: v.ONE_MINUTE }),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    d(u)
  );
}
var Z,
  Q = e(() => {
    ((Z = a()), w(), _(), y(), h(), i());
  });
export {
  J as a,
  R as c,
  z as d,
  A as f,
  k as h,
  W as i,
  L as l,
  E as m,
  X as n,
  B as o,
  F as p,
  Y as r,
  U as s,
  Q as t,
  I as u,
};
//# sourceMappingURL=use-workspace-users-BlyDr3Cd.js.map
