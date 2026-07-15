import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  AY as r,
  Aw as i,
  C0 as a,
  DK as o,
  Do as s,
  Eo as c,
  GO as l,
  I2 as u,
  KJ as d,
  Kq as f,
  L2 as p,
  Mq as m,
  Nq as h,
  PB as g,
  Qs as _,
  Ry as v,
  S0 as y,
  SI as b,
  SK as x,
  SV as S,
  Vy as C,
  WO as w,
  YY as T,
  Yq as E,
  Zq as D,
  _0 as O,
  _Y as k,
  aG as A,
  aJ as j,
  bK as M,
  cY as N,
  cp as P,
  hJ as ee,
  iL as te,
  jw as F,
  k2 as I,
  kK as L,
  lp as R,
  mJ as z,
  mY as B,
  qJ as V,
  rG as H,
  rL as U,
  sJ as ne,
  sL as re,
  sY as W,
  tJ as ie,
  vI as ae,
  wV as oe,
  yY as G,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  ft as se,
  lt as ce,
  st as le,
  ut as ue,
} from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as de, t as fe } from "./codex-avatar-CKI2lXCG.js";
import {
  B as pe,
  z as me,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  ft as he,
  pt as ge,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Sr as _e,
  xr as ve,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  a as ye,
  d as be,
  o as xe,
  p as Se,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import { a as Ce } from "./avatar-overlay-mascot-size-De0Pyk6W.js";
import {
  f as we,
  p as Te,
  v as K,
  y as Ee,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as De,
  r as Oe,
  t as ke,
} from "./recommended-skill-statsig-overrides-mRzU-_fE.js";
import {
  a as Ae,
  o as je,
} from "./app-initial~app-main~pets-settings~appearance-settings~import-settings~general-settings-DSr8wghM.js";
import {
  n as Me,
  t as Ne,
} from "./app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings-CXdZ45KF.js";
import {
  n as Pe,
  t as q,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { r as Fe, t as Ie } from "./custom-avatars-query-DA8PgfmT.js";
import { n as Le, t as Re } from "./use-avatar-options-DJjmZ6SL.js";
import { n as ze, t as Be } from "./settings-loading-row-DPKmhlyp.js";
function Ve(e) {
  let t = (0, He.c)(12),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = d(
        `flex shrink-0 items-center justify-center overflow-hidden rounded-lg`,
        o,
        r,
      )),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c = n?.id ?? `default`,
    l = n?.assetRef,
    u = a === `sm` ? `scale-[0.42]` : `scale-75`,
    f = n?.spriteVersionNumber,
    p = n?.spritesheetUrl,
    m;
  t[3] !== l || t[4] !== u || t[5] !== f || t[6] !== p
    ? ((m = (0, J.jsx)(fe, {
        assetRef: l,
        className: u,
        spriteVersionNumber: f,
        spritesheetUrl: p,
      })),
      (t[3] = l),
      (t[4] = u),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== s || t[9] !== c || t[10] !== m
      ? ((h = (0, J.jsx)(`div`, {
          className: s,
          "data-avatar-id": c,
          children: m,
        })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = m),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
var He,
  J,
  Ue = e(() => {
    ((He = u()), V(), de(), (J = I()));
  });
function We(e) {
  let t = (0, Ge.c)(21),
    { avatarDirectory: n } = e,
    r = y(W),
    i = G(),
    a;
  t[0] !== i || t[1] !== r
    ? ((a = () => {
        r.get(x).danger(
          i.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === o
    ? (s = t[4])
    : ((s = (e) => {
        e.success || o();
      }),
      (t[3] = o),
      (t[4] = s));
  let l;
  t[5] !== o || t[6] !== s
    ? ((l = { onSuccess: s, onError: o }), (t[5] = o), (t[6] = s), (t[7] = l))
    : (l = t[7]);
  let { mutate: u } = ne(`open-file`, l),
    d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(k, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = (0, Y.jsx)(`span`, {
        className: `font-mono text-xs [text-wrap:wrap] break-all`,
        children: n,
      })),
      (t[9] = n),
      (t[10] = f));
  let p;
  t[11] !== n || t[12] !== u
    ? ((p = () => {
        u({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = u),
      (t[13] = p))
    : (p = t[13]);
  let h, g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(k, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (g = (0, Y.jsx)(c, { className: `icon-2xs` })),
      (t[14] = h),
      (t[15] = g))
    : ((h = t[14]), (g = t[15]));
  let _;
  t[16] === p
    ? (_ = t[17])
    : ((_ = (0, Y.jsxs)(m, {
        color: `ghost`,
        onClick: p,
        size: `toolbar`,
        children: [h, g],
      })),
      (t[16] = p),
      (t[17] = _));
  let v;
  return (
    t[18] !== f || t[19] !== _
      ? ((v = (0, Y.jsx)(K, { label: d, description: f, control: _ })),
        (t[18] = f),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var Ge,
  Y,
  Ke = e(() => {
    ((Ge = u()), O(), B(), h(), M(), s(), N(), Ee(), j(), (Y = I()));
  });
function qe(e) {
  let t = (0, X.c)(9),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
      onUpgradeCustomAvatar: l,
    } = e,
    u = r === void 0 ? ue : r,
    d = i === void 0 ? !1 : i,
    f = a === void 0 ? !1 : a,
    p = o === void 0 ? !1 : o,
    m;
  return (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== d ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
      ? ((m = (0, Z.jsx)(P, {
          electron: !0,
          children: (0, Z.jsx)(Je, {
            avatarDirectory: n,
            avatarOptions: u,
            isCreatingCustomAvatar: d,
            isCustomAvatarLoadError: f,
            isLoadingCustomAvatars: p,
            onCreateCustomAvatar: s,
            onRefreshCustomAvatars: c,
            onUpgradeCustomAvatar: l,
          }),
        })),
        (t[0] = n),
        (t[1] = u),
        (t[2] = d),
        (t[3] = f),
        (t[4] = p),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = m))
      : (m = t[8]),
    m
  );
}
function Je(e) {
  let t = (0, X.c)(86),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: s,
      isLoadingCustomAvatars: c,
      onCreateCustomAvatar: l,
      onRefreshCustomAvatars: u,
      onUpgradeCustomAvatar: d,
    } = e,
    f = G(),
    p = a(me),
    h = A(`188145323`),
    g = A(`3563904085`),
    _ = a(b),
    v = y(W),
    x = D(T.petSize),
    { selectedAvatar: S, setSelectedAvatarId: C } = ce(r),
    w = ((x - 80) / 144) * 100,
    O,
    j,
    M,
    N,
    P,
    F,
    I;
  if (
    t[0] !== r ||
    t[1] !== p ||
    t[2] !== f ||
    t[3] !== i ||
    t[4] !== h ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== d ||
    t[10] !== _ ||
    t[11] !== S ||
    t[12] !== C
  ) {
    let e = r.filter(Xe),
      n = r.filter(Ye),
      a;
    t[20] === f
      ? (a = t[21])
      : ((a = f.formatMessage({
          id: `settings.pets.custom.create.label`,
          defaultMessage: `Create your own pet`,
          description: `Accessible label for creating a custom Codex pet from settings`,
        })),
        (t[20] = f),
        (t[21] = a));
    let g = a,
      v;
    t[22] === f
      ? (v = t[23])
      : ((v = f.formatMessage({
          id: `settings.pets.refresh`,
          defaultMessage: `Refresh`,
          description: `Button label to refresh custom pets from local manifests`,
        })),
        (t[22] = f),
        (t[23] = v));
    let y = v,
      b;
    t[24] === _
      ? (b = t[25])
      : ((b = (e, t) => {
          _.logProductEvent(
            te,
            Ne({
              action: e,
              selectedAvatar: t,
              source: re.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
            }),
          );
        }),
        (t[24] = _),
        (t[25] = b));
    let x = b,
      w;
    t[26] !== C || t[27] !== x
      ? ((w = (e) => {
          (C(e.id), x(U.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[26] = C),
        (t[27] = x),
        (t[28] = w))
      : (w = t[28]);
    let T = w;
    M = q;
    let E;
    t[29] !== u || t[30] !== y
      ? ((E = u
          ? (0, Z.jsx)(o, {
              delayDuration: 0,
              tooltipContent: y,
              children: (0, Z.jsx)(m, {
                "aria-label": y,
                color: `ghost`,
                onClick: u,
                size: `icon`,
                children: (0, Z.jsx)(he, { className: `icon-xs` }),
              }),
            })
          : null),
        (t[29] = u),
        (t[30] = y),
        (t[31] = E))
      : (E = t[31]);
    let D;
    t[32] !== g || t[33] !== i || t[34] !== l || t[35] !== S || t[36] !== x
      ? ((D = l
          ? (0, Z.jsx)(m, {
              "aria-label": g,
              color: `secondary`,
              loading: i,
              onClick: () => {
                (x(U.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, S),
                  l());
              },
              size: `toolbar`,
              children: (0, Z.jsx)(k, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[32] = g),
        (t[33] = i),
        (t[34] = l),
        (t[35] = S),
        (t[36] = x),
        (t[37] = D))
      : (D = t[37]);
    let A;
    t[38] !== p || t[39] !== S || t[40] !== x
      ? ((A = () => {
          (x(
            p
              ? U.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : U.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            S,
          ),
            ee.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[38] = p),
        (t[39] = S),
        (t[40] = x),
        (t[41] = A))
      : (A = t[41]);
    let L;
    t[42] === p
      ? (L = t[43])
      : ((L = p
          ? (0, Z.jsx)(k, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, Z.jsx)(k, {
              id: `settings.personalization.pets.openPet`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating pet overlay`,
            })),
        (t[42] = p),
        (t[43] = L));
    let R;
    (t[44] !== A || t[45] !== L
      ? ((R = (0, Z.jsx)(m, {
          color: `secondary`,
          onClick: A,
          size: `toolbar`,
          children: L,
        })),
        (t[44] = A),
        (t[45] = L),
        (t[46] = R))
      : (R = t[46]),
      t[47] !== D || t[48] !== R || t[49] !== E
        ? ((I = (0, Z.jsx)(q.Header, {
            actions: (0, Z.jsxs)(Z.Fragment, { children: [E, D, R] }),
            title: null,
          })),
          (t[47] = D),
          (t[48] = R),
          (t[49] = E),
          (t[50] = I))
        : (I = t[50]),
      (j = q.Content),
      (O = we),
      t[51] !== s || t[52] !== c
        ? ((N = c
            ? (0, Z.jsx)(Be, {
                children: (0, Z.jsx)(k, {
                  id: `settings.pets.loadingCustom`,
                  defaultMessage: `Loading custom pets…`,
                  description: `Message shown while loading custom pet manifests`,
                }),
              })
            : s
              ? (0, Z.jsx)(K, {
                  label: (0, Z.jsx)(k, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  }),
                  control: null,
                })
              : null),
          (t[51] = s),
          (t[52] = c),
          (t[53] = N))
        : (N = t[53]));
    let z;
    (t[54] !== h || t[55] !== d || t[56] !== T || t[57] !== S
      ? ((z = (e) =>
          (0, Z.jsx)(
            Ze,
            {
              avatar: e,
              isSelected: e.id === S.id,
              onSelectAvatar: T,
              onUpgradeAvatar: h ? d : void 0,
            },
            e.id,
          )),
        (t[54] = h),
        (t[55] = d),
        (t[56] = T),
        (t[57] = S),
        (t[58] = z))
      : (z = t[58]),
      (P = n.map(z)));
    let B;
    (t[59] !== T || t[60] !== S
      ? ((B = (e) =>
          (0, Z.jsx)(
            Ze,
            { avatar: e, isSelected: e.id === S.id, onSelectAvatar: T },
            e.id,
          )),
        (t[59] = T),
        (t[60] = S),
        (t[61] = B))
      : (B = t[61]),
      (F = e.map(B)),
      (t[0] = r),
      (t[1] = p),
      (t[2] = f),
      (t[3] = i),
      (t[4] = h),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = _),
      (t[11] = S),
      (t[12] = C),
      (t[13] = O),
      (t[14] = j),
      (t[15] = M),
      (t[16] = N),
      (t[17] = P),
      (t[18] = F),
      (t[19] = I));
  } else
    ((O = t[13]),
      (j = t[14]),
      (M = t[15]),
      (N = t[16]),
      (P = t[17]),
      (F = t[18]),
      (I = t[19]));
  let L;
  t[62] === n
    ? (L = t[63])
    : ((L = n == null ? null : (0, Z.jsx)(We, { avatarDirectory: n })),
      (t[62] = n),
      (t[63] = L));
  let R;
  t[64] !== O || t[65] !== N || t[66] !== P || t[67] !== F || t[68] !== L
    ? ((R = (0, Z.jsxs)(O, { children: [N, P, F, L] })),
      (t[64] = O),
      (t[65] = N),
      (t[66] = P),
      (t[67] = F),
      (t[68] = L),
      (t[69] = R))
    : (R = t[69]);
  let z;
  t[70] !== j || t[71] !== R
    ? ((z = (0, Z.jsx)(j, { children: R })),
      (t[70] = j),
      (t[71] = R),
      (t[72] = z))
    : (z = t[72]);
  let B;
  t[73] !== M || t[74] !== I || t[75] !== z
    ? ((B = (0, Z.jsxs)(M, { children: [I, z] })),
      (t[73] = M),
      (t[74] = I),
      (t[75] = z),
      (t[76] = B))
    : (B = t[76]);
  let V;
  t[77] !== h || t[78] !== g || t[79] !== x || t[80] !== w || t[81] !== v
    ? ((V =
        g || h
          ? (0, Z.jsxs)(q, {
              children: [
                (0, Z.jsx)(q.Header, {
                  title: (0, Z.jsx)(k, {
                    id: `settings.pets.appearance.title`,
                    defaultMessage: `Appearance`,
                    description: `Heading above pet appearance settings`,
                  }),
                }),
                (0, Z.jsx)(q.Content, {
                  children: (0, Z.jsx)(we, {
                    children: (0, Z.jsx)(K, {
                      label: (0, Z.jsx)(`label`, {
                        htmlFor: `pet-size`,
                        children: (0, Z.jsx)(k, {
                          id: `settings.pets.size`,
                          defaultMessage: `Pet size`,
                          description: `Label for the floating pet size setting`,
                        }),
                      }),
                      description: (0, Z.jsx)(k, {
                        id: `settings.pets.size.description`,
                        defaultMessage: `Adjust the size of your pet`,
                        description: `Description for the floating pet size setting`,
                      }),
                      control: (0, Z.jsx)(`input`, {
                        id: `pet-size`,
                        className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
                        max: 224,
                        min: 80,
                        onInput: (e) => {
                          E(v, T.petSize, Number(e.currentTarget.value));
                        },
                        style: {
                          background: `linear-gradient(to right, var(--color-token-primary) ${w}%, var(--color-token-border-light) ${w}%)`,
                        },
                        type: `range`,
                        value: x,
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[77] = h),
      (t[78] = g),
      (t[79] = x),
      (t[80] = w),
      (t[81] = v),
      (t[82] = V))
    : (V = t[82]);
  let H;
  return (
    t[83] !== B || t[84] !== V
      ? ((H = (0, Z.jsxs)(Z.Fragment, { children: [B, V] })),
        (t[83] = B),
        (t[84] = V),
        (t[85] = H))
      : (H = t[85]),
    H
  );
}
function Ye(e) {
  return e.id.startsWith(`custom:`);
}
function Xe(e) {
  return !e.id.startsWith(`custom:`);
}
function Ze(e) {
  let t = (0, X.c)(22),
    { avatar: n, isSelected: r, onSelectAvatar: i, onUpgradeAvatar: a } = e,
    s = G(),
    c = n.upgradeDirectoryPath,
    l;
  t[0] !== n.displayName || t[1] !== s
    ? ((l = s.formatMessage(
        {
          id: `settings.pets.custom.update.accessibleLabel`,
          defaultMessage: `Update {petName}`,
          description: `Accessible label for updating an outdated custom pet`,
        },
        { petName: n.displayName },
      )),
      (t[0] = n.displayName),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] === n
    ? (d = t[4])
    : ((d = (0, Z.jsx)(Ve, { avatar: n })), (t[3] = n), (t[4] = d));
  let f;
  t[5] !== n.displayName || t[6] !== a || t[7] !== u || t[8] !== c
    ? ((f =
        c != null && a != null
          ? (0, Z.jsx)(o, {
              delayDuration: 0,
              tooltipContent: u,
              children: (0, Z.jsx)(m, {
                "aria-label": u,
                color: `accent`,
                onClick: () => {
                  a(n.displayName, c);
                },
                size: `toolbar`,
                children: (0, Z.jsx)(k, {
                  id: `settings.pets.custom.update`,
                  defaultMessage: `Update`,
                  description: `Button label for updating an outdated custom pet`,
                }),
              }),
            })
          : null),
      (t[5] = n.displayName),
      (t[6] = a),
      (t[7] = u),
      (t[8] = c),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== n || t[11] !== r || t[12] !== i
    ? ((p = r
        ? (0, Z.jsx)(m, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, Z.jsx)(k, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, Z.jsx)(m, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, Z.jsx)(k, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let h;
  t[14] !== f || t[15] !== p
    ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [f, p] })),
      (t[14] = f),
      (t[15] = p),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== n.description ||
    t[18] !== n.displayName ||
    t[19] !== d ||
    t[20] !== h
      ? ((g = (0, Z.jsx)(K, {
          icon: d,
          label: n.displayName,
          description: n.description,
          control: h,
        })),
        (t[17] = n.description),
        (t[18] = n.displayName),
        (t[19] = d),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
var X,
  Z,
  Qe = e(() => {
    ((X = u()),
      g(),
      O(),
      r(),
      B(),
      Ue(),
      Me(),
      Ce(),
      pe(),
      h(),
      L(),
      R(),
      ge(),
      z(),
      ae(),
      N(),
      f(),
      Pe(),
      ze(),
      Ee(),
      Te(),
      H(),
      se(),
      le(),
      Ke(),
      (Z = I()));
  });
async function $e(e) {
  return `${await tt(e)} create a pet based on what you know about me`;
}
async function et({
  forceReloadSkills: e,
  petDirectoryPath: t,
  petName: n,
  skillStatsigOverride: r,
}) {
  return `${await tt({ forceReloadSkills: e, skillStatsigOverride: r })} upgrade the existing pet at ${l(n.replaceAll(/[\r\n]+/g, ` `), t)} to the latest pet version with looking directions`;
}
async function tt({ forceReloadSkills: e, skillStatsigOverride: t }) {
  let n = await ie(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: oe,
      installRoot: null,
      repoPath: rt,
      skillId: nt,
      skillStatsigOverride: t,
      source: `bundled`,
    },
  });
  if (!n.success || n.destination == null)
    throw Error(n.error ?? `Unable to install Hatch Pet`);
  return (await e(), v({ name: nt, path: je(n.destination, `SKILL.md`) }));
}
var nt,
  rt,
  it = e(() => {
    (w(),
      Ae(),
      S(),
      C(),
      j(),
      (nt = `hatch-pet`),
      (rt = `skills/.curated/hatch-pet`));
  });
function at() {
  let e = (0, st.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(P, { electron: !0, children: (0, Q.jsx)(ot, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ot() {
  let e = y(W),
    [t, r] = (0, ct.useState)(!1),
    { avatarDirectory: i, avatarOptions: a, isError: o, isLoading: s } = Le(),
    c = F(),
    l = _e(),
    { forceReload: u } = n(void 0, oe),
    d = ke(Oe(), `hatch-pet`),
    f = async () => {
      await u();
    },
    p = async () => {
      r(!0);
      try {
        l({
          prefillPrompt: await $e({
            forceReloadSkills: f,
            skillStatsigOverride: d,
          }),
        });
      } catch {
        e.get(x).danger(
          (0, Q.jsx)(k, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the Hatch Pet skill cannot be installed`,
          }),
        );
      } finally {
        r(!1);
      }
    },
    m = async (t, n) => {
      try {
        l({
          prefillPrompt: await et({
            forceReloadSkills: f,
            petDirectoryPath: n,
            petName: t,
            skillStatsigOverride: d,
          }),
        });
      } catch {
        e.get(x).danger(
          (0, Q.jsx)(k, {
            id: `settings.pets.upgradeCustom.error`,
            defaultMessage: `Unable to start pet upgrade`,
            description: `Toast shown when the Hatch Pet skill cannot be installed for a pet upgrade`,
          }),
        );
      }
    };
  return (0, Q.jsx)(qe, {
    avatarDirectory: i,
    avatarOptions: a,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: o,
    isLoadingCustomAvatars: s,
    onCreateCustomAvatar: () => {
      p();
    },
    onRefreshCustomAvatars: () => {
      c(Ie);
    },
    onUpgradeCustomAvatar: (e, t) => {
      m(e, t);
    },
  });
}
var st,
  ct,
  Q,
  lt = e(() => {
    ((st = u()),
      O(),
      (ct = t(p(), 1)),
      B(),
      M(),
      R(),
      ve(),
      i(),
      N(),
      S(),
      De(),
      _(),
      Qe(),
      it(),
      Fe(),
      Re(),
      (Q = I()));
  });
function ut() {
  let e = (0, dt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(be, {
          title: (0, $.jsx)(ye, { slug: `pets` }),
          children: (0, $.jsx)(at, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var dt, $;
e(() => {
  ((dt = u()), lt(), Se(), xe(), ($ = I()));
})();
export { ut as PetsSettings };
//# sourceMappingURL=pets-settings-BL87cdYS.js.map
