// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Automation scheduler constants and prompt templates.

export const AUTOMATION_REMARK_DIRECTIVE_INSTRUCTIONS = `Response MUST end with a remark-directive block.

## Responding

- Answer the user normally and concisely. Explain what you found, what you did, and what the user should focus on now.
- Automations: use the memory file at \`$CODEX_HOME/automations/<automation_id>/memory.md\` (create it if missing).
  - Read it first (if present) to avoid repeating recent work, especially for "changes since last run" tasks.
  - Memory is important: some tasks must build on prior work, and others must avoid duplicating prior focus.
  - Before returning the directive, write a concise summary of what you did/decided plus the current run time.
  - Use the \`Automation ID:\` value provided in the message to locate/update this file.
- REQUIRED: End with a valid remark-directive block on its own line (not inline).
  - Always include an inbox item directive:
    \`::inbox-item{title="Sample title" summary="Place description here"}\`

## Choosing return value

- For recurring/bg threads (e.g., "pull datadog logs and fix any new bugs", "address the PR comments"):
  - Always return \`::inbox-item{...}\` with the title/summary the user should see.

## Guidelines

- Directives MUST be on their own line.
- Output exactly ONE inbox-item directive.
- Do NOT use invalid remark-directive formatting.
- DO NOT place commas between arguments.
  - Valid: \`::inbox-item{title="Sample title" summary="Place description here"}\`
  - Invalid: \`::inbox-item{title="Sample title",summary="Place description here"}\`
- When referring to files, use full absolute filesystem links in Markdown (not relative paths).
  - Valid: [\`/Users/alice/project/src/main.ts\`](/Users/alice/project/src/main.ts)
  - Invalid: \`src/main.ts\` or \`[main](src/main.ts)\`
- Try not to ask the user for more input if possible to infer.
- If a PR is opened by the automation, add the \`codex-automation\` label when available alongside the normal \`codex\` label.
- Inbox item copy should be glanceable and specific (avoid "Update", "Done", "FYI", "Following up").
  - Title: what this thread now _is_ (state + object). Aim ~4-8 words.
  - Title should explain what was built or what happened.
- Summary: what the user should _do/know next_ (next step, blocker, or waiting-on). Aim ~6-14 words.
- Summary should usually match the general automation name or prompt summary.
- Both title and summary should be fairly short; usually avoid one-word titles/summaries.
  - Prefer concrete nouns + verbs; include a crisp status cue when helpful: "blocked", "needs decision", "ready for review".

## Examples (inbox-item)

- Work needed:
  - \`::inbox-item{title="Fix flaky checkout tests" summary="Repro isolated; needs CI run + patch"}\`
- Waiting on user decision:
  - \`::inbox-item{title="Choose API shape for filters" summary="Two options drafted; pick A vs B"}\`
- Status update with next step:
  - \`::inbox-item{title="PR comments addressed" summary="Ready for re-review; focus on auth edge case"}\`
`;

export const HEARTBEAT_AUTOMATION_PROMPT_TEMPLATE = `<heartbeat>
  <automation_id>{{AUTOMATION_ID}}</automation_id>
  <current_time_iso>{{NOW_ISO}}</current_time_iso>
  <instructions>
{{AUTOMATION_PROMPT}}
  </instructions>
</heartbeat>
`;

export const AUTOMATION_SCHEDULER_TICK_MS = 30_000;
export const AUTOMATION_SCHEDULER_MAX_PER_TICK = 3;
export const HEARTBEAT_RENDERER_STATE_TTL_MS = 2 * 60_000;
export const HEARTBEAT_RESCHEDULE_DELAY_MS = 60_000;
export const HEARTBEAT_START_TIMEOUT_MS = 30_000;
export const HEARTBEAT_COMPLETION_TIMEOUT_MS = 10 * 60_000;

export const SET_THREAD_ARCHIVED_TOOL_NAME = "set_thread_archived";
export const SET_THREAD_ARCHIVED_TOOL = {
  type: "function",
  name: SET_THREAD_ARCHIVED_TOOL_NAME,
  description: "Archive or unarchive a Codex thread.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: {
        type: "string",
        description:
          "Thread id to archive or unarchive. Omit to target the calling thread.",
      },
      archived: {
        type: "boolean",
        description: "Whether the thread should be archived.",
      },
    },
    required: ["archived"],
  },
} as const;

export const CODEX_APP_AUTOMATION_TOOL_NAMESPACE = {
  type: "namespace",
  name: "codex_app",
  description: "Tools provided by the Codex app.",
  tools: [SET_THREAD_ARCHIVED_TOOL],
} as const;

export const RECENT_ROLLOUT_ACTIVITY_EVENTS = new Set([
  "response_item",
  "event_msg",
  "item",
  "unknown",
]);

export const ROLLOUT_TERMINAL_EVENTS = new Set([
  "task_complete",
  "response_item",
  "event_msg",
]);

export const ROLLOUT_TAIL_READ_BYTES = 256 * 1024;
