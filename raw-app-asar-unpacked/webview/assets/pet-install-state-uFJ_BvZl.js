import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  _0 as t,
  aJ as n,
  cY as r,
  s2 as i,
  sY as a,
  tJ as o,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
async function s(e, t, n = (e) => o(`pet-install-preview`, { params: e })) {
  if (e.get(u)?.status === `installing`) return;
  let r = { ...t, status: `loading` };
  e.set(u, r);
  try {
    let i = await n(t);
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `ready`, preview: i });
  } catch {
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `previewError` });
  }
}
async function c(e, t, n = (e) => o(`pet-install`, { params: e })) {
  let r = e.get(u);
  if (r?.status !== `ready` && r?.status !== `installError`) return;
  let i = { ...r, status: `installing` };
  e.set(u, i);
  let a;
  try {
    a = await n({
      name: r.name,
      description: r.description,
      imageUrl: r.imageUrl,
      spriteVersionNumber: r.preview.spriteVersionNumber,
    });
  } catch {
    if (e.get(u) !== i) return;
    e.set(u, { ...r, status: `installError` });
    return;
  }
  e.get(u) === i &&
    (e.set(u, { ...r, status: `installed`, installedAvatarId: a.id }),
    await t().catch(() => void 0));
}
function l(e) {
  e.set(u, null);
}
var u,
  d = e(() => {
    (t(), r(), n(), (u = i(a, null)));
  });
export { s as a, u as i, d as n, c as r, l as t };
//# sourceMappingURL=pet-install-state-uFJ_BvZl.js.map
