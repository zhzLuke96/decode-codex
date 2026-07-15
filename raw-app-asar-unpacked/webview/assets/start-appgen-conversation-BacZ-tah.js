import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Ax as r,
  BX as i,
  DK as a,
  Ds as o,
  GO as s,
  I2 as c,
  JA as l,
  KJ as u,
  L2 as d,
  Mq as ee,
  Mx as f,
  Nq as p,
  Oa as m,
  Oy as te,
  P$ as h,
  S as g,
  S0 as ne,
  Sf as _,
  Ts as re,
  Ty as v,
  WO as ie,
  _ as y,
  _0 as b,
  _Y as x,
  aG as ae,
  b as oe,
  bk as se,
  cY as S,
  cj as ce,
  dN as C,
  g as le,
  hJ as w,
  js as T,
  k2 as E,
  kK as D,
  ka as O,
  mJ as ue,
  mN as de,
  mY as k,
  qJ as A,
  rG as j,
  sY as fe,
  vu as pe,
  wf as me,
  xk as M,
  yY as he,
  yu as N,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Oc as ge,
  bc as P,
  wc as F,
  yc as _e,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  In as I,
  Ln as L,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Ds as R,
  Os as z,
  Xt as B,
  Yt as ve,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  c as ye,
  l as be,
  u as V,
} from "./app-initial~app-main~appgen-settings-page~page~appgen-library-page~appgen-page~appgen-setti~ogh9jurw-BWN-1S2Y.js";
import { n as H, t as xe } from "./trending-topics-5Ta0Nt_z.js";
import { n as U, t as Se } from "./appgen-share-dialog-BeUfcVRv.js";
function W(e) {
  let t = (0, J.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a =
      i === `list`
        ? `col-span-full grid-cols-subgrid p-3`
        : `grid-rows-[auto_auto] border border-token-border-light bg-token-bg-fog`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(
        `relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-token-list-hover-background/50`,
        a,
        n,
      )),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, Y.jsx)(`div`, { className: o, ...r })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function G(e) {
  let t = (0, J.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, viewMode: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === `list` ? `h-[50px] w-20` : `aspect-square w-full`,
    s;
  t[5] !== r || t[6] !== o
    ? ((s = u(`relative shrink-0 overflow-hidden`, o, r)),
      (t[5] = r),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== n || t[9] !== i || t[10] !== s
      ? ((c = (0, Y.jsx)(`div`, { className: s, ...i, children: n })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function K(e) {
  let t = (0, J.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i === `list` ? `text-sm leading-5` : `text-xs leading-[18px]`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(`truncate font-medium text-token-foreground`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, Y.jsx)(`div`, { className: o, ...r })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function q(e) {
  let t = (0, J.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = u(`text-xs leading-[18px] text-token-text-secondary`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Y.jsx)(`div`, { className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ce(e) {
  let t = (0, J.c)(5),
    { actions: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pr-2`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, Y.jsxs)(`div`, {
          className: `pointer-events-none relative z-10 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-token-border-light`,
          children: [r, i],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function we(e) {
  let t = (0, J.c)(11),
    { disabled: n, itemName: r, onContinue: i, viewMode: o } = e,
    s = n === void 0 ? !1 : n,
    c = he(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(x, {
        id: `appgenPage.libraryItem.continueChat.tooltip`,
        defaultMessage: `Continue task`,
        description: `Tooltip for continuing work on a Library item in task`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== c || t[2] !== r
    ? ((u = c.formatMessage(
        {
          id: `appgenPage.libraryItem.continueChat`,
          defaultMessage: `Continue task for {itemName}`,
          description: `Accessible label for continuing work on a Library item in task`,
        },
        { itemName: r },
      )),
      (t[1] = c),
      (t[2] = r),
      (t[3] = u))
    : (u = t[3]);
  let d = o === `grid` ? `ghost` : `ghostTertiary`,
    f = o === `grid` ? `toolbar` : `composer`,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Y.jsx)(R, { "aria-hidden": !0, className: `icon-xs` })),
      (t[4] = p))
    : (p = t[4]);
  let m;
  return (
    t[5] !== s || t[6] !== i || t[7] !== u || t[8] !== d || t[9] !== f
      ? ((m = (0, Y.jsx)(a, {
          tooltipContent: l,
          children: (0, Y.jsx)(ee, {
            "aria-label": u,
            color: d,
            disabled: s,
            size: f,
            uniform: !0,
            onClick: i,
            children: p,
          }),
        })),
        (t[5] = s),
        (t[6] = i),
        (t[7] = u),
        (t[8] = d),
        (t[9] = f),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function Te(e) {
  let t = (0, J.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, hideWhenCompact: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = (i === void 0 ? !1 : i) && `[@container_(max-width:620px)]:hidden`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(`pl-4 text-xs leading-[18px] text-token-text-secondary`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, Y.jsx)(`div`, { className: o, ...r })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Ee(e) {
  let t = (0, J.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = u(
        `pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Y.jsx)(`div`, { className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var J,
  Y,
  De,
  Oe = e(() => {
    ((J = c()),
      A(),
      k(),
      p(),
      D(),
      z(),
      (Y = E()),
      (De = `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`));
  });
function ke(e) {
  let t = (0, je.c)(3),
    { disabledBy: n } = e;
  if (n === `openai`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(x, {
            id: `appgenPage.disabledByOpenAI.tooltip`,
            defaultMessage: `Your site may violate OpenAI policies. <learnMore>Learn more</learnMore>`,
            description: `Tooltip explaining why OpenAI disabled a site in the Sites list and linking to the ChatGPT Sites Terms`,
            values: { learnMore: Ae },
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n !== `workspace_admin`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(x, {
            id: `appgenPage.disabledUnknown.tooltip`,
            defaultMessage: `Disabled`,
            description: `Tooltip for a disabled site whose disabling actor is unavailable`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(x, {
          id: `appgenPage.disabled.tooltip`,
          defaultMessage: `Disabled by an admin`,
          description: `Tooltip explaining why a workspace admin disabled a site in the Sites list`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Ae(e) {
  return (0, X.jsx)(
    m,
    {
      className: `text-token-text-link-foreground underline decoration-current underline-offset-2`,
      href: Ne,
      initiator: `sites_library`,
      children: Me.Children.toArray(e),
    },
    `sites-terms-link`,
  );
}
var je,
  Me,
  X,
  Ne,
  Pe = e(() => {
    ((je = c()),
      (Me = t(d(), 1)),
      k(),
      O(),
      (X = E()),
      (Ne = `https://openai.com/policies/chatgpt-sites-terms/`));
  });
function Fe(e) {
  let t = (0, Ie.c)(79),
    {
      disabled: n,
      disabledBy: r,
      onEdit: i,
      projectId: s,
      projectTitle: c,
      surface: l,
      viewMode: u,
    } = e,
    d = n === void 0 ? !1 : n,
    f = he(),
    p = ce(),
    m = ne(fe),
    te = ae(`262557526`),
    h;
  t[0] !== f || t[1] !== c
    ? ((h = f.formatMessage(
        {
          id: `appgenPage.actions.more`,
          defaultMessage: `More actions for {siteTitle}`,
          description: `Accessible label for opening the actions menu for a site`,
        },
        { siteTitle: c },
      )),
      (t[0] = f),
      (t[1] = c),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] !== d || t[4] !== r
    ? ((_ = d ? (0, Z.jsx)(ke, { disabledBy: r }) : null),
      (t[3] = d),
      (t[4] = r),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    ie = d && r === `openai`,
    y;
  t[6] === v
    ? (y = t[7])
    : ((y =
        v ??
        (0, Z.jsx)(x, {
          id: `appgenPage.edit.tooltip`,
          defaultMessage: `Edit`,
          description: `Tooltip for starting a new conversation to edit a site`,
        })),
      (t[6] = v),
      (t[7] = y));
  let b;
  t[8] !== f || t[9] !== c
    ? ((b = f.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[8] = f),
      (t[9] = c),
      (t[10] = b))
    : (b = t[10]);
  let oe = u === `grid` ? `ghost` : `ghostTertiary`,
    se = u === `grid` ? `toolbar` : `composer`,
    S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(ve, { "aria-hidden": !0, className: `icon-xs` })),
      (t[11] = S))
    : (S = t[11]);
  let C;
  t[12] !== d || t[13] !== i || t[14] !== b || t[15] !== oe || t[16] !== se
    ? ((C = (0, Z.jsx)(ee, {
        "aria-label": b,
        color: oe,
        disabled: d,
        size: se,
        uniform: !0,
        onClick: i,
        children: S,
      })),
      (t[12] = d),
      (t[13] = i),
      (t[14] = b),
      (t[15] = oe),
      (t[16] = se),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] !== C || t[19] !== ie || t[20] !== y
    ? ((w = (0, Z.jsx)(a, { interactive: ie, tooltipContent: y, children: C })),
      (t[18] = C),
      (t[19] = ie),
      (t[20] = y),
      (t[21] = w))
    : (w = t[21]);
  let T = w,
    E = d && r === `openai`,
    D;
  t[22] === v
    ? (D = t[23])
    : ((D =
        v ??
        (0, Z.jsx)(x, {
          id: `appgenPage.settings.tooltip`,
          defaultMessage: `Settings`,
          description: `Tooltip for opening site settings from the sites list`,
        })),
      (t[22] = v),
      (t[23] = D));
  let O;
  t[24] !== f || t[25] !== c
    ? ((O = f.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[24] = f),
      (t[25] = c),
      (t[26] = O))
    : (O = t[26]);
  let ue = u === `grid` ? `ghost` : `ghostTertiary`,
    de = u === `grid` ? `toolbar` : `composer`,
    k;
  t[27] !== p || t[28] !== s
    ? ((k = () => {
        p(be(s));
      }),
      (t[27] = p),
      (t[28] = s),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(pe, { "aria-hidden": !0, className: `icon-xs` })),
      (t[30] = A))
    : (A = t[30]);
  let j;
  t[31] !== d || t[32] !== O || t[33] !== ue || t[34] !== de || t[35] !== k
    ? ((j = (0, Z.jsx)(ee, {
        "aria-label": O,
        color: ue,
        disabled: d,
        size: de,
        uniform: !0,
        onClick: k,
        children: A,
      })),
      (t[31] = d),
      (t[32] = O),
      (t[33] = ue),
      (t[34] = de),
      (t[35] = k),
      (t[36] = j))
    : (j = t[36]);
  let M;
  t[37] !== E || t[38] !== D || t[39] !== j
    ? ((M = (0, Z.jsx)(a, { interactive: E, tooltipContent: D, children: j })),
      (t[37] = E),
      (t[38] = D),
      (t[39] = j),
      (t[40] = M))
    : (M = t[40]);
  let N = M,
    ge = d && r === `openai`,
    P;
  t[41] === v
    ? (P = t[42])
    : ((P =
        v ??
        (0, Z.jsx)(x, {
          id: `appgenPage.share.tooltip`,
          defaultMessage: `Share`,
          description: `Tooltip for opening site sharing settings`,
        })),
      (t[41] = v),
      (t[42] = P));
  let F =
      u === `list`
        ? `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`
        : void 0,
    I;
  t[43] !== f || t[44] !== c
    ? ((I = f.formatMessage(
        {
          id: `appgenPage.share`,
          defaultMessage: `Share {siteTitle}`,
          description: `Accessible label for opening site sharing settings from the sites list`,
        },
        { siteTitle: c },
      )),
      (t[43] = f),
      (t[44] = c),
      (t[45] = I))
    : (I = t[45]);
  let L = u === `grid` ? `ghost` : `outline`,
    R = u === `grid`,
    z;
  t[46] !== s || t[47] !== m
    ? ((z = () => me(m, Se, { projectId: s })),
      (t[46] = s),
      (t[47] = m),
      (t[48] = z))
    : (z = t[48]);
  let B;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(_e, { "aria-hidden": !0, className: `icon-xs` })),
      (t[49] = B))
    : (B = t[49]);
  let V;
  t[50] === u
    ? (V = t[51])
    : ((V =
        u === `list`
          ? (0, Z.jsx)(`span`, {
              className: `[@container_(max-width:420px)]:hidden`,
              children: (0, Z.jsx)(x, {
                id: `appgenPage.share.label`,
                defaultMessage: `Share`,
                description: `Button label for opening site sharing settings`,
              }),
            })
          : null),
      (t[50] = u),
      (t[51] = V));
  let H;
  t[52] !== d ||
  t[53] !== F ||
  t[54] !== I ||
  t[55] !== L ||
  t[56] !== R ||
  t[57] !== z ||
  t[58] !== V
    ? ((H = (0, Z.jsxs)(ee, {
        className: F,
        "aria-label": I,
        color: L,
        disabled: d,
        size: `toolbar`,
        uniform: R,
        onClick: z,
        children: [B, V],
      })),
      (t[52] = d),
      (t[53] = F),
      (t[54] = I),
      (t[55] = L),
      (t[56] = R),
      (t[57] = z),
      (t[58] = V),
      (t[59] = H))
    : (H = t[59]);
  let U;
  t[60] !== ge || t[61] !== P || t[62] !== H
    ? ((U = (0, Z.jsx)(a, { interactive: ge, tooltipContent: P, children: H })),
      (t[60] = ge),
      (t[61] = P),
      (t[62] = H),
      (t[63] = U))
    : (U = t[63]);
  let W;
  t[64] !== te ||
  t[65] !== d ||
  t[66] !== T ||
  t[67] !== g ||
  t[68] !== p ||
  t[69] !== i ||
  t[70] !== s ||
  t[71] !== N ||
  t[72] !== l
    ? ((W = te
        ? d
          ? (0, Z.jsx)(le, { disabled: !0, label: g })
          : (0, Z.jsxs)(re, {
              align: `end`,
              contentWidth: `menu`,
              triggerButton: (0, Z.jsx)(le, { label: g }),
              children: [
                (0, Z.jsx)(o.Item, {
                  LeftIcon: ve,
                  onSelect: i,
                  children: (0, Z.jsx)(x, {
                    id: `appgenPage.edit.label`,
                    defaultMessage: `Edit`,
                    description: `Menu item for starting a new conversation to edit a site`,
                  }),
                }),
                (0, Z.jsx)(o.Item, {
                  LeftIcon: xe,
                  onSelect: () => {
                    p(ye(s));
                  },
                  children: (0, Z.jsx)(x, {
                    id: `appgenPage.analytics.label`,
                    defaultMessage: `Analytics`,
                    description: `Menu item for opening site analytics`,
                  }),
                }),
                (0, Z.jsx)(o.Item, {
                  LeftIcon: pe,
                  onSelect: () => {
                    p(be(s));
                  },
                  children: (0, Z.jsx)(x, {
                    id: `appgenPage.settings.label`,
                    defaultMessage: `Settings`,
                    description: `Menu item for opening site settings`,
                  }),
                }),
              ],
            })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [l === `sites` ? T : N, l === `sites` ? N : T],
          })),
      (t[64] = te),
      (t[65] = d),
      (t[66] = T),
      (t[67] = g),
      (t[68] = p),
      (t[69] = i),
      (t[70] = s),
      (t[71] = N),
      (t[72] = l),
      (t[73] = W))
    : (W = t[73]);
  let G;
  t[74] !== U || t[75] !== W
    ? ((G = (0, Z.jsxs)(Z.Fragment, { children: [U, W] })),
      (t[74] = U),
      (t[75] = W),
      (t[76] = G))
    : (G = t[76]);
  let K = G;
  if (u === `grid`) return K;
  let q;
  return (
    t[77] === K
      ? (q = t[78])
      : ((q = (0, Z.jsx)(Ee, { children: K })), (t[77] = K), (t[78] = q)),
    q
  );
}
var Ie,
  Z,
  Le = e(() => {
    ((Ie = c()),
      b(),
      k(),
      l(),
      p(),
      T(),
      _(),
      y(),
      D(),
      B(),
      H(),
      N(),
      P(),
      S(),
      j(),
      Pe(),
      Oe(),
      V(),
      U(),
      (Z = E()));
  }),
  Q,
  Re,
  ze = e(() => {
    (t(d()),
      (Q = E()),
      (Re = (e) =>
        (0, Q.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Q.jsx)(`rect`, {
              width: 80,
              height: 50,
              fill: `var(--color-token-main-surface-primary)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Q.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, Q.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M57.5 7H60.5`,
              stroke: `var(--color-token-border)`,
              strokeLinecap: `round`,
            }),
            (0, Q.jsx)(`rect`, {
              x: 64,
              y: 7,
              width: 2,
              height: 2,
              rx: 0.5,
              fill: `var(--color-token-border)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z`,
              fill: `var(--color-token-border)`,
            }),
            (0, Q.jsx)(`path`, {
              d: `M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z`,
              fill: `var(--color-token-border)`,
            }),
          ],
        })));
  }),
  $,
  Be,
  Ve = e(() => {
    (t(d()),
      ($ = E()),
      (Be = (e) =>
        (0, $.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, $.jsx)(`rect`, {
              width: 80,
              height: 50,
              fill: `var(--color-token-main-surface-primary)`,
            }),
            (0, $.jsx)(`rect`, {
              opacity: 0.7,
              x: 5,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FF5F57`,
            }),
            (0, $.jsx)(`rect`, {
              opacity: 0.7,
              x: 11,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FEBC2E`,
            }),
            (0, $.jsx)(`rect`, {
              opacity: 0.7,
              x: 17,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#28C840`,
            }),
            (0, $.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-token-primary)`,
            }),
            (0, $.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, $.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-token-primary)`,
              fillOpacity: 0.78,
            }),
            (0, $.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-token-primary)`,
            }),
          ],
        })));
  });
function He({
  accessFilter: e,
  cloudFiles: t,
  cloudUploadingFiles: n,
  contentType: r,
  fileFilter: i,
  files: a,
  images: o,
  projects: s,
  searchQuery: c,
}) {
  let l = c.trim().toLowerCase(),
    u = [];
  if (
    (r === `sites` || r === `all`) &&
    (r === `sites` || i === `all`) &&
    s != null
  )
    for (let t of s)
      Je(t, l) &&
        (r !== `sites` || Qe(t, e)) &&
        u.push({
          id: t.id,
          kind: `site`,
          modifiedAt: t.updated_at,
          project: t,
        });
  if ((r === `files` || r === `all`) && a != null) {
    let e = new Set();
    for (let t of a) {
      if (e.has(t.path)) continue;
      e.add(t.path);
      let n = We(t.path);
      n != null &&
        (i === `all` || n === i) &&
        Ye(t, l) &&
        u.push({
          file: t,
          fileType: n,
          id: t.path,
          kind: `file`,
          modifiedAt: t.modifiedAt,
        });
    }
  }
  if ((r === `images` || (r === `all` && i === `all`)) && o != null)
    for (let e of o)
      Xe(e, l) &&
        u.push({
          id: e.path,
          image: e,
          kind: `image`,
          modifiedAt: e.modifiedAt,
        });
  if (n != null)
    for (let e of n) {
      let t = Ge(e);
      Ue({ contentType: r, file: e, fileFilter: i, searchQuery: c }) &&
        u.push({
          file: e,
          fileType: t,
          id: `cloud-upload:${e.id}`,
          kind: `cloud-upload`,
          modifiedAt: e.modifiedAt,
        });
    }
  if (t != null)
    for (let e of t) {
      let t = Ge(e);
      Ke(e, t, r, i) &&
        u.push({
          cloudFile: e,
          fileType: t,
          id: `cloud:${e.id}`,
          kind: `cloud-file`,
          modifiedAt: e.modifiedAt,
        });
    }
  return u.sort(
    (e, t) =>
      Date.parse(t.modifiedAt) - Date.parse(e.modifiedAt) ||
      e.id.localeCompare(t.id),
  );
}
function Ue({ contentType: e, file: t, fileFilter: n, searchQuery: r }) {
  return Ze(t, r.trim().toLowerCase()) && Ke(t, Ge(t), e, n);
}
function We(e) {
  if (M(e)) return `document`;
  switch (r(e)) {
    case `docx`:
      return `document`;
    case `pdf`:
      return `pdf`;
    case `pptx`:
      return `presentation`;
    case `csv`:
    case `tsv`:
    case `xlsx`:
      return `spreadsheet`;
    case `ipynb`:
    case `tex`:
    case null:
      return null;
  }
}
function Ge(e) {
  let t = We(e.name);
  if (t != null) return t;
  switch (e.category) {
    case `audio`:
      return `audio`;
    case `image`:
      return `image`;
    case `other`:
      return `other`;
    case `pdf`:
      return `pdf`;
    case `text`:
      return `text`;
    case `video`:
      return `video`;
  }
}
function Ke(e, t, n, r) {
  return n === `sites`
    ? !1
    : n === `images`
      ? e.category === `image`
      : r === `all`
        ? n === `files`
          ? qe(t)
          : !0
        : t === r;
}
function qe(e) {
  switch (e) {
    case `document`:
    case `pdf`:
    case `presentation`:
    case `spreadsheet`:
      return !0;
    case `audio`:
    case `image`:
    case `other`:
    case `text`:
    case `video`:
      return !1;
  }
}
function Je(e, t) {
  return (
    e.title.toLowerCase().includes(t) ||
    e.slug.toLowerCase().includes(t) ||
    e.description?.toLowerCase().includes(t) === !0
  );
}
function Ye(e, t) {
  return (
    e.name.toLowerCase().includes(t) || e.relativePath.toLowerCase().includes(t)
  );
}
function Xe(e, t) {
  return (
    e.name.toLowerCase().includes(t) || e.relativePath.toLowerCase().includes(t)
  );
}
function Ze(e, t) {
  return t.length === 0 || e.name.toLowerCase().includes(t);
}
function Qe(e, t) {
  if (t === `all`) return !0;
  let { accessMode: n, groupCount: r, userCount: i } = F(e.access_policy),
    a = (n === `admins_only` || n === `custom`) && r === 0 && i === 0;
  return t === `private` ? a : !a;
}
var $e = e(() => {
  (f(), se(), ge());
});
function et(e, t, n, r, a) {
  if (a == null) return;
  let o = e.get(L).formatMessage(
    {
      id: `appgenConversation.editFilePrompt`,
      defaultMessage: `{fileMention} make these changes…`,
      description: `Prompt for continuing work on a Library file in its original task`,
    },
    { fileMention: s(n, r) },
  );
  t(i(h(a)), { state: { prefillPrompt: `${o} ` } });
}
function tt(e, t, n) {
  let r = e.get(L),
    i;
  switch (n.type) {
    case `create-asset`:
      switch (n.assetType) {
        case `document`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.documentPrompt`,
            defaultMessage: `Create a document that …`,
            description: `Prefill prompt for creating a document from the Library`,
          });
          break;
        case `spreadsheet`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.spreadsheetPrompt`,
            defaultMessage: `Create a spreadsheet that …`,
            description: `Prefill prompt for creating a spreadsheet from the Library`,
          });
          break;
        case `presentation`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.presentationPrompt`,
            defaultMessage: `Create a presentation that …`,
            description: `Prefill prompt for creating a presentation from the Library`,
          });
          break;
        case `pdf`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.pdfPrompt`,
            defaultMessage: `Create a PDF that …`,
            description: `Prefill prompt for creating a PDF from the Library`,
          });
          break;
        case `image`:
          i = r.formatMessage({
            id: `appgenPage.createMenu.imagePrompt`,
            defaultMessage: `Create an image of …`,
            description: `Prefill prompt for creating an image from the Library`,
          });
          break;
      }
      break;
    case `create`:
      i = r.formatMessage({
        id: `appgenConversation.createPrompt`,
        defaultMessage: `Create a website that …`,
        description: `Prompt for starting a new site from the Sites page`,
      });
      break;
    case `edit`:
      i = r.formatMessage(
        {
          id: `appgenConversation.editPrompt`,
          defaultMessage: `{siteMention} make these changes…`,
          description: `Prompt for continuing work on an existing site from the Sites page`,
        },
        { siteMention: v({ projectId: n.projectId, title: n.projectTitle }) },
      );
      break;
  }
  let a;
  switch (n.type) {
    case `create`:
      a = oe({ defaultPrompt: i, pluginDisplayName: `Sites`, pluginId: C });
      break;
    case `edit`:
      a = `${i} `;
      break;
    case `create-asset`:
      a = i;
      break;
  }
  (t({ activeProject: null, prefillPrompt: a, startInSidebar: !0 }),
    n.type === `edit` &&
      n.liveUrl != null &&
      w.dispatchMessage(`open-in-browser`, {
        initiator: `sites_library`,
        openTarget: `in-app-browser`,
        source: `manual`,
        url: n.liveUrl,
      }));
}
var nt = e(() => {
  (n(), te(), ie(), I(), ue(), de(), g());
});
export {
  Ee as C,
  K as S,
  Oe as T,
  we as _,
  $e as a,
  G as b,
  Be as c,
  ze as d,
  Fe as f,
  De as g,
  Pe as h,
  He as i,
  Ve as l,
  ke as m,
  nt as n,
  Ue as o,
  Le as p,
  tt as r,
  Je as s,
  et as t,
  Re as u,
  Ce as v,
  Te as w,
  W as x,
  q as y,
};
//# sourceMappingURL=start-appgen-conversation-BacZ-tah.js.map
