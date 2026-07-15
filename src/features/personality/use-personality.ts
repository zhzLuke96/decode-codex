// Restored from ref/webview/assets/use-personality-BfBCBHKs.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~bnuob1na-D8igKadN.js.
// Reads and writes the effective Codex personality setting for a host/thread.
import React from "react";
import {
  _appScopeA as useAppScopeFamilyValue,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  conversationPermissionConfigSignal,
  gt as availableHostIdsSignal,
  latestTurnByConversationIdSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { vscodeApiUnderscore as useMutation } from "../../boundaries/vscode-api";
import { normalizePersonality } from "../../boundaries/src-l0hb-mz-p";
import {
  getStatsigClient,
  getStatsigDynamicConfig,
  readStatsigGateValue,
} from "../../vendor/statsig-current-runtime";
import { once } from "../../runtime/commonjs-interop";
import {
  USER_CONFIG_QUERY_KEY,
  userConfigQueryOptions,
} from "../../config/config-queries";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
const PERSONALITY_CONFIG_KEY = "personality";
const LEGACY_MODEL_PERSONALITY_CONFIG_KEY = "model_personality";
const PERSONALITY_GATE = "1444479692";
const PERSONALITY_DYNAMIC_CONFIG = "1867347216";
const DEFAULT_PERSONALITY_DYNAMIC_CONFIG_FIELD = "default_personality";
const FALLBACK_PERSONALITY = "friendly";
const USER_SAVED_CONFIG_QUERY_KEY = ["user-saved-config"] as const;
type Personality = string | null;
type UsePersonalityOptions = {
  conversationId?: string | null;
  hostId: string;
};
type ConfigWriteTarget = {
  expectedVersion?: string | number | null;
  filePath?: string | null;
};
type UserConfigResponse = {
  config?: Record<string, unknown> | null;
  configWriteTarget?: ConfigWriteTarget | null;
};
type ConversationPersonalityConfig = {
  personality?: Personality;
};
type ConversationTurn = {
  params: {
    personality?: Personality;
  };
};
type ConfigEdit = {
  keyPath: string;
  mergeStrategy: "replace" | "upsert";
  value: Personality;
};
type MutationResult<TVariables> = {
  mutate: (variables: TVariables) => void;
};
type UseMutation = <TVariables>(options: {
  mutationFn: (variables: TVariables) => Promise<void>;
  onSettled: () => Promise<void>;
}) => MutationResult<TVariables>;
type UsePersonalityResult = {
  isPersonalityEnabled: boolean;
  personality: Personality;
  setPersonality: (personality: Personality) => void;
};
function readConfigPersonality(
  config: Record<string, unknown> | null | undefined,
  key: string,
): Personality {
  return normalizePersonality(config?.[key]) as Personality;
}
function getWriteTarget(response: UserConfigResponse | undefined): {
  expectedVersion: string | number | null;
  filePath: string | null;
} {
  return {
    filePath: response?.configWriteTarget?.filePath ?? null,
    expectedVersion: response?.configWriteTarget?.expectedVersion ?? null,
  };
}
async function invalidatePersonalityConfigQueries(
  invalidateQueries: (queryKey: readonly unknown[]) => Promise<unknown>,
): Promise<void> {
  await Promise.all([
    invalidateQueries(USER_CONFIG_QUERY_KEY),
    invalidateQueries(USER_SAVED_CONFIG_QUERY_KEY),
  ]);
}

export const initModelPersonalityRuntimeChunk = once(() => {});

export function usePersonality({
  conversationId = null,
  hostId,
}: UsePersonalityOptions): UsePersonalityResult {
  const isPersonalityEnabled = readStatsigGateValue(PERSONALITY_GATE);
  const statsigClient = getStatsigClient();
  const invalidateQueries = invalidateQueriesAndBroadcast();
  const availableHostIds = useAppScopeValue(availableHostIdsSignal) as string[];
  const isHostAvailable = availableHostIds.includes(hostId);
  const { data, isLoading } = useAppScopeFamilyValue(
    userConfigQueryOptions,
    hostId,
  ) as {
    data?: UserConfigResponse;
    isLoading: boolean;
  };
  const conversationConfig = useAppScopeFamilyValue(
    conversationPermissionConfigSignal,
    conversationId,
  ) as ConversationPersonalityConfig | null | undefined;
  const latestTurn = useAppScopeFamilyValue(
    latestTurnByConversationIdSignal,
    conversationId,
  ) as ConversationTurn | null | undefined;
  const configuredPersonality = readConfigPersonality(
    data?.config,
    PERSONALITY_CONFIG_KEY,
  );
  const legacyModelPersonality = readConfigPersonality(
    data?.config,
    LEGACY_MODEL_PERSONALITY_CONFIG_KEY,
  );
  const hasLegacyModelPersonality =
    data?.config != null &&
    Object.prototype.hasOwnProperty.call(
      data.config,
      LEGACY_MODEL_PERSONALITY_CONFIG_KEY,
    );
  let defaultPersonality = configuredPersonality ?? legacyModelPersonality;
  if (!isPersonalityEnabled) {
    defaultPersonality = null;
  } else if (!isLoading && defaultPersonality == null) {
    defaultPersonality =
      (normalizePersonality(
        getStatsigDynamicConfig(statsigClient, PERSONALITY_DYNAMIC_CONFIG).get(
          DEFAULT_PERSONALITY_DYNAMIC_CONFIG_FIELD,
          null,
        ),
      ) as Personality) ?? FALLBACK_PERSONALITY;
  }
  let effectivePersonality = defaultPersonality;
  if (conversationId != null && conversationConfig?.personality !== undefined) {
    effectivePersonality = conversationConfig.personality;
  } else if (conversationId != null && latestTurn?.params.personality != null) {
    effectivePersonality = latestTurn.params.personality;
  }
  if (!isPersonalityEnabled) {
    effectivePersonality = null;
  }
  const migratedHostIdRef = React.useRef<string | null>(null);
  const invalidatePersonalityQueries = React.useCallback(
    () => invalidatePersonalityConfigQueries(invalidateQueries),
    [invalidateQueries],
  );
  const typedUseMutation = useMutation as UseMutation;
  const writePersonalityMutation = typedUseMutation<Personality>({
    mutationFn: async (personality) => {
      if (!isHostAvailable) {
        return;
      }
      await sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits: [
          {
            keyPath: PERSONALITY_CONFIG_KEY,
            value: personality,
            mergeStrategy: "upsert",
          },
        ],
        ...getWriteTarget(data),
      });
    },
    onSettled: invalidatePersonalityQueries,
  });
  const migrateLegacyPersonalityMutation = typedUseMutation<void>({
    mutationFn: async () => {
      if (!isHostAvailable || !hasLegacyModelPersonality) {
        return;
      }
      const edits: ConfigEdit[] = [
        {
          keyPath: LEGACY_MODEL_PERSONALITY_CONFIG_KEY,
          value: null,
          mergeStrategy: "replace",
        },
      ];
      if (configuredPersonality == null && legacyModelPersonality != null) {
        edits.unshift({
          keyPath: PERSONALITY_CONFIG_KEY,
          value: legacyModelPersonality,
          mergeStrategy: "upsert",
        });
      }
      await sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits,
        ...getWriteTarget(data),
      });
    },
    onSettled: invalidatePersonalityQueries,
  });
  React.useEffect(() => {
    if (
      !isHostAvailable ||
      !hasLegacyModelPersonality ||
      migratedHostIdRef.current === hostId
    ) {
      return;
    }
    migratedHostIdRef.current = hostId;
    migrateLegacyPersonalityMutation.mutate(undefined);
  }, [
    hasLegacyModelPersonality,
    hostId,
    isHostAvailable,
    migrateLegacyPersonalityMutation,
  ]);
  React.useEffect(() => {
    if (isLoading || !isHostAvailable) {
      return;
    }
    void sendAppServerRequest("set-personality", {
      hostId,
      personality: defaultPersonality,
    });
  }, [defaultPersonality, hostId, isHostAvailable, isLoading]);
  const setPersonality = React.useCallback(
    (personality: Personality) => {
      if (!isHostAvailable) {
        return;
      }
      void Promise.all([
        sendAppServerRequest("set-personality", {
          hostId,
          personality,
        }),
        ...(conversationId == null
          ? []
          : [
              sendAppServerRequest("update-thread-settings-for-next-turn", {
                conversationId,
                threadSettings: {
                  personality,
                },
              }),
            ]),
      ]);
      writePersonalityMutation.mutate(personality);
    },
    [conversationId, hostId, isHostAvailable, writePersonalityMutation],
  );
  return {
    isPersonalityEnabled,
    personality: effectivePersonality,
    setPersonality,
  };
}
