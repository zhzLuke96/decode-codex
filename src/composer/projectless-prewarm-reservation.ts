// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Speculative "prewarm" of a projectless local conversation for the home
// composer. While the user is typing, the composer reserves a projectless
// workspace (cwd) once and can ask the host to prewarm a conversation for it,
// so the first turn starts faster. The reservation caches the in-flight
// selection promise and debounces prewarm scheduling.
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import {
  logger,
  resolveProjectlessWorkspace,
} from "../boundaries/onboarding-commons-externals.facade";

const PREWARM_SCHEDULE_DELAY_MS = 300;

export interface ProjectlessWorkspaceSelection {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  workspaceRoots: string[];
}

export interface ProjectlessWorkspaceReservation {
  created: boolean;
  isActive: () => boolean;
  selection: Promise<ProjectlessWorkspaceSelection>;
}

export interface ProjectlessPrewarmOptions {
  hostId: string;
  workspaceRoots: string[];
  prompt: string;
  collaborationMode: unknown;
  agentMode: unknown;
  serviceTier: unknown;
}

export interface ProjectlessPrewarmReservation {
  reserve(prompt: string): ProjectlessWorkspaceReservation;
  prewarm(options: ProjectlessPrewarmOptions): void;
  schedule(callback: () => void): void;
  clear(): void;
}

export function createProjectlessPrewarmReservation(): ProjectlessPrewarmReservation {
  let activeSelection: Promise<ProjectlessWorkspaceSelection> | null = null;
  let scheduledTimeout: ReturnType<typeof setTimeout> | null = null;

  return {
    reserve(prompt: string): ProjectlessWorkspaceReservation {
      if (activeSelection != null) {
        const existing = activeSelection;
        return {
          created: false,
          isActive: () => activeSelection === existing,
          selection: existing,
        };
      }
      const selection = resolveProjectlessWorkspace(["~"], {
        prompt,
      }) as Promise<ProjectlessWorkspaceSelection>;
      activeSelection = selection;
      selection.catch(() => {
        if (activeSelection === selection) activeSelection = null;
      });
      return {
        created: true,
        isActive: () => activeSelection === selection,
        selection,
      };
    },
    prewarm({
      hostId,
      workspaceRoots,
      prompt,
      collaborationMode,
      agentMode,
      serviceTier,
    }: ProjectlessPrewarmOptions): void {
      if (
        hostId !== "local" ||
        workspaceRoots.length !== 1 ||
        workspaceRoots[0] !== "~" ||
        prompt.trim() === ""
      )
        return;
      const { created, isActive, selection } = this.reserve(prompt);
      if (!created) return;
      selection
        .then((value) => {
          if (isActive() && value.cwd != null) {
            return sendAppServerRequest("prewarm-conversation-for-host", {
              hostId,
              cwd: value.cwd,
              workspaceRoots: value.workspaceRoots,
              workspaceKind: "projectless",
              projectlessOutputDirectory: value.projectlessOutputDirectory,
              collaborationMode,
              agentMode,
              serviceTier,
            });
          }
          return undefined;
        })
        .catch((error: unknown) => {
          logger.warning("Failed to prewarm projectless conversation", {
            safe: {},
            sensitive: {
              error,
            },
          });
        });
    },
    schedule(callback: () => void): void {
      scheduledTimeout ??= setTimeout(() => {
        scheduledTimeout = null;
        callback();
      }, PREWARM_SCHEDULE_DELAY_MS);
    },
    clear(): void {
      if (scheduledTimeout != null) {
        clearTimeout(scheduledTimeout);
        scheduledTimeout = null;
      }
      activeSelection = null;
    },
  };
}
