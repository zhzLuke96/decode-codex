import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as n,
  BZ as r,
  I2 as i,
  Jb as a,
  L2 as o,
  _0 as s,
  aJ as c,
  bJ as l,
  bx as u,
  ix as d,
  nx as f,
  qb as p,
  rx as m,
  tJ as h,
  w0 as g,
  x0 as _,
  yJ as v,
  yx as y,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function b(e) {
  let t = d(),
    n = f(t);
  return x(n == null ? void 0 : t?.repo_map?.[n]?.clone_url, e);
}
function x(e, t) {
  let n = (0, T.c)(7),
    r = t?.enabled ?? !0,
    i = r ? e : void 0,
    a;
  n[0] === i ? (a = n[1]) : ((a = Symbol(i)), (n[0] = i), (n[1] = a));
  let o = a,
    [s, c] = (0, D.useState)(null),
    l,
    u;
  return (
    n[2] !== e || n[3] !== r || n[4] !== o
      ? ((l = () => {
          if (!e || !r) return;
          let t = !1;
          return (
            S(e).then((e) => {
              t || c({ lookupKey: o, gitRoot: e });
            }),
            () => {
              t = !0;
            }
          );
        }),
        (u = [e, r, o]),
        (n[2] = e),
        (n[3] = r),
        (n[4] = o),
        (n[5] = l),
        (n[6] = u))
      : ((l = n[5]), (u = n[6])),
    (0, D.useEffect)(l, u),
    r && s?.lookupKey === o ? s.gitRoot : null
  );
}
async function S(e) {
  let t = await h(`active-workspace-roots`);
  if (!e || !t) return null;
  let n = await h(`git-origins`, { source: `git_root_lookup` });
  return C(e, t.roots, n.origins);
}
async function C(e, t, n) {
  let r = a(e),
    i = (n ?? []).find((e) =>
      e.originUrl ? (0, E.default)(a(e.originUrl), r) : !1,
    );
  return i
    ? i.root
    : (l.warning(`No matching origin found`, {
        safe: {},
        sensitive: { originUrl: e },
      }),
      t[0] ?? null);
}
function w(e, t) {
  let n = (0, T.c)(15),
    i = !!e && (t?.enabled ?? !0),
    a;
  n[0] !== e || n[1] !== i || n[2] !== t.hostId
    ? ((a =
        !i || e == null
          ? { dirs: [] }
          : t?.hostId == null
            ? { dirs: [e] }
            : { dirs: [e], hostId: t.hostId }),
      (n[0] = e),
      (n[1] = i),
      (n[2] = t.hostId),
      (n[3] = a))
    : (a = n[3]);
  let o = a,
    s;
  n[4] !== t.source || n[5] !== o
    ? ((s = { params: o, source: t.source }),
      (n[4] = t.source),
      (n[5] = o),
      (n[6] = s))
    : (s = n[6]);
  let { data: c, isLoading: l } = _(y, s),
    u;
  n[7] !== e || n[8] !== c?.origins
    ? ((u =
        c?.origins.find((t) => t.dir === e)?.root ??
        c?.origins[0]?.root ??
        null),
      (n[7] = e),
      (n[8] = c?.origins),
      (n[9] = u))
    : (u = n[9]);
  let d = u,
    f;
  n[10] === d ? (f = n[11]) : ((f = d ? r(d) : null), (n[10] = d), (n[11] = f));
  let p;
  return (
    n[12] !== l || n[13] !== f
      ? ((p = { gitRoot: f, isLoading: l }),
        (n[12] = l),
        (n[13] = f),
        (n[14] = p))
      : (p = n[14]),
    p
  );
}
var T,
  E,
  D,
  O = e(() => {
    ((T = i()),
      (E = t(g(), 1)),
      s(),
      n(),
      (D = t(o(), 1)),
      u(),
      c(),
      v(),
      p(),
      m());
  });
export { b as a, w as i, O as n, x as r, S as t };
//# sourceMappingURL=app-initial~app-main~new-thread-panel-page~appgen-library-page~hotkey-window-thread-page~ho~ji472bec-IX389zxA.js.map
