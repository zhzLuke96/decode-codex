// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { mkdirSync, readFileSync } from "node:fs";
import * as path from "node:path";
import { app } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  arrayOfStrings,
  isRecord,
  writeFileAtomically,
} from "../runtime/desktop-runtime-utils";
import {
  OwlFeatureNameState,
  OwlFeatureNativeBinding,
  OwlFeatureSettingsState,
  ProcessWithLinkedBinding,
} from "../workspace/desktop-runtime-types";

const OWL_FEATURE_BOOTSTRAP_CACHE_FILE = "owl-feature-bootstrap-cache.json";

const OWL_FEATURES_LINKED_BINDING_NAME = "electron_common_owl_features";

let owlBootstrapFeatureNames: string[] = [];

export function applyOwlFeatureBootstrapCache(
  featureNames: string[] = [],
): void {
  owlBootstrapFeatureNames = normalizeOwlFeatureNames(featureNames);
  const pendingState = getPendingOwlFeatureState();
  const enabledFromCommandLine = readOwlCommandLineSwitch(
    "enable-features",
  ).filter(
    (featureName) => !pendingState.disabledFeatureNames.includes(featureName),
  );
  const disabledFromCommandLine = readOwlCommandLineSwitch(
    "disable-features",
  ).filter(
    (featureName) => !pendingState.enabledFeatureNames.includes(featureName),
  );
  writeOwlCommandLineSwitch("enable-features", [
    ...enabledFromCommandLine,
    ...pendingState.enabledFeatureNames,
  ]);
  writeOwlCommandLineSwitch("disable-features", [
    ...disabledFromCommandLine,
    ...pendingState.disabledFeatureNames,
  ]);
}

export function createOwlFeatureSettingsApi(): {
  getState(): Promise<OwlFeatureSettingsState>;
  isOwlFeatureEnabled(name: string): Promise<boolean>;
  setFeatureNames(value: unknown): Promise<OwlFeatureSettingsState>;
} {
  return {
    async getState() {
      return getOwlFeatureSettingsState();
    },
    async isOwlFeatureEnabled(name) {
      return isOwlFeatureEnabled(name);
    },
    async setFeatureNames(value) {
      setPendingOwlFeatureState(value);
      return getOwlFeatureSettingsState();
    },
  };
}

export function isOwlFeatureEnabled(name: string): boolean {
  const binding = getOwlFeatureNativeBinding();
  if (binding == null) return false;
  try {
    return binding.isOwlFeatureEnabled(name);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Unsupported Owl feature:")
    ) {
      return false;
    }
    throw error;
  }
}

function setPendingOwlFeatureState(value: unknown): void {
  const pendingState = normalizeOwlFeatureState(
    parseOwlFeatureNameState(value),
  );
  const cachePath = getOwlFeatureBootstrapCachePath();
  mkdirSync(path.dirname(cachePath), {
    recursive: true,
  });
  writeFileAtomically(
    cachePath,
    JSON.stringify({
      enabledOwlFeatureNames: pendingState.enabledFeatureNames,
      disabledOwlFeatureNames: pendingState.disabledFeatureNames,
    }),
  );
}

function getOwlFeatureSettingsState(): OwlFeatureSettingsState {
  const activeFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("enable-features"),
  );
  const activeDisabledFeatureNames = normalizeOwlFeatureNames(
    readOwlCommandLineSwitch("disable-features"),
  ).filter((featureName) => !activeFeatureNames.includes(featureName));
  const pendingState = getPendingOwlFeatureState();
  return {
    activeFeatureNames,
    activeDisabledFeatureNames,
    pendingFeatureNames: pendingState.enabledFeatureNames,
    pendingDisabledFeatureNames: pendingState.disabledFeatureNames,
    restartRequired: !(
      sameFeatureNameSet(
        activeFeatureNames,
        pendingState.enabledFeatureNames,
      ) &&
      sameFeatureNameSet(
        activeDisabledFeatureNames,
        pendingState.disabledFeatureNames,
      )
    ),
  };
}

function getOwlFeatureNativeBinding(): OwlFeatureNativeBinding | null {
  const linkedBinding = (process as ProcessWithLinkedBinding)._linkedBinding;
  if (typeof linkedBinding !== "function") return null;
  let binding: unknown;
  try {
    binding = linkedBinding.call(process, OWL_FEATURES_LINKED_BINDING_NAME);
  } catch (error) {
    if (isMissingOwlFeatureBindingError(error)) return null;
    throw error;
  }
  return parseOwlFeatureNativeBinding(binding);
}

function getPendingOwlFeatureState(): OwlFeatureNameState {
  const cachedState = readCachedOwlFeatureState();
  return normalizeOwlFeatureState({
    enabledFeatureNames: [
      ...cachedState.enabledFeatureNames,
      ...owlBootstrapFeatureNames,
    ],
    disabledFeatureNames: cachedState.disabledFeatureNames,
  });
}

function readCachedOwlFeatureState(): OwlFeatureNameState {
  try {
    const value = JSON.parse(
      readFileSync(getOwlFeatureBootstrapCachePath(), "utf8"),
    );
    if (!isRecord(value)) throw Error("Invalid Owl feature cache");
    return normalizeOwlFeatureState({
      enabledFeatureNames: arrayOfStrings(value.enabledOwlFeatureNames),
      disabledFeatureNames: arrayOfStrings(value.disabledOwlFeatureNames),
    });
  } catch {
    return {
      enabledFeatureNames: [],
      disabledFeatureNames: [],
    };
  }
}

function parseOwlFeatureNameState(value: unknown): OwlFeatureNameState {
  if (!isRecord(value))
    return {
      enabledFeatureNames: [],
      disabledFeatureNames: [],
    };
  return {
    enabledFeatureNames: arrayOfStrings(value.enabledFeatureNames),
    disabledFeatureNames: arrayOfStrings(value.disabledFeatureNames),
  };
}

function normalizeOwlFeatureState(
  state: OwlFeatureNameState,
): OwlFeatureNameState {
  const enabledFeatureNames = normalizeOwlFeatureNames(
    state.enabledFeatureNames,
  );
  return {
    enabledFeatureNames,
    disabledFeatureNames: normalizeOwlFeatureNames(
      state.disabledFeatureNames,
    ).filter((featureName) => !enabledFeatureNames.includes(featureName)),
  };
}

function normalizeOwlFeatureNames(featureNames: unknown): string[] {
  const supportedFeatureNames = getSupportedOwlFeatureNames();
  const result: string[] = [];
  for (const featureName of arrayOfStrings(featureNames)) {
    if (
      supportedFeatureNames != null &&
      !supportedFeatureNames.includes(featureName)
    ) {
      continue;
    }
    if (!result.includes(featureName)) result.push(featureName);
  }
  return result;
}

function getSupportedOwlFeatureNames(): readonly string[] | null {
  return Array.isArray(sharedRuntime.owlFeatureNames)
    ? (sharedRuntime.owlFeatureNames as readonly string[])
    : null;
}

function readOwlCommandLineSwitch(name: string): string[] {
  return app.commandLine.getSwitchValue(name).split(",").filter(Boolean);
}

function writeOwlCommandLineSwitch(name: string, values: string[]): void {
  const normalizedValues = normalizeOwlFeatureNames(values);
  app.commandLine.removeSwitch(name);
  if (normalizedValues.length > 0) {
    app.commandLine.appendSwitch(name, normalizedValues.join(","));
  }
}

function sameFeatureNameSet(left: string[], right: string[]): boolean {
  const normalizedLeft = [...normalizeOwlFeatureNames(left)].sort();
  const normalizedRight = [...normalizeOwlFeatureNames(right)].sort();
  return (
    normalizedLeft.length === normalizedRight.length &&
    normalizedLeft.every(
      (featureName, index) => normalizedRight[index] === featureName,
    )
  );
}

function getOwlFeatureBootstrapCachePath(): string {
  return path.join(app.getPath("userData"), OWL_FEATURE_BOOTSTRAP_CACHE_FILE);
}

function isMissingOwlFeatureBindingError(error: unknown): boolean {
  return error instanceof Error
    ? error.message.includes(OWL_FEATURES_LINKED_BINDING_NAME) &&
        error.message.includes("No such binding was linked:")
    : false;
}

function parseOwlFeatureNativeBinding(value: unknown): OwlFeatureNativeBinding {
  if (isRecord(value) && typeof value.isOwlFeatureEnabled === "function") {
    return {
      isOwlFeatureEnabled: value.isOwlFeatureEnabled as (
        name: string,
      ) => boolean,
    };
  }
  throw Error("Invalid Owl feature native binding");
}
