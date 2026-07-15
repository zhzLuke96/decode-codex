// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Shared conversational-onboarding runtime: task flags, artifact/access cards,
// connector task factory, host path opening and completion dynamic tool shape.

import * as React from "react";
import { z } from "zod";
import {
  createJsonSchemaParser,
  zodToJsonSchema,
} from "../boundaries/src-l0hb-mz-p";
import {
  appScopeUnderscore as createScopedAtom,
} from "../boundaries/app-scope";
import { Button } from "../ui/button";
import { ConnectorLogo } from "../utils/connector-logo";
import { sendHostRequest } from "../runtime/host-request-runtime";
import { FileIcon } from "../icons/file-icon";
import { AppWindowIcon } from "../icons/app-window-icon";
import { ChatIcon } from "../icons/chat-icon";
import { ImagesIcon } from "../icons/images-icon";
import { conversationalOnboardingTaskScope } from "./conversational-onboarding-task-scope";

type StoreLike = {
  get<TValue = unknown>(signal: unknown): TValue;
  set<TValue = unknown>(signal: unknown, value: TValue): void;
};

type ConnectorTaskOptions = {
  AccessDeclined: React.ComponentType<Record<string, unknown>>;
  AccessDescription: React.ComponentType<Record<string, unknown>>;
  Completion: React.ComponentType<Record<string, unknown>>;
  getAccessIntro: (intl: unknown) => React.ReactNode;
  getApprovalMessage: (...args: unknown[]) => unknown;
  getDeclinedRetryPrompt: (...args: unknown[]) => React.ReactNode;
  getPluginDisplayName?: (plugin: string) => string;
  getPluginName: (accountType: string) => string | null;
  getPrompt: (...args: unknown[]) => string;
  option: Record<string, unknown>;
};

export const conversationalOnboardingActiveTaskStateSignal =
  createScopedAtom<unknown | null>(conversationalOnboardingTaskScope, null);
export const conversationalOnboardingAllSetSignal = createScopedAtom<boolean>(
  conversationalOnboardingTaskScope,
  false,
);
export const conversationalOnboardingExecutionFailedSignal =
  createScopedAtom<boolean>(conversationalOnboardingTaskScope, false);
export const conversationalOnboardingTaskStartedSignal =
  createScopedAtom<boolean>(conversationalOnboardingTaskScope, false);
export const conversationalOnboardingIntlAtom = createScopedAtom(
  conversationalOnboardingTaskScope,
  createFallbackIntl,
);

export function prepareConversationalOnboardingExecution(store: StoreLike): void {
  store.set(conversationalOnboardingAllSetSignal, false);
  store.set(conversationalOnboardingExecutionFailedSignal, false);
}

export async function openHostPath({
  cwd,
  hostId,
  path,
  target,
}: {
  cwd?: string | null;
  hostId?: string | null;
  path: string;
  target?: "fileManager" | "systemDefault" | string;
}): Promise<unknown> {
  return sendHostRequest("open-file", {
    params: { cwd, hostId, path, target },
  });
}

export function ConversationalOnboardingPermissionRequestCard({
  actions,
  icon,
  subtitle,
  title,
}: {
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
}) {
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-xl border border-token-border-light bg-token-main-surface-primary p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div className="min-w-0">
          <div className="font-medium text-token-text-primary">{title}</div>
          <div className="text-sm text-token-text-secondary">{subtitle}</div>
        </div>
      </div>
      {actions == null ? null : <div className="flex gap-2">{actions}</div>}
    </div>
  );
}

export function ConversationalOnboardingAccessGate({
  declinedMessage,
  executionFailed,
  intro,
  permissionStatus,
  request,
  requestError,
  requestFailed,
  showRequest,
  onIntroComplete,
  onRetryTask,
}: {
  declinedMessage?: React.ReactNode;
  executionFailed?: boolean;
  intro?: React.ReactNode;
  permissionStatus?: string;
  request?: React.ReactNode;
  requestError?: React.ReactNode;
  requestFailed?: boolean;
  showRequest?: boolean;
  onIntroComplete?: () => void;
  onRetryTask?: () => void;
}) {
  React.useEffect(() => {
    if (!showRequest) onIntroComplete?.();
  }, [onIntroComplete, showRequest]);

  if (permissionStatus === "denied") return <>{declinedMessage}</>;
  if (executionFailed) {
    return (
      <div className="flex items-center gap-3">
        <span>{requestError}</span>
        {onRetryTask == null ? null : (
          <Button color="primary" size="medium" onClick={onRetryTask}>
            Try again
          </Button>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {intro == null ? null : <p className="text-lg leading-6">{intro}</p>}
      {requestFailed ? (
        <div className="text-token-text-error">{requestError}</div>
      ) : null}
      {showRequest ? request : null}
    </div>
  );
}

export function ConversationalOnboardingArtifactCard({
  completionMessage,
  filePath,
  icon,
  introMessage,
  preview,
  typeLabel,
  onOpen,
  onReveal,
}: {
  completionMessage?: React.ReactNode;
  filePath: string;
  icon?: React.ReactNode;
  introMessage?: React.ReactNode;
  preview?: React.ReactNode;
  typeLabel?: React.ReactNode;
  onOpen?: () => void;
  onReveal?: () => void;
}) {
  const filename = filePath.split(/[\\/]/).pop() ?? filePath;
  return (
    <div className="flex max-w-xl flex-col gap-4">
      {introMessage == null ? null : <p>{introMessage}</p>}
      <div className="flex flex-col gap-3 rounded-xl border border-token-border-light bg-token-main-surface-primary p-4">
        <div className="flex items-center gap-3">
          {icon}
          <div className="min-w-0">
            <div className="truncate font-medium">{filename}</div>
            <div className="text-sm text-token-text-secondary">{typeLabel}</div>
          </div>
        </div>
        {preview}
        <div className="flex gap-2">
          {onOpen == null ? null : (
            <Button color="primary" size="medium" onClick={onOpen}>
              Open
            </Button>
          )}
          {onReveal == null ? null : (
            <Button color="outline" size="medium" onClick={onReveal}>
              Reveal
            </Button>
          )}
        </div>
      </div>
      {completionMessage == null ? null : <p>{completionMessage}</p>}
    </div>
  );
}

export function createConnectorOnboardingTask(options: ConnectorTaskOptions) {
  const Completion = options.Completion;
  function ConnectorTaskView(props: Record<string, unknown>) {
    const completion = props.completion ?? props.result;
    return completion == null ? null : <Completion completion={completion} />;
  }
  return {
    getApprovalMessage: options.getApprovalMessage,
    getDeclinedRetryPrompt: options.getDeclinedRetryPrompt,
    getPluginDisplayName: options.getPluginDisplayName,
    getPluginName: options.getPluginName,
    getPrompt: options.getPrompt,
    option: options.option,
    prepare(store: StoreLike) {
      store.set(conversationalOnboardingAllSetSignal, false);
      store.set(conversationalOnboardingTaskStartedSignal, false);
    },
    reset(store: StoreLike) {
      store.set(conversationalOnboardingTaskStartedSignal, false);
      store.set(conversationalOnboardingExecutionFailedSignal, false);
      store.set(conversationalOnboardingAllSetSignal, false);
    },
    retry(store: StoreLike) {
      store.set(conversationalOnboardingTaskStartedSignal, true);
      store.set(conversationalOnboardingExecutionFailedSignal, false);
    },
    start(store: StoreLike) {
      store.set(conversationalOnboardingTaskStartedSignal, true);
      store.set(conversationalOnboardingExecutionFailedSignal, false);
    },
    View: ConnectorTaskView,
  };
}

const completionSchema = z.object({
  outputType: z.literal("text").optional(),
  output: z.string().trim().min(1),
  url: z.string().url(),
});

export const conversationalOnboardingTool = {
  name: "complete_conversational_onboarding_task",
  description:
    "Report the completed plugin-based conversational onboarding task before the final response. Include a short text result and the created event or message URL.",
  inputSchema: createJsonSchemaParser().parse(zodToJsonSchema(completionSchema)),
};

type KnownAppLogoProps = Omit<
  React.ComponentProps<typeof ConnectorLogo>,
  "fallback"
> & {
  fallback?: React.ReactElement<{ className?: string }>;
};

export function KnownAppLogo({
  fallback,
  knownAppId,
  ...props
}: KnownAppLogoProps) {
  return (
    <ConnectorLogo
      {...props}
      knownAppId={knownAppId}
      fallback={fallback ?? <AppWindowIcon />}
    />
  );
}

export const CsvFileDarkIcon = FileIcon;
export const CsvFileLightIcon = FileIcon;
export const ReadingFileIcon = FileIcon;
export const GeneratingChartIcon = ImagesIcon;
export const MessagingPlaceholderIcon = ChatIcon;

export function createFallbackIntl() {
  return {
    formatMessage(
      descriptor: { defaultMessage?: string; id?: string },
      values?: Record<string, unknown>,
    ) {
      let message = descriptor.defaultMessage ?? descriptor.id ?? "";
      for (const [key, value] of Object.entries(values ?? {})) {
        message = message.replaceAll(`{${key}}`, String(value));
      }
      return message;
    },
  };
}

export function initConversationalOnboardingRuntime(): void {}
