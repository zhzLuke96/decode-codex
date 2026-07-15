const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./model-picker-power-slider-impl-CgHI5Tyi.js",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-BSdCI8xr.css",
      "./model-picker-power-slider-impl-DB_ZXGOd.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AE as n,
  AY as r,
  Ds as i,
  HZ as a,
  I2 as o,
  IK as s,
  KJ as c,
  L2 as l,
  LK as u,
  ME as d,
  RK as f,
  Ts as p,
  UZ as m,
  _Y as h,
  cp as g,
  fY as _,
  jE as v,
  js as y,
  k2 as b,
  lp as x,
  mY as S,
  pY as C,
  qJ as ee,
  qX as w,
  yY as te,
  zK as T,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  C as E,
  S as D,
  a as O,
  o as k,
  x as A,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ggy53w99-CqMu8hJo.js";
function j(e) {
  if (!e.trimStart().toLowerCase().startsWith(`gpt`)) return e;
  let t = /^gpt-\d/iu.test(e.trimStart()) ? ` ` : `-`;
  return e
    .split(/(\s+)/)
    .map((e) =>
      e.trim().length === 0
        ? e
        : e
            .split(`-`)
            .map((e, t) =>
              e.toLowerCase() === `gpt`
                ? `GPT`
                : e.toLowerCase() === `oai`
                  ? `OAI`
                  : t > 0 && e.length > 0
                    ? `${e[0]?.toUpperCase() ?? ``}${e.slice(1)}`
                    : e,
            )
            .join(t)
            .replace(/^GPT (?=\d)/u, `GPT-`),
    )
    .join(``);
}
var M = e(() => {});
function N(e, { fallback: t = null, suspendToParent: n = !1 } = {}) {
  let r = (0, P.lazy)(async () => ({ default: await e() }));
  return n
    ? r
    : function (e) {
        return (0, F.jsx)(P.Suspense, {
          fallback: t,
          children: (0, F.jsx)(r, { ...e }),
        });
      };
}
var P,
  F,
  I = e(() => {
    ((P = t(l(), 1)), (F = b()));
  }),
  L,
  R,
  ne = e(() => {
    (t(l()),
      (L = b()),
      (R = (e) =>
        (0, L.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, L.jsx)(`path`, {
            d: `M16.4183 9.99967C16.4181 6.45518 13.5448 3.58188 10.0003 3.58171C7.96895 3.58171 6.15935 4.52712 4.98273 6.00163H7.50031L7.6341 6.0153C7.93707 6.07735 8.16535 6.34535 8.16535 6.66667C8.16535 6.98799 7.93707 7.25598 7.6341 7.31803L7.50031 7.33171H3.75031C3.73055 7.33171 3.71104 7.32656 3.69172 7.32487C3.68913 7.32464 3.68649 7.32513 3.68391 7.32487C3.64304 7.32082 3.60409 7.31254 3.56574 7.30143C3.56188 7.30031 3.55788 7.2997 3.55402 7.2985C3.51366 7.286 3.47546 7.27023 3.43879 7.25065L3.43586 7.24967C3.43444 7.24891 3.43337 7.24752 3.43195 7.24675C3.35757 7.20587 3.29219 7.15262 3.23859 7.08757C3.23505 7.08329 3.23128 7.07923 3.22785 7.07487C3.20549 7.04631 3.1858 7.01609 3.16828 6.98405C3.16491 6.97791 3.16169 6.97173 3.15852 6.9655C3.14408 6.93698 3.13265 6.90732 3.12238 6.87663C3.11744 6.86205 3.11264 6.84757 3.10871 6.83268C3.10316 6.81117 3.09843 6.78955 3.09504 6.76725C3.09108 6.74233 3.08833 6.71738 3.08723 6.69206C3.08691 6.68361 3.08527 6.67519 3.08527 6.66667V2.91667C3.08527 2.5494 3.38304 2.25163 3.75031 2.25163C4.11743 2.2518 4.41535 2.54951 4.41535 2.91667V4.62956C5.82462 3.16447 7.80565 2.25163 10.0003 2.25163C14.2793 2.2518 17.7482 5.72065 17.7484 9.99967C17.7484 14.2789 14.2794 17.7485 10.0003 17.7487C6.02899 17.7487 2.75629 14.7612 2.305 10.9108L2.96516 10.8337L3.62531 10.7555C3.99895 13.9437 6.7115 16.4186 10.0003 16.4186C13.5449 16.4184 16.4183 13.5443 16.4183 9.99967ZM2.88801 10.1725C3.25252 10.13 3.58237 10.3911 3.62531 10.7555L2.305 10.9108C2.26225 10.546 2.52323 10.2153 2.88801 10.1725Z`,
          }),
        })));
  });
function z({ pathname: e, initialRoute: t }) {
  return w(e) || w(t);
}
function B() {
  return z(V());
}
function V() {
  if (typeof window > `u`) return { pathname: ``, initialRoute: null };
  let e = new URL(window.location.href);
  return {
    pathname: e.pathname,
    initialRoute: e.searchParams.get(`initialRoute`),
  };
}
var re = e(() => {
  r();
});
function ie({ harborEnabled: e, isElectron: t, isEverydayWorkMode: n }) {
  return n || (t && e);
}
function ae(e) {
  let t = ce(U, e);
  if (t.length >= 4) return t;
  let n = ce(W, e);
  return n.length >= 4 ? n : [];
}
function oe(e, t, n) {
  return e.find((e) => e.model === t && e.reasoningEffort === n);
}
function H(e) {
  return (
    e?.flatMap(({ displayName: e, model: t, supportedReasoningEfforts: n }) => {
      let r = e == null ? `Custom` : j(e).replace(/^GPT-/iu, ``),
        i = n.flatMap(({ reasoningEffort: e }) => (E(e) ? [e] : []));
      return (i.length > 0 ? i : [`medium`]).map((e) => ({
        id: `${t}:${e}`,
        model: t,
        modelLabel: r,
        reasoningEffort: e,
      }));
    }) ?? []
  );
}
function se(e) {
  return e.find(({ reasoningEffort: e }) => e === `medium`) ?? e[0];
}
function ce(e, t) {
  return e.flatMap((e, n) =>
    t?.some(
      (t) =>
        t.model === e.model &&
        t.supportedReasoningEfforts.some(
          ({ reasoningEffort: t }) => t === e.reasoningEffort,
        ),
    )
      ? [{ ...e, powerSettingIndex: n }]
      : [],
  );
}
var U,
  W,
  G = e(() => {
    (D(),
      M(),
      (U = [
        {
          id: `gpt-5.6-terra:low`,
          model: `gpt-5.6-terra`,
          modelLabel: `5.6 Terra`,
          reasoningEffort: `low`,
        },
        {
          id: `gpt-5.6-sol:low`,
          model: `gpt-5.6-sol`,
          modelLabel: `5.6 Sol`,
          reasoningEffort: `low`,
        },
        {
          id: `gpt-5.6-sol:medium`,
          model: `gpt-5.6-sol`,
          modelLabel: `5.6 Sol`,
          reasoningEffort: `medium`,
        },
        {
          id: `gpt-5.6-sol:high`,
          model: `gpt-5.6-sol`,
          modelLabel: `5.6 Sol`,
          reasoningEffort: `high`,
        },
        {
          id: `gpt-5.6-sol:xhigh`,
          model: `gpt-5.6-sol`,
          modelLabel: `5.6 Sol`,
          reasoningEffort: `xhigh`,
        },
        {
          id: `gpt-5.6-sol:ultra`,
          model: `gpt-5.6-sol`,
          modelLabel: `5.6 Sol`,
          reasoningEffort: `ultra`,
        },
      ]),
      (W = [
        {
          id: `gpt-5.6-terra:low`,
          model: `gpt-5.6-terra`,
          modelLabel: `5.6 Terra`,
          reasoningEffort: `low`,
        },
        {
          id: `gpt-5.6-terra:medium`,
          model: `gpt-5.6-terra`,
          modelLabel: `5.6 Terra`,
          reasoningEffort: `medium`,
        },
        {
          id: `gpt-5.6-terra:high`,
          model: `gpt-5.6-terra`,
          modelLabel: `5.6 Terra`,
          reasoningEffort: `high`,
        },
        {
          id: `gpt-5.6-terra:xhigh`,
          model: `gpt-5.6-terra`,
          modelLabel: `5.6 Terra`,
          reasoningEffort: `xhigh`,
        },
      ]));
  }),
  K,
  le = e(() => {
    (S(),
      (K = C({
        none: {
          id: `composer.mode.local.reasoning.none.label`,
          defaultMessage: `None`,
          description: `Reasoning effort label for a given model: none`,
        },
        minimal: {
          id: `composer.mode.local.reasoning.minimal.label`,
          defaultMessage: `Minimal`,
          description: `Reasoning effort label for a given model: minimal`,
        },
        low: {
          id: `composer.mode.local.reasoning.low.label`,
          defaultMessage: `Light`,
          description: `Reasoning effort label for a given model: low`,
        },
        medium: {
          id: `composer.mode.local.reasoning.medium.label`,
          defaultMessage: `Medium`,
          description: `Reasoning effort label for a given model: medium`,
        },
        high: {
          id: `composer.mode.local.reasoning.high.label`,
          defaultMessage: `High`,
          description: `Reasoning effort label for a given model: high`,
        },
        xhigh: {
          id: `composer.mode.local.reasoning.xhigh.label`,
          defaultMessage: `Extra High`,
          description: `Reasoning effort label for a given model: extra high`,
        },
        max: {
          id: `composer.mode.local.reasoning.max.label`,
          defaultMessage: `Max`,
          description: `Reasoning effort label for a given model: maximum`,
        },
        ultra: {
          id: `composer.mode.local.reasoning.ultra.label`,
          defaultMessage: `Ultra`,
          description: `Reasoning effort label for a given model: ultra`,
        },
      })));
  });
function ue(e, t) {
  let n = e?.find((e) => e.model === t);
  return n == null
    ? A.map((e) => ({ description: ``, reasoningEffort: e }))
    : n.supportedReasoningEfforts.filter((e) => E(e.reasoningEffort));
}
function de(e, t) {
  return E(e) && t.some((t) => t.reasoningEffort === e)
    ? e
    : k(
        e,
        t.map((e) => e.reasoningEffort),
      );
}
function fe(e, t, n) {
  let r = t.findIndex((t) => t.reasoningEffort === e);
  return (
    t[n === `increase` ? Math.min(r + 1, t.length - 1) : Math.max(r - 1, 0)]
      ?.reasoningEffort ?? e
  );
}
function pe(e, t) {
  let n = t.findIndex((t) => t.reasoningEffort === e);
  return t[n === t.length - 1 ? 0 : n + 1]?.reasoningEffort ?? e;
}
var me = e(() => {
    (D(), O());
  }),
  q,
  J,
  he = e(() => {
    (t(l()),
      (q = b()),
      (J = (e) =>
        (0, q.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, q.jsx)(`path`, {
            d: `M9.80999 17.8302C9.49666 18.1969 9.08999 18.3869 8.58999 18.4002C8.09666 18.4136 7.69666 18.2436 7.38999 17.8902C7.08999 17.5436 7.02666 17.0636 7.19999 16.4502L8.06999 13.2902H3.89999C3.43333 13.2902 3.06999 13.1602 2.80999 12.9002C2.55666 12.6336 2.42999 12.3136 2.42999 11.9402C2.42999 11.5602 2.55666 11.2169 2.80999 10.9102L10.16 2.18022C10.4733 1.81356 10.8767 1.62356 11.37 1.61022C11.87 1.59689 12.27 1.76689 12.57 2.12022C12.8767 2.47356 12.9433 2.95356 12.77 3.56023L11.87 6.78023H16.05C16.51 6.78023 16.87 6.91356 17.13 7.18023C17.3967 7.44023 17.53 7.76023 17.53 8.14023C17.53 8.52023 17.4 8.86023 17.14 9.16023L9.80999 17.8302ZM15.89 8.50023C15.93 8.44689 15.95 8.39356 15.95 8.34023C15.9567 8.28689 15.94 8.24356 15.9 8.21023C15.86 8.17023 15.8033 8.15023 15.73 8.15023H11.1C10.9133 8.15023 10.7533 8.10356 10.62 8.01023C10.4933 7.91689 10.4067 7.79023 10.36 7.63023C10.3133 7.47023 10.3167 7.29023 10.37 7.09023L11.33 3.62022C11.3567 3.52022 11.3467 3.44356 11.3 3.39022C11.2533 3.33022 11.19 3.30356 11.11 3.31022C11.0367 3.31689 10.9733 3.35356 10.92 3.42023L4.04999 11.5702C4.00999 11.6236 3.98666 11.6769 3.97999 11.7302C3.97999 11.7836 3.99999 11.8269 4.03999 11.8602C4.07999 11.8936 4.13999 11.9102 4.21999 11.9102H8.78999C9.00333 11.9102 9.17666 11.9569 9.30999 12.0502C9.44999 12.1436 9.54333 12.2736 9.58999 12.4402C9.63666 12.6002 9.63333 12.7802 9.57999 12.9802L8.63999 16.3902C8.61333 16.4902 8.62333 16.5702 8.66999 16.6302C8.71666 16.6836 8.77666 16.7069 8.84999 16.7002C8.92999 16.6936 8.99666 16.6602 9.04999 16.6002L15.89 8.50023Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ge,
  _e,
  ve = e(() => {
    (t(l()),
      (ge = b()),
      (_e = (e) =>
        (0, ge.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ge.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M12.496 1.55042C13.3266 0.810781 14.6664 1.57948 14.3945 2.70277L13.3867 6.86097H18.0634C19.0535 6.86124 19.5922 8.01841 18.955 8.77601L11.248 17.9284C11.0114 18.2091 10.5914 18.2449 10.3105 18.0084C10.0297 17.7718 9.99389 17.3518 10.2304 17.0709L17.7089 8.19105H15.206C15.199 8.46403 15.1069 8.74127 14.9043 8.98206L7.24312 18.0797C6.45061 19.0208 4.92981 18.25 5.21968 17.0543L6.1689 13.1383H1.7607C0.663874 13.1383 0.0668853 11.8562 0.773392 11.0172L8.43453 1.91956C9.22701 0.978906 10.7474 1.74955 10.458 2.94495L9.50874 6.86097H12.0175L12.956 2.98987L12.7773 3.17933C12.5246 3.44588 12.1034 3.45737 11.8369 3.20472C11.5706 2.95204 11.5599 2.53172 11.8125 2.26527L12.4169 1.62659L12.496 1.55042ZM1.84663 11.8082H7.85933L6.67671 16.6862L13.831 8.19105H7.81831L8.99995 3.31214L1.84663 11.8082Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  ye,
  be = e(() => {
    ye = `ComposerNavigation`;
  }),
  xe,
  Se = e(() => {
    (S(),
      (xe = _({
        id: `composer.modelPicker.power.ultraUsageWarning`,
        defaultMessage: `Consumes usage limits faster`,
        description: `Warning shown for the maximum Ultra reasoning effort in the Codex composer model picker. It appears temporarily below the compact Power slider after the user drags to Ultra and persistently as the subtitle below Ultra in the advanced Effort submenu. 'Usage limits' means the user's usage quota or allowance, which Ultra uses up more quickly; translate it as quota or allowance, not as restrictions or limits. This describes the rate of quota consumption, not response speed or model thinking speed. Short single-line sentence fragment with no punctuation or placeholders.`,
      })));
  });
function Ce() {
  return (
    (Te ??= a(
      async () => {
        let { ModelPickerPowerSliderImpl: e } = await import(
          `./model-picker-power-slider-impl-CgHI5Tyi.js`
        );
        return { ModelPickerPowerSliderImpl: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    ).then(({ ModelPickerPowerSliderImpl: e }) => e)),
    Te
  );
}
function we() {
  Ce();
}
var Te,
  Ee,
  De = e(() => {
    (I(), m(), (Ee = N(Ce)));
  }),
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  Y,
  qe = e(() => {
    ((Oe = `_Menu_1k6l7_1`),
      (ke = `_UltraUsageWarningShimmer_1k6l7_1`),
      (Ae = `_ViewTrack_1k6l7_4`),
      (je = `_ViewControls_1k6l7_9`),
      (Me = `_ViewToggle_1k6l7_10`),
      (Ne = `_FastModeToggle_1k6l7_11`),
      (Pe = `_SliderEndpoints_1k6l7_16`),
      (Fe = `_UltraUsageWarning_1k6l7_29`),
      (Ie = `_UltraUsageWarningText_1k6l7_33`),
      (Le = `_SimpleView_1k6l7_47`),
      (Re = `_AdvancedView_1k6l7_51`),
      (ze = `_ResetToDefault_1k6l7_78`),
      (Be = `_ViewToggleIcon_1k6l7_82`),
      (Ve = `_ViewPanel_1k6l7_116`),
      (He = `_KeyboardControl_1k6l7_167`),
      (Ue = `_KeyboardAnnouncement_1k6l7_168`),
      (We = `_ViewToggleContent_1k6l7_314`),
      (Ge = `_FastModeToggleContent_1k6l7_371`),
      (Ke = `_FastModeIcon_1k6l7_395`),
      (Y = {
        Menu: Oe,
        UltraUsageWarningShimmer: ke,
        ViewTrack: Ae,
        ViewControls: je,
        ViewToggle: Me,
        FastModeToggle: Ne,
        SliderEndpoints: Pe,
        UltraUsageWarning: Fe,
        UltraUsageWarningText: Ie,
        SimpleView: Le,
        AdvancedView: Re,
        ResetToDefault: ze,
        ViewToggleIcon: Be,
        ViewPanel: Ve,
        KeyboardControl: He,
        KeyboardAnnouncement: Ue,
        ViewToggleContent: We,
        FastModeToggleContent: Ge,
        FastModeIcon: Ke,
      }));
  });
function Je(e) {
  let t = (0, Ze.c)(58),
    {
      active: n,
      fastModeEnabled: r,
      onDragToMax: a,
      onSelectComplete: o,
      onSelectPower: s,
      powerSelections: c,
      selectedPowerSelection: l,
      shouldReduceMotion: u,
      transitionsReady: d,
    } = e,
    f = te(),
    p = (0, Qe.useId)(),
    m = (0, Qe.useId)(),
    [g, _] = (0, Qe.useState)(!1),
    v;
  if (t[0] !== f || t[1] !== c) {
    let e;
    (t[3] === f
      ? (e = t[4])
      : ((e = (e) => ({
          id: e.id,
          isMax: e.reasoningEffort === `ultra`,
          label: Xe(e, f),
        })),
        (t[3] = f),
        (t[4] = e)),
      (v = c.map(e)),
      (t[0] = f),
      (t[1] = c),
      (t[2] = v));
  } else v = t[2];
  let y = v;
  if (l == null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(`div`, { className: Y.SimpleView })), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let b;
  t[6] === l.id
    ? (b = t[7])
    : ((b = (e) => {
        let { id: t } = e;
        return t === l.id;
      }),
      (t[6] = l.id),
      (t[7] = b));
  let x = c.findIndex(b),
    S = `${p} ${m}`,
    C;
  t[8] === f
    ? (C = t[9])
    : ((C = f.formatMessage({
        id: `composer.modelPicker.workPower.keyboardControl.ariaLabel`,
        defaultMessage: `Power`,
        description: `Accessible name for the visually hidden Power control in the Work composer model picker menu`,
      })),
      (t[8] = f),
      (t[9] = C));
  let ee = !n,
    w,
    T;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => _(!1)),
      (T = (e) => {
        _(e.currentTarget.matches(`:focus-visible`));
      }),
      (t[10] = w),
      (t[11] = T))
    : ((w = t[10]), (T = t[11]));
  let E;
  t[12] !== o || t[13] !== s || t[14] !== c || t[15] !== x
    ? ((E = (e) => {
        let t = e.code === ye;
        if (e.key === `Enter` && t) {
          (e.preventDefault(), e.stopPropagation(), o?.());
          return;
        }
        let n =
          e.key === `ArrowLeft` || (t && e.key === `ArrowUp`)
            ? -1
            : e.key === `ArrowRight` || (t && e.key === `ArrowDown`)
              ? 1
              : 0;
        if (n === 0) return;
        (_(!0), e.preventDefault(), e.stopPropagation());
        let r = Math.min(Math.max(x + n, 0), c.length - 1),
          i = c[r];
        i != null && r !== x && s(i);
      }),
      (t[12] = o),
      (t[13] = s),
      (t[14] = c),
      (t[15] = x),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== S || t[18] !== C || t[19] !== ee || t[20] !== E
    ? ((D = (0, X.jsx)(i.Item, {
        "aria-describedby": S,
        "aria-keyshortcuts": `ArrowLeft ArrowRight`,
        "aria-label": C,
        className: Y.KeyboardControl,
        "data-reasoning-slider": !0,
        disabled: ee,
        onBlur: w,
        onFocus: T,
        onKeyDown: E,
        onSelect: Ye,
      })),
      (t[17] = S),
      (t[18] = C),
      (t[19] = ee),
      (t[20] = E),
      (t[21] = D))
    : (D = t[21]);
  let O = x + 1,
    k = c.length,
    A;
  t[22] !== f || t[23] !== l
    ? ((A = Xe(l, f)), (t[22] = f), (t[23] = l), (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] !== c.length || t[26] !== O || t[27] !== A
    ? ((j = (0, X.jsx)(h, {
        id: `composer.modelPicker.workPower.keyboardControl.value`,
        defaultMessage: `{value}, {position} of {total}.`,
        description: `Live status announced after a keyboard or screen-reader user changes the visually hidden Power control in the Codex composer model picker menu. {value} is the selected model-and-reasoning bundle label, such as 5.6 Sol Standard. {position} is its one-based position and {total} is the total number of Power choices. When Ultra is selected, a separate warning immediately follows this status.`,
        values: { position: O, total: k, value: A },
      })),
      (t[25] = c.length),
      (t[26] = O),
      (t[27] = A),
      (t[28] = j))
    : (j = t[28]);
  let M;
  t[29] === l.reasoningEffort
    ? (M = t[30])
    : ((M =
        l.reasoningEffort === `ultra`
          ? (0, X.jsxs)(X.Fragment, {
              children: [` `, (0, X.jsx)(h, { ...xe })],
            })
          : null),
      (t[29] = l.reasoningEffort),
      (t[30] = M));
  let N;
  t[31] !== p || t[32] !== j || t[33] !== M
    ? ((N = (0, X.jsxs)(`span`, {
        "aria-live": `polite`,
        className: Y.KeyboardAnnouncement,
        id: p,
        role: `status`,
        children: [j, M],
      })),
      (t[31] = p),
      (t[32] = j),
      (t[33] = M),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] === f
    ? (P = t[36])
    : ((P = f.formatMessage({
        id: `composer.modelPicker.workPower.keyboardControl.instructions`,
        defaultMessage: `Use Left and Right arrow keys to adjust power`,
        description: `Screen-reader instructions for changing the Work Power control`,
      })),
      (t[35] = f),
      (t[36] = P));
  let F;
  t[37] !== m || t[38] !== P
    ? ((F = (0, X.jsx)(`span`, {
        className: Y.KeyboardAnnouncement,
        id: m,
        children: P,
      })),
      (t[37] = m),
      (t[38] = P),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== s || t[41] !== c
    ? ((I = (e) => {
        let t = c.find((t) => {
          let { id: n } = t;
          return n === e.id;
        });
        t != null && s(t);
      }),
      (t[40] = s),
      (t[41] = c),
      (t[42] = I))
    : (I = t[42]);
  let L;
  t[43] !== n ||
  t[44] !== r ||
  t[45] !== g ||
  t[46] !== a ||
  t[47] !== l.id ||
  t[48] !== u ||
  t[49] !== y ||
  t[50] !== I ||
  t[51] !== d
    ? ((L = (0, X.jsx)(Ee, {
        active: n,
        fastModeEnabled: r,
        keyboardControlFocused: g,
        onDragToMax: a,
        onSelectOption: I,
        options: y,
        selectedOptionId: l.id,
        shouldReduceMotion: u,
        transitionsReady: d,
      })),
      (t[43] = n),
      (t[44] = r),
      (t[45] = g),
      (t[46] = a),
      (t[47] = l.id),
      (t[48] = u),
      (t[49] = y),
      (t[50] = I),
      (t[51] = d),
      (t[52] = L))
    : (L = t[52]);
  let R;
  return (
    t[53] !== N || t[54] !== F || t[55] !== L || t[56] !== D
      ? ((R = (0, X.jsxs)(`div`, {
          className: Y.SimpleView,
          children: [D, N, F, L],
        })),
        (t[53] = N),
        (t[54] = F),
        (t[55] = L),
        (t[56] = D),
        (t[57] = R))
      : (R = t[57]),
    R
  );
}
function Ye(e) {
  return e.preventDefault();
}
function Xe(e, t) {
  return `${e.modelLabel} ${t.formatMessage($e[e.reasoningEffort])}`;
}
var Ze,
  Qe,
  X,
  $e,
  et = e(() => {
    ((Ze = o()),
      (Qe = t(l(), 1)),
      S(),
      be(),
      le(),
      y(),
      Se(),
      De(),
      qe(),
      (X = b()),
      ($e = {
        ...K,
        medium: _({
          id: `composer.modelPicker.work.reasoning.standard.label`,
          defaultMessage: `Standard`,
          description: `Work model picker slider label for medium reasoning effort`,
        }),
        high: _({
          id: `composer.modelPicker.work.reasoning.extended.label`,
          defaultMessage: `Extended`,
          description: `Work model picker slider label for high reasoning effort`,
        }),
      }));
  }),
  tt,
  nt,
  rt = e(() => {
    (t(l()),
      (tt = b()),
      (nt = (e) =>
        (0, tt.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          "data-rtl-flip": ``,
          ...e,
          children: (0, tt.jsx)(`path`, {
            d: `M6.02925 3.02929C6.25652 2.80202 6.60803 2.77382 6.86616 2.94433L6.97065 3.02929L11.4707 7.52929C11.7304 7.78899 11.7304 8.211 11.4707 8.4707L6.97065 12.9707C6.71095 13.2304 6.28895 13.2304 6.02925 12.9707C5.76955 12.711 5.76955 12.289 6.02925 12.0293L10.0585 7.99999L6.02925 3.9707L5.94429 3.8662C5.77378 3.60807 5.80198 3.25656 6.02925 3.02929Z`,
          }),
        })));
  }),
  it,
  at,
  ot = e(() => {
    (t(l()),
      (it = b()),
      (at = (e) =>
        (0, it.jsx)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, it.jsx)(`path`, {
            d: `M11.9125 21.4125C11.5292 21.8625 11.0292 22.0958 10.4125 22.1125C9.79586 22.1291 9.29586 21.9208 8.91252 21.4875C8.53752 21.0541 8.45836 20.4541 8.67503 19.6875L9.68752 16H4.57502C4.00836 16 3.56669 15.8375 3.25002 15.5125C2.93336 15.1791 2.77502 14.7791 2.77502 14.3125C2.77502 13.8375 2.92919 13.4125 3.23752 13.0375L12.1375 2.47497C12.5209 2.02497 13.0209 1.79164 13.6375 1.77497C14.2542 1.75831 14.75 1.96664 15.125 2.39997C15.5084 2.83331 15.5917 3.43331 15.375 4.19997L14.3125 7.99998H19.425C19.9917 7.99998 20.4334 8.16664 20.75 8.49997C21.075 8.83331 21.2375 9.23748 21.2375 9.71247C21.2375 10.1791 21.0792 10.5958 20.7625 10.9625L11.9125 21.4125Z`,
            fill: `currentColor`,
          }),
        })));
  }),
  st,
  ct,
  lt = e(() => {
    (t(l()),
      (st = b()),
      (ct = (e) =>
        (0, st.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, st.jsx)(`g`, {
            transform: `translate(2.43 1.609)`,
            children: (0, st.jsx)(`path`, {
              d: `M7.38 16.2207C7.06667 16.5874 6.66 16.7774 6.16 16.7907C5.66667 16.8041 5.26667 16.6341 4.96 16.2807C4.66 15.9341 4.59667 15.4541 4.77 14.8407L5.64 11.6807H1.47C1.00333 11.6807 0.64 11.5507 0.38 11.2907C0.126667 11.0241 0 10.7041 0 10.3307C0 9.95073 0.126667 9.6074 0.38 9.30073L7.73 0.570728C8.04333 0.204061 8.44667 0.0140611 8.94 0.000727251C9.44 -0.0126059 9.84 0.157394 10.14 0.510727C10.4467 0.864061 10.5133 1.34406 10.34 1.95073L9.44 5.17073H13.62C14.08 5.17073 14.44 5.30406 14.7 5.57073C14.9667 5.83073 15.1 6.15073 15.1 6.53073C15.1 6.91073 14.97 7.25073 14.71 7.55073L7.38 16.2207ZM13.46 6.89073C13.5 6.8374 13.52 6.78406 13.52 6.73073C13.5267 6.6774 13.51 6.63406 13.47 6.60073C13.43 6.56073 13.3733 6.54073 13.3 6.54073H8.67C8.48333 6.54073 8.32333 6.49406 8.19 6.40073C8.06333 6.3074 7.97667 6.18073 7.93 6.02073C7.88333 5.86073 7.88667 5.68073 7.94 5.48073L8.9 2.01073C8.92667 1.91073 8.91667 1.83406 8.87 1.78073C8.82333 1.72073 8.76 1.69406 8.68 1.70073C8.60667 1.70739 8.54333 1.74406 8.49 1.81073L1.62 9.96073C1.58 10.0141 1.55667 10.0674 1.55 10.1207C1.55 10.1741 1.57 10.2174 1.61 10.2507C1.65 10.2841 1.71 10.3007 1.79 10.3007H6.36C6.57333 10.3007 6.74667 10.3474 6.88 10.4407C7.02 10.5341 7.11333 10.6641 7.16 10.8307C7.20667 10.9907 7.20333 11.1707 7.15 11.3707L6.21 14.7807C6.18333 14.8807 6.19333 14.9607 6.24 15.0207C6.28667 15.0741 6.34667 15.0974 6.42 15.0907C6.5 15.0841 6.56667 15.0507 6.62 14.9907L13.46 6.89073Z`,
              fill: `currentColor`,
            }),
          }),
        })));
  });
function ut(e) {
  let t = (0, pt.c)(41),
    {
      ref: n,
      expanded: r,
      onSelectServiceTier: a,
      onToggle: o,
      selectedPowerSelection: s,
      selectedServiceTier: c,
      serviceTierOptions: l,
      serviceTierOptionsLoading: u,
      showUltraUsageWarning: d,
      shouldResetToDefault: f,
    } = e,
    p = te(),
    m = (0, mt.useId)(),
    g;
  t[0] === c ? (g = t[1]) : ((g = v(c)), (t[0] = c), (t[1] = g));
  let _ = g,
    y;
  t[2] !== r || t[3] !== p
    ? ((y = r
        ? p.formatMessage({
            id: `composer.modelPicker.advancedOptions.toggle.collapse.ariaLabel`,
            defaultMessage: `Show compact options`,
            description: `Accessible label for returning the Work model picker to its compact Power slider`,
          })
        : p.formatMessage({
            id: `composer.modelPicker.advancedOptions.toggle.expand.ariaLabel`,
            defaultMessage: `Show advanced options`,
            description: `Accessible label for showing detailed Model, Effort, and Speed options`,
          })),
      (t[2] = r),
      (t[3] = p),
      (t[4] = y))
    : (y = t[4]);
  let b = y,
    x;
  t[5] !== p || t[6] !== _
    ? ((x = _
        ? p.formatMessage({
            id: `composer.intelligencePicker.standardMode.toggle.enable.ariaLabel`,
            defaultMessage: `Enable standard mode`,
            description: `Accessible label for returning to Standard mode from the compact Work model picker`,
          })
        : p.formatMessage({
            id: `composer.intelligencePicker.fastMode.toggle.enable.ariaLabel`,
            defaultMessage: `Enable fast mode`,
            description: `Accessible label for enabling Fast mode in the compact Work model picker`,
          })),
      (t[5] = p),
      (t[6] = _),
      (t[7] = x))
    : (x = t[7]);
  let S = x,
    C;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(h, {
        id: `composer.intelligencePicker.fastMode.moreUsage.tooltip`,
        defaultMessage: `More usage`,
        description: `Secondary tooltip line warning that Fast mode consumes more usage. The text remains the same whether Fast mode is enabled or disabled`,
      })),
      (t[8] = C))
    : (C = t[8]);
  let ee = C,
    w;
  t[9] === l ? (w = t[10]) : ((w = l.find(ft)), (t[9] = l), (t[10] = w));
  let T = w,
    E;
  t[11] === l ? (E = t[12]) : ((E = l.find(dt)), (t[11] = l), (t[12] = E));
  let D = E,
    O = a != null && T != null && D != null,
    k = d && s?.reasoningEffort === `ultra` && !r,
    A = r || k,
    j;
  t[13] !== r ||
  t[14] !== p ||
  t[15] !== k ||
  t[16] !== o ||
  t[17] !== f ||
  t[18] !== b
    ? ((j = f
        ? (0, Z.jsx)(i.Item, {
            "aria-label": p.formatMessage(ht.resetToDefault),
            className: Y.ResetToDefault,
            onSelect: (e) => {
              (e.preventDefault(), o());
            },
            rightIcon: (0, Z.jsx)(R, {
              "aria-hidden": !0,
              className: `size-3.5`,
            }),
            children: (0, Z.jsx)(h, { ...ht.resetToDefault }),
          })
        : (0, Z.jsx)(i.Item, {
            "aria-expanded": r,
            "aria-hidden": k,
            "aria-label": b,
            className: Y.ViewToggle,
            "data-model-picker-view-toggle": !0,
            disabled: k,
            inert: k,
            onSelect: (e) => {
              (e.preventDefault(), o());
            },
            children: (0, Z.jsxs)(`span`, {
              className: Y.ViewToggleContent,
              children: [
                (0, Z.jsx)(h, {
                  id: `composer.modelPicker.advancedOptions.toggle.label`,
                  defaultMessage: `Advanced`,
                  description: `Visible label for the compact and advanced Work model picker toggle`,
                }),
                (0, Z.jsx)(nt, {
                  "aria-hidden": !0,
                  className: Y.ViewToggleIcon,
                }),
              ],
            }),
          })),
      (t[13] = r),
      (t[14] = p),
      (t[15] = k),
      (t[16] = o),
      (t[17] = f),
      (t[18] = b),
      (t[19] = j))
    : (j = t[19]);
  let M;
  t[20] !== r ||
  t[21] !== S ||
  t[22] !== m ||
  t[23] !== D ||
  t[24] !== O ||
  t[25] !== _ ||
  t[26] !== A ||
  t[27] !== a ||
  t[28] !== s?.reasoningEffort ||
  t[29] !== u ||
  t[30] !== f ||
  t[31] !== T
    ? ((M =
        O && !f
          ? (0, Z.jsxs)(i.Item, {
              "aria-checked": _,
              "aria-describedby": m,
              "aria-hidden": A,
              "aria-label": S,
              className: Y.FastModeToggle,
              "data-fast-mode-enabled": _,
              "data-max-power-selection": s?.reasoningEffort === `ultra`,
              "data-visible": !r,
              disabled: A || u,
              inert: A,
              onSelect: (e) => {
                (e.preventDefault(), a(_ ? T.value : D.value));
              },
              role: `menuitemcheckbox`,
              tooltipSide: `top`,
              tooltipText: (0, Z.jsxs)(`span`, {
                className: `flex flex-col text-left`,
                children: [
                  (0, Z.jsx)(`span`, {
                    children: (0, Z.jsx)(h, {
                      id: `composer.intelligencePicker.fastMode.speed.tooltip`,
                      defaultMessage: `1.5x speed`,
                      description: `Title of the tooltip for the lightning-bolt Fast mode toggle below the slider. The title remains the same whether Fast mode is enabled or disabled`,
                    }),
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: ee,
                  }),
                ],
              }),
              children: [
                (0, Z.jsx)(`span`, {
                  className: Y.KeyboardAnnouncement,
                  id: m,
                  children: ee,
                }),
                (0, Z.jsx)(`span`, {
                  className: Y.FastModeToggleContent,
                  children: _
                    ? (0, Z.jsx)(at, {
                        "aria-hidden": !0,
                        className: Y.FastModeIcon,
                      })
                    : (0, Z.jsx)(ct, {
                        "aria-hidden": !0,
                        className: Y.FastModeIcon,
                      }),
                }),
              ],
            })
          : null),
      (t[20] = r),
      (t[21] = S),
      (t[22] = m),
      (t[23] = D),
      (t[24] = O),
      (t[25] = _),
      (t[26] = A),
      (t[27] = a),
      (t[28] = s?.reasoningEffort),
      (t[29] = u),
      (t[30] = f),
      (t[31] = T),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsxs)(`span`, {
        "aria-hidden": !0,
        className: Y.SliderEndpoints,
        children: [
          (0, Z.jsx)(`span`, {
            children: (0, Z.jsx)(h, {
              id: `composer.modelPicker.power.faster.label`,
              defaultMessage: `Faster`,
              description: `Label at the start of the Power slider scale in the compact Codex composer model picker. It appears while the user holds the slider thumb and indicates that lower slider values prioritize faster responses. Short comparative adjective with no punctuation or placeholders.`,
            }),
          }),
          (0, Z.jsx)(`span`, {
            children: (0, Z.jsx)(h, {
              id: `composer.modelPicker.power.smarter.label`,
              defaultMessage: `Smarter`,
              description: `Label at the end of the Power slider scale in the compact Codex composer model picker. It appears while the user holds the slider thumb and indicates that higher slider values prioritize more capable reasoning. Short comparative adjective with no punctuation or placeholders.`,
            }),
          }),
        ],
      })),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(`span`, {
        "aria-hidden": !0,
        className: Y.UltraUsageWarning,
        children: (0, Z.jsx)(`span`, {
          className: Y.UltraUsageWarningText,
          children: (0, Z.jsx)(h, { ...xe }),
        }),
      })),
      (t[34] = P))
    : (P = t[34]);
  let F;
  return (
    t[35] !== r || t[36] !== k || t[37] !== n || t[38] !== j || t[39] !== M
      ? ((F = (0, Z.jsxs)(`div`, {
          className: Y.ViewControls,
          "data-expanded": r,
          "data-ultra-warning-visible": k,
          ref: n,
          children: [j, M, N, P],
        })),
        (t[35] = r),
        (t[36] = k),
        (t[37] = n),
        (t[38] = j),
        (t[39] = M),
        (t[40] = F))
      : (F = t[40]),
    F
  );
}
function dt(e) {
  let { iconKind: t } = e;
  return t === `fast`;
}
function ft(e) {
  let { value: t } = e;
  return t == null;
}
var pt,
  mt,
  Z,
  ht,
  gt = e(() => {
    ((pt = o()),
      (mt = t(l(), 1)),
      S(),
      ne(),
      rt(),
      ot(),
      lt(),
      n(),
      y(),
      Se(),
      qe(),
      (Z = b()),
      (ht = C({
        resetToDefault: {
          id: `composer.modelPicker.advancedOptions.toggle.resetToDefault.label`,
          defaultMessage: `Reset to default`,
          description: `Label for resetting an unsupported model and reasoning effort to the compact Work model picker's default selection`,
        },
      })));
  });
function _t(e) {
  let t = (0, vt.c)(60),
    {
      active: n,
      advancedView: r,
      menuView: i,
      onSelectComplete: a,
      onSelectPower: o,
      onSelectServiceTier: s,
      onToggleMenuView: c,
      powerSelections: l,
      selectedPowerSelection: u,
      selectedServiceTier: d,
      serviceTierOptions: f,
      serviceTierOptionsLoading: p,
      shouldResetToDefault: m,
      shouldReduceMotion: h,
    } = e,
    g = (0, Q.useRef)(null),
    _ = (0, Q.useRef)(null),
    y = (0, Q.useRef)(null),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { advanced: void 0, controls: void 0, simple: void 0 }), (t[0] = b))
    : (b = t[0]);
  let [x, S] = (0, Q.useState)(b),
    [C, ee] = (0, Q.useState)(!1),
    [w, te] = (0, Q.useState)(!1),
    T = (0, Q.useRef)(null),
    E = i === `advanced`,
    D = x.controls != null && x[i] != null ? x.controls + x[i] : void 0,
    O = x.advanced == null ? void 0 : `${x.advanced}px`,
    k = x.simple == null ? void 0 : `${x.simple}px`,
    A;
  t[1] !== D || t[2] !== O || t[3] !== k
    ? ((A = {
        "--advanced-view-height": O,
        "--simple-view-height": k,
        height: D,
      }),
      (t[1] = D),
      (t[2] = O),
      (t[3] = k),
      (t[4] = A))
    : (A = t[4]);
  let j = A,
    M;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        (T.current != null &&
          (window.clearTimeout(T.current), (T.current = null)),
          te(!1));
      }),
      (t[5] = M))
    : (M = t[5]);
  let N = M,
    P;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        (T.current != null && window.clearTimeout(T.current),
          te(!0),
          (T.current = window.setTimeout(() => {
            ((T.current = null), te(!1));
          }, 2e3)));
      }),
      (t[6] = P))
    : (P = t[6]);
  let F = P,
    I;
  t[7] === o
    ? (I = t[8])
    : ((I = (e) => {
        (e.reasoningEffort !== `ultra` && N(), o(e));
      }),
      (t[7] = o),
      (t[8] = I));
  let L = I,
    R,
    ne;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => {
        let e = g.current,
          t = _.current,
          n = y.current;
        if (e == null || t == null || n == null) return;
        let r = () => {
          let r = e.offsetHeight,
            i = t.offsetHeight,
            a = n.offsetHeight;
          S((e) =>
            e.simple === r && e.controls === i && e.advanced === a
              ? e
              : { advanced: a, controls: i, simple: r },
          );
        };
        r();
        let i = window.requestAnimationFrame(() => {
            ee(!0);
          }),
          a = typeof ResizeObserver > `u` ? null : new ResizeObserver(r);
        return (
          a?.observe(e),
          a?.observe(t),
          a?.observe(n),
          () => {
            (window.cancelAnimationFrame(i), a?.disconnect());
          }
        );
      }),
      (ne = []),
      (t[9] = R),
      (t[10] = ne))
    : ((R = t[9]), (ne = t[10])),
    (0, Q.useLayoutEffect)(R, ne));
  let z, B;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => () => {
        T.current != null && window.clearTimeout(T.current);
      }),
      (B = []),
      (t[11] = z),
      (t[12] = B))
    : ((z = t[11]), (B = t[12])),
    (0, Q.useEffect)(z, B));
  let V = !E,
    re = n && !E,
    ie;
  t[13] === d ? (ie = t[14]) : ((ie = v(d)), (t[13] = d), (t[14] = ie));
  let ae;
  t[15] !== L ||
  t[16] !== a ||
  t[17] !== l ||
  t[18] !== u ||
  t[19] !== h ||
  t[20] !== re ||
  t[21] !== ie ||
  t[22] !== C
    ? ((ae = (0, yt.jsx)(Je, {
        active: re,
        fastModeEnabled: ie,
        onDragToMax: F,
        onSelectComplete: a,
        onSelectPower: L,
        powerSelections: l,
        selectedPowerSelection: u,
        shouldReduceMotion: h,
        transitionsReady: C,
      })),
      (t[15] = L),
      (t[16] = a),
      (t[17] = l),
      (t[18] = u),
      (t[19] = h),
      (t[20] = re),
      (t[21] = ie),
      (t[22] = C),
      (t[23] = ae))
    : (ae = t[23]);
  let oe;
  t[24] !== E || t[25] !== V || t[26] !== ae
    ? ((oe = (0, yt.jsx)(`div`, {
        "aria-hidden": E,
        className: Y.ViewPanel,
        "data-active": V,
        inert: E,
        ref: g,
        children: ae,
      })),
      (t[24] = E),
      (t[25] = V),
      (t[26] = ae),
      (t[27] = oe))
    : (oe = t[27]);
  let H;
  t[28] !== o || t[29] !== c || t[30] !== u || t[31] !== m
    ? ((H = () => {
        (m && u != null && o(u), c());
      }),
      (t[28] = o),
      (t[29] = c),
      (t[30] = u),
      (t[31] = m),
      (t[32] = H))
    : (H = t[32]);
  let se;
  t[33] !== E ||
  t[34] !== s ||
  t[35] !== u ||
  t[36] !== d ||
  t[37] !== f ||
  t[38] !== p ||
  t[39] !== m ||
  t[40] !== w ||
  t[41] !== H
    ? ((se = (0, yt.jsx)(ut, {
        ref: _,
        expanded: E,
        onSelectServiceTier: s,
        onToggle: H,
        selectedPowerSelection: u,
        selectedServiceTier: d,
        serviceTierOptions: f,
        serviceTierOptionsLoading: p,
        showUltraUsageWarning: w,
        shouldResetToDefault: m,
      })),
      (t[33] = E),
      (t[34] = s),
      (t[35] = u),
      (t[36] = d),
      (t[37] = f),
      (t[38] = p),
      (t[39] = m),
      (t[40] = w),
      (t[41] = H),
      (t[42] = se))
    : (se = t[42]);
  let ce = !E,
    U = !E,
    W;
  t[43] === r
    ? (W = t[44])
    : ((W = (0, yt.jsx)(`div`, { className: Y.AdvancedView, children: r })),
      (t[43] = r),
      (t[44] = W));
  let G;
  t[45] !== E || t[46] !== ce || t[47] !== U || t[48] !== W
    ? ((G = (0, yt.jsx)(`div`, {
        "aria-hidden": ce,
        className: Y.ViewPanel,
        "data-active": E,
        inert: U,
        ref: y,
        children: W,
      })),
      (t[45] = E),
      (t[46] = ce),
      (t[47] = U),
      (t[48] = W),
      (t[49] = G))
    : (G = t[49]);
  let K;
  t[50] !== oe || t[51] !== se || t[52] !== G
    ? ((K = (0, yt.jsxs)(`div`, {
        className: Y.ViewTrack,
        children: [oe, se, G],
      })),
      (t[50] = oe),
      (t[51] = se),
      (t[52] = G),
      (t[53] = K))
    : (K = t[53]);
  let le;
  return (
    t[54] !== j || t[55] !== i || t[56] !== h || t[57] !== K || t[58] !== C
      ? ((le = (0, yt.jsx)(`div`, {
          className: Y.Menu,
          "data-reduced-motion": h,
          "data-transitions-ready": C,
          "data-view": i,
          style: j,
          children: K,
        })),
        (t[54] = j),
        (t[55] = i),
        (t[56] = h),
        (t[57] = K),
        (t[58] = C),
        (t[59] = le))
      : (le = t[59]),
    le
  );
}
var vt,
  Q,
  yt,
  bt = e(() => {
    ((vt = o()), (Q = t(l(), 1)), n(), et(), gt(), qe(), (yt = b()));
  });
function xt(e) {
  return typeof e == `string`
    ? (0, Ct.jsx)(Ct.Fragment, { children: e })
    : (0, Ct.jsx)(h, { ...e });
}
function St(e, t) {
  return typeof t == `string` ? t : e.formatMessage(t);
}
var Ct,
  wt = e(() => {
    (S(), (Ct = b()));
  });
function Tt(e) {
  let t = (0, jt.c)(68),
    {
      align: n,
      alignOffset: r,
      sideOffset: a,
      contentRef: o,
      contentClassName: s,
      disabled: l,
      hasWorkModeAccess: u,
      menuView: m,
      model: g,
      models: _,
      modelOptionsDisabled: v,
      onCloseAutoFocus: y,
      onEscapeKeyDown: b,
      onOpenChange: x,
      onSelectComplete: S,
      onSelectModel: C,
      onSelectReasoningEffort: ee,
      onSelectServiceTier: w,
      onToggleMenuView: T,
      open: E,
      powerSelections: D,
      reasoningEffort: O,
      reasoningEffortDisabled: k,
      selectedServiceTier: A,
      selectedServiceTierIconKind: M,
      serviceTierOptions: N,
      serviceTierOptionsLoading: P,
      showReasoningEffortControls: F,
      shouldReduceMotion: I,
      triggerButton: L,
    } = e,
    R = v === void 0 ? !1 : v,
    ne = k === void 0 ? !1 : k,
    z = A === void 0 ? null : A,
    B = M === void 0 ? null : M,
    V = N === void 0 ? [] : N,
    re = P === void 0 ? !1 : P,
    ie = F === void 0 ? !0 : F,
    ae = I === void 0 ? !1 : I,
    H = te(),
    ce = ue(_, g),
    U = de(O, ce),
    W = _?.find((e) => e.model === g),
    G = oe(D, g, U),
    le = G ?? se(D),
    fe = G == null && le != null,
    pe = u && ie,
    me = pe && D.length >= 4 && !R && !ne,
    q = me,
    J = pe,
    he = me && G == null ? `advanced` : m,
    ge = q
      ? V.map((e) =>
          e.iconKind === `fast`
            ? {
                ...e,
                label: H.formatMessage({
                  id: `composer.intelligencePicker.fastMode.advanced.title`,
                  defaultMessage: `Fast`,
                  description: `One-word name of the Fast response-speed tier in the advanced Speed submenu of the Work model picker`,
                }),
                description: H.formatMessage({
                  id: `composer.intelligencePicker.fastMode.advanced.subtitle`,
                  defaultMessage: `1.5x speed, more usage`,
                  description: `Secondary line beneath the Fast response-speed tier in the advanced Speed submenu of the Work model picker`,
                }),
              }
            : e,
        )
      : V,
    _e =
      ge.find((e) => {
        let { value: t } = e;
        return t === z;
      }) ?? ge.find(Et),
    ve = !q && B != null && d(W, z) ? B : null,
    ye;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(i.Title, {
        children: (0, $.jsx)(h, {
          id: `composer.intelligenceDropdown.model.title`,
          defaultMessage: `Model`,
          description: `Header label above model options in the intelligence dropdown`,
        }),
      })),
      (t[0] = ye))
    : (ye = t[0]);
  let be;
  t[1] !== q ||
  t[2] !== J ||
  t[3] !== g ||
  t[4] !== _ ||
  t[5] !== S ||
  t[6] !== C ||
  t[7] !== O ||
  t[8] !== z ||
  t[9] !== B
    ? ((be = _?.map((e) =>
        (0, $.jsx)(
          Ot,
          {
            keepOpenOnSelect: J,
            modelOption: e,
            selectedModel: g,
            selectedReasoningEffort: O,
            selectedServiceTier: z,
            selectedServiceTierIconKind: q ? null : B,
            stripGptPrefix: q,
            onSelect: (e, t) => {
              (C(e, t), J || S?.());
            },
          },
          e.model,
        ),
      )),
      (t[1] = q),
      (t[2] = J),
      (t[3] = g),
      (t[4] = _),
      (t[5] = S),
      (t[6] = C),
      (t[7] = O),
      (t[8] = z),
      (t[9] = B),
      (t[10] = be))
    : (be = t[10]);
  let Se;
  t[11] === be
    ? (Se = t[12])
    : ((Se = (0, $.jsxs)($.Fragment, {
        children: [
          ye,
          (0, $.jsx)(`div`, {
            className: `vertical-scroll-fade-mask flex max-h-[250px] flex-col overflow-y-auto`,
            children: be,
          }),
        ],
      })),
      (t[11] = be),
      (t[12] = Se));
  let Ce = Se,
    we;
  t[13] !== q ||
  t[14] !== J ||
  t[15] !== S ||
  t[16] !== w ||
  t[17] !== z ||
  t[18] !== re
    ? ((we = (e) => {
        let t = e.value === z;
        return (0, $.jsx)(
          i.Item,
          {
            disabled: re,
            subTextAllowWrap: !0,
            RightIcon: t ? f : void 0,
            SubText: (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: xt(e.description),
            }),
            onSelect: (t) => {
              (J && t.preventDefault(), w?.(e.value), J || S?.());
            },
            children: q
              ? xt(e.label)
              : (0, $.jsxs)(`span`, {
                  className: `inline-flex max-w-full min-w-0 items-center gap-1 align-middle`,
                  children: [
                    (0, $.jsx)(At, {
                      className: `icon-2xs text-token-link-foreground shrink-0`,
                      iconKind: e.iconKind,
                    }),
                    (0, $.jsx)(`span`, {
                      className: `min-w-0 truncate`,
                      children: xt(e.label),
                    }),
                  ],
                }),
          },
          e.value ?? `standard`,
        );
      }),
      (t[13] = q),
      (t[14] = J),
      (t[15] = S),
      (t[16] = w),
      (t[17] = z),
      (t[18] = re),
      (t[19] = we))
    : (we = t[19]);
  let Te = ge.map(we),
    Ee = H.formatMessage(
      {
        id: `composer.intelligenceDropdown.model.rowAriaLabel`,
        defaultMessage: `Model {model}`,
        description: `Accessible label for the Model row in the advanced intelligence dropdown`,
      },
      {
        model: q
          ? j(W?.displayName ?? g).replace(/^GPT-/iu, ``)
          : j(W?.displayName ?? g),
      },
    ),
    De;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(`span`, {
        "data-model-picker-model-row": !0,
        children: (0, $.jsx)(h, {
          id: `composer.intelligenceDropdown.model.rowLabel`,
          defaultMessage: `Model`,
          description: `Row label for choosing a model in the advanced intelligence dropdown`,
        }),
      })),
      (t[20] = De))
    : (De = t[20]);
  let Oe = W?.displayName,
    ke;
  t[21] !== q || t[22] !== g || t[23] !== ve || t[24] !== Oe
    ? ((ke = (0, $.jsx)(kt, {
        model: g,
        displayName: Oe,
        stripGptPrefix: q,
        serviceTierIconKind: ve,
      })),
      (t[21] = q),
      (t[22] = g),
      (t[23] = ve),
      (t[24] = Oe),
      (t[25] = ke))
    : (ke = t[25]);
  let Ae = R || _ == null,
    je;
  t[26] !== Ce || t[27] !== Ee || t[28] !== ke || t[29] !== Ae
    ? ((je = (0, $.jsx)(Dt, {
        ariaLabel: Ee,
        label: De,
        value: ke,
        contentClassName: `w-[280px]`,
        disabled: Ae,
        children: Ce,
      })),
      (t[26] = Ce),
      (t[27] = Ee),
      (t[28] = ke),
      (t[29] = Ae),
      (t[30] = je))
    : (je = t[30]);
  let Me;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, $.jsx)(h, {
        id: `composer.intelligenceDropdown.effort.rowLabel`,
        defaultMessage: `Effort`,
        description: `Row label for choosing reasoning effort in the advanced intelligence dropdown`,
      })),
      (t[31] = Me))
    : (Me = t[31]);
  let Ne = K[U],
    Pe;
  t[32] === Ne
    ? (Pe = t[33])
    : ((Pe = (0, $.jsx)(h, { ...Ne })), (t[32] = Ne), (t[33] = Pe));
  let Fe;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(i.Title, {
        children: (0, $.jsx)(h, {
          id: `composer.intelligenceDropdown.effort.title`,
          defaultMessage: `Effort`,
          description: `Header label above effort options in the intelligence dropdown`,
        }),
      })),
      (t[34] = Fe))
    : (Fe = t[34]);
  let Ie = (0, $.jsxs)($.Fragment, {
      children: [
        je,
        (0, $.jsx)(Dt, {
          ariaLabel: H.formatMessage(
            {
              id: `composer.intelligenceDropdown.effort.rowAriaLabel`,
              defaultMessage: `Effort {effort}`,
              description: `Accessible label for the Effort row in the advanced intelligence dropdown`,
            },
            { effort: H.formatMessage(K[U]) },
          ),
          label: Me,
          value: Pe,
          contentClassName: `min-w-[180px]`,
          disabled: ne,
          flyoutHeader: Fe,
          children: ce.map((e) => {
            let { reasoningEffort: t } = e;
            return (0, $.jsx)(
              i.Item,
              {
                "data-reasoning-selected": t === U ? `true` : void 0,
                RightIcon: t === U ? f : void 0,
                SubText:
                  t === `ultra`
                    ? (0, $.jsx)(`span`, {
                        className: `text-token-description-foreground`,
                        children: (0, $.jsx)(h, { ...xe }),
                      })
                    : null,
                onSelect: (e) => {
                  (J && e.preventDefault(), ee(t), J || S?.());
                },
                children: (0, $.jsx)(h, { ...K[t] }),
              },
              t,
            );
          }),
        }),
        w != null && V.length > 0
          ? (0, $.jsx)(Dt, {
              ariaLabel:
                _e == null
                  ? void 0
                  : H.formatMessage(
                      {
                        id: `composer.intelligenceDropdown.speed.rowAriaLabel`,
                        defaultMessage: `Speed {speed}`,
                        description: `Accessible label for the Speed row in the advanced intelligence dropdown`,
                      },
                      { speed: St(H, _e.label) },
                    ),
              label: (0, $.jsx)(h, {
                id: `settings.agent.speed.label`,
                defaultMessage: `Speed`,
                description: `Label for the Fast mode speed setting`,
              }),
              value: _e == null ? null : xt(_e.label),
              contentClassName: `w-[233px]`,
              flyoutHeader: (0, $.jsx)(i.Title, {
                children: (0, $.jsx)(h, {
                  id: `composer.intelligenceDropdown.speed.title`,
                  defaultMessage: `Speed`,
                  description: `Header label above speed options in the intelligence dropdown`,
                }),
              }),
              children: Te,
            })
          : null,
      ],
    }),
    Le = ie
      ? (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(i.Title, {
              children: (0, $.jsx)(h, {
                id: `composer.intelligenceDropdown.title`,
                defaultMessage: `Reasoning`,
                description: `Header label for the intelligence dropdown`,
              }),
            }),
            (0, $.jsx)(`div`, {
              className: `flex max-h-[250px] flex-col overflow-y-auto`,
              children: ce.map((e) => {
                let { reasoningEffort: t } = e;
                return (0, $.jsx)(
                  i.Item,
                  {
                    "data-reasoning-selected": t === U ? `true` : void 0,
                    disabled: ne,
                    RightIcon: t === U ? f : void 0,
                    onSelect: () => {
                      (ee(t), S?.());
                    },
                    children: (0, $.jsx)(h, { ...K[t] }),
                  },
                  t,
                );
              }),
            }),
            (0, $.jsx)(i.Separator, {}),
          ],
        })
      : null,
    Re = W?.displayName,
    ze;
  t[35] !== g || t[36] !== ve || t[37] !== Re
    ? ((ze = (0, $.jsx)(`span`, {
        "data-model-picker-model-row": !0,
        children: (0, $.jsx)(kt, {
          model: g,
          displayName: Re,
          serviceTierIconKind: ve,
        }),
      })),
      (t[35] = g),
      (t[36] = ve),
      (t[37] = Re),
      (t[38] = ze))
    : (ze = t[38]);
  let Be = R || _ == null,
    Ve;
  t[39] !== Ce || t[40] !== ze || t[41] !== Be
    ? ((Ve = (0, $.jsx)(Dt, {
        label: ze,
        contentClassName: `w-[280px]`,
        disabled: Be,
        children: Ce,
      })),
      (t[39] = Ce),
      (t[40] = ze),
      (t[41] = Be),
      (t[42] = Ve))
    : (Ve = t[42]);
  let He;
  t[43] !== w || t[44] !== V || t[45] !== Te
    ? ((He =
        w != null && V.length > 0
          ? (0, $.jsx)(Dt, {
              label: (0, $.jsx)(h, {
                id: `settings.agent.speed.label`,
                defaultMessage: `Speed`,
                description: `Label for the Fast mode speed setting`,
              }),
              contentClassName: `w-[233px]`,
              flyoutHeader: (0, $.jsx)(i.Title, {
                children: (0, $.jsx)(h, {
                  id: `composer.intelligenceDropdown.speed.title`,
                  defaultMessage: `Speed`,
                  description: `Header label above speed options in the intelligence dropdown`,
                }),
              }),
              children: Te,
            })
          : null),
      (t[43] = w),
      (t[44] = V),
      (t[45] = Te),
      (t[46] = He))
    : (He = t[46]);
  let Ue;
  t[47] !== Le || t[48] !== Ve || t[49] !== He
    ? ((Ue = (0, $.jsxs)($.Fragment, { children: [Le, Ve, He] })),
      (t[47] = Le),
      (t[48] = Ve),
      (t[49] = He),
      (t[50] = Ue))
    : (Ue = t[50]);
  let We = Ue,
    Ge;
  t[51] !== s || t[52] !== pe
    ? ((Ge = pe ? c(`w-56`, s) : s), (t[51] = s), (t[52] = pe), (t[53] = Ge))
    : (Ge = t[53]);
  let Ke = pe ? void 0 : `menuNarrow`,
    Y = pe
      ? me
        ? (0, $.jsx)(_t, {
            active: E === !0,
            advancedView: Ie,
            menuView: he,
            onSelectComplete: S,
            onSelectPower: (e) => {
              C(e.model, e.reasoningEffort);
            },
            onSelectServiceTier: w,
            onToggleMenuView: () => {
              T(he === `simple` ? `advanced` : `simple`);
            },
            powerSelections: D,
            selectedPowerSelection: le,
            selectedServiceTier: z,
            serviceTierOptions: ge,
            serviceTierOptionsLoading: re,
            shouldResetToDefault: fe,
            shouldReduceMotion: ae,
          })
        : Ie
      : We,
    qe;
  return (
    t[54] !== n ||
    t[55] !== r ||
    t[56] !== o ||
    t[57] !== l ||
    t[58] !== y ||
    t[59] !== b ||
    t[60] !== x ||
    t[61] !== E ||
    t[62] !== a ||
    t[63] !== Ge ||
    t[64] !== Ke ||
    t[65] !== Y ||
    t[66] !== L
      ? ((qe = (0, $.jsx)(p, {
          open: E,
          onOpenChange: x,
          onCloseAutoFocus: y,
          onEscapeKeyDown: b,
          align: n,
          alignOffset: r,
          sideOffset: a,
          contentRef: o,
          contentClassName: Ge,
          contentWidth: Ke,
          disabled: l,
          triggerButton: L,
          children: Y,
        })),
        (t[54] = n),
        (t[55] = r),
        (t[56] = o),
        (t[57] = l),
        (t[58] = y),
        (t[59] = b),
        (t[60] = x),
        (t[61] = E),
        (t[62] = a),
        (t[63] = Ge),
        (t[64] = Ke),
        (t[65] = Y),
        (t[66] = L),
        (t[67] = qe))
      : (qe = t[67]),
    qe
  );
}
function Et(e) {
  let { value: t } = e;
  return t == null;
}
function Dt(e) {
  let t = (0, jt.c)(26),
    {
      ariaLabel: n,
      label: r,
      value: a,
      children: o,
      disabled: c,
      contentClassName: l,
      flyoutHeader: u,
    } = e,
    d;
  t[0] !== r || t[1] !== a
    ? ((d =
        a === void 0
          ? r
          : (0, $.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-3`,
              children: [
                (0, $.jsx)(`span`, { children: r }),
                (0, $.jsx)(`span`, {
                  className: `flex min-w-0 flex-1 justify-end text-token-text-tertiary`,
                  children: (0, $.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: a,
                  }),
                }),
              ],
            })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== n || t[4] !== c || t[5] !== d
    ? ((f = (0, $.jsx)(i.Item, { "aria-label": n, disabled: c, children: d })),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== o || t[8] !== f
    ? ((p = (0, $.jsx)(i.SubmenuItem, { trigger: f, children: o })),
      (t[7] = o),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m = p;
  if (B()) return m;
  let h;
  t[10] === m
    ? (h = t[11])
    : ((h = (0, $.jsx)(g, { chromeExtension: !0, extension: !0, children: m })),
      (t[10] = m),
      (t[11] = h));
  let _;
  t[12] !== r || t[13] !== a
    ? ((_ =
        a === void 0
          ? void 0
          : (0, $.jsxs)(`div`, {
              className: `flex w-full min-w-0 items-center gap-3`,
              children: [
                (0, $.jsx)(`span`, { children: r }),
                (0, $.jsx)(`span`, {
                  className: `flex min-w-0 flex-1 justify-end text-token-text-tertiary`,
                  children: (0, $.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: a,
                  }),
                }),
                (0, $.jsx)(s, {
                  className: `icon-xs shrink-0 text-token-input-placeholder-foreground`,
                }),
              ],
            })),
      (t[12] = r),
      (t[13] = a),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== n ||
  t[16] !== o ||
  t[17] !== l ||
  t[18] !== c ||
  t[19] !== u ||
  t[20] !== r ||
  t[21] !== _
    ? ((v = (0, $.jsx)(g, {
        browser: !0,
        electron: !0,
        children: (0, $.jsxs)(i.FlyoutSubmenuItem, {
          ariaLabel: n,
          label: r,
          contentClassName: l,
          disabled: c,
          triggerContent: _,
          children: [u, o],
        }),
      })),
      (t[15] = n),
      (t[16] = o),
      (t[17] = l),
      (t[18] = c),
      (t[19] = u),
      (t[20] = r),
      (t[21] = _),
      (t[22] = v))
    : (v = t[22]);
  let y;
  return (
    t[23] !== h || t[24] !== v
      ? ((y = (0, $.jsxs)($.Fragment, { children: [h, v] })),
        (t[23] = h),
        (t[24] = v),
        (t[25] = y))
      : (y = t[25]),
    y
  );
}
function Ot(e) {
  let t = (0, jt.c)(17),
    {
      keepOpenOnSelect: n,
      modelOption: r,
      selectedModel: a,
      selectedReasoningEffort: o,
      selectedServiceTier: s,
      selectedServiceTierIconKind: c,
      stripGptPrefix: l,
      onSelect: u,
    } = e,
    {
      model: p,
      displayName: m,
      supportedReasoningEfforts: h,
      defaultReasoningEffort: g,
    } = r,
    _ = p === a ? `true` : void 0,
    v = p === a ? f : void 0,
    y;
  t[0] !== g ||
  t[1] !== n ||
  t[2] !== p ||
  t[3] !== u ||
  t[4] !== o ||
  t[5] !== h
    ? ((y = (e) => {
        (n && e.preventDefault(),
          u(
            p,
            h.find((e) => {
              let { reasoningEffort: t } = e;
              return t === o;
            })?.reasoningEffort ?? g,
          ));
      }),
      (t[0] = g),
      (t[1] = n),
      (t[2] = p),
      (t[3] = u),
      (t[4] = o),
      (t[5] = h),
      (t[6] = y))
    : (y = t[6]);
  let b = c != null && d(r, s) ? c : null,
    x;
  t[7] !== m || t[8] !== p || t[9] !== l || t[10] !== b
    ? ((x = (0, $.jsx)(kt, {
        model: p,
        displayName: m,
        stripGptPrefix: l,
        serviceTierIconKind: b,
      })),
      (t[7] = m),
      (t[8] = p),
      (t[9] = l),
      (t[10] = b),
      (t[11] = x))
    : (x = t[11]);
  let S;
  return (
    t[12] !== _ || t[13] !== v || t[14] !== y || t[15] !== x
      ? ((S = (0, $.jsx)(i.Item, {
          "data-model-selected": _,
          RightIcon: v,
          onSelect: y,
          children: x,
        })),
        (t[12] = _),
        (t[13] = v),
        (t[14] = y),
        (t[15] = x),
        (t[16] = S))
      : (S = t[16]),
    S
  );
}
function kt(e) {
  let t = (0, jt.c)(14),
    {
      model: n,
      displayName: r,
      labelClassName: i,
      serviceTierIconKind: a,
      stripGptPrefix: o,
    } = e,
    s = a === void 0 ? null : a,
    l = o === void 0 ? !1 : o,
    u;
  if (r != null) {
    let e;
    if (t[0] !== r || t[1] !== l) {
      let n = j(r);
      ((e = l ? n.replace(/^GPT-/iu, ``) : n),
        (t[0] = r),
        (t[1] = l),
        (t[2] = e));
    } else e = t[2];
    u = e;
  } else if (n) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(h, {
          id: `composer.mode.local.model.custom`,
          defaultMessage: `Custom`,
          description: `Custom model from config`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (u = e));
  } else u = n;
  let d;
  t[4] === s
    ? (d = t[5])
    : ((d = (0, $.jsx)(At, {
        className: `icon-2xs text-token-link-foreground shrink-0`,
        iconKind: s,
      })),
      (t[4] = s),
      (t[5] = d));
  let f;
  t[6] === i
    ? (f = t[7])
    : ((f = c(`truncate whitespace-nowrap`, i)), (t[6] = i), (t[7] = f));
  let p;
  t[8] !== u || t[9] !== f
    ? ((p = (0, $.jsx)(`span`, { className: f, children: u })),
      (t[8] = u),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  return (
    t[11] !== d || t[12] !== p
      ? ((m = (0, $.jsxs)(`span`, {
          className: `flex min-w-0 items-center gap-1 tabular-nums`,
          children: [d, p],
        })),
        (t[11] = d),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function At(e) {
  let t = (0, jt.c)(4),
    { className: n, iconKind: r } = e;
  switch (r) {
    case `fast`: {
      let e;
      return (
        t[0] === n
          ? (e = t[1])
          : ((e = (0, $.jsx)(J, { className: n })), (t[0] = n), (t[1] = e)),
        e
      );
    }
    case `ultrafast`: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, $.jsx)(_e, { className: n })), (t[2] = n), (t[3] = e)),
        e
      );
    }
    case null:
      return null;
  }
}
var jt,
  $,
  Mt = e(() => {
    ((jt = o()),
      ee(),
      S(),
      G(),
      le(),
      me(),
      re(),
      T(),
      u(),
      he(),
      ve(),
      M(),
      n(),
      y(),
      bt(),
      Se(),
      wt(),
      x(),
      ($ = b()));
  });
export {
  re as A,
  K as C,
  H as D,
  ae as E,
  N as F,
  j as I,
  M as L,
  R as M,
  ne as N,
  oe as O,
  I as P,
  le as S,
  se as T,
  ue as _,
  wt as a,
  de as b,
  ot as c,
  ye as d,
  be as f,
  he as g,
  J as h,
  St as i,
  B as j,
  G as k,
  De as l,
  ve as m,
  kt as n,
  xt as o,
  _e as p,
  Mt as r,
  at as s,
  Tt as t,
  we as u,
  pe as v,
  ie as w,
  me as x,
  fe as y,
};
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~lpb6mnim-BqYcBFmq.js.map
