import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BW as n,
  Fq as r,
  I2 as i,
  KJ as a,
  L2 as o,
  Pq as s,
  _Y as c,
  bG as l,
  gJ as u,
  hJ as d,
  k2 as f,
  mJ as p,
  mY as m,
  qJ as h,
  yG as g,
  yY as _,
  zW as v,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  G as y,
  H as b,
  J as x,
  K as S,
  U as C,
  W as w,
  X as T,
  Y as E,
  Z as D,
  ft as O,
  pt as k,
  q as A,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~ijt5yrao-el4huUi4.js";
import {
  Bn as j,
  zn as M,
} from "./app-initial~app-main~quick-chat-window-page-BcSWfURC.js";
async function N(e, t, n, r) {
  if (H?.sessionId === e || W === e) return;
  ((U = null), H != null && P(H.sessionId));
  let i = null;
  try {
    ((W = e),
      await g.systemPermissions?.requestMicrophoneAccess().catch(() => {}),
      (i = await x({ channelCount: 1 })),
      t.startWaveformCapture(i));
    let a = new MediaRecorder(i),
      o = {
        sessionId: e,
        recorder: a,
        stream: i,
        chunks: [],
        startedAtMs: Date.now(),
        isStopping: !1,
        cleanupEnabled: n,
        pendingStreamingSession: null,
        streamingSession: null,
        controls: t,
      };
    if (
      (a.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 && o.chunks.push(e.data);
      }),
      a.start(),
      (H = o),
      W === e && (W = null),
      G === e && ((G = null), P(e)),
      r && !o.isStopping)
    ) {
      let e = new T();
      o.pendingStreamingSession = e;
      try {
        if ((await e.start(i), o.pendingStreamingSession !== e)) return;
        ((o.pendingStreamingSession = null),
          H === o && !o.isStopping ? (o.streamingSession = e) : e.close());
      } catch {
        o.pendingStreamingSession === e &&
          ((o.pendingStreamingSession = null), e.close());
      }
    }
  } catch (n) {
    throw (
      i?.getTracks().forEach((e) => {
        e.stop();
      }),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      W === e && (W = null),
      G === e && (G = null),
      d.dispatchMessage(`global-dictation-failed`, {
        sessionId: e,
        stage: `recording`,
      }),
      n
    );
  }
}
function P(e) {
  let t = H;
  if (t == null || t.sessionId !== e) {
    G = e;
    return;
  }
  t.isStopping ||
    ((t.isStopping = !0),
    t.pendingStreamingSession?.close(),
    (t.pendingStreamingSession = null),
    d.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
    F(t));
}
async function F(e) {
  let t = null;
  try {
    try {
      await B(e.recorder);
    } finally {
      (e.stream.getTracks().forEach((e) => {
        e.stop();
      }),
        e.controls.stopWaveformCapture(),
        e.controls.resetWaveformDisplay(),
        H === e && (H = null));
    }
    if (e.chunks.length === 0 || Date.now() - e.startedAtMs < V) {
      (e.streamingSession?.close(),
        d.dispatchMessage(`global-dictation-completed`, {
          sessionId: e.sessionId,
          text: ``,
        }));
      return;
    }
    ((t = {
      sessionId: e.sessionId,
      audio: new Blob(e.chunks),
      onTranscriptionFailed: e.controls.onTranscriptionFailed,
    }),
      await L(t, e.cleanupEnabled, e.streamingSession));
  } catch (n) {
    z(e.sessionId, e.controls.onTranscriptionFailed, n, t);
  }
}
async function I(e, t) {
  if (K === e) return;
  let n = U;
  if (n == null || n.sessionId !== e)
    throw Error(`No dictation audio to retry`);
  K = e;
  try {
    await L(n, t);
  } catch (t) {
    throw (z(e, n.onTranscriptionFailed, t, n), t);
  } finally {
    K === e && (K = null);
  }
}
async function L(e, t, n = null) {
  let r = await A({
    transcript: n == null ? await y(e.audio) : await R(n, e.audio),
    cleanupEnabled: t,
  });
  (U === e && (U = null),
    d.dispatchMessage(`global-dictation-completed`, {
      sessionId: e.sessionId,
      text: r,
    }));
}
async function R(e, t) {
  try {
    let t = await e.finish();
    if (t.trim().length > 0) return t;
  } catch {}
  return y(t);
}
function z(e, t, n, r) {
  ((U = r),
    t(n),
    d.dispatchMessage(`global-dictation-failed`, {
      sessionId: e,
      stage: `transcription`,
    }));
}
function B(e) {
  return e.state === `inactive`
    ? Promise.resolve()
    : new Promise((t) => {
        (e.addEventListener(
          `stop`,
          () => {
            t();
          },
          { once: !0 },
        ),
          e.stop());
      });
}
var V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (p(),
      l(),
      D(),
      E(),
      S(),
      w(),
      (V = 250),
      (H = null),
      (U = null),
      (W = null),
      (G = null),
      (K = null));
  }),
  J,
  Y,
  X = e(() => {
    ((J = `_recordingOrb_1csnm_1`), (Y = { recordingOrb: J }));
  });
function ee(e) {
  let t = (0, Z.c)(39),
    {
      cleanupEnabled: n,
      streamingEnabled: r,
      onActiveSessionIdChange: i,
      registerNativePetRenderer: a,
      onVisibilityChange: o,
    } = e,
    s = a === void 0 ? !0 : a,
    c = _(),
    [l, f] = (0, Q.useState)(null),
    [p, m] = (0, Q.useState)(`idle`),
    [h, g] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(!1),
    b = (0, Q.useRef)(null),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { variant: `orb` }), (t[0] = x))
    : (x = t[0]);
  let {
      waveformCanvasRef: S,
      startWaveformCapture: w,
      stopWaveformCapture: T,
      resetWaveformDisplay: E,
    } = C(x),
    D;
  t[1] === c
    ? (D = t[2])
    : ((D = (e, t) => {
        let n = M(c, e, t);
        (g(n.message), y(n.canRetry), m(`error`));
      }),
      (t[1] = c),
      (t[2] = D));
  let O = D,
    k;
  t[3] !== l || t[4] !== n || t[5] !== O
    ? ((k = () => {
        l != null &&
          (g(null),
          y(!1),
          m(`transcribing`),
          I(l, n).catch((e) => {
            O(`transcription`, e);
          }));
      }),
      (t[3] = l),
      (t[4] = n),
      (t[5] = O),
      (t[6] = k))
    : (k = t[6]);
  let A = k,
    j;
  t[7] !== i || t[8] !== o
    ? ((j = () => {
        ((b.current = null),
          f(null),
          i?.(null),
          g(null),
          y(!1),
          m(`idle`),
          o?.(!1));
      }),
      (t[7] = i),
      (t[8] = o),
      (t[9] = j))
    : (j = t[9]);
  let F;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = []), (t[10] = F))
    : (F = t[10]),
    u(`global-dictation-idle`, j, F));
  let L;
  t[11] !== n ||
  t[12] !== i ||
  t[13] !== o ||
  t[14] !== E ||
  t[15] !== O ||
  t[16] !== w ||
  t[17] !== T ||
  t[18] !== r
    ? ((L = (e) => {
        ((b.current = e.sessionId),
          f(e.sessionId),
          i?.(e.sessionId),
          g(null),
          y(!1),
          m(`listening`),
          o?.(!0),
          N(
            e.sessionId,
            {
              startWaveformCapture: w,
              stopWaveformCapture: T,
              resetWaveformDisplay: E,
              onTranscriptionFailed: (e) => {
                O(`transcription`, e);
              },
            },
            n,
            r,
          ).catch((e) => {
            O(`start`, e);
          }));
      }),
      (t[11] = n),
      (t[12] = i),
      (t[13] = o),
      (t[14] = E),
      (t[15] = O),
      (t[16] = w),
      (t[17] = T),
      (t[18] = r),
      (t[19] = L))
    : (L = t[19]);
  let R;
  (t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = []), (t[20] = R))
    : (R = t[20]),
    u(`global-dictation-start`, L, R));
  let z, B;
  (t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (g(null), y(!1), m(`transcribing`), P(e.sessionId));
      }),
      (z = []),
      (t[21] = z),
      (t[22] = B))
    : ((z = t[21]), (B = t[22])),
    u(`global-dictation-stop`, B, z));
  let V, H;
  (t[23] !== i || t[24] !== o || t[25] !== s
    ? ((V = () => {
        let e = !0;
        return (
          s &&
            queueMicrotask(() => {
              e &&
                d.dispatchMessage(`global-dictation-pet-renderer-ready`, {
                  ready: !0,
                });
            }),
          () => {
            e = !1;
            let t = b.current;
            (t != null && P(t),
              i?.(null),
              o?.(!1),
              s &&
                d.dispatchMessage(`global-dictation-pet-renderer-ready`, {
                  ready: !1,
                }));
          }
        );
      }),
      (H = [i, o, s]),
      (t[23] = i),
      (t[24] = o),
      (t[25] = s),
      (t[26] = V),
      (t[27] = H))
    : ((V = t[26]), (H = t[27])),
    (0, Q.useEffect)(V, H));
  let U = p === `error` && v,
    W;
  t[28] !== l || t[29] !== A || t[30] !== U || t[31] !== p
    ? ((W = (e) => {
        if ((e.stopPropagation(), p === `listening` && l != null)) {
          d.dispatchMessage(`global-dictation-stop-requested`, {
            sessionId: l,
          });
          return;
        }
        if (U) {
          A();
          return;
        }
        p === `error` &&
          l != null &&
          d.dispatchMessage(`global-dictation-dismiss`, { sessionId: l });
      }),
      (t[28] = l),
      (t[29] = A),
      (t[30] = U),
      (t[31] = p),
      (t[32] = W))
    : (W = t[32]);
  let G = W;
  if (p === `idle`) return null;
  let K;
  return (
    t[33] !== v || t[34] !== h || t[35] !== G || t[36] !== p || t[37] !== S
      ? ((K = (0, $.jsx)(te, {
          canRetryError: v,
          errorMessage: h,
          onClick: G,
          status: p,
          waveformCanvasRef: S,
        })),
        (t[33] = v),
        (t[34] = h),
        (t[35] = G),
        (t[36] = p),
        (t[37] = S),
        (t[38] = K))
      : (K = t[38]),
    K
  );
}
function te(e) {
  let t = (0, Z.c)(40),
    {
      canRetryError: n,
      errorMessage: r,
      onClick: i,
      status: o,
      waveformCanvasRef: l,
    } = e,
    u = _(),
    d = o === `transcribing`,
    f = o === `error` && n,
    p;
  if (f) {
    let e;
    (t[0] !== r || t[1] !== u
      ? ((e =
          r == null
            ? u.formatMessage({
                id: `globalDictation.orb.retry`,
                defaultMessage: `Retry dictation`,
                description: `Accessible label for retrying system-wide dictation from the floating dictation orb`,
              })
            : u.formatMessage(
                {
                  id: `globalDictation.orb.retryWithError`,
                  defaultMessage: `Retry dictation: {errorMessage}`,
                  description: `Accessible label for retrying system-wide dictation from the floating dictation orb after an error`,
                },
                { errorMessage: r },
              )),
        (t[0] = r),
        (t[1] = u),
        (t[2] = e))
      : (e = t[2]),
      (p = e));
  } else if (o === `error`) {
    let e;
    (t[3] !== r || t[4] !== u
      ? ((e =
          r == null
            ? u.formatMessage({
                id: `globalDictation.orb.dismiss`,
                defaultMessage: `Dismiss dictation`,
                description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb`,
              })
            : u.formatMessage(
                {
                  id: `globalDictation.orb.dismissWithError`,
                  defaultMessage: `Dismiss dictation: {errorMessage}`,
                  description: `Accessible label for dismissing a system-wide dictation error from the floating dictation orb after an error`,
                },
                { errorMessage: r },
              )),
        (t[3] = r),
        (t[4] = u),
        (t[5] = e))
      : (e = t[5]),
      (p = e));
  } else if (d) {
    let e;
    (t[6] === u
      ? (e = t[7])
      : ((e = u.formatMessage({
          id: `globalDictation.orb.transcribing`,
          defaultMessage: `Transcribing`,
          description: `Accessible label for the floating dictation orb while system-wide dictation is transcribing`,
        })),
        (t[6] = u),
        (t[7] = e)),
      (p = e));
  } else {
    let e;
    (t[8] === u
      ? (e = t[9])
      : ((e = u.formatMessage({
          id: `globalDictation.orb.stop`,
          defaultMessage: `Stop dictation`,
          description: `Accessible label for stopping system-wide dictation from the floating dictation orb`,
        })),
        (t[8] = u),
        (t[9] = e)),
      (p = e));
  }
  let m = p,
    h;
  t[10] === o
    ? (h = t[11])
    : ((h = a(
        `no-drag pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25`,
        o === `listening`
          ? a(`cursor-interaction text-white`, Y.recordingOrb)
          : `bg-token-dropdown-background text-token-text-secondary`,
        o === `error` && `cursor-interaction`,
      )),
      (t[10] = o),
      (t[11] = h));
  let g;
  t[12] !== o || t[13] !== l
    ? ((g =
        o === `listening`
          ? (0, $.jsx)(`canvas`, {
              ref: l,
              className: `size-10 text-white`,
              "aria-hidden": `true`,
            })
          : null),
      (t[12] = o),
      (t[13] = l),
      (t[14] = g))
    : (g = t[14]);
  let y;
  t[15] === d
    ? (y = t[16])
    : ((y = d ? (0, $.jsx)(s, { className: `icon-sm` }) : null),
      (t[15] = d),
      (t[16] = y));
  let b;
  t[17] === f
    ? (b = t[18])
    : ((b = f ? (0, $.jsx)(O, { className: `icon-sm` }) : null),
      (t[17] = f),
      (t[18] = b));
  let x;
  t[19] !== n || t[20] !== o
    ? ((x =
        o === `error` && !n ? (0, $.jsx)(v, { className: `icon-sm` }) : null),
      (t[19] = n),
      (t[20] = o),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] === o
    ? (S = t[23])
    : ((S =
        o === `listening`
          ? (0, $.jsx)(c, {
              id: `globalDictation.orb.listening`,
              defaultMessage: `Listening`,
              description: `Status text for the floating dictation orb while system-wide dictation is listening`,
            })
          : null),
      (t[22] = o),
      (t[23] = S));
  let C;
  t[24] === d
    ? (C = t[25])
    : ((C = d
        ? (0, $.jsx)(c, {
            id: `globalDictation.orb.transcribingStatus`,
            defaultMessage: `Transcribing`,
            description: `Status text for the floating dictation orb while system-wide dictation is transcribing`,
          })
        : null),
      (t[24] = d),
      (t[25] = C));
  let w = o === `error` && r != null ? r : null,
    T;
  t[26] !== S || t[27] !== C || t[28] !== w
    ? ((T = (0, $.jsxs)(`span`, { className: `sr-only`, children: [S, C, w] })),
      (t[26] = S),
      (t[27] = C),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  return (
    t[30] !== p ||
    t[31] !== d ||
    t[32] !== i ||
    t[33] !== T ||
    t[34] !== h ||
    t[35] !== g ||
    t[36] !== y ||
    t[37] !== b ||
    t[38] !== x
      ? ((E = (0, $.jsxs)(`button`, {
          type: `button`,
          "aria-label": m,
          className: h,
          disabled: d,
          onClick: i,
          children: [g, y, b, x, T],
        })),
        (t[30] = p),
        (t[31] = d),
        (t[32] = i),
        (t[33] = T),
        (t[34] = h),
        (t[35] = g),
        (t[36] = y),
        (t[37] = b),
        (t[38] = x),
        (t[39] = E))
      : (E = t[39]),
    E
  );
}
var Z,
  Q,
  $,
  ne = e(() => {
    ((Z = i()),
      h(),
      (Q = t(o(), 1)),
      m(),
      r(),
      b(),
      k(),
      n(),
      p(),
      j(),
      q(),
      X(),
      ($ = f()));
  });
export { N as a, I as i, ne as n, P as o, q as r, ee as t };
//# sourceMappingURL=global-dictation-orb-DJMd5YMl.js.map
