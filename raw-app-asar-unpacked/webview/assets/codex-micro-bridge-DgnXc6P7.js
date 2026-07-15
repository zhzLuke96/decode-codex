import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  AY as r,
  C0 as i,
  Fj as a,
  Gj as o,
  Gq as s,
  Hp as c,
  I2 as l,
  JA as u,
  Kj as d,
  Kq as f,
  L2 as p,
  Oy as m,
  Qs as h,
  S0 as ee,
  SK as te,
  Up as g,
  Zq as ne,
  _0 as _,
  _C as v,
  _D as re,
  _Y as y,
  bG as b,
  bK as x,
  cY as S,
  cg as ie,
  cj as ae,
  gJ as oe,
  hJ as se,
  hy as ce,
  ic as le,
  ii as ue,
  k2 as C,
  kj as de,
  lg as fe,
  mD as w,
  mJ as T,
  mY as E,
  nX as pe,
  oj as me,
  rc as D,
  ri as O,
  s2 as k,
  sY as he,
  vC as ge,
  yG as A,
  zj as j,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  X as M,
  Y as _e,
  Z as ve,
} from "./app-initial~app-main~projects-index-page~hotkey-window-thread-page~thread-app-shell-chrome~~bg7586oi-CciHdJrc.js";
import {
  Sr as ye,
  xr as N,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
import {
  d as be,
  f as P,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~lpb6mnim-BqYcBFmq.js";
import {
  n as xe,
  t as F,
} from "./app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~nm3myve5-B4Ur2gOD.js";
import {
  a as I,
  f as Se,
  h as L,
  i as Ce,
  l as R,
  m as z,
  n as we,
  r as Te,
  t as Ee,
} from "./app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ksbzhge1-nyqcMWLP.js";
import { n as B, r as V } from "./codex-micro-commands-RTC90N9S.js";
import {
  a as H,
  i as De,
  o as U,
  t as W,
} from "./codex-micro-layout-CNBJVgf8.js";
import {
  a as Oe,
  d as ke,
  f as Ae,
  i as je,
  l as Me,
  o as Ne,
  p as Pe,
  r as Fe,
  s as Ie,
  t as Le,
  u as Re,
} from "./codex-micro-slot-signals-BqasFvaC.js";
import {
  a as ze,
  i as Be,
  n as Ve,
  o as He,
  r as Ue,
} from "./codex-micro-joystick-feedback-BNVBQ7G1.js";
import {
  a as We,
  c as Ge,
  i as Ke,
  n as G,
  o as qe,
  r as Je,
  s as Ye,
  t as Xe,
  u as Ze,
} from "./codex-micro-mini-games-D8K_TW1I.js";
import {
  i as Qe,
  n as $e,
} from "./codex-micro-onboarding-animation-BvEC9QsX.js";
function et(e, t) {
  if (e.key === `ENC_CW` || e.key === `ENC_CC`) return null;
  if (e.key.startsWith(`ENC`))
    return e.act === 1
      ? { type: `encoder-press` }
      : e.act === 0
        ? { type: `encoder-release` }
        : null;
  let n = W(e.key);
  if (n == null || (n === `ACT10_ACT11` && e.key !== `ACT10`)) return null;
  let r = H(t.slots[n]);
  return r == null
    ? null
    : r.type === `push-to-talk`
      ? e.act === 1
        ? { type: `push-to-talk-press` }
        : e.act === 0
          ? { type: `push-to-talk-release` }
          : null
      : e.act === 1
        ? r
        : null;
}
function tt(e) {
  return e.act === 2
    ? e.key === `ENC_CW`
      ? `ArrowUp`
      : e.key === `ENC_CC`
        ? `ArrowDown`
        : null
    : null;
}
function nt(e, t, n) {
  switch (e.type) {
    case `idle`:
      return t === `press`
        ? {
            state: { type: `pressed`, pressedAt: n },
            action: `start`,
            timeoutAt: null,
          }
        : { state: e, action: null, timeoutAt: null };
    case `pressed`: {
      if (t !== `release`) return { state: e, action: null, timeoutAt: null };
      let r = e.pressedAt + K;
      return n >= r
        ? { state: q, action: `stop`, timeoutAt: null }
        : {
            state: { type: `waiting-for-second-press`, deadline: r },
            action: null,
            timeoutAt: r,
          };
    }
    case `waiting-for-second-press`:
      return n >= e.deadline
        ? { state: q, action: `stop`, timeoutAt: null }
        : t === `press`
          ? { state: { type: `latched` }, action: null, timeoutAt: null }
          : { state: e, action: null, timeoutAt: e.deadline };
    case `latched`: {
      if (t !== `press`) return { state: e, action: null, timeoutAt: null };
      let r = n + K;
      return {
        state: { type: `suppressing-presses`, deadline: r },
        action: `stop`,
        timeoutAt: r,
      };
    }
    case `suppressing-presses`:
      return n < e.deadline
        ? { state: e, action: null, timeoutAt: e.deadline }
        : t === `press`
          ? {
              state: { type: `pressed`, pressedAt: n },
              action: `start`,
              timeoutAt: null,
            }
          : { state: q, action: null, timeoutAt: null };
  }
}
function rt(e, t, n, r) {
  let i = r?.slot === e && r.threadKey === t && n - r.pressedAt <= K;
  return {
    isDoubleTap: i,
    tap: i ? null : { slot: e, threadKey: t, pressedAt: n },
  };
}
function it(e, t, n, r) {
  let i = z(e);
  return {
    action: !r && i != null && i !== t ? at(n[i]) : null,
    activeDirection: i,
  };
}
function at(e) {
  if (e == null || e.type === `skill`) return e;
  let t = B(e.commandId);
  return t == null ? null : { type: `command`, command: t.id };
}
var K,
  q,
  ot = e(() => {
    (V(), U(), L(), (K = 350), (q = { type: `idle` }));
  });
function st() {
  let e = (0, ct.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, lt.jsx)(y, {
          id: `codexMicro.command.unavailable`,
          defaultMessage: `This action isn't available here`,
          description: `Toast shown when a Codex Micro keycap command cannot run in the current context`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var ct,
  lt,
  ut = e(() => {
    ((ct = l()), E(), (lt = C()));
  }),
  dt = e(() => {});
function ft(e) {
  return e.map(({ id: e }) => ({
    id: e,
    threadKey: null,
    title: null,
    selected: !1,
    status: e === 0 ? `error` : `off`,
  }));
}
function pt(e) {
  return e.matches(yt) ? e : e.querySelector(yt);
}
function mt(e) {
  return (
    e.getClientRects().length > 0 &&
    !e.matches(`:disabled`) &&
    e.closest(bt) == null
  );
}
var ht,
  J,
  gt,
  _t,
  Y,
  X,
  Z,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    (_(),
      S(),
      dt(),
      (ht = 2e3),
      (J = `reasoning`),
      (gt = `[data-codex-composer-root]`),
      (_t = `[data-composer-navigation-target]`),
      (Y = `data-composer-navigation-highlight`),
      (X = `data-composer-navigation-selected`),
      (Z = `data-composer-navigation-open`),
      (vt = `[aria-expanded="true"], [data-state="open"]`),
      (yt = [
        `button`,
        `a[href]`,
        `input`,
        `select`,
        `textarea`,
        `[tabindex]:not([tabindex='-1'])`,
      ].join(`, `)),
      (bt = [
        `[aria-disabled='true']`,
        `[data-disabled]`,
        `[hidden]`,
        `[aria-hidden='true']`,
        `[inert]`,
      ].join(`, `)),
      (xt = k(he, null)),
      (St = class {
        activeComposerKey = null;
        selectedTargetId = J;
        selectedTarget = null;
        highlightedTarget = null;
        interactionState = null;
        selectedTargetOpen = !1;
        selectedTargetObserver = null;
        openSurfaceObserver = null;
        highlightTimeout = null;
        constructor(e = () => {}, t = () => !1) {
          ((this.onInteractionStateChange = e),
            (this.hasOpenNavigationSurface = t));
        }
        move(e, t, n = null) {
          let r = this.getTargets(e, n),
            i = this.getSelectedTarget(r);
          if (i == null) return (this.clearHighlight(), null);
          let a =
            r[(r.indexOf(i) + (t === `next` ? 1 : -1) + r.length) % r.length] ??
            null;
          return a == null
            ? null
            : ((this.selectedTargetId = a.id),
              this.setSelectedTarget(a.control),
              this.showHighlight(a.control),
              a.control);
        }
        getActivationTarget(e, t = null) {
          let n = this.getSelectedTarget(this.getTargets(e, t));
          return n == null
            ? (this.clearHighlight(), null)
            : (this.showHighlight(n.control), n.control);
        }
        clearHighlight() {
          (this.removeHighlight(),
            this.selectedTargetOpen ||
              (this.stopOpenSurfaceTracking(), this.setInteractionState(null)));
        }
        dispose() {
          (this.clearHighlight(), this.setSelectedTarget(null));
        }
        getTargets(e, t) {
          return (
            this.setActiveComposer(t ?? e),
            Array.from(e.querySelectorAll(_t)).flatMap((t) => {
              if (t.closest(gt) !== e) return [];
              let n = t.dataset.composerNavigationTarget,
                r = pt(t);
              return n != null && r != null && mt(r)
                ? [{ control: r, id: n }]
                : [];
            })
          );
        }
        setActiveComposer(e) {
          e !== this.activeComposerKey &&
            ((this.activeComposerKey = e),
            (this.selectedTargetId = J),
            this.dispose());
        }
        getSelectedTarget(e) {
          let t =
            e.find(({ id: e }) => e === this.selectedTargetId) ??
            e.find(({ id: e }) => e === J) ??
            e[0] ??
            null;
          return (
            t != null && (this.selectedTargetId = t.id),
            this.setSelectedTarget(t?.control ?? null),
            t
          );
        }
        setSelectedTarget(e) {
          e !== this.selectedTarget &&
            (this.selectedTargetObserver?.disconnect(),
            (this.selectedTargetObserver = null),
            this.stopOpenSurfaceTracking(),
            this.selectedTargetOpen &&
              ((this.selectedTargetOpen = !1), this.setInteractionState(null)),
            this.selectedTarget?.removeAttribute(Z),
            this.selectedTarget?.removeAttribute(X),
            (this.selectedTarget = e),
            e?.setAttribute(X, ``),
            e != null &&
              (this.syncSelectedTargetOpen(),
              (this.selectedTargetObserver = new MutationObserver(() => {
                if (this.selectedTarget === e) {
                  if (!e.isConnected) {
                    (this.selectedTargetObserver?.disconnect(),
                      (this.selectedTargetObserver = null),
                      this.stopOpenSurfaceTracking(),
                      (this.selectedTargetOpen = !1),
                      this.removeHighlight(),
                      e.removeAttribute(Z),
                      e.removeAttribute(X),
                      (this.selectedTarget = null),
                      this.setInteractionState(null));
                    return;
                  }
                  this.syncSelectedTargetOpen();
                }
              })),
              this.selectedTargetObserver.observe(e, {
                attributeFilter: [`aria-expanded`, `data-state`],
                attributes: !0,
              }),
              this.selectedTargetObserver.observe(
                e.closest(gt) ?? document.body,
                { childList: !0, subtree: !0 },
              )));
        }
        showHighlight(e) {
          (this.removeHighlight(),
            (this.highlightedTarget = e),
            e.scrollIntoView({ block: `nearest`, inline: `nearest` }),
            e.setAttribute(Y, ``),
            this.startOpenSurfaceTracking(),
            this.selectedTargetOpen || this.setInteractionState(`selected`),
            (this.highlightTimeout = globalThis.setTimeout(() => {
              (e.removeAttribute(Y),
                this.highlightedTarget === e &&
                  ((this.highlightedTarget = null),
                  (this.highlightTimeout = null),
                  this.selectedTargetOpen ||
                    (this.stopOpenSurfaceTracking(),
                    this.setInteractionState(null))));
            }, ht)));
        }
        removeHighlight() {
          (this.highlightTimeout != null &&
            (globalThis.clearTimeout(this.highlightTimeout),
            (this.highlightTimeout = null)),
            this.highlightedTarget?.removeAttribute(Y),
            (this.highlightedTarget = null));
        }
        startOpenSurfaceTracking() {
          this.openSurfaceObserver != null ||
            this.selectedTarget == null ||
            ((this.openSurfaceObserver = new MutationObserver(() => {
              this.syncSelectedTargetOpen();
            })),
            this.openSurfaceObserver.observe(document.body, {
              attributeFilter: [`aria-expanded`, `data-state`],
              attributes: !0,
              childList: !0,
              subtree: !0,
            }),
            this.syncSelectedTargetOpen());
        }
        stopOpenSurfaceTracking() {
          (this.openSurfaceObserver?.disconnect(),
            (this.openSurfaceObserver = null));
        }
        syncSelectedTargetOpen() {
          let e = this.selectedTarget;
          if (e == null) return;
          let t = e.matches(vt) || this.hasOpenNavigationSurface();
          (e.toggleAttribute(Z, t),
            t !== this.selectedTargetOpen &&
              ((this.selectedTargetOpen = t),
              this.setInteractionState(
                t ? `open` : this.highlightedTarget === e ? `selected` : null,
              ),
              !t &&
                this.highlightedTarget == null &&
                this.stopOpenSurfaceTracking()));
        }
        setInteractionState(e) {
          e !== this.interactionState &&
            ((this.interactionState = e), this.onInteractionStateChange(e));
        }
      }));
  });
function wt() {
  let e = (0, It.c)(1),
    t = A.codexMicro;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Lt.jsx)(Tt, { codexMicro: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Tt(e) {
  let t = (0, It.c)(10),
    { codexMicro: n } = e,
    r = ee(he),
    { status: a } = i(I),
    o = (0, $.useRef)(!1),
    s = (0, $.useRef)(!1),
    c,
    l;
  (t[0] === r
    ? ((c = t[1]), (l = t[2]))
    : ((c = (e) => {
        let { state: t } = e;
        ((o.current = !0), Se(r, t));
      }),
      (l = [r]),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l)),
    oe(`codex-micro-device-state-changed`, c, l));
  let u, d;
  (t[3] !== n || t[4] !== r
    ? ((u = () => {
        let e = Symbol();
        Rt.set(n, e);
        let t = !0;
        n.getState().then((e) => {
          t && !o.current && Se(r, e);
        });
        let i = null,
          a = null,
          s = !1,
          c = () => {
            if (!t) {
              ((a = null), (s = !1));
              return;
            }
            let e = a;
            if (((a = null), e == null)) {
              s = !1;
              return;
            }
            n.updateLighting(e).then(c, c);
          },
          l = r.watch((e) => {
            let { get: t } = e,
              n = t(Le),
              r = t($e),
              o = We(t(G)),
              l = t(xt),
              u = n;
            r == null
              ? o == null
                ? l != null &&
                  (u = {
                    ...n,
                    preserveSelectionLighting: !0,
                    slots: l === `open` ? ft(n.slots) : n.slots,
                    snakingAmbientStatus: l === `open` ? `unread` : `working`,
                  })
                : (u = {
                    inactivityTimeoutMs: n.inactivityTimeoutMs,
                    preserveSelectionLighting: !0,
                    slots: o,
                    snakingAmbientStatus: `error`,
                    suspendDeviceStatusRefresh: !0,
                    voiceState: `idle`,
                  })
              : (u = { ...n, slots: r });
            let d = je(u);
            d !== i && ((i = d), (a = u), s || ((s = !0), c()));
          }),
          u = j((e, t) => {
            let { clientThreadId: n, conversationId: i } = t;
            Me(r, n, i);
          });
        return () => {
          ((t = !1),
            (a = null),
            l(),
            u(),
            globalThis.queueMicrotask(() => {
              Rt.get(n) === e && (Rt.delete(n), n.stop());
            }));
        };
      }),
      (d = [n, r]),
      (t[3] = n),
      (t[4] = r),
      (t[5] = u),
      (t[6] = d))
    : ((u = t[5]), (d = t[6])),
    (0, $.useEffect)(u, d));
  let f;
  return (
    t[7] !== n || t[8] !== a
      ? ((f =
          a === `connected`
            ? (0, Lt.jsx)(Et, { codexMicro: n, miniGameRearmRequiredRef: s })
            : null),
        (t[7] = n),
        (t[8] = a),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Et(e) {
  let t = (0, It.c)(44),
    { codexMicro: r, miniGameRearmRequiredRef: i } = e,
    a = ee(he),
    o = me(),
    l;
  t[0] === o.pathname
    ? (l = t[1])
    : ((l = o.pathname.startsWith(`/settings/codex-micro`)),
      (t[0] = o.pathname),
      (t[1] = l));
  let u = l,
    d = ae(),
    f = ue(),
    p = ye(),
    m = ne(pe.layout),
    h;
  t[2] === m ? (h = t[3]) : ((h = De(m)), (t[2] = m), (t[3] = h));
  let g = h,
    _ = Object.values(g.analogStick).some(Ot),
    v;
  t[4] === _ ? (v = t[5]) : ((v = { enabled: _ }), (t[4] = _), (t[5] = v));
  let { skills: y } = n(void 0, void 0, v),
    b = (0, $.useRef)(null),
    x = (0, $.useRef)(Ge),
    S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = new Set()), (t[6] = S))
    : (S = t[6]);
  let C = (0, $.useRef)(S),
    fe = (0, $.useRef)(null),
    w = (0, $.useRef)(q),
    T = (0, $.useRef)(null),
    E = (0, $.useRef)(null),
    D = (0, $.useRef)(null),
    O = (0, $.useRef)(null),
    k = (0, $.useRef)(!1),
    A = (0, $.useRef)(null),
    j;
  t[7] === a
    ? (j = t[8])
    : ((j = function () {
        return ((A.current ??= new St((e) => a.set(xt, e), Dt)), A.current);
      }),
      (t[7] = a),
      (t[8] = j));
  let M = j,
    N;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = function (e) {
        let t = globalThis.performance.now(),
          n = nt(w.current, e, t);
        ((w.current = n.state),
          T.current != null &&
            (globalThis.clearTimeout(T.current), (T.current = null)),
          kt(n.action));
        let r = n.timeoutAt;
        r != null &&
          (T.current = globalThis.setTimeout(
            () => {
              T.current = null;
              let e = nt(w.current, `timeout`, r);
              ((w.current = e.state), kt(e.action));
            },
            Math.max(0, r - t),
          ));
      }),
      (t[9] = N))
    : (N = t[9]);
  let be = N,
    P;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = function () {
        for (let e of C.current) globalThis.clearTimeout(e);
        C.current.clear();
      }),
      (t[10] = P))
    : (P = t[10]);
  let F = P,
    I;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = function (e, t, n) {
        if (!t) return e() ? `triggered` : `unavailable`;
        let r = globalThis.setTimeout(() => {
          (C.current.delete(r), n(e() ? `triggered` : `unavailable`));
        }, zt);
        return (C.current.add(r), null);
      }),
      (t[11] = I))
    : (I = t[11]);
  let Se = I,
    L;
  t[12] === a
    ? (L = t[13])
    : ((L = function (e, t) {
        (D.current != null && globalThis.clearTimeout(D.current),
          He(a, e, t),
          (D.current = globalThis.setTimeout(() => {
            ((D.current = null), Ve(a));
          }, 600)));
      }),
      (t[12] = a),
      (t[13] = L));
  let R = L,
    z,
    B;
  (t[14] === a
    ? ((z = t[15]), (B = t[16]))
    : ((z = () => () => {
        (E.current != null && globalThis.clearTimeout(E.current),
          D.current != null && globalThis.clearTimeout(D.current),
          O.current != null && globalThis.clearTimeout(O.current),
          A.current?.dispose(),
          a.set(xt, null),
          T.current != null && globalThis.clearTimeout(T.current),
          F(),
          w.current.type !== `idle` &&
            w.current.type !== `suppressing-presses` &&
            kt(`stop`),
          Be(a));
      }),
      (B = [a]),
      (t[14] = a),
      (t[15] = z),
      (t[16] = B)),
    (0, $.useEffect)(z, B));
  let V;
  t[17] !== r ||
  t[18] !== M ||
  t[19] !== u ||
  t[20] !== g ||
  t[21] !== d ||
  t[22] !== f ||
  t[23] !== a ||
  t[24] !== p
    ? ((V = (e) => {
        let { event: t } = e;
        if ((Ee(a, t), Ze(a.get(G), t))) return;
        if (t.act === 1 && Ht.test(t.key)) {
          let e = Mt();
          if (e != null) {
            t.key === Ut &&
              Q(
                `Escape`,
                (e.matches(Wt)
                  ? e
                      .closest(`[data-codex-composer-root]`)
                      ?.querySelector(`[data-codex-composer]`)
                  : null) ?? e,
              );
            return;
          }
        }
        t.act === 2 &&
          (t.key === `ENC_CW` || t.key === `ENC_CC`) &&
          (E.current != null && globalThis.clearTimeout(E.current),
          (E.current = globalThis.setTimeout(() => {
            (Te(a), (E.current = null));
          }, 180)));
        let n = tt(t);
        if (n != null) {
          let e = Mt();
          if (e != null) {
            Q(n, e);
            return;
          }
          if (Ft() != null) return;
          let t = Nt();
          if (t != null) {
            At(n, t);
            return;
          }
          let r = c();
          r != null &&
            M().move(
              r.root,
              n === `ArrowDown` ? `next` : `previous`,
              r.composerId,
            );
          return;
        }
        let i = et(t, g);
        if (i?.type === `encoder-press`) {
          if (O.current != null || k.current) return;
          O.current = globalThis.setTimeout(() => {
            ((O.current = null),
              (k.current = !0),
              A.current?.clearHighlight(),
              d(`/settings/codex-micro`));
          }, Vt);
          return;
        }
        if (i?.type === `encoder-release`) {
          if (k.current) {
            k.current = !1;
            return;
          }
          if (O.current == null) return;
          (globalThis.clearTimeout(O.current), (O.current = null));
          let e = Mt();
          if (e != null) {
            Q(`Enter`, e);
            return;
          }
          let t = Ft();
          if (t != null) {
            Q(`Enter`, t);
            return;
          }
          let n = Nt();
          if (n != null) {
            At(`Enter`, n);
            return;
          }
          let r = c(),
            i =
              r == null
                ? null
                : (M().getActivationTarget(r.root, r.composerId) ?? null);
          if (i != null) {
            (i.focus(),
              i.dataset.composerNavigationTarget === `add-context`
                ? i.click()
                : Q(`Enter`, i));
            return;
          }
          Q(`Enter`);
          return;
        }
        if (i?.type === `command`) {
          !le(i.command, `codex_micro_hid`) &&
            !u &&
            a.get(te).warning((0, Lt.jsx)(st, {}), {
              duration: 3,
              hasCloseButton: !1,
              id: `codex-micro-command-unavailable`,
            });
          return;
        }
        if (i?.type === `external-url`) {
          re({ href: i.url, initiator: `open_in_browser_bridge` });
          return;
        }
        if (i?.type === `composer-text`) {
          se.dispatchHostMessage({
            type: `codex-micro-insert-composer-text`,
            text: i.text,
          });
          return;
        }
        if (
          i?.type === `push-to-talk-press` ||
          i?.type === `push-to-talk-release`
        ) {
          be(i.type === `push-to-talk-press` ? `press` : `release`);
          return;
        }
        if (t.act !== 1 || t.slot == null) return;
        let o = ge(t.threadKey);
        if (o == null) {
          let e = ke(t.slot),
            n = a.get(Re) ?? Ne;
          t.threadKey == null &&
            s(a.get, pe.agentSource) === `custom` &&
            e != null &&
            n[e] == null &&
            Ie(a, e, a.get(de, Bt)) &&
            p();
          return;
        }
        t.slot != null && Pe(a, t.slot, o.key);
        let l = rt(t.slot, o.key, globalThis.performance.now(), fe.current);
        ((fe.current = l.tap),
          _e(a, o.key),
          ve(a, o.key, f, d),
          l.isDoubleTap && r.focusWindow());
      }),
      (t[17] = r),
      (t[18] = M),
      (t[19] = u),
      (t[20] = g),
      (t[21] = d),
      (t[22] = f),
      (t[23] = a),
      (t[24] = p),
      (t[25] = V))
    : (V = t[25]);
  let H;
  (t[26] !== r ||
  t[27] !== u ||
  t[28] !== g ||
  t[29] !== d ||
  t[30] !== f ||
  t[31] !== a ||
  t[32] !== p
    ? ((H = [r, u, g, d, f, a, p]),
      (t[26] = r),
      (t[27] = u),
      (t[28] = g),
      (t[29] = d),
      (t[30] = f),
      (t[31] = a),
      (t[32] = p),
      (t[33] = H))
    : (H = t[33]),
    oe(`codex-micro-hid-event`, V, H));
  let U;
  t[34] !== g.analogStick ||
  t[35] !== i ||
  t[36] !== a ||
  t[37] !== R ||
  t[38] !== y
    ? ((U = (e) => {
        let { event: t } = e;
        we(a, t);
        let n = b.current,
          r = a.get(Ce),
          o = Je();
        if (a.get(G) != null) {
          ((i.current = !0), (x.current = Ge), (b.current = null));
          return;
        }
        if (i.current) {
          ((b.current = null), t.distance <= 0.1 && (i.current = !1));
          return;
        }
        if (o != null && !r) {
          let e = Ke(x.current, t, globalThis.performance.now());
          if (((x.current = e.state), e.activated)) {
            (F(),
              (i.current = !0),
              (b.current = null),
              Xe(a),
              a.set(G, { composerId: o, game: qe() }),
              R(t, 1));
            return;
          }
          if (e.captured) {
            (F(), (b.current = null), R(t, e.progress));
            return;
          }
        } else x.current = Ge;
        let s = it(t, n, g.analogStick, r);
        b.current = s.activeDirection;
        let c = function (e) {
            (D.current != null &&
              (globalThis.clearTimeout(D.current), (D.current = null)),
              ze(a, {
                activeDirection: s.activeDirection,
                enabled: !r,
                event: t,
                executionStatus: e,
                mapping: g.analogStick,
                previousActiveDirection: n,
              }).visible &&
                (D.current = globalThis.setTimeout(() => {
                  ((D.current = null), (b.current = null), Ve(a));
                }, 600)));
          },
          l = !1,
          u = null;
        if (s.action?.type === `command`) {
          let e = s.action.command;
          ((u = Se(() => le(e, `codex_micro_joystick`), o != null, c)),
            (l = u == null));
        } else if (s.action?.type === `skill`) {
          let e = s.action,
            t = ie(),
            n = y.find(
              (n) =>
                n.enabled &&
                n.name === e.skillName &&
                n.path === e.skillPath &&
                xe(n, t),
            );
          n == null
            ? (u = `unavailable`)
            : ((u = Se(
                () => (
                  se.dispatchHostMessage({
                    type: `codex-micro-insert-skill-mention`,
                    skill: ce(n),
                  }),
                  !0
                ),
                o != null,
                c,
              )),
              (l = u == null));
        }
        l || c(u);
      }),
      (t[34] = g.analogStick),
      (t[35] = i),
      (t[36] = a),
      (t[37] = R),
      (t[38] = y),
      (t[39] = U))
    : (U = t[39]);
  let W;
  return (
    t[40] !== g.analogStick || t[41] !== a || t[42] !== y
      ? ((W = [g.analogStick, a, y]),
        (t[40] = g.analogStick),
        (t[41] = a),
        (t[42] = y),
        (t[43] = W))
      : (W = t[43]),
    oe(`codex-micro-joystick-event`, U, W),
    null
  );
}
function Dt() {
  return Mt() != null;
}
function Ot(e) {
  return e?.type === `skill`;
}
function kt(e) {
  e != null &&
    se.dispatchHostMessage({
      type:
        e === `start`
          ? `codex-micro-push-to-talk-start`
          : `codex-micro-push-to-talk-stop`,
    });
}
function Q(e, t = window) {
  let n = document.activeElement;
  (n != null && (!(t instanceof Element) || t.contains(n))
    ? n
    : t
  ).dispatchEvent(
    new KeyboardEvent(`keydown`, {
      bubbles: !0,
      cancelable: !0,
      code: be,
      key: e,
    }),
  );
}
function At(e, t) {
  if (t.hasAttribute(`data-codex-composer-request-navigation`)) {
    Q(e, t);
    return;
  }
  t.hasAttribute(`data-codex-approval-surface`) && jt(e, t);
}
function jt(e, t) {
  let n = Pt(t);
  if (n.length === 0) return;
  let r = document.activeElement,
    i =
      r instanceof HTMLButtonElement && t.contains(r)
        ? n.indexOf(r)
        : n.length - 1,
    a = i >= 0 ? i : n.length - 1;
  if (e === `Enter`) {
    n[a]?.click();
    return;
  }
  n[(a + (e === `ArrowDown` ? 1 : -1) + n.length) % n.length]?.focus();
}
function Mt() {
  return document.activeElement?.closest(Gt) ?? document.querySelector(Gt);
}
function Nt() {
  return document.querySelector(qt);
}
function Pt(e) {
  return Array.from(e.querySelectorAll(Jt)).filter(
    (e) => e.closest(`[hidden],[aria-hidden='true'],[inert]`) == null,
  );
}
function Ft() {
  return document.querySelector(Kt);
}
var It, $, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt;
e(() => {
  ((It = l()),
    _(),
    r(),
    ($ = t(p(), 1)),
    u(),
    D(),
    w(),
    x(),
    P(),
    g(),
    m(),
    F(),
    d(),
    N(),
    T(),
    b(),
    S(),
    a(),
    f(),
    v(),
    M(),
    h(),
    fe(),
    O(),
    ot(),
    ut(),
    Ae(),
    Ct(),
    Ue(),
    U(),
    Ye(),
    Oe(),
    Qe(),
    R(),
    Fe(),
    (Lt = C()),
    (Rt = new WeakMap()),
    (zt = 220),
    (Bt = o({ entrypoint: `home` })),
    (Vt = 500),
    (Ht = /^AG0[0-5]$/),
    (Ut = `AG00`),
    (Wt = `[data-composer-navigation-target="add-context"][aria-expanded="true"]`),
    (Gt = [
      `[role="menu"][data-state="open"]`,
      `[role="listbox"][data-state="open"]`,
      Wt,
    ].join(`, `)),
    (Kt = `[role="dialog"][data-state="open"]`),
    (qt = [
      `[data-codex-composer-request-navigation]`,
      `[data-codex-approval-surface]`,
    ].join(`, `)),
    (Jt = `button:not(:disabled):not([aria-haspopup='menu'])`));
})();
export { wt as CodexMicroBridge };
//# sourceMappingURL=codex-micro-bridge-DgnXc6P7.js.map
