// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Semantic helpers for the AppgenSettingsPage restore.

export const REDACTED_SECRET_VALUE = "<REDACTED>";

export type SiteEnvironmentEntry = {
  is_secret?: boolean;
  key: string;
  type?: string;
  value?: string | null;
};

export type SiteEnvironment = {
  entries: SiteEnvironmentEntry[];
};

export type EnvironmentVariableDraft = {
  key: string;
  value: string;
};

export type SecretDraft = EnvironmentVariableDraft & {
  keyInputDisabledWhileValue?: string;
  previousKey?: string;
};

export type EnvironmentDraft = {
  environmentVariables: EnvironmentVariableDraft[];
  secrets: SecretDraft[];
};

export type EnvironmentUpdate = {
  remove: string[];
  set_values: SiteEnvironmentEntry[];
};

export type TitleUpdate = {
  title: string;
};

export function toEnvironmentDraft(
  environment: SiteEnvironment,
): EnvironmentDraft {
  return {
    environmentVariables: environment.entries
      .filter((entry) => !entry.is_secret)
      .map(({ key, value }) => ({
        key,
        value: value ?? "",
      })),
    secrets: environment.entries
      .filter((entry) => entry.is_secret)
      .map(({ key }) => ({
        key,
        keyInputDisabledWhileValue: REDACTED_SECRET_VALUE,
        previousKey: key,
        value: REDACTED_SECRET_VALUE,
      })),
  };
}

export function buildEnvironmentUpdate(
  baseEnvironment: SiteEnvironment,
  draft: EnvironmentDraft,
): EnvironmentUpdate | null {
  const draftKeys = [
    ...draft.environmentVariables.map(({ key }) => key),
    ...draft.secrets.map(({ key }) => key),
  ];
  if (new Set(draftKeys).size !== draftKeys.length) return null;

  const retainedBaseKeys = new Set([
    ...draft.environmentVariables.map(({ key }) => key),
    ...draft.secrets.map((secret) =>
      isUnchangedSecret(secret) ? secret.previousKey : secret.key,
    ),
  ]);

  return {
    remove: baseEnvironment.entries
      .filter(({ key }) => !retainedBaseKeys.has(key))
      .map(({ key }) => key),
    set_values: [
      ...draft.environmentVariables
        .filter((entry) => shouldSetEnvironmentVariable(baseEnvironment, entry))
        .map((entry) => toEnvironmentUpdateEntry(entry, false)),
      ...draft.secrets
        .filter((entry) => !isUnchangedSecret(entry))
        .map((entry) => toEnvironmentUpdateEntry(entry, true)),
    ],
  };
}

export function buildTitleState(
  draftTitle: string | null,
  siteTitle: string,
  forceInvalid: boolean = false,
): {
  isInvalid: boolean;
  title: string;
  update: TitleUpdate | null;
} {
  const title = draftTitle ?? siteTitle;
  const trimmedTitle = title.trim();
  return {
    isInvalid: draftTitle != null && trimmedTitle.length === 0,
    title,
    update:
      draftTitle != null &&
      trimmedTitle.length > 0 &&
      (trimmedTitle !== siteTitle || forceInvalid)
        ? {
            title: trimmedTitle,
          }
        : null,
  };
}

export async function saveSettingsUpdates({
  environmentUpdate,
  titleUpdate,
  updateEnvironment,
  updateTitle,
}: {
  environmentUpdate: EnvironmentUpdate | null;
  titleUpdate: TitleUpdate | null;
  updateEnvironment: (update: EnvironmentUpdate) => Promise<unknown>;
  updateTitle: (update: TitleUpdate) => Promise<unknown>;
}): Promise<{
  environmentSaved: boolean;
  titleSaved: boolean;
}> {
  const [titleResult, environmentResult] = await Promise.allSettled([
    titleUpdate == null ? undefined : updateTitle(titleUpdate),
    environmentUpdate == null
      ? undefined
      : updateEnvironment(environmentUpdate),
  ]);
  return {
    environmentSaved: environmentResult.status === "fulfilled",
    titleSaved: titleResult.status === "fulfilled",
  };
}

export function applyPastedEnvironmentText(
  entries: EnvironmentVariableDraft[],
  index: number,
  pastedText: string,
): EnvironmentVariableDraft[] | null {
  const pastedEntries = parseEnvironmentText(pastedText);
  const firstEntry = pastedEntries[0];
  return firstEntry == null
    ? null
    : [
        ...entries.map((entry, entryIndex) =>
          entryIndex === index
            ? {
                ...entry,
                ...firstEntry,
              }
            : entry,
        ),
        ...pastedEntries.slice(1),
      ];
}

export function parseEnvironmentText(
  source: string,
): EnvironmentVariableDraft[] {
  const entries: EnvironmentVariableDraft[] = [];
  for (let rawLine of source.split(/\r?\n/)) {
    let line = rawLine.trim();
    if (line.length === 0 || line.startsWith("#") || line.startsWith(";")) {
      continue;
    }
    if (line.startsWith("export ")) line = line.slice(7).trim();

    const commentIndex = findUnquotedCharacter(line, "#", (index) => {
      return line[index - 1]?.trim() === "";
    });
    if (commentIndex !== -1) line = line.slice(0, commentIndex).trim();
    if (line.length === 0) continue;

    const separatorIndex = findUnquotedCharacter(line, "=");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    if (key.length === 0) continue;

    entries.push({
      key,
      value: unwrapQuotedValue(line.slice(separatorIndex + 1).trim()),
    });
  }
  return entries;
}

function isUnchangedSecret(secret: SecretDraft): boolean {
  return secret.previousKey != null && secret.value === REDACTED_SECRET_VALUE;
}

function shouldSetEnvironmentVariable(
  baseEnvironment: SiteEnvironment,
  entry: EnvironmentVariableDraft,
): boolean {
  const existingEntry = baseEnvironment.entries.find(
    (baseEntry) => baseEntry.key === entry.key,
  );
  return (
    existingEntry == null ||
    existingEntry.is_secret ||
    existingEntry.value !== entry.value
  );
}

function toEnvironmentUpdateEntry(
  entry: EnvironmentVariableDraft,
  isSecret: boolean,
): SiteEnvironmentEntry {
  return {
    is_secret: isSecret,
    key: entry.key,
    type: "envvar",
    value: entry.value,
  };
}

function findUnquotedCharacter(
  source: string,
  target: string,
  isValidIndex: (index: number) => boolean = () => true,
): number {
  let escaping = false;
  let inDoubleQuotes = false;
  let inSingleQuotes = false;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (escaping) {
      escaping = false;
      continue;
    }
    if (character === "\\") {
      escaping = true;
      continue;
    }
    if (character === "'" && !inDoubleQuotes) {
      inSingleQuotes = !inSingleQuotes;
      continue;
    }
    if (character === '"' && !inSingleQuotes) {
      inDoubleQuotes = !inDoubleQuotes;
      continue;
    }
    if (
      character === target &&
      !inSingleQuotes &&
      !inDoubleQuotes &&
      isValidIndex(index)
    ) {
      return index;
    }
  }
  return -1;
}

function unwrapQuotedValue(value: string): string {
  return (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
    ? value.slice(1, -1)
    : value;
}
