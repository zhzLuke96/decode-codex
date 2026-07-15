// Restored from ref/webview/assets/app-CAW031s_.js
// Lightweight mutation primitive used by the restored QueryClient runtime.
export class VscodeApiMutation {
  options: Record<string, any>;
  state: Record<string, any>;

  constructor({
    options,
    state,
  }: {
    client: unknown;
    mutationCache: unknown;
    mutationId: number;
    options: Record<string, any>;
    state?: Record<string, any>;
  }) {
    this.options = options;
    this.state = {
      data: undefined,
      error: null,
      isPaused: false,
      status: "idle",
      variables: undefined,
      ...state,
    };
  }

  setOptions(options: Record<string, any>): void {
    this.options = options;
  }

  async execute(variables?: unknown): Promise<unknown> {
    this.state = {
      ...this.state,
      error: null,
      status: "pending",
      variables,
    };
    try {
      const context = await this.options.onMutate?.(variables);
      const data = await this.options.mutationFn?.(variables);
      await this.options.onSuccess?.(data, variables, context);
      await this.options.onSettled?.(data, null, variables, context);
      this.state = {
        ...this.state,
        data,
        error: null,
        isPaused: false,
        status: "success",
      };
      return data;
    } catch (error) {
      await this.options.onError?.(error, variables, undefined);
      await this.options.onSettled?.(undefined, error, variables, undefined);
      this.state = {
        ...this.state,
        error,
        isPaused: false,
        status: "error",
      };
      throw error;
    }
  }

  continue(): Promise<unknown> {
    return this.state.status === "pending"
      ? this.execute(this.state.variables)
      : Promise.resolve(this.state.data);
  }

  reset(): void {
    this.state = {
      data: undefined,
      error: null,
      isPaused: false,
      status: "idle",
      variables: undefined,
    };
  }
}

export const vscodeApiJ = VscodeApiMutation;
