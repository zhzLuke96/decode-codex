import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as n,
  Df as r,
  Ds as i,
  Fq as a,
  I2 as o,
  If as s,
  KJ as c,
  L2 as l,
  Lf as u,
  Mq as d,
  Nq as f,
  Of as p,
  Pq as m,
  RK as h,
  S0 as g,
  T2 as _,
  To as v,
  Ts as y,
  _0 as b,
  _Y as x,
  _f as S,
  aG as C,
  bf as w,
  cY as T,
  gf as E,
  hf as D,
  js as O,
  k2 as k,
  kf as ee,
  mY as A,
  mf as te,
  pY as j,
  pf as M,
  qJ as N,
  rG as P,
  sY as F,
  wo as I,
  x2 as ne,
  y2 as L,
  zK as R,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $c as z,
  Qc as B,
  Zc as V,
  cl as H,
  el as U,
  ll as re,
  sl as W,
  ul as G,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  o as K,
  r as q,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as J,
  p as Y,
  v as ie,
  y as ae,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as oe,
  rt as se,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as ce,
  r as le,
  t as ue,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~chatgpt-conversation-page~br~ohspfd3n-hZg4nEp3.js";
import {
  i as de,
  r as fe,
} from "./app-initial~app-main~pull-request-route~new-thread-panel-page~onboarding-page~projects-inde~oqn7zfcy-C31oGzdP.js";
var X,
  pe,
  me = e(() => {
    (t(l()),
      (X = k()),
      (pe = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, X.jsx)(`circle`, { cx: 12, cy: 7, r: 1, fill: `currentColor` }),
            (0, X.jsx)(`circle`, {
              cx: 7.5,
              cy: 11,
              r: 1,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`circle`, {
              cx: 11.5,
              cy: 15,
              r: 1,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`circle`, {
              cx: 16,
              cy: 12.5,
              r: 1,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  he,
  ge,
  _e = e(() => {
    (t(l()),
      (he = k()),
      (ge = (e) =>
        (0, he.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, he.jsx)(`path`, {
              d: `M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, he.jsx)(`circle`, {
              cx: 6.5,
              cy: 5.5,
              r: 0.75,
              fill: `currentColor`,
            }),
            (0, he.jsx)(`path`, {
              d: `M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }),
  Z,
  ve = e(() => {
    (A(),
      (Z = j({
        cookies: {
          id: `settings.browserUse.profileImport.cookies`,
          defaultMessage: `Cookies`,
          description: `Label for importing cookies from a browser profile`,
        },
        passwords: {
          id: `settings.browserUse.profileImport.passwords`,
          defaultMessage: `Passwords`,
          description: `Label for importing passwords from a browser profile`,
        },
        title: {
          id: `settings.browserUse.profileImport.title`,
          defaultMessage: `Import from your browser`,
          description: `Title for the browser profile import dialog`,
        },
      })));
  });
function ye(e) {
  let t = (0, Q.c)(60),
    {
      cookieAccessFailureMessage: n,
      elevatedChromeConsent: r,
      hasImportError: i,
      importCookies: a,
      importPasswords: o,
      isImporting: s,
      isLoadingProfiles: c,
      showCloseBrowserGuidance: l,
      profilePickerOpen: u,
      profiles: f,
      profilesHaveError: m,
      requiresElevatedChromeConsent: h,
      result: g,
      selectedProfile: _,
      onCancel: v,
      onElevatedChromeConsentChange: y,
      onImport: b,
      onImportCookiesChange: C,
      onImportPasswordsChange: w,
      onProfilePickerOpenChange: T,
      onSelectProfile: O,
    } = e;
  if (g != null) {
    let e;
    return (
      t[0] !== n || t[1] !== v || t[2] !== g || t[3] !== l
        ? ((e = (0, $.jsx)(Ee, {
            cookieAccessFailureMessage: n,
            showCloseBrowserGuidance: l,
            result: g,
            onDone: v,
          })),
          (t[0] = n),
          (t[1] = v),
          (t[2] = g),
          (t[3] = l),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let k = _?.hasCookies === !0 && a,
    A = _?.hasPasswords === !0 && o,
    j = _ == null || (!k && !A) || (h && !r),
    N;
  t[5] === b
    ? (N = t[6])
    : ((N = (e) => {
        (e.preventDefault(), b());
      }),
      (t[5] = b),
      (t[6] = N));
  let P;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(ee, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(x, { ...Z.title }),
        }),
      })),
      (t[7] = P))
    : (P = t[7]);
  let F;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(x, { ...Z.title })), (t[8] = F))
    : (F = t[8]);
  let I;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsxs)(S, {
        children: [
          P,
          (0, $.jsx)(E, {
            title: F,
            subtitle: (0, $.jsx)(p, {
              asChild: !0,
              children: (0, $.jsx)(`div`, {
                children: (0, $.jsx)(x, {
                  id: `settings.browserUse.profileImport.subtitle`,
                  defaultMessage: `Choose data to bring over to the built-in browser`,
                  description: `Subtitle for the browser data import dialog`,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[9] = I))
    : (I = t[9]);
  let ne = s || !f?.length,
    L;
  t[10] !== c ||
  t[11] !== T ||
  t[12] !== O ||
  t[13] !== u ||
  t[14] !== f ||
  t[15] !== _ ||
  t[16] !== ne
    ? ((L = (0, $.jsx)(be, {
        disabled: ne,
        isLoading: c,
        open: u,
        profiles: f,
        selectedProfile: _,
        onOpenChange: T,
        onSelectProfile: O,
      })),
      (t[10] = c),
      (t[11] = T),
      (t[12] = O),
      (t[13] = u),
      (t[14] = f),
      (t[15] = _),
      (t[16] = ne),
      (t[17] = L))
    : (L = t[17]);
  let R;
  t[18] === f?.length
    ? (R = t[19])
    : ((R =
        f?.length === 0 &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (t[18] = f?.length),
      (t[19] = R));
  let z;
  t[20] !== _ || t[21] !== l
    ? ((z =
        l &&
        _ != null &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: _.appName },
          }),
        })),
      (t[20] = _),
      (t[21] = l),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] !== k ||
  t[24] !== A ||
  t[25] !== s ||
  t[26] !== C ||
  t[27] !== w ||
  t[28] !== _
    ? ((B =
        _ != null &&
        (0, $.jsxs)(J, {
          children: [
            (0, $.jsx)(Se, {
              available: _.hasPasswords,
              checked: A,
              disabled: s,
              kind: `passwords`,
              onChange: w,
            }),
            (0, $.jsx)(Se, {
              available: _.hasCookies,
              checked: k,
              disabled: s,
              kind: `cookies`,
              onChange: C,
            }),
          ],
        })),
      (t[23] = k),
      (t[24] = A),
      (t[25] = s),
      (t[26] = C),
      (t[27] = w),
      (t[28] = _),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== r || t[31] !== s || t[32] !== y || t[33] !== h
    ? ((V = h && (0, $.jsx)(Ce, { checked: r, disabled: s, onChange: y })),
      (t[30] = r),
      (t[31] = s),
      (t[32] = y),
      (t[33] = h),
      (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] !== i || t[36] !== m
    ? ((H = (0, $.jsx)(we, { importFailed: i, profileDiscoveryFailed: m })),
      (t[35] = i),
      (t[36] = m),
      (t[37] = H))
    : (H = t[37]);
  let U;
  t[38] !== V ||
  t[39] !== H ||
  t[40] !== L ||
  t[41] !== R ||
  t[42] !== z ||
  t[43] !== B
    ? ((U = (0, $.jsxs)(S, {
        className: `gap-3`,
        children: [L, R, z, B, V, H],
      })),
      (t[38] = V),
      (t[39] = H),
      (t[40] = L),
      (t[41] = R),
      (t[42] = z),
      (t[43] = B),
      (t[44] = U))
    : (U = t[44]);
  let re;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(x, {
        id: `settings.browserUse.profileImport.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the browser data import dialog`,
      })),
      (t[45] = re))
    : (re = t[45]);
  let W;
  t[46] !== s || t[47] !== v
    ? ((W = (0, $.jsx)(d, {
        color: `secondary`,
        disabled: s,
        onClick: v,
        type: `button`,
        children: re,
      })),
      (t[46] = s),
      (t[47] = v),
      (t[48] = W))
    : (W = t[48]);
  let G;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(x, {
        id: `settings.browserUse.profileImport.import`,
        defaultMessage: `Import`,
        description: `Button that starts importing browser data`,
      })),
      (t[49] = G))
    : (G = t[49]);
  let K;
  t[50] !== j || t[51] !== s
    ? ((K = (0, $.jsx)(d, {
        color: `primary`,
        disabled: j,
        loading: s,
        type: `submit`,
        children: G,
      })),
      (t[50] = j),
      (t[51] = s),
      (t[52] = K))
    : (K = t[52]);
  let q;
  t[53] !== W || t[54] !== K
    ? ((q = (0, $.jsx)(S, {
        children: (0, $.jsxs)(D, { className: M, children: [W, K] }),
      })),
      (t[53] = W),
      (t[54] = K),
      (t[55] = q))
    : (q = t[55]);
  let Y;
  return (
    t[56] !== N || t[57] !== U || t[58] !== q
      ? ((Y = (0, $.jsxs)(te, {
          as: `form`,
          onSubmit: N,
          children: [I, U, q],
        })),
        (t[56] = N),
        (t[57] = U),
        (t[58] = q),
        (t[59] = Y))
      : (Y = t[59]),
    Y
  );
}
function be(e) {
  let t = (0, Q.c)(27),
    {
      disabled: n,
      isLoading: r,
      open: a,
      profiles: o,
      selectedProfile: s,
      onOpenChange: l,
      onSelectProfile: u,
    } = e,
    d;
  t[0] === s ? (d = t[1]) : ((d = s ? Ne(s) : null), (t[0] = s), (t[1] = d));
  let f = d,
    p;
  t[2] === s ? (p = t[3]) : ((p = s ? Pe(s) : void 0), (t[2] = s), (t[3] = p));
  let m = p,
    g = o?.length === 1,
    _ = g || void 0,
    v = g && `pointer-events-none`,
    b;
  t[4] === v
    ? (b = t[5])
    : ((b = c(`min-w-0 flex-1`, v)), (t[4] = v), (t[5] = b));
  let S = g ? `hidden` : void 0,
    C = g ? void 0 : n,
    w = g ? -1 : void 0,
    T;
  t[6] !== r || t[7] !== s
    ? ((T = (0, $.jsx)(xe, { isLoading: r, selectedProfile: s })),
      (t[6] = r),
      (t[7] = s),
      (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] !== m ||
  t[10] !== _ ||
  t[11] !== b ||
  t[12] !== S ||
  t[13] !== C ||
  t[14] !== w ||
  t[15] !== T
    ? ((E = (0, $.jsx)(q, {
        "aria-disabled": _,
        "aria-label": m,
        className: b,
        chevronClassName: S,
        disabled: C,
        tabIndex: w,
        children: T,
      })),
      (t[9] = m),
      (t[10] = _),
      (t[11] = b),
      (t[12] = S),
      (t[13] = C),
      (t[14] = w),
      (t[15] = T),
      (t[16] = E))
    : (E = t[16]);
  let D = E,
    O;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(`span`, {
        className: `shrink-0 text-sm text-token-description-foreground`,
        children: (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.from`,
          defaultMessage: `From`,
          description: `Label before the browser profile selector`,
        }),
      })),
      (t[17] = O))
    : (O = t[17]);
  let k;
  return (
    t[18] !== n ||
    t[19] !== l ||
    t[20] !== u ||
    t[21] !== a ||
    t[22] !== o ||
    t[23] !== f ||
    t[24] !== g ||
    t[25] !== D
      ? ((k = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            O,
            g
              ? D
              : (0, $.jsx)(y, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: a,
                  triggerButton: D,
                  onOpenChange: l,
                  children: (0, $.jsx)(i.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: o?.map((e) => {
                      let t = Ne(e);
                      return (0, $.jsx)(
                        i.Item,
                        {
                          "aria-label": Pe(e),
                          RightIcon: t === f ? h : void 0,
                          onSelect: () => u(e),
                          children: (0, $.jsx)(je, { profile: e }),
                        },
                        t,
                      );
                    }),
                  }),
                }),
          ],
        })),
        (t[18] = n),
        (t[19] = l),
        (t[20] = u),
        (t[21] = a),
        (t[22] = o),
        (t[23] = f),
        (t[24] = g),
        (t[25] = D),
        (t[26] = k))
      : (k = t[26]),
    k
  );
}
function xe(e) {
  let t = (0, Q.c)(4),
    { isLoading: n, selectedProfile: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(m, { className: `icon-2xs` }),
              (0, $.jsx)(x, {
                id: `settings.browserUse.profileImport.loadingProfiles`,
                defaultMessage: `Loading profiles…`,
                description: `Placeholder shown while importable browser profiles load`,
              }),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.noProfiles`,
            defaultMessage: `No profiles found`,
            description: `Placeholder shown when no importable browser profiles are found`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(je, { profile: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Se(e) {
  let t = (0, Q.c)(16),
    { available: n, checked: r, disabled: i, kind: a, onChange: o } = e,
    s = `browser-profile-import-${a}-label`,
    c,
    l;
  if (a === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(x, { ...Z.cookies })), (t[0] = e))
      : (e = t[0]),
      (c = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(pe, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[1] = n))
      : (n = t[1]),
      (l = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(x, { ...Z.passwords })), (t[2] = e))
      : (e = t[2]),
      (c = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(ge, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[3] = n))
      : (n = t[3]),
      (l = n));
  }
  let u;
  t[4] !== c || t[5] !== s
    ? ((u = (0, $.jsx)(`span`, { id: s, children: c })),
      (t[4] = c),
      (t[5] = s),
      (t[6] = u))
    : (u = t[6]);
  let d = !n || i,
    f;
  t[7] !== r || t[8] !== s || t[9] !== o || t[10] !== d
    ? ((f = (0, $.jsx)(se, {
        "aria-labelledby": s,
        checked: r,
        disabled: d,
        onChange: o,
      })),
      (t[7] = r),
      (t[8] = s),
      (t[9] = o),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== l || t[13] !== u || t[14] !== f
      ? ((p = (0, $.jsx)(ie, { icon: l, label: u, control: f })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Ce(e) {
  let t = (0, Q.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`p`, {
        className: `font-medium text-token-text-primary`,
        children: (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.windowsChrome.title`,
          defaultMessage: `Administrator approval required`,
          description: `Title for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`p`, {
        className: `text-token-description-foreground`,
        children: (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let c;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((c = (0, $.jsx)(s, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.windowsChrome.consent`,
          defaultMessage: `I understand the app will request administrator approval to import this Chrome data`,
          description: `Consent label for elevated Windows Chrome browser data import`,
        }),
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] === c
      ? (u = t[8])
      : ((u = (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, $.jsxs)(`label`, {
              className: `relative flex cursor-interaction items-start gap-2`,
              children: [c, l],
            }),
          ],
        })),
        (t[7] = c),
        (t[8] = u)),
    u
  );
}
function we(e) {
  let t = (0, Q.c)(2),
    { importFailed: n, profileDiscoveryFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Te, {
            children: (0, $.jsx)(x, {
              id: `settings.browserUse.profileImport.profilesError`,
              defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
              description: `Error shown when browser profiles cannot be loaded for import`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Te, {
            children: (0, $.jsx)(x, {
              id: `settings.browserUse.profileImport.error`,
              defaultMessage: `We couldn't import all of this browser data. Try again`,
              description: `Error shown when browser profile import fails`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  return null;
}
function Te(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`p`, {
          className: `px-3 text-sm text-token-error-foreground`,
          role: `alert`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ee(e) {
  let t = (0, Q.c)(40),
    {
      cookieAccessFailureMessage: n,
      showCloseBrowserGuidance: r,
      result: i,
      onDone: a,
    } = e,
    o = i.cookies?.status === `failed_to_copy`,
    s;
  t[0] === i.cookies
    ? (s = t[1])
    : ((s = Fe(i.cookies)), (t[0] = i.cookies), (t[1] = s));
  let c = s,
    l =
      c &&
      ((i.cookies?.imported ?? 0) > 0 ||
        i.cookies?.status === `partial-success`),
    u = i.passwords?.profile,
    f = i.passwords?.account,
    m,
    h;
  t[2] !== i.passwords || t[3] !== u || t[4] !== f
    ? ((m = [i.passwords, u, f]),
      (h = m.some(Fe)),
      (t[2] = i.passwords),
      (t[3] = u),
      (t[4] = f),
      (t[5] = m),
      (t[6] = h))
    : ((m = t[5]), (h = t[6]));
  let g = h,
    _ = m.some(Oe),
    v;
  t[7] !== g || t[8] !== m
    ? ((v = g && m.some(De)), (t[7] = g), (t[8] = m), (t[9] = v))
    : (v = t[9]);
  let y = v,
    b = c || g,
    C;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(ee, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(x, { ...Ie.complete }),
        }),
      })),
      (t[10] = C))
    : (C = t[10]);
  let w = b ? `sr-only` : void 0,
    T;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(x, { ...Ie.complete })), (t[11] = T))
    : (T = t[11]);
  let O;
  t[12] === b
    ? (O = t[13])
    : ((O = (0, $.jsx)(p, {
        asChild: !0,
        children: (0, $.jsx)(`div`, {
          children: b
            ? (0, $.jsx)(x, {
                id: `settings.browserUse.profileImport.partialDescription`,
                defaultMessage: `Review the import status for each browser data type`,
                description: `Accessible description for a browser data import with one or more failed data types`,
              })
            : (0, $.jsx)(x, {
                id: `settings.browserUse.profileImport.completeDescription`,
                defaultMessage: `Your data is now available in the built-in browser`,
                description: `Description shown after browser data import completes`,
              }),
        }),
      })),
      (t[12] = b),
      (t[13] = O));
  let k;
  t[14] !== w || t[15] !== O
    ? ((k = (0, $.jsxs)(S, {
        children: [
          C,
          (0, $.jsx)(E, { subtitleClassName: w, title: T, subtitle: O }),
        ],
      })),
      (t[14] = w),
      (t[15] = O),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== _ || t[18] !== g || t[19] !== y || t[20] !== i.passwords
    ? ((A =
        i.passwords != null &&
        (0, $.jsx)(Me, {
          failureMessage: g
            ? (0, $.jsx)(Ae, { accessFailed: _, partiallyFailed: y })
            : void 0,
          kind: `passwords`,
        })),
      (t[17] = _),
      (t[18] = g),
      (t[19] = y),
      (t[20] = i.passwords),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== o ||
  t[23] !== n ||
  t[24] !== c ||
  t[25] !== l ||
  t[26] !== i.cookies ||
  t[27] !== i.source ||
  t[28] !== r
    ? ((j =
        i.cookies != null &&
        (0, $.jsx)(Me, {
          failureMessage: c
            ? (0, $.jsx)(ke, {
                accessFailed: o,
                showCloseBrowserGuidance: r,
                message: n,
                partiallyFailed: l,
                source: i.source,
              })
            : void 0,
          kind: `cookies`,
        })),
      (t[22] = o),
      (t[23] = n),
      (t[24] = c),
      (t[25] = l),
      (t[26] = i.cookies),
      (t[27] = i.source),
      (t[28] = r),
      (t[29] = j))
    : (j = t[29]);
  let N;
  t[30] !== A || t[31] !== j
    ? ((N = (0, $.jsx)(S, { children: (0, $.jsxs)(J, { children: [A, j] }) })),
      (t[30] = A),
      (t[31] = j),
      (t[32] = N))
    : (N = t[32]);
  let P;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(x, {
        id: `settings.browserUse.profileImport.done`,
        defaultMessage: `Done`,
        description: `Button that closes the completed browser data import dialog`,
      })),
      (t[33] = P))
    : (P = t[33]);
  let F;
  t[34] === a
    ? (F = t[35])
    : ((F = (0, $.jsx)(S, {
        children: (0, $.jsx)(D, {
          className: M,
          expandSingleButton: !1,
          children: (0, $.jsx)(d, {
            color: `primary`,
            onClick: a,
            type: `button`,
            children: P,
          }),
        }),
      })),
      (t[34] = a),
      (t[35] = F));
  let I;
  return (
    t[36] !== k || t[37] !== N || t[38] !== F
      ? ((I = (0, $.jsxs)(te, { children: [k, N, F] })),
        (t[36] = k),
        (t[37] = N),
        (t[38] = F),
        (t[39] = I))
      : (I = t[39]),
    I
  );
}
function De(e) {
  return (
    (e?.imported ?? 0) > 0 ||
    e?.status === `success` ||
    e?.status === `partial-success`
  );
}
function Oe(e) {
  return e?.status === `failed_to_copy`;
}
function ke(e) {
  let t = (0, Q.c)(7),
    {
      accessFailed: n,
      showCloseBrowserGuidance: r,
      message: i,
      partiallyFailed: a,
      source: o,
    } = e;
  if (n) {
    if (i != null) {
      let e;
      return (
        t[0] === i
          ? (e = t[1])
          : ((e = (0, $.jsx)($.Fragment, { children: i })),
            (t[0] = i),
            (t[1] = e)),
        e
      );
    }
    if (!r) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(x, {
              id: `settings.browserUse.profileImport.cookieAccessError`,
              defaultMessage: `ChatGPT couldn’t access this profile’s cookies. A device security policy may be blocking access`,
              description: `Error shown when device security may have blocked access to cookies during browser profile import`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    switch (o) {
      case `chrome`: {
        let e;
        return (
          t[3] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(x, {
                id: `settings.browserUse.profileImport.chromeCookieAccessError`,
                defaultMessage: `ChatGPT couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access`,
                description: `Error shown when Chrome or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[3] = e))
            : (e = t[3]),
          e
        );
      }
      case `atlas`: {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(x, {
                id: `settings.browserUse.profileImport.atlasCookieAccessError`,
                defaultMessage: `ChatGPT couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access`,
                description: `Error shown when Atlas or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
    }
  }
  if (a) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.cookiesPartialError`,
            defaultMessage: `Some cookies couldn’t be imported`,
            description: `Error shown when some cookies could not be imported from a browser profile`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let s;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Ae(e) {
  let t = (0, Q.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.passwordsPartialError`,
            defaultMessage: `Some passwords couldn’t be imported`,
            description: `Error shown when some passwords could not be imported from a browser profile`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x, {
            id: `settings.browserUse.profileImport.passwordAccessError`,
            defaultMessage: `ChatGPT couldn’t access this profile’s passwords. A device security policy may be blocking access`,
            description: `Error shown when device security may have blocked access to passwords during browser profile import`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(x, {
          id: `settings.browserUse.profileImport.passwordsError`,
          defaultMessage: `Passwords couldn’t be imported`,
          description: `Error shown when passwords could not be imported from a browser profile`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function je(e) {
  let t = (0, Q.c)(10),
    { profile: n } = e,
    r;
  bb0: switch (n.source) {
    case `atlas`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`img`, {
            alt: ``,
            className: `size-4 shrink-0 rounded-[22%]`,
            src: z,
          })),
          (t[0] = e))
        : (e = t[0]),
        (r = e));
      break bb0;
    }
    case `chrome`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(V, { className: `size-4 shrink-0` })), (t[1] = e))
        : (e = t[1]),
        (r = e));
    }
  }
  let i;
  t[2] === n.appName
    ? (i = t[3])
    : ((i = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-primary`,
        children: n.appName,
      })),
      (t[2] = n.appName),
      (t[3] = i));
  let a = n.profileName || n.profileDirectoryName,
    o;
  t[4] === a
    ? (o = t[5])
    : ((o = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-tertiary`,
        children: a,
      })),
      (t[4] = a),
      (t[5] = o));
  let s;
  return (
    t[6] !== r || t[7] !== i || t[8] !== o
      ? ((s = (0, $.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [r, i, o],
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Me(e) {
  let t = (0, Q.c)(12),
    { failureMessage: n, kind: r } = e,
    i,
    a;
  if (r === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(pe, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (i = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(x, { ...Z.cookies })), (t[1] = n))
      : (n = t[1]),
      (a = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ge, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (i = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(x, { ...Z.passwords })), (t[3] = n))
      : (n = t[3]),
      (a = n));
  }
  let o, s;
  t[4] === n
    ? ((o = t[5]), (s = t[6]))
    : ((o =
        n == null
          ? (0, $.jsx)(I, { className: `size-5 text-token-text-primary` })
          : (0, $.jsx)(fe, {
              className: `size-5 text-token-error-foreground`,
            })),
      (s =
        n == null
          ? void 0
          : (0, $.jsx)(`span`, {
              className: `text-token-error-foreground`,
              role: `alert`,
              children: n,
            })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s));
  let c;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== s
      ? ((c = (0, $.jsx)(ie, {
          control: o,
          description: s,
          icon: i,
          label: a,
        })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Ne(e) {
  return `${e.source}:${e.profilePath}`;
}
function Pe(e) {
  let t = e.profileName || e.profileDirectoryName;
  return `${e.appName} ${t}`;
}
function Fe(e) {
  return (
    (e?.failed ?? 0) > 0 ||
    e?.error != null ||
    (e?.status != null && e.status !== `success`)
  );
}
var Q,
  $,
  Ie,
  Le = e(() => {
    ((Q = o()),
      N(),
      A(),
      U(),
      f(),
      u(),
      n(),
      w(),
      O(),
      a(),
      oe(),
      v(),
      R(),
      me(),
      B(),
      _e(),
      de(),
      ae(),
      K(),
      Y(),
      ve(),
      ($ = k()),
      (Ie = j({
        complete: {
          id: `settings.browserUse.profileImport.complete`,
          defaultMessage: `Import complete`,
          description: `Title shown after browser data import completes`,
        },
      })));
  });
function Re(e) {
  let t = (0, Ve.c)(61),
    { entryPoint: n, onClose: i, service: a } = e,
    o = g(F),
    s = C(`1834314516`),
    [c, l] = (0, He.useState)(``),
    [u, d] = (0, He.useState)(!0),
    [f, p] = (0, He.useState)(!0),
    [m, h] = (0, He.useState)(null),
    v;
  t[0] === a ? (v = t[1]) : ((v = W(a, !0)), (t[0] = a), (t[1] = v));
  let y = _(v),
    b;
  t[2] === a ? (b = t[3]) : ((b = (e) => re(a, e)), (t[2] = a), (t[3] = b));
  let x, S;
  t[4] !== n || t[5] !== o
    ? ((x = (e, t) => {
        ce(o, n, t);
      }),
      (S = (e, t) => {
        ce(o, n, t, e);
      }),
      (t[4] = n),
      (t[5] = o),
      (t[6] = x),
      (t[7] = S))
    : ((x = t[6]), (S = t[7]));
  let w;
  t[8] !== b || t[9] !== x || t[10] !== S
    ? ((w = { mutationFn: b, onError: x, onSuccess: S }),
      (t[8] = b),
      (t[9] = x),
      (t[10] = S),
      (t[11] = w))
    : (w = t[11]);
  let T = ne(w),
    E = y.data,
    D;
  t[12] !== E || t[13] !== c
    ? ((D = E?.find((e) => Be(e) === c) ?? H(E ?? [])[0] ?? E?.[0] ?? null),
      (t[12] = E),
      (t[13] = c),
      (t[14] = D))
    : (D = t[14]);
  let O = D,
    k = O?.hasCookies === !0 && u,
    ee = O?.hasPasswords === !0 && f,
    A =
      typeof document < `u` &&
      document.documentElement.dataset.codexOs === `win32`,
    te =
      typeof document < `u` &&
      document.documentElement.dataset.codexOs === `darwin`,
    j = A && O?.source === `chrome`,
    M;
  t[15] === O
    ? (M = t[16])
    : ((M = O ? Be(O) : null), (t[15] = O), (t[16] = M));
  let N = M,
    P = N != null && m === N,
    I = T.data ?? null,
    L,
    R;
  (t[17] !== s || t[18] !== i
    ? ((L = () => {
        s || i();
      }),
      (R = [s, i]),
      (t[17] = s),
      (t[18] = i),
      (t[19] = L),
      (t[20] = R))
    : ((L = t[19]), (R = t[20])),
    (0, He.useEffect)(L, R));
  let z;
  t[21] !== T.isPending || t[22] !== i
    ? ((z = () => {
        T.isPending || i();
      }),
      (t[21] = T.isPending),
      (t[22] = i),
      (t[23] = z))
    : (z = t[23]);
  let B = z,
    V;
  t[24] === B
    ? (V = t[25])
    : ((V = (e) => {
        e || B();
      }),
      (t[24] = B),
      (t[25] = V));
  let U = !T.isPending && I == null,
    G;
  t[26] === I ? (G = t[27]) : ((G = void 0), (t[26] = I), (t[27] = G));
  let K;
  t[28] === N
    ? (K = t[29])
    : ((K = (e) => {
        h(e ? N : null);
      }),
      (t[28] = N),
      (t[29] = K));
  let q;
  t[30] !== n ||
  t[31] !== k ||
  t[32] !== T ||
  t[33] !== ee ||
  t[34] !== j ||
  t[35] !== o ||
  t[36] !== O
    ? ((q = () => {
        if (O == null) return;
        let e = ze(O, k, ee, j);
        (le(o, n, e), T.mutate(e));
      }),
      (t[30] = n),
      (t[31] = k),
      (t[32] = T),
      (t[33] = ee),
      (t[34] = j),
      (t[35] = o),
      (t[36] = O),
      (t[37] = q))
    : (q = t[37]);
  let J;
  t[38] === T
    ? (J = t[39])
    : ((J = (e) => {
        (l(Be(e)), h(null), T.reset());
      }),
      (t[38] = T),
      (t[39] = J));
  let Y;
  t[40] !== B ||
  t[41] !== P ||
  t[42] !== u ||
  t[43] !== T.isError ||
  t[44] !== T.isPending ||
  t[45] !== f ||
  t[46] !== E ||
  t[47] !== y.isError ||
  t[48] !== y.isLoading ||
  t[49] !== j ||
  t[50] !== I ||
  t[51] !== O ||
  t[52] !== G ||
  t[53] !== K ||
  t[54] !== q ||
  t[55] !== J
    ? ((Y = (0, Ue.jsx)(ye, {
        cookieAccessFailureMessage: G,
        elevatedChromeConsent: P,
        hasImportError: T.isError,
        importCookies: u,
        importPasswords: f,
        isImporting: T.isPending,
        isLoadingProfiles: y.isLoading,
        showCloseBrowserGuidance: te,
        profiles: E,
        profilesHaveError: y.isError,
        requiresElevatedChromeConsent: j,
        result: I,
        selectedProfile: O,
        onCancel: B,
        onElevatedChromeConsentChange: K,
        onImport: q,
        onImportCookiesChange: d,
        onImportPasswordsChange: p,
        onSelectProfile: J,
      })),
      (t[40] = B),
      (t[41] = P),
      (t[42] = u),
      (t[43] = T.isError),
      (t[44] = T.isPending),
      (t[45] = f),
      (t[46] = E),
      (t[47] = y.isError),
      (t[48] = y.isLoading),
      (t[49] = j),
      (t[50] = I),
      (t[51] = O),
      (t[52] = G),
      (t[53] = K),
      (t[54] = q),
      (t[55] = J),
      (t[56] = Y))
    : (Y = t[56]);
  let ie;
  return (
    t[57] !== V || t[58] !== U || t[59] !== Y
      ? ((ie = (0, Ue.jsx)(r, {
          open: !0,
          onOpenChange: V,
          showDialogClose: U,
          size: `narrow`,
          children: Y,
        })),
        (t[57] = V),
        (t[58] = U),
        (t[59] = Y),
        (t[60] = ie))
      : (ie = t[60]),
    ie
  );
}
function ze(e, t, n, r) {
  let i = {
    source: e.source,
    profilePath: e.profilePath,
    importCookies: t,
    importPasswords: n,
  };
  return r ? { ...i, allowElevatedChromeDecryption: !0 } : i;
}
function Be(e) {
  return `${e.source}:${e.profilePath}`;
}
var Ve, He, Ue;
e(() => {
  ((Ve = o()),
    L(),
    b(),
    (He = t(l(), 1)),
    n(),
    T(),
    Le(),
    P(),
    ue(),
    G(),
    (Ue = k()));
})();
export { Re as BrowserProfileImportDialogModal };
//# sourceMappingURL=browser-profile-import-dialog-BltwkN73.js.map
