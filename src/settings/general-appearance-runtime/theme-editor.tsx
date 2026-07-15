// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Theme editing state machine for general appearance settings.
import { useCallback, useMemo, useRef, useState } from "react";
import {
  getCodeThemeRegistration,
  getDefaultCodeThemesForVariant,
  getDefaultThemeForVariant,
} from "./theme-defaults";
import {
  canImportThemeString,
  createThemeShareString,
  mergeThemePatch,
  parseThemeShareString,
  themesEqual,
} from "./theme-share";
import type {
  CodexChromeTheme,
  CodeThemeRegistration,
  ThemeEditorSelection,
  ThemeVariant,
} from "./types";

export type ThemeEditorOptions = {
  codeThemes?: readonly CodeThemeRegistration[];
  initialCodeThemeId?: string;
  initialTheme?: CodexChromeTheme;
  onPersistSelection?: (
    selection: ThemeEditorSelection,
  ) => Promise<void> | void;
};

export function useThemeEditor(
  variant: ThemeVariant,
  options: ThemeEditorOptions = {},
) {
  const codeThemes =
    options.codeThemes ?? getDefaultCodeThemesForVariant(variant);
  const initialTheme =
    options.initialTheme ?? getDefaultThemeForVariant(variant);
  const [selection, setSelection] = useState<ThemeEditorSelection>({
    codeThemeId: options.initialCodeThemeId ?? codeThemes[0]?.id ?? "default",
    theme: initialTheme,
  });
  const lastPersistedSelection = useRef(selection);
  const pendingPersistCount = useRef(0);
  const persistSelection = useCallback(
    async (nextSelection: ThemeEditorSelection) => {
      pendingPersistCount.current += 1;
      setSelection(nextSelection);
      try {
        await options.onPersistSelection?.(nextSelection);
        lastPersistedSelection.current = nextSelection;
      } catch (error) {
        if (themesEqual(selection.theme, nextSelection.theme)) {
          setSelection(lastPersistedSelection.current);
        }
        throw error;
      } finally {
        pendingPersistCount.current -= 1;
      }
    },
    [options, selection.theme],
  );
  const setThemePatch = useCallback(
    (patch: Partial<CodexChromeTheme>) => {
      void persistSelection({
        ...selection,
        theme: mergeThemePatch(selection.theme, patch),
      });
    },
    [persistSelection, selection],
  );
  const setFontsPatch = useCallback(
    (fonts: Partial<CodexChromeTheme["fonts"]>) => {
      setThemePatch({
        fonts: {
          ...selection.theme.fonts,
          ...fonts,
        },
      });
    },
    [selection.theme.fonts, setThemePatch],
  );
  const setCodeThemeId = useCallback(
    async (codeThemeId: string) => {
      const registration = getCodeThemeRegistration(codeThemes, codeThemeId);
      await persistSelection({
        codeThemeId: registration.id,
        theme: mergeThemePatch(selection.theme, registration.theme ?? {}),
      });
    },
    [codeThemes, persistSelection, selection.theme],
  );
  return useMemo(
    () => ({
      canImportThemeString: (value: string) =>
        canImportThemeString(value, variant, codeThemes),
      codeThemes,
      exportThemeString: () =>
        createThemeShareString({
          codeThemeId: selection.codeThemeId,
          theme: selection.theme,
          variant,
        }),
      fonts: selection.theme.fonts,
      importThemeString: async (value: string) => {
        const nextSelection = parseThemeShareString(value, variant, codeThemes);
        await persistSelection(nextSelection);
      },
      isPersisting: pendingPersistCount.current > 0,
      selectedCodeTheme: getCodeThemeRegistration(
        codeThemes,
        selection.codeThemeId,
      ),
      setCodeThemeId,
      setFontsPatch,
      setThemePatch,
      theme: selection.theme,
    }),
    [
      codeThemes,
      persistSelection,
      selection,
      setCodeThemeId,
      setFontsPatch,
      setThemePatch,
      variant,
    ],
  );
}

export function initThemeEditorRuntimeChunk(): void {}
