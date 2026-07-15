import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  AY as t,
  BV as n,
  dM as r,
  ek as i,
  fM as a,
  iM as o,
  nK as s,
  nM as c,
  oK as l,
  rK as u,
  sK as d,
  tk as ee,
  v as f,
  y as te,
  zV as p,
  zZ as ne,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
import {
  n as re,
  t as ie,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~c1urrgy0-DDu6e9kb.js";
import {
  G as ae,
  Ji as oe,
  K as se,
  Xi as m,
  Yi as h,
  dt as ce,
  ft as le,
  ht as g,
  mt as ue,
  pt as de,
  qi as _,
  ut as v,
} from "./app-initial~app-main~onboarding-page-D4eTO0KG.js";
function y({
  cwd: e = null,
  projectlessOutputDirectory: t = null,
  title: n,
  turns: r,
}) {
  let i = [],
    a = U(e);
  i.push(`# ${De(n ?? `Codex conversation`)}`);
  for (let n of r) {
    let r = fe(n, e, a, t);
    r != null && i.push(r);
  }
  return `${i
    .join(
      `

`,
    )
    .trimEnd()}\n`;
}
function fe(e, t, n, i) {
  let a = [],
    o = e.cwd == null ? n : U(e.cwd),
    s =
      i == null
        ? void 0
        : (n) =>
            ee({
              cwd: e.cwd ?? (t == null ? null : ne(t)),
              projectlessOutputDirectory: i,
              resourcePath: n,
            }),
    {
      userItems: c,
      assistantItem: l,
      agentItems: u,
      automationUpdateItems: d,
      toolOutputItems: f,
      postAssistantItems: te,
      systemEventItem: p,
      remoteTaskCreatedItems: re,
      personalityChangedItems: ie,
      forkedFromConversationItems: ae,
      modelChangedItems: h,
      modelReroutedItems: g,
      todoListItem: _,
      proposedPlanItem: v,
      planImplementationItem: y,
      mcpServerElicitationItems: fe,
      permissionRequestItems: x,
      approvalItem: S,
      userInputItem: C,
    } = se(
      s == null
        ? e.items
        : e.items.map((e) =>
            e.type === `assistant-message`
              ? { ...e, content: r(e.content, s) }
              : e,
          ),
      e.status,
    );
  for (let e of h) P(a, b(e, o));
  for (let e of c) P(a, pe(e, o));
  for (let e of g) P(a, b(e, o));
  let w = [],
    { renderableAgentItems: he } = oe({
      agentItems: u,
      isTurnInProgress: e.status === `in_progress`,
      isAnyNonAgentItemInProgress: m(l) || m(v),
    }),
    T = de({
      units: le({
        units: ce({
          units: ue(he),
          isActivitySliceClosed: l != null,
          conversationDetailLevel: Q,
        }),
      }),
      isActivitySliceClosed: l != null,
    });
  for (let e of T) P(w, ve(e, o));
  for (let e of d) P(w, b(e, o));
  p != null && P(w, b(p, o));
  for (let e of f) P(w, b(e, o));
  for (let e of te) P(w, b(e, o));
  (_ != null && P(w, b(_, o)),
    v != null && P(w, b(v, o)),
    y != null && P(w, b(y, o)));
  for (let e of fe) P(w, b(e, o));
  for (let e of x) P(w, b(e, o));
  (S != null && P(w, b(S, o)),
    C != null && P(w, b(C, o)),
    w.length > 0 &&
      a.push(
        Oe(
          ze(w.length),
          w.join(`

`),
        ),
      ),
    l != null && P(a, me(l, { pathContext: o })));
  for (let e of re) P(a, b(e, o));
  for (let e of ie) P(a, b(e, o));
  for (let e of ae) P(a, b(e, o));
  return a.length === 0
    ? null
    : a.join(`

`);
}
function b(e, t) {
  switch (e.type) {
    case `user-message`:
      return x(e, { escapeDetailsTags: !0, pathContext: t });
    case `assistant-message`:
      return me(e, { escapeDetailsTags: !0, pathContext: t });
    case `reasoning`:
      return null;
    case `proposed-plan`:
      return M(`Plan`, e.content);
    case `todo-list`:
      return T(e);
    case `exec`:
      return C(e);
    case `patch`:
      return w(e);
    case `turn-diff`:
      return he(e);
    case `web-search`:
      return `Searched the web for ${K(e.query)}`;
    case `generated-image`:
      return _e(e.src, e.status);
    case `image-view`:
      return e.imageCount === 1
        ? `Viewed an image`
        : `Viewed ${e.imageCount} images`;
    case `userInput`:
      return N(
        e.completed ? `User input request` : `User input requested`,
        e.questions.map((e) => `- ${e.question}`),
      );
    case `user-input-response`:
      return N(
        `User input response`,
        e.questionsAndAnswers.flatMap((e) => [
          `- ${e.question}`,
          ...e.answers.map((e) => `  - ${e}`),
        ]),
      );
    case `mcp-server-elicitation`:
      return N(`MCP server elicitation`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Action: ${e.action ?? `none`}`,
      ]);
    case `permission-request`:
      return N(`Permission request`, [
        e.completed ? `Status: completed` : `Status: pending`,
        `Reason: ${e.reason ?? `Not provided`}`,
        `Response: ${e.response == null ? `none` : `granted`}`,
      ]);
    case `mcp-tool-call`:
      return E(e);
    case `automation-update`:
      return N(`Scheduled task update`, [
        `Mode: ${e.result?.mode ?? `pending`}`,
        `Automation ID: ${e.result?.automationId ?? `pending`}`,
      ]);
    case `dynamic-tool-call`:
      return N(`Tool call`, [
        `Tool: ${e.tool}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `worktree-init`:
      return N(`Worktree initialization`, [
        `Worktree: created`,
        e.setup == null ? null : `Environment setup: ${e.setup.outcome}`,
      ]);
    case `automatic-approval-review`:
      return D(e);
    case `multi-agent-action`:
      return N(`Subagent action`, [
        `Action: ${e.action}`,
        `Status: ${e.status}`,
        `Receiver threads: ${e.receiverThreads.length}`,
        e.prompt == null ? null : `Prompt: ${e.prompt}`,
      ]);
    case `subagent-activity`:
      return null;
    case `plan-implementation`:
      return N(`Plan implementation`, [
        e.isCompleted ? `Status: completed` : `Status: running`,
        e.planContent,
      ]);
    case `remote-task-created`:
      return N(`Remote task created`, [`Task ID: ${e.taskId}`]);
    case `context-compaction`:
      return N(`Context compaction`, [
        `Source: ${e.source}`,
        e.completed ? `Status: completed` : `Status: running`,
      ]);
    case `personality-changed`:
      return N(`Personality changed`, [`Personality: ${e.personality}`]);
    case `forked-from-conversation`:
      return N(`Copied conversation`, [
        `Source conversation: ${e.sourceConversationId}`,
      ]);
    case `model-changed`:
      return N(`Model changed`, [`${e.fromModel} -> ${e.toModel}`]);
    case `model-rerouted`:
      return N(`Model rerouted`, [
        `${e.fromModel} -> ${e.toModel}`,
        `Reason: ${e.reason}`,
      ]);
    case `auto-review-interruption-warning`:
      return null;
    case `system-error`:
      return M(`System error`, e.content);
    case `stream-error`:
      return N(`Stream error`, [e.content, e.additionalDetails]);
    case `realtime-transcript`:
      return N(
        `Realtime transcript`,
        e.entries.map(({ role: e, text: t }) => `${e}: ${t}`),
      );
    case `steered`:
    case `worked-for`:
      return null;
  }
}
function pe(e, t) {
  let n = x(e, { pathContext: t });
  return n == null ? null : I(n);
}
function x(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = [],
    i = R(e.message, n).trim();
  i.length > 0 && r.push(i);
  let a = S(e, n);
  if ((a.length > 0 && r.push(N(`User context`, a)), r.length === 0))
    return null;
  let o = r.join(`

`);
  return t ? G(o) : o;
}
function S(e, t) {
  let n = [];
  if (e.attachments.length > 0) {
    n.push(`Attachments:`);
    for (let r of e.attachments) n.push(`- ${r.label}: ${z(r.path, t)}`);
  }
  if (e.images.length > 0) {
    n.push(`Images:`);
    for (let r of e.images) n.push(`- ${z(r, t)}`);
  }
  if (e.comments != null && e.comments.length > 0) {
    n.push(`Comments:`);
    for (let r of e.comments) {
      let e = r.lineRange == null ? `` : ` ${K(r.lineRange)}`;
      n.push(
        `- ${B(r.path, t)}${e}: ${L(r.body).replaceAll(
          `
`,
          ` `,
        )}`,
      );
    }
  }
  return (
    e.referencesPriorConversation && n.push(`Referenced prior conversation`),
    e.reviewMode && n.push(`Mode: code review`),
    e.pullRequestFixMode && n.push(`Mode: pull request fix`),
    e.autoResolveSync && n.push(`Mode: auto resolve merge`),
    e.pullRequestCheckNames != null &&
      e.pullRequestCheckNames.length > 0 &&
      n.push(`Pull request checks: ${e.pullRequestCheckNames.join(`, `)}`),
    e.pullRequestMergeConflictNumber !== void 0 &&
      n.push(
        e.pullRequestMergeConflictNumber == null
          ? `Pull request merge conflict`
          : `Pull request merge conflict: #${e.pullRequestMergeConflictNumber}`,
      ),
    n
  );
}
function me(e, { escapeDetailsTags: t = !1, pathContext: n = $ } = {}) {
  let r = R(re(e.content), n).trim();
  return r.length === 0 ? null : t ? G(r) : r;
}
function C(e) {
  let t = [],
    r = n(e.cmd);
  t.push(q(`bash`, `$ ${r}`));
  let i = e.output?.aggregatedOutput;
  if (i != null) {
    let e = L(i);
    e.trim().length > 0 && t.push(q(`text`, e));
  }
  return (
    t.push(Ke(e)),
    P(t, O(e.automaticApprovalReviews)),
    F(
      `Ran ${Le(r)}`,
      t.join(`

`),
    )
  );
}
function w(e) {
  let t = Object.entries(e.changes).flatMap(([e, t]) => {
    let n = c(e, t);
    if (n == null || n.trim().length === 0) return [];
    let r = Ge(n);
    return [
      F(`${We(t.type)} ${Le(e)} +${r.additions} -${r.deletions}`, q(`diff`, n)),
    ];
  });
  return (
    P(t, O(e.automaticApprovalReviews)),
    t.length === 0
      ? null
      : t.join(`
`)
  );
}
function he(e) {
  return F(`Diff`, q(`diff`, e.unifiedDiff));
}
function T(e) {
  let t = [];
  return (
    e.explanation != null &&
      e.explanation.trim().length > 0 &&
      t.push(W(e.explanation).trim()),
    t.push(
      e.plan.map((e) => `- [${Ee(e.status)}] ${W(e.step)}`).join(`
`),
    ),
    F(
      `Plan`,
      t.join(`

`),
    )
  );
}
function E(e) {
  let t = [];
  if (
    (t.push(
      `MCP tool call\n\n${W(`${e.invocation.server}.${e.invocation.tool}`)}`,
    ),
    t.push(q(`json`, J(e.invocation.arguments))),
    P(t, O(e.automaticApprovalReviews)),
    e.result == null)
  )
    return (
      t.push(e.completed ? `Result: none` : `Status: running`),
      t.join(`

`)
    );
  if (e.result.type === `error`)
    return (
      t.push(W(`Error: ${e.result.error}`)),
      t.join(`

`)
    );
  let n = e.result.content.map(ge).filter((e) => e.length > 0).join(`

`);
  return (
    n.length > 0 && t.push(n),
    e.result.structuredContent != null &&
      t.push(q(`json`, J(e.result.structuredContent))),
    t.join(`

`)
  );
}
function ge(e) {
  switch (e.type) {
    case `text`:
      return q(`text`, e.text);
    case `image`:
      return W(`Image output: ${e.mimeType}`);
    case `audio`:
      return W(`Audio output: ${e.mimeType}`);
    case `resource_link`:
      return W(`Resource: ${e.title ?? e.name ?? e.uri} (${e.uri})`);
    case `embedded_resource`: {
      let t = e.resource.title ?? e.resource.name ?? e.resource.uri;
      return e.resource.text != null && e.resource.text.trim().length > 0
        ? `${W(`Resource: ${t}`)}\n\n${q(`text`, e.resource.text)}`
        : W(`Resource: ${t}`);
    }
    case `unknown`:
      return q(`json`, J(e.raw));
  }
}
function D(e) {
  return N(`Auto-review`, [
    `Status: ${e.status}`,
    e.riskLevel == null ? null : `Risk: ${e.riskLevel}`,
    e.rationale == null ? null : `Rationale: ${e.rationale}`,
  ]);
}
function O(e) {
  return e == null
    ? null
    : e.map(D).join(`

`);
}
function _e(e, t) {
  return e == null
    ? N(`Generated image`, [`Status: ${t}`])
    : `Generated image\n\n![Generated image](${e})`;
}
function ve(e, t) {
  if (e.kind === `collapsed-tool-activity`) {
    let n = Ve(e.summary);
    if (!v(Q, e.units)) {
      let r = e.units.flatMap((e) => k(e, t)).map((e) => `- ${e}`);
      return r.length === 0
        ? n
        : F(
            n,
            r.join(`
`),
          );
    }
    if (e.units.length === 1) {
      let n = e.units[0];
      if (n?.kind === `entry` && n.entry.kind === `exploration`) return j(n, t);
    }
    return F(
      n,
      e.units.map((e) => ye(e, t)).filter((e) => e != null).join(`

`),
    );
  }
  return e.kind === `pending-mcp-tool-calls`
    ? F(
        Ue(e.items.length),
        e.items.map((e) => E(e)).join(`

`),
      )
    : e.kind === `dynamic-tool-call-group`
      ? F(
          Ue(e.items.length),
          e.items.map((e) => b(e, t)).join(`

`),
        )
      : j(e, t);
}
function ye(e, t) {
  return e.kind === `entry` &&
    e.entry.kind === `item` &&
    (e.entry.item.type === `exec` || e.entry.item.type === `patch`)
    ? be(e, t)
    : j(e, t);
}
function be(e, t) {
  let n = k(e, t);
  return n.length === 0
    ? null
    : n.map((e) => `- ${e}`).join(`
`);
}
function k(e, t) {
  return e.kind !== `entry` || e.entry.kind !== `item`
    ? []
    : e.entry.item.type === `exec`
      ? [
          `Ran ${K(xe(e.entry.item))}`,
          ...A(e.entry.item.automaticApprovalReviews),
        ]
      : e.entry.item.type === `patch`
        ? [...Se(e.entry.item, t), ...A(e.entry.item.automaticApprovalReviews)]
        : [];
}
function A(e) {
  return e == null
    ? []
    : e.flatMap((e) => [
        `Auto-review: ${e.status}`,
        ...(e.riskLevel == null ? [] : [`Auto-review risk: ${e.riskLevel}`]),
        ...(e.rationale == null
          ? []
          : [`Auto-review rationale: ${W(e.rationale)}`]),
      ]);
}
function xe(e) {
  let t = e.parsedCmd.cmd.trim();
  return t.length === 0 ? n(e.cmd) : t;
}
function Se(e, t) {
  let n = e.grantRoot == null ? t : U(e.grantRoot);
  return Object.entries(e.changes).flatMap(([e, t]) => {
    let r = c(e, t);
    if (r == null || r.trim().length === 0) return [];
    let i = Ge(r);
    return [`${Ce(t.type)} ${Ne(e, n)} (+${i.additions} -${i.deletions})`];
  });
}
function Ce(e) {
  switch (e) {
    case `add`:
    case `update`:
      return `Wrote`;
    case `delete`:
      return `Deleted`;
  }
}
function j(e, t) {
  if (e.kind === `web-search-group`)
    return F(
      `Searched the web`,
      e.items.map((e) => `- Searched the web for ${K(e.query)}`).join(`
`),
    );
  if (e.kind === `multi-agent-group`) {
    let t = e.items[0];
    return N(`Subagent action`, [
      t == null ? null : `Action: ${t.action}`,
      t == null ? null : `Status: ${t.status}`,
      `Receiver threads: ${e.items.length}`,
    ]);
  }
  return e.entry.kind === `exploration` ? we(e.entry, t) : b(e.entry.item, t);
}
function we(e, t) {
  let n = e.items
    .map((e) => Te(e, t))
    .filter((e) => e != null)
    .map((e) => `- ${e}`);
  return n.length === 0
    ? null
    : F(
        Be(e.items),
        n.join(`
`),
      );
}
function Te(e, t) {
  if (e.type !== `exec`) return null;
  let n = e.parsedCmd,
    r = e.cwd == null ? t : U(e.cwd);
  switch (n.type) {
    case `read`:
      return `Read ${z(n.path ?? n.name, r)}`;
    case `search`:
      return n.query != null && n.path != null
        ? `Searched for ${K(n.query)} in ${z(n.path, r)}`
        : n.query == null
          ? `Searched for files`
          : `Searched for ${K(n.query)}`;
    case `list_files`:
      return n.path == null
        ? `Listed files`
        : `Listed files in ${z(n.path, r)}`;
    case `format`:
    case `test`:
    case `lint`:
    case `noop`:
    case `unknown`:
      return K(n.cmd);
  }
}
function M(e, t) {
  let n = W(t).trim();
  return n.length === 0 ? null : `${e}\n\n${n}`;
}
function N(e, t) {
  let n = t.flatMap((e) => {
    if (e == null) return [];
    let t = W(e);
    return t.trim().length === 0 ? [] : [t];
  });
  return n.length === 0
    ? e
    : `${e}\n\n${n.join(`
`)}`;
}
function P(e, t) {
  t != null && t.trim().length > 0 && e.push(t);
}
function Ee(e) {
  switch (e) {
    case `completed`:
      return `x`;
    case `in_progress`:
    case `pending`:
      return ` `;
  }
}
function De(e) {
  let t = e.replaceAll(/\s+/g, ` `).trim();
  return t.length === 0 ? `Codex conversation` : t.replaceAll(`#`, `\\#`);
}
function F(e, t) {
  return `<details><summary>${e}</summary>\n\n${L(t).trim()}\n\n</details>`;
}
function Oe(e, t) {
  return `<details><summary>${e}</summary>\n\n${I(t)}\n</details>`;
}
function I(e) {
  return L(e)
    .trim()
    .split(
      `
`,
    )
    .map((e) => (e.length === 0 ? `>` : `> ${e}`)).join(`
`);
}
function L(e) {
  return e.replaceAll(
    /\r\n?/g,
    `
`,
  );
}
function R(e, t) {
  return Ae(ke(L(r(e))), t);
}
function ke(e) {
  return te(e)
    .split(
      `
`,
    )
    .map((e) => {
      let t = e.replaceAll(qe, ``);
      return t.trim().length === 0 ? `` : t.trimEnd();
    })
    .join(
      `
`,
    )
    .replaceAll(
      /\n{3,}/g,
      `

`,
    );
}
function Ae(e, t) {
  return e.replaceAll(Je, (e, n, r) => {
    let i = n.startsWith(`<`) && n.endsWith(`>`),
      a = i ? n.slice(1, -1) : n,
      o = je(a, t);
    return o === a ? e : `](${Me(o, i)}${r ?? ``})`;
  });
}
function je(e, t) {
  let { path: n } = V(e);
  return u(n) ? B(e, t) : e;
}
function Me(e, t) {
  return t || /[\s()]/.test(e) ? `<${e}>` : e;
}
function z(e, t) {
  return K(B(e, t));
}
function Ne(e, t) {
  return K(Pe(e, t));
}
function Pe(e, t) {
  let n = B(e, t);
  return n === `.` ||
    n === `~` ||
    n.startsWith(`./`) ||
    n.startsWith(`../`) ||
    n.startsWith(`~/`) ||
    u(n)
    ? n
    : `./${n}`;
}
function B(e, t) {
  let { path: n, lineSuffix: r } = V(e),
    i = d(n),
    a = H(i, t.cwd, `.`);
  if (a != null) return `${a}${r}`;
  let o = H(i, t.homeDir, `~`);
  return o == null ? `${i}${r}` : `${o}${r}`;
}
function V(e) {
  let t = Ze.exec(e);
  return t?.[1] == null || t[2] == null || !u(t[1])
    ? { lineSuffix: ``, path: e }
    : { lineSuffix: t[2], path: t[1] };
}
function H(e, t, n) {
  if (t == null || t === `/`) return null;
  let r = l(e),
    i = l(t);
  return r === i
    ? n
    : r.startsWith(`${i}/`)
      ? `${n}/${e.slice(t.length + 1)}`
      : null;
}
function U(e) {
  if (e == null) return $;
  let t = Fe(e);
  return t == null ? $ : { cwd: t, homeDir: Ie(t) };
}
function Fe(e) {
  let t = d(e).replace(/\/+$/, ``);
  return u(t) ? t : null;
}
function Ie(e) {
  let t = Ye.exec(e);
  if (t != null) return t[0];
  let n = Xe.exec(e);
  return n == null ? null : n[0];
}
function W(e) {
  return G(L(e));
}
function G(e) {
  return e.replaceAll(/<\/?details(?=[\s>])[^>]*>/gi, (e) => Z(e));
}
function K(e) {
  let t = "`".repeat(Re(e) + 1);
  return `${t}${e}${t}`;
}
function Le(e) {
  return `<code>${Z(e)}</code>`;
}
function q(e, t) {
  let n = L(t).trimEnd(),
    r = "`".repeat(Math.max(3, Re(n) + 1));
  return `${r}${e}\n${n}\n${r}`;
}
function Re(e) {
  let t = 0;
  for (let n of e.matchAll(/`+/g)) t = Math.max(t, n[0].length);
  return t;
}
function J(e) {
  return JSON.stringify(e, null, 2) ?? `null`;
}
function ze(e) {
  return `${e} previous ${e === 1 ? `message` : `messages`}`;
}
function Be(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e)
    if (i.type === `exec`)
      switch (i.parsedCmd.type) {
        case `read`:
          t += 1;
          break;
        case `search`:
          n += 1;
          break;
        case `list_files`:
          r += 1;
          break;
        case `format`:
        case `test`:
        case `lint`:
        case `noop`:
        case `unknown`:
          break;
      }
  let i = [
    X(t, `file`, `files`),
    X(n, `search`, `searches`),
    X(r, `list`, `lists`),
  ].filter((e) => e != null);
  return i.length === 0 ? `Explored` : `Explored ${i.join(`, `)}`;
}
function Ve(e) {
  let t = [];
  (Y(t, e.createdFileCount, `Created`, `created`, `file`, `files`),
    Y(t, e.editedFileCount, `Edited`, `edited`, `file`, `files`),
    Y(t, e.deletedFileCount, `Deleted`, `deleted`, `file`, `files`));
  let n = [
    X(e.exploredFileCount, `file`, `files`),
    X(e.searchCount, `search`, `searches`),
    X(e.listCount, `list`, `lists`),
  ].filter((e) => e != null);
  return (
    n.length > 0 &&
      t.push(`${t.length === 0 ? `Explored` : `explored`} ${n.join(`, `)}`),
    Y(t, e.deniedRequestCount, `Denied`, `denied`, `request`, `requests`),
    He(t, e.timedOutRequestCount),
    Y(t, e.commandCount, `Ran`, `ran`, `command`, `commands`),
    Y(t, e.mcpToolCallCount, `Called`, `called`, `tool`, `tools`),
    e.webSearchCount > 0 &&
      t.push(t.length === 0 ? `Searched the web` : `searched the web`),
    t.length === 0 ? `Tool activity` : t.join(`, `)
  );
}
function Y(e, t, n, r, i, a) {
  let o = X(t, i, a);
  o != null && e.push(`${e.length === 0 ? n : r} ${o}`);
}
function He(e, t) {
  let n = X(t, `request`, `requests`);
  n != null && e.push(`${n} timed out`);
}
function X(e, t, n) {
  return e === 0 ? null : e === 1 ? `a ${t}` : `${e} ${n}`;
}
function Ue(e) {
  return e === 1 ? `Called a tool` : `Called ${e} tools`;
}
function We(e) {
  switch (e) {
    case `add`:
      return `Created`;
    case `delete`:
      return `Deleted`;
    case `update`:
      return `Edited`;
  }
}
function Ge(e) {
  let t = 0,
    n = 0;
  for (let r of L(e).split(`
`)) {
    if (r.startsWith(`+`) && !r.startsWith(`+++`)) {
      t += 1;
      continue;
    }
    r.startsWith(`-`) && !r.startsWith(`---`) && (n += 1);
  }
  return { additions: t, deletions: n };
}
function Ke(e) {
  return e.executionStatus === `interrupted`
    ? `Stopped`
    : e.output?.exitCode == null
      ? e.executionStatus === `completed`
        ? `Success`
        : `Running`
      : e.output.exitCode === 0
        ? `Success`
        : `Failed with exit code ${e.output.exitCode}`;
}
function Z(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`);
}
var qe, Q, $, Je, Ye, Xe, Ze;
e(() => {
  (t(),
    ie(),
    a(),
    s(),
    f(),
    g(),
    o(),
    h(),
    p(),
    i(),
    _(),
    ae(),
    (qe = /::git-[a-z-]+\{[^}\n]*\}/g),
    (Q = `STEPS_PROSE`),
    ($ = { cwd: null, homeDir: null }),
    (Je =
      /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g),
    (Ye = /^\/(?:Users|home)\/[^/]+(?=\/|$)/),
    (Xe = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/),
    (Ze = /^(.*?)(:\d+(?:-\d+)?)$/));
})();
export { y as renderConversationMarkdown };
//# sourceMappingURL=conversation-markdown-DBuHuWMu.js.map
