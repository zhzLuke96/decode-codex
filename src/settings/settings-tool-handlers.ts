// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Backend handlers for the `read_settings` / `write_settings` MCP dynamic tools:
// validate the tool arguments, round-trip the settings payload through the host
// ("settings-read" / "settings-write"), normalize the appearance/theme payload,
// and (on write) invalidate the cached settings query so the UI refreshes.
import { z } from "zod";
import { vscodeApiF, vscodeApiN } from "../boundaries/vscode-api";
import { createToolErrorResult } from "../runtime/tool-result-runtime";
import {
  isCodeThemeId,
  listCodeThemesForVariant,
} from "../github/diff-view-mode";
// Theme-system boundary: compute the resolved chrome-theme CSS variables for a
// code theme in a given light/dark variant.
import { resolveChromeTheme as resolveChromeThemeVariablesForMode } from "../boundaries/onboarding-commons-externals.facade";

type ThemeVariant = "light" | "dark";

type SettingsMap = Record<string, unknown>;

interface SettingDefinitionEntry {
  key: string;
  schema?: unknown;
  [field: string]: unknown;
}

interface SettingsReadResult {
  definitions: SettingDefinitionEntry[];
  [field: string]: unknown;
}

interface ToolResult {
  contentItems: { type: string; text: string }[];
  success: boolean;
}

interface QueryClientLike {
  invalidateQueries(options: {
    queryKey: readonly unknown[];
  }): Promise<unknown>;
}

const THEME_SETTING_KEYS = {
  lightCodeThemeId: "appearanceLightCodeThemeId",
  darkCodeThemeId: "appearanceDarkCodeThemeId",
  lightChromeTheme: "appearanceLightChromeTheme",
  darkChromeTheme: "appearanceDarkChromeTheme",
} as const;

const SETTINGS_QUERY_KEY = ["get-settings"] as const;

const readSettingsArgsSchema = z.object({});

const writeSettingsArgsSchema = z.object({
  settings: z.record(z.string(), z.unknown()),
});

function resolveCodeThemeEnumSchema(variant: ThemeVariant): z.ZodType<string> {
  const [first, ...rest] = listCodeThemesForVariant(variant).map(
    (theme) => theme.id,
  );
  if (first == null) {
    throw Error(`Expected at least one ${variant} code theme`);
  }
  return z.enum([first, ...rest] as [string, ...string[]]);
}

function codeThemeSchemaForKey(key: string): z.ZodType<string> | undefined {
  switch (key) {
    case THEME_SETTING_KEYS.lightCodeThemeId:
      return resolveCodeThemeEnumSchema("light");
    case THEME_SETTING_KEYS.darkCodeThemeId:
      return resolveCodeThemeEnumSchema("dark");
    default:
      return undefined;
  }
}

function resolveDefinitionSchema(definition: SettingDefinitionEntry): unknown {
  const schema = codeThemeSchemaForKey(definition.key);
  return schema == null ? definition.schema : z.toJSONSchema(schema);
}

function transformSettingsReadResult(
  result: SettingsReadResult,
): SettingsReadResult {
  return {
    ...result,
    definitions: result.definitions.map((definition) => ({
      ...definition,
      schema: resolveDefinitionSchema(definition),
    })),
  };
}

function validateSettingsAgainstSchemas(settings: SettingsMap): void {
  for (const [key, value] of Object.entries(settings)) {
    codeThemeSchemaForKey(key)?.parse(value);
  }
}

function readValidStringSetting(
  settings: SettingsMap,
  key: string,
): string | undefined {
  if (!(key in settings)) return undefined;
  const value = settings[key];
  if (typeof value === "string" && isCodeThemeId(value)) return value;
  return undefined;
}

async function resolveModeChromeVariables(
  settings: SettingsMap,
  codeThemeIdKey: string,
  chromeThemeKey: string,
  variant: ThemeVariant,
): Promise<unknown> {
  if (chromeThemeKey in settings) return undefined;
  const codeThemeId = readValidStringSetting(settings, codeThemeIdKey);
  if (codeThemeId == null) return undefined;
  return resolveChromeThemeVariablesForMode(codeThemeId, variant);
}

async function serializeSettingsForWrite(
  settings: SettingsMap,
): Promise<SettingsMap> {
  validateSettingsAgainstSchemas(settings);
  const [lightVariables, darkVariables] = await Promise.all([
    resolveModeChromeVariables(
      settings,
      THEME_SETTING_KEYS.lightCodeThemeId,
      THEME_SETTING_KEYS.lightChromeTheme,
      "light",
    ),
    resolveModeChromeVariables(
      settings,
      THEME_SETTING_KEYS.darkCodeThemeId,
      THEME_SETTING_KEYS.darkChromeTheme,
      "dark",
    ),
  ]);
  const serialized: SettingsMap = { ...settings };
  if (lightVariables != null) {
    serialized[THEME_SETTING_KEYS.lightChromeTheme] = lightVariables;
  }
  if (darkVariables != null) {
    serialized[THEME_SETTING_KEYS.darkChromeTheme] = darkVariables;
  }
  return serialized;
}

function formatSettingsToolResult(payload: unknown): ToolResult {
  return {
    contentItems: [{ type: "inputText", text: JSON.stringify(payload) }],
    success: true,
  };
}

async function invalidateSettingsQueries(
  queryClient: QueryClientLike,
): Promise<void> {
  await queryClient.invalidateQueries({ queryKey: SETTINGS_QUERY_KEY });
  vscodeApiF.dispatchMessage("query-cache-invalidate", {
    queryKey: SETTINGS_QUERY_KEY,
  });
}

export async function handleReadSettingsTool(
  args: unknown,
): Promise<ToolResult> {
  if (!readSettingsArgsSchema.safeParse(args).success) {
    return createToolErrorResult("read_settings received invalid arguments.");
  }
  try {
    const response = (await vscodeApiN("settings-read", {
      params: undefined,
    })) as SettingsReadResult;
    return formatSettingsToolResult(transformSettingsReadResult(response));
  } catch (error) {
    return createToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleWriteSettingsTool(
  args: unknown,
  queryClient: QueryClientLike,
): Promise<ToolResult> {
  const parsed = writeSettingsArgsSchema.safeParse(args);
  if (!parsed.success) {
    return createToolErrorResult("write_settings received invalid arguments.");
  }
  try {
    const result = await vscodeApiN("settings-write", {
      params: {
        settings: await serializeSettingsForWrite(parsed.data.settings),
      },
    });
    await invalidateSettingsQueries(queryClient);
    return formatSettingsToolResult(result);
  } catch (error) {
    return createToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}
