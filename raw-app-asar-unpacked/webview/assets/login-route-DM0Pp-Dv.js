import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  Ao as r,
  Bu as i,
  C0 as a,
  Cp as o,
  Fq as s,
  Gr as c,
  Hf as l,
  I2 as u,
  JA as d,
  KJ as f,
  L2 as p,
  MU as m,
  Mq as h,
  NU as g,
  Nq as _,
  O2 as v,
  PB as y,
  Pq as b,
  RK as x,
  S0 as S,
  SK as C,
  SV as w,
  Sp as T,
  Uf as E,
  WC as D,
  Wr as O,
  _0 as k,
  _D as A,
  _S as j,
  _Y as M,
  aG as N,
  aJ as P,
  bF as F,
  bI as I,
  bK as ee,
  c1 as te,
  cS as L,
  cY as R,
  cj as ne,
  d2 as re,
  dR as ie,
  eG as ae,
  fS as oe,
  gD as se,
  h2 as ce,
  jo as le,
  k2 as z,
  l1 as ue,
  lG as de,
  mD as fe,
  mY as pe,
  nG as me,
  nJ as he,
  pR as ge,
  qJ as _e,
  rG as ve,
  s$ as B,
  sG as ye,
  sY as be,
  tJ as xe,
  uR as V,
  vI as Se,
  vS as Ce,
  wV as we,
  wp as Te,
  xF as Ee,
  xS as De,
  y2 as Oe,
  yS as ke,
  yY as H,
  zK as Ae,
  zu as je,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ar as Me,
  kr as Ne,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as Pe,
  d as Fe,
  i as Ie,
  o as Le,
  p as Re,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~pcx43lpb-BOlhhGyv.js";
import {
  U as ze,
  W as Be,
  X as Ve,
  Y as He,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  a as Ue,
  i as We,
  n as Ge,
  r as Ke,
  t as qe,
} from "./chatgpt-desktop-auth-url-BqAcG710.js";
import {
  i as Je,
  n as Ye,
  r as Xe,
  t as Ze,
} from "./use-ascii-engine-DwI4abET.js";
import { n as Qe, t as $e } from "./onboarding-login-content-BomtP_ej.js";
function et() {
  let e = S(be),
    t = oe(),
    n = ne(),
    r = H(),
    [i, a] = (0, G.useState)(null),
    s = i != null,
    c = De(),
    [l, u] = (0, G.useState)(!1),
    [d, f] = (0, G.useState)(!1),
    [p, m] = (0, G.useState)(null),
    [h, _] = (0, G.useState)(``),
    [v, y] = (0, G.useState)(!1),
    b = (0, G.useRef)(null),
    x = N(`900122030`),
    w = (t) => {
      let n = r.formatMessage(
        {
          id: `codex.signInFailed.message`,
          defaultMessage: `Sign-in failed: {rawMessage}`,
          description: `Sign-in failure toast message with error details`,
        },
        { rawMessage: t },
      );
      e.get(C).warning(n);
    };
  ((0, G.useEffect)(() => {
    l && (b.current?.focus(), b.current?.select());
  }, [l]),
    (0, G.useEffect)(() => {
      let e = !1;
      return (
        (async () => {
          try {
            let t = await xe(`openai-api-key`);
            if (e) return;
            let n = t?.value ?? null;
            (m(n), _((e) => (e.length > 0 ? e : (n ?? ``))));
          } catch {
            e || m(null);
          }
        })(),
        () => {
          e = !0;
        }
      );
    }, []));
  let T = async () => {
      if (s) {
        (i?.abortController.abort(), a(null));
        return;
      }
      let e = new AbortController();
      a({ abortController: e, kind: `browserRedirect` });
      try {
        let { authUrl: r, completion: i } = await Ue({ signal: e.signal });
        r &&
          A({
            href: qe({
              authUrl: r,
              useDesktopAuth: !1,
              useStreamlinedLoginUx: !1,
            }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        let a = await i;
        a.success ? (t(), n(`/first-run`)) : w(B(a.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        w(B(e));
      } finally {
        a(null);
      }
    },
    E = async () => {
      if (!x) return;
      if (s) {
        (i?.abortController.abort(), a(null));
        return;
      }
      let e = new AbortController();
      (f(!0), a({ abortController: e, kind: `deviceCode` }));
      try {
        let {
          verificationUrl: r,
          userCode: i,
          completion: o,
        } = await We({ signal: e.signal });
        if (e.signal.aborted) return;
        (a((t) =>
          t?.abortController === e
            ? { ...t, verificationUrl: r, userCode: i }
            : t,
        ),
          A({
            href: r,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
        let s = await o;
        s.success ? (t(), n(`/first-run`)) : w(B(s.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        w(B(e));
      } finally {
        a(null);
      }
    },
    D = async (t) => {
      if (t.length !== 0)
        try {
          (await je(t),
            e.get(C).success(
              r.formatMessage({
                id: `codex.loggedOut.deviceCode.copySuccess`,
                defaultMessage: `Copied device code`,
                description: `Toast shown after copying the device code`,
              }),
            ));
        } catch {
          e.get(C).warning(
            r.formatMessage({
              id: `codex.loggedOut.deviceCode.copyFailed`,
              defaultMessage: `Could not copy device code`,
              description: `Toast shown when copying the device code fails`,
            }),
          );
        }
    },
    { data: O } = Ce(`show-copilot-login-first`),
    k = async () => {
      try {
        (await Ee(e, `use-copilot-auth-if-available`, !0, {
          throwOnFailure: !0,
        }),
          t(),
          n(`/first-run`));
      } catch (e) {
        w(B(e));
      }
    },
    j = async () => {
      let e = h.trim();
      if (!(!e || v)) {
        y(!0);
        try {
          (await g(`login-with-api-key`, { hostId: we, apiKey: e }),
            t(),
            n(`/first-run`));
        } catch (e) {
          w(B(e));
        } finally {
          y(!1);
        }
      }
    },
    P =
      !c || !O
        ? (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(tt, {
                isPrimary: !0,
                handleChatGptSignIn: T,
                isChatGptSignInPending: s,
              }),
              !s &&
                c &&
                (0, K.jsx)(`div`, {
                  className: `pt-2`,
                  children: (0, K.jsx)(nt, {
                    isPrimary: !1,
                    handleCopilotSignIn: k,
                  }),
                }),
            ],
          })
        : (0, K.jsxs)(K.Fragment, {
            children: [
              !s && (0, K.jsx)(nt, { isPrimary: !0, handleCopilotSignIn: k }),
              (0, K.jsx)(`div`, {
                className: `pt-2`,
                children: (0, K.jsx)(tt, {
                  isPrimary: !1,
                  handleChatGptSignIn: T,
                  isChatGptSignInPending: s,
                }),
              }),
            ],
          }),
    F = i?.kind === `deviceCode` ? i : null;
  return (0, K.jsxs)(`div`, {
    className: `fixed inset-0 overflow-hidden bg-token-side-bar-background`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: (0, K.jsx)(`div`, {
          className: `-ml-6 h-full w-full`,
          style: {
            WebkitMaskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)`,
            maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)`,
            WebkitMaskRepeat: `no-repeat`,
            maskRepeat: `no-repeat`,
            WebkitMaskSize: `100% 100%`,
            maskSize: `100% 100%`,
          },
          children: (0, K.jsx)(dt, {}),
        }),
      }),
      (0, K.jsx)(`div`, {
        className: `relative z-10 flex h-full justify-center px-4 py-6 sm:py-8`,
        children: (0, K.jsxs)(`div`, {
          className: `flex h-full w-full max-w-[360px] flex-col`,
          children: [
            (0, K.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, K.jsx)(`h1`, {
                className: `text-center text-3xl leading-tight font-medium text-token-foreground`,
                children: (0, K.jsx)(M, {
                  id: `codex.loggedOut.title`,
                  defaultMessage: `{appName}`,
                  description: `Title on logged out screen`,
                  values: { appName: o },
                }),
              }),
            }),
            (0, K.jsxs)(`div`, {
              className: `flex min-h-[192px] flex-col justify-end gap-4 pb-2 sm:pb-0`,
              children: [
                !l &&
                  F == null &&
                  (0, K.jsx)(`div`, {
                    className: `flex w-full justify-center`,
                    children: (0, K.jsxs)(`div`, {
                      className: `mx-auto inline-flex w-max flex-col items-stretch`,
                      children: [
                        P,
                        !s &&
                          (0, K.jsx)(at, {
                            setApiKeyValue: _,
                            defaultApiKeyFromEnv: p,
                            setIsApiKeySignInVisible: u,
                          }),
                        !s &&
                          x &&
                          (0, K.jsx)(it, {
                            isVisible: d,
                            onToggle: () => {
                              f((e) => !e);
                            },
                            children: (0, K.jsx)(rt, {
                              handleChatGptDeviceCodeSignIn: E,
                            }),
                          }),
                      ],
                    }),
                  }),
                F != null &&
                  (0, K.jsx)(lt, {
                    verificationUrl: F.verificationUrl ?? ``,
                    userCode: F.userCode ?? ``,
                    onOpenBrowser: () => {
                      let e = F.verificationUrl;
                      e &&
                        A({
                          href: e,
                          initiator: `open_in_browser_bridge`,
                          openTarget: `external-browser`,
                        });
                    },
                    onCopyCode: D,
                    onCancel: () => {
                      (F.abortController.abort(), a(null));
                    },
                  }),
                !s &&
                  l &&
                  (0, K.jsx)(ot, {
                    apiKeyValue: h,
                    setApiKeyValue: _,
                    apiKeyInputRef: b,
                    isApiKeyLoginPending: v,
                    setIsApiKeyLoginPending: y,
                    setIsApiKeySignInVisible: u,
                    handleApiKeySubmit: j,
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function tt(e) {
  let t = (0, W.c)(6),
    { isPrimary: n, handleChatGptSignIn: r, isChatGptSignInPending: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i
        ? (0, K.jsx)(M, {
            id: `codex.loggedOut.signIn.cancel`,
            defaultMessage: `Cancel Sign-in`,
            description: `Cancel button for sign in`,
          })
        : (0, K.jsx)(M, {
            id: `codex.loggedOut.signIn`,
            defaultMessage: `Sign in with ChatGPT`,
            description: `Sign in button text on logged out screen`,
          })),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, K.jsx)(U, { isPrimary: n, onClick: r, children: a })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function nt(e) {
  let t = (0, W.c)(4),
    { isPrimary: n, handleCopilotSignIn: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, K.jsx)(M, {
        id: `codex.loggedOut.signInWithCopilot`,
        defaultMessage: `Sign in with GitHub Copilot`,
        description: `Button label for GitHub Copilot sign-in on logged out screen`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== r || t[2] !== n
      ? ((a = (0, K.jsx)(U, { isPrimary: n, onClick: r, children: i })),
        (t[1] = r),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function rt(e) {
  let t = (0, W.c)(3),
    { handleChatGptDeviceCodeSignIn: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, K.jsx)(M, {
        id: `codex.loggedOut.signInWithDeviceCode`,
        defaultMessage: `Use device code`,
        description: `Secondary button to sign in with a device code`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, K.jsx)(U, { isPrimary: !1, onClick: n, children: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function it(e) {
  let t = (0, W.c)(17),
    { isVisible: n, onToggle: r, children: i } = e,
    a = !n,
    o = n ? `1fr` : `0fr`,
    s = n ? 1 : 0,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { gridTemplateRows: o, opacity: s }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === i
    ? (l = t[4])
    : ((l = (0, K.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, K.jsx)(`div`, { className: `pb-2`, children: i }),
      })),
      (t[3] = i),
      (t[4] = l));
  let u;
  t[5] !== a || t[6] !== c || t[7] !== l
    ? ((u = (0, K.jsx)(`div`, {
        className: `grid transition-[grid-template-rows,opacity] duration-basic ease-out`,
        "aria-hidden": a,
        style: c,
        children: l,
      })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === n
    ? (d = t[10])
    : ((d = n
        ? (0, K.jsx)(M, {
            id: `codex.loggedOut.lessOptions`,
            defaultMessage: `Less options`,
            description: `Button label to hide additional sign-in methods`,
          })
        : (0, K.jsx)(M, {
            id: `codex.loggedOut.moreOptions`,
            defaultMessage: `More options`,
            description: `Button label to reveal additional sign-in methods`,
          })),
      (t[9] = n),
      (t[10] = d));
  let f;
  t[11] !== r || t[12] !== d
    ? ((f = (0, K.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, K.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-center text-sm text-token-description-foreground hover:underline`,
          onClick: r,
          children: d,
        }),
      })),
      (t[11] = r),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== u || t[15] !== f
      ? ((p = (0, K.jsxs)(`div`, { className: `pt-2`, children: [u, f] })),
        (t[14] = u),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function U(e) {
  let t = (0, W.c)(5),
    { isPrimary: n, onClick: r, children: i } = e,
    a = n ? `primary` : `outline`,
    o = n ? ft : pt,
    s;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== o
      ? ((s = (0, K.jsx)(h, {
          color: a,
          className: o,
          onClick: r,
          children: i,
        })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function at(e) {
  let t = (0, W.c)(7),
    {
      setApiKeyValue: n,
      defaultApiKeyFromEnv: r,
      setIsApiKeySignInVisible: i,
    } = e,
    a;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((a = () => {
        (i(!0), n((e) => (e.length > 0 ? e : (r ?? ``))));
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(M, {
        id: `codex.loggedOut.useApiKey`,
        defaultMessage: `Use API Key`,
        description: `Secondary button to use API Key auth method`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] === a
      ? (s = t[6])
      : ((s = (0, K.jsx)(`div`, {
          className: `pt-2`,
          children: (0, K.jsx)(h, {
            color: `outline`,
            className: `w-full justify-center !rounded-full bg-token-foreground/10 px-4 py-2 font-medium backdrop-blur-md`,
            onClick: a,
            children: o,
          }),
        })),
        (t[5] = a),
        (t[6] = s)),
    s
  );
}
function ot(e) {
  let t = (0, W.c)(32),
    {
      apiKeyValue: n,
      setApiKeyValue: i,
      apiKeyInputRef: a,
      isApiKeyLoginPending: o,
      setIsApiKeyLoginPending: s,
      setIsApiKeySignInVisible: c,
      handleApiKeySubmit: l,
    } = e,
    u = H(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, K.jsx)(M, {
        id: `codex.loggedOut.apiKeyPrompt.inputLabel`,
        defaultMessage: `Enter your OpenAI API key`,
        description: `Label for API key input`,
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === u
    ? (f = t[2])
    : ((f = u.formatMessage({
        id: `codex.loggedOut.apiKeyPrompt.placeholder`,
        defaultMessage: `sk-...`,
        description: `Placeholder text hint for API key input field`,
      })),
      (t[1] = u),
      (t[2] = f));
  let p;
  t[3] === i
    ? (p = t[4])
    : ((p = (e) => {
        i(e.target.value);
      }),
      (t[3] = i),
      (t[4] = p));
  let m;
  t[5] !== a || t[6] !== n || t[7] !== f || t[8] !== p
    ? ((m = (0, K.jsxs)(`label`, {
        className: `block text-sm text-token-foreground`,
        children: [
          d,
          (0, K.jsx)(`input`, {
            ref: a,
            className: `mt-4 w-full rounded-lg border border-token-border bg-token-input-background px-3 py-2 text-sm text-token-foreground focus:border-token-focus-border focus:outline-none`,
            placeholder: f,
            value: n,
            onChange: p,
            onFocus: ct,
          }),
        ],
      })),
      (t[5] = a),
      (t[6] = n),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(`p`, {
        className: `mt-3 text-[10px] text-token-description-foreground`,
        children: (0, K.jsx)(M, {
          id: `codex.loggedOut.cloudTasksDisabledWithApiKey`,
          defaultMessage: `Cloud tasks disabled with API key`,
          description: `Disclaimer explaining that remote features need ChatGPT sign-in`,
        }),
      })),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsxs)(`button`, {
        type: `button`,
        className: `inline-flex cursor-interaction items-center gap-1 text-sm text-token-text-link-foreground hover:underline max-[280px]:hidden`,
        onClick: st,
        children: [
          (0, K.jsx)(M, {
            id: `codex.loggedOut.apiKeyPrompt.getKey`,
            defaultMessage: `Get API Key`,
            description: `Button to open OpenAI API key management page`,
          }),
          (0, K.jsx)(r, { href: ut, className: `icon-2xs` }),
        ],
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== s || t[13] !== c
    ? ((v = () => {
        (s(!1), c(!1));
      }),
      (t[12] = s),
      (t[13] = c),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, K.jsx)(M, {
        id: `codex.loggedOut.apiKeyPrompt.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for API key login`,
      })),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] === v
    ? (b = t[17])
    : ((b = (0, K.jsx)(h, { color: `ghost`, onClick: v, children: y })),
      (t[16] = v),
      (t[17] = b));
  let x;
  t[18] !== n || t[19] !== o
    ? ((x = n.trim().length === 0 || o), (t[18] = n), (t[19] = o), (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, K.jsx)(M, {
        id: `codex.loggedOut.apiKeyPrompt.confirm`,
        defaultMessage: `OK`,
        description: `Confirm button for API key login`,
      })),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== l || t[23] !== o || t[24] !== x
    ? ((C = (0, K.jsx)(h, {
        className: `px-4`,
        onClick: l,
        disabled: x,
        loading: o,
        children: S,
      })),
      (t[22] = l),
      (t[23] = o),
      (t[24] = x),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== C || t[27] !== b
    ? ((w = (0, K.jsxs)(`div`, {
        className: `mt-4 flex items-center justify-end gap-2 min-[280px]:justify-between`,
        children: [
          _,
          (0, K.jsxs)(`div`, {
            className: `flex justify-end gap-2`,
            children: [b, C],
          }),
        ],
      })),
      (t[26] = C),
      (t[27] = b),
      (t[28] = w))
    : (w = t[28]);
  let T;
  return (
    t[29] !== w || t[30] !== m
      ? ((T = (0, K.jsxs)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: [m, g, w],
        })),
        (t[29] = w),
        (t[30] = m),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function st(e) {
  se({ event: e, href: ut, initiator: `open_in_browser_bridge` });
}
function ct(e) {
  e.currentTarget.select();
}
function lt(e) {
  let t = (0, W.c)(38),
    {
      verificationUrl: n,
      userCode: r,
      onOpenBrowser: i,
      onCopyCode: a,
      onCancel: o,
    } = e,
    s = H(),
    c = r.length > 0 ? r : `......`,
    [l, u] = (0, G.useState)(!1),
    d;
  t[0] !== s || t[1] !== l
    ? ((d = l
        ? s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copied`,
            defaultMessage: `Copied`,
            description: `Aria label for the copied state of the device code copy affordance on the logged out screen`,
          })
        : s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copy`,
            defaultMessage: `Copy`,
            description: `Aria label for the device code copy affordance on the logged out screen`,
          })),
      (t[0] = s),
      (t[1] = l),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  t[3] !== a || t[4] !== r
    ? ((p = () => {
        r.length !== 0 &&
          (a(r),
          u(!0),
          window.setTimeout(() => {
            u(!1);
          }, 2e3));
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = p))
    : (p = t[5]);
  let m = p,
    g;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(`p`, {
        className: `text-sm text-token-foreground`,
        children: (0, K.jsx)(M, {
          id: `codex.loggedOut.deviceCode.instructions`,
          defaultMessage: `To use a device code to log in, click the open browser button and paste the code below.`,
          description: `Instructions shown while a device code login is in progress`,
        }),
      })),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === m
    ? (_ = t[8])
    : ((_ = (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), m());
      }),
      (t[7] = m),
      (t[8] = _));
  let v;
  t[9] === m
    ? (v = t[10])
    : ((v = (e) => {
        (e.stopPropagation(), m());
      }),
      (t[9] = m),
      (t[10] = v));
  let y;
  t[11] === l
    ? (y = t[12])
    : ((y = l
        ? (0, K.jsx)(x, { className: `icon-sm text-token-foreground` })
        : (0, K.jsx)(O, { className: `icon-sm` })),
      (t[11] = l),
      (t[12] = y));
  let b;
  t[13] !== f || t[14] !== v || t[15] !== y
    ? ((b = (0, K.jsx)(`div`, {
        className: `absolute top-2 right-2 opacity-100 transition-opacity sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100`,
        children: (0, K.jsx)(h, {
          color: `ghost`,
          size: `icon`,
          className: `rounded-md`,
          "aria-label": f,
          onClick: v,
          children: y,
        }),
      })),
      (t[13] = f),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, K.jsx)(`p`, {
        className: `text-xs font-medium tracking-[0.2em] text-token-description-foreground uppercase`,
        children: (0, K.jsx)(M, {
          id: `codex.loggedOut.deviceCode.codeLabel`,
          defaultMessage: `Device code`,
          description: `Label above the user code shown during device code sign in`,
        }),
      })),
      (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] === c
    ? (C = t[19])
    : ((C = (0, K.jsx)(`p`, {
        className: `mt-2 overflow-x-auto text-center font-mono text-[28px] font-semibold tracking-[0.12em] whitespace-nowrap text-token-foreground`,
        children: c,
      })),
      (t[18] = c),
      (t[19] = C));
  let w;
  t[20] !== m || t[21] !== _ || t[22] !== b || t[23] !== C
    ? ((w = (0, K.jsxs)(`div`, {
        className: `group relative rounded-xl border border-token-border bg-token-input-background px-3 py-3`,
        role: `button`,
        tabIndex: 0,
        onClick: m,
        onKeyDown: _,
        children: [b, S, C],
      })),
      (t[20] = m),
      (t[21] = _),
      (t[22] = b),
      (t[23] = C),
      (t[24] = w))
    : (w = t[24]);
  let T;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, K.jsx)(M, {
        id: `codex.loggedOut.deviceCode.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a device code login`,
      })),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] === o
    ? (E = t[27])
    : ((E = (0, K.jsx)(h, { color: `ghost`, onClick: o, children: T })),
      (t[26] = o),
      (t[27] = E));
  let D = n.length === 0,
    k;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, K.jsx)(M, {
        id: `codex.loggedOut.deviceCode.openBrowser`,
        defaultMessage: `Open browser`,
        description: `Button to open the device code verification page`,
      })),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== i || t[30] !== D
    ? ((A = (0, K.jsx)(h, { onClick: i, disabled: D, children: k })),
      (t[29] = i),
      (t[30] = D),
      (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== E || t[33] !== A
    ? ((j = (0, K.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-between gap-2`,
        children: [E, A],
      })),
      (t[32] = E),
      (t[33] = A),
      (t[34] = j))
    : (j = t[34]);
  let N;
  return (
    t[35] !== w || t[36] !== j
      ? ((N = (0, K.jsx)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: (0, K.jsxs)(`div`, {
            className: `space-y-3`,
            children: [g, w, j],
          }),
        })),
        (t[35] = w),
        (t[36] = j),
        (t[37] = N))
      : (N = t[37]),
    N
  );
}
var W,
  G,
  K,
  ut,
  dt,
  ft,
  pt,
  mt = e(() => {
    ((W = u()),
      k(),
      n(),
      (G = t(p(), 1)),
      pe(),
      d(),
      Te(),
      m(),
      Ke(),
      L(),
      ke(),
      _(),
      fe(),
      le(),
      ee(),
      F(),
      j(),
      Ae(),
      c(),
      R(),
      w(),
      Ge(),
      ve(),
      i(),
      P(),
      Je(),
      Ze(),
      (K = z()),
      (ut = `https://platform.openai.com/api-keys`),
      (dt = G.memo(function () {
        let e = (0, W.c)(5),
          t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = {
              initialColumns: 130,
              initialRows: 100,
              initialMode: `composite`,
              preferredVideoKeyword: `blossom`,
            }),
            (e[0] = t))
          : (t = e[0]);
        let { columns: n, rows: r, lines: i } = Ye(t),
          a;
        return (
          e[1] !== n || e[2] !== i || e[3] !== r
            ? ((a = (0, K.jsx)(Xe, {
                lines: i,
                columns: n,
                rows: r,
                autoCover: !0,
              })),
              (e[1] = n),
              (e[2] = i),
              (e[3] = r),
              (e[4] = a))
            : (a = e[4]),
          a
        );
      })),
      (ft = `w-full cursor-interaction justify-center !rounded-full border px-4 py-2 font-medium`),
      (pt = `bg-token-foreground/10 w-full justify-center !rounded-full px-4 py-2 font-medium backdrop-blur-md`));
  });
function ht(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function gt(e) {
  return e;
}
var _t,
  vt,
  yt = e(() => {
    ((_t = `3446609779`), (vt = `1561420571`));
  });
function bt(e) {
  let t = (0, xt.c)(21),
    { onExit: n, audioContextRef: r } = e,
    i = (0, q.useRef)(null),
    a = (0, q.useRef)(null),
    o = (0, q.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = []), (t[0] = s))
    : (s = t[0]);
  let c = (0, q.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { x: 0, y: 0 }), (t[1] = l))
    : (l = t[1]);
  let u = (0, q.useRef)(l),
    d = (0, q.useRef)(`right`),
    f = (0, q.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: J, rows: J, cellSize: Y, width: J * Y, height: J * Y }),
      (t[2] = p))
    : (p = t[2]);
  let m = (0, q.useRef)(p),
    h = (0, q.useRef)(null),
    g = (0, q.useEffectEvent)(n),
    _;
  t[3] === r
    ? (_ = t[4])
    : ((_ = (e, t, n) => {
        if (r.current == null) return;
        let i = r.current;
        i.state === `suspended` && i.resume();
        let a = t / 1e3,
          o = i.createOscillator(),
          s = i.createGain();
        ((o.type = n),
          (o.frequency.value = e),
          s.gain.setValueAtTime(1e-4, i.currentTime),
          s.gain.exponentialRampToValueAtTime(0.18, i.currentTime + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, i.currentTime + a),
          o.connect(s),
          s.connect(i.destination),
          o.start(),
          o.stop(i.currentTime + a),
          (o.onended = () => {
            (o.disconnect(), s.disconnect());
          }));
      }),
      (t[3] = r),
      (t[4] = _));
  let v = (0, q.useEffectEvent)(_),
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o.current != null &&
          (window.clearInterval(o.current), (o.current = null));
      }),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        if (h.current) return h.current;
        let e = i.current;
        if (e == null) return { snake: `#ffffff`, food: `#f97316` };
        let t = getComputedStyle(e).color || `#ffffff`,
          n = getComputedStyle(document.documentElement),
          r = {
            snake: t,
            food:
              n.getPropertyValue(`--vscode-charts-red`).trim() ||
              n.getPropertyValue(`--vscode-charts-orange`).trim() ||
              `#f97316`,
          };
        return ((h.current = r), r);
      }),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        if (i.current == null) return null;
        let e = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        ((i.current.width = Math.max(1, Math.floor(m.current.width * e))),
          (i.current.height = Math.max(1, Math.floor(m.current.height * e))),
          (i.current.style.width = `${m.current.width}px`),
          (i.current.style.height = `${m.current.height}px`));
        let t = i.current.getContext(`2d`);
        return t == null
          ? null
          : (t.setTransform(e, 0, 0, e, 0, 0),
            (t.imageSmoothingEnabled = !1),
            t);
      }),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = {
          x: Math.floor(Math.random() * m.current.columns),
          y: Math.floor(Math.random() * m.current.rows),
        };
        for (; e.some((e) => e.x === t.x && e.y === t.y); )
          t = {
            x: Math.floor(Math.random() * m.current.columns),
            y: Math.floor(Math.random() * m.current.rows),
          };
        return t;
      }),
      (t[8] = T))
    : (T = t[8]);
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = w();
        if (e == null) return;
        let t = S();
        (e.clearRect(0, 0, m.current.width, m.current.height),
          (e.fillStyle = t.snake));
        for (let t of c.current)
          e.fillRect(
            t.x * m.current.cellSize,
            t.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          );
        ((e.fillStyle = t.food),
          e.fillRect(
            u.current.x * m.current.cellSize,
            u.current.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          ));
      }),
      (t[9] = D))
    : (D = t[9]);
  let O = (0, q.useEffectEvent)(D),
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = () => {
        let e = Math.floor(m.current.columns / 2),
          t = Math.floor(m.current.rows / 2);
        ((c.current = [
          { x: e, y: t },
          { x: e - 1, y: t },
          { x: e - 2, y: t },
        ]),
          (d.current = `right`),
          (f.current = `right`),
          (u.current = E(c.current)),
          O());
      }),
      (t[10] = O),
      (t[11] = k));
  let A = (0, q.useEffectEvent)(k),
    j;
  t[12] === A
    ? (j = t[13])
    : ((j = () => {
        if (a.current == null) return;
        let e = a.current.getBoundingClientRect(),
          t = Math.max(1, Math.floor(e.width)),
          n = Math.max(1, Math.floor(e.height)),
          r = Math.max(J, Math.floor(t / Y)),
          i = t / r;
        ((m.current = {
          columns: r,
          rows: Math.max(J, Math.floor(n / i)),
          cellSize: i,
          width: t,
          height: n,
        }),
          A());
      }),
      (t[12] = A),
      (t[13] = j));
  let M = (0, q.useEffectEvent)(j),
    N;
  t[14] !== O || t[15] !== g || t[16] !== v || t[17] !== M
    ? ((N = () => {
        M();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) &&
                  (t = `right`),
            t != null &&
              (e.preventDefault(), Tt[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = wt[n],
              i = { x: t.x + r.x, y: t.y + r.y };
            if (
              i.x < 0 ||
              i.y < 0 ||
              i.x >= m.current.columns ||
              i.y >= m.current.rows
            ) {
              (b(), v(140, 220, `sawtooth`), g());
              return;
            }
            let a = i.x === u.current.x && i.y === u.current.y;
            if (
              (a ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)
            ) {
              (b(), v(160, 220, `sawtooth`), g());
              return;
            }
            let o = a ? [i, ...e] : [i, ...e.slice(0, -1)];
            ((c.current = o),
              (d.current = n),
              a && ((u.current = E(o)), v(660, 120, `square`)),
              O());
          }, Ct)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[14] = O),
      (t[15] = g),
      (t[16] = v),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  (t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = []), (t[19] = P))
    : (P = t[19]),
    (0, q.useEffect)(N, P));
  let F;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, St.jsx)(`div`, {
          className: `h-full w-full`,
          ref: a,
          children: (0, St.jsx)(`canvas`, {
            className: `h-full w-full text-token-foreground`,
            ref: i,
          }),
        })),
        (t[20] = F))
      : (F = t[20]),
    F
  );
}
var xt,
  q,
  St,
  J,
  Y,
  Ct,
  wt,
  Tt,
  Et = e(() => {
    ((xt = u()),
      (q = t(p(), 1)),
      (St = z()),
      (J = 12),
      (Y = 18),
      (Ct = 120),
      (wt = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      }),
      (Tt = { up: `down`, down: `up`, left: `right`, right: `left` }));
  });
function Dt(e, t) {
  if (t === `signin`) return e;
  try {
    let n = new URL(e);
    switch (t) {
      case `signup`:
        n.searchParams.set(`screen_hint`, `signup`);
        break;
      case `google`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `google-oauth2`));
        break;
      case `microsoft`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `windowslive`));
        break;
    }
    return n.toString();
  } catch {
    return e;
  }
}
var Ot = e(() => {}),
  X,
  kt,
  At = e(() => {
    (t(p()),
      (X = z()),
      (kt = (e) =>
        (0, X.jsxs)(`svg`, {
          height: 24,
          viewBox: `0 0 24 24`,
          width: 24,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
              fill: `#4285F4`,
            }),
            (0, X.jsx)(`path`, {
              d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
              fill: `#34A853`,
            }),
            (0, X.jsx)(`path`, {
              d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
              fill: `#FBBC05`,
            }),
            (0, X.jsx)(`path`, {
              d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
              fill: `#EA4335`,
            }),
            (0, X.jsx)(`path`, { d: `M1 1h22v22H1z`, fill: `none` }),
          ],
        })));
  });
function jt(e) {
  let t = (0, Mt.c)(50),
    {
      appBrand: n,
      apiKeyValue: r,
      isApiKeyEntryVisible: i,
      isApiKeySignInPending: a,
      isChatGptSignInPending: o,
      showChatGptProviderSignIn: s,
      onApiKeySubmit: c,
      onApiKeyValueChange: u,
      onChatGptSignIn: d,
      onChatGptSignUp: p,
      onPlaySnake: m,
      onResetApiKeyEntry: h,
      onShowApiKeyEntry: g,
    } = e,
    _ = H(),
    v = n === te.ChatGPT;
  if (o && !i) {
    let e = v ? `size-10` : `size-[52px]`,
      r;
    t[0] === e ? (r = t[1]) : ((r = f(`shrink-0`, e)), (t[0] = e), (t[1] = r));
    let i;
    t[2] !== n || t[3] !== r
      ? ((i = (0, Z.jsx)(He, { appBrand: n, className: r })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i))
      : (i = t[4]);
    let a;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(`p`, {
          className: `text-center text-[14px] leading-5 font-normal text-token-description-foreground`,
          children: (0, Z.jsx)(M, {
            id: `electron.onboarding.login.browserPending.welcomeV2`,
            defaultMessage: `Continue signing in with your browser`,
            description: `Message shown while ChatGPT sign-in continues in the browser`,
          }),
        })),
        (t[5] = a))
      : (a = t[5]);
    let o;
    t[6] === d ? (o = t[7]) : ((o = () => d()), (t[6] = d), (t[7] = o));
    let s;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Z.jsx)(M, {
          id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
          defaultMessage: `Cancel sign-in`,
          description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
        })),
        (t[8] = s))
      : (s = t[8]);
    let c;
    t[9] === o
      ? (c = t[10])
      : ((c = (0, Z.jsx)(`button`, {
          className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-description-foreground hover:bg-token-list-hover-background`,
          type: `button`,
          onClick: o,
          children: s,
        })),
        (t[9] = o),
        (t[10] = c));
    let l;
    return (
      t[11] !== i || t[12] !== c
        ? ((l = (0, Z.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-12 text-token-foreground`,
            children: (0, Z.jsxs)(`div`, {
              className: `flex w-[340px] flex-col items-center gap-8`,
              children: [i, a, c],
            }),
          })),
          (t[11] = i),
          (t[12] = c),
          (t[13] = l))
        : (l = t[13]),
      l
    );
  }
  let y = v ? `gap-4` : `gap-8`,
    b;
  t[14] === y
    ? (b = t[15])
    : ((b = f(`flex w-full flex-col items-center`, y)),
      (t[14] = y),
      (t[15] = b));
  let x;
  t[16] === _
    ? (x = t[17])
    : ((x = _.formatMessage({
        id: `electron.onboarding.login.snake.start`,
        defaultMessage: `Play Snake`,
        description: `Aria label for the Codex logo button to start Snake`,
      })),
      (t[16] = _),
      (t[17] = x));
  let S = !v && `size-[52px]`,
    C;
  t[18] === S
    ? (C = t[19])
    : ((C = f(`shrink-0`, S)), (t[18] = S), (t[19] = C));
  let w;
  t[20] !== n || t[21] !== C
    ? ((w = (0, Z.jsx)(He, { appBrand: n, className: C })),
      (t[20] = n),
      (t[21] = C),
      (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== m || t[24] !== x || t[25] !== w
    ? ((T = (0, Z.jsx)(`button`, {
        className: `group flex cursor-interaction items-center justify-center rounded-full`,
        type: `button`,
        "aria-label": x,
        onClick: m,
        children: w,
      })),
      (t[23] = m),
      (t[24] = x),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== n || t[28] !== v
    ? ((E = (0, Z.jsx)(`h1`, {
        className: `w-[316px] text-center text-[28px] leading-9 font-normal text-token-foreground`,
        children: v
          ? (0, Z.jsx)(M, {
              id: `electron.onboarding.login.welcomeV2.title.chatgptSignIn`,
              defaultMessage: `Sign in to ChatGPT`,
              description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
            })
          : (0, Z.jsx)(M, {
              id: `electron.onboarding.login.welcomeV2.title`,
              defaultMessage: `Get started with {appName}`,
              description: `Title on the v2 desktop onboarding login page`,
              values: { appName: ue(n) },
            }),
      })),
      (t[27] = n),
      (t[28] = v),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== b || t[31] !== T || t[32] !== E
    ? ((D = (0, Z.jsxs)(`div`, { className: b, children: [T, E] })),
      (t[30] = b),
      (t[31] = T),
      (t[32] = E),
      (t[33] = D))
    : (D = t[33]);
  let O;
  t[34] !== r ||
  t[35] !== i ||
  t[36] !== a ||
  t[37] !== v ||
  t[38] !== o ||
  t[39] !== c ||
  t[40] !== u ||
  t[41] !== d ||
  t[42] !== p ||
  t[43] !== h ||
  t[44] !== g ||
  t[45] !== s
    ? ((O = i
        ? (0, Z.jsx)(`div`, {
            className: `w-full`,
            children: (0, Z.jsx)($e, {
              apiKeyValue: r,
              isApiKeyEntryVisible: i,
              isApiKeySignInPending: a,
              isChatGptSignInPending: o,
              onApiKeySecondaryAction: h,
              onApiKeySubmit: c,
              onApiKeyValueChange: u,
              onChatGptSignIn: d,
              onShowApiKeyEntry: g,
              apiKeySecondaryActionLabel: (0, Z.jsx)(M, {
                id: `electron.onboarding.login.apikey.cancel`,
                defaultMessage: `Cancel`,
                description: `Cancel button label for API key entry on desktop onboarding`,
              }),
            }),
          })
        : (0, Z.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-3`,
            children: [
              (0, Z.jsxs)(`button`, {
                className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-token-foreground text-[14px] leading-5 font-medium text-token-dropdown-background hover:bg-token-foreground/80`,
                type: `button`,
                onClick: () => d(),
                children: [
                  (0, Z.jsx)(l, {
                    className: `size-6 shrink-0 text-token-dropdown-background`,
                  }),
                  v
                    ? (0, Z.jsx)(M, {
                        id: `electron.onboarding.login.chatgpt.continueToSignIn`,
                        defaultMessage: `Continue to sign in`,
                        description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                      })
                    : (0, Z.jsx)(M, {
                        id: `electron.onboarding.login.chatgpt.signIn`,
                        defaultMessage: `Sign in with ChatGPT`,
                        description: `Button label to sign in with ChatGPT on desktop onboarding`,
                      }),
                ],
              }),
              s
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => d(`google`),
                        children: [
                          (0, Z.jsx)(kt, {
                            className: `size-5 shrink-0`,
                            "aria-hidden": `true`,
                          }),
                          (0, Z.jsx)(M, {
                            id: `electron.onboarding.login.google.signIn`,
                            defaultMessage: `Continue with Google`,
                            description: `Button label for Google sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => d(`microsoft`),
                        children: [
                          (0, Z.jsx)(Ne, {
                            className: `size-5 shrink-0`,
                            "aria-hidden": `true`,
                          }),
                          (0, Z.jsx)(M, {
                            id: `electron.onboarding.login.microsoft.signIn`,
                            defaultMessage: `Continue with Microsoft`,
                            description: `Button label for Microsoft sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, Z.jsx)(`button`, {
                className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                type: `button`,
                onClick: g,
                children: (0, Z.jsx)(M, {
                  id: `electron.onboarding.login.apikey.open.welcomeV2`,
                  defaultMessage: `Sign in another way`,
                  description: `Button label to open another sign-in method on v2 desktop onboarding`,
                }),
              }),
              (0, Z.jsx)(`button`, {
                className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-token-description-foreground underline hover:text-token-foreground`,
                type: `button`,
                onClick: p,
                children: (0, Z.jsx)(M, {
                  id: `electron.onboarding.login.signup.welcomeV2`,
                  defaultMessage: `Sign up`,
                  description: `Sign-up link on v2 desktop onboarding`,
                }),
              }),
            ],
          })),
      (t[34] = r),
      (t[35] = i),
      (t[36] = a),
      (t[37] = v),
      (t[38] = o),
      (t[39] = c),
      (t[40] = u),
      (t[41] = d),
      (t[42] = p),
      (t[43] = h),
      (t[44] = g),
      (t[45] = s),
      (t[46] = O))
    : (O = t[46]);
  let k;
  return (
    t[47] !== O || t[48] !== D
      ? ((k = (0, Z.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-6 text-token-foreground`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex w-[340px] flex-col items-center gap-8`,
            children: [D, O],
          }),
        })),
        (t[47] = O),
        (t[48] = D),
        (t[49] = k))
      : (k = t[49]),
    k
  );
}
var Mt,
  Z,
  Nt = e(() => {
    ((Mt = u()), _e(), n(), pe(), At(), Me(), E(), Ve(), Qe(), (Z = z()));
  });
function Pt() {
  let e = S(be),
    t = oe(),
    n = ne(),
    r = H(),
    i = v(),
    o = a(Fe),
    s = ce(Ie),
    c = ce(Pe),
    l = ce(Le),
    u = o == null ? null : { hasPreviouslyCompletedOnboarding: o },
    d = ye(),
    f = gt(de(vt).get(`enabled`, !1)),
    p = (t) => {
      e.get(C).warning(
        r.formatMessage(
          {
            id: `electron.onboarding.login.error`,
            defaultMessage: `Sign-in failed: {rawMessage}`,
            description: `Toast shown when sign-in fails on the desktop onboarding page`,
          },
          { rawMessage: t },
        ),
      );
    },
    [m, h] = (0, Q.useState)(null),
    _ = m != null,
    [y, x] = (0, Q.useState)(!1),
    [w, E] = (0, Q.useState)(!1),
    [D, O] = (0, Q.useState)(``),
    [k, j] = (0, Q.useState)(!1),
    N = (0, Q.useRef)(null),
    P = () => {
      (c(!1), l(!0));
    },
    F = () => {
      (x(!1), j(!1), O(``));
    },
    ee = () => {
      u != null && (I(e, ie, { method: `apikey`, ...u }), x(!0));
    },
    te = () => {
      E(!1);
    },
    L = () => {
      N.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((N.current = new window.AudioContext()),
            N.current.state === `suspended` && N.current.resume())));
    },
    R = () => {
      (L(), E(!0));
    },
    re = async (r = `signin`) => {
      if (_) {
        (m?.abort(), h(null));
        return;
      }
      if (u == null) return;
      let a = r === `google` || r === `microsoft` ? r : `chatgpt`;
      I(e, ie, { method: a, ...u });
      let o = new AbortController();
      h(o);
      try {
        let { useDesktopAuth: c, useStreamlinedLoginUx: l } = ht(me(d, _t)),
          f = ae(d, `2936610421`),
          m = ae(d, `3963726525`),
          { authUrl: h, completion: g } = await Ue({
            signal: o.signal,
            ...(f ? { appBrand: T } : {}),
            useHostedLoginSuccessPage: f,
            useStreamlinedLogin: l,
          });
        h &&
          A({
            href: qe({
              authUrl: Dt(h, r),
              includeCodexOriginStableId: m,
              useDesktopAuth: c,
              useStreamlinedLoginUx: l,
            }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          });
        let _ = await g;
        _.success
          ? (I(e, ge, { method: a, ...u }),
            i.removeQueries({ queryKey: he(`account-info`), exact: !0 }),
            P(),
            s(!0),
            t(),
            n(`/welcome`, { replace: !0 }))
          : (I(e, V, { method: a, errorKind: Ft(_.error), ...u }),
            p(B(_.error ?? `Unknown error`)));
      } catch (t) {
        if (t instanceof Error && t.name === `AbortError`) {
          I(e, V, { method: a, errorKind: `abort`, ...u });
          return;
        }
        (I(e, V, { method: a, errorKind: Ft(t), ...u }), p(B(t)));
      } finally {
        h(null);
      }
    };
  return u == null
    ? (0, $.jsx)(ze, {
        children: (0, $.jsxs)(`div`, {
          className: `flex h-full w-full flex-col items-center justify-center gap-3 text-token-description-foreground`,
          children: [
            (0, $.jsx)(b, { className: `h-4 w-4 text-token-foreground` }),
            (0, $.jsx)(M, {
              id: `electron.onboarding.login.loading`,
              defaultMessage: `Loading…`,
              description: `Loading state while the login page prepares onboarding telemetry`,
            }),
          ],
        }),
      })
    : (0, $.jsx)(ze, {
        fullBleed: !0,
        hideHeader: w,
        children: w
          ? (0, $.jsx)(`div`, {
              className: `flex h-full w-full`,
              children: (0, $.jsx)(bt, { onExit: te, audioContextRef: N }),
            })
          : (0, $.jsx)(jt, {
              appBrand: T,
              apiKeyValue: D,
              isApiKeyEntryVisible: y,
              isApiKeySignInPending: k,
              isChatGptSignInPending: _,
              showChatGptProviderSignIn: f,
              onApiKeySubmit: async () => {
                let r = D.trim();
                if (!(!r || k || u == null)) {
                  j(!0);
                  try {
                    (await g(`login-with-api-key`, { hostId: we, apiKey: r }),
                      I(e, ge, { method: `apikey`, ...u }),
                      P(),
                      s(!0),
                      t(),
                      n(`/welcome`, { replace: !0 }));
                  } catch (t) {
                    (I(e, V, { method: `apikey`, errorKind: Ft(t), ...u }),
                      p(B(t)));
                  } finally {
                    j(!1);
                  }
                }
              },
              onApiKeyValueChange: O,
              onChatGptSignIn: re,
              onChatGptSignUp: () => re(`signup`),
              onPlaySnake: R,
              onResetApiKeyEntry: F,
              onShowApiKeyEntry: ee,
            }),
      });
}
function Ft(e) {
  let t = typeof e == `string` ? e : e instanceof Error ? e.message : ``;
  if (!t) return `unknown`;
  let n = t.toLowerCase();
  return n.includes(`network`) || n.includes(`fetch`) || n.includes(`timeout`)
    ? `network`
    : n.includes(`auth`) ||
        n.includes(`unauthorized`) ||
        n.includes(`forbidden`) ||
        n.includes(`invalid api key`) ||
        n.includes(`401`) ||
        n.includes(`403`)
      ? `auth`
      : `unknown`;
}
var Q,
  $,
  It = e(() => {
    (y(),
      Oe(),
      re(),
      k(),
      n(),
      (Q = t(p(), 1)),
      pe(),
      d(),
      Te(),
      m(),
      Ke(),
      L(),
      fe(),
      s(),
      ee(),
      Re(),
      Se(),
      R(),
      w(),
      Ge(),
      ve(),
      yt(),
      P(),
      Be(),
      Et(),
      Ot(),
      Nt(),
      ($ = z()));
  });
function Lt() {
  let e = (0, Rt.c)(3);
  {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, zt.jsx)(Pt, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let t;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, zt.jsx)(et, {})), (e[2] = t))
      : (t = e[2]),
    t
  );
}
var Rt, zt;
e(() => {
  ((Rt = u()), t(p(), 1), D(), mt(), It(), (zt = z()));
})();
export { Lt as LoginRoute };
//# sourceMappingURL=login-route-DM0Pp-Dv.js.map
