import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ds as t,
  I2 as n,
  KJ as r,
  RK as i,
  SV as a,
  Ts as o,
  _Y as s,
  js as c,
  k2 as l,
  mY as u,
  nd as d,
  qJ as f,
  td as p,
  wV as m,
  yY as h,
  zK as g,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  M as _,
  j as v,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  bn as y,
  yn as b,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  o as x,
  r as S,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
function C(e) {
  let n = (0, E.c)(43),
    {
      connectedRemoteConnections: r,
      disabled: a,
      onSelectHost: c,
      remoteConnectionHostIds: l,
      selectedHostId: u,
      align: d,
      contentWidth: f,
      localIcon: p,
      localLabel: g,
      showConnectedIndicator: _,
      triggerClassName: v,
      triggerColor: y,
      useRemoteHostColors: x,
    } = e,
    C = a === void 0 ? !1 : a,
    O = p === void 0 ? b : p,
    k = _ === void 0 ? !1 : _,
    A = x === void 0 ? !0 : x,
    j = h(),
    M;
  n[0] !== r || n[1] !== u
    ? ((M = r.find((e) => e.hostId === u) ?? null),
      (n[0] = r),
      (n[1] = u),
      (n[2] = M))
    : (M = n[2]);
  let N = M,
    P;
  n[3] !== j || n[4] !== g
    ? ((P =
        g ??
        j.formatMessage({
          id: `settings.hostDropdown.local`,
          defaultMessage: `Local`,
          description: `Label for the local host in settings connection dropdowns`,
        })),
      (n[3] = j),
      (n[4] = g),
      (n[5] = P))
    : (P = n[5]);
  let F = P,
    I = N?.displayName ?? F,
    L;
  n[6] === F
    ? (L = n[7])
    : ((L = { hostId: m, displayName: F }), (n[6] = F), (n[7] = L));
  let R;
  n[8] !== r || n[9] !== L
    ? ((R = [L, ...r]), (n[8] = r), (n[9] = L), (n[10] = R))
    : (R = n[10]);
  let z = R,
    B = C ? `hidden` : void 0,
    V;
  n[11] !== O || n[12] !== l || n[13] !== N || n[14] !== A
    ? ((V =
        N == null
          ? (0, D.jsx)(O, {
              className: `icon-xs shrink-0 text-token-foreground`,
            })
          : (0, D.jsx)(T, {
              className: `icon-xs shrink-0`,
              hostId: N.hostId,
              hostIdsForColorAssignment: l,
              useRemoteHostColors: A,
            })),
      (n[11] = O),
      (n[12] = l),
      (n[13] = N),
      (n[14] = A),
      (n[15] = V))
    : (V = n[15]);
  let H;
  n[16] === I
    ? (H = n[17])
    : ((H = (0, D.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: I,
      })),
      (n[16] = I),
      (n[17] = H));
  let U;
  n[18] !== N || n[19] !== k
    ? ((U = N != null && k ? (0, D.jsx)(w, {}) : null),
      (n[18] = N),
      (n[19] = k),
      (n[20] = U))
    : (U = n[20]);
  let W;
  n[21] !== C ||
  n[22] !== V ||
  n[23] !== H ||
  n[24] !== U ||
  n[25] !== B ||
  n[26] !== v ||
  n[27] !== y
    ? ((W = (0, D.jsxs)(S, {
        className: v,
        color: y,
        disabled: C,
        chevronClassName: B,
        children: [V, H, U],
      })),
      (n[21] = C),
      (n[22] = V),
      (n[23] = H),
      (n[24] = U),
      (n[25] = B),
      (n[26] = v),
      (n[27] = y),
      (n[28] = W))
    : (W = n[28]);
  let G = W;
  if (C) return G;
  let K = d ?? `end`,
    q = f ?? `menuWide`,
    J;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, D.jsx)(t.Title, {
        children: (0, D.jsx)(s, {
          id: `settings.hostDropdown.title`,
          defaultMessage: `Host`,
          description: `Title for the Host dropdown shown in settings pages`,
        }),
      })),
      (n[29] = J))
    : (J = n[29]);
  let Y;
  n[30] !== O ||
  n[31] !== z ||
  n[32] !== c ||
  n[33] !== l ||
  n[34] !== u ||
  n[35] !== k ||
  n[36] !== A
    ? ((Y = (0, D.jsx)(t.Section, {
        className: `max-h-40 overflow-y-auto`,
        children: z.map((e) =>
          (0, D.jsx)(
            t.Item,
            {
              RightIcon: e.hostId === u ? i : void 0,
              onSelect: () => {
                c(e.hostId);
              },
              children: (0, D.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  e.hostId === `local`
                    ? (0, D.jsx)(O, { className: `icon-xs shrink-0` })
                    : (0, D.jsx)(T, {
                        className: `icon-xs shrink-0`,
                        hostId: e.hostId,
                        hostIdsForColorAssignment: l,
                        useRemoteHostColors: A,
                      }),
                  (0, D.jsx)(`span`, {
                    className: `truncate`,
                    children: e.displayName,
                  }),
                  e.hostId !== `local` && k ? (0, D.jsx)(w, {}) : null,
                ],
              }),
            },
            e.hostId,
          ),
        ),
      })),
      (n[30] = O),
      (n[31] = z),
      (n[32] = c),
      (n[33] = l),
      (n[34] = u),
      (n[35] = k),
      (n[36] = A),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  return (
    n[38] !== K || n[39] !== q || n[40] !== Y || n[41] !== G
      ? ((X = (0, D.jsxs)(o, {
          align: K,
          contentWidth: q,
          triggerButton: G,
          children: [J, Y],
        })),
        (n[38] = K),
        (n[39] = q),
        (n[40] = Y),
        (n[41] = G),
        (n[42] = X))
      : (X = n[42]),
    X
  );
}
function w() {
  let e = (0, E.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, D.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 shrink-0 rounded-full bg-green-500`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function T(e) {
  let t = (0, E.c)(8),
    {
      className: n,
      hostId: i,
      hostIdsForColorAssignment: a,
      useRemoteHostColors: o,
    } = e;
  if (!o) {
    let e;
    t[0] === n
      ? (e = t[1])
      : ((e = r(n, `text-token-foreground`)), (t[0] = n), (t[1] = e));
    let i;
    return (
      t[2] === e
        ? (i = t[3])
        : ((i = (0, D.jsx)(p, { className: e })), (t[2] = e), (t[3] = i)),
      i
    );
  }
  let s;
  return (
    t[4] !== n || t[5] !== i || t[6] !== a
      ? ((s = (0, D.jsx)(v, {
          className: n,
          hostId: i,
          hostIdsForColorAssignment: a,
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = a),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var E,
  D,
  O = e(() => {
    ((E = n()), f(), u(), c(), _(), g(), d(), y(), a(), x(), (D = l()));
  });
export { O as n, C as t };
//# sourceMappingURL=settings-host-dropdown-B9za80bZ.js.map
