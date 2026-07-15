// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

export type CloudEnvironmentPermissions = {
  can_delete?: boolean;
  can_write?: boolean;
  is_creator?: boolean;
};
export type CloudMachine = {
  id?: string;
  machine_id?: string;
  label?: string;
  name?: string;
  display_name?: string;
};
export type CloudConnector = {
  connector_id?: string;
  id?: string;
  name?: string;
  display_name?: string;
  service?: string;
  provider?: string;
  status?: string;
  enabled?: boolean;
  link?: unknown;
};
export type CloudRepository = {
  id?: string;
  repository_id?: string;
  full_name?: string;
  name?: string;
  owner?: string;
  connector_id?: string;
  installation_id?: string | number;
};
export type CloudEnvironment = {
  id?: string;
  environment_id?: string;
  label?: string;
  name?: string;
  description?: string | null;
  repository?: CloudRepository | null;
  github_repository?: CloudRepository | null;
  repository_id?: string | null;
  repository_name?: string | null;
  github_connector_id?: string | null;
  connector_id?: string | null;
  machine?: CloudMachine | null;
  machine_id?: string | null;
  creator?: {
    email?: string;
    name?: string;
    display_name?: string;
  } | null;
  created_at?: string | null;
  updated_at?: string | null;
  setup_script?: string | null;
  setup_commands?: string | null;
  maintenance_script?: string | null;
  maintenance_commands?: string | null;
  workspace_directory?: string | null;
  environment_variables?: Record<string, string> | KeyValueEntry[] | null;
  env_vars?: Record<string, string> | KeyValueEntry[] | null;
  secrets?: Record<string, unknown> | SecretEntry[] | null;
  network_access?: NetworkAccessConfig | string | null;
  allowed_domains?: string[] | null;
  blocked_domains?: string[] | null;
  automatic_setup_enabled?: boolean | null;
  post_setup_cache_enabled?: boolean | null;
  authtranslator_enabled?: boolean | null;
  docker_in_docker_enabled?: boolean | null;
  share_setting?: SharingMode | null;
  sharing?: SharingMode | null;
  is_pinned?: boolean | null;
  task_count?: number | null;
  etag?: string | null;
  permissions?: CloudEnvironmentPermissions | null;
};
export type CloudEnvironmentSearchPage = {
  environments: CloudEnvironment[];
  nextCursor: string | null;
};
export type KeyValueEntry = {
  id: string;
  key: string;
  value: string;
};
export type SecretEntry = {
  id: string;
  name: string;
  domain: string;
};
export type NetworkAccessMode = "off" | "on" | "custom";
export type NetworkAccessConfig = {
  mode?: NetworkAccessMode;
  allowed_domains?: string[];
  blocked_domains?: string[];
};
export type SharingMode = "private" | "workspace" | "public";
export type EnvironmentFormState = {
  label: string;
  description: string;
  repositoryId: string;
  repositoryName: string;
  githubConnectorId: string;
  machineId: string;
  workspaceDirectory: string;
  setupCommands: string;
  maintenanceCommands: string;
  environmentVariables: KeyValueEntry[];
  secrets: SecretEntry[];
  networkAccess: NetworkAccessMode;
  allowedDomains: string;
  blockedDomains: string;
  automaticSetupEnabled: boolean;
  postSetupCacheEnabled: boolean;
  authtranslatorEnabled: boolean;
  dockerInDockerEnabled: boolean;
  sharing: SharingMode;
};
export type EnvironmentFormErrors = Partial<
  Record<keyof EnvironmentFormState | "form", string>
>;
export function getEnvironmentId(environment: CloudEnvironment): string {
  return environment.environment_id ?? environment.id ?? "";
}
export function getEnvironmentLabel(environment: CloudEnvironment): string {
  return environment.label ?? environment.name ?? "Untitled environment";
}
export function getMachineId(machine: CloudMachine): string {
  return machine.machine_id ?? machine.id ?? "";
}
export function getMachineLabel(machine: CloudMachine): string {
  return (
    machine.display_name ??
    machine.label ??
    machine.name ??
    getMachineId(machine)
  );
}
export function getConnectorId(connector: CloudConnector): string {
  return connector.connector_id ?? connector.id ?? "";
}
export function getConnectorLabel(connector: CloudConnector): string {
  return (
    connector.display_name ??
    connector.name ??
    connector.provider ??
    getConnectorId(connector)
  );
}
export function getRepositoryId(repository: CloudRepository): string {
  return repository.repository_id ?? repository.id ?? "";
}
export function getRepositoryName(repository: CloudRepository): string {
  if (repository.full_name) return repository.full_name;
  if (repository.owner && repository.name)
    return `${repository.owner}/${repository.name}`;
  return repository.name ?? getRepositoryId(repository);
}
