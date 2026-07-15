// Restored from ref/webview/assets/login-route-Cx8NmtG2.js
// Current ref login-route-BmCnkGdw.js uses the same semantic LoginRoute body.
import React from "react";
import type { RefObject, SVGProps } from "react";
import { useSetAtom } from "jotai";
import { useLayer, useStatsigClient } from "../vendor/statsig-current-runtime";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
  useAppScopeValue,
} from "../boundaries/app-scope";
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiR as createVscodeQueryKey,
} from "../boundaries/vscode-api";
import { formatUnknownError } from "../boundaries/src-l0hb-mz-p";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Spinner } from "../ui/spinner";
import { toastApiSignal } from "../ui/toast-signal";
import {
  productLoggerBt as loginFailedEvent,
  productLoggerT as logProductEvent,
  productLoggerUt as loginSucceededEvent,
  productLoggerVt as loginStartedEvent,
} from "../analytics/product-logger";
import { useNavigate } from "../vendor/react-router";
import { useAuth } from "../auth/use-auth";
import {
  hasCompletedProjectlessOnboardingSignal,
  primaryRuntimeInstallReadyAtom,
  primaryRuntimeInstallRequestedAtom,
  welcomeOnboardingPendingAtom,
} from "../onboarding/onboarding-state";
import { appIdentity, appIdentityId } from "../utils/app-identity";
import { OpenaiBlossomIcon } from "../icons/openai-blossom-icon";
import { codexAppGaLogo } from "../utils/codex-app-ga-logo";
import { openExternalUrl } from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { OnboardingShellScreen } from "../onboarding/onboarding-shell";
import {
  buildChatGptAuthUrl,
  OnboardingLoginContent,
  startChatGptLogin,
} from "../onboarding/login-content";
import { iconChatgpt } from "../utils/icon-chatgpt";
type ChatGptSignInIntent = "signin" | "signup" | "google" | "microsoft";
type LoginMethod = "apikey" | "chatgpt" | "google" | "microsoft";
type LoginTelemetryContext = {
  hasPreviouslyCompletedOnboarding: boolean;
};
type DesktopAuthLayer = {
  get: (name: string, fallback: boolean) => boolean;
};
type SnakeDirection = "up" | "down" | "left" | "right";
type SnakePoint = {
  x: number;
  y: number;
};
type SnakeBoard = {
  cellSize: number;
  columns: number;
  height: number;
  rows: number;
  width: number;
};
const DESKTOP_AUTH_LAYER_ID = "3446609779";
const PROVIDER_SIGN_IN_LAYER_ID = "1561420571";
const HOSTED_LOGIN_SUCCESS_PAGE_GATE_ID = "2936610421";
const CODEX_ORIGIN_STABLE_ID_GATE_ID = "3963726525";
const SNAKE_MIN_CELLS = 12;
const SNAKE_BASE_CELL_SIZE = 18;
const SNAKE_TICK_MS = 120;
const SNAKE_VECTORS: Record<SnakeDirection, SnakePoint> = {
  up: {
    x: 0,
    y: -1,
  },
  down: {
    x: 0,
    y: 1,
  },
  left: {
    x: -1,
    y: 0,
  },
  right: {
    x: 1,
    y: 0,
  },
};
const OPPOSITE_DIRECTIONS: Record<SnakeDirection, SnakeDirection> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};
export function LoginRoute() {
  return <DesktopOnboardingLoginRoute />;
}
function DesktopOnboardingLoginRoute() {
  const appScope = useAppScope(appScopeRoot);
  const { setAuthMethod } = useAuth();
  const navigate = useNavigate();
  const intl = useIntl();
  const queryClient = useQueryClient();
  const hasCompletedProjectlessOnboarding = useAppScopeValue(
    hasCompletedProjectlessOnboardingSignal,
  );
  const setWelcomeOnboardingPending = useSetAtom(welcomeOnboardingPendingAtom);
  const setPrimaryRuntimeInstallReady = useSetAtom(
    primaryRuntimeInstallReadyAtom,
  );
  const setPrimaryRuntimeInstallRequested = useSetAtom(
    primaryRuntimeInstallRequestedAtom,
  );
  const telemetryContext =
    hasCompletedProjectlessOnboarding == null
      ? null
      : {
          hasPreviouslyCompletedOnboarding: hasCompletedProjectlessOnboarding,
        };
  const { client: statsigClient } = useStatsigClient();
  const providerSignInLayer = useLayer(PROVIDER_SIGN_IN_LAYER_ID);
  const showProviderSignIn = providerSignInLayer.get("enabled", false);
  const [chatGptAbortController, setChatGptAbortController] =
    React.useState<AbortController | null>(null);
  const isChatGptSignInPending = chatGptAbortController != null;
  const [isApiKeyEntryVisible, setIsApiKeyEntryVisible] = React.useState(false);
  const [isSnakeVisible, setIsSnakeVisible] = React.useState(false);
  const [apiKeyValue, setApiKeyValue] = React.useState("");
  const [isApiKeySignInPending, setIsApiKeySignInPending] =
    React.useState(false);
  const snakeAudioContextRef = React.useRef<AudioContext | null>(null);
  const showSignInFailure = React.useCallback(
    (rawMessage: string) => {
      appScope.get(toastApiSignal).warning(
        intl.formatMessage(
          {
            id: "electron.onboarding.login.error",
            defaultMessage: "Sign-in failed: {rawMessage}",
            description:
              "Toast shown when sign-in fails on the desktop onboarding page",
          },
          {
            rawMessage,
          },
        ),
      );
    },
    [appScope, intl],
  );
  const markAuthFlowComplete = React.useCallback(() => {
    setPrimaryRuntimeInstallReady(false);
    setPrimaryRuntimeInstallRequested(true);
  }, [setPrimaryRuntimeInstallReady, setPrimaryRuntimeInstallRequested]);
  const resetApiKeyEntry = React.useCallback(() => {
    setIsApiKeyEntryVisible(false);
    setIsApiKeySignInPending(false);
    setApiKeyValue("");
  }, []);
  const openApiKeyEntry = React.useCallback(() => {
    if (telemetryContext == null) return;
    logProductEvent(appScope, loginStartedEvent, {
      method: "apikey",
      ...telemetryContext,
    });
    setIsApiKeyEntryVisible(true);
  }, [appScope, telemetryContext]);
  const hideSnake = React.useCallback(() => {
    setIsSnakeVisible(false);
  }, []);
  const ensureSnakeAudioContext = React.useCallback(() => {
    if (snakeAudioContextRef.current != null) return;
    if (typeof window === "undefined" || !("AudioContext" in window)) return;
    snakeAudioContextRef.current = new window.AudioContext();
    if (snakeAudioContextRef.current.state === "suspended") {
      void snakeAudioContextRef.current.resume();
    }
  }, []);
  const showSnake = React.useCallback(() => {
    ensureSnakeAudioContext();
    setIsSnakeVisible(true);
  }, [ensureSnakeAudioContext]);
  const completeSuccessfulLogin = React.useCallback(
    (method: LoginMethod, context: LoginTelemetryContext) => {
      logProductEvent(appScope, loginSucceededEvent, {
        method,
        ...context,
      });
      queryClient.removeQueries({
        queryKey: createVscodeQueryKey("account-info"),
        exact: true,
      });
      markAuthFlowComplete();
      setWelcomeOnboardingPending(true);
    },
    [appScope, markAuthFlowComplete, queryClient, setWelcomeOnboardingPending],
  );
  const handleChatGptSignIn = React.useCallback(
    async (intent: ChatGptSignInIntent = "signin") => {
      if (isChatGptSignInPending) {
        chatGptAbortController?.abort();
        setChatGptAbortController(null);
        return;
      }
      if (telemetryContext == null) return;
      const method =
        intent === "google" || intent === "microsoft" ? intent : "chatgpt";
      logProductEvent(appScope, loginStartedEvent, {
        method,
        ...telemetryContext,
      });
      const abortController = new AbortController();
      setChatGptAbortController(abortController);
      try {
        const { useDesktopAuth, useStreamlinedLoginUx } =
          resolveDesktopAuthOptions(
            statsigClient.getLayer(DESKTOP_AUTH_LAYER_ID),
          );
        const useHostedLoginSuccessPage = statsigClient.checkGate(
          HOSTED_LOGIN_SUCCESS_PAGE_GATE_ID,
        );
        const includeCodexOriginStableId = statsigClient.checkGate(
          CODEX_ORIGIN_STABLE_ID_GATE_ID,
        );
        const { authUrl, completion } = await startChatGptLogin({
          signal: abortController.signal,
          ...(useHostedLoginSuccessPage
            ? {
                appBrand: appIdentityId,
              }
            : {}),
          useHostedLoginSuccessPage,
          useStreamlinedLogin: useStreamlinedLoginUx,
        });
        if (authUrl) {
          openExternalUrl({
            href: buildChatGptAuthUrl({
              authUrl: applyChatGptSignInIntent(authUrl, intent),
              includeCodexOriginStableId,
              useDesktopAuth,
              useStreamlinedLoginUx,
            }),
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          });
        }
        const result = await completion;
        if (result.success) {
          completeSuccessfulLogin(method, telemetryContext);
          setAuthMethod("chatgpt");
          navigate("/welcome", {
            replace: true,
          });
        } else {
          logProductEvent(appScope, loginFailedEvent, {
            method,
            errorKind: classifyLoginError(result.error),
            ...telemetryContext,
          });
          showSignInFailure(
            formatUnknownError(result.error ?? "Unknown error"),
          );
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          logProductEvent(appScope, loginFailedEvent, {
            method,
            errorKind: "abort",
            ...telemetryContext,
          });
          return;
        }
        logProductEvent(appScope, loginFailedEvent, {
          method,
          errorKind: classifyLoginError(error),
          ...telemetryContext,
        });
        showSignInFailure(formatUnknownError(error));
      } finally {
        setChatGptAbortController(null);
      }
    },
    [
      appScope,
      chatGptAbortController,
      completeSuccessfulLogin,
      isChatGptSignInPending,
      navigate,
      setAuthMethod,
      showSignInFailure,
      statsigClient,
      telemetryContext,
    ],
  );
  const handleApiKeySubmit = React.useCallback(async () => {
    const trimmedApiKey = apiKeyValue.trim();
    if (!trimmedApiKey || isApiKeySignInPending || telemetryContext == null) {
      return;
    }
    setIsApiKeySignInPending(true);
    try {
      await sendAppServerRequest("login-with-api-key", {
        hostId: LOCAL_HOST_ID,
        apiKey: trimmedApiKey,
      });
      completeSuccessfulLogin("apikey", telemetryContext);
      setAuthMethod("apikey");
      navigate("/welcome", {
        replace: true,
      });
    } catch (error) {
      logProductEvent(appScope, loginFailedEvent, {
        method: "apikey",
        errorKind: classifyLoginError(error),
        ...telemetryContext,
      });
      showSignInFailure(formatUnknownError(error));
    } finally {
      setIsApiKeySignInPending(false);
    }
  }, [
    apiKeyValue,
    appScope,
    completeSuccessfulLogin,
    isApiKeySignInPending,
    navigate,
    setAuthMethod,
    showSignInFailure,
    telemetryContext,
  ]);
  if (telemetryContext == null) {
    return (
      <OnboardingShellScreen>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-token-description-foreground">
          <Spinner className="h-4 w-4 text-token-foreground" />
          <FormattedMessage
            id="electron.onboarding.login.loading"
            defaultMessage="Loading..."
            description="Loading state while the login page prepares onboarding telemetry"
          />
        </div>
      </OnboardingShellScreen>
    );
  }
  return (
    <OnboardingShellScreen fullBleed={true} hideHeader={isSnakeVisible}>
      {isSnakeVisible ? (
        <div className="flex h-full w-full">
          <SnakeLoginGame
            audioContextRef={snakeAudioContextRef}
            onExit={hideSnake}
          />
        </div>
      ) : (
        <DesktopLoginContent
          apiKeyValue={apiKeyValue}
          appName={appIdentity}
          isChatGptBrand={appIdentityId === "chatgpt"}
          isApiKeyEntryVisible={isApiKeyEntryVisible}
          isApiKeySignInPending={isApiKeySignInPending}
          isChatGptSignInPending={isChatGptSignInPending}
          onApiKeySubmit={handleApiKeySubmit}
          onApiKeyValueChange={setApiKeyValue}
          onChatGptSignIn={handleChatGptSignIn}
          onChatGptSignUp={() => void handleChatGptSignIn("signup")}
          onPlaySnake={showSnake}
          onResetApiKeyEntry={resetApiKeyEntry}
          onShowApiKeyEntry={openApiKeyEntry}
          showChatGptProviderSignIn={showProviderSignIn}
        />
      )}
    </OnboardingShellScreen>
  );
}
function DesktopLoginContent({
  appName,
  apiKeyValue,
  isChatGptBrand,
  isApiKeyEntryVisible,
  isApiKeySignInPending,
  isChatGptSignInPending,
  showChatGptProviderSignIn,
  onApiKeySubmit,
  onApiKeyValueChange,
  onChatGptSignIn,
  onChatGptSignUp,
  onPlaySnake,
  onResetApiKeyEntry,
  onShowApiKeyEntry,
}: {
  apiKeyValue: string;
  appName: string;
  isChatGptBrand: boolean;
  isApiKeyEntryVisible: boolean;
  isApiKeySignInPending: boolean;
  isChatGptSignInPending: boolean;
  onApiKeySubmit: () => void;
  onApiKeyValueChange: (value: string) => void;
  onChatGptSignIn: (intent?: ChatGptSignInIntent) => void;
  onChatGptSignUp: () => void;
  onPlaySnake: () => void;
  onResetApiKeyEntry: () => void;
  onShowApiKeyEntry: () => void;
  showChatGptProviderSignIn: boolean;
}) {
  const intl = useIntl();
  const appLogo = isChatGptBrand ? iconChatgpt : codexAppGaLogo;
  const title = isChatGptBrand ? (
    <FormattedMessage
      id="electron.onboarding.login.welcomeV2.title.chatgptSignIn"
      defaultMessage="Sign in to ChatGPT"
      description="Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in"
    />
  ) : (
    <FormattedMessage
      id="electron.onboarding.login.welcomeV2.title"
      defaultMessage="Get started with {appName}"
      description="Title on the v2 desktop onboarding login page"
      values={{
        appName,
      }}
    />
  );
  if (isChatGptSignInPending && !isApiKeyEntryVisible) {
    return (
      <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-12 text-token-foreground">
        <div className="flex w-[340px] flex-col items-center gap-8">
          <img
            alt=""
            aria-hidden="true"
            className="size-[52px] shrink-0"
            draggable={false}
            src={appLogo}
          />
          <p className="text-center text-[14px] leading-5 font-normal tracking-[-0.18px] text-token-description-foreground">
            <FormattedMessage
              id="electron.onboarding.login.browserPending.welcomeV2"
              defaultMessage="Continue signing in with your browser"
              description="Message shown while ChatGPT sign-in continues in the browser"
            />
          </p>
          <button
            className="flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-description-foreground hover:bg-token-list-hover-background"
            type="button"
            onClick={() => onChatGptSignIn()}
          >
            <FormattedMessage
              id="electron.onboarding.login.chatgpt.cancel.welcomeV2"
              defaultMessage="Cancel sign-in"
              description="Cancel button label while ChatGPT sign-in is in progress on desktop onboarding"
            />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-6 text-token-foreground">
      <div className="flex w-[340px] flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-8">
          <button
            aria-label={intl.formatMessage({
              id: "electron.onboarding.login.snake.start",
              defaultMessage: "Play Snake",
              description:
                "Aria label for the Codex logo button to start Snake",
            })}
            className="group flex cursor-interaction items-center justify-center rounded-full"
            type="button"
            onClick={onPlaySnake}
          >
            <img
              alt=""
              aria-hidden="true"
              className="size-[52px] shrink-0"
              draggable={false}
              src={appLogo}
            />
          </button>
          <h1 className="w-[316px] text-center text-[28px] leading-9 font-normal text-token-foreground">
            {title}
          </h1>
        </div>
        {isApiKeyEntryVisible ? (
          <div className="w-full">
            <OnboardingLoginContent
              apiKeySecondaryActionLabel={
                <FormattedMessage
                  id="electron.onboarding.login.apikey.cancel"
                  defaultMessage="Cancel"
                  description="Cancel button label for API key entry on desktop onboarding"
                />
              }
              apiKeyValue={apiKeyValue}
              isApiKeyEntryVisible={isApiKeyEntryVisible}
              isApiKeySignInPending={isApiKeySignInPending}
              isChatGptSignInPending={isChatGptSignInPending}
              onApiKeySecondaryAction={onResetApiKeyEntry}
              onApiKeySubmit={onApiKeySubmit}
              onApiKeyValueChange={onApiKeyValueChange}
              onChatGptSignIn={() => onChatGptSignIn()}
              onShowApiKeyEntry={onShowApiKeyEntry}
            />
          </div>
        ) : (
          <DesktopLoginButtons
            isChatGptBrand={isChatGptBrand}
            onChatGptSignIn={onChatGptSignIn}
            onChatGptSignUp={onChatGptSignUp}
            onShowApiKeyEntry={onShowApiKeyEntry}
            showChatGptProviderSignIn={showChatGptProviderSignIn}
          />
        )}
      </div>
    </div>
  );
}
function DesktopLoginButtons({
  isChatGptBrand,
  showChatGptProviderSignIn,
  onChatGptSignIn,
  onChatGptSignUp,
  onShowApiKeyEntry,
}: {
  isChatGptBrand: boolean;
  onChatGptSignIn: (intent?: ChatGptSignInIntent) => void;
  onChatGptSignUp: () => void;
  onShowApiKeyEntry: () => void;
  showChatGptProviderSignIn: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <button
        className="flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-token-foreground text-[14px] leading-5 font-medium text-token-dropdown-background hover:bg-token-foreground/80"
        type="button"
        onClick={() => onChatGptSignIn()}
      >
        <OpenaiBlossomIcon className="size-6 shrink-0 text-token-dropdown-background" />
        {isChatGptBrand ? (
          <FormattedMessage
            id="electron.onboarding.login.chatgpt.continueToSignIn"
            defaultMessage="Continue to sign in"
            description="Button label for streamlined ChatGPT sign-in on desktop onboarding"
          />
        ) : (
          <FormattedMessage
            id="electron.onboarding.login.chatgpt.signIn"
            defaultMessage="Sign in with ChatGPT"
            description="Button label to sign in with ChatGPT on desktop onboarding"
          />
        )}
      </button>
      {showChatGptProviderSignIn ? (
        <>
          <button
            className="flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background"
            type="button"
            onClick={() => onChatGptSignIn("google")}
          >
            <GoogleIcon aria-hidden="true" className="size-5 shrink-0" />
            <FormattedMessage
              id="electron.onboarding.login.google.signIn"
              defaultMessage="Continue with Google"
              description="Button label for Google sign-in on desktop onboarding"
            />
          </button>
          <button
            className="flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background"
            type="button"
            onClick={() => onChatGptSignIn("microsoft")}
          >
            <MicrosoftIcon aria-hidden="true" className="size-5 shrink-0" />
            <FormattedMessage
              id="electron.onboarding.login.microsoft.signIn"
              defaultMessage="Continue with Microsoft"
              description="Button label for Microsoft sign-in on desktop onboarding"
            />
          </button>
        </>
      ) : null}
      <button
        className="flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background"
        type="button"
        onClick={onShowApiKeyEntry}
      >
        <FormattedMessage
          id="electron.onboarding.login.apikey.open.welcomeV2"
          defaultMessage="Sign in another way"
          description="Button label to open another sign-in method on v2 desktop onboarding"
        />
      </button>
      <button
        className="flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-token-description-foreground underline hover:text-token-foreground"
        type="button"
        onClick={onChatGptSignUp}
      >
        <FormattedMessage
          id="electron.onboarding.login.signup.welcomeV2"
          defaultMessage="Sign up"
          description="Sign-up link on v2 desktop onboarding"
        />
      </button>
    </div>
  );
}
function SnakeLoginGame({
  onExit,
  audioContextRef,
}: {
  audioContextRef: RefObject<AudioContext | null>;
  onExit: () => void;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const initialBoard = createSnakeBoard(216, 216);
    let board = initialBoard;
    let snake: SnakePoint[] = [];
    let food: SnakePoint = {
      x: 0,
      y: 0,
    };
    let currentDirection: SnakeDirection = "right";
    let pendingDirection: SnakeDirection = "right";
    let intervalId: ReturnType<typeof window.setInterval> | null = null;
    let cachedColors: {
      food: string;
      snake: string;
    } | null = null;
    const clearSnakeInterval = () => {
      if (intervalId != null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };
    const getSnakeColors = () => {
      if (cachedColors) return cachedColors;
      const canvas = canvasRef.current;
      if (canvas == null) {
        return {
          snake: "#ffffff",
          food: "#f97316",
        };
      }
      const rootStyle = getComputedStyle(document.documentElement);
      cachedColors = {
        snake: getComputedStyle(canvas).color || "#ffffff",
        food:
          rootStyle.getPropertyValue("--vscode-charts-red").trim() ||
          rootStyle.getPropertyValue("--vscode-charts-orange").trim() ||
          "#f97316",
      };
      return cachedColors;
    };
    const getCanvasContext = () => {
      const canvas = canvasRef.current;
      if (canvas == null) return null;
      const pixelRatio = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      canvas.width = Math.max(1, Math.floor(board.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(board.height * pixelRatio));
      canvas.style.width = `${board.width}px`;
      canvas.style.height = `${board.height}px`;
      const context = canvas.getContext("2d");
      if (context == null) return null;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.imageSmoothingEnabled = false;
      return context;
    };
    const spawnFood = (occupiedPoints: SnakePoint[]) => {
      let nextFood = {
        x: Math.floor(Math.random() * board.columns),
        y: Math.floor(Math.random() * board.rows),
      };
      while (
        occupiedPoints.some(
          (point) => point.x === nextFood.x && point.y === nextFood.y,
        )
      ) {
        nextFood = {
          x: Math.floor(Math.random() * board.columns),
          y: Math.floor(Math.random() * board.rows),
        };
      }
      return nextFood;
    };
    const draw = () => {
      const context = getCanvasContext();
      if (context == null) return;
      const colors = getSnakeColors();
      context.clearRect(0, 0, board.width, board.height);
      context.fillStyle = colors.snake;
      for (const segment of snake) {
        context.fillRect(
          segment.x * board.cellSize,
          segment.y * board.cellSize,
          board.cellSize,
          board.cellSize,
        );
      }
      context.fillStyle = colors.food;
      context.fillRect(
        food.x * board.cellSize,
        food.y * board.cellSize,
        board.cellSize,
        board.cellSize,
      );
    };
    const resetSnake = () => {
      const centerX = Math.floor(board.columns / 2);
      const centerY = Math.floor(board.rows / 2);
      snake = [
        {
          x: centerX,
          y: centerY,
        },
        {
          x: centerX - 1,
          y: centerY,
        },
        {
          x: centerX - 2,
          y: centerY,
        },
      ];
      currentDirection = "right";
      pendingDirection = "right";
      food = spawnFood(snake);
      draw();
    };
    const resizeBoard = () => {
      const wrapper = wrapperRef.current;
      if (wrapper == null) return;
      const rect = wrapper.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      const columns = Math.max(
        SNAKE_MIN_CELLS,
        Math.floor(width / SNAKE_BASE_CELL_SIZE),
      );
      const cellSize = width / columns;
      board = {
        columns,
        rows: Math.max(SNAKE_MIN_CELLS, Math.floor(height / cellSize)),
        cellSize,
        width,
        height,
      };
      resetSnake();
    };
    const playTone = (
      frequency: number,
      durationMs: number,
      type: OscillatorType,
    ) => {
      const audioContext = audioContextRef.current;
      if (audioContext == null) return;
      if (audioContext.state === "suspended") void audioContext.resume();
      const durationSeconds = durationMs / 1000;
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.18,
        audioContext.currentTime + 0.01,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + durationSeconds,
      );
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + durationSeconds);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
    };
    const endGame = (frequency: number) => {
      clearSnakeInterval();
      playTone(frequency, 220, "sawtooth");
      onExit();
    };
    const tick = () => {
      const head = snake[0];
      const vector = SNAKE_VECTORS[pendingDirection];
      const nextHead = {
        x: head.x + vector.x,
        y: head.y + vector.y,
      };
      if (
        nextHead.x < 0 ||
        nextHead.y < 0 ||
        nextHead.x >= board.columns ||
        nextHead.y >= board.rows
      ) {
        endGame(140);
        return;
      }
      const ateFood = nextHead.x === food.x && nextHead.y === food.y;
      const bodyToCheck = ateFood ? snake : snake.slice(0, -1);
      if (
        bodyToCheck.some(
          (segment) => segment.x === nextHead.x && segment.y === nextHead.y,
        )
      ) {
        endGame(160);
        return;
      }
      snake = ateFood
        ? [nextHead, ...snake]
        : [nextHead, ...snake.slice(0, -1)];
      currentDirection = pendingDirection;
      if (ateFood) {
        food = spawnFood(snake);
        playTone(660, 120, "square");
      }
      draw();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = directionFromKeyboardEvent(event);
      if (direction == null) return;
      event.preventDefault();
      if (OPPOSITE_DIRECTIONS[currentDirection] !== direction) {
        pendingDirection = direction;
      }
    };
    resizeBoard();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", resizeBoard);
    intervalId = window.setInterval(tick, SNAKE_TICK_MS);
    return () => {
      clearSnakeInterval();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", resizeBoard);
    };
  }, [audioContextRef, onExit]);
  return (
    <div ref={wrapperRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full text-token-foreground" />
    </div>
  );
}
function resolveDesktopAuthOptions(layer: DesktopAuthLayer) {
  const enabled = layer.get("enabled", false);
  return {
    useDesktopAuth: layer.get("use_desktop_auth", enabled),
    useStreamlinedLoginUx: layer.get("use_streamlined_login_ux", enabled),
  };
}
function applyChatGptSignInIntent(
  authUrl: string,
  intent: ChatGptSignInIntent,
) {
  if (intent === "signin") return authUrl;
  try {
    const url = new URL(authUrl);
    switch (intent) {
      case "signup":
        url.searchParams.set("screen_hint", "signup");
        break;
      case "google":
        url.searchParams.set("screen_hint", "login_or_signup");
        url.searchParams.set("connection", "google-oauth2");
        break;
      case "microsoft":
        url.searchParams.set("screen_hint", "login_or_signup");
        url.searchParams.set("connection", "windowslive");
        break;
    }
    return url.toString();
  } catch {
    return authUrl;
  }
}
function classifyLoginError(error: unknown) {
  const message =
    typeof error === "string"
      ? error
      : error instanceof Error
        ? error.message
        : "";
  if (!message) return "unknown";
  const lowerMessage = message.toLowerCase();
  if (
    lowerMessage.includes("network") ||
    lowerMessage.includes("fetch") ||
    lowerMessage.includes("timeout")
  ) {
    return "network";
  }
  if (
    lowerMessage.includes("auth") ||
    lowerMessage.includes("unauthorized") ||
    lowerMessage.includes("forbidden") ||
    lowerMessage.includes("invalid api key") ||
    lowerMessage.includes("401") ||
    lowerMessage.includes("403")
  ) {
    return "auth";
  }
  return "unknown";
}
function createSnakeBoard(width: number, height: number): SnakeBoard {
  return {
    columns: SNAKE_MIN_CELLS,
    rows: SNAKE_MIN_CELLS,
    cellSize: SNAKE_BASE_CELL_SIZE,
    width,
    height,
  };
}
function directionFromKeyboardEvent(
  event: KeyboardEvent,
): SnakeDirection | null {
  if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
    return "up";
  }
  if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
    return "down";
  }
  if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
    return "left";
  }
  if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
    return "right";
  }
  return null;
}
function GoogleIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
}
function MicrosoftIcon(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M3.25 3.25H11.25V11.25H3.25V3.25Z" fill="#F35325" />
      <path d="M12.75 3.25H20.75V11.25H12.75V3.25Z" fill="#81BC06" />
      <path d="M3.25 12.75H11.25V20.75H3.25V12.75Z" fill="#05A6F0" />
      <path d="M12.75 12.75H20.75V20.75H12.75V12.75Z" fill="#FFBA08" />
    </svg>
  );
}
