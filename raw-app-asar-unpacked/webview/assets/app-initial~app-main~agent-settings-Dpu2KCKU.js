import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $R as t,
  PB as n,
  bG as r,
  bJ as i,
  iz as a,
  nz as o,
  rz as s,
  tz as c,
  yG as l,
  yJ as u,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
var d,
  f,
  p = e(() => {
    ((d = `3026692602`), (f = `3502101112`));
  });
function m({ bundleVersion: e, durationMs: t, release: n, status: r }) {
  return { durationMs: t, release: v(n), status: y(r), ...x(e) };
}
function h({ diagnostics: e, durationMs: n }) {
  return {
    durationMs: n,
    problemCount: e.problems.length,
    status: e.installed
      ? t.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : t.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...x(e.bundleVersion),
  };
}
function g({ durationMs: e }) {
  return {
    durationMs: e,
    status: t.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED,
  };
}
function _({ bundleVersion: e, durationMs: t, status: n }) {
  return { durationMs: t, status: b(n), ...x(e) };
}
function v(e) {
  switch (e) {
    case `latest`:
      return a.CODEX_PRIMARY_RUNTIME_RELEASE_LATEST;
    case `latest-alpha`:
      return a.CODEX_PRIMARY_RUNTIME_RELEASE_LATEST_ALPHA;
  }
}
function y(e) {
  switch (e) {
    case `already-current`:
      return s.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return s.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_CANCELED;
    case `failed`:
      return s.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_FAILED;
    case `installed`:
      return s.CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_INSTALLED;
  }
}
function b(e) {
  switch (e) {
    case `already-current`:
      return c.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return c.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case `failed`:
      return c.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case `installed`:
      return c.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function x(e) {
  return e == null || e.length === 0 ? {} : { bundleVersion: e };
}
var S = e(() => {
  n();
});
function C() {
  return E.size > 0;
}
function w({ hostId: e }) {
  let t = l.primaryRuntime;
  return t == null
    ? Promise.reject(Error(`Primary runtime is unavailable`))
    : Promise.resolve(t.cancelInstall({ hostId: e }));
}
function T({ hostId: e, request: t, release: n }) {
  let r = JSON.stringify({ hostId: e, release: n }),
    i = E.get(r);
  if (i != null) return i;
  let a = D.then(() => {
    let r = l.primaryRuntime;
    if (r == null) throw Error(`Primary runtime is unavailable`);
    return r[t]({ hostId: e, release: n });
  });
  return (
    E.set(r, a),
    (D = a.then(
      () => void 0,
      () => void 0,
    )),
    a
      .finally(() => {
        E.delete(r);
      })
      .catch(() => void 0),
    a
  );
}
var E,
  D,
  O = e(() => {
    (r(), (E = new Map()), (D = Promise.resolve()));
  });
async function k({
  formatMessage: e,
  hostId: t,
  productLogger: n,
  release: r,
  toast: a,
}) {
  let s = Date.now(),
    c = a.info(
      e({
        id: `codex.command.installPrimaryRuntime.installing`,
        defaultMessage: `Installing Codex runtime…`,
        description: `Toast shown while the Codex runtime installer is running`,
      }),
      { duration: 120, hasCloseButton: !1, id: `install-primary-runtime` },
    );
  try {
    let i = await T({ hostId: t, release: r, request: `install` });
    if (
      (n.logProductEvent(
        o,
        m({
          bundleVersion: i.bundleVersion,
          durationMs: Date.now() - s,
          release: r,
          status: i.status,
        }),
      ),
      i.status === `already-current`)
    ) {
      a.info(
        e({
          id: `codex.command.installPrimaryRuntime.alreadyDownloaded`,
          defaultMessage: `Latest Codex runtime is already downloaded`,
          description: `Toast shown when the Codex runtime installer exits because the latest runtime is already downloaded`,
        }),
        { id: `install-primary-runtime` },
      );
      return;
    }
    a.success(
      e({
        id: `codex.command.installPrimaryRuntime.installed`,
        defaultMessage: `Codex runtime installed`,
        description: `Toast shown when the Codex runtime finishes installing`,
      }),
      { id: `install-primary-runtime` },
    );
  } catch (t) {
    if (A(t)) {
      (n.logProductEvent(
        o,
        m({
          bundleVersion: null,
          durationMs: Date.now() - s,
          release: r,
          status: `canceled`,
        }),
      ),
        a.info(
          e({
            id: `codex.command.installPrimaryRuntime.canceled`,
            defaultMessage: `Codex runtime install canceled`,
            description: `Toast shown when the Codex runtime installer is canceled`,
          }),
          { id: `install-primary-runtime` },
        ));
      return;
    }
    (i.error(`Error installing primary runtime`, {
      safe: { release: r },
      sensitive: { error: t },
    }),
      n.logProductEvent(
        o,
        m({
          bundleVersion: null,
          durationMs: Date.now() - s,
          release: r,
          status: `failed`,
        }),
      ),
      a.danger(
        e({
          id: `codex.command.installPrimaryRuntime.failed`,
          defaultMessage: `Couldn’t install Codex runtime`,
          description: `Toast shown when the Codex runtime installer fails`,
        }),
        { id: `install-primary-runtime` },
      ));
  } finally {
    c.close();
  }
}
function A(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
var j = e(() => {
  (n(), u(), S(), O());
});
export {
  C as a,
  h as c,
  S as d,
  f,
  w as i,
  g as l,
  p as m,
  A as n,
  O as o,
  d as p,
  k as r,
  T as s,
  j as t,
  _ as u,
};
//# sourceMappingURL=app-initial~app-main~agent-settings-Dpu2KCKU.js.map
