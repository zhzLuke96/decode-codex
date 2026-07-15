import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as n,
  L2 as r,
  Mq as i,
  Nq as a,
  S0 as o,
  SK as s,
  _0 as c,
  _Y as l,
  bK as u,
  cY as d,
  k2 as f,
  mY as p,
  sY as m,
  yY as h,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  An as g,
  kn as ee,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
import {
  a as _,
  d as v,
  l as y,
  o as b,
  p as x,
  u as S,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as C,
  p as w,
  v as T,
  y as E,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as D,
  t as O,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import {
  a as k,
  i as te,
  n as A,
  o as j,
  r as M,
  t as N,
} from "./cloud-preferences-BFe7z4Sn.js";
function P() {
  let e = (0, I.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, R.jsx)(v, {
          title: (0, R.jsx)(_, { slug: `cloud-settings` }),
          children: (0, R.jsx)(F, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function F() {
  let e = (0, I.c)(95),
    t = h(),
    n = o(m),
    r = k(),
    a = te(),
    c = j(),
    [u, d] = (0, L.useState)(null);
  if (r.isError || a.isError) {
    let t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.loadError`,
          defaultMessage: `Unable to load cloud preferences`,
          description: `Error message shown when cloud preferences fail to load`,
        })),
        (e[0] = t))
      : (t = e[0]);
    let n;
    e[1] !== a || e[2] !== r
      ? ((n = () => {
          (r.refetch(), a.refetch());
        }),
        (e[1] = a),
        (e[2] = r),
        (e[3] = n))
      : (n = e[3]);
    let o;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading cloud preferences`,
        })),
        (e[4] = o))
      : (o = e[4]);
    let s;
    return (
      e[5] === n
        ? (s = e[6])
        : ((s = (0, R.jsx)(O, {
            children: (0, R.jsx)(O.Content, {
              children: (0, R.jsx)(C, {
                children: (0, R.jsx)(T, {
                  label: t,
                  control: (0, R.jsx)(i, {
                    color: `secondary`,
                    onClick: n,
                    size: `toolbar`,
                    children: o,
                  }),
                }),
              }),
            }),
          })),
          (e[5] = n),
          (e[6] = s)),
      s
    );
  }
  if (r.data == null || a.data == null) {
    let t;
    return (
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, R.jsx)(y, {
            children: (0, R.jsx)(l, {
              id: `settings.general.cloudPreferences.loading`,
              defaultMessage: `Loading cloud preferences…`,
              description: `Loading label for cloud preferences`,
            }),
          })),
          (e[7] = t))
        : (t = e[7]),
      t
    );
  }
  let f = r.data,
    p = a.data,
    g = u?.baseline === f.branch_format ? u.value : f.branch_format,
    _,
    v,
    b,
    x,
    S,
    w,
    E,
    D,
    M;
  if (
    e[8] !== g ||
    e[9] !== p.branch_format_max_length ||
    e[10] !== p.branch_format_special_values ||
    e[11] !== t ||
    e[12] !== f.git_diff_mode ||
    e[13] !== n ||
    e[14] !== c
  ) {
    S = A(g, p.branch_format_max_length, p.branch_format_special_values);
    let r;
    (e[24] !== t || e[25] !== n || e[26] !== c
      ? ((r = (e, r) => {
          c.mutate(e, {
            onSuccess: () => {
              n.get(s).success(r);
            },
            onError: () => {
              n.get(s).danger(
                t.formatMessage({
                  id: `settings.general.cloudPreferences.save.error`,
                  defaultMessage: `Unable to save cloud preference`,
                  description: `Toast shown when saving a cloud preference fails`,
                }),
              );
            },
          });
        }),
        (e[24] = t),
        (e[25] = n),
        (e[26] = c),
        (e[27] = r))
      : (r = e[27]),
      (w = r),
      (x = O),
      (b = O.Content),
      (v = C));
    let i, a;
    e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (a = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud tasks`,
          description: `Description for cloud diff display preference`,
        })),
        (e[28] = i),
        (e[29] = a))
      : ((i = e[28]), (a = e[29]));
    let o;
    e[30] === t
      ? (o = e[31])
      : ((o = t.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[30] = t),
        (e[31] = o));
    let u;
    e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[32] = u))
      : (u = e[32]);
    let d;
    e[33] === c.isPending
      ? (d = e[34])
      : ((d = { id: `unified`, label: u, disabled: c.isPending }),
        (e[33] = c.isPending),
        (e[34] = d));
    let m;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, R.jsx)(l, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[35] = m))
      : (m = e[35]);
    let h;
    e[36] === c.isPending
      ? (h = e[37])
      : ((h = { id: `split`, label: m, disabled: c.isPending }),
        (e[36] = c.isPending),
        (e[37] = h));
    let y;
    e[38] !== h || e[39] !== d
      ? ((y = [d, h]), (e[38] = h), (e[39] = d), (e[40] = y))
      : (y = e[40]);
    let k;
    (e[41] !== t || e[42] !== w
      ? ((k = (e) => {
          w(
            { git_diff_mode: e },
            t.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[41] = t),
        (e[42] = w),
        (e[43] = k))
      : (k = e[43]),
      e[44] !== f.git_diff_mode || e[45] !== y || e[46] !== k || e[47] !== o
        ? ((M = (0, R.jsx)(T, {
            label: i,
            description: a,
            control: (0, R.jsx)(ee, {
              ariaLabel: o,
              options: y,
              selectedId: f.git_diff_mode,
              onSelect: k,
            }),
          })),
          (e[44] = f.git_diff_mode),
          (e[45] = y),
          (e[46] = k),
          (e[47] = o),
          (e[48] = M))
        : (M = e[48]),
      (_ = T),
      e[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, R.jsx)(l, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[49] = E))
        : (E = e[49]),
      (D =
        S == null
          ? (0, R.jsx)(l, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: N(g, p.branch_format_special_values) },
            })
          : re(S)),
      (e[8] = g),
      (e[9] = p.branch_format_max_length),
      (e[10] = p.branch_format_special_values),
      (e[11] = t),
      (e[12] = f.git_diff_mode),
      (e[13] = n),
      (e[14] = c),
      (e[15] = _),
      (e[16] = v),
      (e[17] = b),
      (e[18] = x),
      (e[19] = S),
      (e[20] = w),
      (e[21] = E),
      (e[22] = D),
      (e[23] = M));
  } else
    ((_ = e[15]),
      (v = e[16]),
      (b = e[17]),
      (x = e[18]),
      (S = e[19]),
      (w = e[20]),
      (E = e[21]),
      (D = e[22]),
      (M = e[23]));
  let P;
  e[50] === t
    ? (P = e[51])
    : ((P = t.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[50] = t),
      (e[51] = P));
  let F = c.isPending,
    z;
  e[52] === t
    ? (z = e[53])
    : ((z = t.formatMessage(
        {
          id: `settings.general.cloudPreferences.branchFormat.input.placeholder`,
          defaultMessage: `codex/{pattern}`,
          description: `Placeholder for the cloud branch format input`,
        },
        { pattern: `{feature}` },
      )),
      (e[52] = t),
      (e[53] = z));
  let B;
  e[54] === f.branch_format
    ? (B = e[55])
    : ((B = (e) => {
        d({ baseline: f.branch_format, value: e.target.value });
      }),
      (e[54] = f.branch_format),
      (e[55] = B));
  let V;
  e[56] !== g ||
  e[57] !== P ||
  e[58] !== z ||
  e[59] !== B ||
  e[60] !== c.isPending
    ? ((V = (0, R.jsx)(`input`, {
        className: `w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border`,
        "aria-label": P,
        disabled: F,
        placeholder: z,
        value: g,
        onChange: B,
      })),
      (e[56] = g),
      (e[57] = P),
      (e[58] = z),
      (e[59] = B),
      (e[60] = c.isPending),
      (e[61] = V))
    : (V = e[61]);
  let H;
  e[62] !== _ || e[63] !== E || e[64] !== D || e[65] !== V
    ? ((H = (0, R.jsx)(_, { label: E, description: D, control: V })),
      (e[62] = _),
      (e[63] = E),
      (e[64] = D),
      (e[65] = V),
      (e[66] = H))
    : (H = e[66]);
  let U;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[67] = U))
    : (U = e[67]);
  let W;
  e[68] === p.branch_format_special_values
    ? (W = e[69])
    : ((W = p.branch_format_special_values.map(ne).join(`, `)),
      (e[68] = p.branch_format_special_values),
      (e[69] = W));
  let G;
  e[70] === W
    ? (G = e[71])
    : ((G = (0, R.jsx)(`span`, { className: `[text-wrap:wrap]`, children: W })),
      (e[70] = W),
      (e[71] = G));
  let K = g === f.branch_format || S != null,
    q;
  e[72] !== g || e[73] !== t || e[74] !== w
    ? ((q = () => {
        w(
          { branch_format: g },
          t.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[72] = g),
      (e[73] = t),
      (e[74] = w),
      (e[75] = q))
    : (q = e[75]);
  let J;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[76] = J))
    : (J = e[76]);
  let Y;
  e[77] !== K || e[78] !== q || e[79] !== c.isPending
    ? ((Y = (0, R.jsx)(i, {
        color: `primary`,
        disabled: K,
        loading: c.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[77] = K),
      (e[78] = q),
      (e[79] = c.isPending),
      (e[80] = Y))
    : (Y = e[80]);
  let X;
  e[81] !== G || e[82] !== Y
    ? ((X = (0, R.jsx)(T, { label: U, description: G, control: Y })),
      (e[81] = G),
      (e[82] = Y),
      (e[83] = X))
    : (X = e[83]);
  let Z;
  e[84] !== v || e[85] !== X || e[86] !== M || e[87] !== H
    ? ((Z = (0, R.jsxs)(v, { children: [M, H, X] })),
      (e[84] = v),
      (e[85] = X),
      (e[86] = M),
      (e[87] = H),
      (e[88] = Z))
    : (Z = e[88]);
  let Q;
  e[89] !== b || e[90] !== Z
    ? ((Q = (0, R.jsx)(b, { children: Z })),
      (e[89] = b),
      (e[90] = Z),
      (e[91] = Q))
    : (Q = e[91]);
  let $;
  return (
    e[92] !== x || e[93] !== Q
      ? (($ = (0, R.jsx)(x, { children: Q })),
        (e[92] = x),
        (e[93] = Q),
        (e[94] = $))
      : ($ = e[94]),
    $
  );
}
function ne(e) {
  return e.value;
}
function re(e) {
  switch (e) {
    case `bracket-mismatch`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, R.jsx)(l, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var I, L, R;
e(() => {
  ((I = n()),
    c(),
    (L = t(r(), 1)),
    p(),
    a(),
    g(),
    u(),
    d(),
    x(),
    D(),
    S(),
    E(),
    b(),
    w(),
    M(),
    (R = f()));
})();
export { P as CloudPreferencesSettings };
//# sourceMappingURL=cloud-preferences-settings-BvNam_F5.js.map
