import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as n,
  DJ as r,
  Df as i,
  I2 as a,
  IJ as o,
  KJ as s,
  L2 as c,
  Mq as l,
  Nq as u,
  _Y as d,
  _f as f,
  bf as p,
  gf as m,
  hf as h,
  k2 as g,
  lY as _,
  mY as v,
  mf as y,
  ov as b,
  qJ as x,
  sv as S,
  yY as C,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  n as w,
  t as T,
} from "./app-initial~app-main~new-thread-panel-page~pricing-plan-page~appgen-library-page~hotkey-win~ksix5pu6-Chm5vhV9.js";
import { n as E, r as D } from "./plan-pricing-vmbBGPZd.js";
function O(e) {
  let t = (0, k.c)(18),
    { ariaLabel: n, className: r, options: i, selectedId: a, onSelect: c } = e,
    l = (0, A.useId)(),
    u;
  t[0] === r
    ? (u = t[1])
    : ((u = s(`bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1`, r)),
      (t[0] = r),
      (t[1] = u));
  let d = `repeat(${i.length}, minmax(0, 1fr))`,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = { gridTemplateColumns: d }), (t[2] = d), (t[3] = f));
  let p;
  if (t[4] !== l || t[5] !== c || t[6] !== i || t[7] !== a) {
    let e;
    (t[9] !== l || t[10] !== c || t[11] !== a
      ? ((e = (e) => {
          let t = e.id === a;
          return (0, j.jsxs)(
            `button`,
            {
              className: s(
                `cursor-interaction relative isolate min-w-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-transform duration-basic active:scale-[0.98]`,
                t ? `text-black` : `text-token-text-secondary`,
              ),
              type: `button`,
              "aria-label": e.ariaLabel,
              "aria-pressed": t,
              onClick: () => {
                c(e.id);
              },
              children: [
                t
                  ? (0, j.jsx)(o.span, {
                      layoutId: l,
                      className: `absolute inset-0 -z-10 rounded-xl bg-white shadow-sm`,
                      transition: { type: `spring`, duration: 0.28, bounce: 0 },
                    })
                  : null,
                e.label,
              ],
            },
            e.id,
          );
        }),
        (t[9] = l),
        (t[10] = c),
        (t[11] = a),
        (t[12] = e))
      : (e = t[12]),
      (p = i.map(e)),
      (t[4] = l),
      (t[5] = c),
      (t[6] = i),
      (t[7] = a),
      (t[8] = p));
  } else p = t[8];
  let m;
  return (
    t[13] !== n || t[14] !== u || t[15] !== f || t[16] !== p
      ? ((m = (0, j.jsx)(`div`, {
          className: u,
          role: `group`,
          "aria-label": n,
          style: f,
          children: p,
        })),
        (t[13] = n),
        (t[14] = u),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var k,
  A,
  j,
  M = e(() => {
    ((k = a()), x(), r(), (A = t(c(), 1)), (j = g()));
  });
function N(e) {
  let t = (0, F.c)(98),
    {
      isUpdating: n,
      onCancel: r,
      onConfirm: a,
      onGoToWeb: o,
      onOpenChange: c,
      pricingInfo: u,
      subscriptionUpdate: p,
    } = e,
    g = C(),
    { preview: v } = p,
    b;
  t[0] === a
    ? (b = t[1])
    : ((b = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = b));
  let x = b,
    S,
    w,
    T;
  if (p.kind === `saved_card_upgrade`) {
    let e;
    bb0: switch (p.updatedPlan) {
      case `chatgptplusplan`:
        e = `Plus`;
        break bb0;
      case `chatgptprolite`:
        e = `Pro 5x`;
        break bb0;
      case `chatgptpro`:
        e = `Pro 20x`;
    }
    let n;
    if (
      t[2] !== p.paymentMethod.card_brand ||
      t[3] !== p.paymentMethod.card_last4
    ) {
      let e = p.paymentMethod.card_brand?.trim() ?? ``,
        r;
      t[5] === p.paymentMethod.card_last4
        ? (r = t[6])
        : ((r = p.paymentMethod.card_last4?.trim() ?? ``),
          (t[5] = p.paymentMethod.card_last4),
          (t[6] = r));
      let i = r;
      ((n = e),
        e && i ? (n = `${e.toUpperCase()} *${i}`) : i && (n = `*${i}`),
        (t[2] = p.paymentMethod.card_brand),
        (t[3] = p.paymentMethod.card_last4),
        (t[4] = n));
    } else n = t[4];
    let r;
    (t[7] === e
      ? (r = t[8])
      : ((r = (0, I.jsx)(d, {
          id: `settings.usage.pricingPlanPage.savedCardUpgrade.description`,
          defaultMessage: `You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method.`,
          description: `Description for the dialog confirming a Pro upgrade using a saved credit card`,
          values: { targetPlan: e },
        })),
        (t[7] = e),
        (t[8] = r)),
      (S = r));
    let i;
    t[9] === e
      ? (i = t[10])
      : ((i = (0, I.jsx)(d, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.subscription`,
          defaultMessage: `ChatGPT {targetPlan} subscription`,
          description: `Subscription selected in the Pro plan update dialog`,
          values: { targetPlan: e },
        })),
        (t[9] = e),
        (t[10] = i));
    let a;
    t[11] !== g ||
    t[12] !== v.currency ||
    t[13] !== v.positive_line_item_total ||
    t[14] !== p.minorUnitExponent
      ? ((a = P(
          g,
          v.positive_line_item_total,
          v.currency,
          p.minorUnitExponent,
        )),
        (t[11] = g),
        (t[12] = v.currency),
        (t[13] = v.positive_line_item_total),
        (t[14] = p.minorUnitExponent),
        (t[15] = a))
      : (a = t[15]);
    let o;
    t[16] === a
      ? (o = t[17])
      : ((o = (0, I.jsx)(`span`, { children: a })), (t[16] = a), (t[17] = o));
    let c;
    t[18] !== i || t[19] !== o
      ? ((c = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [i, o],
        })),
        (t[18] = i),
        (t[19] = o),
        (t[20] = c))
      : (c = t[20]);
    let l, u;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, I.jsx)(`span`, {
          className: `mt-0.5 text-xs text-token-text-secondary`,
          children: (0, I.jsx)(d, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle`,
            defaultMessage: `Billed monthly, starting today`,
            description: `Billing cycle information in the Pro upgrade dialog`,
          }),
        })),
        (u = (0, I.jsx)(`hr`, {
          className: `my-4 border-token-border-default`,
        })),
        (t[21] = l),
        (t[22] = u))
      : ((l = t[21]), (u = t[22]));
    let f;
    t[23] !== g ||
    t[24] !== v.amount_due.amount_excluding_tax ||
    t[25] !== v.amount_due.tax_amount ||
    t[26] !== v.currency ||
    t[27] !== p.minorUnitExponent
      ? ((f =
          v.amount_due.tax_amount > 0
            ? (0, I.jsxs)(I.Fragment, {
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(d, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.subtotal`,
                        defaultMessage: `Subtotal`,
                        description: `Subtotal in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(
                          g,
                          v.amount_due.amount_excluding_tax,
                          v.currency,
                          p.minorUnitExponent,
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `mt-2 flex justify-between gap-4`,
                    children: [
                      (0, I.jsx)(d, {
                        id: `settings.usage.pricingPlanPage.subscriptionUpdate.tax`,
                        defaultMessage: `Tax`,
                        description: `Tax in the Pro upgrade dialog`,
                      }),
                      (0, I.jsx)(`span`, {
                        children: P(
                          g,
                          v.amount_due.tax_amount,
                          v.currency,
                          p.minorUnitExponent,
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : null),
        (t[23] = g),
        (t[24] = v.amount_due.amount_excluding_tax),
        (t[25] = v.amount_due.tax_amount),
        (t[26] = v.currency),
        (t[27] = p.minorUnitExponent),
        (t[28] = f))
      : (f = t[28]);
    let m = v.amount_due.tax_amount > 0 && `mt-2`,
      h;
    t[29] === m
      ? (h = t[30])
      : ((h = s(`flex justify-between gap-4 font-semibold`, m)),
        (t[29] = m),
        (t[30] = h));
    let _;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, I.jsx)(d, {
          id: `settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday`,
          defaultMessage: `Total due today`,
          description: `Total due today in the Pro upgrade dialog`,
        })),
        (t[31] = _))
      : (_ = t[31]);
    let y;
    t[32] !== g ||
    t[33] !== v.amount_due.amount ||
    t[34] !== v.currency ||
    t[35] !== p.minorUnitExponent
      ? ((y = P(g, v.amount_due.amount, v.currency, p.minorUnitExponent)),
        (t[32] = g),
        (t[33] = v.amount_due.amount),
        (t[34] = v.currency),
        (t[35] = p.minorUnitExponent),
        (t[36] = y))
      : (y = t[36]);
    let b;
    t[37] === y
      ? (b = t[38])
      : ((b = (0, I.jsx)(`span`, { children: y })), (t[37] = y), (t[38] = b));
    let x;
    t[39] !== h || t[40] !== b
      ? ((x = (0, I.jsxs)(`div`, { className: h, children: [_, b] })),
        (t[39] = h),
        (t[40] = b),
        (t[41] = x))
      : (x = t[41]);
    let C;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, I.jsx)(`hr`, {
          className: `my-4 border-token-border-default`,
        })),
        (t[42] = C))
      : (C = t[42]);
    let E;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, I.jsx)(`span`, {
          className: `font-semibold`,
          children: (0, I.jsx)(d, {
            id: `settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod`,
            defaultMessage: `Payment method`,
            description: `Payment method label in the Pro upgrade dialog`,
          }),
        })),
        (t[43] = E))
      : (E = t[43]);
    let D;
    t[44] === n
      ? (D = t[45])
      : ((D = (0, I.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [
            E,
            (0, I.jsx)(`span`, {
              className: `truncate text-token-text-secondary`,
              children: n,
            }),
          ],
        })),
        (t[44] = n),
        (t[45] = D));
    let O;
    (t[46] !== x || t[47] !== D || t[48] !== c || t[49] !== f
      ? ((O = (0, I.jsxs)(`div`, {
          className: `flex flex-col text-sm`,
          children: [c, l, u, f, x, C, D],
        })),
        (t[46] = x),
        (t[47] = D),
        (t[48] = c),
        (t[49] = f),
        (t[50] = O))
      : (O = t[50]),
      (w = O));
    let k;
    (t[51] === v.amount_due.amount
      ? (k = t[52])
      : ((k =
          v.amount_due.amount > 0
            ? (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.payNow`,
                defaultMessage: `Pay now`,
                description: `Button paying for a Pro upgrade using the saved payment method`,
              })
            : (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.savedCardUpgrade.confirm`,
                defaultMessage: `Confirm`,
                description: `Button confirming a Pro upgrade with no immediate payment due`,
              })),
        (t[51] = v.amount_due.amount),
        (t[52] = k)),
      (T = k));
  } else {
    let e = v.renewal_date,
      n;
    t[53] !== g || t[54] !== u
      ? ((n =
          u == null
            ? null
            : E({
                amount: u.monthlyAmounts.prolite,
                currencyCode: u.currencyCode,
                intl: g,
                minorUnitExponent: u.minorUnitExponent,
              })),
        (t[53] = g),
        (t[54] = u),
        (t[55] = n))
      : (n = t[55]);
    let r = n,
      i;
    (t[56] === e
      ? (i = t[57])
      : ((i =
          e == null
            ? (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.descriptionWithoutDate`,
                defaultMessage: `Your Pro 20x subscription will change to Pro 5x at the end of your current billing period.`,
                description: `Description for a Pro 20x to Pro 5x downgrade when the renewal date is unavailable`,
              })
            : (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.description`,
                defaultMessage: `Your Pro 20x subscription will remain active until {renewalDate}, when it will change to Pro 5x.`,
                description: `Description for a scheduled downgrade from Pro 20x to Pro 5x`,
                values: {
                  renewalDate: (0, I.jsx)(_, {
                    value: new Date(e),
                    year: `numeric`,
                    month: `long`,
                    day: `numeric`,
                  }),
                },
              })),
        (t[56] = e),
        (t[57] = i)),
      (S = i));
    let a;
    t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, I.jsx)(d, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlan`,
          defaultMessage: `ChatGPT Pro 5x`,
          description: `New plan in the Pro 20x to Pro 5x downgrade dialog`,
        })),
        (t[58] = a))
      : (a = t[58]);
    let o;
    t[59] === r
      ? (o = t[60])
      : ((o =
          r == null
            ? null
            : (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice`,
                defaultMessage: `{price} / month`,
                description: `Monthly price of Pro 5x in the downgrade dialog`,
                values: { price: r.formatted },
              })),
        (t[59] = r),
        (t[60] = o));
    let s;
    t[61] === o
      ? (s = t[62])
      : ((s = (0, I.jsxs)(`div`, {
          className: `flex justify-between gap-4 font-semibold`,
          children: [a, o],
        })),
        (t[61] = o),
        (t[62] = s));
    let c;
    t[63] === e
      ? (c = t[64])
      : ((c =
          e == null
            ? (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(d, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate`,
                  defaultMessage: `Billing will start at the end of your current billing period`,
                  description: `Billing start information when the renewal date is unavailable`,
                }),
              })
            : (0, I.jsx)(`div`, {
                className: `mt-1 text-xs text-token-text-secondary`,
                children: (0, I.jsx)(d, {
                  id: `settings.usage.pricingPlanPage.proLiteDowngrade.billingStart`,
                  defaultMessage: `Billing will start on {renewalDate}`,
                  description: `Billing start date in the Pro 5x downgrade dialog`,
                  values: {
                    renewalDate: (0, I.jsx)(_, {
                      value: new Date(e),
                      year: `numeric`,
                      month: `long`,
                      day: `numeric`,
                    }),
                  },
                }),
              })),
        (t[63] = e),
        (t[64] = c));
    let l;
    (t[65] !== s || t[66] !== c
      ? ((l = (0, I.jsxs)(`div`, {
          className: `bg-token-main-surface-secondary rounded-xl border border-token-border-default p-4 text-sm`,
          children: [s, c],
        })),
        (t[65] = s),
        (t[66] = c),
        (t[67] = l))
      : (l = t[67]),
      (w = l));
    let f;
    (t[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, I.jsx)(d, {
          id: `settings.usage.pricingPlanPage.proLiteDowngrade.confirm`,
          defaultMessage: `Confirm`,
          description: `Button confirming a downgrade from Pro 20x to Pro 5x`,
        })),
        (t[68] = f))
      : (f = t[68]),
      (T = f));
  }
  let D = !n,
    O;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, I.jsx)(d, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.title`,
        defaultMessage: `Confirm plan changes`,
        description: `Title for the Pro subscription update dialog`,
      })),
      (t[69] = O))
    : (O = t[69]);
  let k;
  t[70] === S
    ? (k = t[71])
    : ((k = (0, I.jsx)(f, {
        children: (0, I.jsx)(m, { title: O, subtitle: S }),
      })),
      (t[70] = S),
      (t[71] = k));
  let A;
  t[72] === w
    ? (A = t[73])
    : ((A = (0, I.jsx)(f, { children: w })), (t[72] = w), (t[73] = A));
  let j;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, I.jsx)(d, {
        id: `settings.usage.pricingPlanPage.subscriptionUpdate.cancel`,
        defaultMessage: `Cancel`,
        description: `Button canceling a Pro subscription update`,
      })),
      (t[74] = j))
    : (j = t[74]);
  let M;
  t[75] !== n || t[76] !== r
    ? ((M = (0, I.jsx)(l, {
        color: `ghost`,
        disabled: n,
        type: `button`,
        onClick: r,
        children: j,
      })),
      (t[75] = n),
      (t[76] = r),
      (t[77] = M))
    : (M = t[77]);
  let N;
  t[78] !== n || t[79] !== o || t[80] !== p.kind
    ? ((N =
        p.kind === `scheduled_downgrade`
          ? (0, I.jsx)(l, {
              color: `secondary`,
              disabled: n,
              type: `button`,
              onClick: o,
              children: (0, I.jsx)(d, {
                id: `settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb`,
                defaultMessage: `Go to web`,
                description: `Button continuing a Pro subscription update on the web`,
              }),
            })
          : null),
      (t[78] = n),
      (t[79] = o),
      (t[80] = p.kind),
      (t[81] = N))
    : (N = t[81]);
  let L;
  t[82] !== T || t[83] !== n
    ? ((L = (0, I.jsx)(l, {
        color: `primary`,
        loading: n,
        type: `submit`,
        children: T,
      })),
      (t[82] = T),
      (t[83] = n),
      (t[84] = L))
    : (L = t[84]);
  let R;
  t[85] !== M || t[86] !== N || t[87] !== L
    ? ((R = (0, I.jsx)(f, {
        children: (0, I.jsxs)(h, { children: [M, N, L] }),
      })),
      (t[85] = M),
      (t[86] = N),
      (t[87] = L),
      (t[88] = R))
    : (R = t[88]);
  let z;
  t[89] !== x || t[90] !== R || t[91] !== k || t[92] !== A
    ? ((z = (0, I.jsxs)(y, { as: `form`, onSubmit: x, children: [k, A, R] })),
      (t[89] = x),
      (t[90] = R),
      (t[91] = k),
      (t[92] = A),
      (t[93] = z))
    : (z = t[93]);
  let B;
  return (
    t[94] !== c || t[95] !== z || t[96] !== D
      ? ((B = (0, I.jsx)(i, {
          open: !0,
          showDialogClose: D,
          size: `default`,
          onOpenChange: c,
          children: z,
        })),
        (t[94] = c),
        (t[95] = z),
        (t[96] = D),
        (t[97] = B))
      : (B = t[97]),
    B
  );
}
function P(e, t, n, r) {
  let i = n.toUpperCase();
  return T({
    intl: e,
    amount: t / 10 ** r,
    currencyCode: i,
    currencyFractionDigits: r,
  });
}
var F,
  I,
  L = e(() => {
    ((F = a()), x(), v(), u(), n(), p(), w(), D(), (I = g()));
  });
function R(e) {
  switch (e) {
    case b.PLUS:
      return `chatgptplusplan`;
    case b.PROLITE:
      return `chatgptprolite`;
    case b.PRO:
      return `chatgptpro`;
  }
}
function z(e) {
  switch (e) {
    case `chatgptplusplan`:
      return b.PLUS;
    case `chatgptprolite`:
      return b.PROLITE;
    case `chatgptpro`:
      return b.PRO;
  }
}
var B = e(() => {
  S();
});
export { L as a, N as i, z as n, O as o, B as r, M as s, R as t };
//# sourceMappingURL=subscription-update-plan-BoDyWZVl.js.map
