// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Build the "restore message" record used to re-submit a composer turn after steering.
import { generateId } from "../boundaries/onboarding-commons-externals.facade";

export interface CreateRestoreMessageArgs<TContext extends { prompt: string }> {
  context: TContext;
  cwd: string;
  text?: string;
  messageId?: string;
  createdAt?: number;
}

export interface RestoreMessage<TContext extends { prompt: string }> {
  id: string;
  text: string;
  context: TContext;
  cwd: string;
  createdAt: number;
}

export function createRestoreMessage<TContext extends { prompt: string }>({
  context,
  cwd,
  text = context.prompt,
  messageId = generateId(),
  createdAt = Date.now(),
}: CreateRestoreMessageArgs<TContext>): RestoreMessage<TContext> {
  return {
    id: messageId,
    text,
    context,
    cwd,
    createdAt,
  };
}
