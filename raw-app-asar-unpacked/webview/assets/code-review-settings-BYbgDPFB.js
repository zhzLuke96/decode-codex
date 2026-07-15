import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ds as t,
  I2 as n,
  Mq as r,
  Nq as i,
  S0 as a,
  SK as o,
  Ts as s,
  _0 as c,
  _Y as l,
  bK as u,
  cY as d,
  js as f,
  k2 as p,
  mY as m,
  sY as h,
  yY as g,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  c as _,
  s as v,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
import {
  a as y,
  d as b,
  l as x,
  o as S,
  p as C,
  r as w,
  u as T,
} from "./app-initial~app-main~settings-page~browser-use-settings~computer-use-settings-BLBT7saQ.js";
import {
  f as E,
  p as D,
  v as O,
  y as k,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  it as A,
  rt as j,
} from "./app-initial~app-main~onboarding-page~appearance-settings~import-settings~general-settings-CjgX07KN.js";
import {
  n as M,
  t as N,
} from "./app-initial~app-main~appgen-settings-page~hotkey-window-thread-page~skills-settings~plugins~k08xsrfg-BNylEhcc.js";
import { a as P, o as F, r as I } from "./cloud-preferences-BFe7z4Sn.js";
function L() {
  let e = (0, B.c)(8),
    t = a(h),
    n = g(),
    i = P(),
    s = F(),
    { canManageCreditSettings: c } = _(),
    u,
    d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, V.jsx)(y, { slug: `code-review` })),
      (d = (0, V.jsx)(l, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up ChatGPT to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[0] = u),
      (e[1] = d))
    : ((u = e[0]), (d = e[1]));
  let f;
  return (
    e[2] !== c || e[3] !== n || e[4] !== i || e[5] !== t || e[6] !== s
      ? ((f = (0, V.jsx)(b, {
          title: u,
          subtitle: d,
          children:
            i.data == null
              ? i.isError
                ? (0, V.jsx)(N, {
                    children: (0, V.jsx)(N.Content, {
                      children: (0, V.jsx)(E, {
                        children: (0, V.jsx)(O, {
                          label: (0, V.jsx)(l, {
                            id: `settings.codeReview.error`,
                            defaultMessage: `Unable to load code review settings`,
                            description: `Error state for code review settings`,
                          }),
                          control: (0, V.jsx)(r, {
                            color: `secondary`,
                            size: `toolbar`,
                            onClick: () => {
                              i.refetch();
                            },
                            children: (0, V.jsx)(l, {
                              id: `settings.codeReview.retry`,
                              defaultMessage: `Retry`,
                              description: `Button to retry loading code review settings`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  })
                : (0, V.jsx)(x, {
                    children: (0, V.jsx)(l, {
                      id: `settings.codeReview.loading`,
                      defaultMessage: `Loading code review settings…`,
                      description: `Loading state for code review settings`,
                    }),
                  })
              : (0, V.jsx)(R, {
                  disabled: s.isPending,
                  showCreditPreference: c,
                  preferences: i.data,
                  onUpdate: (e) => {
                    s.mutate(e, {
                      onError: () => {
                        t.get(o).danger(
                          n.formatMessage({
                            id: `settings.codeReview.save.error`,
                            defaultMessage: `Unable to save code review settings`,
                            description: `Toast shown when saving code review settings fails`,
                          }),
                        );
                      },
                    });
                  },
                }),
        })),
        (e[2] = c),
        (e[3] = n),
        (e[4] = i),
        (e[5] = t),
        (e[6] = s),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
function R(e) {
  let n = (0, B.c)(46),
    { disabled: r, preferences: i, showCreditPreference: a, onUpdate: o } = e,
    c = g(),
    u = i.code_review_trigger_policy ?? H[0],
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, V.jsx)(N.Header, {
        title: (0, V.jsx)(l, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (n[0] = d))
    : (d = n[0]);
  let f, p;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (p = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review pull requests in repositories with code review enabled`,
        description: `Description for automatic code review preference`,
      })),
      (n[1] = f),
      (n[2] = p))
    : ((f = n[1]), (p = n[2]));
  let m;
  n[3] === c
    ? (m = n[4])
    : ((m = c.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (n[3] = c),
      (n[4] = m));
  let h = i.code_review_preference === `always`,
    _;
  n[5] === o
    ? (_ = n[6])
    : ((_ = (e) => {
        o({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (n[5] = o),
      (n[6] = _));
  let v;
  n[7] !== r || n[8] !== m || n[9] !== h || n[10] !== _
    ? ((v = (0, V.jsx)(O, {
        label: f,
        description: p,
        control: (0, V.jsx)(j, {
          ariaLabel: m,
          checked: h,
          disabled: r,
          onChange: _,
        }),
      })),
      (n[7] = r),
      (n[8] = m),
      (n[9] = h),
      (n[10] = _),
      (n[11] = v))
    : (v = n[11]);
  let y, b;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (b = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when ChatGPT should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (n[12] = y),
      (n[13] = b))
    : ((y = n[12]), (b = n[13]));
  let x;
  n[14] === u ? (x = n[15]) : ((x = z(u)), (n[14] = u), (n[15] = x));
  let S;
  n[16] !== r || n[17] !== x
    ? ((S = (0, V.jsx)(w, { disabled: r, children: x })),
      (n[16] = r),
      (n[17] = x),
      (n[18] = S))
    : (S = n[18]);
  let C;
  n[19] === o
    ? (C = n[20])
    : ((C = H.map((e) =>
        (0, V.jsx)(
          t.Item,
          {
            onSelect: () => {
              o({ code_review_trigger_policy: e });
            },
            children: z(e),
          },
          e,
        ),
      )),
      (n[19] = o),
      (n[20] = C));
  let T;
  n[21] !== S || n[22] !== C
    ? ((T = (0, V.jsx)(O, {
        label: y,
        description: b,
        control: (0, V.jsx)(s, { triggerButton: S, children: C }),
      })),
      (n[21] = S),
      (n[22] = C),
      (n[23] = T))
    : (T = n[23]);
  let D, k;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (k = (0, V.jsx)(l, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until ChatGPT stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (n[24] = D),
      (n[25] = k))
    : ((D = n[24]), (k = n[25]));
  let A;
  n[26] === c
    ? (A = n[27])
    : ((A = c.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (n[26] = c),
      (n[27] = A));
  let M;
  n[28] === o
    ? (M = n[29])
    : ((M = (e) => {
        o({ exhaustive_code_review: e });
      }),
      (n[28] = o),
      (n[29] = M));
  let P;
  n[30] !== r ||
  n[31] !== i.exhaustive_code_review ||
  n[32] !== A ||
  n[33] !== M
    ? ((P = (0, V.jsx)(O, {
        label: D,
        description: k,
        control: (0, V.jsx)(j, {
          ariaLabel: A,
          checked: i.exhaustive_code_review,
          disabled: r,
          onChange: M,
        }),
      })),
      (n[30] = r),
      (n[31] = i.exhaustive_code_review),
      (n[32] = A),
      (n[33] = M),
      (n[34] = P))
    : (P = n[34]);
  let F;
  n[35] !== r ||
  n[36] !== c ||
  n[37] !== o ||
  n[38] !== i.allow_credits_for_code_reviews ||
  n[39] !== a
    ? ((F = a
        ? (0, V.jsx)(O, {
            label: (0, V.jsx)(l, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, V.jsx)(l, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, V.jsx)(j, {
              ariaLabel: c.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: i.allow_credits_for_code_reviews,
              disabled: r,
              onChange: (e) => {
                o({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (n[35] = r),
      (n[36] = c),
      (n[37] = o),
      (n[38] = i.allow_credits_for_code_reviews),
      (n[39] = a),
      (n[40] = F))
    : (F = n[40]);
  let I;
  return (
    n[41] !== T || n[42] !== P || n[43] !== F || n[44] !== v
      ? ((I = (0, V.jsxs)(N, {
          children: [
            d,
            (0, V.jsx)(N.Content, {
              children: (0, V.jsxs)(E, { children: [v, T, P, F] }),
            }),
          ],
        })),
        (n[41] = T),
        (n[42] = P),
        (n[43] = F),
        (n[44] = v),
        (n[45] = I))
      : (I = n[45]),
    I
  );
}
function z(e) {
  switch (e) {
    case `pr_open`:
      return (0, V.jsx)(l, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, V.jsx)(l, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, V.jsx)(l, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
var B, V, H;
e(() => {
  ((B = n()),
    c(),
    m(),
    i(),
    f(),
    u(),
    A(),
    d(),
    C(),
    M(),
    T(),
    k(),
    S(),
    D(),
    v(),
    I(),
    (V = p()),
    (H = [`pr_open`, `every_push`, `smart_detect`]));
})();
export { L as CodeReviewSettings };
//# sourceMappingURL=code-review-settings-BYbgDPFB.js.map
