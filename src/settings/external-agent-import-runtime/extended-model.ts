// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~appearance-settings~general-settings-C3J7WwqO.js
// External agent import detection and import model helpers.
import type {
  ExternalAgentImportItem,
  ExternalAgentImportItemType,
} from "../general-appearance-runtime/types";

type ExternalAgentImportDetectedItem = ExternalAgentImportItem & {
  details?: {
    sessions?: readonly unknown[];
  };
  id?: string;
  providerId?: string;
};

type ExternalAgentImportSelection = Record<string, boolean | undefined>;

type ExternalAgentImportDetectionResult = {
  items: readonly ExternalAgentImportDetectedItem[];
  unsupportedProjects?: readonly unknown[];
};

type ExternalAgentImportSummary = {
  chatChoiceKey?: string;
  customizeItems: readonly ExternalAgentImportDetectedItem[];
  projectChoiceKey?: string;
};

const IMPORT_ITEM_ORDER: Record<ExternalAgentImportItemType, number> = {
  CONFIG: 0,
  AGENTS_MD: 1,
  SKILLS: 2,
  COMMANDS: 3,
  SUBAGENTS: 4,
  HOOKS: 5,
  PLUGINS: 6,
  MCP_SERVER_CONFIG: 7,
  SESSIONS: 8,
};

export function sortExternalAgentImportItems<
  TItem extends ExternalAgentImportDetectedItem,
>(items: readonly TItem[]): TItem[] {
  return [...items].sort((leftItem, rightItem) => {
    const leftOrder =
      IMPORT_ITEM_ORDER[leftItem.itemType] ?? Number.MAX_SAFE_INTEGER;
    const rightOrder =
      IMPORT_ITEM_ORDER[rightItem.itemType] ?? Number.MAX_SAFE_INTEGER;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return (leftItem.cwd ?? "").localeCompare(rightItem.cwd ?? "");
  });
}

export function filterNonSessionImportItems<
  TItem extends ExternalAgentImportDetectedItem,
>(items: readonly TItem[]): TItem[] {
  return items.filter((item) => item.itemType !== "SESSIONS");
}

export async function detectExternalAgentImportItems({
  includeHome = true,
  workspaceRoots,
}: {
  hostId: string;
  includeHome?: boolean;
  workspaceRoots?: readonly string[];
}): Promise<ExternalAgentImportDetectionResult> {
  void includeHome;
  void workspaceRoots;
  return { items: [] };
}

export async function importExternalAgentItems({
  items,
}: {
  hostId: string;
  items: readonly ExternalAgentImportDetectedItem[];
}): Promise<{ projectRoots: string[] }> {
  return items.length === 0 ? { projectRoots: [] } : { projectRoots: [] };
}

export function useExternalAgentImportModel({
  enabled = true,
  hostId = "local",
  workspaceRoots,
}: {
  enabled?: boolean;
  hostId?: string;
  workspaceRoots?: readonly string[];
}): {
  getSummaryForProviders(
    providerIds: readonly string[],
  ): ExternalAgentImportSummary | null;
  importSelection(
    selection: ExternalAgentImportSelection,
    providerIds?: readonly string[],
  ): Promise<void>;
  isImporting: boolean;
  isLoading: boolean;
  providerIds: readonly string[];
  shouldShowImportStep: boolean;
  summary: ExternalAgentImportSummary | null;
} {
  void workspaceRoots;

  return {
    getSummaryForProviders: () => null,
    importSelection: async () => {},
    isImporting: false,
    isLoading: enabled && false,
    providerIds: [],
    shouldShowImportStep: false,
    summary: null,
  };
}

export async function hasImportableExternalAgentConfig({
  hostId = "local",
  queryClient,
  workspaceRoots,
}: {
  hostId?: string;
  queryClient?: {
    fetchQuery?: (options: {
      queryFn: () => Promise<ExternalAgentImportDetectionResult>;
      queryKey: readonly unknown[];
      staleTime: number;
    }) => Promise<ExternalAgentImportDetectionResult>;
  };
  workspaceRoots?: readonly string[];
}): Promise<boolean> {
  try {
    const detectionResult =
      (await queryClient?.fetchQuery?.({
        queryFn: () =>
          detectExternalAgentImportItems({
            hostId,
            includeHome: true,
            workspaceRoots,
          }),
        queryKey: [
          "external-agent-config",
          "import-model",
          "detected",
          hostId,
          workspaceRoots,
        ],
        staleTime: 0,
      })) ??
      (await detectExternalAgentImportItems({
        hostId,
        includeHome: true,
        workspaceRoots,
      }));

    return detectionResult.items.length > 0;
  } catch {
    return false;
  }
}
