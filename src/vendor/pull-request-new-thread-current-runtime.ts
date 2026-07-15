// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js
// Flat boundary. Vendored current pull request new-thread bundle copied from the Codex webview chunk.
import {
  createCommonJsModule as n,
  once as e,
  toEsModule as t,
} from "../runtime/commonjs-interop";
import {
  $o as r,
  $s as i,
  As as a,
  C as o,
  Cs as s,
  D as c,
  Di as l,
  Ds as u,
  E as d,
  Eo as f,
  Fi as p,
  Fs as m,
  Go as h,
  Is as g,
  Ko as _,
  O as v,
  Rs as y,
  S as b,
  Ts as x,
  Vo as S,
  _ as C,
  _c as w,
  ac as T,
  c as ee,
  cc as E,
  cs as te,
  d as ne,
  es as re,
  gc as D,
  go as ie,
  gs as ae,
  h as oe,
  hs as se,
  ic as ce,
  jo as O,
  js as k,
  ko as le,
  ks as ue,
  l as de,
  m as A,
  o as fe,
  on as pe,
  os as me,
  p as he,
  pc as ge,
  qo as j,
  s as _e,
  sn as ve,
  so as ye,
  tc as be,
  uo as xe,
  us as Se,
  xo as we,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  B_ as Te,
  C as Ee,
  Cl as De,
  D as Oe,
  E as ke,
  Fc as Ae,
  G_ as Me,
  J_ as Ne,
  K_ as M,
  L_ as Pe,
  Mc as Fe,
  N as Ie,
  Qp as Re,
  R_ as ze,
  Rv as Be,
  S as Ve,
  Tl as He,
  W_ as Ue,
  Zp as We,
  _n as Ge,
  _y as qe,
  c as Je,
  cm as Ye,
  d as Xe,
  em as N,
  fn as Ze,
  gy as P,
  hy as $e,
  jc as et,
  l as tt,
  ly as nt,
  ml as rt,
  mn as it,
  nm as ot,
  o as st,
  pl as ct,
  pn as lt,
  ry as ut,
  sm as F,
  ty as dt,
  u as ft,
  ut as pt,
  uy as I,
  vg as mt,
  vo as ht,
  wl as gt,
  yg as L,
  yt as _t,
} from "./remote-projects-app-shared-current-bundle";
import {
  initQueryCacheInvalidationRuntime as jt,
  useQueryCacheInvalidator as Ot,
} from "../runtime/query-client/query-cache-invalidation";
import {
  initUseStableCallback as Et,
  useStableCallback as St,
} from "../utils/use-stable-callback";
import {
  initScoreQueryMatchRuntime as Wa,
  scoreQueryMatch as ga,
} from "../utils/score-query-match";
import {
  initWorkspaceFileSearchRuntime as po,
  useWorkspaceFileSearch as no,
} from "../utils/use-workspace-file-search";
import {
  initUseOsInfoRuntime as ea,
  useOsInfo as Qi,
} from "../utils/use-os-info";
import {
  initUsePlatformRuntime as ma,
  usePlatform as da,
} from "../utils/use-platform";
import {
  loadLodashBaseEach as aa,
  loadLodashBaseFlatten as Ka,
  loadLodashBaseFor as na,
  loadLodashBaseOrderBy as ua,
  loadLodashBaseRest as $a,
  loadLodashDefineProperty as ha,
  loadLodashIsIterateeCall as eo,
  loadLodashOrderBy as to,
  loadLodashOverRest as Ja,
  loadLodashSetToString as Qa,
} from "./lodash-pull-request-helpers";
import {
  CONFIG_QUERY_STALE_TIME,
  CONFIG_REQUIREMENTS_QUERY_KEY,
  EFFECTIVE_CONFIG_QUERY_KEY,
  LAYERED_CONFIG_RESPONSE_QUERY_KEY,
  MCP_SERVERS_CONFIG_QUERY_KEY,
  MCP_SERVER_STATUS_QUERY_KEY,
  USER_CONFIG_QUERY_KEY,
  configRequirementsQueryOptions,
  findConfigOrigin,
  getConfigLayerFilePath,
  getUserConfigWriteTargetFromQueryClient,
  initConfigQueryAliasesRuntime,
  isReadOnlyConfigLayer,
  mcpServerStatusFullQueryOptions,
  mcpServerStatusToolsAndAuthQueryOptions,
  readConfigForHost,
  useAnalyticsEnabledQuery,
  useEffectiveConfigQuery,
  useLocalCustomAgents,
  useMcpResourceQuery,
  useMcpServersConfigQuery,
  useToggleMcpServerEnabledMutation,
  useWriteMcpServerConfigMutation,
  userConfigQueryOptions,
} from "./pull-request-new-thread-current-runtime/config-query-aliases";
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  R,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (i(),
      S(),
      v(),
      Ae(),
      c(),
      Ye(),
      Re(),
      oe(),
      ee(),
      (Mt = a(d, ({ get: e }) => F(e, `host_config`) ?? null)),
      (Nt = a(d, ({ get: e }) => [
        ...(F(e, `remote_ssh_connections`) ?? []),
        ...(F(e, `remote_wsl_connections`) ?? []),
        ...(F(e, `remote_control_connections`) ?? []),
      ])),
      (Pt = fe(d, `codex-home`, () => ({ staleTime: A.FIVE_SECONDS }))),
      (Ft = a(d, ({ get: e }) => e(Pt, void 0))),
      (It = fe(d, `home-directory`, () => ({ staleTime: A.FIVE_SECONDS }))),
      (Lt = _e(d, `active-workspace-roots`, {
        placeholderData: ge,
        staleTime: A.FIVE_SECONDS,
      })),
      (R = a(d, ({ get: e }) => {
        let t = e(Lt);
        return t.isPending
          ? !0
          : (t.data?.roots ?? []).length === 1 &&
              et(e, p.PROJECT_WRITABLE_ROOTS).isPending;
      })),
      (Rt = k(d, (e, { get: t }) =>
        pe({
          projectId: e,
          projectWritableRoots: ve(Fe(t, p.PROJECT_WRITABLE_ROOTS)),
          legacyRoot: l(e) ? e : null,
        }),
      )),
      (zt = a(d, ({ get: e }) => {
        let t = e(Lt).data?.roots ?? [];
        if (t.length !== 1) return t.filter(l);
        let n = t[0] ?? null;
        return n == null ? [] : e(Rt, n);
      })),
      (Bt = a(d, ({ get: e }) => {
        if (e(R)) return null;
        let t = e(zt);
        return t.length === 1 ? (t[0] ?? null) : null;
      })),
      (Vt = fe(d, `workspace-root-options`, () => ({
        placeholderData: ge,
        staleTime: A.INFINITE,
      }))),
      (Ht = _e(d, `workspace-root-options`, {
        params: { hostId: N },
        placeholderData: ge,
        staleTime: A.INFINITE,
      })),
      (Ut = a(d, ({ get: e }) => Fe(e, p.REMOTE_PROJECTS) ?? [])),
      (Wt = a(d, ({ get: e }) => {
        let t = e(Ut),
          n = Fe(e, p.ACTIVE_REMOTE_PROJECT_ID);
        return n == null ? null : (t.find((e) => e.id === n) ?? null);
      })),
      (Gt = a(d, ({ get: e }) => Fe(e, p.THREAD_PROJECT_ASSIGNMENTS))),
      (Kt = k(d, (e, { get: t }) => {
        let n = t(Mt);
        return n != null && e === n.id ? n : We(e, t(Nt));
      })));
  });
function Jt(e, t) {
  let n = (0, V.c)(11),
    r = t?.hostId ?? `local`,
    i = j(Bt),
    a = j(R),
    o = t?.useActiveWorkspaceRoot ?? r === `local`,
    s = e ?? (o ? i : null),
    c = (t?.enabled ?? !0) && !(e == null && o && a),
    l = E(),
    u;
  n[0] !== r || n[1] !== s
    ? ((u = [...H, r, s]), (n[0] = r), (n[1] = s), (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] !== r || n[4] !== l || n[5] !== s
    ? ((d = () => en(l, r, s)), (n[3] = r), (n[4] = l), (n[5] = s), (n[6] = d))
    : (d = n[6]);
  let f;
  return (
    n[7] !== c || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: u,
          queryFn: d,
          staleTime: A.FIVE_MINUTES,
          enabled: c,
          select: Yt,
        }),
        (n[7] = c),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    T(f)
  );
}
function Yt(e) {
  let { config: t, origins: n, layers: r } = e,
    i = xn(t);
  return {
    servers: i,
    configWriteTarget: yn({ layers: r, origins: n, keyPath: `mcp_servers` }),
    serverOrigins: bn({
      origins: n,
      rootKey: `mcp_servers`,
      childKeys: Object.keys(i),
      probeFields: [`enabled`, `command`, `url`],
    }),
  };
}
function Xt(e) {
  let t = (0, V.c)(6),
    n = e === void 0 ? !0 : e,
    r = E(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [...Cn, N]), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = () => z(r, N, null, !1)), (t[1] = r), (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = {
          queryKey: i,
          queryFn: a,
          staleTime: 1 / 0,
          enabled: n,
          select: Zt,
        }),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    T(o)
  );
}
function Zt(e) {
  let { config: t } = e;
  return t.analytics?.enabled !== !1;
}
function Qt(e, t) {
  let n = (0, V.c)(11),
    r = t?.hostId ?? `local`,
    i = j(Bt),
    a = j(R),
    o = t?.cwdMode !== `preserve-null` && e == null,
    s = t?.cwdMode === `preserve-null` ? (e ?? null) : (e ?? i),
    c = E(),
    l;
  n[0] !== r || n[1] !== s
    ? ((l = [...Tn, r, s]), (n[0] = r), (n[1] = s), (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== r || n[4] !== c || n[5] !== s
    ? ((u = () => en(c, r, s)), (n[3] = r), (n[4] = c), (n[5] = s), (n[6] = u))
    : (u = n[6]);
  let d = (t?.enabled ?? !0) && !(o && a),
    f;
  return (
    n[7] !== l || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: l,
          queryFn: u,
          staleTime: A.FIVE_MINUTES,
          enabled: d,
          select: $t,
        }),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    T(f)
  );
}
function $t(e) {
  let { config: t, origins: n, layers: r } = e;
  return { config: t, origins: n, layers: r };
}
function en(e, t, n) {
  return e.fetchQuery({
    queryKey: [...U, t, n],
    queryFn: async () => {
      try {
        return await z(e, t, n, !0);
      } catch (e) {
        return (
          o.error(`Failed to load layered config`, {
            safe: {},
            sensitive: { error: e },
          }),
          jn
        );
      }
    },
    staleTime: A.FIVE_MINUTES,
  });
}
function z(e, t, n, r) {
  return e.fetchQuery({
    queryKey: [...En, t, n, r],
    queryFn: () =>
      L(`read-config-for-host`, { hostId: t, includeLayers: r, cwd: n }),
    staleTime: 0,
  });
}
function tn({ authMethod: e, hostId: t }) {
  return [...wn, t, `auth`, e ?? null];
}
function nn({ authMethod: e, hostId: t }) {
  return {
    queryKey: tn({ authMethod: e, hostId: t }),
    queryFn: async () => {
      try {
        return await L(`get-config-requirements-for-host`, { hostId: t });
      } catch (e) {
        return (
          o.error(`Failed to load config requirements`, {
            safe: {},
            sensitive: { error: e },
          }),
          { requirements: null }
        );
      }
    },
    staleTime: A.FIVE_MINUTES,
  };
}
function rn(e, t) {
  let n = (0, V.c)(7),
    r = t === void 0 ? !0 : t,
    i = j(zt),
    a = j(R),
    o = e ?? i,
    s;
  n[0] === o ? (s = n[1]) : ((s = { roots: o }), (n[0] = o), (n[1] = s));
  let c = r && !(e == null && a),
    l;
  n[2] === c
    ? (l = n[3])
    : ((l = { enabled: c, staleTime: A.FIVE_MINUTES }), (n[2] = c), (n[3] = l));
  let u;
  return (
    n[4] !== s || n[5] !== l
      ? ((u = { params: s, queryConfig: l, select: an }),
        (n[4] = s),
        (n[5] = l),
        (n[6] = u))
      : (u = n[6]),
    de(`local-custom-agents`, u)
  );
}
function an(e) {
  return { roles: e.agents };
}
function on(e) {
  let t = (0, V.c)(8),
    n = e?.hostId ?? `local`,
    r = Ot(),
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (e) => {
        let { filePath: t, key: r, value: i } = e;
        return L(`batch-write-config-value`, {
          hostId: n,
          edits: [
            { keyPath: `mcp_servers.${r}`, value: i, mergeStrategy: `replace` },
          ],
          filePath: t,
          expectedVersion: null,
        });
      }),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] !== n || t[3] !== r
    ? ((a = async () => {
        await un(n, r);
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a))
    : (a = t[4]);
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = { mutationFn: i, onError: sn, onSuccess: a }),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    be(o)
  );
}
function sn(e) {
  o.error(`Failed to write MCP server config`, {
    safe: {},
    sensitive: { error: e },
  });
}
function cn(e) {
  let t = (0, V.c)(20),
    n = e?.hostId ?? `local`,
    r = E(),
    i = Ot(),
    a;
  t[0] === n ? (a = t[1]) : ((a = [...H, n]), (t[0] = n), (t[1] = a));
  let s = a,
    c;
  t[2] === n ? (c = t[3]) : ((c = [...U, n]), (t[2] = n), (t[3] = c));
  let l = c,
    u;
  t[4] === n
    ? (u = t[5])
    : ((u = (e) => {
        let { key: t, enabled: r } = e;
        return L(`write-config-value`, {
          hostId: n,
          keyPath: `mcp_servers.${t}.enabled`,
          value: r,
          mergeStrategy: `upsert`,
          filePath: null,
          expectedVersion: null,
        });
      }),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] !== l || t[7] !== s || t[8] !== r
    ? ((d = async (e) => {
        let { key: t, enabled: n } = e;
        await Promise.all([
          r.cancelQueries({ queryKey: s }),
          r.cancelQueries({ queryKey: l }),
        ]);
        let i = [...ln(r, s), ...ln(r, l)];
        for (let [e, a] of i) r.setQueryData(e, dn(a, t, n));
        return { previousConfigResponses: i };
      }),
      (t[6] = l),
      (t[7] = s),
      (t[8] = r),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === r
    ? (f = t[11])
    : ((f = (e, t, n) => {
        o.error(`Failed to update MCP server enabled state`, {
          safe: {},
          sensitive: { error: e },
        });
        for (let [e, t] of n?.previousConfigResponses ?? [])
          r.setQueryData(e, t);
      }),
      (t[10] = r),
      (t[11] = f));
  let p;
  t[12] !== n || t[13] !== i
    ? ((p = async () => {
        await un(n, i);
      }),
      (t[12] = n),
      (t[13] = i),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== u || t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = { mutationFn: u, onMutate: d, onError: f, onSettled: p }),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    be(m)
  );
}
function ln(e, t) {
  return e
    .getQueriesData({ queryKey: t })
    .flatMap(([e, t]) => (t == null ? [] : [[e, t]]));
}
async function un(e, t) {
  (await t([...U, e]), await Promise.all([t([...H, e]), t([...Dn, e])]));
}
function dn(e, t, n) {
  let r =
      e.config.mcp_servers == null && e.config.mcpServers != null
        ? `mcpServers`
        : `mcp_servers`,
    i = fn(e.config[r], t, n);
  return i
    ? { ...e, config: Object.assign(structuredClone(e.config), { [r]: i }) }
    : e;
}
function fn(e, t, n) {
  let r = An.safeParse(e);
  if (!r.success) return null;
  let i = An.safeParse(r.data[t]);
  return i.success ? { ...r.data, [t]: { ...i.data, enabled: n } } : null;
}
function pn(e, t) {
  return {
    queryKey: [...Dn, e, t],
    queryFn: async () =>
      L(`list-mcp-server-status`, {
        hostId: e,
        cursor: null,
        limit: 100,
        detail: t,
      }),
    staleTime: A.FIVE_MINUTES,
  };
}
function mn(e) {
  let t = (0, V.c)(14),
    { hostId: n, server: r, threadId: i, uri: a, enabled: s } = e,
    c = s === void 0 ? !0 : s,
    l = n ?? `local`,
    u = a ?? ``,
    d;
  t[0] !== l || t[1] !== r || t[2] !== u || t[3] !== i
    ? ((d = [...On, l, i, r, u]),
      (t[0] = l),
      (t[1] = r),
      (t[2] = u),
      (t[3] = i),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== l || t[6] !== r || t[7] !== i || t[8] !== a
    ? ((f = async () =>
        L(`read-mcp-resource`, {
          hostId: l,
          server: r,
          threadId: i,
          uri: a ?? ``,
        }).catch((e) => {
          throw (
            o.error(`Failed to read MCP resource`, {
              safe: { server: r, threadId: i, uri: a },
              sensitive: { error: e },
            }),
            e
          );
        })),
      (t[5] = l),
      (t[6] = r),
      (t[7] = i),
      (t[8] = a),
      (t[9] = f))
    : (f = t[9]);
  let p = c && a != null,
    m;
  return (
    t[10] !== d || t[11] !== f || t[12] !== p
      ? ((m = {
          queryKey: d,
          queryFn: f,
          staleTime: A.FIVE_MINUTES,
          enabled: p,
        }),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    T(m)
  );
}
function B(e) {
  return e.type === `user` ||
    e.type === `system` ||
    e.type === `legacyManagedConfigTomlFromFile`
    ? e.file
    : e.type === `project`
      ? `${e.dotCodexFolder}/config.toml`
      : null;
}
function hn(e) {
  return e == null
    ? !1
    : e.type === `mdm` ||
        e.type === `sessionFlags` ||
        e.type === `legacyManagedConfigTomlFromFile` ||
        e.type === `legacyManagedConfigTomlFromMdm`;
}
function gn(e, t, n = []) {
  let r = e?.[t] ?? null;
  if (r != null) return r;
  for (let r of n) {
    let n = e?.[`${t}.${r}`];
    if (n != null) return n;
  }
  return null;
}
async function _n(e, t) {
  let { layers: n } = await z(e, t, null, !0);
  return vn(n);
}
function vn(e) {
  let t = e?.find((e) => e.name.type === `user`) ?? null;
  if (!t) return null;
  let n = B(t.name);
  return n ? { filePath: n, expectedVersion: t.version } : null;
}
function yn({ layers: e, origins: t, keyPath: n, probeFields: r = [] }) {
  let i = e?.find((e) => e.name.type === `user`) ?? null;
  if (i) {
    let e = B(i.name);
    return e ? { filePath: e, expectedVersion: i.version } : null;
  }
  let a = gn(t, n, r);
  if (a) {
    if (hn(a.name)) return null;
    if (a.name.type === `system`) return vn(e);
    let t = B(a.name);
    return t ? { filePath: t, expectedVersion: a.version } : vn(e);
  }
  let o = e?.[0] ?? null;
  if (o) {
    let e = B(o.name);
    return e ? { filePath: e, expectedVersion: o.version } : null;
  }
  return null;
}
function bn({ origins: e, rootKey: t, childKeys: n, probeFields: r }) {
  let i = {};
  return (
    n.forEach((n) => {
      let a = `${t}.${n}`;
      i[n] =
        e?.[a] ?? r.map((t) => e?.[`${a}.${t}`]).find(Boolean) ?? null ?? null;
    }),
    i
  );
}
function xn(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return {};
  let t = e,
    n = t.mcp_servers ?? t.mcpServers;
  if (typeof n != `object` || !n || Array.isArray(n)) return {};
  let r = Object.entries(n),
    i = {};
  return (
    r.forEach(([e, t]) => {
      if (typeof t == `object` && t && !Array.isArray(t)) {
        let n = t;
        i[e] = {
          ...n,
          name: typeof n.name == `string` && n.name.length > 0 ? n.name : e,
        };
        return;
      }
      i[e] = { name: e };
    }),
    i
  );
}
var V,
  H,
  Sn,
  Cn,
  wn,
  Tn,
  U,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    ((V = D()),
      i(),
      S(),
      ye(),
      mt(),
      jt(),
      c(),
      qt(),
      Re(),
      b(),
      oe(),
      ee(),
      (H = [`config`, `mcp`, `servers`]),
      (Sn = [`config`, `user`]),
      (Cn = [`config`, `analytics`]),
      (wn = [`config`, `requirements`]),
      (Tn = [`config`, `effective`]),
      (U = [`config`, `layered-response`]),
      (En = [`config`, `read-response`]),
      (Dn = [`mcp`, `servers`, `status`]),
      (On = [`mcp`, `resource`]),
      (kn = 1e7),
      (An = le(O(), we())),
      (jn = {
        config: {
          model: null,
          review_model: null,
          model_context_window: null,
          model_auto_compact_token_limit: null,
          model_auto_compact_token_limit_scope: null,
          model_provider: null,
          approval_policy: null,
          approvals_reviewer: null,
          sandbox_mode: null,
          sandbox_workspace_write: null,
          forced_chatgpt_workspace_id: null,
          forced_login_method: null,
          web_search: null,
          tools: null,
          profile: null,
          profiles: {},
          instructions: null,
          developer_instructions: null,
          compact_prompt: null,
          model_reasoning_effort: null,
          model_reasoning_summary: null,
          service_tier: null,
          model_verbosity: null,
          analytics: null,
          mcp_servers: {},
          apps: {
            _default: {
              enabled: !0,
              approvals_reviewer: null,
              destructive_enabled: !1,
              open_world_enabled: !1,
              default_tools_approval_mode: null,
              default_tools_enabled: null,
              tools: null,
            },
          },
          desktop: null,
        },
        origins: {},
        layers: null,
      }),
      (Mn = m(d, (e, { queryClient: t }) => ({
        queryKey: [...Sn, e],
        queryFn: async () => {
          try {
            return await z(t, e, null, !0);
          } catch (e) {
            return (
              o.error(`Failed to load config`, {
                safe: {},
                sensitive: { error: e },
              }),
              jn
            );
          }
        },
        staleTime: A.FIVE_MINUTES,
        select: ({ config: e, layers: t }) => ({
          config: e,
          configWriteTarget: vn(t),
        }),
      }))),
      (Nn = m(d, ({ authMethod: e, hostId: t }) =>
        nn({ authMethod: e, hostId: t }),
      )),
      (Pn = m(d, (e) => pn(e, `full`))),
      (Fn = m(d, (e) => pn(e, `toolsAndAuthOnly`))));
  }),
  Ln,
  Rn = e(() => {
    (rt(),
      Ie(),
      Re(),
      (Ln = class {
        constructor(e) {
          this.scope = e;
        }
        addManager(e) {
          let t = e.getHostId();
          (this.scope.set(pt, (e) => (e.includes(t) ? e : [...e, t])),
            this.scope.set(st, t, e),
            this.scope.set(tt, t, ct(e)),
            this.scope.set(Xe, (e) => e + 1));
        }
        addRegistryCallback(e) {
          let t = !1;
          return this.scope.watch((n) => {
            (n.get(Xe), t ? e() : (t = !0));
          });
        }
        deleteManager(e) {
          (this.scope.set(pt, (t) => t.filter((t) => t !== e)),
            this.scope.set(tt, e, null),
            this.scope.set(st, e, null),
            _t(this.scope, {
              error: null,
              hostId: e,
              source: `registry_delete_manager`,
              state: `disconnected`,
            }),
            this.scope.set(Xe, (e) => e + 1));
        }
        getAll() {
          return this.scope.get(ft);
        }
        getDefault() {
          return this.scope.get(Ve);
        }
        getForConversationId(e) {
          let t = this.getMaybeForConversationId(e);
          if (t != null) return t;
          throw Error(
            `No AppServerManager registered for conversationId: ${e}`,
          );
        }
        getForHostId(e) {
          return this.scope.get(pt).includes(e) ? this.scope.get(tt, e) : null;
        }
        getImplForHostId(e) {
          return this.scope.get(pt).includes(e) ? this.scope.get(st, e) : null;
        }
        getForHostIdOrThrow(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          throw Error(`No AppServerManager registered for hostId: ${e}`);
        }
        getForHostIdOrThrowWhenDefaultHost(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          if (e === `local`)
            throw Error(`No AppServerManager registered for hostId: ${e}`);
          return null;
        }
        getMaybeForConversationId(e) {
          return Oe(this.scope, e);
        }
        notifyRegistryChanged() {
          this.scope.set(Xe, (e) => e + 1);
        }
      }));
  });
function zn() {
  let e = new URL(`/auth/login`, window.location.origin);
  return (
    e.searchParams.set(
      `next`,
      `${window.location.pathname}${window.location.search}${window.location.hash}`,
    ),
    e.toString()
  );
}
function Bn() {
  return Hn() ? (Vn(), !0) : !1;
}
function Vn() {
  Wn || ((Wn = !0), window.location.assign(zn()));
}
function Hn() {
  let e = window.location.hostname.toLowerCase();
  return (
    e === `chatgpt.com` ||
    e.endsWith(`.chatgpt.com`) ||
    e === `chatgpt-staging.com` ||
    e.endsWith(`.chatgpt-staging.com`)
  );
}
var Un,
  Wn,
  Gn = e(() => {
    (ye(),
      (Un = xe([
        `free`,
        `go`,
        `plus`,
        `pro`,
        `prolite`,
        `team`,
        `self_serve_business_usage_based`,
        `business`,
        `enterprise_cbp_usage_based`,
        `enterprise_cbp_automation`,
        `enterprise`,
        `edu`,
        `unknown`,
      ])),
      f({
        accessToken: O(),
        accountId: O(),
        accountUserId: O().nullable().default(null),
        userId: O().nullable(),
        email: O().nullable(),
        planType: Un,
        computeResidency: O().nullable().default(null),
      }),
      (Wn = !1));
  });
async function Kn({ clientId: e }) {
  await W(() =>
    M.safeDelete(`/wham/remote/control/clients/{client_id}`, {
      parameters: { path: { client_id: e } },
    }),
  );
}
async function qn({ clientId: e, manualPairingCode: t }) {
  return W(() =>
    M.safePost(`/wham/remote/control/client/pair`, {
      requestBody: { client_id: e, manual_pairing_code: t },
    }),
  );
}
async function Jn() {
  return (await W(() => M.safeGet(`/wham/remote/control/mfa_requirement`)))
    .requirement;
}
async function Yn() {
  return tr.parse(await M.safeGet(`/accounts/mfa_info`)).mfa_enabled_v2;
}
async function Xn(e = null) {
  let t = await W(() =>
    M.safeGet(`/wham/remote/control/clients`, {
      parameters: { query: { cursor: e, limit: er } },
    }),
  );
  return t.items.some($n) ? !0 : t.cursor == null ? !1 : Xn(t.cursor);
}
async function Zn() {
  return Qn(null);
}
async function Qn(e) {
  let t = await W(() =>
      M.safeGet(`/wham/remote/control/clients`, {
        parameters: { query: { cursor: e, limit: er } },
      }),
    ),
    n = t.items.filter($n);
  return t.cursor == null ? n : n.concat(await Qn(t.cursor));
}
function $n(e) {
  return e.enrollment_status !== `pending_enrollment`;
}
async function W(e) {
  try {
    return await e();
  } catch (e) {
    throw e instanceof ne
      ? e.status === 404
        ? new rr()
        : e.status === 403
          ? new ir(e.message)
          : e.status === 401
            ? (Bn(),
              new nr(
                `ChatGPT auth is required to load remote control environments.`,
              ))
            : Error(`Remote control request failed (${e.status}): ${e.message}`)
      : e;
  }
}
var er,
  tr,
  nr,
  rr,
  ir,
  ar = e(() => {
    (v(),
      ye(),
      Gn(),
      Ne(),
      he(),
      (er = 100),
      (tr = f({ mfa_enabled_v2: ie() })),
      (nr = class extends Error {}),
      (rr = class extends Error {}),
      (ir = class extends Error {}));
  });
async function or(
  e,
  { appServerHostId: t, includeBrowserClients: n = !0 } = {},
) {
  let [r, i] = await Promise.all([
      n && t == null ? Zn() : [],
      e == null ? [] : cr(t ?? `local`, e),
    ]),
    a = new Map();
  for (let e of r) a.set(e.client_id, lr(e));
  for (let e of i) a.set(e.clientId, e);
  return Array.from(a.values());
}
async function sr(e) {
  switch (e.revokeTarget.type) {
    case `browser`:
      await Kn({ clientId: e.clientId });
      return;
    case `app-server`:
      await L(`revoke-remote-control-client-for-host`, {
        hostId: e.revokeTarget.hostId,
        environmentId: e.revokeTarget.environmentId,
        clientId: e.clientId,
      });
      return;
  }
}
async function cr(e, t, n = null) {
  let r = await L(`list-remote-control-clients-for-host`, {
      hostId: e,
      environmentId: t,
      cursor: n,
      limit: dr,
      order: `desc`,
    }),
    i = r.data.map((n) => ur(n, e, t));
  return r.nextCursor == null ? i : i.concat(await cr(e, t, r.nextCursor));
}
function lr(e) {
  return {
    clientId: e.client_id,
    displayName: e.display_name ?? null,
    deviceType: e.device_type ?? null,
    platform: e.platform ?? null,
    deviceModel: e.device_model ?? null,
    lastSeenAt: e.last_seen_at ?? null,
    revokeTarget: { type: `browser` },
  };
}
function ur(e, t, n) {
  return {
    clientId: e.clientId,
    displayName: e.displayName,
    deviceType: e.deviceType,
    platform: e.platform,
    deviceModel: e.deviceModel,
    lastSeenAt:
      e.lastSeenAt == null
        ? null
        : new Date(Number(e.lastSeenAt) * 1e3).toISOString(),
    revokeTarget: { type: `app-server`, environmentId: n, hostId: t },
  };
}
var dr,
  fr = e(() => {
    (ar(), mt(), ot(), (dr = 100));
  });
function pr(e) {
  return ce({
    queryKey: vr,
    queryFn: () => mr(e),
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    retry: !1,
    staleTime: A.INFINITE,
  });
}
async function mr(e) {
  let t = e.query.snapshot(Sr);
  if (
    (await t.invalidate({ exact: !0, refetchType: `none` }),
    (await t.fetch()) !== `required`)
  )
    return !1;
  let n = e.query.snapshot(Cr);
  return (
    await n.invalidate({ exact: !0, refetchType: `none` }),
    !(await n.fetch())
  );
}
function hr(e) {
  return Number(e) * 1e3;
}
var gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er = e(() => {
    (i(),
      S(),
      ar(),
      Ze(),
      mt(),
      fr(),
      c(),
      Re(),
      nt(),
      oe(),
      (gr = 3e4),
      (_r = 6e4),
      (vr = [`codex-mobile-mfa-setup-required`]),
      (yr = `2055603567`),
      (br = `3936985709`),
      (xr = [`remote-control-server-pairing`]),
      (Sr = g(d, () => ({
        queryKey: [`remote-control-mfa-requirement`],
        queryFn: Jn,
        retry: !1,
        staleTime: gr,
      }))),
      (Cr = g(d, ({ get: e }) => ({
        enabled: e(Sr).data === `required`,
        queryKey: [`remote-control-mfa-enabled`],
        queryFn: Yn,
        refetchOnWindowFocus: `always`,
        staleTime: 0,
      }))),
      (wr = g(d, ({ get: e }) => {
        let t = e(I, `2055603567`),
          n = e(it, `local`)?.environmentId ?? null;
        return {
          enabled: e(lt, `local`) && (!t || n != null),
          queryKey: [`codex-mobile-setup-resume-client`, t, n],
          queryFn: async () =>
            t ? (n == null ? !1 : (await cr(N, n)).length > 0) : Xn(),
          staleTime: 0,
        };
      })),
      (Tr = m(
        d,
        ({ hostId: e, openId: t }, { get: n, scope: r }) => ({
          enabled: n(I, `2055603567`) && !n(I, `3936985709`) && n(lt, e),
          queryKey: [...xr, e, t],
          queryFn: async () => (
            await Ge(r, e),
            L(`start-remote-control-pairing-for-host`, {
              hostId: e,
              manualCode: !0,
            })
          ),
          retry: !1,
          gcTime: 0,
          staleTime: (e) => {
            let t = e.state.data?.expiresAt;
            return t == null ? 0 : Math.max(0, hr(t) - e.state.dataUpdatedAt);
          },
          refetchInterval: (e) => {
            let t = e.state.data?.expiresAt;
            return t == null ||
              e.state.fetchStatus === `fetching` ||
              e.state.error != null
              ? !1
              : Math.max(1, hr(t) - Date.now() - _r);
          },
        }),
        { key: ({ hostId: e, openId: t }) => `${e}:${t}` },
      )));
  });
function Dr({ remoteControlConnections: e }) {
  let t = new Map(),
    n = [];
  for (let r of e) {
    if (r.installationId == null) {
      n.push(r);
      continue;
    }
    let e = t.get(r.installationId);
    (e == null ||
      (e.clientType !== `CODEX_DESKTOP_APP` &&
        r.clientType === `CODEX_DESKTOP_APP`)) &&
      t.set(r.installationId, r);
  }
  return [...t.values(), ...n];
}
function Or({
  addedRemoteControlEnvIds: e,
  oneToOnePairingInAppEnabled: t,
  remoteControlConnections: n,
  remoteSshConnections: r,
  remoteWslConnections: i,
}) {
  return [
    ...r,
    ...i,
    ...kr({
      addedRemoteControlEnvIds: e,
      oneToOnePairingInAppEnabled: t,
      remoteControlConnections: n,
    }),
  ];
}
function kr({
  addedRemoteControlEnvIds: e,
  oneToOnePairingInAppEnabled: t,
  remoteControlConnections: n,
}) {
  return t
    ? Dr({ remoteControlConnections: n })
    : Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: n });
}
function Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: t }) {
  let n = new Set(e),
    r = new Set(
      t.flatMap((e) =>
        n.has(e.envId) && e.installationId != null ? [e.installationId] : [],
      ),
    );
  return Dr({ remoteControlConnections: t }).filter(
    (e) =>
      n.has(e.envId) || (e.installationId != null && r.has(e.installationId)),
  );
}
function jr({ addedRemoteControlEnvIds: e, remoteControlConnections: t }) {
  let n = Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: t }),
    r = new Set(n.map((e) => e.envId)),
    i = new Set(
      n.flatMap((e) => (e.installationId == null ? [] : [e.installationId])),
    );
  return Dr({ remoteControlConnections: t }).filter(
    (e) =>
      !r.has(e.envId) && (e.installationId == null || !i.has(e.installationId)),
  );
}
var Mr = e(() => {}),
  Nr,
  Pr,
  Fr = e(() => {
    (S(),
      v(),
      Ae(),
      c(),
      Ye(),
      nt(),
      Er(),
      Mr(),
      (Nr = a(d, ({ get: e }) => {
        let t = F(e, `remote_ssh_connections`),
          n = F(e, `remote_wsl_connections`);
        if (t != null)
          return Or({
            addedRemoteControlEnvIds: Fe(e, p.ADDED_REMOTE_CONTROL_ENV_IDS),
            oneToOnePairingInAppEnabled: e(I, yr),
            remoteSshConnections: t ?? [],
            remoteWslConnections: n ?? [],
            remoteControlConnections: F(e, `remote_control_connections`) ?? [],
          });
      })),
      (Pr = a(
        d,
        ({ get: e }) =>
          F(e, `remote_ssh_connections`) == null ||
          F(e, `remote_control_connections`) == null,
      )));
  });
function Ir() {
  let e = (0, Br.c)(3),
    { data: t } = h(Mn, j(Ee)),
    n = ut(`4114442250`);
  if (t?.config[`features.remote_connections`] === !0) return !0;
  let r = t?.config.features;
  if (typeof r != `object` || !r || Array.isArray(r)) return n;
  let i;
  return (
    e[0] !== r || e[1] !== n
      ? ((i =
          Object.getOwnPropertyDescriptor(r, `remote_connections`)?.value ===
            !0 || n),
        (e[0] = r),
        (e[1] = n),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
function Lr() {
  return ut(`1042620455`);
}
function Rr() {
  let e = j(Nr) ?? [];
  return {
    remoteConnections: e,
    enabledRemoteHostIdSet: new Set(e.flatMap(zr)),
  };
}
function zr(e) {
  return e.autoConnect ? [e.hostId] : [];
}
var Br,
  Vr = e(() => {
    ((Br = D()), S(), Ie(), In(), dt(), Fr());
  });
function Hr(e, t) {
  e.set(ai, t);
}
function Ur(e, t) {
  e.set(oi, t);
}
function Wr(e, t) {
  e.set(si, t);
}
function Gr(e, t, n) {
  let r = e.get(yi);
  r[t] !== n && e.set(yi, { ...r, [t]: n });
}
function Kr(e, t) {
  e.set(li, t);
}
function qr(e, t, n = null) {
  (e.get(K) === t && e.get(bi) === n) || (e.set(K, t), e.set(bi, n));
}
function Jr(e, t, n) {
  e.set(di, { ...e.get(_i), [t]: n });
}
function Yr(e, t, n) {
  e.set(G, t, n);
}
function Xr(e, t) {
  e.set(ui, t);
}
function Zr(e, t, n, r) {
  (r.forEach((n) => {
    Yr(e, `codex:${n}`, t[n] !== !0);
  }),
    e.set(vi, n));
}
function Qr(e, t) {
  (Yr(e, `codex:${t}`, e.get(G, `codex:${t}`) === !1), e.set(vi, []));
}
function $r(e, { importedProjectRoots: t }) {
  if (t.length === 0) return;
  let [n, ...r] = t;
  (Yr(e, `codex:${n}`, !0),
    r.forEach((t) => {
      Yr(e, `codex:${t}`, !1);
    }),
    e.set(vi, []));
}
function ei(e, t, n) {
  let r = e.get(q);
  if (n === !!r[t]) return;
  if (n) {
    e.set(q, { ...r, [t]: !0 });
    return;
  }
  let i = { ...r };
  (delete i[t], e.set(q, i));
}
var ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  G,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  K,
  bi,
  q,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di = e(() => {
    (S(),
      c(),
      He(),
      $e(),
      (ti = `codex`),
      (ni = `project`),
      (ri = { chats: !1, cloud: !1, pinned: !1, threads: !1 }),
      (ii = { chatgpt: 0, codex: 0, work: 0 }),
      (ai = P(`sidebar-organize-mode-v1`, void 0)),
      (oi = P(`sidebar-keep-projects-in-recent-v1`, !0)),
      (si = P(`projectless-sidebar-chats-first-v1`, !1)),
      (ci = P(`electron-sidebar-mode-v1`, ti)),
      (li = P(`thread-sort-key`, De)),
      (G = qe((e) => `sidebar-project-expanded-v1-${e}`, null)),
      (ui = P(`sidebar-project-list-expanded-v1`, !1)),
      (di = P(`sidebar-collapsed-sections-v1`, ri)),
      (fi = a(d, ({ get: e }) => e(ai) ?? ni)),
      (pi = a(d, ({ get: e }) => e(oi) ?? !0)),
      (mi = a(d, ({ get: e }) => e(si) ?? !1)),
      (hi = a(d, ({ get: e }) => e(ci) ?? ti)),
      (gi = a(d, ({ get: e }) => e(li) ?? `updated_at`)),
      (_i = a(d, ({ get: e }) => {
        let t = e(di);
        return t == null ? ri : { ...ri, ...t };
      })),
      (vi = y(d, [])),
      (yi = y(d, ii)),
      (K = y(d, null)),
      (bi = y(d, null)),
      (q = y(d, {})),
      (xi = k(d, (e, { get: t }) => t(K) === e)),
      (Si = k(d, ({ locationId: e, threadKey: t }, { get: n }) => {
        if (n(K) !== t) return !1;
        let r = n(bi);
        return r == null || e == null || r === e;
      })),
      (Ci = k(d, (e, { get: t }) => t(G, `codex:${e}`) === !1)),
      (wi = k(d, (e, { get: t }) =>
        Object.fromEntries(
          e.filter((e) => t(G, `codex:${e}`) === !1).map((e) => [e, !0]),
        ),
      )),
      (Ti = k(d, (e, { get: t }) => t(q)[e] === !0)),
      (Ei = k(d, (e, { get: t }) => t(_i)[e])));
  });
function Oi({ appServerRegistry: e, enabledRemoteHostIds: t }) {
  let n = e.getDefault().getHostId();
  return e
    .getAll()
    .filter((e) => (e.getHostId() === n ? !0 : t.has(e.getHostId())));
}
function ki(e, t) {
  let n = t.getDefault().getHostId();
  return t.getAll().filter((t) => {
    let r = t.getHostId();
    if (r === n) return !0;
    let { error: i, state: a } = ke(e, r);
    return a === `connected` || i?.code === `login-required`;
  });
}
function Ai(e, t) {
  return L(`refresh-recent-conversations-for-host`, {
    hostId: e,
    sortKey: gt(t),
  })
    .then(() => !0)
    .catch(
      (n) => (
        o.warning(`recent_conversations_refresh_failed`, {
          safe: { sortKey: t },
          sensitive: { error: n, hostId: e },
        }),
        !1
      ),
    );
}
function ji(e) {
  return () => {
    for (let t of e) t();
  };
}
function Mi({ appServerRegistry: e, onStoreChange: t, subscribeToManager: n }) {
  let r = new Map(),
    i = () => {
      let i = e.getAll(),
        a = new Set(i.map((e) => e.getHostId()));
      for (let [e, { unsubscribe: t }] of r) a.has(e) || (t(), r.delete(e));
      for (let e of i) {
        let i = e.getHostId(),
          a = r.get(i);
        a?.manager !== e &&
          (a?.unsubscribe(), r.set(i, { manager: e, unsubscribe: n(e, t) }));
      }
    };
  return (
    i(),
    ji([
      e.addRegistryCallback(() => {
        (i(), t());
      }),
      () => {
        for (let { unsubscribe: e } of r.values()) e();
      },
    ])
  );
}
function Ni(e, t) {
  return Mi({
    appServerRegistry: e,
    onStoreChange: t,
    subscribeToManager: (e, t) =>
      ji([
        e.addAnyConversationCallback(t),
        e.addAnyConversationMetaCallback(t),
      ]),
  });
}
function Pi({ appServerRegistry: e, enabledRemoteHostIds: t, sortKey: n }) {
  return Oi({ appServerRegistry: e, enabledRemoteHostIds: t })
    .flatMap((e) => e.getRecentConversations())
    .sort((e, t) => {
      switch (n) {
        case `created_at`:
          return t.createdAt - e.createdAt;
        case `updated_at`:
          return (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt);
      }
    });
}
async function Fi({
  scope: e,
  appServerRegistry: t,
  enabledRemoteHostIds: n,
  sortKey: r,
}) {
  if (
    !(await Promise.all(ki(e, t).map((e) => Ai(e.getHostId(), r)))).includes(!0)
  )
    throw Error(`Failed to refresh recent conversations`);
  return Pi({ appServerRegistry: t, enabledRemoteHostIds: n, sortKey: r });
}
function Ii({
  scope: e,
  appServerRegistry: t,
  sortKey: n,
  refreshesInFlightHostIds: r,
}) {
  for (let i of ki(e, t)) {
    let e = i.getHostId();
    i.hasFetchedRecentConversations ||
      r.has(e) ||
      (r.add(e),
      Ai(e, n).finally(() => {
        r.delete(e);
      }));
  }
}
function Li(e) {
  return new Set(JSON.parse(e));
}
function Ri(e) {
  return JSON.stringify(Array.from(e).sort((e, t) => e.localeCompare(t)));
}
function zi() {
  let e = (0, J.c)(5),
    t = _(d),
    n;
  e[0] === t ? (n = e[1]) : ((n = () => new Ln(t)), (e[0] = t), (e[1] = n));
  let [r] = (0, Y.useState)(n),
    i,
    a;
  return (
    e[2] === r
      ? ((i = e[3]), (a = e[4]))
      : ((i = (e) => r.addRegistryCallback(e)),
        (a = () => r),
        (e[2] = r),
        (e[3] = i),
        (e[4] = a)),
    (0, Y.useSyncExternalStore)(i, a)
  );
}
function Bi(e) {
  let t = (0, J.c)(5),
    n = zi(),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => n.addRegistryCallback(e)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== e
      ? ((i = () => n.getForHostId(e)), (t[2] = n), (t[3] = e), (t[4] = i))
      : (i = t[4]),
    (0, Y.useSyncExternalStore)(r, i)
  );
}
function Vi(e) {
  let t = Bi(e);
  if (t == null) throw Error(`AppServerManager for host ${e} not found`);
  return t;
}
function Hi(e) {
  let t = (0, J.c)(6),
    n = h(Je, e),
    r = zi(),
    i;
  t[0] !== r || t[1] !== e
    ? ((i = (t) => (e == null ? r.addRegistryCallback(t) : Ni(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== r || t[4] !== e
    ? ((o = () => (e == null ? r.getDefault() : r.getForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = o))
    : (o = t[5]);
  let s = (0, Y.useSyncExternalStore)(a, o);
  return n ?? s;
}
function Ui(e) {
  let t = (0, J.c)(6),
    n = h(Je, e),
    r = zi(),
    i;
  t[0] !== r || t[1] !== e
    ? ((i = (t) => (e == null ? Wi : Ni(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== r || t[4] !== e
    ? ((o = () => (e == null ? null : r.getMaybeForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = o))
    : (o = t[5]);
  let s = (0, Y.useSyncExternalStore)(a, o);
  return n ?? s;
}
function Wi() {}
function Gi(e) {
  let t = Vi(N);
  return Ui(e) ?? t;
}
function Ki() {
  return Ji(`recent-conversations`);
}
function qi() {
  return Ji(`recent-conversations-meta`);
}
function Ji(e) {
  let t = (0, J.c)(23),
    n = _(d),
    r = zi(),
    { enabledRemoteHostIdSet: i } = Rr(),
    a;
  t[0] === i ? (a = t[1]) : ((a = Ri(i)), (t[0] = i), (t[1] = a));
  let o = a,
    s = h(I, `12346831`),
    c = j(gi),
    l = s ? De : c,
    u = E(),
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = new Set()), (t[2] = f))
    : (f = t[2]);
  let p = (0, Y.useRef)(f),
    m,
    g;
  (t[3] !== r ||
  t[4] !== o ||
  t[5] !== u ||
  t[6] !== e ||
  t[7] !== n ||
  t[8] !== l
    ? ((m = () => {
        let t = () => {
          let t = Li(o);
          (u.setQueryData(
            [e, l, o],
            Pi({ appServerRegistry: r, enabledRemoteHostIds: t, sortKey: l }),
          ),
            Ii({
              scope: n,
              appServerRegistry: r,
              sortKey: l,
              refreshesInFlightHostIds: p.current,
            }));
        };
        return (
          t(),
          Mi({
            appServerRegistry: r,
            onStoreChange: t,
            subscribeToManager: (t, n) => {
              switch (e) {
                case `recent-conversations`:
                  return t.addAnyConversationCallback(n);
                case `recent-conversations-meta`:
                  return t.addAnyConversationMetaCallback(n);
              }
            },
          })
        );
      }),
      (g = [r, o, u, e, n, l]),
      (t[3] = r),
      (t[4] = o),
      (t[5] = u),
      (t[6] = e),
      (t[7] = n),
      (t[8] = l),
      (t[9] = m),
      (t[10] = g))
    : ((m = t[9]), (g = t[10])),
    (0, Y.useEffect)(m, g));
  let v;
  t[11] !== o || t[12] !== e || t[13] !== l
    ? ((v = [e, l, o]), (t[11] = o), (t[12] = e), (t[13] = l), (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== r || t[16] !== o || t[17] !== n || t[18] !== l
    ? ((y = async () =>
        Fi({
          scope: n,
          appServerRegistry: r,
          enabledRemoteHostIds: Li(o),
          sortKey: l,
        })),
      (t[15] = r),
      (t[16] = o),
      (t[17] = n),
      (t[18] = l),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== v || t[21] !== y
      ? ((b = {
          queryKey: v,
          staleTime: A.INFINITE,
          structuralSharing: Yi,
          queryFn: y,
        }),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]),
    T(b)
  );
}
function Yi(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((e, n) => e === t[n])
    ? e
    : t;
}
function Xi(e) {
  let t = (0, J.c)(3),
    n = Vi(e === void 0 ? N : e),
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = (e) => n.addConfigNoticeCallback(e)),
        (i = () => n.getConfigNotices()),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i)),
    (0, Y.useSyncExternalStore)(r, i)
  );
}
var J,
  Y,
  Zi = e(() => {
    ((J = D()),
      i(),
      S(),
      (Y = t(w(), 1)),
      Rn(),
      Ie(),
      mt(),
      Vr(),
      c(),
      Re(),
      Di(),
      nt(),
      He(),
      b(),
      oe());
  });
export {
  Ei as $,
  useMcpResourceQuery as $t,
  wi as A,
  Gn as At,
  Wr as B,
  configRequirementsQueryOptions as Bt,
  Bi as C,
  Tr as Ct,
  qi as D,
  nr as Dt,
  Ki as E,
  sr as Et,
  vi as F,
  LAYERED_CONFIG_RESPONSE_QUERY_KEY as Ft,
  Gr as G,
  isReadOnlyConfigLayer as Gt,
  $r as H,
  getUserConfigWriteTargetFromQueryClient as Ht,
  qr as I,
  CONFIG_QUERY_STALE_TIME as It,
  hi as J,
  findConfigOrigin as Jt,
  Kr as K,
  mcpServerStatusToolsAndAuthQueryOptions as Kt,
  Jr as L,
  MCP_SERVERS_CONFIG_QUERY_KEY as Lt,
  Di as M,
  Rn as Mt,
  pi as N,
  CONFIG_REQUIREMENTS_QUERY_KEY as Nt,
  K as O,
  qn as Ot,
  mi as P,
  EFFECTIVE_CONFIG_QUERY_KEY as Pt,
  yi as Q,
  useMcpServersConfigQuery as Qt,
  ei as R,
  MCP_SERVER_STATUS_QUERY_KEY as Rt,
  Gi as S,
  St as Sn,
  Sr as St,
  zi as T,
  or as Tt,
  Hr as U,
  getConfigLayerFilePath as Ut,
  Zr as V,
  readConfigForHost as Vt,
  Xr as W,
  initConfigQueryAliasesRuntime as Wt,
  ai as X,
  useLocalCustomAgents as Xt,
  fi as Y,
  useAnalyticsEnabledQuery as Yt,
  ui as Z,
  useEffectiveConfigQuery as Zt,
  ea as _,
  Vt as _n,
  wr as _t,
  $a as a,
  zt as an,
  Vr as at,
  Xi as b,
  Ot as bn,
  mr as bt,
  Ka as c,
  Ft as cn,
  Lr as ct,
  ha as d,
  qt as dn,
  Nr as dt,
  useToggleMcpServerEnabledMutation as en,
  xi as et,
  ma as f,
  Rt as fn,
  jr as ft,
  na as g,
  Gt as gn,
  br as gt,
  aa as h,
  Wt as hn,
  yr as ht,
  eo as i,
  R as in,
  Qr as it,
  q as j,
  Ln as jt,
  bi as k,
  ar as kt,
  Wa as l,
  It as ln,
  Fr as lt,
  ua as m,
  Ut as mn,
  Mr as mt,
  no as n,
  userConfigQueryOptions as nn,
  Ti as nt,
  Qa as o,
  Lt as on,
  Rr as ot,
  da as p,
  Nt as pn,
  kr as pt,
  Ci as q,
  mcpServerStatusFullQueryOptions as qt,
  to as r,
  Bt as rn,
  gi as rt,
  Ja as s,
  Pt as sn,
  Ir as st,
  po as t,
  useWriteMcpServerConfigMutation as tn,
  Si as tt,
  ga as u,
  Kt as un,
  Pr as ut,
  Qi as v,
  Ht as vn,
  pr as vt,
  Vi as w,
  fr as wt,
  Hi as x,
  Et as xn,
  Cr as xt,
  Zi as y,
  jt as yn,
  Er as yt,
  Ur as z,
  USER_CONFIG_QUERY_KEY as zt,
};
