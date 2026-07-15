// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
import {
  worktreeNewThreadQueryCompatSlotLowerHLowerU as getAppMentionPath,
  worktreeNewThreadQueryCompatSlotUpperMLowerU as getPluginMentionPath,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedFunction0758 as normalizeMentionPath,
  currentAppInitialSharedMember0919 as findNextPromptMention,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

type AutomationPromptMention = {
  end: number;
  path: string;
};

export type AutomationMentionApp = {
  id: string;
  name: string;
};

export type AutomationMentionPlugin = {
  composerIconPath?: string | null;
  displayName?: string | null;
  logoPath?: string | null;
  plugin: {
    id: string;
    name: string;
  };
};

export type AutomationPromptSource = {
  id: string;
  prompt: string;
};

export type AutomationMentionSource =
  | {
      app: AutomationMentionApp;
      kind: "app";
      path: string;
    }
  | {
      kind: "plugin";
      logoUrl?: string | null;
      name: string;
      path: string;
    };

export function getAutomationMentionSourceName(
  source: AutomationMentionSource,
): string {
  return source.kind === "app" ? source.app.name : source.name;
}

export function buildAutomationMentionSourcesByAutomationId({
  apps,
  automations,
  plugins,
}: {
  apps?: AutomationMentionApp[] | null;
  automations: AutomationPromptSource[];
  plugins: AutomationMentionPlugin[];
}): Map<string, AutomationMentionSource[]> {
  const sourcesByPath = new Map<string, AutomationMentionSource>();

  if (apps != null) {
    for (const app of apps) {
      const path = getAppMentionPath(app.id);
      sourcesByPath.set(path, {
        app,
        kind: "app",
        path,
      });
    }
  }

  for (const plugin of plugins) {
    const path = getPluginMentionPath(plugin.plugin.id);
    sourcesByPath.set(path, {
      kind: "plugin",
      logoUrl: plugin.composerIconPath ?? plugin.logoPath,
      name: plugin.displayName ?? plugin.plugin.name,
      path,
    });
  }

  const sourcesByAutomationId = new Map<string, AutomationMentionSource[]>();
  for (const automation of automations) {
    const sources: AutomationMentionSource[] = [];
    const seenPaths = new Set<string>();
    let promptIndex = 0;

    while (promptIndex < automation.prompt.length) {
      const mention = findNextPromptMention(
        automation.prompt,
        promptIndex,
      ) as AutomationPromptMention | null;
      if (mention == null) break;

      const normalizedPath = normalizeMentionPath(mention.path);
      const source = sourcesByPath.get(normalizedPath);
      if (source != null && !seenPaths.has(normalizedPath)) {
        sources.push(source);
        seenPaths.add(normalizedPath);
      }

      promptIndex = mention.end;
    }

    if (sources.length > 0) {
      sourcesByAutomationId.set(automation.id, sources);
    }
  }

  return sourcesByAutomationId;
}
