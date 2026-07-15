import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Af as t,
  Ao as n,
  C0 as r,
  Df as i,
  I2 as a,
  Mq as o,
  Nq as s,
  Of as c,
  Rm as l,
  S0 as u,
  _0 as d,
  _N as f,
  _Y as p,
  _f as m,
  bf as h,
  cY as g,
  gD as _,
  gN as v,
  hN as y,
  hf as b,
  jo as x,
  k2 as S,
  kf as C,
  mD as w,
  mY as T,
  mf as E,
  sY as D,
  vN as O,
  yN as k,
  zm as A,
} from "./app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~gwqc41kz-Bj9ubaFn.js";
function j(e) {
  let t = (0, F.c)(17),
    { onClose: r } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = a));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, I.jsx)(p, {
        id: `appgenPublicationTerms.modal.close.button.label`,
        defaultMessage: `Close`,
        description: `Accessible label for the close button in the one-time Sites publication terms disclosure. Closing marks the disclosure as seen, so it will not be shown again.`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let u;
  t[3] === r
    ? (u = t[4])
    : ((u = (e) => {
        (e.preventDefault(), r());
      }),
      (t[3] = r),
      (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, I.jsxs)(`div`, {
        className: `flex items-center gap-2 text-sm font-semibold text-token-text-link-foreground`,
        children: [
          (0, I.jsx)(l, { className: `icon-sm` }),
          (0, I.jsx)(p, {
            id: `appgenPublicationTerms.modal.product.label`,
            defaultMessage: `Sites`,
            description: `Product label at the top of the Sites publication terms modal. Short label next to the Sites icon.`,
          }),
        ],
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, I.jsx)(C, {
        className: `heading-lg font-semibold`,
        children: (0, I.jsx)(p, {
          id: `appgenPublicationTerms.modal.title.v20260612`,
          defaultMessage: `Before you use Sites`,
          description: `Heading in the Sites publication terms modal shown before a user first uses Sites. This copy belongs to publication terms version 2026-06-12.`,
        }),
      })),
      (t[6] = f))
    : (f = t[6]);
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, I.jsxs)(m, {
        className: `gap-6`,
        children: [
          d,
          (0, I.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              f,
              (0, I.jsx)(c, {
                className: `text-base leading-normal text-token-description-foreground`,
                children: (0, I.jsx)(p, {
                  id: `appgenPublicationTerms.modal.description.v20260612`,
                  defaultMessage: `A few additional terms apply when you create and publish a site`,
                  description: `Introductory sentence in the Sites publication terms modal. It explains why the user must review the terms before continuing. This copy belongs to publication terms version 2026-06-12.`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, I.jsx)(`li`, {
        children: (0, I.jsx)(p, {
          id: `appgenPublicationTerms.modal.responsibility_item.v20260612`,
          defaultMessage: `You’re responsible for your site and anything visitors submit`,
          description: `First responsibility item in the Sites publication terms modal. It tells site creators that they are responsible for their site and visitor submissions. This copy belongs to publication terms version 2026-06-12.`,
        }),
      })),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, I.jsx)(m, {
        className: `pt-0`,
        children: (0, I.jsxs)(`ul`, {
          className: `flex list-disc flex-col gap-3 pl-5 text-base leading-normal text-token-foreground marker:text-token-foreground`,
          children: [
            g,
            (0, I.jsx)(`li`, {
              children: (0, I.jsx)(p, {
                id: `appgenPublicationTerms.modal.personal_data_item.v20260625`,
                defaultMessage: `If your site collects personal data, <helpLink>learn more</helpLink> about your responsibilities`,
                description: `Second responsibility item in the Sites publication terms modal. It directs site creators who collect personal data to a help article explaining responsibilities such as including a privacy policy. The <helpLink> element opens the ChatGPT Sites help article. This copy belongs to publication terms version 2026-06-25.`,
                values: { helpLink: N },
              }),
            }),
            (0, I.jsx)(`li`, {
              children: (0, I.jsx)(p, {
                id: `appgenPublicationTerms.modal.enforcement_item.v20260625`,
                defaultMessage: `OpenAI may remove sites that violate our policies`,
                description: `Third responsibility item in the Sites publication terms modal. It explains that OpenAI may remove sites that violate OpenAI policies. This copy belongs to publication terms version 2026-06-25.`,
              }),
            }),
          ],
        }),
      })),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, I.jsx)(m, {
        className: `pt-0`,
        children: (0, I.jsxs)(`a`, {
          className: `inline-flex w-fit cursor-interaction items-center gap-1 text-base text-token-text-secondary underline underline-offset-2 hover:no-underline`,
          href: L,
          onClick: M,
          children: [
            (0, I.jsx)(p, {
              id: `appgenPublicationTerms.modal.terms_link.label`,
              defaultMessage: `Read the ChatGPT Sites Terms`,
              description: `Link label in the Sites publication terms modal. Opens the full ChatGPT Sites Terms in the user's browser.`,
            }),
            (0, I.jsx)(n, { className: `icon-xs`, href: L }),
          ],
        }),
      })),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, I.jsx)(m, {
        className: `pt-1`,
        children: (0, I.jsx)(b, {
          children: (0, I.jsx)(o, {
            className: `transition-transform duration-basic ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100`,
            size: `large`,
            type: `submit`,
            children: (0, I.jsx)(p, {
              id: `appgenPublicationTerms.modal.continue.button.label`,
              defaultMessage: `Continue`,
              description: `Primary button in the one-time Sites publication terms disclosure. Marks the disclosure as seen and lets the user continue. This button does not represent acceptance of the terms. Short button label.`,
            }),
          }),
        }),
      })),
      (t[11] = y))
    : (y = t[11]);
  let x;
  t[12] === u
    ? (x = t[13])
    : ((x = (0, I.jsxs)(E, {
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] gap-6 overflow-y-auto px-10 py-9`,
        as: `form`,
        onSubmit: u,
        children: [h, _, v, y],
      })),
      (t[12] = u),
      (t[13] = x));
  let S;
  return (
    t[14] !== a || t[15] !== x
      ? ((S = (0, I.jsx)(i, {
          open: !0,
          onOpenChange: a,
          size: `wide`,
          contentClassName: `!bg-token-dropdown-background !backdrop-blur-none`,
          dialogCloseLabel: s,
          children: x,
        })),
        (t[14] = a),
        (t[15] = x),
        (t[16] = S))
      : (S = t[16]),
    S
  );
}
function M(e) {
  _({ event: e, href: L, initiator: `open_in_browser_bridge` });
}
function N(e) {
  return (0, I.jsx)(`a`, {
    className: `cursor-interaction text-token-text-link-foreground underline underline-offset-2 hover:no-underline`,
    href: R,
    onClick: P,
    children: e,
  });
}
function P(e) {
  _({ event: e, href: R, initiator: `open_in_browser_bridge` });
}
var F,
  I,
  L,
  R,
  z = e(() => {
    ((F = a()),
      T(),
      s(),
      t(),
      h(),
      w(),
      x(),
      A(),
      (I = S()),
      (L = `https://openai.com/policies/chatgpt-sites-terms/`),
      (R = `https://help.openai.com/articles/20001337`));
  });
function B(e) {
  let t = (0, V.c)(2),
    { showWhenUnseen: n } = e,
    i = n === void 0 ? !1 : n,
    a = u(D),
    o = r(f) ?? v(a),
    s = r(y);
  if (o || (!i && !s)) return null;
  let c;
  return (
    t[0] === a
      ? (c = t[1])
      : ((c = (0, H.jsx)(j, { onClose: () => k(a) })), (t[0] = a), (t[1] = c)),
    c
  );
}
var V,
  H,
  U = e(() => {
    ((V = a()), d(), g(), z(), O(), (H = S()));
  });
export { U as n, B as t };
//# sourceMappingURL=app-initial~app-main~appgen-publication-terms-route-D76IBRvC.js.map
