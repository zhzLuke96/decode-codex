import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  BA as n,
  Fq as r,
  GD as i,
  I2 as a,
  KJ as o,
  L2 as s,
  LB as c,
  Mq as l,
  Nq as u,
  Pq as d,
  WA as f,
  WD as p,
  _0 as m,
  _Y as h,
  a as g,
  aJ as _,
  cY as v,
  dJ as y,
  eJ as ee,
  fJ as te,
  gD as ne,
  k2 as re,
  mD as ie,
  mY as ae,
  n2 as b,
  nJ as x,
  o as oe,
  qJ as se,
  rJ as S,
  sY as C,
  t2 as ce,
  tJ as w,
  x0 as le,
  yY as ue,
  zB as de,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  Mi as fe,
  Yl as pe,
  fr as me,
  gr as he,
  hr as ge,
  ji as _e,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  Br as ve,
  Lr as ye,
} from "./app-initial~app-main~projects-index-page~remote-conversation-page-THP8fcuf.js";
function be(e) {
  return [ee, `gh-pr-search`, ...T(e)];
}
function T(e) {
  let t = ye(e);
  return [`account`, t.hostId, t.hostname, t.login];
}
function xe(e) {
  if (e.status === `not-found`) throw Error(`Pull request not found`);
  if (e.canonical !== !0)
    throw Error(`GitHub returned an invalid canonical pull request`);
  return e;
}
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N = e(() => {
    (m(),
      v(),
      te(),
      _(),
      ve(),
      (E = 50),
      (D = null),
      (O = S(C, `gh-current-user`, (e) => ({
        params: e,
        source: `pull_requests_page`,
        staleTime: y.ONE_MINUTE,
      }))),
      (k = ce(C, ({ account: e, filters: t }) => ({
        getNextPageParam: (e) =>
          e.hasNextPage ? (e.endCursor ?? void 0) : void 0,
        initialPageParam: D,
        queryFn: ({ pageParam: n }) =>
          w(`gh-pr-search`, {
            params: { account: e, cursor: n, filters: t, pageSize: E },
            source: `pull_requests_page`,
          }),
        queryKey: x(
          `gh-pr-search`,
          { account: e, cursor: D, filters: t, pageSize: E },
          T(e),
        ),
        refetchOnWindowFocus: !0,
        staleTime: y.FIVE_SECONDS,
      }))),
      (A = S(C, `gh-pr-status`, (e) => ({
        params: e,
        refetchOnWindowFocus: !0,
        select: xe,
        source: `pull_requests_page`,
        staleTime: y.FIVE_SECONDS,
      }))),
      (j = S(C, `gh-pr-diff`, (e) => ({
        params: e,
        refetchOnWindowFocus: !0,
        source: `pull_requests_page`,
        staleTime: y.FIVE_SECONDS,
      }))),
      (M = S(C, `gh-pr-media`, (e) => ({
        params: e,
        source: `pull_requests_page`,
        staleTime: y.SIX_HOURS,
      }))));
  });
function P(e) {
  if (we(e))
    return L(e.href)
      ? (I(
          e,
          F({
            alt: e.text,
            block: !1,
            mediaKind: `image`,
            raw: e.raw,
            title: e.title,
            url: e.href,
          }),
        ),
        !0)
      : !1;
  if (Ee(e)) {
    let t = Se(e);
    if (t != null)
      return (
        I(
          e,
          F({
            alt: ``,
            block: !0,
            mediaKind: `video`,
            raw: e.raw,
            title: null,
            url: t,
          }),
        ),
        !0
      );
  }
  if (Ce(e)) {
    let t = De(e);
    return t == null
      ? !1
      : (I(e, F({ ...t, block: !0, mediaKind: `image`, raw: e.raw })), !0);
  }
  return !(`tokens` in e) || !Array.isArray(e.tokens)
    ? !1
    : e.tokens.reduce((e, t) => P(t) || e, !1);
}
function F({ alt: e, block: t, mediaKind: n, raw: r, title: i, url: a }) {
  let o = { alt: e, kind: n, src: a };
  return (
    i != null && (o.title = i),
    { type: `codexDirective`, raw: r, name: z, attributes: o, block: t }
  );
}
function Se(e) {
  let t = e.tokens[0];
  return e.tokens.length !== 1 ||
    !Te(t) ||
    t.raw !== t.href ||
    t.text !== t.href ||
    !ke(t.href)
    ? null
    : t.href;
}
function Ce(e) {
  return (
    e.type === `html` &&
    `block` in e &&
    typeof e.block == `boolean` &&
    `pre` in e &&
    typeof e.pre == `boolean` &&
    `text` in e &&
    typeof e.text == `string`
  );
}
function we(e) {
  return (
    e.type === `image` &&
    `href` in e &&
    typeof e.href == `string` &&
    `text` in e &&
    typeof e.text == `string` &&
    `title` in e &&
    (e.title == null || typeof e.title == `string`)
  );
}
function Te(e) {
  return (
    e?.type === `link` &&
    `href` in e &&
    typeof e.href == `string` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function Ee(e) {
  return (
    e.type === `paragraph` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function De(e) {
  if (!e.block) return null;
  let t = (0, R.parse)(e.raw).childNodes.filter(
      (e) => e.nodeType !== R.NodeType.TEXT_NODE || e.rawText.trim().length > 0,
    ),
    n = t[0];
  if (t.length !== 1 || !(n instanceof R.HTMLElement) || n.tagName !== `IMG`)
    return null;
  let r = n.getAttribute(`src`);
  return r == null || !L(r)
    ? null
    : {
        alt: n.getAttribute(`alt`) ?? ``,
        title: n.getAttribute(`title`) ?? null,
        url: r,
      };
}
function I(e, t) {
  for (let t of Reflect.ownKeys(e)) Reflect.deleteProperty(e, t);
  Object.assign(e, t);
}
function Oe(e) {
  let t = e.toLowerCase();
  return (
    t.includes(`github.com/user-attachments/assets/`) ||
    t.includes(`user-images.githubusercontent.com/`) ||
    t.includes(`private-user-images.githubusercontent.com/`)
  );
}
function L(e) {
  try {
    let t = new URL(e);
    return (
      t.protocol === `https:` &&
      ((t.hostname === `github.com` &&
        t.pathname.startsWith(`/user-attachments/assets/`)) ||
        t.hostname === `user-images.githubusercontent.com` ||
        t.hostname === `private-user-images.githubusercontent.com`)
    );
  } catch {
    return !1;
  }
}
function ke(e) {
  if (!L(e)) return !1;
  let t = new URL(e);
  return (
    (t.hostname === `github.com` &&
      t.pathname.startsWith(`/user-attachments/assets/`)) ||
    /\.(?:mov|mp4|webm)$/i.test(t.pathname)
  );
}
var R,
  z,
  B,
  V,
  Ae = e(() => {
    (de(),
      (R = pe()),
      i(),
      (z = `pull-request-media`),
      (B = new c(p)),
      (V = {
        extensions: [
          {
            name: `pullRequestMedia`,
            level: `block`,
            tokenizer(e) {
              if (!Oe(e)) return;
              let t = B.lexer(e)[0];
              return t != null && P(t) ? t : void 0;
            },
          },
        ],
      }));
  });
function je(e) {
  let t = (0, H.c)(20),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ account: n, children: r, directives: i, extensions: a, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s;
  t[6] === a
    ? (s = t[7])
    : ((s = a == null ? K : [V, ...a]), (t[6] = a), (t[7] = s));
  let c = s,
    l;
  t[8] === i ? (l = t[9]) : ((l = { ...i, [z]: Pe }), (t[8] = i), (t[9] = l));
  let u;
  t[10] === r ? (u = t[11]) : ((u = fe(r)), (t[10] = r), (t[11] = u));
  let d;
  t[12] !== c || t[13] !== o || t[14] !== l || t[15] !== u
    ? ((d = (0, W.jsx)(g, { ...o, directives: l, extensions: c, children: u })),
      (t[12] = c),
      (t[13] = o),
      (t[14] = l),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let f;
  return (
    t[17] !== n || t[18] !== d
      ? ((f = (0, W.jsx)(G, { value: n, children: d })),
        (t[17] = n),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function Me(e) {
  let t = (0, H.c)(30),
    { account: n, alt: r, className: i, mediaKind: a, title: s, url: c } = e,
    l;
  t[0] !== n || t[1] !== c
    ? ((l = { account: n, url: c }), (t[0] = n), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u = le(M, l),
    f = ue(),
    [p, m] = (0, U.useState)(null);
  if (u.isLoading) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(d, { className: `icon-sm` })), (t[3] = e))
      : (e = t[3]);
    let n;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, W.jsxs)(`div`, {
            className: `inline-flex min-h-24 min-w-40 items-center justify-center gap-2 rounded-md bg-token-toolbar-hover-background px-4 py-3 text-sm text-token-description-foreground`,
            role: `status`,
            children: [
              e,
              (0, W.jsx)(`span`, {
                className: `sr-only`,
                children: (0, W.jsx)(h, {
                  id: `codex.pullRequests.media.loading`,
                  defaultMessage: `Loading GitHub media…`,
                  description: `Loading label for a pull request media attachment`,
                }),
              }),
            ],
          })),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (p === c || u.data?.status !== `success` || !Fe(u.data.mimeType, a)) {
    let e;
    return (
      t[5] === c
        ? (e = t[6])
        : ((e = (0, W.jsx)(Ne, { url: c })), (t[5] = c), (t[6] = e)),
      e
    );
  }
  let g = `data:${u.data.mimeType};base64,${u.data.contentsBase64}`;
  if (a === `video`) {
    let e;
    t[7] !== r || t[8] !== f
      ? ((e =
          r ||
          f.formatMessage({
            id: `codex.pullRequests.media.videoLabel`,
            defaultMessage: `GitHub video attachment`,
            description: `Accessible label for a pull request video attachment`,
          })),
        (t[7] = r),
        (t[8] = f),
        (t[9] = e))
      : (e = t[9]);
    let n;
    t[10] === i
      ? (n = t[11])
      : ((n = o(
          `block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md bg-black object-contain shadow-md`,
          i,
        )),
        (t[10] = i),
        (t[11] = n));
    let a;
    t[12] === c
      ? (a = t[13])
      : ((a = () => {
          m(c);
        }),
        (t[12] = c),
        (t[13] = a));
    let l;
    return (
      t[14] !== g || t[15] !== e || t[16] !== n || t[17] !== a || t[18] !== s
        ? ((l = (0, W.jsx)(`video`, {
            "aria-label": e,
            className: n,
            controls: !0,
            playsInline: !0,
            preload: `metadata`,
            src: g,
            title: s,
            onError: a,
          })),
          (t[14] = g),
          (t[15] = e),
          (t[16] = n),
          (t[17] = a),
          (t[18] = s),
          (t[19] = l))
        : (l = t[19]),
      l
    );
  }
  let _;
  t[20] === i
    ? (_ = t[21])
    : ((_ = o(
        `block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md object-contain shadow-md`,
        i,
      )),
      (t[20] = i),
      (t[21] = _));
  let v;
  t[22] === c
    ? (v = t[23])
    : ((v = () => {
        m(c);
      }),
      (t[22] = c),
      (t[23] = v));
  let y;
  return (
    t[24] !== r || t[25] !== g || t[26] !== _ || t[27] !== v || t[28] !== s
      ? ((y = (0, W.jsx)(`img`, {
          alt: r,
          className: _,
          loading: `lazy`,
          src: g,
          title: s,
          onError: v,
        })),
        (t[24] = r),
        (t[25] = g),
        (t[26] = _),
        (t[27] = v),
        (t[28] = s),
        (t[29] = y))
      : (y = t[29]),
    y
  );
}
function Ne(e) {
  let t = (0, H.c)(6),
    { url: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, W.jsx)(`span`, {
        role: `status`,
        children: (0, W.jsx)(h, {
          id: `codex.pullRequests.media.unavailable`,
          defaultMessage: `Preview unavailable`,
          description: `Message shown when a pull request media attachment cannot be previewed`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (e) => {
        ne({ event: e, href: n, initiator: `open_in_browser_bridge` });
      }),
      (t[1] = n),
      (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, W.jsx)(h, {
        id: `codex.pullRequests.media.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Button label for opening a pull request attachment on GitHub`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, W.jsxs)(`div`, {
          className: `flex min-h-24 min-w-40 flex-col items-center justify-center gap-2 rounded-md bg-token-toolbar-hover-background px-4 py-3 text-sm text-token-description-foreground`,
          children: [
            r,
            (0, W.jsx)(l, { color: `outline`, onClick: i, children: a }),
          ],
        })),
        (t[4] = i),
        (t[5] = o)),
    o
  );
}
function Pe(e) {
  let t = (0, H.c)(6),
    { attributes: n } = e,
    r = (0, U.useContext)(G),
    i = n.kind,
    a = n.src;
  if (r == null || (i !== `image` && i !== `video`) || typeof a != `string`)
    return null;
  let o = typeof n.alt == `string` ? n.alt : ``,
    s = typeof n.title == `string` ? n.title : void 0,
    c;
  return (
    t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== a
      ? ((c = (0, W.jsx)(Me, {
          account: r,
          alt: o,
          className: `my-3`,
          mediaKind: i,
          title: s,
          url: a,
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = o),
        (t[3] = s),
        (t[4] = a),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function Fe(e, t) {
  return e === `application/octet-stream` || e.startsWith(`${t}/`);
}
var H,
  U,
  W,
  G,
  K,
  Ie = e(() => {
    ((H = a()),
      se(),
      m(),
      (U = t(s(), 1)),
      ae(),
      u(),
      ie(),
      _e(),
      oe(),
      r(),
      N(),
      Ae(),
      (W = re()),
      (G = (0, U.createContext)(null)),
      (K = [V]));
  });
async function q(e, t, n) {
  (await e
    .getMutationCache()
    .build(e, {
      mutationFn: async () => {
        let e = await n();
        if (e.status === `error`) throw Error(e.error);
      },
      mutationKey: [
        `github`,
        `pull-request`,
        t.account.hostId,
        t.pullRequest.hostname,
        t.pullRequest.owner,
        t.pullRequest.repository,
        t.pullRequest.number,
      ],
      retry: !1,
      scope: {
        id: [
          t.account.hostId,
          t.pullRequest.hostname.toLowerCase(),
          t.pullRequest.owner.toLowerCase(),
          t.pullRequest.repository.toLowerCase(),
          t.pullRequest.number,
        ].join(`/`),
      },
    })
    .execute(void 0),
    await Promise.allSettled([
      e.invalidateQueries({ exact: !0, queryKey: x(`gh-pr-status`, t) }),
      e.invalidateQueries({ queryKey: be(t.account) }),
    ]));
}
var J,
  Y,
  X,
  Z,
  Q,
  Le,
  $,
  Re = e(() => {
    (m(),
      v(),
      f(),
      _(),
      he(),
      N(),
      (J = b(C, (e) => ({
        mutationFn: ({ body: t, replyToReviewThreadId: n }, { client: r }) =>
          q(r, e, () =>
            w(`gh-pr-comment`, {
              params:
                n == null
                  ? { ...e, body: t }
                  : { ...e, body: t, replyToReviewThreadId: n },
              source: `pull_requests_page`,
            }),
          ),
      }))),
      (Y = b(n, ({ request: e, submissionKey: t }) => ({
        mutationFn: (n, { client: r }) =>
          q(r, e, () => {
            let r = me(n);
            return w(`gh-pr-comment`, {
              params:
                n.replyToReviewThreadId == null
                  ? {
                      ...e,
                      body: r,
                      expectedHeadRevision: t.revision,
                      inlineComment: ge(n),
                    }
                  : {
                      ...e,
                      body: r,
                      replyToReviewThreadId: n.replyToReviewThreadId,
                    },
              source: `pull_requests_page`,
            });
          }),
      }))),
      (X = b(C, (e) => ({
        mutationFn: (t, { client: n }) =>
          q(n, e, () =>
            w(`gh-pr-update`, {
              params: { ...e, action: `update-title`, title: t },
              source: `pull_requests_page`,
            }),
          ),
      }))),
      (Z = b(C, (e) => ({
        mutationFn: (t, { client: n }) =>
          q(n, e, () =>
            w(`gh-pr-update`, {
              params: { ...e, action: `update-body`, body: t },
              source: `pull_requests_page`,
            }),
          ),
      }))),
      (Q = b(C, (e) => ({
        mutationFn: (t, { client: n }) =>
          q(n, e, () =>
            w(`gh-pr-update`, {
              params: { ...e, action: t },
              source: `pull_requests_page`,
            }),
          ),
      }))),
      (Le = b(C, (e) => ({
        mutationFn: (
          { expectedHeadRevision: t, mergeMethod: n },
          { client: r },
        ) =>
          q(r, e, () =>
            w(`gh-pr-merge`, {
              params: { ...e, expectedHeadRevision: t, mergeMethod: n },
              source: `pull_requests_page`,
            }),
          ),
      }))),
      ($ = b(C, (e) => ({
        mutationFn: (
          { body: t, event: n, expectedHeadRevision: r },
          { client: i },
        ) =>
          q(i, e, () =>
            w(`gh-pr-submit-review`, {
              params: { ...e, body: t, event: n, expectedHeadRevision: r },
              source: `pull_requests_page`,
            }),
          ),
      }))));
  });
export {
  Q as a,
  X as c,
  O as d,
  N as f,
  k as h,
  Le as i,
  je as l,
  j as m,
  Y as n,
  $ as o,
  A as p,
  J as r,
  Z as s,
  Re as t,
  Ie as u,
};
//# sourceMappingURL=pull-request-actions-DKYSsgc4.js.map
