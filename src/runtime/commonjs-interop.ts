// Restored from ref/webview/assets/rolldown-runtime-Czos8NxU.js
// Rolldown CommonJS/ESM interop helpers restored from the Codex webview bundle.
type MutableModule = Record<PropertyKey, unknown>;
type GetterMap = Record<string, () => unknown>;
type RuntimeRequire = (moduleName: string, ...args: unknown[]) => unknown;
type CommonJsModule<TExports = MutableModule> = { exports: TExports };
type CommonJsCallback<TExports = MutableModule> = (
  exports: MutableModule,
  module: CommonJsModule<TExports>,
) => void;

declare const require: RuntimeRequire | undefined;

const objectCreate = Object.create;
const defineProperty = Object.defineProperty;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const getOwnPropertyNames = Object.getOwnPropertyNames;
const getPrototypeOf = Object.getPrototypeOf;
const hasOwnProperty = Object.prototype.hasOwnProperty;

function getRuntimeRequire(): RuntimeRequire | undefined {
  return typeof require !== "undefined" ? require : undefined;
}

function requireUnavailable(moduleName: string): unknown {
  const runtimeRequire = getRuntimeRequire();
  if (runtimeRequire) return runtimeRequire(moduleName);

  throw new Error(
    'Calling `require` for "' +
      moduleName +
      "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
  );
}

export const commonJsRequire: RuntimeRequire = ((fallbackRequire) => {
  const runtimeRequire = getRuntimeRequire();
  if (runtimeRequire) return runtimeRequire;

  return typeof Proxy !== "undefined"
    ? new Proxy(fallbackRequire, {
        get: (target, property) =>
          (getRuntimeRequire() ?? target)[property as keyof RuntimeRequire],
      })
    : fallbackRequire;
})(requireUnavailable);

export const copyCommonJsProperties = (
  target: MutableModule,
  source: unknown,
  secondTarget?: MutableModule,
): MutableModule | undefined => {
  copyProperties(target, source, "default");
  return secondTarget == null
    ? undefined
    : copyProperties(secondTarget, source, "default");
};

export const once =
  <T>(initializer: ((value: 0) => T) | undefined, value?: T) =>
  () => {
    if (initializer) {
      const runInitializer = initializer;
      initializer = undefined;
      value = runInitializer(0);
    }
    return value;
  };

export const toCommonJs = (module: MutableModule): MutableModule =>
  hasOwnProperty.call(module, "module.exports")
    ? (module["module.exports"] as MutableModule)
    : copyProperties(
        defineProperty({}, "__esModule", {
          value: true,
        }),
        module,
      );

export const exportGetters = (
  getters: GetterMap,
  tagAsModule?: boolean,
): MutableModule => {
  const result: MutableModule = {};
  for (const key in getters) {
    defineProperty(result, key, {
      get: getters[key],
      enumerable: true,
    });
  }
  if (!tagAsModule) {
    defineProperty(result, Symbol.toStringTag, {
      value: "Module",
    });
  }
  return result;
};

export const toEsModule = <TValue>(
  module: TValue,
  forceDefaultExport?: unknown,
): MutableModule & { default?: TValue } => {
  const result = module == null ? {} : objectCreate(getPrototypeOf(module));
  return copyProperties(
    forceDefaultExport ||
      !module ||
      !(module as { __esModule?: boolean }).__esModule
      ? defineProperty(result, "default", {
          value: module,
          enumerable: true,
        })
      : result,
    module,
  ) as MutableModule & { default?: TValue };
};

export const createCommonJsModule =
  <TExports = MutableModule>(
    callback: CommonJsCallback<TExports>,
    cache?: CommonJsModule<TExports>,
  ) =>
  (): TExports => {
    if (!cache) {
      cache = {
        exports: {} as TExports,
      };
      callback(cache.exports as MutableModule, cache);
    }
    return cache.exports;
  };

function copyProperties(
  target: MutableModule,
  source: unknown,
  except?: PropertyKey,
): MutableModule {
  if ((source && typeof source === "object") || typeof source === "function") {
    for (const key of getOwnPropertyNames(source)) {
      if (!hasOwnProperty.call(target, key) && key !== except) {
        const propertyKey = key;
        const descriptor = getOwnPropertyDescriptor(source, key);
        defineProperty(target, key, {
          get: () => (source as MutableModule)[propertyKey],
          enumerable: descriptor == null || descriptor.enumerable,
        });
      }
    }
  }
  return target;
}
