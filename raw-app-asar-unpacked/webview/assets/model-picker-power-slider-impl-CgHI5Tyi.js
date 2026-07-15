import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AJ as n,
  Aq as r,
  Bf as i,
  Cq as a,
  DJ as o,
  Dq as s,
  Eq as c,
  I2 as l,
  IJ as u,
  L2 as d,
  MJ as f,
  Oq as p,
  PJ as m,
  RJ as h,
  Sq as g,
  Vf as _,
  aq as v,
  bq as y,
  iq as b,
  jq as x,
  k2 as S,
  kJ as ee,
  kq as C,
  oq as te,
  sq as ne,
  wq as w,
  xq as re,
  yq as ie,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function ae(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var oe = e(() => {});
function se(e = [], t, n) {
  let r = [...e];
  return ((r[n] = t), r.sort((e, t) => e - t));
}
function ce(e, t, n) {
  return ae((100 / (n - t)) * (e - t), [0, 100]);
}
function le(e, t) {
  if (t > 2) return `Value ${e + 1} of ${t}`;
  if (t === 2) return [`Minimum`, `Maximum`][e];
}
function ue(e, t) {
  if (e.length === 1) return 0;
  let n = e.map((e) => Math.abs(e - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
function T(e, t, n) {
  let r = e / 2;
  return (r - pe([0, 50], [0, r])(t) * n) * n;
}
function de(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function fe(e, t) {
  if (t > 0) {
    let n = de(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function pe(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function E(e) {
  return (String(e).split(`.`)[1] || ``).length;
}
function me(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n;
}
var D,
  O,
  he,
  ge,
  k,
  A,
  _e,
  j,
  M,
  N,
  ve,
  ye,
  P,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  F,
  De,
  Oe,
  I,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie = e(() => {
    ((D = t(d(), 1)),
      oe(),
      x(),
      c(),
      C(),
      b(),
      ie(),
      i(),
      te(),
      w(),
      g(),
      (O = S()),
      (he = [`PageUp`, `PageDown`]),
      (ge = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`]),
      (k = {
        "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
        "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
        "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
        "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`],
      }),
      (A = `Slider`),
      ([_e, j, M] = re(A)),
      ([N, ve] = p(A, [M])),
      ([ye, P] = N(A)),
      (be = D.forwardRef((e, t) => {
        let {
            name: n,
            min: i = 0,
            max: a = 100,
            step: o = 1,
            orientation: s = `horizontal`,
            disabled: c = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [i],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: h,
            ...g
          } = e,
          _ = D.useRef(new Set()),
          y = D.useRef(0),
          b = s === `horizontal` ? Ce : we,
          [x = [], S] = v({
            prop: d,
            defaultProp: u,
            onChange: (e) => {
              ([..._.current][y.current]?.focus(), f(e));
            },
          }),
          ee = D.useRef(x);
        function C(e) {
          w(e, ue(x, e));
        }
        function te(e) {
          w(e, y.current);
        }
        function ne() {
          let e = ee.current[y.current];
          x[y.current] !== e && p(x);
        }
        function w(e, t, { commit: n } = { commit: !1 }) {
          let r = E(o),
            s = ae(me(Math.round((e - i) / o) * o + i, r), [i, a]);
          S((e = []) => {
            let r = se(e, s, t);
            if (fe(r, l * o)) {
              y.current = r.indexOf(s);
              let t = String(r) !== String(e);
              return (t && n && p(r), t ? r : e);
            } else return e;
          });
        }
        return (0, O.jsx)(ye, {
          scope: e.__scopeSlider,
          name: n,
          disabled: c,
          min: i,
          max: a,
          valueIndexToChangeRef: y,
          thumbs: _.current,
          values: x,
          orientation: s,
          form: h,
          children: (0, O.jsx)(_e.Provider, {
            scope: e.__scopeSlider,
            children: (0, O.jsx)(_e.Slot, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(b, {
                "aria-disabled": c,
                "data-disabled": c ? `` : void 0,
                ...g,
                ref: t,
                onPointerDown: r(g.onPointerDown, () => {
                  c || (ee.current = x);
                }),
                min: i,
                max: a,
                inverted: m,
                onSlideStart: c ? void 0 : C,
                onSlideMove: c ? void 0 : te,
                onSlideEnd: c ? void 0 : ne,
                onHomeKeyDown: () => !c && w(i, 0, { commit: !0 }),
                onEndKeyDown: () => !c && w(a, x.length - 1, { commit: !0 }),
                onStepKeyDown: ({ event: e, direction: t }) => {
                  if (!c) {
                    let n =
                        he.includes(e.key) || (e.shiftKey && ge.includes(e.key))
                          ? 10
                          : 1,
                      r = y.current,
                      i = x[r];
                    w(i + o * n * t, r, { commit: !0 });
                  }
                },
              }),
            }),
          }),
        });
      })),
      (be.displayName = A),
      ([xe, Se] = N(A, {
        startEdge: `left`,
        endEdge: `right`,
        size: `width`,
        direction: 1,
      })),
      (Ce = D.forwardRef((e, t) => {
        let {
            min: n,
            max: r,
            dir: i,
            inverted: a,
            onSlideStart: o,
            onSlideMove: c,
            onSlideEnd: l,
            onStepKeyDown: u,
            ...d
          } = e,
          [f, p] = D.useState(null),
          m = s(t, (e) => p(e)),
          h = D.useRef(void 0),
          g = y(i),
          _ = g === `ltr`,
          v = (_ && !a) || (!_ && a);
        function b(e) {
          let t = h.current || f.getBoundingClientRect(),
            i = pe([0, t.width], v ? [n, r] : [r, n]);
          return ((h.current = t), i(e - t.left));
        }
        return (0, O.jsx)(xe, {
          scope: e.__scopeSlider,
          startEdge: v ? `left` : `right`,
          endEdge: v ? `right` : `left`,
          direction: v ? 1 : -1,
          size: `width`,
          children: (0, O.jsx)(Te, {
            dir: g,
            "data-orientation": `horizontal`,
            ...d,
            ref: m,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": `translateX(-50%)`,
            },
            onSlideStart: (e) => {
              let t = b(e.clientX);
              o?.(t);
            },
            onSlideMove: (e) => {
              let t = b(e.clientX);
              c?.(t);
            },
            onSlideEnd: () => {
              ((h.current = void 0), l?.());
            },
            onStepKeyDown: (e) => {
              let t = k[v ? `from-left` : `from-right`].includes(e.key);
              u?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        });
      })),
      (we = D.forwardRef((e, t) => {
        let {
            min: n,
            max: r,
            inverted: i,
            onSlideStart: a,
            onSlideMove: o,
            onSlideEnd: c,
            onStepKeyDown: l,
            ...u
          } = e,
          d = D.useRef(null),
          f = s(t, d),
          p = D.useRef(void 0),
          m = !i;
        function h(e) {
          let t = p.current || d.current.getBoundingClientRect(),
            i = pe([0, t.height], m ? [r, n] : [n, r]);
          return ((p.current = t), i(e - t.top));
        }
        return (0, O.jsx)(xe, {
          scope: e.__scopeSlider,
          startEdge: m ? `bottom` : `top`,
          endEdge: m ? `top` : `bottom`,
          size: `height`,
          direction: m ? 1 : -1,
          children: (0, O.jsx)(Te, {
            "data-orientation": `vertical`,
            ...u,
            ref: f,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": `translateY(50%)`,
            },
            onSlideStart: (e) => {
              let t = h(e.clientY);
              a?.(t);
            },
            onSlideMove: (e) => {
              let t = h(e.clientY);
              o?.(t);
            },
            onSlideEnd: () => {
              ((p.current = void 0), c?.());
            },
            onStepKeyDown: (e) => {
              let t = k[m ? `from-bottom` : `from-top`].includes(e.key);
              l?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        });
      })),
      (Te = D.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            onSlideStart: i,
            onSlideMove: o,
            onSlideEnd: s,
            onHomeKeyDown: c,
            onEndKeyDown: l,
            onStepKeyDown: u,
            ...d
          } = e,
          f = P(A, n);
        return (0, O.jsx)(a.span, {
          ...d,
          ref: t,
          onKeyDown: r(e.onKeyDown, (e) => {
            e.key === `Home`
              ? (c(e), e.preventDefault())
              : e.key === `End`
                ? (l(e), e.preventDefault())
                : he.concat(ge).includes(e.key) && (u(e), e.preventDefault());
          }),
          onPointerDown: r(e.onPointerDown, (e) => {
            let t = e.target;
            (t.setPointerCapture(e.pointerId),
              e.preventDefault(),
              f.thumbs.has(t) ? t.focus() : i(e));
          }),
          onPointerMove: r(e.onPointerMove, (e) => {
            e.target.hasPointerCapture(e.pointerId) && o(e);
          }),
          onPointerUp: r(e.onPointerUp, (e) => {
            let t = e.target;
            t.hasPointerCapture(e.pointerId) &&
              (t.releasePointerCapture(e.pointerId), s(e));
          }),
        });
      })),
      (Ee = `SliderTrack`),
      (F = D.forwardRef((e, t) => {
        let { __scopeSlider: n, ...r } = e,
          i = P(Ee, n);
        return (0, O.jsx)(a.span, {
          "data-disabled": i.disabled ? `` : void 0,
          "data-orientation": i.orientation,
          ...r,
          ref: t,
        });
      })),
      (F.displayName = Ee),
      (De = `SliderRange`),
      (Oe = D.forwardRef((e, t) => {
        let { __scopeSlider: n, ...r } = e,
          i = P(De, n),
          o = Se(De, n),
          c = s(t, D.useRef(null)),
          l = i.values.length,
          u = i.values.map((e) => ce(e, i.min, i.max)),
          d = l > 1 ? Math.min(...u) : 0,
          f = 100 - Math.max(...u);
        return (0, O.jsx)(a.span, {
          "data-orientation": i.orientation,
          "data-disabled": i.disabled ? `` : void 0,
          ...r,
          ref: c,
          style: { ...e.style, [o.startEdge]: d + `%`, [o.endEdge]: f + `%` },
        });
      })),
      (Oe.displayName = De),
      (I = `SliderThumb`),
      (ke = D.forwardRef((e, t) => {
        let n = j(e.__scopeSlider),
          [r, i] = D.useState(null),
          a = s(t, (e) => i(e)),
          o = D.useMemo(
            () => (r ? n().findIndex((e) => e.ref.current === r) : -1),
            [n, r],
          );
        return (0, O.jsx)(Ae, { ...e, ref: a, index: o });
      })),
      (Ae = D.forwardRef((e, t) => {
        let { __scopeSlider: n, index: i, name: o, ...c } = e,
          l = P(I, n),
          u = Se(I, n),
          [d, f] = D.useState(null),
          p = s(t, (e) => f(e)),
          m = d ? l.form || !!d.closest(`form`) : !0,
          h = ne(d),
          g = l.values[i],
          _ = g === void 0 ? 0 : ce(g, l.min, l.max),
          v = le(i, l.values.length),
          y = h?.[u.size],
          b = y ? T(y, _, u.direction) : 0;
        return (
          D.useEffect(() => {
            if (d)
              return (
                l.thumbs.add(d),
                () => {
                  l.thumbs.delete(d);
                }
              );
          }, [d, l.thumbs]),
          (0, O.jsxs)(`span`, {
            style: {
              transform: `var(--radix-slider-thumb-transform)`,
              position: `absolute`,
              [u.startEdge]: `calc(${_}% + ${b}px)`,
            },
            children: [
              (0, O.jsx)(_e.ItemSlot, {
                scope: e.__scopeSlider,
                children: (0, O.jsx)(a.span, {
                  role: `slider`,
                  "aria-label": e[`aria-label`] || v,
                  "aria-valuemin": l.min,
                  "aria-valuenow": g,
                  "aria-valuemax": l.max,
                  "aria-orientation": l.orientation,
                  "data-orientation": l.orientation,
                  "data-disabled": l.disabled ? `` : void 0,
                  tabIndex: l.disabled ? void 0 : 0,
                  ...c,
                  ref: p,
                  style: g === void 0 ? { display: `none` } : e.style,
                  onFocus: r(e.onFocus, () => {
                    l.valueIndexToChangeRef.current = i;
                  }),
                }),
              }),
              m &&
                (0, O.jsx)(
                  Me,
                  {
                    name:
                      o ??
                      (l.name
                        ? l.name + (l.values.length > 1 ? `[]` : ``)
                        : void 0),
                    form: l.form,
                    value: g,
                  },
                  i,
                ),
            ],
          })
        );
      })),
      (ke.displayName = I),
      (je = `RadioBubbleInput`),
      (Me = D.forwardRef(({ __scopeSlider: e, value: t, ...n }, r) => {
        let i = D.useRef(null),
          o = s(i, r),
          c = _(t);
        return (
          D.useEffect(() => {
            let e = i.current;
            if (!e) return;
            let n = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(n, `value`).set;
            if (c !== t && r) {
              let n = new Event(`input`, { bubbles: !0 });
              (r.call(e, t), e.dispatchEvent(n));
            }
          }, [c, t]),
          (0, O.jsx)(a.input, {
            style: { display: `none` },
            ...n,
            ref: o,
            defaultValue: t,
          })
        );
      })),
      (Me.displayName = je),
      (Ne = be),
      (Pe = F),
      (Fe = ke));
  });
function L(e, t) {
  let n = Math.sin((e + 1) * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
}
var Le = e(() => {}),
  Re,
  ze,
  Be,
  Ve,
  R,
  He,
  z,
  B,
  V = e(() => {
    ((Re = `_FastTrackParticles_1pz9e_1`),
      (ze = `_FastTrackParticleTravel_1pz9e_1`),
      (Be = `_FastTrackParticlePath_1pz9e_7`),
      (Ve = `_TrackParticle_1pz9e_22`),
      (R = `_TrackParticles_1pz9e_38`),
      (He = `_Burst_1pz9e_76`),
      (z = `_ParticleBurst_1pz9e_1`),
      (B = {
        FastTrackParticles: Re,
        FastTrackParticleTravel: ze,
        FastTrackParticlePath: Be,
        TrackParticle: Ve,
        TrackParticles: R,
        Burst: He,
        ParticleBurst: z,
      }));
  });
function Ue(e) {
  let t = (0, We.c)(5),
    { animationActive: n, initialStartPercent: r } = e,
    [i] = (0, Ge.useState)(r),
    a = 1 - Math.min(Math.max(i, 0), 100) / 100,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = Array.from({ length: 14 }, (e, t) => {
        let n = U / (1 + (L(t, 21) - 0.5) * 2 * W),
          r = n * a,
          i = 0.4 + L(t, 11) * 0.6,
          o = 0.5 + L(t, 12) * 0.45;
        return (0, H.jsx)(
          `span`,
          {
            className: B.FastTrackParticlePath,
            style: {
              animationDelay: `${t * G - r}s`,
              animationDuration: `${n}s`,
              top: `${12 + L(t, 23) * 76}%`,
            },
            children: (0, H.jsx)(`span`, {
              className: B.TrackParticle,
              style: {
                opacity: i,
                transform: `translate(-50%, -50%) scale(${o})`,
              },
            }),
          },
          t,
        );
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== o
      ? ((s = (0, H.jsx)(`span`, {
          "aria-hidden": !0,
          className: B.FastTrackParticles,
          "data-animation-active": n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
var We,
  Ge,
  H,
  U,
  W,
  G,
  Ke = e(() => {
    ((We = l()),
      (Ge = t(d(), 1)),
      Le(),
      V(),
      (H = S()),
      (U = 1.9),
      (W = 0.2),
      (G = U / 14));
  });
function qe() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(`span`, {
          "aria-hidden": !0,
          className: B.Burst,
          children: Array.from({ length: 16 }, Je),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Je(e, t) {
  return (0, q.jsx)(`span`, {}, t);
}
var K,
  q,
  Ye = e(() => {
    ((K = l()), V(), (q = S()));
  }),
  J,
  Xe,
  Ze,
  Qe,
  $e,
  et = e(() => {
    ((J = `_Fill_notip_7`),
      (Xe = `_Reveal_notip_1`),
      (Ze = `_Mask_notip_14`),
      (Qe = `_Canvas_notip_61`),
      ($e = { Fill: J, Reveal: Xe, Mask: Ze, Canvas: Qe }));
  });
function tt(e) {
  let t = (0, at.c)(7),
    { active: n, reveal: r, shouldReduceMotion: i } = e,
    a = (0, Y.useRef)(null),
    o,
    s;
  (t[0] !== n || t[1] !== i
    ? ((o = () => {
        if (!n) return;
        let e = a.current;
        if (e != null) return nt(e, i);
      }),
      (s = [n, i]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3])),
    (0, Y.useEffect)(o, s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(`span`, {
        className: $e.Mask,
        children: (0, X.jsx)(`canvas`, { className: $e.Canvas, ref: a }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === r
      ? (l = t[6])
      : ((l = (0, X.jsx)(`span`, {
          "aria-hidden": !0,
          className: $e.Fill,
          "data-reveal": r,
          children: c,
        })),
        (t[5] = r),
        (t[6] = l)),
    l
  );
}
function nt(e, t) {
  if (typeof WebGLRenderingContext > `u` || typeof ResizeObserver > `u`) return;
  let n = e.getContext(`webgl`, {
    alpha: !0,
    antialias: !1,
    depth: !1,
    powerPreference: `high-performance`,
    stencil: !1,
  });
  if (n == null) return;
  let r = rt(n);
  if (r == null) return;
  let i = n.createBuffer();
  if (i == null) {
    n.deleteProgram(r);
    return;
  }
  let a = n.getAttribLocation(r, `aPosition`),
    o = n.getUniformLocation(r, `uResolution`),
    s = n.getUniformLocation(r, `uTime`),
    c = performance.now(),
    l = 0;
  (n.useProgram(r),
    n.bindBuffer(n.ARRAY_BUFFER, i),
    n.bufferData(n.ARRAY_BUFFER, ct, n.STATIC_DRAW),
    n.enableVertexAttribArray(a),
    n.vertexAttribPointer(a, 2, n.FLOAT, !1, 0, 0));
  let u = (e) => {
      (n.uniform1f(s, e), n.drawArrays(n.TRIANGLES, 0, 6));
    },
    d = () => {
      let r = Math.min(window.devicePixelRatio, 2),
        { height: i, width: a } = e.getBoundingClientRect(),
        s = Math.max(Math.round(a), 1),
        l = Math.max(Math.round(i), 1);
      ((e.width = Math.round(s * r)),
        (e.height = Math.round(l * r)),
        n.viewport(0, 0, e.width, e.height),
        n.uniform2f(o, s, l),
        u(t ? 0 : (performance.now() - c) / 1e3));
    },
    f = (e) => {
      ((l = 0), u((e - c) / 1e3), (l = window.requestAnimationFrame(f)));
    },
    p = new ResizeObserver(d);
  return (
    d(),
    p.observe(e),
    t || (l = window.requestAnimationFrame(f)),
    () => {
      (l !== 0 && window.cancelAnimationFrame(l),
        p.disconnect(),
        n.deleteBuffer(i),
        n.deleteProgram(r));
    }
  );
}
function rt(e) {
  let t = it(e, e.VERTEX_SHADER, ot),
    n = it(e, e.FRAGMENT_SHADER, st);
  if (t == null || n == null)
    return (
      t != null && e.deleteShader(t),
      n != null && e.deleteShader(n),
      null
    );
  let r = e.createProgram();
  return r == null
    ? (e.deleteShader(t), e.deleteShader(n), null)
    : (e.attachShader(r, t),
      e.attachShader(r, n),
      e.linkProgram(r),
      e.deleteShader(t),
      e.deleteShader(n),
      e.getProgramParameter(r, e.LINK_STATUS) ? r : (e.deleteProgram(r), null));
}
function it(e, t, n) {
  let r = e.createShader(t);
  return r == null
    ? null
    : (e.shaderSource(r, n),
      e.compileShader(r),
      e.getShaderParameter(r, e.COMPILE_STATUS)
        ? r
        : (e.deleteShader(r), null));
}
var at,
  Y,
  X,
  ot,
  st,
  ct,
  lt = e(() => {
    ((at = l()),
      (Y = t(d(), 1)),
      et(),
      (X = S()),
      (ot = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`),
      (st = `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uResolution;

  const vec3 COLOR_1 = vec3(0.592, 0.388, 0.945);
  const vec3 COLOR_2 = vec3(0.831, 0.710, 0.953);
  const vec3 COLOR_3 = vec3(0.286, 0.000, 0.404);
  const vec3 COLOR_4 = vec3(0.145, 0.055, 0.478);
  const vec3 COLOR_5 = vec3(0.592, 0.000, 0.996);
  const vec3 COLOR_6 = vec3(0.780, 0.459, 0.914);
  const vec3 COLOR_7 = vec3(0.725, 0.576, 1.000);
  const vec3 COLOR_8 = vec3(0.400, 0.212, 0.820);
  const vec3 COLOR_9 = vec3(0.882, 0.690, 1.000);
  const vec3 COLOR_10 = vec3(0.498, 0.345, 0.957);
  const vec3 COLOR_11 = vec3(0.659, 0.275, 0.910);
  const vec3 COLOR_12 = vec3(0.212, 0.063, 0.400);

  float grain(vec2 uv) {
    vec2 grainUv = uv * uResolution * 0.5;
    return fract(sin(dot(grainUv + uTime, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
  }

  float fieldWeight(vec2 point, vec2 center) {
    return exp(-dot(point - center, point - center) * 12.0);
  }

  vec3 fieldColor(vec2 rawUv) {
    const float speed = 1.25;
    vec2 uv = vec2(rawUv.x, 0.40 + rawUv.y * 0.18);
    vec2 spatialScale = vec2(1.55, 1.0);
    vec2 point = uv * spatialScale;
    vec2 center1 = vec2(0.18 + sin(uTime * speed * 0.42) * 0.18, 0.36 + cos(uTime * speed * 0.50) * 0.42) * spatialScale;
    vec2 center2 = vec2(0.34 + cos(uTime * speed * 0.62) * 0.24, 0.62 + sin(uTime * speed * 0.47) * 0.38) * spatialScale;
    vec2 center3 = vec2(0.52 + sin(uTime * speed * 0.38) * 0.28, 0.30 + cos(uTime * speed * 0.58) * 0.36) * spatialScale;
    vec2 center4 = vec2(0.70 + cos(uTime * speed * 0.54) * 0.24, 0.68 + sin(uTime * speed * 0.41) * 0.36) * spatialScale;
    vec2 center5 = vec2(0.88 + sin(uTime * speed * 0.74) * 0.16, 0.36 + cos(uTime * speed * 0.64) * 0.40) * spatialScale;
    vec2 center6 = vec2(0.12 + cos(uTime * speed * 0.48) * 0.20, 0.72 + sin(uTime * speed * 0.70) * 0.30) * spatialScale;
    vec2 center7 = vec2(0.30 + sin(uTime * speed * 0.58) * 0.22, 0.44 + cos(uTime * speed * 0.52) * 0.42) * spatialScale;
    vec2 center8 = vec2(0.46 + cos(uTime * speed * 0.68) * 0.26, 0.72 + sin(uTime * speed * 0.56) * 0.32) * spatialScale;
    vec2 center9 = vec2(0.60 + sin(uTime * speed * 0.44) * 0.28, 0.26 + cos(uTime * speed * 0.60) * 0.38) * spatialScale;
    vec2 center10 = vec2(0.76 + cos(uTime * speed * 0.50) * 0.22, 0.54 + sin(uTime * speed * 0.66) * 0.40) * spatialScale;
    vec2 center11 = vec2(0.92 + sin(uTime * speed * 0.70) * 0.15, 0.66 + cos(uTime * speed * 0.46) * 0.30) * spatialScale;
    vec2 center12 = vec2(0.06 + cos(uTime * speed * 0.40) * 0.14, 0.32 + sin(uTime * speed * 0.60) * 0.40) * spatialScale;
    float weight1 = fieldWeight(point, center1) * (0.7 + 0.3 * sin(uTime * 0.91));
    float weight2 = fieldWeight(point, center2) * (0.7 + 0.3 * cos(uTime * 1.07));
    float weight3 = fieldWeight(point, center3) * (0.7 + 0.3 * sin(uTime * 0.76));
    float weight4 = fieldWeight(point, center4) * (0.7 + 0.3 * cos(uTime * 1.18));
    float weight5 = fieldWeight(point, center5) * (0.7 + 0.3 * sin(uTime * 1.03));
    float weight6 = fieldWeight(point, center6) * (0.7 + 0.3 * cos(uTime * 0.83));
    float weight7 = fieldWeight(point, center7) * (0.7 + 0.3 * sin(uTime * 1.24));
    float weight8 = fieldWeight(point, center8) * (0.7 + 0.3 * cos(uTime * 0.96));
    float weight9 = fieldWeight(point, center9) * (0.7 + 0.3 * sin(uTime * 1.11));
    float weight10 = fieldWeight(point, center10) * (0.7 + 0.3 * cos(uTime * 0.72));
    float weight11 = fieldWeight(point, center11) * (0.7 + 0.3 * sin(uTime * 1.29));
    float weight12 = fieldWeight(point, center12) * (0.7 + 0.3 * cos(uTime * 0.88));
    float totalWeight = max(
      weight1 + weight2 + weight3 + weight4 + weight5 + weight6 +
        weight7 + weight8 + weight9 + weight10 + weight11 + weight12,
      0.0001
    );
    vec3 color = (
      COLOR_1 * weight1 + COLOR_2 * weight2 + COLOR_3 * weight3 +
      COLOR_4 * weight4 + COLOR_5 * weight5 + COLOR_6 * weight6 +
      COLOR_7 * weight7 + COLOR_8 * weight8 + COLOR_9 * weight9 +
      COLOR_10 * weight10 + COLOR_11 * weight11 + COLOR_12 * weight12
    ) / totalWeight;
    color = mix(COLOR_4, color, 0.96);

    return pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(0.9));
  }

  void main() {
    vec3 color = fieldColor(vUv);
    color += grain(vUv) * 0.012;
    color.r += sin(uTime * 0.5) * 0.02;
    color.g += cos(uTime * 0.7) * 0.02;
    color.b += sin(uTime * 0.6) * 0.02;
    color = pow(color, vec3(0.92));

    gl_FragColor = vec4(color, 1.0);
  }
`),
      (ct = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])));
  });
function ut(e) {
  let t = (0, mt.c)(13),
    { animationActive: n, index: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = () => dt(r)), (t[0] = r), (t[1] = i));
  let [a, o] = (0, ht.useState)(i),
    s;
  t[2] === r
    ? (s = t[3])
    : ((s = Math.round(4 + L(r, 14) * 92)), (t[2] = r), (t[3] = s));
  let c = s,
    l = _t * a.durationScale,
    u = 0.4 + L(r, 11) * 0.6,
    d = 0.5 + L(r, 12) * 0.45,
    f,
    p;
  (t[4] === n
    ? ((f = t[5]), (p = t[6]))
    : ((f = () => {
        if (!n) return;
        let e = 0,
          t = () => {
            let n = ft();
            (o(n), (e = window.setTimeout(t, _t * n.durationScale * 1e3)));
          },
          r = window.requestAnimationFrame(t);
        return () => {
          (window.cancelAnimationFrame(r), window.clearTimeout(e));
        };
      }),
      (p = [n]),
      (t[4] = n),
      (t[5] = f),
      (t[6] = p)),
    (0, ht.useEffect)(f, p));
  let m = `calc(${c}% + ${a.horizontalOffset}px)`,
    h = `translate(-50%, -50%) scale(${d})`,
    g = `${l}s`,
    _;
  return (
    t[7] !== u || t[8] !== m || t[9] !== h || t[10] !== g || t[11] !== a.y
      ? ((_ = (0, gt.jsx)(`span`, {
          className: B.TrackParticle,
          style: {
            left: m,
            opacity: u,
            top: a.y,
            transform: h,
            transitionDuration: g,
          },
        })),
        (t[7] = u),
        (t[8] = m),
        (t[9] = h),
        (t[10] = g),
        (t[11] = a.y),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function dt(e) {
  let t = 1;
  return pt(() => {
    let n = L(e, t);
    return ((t += 1), n);
  });
}
function ft() {
  return pt(Math.random);
}
function pt(e) {
  let t = e(),
    n = e();
  return {
    durationScale: 0.8 + e() * 1.2,
    horizontalOffset: Math.round((t - 0.5) * 8),
    y: Math.round(12 + (n - 0.5) * 14),
  };
}
var mt,
  ht,
  gt,
  _t,
  vt = e(() => {
    ((mt = l()), (ht = t(d(), 1)), Le(), V(), (gt = S()), (_t = 1.6));
  });
function yt(e) {
  let t = (0, bt.c)(2),
    { animationActive: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, xt.jsx)(`span`, {
          "aria-hidden": !0,
          className: B.TrackParticles,
          children: Array.from({ length: 14 }, (e, t) =>
            (0, xt.jsx)(ut, { animationActive: n, index: t }, t),
          ),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var bt,
  xt,
  St = e(() => {
    ((bt = l()), vt(), Le(), V(), (xt = S()));
  }),
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Z,
  Gt = e(() => {
    ((Ct = `_Container_3jngk_1`),
      (wt = `_Thumb_3jngk_12`),
      (Tt = `_Root_3jngk_19`),
      (Et = `_EnableModelPickerPowerSliderThumbInputMotion_3jngk_1`),
      (Dt = `_FastModeTickScale_3jngk_1`),
      (Ot = `_FastModeTickTranslate_3jngk_1`),
      (kt = `_FastModeTickFade_3jngk_1`),
      (At = `_FastModeTickReturnScale_3jngk_1`),
      (jt = `_FastModeTickReturnTranslate_3jngk_1`),
      (Mt = `_FastModeTickReturnFade_3jngk_1`),
      (Nt = `_Tick_3jngk_40`),
      (Pt = `_ThumbInput_3jngk_116`),
      (Ft = `_Track_3jngk_212`),
      (It = `_Range_3jngk_226`),
      (Lt = `_MaxEffects_3jngk_236`),
      (Rt = `_FastParticleClip_3jngk_242`),
      (zt = `_ParticleTransition_3jngk_251`),
      (Bt = `_TickRail_3jngk_259`),
      (Vt = `_VisualThumbRail_3jngk_302`),
      (Ht = `_ThumbScale_3jngk_343`),
      (Ut = `_MaxBurst_3jngk_352`),
      (Wt = `_ThumbSpring_3jngk_358`),
      (Z = {
        Container: Ct,
        Thumb: wt,
        Root: Tt,
        EnableModelPickerPowerSliderThumbInputMotion: Et,
        FastModeTickScale: Dt,
        FastModeTickTranslate: Ot,
        FastModeTickFade: kt,
        FastModeTickReturnScale: At,
        FastModeTickReturnTranslate: jt,
        FastModeTickReturnFade: Mt,
        Tick: Nt,
        ThumbInput: Pt,
        Track: Ft,
        Range: It,
        MaxEffects: Lt,
        FastParticleClip: Rt,
        ParticleTransition: zt,
        TickRail: Bt,
        VisualThumbRail: Vt,
        ThumbScale: Ht,
        MaxBurst: Ut,
        ThumbSpring: Wt,
      }));
  });
function Kt(e) {
  let t = (0, en.c)(144),
    {
      active: r,
      disabled: i,
      fastModeEnabled: a,
      keyboardControlFocused: o,
      onDragToMax: s,
      onSelectOption: c,
      options: l,
      selectedOptionId: d,
      shouldReduceMotion: p,
      transitionsReady: g,
    } = e,
    _ = i === void 0 ? !1 : i,
    v = g === void 0 ? !0 : g,
    y = n(),
    b = p ?? y ?? !1,
    x = a ? `active` : `inactive`,
    S;
  t[0] !== a || t[1] !== x
    ? ((S = { enabled: a, phase: x, sequence: 0 }),
      (t[0] = a),
      (t[1] = x),
      (t[2] = S))
    : (S = t[2]);
  let [C, te] = (0, Q.useState)(S),
    [ne, w] = (0, Q.useReducer)(Jt, Sn),
    re = (0, Q.useRef)(null),
    ie = (0, Q.useRef)(!1),
    ae = (0, Q.useRef)(!1),
    oe;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = { accumulatedDelta: 0, lastEventTime: 0 }), (t[3] = oe))
    : (oe = t[3]);
  let se = (0, Q.useRef)(oe),
    {
      isDragging: ce,
      isPointerDown: le,
      isThumbHovered: ue,
      maxBurstKey: T,
      previewBaseOptionId: de,
      previewIndex: fe,
      previewOptionIds: pe,
    } = ne,
    E = _ || l.length <= 1,
    me;
  if (t[4] !== l || t[5] !== d) {
    let e;
    (t[7] === d
      ? (e = t[8])
      : ((e = (e) => {
          let { id: t } = e;
          return t === d;
        }),
        (t[7] = d),
        (t[8] = e)),
      (me = l.findIndex(e)),
      (t[4] = l),
      (t[5] = d),
      (t[6] = me));
  } else me = t[6];
  let D = Math.max(me, 0),
    O = fe == null ? void 0 : l[fe],
    he;
  t[9] !== de || t[10] !== pe || t[11] !== O || t[12] !== d
    ? ((he =
        O != null &&
        O.id !== d &&
        (d === de || pe.slice(0, -1).some((e) => e === d))),
      (t[9] = de),
      (t[10] = pe),
      (t[11] = O),
      (t[12] = d),
      (t[13] = he))
    : (he = t[13]);
  let ge = he;
  fe != null && !ge && w({ type: `preview_acknowledged` });
  let k = l.length - 1,
    A = Math.min(ge && fe != null ? fe : D, k),
    _e = l[A],
    j = k <= 0 ? 0 : (Math.max(A, 0) / k) * 100,
    M = k > 0 && _e?.isMax === !0,
    N = m(j),
    ve;
  t[14] === k
    ? (ve = t[15])
    : ((ve = (e) => Xt(e, k)), (t[14] = k), (t[15] = ve));
  let ye = f(N, ve),
    P;
  t[16] === k ? (P = t[17]) : ((P = (e) => Zt(e, k)), (t[16] = k), (t[17] = P));
  let be = f(N, P),
    xe;
  t[18] !== a || t[19] !== k
    ? ((xe = (e) => Xt(e, k, -(1 - (a ? 0 : nn)))),
      (t[18] = a),
      (t[19] = k),
      (t[20] = xe))
    : (xe = t[20]);
  let Se = f(N, xe),
    Ce = f(N, Yt);
  C.enabled !== a &&
    te({
      enabled: a,
      phase: a ? `entering` : `exiting`,
      sequence: C.sequence + 1,
    });
  let we, Te;
  (t[21] === a
    ? ((we = t[22]), (Te = t[23]))
    : ((we = () => {
        let e = window.setTimeout(
          () => {
            te((e) => {
              let t = a ? `active` : `inactive`;
              return e.enabled === a && e.phase !== t ? { ...e, phase: t } : e;
            });
          },
          a ? on : sn,
        );
        return () => window.clearTimeout(e);
      }),
      (Te = [a]),
      (t[21] = a),
      (t[22] = we),
      (t[23] = Te)),
    (0, Q.useEffect)(we, Te));
  let Ee;
  t[24] !== A ||
  t[25] !== ge ||
  t[26] !== E ||
  t[27] !== M ||
  t[28] !== k ||
  t[29] !== s ||
  t[30] !== c ||
  t[31] !== l ||
  t[32] !== de ||
  t[33] !== d
    ? ((Ee = (e) => {
        let t = l[e];
        if (E || t == null || e === A) return;
        let n = k > 0 && t.isMax;
        (n
          ? ae.current || ((ae.current = !0), ie.current && s())
          : (ae.current = !1),
          c(t),
          w({
            type: `value_preview`,
            atMax: n,
            baseOptionId: ge && de != null ? de : d,
            enteredMax: n && !M,
            index: e,
            optionId: t.id,
          }));
      }),
      (t[24] = A),
      (t[25] = ge),
      (t[26] = E),
      (t[27] = M),
      (t[28] = k),
      (t[29] = s),
      (t[30] = c),
      (t[31] = l),
      (t[32] = de),
      (t[33] = d),
      (t[34] = Ee))
    : (Ee = t[34]);
  let F = Ee,
    De;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = () => {
        ((ie.current = !1), (ae.current = !1), w({ type: `pointer_up` }));
      }),
      (t[35] = De))
    : (De = t[35]);
  let Oe = De,
    I;
  t[36] !== A || t[37] !== E || t[38] !== k || t[39] !== F
    ? ((I = (e) => {
        if (e.ctrlKey || E || k <= 0) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : -e.deltaY;
        `webkitDirectionInvertedFromDevice` in e &&
          e.webkitDirectionInvertedFromDevice === !0 &&
          (t *= -1);
        let n =
          e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? t : Math.sign(t) * xn;
        if (n === 0) return;
        let r = se.current;
        if (
          ((e.timeStamp - r.lastEventTime > bn ||
            Math.sign(n) !== Math.sign(r.accumulatedDelta)) &&
            (r.accumulatedDelta = 0),
          (r.lastEventTime = e.timeStamp),
          (r.accumulatedDelta += n),
          Math.abs(r.accumulatedDelta) < xn)
        )
          return;
        let i = Math.sign(r.accumulatedDelta);
        r.accumulatedDelta -= i * xn;
        let a = Math.max(0, Math.min(A + i, k));
        if (a === A) {
          r.accumulatedDelta = 0;
          return;
        }
        (F(a), w({ type: `pointer_up` }));
      }),
      (t[36] = A),
      (t[37] = E),
      (t[38] = k),
      (t[39] = F),
      (t[40] = I))
    : (I = t[40]);
  let ke = (0, Q.useEffectEvent)(I),
    Ae;
  t[41] === ke
    ? (Ae = t[42])
    : ((Ae = () => {
        let e = re.current;
        if (e == null) return;
        let t = (e) => ke(e);
        return (
          e.addEventListener(`wheel`, t, { passive: !1 }),
          () => e.removeEventListener(`wheel`, t)
        );
      }),
      (t[41] = ke),
      (t[42] = Ae));
  let je;
  (t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = []), (t[43] = je))
    : (je = t[43]),
    (0, Q.useEffect)(Ae, je));
  let Me, Ie;
  if (
    (t[44] !== r || t[45] !== N || t[46] !== j || t[47] !== ce || t[48] !== b
      ? ((Me = () => {
          if (!r || b) {
            N.jump(j);
            return;
          }
          let e = ee(N, j, ce ? ln : cn);
          return () => e.stop();
        }),
        (Ie = [r, N, j, ce, b]),
        (t[44] = r),
        (t[45] = N),
        (t[46] = j),
        (t[47] = ce),
        (t[48] = b),
        (t[49] = Me),
        (t[50] = Ie))
      : ((Me = t[49]), (Ie = t[50])),
    (0, Q.useEffect)(Me, Ie),
    _e == null)
  )
    return null;
  let L = !E && (ue || le),
    Le = !E && ce,
    Re = C.phase,
    ze = !E && le,
    Be = Math.max(k, 1),
    Ve;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        (e.stopPropagation(), Oe());
      }),
      (t[51] = Ve))
    : (Ve = t[51]);
  let R;
  t[52] === E
    ? (R = t[53])
    : ((R = (e) => {
        (e.stopPropagation(),
          (ie.current = !1),
          (ae.current = !1),
          E || w({ type: `pointer_down` }));
      }),
      (t[52] = E),
      (t[53] = R));
  let He;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (e) => {
        e.buttons !== 0 && (ie.current = !0);
      }),
      (t[54] = He))
    : (He = t[54]);
  let z;
  t[55] === E
    ? (z = t[56])
    : ((z = (e) => {
        (e.stopPropagation(),
          !E && e.buttons !== 0 && w({ type: `pointer_move` }));
      }),
      (t[55] = E),
      (t[56] = z));
  let B;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (e.stopPropagation(), Oe());
      }),
      (t[57] = B))
    : (B = t[57]);
  let V;
  t[58] === F
    ? (V = t[59])
    : ((V = (e) => {
        let t = e[0];
        t != null && F(t);
      }),
      (t[58] = F),
      (t[59] = V));
  let We;
  t[60] === A ? (We = t[61]) : ((We = [A]), (t[60] = A), (t[61] = We));
  let Ge;
  t[62] === ye
    ? (Ge = t[63])
    : ((Ge = { transform: ye }), (t[62] = ye), (t[63] = Ge));
  let H;
  t[64] !== r ||
  t[65] !== Se ||
  t[66] !== C.enabled ||
  t[67] !== C.phase ||
  t[68] !== C.sequence ||
  t[69] !== M ||
  t[70] !== T ||
  t[71] !== b ||
  t[72] !== v
    ? ((H = M
        ? (0, $.jsxs)(
            u.span,
            {
              animate: { opacity: 1 },
              className: Z.MaxEffects,
              exit: { opacity: 0 },
              initial: { opacity: 0 },
              style: { transform: Se },
              transition: b ? yn : cn,
              children: [
                (0, $.jsx)(tt, {
                  active: r,
                  reveal: !b && T > 0,
                  shouldReduceMotion: b,
                }),
                (0, $.jsx)(h, {
                  children:
                    !C.enabled && !b
                      ? (0, $.jsx)(
                          u.span,
                          {
                            animate: {
                              opacity: 1,
                              transition: C.phase === `exiting` ? pn : un,
                              x: 0,
                            },
                            className: Z.ParticleTransition,
                            exit: { opacity: 0, transition: mn, x: -110 },
                            initial: v
                              ? {
                                  opacity: 0,
                                  x: C.phase === `exiting` ? 28 : 0,
                                }
                              : !1,
                            children: (0, $.jsx)(yt, { animationActive: r }),
                          },
                          `max-particles-${C.sequence}`,
                        )
                      : null,
                }),
              ],
            },
            `max-effects`,
          )
        : null),
      (t[64] = r),
      (t[65] = Se),
      (t[66] = C.enabled),
      (t[67] = C.phase),
      (t[68] = C.sequence),
      (t[69] = M),
      (t[70] = T),
      (t[71] = b),
      (t[72] = v),
      (t[73] = H))
    : (H = t[73]);
  let U;
  t[74] === H
    ? (U = t[75])
    : ((U = (0, $.jsx)(h, { initial: !1, children: H })),
      (t[74] = H),
      (t[75] = U));
  let W;
  t[76] !== Ge || t[77] !== U
    ? ((W = (0, $.jsx)(u.span, {
        "aria-hidden": !0,
        className: Z.Range,
        style: Ge,
        children: U,
      })),
      (t[76] = Ge),
      (t[77] = U),
      (t[78] = W))
    : (W = t[78]);
  let G;
  t[79] !== r ||
  t[80] !== be ||
  t[81] !== j ||
  t[82] !== C.enabled ||
  t[83] !== C.sequence ||
  t[84] !== M ||
  t[85] !== b ||
  t[86] !== v
    ? ((G =
        C.enabled && !b
          ? (0, $.jsx)(
              u.span,
              {
                animate: { opacity: 1 },
                className: Z.FastParticleClip,
                exit: { opacity: 0, transition: M ? fn : gn },
                initial: { opacity: 0 },
                style: { clipPath: be },
                transition: M ? dn : hn,
                children: (0, $.jsx)(Ue, {
                  animationActive: r,
                  initialStartPercent: v ? j : 0,
                }),
              },
              `fast-particles-${C.sequence}`,
            )
          : null),
      (t[79] = r),
      (t[80] = be),
      (t[81] = j),
      (t[82] = C.enabled),
      (t[83] = C.sequence),
      (t[84] = M),
      (t[85] = b),
      (t[86] = v),
      (t[87] = G))
    : (G = t[87]);
  let Ke;
  t[88] === G
    ? (Ke = t[89])
    : ((Ke = (0, $.jsx)(h, { initial: !1, children: G })),
      (t[88] = G),
      (t[89] = Ke));
  let Je;
  if (t[90] !== A || t[91] !== k || t[92] !== l) {
    let e;
    (t[94] !== A || t[95] !== k
      ? ((e = (e, t) =>
          (0, $.jsx)(
            `span`,
            {
              className: Z.Tick,
              "data-selected": t <= A,
              style: { left: Yt(k === 0 ? 0 : (t / k) * 100) },
            },
            e.id,
          )),
        (t[94] = A),
        (t[95] = k),
        (t[96] = e))
      : (e = t[96]),
      (Je = l.map(e)),
      (t[90] = A),
      (t[91] = k),
      (t[92] = l),
      (t[93] = Je));
  } else Je = t[93];
  let K;
  t[97] === Je
    ? (K = t[98])
    : ((K = (0, $.jsx)(`div`, { className: Z.TickRail, children: Je })),
      (t[97] = Je),
      (t[98] = K));
  let q;
  t[99] !== W || t[100] !== Ke || t[101] !== K
    ? ((q = (0, $.jsxs)(Pe, { className: Z.Track, children: [W, Ke, K] })),
      (t[99] = W),
      (t[100] = Ke),
      (t[101] = K),
      (t[102] = q))
    : (q = t[102]);
  let Ye;
  t[103] === Ce
    ? (Ye = t[104])
    : ((Ye = { left: Ce }), (t[103] = Ce), (t[104] = Ye));
  let J;
  t[105] !== M || t[106] !== T || t[107] !== b
    ? ((J =
        M && T > 0 && !b
          ? (0, $.jsx)(`span`, {
              className: Z.MaxBurst,
              "data-model-picker-power-slider-max-burst": !0,
              children: (0, $.jsx)(qe, {}, T),
            })
          : null),
      (t[105] = M),
      (t[106] = T),
      (t[107] = b),
      (t[108] = J))
    : (J = t[108]);
  let Xe = !b && L ? tn : 1,
    Ze;
  t[109] === Xe
    ? (Ze = t[110])
    : ((Ze = { scale: Xe }), (t[109] = Xe), (t[110] = Ze));
  let Qe = b ? yn : L ? _n : vn,
    $e;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (0, $.jsx)(`span`, { className: Z.Thumb })), (t[111] = $e))
    : ($e = t[111]);
  let et;
  t[112] !== Ze || t[113] !== Qe
    ? ((et = (0, $.jsx)(u.span, {
        animate: Ze,
        className: Z.ThumbSpring,
        initial: !1,
        transition: Qe,
        children: $e,
      })),
      (t[112] = Ze),
      (t[113] = Qe),
      (t[114] = et))
    : (et = t[114]);
  let nt;
  t[115] !== Ye || t[116] !== J || t[117] !== et
    ? ((nt = (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: Z.VisualThumbRail,
        children: (0, $.jsxs)(u.span, {
          className: Z.ThumbScale,
          style: Ye,
          children: [J, et],
        }),
      })),
      (t[115] = Ye),
      (t[116] = J),
      (t[117] = et),
      (t[118] = nt))
    : (nt = t[118]);
  let rt;
  t[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = () => {
        w({ type: `pointer_up` });
      }),
      (t[119] = rt))
    : (rt = t[119]);
  let it;
  t[120] === E
    ? (it = t[121])
    : ((it = () => {
        E || w({ type: `thumb_hover`, hovered: !0 });
      }),
      (t[120] = E),
      (t[121] = it));
  let at;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = () => {
        w({ type: `thumb_hover`, hovered: !1 });
      }),
      (t[122] = at))
    : (at = t[122]);
  let Y;
  t[123] === it
    ? (Y = t[124])
    : ((Y = (0, $.jsx)(Fe, {
        "aria-hidden": !0,
        className: Z.ThumbInput,
        onBlur: rt,
        onPointerEnter: it,
        onPointerLeave: at,
        tabIndex: -1,
      })),
      (t[123] = it),
      (t[124] = Y));
  let X;
  t[125] !== a ||
  t[126] !== C.phase ||
  t[127] !== E ||
  t[128] !== M ||
  t[129] !== b ||
  t[130] !== Le ||
  t[131] !== ze ||
  t[132] !== Be ||
  t[133] !== R ||
  t[134] !== z ||
  t[135] !== V ||
  t[136] !== We ||
  t[137] !== q ||
  t[138] !== nt ||
  t[139] !== Y
    ? ((X = (0, $.jsxs)(Ne, {
        className: Z.Root,
        "data-dragging": Le,
        "data-fast-mode": a,
        "data-fast-mode-dot-transition": Re,
        "data-max": M,
        "data-pointer-down": ze,
        "data-reduced-motion": b,
        dir: `ltr`,
        disabled: E,
        max: Be,
        min: 0,
        onClick: qt,
        onLostPointerCapture: Oe,
        onPointerCancel: Ve,
        onPointerDown: R,
        onPointerMoveCapture: He,
        onPointerMove: z,
        onPointerUp: B,
        onValueChange: V,
        onValueCommit: Oe,
        step: 1,
        ref: re,
        value: We,
        children: [q, nt, Y],
      })),
      (t[125] = a),
      (t[126] = C.phase),
      (t[127] = E),
      (t[128] = M),
      (t[129] = b),
      (t[130] = Le),
      (t[131] = ze),
      (t[132] = Be),
      (t[133] = R),
      (t[134] = z),
      (t[135] = V),
      (t[136] = We),
      (t[137] = q),
      (t[138] = nt),
      (t[139] = Y),
      (t[140] = X))
    : (X = t[140]);
  let ot;
  return (
    t[141] !== o || t[142] !== X
      ? ((ot = (0, $.jsx)(`div`, {
          className: Z.Container,
          "data-keyboard-focused": o,
          "data-model-picker-power-slider": ``,
          children: X,
        })),
        (t[141] = o),
        (t[142] = X),
        (t[143] = ot))
      : (ot = t[143]),
    ot
  );
}
function qt(e) {
  return e.stopPropagation();
}
function Jt(e, t) {
  switch (t.type) {
    case `pointer_down`:
      return { ...e, isDragging: !1, isPointerDown: !0 };
    case `pointer_move`:
      return e.isPointerDown && !e.isDragging ? { ...e, isDragging: !0 } : e;
    case `pointer_up`:
      return { ...e, isDragging: !1, isPointerDown: !1, isThumbHovered: !1 };
    case `preview_acknowledged`:
      return {
        ...e,
        previewBaseOptionId: null,
        previewIndex: null,
        previewOptionIds: [],
      };
    case `thumb_hover`:
      return { ...e, isThumbHovered: t.hovered };
    case `value_preview`:
      return {
        ...e,
        maxBurstKey: t.enteredMax
          ? e.maxBurstKey + 1
          : t.atMax
            ? e.maxBurstKey
            : 0,
        previewBaseOptionId: t.baseOptionId,
        previewIndex: t.index,
        previewOptionIds:
          e.previewBaseOptionId == null
            ? [t.optionId]
            : [...e.previewOptionIds, t.optionId],
      };
  }
}
function Yt(e) {
  return `calc(${e}% + ${$t(e)}px)`;
}
function Xt(e, t, n = 1) {
  if (t <= 0) return `translateX(${-100 * n}%)`;
  let r = Qt(e, t);
  return `translateX(calc(${(e - 100) * n}% + ${r * n}px))`;
}
function Zt(e, t) {
  let n = Qt(e, t);
  return `inset(0 calc(${100 - e}% - ${n}px) 0 0)`;
}
function Qt(e, t) {
  if (t <= 0) return 0;
  let n = 100 / t,
    r = Math.min(e / n, (100 - e) / n, 1);
  return $t(e) * r;
}
function $t(e) {
  let t = rn / 2 - an;
  return t - (e / 50) * t;
}
var en,
  Q,
  $,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn;
e(() => {
  ((en = l()),
    Ie(),
    o(),
    (Q = t(d(), 1)),
    Ke(),
    Ye(),
    lt(),
    St(),
    Gt(),
    ($ = S()),
    (tn = 32 / 28),
    (nn = 0.1),
    (rn = 28),
    (an = 1),
    (on = 1200),
    (sn = 350),
    (cn = { duration: 0.3, ease: [0.23, 1, 0.32, 1] }),
    (ln = { duration: 0.15, ease: [0.23, 1, 0.32, 1] }),
    (un = { delay: 0.15, duration: 0.35, ease: [0.42, 0, 0.58, 1] }),
    (dn = { duration: 0.25, ease: [0.42, 0, 1, 1] }),
    (fn = { delay: 0.1, duration: 0.3, ease: `linear` }),
    (pn = {
      opacity: { delay: 0.05, duration: 0.5, ease: `linear` },
      x: { delay: 0.05, duration: 0.5, ease: `easeOut` },
    }),
    (mn = {
      opacity: { delay: 1, duration: 0.55, ease: [0.42, 0, 1, 1] },
      x: { delay: 0.2, duration: 1.35, ease: [0.42, 0, 1, 1] },
    }),
    (hn = { duration: 0.08, ease: [0.42, 0, 0.58, 1] }),
    (gn = { duration: 0.25, ease: [0.42, 0, 0.58, 1] }),
    (_n = { type: `spring`, stiffness: 420, damping: 38, mass: 1 }),
    (vn = { type: `spring`, stiffness: 220, damping: 26, mass: 1 }),
    (yn = { duration: 0 }),
    (bn = 160),
    (xn = 30),
    (Sn = {
      isDragging: !1,
      isPointerDown: !1,
      isThumbHovered: !1,
      maxBurstKey: 0,
      previewBaseOptionId: null,
      previewIndex: null,
      previewOptionIds: [],
    }));
})();
export { Kt as ModelPickerPowerSliderImpl };
//# sourceMappingURL=model-picker-power-slider-impl-CgHI5Tyi.js.map
