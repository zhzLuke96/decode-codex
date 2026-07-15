import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as t,
  C0 as n,
  Cp as r,
  Df as i,
  I2 as a,
  Mq as o,
  Nq as s,
  _0 as c,
  _Y as l,
  _f as u,
  a2 as d,
  aG as f,
  bG as p,
  bf as m,
  cY as h,
  dJ as g,
  fJ as _,
  gf as v,
  hf as y,
  k2 as b,
  kf as x,
  mY as S,
  mf as C,
  pf as w,
  rG as T,
  sY as E,
  wp as D,
  yG as O,
  yY as k,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  n as A,
  t as j,
} from "./app-initial~app-main~personalization-settings~codex-micro-onboarding-host-_EkO87Ak.js";
var M,
  N = e(() => {
    (c(),
      p(),
      h(),
      _(),
      (M = d(E, () => ({
        queryKey: [`app-info`],
        queryFn: () => O.appInfo.get(),
        staleTime: g.INFINITE,
      }))));
  });
function P({ isMemoryFeatureEnabled: e, memoryConfig: t }) {
  return {
    memoryFeatureEnabled: e,
    generateMemoriesEnabled: t.generateMemories,
    useMemoriesEnabled: t.useMemories,
    memoriesEnabled: e && t.generateMemories && t.useMemories,
  };
}
var F = e(() => {});
function I() {
  return f(`2574306096`);
}
var L = e(() => {
  T();
});
function R(e) {
  let t = (0, K.c)(46),
    { open: r, setupState: a, onAskCodex: s, onOpenChange: c } = e,
    d = k(),
    f = a.kind === `ready`,
    p = a.kind === `failed`,
    m = a.kind === `screen-recording-permission-needed`,
    h = a.kind === `accessibility-permission-needed`,
    g = m || h,
    _ = a.kind === `preparing` || a.kind === `starting`,
    b = f || p || g || _,
    S = _ || f || p,
    T;
  t[0] !== d || t[1] !== h || t[2] !== m || t[3] !== a.status
    ? ((T = m
        ? a.status === `denied`
          ? d.formatMessage({
              id: `settings.general.experimentalFeatures.chronicle.screenRecordingSettingsName`,
              defaultMessage: `Screen Recording`,
              description: `Name of the macOS Screen Recording permission settings page`,
            })
          : null
        : h && a.status === `denied`
          ? d.formatMessage({
              id: `settings.general.experimentalFeatures.chronicle.accessibilitySettingsName`,
              defaultMessage: `Accessibility`,
              description: `Name of the macOS Accessibility permission settings page`,
            })
          : null),
      (t[0] = d),
      (t[1] = h),
      (t[2] = m),
      (t[3] = a.status),
      (t[4] = T))
    : (T = t[4]);
  let E = T,
    { data: D } = n(M),
    O = D?.appName ?? `ChatGPT`,
    A;
  t[5] !== b || t[6] !== c
    ? ((A = (e) => {
        (!e && !b) || c(e);
      }),
      (t[5] = b),
      (t[6] = c),
      (t[7] = A))
    : (A = t[7]);
  let N = A,
    P;
  t[8] === S
    ? (P = t[9])
    : ((P = {
        onEscapeKeyDown: (e) => {
          S || e.preventDefault();
        },
      }),
      (t[8] = S),
      (t[9] = P));
  let F;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, q.jsx)(x, {
        asChild: !0,
        children: (0, q.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, q.jsx)(l, {
            id: `settings.general.experimentalFeatures.chronicle.setupTitle`,
            defaultMessage: `Setting up Chronicle`,
            description: `Accessible title for the Chronicle setup dialog`,
          }),
        }),
      })),
      (t[10] = F))
    : (F = t[10]);
  let I;
  t[11] === a
    ? (I = t[12])
    : ((I = (0, q.jsxs)(u, {
        children: [
          F,
          (0, q.jsx)(v, {
            title: (0, q.jsx)(U, { setupState: a }),
            subtitle: (0, q.jsx)(W, { setupState: a }),
          }),
        ],
      })),
      (t[11] = a),
      (t[12] = I));
  let L;
  t[13] !== O || t[14] !== a
    ? ((L = (0, q.jsx)(`p`, {
        className: `text-token-description-foreground`,
        children: (0, q.jsx)(G, { bundleName: O, setupState: a }),
      })),
      (t[13] = O),
      (t[14] = a),
      (t[15] = L))
    : (L = t[15]);
  let R;
  t[16] !== p || t[17] !== a.message
    ? ((R = p
        ? (0, q.jsx)(`p`, {
            className: `text-token-error-foreground`,
            children: a.message,
          })
        : null),
      (t[16] = p),
      (t[17] = a.message),
      (t[18] = R))
    : (R = t[18]);
  let B;
  t[19] !== L || t[20] !== R
    ? ((B = (0, q.jsxs)(u, { className: `space-y-3`, children: [L, R] })),
      (t[19] = L),
      (t[20] = R),
      (t[21] = B))
    : (B = t[21]);
  let H;
  t[22] !== D?.appIconMedium || t[23] !== O || t[24] !== E
    ? ((H =
        E == null
          ? null
          : (0, q.jsx)(u, {
              children: (0, q.jsx)(j, {
                appIconMedium: D?.appIconMedium ?? null,
                appName: O,
                permissionSettingsName: E,
              }),
            })),
      (t[22] = D?.appIconMedium),
      (t[23] = O),
      (t[24] = E),
      (t[25] = H))
    : (H = t[25]);
  let J;
  t[26] !== p ||
  t[27] !== _ ||
  t[28] !== f ||
  t[29] !== h ||
  t[30] !== g ||
  t[31] !== m ||
  t[32] !== s ||
  t[33] !== c
    ? ((J =
        f || p || g || _
          ? (0, q.jsx)(u, {
              children: (0, q.jsx)(y, {
                className: w,
                children: _
                  ? (0, q.jsx)(o, {
                      color: `ghost`,
                      onClick: () => {
                        c(!1);
                      },
                      children: (0, q.jsx)(l, {
                        id: `settings.general.experimentalFeatures.chronicle.setupDismiss`,
                        defaultMessage: `Close`,
                        description: `Button that dismisses the Chronicle setup dialog while setup is still preparing or starting`,
                      }),
                    })
                  : m
                    ? (0, q.jsx)(o, {
                        color: `primary`,
                        onClick: V,
                        children: (0, q.jsx)(l, {
                          id: `settings.general.experimentalFeatures.chronicle.openScreenRecordingSettings`,
                          defaultMessage: `Open System Settings`,
                          description: `Button that opens macOS System Settings to the Screen Recording permission page`,
                        }),
                      })
                    : h
                      ? (0, q.jsx)(o, {
                          color: `primary`,
                          onClick: z,
                          children: (0, q.jsx)(l, {
                            id: `settings.general.experimentalFeatures.chronicle.openAccessibilitySettings`,
                            defaultMessage: `Open System Settings`,
                            description: `Button that opens macOS System Settings to the Accessibility permission page`,
                          }),
                        })
                      : f
                        ? (0, q.jsx)(o, {
                            color: `primary`,
                            onClick: s,
                            children: (0, q.jsx)(l, {
                              id: `settings.general.experimentalFeatures.chronicle.askCodex`,
                              defaultMessage: `Try it out`,
                              description: `Button that opens a new thread to try out Codex Chronicle`,
                            }),
                          })
                        : (0, q.jsx)(o, {
                            color: `ghost`,
                            onClick: () => {
                              c(!1);
                            },
                            children: (0, q.jsx)(l, {
                              id: `settings.general.experimentalFeatures.chronicle.setupClose`,
                              defaultMessage: `Close`,
                              description: `Button that closes the Chronicle setup dialog`,
                            }),
                          }),
              }),
            })
          : null),
      (t[26] = p),
      (t[27] = _),
      (t[28] = f),
      (t[29] = h),
      (t[30] = g),
      (t[31] = m),
      (t[32] = s),
      (t[33] = c),
      (t[34] = J))
    : (J = t[34]);
  let Y;
  t[35] !== J || t[36] !== I || t[37] !== B || t[38] !== H
    ? ((Y = (0, q.jsxs)(C, { children: [I, B, H, J] })),
      (t[35] = J),
      (t[36] = I),
      (t[37] = B),
      (t[38] = H),
      (t[39] = Y))
    : (Y = t[39]);
  let X;
  return (
    t[40] !== b || t[41] !== N || t[42] !== r || t[43] !== Y || t[44] !== P
      ? ((X = (0, q.jsx)(i, {
          open: r,
          onOpenChange: N,
          contentProps: P,
          shouldIgnoreClickOutside: !0,
          showDialogClose: b,
          size: `default`,
          children: Y,
        })),
        (t[40] = b),
        (t[41] = N),
        (t[42] = r),
        (t[43] = Y),
        (t[44] = P),
        (t[45] = X))
      : (X = t[45]),
    X
  );
}
function z() {
  O.systemPermissions?.openAccessibilitySettings().catch(B);
}
function B() {}
function V() {
  O.systemPermissions?.openScreenRecordingSettings().catch(H);
}
function H() {}
function U(e) {
  let t = (0, K.c)(5),
    { setupState: n } = e;
  if (n.kind === `ready`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(l, {
            id: `settings.general.experimentalFeatures.chronicle.setupReadyTitle`,
            defaultMessage: `Chronicle is ready to use!`,
            description: `Title shown when Chronicle setup has completed`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.kind === `failed`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(l, {
            id: `settings.general.experimentalFeatures.chronicle.setupFailedTitle`,
            defaultMessage: `Chronicle setup failed`,
            description: `Title shown when Chronicle setup fails`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (n.kind === `screen-recording-permission-needed`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(l, {
            id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingPermissionNeededTitle`,
            defaultMessage: `Allow Screen Recording to use Chronicle`,
            description: `Title shown when Chronicle setup is waiting for macOS Screen Recording permission`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.kind === `accessibility-permission-needed`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(l, {
            id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityPermissionNeededTitle`,
            defaultMessage: `Allow Accessibility to use Chronicle`,
            description: `Title shown when Chronicle setup is waiting for macOS Accessibility permission`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let r;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, q.jsx)(l, {
          id: `settings.general.experimentalFeatures.chronicle.setupInProgressTitle`,
          defaultMessage: `Setting up Chronicle`,
          description: `Title shown while Chronicle setup is in progress`,
        })),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function W(e) {
  let t = (0, K.c)(3),
    { setupState: n } = e;
  switch (n.kind) {
    case `preparing`:
    case `starting`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(l, {
              id: `settings.general.experimentalFeatures.chronicle.setupWaiting`,
              defaultMessage: `Waiting…`,
              description: `Short status shown while Chronicle setup is waiting for prerequisites to complete`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording-permission-needed`:
    case `accessibility-permission-needed`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(q.Fragment, {})), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `ready`:
    case `failed`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(q.Fragment, {})), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function G(e) {
  let t = (0, K.c)(9),
    { bundleName: n, setupState: i } = e;
  switch (i.kind) {
    case `preparing`:
    case `starting`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(q.Fragment, {})), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording-permission-needed`: {
      if (i.status === `restricted`) {
        let e;
        return (
          t[1] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(l, {
                id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingRestricted`,
                defaultMessage: `Screen Recording is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Screen Recording permission.`,
                description: `Status shown when macOS Screen Recording permission is blocked by policy`,
                values: { appName: r },
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        );
      }
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, q.jsx)(l, {
              id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingDenied`,
              defaultMessage: `Please open System Settings → Privacy & Security → Screen Recording and enable {bundleName}. You may need to restart {appName} to apply the change.`,
              description: `Instructions shown when macOS Screen Recording permission has been denied`,
              values: { appName: r, bundleName: n },
            })),
            (t[2] = n),
            (t[3] = e)),
        e
      );
    }
    case `accessibility-permission-needed`: {
      if (i.status === `restricted`) {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(l, {
                id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityRestricted`,
                defaultMessage: `Accessibility is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Accessibility permission`,
                description: `Status shown when macOS Accessibility permission is blocked by policy`,
                values: { appName: r },
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
      let e;
      return (
        t[5] === n
          ? (e = t[6])
          : ((e = (0, q.jsx)(l, {
              id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityDenied`,
              defaultMessage: `Please open System Settings → Privacy & Security → Accessibility and enable {bundleName}.`,
              description: `Instructions shown when macOS Accessibility permission has not been granted`,
              values: { bundleName: n },
            })),
            (t[5] = n),
            (t[6] = e)),
        e
      );
    }
    case `ready`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(l, {
              id: `settings.general.experimentalFeatures.chronicle.setupReady`,
              defaultMessage: `You can pause Chronicle at any time by clicking "Pause Chronicle" in the {appName} menu bar.`,
              description: `Status when Chronicle setup has completed`,
              values: { appName: r },
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(l, {
              id: `settings.general.experimentalFeatures.chronicle.setupFailed`,
              defaultMessage: `Chronicle setup failed.`,
              description: `Status when Chronicle setup fails`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
  }
}
var K,
  q,
  J,
  Y = e(() => {
    ((K = a()),
      c(),
      S(),
      D(),
      s(),
      t(),
      m(),
      A(),
      N(),
      p(),
      (q = b()),
      (J = `Describe what I'm working on right now and suggest how I can use ChatGPT to help.`));
  });
function X({
  accessibilityStatus: e,
  errorMessage: t,
  isSidecarPresent: n,
  isUpdatingChronicle: r,
  processState: i,
  screenRecordingStatus: a,
}) {
  return t == null
    ? r
      ? { kind: `preparing` }
      : n
        ? Q(a)
          ? { kind: `screen-recording-permission-needed`, status: a }
          : Q(e)
            ? { kind: `accessibility-permission-needed`, status: e }
            : i === `running` && a === `granted` && e === `granted`
              ? { kind: `ready` }
              : { kind: `starting` }
        : {
            kind: `failed`,
            message: `Chronicle sidecar binary is missing from app resources.`,
          }
    : { kind: `failed`, message: t };
}
function Z(e) {
  switch (e) {
    case `screen-recording-permission-needed`:
    case `accessibility-permission-needed`:
    case `ready`:
      return !0;
    case `preparing`:
    case `starting`:
    case `failed`:
      return !1;
  }
}
function Q(e) {
  return e != null && e !== `granted`;
}
var $ = e(() => {});
export {
  R as a,
  I as c,
  M as d,
  N as f,
  J as i,
  P as l,
  $ as n,
  Y as o,
  Z as r,
  L as s,
  X as t,
  F as u,
};
//# sourceMappingURL=app-initial~app-main~personalization-settings-CsEyb6Hw.js.map
