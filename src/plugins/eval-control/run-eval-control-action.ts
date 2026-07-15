// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Dev-only eval-control action dispatcher: validates an incoming action against
// the discriminated union of supported actions and routes it to its handler.
// Refuses to run outside dev builds.

import { z } from "zod";
import {
  AppBuildChannel,
  getAppBuildChannel,
} from "../../boundaries/onboarding-commons-externals.facade";
import { type EvalControlContext } from "./app-scope";
import {
  pluginsConfigureActionSchema,
  pluginsListActionSchema,
  runPluginsConfigureAction,
  runPluginsListAction,
} from "./plugin-actions";
import {
  acceptMatchingElicitationActionSchema,
  runAcceptMatchingElicitationAction,
} from "./mcp-elicitation-actions";
import {
  createThreadActionSchema,
  readThreadActionSchema,
  runCreateThreadAction,
  runReadThreadAction,
  runSetThreadArchivedAction,
  setThreadArchivedActionSchema,
} from "./thread-actions";

export const evalControlActionSchema = z.discriminatedUnion("type", [
  pluginsListActionSchema,
  pluginsConfigureActionSchema,
  acceptMatchingElicitationActionSchema,
  createThreadActionSchema,
  readThreadActionSchema,
  setThreadArchivedActionSchema,
]);

export type EvalControlAction = z.infer<typeof evalControlActionSchema>;

export async function runEvalControlAction(
  action: unknown,
  context: EvalControlContext,
): Promise<unknown> {
  if (getAppBuildChannel() !== AppBuildChannel.Dev) {
    throw new Error("eval control actions are only available in dev builds");
  }
  const parsed = evalControlActionSchema.parse(action);
  switch (parsed.type) {
    case "plugins.list":
      return runPluginsListAction();
    case "plugins.configure":
      return runPluginsConfigureAction(parsed);
    case "mcp_tool_call_approvals.accept_matching":
      return runAcceptMatchingElicitationAction(parsed, context);
    case "threads.create":
      return runCreateThreadAction(parsed, context);
    case "threads.read":
      return runReadThreadAction(parsed, context);
    case "threads.set_archived":
      return runSetThreadArchivedAction(parsed, context);
  }
}
