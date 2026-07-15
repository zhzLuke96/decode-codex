import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  $u as r,
  AV as i,
  Af as a,
  Aw as o,
  BW as s,
  C0 as c,
  DJ as l,
  Df as u,
  Di as d,
  Dr as f,
  Ds as p,
  Er as m,
  FK as h,
  Hq as g,
  I2 as _,
  IK as v,
  Ju as y,
  KJ as b,
  L2 as x,
  LK as ee,
  Mq as S,
  Nq as C,
  Of as w,
  Oi as T,
  PK as E,
  Qs as D,
  Qu as te,
  Ry as ne,
  S0 as re,
  SK as O,
  SV as k,
  Ts as A,
  Uq as ie,
  Us as ae,
  Vy as oe,
  Ws as j,
  Yu as se,
  Zs as ce,
  Zu as le,
  _ as ue,
  _0 as M,
  _Y as N,
  aJ as P,
  am as de,
  ax as fe,
  bK as pe,
  bf as me,
  cY as he,
  cp as ge,
  dx as F,
  ed as _e,
  fY as I,
  g as ve,
  gf as ye,
  hf as L,
  i2 as be,
  js as xe,
  jw as Se,
  k2 as R,
  kJ as Ce,
  kV as z,
  kf as B,
  lp as we,
  mY as V,
  mf as Te,
  pY as H,
  qJ as U,
  qu as Ee,
  rm as De,
  sJ as Oe,
  sY as ke,
  tJ as Ae,
  tm as je,
  x0 as Me,
  yY as Ne,
  zW as Pe,
  zy as Fe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  $t as Ie,
  Dt as Le,
  Et as Re,
  Qt as ze,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
import {
  As as Be,
  Go as Ve,
  Ko as He,
  Ms as Ue,
  Ps as We,
  Wo as Ge,
  bn as Ke,
  js as qe,
  ks as Je,
  qo as Ye,
  xn as Xe,
  yn as W,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import { n as G, t as Ze } from "./home-suggestion-staggered-item-C9gEPgD7.js";
import {
  a as K,
  i as Qe,
  n as $e,
  r as et,
  t as tt,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~c5tb5fpg-DC6HP2i3.js";
import { n as q, t as J } from "./plus-sm-BEqJM0Nl.js";
function nt(e) {
  let t = (0, rt.c)(13),
    n = re(ke),
    r = Ne(),
    a = Se(),
    [, o] = i(`skills_refresh_nonce`),
    s;
  t[0] !== r || t[1] !== n
    ? ((s = () => {
        n.get(O).danger(
          r.formatMessage({
            id: `home.artifactTemplates.deleteFailed`,
            defaultMessage: `Unable to delete template`,
            description: `Toast shown when deleting a personal artifact template fails`,
          }),
        );
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] !== e ||
  t[4] !== r ||
  t[5] !== a ||
  t[6] !== n ||
  t[7] !== o ||
  t[8] !== c
    ? ((l = async (t) => {
        let { success: i } = t;
        if (!i) {
          c();
          return;
        }
        try {
          (await e(),
            await a(ce),
            o(Y),
            n.get(O).success(
              r.formatMessage({
                id: `home.artifactTemplates.deleteSuccess`,
                defaultMessage: `Template deleted`,
                description: `Toast shown after deleting a personal artifact template succeeds`,
              }),
            ));
        } catch {
          n.get(O).danger(
            r.formatMessage({
              id: `home.artifactTemplates.refreshAfterDeleteFailed`,
              defaultMessage: `Template deleted, but the gallery could not refresh`,
              description: `Toast shown when the template was deleted but refreshing the template gallery fails`,
            }),
          );
        }
      }),
      (t[3] = e),
      (t[4] = r),
      (t[5] = a),
      (t[6] = n),
      (t[7] = o),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== c || t[11] !== l
      ? ((u = { onSuccess: l, onError: c }),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    Oe(`remove-skill`, u)
  );
}
function Y(e) {
  return (e ?? 0) + 1;
}
var rt,
  it = e(() => {
    ((rt = _()), M(), V(), pe(), o(), he(), z(), D(), P());
  }),
  at,
  ot = e(() => {
    at = `` + new URL(`budget-planner-B_xX3PJl.xlsx`, import.meta.url).href;
  }),
  st,
  ct = e(() => {
    st = `` + new URL(`content-calendar-D2hO7r4o.xlsx`, import.meta.url).href;
  }),
  lt,
  ut = e(() => {
    lt = `` + new URL(`design-review-DfDJVwWu.pptx`, import.meta.url).href;
  }),
  dt,
  ft = e(() => {
    dt = `` + new URL(`meeting-notes-hfgk-Kdr.docx`, import.meta.url).href;
  }),
  pt,
  mt = e(() => {
    pt =
      `` +
      new URL(`monthly-business-review-CqJbQRLF.pptx`, import.meta.url).href;
  }),
  ht,
  gt = e(() => {
    ht = `` + new URL(`budget-planner-DdzCe8wU.png`, import.meta.url).href;
  }),
  _t,
  vt = e(() => {
    _t = `` + new URL(`content-calendar-Ct37j4gK.png`, import.meta.url).href;
  }),
  yt,
  bt = e(() => {
    yt = `` + new URL(`design-review-D5ZTsvgZ.png`, import.meta.url).href;
  }),
  xt,
  St = e(() => {
    xt = `` + new URL(`meeting-notes-HtllKJ8V.png`, import.meta.url).href;
  }),
  Ct,
  wt = e(() => {
    Ct =
      `` +
      new URL(`monthly-business-review-iy1-PqJc.png`, import.meta.url).href;
  }),
  Tt,
  Et = e(() => {
    Tt = `` + new URL(`project-brief-bL95n3Ke.png`, import.meta.url).href;
  }),
  Dt,
  Ot = e(() => {
    Dt = `` + new URL(`project-tracker-BsrXHgJI.png`, import.meta.url).href;
  }),
  kt,
  At = e(() => {
    kt = `` + new URL(`report-outline-CQViP9Z5.png`, import.meta.url).href;
  }),
  jt,
  Mt = e(() => {
    jt = `` + new URL(`sales-discovery-CFt_AKqR.png`, import.meta.url).href;
  }),
  Nt,
  Pt = e(() => {
    Nt = `` + new URL(`project-brief-Dgi4V0mX.docx`, import.meta.url).href;
  }),
  Ft,
  It = e(() => {
    Ft = `` + new URL(`project-tracker-BL3pNzWv.xlsx`, import.meta.url).href;
  }),
  Lt,
  Rt = e(() => {
    Lt = `` + new URL(`report-outline-DUfNp9Wv.docx`, import.meta.url).href;
  }),
  zt,
  Bt = e(() => {
    zt = `` + new URL(`sales-discovery-DI8H6s1v.pptx`, import.meta.url).href;
  });
function Vt(e) {
  return Ht.filter((t) => t.kind === e);
}
var Ht,
  Ut = e(() => {
    (V(),
      ot(),
      ct(),
      ut(),
      ft(),
      mt(),
      gt(),
      vt(),
      bt(),
      St(),
      wt(),
      Et(),
      Ot(),
      At(),
      Mt(),
      Pt(),
      It(),
      Rt(),
      Bt(),
      (Ht = [
        {
          id: `project-brief`,
          kind: `document`,
          title: I({
            id: `home.artifactTemplates.projectBrief`,
            defaultMessage: `Project brief`,
            description: `Title for a document template card`,
          }),
          filename: `project-brief.docx`,
          assetUrl: Nt,
          previewUrl: Tt,
        },
        {
          id: `meeting-notes`,
          kind: `document`,
          title: I({
            id: `home.artifactTemplates.meetingNotes`,
            defaultMessage: `Meeting notes`,
            description: `Title for a document template card`,
          }),
          filename: `meeting-notes.docx`,
          assetUrl: dt,
          previewUrl: xt,
        },
        {
          id: `report-outline`,
          kind: `document`,
          title: I({
            id: `home.artifactTemplates.reportOutline`,
            defaultMessage: `Report outline`,
            description: `Title for a document template card`,
          }),
          filename: `report-outline.docx`,
          assetUrl: Lt,
          previewUrl: kt,
        },
        {
          id: `monthly-business-review`,
          kind: `presentation`,
          title: I({
            id: `home.artifactTemplates.monthlyBusinessReview`,
            defaultMessage: `Monthly Business Review`,
            description: `Title for a presentation template card`,
          }),
          filename: `monthly-business-review.pptx`,
          assetUrl: pt,
          previewUrl: Ct,
        },
        {
          id: `sales-discovery`,
          kind: `presentation`,
          title: I({
            id: `home.artifactTemplates.salesDiscovery`,
            defaultMessage: `Sales discovery`,
            description: `Title for a presentation template card`,
          }),
          filename: `sales-discovery.pptx`,
          assetUrl: zt,
          previewUrl: jt,
        },
        {
          id: `design-review`,
          kind: `presentation`,
          title: I({
            id: `home.artifactTemplates.designReview`,
            defaultMessage: `Design review`,
            description: `Title for a presentation template card`,
          }),
          filename: `design-review.pptx`,
          assetUrl: lt,
          previewUrl: yt,
        },
        {
          id: `project-tracker`,
          kind: `spreadsheet`,
          title: I({
            id: `home.artifactTemplates.projectTracker`,
            defaultMessage: `Project tracker`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `project-tracker.xlsx`,
          assetUrl: Ft,
          previewUrl: Dt,
        },
        {
          id: `budget-planner`,
          kind: `spreadsheet`,
          title: I({
            id: `home.artifactTemplates.budgetPlanner`,
            defaultMessage: `Budget planner`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `budget-planner.xlsx`,
          assetUrl: at,
          previewUrl: ht,
        },
        {
          id: `content-calendar`,
          kind: `spreadsheet`,
          title: I({
            id: `home.artifactTemplates.contentCalendar`,
            defaultMessage: `Content calendar`,
            description: `Title for a spreadsheet template card`,
          }),
          filename: `content-calendar.xlsx`,
          assetUrl: st,
          previewUrl: _t,
        },
      ]));
  });
function Wt({ createTemplateCard: e, kind: t, onAddFileAssetAttachment: n }) {
  let r = re(ke),
    i = Ke(),
    a = Ne(),
    [o, s] = (0, Gt.useState)(null),
    c = t === `document` || t === `google-docs`,
    l = Vt(t).slice(0, !c && e != null ? 2 : void 0),
    u = async (e) => {
      s(e.id);
      try {
        (await n({ assetUrl: e.assetUrl, label: e.filename }), i.focus());
      } catch {
        r.get(O).danger(
          a.formatMessage({
            id: `home.artifactTemplates.attachError`,
            defaultMessage: `Unable to attach template`,
            description: `Toast shown when attaching a document, presentation, or spreadsheet template fails`,
          }),
        );
      } finally {
        s(null);
      }
    };
  return (0, X.jsxs)(`div`, {
    className: b(
      `hide-scrollbar grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto scroll-pr-4 scroll-pl-3 pr-4 pl-3 py-1 sm:snap-none sm:grid-flow-row sm:auto-cols-auto sm:overflow-visible`,
      c
        ? `auto-cols-[min(14rem,80vw)] sm:grid-cols-4`
        : `auto-cols-[min(18rem,85vw)] sm:grid-cols-3`,
    ),
    role: `group`,
    "aria-label": a.formatMessage({
      id: `home.artifactTemplates.gallery`,
      defaultMessage: `Templates`,
      description: `Accessible label for the document, presentation, or spreadsheet template gallery`,
    }),
    children: [
      l.map((e, t) => {
        let n = o === e.id;
        return (0, X.jsx)(
          Ze,
          {
            className: `-m-1 min-w-0 snap-start p-1 sm:snap-none`,
            index: t,
            variant: `card`,
            children: (0, X.jsxs)(`button`, {
              type: `button`,
              className: `group relative flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border disabled:cursor-default disabled:opacity-70`,
              "aria-label": a.formatMessage(
                {
                  id: `home.artifactTemplates.attach`,
                  defaultMessage: `Attach {title}`,
                  description: `Accessible label for selecting a document, presentation, or spreadsheet template`,
                },
                { title: a.formatMessage(e.title) },
              ),
              disabled: o != null,
              onClick: () => void u(e),
              children: [
                (0, X.jsxs)(`div`, {
                  className: b(
                    `relative overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:border-token-border-heavy group-focus-visible:ring-token-focus-border`,
                    c ? `aspect-[4/5]` : `aspect-video`,
                  ),
                  children: [
                    (0, X.jsx)(`img`, {
                      src: e.previewUrl,
                      alt: ``,
                      className: b(
                        `h-full w-full object-top`,
                        c ? `object-contain` : `object-cover`,
                        n && `motion-safe:animate-pulse`,
                      ),
                      draggable: !1,
                    }),
                    (0, X.jsx)(`div`, {
                      "aria-hidden": !0,
                      className: `pointer-events-none absolute inset-0 flex items-center justify-center bg-token-text-primary/25 text-token-main-surface-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100`,
                      children: (0, X.jsx)(J, { className: `icon-lg` }),
                    }),
                  ],
                }),
                (0, X.jsx)(`div`, {
                  className: `min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary`,
                  children: (0, X.jsx)(N, { ...e.title }),
                }),
              ],
            }),
          },
          e.id,
        );
      }),
      e == null
        ? null
        : (0, X.jsx)(Ze, {
            className: `-m-1 min-w-0 snap-start p-1 sm:snap-none`,
            index: l.length,
            variant: `card`,
            children: e,
          }),
    ],
  });
}
var Gt,
  X,
  Kt = e(() => {
    (U(),
      M(),
      (Gt = t(x(), 1)),
      V(),
      G(),
      Ut(),
      pe(),
      W(),
      q(),
      he(),
      (X = R()));
  });
function qt(e) {
  let t = (0, Zt.c)(58),
    {
      isDeleting: n,
      hostId: r,
      onDelete: i,
      onEdit: a,
      onUse: o,
      skill: s,
      templateKind: c,
    } = e,
    l = re(fe),
    u = Ne(),
    [d, f] = (0, Qt.useState)(!1),
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    x;
  if (t[0] !== u || t[1] !== s || t[2] !== c) {
    x = Fe(s);
    let e;
    (t[11] !== s || t[12] !== c
      ? ((e = le(s, c)), (t[11] = s), (t[12] = c), (t[13] = e))
      : (e = t[13]),
      (m = e));
    let n;
    (t[14] === s
      ? (n = t[15])
      : ((n = (0, Qt.createElement)(Xt(s), {
          className: `h-full w-full [&_img]:object-cover [&_img]:object-top`,
        })),
        (t[14] = s),
        (t[15] = n)),
      (h = n),
      (p = c === `document` || c === `google-docs`),
      (y = `group/template-card relative flex w-full flex-col gap-2 rounded-2xl`),
      (g = `button`),
      (_ = `group/use flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`),
      (v = u.formatMessage(
        {
          id: `home.artifactTemplates.useSkill`,
          defaultMessage: `Use {title}`,
          description: `Accessible label for selecting a document, presentation, or spreadsheet template skill`,
        },
        { title: x },
      )),
      (t[0] = u),
      (t[1] = s),
      (t[2] = c),
      (t[3] = p),
      (t[4] = m),
      (t[5] = h),
      (t[6] = g),
      (t[7] = _),
      (t[8] = v),
      (t[9] = y),
      (t[10] = x));
  } else
    ((p = t[3]),
      (m = t[4]),
      (h = t[5]),
      (g = t[6]),
      (_ = t[7]),
      (v = t[8]),
      (y = t[9]),
      (x = t[10]));
  let ee = p ? `aspect-[4/5]` : `aspect-video`,
    S;
  t[16] === ee
    ? (S = t[17])
    : ((S = b(
        `relative overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover/use:border-token-border-heavy group-focus-visible/use:ring-token-focus-border`,
        ee,
      )),
      (t[16] = ee),
      (t[17] = S));
  let C;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 flex items-center justify-center bg-token-text-primary/25 text-token-main-surface-primary opacity-0 group-hover/use:opacity-100 group-focus-visible/use:opacity-100`,
        children: (0, Z.jsx)(J, { className: `icon-lg` }),
      })),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== h || t[20] !== S
    ? ((w = (0, Z.jsxs)(`div`, { className: S, children: [h, C] })),
      (t[19] = h),
      (t[20] = S),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === x
    ? (T = t[23])
    : ((T = (0, Z.jsx)(`div`, {
        className: `min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0 text-xs leading-4 font-normal tracking-normal text-token-text-secondary group-hover/use:text-token-text-primary group-focus-visible/use:text-token-text-primary`,
        children: x,
      })),
      (t[22] = x),
      (t[23] = T));
  let E;
  t[24] !== o ||
  t[25] !== g ||
  t[26] !== _ ||
  t[27] !== v ||
  t[28] !== w ||
  t[29] !== T
    ? ((E = (0, Z.jsxs)(`button`, {
        type: g,
        className: _,
        "aria-label": v,
        onClick: o,
        children: [w, T],
      })),
      (t[24] = o),
      (t[25] = g),
      (t[26] = _),
      (t[27] = v),
      (t[28] = w),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== u || t[32] !== x
    ? ((D = u.formatMessage(
        {
          id: `home.artifactTemplates.actions`,
          defaultMessage: `Template actions for {title}`,
          description: `Accessible label for actions on an artifact template`,
        },
        { title: x },
      )),
      (t[31] = u),
      (t[32] = x),
      (t[33] = D))
    : (D = t[33]);
  let te;
  t[34] === i
    ? (te = t[35])
    : ((te = i == null ? void 0 : () => f(!0)), (t[34] = i), (t[35] = te));
  let ne;
  t[36] !== r || t[37] !== m || t[38] !== l || t[39] !== s || t[40] !== x
    ? ((ne =
        m == null
          ? void 0
          : () =>
              j(l, m, {
                artifactTemplateSkill: s,
                hostId: r,
                isPreview: !0,
                tabId: `artifact-template:${r}:${m}`,
                title: x,
              })),
      (t[36] = r),
      (t[37] = m),
      (t[38] = l),
      (t[39] = s),
      (t[40] = x),
      (t[41] = ne))
    : (ne = t[41]);
  let O;
  t[42] !== n || t[43] !== a || t[44] !== D || t[45] !== te || t[46] !== ne
    ? ((O = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute top-2 right-2 rounded-lg bg-token-main-surface-primary opacity-0 group-hover/template-card:pointer-events-auto group-hover/template-card:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
        children: (0, Z.jsx)(ge, {
          electron: !0,
          extension: !0,
          children: (0, Z.jsx)(Jt, {
            isDeleting: n,
            label: D,
            onDelete: te,
            onEdit: a,
            onView: ne,
          }),
        }),
      })),
      (t[42] = n),
      (t[43] = a),
      (t[44] = D),
      (t[45] = te),
      (t[46] = ne),
      (t[47] = O))
    : (O = t[47]);
  let k;
  t[48] !== d || t[49] !== n || t[50] !== i || t[51] !== x
    ? ((k =
        i == null
          ? null
          : (0, Z.jsx)(Yt, {
              isDeleting: n,
              open: d,
              onConfirm: i,
              onOpenChange: f,
              title: x,
            })),
      (t[48] = d),
      (t[49] = n),
      (t[50] = i),
      (t[51] = x),
      (t[52] = k))
    : (k = t[52]);
  let A;
  return (
    t[53] !== E || t[54] !== O || t[55] !== k || t[56] !== y
      ? ((A = (0, Z.jsxs)(`div`, { className: y, children: [E, O, k] })),
        (t[53] = E),
        (t[54] = O),
        (t[55] = k),
        (t[56] = y),
        (t[57] = A))
      : (A = t[57]),
    A
  );
}
function Jt(e) {
  let t = (0, Zt.c)(18),
    { isDeleting: n, label: r, onDelete: i, onEdit: a, onView: o } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, Z.jsx)(ve, { color: `outline`, label: r })),
      (t[0] = r),
      (t[1] = s));
  let c = o == null,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(N, {
        id: `home.artifactTemplates.view`,
        defaultMessage: `View`,
        description: `Menu item that opens an artifact template in the template viewer`,
      })),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== o || t[4] !== c
    ? ((u = (0, Z.jsx)(ge, {
        electron: !0,
        children: (0, Z.jsx)(p.Item, { disabled: c, onSelect: o, children: l }),
      })),
      (t[3] = o),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d = a == null,
    f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(N, {
        id: `home.artifactTemplates.edit`,
        defaultMessage: `Edit`,
        description: `Menu item that appends a request to edit an artifact template`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let m;
  t[7] !== a || t[8] !== d
    ? ((m = (0, Z.jsx)(p.Item, { disabled: d, onSelect: a, children: f })),
      (t[7] = a),
      (t[8] = d),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== n || t[11] !== i
    ? ((h =
        i == null
          ? null
          : (0, Z.jsx)(p.Item, {
              disabled: n,
              onSelect: i,
              tone: `danger`,
              children: (0, Z.jsx)(N, {
                id: `home.artifactTemplates.delete`,
                defaultMessage: `Delete`,
                description: `Menu item that deletes a personal artifact template`,
              }),
            })),
      (t[10] = n),
      (t[11] = i),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== s || t[14] !== u || t[15] !== m || t[16] !== h
      ? ((g = (0, Z.jsxs)(A, {
          align: `end`,
          contentWidth: `xs`,
          triggerButton: s,
          children: [u, m, h],
        })),
        (t[13] = s),
        (t[14] = u),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Yt(e) {
  let t = (0, Zt.c)(28),
    { isDeleting: n, open: r, onConfirm: i, onOpenChange: a, title: o } = e,
    s;
  t[0] !== i || t[1] !== a
    ? ((s = (e) => {
        (e.preventDefault(), i(), a(!1));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === o
    ? (c = t[4])
    : ((c = (0, Z.jsx)(B, {
        children: (0, Z.jsx)(N, {
          id: `home.artifactTemplates.deleteConfirm.title`,
          defaultMessage: `Delete {title}?`,
          description: `Title for the artifact template deletion confirmation dialog`,
          values: { title: o },
        }),
      })),
      (t[3] = o),
      (t[4] = c));
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(w, {
        className: `contents`,
        children: (0, Z.jsx)(N, {
          id: `home.artifactTemplates.deleteConfirm.description`,
          defaultMessage: `This template will be permanently deleted. This cannot be undone.`,
          description: `Description for the artifact template deletion confirmation dialog`,
        }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let d;
  t[6] === c
    ? (d = t[7])
    : ((d = (0, Z.jsx)(ye, { title: c, subtitle: l })), (t[6] = c), (t[7] = d));
  let f;
  t[8] === a ? (f = t[9]) : ((f = () => a(!1)), (t[8] = a), (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(N, {
        id: `home.artifactTemplates.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the artifact template deletion confirmation dialog`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== f
    ? ((m = (0, Z.jsx)(S, {
        color: `ghost`,
        disabled: n,
        type: `button`,
        onClick: f,
        children: p,
      })),
      (t[11] = n),
      (t[12] = f),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(N, {
        id: `home.artifactTemplates.deleteConfirm.confirm`,
        defaultMessage: `Delete`,
        description: `Confirm button label for deleting an artifact template`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === n
    ? (g = t[16])
    : ((g = (0, Z.jsx)(S, {
        color: `danger`,
        loading: n,
        type: `submit`,
        children: h,
      })),
      (t[15] = n),
      (t[16] = g));
  let _;
  t[17] !== m || t[18] !== g
    ? ((_ = (0, Z.jsxs)(L, { children: [m, g] })),
      (t[17] = m),
      (t[18] = g),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  t[20] !== s || t[21] !== _ || t[22] !== d
    ? ((v = (0, Z.jsxs)(Te, { as: `form`, onSubmit: s, children: [d, _] })),
      (t[20] = s),
      (t[21] = _),
      (t[22] = d),
      (t[23] = v))
    : (v = t[23]);
  let y;
  return (
    t[24] !== a || t[25] !== r || t[26] !== v
      ? ((y = (0, Z.jsx)(u, {
          open: r,
          onOpenChange: a,
          size: `compact`,
          children: v,
        })),
        (t[24] = a),
        (t[25] = r),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function Xt(e) {
  let t = $t.get(e);
  if (t != null) return t;
  let n = d(e, { size: `large` });
  return ($t.set(e, n), n);
}
var Zt,
  Qt,
  Z,
  $t,
  en = e(() => {
    ((Zt = _()),
      U(),
      M(),
      (Qt = t(x(), 1)),
      V(),
      r(),
      ae(),
      C(),
      a(),
      me(),
      xe(),
      ue(),
      we(),
      q(),
      F(),
      T(),
      oe(),
      (Z = R()),
      ($t = new WeakMap()));
  });
function tn(e) {
  let t = (0, nn.c)(11),
    { isDocumentTemplates: n, label: r, onClick: i } = e,
    a = n ? `aspect-[4/5]` : `aspect-video`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = b(
        `relative flex items-center justify-center overflow-hidden rounded-xl border border-token-border bg-token-bg-tertiary shadow-sm ring-4 ring-transparent group-hover:border-token-border-heavy group-hover:bg-token-foreground/5 group-focus-visible:ring-token-focus-border`,
        a,
      )),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, rn.jsx)(J, {
        className: `icon-lg text-token-text-tertiary/60 group-hover:text-token-icon-foreground`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === o
    ? (c = t[4])
    : ((c = (0, rn.jsx)(`div`, { className: o, children: s })),
      (t[3] = o),
      (t[4] = c));
  let l;
  t[5] === r
    ? (l = t[6])
    : ((l = (0, rn.jsx)(`div`, {
        className: `min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary`,
        children: r,
      })),
      (t[5] = r),
      (t[6] = l));
  let u;
  return (
    t[7] !== i || t[8] !== c || t[9] !== l
      ? ((u = (0, rn.jsxs)(`button`, {
          type: `button`,
          className: `group relative flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
          onClick: i,
          children: [c, l],
        })),
        (t[7] = i),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var nn,
  rn,
  an = e(() => {
    ((nn = _()), U(), q(), (rn = R()));
  });
function on(e) {
  let t = (0, fn.c)(71),
    { canUseTemplateAttachments: r, onAddFileAssetAttachment: a } = e,
    o = r === void 0 ? !1 : r,
    s = Ke(),
    l = re(fe),
    u = (0, Q.useRef)(null),
    d = (0, Q.useRef)(null),
    f = (0, Q.useRef)(``),
    p = (0, Q.useRef)(null),
    [g, _] = (0, Q.useState)(!1),
    [x, ee] = (0, Q.useState)(!1),
    C = c(De),
    w = c(de),
    T = c(ie),
    [E] = i(`skills_refresh_nonce`),
    D = c(Je),
    O = c(Be),
    k = Ne(),
    A = Xe(s, dn),
    ae;
  t[0] === O
    ? (ae = t[1])
    : ((ae = (e) => Ue(e.view.state.doc, O)), (t[0] = O), (t[1] = ae));
  let oe = Xe(s, ae),
    j = D && !A ? oe : null,
    ce = j != null,
    le;
  t[2] === ce
    ? (le = t[3])
    : ((le = { enabled: ce }), (t[2] = ce), (t[3] = le));
  let { forceReload: ue, isLoading: M, skills: P } = n(C ?? void 0, w, le),
    { isPending: pe, mutate: me } = nt(ue),
    he;
  t[4] !== P || t[5] !== j
    ? ((he = j == null ? [] : P), (t[4] = P), (t[5] = j), (t[6] = he))
    : (he = t[6]);
  let { data: ge, isLoading: F } = y(he, w, E),
    I = j == null || ge == null ? [] : te(P, j, ge),
    ve = new Set(I.filter(un).map(ln)),
    { data: ye } = Me(pn, { hostId: w, paths: [...ve], skillsRefreshNonce: E }),
    L = _e(I, ye, ve),
    be = (0, Q.useRef)(!1),
    xe,
    Se;
  (t[7] !== M ||
  t[8] !== F ||
  t[9] !== l ||
  t[10] !== A ||
  t[11] !== D ||
  t[12] !== L.length
    ? ((xe = () => {
        if (!D) {
          be.current = !1;
          return;
        }
        if (!A) {
          if (L.length > 0) {
            be.current = !0;
            return;
          }
          !M && !F && be.current && Qe(l);
        }
      }),
      (Se = [M, F, l, A, D, L.length]),
      (t[7] = M),
      (t[8] = F),
      (t[9] = l),
      (t[10] = A),
      (t[11] = D),
      (t[12] = L.length),
      (t[13] = xe),
      (t[14] = Se))
    : ((xe = t[13]), (Se = t[14])),
    (0, Q.useEffect)(xe, Se));
  let R;
  t[15] === P ? (R = t[16]) : ((R = P.find(cn)), (t[15] = P), (t[16] = R));
  let z = R,
    B = z != null && o,
    we;
  if (t[17] !== B || t[18] !== L) {
    let e;
    (t[20] === B
      ? (e = t[21])
      : ((e = B ? [`create-template`] : []), (t[20] = B), (t[21] = e)),
      (we = [...L.map(sn), ...e]),
      (t[17] = B),
      (t[18] = L),
      (t[19] = we));
  } else we = t[19];
  let V = we.join(`
`),
    Te;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (e) => {
        let { maximum: t, minimum: n } = tt(e);
        (_(e.scrollLeft > n + 1), ee(e.scrollLeft < t - 1));
      }),
      (t[22] = Te))
    : (Te = t[22]);
  let H = h(Te),
    U;
  t[23] !== V || t[24] !== H
    ? ((U = (e) => {
        if (
          (d.current?.disconnect(),
          (u.current = e),
          e == null ||
            V === `` ||
            (f.current !== V &&
              ((f.current = V),
              p.current?.stop(),
              e.style.removeProperty(`scroll-snap-type`),
              e.scrollTo({ left: tt(e).minimum })),
            H(e),
            typeof ResizeObserver > `u`))
        )
          return;
        let t = new ResizeObserver(() => H(e));
        (t.observe(e),
          e.firstElementChild != null && t.observe(e.firstElementChild),
          e.lastElementChild != null && t.observe(e.lastElementChild),
          (d.current = t));
      }),
      (t[23] = V),
      (t[24] = H),
      (t[25] = U))
    : (U = t[25]);
  let Ee = U;
  if (j == null) return null;
  let Oe = j === `document` || j === `google-docs`,
    ke = Oe
      ? `basis-[min(14rem,80vw)] sm:basis-[calc((100%_+_2rem)/5)]`
      : `basis-[min(18rem,85vw)] sm:basis-1/3`,
    Ae = Oe && L.length + (B ? 1 : 0) < 5,
    je;
  t[26] !== s || t[27] !== k
    ? ((je = (e) => {
        let { state: t, dispatch: n } = s.view,
          r = m.atEnd(t.doc),
          i = r.$from.nodeBefore;
        (n(t.tr.setSelection(r)),
          i != null &&
            (!i.isText || !/\s$/.test(i.text ?? ``)) &&
            s.insertTextAtSelection(` `));
        let a = k.formatMessage(
            {
              id: `home.artifactTemplates.useTemplate.prompt`,
              defaultMessage: `Use the {templateName} template.`,
              description: `Composer text added after selecting an artifact template`,
            },
            { templateName: `__CODEX_TEMPLATE_NAME_PLACEHOLDER__` },
          ),
          o = a.indexOf(`__CODEX_TEMPLATE_NAME_PLACEHOLDER__`);
        if (o === -1) {
          (s.insertSkillMentionAtSelection(e), s.insertTextAtSelection(a));
          return;
        }
        let c = a.slice(0, o),
          l = a
            .slice(o + 35)
            .replaceAll(`__CODEX_TEMPLATE_NAME_PLACEHOLDER__`, () => Fe(e));
        (s.insertTextAtSelection(c), s.insertSkillMentionAtSelection(e));
        let { state: u, dispatch: d } = s.view,
          f = u.selection.from - 1,
          p = u.tr.insertText(l, f, u.selection.from);
        (p.setSelection(m.create(p.doc, f + l.length)), d(p));
      }),
      (t[26] = s),
      (t[27] = k),
      (t[28] = je))
    : (je = t[28]);
  let Ie = je,
    Le;
  t[29] !== B ||
  t[30] !== s ||
  t[31] !== k ||
  t[32] !== Oe ||
  t[33] !== z ||
  t[34] !== j
    ? ((Le = B
        ? (0, $.jsx)(tn, {
            isDocumentTemplates: Oe,
            label: k.formatMessage({
              id: `home.artifactTemplates.create`,
              defaultMessage: `Create a template`,
              description: `Accessible label for adding the Template Creator skill from the artifact template gallery`,
            }),
            onClick: () =>
              s.appendPromptText(
                k.formatMessage(mn[j], { templateCreator: ne(z) }),
              ),
          })
        : null),
      (t[29] = B),
      (t[30] = s),
      (t[31] = k),
      (t[32] = Oe),
      (t[33] = z),
      (t[34] = j),
      (t[35] = Le))
    : (Le = t[35]);
  let ze = Le,
    We;
  t[36] !== T || t[37] !== H
    ? ((We = (e) => {
        let t = u.current;
        if (t == null) return;
        p.current?.stop();
        let n = $e(t, e);
        if (T) {
          (t.scrollTo({ left: n }),
            t.style.removeProperty(`scroll-snap-type`),
            H(t));
          return;
        }
        ((t.style.scrollSnapType = `none`),
          (p.current = Ce(t.scrollLeft, n, {
            duration: 0.2,
            ease: [0.165, 0.84, 0.44, 1],
            onUpdate: (e) => t.scrollTo({ left: e }),
            onComplete: () => {
              (t.style.removeProperty(`scroll-snap-type`),
                u.current === t && H(t));
            },
          })));
      }),
      (t[36] = T),
      (t[37] = H),
      (t[38] = We))
    : (We = t[38]);
  let qe = We,
    Ye;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate`,
        children: (0, $.jsx)(N, {
          id: `home.artifactTemplates.title`,
          defaultMessage: `Templates`,
          description: `Title for the floating artifact template picker`,
        }),
      })),
      (t[39] = Ye))
    : (Ye = t[39]);
  let W;
  t[40] !== g ||
  t[41] !== x ||
  t[42] !== k ||
  t[43] !== qe ||
  t[44] !== L.length
    ? ((W =
        L.length > 0
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(S, {
                  "aria-label": k.formatMessage({
                    id: `home.artifactTemplates.previous`,
                    defaultMessage: `Show previous templates`,
                    description: `Accessible label for scrolling the artifact template gallery backward`,
                  }),
                  color: `ghost`,
                  disabled: !g,
                  onClick: () => qe(-1),
                  size: `toolbar`,
                  uniform: !0,
                  children: (0, $.jsx)(v, { className: `icon-xs rotate-180` }),
                }),
                (0, $.jsx)(S, {
                  "aria-label": k.formatMessage({
                    id: `home.artifactTemplates.next`,
                    defaultMessage: `Show more templates`,
                    description: `Accessible label for scrolling the artifact template gallery forward`,
                  }),
                  color: `ghost`,
                  disabled: !x,
                  onClick: () => qe(1),
                  size: `toolbar`,
                  uniform: !0,
                  children: (0, $.jsx)(v, { className: `icon-xs` }),
                }),
              ],
            })
          : null),
      (t[40] = g),
      (t[41] = x),
      (t[42] = k),
      (t[43] = qe),
      (t[44] = L.length),
      (t[45] = W))
    : (W = t[45]);
  let G;
  t[46] === k
    ? (G = t[47])
    : ((G = k.formatMessage({
        id: `home.artifactTemplates.close`,
        defaultMessage: `Close templates`,
        description: `Accessible label for closing the artifact template picker`,
      })),
      (t[46] = k),
      (t[47] = G));
  let K;
  t[48] === l
    ? (K = t[49])
    : ((K = () => {
        Qe(l);
      }),
      (t[48] = l),
      (t[49] = K));
  let et;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, $.jsx)(Pe, { className: `icon-xs` })), (t[50] = et))
    : (et = t[50]);
  let q;
  t[51] !== G || t[52] !== K
    ? ((q = (0, $.jsx)(S, {
        "aria-label": G,
        color: `ghost`,
        onClick: K,
        size: `toolbar`,
        uniform: !0,
        children: et,
      })),
      (t[51] = G),
      (t[52] = K),
      (t[53] = q))
    : (q = t[53]);
  let J;
  t[54] !== W || t[55] !== q
    ? ((J = (0, $.jsxs)(He, {
        background: `transparent`,
        className: `flex h-9 items-center justify-between gap-3 pr-1 pl-3`,
        children: [
          Ye,
          (0, $.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [W, q],
          }),
        ],
      })),
      (t[54] = W),
      (t[55] = q),
      (t[56] = J))
    : (J = t[56]);
  let Y;
  t[57] !== M ||
  t[58] !== F ||
  t[59] !== o ||
  t[60] !== ze ||
  t[61] !== a ||
  t[62] !== j ||
  t[63] !== L.length
    ? ((Y =
        L.length === 0 && !M && !F && o && a != null
          ? (0, $.jsx)(Wt, {
              createTemplateCard: ze,
              kind: j,
              onAddFileAssetAttachment: a,
            })
          : null),
      (t[57] = M),
      (t[58] = F),
      (t[59] = o),
      (t[60] = ze),
      (t[61] = a),
      (t[62] = j),
      (t[63] = L.length),
      (t[64] = Y))
    : (Y = t[64]);
  let rt =
      L.length > 0
        ? (0, $.jsxs)(`div`, {
            ref: Ee,
            className: `hide-scrollbar flex snap-x snap-mandatory scroll-px-3 gap-3 overflow-x-auto px-3 py-1`,
            role: `group`,
            "aria-label": k.formatMessage({
              id: `home.artifactTemplates.gallery`,
              defaultMessage: `Templates`,
              description: `Accessible label for the document, presentation, or spreadsheet template gallery`,
            }),
            onScroll: (e) => H(e.currentTarget),
            children: [
              L.map((e, t) =>
                (0, $.jsx)(
                  Ze,
                  {
                    className: b(
                      `-m-1 min-w-0 shrink-0 snap-start p-1`,
                      ke,
                      Ae && `grow`,
                    ),
                    index: t,
                    variant: `card`,
                    children: (0, $.jsx)(qt, {
                      hostId: w,
                      isDeleting: pe,
                      onDelete:
                        w === `local` && e.scope === `user` && ve.has(e.path)
                          ? () => me({ hostId: w, skillPath: e.path })
                          : void 0,
                      onEdit:
                        z == null ? void 0 : () => s.appendPromptText(se(z, e)),
                      onUse: () => Ie(e),
                      skill: e,
                      templateKind: j,
                    }),
                  },
                  e.path,
                ),
              ),
              ze == null
                ? null
                : (0, $.jsx)(Ze, {
                    className: b(
                      `-m-1 min-w-0 shrink-0 snap-start p-1`,
                      ke,
                      Ae && `grow`,
                    ),
                    index: L.length,
                    variant: `card`,
                    children: ze,
                  }),
            ],
          })
        : null,
    it;
  t[65] !== Y || t[66] !== rt
    ? ((it = (0, $.jsxs)(Ve, { children: [Y, rt] })),
      (t[65] = Y),
      (t[66] = rt),
      (t[67] = it))
    : (it = t[67]);
  let at;
  return (
    t[68] !== J || t[69] !== it
      ? ((at = (0, $.jsx)(Re, {
          isActive: !0,
          placement: `top`,
          spacing: `compact`,
          children: (0, $.jsxs)(Ge, {
            className: `max-h-[min(34rem,calc(100vh_-_2rem))]`,
            padded: !1,
            children: [J, it],
          }),
        })),
        (t[68] = J),
        (t[69] = it),
        (t[70] = at))
      : (at = t[70]),
    at
  );
}
function sn(e) {
  return e.path;
}
function cn(e) {
  return (
    e.enabled &&
    (e.name === `template-creator` || e.name.endsWith(`:template-creator`))
  );
}
function ln(e) {
  return e.path;
}
function un(e) {
  return (e.scope === `user` || e.scope === `repo`) && !e.name.includes(`:`);
}
function dn(e) {
  return Ie(e.view.state);
}
var fn, Q, $, pn, mn;
e(() => {
  ((fn = _()),
    U(),
    l(),
    M(),
    f(),
    (Q = t(x(), 1)),
    V(),
    G(),
    K(),
    We(),
    qe(),
    r(),
    Ee(),
    it(),
    C(),
    et(),
    Le(),
    ze(),
    Ye(),
    ee(),
    s(),
    he(),
    F(),
    je(),
    g(),
    k(),
    z(),
    oe(),
    D(),
    E(),
    P(),
    W(),
    Kt(),
    en(),
    an(),
    ($ = R()),
    (pn = be(ke, ({ hostId: e, paths: t, skillsRefreshNonce: n }) => ({
      queryKey: [`artifact-template-skill-creation-times`, e, n, ...t],
      queryFn: async ({ signal: n }) => {
        let r = await Promise.all(
          t.map(async (t) => {
            try {
              let { createdAtMs: r, mtimeMs: i } = await Ae(
                `read-file-metadata`,
                { params: { hostId: e, path: t }, signal: n },
              );
              return [t, r != null && r > 0 ? r : (i ?? null)];
            } catch (e) {
              if (n.aborted) throw e;
              return [t, null];
            }
          }),
        );
        return new Map(r);
      },
      enabled: t.length > 0,
      staleTime: 0,
    }))),
    (mn = H({
      document: {
        id: `home.artifactTemplates.createDocument.prompt`,
        defaultMessage: `Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a document template from a reference file`,
      },
      presentation: {
        id: `home.artifactTemplates.createPresentation.prompt`,
        defaultMessage: `Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a presentation template from a reference file`,
      },
      spreadsheet: {
        id: `home.artifactTemplates.createSpreadsheet.prompt`,
        defaultMessage: `Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a spreadsheet template from a reference file`,
      },
      "google-docs": {
        id: `home.artifactTemplates.createGoogleDoc.prompt`,
        defaultMessage: `Create a new Google Doc template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Doc link and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a Google Doc template from a Google Doc link`,
      },
      "google-slides": {
        id: `home.artifactTemplates.createGoogleSlides.prompt`,
        defaultMessage: `Create a new Google Slides template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Slides link and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a Google Slides template from a Google Slides link`,
      },
      "google-sheets": {
        id: `home.artifactTemplates.createGoogleSheet.prompt`,
        defaultMessage: `Create a new Google Sheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Sheet link and if needed interview me on how and when to use the template.`,
        description: `Composer prefill for creating a Google Sheet template from a Google Sheet link`,
      },
    })));
})();
export { on as ArtifactTemplatePicker };
//# sourceMappingURL=home-artifact-templates-y9iMqO82.js.map
