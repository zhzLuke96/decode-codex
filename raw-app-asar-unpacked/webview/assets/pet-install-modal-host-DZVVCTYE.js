import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as t,
  Aw as n,
  C0 as r,
  Df as i,
  Fq as a,
  I2 as o,
  Mq as s,
  Nq as c,
  Pq as l,
  S0 as u,
  _0 as d,
  _Y as f,
  _f as p,
  bf as m,
  cY as h,
  gf as g,
  hf as _,
  jw as v,
  k2 as y,
  mY as b,
  mf as x,
  sY as S,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import { lt as C, st as w } from "./app-initial~app-main~page-hSvsQcNf.js";
import { n as T, t as E } from "./avatar-mascot-button-DWneJA55.js";
import { r as D, t as O } from "./custom-avatars-query-DA8PgfmT.js";
import {
  i as k,
  n as A,
  r as j,
  t as M,
} from "./pet-install-state-uFJ_BvZl.js";
function N(e) {
  let t = (0, P.c)(37),
    { session: n, onClose: r, onInstall: a } = e,
    { setSelectedAvatarId: o } = C(),
    c = n.status !== `installing`,
    u = n.status === `ready` || n.status === `installError`,
    d;
  t[0] !== c || t[1] !== r
    ? ((d = (e) => {
        !e && c && r();
      }),
      (t[0] = c),
      (t[1] = r),
      (t[2] = d))
    : (d = t[2]);
  let m = !c,
    h;
  t[3] !== u || t[4] !== a
    ? ((h = (e) => {
        (e.preventDefault(), u && a());
      }),
      (t[3] = u),
      (t[4] = a),
      (t[5] = h))
    : (h = t[5]);
  let v;
  t[6] !== n.name || t[7] !== n.status
    ? ((v =
        n.status === `installed`
          ? (0, F.jsx)(f, {
              id: `pets.install.installedTitle`,
              defaultMessage: `Installed {petName}`,
              description: `Title shown after a pet installs successfully`,
              values: { petName: n.name },
            })
          : (0, F.jsx)(f, {
              id: `pets.install.title`,
              defaultMessage: `Install {petName}?`,
              description: `Title for the pet install modal`,
              values: { petName: n.name },
            })),
      (t[6] = n.name),
      (t[7] = n.status),
      (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== n.description || t[10] !== v
    ? ((y = (0, F.jsx)(p, {
        children: (0, F.jsx)(g, { title: v, subtitle: n.description }),
      })),
      (t[9] = n.description),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== n.name || t[13] !== n.preview || t[14] !== n.status
    ? ((b = (0, F.jsx)(p, {
        children: (0, F.jsx)(`div`, {
          className: `flex min-h-32 items-center justify-center`,
          children:
            n.status === `loading`
              ? (0, F.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                  children: [
                    (0, F.jsx)(l, { className: `icon-xs` }),
                    (0, F.jsx)(f, {
                      id: `pets.install.loading`,
                      defaultMessage: `Loading {petName}`,
                      description: `Loading state shown while a pet preview is prepared`,
                      values: { petName: n.name },
                    }),
                  ],
                })
              : n.status === `previewError`
                ? (0, F.jsx)(`div`, {
                    className: `px-5 text-center text-sm text-token-text-secondary`,
                    children: (0, F.jsx)(f, {
                      id: `pets.install.error`,
                      defaultMessage: `Unable to load {petName}`,
                      description: `Error state shown when a pet cannot be prepared`,
                      values: { petName: n.name },
                    }),
                  })
                : (0, F.jsx)(E, {
                    assetRef: `codex`,
                    spriteVersionNumber: n.preview.spriteVersionNumber,
                    spritesheetUrl: n.preview.spritesheetDataUrl,
                  }),
        }),
      })),
      (t[12] = n.name),
      (t[13] = n.preview),
      (t[14] = n.status),
      (t[15] = b))
    : (b = t[15]);
  let S;
  t[16] !== n.name || t[17] !== n.status
    ? ((S =
        n.status === `installError`
          ? (0, F.jsx)(p, {
              children: (0, F.jsx)(`div`, {
                className: `text-sm text-token-text-secondary`,
                children: (0, F.jsx)(f, {
                  id: `pets.install.installError`,
                  defaultMessage: `Unable to install {petName}`,
                  description: `Error state shown when a pet preview is valid but installation fails`,
                  values: { petName: n.name },
                }),
              }),
            })
          : null),
      (t[16] = n.name),
      (t[17] = n.status),
      (t[18] = S))
    : (S = t[18]);
  let w;
  t[19] !== c ||
  t[20] !== u ||
  t[21] !== r ||
  t[22] !== n.installedAvatarId ||
  t[23] !== n.status ||
  t[24] !== o
    ? ((w = (0, F.jsx)(p, {
        children:
          n.status === `installed`
            ? (0, F.jsxs)(_, {
                children: [
                  (0, F.jsx)(s, {
                    color: `outline`,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(f, {
                      id: `pets.install.close`,
                      defaultMessage: `Close`,
                      description: `Button label to close a completed pet install modal`,
                    }),
                  }),
                  (0, F.jsx)(s, {
                    type: `button`,
                    onClick: () => {
                      (o(n.installedAvatarId), r());
                    },
                    children: (0, F.jsx)(f, {
                      id: `pets.install.usePet`,
                      defaultMessage: `Use this pet`,
                      description: `Button label to select an installed pet`,
                    }),
                  }),
                ],
              })
            : (0, F.jsxs)(_, {
                children: [
                  (0, F.jsx)(s, {
                    color: `outline`,
                    disabled: !c,
                    type: `button`,
                    onClick: r,
                    children: (0, F.jsx)(f, {
                      id: `pets.install.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button label to cancel a pet install`,
                    }),
                  }),
                  (0, F.jsx)(s, {
                    disabled: !u,
                    loading: n.status === `installing`,
                    type: `submit`,
                    children:
                      n.status === `installError`
                        ? (0, F.jsx)(f, {
                            id: `pets.install.tryAgain`,
                            defaultMessage: `Try again`,
                            description: `Button label to retry a failed pet install`,
                          })
                        : (0, F.jsx)(f, {
                            id: `pets.install.install`,
                            defaultMessage: `Install`,
                            description: `Button label to install a pet`,
                          }),
                  }),
                ],
              }),
      })),
      (t[19] = c),
      (t[20] = u),
      (t[21] = r),
      (t[22] = n.installedAvatarId),
      (t[23] = n.status),
      (t[24] = o),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== h || t[27] !== y || t[28] !== b || t[29] !== S || t[30] !== w
    ? ((T = (0, F.jsxs)(x, {
        as: `form`,
        onSubmit: h,
        children: [y, b, S, w],
      })),
      (t[26] = h),
      (t[27] = y),
      (t[28] = b),
      (t[29] = S),
      (t[30] = w),
      (t[31] = T))
    : (T = t[31]);
  let D;
  return (
    t[32] !== c || t[33] !== d || t[34] !== m || t[35] !== T
      ? ((D = (0, F.jsx)(i, {
          open: !0,
          onOpenChange: d,
          shouldIgnoreClickOutside: m,
          showDialogClose: c,
          size: `compact`,
          children: T,
        })),
        (t[32] = c),
        (t[33] = d),
        (t[34] = m),
        (t[35] = T),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
var P,
  F,
  I = e(() => {
    ((P = o()), b(), T(), w(), c(), t(), m(), a(), (F = y()));
  });
function L(e) {
  let t = (0, R.c)(10),
    { onClose: n } = e,
    i = u(S),
    a = r(k),
    o = v();
  if (a == null) return null;
  let s;
  t[0] !== n || t[1] !== i
    ? ((s = () => {
        (M(i), n());
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== o || t[4] !== i
    ? ((c = () => j(i, () => o(O))), (t[3] = o), (t[4] = i), (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== a || t[7] !== s || t[8] !== c
      ? ((l = (0, z.jsx)(N, { session: a, onClose: s, onInstall: c })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var R, z;
e(() => {
  ((R = o()), d(), D(), n(), h(), I(), A(), (z = y()));
})();
export { L as PetInstallModalHost };
//# sourceMappingURL=pet-install-modal-host-DZVVCTYE.js.map
