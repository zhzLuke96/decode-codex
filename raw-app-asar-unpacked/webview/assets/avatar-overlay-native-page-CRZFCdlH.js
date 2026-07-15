import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $J as n,
  $V as r,
  AS as i,
  AY as a,
  C0 as o,
  CS as s,
  Cb as c,
  I2 as l,
  L2 as u,
  MU as d,
  Mb as f,
  Mm as ee,
  NT as te,
  NU as p,
  PB as ne,
  QV as re,
  S0 as ie,
  SI as ae,
  SK as oe,
  SV as m,
  T$ as se,
  Tb as ce,
  Ub as le,
  XV as ue,
  YV as de,
  _0 as h,
  aG as g,
  aY as fe,
  bK as _,
  cY as v,
  dT as pe,
  eY as y,
  fY as me,
  gJ as he,
  hJ as b,
  hh as x,
  iL as ge,
  if as _e,
  jm as ve,
  k2 as ye,
  mJ as S,
  mY as be,
  rG as xe,
  rL as C,
  rf as w,
  sL as T,
  sY as Se,
  uT as E,
  vI as Ce,
  vh as we,
  w$ as Te,
  w0 as Ee,
  wV as De,
  x$ as Oe,
  x0 as ke,
  xI as Ae,
  y$ as je,
  yY as Me,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Ca as Ne,
  wa as Pe,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import { ct as Fe, st as Ie } from "./app-initial~app-main~page-hSvsQcNf.js";
import {
  l as Le,
  s as Re,
} from "./avatar-overlay-pill-material.module-DIKT60Hh.js";
import {
  $ as ze,
  Q as Be,
  d as Ve,
  f as D,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  i as O,
  n as He,
  r as Ue,
  t as We,
} from "./avatar-overlay-native-frame-BGdLM0fN.js";
import {
  a as Ge,
  i as Ke,
  o as k,
  t as qe,
} from "./avatar-overlay-mascot-size-De0Pyk6W.js";
import {
  gs as Je,
  vs as Ye,
} from "./app-initial~app-main~onboarding-page~projects-index-page~hotkey-window-thread-page~quick-ch~iiv1g666-DJ6LyiO1.js";
import {
  n as Xe,
  t as Ze,
} from "./app-initial~app-main~avatar-overlay-page~avatar-overlay-native-page~pets-settings-CXdZ45KF.js";
import {
  n as Qe,
  t as A,
} from "./use-floating-window-pointer-interactivity-DAFdHELb.js";
import {
  i as $e,
  n as et,
  t as tt,
} from "./avatar-overlay-debug-state-CTIOAAH-.js";
import {
  a as nt,
  c as rt,
  d as it,
  f as at,
  i as ot,
  l as st,
  n as j,
  o as ct,
  r as lt,
  s as ut,
  t as dt,
  u as ft,
} from "./use-avatar-overlay-selection-CgaR3LEm.js";
function pt({
  activityStackPresentation: e,
  isNotificationStackExpanded: t,
  measuredSurfaces: n,
  policies: r,
}) {
  return n.flatMap((n) => {
    let i = r.find((e) => e.id === n.id);
    if (i == null) return [];
    let a = e.slots.find((e) => e.slotId === n.id);
    if (a == null)
      return [
        {
          ...n,
          ...i,
          chromiumPresentationRect: n.rect,
          edgeZone: null,
          opacity: 1,
          platterRect: n.rect,
          presentationRect: n.rect,
        },
      ];
    let o = mt(n.rect, a.visibleRect, a.presentationRect);
    return [
      {
        ...n,
        ...i,
        chromiumPresentationRect: t
          ? n.rect
          : mt(n.rect, a.contentRect, a.presentationRect),
        edgeZone: a.edgeZone,
        opacity: !t || a.visibleRect.height > 0 ? 1 : 0,
        platterRect: n.rect,
        presentationRect: o,
      },
    ];
  });
}
function mt(e, t, n) {
  return {
    height: t.height,
    left: e.left + t.left - n.left,
    top: e.top + t.top - n.top,
    width: t.width,
  };
}
var M = e(() => {});
function ht(e, { includeInertSurfaces: t = !1 } = {}) {
  if (e == null) return null;
  let n = N(e.querySelector(L)),
    r = P(e.querySelector(R), t);
  return n == null ? null : { mascot: n, tray: r };
}
function gt(e, t, { includeInert: n = !1 } = {}) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(W))
        .flatMap((e) => {
          if ((!n && e.closest(`[inert]`) != null) || F(e)) return [];
          let r = e.dataset.avatarOverlayNativeSurfaceId,
            i = t.find((e) => e === r),
            a = e.getBoundingClientRect();
          if (i == null || a.width <= 0 || a.height <= 0) return [];
          let o = {
              height: a.height,
              left: a.left,
              top: a.top,
              width: a.width,
            },
            s = Number(e.dataset.avatarOverlayNativeCornerRadius),
            c = I(e);
          if (!Number.isFinite(s) || !Number.isFinite(c)) return [];
          let l = e.querySelector(G),
            u = l?.getBoundingClientRect(),
            d = e.querySelector(q),
            f = d?.getBoundingClientRect();
          return [
            {
              ...(l != null && u != null && !F(l) && u.width > 0 && u.height > 0
                ? {
                    chromiumOverflowCornerRadius:
                      Math.min(u.width, u.height) / 2,
                    chromiumOverflowRect: {
                      height: u.height,
                      left: u.left,
                      top: u.top,
                      width: u.width,
                    },
                  }
                : {}),
              ...(d?.dataset.avatarOverlayTrailingAccessory === `success` &&
              f != null &&
              f.width > 0 &&
              f.height > 0
                ? {
                    trailingAccessory: {
                      kind: `success`,
                      rect: {
                        height: f.height,
                        left: f.left,
                        top: f.top,
                        width: f.width,
                      },
                    },
                  }
                : {}),
              cornerRadius: s,
              id: i,
              opacity: c,
              rect: o,
            },
          ];
        })
        .sort((e, n) => t.indexOf(e.id) - t.indexOf(n.id));
}
function _t(e) {
  return Array.from(e.querySelectorAll(J.join(`, `)));
}
function N(e) {
  if (e == null || F(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function vt(e) {
  return {
    backing: N(e?.querySelector(H) ?? null)?.height ?? 0,
    visible: N(e?.querySelector(U) ?? null)?.height ?? 0,
  };
}
function P(e, t) {
  if (e == null || F(e)) return null;
  let n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = Array.from(e.querySelectorAll(W))
      .filter((e) => (t || e.closest(`[inert]`) == null) && !F(e))
      .map((e) => e.getBoundingClientRect()),
    i = Math.ceil(
      Math.max(
        e.offsetWidth > 0 ? e.offsetWidth : n.width,
        Math.max(n.right, ...r.map((e) => e.right)) -
          Math.min(n.left, ...r.map((e) => e.left)),
      ),
    ),
    a = e.querySelector(z),
    o = e.querySelector(B);
  if (a == null || o == null) return { height: Math.ceil(n.height), width: i };
  let s = o.getBoundingClientRect(),
    c = Math.max(
      0,
      ...Array.from(o.querySelectorAll(K)).map(
        (e) => e.getBoundingClientRect().bottom - s.bottom,
      ),
    );
  return {
    height: Math.ceil(a.getBoundingClientRect().height + o.scrollHeight - c),
    width: i,
  };
}
function F(e) {
  return window.getComputedStyle(e).display === `none`;
}
function I(e) {
  let t = 1;
  for (let n = e; n != null; n = n.parentElement)
    t *= Number(window.getComputedStyle(n).opacity || `1`);
  return t;
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  yt = e(() => {
    ((L = `.codex-avatar-root`),
      (R = `[data-avatar-overlay-size='notification-tray']`),
      (z = `[data-avatar-overlay-size='notification-tray-header']`),
      (B = `[data-avatar-overlay-size='notification-tray-list']`),
      (V = `[data-avatar-overlay-measure='notification-tray-row']`),
      (H = `[data-avatar-overlay-size='notification-stack-backing-layout']`),
      (U = `[data-avatar-overlay-size='notification-stack-visible-layout']`),
      (W = `[data-avatar-overlay-native-surface-id]`),
      (G = `[data-avatar-overlay-chromium-overflow='true']`),
      (K = `[data-avatar-overlay-backing-canvas='true']`),
      (q = `[data-avatar-overlay-trailing-accessory]`),
      (J = [L, R, z, B, V, H, U, W, G, q]));
  });
function Y() {
  let e = (0, Tt.c)(13),
    { selectedAvatar: t, selectedAvatarId: n } = j(),
    r = t == null,
    i,
    a;
  (e[0] === r
    ? ((i = e[1]), (a = e[2]))
    : ((i = () => {
        r &&
          b.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
            isInteractive: !1,
          });
      }),
      (a = [r]),
      (e[0] = r),
      (e[1] = i),
      (e[2] = a)),
    (0, Q.useEffect)(i, a));
  let o, s;
  if (
    (e[3] === r
      ? ((o = e[4]), (s = e[5]))
      : ((o = () => (
          r &&
            b.dispatchMessage(`avatar-overlay-composition-changed`, {
              state: null,
            }),
          X
        )),
        (s = [r]),
        (e[3] = r),
        (e[4] = o),
        (e[5] = s)),
    (0, Q.useLayoutEffect)(o, s),
    t == null)
  )
    return null;
  let c;
  e[6] !== t || e[7] !== n
    ? ((c = Z(t, n)), (e[6] = t), (e[7] = n), (e[8] = c))
    : (c = e[8]);
  let l;
  return (
    e[9] !== t || e[10] !== n || e[11] !== c
      ? ((l = (0, Dt.jsx)(bt, { selectedAvatar: t, selectedAvatarId: n }, c)),
        (e[9] = t),
        (e[10] = n),
        (e[11] = c),
        (e[12] = l))
      : (l = e[12]),
    l
  );
}
function X() {
  b.dispatchMessage(`avatar-overlay-composition-changed`, { state: null });
}
function bt({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = ie(Se),
    r = Me(),
    a = ee() === !0,
    s = g(`451951815`),
    c = g(`665486075`),
    l = o(Je),
    u = c && l,
    d = g(`1380537759`),
    ne = g(Be),
    oe = D(De),
    m = o(ae),
    { mascotWidthPx: se } = k(),
    { data: ue = [], refetch: h } = i(),
    { data: fe = [], refetch: _ } = le({ taskFilter: `current`, limit: 20 }),
    v = ce(),
    pe = f(),
    y = Re({
      includeCompactWaitingRequests: s,
      includeMcpElicitationCancelAction: !0,
      intl: r,
      localConversations: ue,
      excludedConversationId: null,
      remoteTasks: fe,
    });
  return (0, Dt.jsx)(xt, {
    isDarkAppearance: a,
    dictationCleanupEnabled: !1,
    dictationStreamingEnabled: ne,
    dictationSupportState: oe,
    latestTurnItems: (e) => (e == null ? void 0 : n.get(te, e)?.items),
    mascotWidthPx: se,
    productLogger: m,
    globalDictationOrbEnabled: d,
    quickChatEnabled: u,
    selectedAvatar: e,
    selectedAvatarId: t,
    sessions: y,
    onClosePet: () => {
      b.dispatchMessage(`avatar-overlay-close`, {});
    },
    onMascotClick: () => {
      b.dispatchMessage(`open-current-main-window`, {
        focusComposer: !0,
        stealFocus: !0,
      });
    },
    onRefreshLocalSessions: h,
    onRefreshRemoteSessions: _,
    onRunNotificationControl: async (e, t) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
        case `open-follow-up`:
          return;
        case `stop`:
          if (r == null) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await p(`interrupt-conversation`, {
                conversationId: r.conversationId,
                initiatedBy: `user`,
              }),
                Promise.resolve(h()).catch(() => {}));
              return;
            case `cloud-task`:
              (await v.mutateAsync(r.taskId),
                Promise.resolve(_()).catch(() => {}));
              return;
          }
        case `submit-follow-up`: {
          let e = t.prompt.trim();
          if (r == null || e.length === 0) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await p(`send-follow-up-message`, {
                conversationId: r.conversationId,
                prompt: e,
                serviceTier: await _e(
                  n,
                  n.get(E, r.conversationId) ?? `local`,
                  null,
                ),
              }),
                Promise.resolve(h()).catch(() => {}));
              return;
            case `cloud-task`:
              (await pe.mutateAsync({
                taskId: r.taskId,
                turnId: r.turnId,
                prompt: e,
                ideContext: ``,
                runEnvironmentInQaMode: !1,
                priorConversation: null,
                images: null,
              }),
                Promise.resolve(_()).catch(() => {}));
              return;
          }
        }
      }
    },
    onRunNotificationAction: (e, t) => {
      let r = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (
              t.commandDecision != null &&
              (r?.kind === `exec` || r?.kind === `network`)
            ) {
              p(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.commandDecision,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && r?.kind === `patch`) {
              p(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.fileDecision,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && r?.kind === `permission`) {
              p(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: t.permissionResponse,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && r?.kind === `tool`) {
              p(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: re(t.mcpElicitationAction),
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `plan-start`:
            if (r?.kind === `plan` && t.planStartCollaborationMode != null) {
              p(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: {
                  collaborationMode: t.planStartCollaborationMode,
                },
              })
                .then(() =>
                  p(`remove-plan-implementation-request`, {
                    conversationId: i,
                    turnId: r.turnId,
                  }),
                )
                .then(async () =>
                  p(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${de}\n${r.planContent}`,
                    serviceTier: await _e(
                      n,
                      n.get(E, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  h();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null &&
          b.dispatchMessage(`open-in-main-window`, { path: e.action.path }));
    },
    onSubmitQuestionOption: (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        p(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          h();
        });
    },
    onSubmitQuickChat: async (e) => {
      (await Ne({
        model: void 0,
        prompt: e,
        scope: n,
        target: { type: `projectless` },
        thinking: void 0,
      }),
        await h());
    },
  });
}
function xt({
  dictationCleanupEnabled: e,
  dictationStreamingEnabled: t,
  dictationSupportState: r,
  firstAwakeNotificationEnabled: i = !0,
  globalDictationOrbEnabled: a = !1,
  isDarkAppearance: s,
  latestTurnItems: c,
  mascotWidthPx: l,
  productLogger: u,
  quickChatEnabled: d,
  selectedAvatar: f,
  selectedAvatarId: ee,
  sessions: p,
  onClosePet: ne,
  onMascotClick: re,
  onRefreshLocalSessions: ae,
  onRefreshRemoteSessions: m,
  onRunNotificationControl: ce,
  onRunNotificationAction: le,
  onSubmitQuestionOption: ue,
  onSubmitQuickChat: de,
}) {
  let h = ie(Se),
    g = o(tt),
    _ = o(et),
    v = Mt.phase !== `inactive` && !0;
  ke(te, void 0);
  let { data: pe } = we({ enabled: v, hostId: void 0 }),
    y = Me(),
    [x, _e] = (0, Q.useState)(Pt),
    [ve, ye] = (0, Q.useState)(!1),
    S = ve && !_,
    [be, xe] = (0, Q.useState)(!0),
    [w, E] = (0, Q.useState)(!1),
    [Ce, Ee] = (0, Q.useState)(!1),
    [De, Ne] = (0, Q.useState)(!1),
    [Pe, Fe] = (0, Q.useState)(!1),
    [Ie, Le] = (0, Q.useState)(null),
    [Re, ze] = (0, Q.useState)(``),
    [Be, Ve] = (0, Q.useState)(0),
    [D, O] = (0, Q.useState)(null),
    [He, Ge] = (0, Q.useState)([]),
    [k, qe] = (0, Q.useState)({}),
    [Je, Ye] = (0, Q.useState)(0),
    [Xe, A] = (0, Q.useState)(null),
    [$e, nt] = (0, Q.useState)(() => new Map()),
    [rt, at] = (0, Q.useState)(() => Date.now()),
    [j] = (0, Q.useState)(() => (i ? St(f, ee) : null)),
    dt =
      j == null
        ? null
        : lt({ intl: y, petName: j.petName, startedAtMs: j.startedAtMs }),
    mt = [],
    { nextNotificationExpiresAtMs: M, notifications: N } = ot({
      dismissedNotificationTurnKeys: $e,
      extraNotifications: v ? [...[], ...mt] : dt == null ? [] : [dt],
      latestActivityFirst: !0,
      nowMs: rt,
      sessions: v
        ? p.filter((e) => e.status === `waiting` || e.status === `failed`)
        : p,
    }),
    P = N.map((e) => ({
      copy: Ue({
        intl: y,
        latestTurnItems: ct(e) ? c(e.localConversationId) : void 0,
        notification: e,
        notificationCount: N.length,
      }),
      notification: e,
    })),
    F = ut(N, y),
    I = be ? N.map(({ id: e }) => ({ height: k[e] ?? 54, id: e })) : At,
    L = Te({
      expanded: S || w,
      items: I,
      scrollOffset: Je,
      viewportRect: { height: kt, left: 0, top: 0, width: 345 },
    }),
    R = p.some((e) => e.source !== `cloud` && e.status === `running`),
    z = p.some((e) => e.source === `cloud` && e.status === `running`),
    B = d && (Ce || De || Pe),
    V = (0, Q.useRef)(null),
    H = (0, Q.useRef)(null),
    U = (0, Q.useRef)(null),
    W = (0, Q.useRef)(0),
    G = (0, Q.useRef)(null),
    K = (0, Q.useRef)(null),
    q = (0, Q.useRef)(!1),
    J = (0, Q.useCallback)(
      (e, t, n, r = w) => {
        u.logProductEvent(
          ge,
          Ze({
            action: e,
            hasRunningCloudSession: z,
            hasRunningLocalSession: R,
            isNotificationTrayOpen: r,
            notification: n,
            notificationCount: N.length,
            selectedAvatar: f,
            source: t,
          }),
        );
      },
      [R, z, w, N.length, u, f],
    );
  ((0, Q.useEffect)(() => {
    if (j == null) return;
    let e = n(jt, []);
    e.includes(j.avatarId) || fe(jt, [...e, j.avatarId]);
  }, [j]),
    (0, Q.useEffect)(() => {
      q.current ||
        (u !== Ae &&
          ((q.current = !0),
          J(
            C.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
            T.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
          )));
    }, [u, J]),
    Qe({
      interactiveRegionRef: H,
      isPaused: () => V.current != null,
      onInteractiveChange: (e) => {
        b.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
          isInteractive: e,
        });
      },
      regionElementSelectors: Nt,
    }));
  let yt = (0, Q.useCallback)(() => {
      let n = gt(H.current, je, { includeInert: !0 }),
        i = {
          ...k,
          ...Object.fromEntries(
            L.slots.flatMap(({ itemId: e, slotId: t }) => {
              let r = n.find((e) => e.id === t);
              return r == null ? [] : [[e, Math.ceil(r.rect.height)]];
            }),
          ),
        },
        a = !(0, Et.default)(k, i);
      if ((a && qe(i), _)) {
        K.current != null &&
          ((K.current = null),
          b.dispatchMessage(`avatar-overlay-composition-changed`, {
            state: null,
          }));
        return;
      }
      let o = ht(H.current, { includeInertSurfaces: !0 });
      if (o == null) return;
      let c = vt(H.current),
        l = pt({
          activityStackPresentation: L,
          isNotificationStackExpanded: S || w,
          measuredSurfaces: n,
          policies: Oe({
            activityStackPresentation: L,
            isNotificationStackExpanded: S || w,
            isQuickChatVisible: B,
            showsNotificationBadge: P.length > 0,
          }),
        });
      if (a && S) return;
      let u = {
          activityStackBackingLayoutHeight: c.backing,
          activityStackItems: I,
          activityStackPresentation: L,
          activityStackScrollOffset: Je,
          activityStackVisibleLayoutHeight: c.visible,
          mascot: o.mascot,
          surfaces: l,
          tray: o.tray,
        },
        d = {
          contentState: {
            activities: P,
            activityStackBackingLayoutHeight:
              u.activityStackBackingLayoutHeight,
            activityStackItems: u.activityStackItems,
            activityStackPresentation: u.activityStackPresentation,
            activityStackScrollOffset: u.activityStackScrollOffset,
            activityStackVisibleLayoutHeight:
              u.activityStackVisibleLayoutHeight,
            expandedNotificationIds: He,
            isDarkAppearance: s,
            isNotificationStackExpanded: w,
            isQuickChatVisible: B,
            isWindowDragActive: Xe != null,
            layout: x,
            locale: y.locale,
            notificationFollowUp: D,
            pointerSurfaceId: Ie,
            quickChatDictation: {
              cleanupEnabled: e,
              streamingEnabled: t,
              supportState: r,
            },
            quickChatDraft: Re,
            quickChatResetRevision: Be,
          },
          measurements: u,
        };
      (0, Et.default)(d, K.current) ||
        ((K.current = d),
        b.dispatchMessage(`avatar-overlay-composition-changed`, { state: d }));
    }, [
      P,
      k,
      I,
      L,
      Je,
      He,
      _,
      y.locale,
      s,
      w,
      B,
      Xe,
      x,
      S,
      D,
      Ie,
      e,
      t,
      r,
      Re,
      Be,
    ]),
    Y = (0, Q.useCallback)(() => {
      let e = ht(H.current);
      if (e == null) return;
      let t = { ...e, nativeCompositionEnabled: !_ };
      if (Ct(U.current, t)) {
        if (S && G.current != null) return;
        (S || (G.current = null), yt());
        return;
      }
      let n = U.current == null;
      U.current = t;
      let r = S && !n ? W.current + 1 : null;
      (r != null && (W.current = r),
        (G.current = r),
        b.dispatchMessage(`avatar-overlay-element-size-changed`, {
          ...(r == null ? {} : { elementSizeRevision: r }),
          mascot: e.mascot,
          nativeCompositionEnabled: t.nativeCompositionEnabled,
          tray: e.tray,
        }),
        (n || _) && yt());
    }, [_, S, yt]),
    X = (0, Q.useCallback)(
      (e, t) => {
        let n = V.current;
        if (n == null || n.pointerId !== e.pointerId) return;
        ((V.current = null), A(null));
        let r = null;
        (e.currentTarget instanceof HTMLElement
          ? (r = e.currentTarget)
          : e.target instanceof HTMLElement && (r = e.target),
          r?.hasPointerCapture?.(e.pointerId) &&
            r.releasePointerCapture?.(e.pointerId));
        let {
          hasMoved: i,
          releaseSample: a,
          velocity: o,
        } = st(n, t ? ft(e) : void 0, !t && n.usesOrbPhysics);
        (t &&
          !i &&
          (J(
            C.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
            T.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
          ),
          re()),
          i &&
            !n.hasMoved &&
            a != null &&
            b.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: a.screenX,
              pointerScreenY: a.screenY,
            }));
        let s = a ?? n;
        (b.dispatchMessage(`avatar-overlay-drag-end`, {
          pointerScreenX: s.screenX,
          pointerScreenY: s.screenY,
        }),
          n.usesOrbPhysics &&
            o != null &&
            b.dispatchMessage(`avatar-overlay-drag-release`, {
              shouldBounce: !0,
              velocityX: o.x * 3,
              velocityY: o.y * 3,
            }));
      },
      [v, re, void 0, null, J],
    ),
    bt = (e) => {
      if (
        e.button !== 0 ||
        e.ctrlKey ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null
      )
        return;
      (e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = v;
      ((V.current = {
        hasMoved: !1,
        pointerId: e.pointerId,
        samples: [ft(e)],
        screenX: e.screenX,
        screenY: e.screenY,
        usesOrbPhysics: t,
      }),
        A(null),
        b.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: t,
        }));
    },
    xt = (e) => {
      let t = V.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = ft(e);
      t.samples = it([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        t.usesOrbPhysics ||
          (r >= 4 ? A(`running-right`) : r <= -4 && A(`running-left`)),
        b.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    Z = (e, t) => {
      (e.action != null &&
        (t == null || t.intent === `open`) &&
        J(
          C.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          T.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
        le(e, t));
    },
    wt = (e, t) => {
      ue(e, t);
    },
    Tt = (e) => {
      (J(
        C.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        T.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        nt((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    Ft = () => {
      (J(
        C.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        T.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        void 0,
        !0,
      ),
        b.dispatchMessage(`avatar-overlay-composition-surface-action`, {
          action: { type: `open-notification-stack` },
        }),
        E(!0));
    },
    It = (e, t) => {
      Ge((n) =>
        t ? (n.includes(e) ? n : [...n, e]) : n.filter((t) => t !== e),
      );
    },
    Lt = (e) => {
      let t = N.find(({ id: t }) => t === e);
      if (t != null) {
        if (!w && N.length > 1) {
          Ft();
          return;
        }
        Z(t);
      }
    },
    Rt = async (e) => {
      if (!d) return;
      let t = e.trim();
      t.length !== 0 && (await de(t), ze(``), Ve((e) => e + 1));
    },
    $ = (0, Q.useCallback)((e) => {
      b.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, {
        isInteractive: e,
      });
    }, []),
    zt = (e, t, n = !0) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
          (O(null), n && $(!1));
          return;
        case `open-follow-up`:
          if (!e.isLoading || r == null) return;
          (O({
            notificationId: e.id,
            submissionStatus: `idle`,
            turnKey: e.turnKey,
          }),
            n && $(!0));
          return;
        case `stop`:
          if (r == null) return;
          (O(null),
            n && D != null && $(!1),
            Promise.resolve(ce(e, t)).catch(() => {
              h.get(oe).danger(
                y.formatMessage({
                  id: `avatarOverlay.stopNotificationError`,
                  defaultMessage: `Unable to stop activity`,
                  description: `Error shown when stopping a running activity from the floating avatar overlay fails`,
                }),
              );
            }));
          return;
        case `submit-follow-up`: {
          let i = t.prompt.trim();
          if (r == null || i.length === 0) return;
          (O((t) =>
            t?.notificationId === e.id && t.turnKey === e.turnKey
              ? { ...t, submissionStatus: `submitting` }
              : t,
          ),
            Promise.resolve(ce(e, { type: `submit-follow-up`, prompt: i }))
              .then(() => {
                (O((t) =>
                  t?.notificationId === e.id && t.turnKey === e.turnKey
                    ? null
                    : t,
                ),
                  n && $(!1));
              })
              .catch(() => {
                O((t) =>
                  t?.notificationId === e.id && t.turnKey === e.turnKey
                    ? { ...t, submissionStatus: `error` }
                    : t,
                );
              }));
          return;
        }
      }
    };
  return (
    he(
      `avatar-overlay-composition-action`,
      ({ action: e }) => {
        switch (e.type) {
          case `activate-notification`:
            Lt(e.notificationId);
            return;
          case `activity-stack-scroll-offset-changed`:
            Ye(e.offset);
            return;
          case `close-notification-stack`:
            E(!1);
            return;
          case `composition-pointer-surface-changed`:
            Le(e.surfaceId);
            return;
          case `open-notification-stack`:
            E(!0);
            return;
          case `notification-expansion-changed`:
            It(e.notificationId, e.isExpanded);
            return;
          case `quick-chat-active-changed`:
            return;
          case `quick-chat-draft-changed`:
            if (!d) return;
            ze(e.draft);
            return;
          case `quick-chat-surface-hover-changed`:
            if (!d) return;
            Fe(e.isHovered);
            return;
          case `quick-chat-visibility-changed`:
            if (!d) return;
            Ne(e.isVisible);
            return;
          case `scroll-activity-stack`:
            Ye((t) =>
              se({
                contentHeight: L.contentHeight,
                deltaY: e.deltaY,
                scrollOffset: t,
                viewportHeight: L.viewportRect.height,
              }),
            );
            return;
          case `submit-quick-chat`:
            Rt(e.prompt);
            return;
          case `dismiss-notification`: {
            let t = N.find(({ id: t }) => t === e.notificationId);
            t != null && Tt(t);
            return;
          }
          case `run-notification-control`: {
            let t = N.find(({ id: t }) => t === e.notificationId);
            t == null
              ? e.action.type === `close-follow-up` && O(null)
              : zt(t, e.action, !1);
            return;
          }
          case `run-notification-action`: {
            let t = N.find(({ id: t }) => t === e.notificationId);
            t != null && Z(t, e.action);
            return;
          }
          case `submit-question-option`: {
            let t = N.find(({ id: t }) => t === e.notificationId);
            t != null && wt(t, e.option);
          }
        }
      },
      [w, N],
    ),
    he(
      `avatar-overlay-layout-changed`,
      ({ elementSizeRevision: e, layout: t, nativeMaterialAttached: n }) => {
        (e === G.current && (G.current = null), _e(t), ye(n));
      },
      [],
    ),
    he(
      `avatar-overlay-window-drag-state-changed`,
      ({ direction: e }) => {
        A(e == null ? null : `running-${e}`);
      },
      [],
    ),
    (0, Q.useEffect)(() => {
      let e = (e) => {
          X(e, !0);
        },
        t = (e) => {
          X(e, !1);
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [X]),
    (0, Q.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), Y());
          });
        },
        n = new ResizeObserver(t),
        r = H.current;
      if (r != null) {
        n.observe(r);
        for (let e of _t(r)) n.observe(e);
      }
      return (
        window.addEventListener(`resize`, t),
        t(),
        () => {
          (e != null && window.cancelAnimationFrame(e),
            n.disconnect(),
            window.removeEventListener(`resize`, t));
        }
      );
    }, [Y, f.id, F]),
    (0, Q.useLayoutEffect)(() => {
      Y();
    }, [w, x, Y, f.id, F, l]),
    (0, Q.useEffect)(() => {
      if (M == null) return;
      let e = Math.max(0, M - Date.now()),
        t = window.setTimeout(() => {
          at((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [M]),
    (0, Q.useEffect)(() => {
      if (!R && !z) return;
      let e = window.setTimeout(() => {
        (at((e) => Math.max(Date.now(), e + 1)), R && ae(), z && m());
      }, Ot);
      return () => {
        window.clearTimeout(e);
      };
    }, [R, z, ae, m]),
    (0, Dt.jsx)(We, {
      activityCopies: P.map(({ copy: e }) => e),
      activityStackPresentation: L,
      areActivityPillsVisible: be,
      avatar: f,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: me({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (J(
              C.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              T.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              ne());
          },
        },
      ],
      debugWindowBorderVisible: g,
      globalDictationOrbEnabled: a,
      interactiveRegionRef: H,
      isNotificationTrayOpen: w,
      layout: x,
      mascotDragState: Xe,
      nativeMaterialAttached: S,
      expandedNotificationIds: He,
      notificationStackContentExpanded: S ? !0 : void 0,
      mascotStyle: Ke(l),
      notifications: N,
      pointerSurfaceId: Ie,
      quickChatDictation: {
        cleanupEnabled: e,
        streamingEnabled: t,
        supportState: r,
      },
      onActivityStackScroll: (e) => {
        Ye((t) =>
          se({
            contentHeight: L.contentHeight,
            deltaY: e,
            scrollOffset: t,
            viewportHeight: L.viewportRect.height,
          }),
        );
      },
      onActivateNotification: Lt,
      onHideActivityPills: () => {
        if (($(!1), w && N.length > 1)) {
          (J(
            C.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            T.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !1,
          ),
            b.dispatchMessage(`avatar-overlay-composition-surface-action`, {
              action: { type: `close-notification-stack` },
            }),
            E(!1));
          return;
        }
        (E(!1), xe(!1));
      },
      onMascotLostPointerCapture: (e) => {
        X(e, !1);
      },
      onMascotPointerCancel: (e) => {
        X(e, !1);
      },
      onMascotPointerDown: bt,
      onMascotPointerMove: xt,
      onMascotPointerUp: (e) => {
        X(e, !0);
      },
      onNotificationExpansionChange: It,
      onDismissNotification: Tt,
      notificationFollowUp: D,
      onQuickChatEditorActiveChange: $,
      onQuickChatDraftChange: d ? ze : void 0,
      onQuickChatVisibilityChange: d ? Ee : void 0,
      onRunNotificationControl: zt,
      onRunNotificationAction: Z,
      onSubmitQuestionOption: wt,
      onSubmitQuickChat: Rt,
      onShowActivityPills: () => {
        xe(!0);
      },
      quickChatDraft: Re,
      quickChatVisible: B,
      restrictedSurface: void 0,
      renderMode: { type: `native-root` },
    })
  );
}
function St(e, t) {
  return Fe(e, t) || n(jt, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function Z(e, t) {
  return Fe(e, t) ? `pending-custom-avatar` : `ready`;
}
function Ct(e, t) {
  return (
    e != null &&
    e.nativeCompositionEnabled === t.nativeCompositionEnabled &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    wt(e.tray, t.tray)
  );
}
function wt(e, t) {
  return (
    e === t ||
    (e != null && t != null && e.width === t.width && e.height === t.height)
  );
}
var Tt, Et, Q, Dt, Ot, kt, At, jt, Mt, Nt, Pt;
e(() => {
  ((Tt = l()),
    ne(),
    (Et = t(Ee(), 1)),
    h(),
    a(),
    (Q = t(u(), 1)),
    be(),
    Pe(),
    s(),
    pe(),
    d(),
    r(),
    ue(),
    w(),
    Ye(),
    Xe(),
    Ie(),
    c(),
    _(),
    Ve(),
    A(),
    S(),
    Ce(),
    x(),
    v(),
    m(),
    ze(),
    xe(),
    y(),
    ve(),
    O(),
    M(),
    $e(),
    at(),
    rt(),
    Ge(),
    yt(),
    He(),
    nt(),
    Le(),
    dt(),
    (Dt = ye()),
    (Ot = 15e3),
    (kt = 208),
    (At = []),
    (jt = `first-awake-pet-notification-avatar-ids`),
    (Mt = {
      audioStream: null,
      canStart: !1,
      caption: null,
      conversationId: null,
      phase: `inactive`,
      isMicrophoneMuted: !1,
      isMuted: !1,
      start: () => Promise.resolve(),
      stop: () => Promise.resolve(),
      voiceActivity: `idle`,
      toggleMicrophoneMute: () => {},
      toggleMute: () => {},
      waveformCanvasRef: { current: null },
      willResume: !1,
    }),
    (Nt = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (Pt = {
      mascot: { left: 244, top: 207, width: qe, height: 121 },
      placement: `top-end`,
      tray: { left: 19.5, top: 70, width: 345, height: 120 },
      viewport: { width: 384, height: 400 },
    }));
})();
export { Y as AvatarOverlayNativePage };
//# sourceMappingURL=avatar-overlay-native-page-CRZFCdlH.js.map
