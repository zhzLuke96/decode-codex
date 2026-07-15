import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $C as t,
  Aw as n,
  I2 as r,
  MU as i,
  NU as a,
  O2 as o,
  S0 as s,
  SK as c,
  SV as l,
  _0 as u,
  bJ as d,
  bK as f,
  cY as p,
  dh as m,
  hh as h,
  hw as g,
  iw as _,
  jw as v,
  mY as y,
  pY as b,
  sY as x,
  x0 as S,
  x2 as C,
  y2 as w,
  yJ as T,
  yY as E,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function D(e) {
  let n = (0, k.c)(28),
    r = e?.hostId ?? `local`,
    i = s(x),
    { data: l } = S(g, r),
    u = o(),
    f = v(),
    p = E(),
    h;
  n[0] === r ? (h = n[1]) : ((h = m(r)), (n[0] = r), (n[1] = h));
  let _ = h,
    y;
  n[2] !== _ || n[3] !== f
    ? ((y = async () => {
        await Promise.all([f(_), f(t), f([`user-saved-config`])]);
      }),
      (n[2] = _),
      (n[3] = f),
      (n[4] = y))
    : (y = n[4]);
  let b = y,
    w;
  n[5] !== r ||
  n[6] !== l?.configWriteTarget?.expectedVersion ||
  n[7] !== l?.configWriteTarget?.filePath
    ? ((w = async (e) => {
        let { appId: t, enabled: n } = e;
        await a(`batch-write-config-value`, {
          hostId: r,
          edits: O({ appId: t, enabled: n }),
          filePath: l?.configWriteTarget?.filePath ?? null,
          expectedVersion: l?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (n[5] = r),
      (n[6] = l?.configWriteTarget?.expectedVersion),
      (n[7] = l?.configWriteTarget?.filePath),
      (n[8] = w))
    : (w = n[8]);
  let T;
  n[9] !== _ || n[10] !== u
    ? ((T = async (e) => {
        let { appId: t, enabled: n } = e;
        await u.cancelQueries({ queryKey: _ });
        let r = u.getQueryData(_);
        return (
          r &&
            u.setQueryData(
              _,
              r.map((e) =>
                e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n },
              ),
            ),
          { previousApps: r }
        );
      }),
      (n[9] = _),
      (n[10] = u),
      (n[11] = T))
    : (T = n[11]);
  let D, A;
  n[12] !== _ || n[13] !== p || n[14] !== u || n[15] !== i
    ? ((D = (e, t) => {
        let { appId: n, appName: r, enabled: a } = t,
          o = r ?? u.getQueryData(_)?.find((e) => e.id === n)?.name ?? n;
        i.get(c).success(
          p.formatMessage(a ? j.enableSuccess : j.disableSuccess, {
            appName: o,
          }),
        );
      }),
      (A = (e, t, n) => {
        (d.error(`Failed to update app enablement`, {
          safe: {},
          sensitive: { error: e },
        }),
          i.get(c).danger(p.formatMessage(j.updateError)),
          n?.previousApps && u.setQueryData(_, n.previousApps));
      }),
      (n[12] = _),
      (n[13] = p),
      (n[14] = u),
      (n[15] = i),
      (n[16] = D),
      (n[17] = A))
    : ((D = n[16]), (A = n[17]));
  let M;
  n[18] !== b || n[19] !== w || n[20] !== T || n[21] !== D || n[22] !== A
    ? ((M = {
        mutationFn: w,
        onMutate: T,
        onSuccess: D,
        onError: A,
        onSettled: b,
      }),
      (n[18] = b),
      (n[19] = w),
      (n[20] = T),
      (n[21] = D),
      (n[22] = A),
      (n[23] = M))
    : (M = n[23]);
  let N = C(M),
    P = N.isPending ? (N.variables?.appId ?? null) : null,
    F;
  return (
    n[24] !== N.isPending || n[25] !== N.mutateAsync || n[26] !== P
      ? ((F = {
          setAppEnabled: N.mutateAsync,
          isUpdating: N.isPending,
          updatingAppId: P,
        }),
        (n[24] = N.isPending),
        (n[25] = N.mutateAsync),
        (n[26] = P),
        (n[27] = F))
      : (F = n[27]),
    F
  );
}
function O({ appId: e, enabled: t }) {
  return [{ keyPath: `${A}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
var k,
  A,
  j,
  M = e(() => {
    ((k = r()),
      w(),
      u(),
      y(),
      i(),
      f(),
      h(),
      _(),
      n(),
      p(),
      l(),
      T(),
      (A = `apps`),
      (j = b({
        enableSuccess: {
          id: `apps.enable.success`,
          defaultMessage: `{appName} app enabled`,
          description: `Toast shown after successfully enabling an app`,
        },
        disableSuccess: {
          id: `apps.disable.success`,
          defaultMessage: `{appName} app disabled`,
          description: `Toast shown after successfully disabling an app`,
        },
        updateError: {
          id: `apps.update.error`,
          defaultMessage: `Failed to update app`,
          description: `Toast shown when enabling or disabling an app fails`,
        },
      })));
  });
export { D as n, M as t };
//# sourceMappingURL=app-initial~app-main~plugin-detail-page~new-thread-panel-page~appgen-library-page~hotkey-wi~ocujj061-tPoSk-2n.js.map
