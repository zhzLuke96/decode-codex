// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parses ":created-thread" inline directive tags out of an assistant message,
// returning the validated thread / pending-worktree references they declare.
import {
  parseInlineDirectiveTags,
  lineStartTagNames,
  objectSchema,
  stringSchema,
  unionSchema,
} from "../boundaries/onboarding-commons-externals.facade";

export interface CreatedThreadReference {
  threadId?: string;
  pendingWorktreeId?: string;
}

const createdThreadAttributesSchema = unionSchema([
  objectSchema({ threadId: stringSchema().trim().min(1) }),
  objectSchema({ pendingWorktreeId: stringSchema().trim().min(1) }),
]);

export function parseCreatedThreadTags(
  source: string,
): CreatedThreadReference[] {
  if (!source.includes(":created-thread")) {
    return [];
  }

  const references: CreatedThreadReference[] = [];
  for (const tag of parseInlineDirectiveTags(source, {
    lineStartNames: [lineStartTagNames],
  })) {
    if (tag.name !== "created-thread") {
      continue;
    }
    const parsed = createdThreadAttributesSchema.safeParse(tag.attributes);
    if (parsed.success) {
      references.push(parsed.data);
    }
  }
  return references;
}
