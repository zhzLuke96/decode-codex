// Restored from ref/webview/assets/register-app-actions-CrtQ5J4S.js
// Summary and help actions split from the current app action registry.
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperELowerO,
  currentAppInitialSharedCompatSlotUpperJLowerT,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotUpperRLowerO,
  currentAppInitialSharedCompatSlotUpperSLowerO,
  currentAppInitialSharedCompatSlotUpperTLowerO,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerA,
  currentAppInitialSharedCompatSlotLowerC,
  currentAppInitialSharedCompatSlotLowerGLowerO,
  currentAppInitialSharedCompatSlotLowerJLowerO,
  currentAppInitialSharedCompatSlotLowerSLowerO,
  currentAppInitialSharedCompatSlotLowerSLowerT,
  currentAppInitialSharedCompatSlotLowerTLowerA,
  currentAppInitialSharedCompatSlotLowerULowerO,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotLowerVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotDollarLowerC,
  worktreeNewThreadOrchestratorCompatSlotDollarLowerL,
  worktreeNewThreadOrchestratorCompatSlotDollarLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperBLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperFLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperILowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperILowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperNLowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperPLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperQLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperVLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerF,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerL,
  worktreeNewThreadOrchestratorCompatSlotLowerALowerD,
  worktreeNewThreadOrchestratorCompatSlotLowerELowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerFLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerNLowerU,
  worktreeNewThreadOrchestratorCompatSlotLowerRLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerD,
  worktreeNewThreadOrchestratorCompatSlotLowerTLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerTLowerU,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerF,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerP,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerU,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotDollarLowerO,
  worktreeNewThreadQueryCompatSlotUpperBLowerM,
  worktreeNewThreadQueryCompatSlotUpperGLowerM,
  worktreeNewThreadQueryCompatSlotUpperQLowerO,
  worktreeNewThreadQueryCompatSlotLowerELowerS,
  worktreeNewThreadQueryCompatSlotLowerZLowerM,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appActionMember0033,
  currentAppInitialSharedEdgePixelsReversedFunction,
  currentAppInitialSharedMember0080,
  currentAppInitialSharedMember0098,
  currentAppInitialSharedMember0152,
  currentAppInitialSharedBrowserDiffMcpRuntime,
  currentAppInitialSharedMember0210,
  appServerDisconnectedAppServerSignal,
  currentAppInitialSharedMember0258,
  threadRuntimeRuntime0267,
  currentAppInitialSharedDisplayRuntime,
  currentAppInitialSharedAutoPixelsPagesFunction,
  currentAppInitialSharedMember0343,
  currentAppInitialSharedMember0460,
  currentAppInitialSharedMember0498,
  normalizeLocalImageAttachment,
  currentAppInitialSharedMember0600,
  currentAppInitialSharedMember0627,
  appActionMember0637,
  currentAppInitialSharedMember0691,
  currentAppInitialSharedMember0852,
  currentAppInitialSharedMember0872,
  currentAppInitialSharedPixelsPagesEdgeRuntime,
  flattenTextContentAttachments,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  createWindowAppAction,
  createWindowAppActionRunMap,
  initAppActionHelpersChunk,
  windowsTabsOpenAction,
  initRegisterAppActionsChunk,
} from "./register-app-actions";

function AppActionSetupAlpha(appActionInputCharlieJuliet) {
  if (appActionInputCharlieJuliet.scope == null)
    throw Error(`App action requires a route scope`);
  return appActionInputCharlieJuliet.scope;
}
var AppActionSetupBravo = once(() => {});
function AppActionSetupCharlie(appActionInputCharlieKilo) {
  switch (appActionInputCharlieKilo.routeKind) {
    case `local-thread`:
    case `remote-thread`:
    case `chatgpt-thread`:
    case `client-local-thread`:
      return !0;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return !1;
  }
}
function appActionLocalDelta(appActionInputCharlieLima) {
  switch (appActionInputCharlieLima.value.routeKind) {
    case `local-thread`:
      return {
        id: appActionInputCharlieLima.value.conversationId,
        kind: `local`,
        hostId:
          appActionInputCharlieLima.get(
            currentAppInitialSharedMember0210,
            appActionInputCharlieLima.value.conversationId,
          ) ?? `local`,
        title: appActionInputCharlieLima.get(
          worktreeNewThreadOrchestratorCompatSlotLowerZLowerF,
          appActionInputCharlieLima.value.conversationId,
        ),
      };
    case `remote-thread`:
      return {
        id: appActionInputCharlieLima.value.taskId,
        kind: `remote`,
        title: null,
      };
    case `chatgpt-thread`:
      return {
        id: appActionInputCharlieLima.value.conversationId,
        kind: `chatgpt`,
        title: null,
      };
    case `client-local-thread`:
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function appActionLocalEcho(appActionInputCharlieMike) {
  switch (appActionInputCharlieMike.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return {
        kind: appActionInputCharlieMike.routeKind,
        pathname: appActionInputCharlieMike.pathname,
        routeTemplate: appActionInputCharlieMike.routeTemplate,
      };
    case `local-thread`:
      return {
        kind: appActionInputCharlieMike.routeKind,
        pathname: appActionInputCharlieMike.pathname,
        routeTemplate: appActionInputCharlieMike.routeTemplate,
        threadId: appActionInputCharlieMike.conversationId,
      };
    case `client-local-thread`:
      return {
        kind: appActionInputCharlieMike.routeKind,
        pathname: appActionInputCharlieMike.pathname,
        routeTemplate: appActionInputCharlieMike.routeTemplate,
        threadId: appActionInputCharlieMike.clientThreadId,
      };
    case `remote-thread`:
      return {
        kind: appActionInputCharlieMike.routeKind,
        pathname: appActionInputCharlieMike.pathname,
        routeTemplate: appActionInputCharlieMike.routeTemplate,
        taskId: appActionInputCharlieMike.taskId,
      };
    case `chatgpt-thread`:
      return {
        kind: appActionInputCharlieMike.routeKind,
        pathname: appActionInputCharlieMike.pathname,
        routeTemplate: appActionInputCharlieMike.routeTemplate,
        threadId: appActionInputCharlieMike.conversationId,
      };
  }
}
function appActionLocalFoxtrot(
  appActionInputCharlieNovember,
  appActionInputCharlieOscar,
  appActionInputCharliePapa,
  appActionInputCharlieQuebec,
  appActionInputCharlieRomeo,
) {
  let appActionLocalCharlieSierra =
      appActionInputCharlieOscar == null
        ? []
        : worktreeNewThreadOrchestratorCompatSlotUpperNLowerU(
            appActionInputCharlieNovember,
            appActionInputCharlieOscar,
          ),
    appActionLocalCharlieTango =
      appActionInputCharlieOscar == null
        ? null
        : worktreeNewThreadOrchestratorCompatSlotUpperRLowerU(
            appActionInputCharlieOscar,
            appActionInputCharlieNovember.get(
              worktreeNewThreadOrchestratorCompatSlotLowerFLowerM,
            ),
            {
              bottom: appActionInputCharliePapa,
              right: appActionInputCharlieQuebec,
            },
          ),
    appActionLocalCharlieUniform =
      appActionLocalCharlieTango == null
        ? null
        : (appActionLocalCharlieSierra.find(
            (appActionInputCharlieWhiskey) =>
              appActionInputCharlieWhiskey.browserTabId ===
              appActionLocalCharlieTango,
          ) ?? null),
    appActionLocalCharlieVictor =
      appActionInputCharlieOscar == null || appActionLocalCharlieTango == null
        ? null
        : worktreeNewThreadOrchestratorCompatSlotUpperYLowerF.getSnapshot(
            appActionInputCharlieOscar,
            appActionLocalCharlieTango,
          );
  return {
    canGoBack: appActionLocalCharlieVictor?.canGoBack ?? !1,
    canGoForward: appActionLocalCharlieVictor?.canGoForward ?? !1,
    fullscreen:
      appActionLocalCharlieUniform?.target === `right` &&
      appActionInputCharlieRomeo,
    isLoading: appActionLocalCharlieVictor?.isLoading ?? !1,
    open: appActionLocalCharlieUniform != null,
    tabs: appActionLocalGolf(
      appActionInputCharlieOscar,
      appActionLocalCharlieSierra.map(
        (appActionInputCharlieXray) => appActionInputCharlieXray.browserTabId,
      ),
      appActionLocalCharlieTango,
    ),
    title: appActionLocalCharlieVictor?.title ?? null,
    url: appActionLocalCharlieVictor?.url ?? null,
  };
}
function appActionLocalGolf(
  appActionInputCharlieYankee,
  appActionInputCharlieZulu,
  appActionInputDeltaAlpha,
) {
  if (appActionInputCharlieYankee == null) return [];
  let appActionLocalDeltaBravo =
      worktreeNewThreadOrchestratorCompatSlotUpperYLowerF.getBrowserUseBrowserTabIds(
        appActionInputCharlieYankee,
      ),
    appActionLocalDeltaCharlie = [
      ...appActionInputCharlieZulu,
      ...appActionLocalDeltaBravo,
    ],
    appActionLocalDeltaDelta = new Set(appActionLocalDeltaBravo),
    appActionLocalDeltaEcho = new Set();
  return appActionLocalDeltaCharlie.flatMap((appActionInputDeltaFoxtrot) => {
    if (appActionLocalDeltaEcho.has(appActionInputDeltaFoxtrot)) return [];
    appActionLocalDeltaEcho.add(appActionInputDeltaFoxtrot);
    let appActionLocalDeltaGolf =
      worktreeNewThreadOrchestratorCompatSlotUpperYLowerF.getSnapshot(
        appActionInputCharlieYankee,
        appActionInputDeltaFoxtrot,
      );
    return [
      {
        active: appActionInputDeltaFoxtrot === appActionInputDeltaAlpha,
        browserTabId: appActionInputDeltaFoxtrot,
        isBrowserUseActive:
          worktreeNewThreadOrchestratorCompatSlotUpperYLowerF.isBrowserUseActive(
            appActionInputCharlieYankee,
            appActionInputDeltaFoxtrot,
          ),
        isBrowserUseManaged: appActionLocalDeltaDelta.has(
          appActionInputDeltaFoxtrot,
        ),
        isLoading: appActionLocalDeltaGolf?.isLoading ?? !1,
        title: appActionLocalDeltaGolf?.title ?? null,
        url: appActionLocalDeltaGolf?.url ?? null,
      },
    ];
  });
}
function AppActionSetupHotel(appActionInputDeltaHotel) {
  let appActionLocalDeltaIndia = document.querySelector(
    appActionInputDeltaHotel,
  );
  return appActionLocalDeltaIndia == null
    ? {
        present: !1,
      }
    : {
        present: !0,
        scrollTop: Math.round(appActionLocalDeltaIndia.scrollTop),
        scrollHeight: Math.round(appActionLocalDeltaIndia.scrollHeight),
        clientHeight: Math.round(appActionLocalDeltaIndia.clientHeight),
      };
}
function appActionLocalIndia() {
  return Array.from(document.querySelectorAll(appActionMember0637)).map(
    (appActionInputDeltaJuliet, appActionInputDeltaKilo) =>
      appActionLocalJuliet(appActionInputDeltaJuliet, appActionInputDeltaKilo),
  );
}
function appActionLocalJuliet(
  appActionInputDeltaLima,
  appActionInputDeltaMike,
) {
  let appActionLocalDeltaNovember = appActionLocalNovember(
    appActionInputDeltaLima,
  );
  return appActionInputDeltaLima.matches(appActionMember0033.sidebarSection)
    ? {
        type: `section`,
        index: appActionInputDeltaMike,
        heading:
          appActionInputDeltaLima.dataset.appActionSidebarSectionHeading ?? ``,
        collapsed:
          appActionInputDeltaLima.dataset.appActionSidebarSectionCollapsed ===
          `true`,
        visibility: appActionLocalDeltaNovember,
      }
    : appActionInputDeltaLima.matches(appActionMember0033.sidebarProjectRow)
      ? {
          type: `project`,
          index: appActionInputDeltaMike,
          projectId:
            appActionInputDeltaLima.dataset.appActionSidebarProjectId ?? ``,
          label:
            appActionInputDeltaLima.dataset.appActionSidebarProjectLabel ?? ``,
          collapsed:
            appActionInputDeltaLima.dataset.appActionSidebarProjectCollapsed ===
            `true`,
          visibility: appActionLocalDeltaNovember,
        }
      : {
          type: `thread`,
          index: appActionInputDeltaMike,
          active:
            appActionInputDeltaLima.dataset.appActionSidebarThreadActive ===
            `true`,
          hostId:
            appActionInputDeltaLima.dataset.appActionSidebarThreadHostId ||
            null,
          id: appActionInputDeltaLima.dataset.appActionSidebarThreadId ?? ``,
          kind:
            appActionInputDeltaLima.dataset.appActionSidebarThreadKind ?? ``,
          pinned:
            appActionInputDeltaLima.dataset.appActionSidebarThreadPinned ===
            `true`,
          title:
            appActionInputDeltaLima.dataset.appActionSidebarThreadTitle ?? ``,
          visibility: appActionLocalDeltaNovember,
        };
}
function appActionLocalKilo(appActionInputDeltaOscar) {
  let appActionLocalDeltaPapa = appActionLocalMike(),
    appActionLocalDeltaQuebec = new Set(
      appActionInputDeltaOscar
        .get(worktreeNewThreadOrchestratorCompatSlotLowerSLowerD)
        .map((appActionInputDeltaRomeo) => appActionInputDeltaRomeo.path),
    );
  return [
    ...appActionInputDeltaOscar
      .get(worktreeNewThreadOrchestratorCompatSlotLowerSLowerD)
      .map((appActionInputDeltaSierra) => ({
        path: appActionInputDeltaSierra.path,
        additions:
          appActionInputDeltaSierra.summary?.additions ??
          appActionInputDeltaSierra.diff?.additions ??
          0,
        deletions:
          appActionInputDeltaSierra.summary?.deletions ??
          appActionInputDeltaSierra.diff?.deletions ??
          0,
        ...appActionLocalLima(
          appActionLocalDeltaPapa.get(appActionInputDeltaSierra.path),
        ),
      })),
    ...Array.from(appActionLocalDeltaPapa.entries()).flatMap(
      ([appActionInputDeltaTango, appActionInputDeltaUniform]) =>
        appActionLocalDeltaQuebec.has(appActionInputDeltaTango)
          ? []
          : [
              {
                path: appActionInputDeltaTango,
                additions: null,
                deletions: null,
                ...appActionLocalLima(appActionInputDeltaUniform),
              },
            ],
    ),
  ].map((appActionInputDeltaVictor, appActionInputDeltaWhiskey) => ({
    index: appActionInputDeltaWhiskey,
    ...appActionInputDeltaVictor,
  }));
}
function appActionLocalLima(appActionInputDeltaXray) {
  let appActionLocalDeltaYankee = appActionInputDeltaXray?.querySelector(
    appActionMember0033.reviewFileToggle,
  );
  return {
    expanded:
      appActionLocalDeltaYankee == null
        ? null
        : appActionLocalDeltaYankee.dataset.appActionReviewFileExpanded ===
          `true`,
    visibility:
      appActionInputDeltaXray == null
        ? `not_mounted`
        : appActionLocalNovember(appActionInputDeltaXray),
  };
}
function appActionLocalMike() {
  let appActionLocalDeltaZulu = Array.from(
    document.querySelectorAll(appActionMember0033.reviewFile),
  );
  return new Map(
    appActionLocalDeltaZulu.flatMap((appActionInputEchoAlpha) => {
      let appActionLocalEchoBravo = appActionInputEchoAlpha.dataset.reviewPath;
      return appActionLocalEchoBravo == null
        ? []
        : [[appActionLocalEchoBravo, appActionInputEchoAlpha]];
    }),
  );
}
function appActionLocalNovember(appActionInputEchoCharlie) {
  let appActionLocalEchoDelta =
    appActionInputEchoCharlie.getBoundingClientRect();
  return appActionLocalEchoDelta.bottom <= 0 ||
    appActionLocalEchoDelta.right <= 0 ||
    appActionLocalEchoDelta.top >= window.innerHeight ||
    appActionLocalEchoDelta.left >= window.innerWidth
    ? `offscreen`
    : `visible`;
}
var appActionLocalOscar,
  appActionLocalPapa,
  appActionLocalQuebec = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      appServerDisconnectedAppServerSignal(),
      worktreeNewThreadOrchestratorCompatSlotUpperXLowerF(),
      worktreeNewThreadOrchestratorCompatSlotLowerMLowerM(),
      worktreeNewThreadOrchestratorCompatSlotUpperHLowerF(),
      worktreeNewThreadOrchestratorCompatSlotLowerRLowerM(),
      worktreeNewThreadOrchestratorCompatSlotUpperRLowerF(),
      worktreeNewThreadOrchestratorCompatSlotUpperFLowerF(),
      worktreeNewThreadOrchestratorCompatSlotLowerALowerD(),
      currentAppInitialSharedDisplayRuntime(),
      worktreeNewThreadOrchestratorCompatSlotLowerZLowerU(),
      threadRuntimeRuntime0267(),
      worktreeNewThreadOrchestratorCompatSlotUpperYLowerL(),
      currentAppInitialSharedBrowserDiffMcpRuntime(),
      AppActionSetupBravo(),
      initAppActionHelpersChunk(),
      currentAppInitialSharedPixelsPagesEdgeRuntime(),
      (appActionLocalOscar = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(`app.get_summary`),
      })),
      (appActionLocalPapa = createWindowAppAction({
        schema: appActionLocalOscar,
        run: (appActionInputEchoEcho, appActionInputEchoFoxtrot) => {
          let appActionLocalEchoGolf = AppActionSetupAlpha(
              appActionInputEchoFoxtrot,
            ),
            appActionLocalEchoHotel = appActionLocalEchoGolf.get(
              worktreeNewThreadOrchestratorCompatSlotLowerELowerM,
            ),
            appActionLocalEchoIndia = appActionLocalEchoGolf.get(
              worktreeNewThreadOrchestratorCompatSlotUpperQLowerP,
            ),
            appActionLocalEchoJuliet = appActionLocalEchoGolf.get(
              worktreeNewThreadOrchestratorCompatSlotDollarLowerP,
            ),
            appActionLocalEchoKilo =
              appActionLocalEchoIndia && appActionLocalEchoJuliet
                ? appActionLocalEchoGolf.get(
                    worktreeNewThreadOrchestratorCompatSlotUpperULowerF.activeTab$,
                  )
                : null,
            appActionLocalEchoLima = appActionLocalEchoGolf.get(
              worktreeNewThreadOrchestratorCompatSlotUpperXLowerP,
            )
              ? appActionLocalEchoGolf.get(
                  worktreeNewThreadOrchestratorCompatSlotUpperVLowerF.activeTab$,
                )
              : null,
            appActionLocalEchoMike = appActionLocalEchoKilo?.tabId ?? null,
            appActionLocalEchoNovember = null;
          appActionLocalEchoMike === currentAppInitialSharedMember0152.DIFF
            ? (appActionLocalEchoNovember = `right`)
            : appActionLocalEchoLima?.tabId ===
                currentAppInitialSharedMember0152.DIFF &&
              (appActionLocalEchoNovember = `bottom`);
          let appActionLocalEchoOscar = appActionLocalEchoNovember != null,
            appActionLocalEchoPapa = appActionLocalEchoGolf.get(
              worktreeNewThreadOrchestratorCompatSlotLowerHLowerM,
            ),
            appActionLocalEchoQuebec =
              worktreeNewThreadOrchestratorCompatSlotUpperILowerU(
                appActionLocalEchoGolf.get(
                  worktreeNewThreadOrchestratorCompatSlotLowerFLowerM,
                ),
                {
                  bottom: appActionLocalEchoGolf.get(
                    worktreeNewThreadOrchestratorCompatSlotDollarLowerL,
                  ),
                  right: appActionLocalEchoGolf.get(
                    worktreeNewThreadOrchestratorCompatSlotLowerTLowerU,
                  ),
                },
              );
          return {
            schemaVersion: 1,
            window: {
              windowId: currentAppInitialSharedMember0691,
              route: appActionLocalEcho(appActionLocalEchoGolf.value),
              thread: appActionLocalDelta(appActionLocalEchoGolf),
              panels: {
                browser: appActionLocalFoxtrot(
                  appActionLocalEchoGolf,
                  AppActionSetupCharlie(appActionLocalEchoGolf.value)
                    ? currentAppInitialSharedMember0627(appActionLocalEchoGolf)
                    : null,
                  appActionLocalEchoLima,
                  appActionLocalEchoKilo,
                  appActionLocalEchoPapa,
                ),
                sidebar: {
                  open: appActionLocalEchoHotel,
                },
                review: {
                  open: appActionLocalEchoOscar,
                  placement: appActionLocalEchoNovember,
                  fullscreen:
                    appActionLocalEchoNovember === `right` &&
                    appActionLocalEchoPapa,
                  fileTreeOpen:
                    appActionLocalEchoOscar &&
                    appActionLocalEchoGolf.get(
                      worktreeNewThreadOrchestratorCompatSlotLowerTLowerM,
                    ),
                  view: appActionLocalEchoGolf.get(
                    worktreeNewThreadOrchestratorCompatSlotUpperLLowerF,
                  ),
                },
                terminal: {
                  open: appActionLocalEchoQuebec != null,
                  placement: appActionLocalEchoQuebec,
                },
                rightPanel: {
                  fullscreen: appActionLocalEchoPapa,
                  kind: appActionLocalEchoMike,
                },
              },
              ...(appActionLocalEchoHotel
                ? {
                    sidebar: {
                      viewport: AppActionSetupHotel(
                        appActionMember0033.sidebarScroll,
                      ),
                      rows: appActionLocalIndia(),
                    },
                  }
                : {}),
              ...(appActionLocalEchoOscar
                ? {
                    review: {
                      viewport: AppActionSetupHotel(
                        appActionMember0033.reviewScroll,
                      ),
                      files: appActionLocalKilo(appActionLocalEchoGolf),
                    },
                  }
                : {}),
              ...(AppActionSetupCharlie(appActionLocalEchoGolf.value)
                ? {
                    timeline: AppActionSetupHotel(
                      appActionMember0033.timelineScroll,
                    ),
                  }
                : {}),
            },
          };
        },
      })));
  });
function appActionLocalRomeo(appActionInputEchoRomeo) {
  return createWindowAppAction({
    schema: AppActionSetupTango,
    run: ({ action: appActionInputEchoSierra }) =>
      AppActionSetupSierra(appActionInputEchoRomeo(), appActionInputEchoSierra),
  });
}
function AppActionSetupSierra(
  appActionInputEchoTango,
  appActionInputEchoUniform,
  appActionInputEchoVictor = appActionLocalUniform,
) {
  return {
    schemaVersion: 1,
    prompt: appActionInputEchoVictor,
    actions: appActionInputEchoTango
      .filter((appActionInputEchoWhiskey) =>
        appActionInputEchoUniform == null
          ? !0
          : appActionInputEchoWhiskey.type === appActionInputEchoUniform,
      )
      .map((appActionInputEchoXray) => ({
        type: appActionInputEchoXray.type,
        jsonSchema: JSON.stringify(
          currentAppInitialSharedCompatSlotUpperRLowerO(
            appActionInputEchoXray.schema,
          ),
          null,
          2,
        ),
      })),
  };
}
var AppActionSetupTango,
  appActionLocalUniform,
  AppActionSetupVictor = once(() => {
    (currentAppInitialSharedCompatSlotLowerSLowerO(),
      initAppActionHelpersChunk(),
      (AppActionSetupTango = currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO(`app.help`),
        action: currentAppInitialSharedCompatSlotLowerJLowerO().optional(),
      })),
      (appActionLocalUniform = `You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.

Use this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. It can show workspace files, browser tabs, terminals, and reviews inside Codex with windows.tabs.open. Use the relevant browser, shell, or file tool to inspect or interact with their contents.

Use {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.

Use {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.

The current implementation targets the active primary app window. Use "current" for windowId.

Common workflow examples:
- Read the current appearance mode, preset ids, and custom chrome colors with app.appearance.get.
- Switch app appearance mode with app.appearance.set_mode and {"mode":"light"}, {"mode":"dark"}, or {"mode":"system"}.
- Pick a code theme preset with app.appearance.set_theme and {"variant":"light","theme":{"kind":"preset","themeId":"monokai"}}.
- Adjust custom chrome theme colors with app.appearance.set_theme and {"variant":"dark","theme":{"kind":"custom","patch":{"accent":"#ff8800"}}}.
- Get available theme ids with app.appearance.get_available_themes.
- Open a review file: call app.get_summary while the review panel is open, choose a file path from window.review.files, then call windows.review.scroll_to_file or windows.review.file_set_expanded.
- Scroll Codex UI surfaces: use the relevant windows.sidebar.scroll, windows.review.scroll, or windows.timeline.scroll action with a pixels, pages, or edge scroll object. Use the dedicated browser-use tool for browser navigation and page scrolling.

- Go to the first pinned thread: call app.get_summary, find the first row in window.sidebar.rows with type "thread" and pinned true, then call windows.show_thread with that row's id as threadId.
- Go home: call windows.show_home.
- Toggle panels: call windows.sidebar.toggle, windows.terminal.toggle, or windows.review.toggle.
- Show a workspace file, browser tab, terminal, or review in a Codex panel with windows.tabs.open.

Prefer the smallest action that directly satisfies the user request.`));
  });

export function createWindowSummaryAndHelpActions(
  getRegisteredActions: () => unknown[],
  appearanceActions: unknown[],
) {
  appActionLocalQuebec();
  AppActionSetupVictor();
  return [
    appActionLocalRomeo(getRegisteredActions),
    appActionLocalPapa,
    ...appearanceActions,
  ];
}
