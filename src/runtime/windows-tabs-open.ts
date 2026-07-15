// Restored from ref/webview/assets/windows-tabs-open-SksOQNvg.js
import { windowsTabsOpenActionSchema } from "./windows-tabs-open-schema";
type ActionSchema<TPayload> = {
  shape: {
    type: {
      value: string;
    };
  };
  parse(payload: unknown): TPayload;
};
type WindowAppActionDefinition<TPayload, TContext, TResult> = {
  schema: ActionSchema<TPayload>;
  run(payload: TPayload, context: TContext): TResult;
};
type WindowAppActionRunner<TContext = unknown, TResult = unknown> = (
  payload: unknown,
  context: TContext,
) => TResult;
export type WindowAppAction<TContext = unknown, TResult = unknown> = {
  type: string;
  schema: ActionSchema<unknown>;
  run: WindowAppActionRunner<TContext, TResult>;
};
export function createWindowAppAction<
  TPayload,
  TContext = unknown,
  TResult = unknown,
>(
  definition: WindowAppActionDefinition<TPayload, TContext, TResult>,
): WindowAppAction<TContext, TResult> {
  return {
    type: definition.schema.shape.type.value,
    schema: definition.schema,
    run: (payload, context) =>
      definition.run(definition.schema.parse(payload), context),
  };
}
export function createWindowAppActionRunMap<TContext = unknown>(
  actions: Array<Pick<WindowAppAction<TContext>, "type" | "run">>,
): Map<string, WindowAppActionRunner<TContext>> {
  const actionRunMap = new Map<string, WindowAppActionRunner<TContext>>();
  for (const action of actions) actionRunMap.set(action.type, action.run);
  return actionRunMap;
}
let windowsTabsOpenHandler: WindowAppActionRunner | null = null;
export const windowsTabsOpenAction = createWindowAppAction({
  schema: windowsTabsOpenActionSchema,
  run: (payload, context) => {
    if (windowsTabsOpenHandler == null) {
      throw Error("windows.tabs.open is unavailable in this app view");
    }
    return windowsTabsOpenHandler(payload, context);
  },
});
export function registerWindowsTabsOpenHandler(
  handler: WindowAppActionRunner,
): void {
  windowsTabsOpenHandler = handler;
}
