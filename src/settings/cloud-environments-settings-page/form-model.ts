// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

import type {
  CloudEnvironment,
  CloudRepository,
  EnvironmentFormErrors,
  EnvironmentFormState,
  KeyValueEntry,
  NetworkAccessConfig,
  SecretEntry,
  SharingMode,
} from "./types";
import { getRepositoryId, getRepositoryName } from "./types";
const emptyEntry = (prefix: string, index: number) => `${prefix}-${index}`;
export function createBlankEnvironmentForm(
  preferredConnectorId: string = "",
): EnvironmentFormState {
  return {
    allowedDomains: "",
    authtranslatorEnabled: false,
    automaticSetupEnabled: true,
    blockedDomains: "",
    description: "",
    dockerInDockerEnabled: false,
    environmentVariables: [],
    githubConnectorId: preferredConnectorId,
    label: "",
    machineId: "",
    maintenanceCommands: "",
    networkAccess: "on",
    postSetupCacheEnabled: true,
    repositoryId: "",
    repositoryName: "",
    secrets: [],
    setupCommands: "",
    sharing: "private",
    workspaceDirectory: "",
  };
}
export function createEnvironmentForm(
  environment: CloudEnvironment,
  preferredConnectorId: string = "",
): EnvironmentFormState {
  const repository =
    environment.repository ?? environment.github_repository ?? null;
  const networkAccess = normalizeNetworkAccess(environment.network_access);
  return {
    allowedDomains: toLineList(
      environment.allowed_domains ?? networkAccess.allowed_domains ?? [],
    ),
    authtranslatorEnabled: Boolean(environment.authtranslator_enabled),
    automaticSetupEnabled: environment.automatic_setup_enabled !== false,
    blockedDomains: toLineList(
      environment.blocked_domains ?? networkAccess.blocked_domains ?? [],
    ),
    description: environment.description ?? "",
    dockerInDockerEnabled: Boolean(environment.docker_in_docker_enabled),
    environmentVariables: normalizeEnvironmentVariables(
      environment.environment_variables ?? environment.env_vars ?? null,
    ),
    githubConnectorId:
      environment.github_connector_id ??
      environment.connector_id ??
      repository?.connector_id ??
      preferredConnectorId,
    label: environment.label ?? environment.name ?? "",
    machineId:
      environment.machine_id ??
      environment.machine?.machine_id ??
      environment.machine?.id ??
      "",
    maintenanceCommands:
      environment.maintenance_script ?? environment.maintenance_commands ?? "",
    networkAccess: networkAccess.mode ?? "on",
    postSetupCacheEnabled: environment.post_setup_cache_enabled !== false,
    repositoryId:
      environment.repository_id ?? getRepositoryId(repository ?? {}),
    repositoryName:
      environment.repository_name ??
      (repository ? getRepositoryName(repository) : ""),
    secrets: normalizeSecrets(environment.secrets ?? null),
    setupCommands: environment.setup_script ?? environment.setup_commands ?? "",
    sharing: environment.share_setting ?? environment.sharing ?? "private",
    workspaceDirectory: environment.workspace_directory ?? "",
  };
}
export function validateEnvironmentForm(
  form: EnvironmentFormState,
): EnvironmentFormErrors {
  const errors: EnvironmentFormErrors = {};
  if (!form.label.trim()) errors.label = "Name is required";
  if (!form.repositoryId.trim()) errors.repositoryId = "Repository is required";
  if (!form.githubConnectorId.trim()) {
    errors.githubConnectorId = "GitHub connector is required";
  }
  if (!form.machineId.trim()) errors.machineId = "Machine is required";
  const duplicateVariable = firstDuplicate(
    form.environmentVariables
      .map((entry) => entry.key.trim())
      .filter((key) => key.length > 0),
  );
  if (duplicateVariable) {
    errors.environmentVariables = `Duplicate environment variable: ${duplicateVariable}`;
  }
  const duplicateSecret = firstDuplicate(
    form.secrets
      .map((entry) => entry.name.trim())
      .filter((name) => name.length > 0),
  );
  if (duplicateSecret) errors.secrets = `Duplicate secret: ${duplicateSecret}`;
  return errors;
}
export function isEnvironmentFormValid(form: EnvironmentFormState): boolean {
  return Object.keys(validateEnvironmentForm(form)).length === 0;
}
export function createEnvironmentRequestBody(
  form: EnvironmentFormState,
): Record<string, unknown> {
  return compactObject({
    ...sharedEnvironmentRequestBody(form),
    github_connector_id: form.githubConnectorId.trim(),
    machine_id: form.machineId.trim(),
    repository_id: form.repositoryId.trim(),
  });
}
export function updateEnvironmentRequestBody(
  form: EnvironmentFormState,
): Record<string, unknown> {
  return compactObject(sharedEnvironmentRequestBody(form));
}
export function repositoryToFormPatch(repository: CloudRepository): {
  repositoryId: string;
  repositoryName: string;
  githubConnectorId?: string;
} {
  return {
    githubConnectorId: repository.connector_id,
    repositoryId: getRepositoryId(repository),
    repositoryName: getRepositoryName(repository),
  };
}
function sharedEnvironmentRequestBody(
  form: EnvironmentFormState,
): Record<string, unknown> {
  return {
    allowed_domains: toStringList(form.allowedDomains),
    authtranslator_enabled: form.authtranslatorEnabled,
    automatic_setup_enabled: form.automaticSetupEnabled,
    blocked_domains: toStringList(form.blockedDomains),
    description: form.description.trim() || null,
    docker_in_docker_enabled: form.dockerInDockerEnabled,
    environment_variables: serializeEnvironmentVariables(
      form.environmentVariables,
    ),
    label: form.label.trim(),
    maintenance_script: form.maintenanceCommands,
    network_access: {
      allowed_domains: toStringList(form.allowedDomains),
      blocked_domains: toStringList(form.blockedDomains),
      mode: form.networkAccess,
    },
    post_setup_cache_enabled: form.postSetupCacheEnabled,
    secrets: serializeSecrets(form.secrets),
    setup_script: form.setupCommands,
    share_setting: form.sharing,
    workspace_directory: form.workspaceDirectory.trim() || null,
  };
}
function normalizeNetworkAccess(
  value: CloudEnvironment["network_access"],
): NetworkAccessConfig {
  if (value == null) return {};
  if (typeof value === "string")
    return {
      mode: value as NetworkAccessConfig["mode"],
    };
  return value;
}
function normalizeEnvironmentVariables(
  value: CloudEnvironment["environment_variables"],
): KeyValueEntry[] {
  if (value == null) return [];
  if (Array.isArray(value)) {
    return value.map((entry, index) => ({
      id: entry.id ?? emptyEntry("env", index),
      key: entry.key ?? "",
      value: entry.value ?? "",
    }));
  }
  return Object.entries(value).map(([key, rawValue], index) => ({
    id: emptyEntry("env", index),
    key,
    value: `${rawValue ?? ""}`,
  }));
}
function normalizeSecrets(value: CloudEnvironment["secrets"]): SecretEntry[] {
  if (value == null) return [];
  if (Array.isArray(value)) {
    return value.map((entry, index) => ({
      domain: entry.domain ?? "",
      id: entry.id ?? emptyEntry("secret", index),
      name: entry.name ?? "",
    }));
  }
  return Object.entries(value).map(([name, rawValue], index) => {
    const maybeObject =
      rawValue != null && typeof rawValue === "object"
        ? (rawValue as {
            domain?: string;
            name?: string;
          })
        : null;
    return {
      domain: maybeObject?.domain ?? "",
      id: emptyEntry("secret", index),
      name: maybeObject?.name ?? name,
    };
  });
}
function serializeEnvironmentVariables(entries: KeyValueEntry[]) {
  return Object.fromEntries(
    entries
      .map((entry) => [entry.key.trim(), entry.value] as const)
      .filter(([key]) => key.length > 0),
  );
}
function serializeSecrets(entries: SecretEntry[]) {
  return entries
    .map((entry) => ({
      domain: entry.domain.trim(),
      name: entry.name.trim(),
    }))
    .filter((entry) => entry.name.length > 0);
}
function toStringList(value: string): string[] {
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}
function toLineList(value: string[]): string {
  return value.join("\n");
}
function firstDuplicate(values: string[]): string | null {
  const seen = new Set<string>();
  for (const value of values) {
    const normalized = value.toLowerCase();
    if (seen.has(normalized)) return value;
    seen.add(normalized);
  }
  return null;
}
function compactObject(
  value: Record<string, unknown>,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => entryValue !== undefined),
  );
}
