// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Command-menu code-theme preset rows with live color-swatch previews.
import type { ReactNode } from "react";
import {
  CheckIcon,
  CommandMenuItem,
  ThemeColorSwatch,
  computeCodeThemePreview,
  useCodeThemes,
  useQueries,
} from "../boundaries/onboarding-commons-externals.facade";

export const THEME_PREVIEW_SEED_QUERY_KEY = "command-menu-theme-preview-seed";

export interface ThemePresetPreviewRowsProps {
  close: () => void;
  themePresetDescription: ReactNode;
  variant: "dark" | "light";
}

interface CodeThemeOption {
  id: string;
  label: string;
}

interface ThemeColorPreview {
  accent: string;
  ink: string;
  surface: string;
}

export function ThemePresetPreviewRows({
  close,
  themePresetDescription,
  variant,
}: ThemePresetPreviewRowsProps) {
  const { codeThemes, selectedCodeTheme, setCodeThemeId, theme } =
    useCodeThemes(variant) as {
      codeThemes: CodeThemeOption[];
      selectedCodeTheme: { id: string };
      setCodeThemeId: (id: string) => void;
      theme: ThemeColorPreview;
    };
  const previewResults = useQueries({
    queries: codeThemes.map((codeTheme) => ({
      queryKey: [THEME_PREVIEW_SEED_QUERY_KEY, variant, codeTheme.id],
      queryFn: () => computeCodeThemePreview(codeTheme.id, variant),
      staleTime: Number.POSITIVE_INFINITY,
    })),
  }) as Array<{ data?: Partial<ThemeColorPreview> }>;

  return (
    <>
      {codeThemes.map((codeTheme, index) => {
        const preview = previewResults[index]?.data;
        return (
          <CommandMenuItem
            key={codeTheme.id}
            value={`theme ${codeTheme.label} color appearance preset`}
            title={codeTheme.label}
            description={themePresetDescription}
            rightAccessory={
              <ThemeColorSwatch
                theme={{
                  accent: preview?.accent ?? theme.accent,
                  ink: preview?.ink ?? theme.ink,
                  surface: preview?.surface ?? theme.surface,
                }}
              />
            }
            RightIcon={
              codeTheme.id === selectedCodeTheme.id ? CheckIcon : undefined
            }
            onSelect={() => {
              setCodeThemeId(codeTheme.id);
              close();
            }}
          />
        );
      })}
    </>
  );
}
