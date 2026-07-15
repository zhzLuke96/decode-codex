# decode-codex

> **English** · [中文](README.zh-CN.md)

Pull the latest code out of the installed **OpenAI Codex** macOS desktop app and turn its minified/bundled JavaScript back into readable, well-named source.

The repository ships two agent **skills** that work together:

| Skill | What it does | Output |
| ----- | ------------ | ------ |
| [`codex-app-ref-refresh`](.agents/skills/codex-app-ref-refresh/) | Extracts the installed `ChatGPT.app` bundle (`app.asar`) into `./ref` and formats it | `./ref/` |
| [`deobfuscate-javascript`](.agents/skills/deobfuscate-javascript/) | Reverse-engineers the bundled JS in `ref/webview/assets` into readable code with meaningful names | `./restored/` |

Typical flow: **refresh `./ref` from the app → deobfuscate `./ref` into `./restored`.**

---

## Prerequisites

- **macOS** with the **[ChatGPT desktop app](https://openai.com/chatgpt/desktop/)** installed at `/Applications/ChatGPT.app` (required by the refresh skill — it reads the app's `app.asar`).
- **Node.js** (the refresh skill runs `node` and `npx @electron/asar` / `prettier`).
- **[Bun](https://bun.sh)** (the deobfuscate skill's scripts are TypeScript run with `bun`).
- An agent that can run skills (Claude Code, or any Codex/agent harness that reads `.agents/skills`). You can also run the bundled scripts by hand — see below.

The skills live under [`.agents/skills/`](.agents/skills/). Point your agent at this repo, then invoke a skill by name; or run the scripts directly.

---

## Skill 1 — Sync the latest ChatGPT app code (`codex-app-ref-refresh`)

Recreates `./ref` from the installed ChatGPT app, so the source you analyze always matches the version you have installed. It **deletes and replaces `./ref`**, extracts `/Applications/ChatGPT.app/Contents/Resources/app.asar` into it, then formats every extracted `.js`/`.css` with Prettier (skipping `ref/node_modules`).

### Use via an agent

From the repo root, ask the agent:

> Use **codex-app-ref-refresh** to refresh `./ref` from the installed ChatGPT app.

### Or run the script directly

```bash
# from the repo root (the directory that should own ./ref)
node .agents/skills/codex-app-ref-refresh/scripts/refresh-codex-ref.mjs
```

Options:

| Flag / env | Effect |
| ---------- | ------ |
| `--dry-run` | Print the resolved paths without deleting or extracting anything |
| `--skip-format` | Extract only; skip Prettier |
| `CHATGPT_APP_ASAR=/path/to/app.asar` | Use a ChatGPT bundle in a non-default location (`CODEX_APP_ASAR` remains a legacy alias) |

> ⚠️ Run it from the directory that should own `./ref` — the script intentionally wipes `./ref` first. It refuses to run unless the target resolves to `./ref` under the current working directory.

After it finishes, the bundled web UI lives in `ref/webview/` (entry: `ref/webview/index.html`, chunks: `ref/webview/assets/`).

---

## Skill 2 — Deobfuscate the synced code (`deobfuscate-javascript`)

Turns the minified, bundled JS extracted into `./ref` back into readable code. It's a multi-stage pipeline (deobfuscate → smart-rename → polish → optional typed `.tsx` rewrite). The agent itself does the semantic renaming; bundled `bun` scripts handle the mechanical work. Restored files land in `./restored/` with meaningful names, semantic-domain subfolders, provenance headers, and a shared `restored/IMPORT_MAP.json`. Only finalized files land in `./restored/`: the skill stages mechanical batch/script output in a hidden working area (`restored/.deobfuscate-javascript/`) first, and promotes a file only after it's organized — readable, well-named, clearly structured (and fully typed in deep mode).

### Use via an agent

After `./ref` exists, ask the agent (English or Chinese both trigger it):

> Use **deobfuscate-javascript** to restore `./ref`.

or, for example: *"deobfuscate `ref/webview/assets`"*, *"反混淆 `./ref`"*, *"看懂这段 JS"*.

### Two depth levels

| Depth | Trigger | Output |
| ----- | ------- | ------ |
| **Readable** (default) | just ask to restore | Readable, well-named JS/TSX — naming quality is the bar |
| **Deep / production** | say **"deep" / "full" / "深度" / "完整" / "typed" / "production"** | Adds typed `.tsx` rewrite, npm-import resolution, full import-graph orchestration, and an acceptance-review loop |

By default it works on the **whole import tree**: it reads `ref/webview/index.html`, auto-discovers the app entry, and recursively restores every reachable project-local chunk. Paste a single file instead and it restores just that file.

### Install script deps (first time)

```bash
cd .agents/skills/deobfuscate-javascript
bun install
```

The individual `bun scripts/*.ts` tools (detect, extract, smart-rename, polish, quality-gate, …) are documented in the skill's [`SKILL.md`](.agents/skills/deobfuscate-javascript/SKILL.md). In normal use you don't call them by hand — the agent orchestrates them.

---

## Repository layout

```
decode-codex/
├─ .agents/skills/
│  ├─ codex-app-ref-refresh/      # Skill 1: sync ChatGPT.app → ./ref
│  └─ deobfuscate-javascript/     # Skill 2: ./ref → ./restored
├─ ref/                           # extracted ChatGPT app source (generated by Skill 1)
└─ restored/                      # readable, deobfuscated output (generated by Skill 2)
```

`ref/` and `restored/` are generated artifacts — regenerate them with the skills rather than editing by hand.

---

## ⚠️ Legal & ethical note

This project is for **personal study and interoperability research** of software you have installed. The extracted code is © OpenAI; respect the ChatGPT app's license and terms of service. Don't redistribute the extracted or restored code.
