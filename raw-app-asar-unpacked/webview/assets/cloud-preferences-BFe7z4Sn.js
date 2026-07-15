import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  I2 as t,
  O2 as n,
  T2 as r,
  VW as i,
  WW as a,
  dJ as o,
  fJ as s,
  x2 as c,
  y2 as l,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function u() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKey: b,
          queryFn: d,
          retry: !1,
          staleTime: o.FIVE_MINUTES,
        }),
        (e[0] = t))
      : (t = e[0]),
    r(t)
  );
}
function d() {
  return i.safeGet(`/wham/settings/user`);
}
function f() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKey: x,
          queryFn: p,
          retry: !1,
          staleTime: o.FIVE_MINUTES,
        }),
        (e[0] = t))
      : (t = e[0]),
    r(t)
  );
}
function p() {
  return i.safeGet(`/wham/settings/configs/user-preferences`);
}
function m() {
  let e = (0, y.c)(2),
    t = n(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = {
          mutationFn: h,
          onSuccess: (e) => {
            t.setQueryData(b, e);
          },
        }),
        (e[0] = t),
        (e[1] = r)),
    c(r)
  );
}
function h(e) {
  return i.safePatch(`/wham/settings/user`, { requestBody: e });
}
function g(e, t, n) {
  let r = (e.match(/{/g) ?? []).length;
  if (r !== (e.match(/}/g) ?? []).length) return `bracket-mismatch`;
  if (r === 0) return `missing-pattern`;
  let i = n.map((e) => e.value);
  if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !i.includes(e)))
    return `invalid-pattern`;
  let a = v(e, n, (e) => `x`.repeat(e.char_count));
  return a.length > t
    ? `too-long`
    : a.startsWith(`/`)
      ? `leading-slash`
      : /^[a-zA-Z0-9./\-_]+$/.test(a)
        ? null
        : `invalid-characters`;
}
function _(e, t) {
  return v(e, t, (e) => e.example);
}
function v(e, t, n) {
  let r = e;
  for (let e of t) r = r.replaceAll(e.value, n(e));
  return r;
}
var y,
  b,
  x,
  S = e(() => {
    ((y = t()),
      l(),
      s(),
      a(),
      (b = [`cloud-user-preferences`]),
      (x = [`cloud-preferences-config`]));
  });
export { u as a, f as i, g as n, m as o, S as r, _ as t };
//# sourceMappingURL=cloud-preferences-BFe7z4Sn.js.map
