import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  I2 as n,
  JZ as r,
  O2 as i,
  QW as a,
  T2 as o,
  VW as s,
  WW as c,
  XW as l,
  bJ as u,
  cJ as d,
  dJ as f,
  fJ as p,
  lG as m,
  lJ as h,
  rG as g,
  uJ as _,
  x2 as v,
  y2 as y,
  yJ as b,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  K as x,
  Q as S,
  V as C,
  ot as w,
} from "./app-initial~app-main~hotkey-window-thread-page~keyboard-shortcuts-settings~thread-app-shell~cf704xib-Do6EGhkP.js";
function T({ accountId: e, userId: t }) {
  return [`profile`, `usage`, t ?? null, e ?? null];
}
function E(e) {
  let t = (0, H.c)(13),
    { accountId: n, enabled: r, userId: i } = e,
    a = m(U),
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a.get(W, f.SIX_HOURS)), (t[0] = a), (t[1] = s));
  let c = s,
    l;
  t[2] !== n || t[3] !== i
    ? ((l = T({ accountId: n, userId: i })), (t[2] = n), (t[3] = i), (t[4] = l))
    : (l = t[4]);
  let p = r && !0,
    h;
  t[5] !== n || t[6] !== i
    ? ((h = async () => {
        let e = n != null,
          t = i != null;
        (!e || !t) &&
          u.warning(`profile_usage_query_started_without_identity`, {
            safe: { hasAccountId: e, hasUserId: t },
            sensitive: {},
          });
        try {
          return await A();
        } catch (n) {
          let r = n;
          throw (
            u.warning(`profile_usage_query_failed`, {
              safe: {
                errorCode: r instanceof d ? (r.errorCode ?? null) : null,
                hasAccountId: e,
                hasUserId: t,
                status: r instanceof d ? r.status : null,
              },
              sensitive: {},
            }),
            r
          );
        }
      }),
      (t[5] = n),
      (t[6] = i),
      (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== c || t[9] !== l || t[10] !== p || t[11] !== h
      ? ((g = { queryKey: l, enabled: p, queryFn: h, staleTime: c }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = p),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    o(g)
  );
}
function D(e) {
  let t = (0, H.c)(6),
    { accountId: n, userId: r } = e,
    a = i(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = T({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  return (
    t[3] !== a || t[4] !== s
      ? ((c = {
          mutationFn: N,
          onSuccess: (e) => {
            I(a, s, e);
          },
        }),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    v(c)
  );
}
function O(e) {
  let t = (0, H.c)(6),
    { accountId: n, userId: r } = e,
    a = i(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = T({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  return (
    t[3] !== a || t[4] !== s
      ? ((c = {
          mutationFn: P,
          onSuccess: (e, t) => {
            let n = a.getQueryData(s);
            n != null && a.setQueryData(s, { ...n, username: x(t) || null });
          },
        }),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    v(c)
  );
}
function k(e) {
  let t = (0, H.c)(6),
    { accountId: n, userId: r } = e,
    a = i(),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = T({ accountId: n, userId: r })), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  return (
    t[3] !== a || t[4] !== s
      ? ((c = {
          mutationFn: async (e) => {
            let t = await j(e),
              n = a.getQueryData(s);
            n != null && a.setQueryData(s, { ...n, imageUrl: t });
          },
        }),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    v(c)
  );
}
async function A() {
  let e = await s.safeGet(`/wham/profiles/me`);
  return {
    activityInsights: R(e.stats),
    dailyUsage:
      e.stats.daily_usage_buckets == null
        ? null
        : e.stats.daily_usage_buckets.map((e) => ({
            credits: e.tokens,
            date: e.start_date,
          })),
    displayName: e.profile.display_name?.trim() || null,
    hasStatsError: !!e.metadata.stats_error?.trim(),
    imageUrl: L(e),
    summary: {
      currentStreakDays: e.stats.current_streak_days ?? null,
      longestStreakDays: e.stats.longest_streak_days ?? null,
      longestTaskDurationMs:
        e.stats.longest_running_turn_sec == null
          ? null
          : e.stats.longest_running_turn_sec * 1e3,
      peakTokens: e.stats.peak_daily_tokens ?? null,
      totalTextTokens: e.stats.lifetime_tokens ?? null,
    },
    username: e.profile.username?.trim() || null,
  };
}
async function j(e) {
  return L(await F({ profile_asset_pointer: await M(e) }));
}
async function M(e) {
  let t = B();
  return (
    await h.getInstance().post(`/wham/profiles/me/photo`, l(await z(e, t)), {
      "Content-Type": `multipart/form-data; boundary=${t}`,
      [r]: `1`,
    })
  ).body.asset_pointer;
}
async function N(e) {
  let t = {};
  if (
    (e.displayName != null && (t.display_name = e.displayName), e.photo != null)
  )
    try {
      t.profile_asset_pointer = await M(e.photo);
    } catch (e) {
      throw new G(e);
    }
  return F(t);
}
async function P(e) {
  let t = S(e);
  if (!t.ok) throw new C(t.reason);
  await F({ username: t.username });
}
async function F(e) {
  return s.safePatch(`/wham/profiles/me`, { requestBody: e });
}
function I(e, t, n) {
  let r = e.getQueryData(t);
  r != null &&
    e.setQueryData(t, {
      ...r,
      activityInsights: R(n.stats),
      displayName: n.profile.display_name?.trim() || null,
      hasStatsError: !!n.metadata.stats_error?.trim(),
      imageUrl: L(n),
    });
}
function L(e) {
  return e.profile.profile_picture_url?.trim() || null;
}
function R(e) {
  return {
    fastModePercent: e.fast_mode_usage_percentage,
    invocations: e.top_invocations,
    reasoningEffort: e.most_used_reasoning_effort,
    reasoningEffortPercent: e.most_used_reasoning_effort_percentage,
    skillsExplored: e.unique_skills_used,
    totalSkillsUsed: e.total_skills_used,
    totalThreads: e.total_threads,
  };
}
async function z(e, t) {
  let n = new TextEncoder(),
    r = new Uint8Array(await e.arrayBuffer()),
    i = e.type.trim() || `application/octet-stream`,
    a = e.name.trim().replace(/[\r\n"]/g, ``) || `profile-photo`;
  return V([
    n.encode(`--${t}\r\n`),
    n.encode(
      `Content-Disposition: form-data; name="file"; filename="${a}"\r\n`,
    ),
    n.encode(`Content-Type: ${i}\r\n\r\n`),
    r,
    n.encode(`\r\n--${t}--\r\n`),
  ]);
}
function B() {
  return typeof crypto < `u` && `randomUUID` in crypto
    ? `----codex-profile-photo-${crypto.randomUUID()}`
    : `----codex-profile-photo-${Math.random().toString(36).slice(2)}`;
}
function V(e) {
  let t = 0;
  for (let n of e) t += n.byteLength;
  let n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.byteLength));
  return n;
}
var H,
  U,
  W,
  G,
  K = e(() => {
    ((H = n()),
      y(),
      t(),
      g(),
      a(),
      b(),
      p(),
      c(),
      _(),
      w(),
      (U = `3503973010`),
      (W = `profile_usage_query_stale_time_ms`),
      (G = class extends Error {
        constructor(e) {
          (super(`Profile photo upload failed`), (this.uploadError = e));
        }
      }));
  });
export { k as a, D as i, K as n, O as o, E as r, G as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~profile-BuosOEjw.js.map
