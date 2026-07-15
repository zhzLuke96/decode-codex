// Restored from ref/webview/assets/chunk-U2HBQHQK-DJ4vuuzw.js
// Flat boundary. Vendored chunkU2HBQHQK chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import {
  resolveIconData,
  iconToSvg,
  wrapSvgContent,
  parseIconName,
  replaceIconIds,
  dedentTemplate,
} from "./iconify-core";
import { marked as chunkU2HBQHQKImport1 } from "marked";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXB,
  chunkICPOFSXXJ,
  _chunkICPOFSXXU,
  _chunkICPOFSXXO,
  chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import { chunk5PVQY5BWD } from "./chunk-5pvqy5bw";
var chunkU2HBQHQKA = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80,
  },
  chunkU2HBQHQKValue1 = new Map(),
  chunkU2HBQHQKValue2 = new Map(),
  chunkU2HBQHQKValue3 = chunkAGHRB4JFN(
    async (chunkU2HBQHQKParam19, chunkU2HBQHQKParam20) => {
      let chunkU2HBQHQKValue23 = parseIconName(
        chunkU2HBQHQKParam19,
        true,
        chunkU2HBQHQKParam20 !== undefined,
      );
      if (!chunkU2HBQHQKValue23)
        throw Error(`Invalid icon name: ${chunkU2HBQHQKParam19}`);
      let chunkU2HBQHQKValue24 =
        chunkU2HBQHQKValue23.prefix || chunkU2HBQHQKParam20;
      if (!chunkU2HBQHQKValue24)
        throw Error(`Icon name must contain a prefix: ${chunkU2HBQHQKParam19}`);
      let chunkU2HBQHQKValue25 = chunkU2HBQHQKValue1.get(chunkU2HBQHQKValue24);
      if (!chunkU2HBQHQKValue25) {
        let chunkU2HBQHQKValue42 =
          chunkU2HBQHQKValue2.get(chunkU2HBQHQKValue24);
        if (!chunkU2HBQHQKValue42)
          throw Error(`Icon set not found: ${chunkU2HBQHQKValue23.prefix}`);
        try {
          chunkU2HBQHQKValue25 = {
            ...(await chunkU2HBQHQKValue42()),
            prefix: chunkU2HBQHQKValue24,
          };
          chunkU2HBQHQKValue1.set(chunkU2HBQHQKValue24, chunkU2HBQHQKValue25);
        } catch (chunkU2HBQHQKValue57) {
          throw (
            chunkAGHRB4JFR.error(chunkU2HBQHQKValue57),
            Error(`Failed to load icon set: ${chunkU2HBQHQKValue23.prefix}`)
          );
        }
      }
      let chunkU2HBQHQKValue26 = resolveIconData(
        chunkU2HBQHQKValue25,
        chunkU2HBQHQKValue23.name,
      );
      if (!chunkU2HBQHQKValue26)
        throw Error(`Icon not found: ${chunkU2HBQHQKParam19}`);
      return chunkU2HBQHQKValue26;
    },
    "getRegisteredIconData",
  ),
  chunkU2HBQHQKValue4 = chunkAGHRB4JFN(async (chunkU2HBQHQKParam60) => {
    try {
      return (await chunkU2HBQHQKValue3(chunkU2HBQHQKParam60), true);
    } catch {
      return false;
    }
  }, "isIconAvailable"),
  chunkU2HBQHQKR = chunkAGHRB4JFN(
    async (
      chunkU2HBQHQKParam44,
      chunkU2HBQHQKParam45,
      chunkU2HBQHQKParam46,
    ) => {
      let chunkU2HBQHQKValue44;
      try {
        chunkU2HBQHQKValue44 = await chunkU2HBQHQKValue3(
          chunkU2HBQHQKParam44,
          chunkU2HBQHQKParam45?.fallbackPrefix,
        );
      } catch (chunkU2HBQHQKValue60) {
        chunkAGHRB4JFR.error(chunkU2HBQHQKValue60);
        chunkU2HBQHQKValue44 = chunkU2HBQHQKA;
      }
      let chunkU2HBQHQKValue45 = iconToSvg(
        chunkU2HBQHQKValue44,
        chunkU2HBQHQKParam45,
      );
      return chunkICPOFSXXJ(
        wrapSvgContent(replaceIconIds(chunkU2HBQHQKValue45.body), {
          ...chunkU2HBQHQKValue45.attributes,
          ...chunkU2HBQHQKParam46,
        }),
        chunkICPOFSXXW(),
      );
    },
    "getIconSVG",
  );
export const chunkU2HBQHQKI = chunkAGHRB4JFN((chunkU2HBQHQKParam23) => {
  for (let chunkU2HBQHQKValue32 of chunkU2HBQHQKParam23) {
    if (!chunkU2HBQHQKValue32.name)
      throw Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.',
      );
    if (
      (chunkAGHRB4JFR.debug(
        "Registering icon pack:",
        chunkU2HBQHQKValue32.name,
      ),
      "loader" in chunkU2HBQHQKValue32)
    )
      chunkU2HBQHQKValue2.set(
        chunkU2HBQHQKValue32.name,
        chunkU2HBQHQKValue32.loader,
      );
    else if ("icons" in chunkU2HBQHQKValue32)
      chunkU2HBQHQKValue1.set(
        chunkU2HBQHQKValue32.name,
        chunkU2HBQHQKValue32.icons,
      );
    else
      throw (
        chunkAGHRB4JFR.error("Invalid icon loader:", chunkU2HBQHQKValue32),
        Error(
          'Invalid icon loader. Must have either "icons" or "loader" property.',
        )
      );
  }
}, "registerIconPacks");
function chunkU2HBQHQKHelper1(chunkU2HBQHQKParam55, { markdownAutoWrap }) {
  return dedentTemplate(
    chunkU2HBQHQKParam55.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"),
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper1, "preprocessMarkdown");
function chunkU2HBQHQKHelper2(chunkU2HBQHQKParam47) {
  return chunkU2HBQHQKParam47.split(/\\n|\n|<br\s*\/?>/gi).map(
    (item) =>
      item
        .trim()
        .match(/<[^>]+>|[^\s<>]+/g)
        ?.map((chunkU2HBQHQKParam66) => ({
          content: chunkU2HBQHQKParam66,
          type: "normal",
        })) ?? [],
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper2, "nonMarkdownToLines");
function chunkU2HBQHQKHelper3(chunkU2HBQHQKParam10, chunkU2HBQHQKParam11 = {}) {
  let chunkU2HBQHQKValue13 = chunkU2HBQHQKHelper1(
      chunkU2HBQHQKParam10,
      chunkU2HBQHQKParam11,
    ),
    chunkU2HBQHQKValue14 = chunkU2HBQHQKImport1.lexer(chunkU2HBQHQKValue13),
    chunkU2HBQHQKValue15 = [[]],
    chunkU2HBQHQKValue16 = 0;
  function chunkU2HBQHQKHelper19(
    chunkU2HBQHQKParam21,
    chunkU2HBQHQKParam22 = "normal",
  ) {
    chunkU2HBQHQKParam21.type === "text"
      ? chunkU2HBQHQKParam21.text.split("\n").forEach((item, index) => {
          index !== 0 &&
            (chunkU2HBQHQKValue16++, chunkU2HBQHQKValue15.push([]));
          item.split(" ").forEach((_item) => {
            _item = _item.replace(/&#39;/g, "'");
            _item &&
              chunkU2HBQHQKValue15[chunkU2HBQHQKValue16].push({
                content: _item,
                type: chunkU2HBQHQKParam22,
              });
          });
        })
      : chunkU2HBQHQKParam21.type === "strong" ||
          chunkU2HBQHQKParam21.type === "em"
        ? chunkU2HBQHQKParam21.tokens.forEach((item) => {
            chunkU2HBQHQKHelper19(item, chunkU2HBQHQKParam21.type);
          })
        : chunkU2HBQHQKParam21.type === "html" &&
          chunkU2HBQHQKValue15[chunkU2HBQHQKValue16].push({
            content: chunkU2HBQHQKParam21.text,
            type: "normal",
          });
  }
  return (
    chunkAGHRB4JFN(chunkU2HBQHQKHelper19, "processNode"),
    chunkU2HBQHQKValue14.forEach((item) => {
      item.type === "paragraph"
        ? item.tokens?.forEach((chunkU2HBQHQKParam67) => {
            chunkU2HBQHQKHelper19(chunkU2HBQHQKParam67);
          })
        : item.type === "html"
          ? chunkU2HBQHQKValue15[chunkU2HBQHQKValue16].push({
              content: item.text,
              type: "normal",
            })
          : chunkU2HBQHQKValue15[chunkU2HBQHQKValue16].push({
              content: item.raw,
              type: "normal",
            });
    }),
    chunkU2HBQHQKValue15
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper3, "markdownToLines");
function chunkU2HBQHQKHelper4(chunkU2HBQHQKParam61) {
  return chunkU2HBQHQKParam61
    ? `<p>${chunkU2HBQHQKParam61.replace(/\\n|\n/g, "<br />")}</p>`
    : "";
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper4, "nonMarkdownToHTML");
function chunkU2HBQHQKHelper5(chunkU2HBQHQKParam12, { markdownAutoWrap } = {}) {
  let chunkU2HBQHQKValue17 = chunkU2HBQHQKImport1.lexer(chunkU2HBQHQKParam12);
  function chunkU2HBQHQKHelper20(chunkU2HBQHQKParam18) {
    return chunkU2HBQHQKParam18.type === "text"
      ? markdownAutoWrap === false
        ? chunkU2HBQHQKParam18.text
            .replace(/\n */g, "<br/>")
            .replace(/ /g, "&nbsp;")
        : chunkU2HBQHQKParam18.text.replace(/\n */g, "<br/>")
      : chunkU2HBQHQKParam18.type === "strong"
        ? `<strong>${chunkU2HBQHQKParam18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</strong>`
        : chunkU2HBQHQKParam18.type === "em"
          ? `<em>${chunkU2HBQHQKParam18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</em>`
          : chunkU2HBQHQKParam18.type === "paragraph"
            ? `<p>${chunkU2HBQHQKParam18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</p>`
            : chunkU2HBQHQKParam18.type === "space"
              ? ""
              : chunkU2HBQHQKParam18.type === "html"
                ? `${chunkU2HBQHQKParam18.text}`
                : chunkU2HBQHQKParam18.type === "escape"
                  ? chunkU2HBQHQKParam18.text
                  : (chunkAGHRB4JFR.warn(
                      `Unsupported markdown: ${chunkU2HBQHQKParam18.type}`,
                    ),
                    chunkU2HBQHQKParam18.raw);
  }
  return (
    chunkAGHRB4JFN(chunkU2HBQHQKHelper20, "output"),
    chunkU2HBQHQKValue17.map(chunkU2HBQHQKHelper20).join("")
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper5, "markdownToHTML");
function chunkU2HBQHQKHelper6(chunkU2HBQHQKParam59) {
  return Intl.Segmenter
    ? [...new Intl.Segmenter().segment(chunkU2HBQHQKParam59)].map(
        (item) => item.segment,
      )
    : [...chunkU2HBQHQKParam59];
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper6, "splitTextToChars");
function chunkU2HBQHQKHelper7(chunkU2HBQHQKParam62, chunkU2HBQHQKParam63) {
  return chunkU2HBQHQKHelper8(
    chunkU2HBQHQKParam62,
    [],
    chunkU2HBQHQKHelper6(chunkU2HBQHQKParam63.content),
    chunkU2HBQHQKParam63.type,
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper7, "splitWordToFitWidth");
function chunkU2HBQHQKHelper8(
  chunkU2HBQHQKParam30,
  chunkU2HBQHQKParam31,
  chunkU2HBQHQKParam32,
  chunkU2HBQHQKParam33,
) {
  if (chunkU2HBQHQKParam32.length === 0)
    return [
      {
        content: chunkU2HBQHQKParam31.join(""),
        type: chunkU2HBQHQKParam33,
      },
      {
        content: "",
        type: chunkU2HBQHQKParam33,
      },
    ];
  let [chunkU2HBQHQKValue35, ...chunkU2HBQHQKValue36] = chunkU2HBQHQKParam32,
    chunkU2HBQHQKValue37 = [...chunkU2HBQHQKParam31, chunkU2HBQHQKValue35];
  return chunkU2HBQHQKParam30([
    {
      content: chunkU2HBQHQKValue37.join(""),
      type: chunkU2HBQHQKParam33,
    },
  ])
    ? chunkU2HBQHQKHelper8(
        chunkU2HBQHQKParam30,
        chunkU2HBQHQKValue37,
        chunkU2HBQHQKValue36,
        chunkU2HBQHQKParam33,
      )
    : (chunkU2HBQHQKParam31.length === 0 &&
        chunkU2HBQHQKValue35 &&
        (chunkU2HBQHQKParam31.push(chunkU2HBQHQKValue35),
        chunkU2HBQHQKParam32.shift()),
      [
        {
          content: chunkU2HBQHQKParam31.join(""),
          type: chunkU2HBQHQKParam33,
        },
        {
          content: chunkU2HBQHQKParam32.join(""),
          type: chunkU2HBQHQKParam33,
        },
      ]);
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper8, "splitWordToFitWidthRecursion");
function chunkU2HBQHQKHelper9(chunkU2HBQHQKParam51, chunkU2HBQHQKParam52) {
  if (chunkU2HBQHQKParam51.some(({ content }) => content.includes("\n")))
    throw Error("splitLineToFitWidth does not support newlines in the line");
  return chunkU2HBQHQKHelper10(chunkU2HBQHQKParam51, chunkU2HBQHQKParam52);
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper9, "splitLineToFitWidth");
function chunkU2HBQHQKHelper10(
  chunkU2HBQHQKParam24,
  chunkU2HBQHQKParam25,
  chunkU2HBQHQKParam26 = [],
  chunkU2HBQHQKParam27 = [],
) {
  if (chunkU2HBQHQKParam24.length === 0)
    return (
      chunkU2HBQHQKParam27.length > 0 &&
        chunkU2HBQHQKParam26.push(chunkU2HBQHQKParam27),
      chunkU2HBQHQKParam26.length > 0 ? chunkU2HBQHQKParam26 : []
    );
  let chunkU2HBQHQKValue29 = "";
  chunkU2HBQHQKParam24[0].content === " " &&
    ((chunkU2HBQHQKValue29 = " "), chunkU2HBQHQKParam24.shift());
  let chunkU2HBQHQKValue30 = chunkU2HBQHQKParam24.shift() ?? {
      content: " ",
      type: "normal",
    },
    chunkU2HBQHQKValue31 = [...chunkU2HBQHQKParam27];
  if (
    (chunkU2HBQHQKValue29 !== "" &&
      chunkU2HBQHQKValue31.push({
        content: chunkU2HBQHQKValue29,
        type: "normal",
      }),
    chunkU2HBQHQKValue31.push(chunkU2HBQHQKValue30),
    chunkU2HBQHQKParam25(chunkU2HBQHQKValue31))
  )
    return chunkU2HBQHQKHelper10(
      chunkU2HBQHQKParam24,
      chunkU2HBQHQKParam25,
      chunkU2HBQHQKParam26,
      chunkU2HBQHQKValue31,
    );
  if (chunkU2HBQHQKParam27.length > 0) {
    chunkU2HBQHQKParam26.push(chunkU2HBQHQKParam27);
    chunkU2HBQHQKParam24.unshift(chunkU2HBQHQKValue30);
  } else if (chunkU2HBQHQKValue30.content) {
    let [chunkU2HBQHQKValue58, chunkU2HBQHQKValue59] = chunkU2HBQHQKHelper7(
      chunkU2HBQHQKParam25,
      chunkU2HBQHQKValue30,
    );
    chunkU2HBQHQKParam26.push([chunkU2HBQHQKValue58]);
    chunkU2HBQHQKValue59.content &&
      chunkU2HBQHQKParam24.unshift(chunkU2HBQHQKValue59);
  }
  return chunkU2HBQHQKHelper10(
    chunkU2HBQHQKParam24,
    chunkU2HBQHQKParam25,
    chunkU2HBQHQKParam26,
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper10, "splitLineToFitWidthRecursion");
function chunkU2HBQHQKHelper11(chunkU2HBQHQKParam64, chunkU2HBQHQKParam65) {
  chunkU2HBQHQKParam65 &&
    chunkU2HBQHQKParam64.attr("style", chunkU2HBQHQKParam65);
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper11, "applyStyle");
async function chunkU2HBQHQKHelper12(
  chunkU2HBQHQKParam4,
  chunkU2HBQHQKParam5,
  chunkU2HBQHQKParam6,
  chunkU2HBQHQKParam7,
  chunkU2HBQHQKParam8 = false,
  chunkU2HBQHQKParam9 = chunkICPOFSXXW(),
) {
  let chunkU2HBQHQKValue8 = chunkU2HBQHQKParam4.append("foreignObject");
  chunkU2HBQHQKValue8.attr(
    "width",
    `${Math.min(10 * chunkU2HBQHQKParam6, 16384)}px`,
  );
  chunkU2HBQHQKValue8.attr(
    "height",
    `${Math.min(10 * chunkU2HBQHQKParam6, 16384)}px`,
  );
  let chunkU2HBQHQKValue9 = chunkU2HBQHQKValue8.append("xhtml:div"),
    chunkU2HBQHQKValue10 = _chunkICPOFSXXB(chunkU2HBQHQKParam5.label)
      ? await _chunkICPOFSXXU(
          chunkU2HBQHQKParam5.label.replace(
            _chunkICPOFSXXO.lineBreakRegex,
            "\n",
          ),
          chunkU2HBQHQKParam9,
        )
      : chunkICPOFSXXJ(chunkU2HBQHQKParam5.label, chunkU2HBQHQKParam9),
    chunkU2HBQHQKValue11 = chunkU2HBQHQKParam5.isNode
      ? "nodeLabel"
      : "edgeLabel",
    chunkU2HBQHQKValue12 = chunkU2HBQHQKValue9.append("span");
  chunkU2HBQHQKValue12.html(chunkU2HBQHQKValue10);
  chunkU2HBQHQKHelper11(chunkU2HBQHQKValue12, chunkU2HBQHQKParam5.labelStyle);
  chunkU2HBQHQKValue12.attr(
    "class",
    `${chunkU2HBQHQKValue11} ${chunkU2HBQHQKParam7}`,
  );
  chunkU2HBQHQKHelper11(chunkU2HBQHQKValue9, chunkU2HBQHQKParam5.labelStyle);
  chunkU2HBQHQKValue9.style("display", "table-cell");
  chunkU2HBQHQKValue9.style("white-space", "nowrap");
  chunkU2HBQHQKValue9.style("line-height", "1.5");
  chunkU2HBQHQKParam6 !== 1 / 0 &&
    (chunkU2HBQHQKValue9.style("max-width", chunkU2HBQHQKParam6 + "px"),
    chunkU2HBQHQKValue9.style("text-align", "center"));
  chunkU2HBQHQKValue9.attr("xmlns", "http://www.w3.org/1999/xhtml");
  chunkU2HBQHQKParam8 && chunkU2HBQHQKValue9.attr("class", "labelBkg");
  let _chunkU2HBQHQKA = chunkU2HBQHQKValue9.node().getBoundingClientRect();
  return (
    _chunkU2HBQHQKA.width === chunkU2HBQHQKParam6 &&
      (chunkU2HBQHQKValue9.style("display", "table"),
      chunkU2HBQHQKValue9.style("white-space", "break-spaces"),
      chunkU2HBQHQKValue9.style("width", chunkU2HBQHQKParam6 + "px"),
      (_chunkU2HBQHQKA = chunkU2HBQHQKValue9.node().getBoundingClientRect())),
    chunkU2HBQHQKValue8.node()
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper12, "addHtmlSpan");
function chunkU2HBQHQKHelper13(
  chunkU2HBQHQKParam40,
  chunkU2HBQHQKParam41,
  chunkU2HBQHQKParam42,
  chunkU2HBQHQKParam43 = false,
) {
  let chunkU2HBQHQKValue43 = chunkU2HBQHQKParam40
    .append("tspan")
    .attr("class", "text-outer-tspan")
    .attr("x", 0)
    .attr("y", chunkU2HBQHQKParam41 * chunkU2HBQHQKParam42 - 0.1 + "em")
    .attr("dy", chunkU2HBQHQKParam42 + "em");
  return (
    chunkU2HBQHQKParam43 && chunkU2HBQHQKValue43.attr("text-anchor", "middle"),
    chunkU2HBQHQKValue43
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper13, "createTspan");
function chunkU2HBQHQKHelper14(
  chunkU2HBQHQKParam56,
  chunkU2HBQHQKParam57,
  chunkU2HBQHQKParam58,
) {
  let chunkU2HBQHQKValue52 = chunkU2HBQHQKParam56.append("text"),
    chunkU2HBQHQKValue53 = chunkU2HBQHQKHelper13(
      chunkU2HBQHQKValue52,
      1,
      chunkU2HBQHQKParam57,
    );
  chunkU2HBQHQKHelper17(chunkU2HBQHQKValue53, chunkU2HBQHQKParam58);
  let chunkU2HBQHQKValue54 = chunkU2HBQHQKValue53
    .node()
    .getComputedTextLength();
  return (chunkU2HBQHQKValue52.remove(), chunkU2HBQHQKValue54);
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper14, "computeWidthOfText");
function chunkU2HBQHQKT(
  chunkU2HBQHQKParam48,
  chunkU2HBQHQKParam49,
  chunkU2HBQHQKParam50,
) {
  let chunkU2HBQHQKValue48 = chunkU2HBQHQKParam48.append("text"),
    chunkU2HBQHQKValue49 = chunkU2HBQHQKHelper13(
      chunkU2HBQHQKValue48,
      1,
      chunkU2HBQHQKParam49,
    );
  chunkU2HBQHQKHelper17(chunkU2HBQHQKValue49, [
    {
      content: chunkU2HBQHQKParam50,
      type: "normal",
    },
  ]);
  let chunkU2HBQHQKValue50 = chunkU2HBQHQKValue49
    .node()
    ?.getBoundingClientRect();
  return (
    chunkU2HBQHQKValue50 && chunkU2HBQHQKValue48.remove(),
    chunkU2HBQHQKValue50
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKT, "computeDimensionOfText");
function chunkU2HBQHQKHelper15(
  chunkU2HBQHQKParam13,
  chunkU2HBQHQKParam14,
  chunkU2HBQHQKParam15,
  chunkU2HBQHQKParam16 = false,
  chunkU2HBQHQKParam17 = false,
) {
  let chunkU2HBQHQKValue19 = chunkU2HBQHQKParam14.append("g"),
    chunkU2HBQHQKValue20 = chunkU2HBQHQKValue19
      .insert("rect")
      .attr("class", "background")
      .attr("style", "stroke: none"),
    chunkU2HBQHQKValue21 = chunkU2HBQHQKValue19
      .append("text")
      .attr("y", "-10.1");
  chunkU2HBQHQKParam17 && chunkU2HBQHQKValue21.attr("text-anchor", "middle");
  let chunkU2HBQHQKValue22 = 0;
  for (let chunkU2HBQHQKValue51 of chunkU2HBQHQKParam15) {
    let chunkU2HBQHQKValue55 = chunkAGHRB4JFN(
        (chunkU2HBQHQKParam68) =>
          chunkU2HBQHQKHelper14(
            chunkU2HBQHQKValue19,
            1.1,
            chunkU2HBQHQKParam68,
          ) <= chunkU2HBQHQKParam13,
        "checkWidth",
      ),
      chunkU2HBQHQKValue56 = chunkU2HBQHQKValue55(chunkU2HBQHQKValue51)
        ? [chunkU2HBQHQKValue51]
        : chunkU2HBQHQKHelper9(chunkU2HBQHQKValue51, chunkU2HBQHQKValue55);
    for (let chunkU2HBQHQKValue61 of chunkU2HBQHQKValue56) {
      chunkU2HBQHQKHelper17(
        chunkU2HBQHQKHelper13(
          chunkU2HBQHQKValue21,
          chunkU2HBQHQKValue22,
          1.1,
          chunkU2HBQHQKParam17,
        ),
        chunkU2HBQHQKValue61,
      );
      chunkU2HBQHQKValue22++;
    }
  }
  if (chunkU2HBQHQKParam16) {
    let chunkU2HBQHQKValue46 = chunkU2HBQHQKValue21.node().getBBox();
    return (
      chunkU2HBQHQKValue20
        .attr("x", chunkU2HBQHQKValue46.x - 2)
        .attr("y", chunkU2HBQHQKValue46.y - 2)
        .attr("width", chunkU2HBQHQKValue46.width + 4)
        .attr("height", chunkU2HBQHQKValue46.height + 4),
      chunkU2HBQHQKValue19.node()
    );
  } else return chunkU2HBQHQKValue21.node();
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper15, "createFormattedText");
function chunkU2HBQHQKHelper16(chunkU2HBQHQKParam39) {
  return chunkU2HBQHQKParam39.replace(
    /&(amp|lt|gt);/g,
    (chunkU2HBQHQKParam53, chunkU2HBQHQKParam54) => {
      switch (chunkU2HBQHQKParam54) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        default:
          return chunkU2HBQHQKParam53;
      }
    },
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper16, "decodeHTMLEntities");
function chunkU2HBQHQKHelper17(chunkU2HBQHQKParam34, chunkU2HBQHQKParam35) {
  chunkU2HBQHQKParam34.text("");
  chunkU2HBQHQKParam35.forEach((item, index) => {
    let chunkU2HBQHQKValue38 = chunkU2HBQHQKParam34
      .append("tspan")
      .attr("font-style", item.type === "em" ? "italic" : "normal")
      .attr("class", "text-inner-tspan")
      .attr("font-weight", item.type === "strong" ? "bold" : "normal");
    index === 0
      ? chunkU2HBQHQKValue38.text(chunkU2HBQHQKHelper16(item.content))
      : chunkU2HBQHQKValue38.text(" " + chunkU2HBQHQKHelper16(item.content));
  });
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper17, "updateTextContentAndStyles");
async function chunkU2HBQHQKHelper18(
  chunkU2HBQHQKParam28,
  chunkU2HBQHQKParam29 = {},
) {
  let chunkU2HBQHQKValue33 = [];
  chunkU2HBQHQKParam28.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    (chunkU2HBQHQKParam36, chunkU2HBQHQKParam37, chunkU2HBQHQKParam38) => (
      chunkU2HBQHQKValue33.push(
        (async () => {
          let chunkU2HBQHQKValue47 = `${chunkU2HBQHQKParam37}:${chunkU2HBQHQKParam38}`;
          return (await chunkU2HBQHQKValue4(chunkU2HBQHQKValue47))
            ? await chunkU2HBQHQKR(chunkU2HBQHQKValue47, undefined, {
                class: "label-icon",
              })
            : `<i class='${chunkICPOFSXXJ(chunkU2HBQHQKParam36, chunkU2HBQHQKParam29).replace(":", " ")}'></i>`;
        })(),
      ),
      chunkU2HBQHQKParam36
    ),
  );
  let chunkU2HBQHQKValue34 = await Promise.all(chunkU2HBQHQKValue33);
  return chunkU2HBQHQKParam28.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    () => chunkU2HBQHQKValue34.shift() ?? "",
  );
}
chunkAGHRB4JFN(chunkU2HBQHQKHelper18, "replaceIconSubstring");
export const chunkU2HBQHQKN = chunkAGHRB4JFN(
  async (
    chunkU2HBQHQKParam1,
    chunkU2HBQHQKParam2 = "",
    {
      style = "",
      isTitle = false,
      classes = "",
      useHtmlLabels = true,
      markdown = true,
      isNode = true,
      width = 200,
      addSvgBackground = false,
    } = {},
    chunkU2HBQHQKParam3,
  ) => {
    if (
      (chunkAGHRB4JFR.debug(
        "XYZ createText",
        chunkU2HBQHQKParam2,
        style,
        isTitle,
        classes,
        useHtmlLabels,
        isNode,
        "addSvgBackground: ",
        addSvgBackground,
      ),
      useHtmlLabels)
    ) {
      let chunkU2HBQHQKValue39 = await chunkU2HBQHQKHelper18(
          chunk5PVQY5BWD(
            markdown
              ? chunkU2HBQHQKHelper5(chunkU2HBQHQKParam2, chunkU2HBQHQKParam3)
              : chunkU2HBQHQKHelper4(chunkU2HBQHQKParam2),
          ),
          chunkU2HBQHQKParam3,
        ),
        chunkU2HBQHQKValue40 = chunkU2HBQHQKParam2.replace(/\\\\/g, "\\");
      return await chunkU2HBQHQKHelper12(
        chunkU2HBQHQKParam1,
        {
          isNode,
          label: _chunkICPOFSXXB(chunkU2HBQHQKParam2)
            ? chunkU2HBQHQKValue40
            : chunkU2HBQHQKValue39,
          labelStyle: style.replace("fill:", "color:"),
        },
        width,
        classes,
        addSvgBackground,
        chunkU2HBQHQKParam3,
      );
    } else {
      let chunkU2HBQHQKValue6 = chunk5PVQY5BWD(
          chunkU2HBQHQKParam2.replace(/<br\s*\/?>/g, "<br/>"),
        ),
        chunkU2HBQHQKValue7 = chunkU2HBQHQKHelper15(
          width,
          chunkU2HBQHQKParam1,
          markdown
            ? chunkU2HBQHQKHelper3(
                chunkU2HBQHQKValue6.replace("<br>", "<br/>"),
                chunkU2HBQHQKParam3,
              )
            : chunkU2HBQHQKHelper2(chunkU2HBQHQKValue6),
          chunkU2HBQHQKParam2 ? addSvgBackground : false,
          !isNode,
        );
      if (isNode) {
        /stroke:/.exec(style) &&
          (style = style.replace("stroke:", "lineColor:"));
        let chunkU2HBQHQKValue41 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        Src(chunkU2HBQHQKValue7).attr("style", chunkU2HBQHQKValue41);
      } else {
        let chunkU2HBQHQKValue27 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/background:/g, "fill:");
        Src(chunkU2HBQHQKValue7)
          .select("rect")
          .attr("style", chunkU2HBQHQKValue27.replace(/background:/g, "fill:"));
        let chunkU2HBQHQKValue28 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        Src(chunkU2HBQHQKValue7)
          .select("text")
          .attr("style", chunkU2HBQHQKValue28);
      }
      return (
        isTitle
          ? Src(chunkU2HBQHQKValue7)
              .selectAll("tspan.text-outer-tspan")
              .classed("title-row", true)
          : Src(chunkU2HBQHQKValue7)
              .selectAll("tspan.text-outer-tspan")
              .classed("row", true),
        chunkU2HBQHQKValue7
      );
    }
  },
  "createText",
);
export function initChunkU2HBQHQK(): void {}
export function chunkU2HBQHQKO(chunkU2HBQHQKParam69: string | string[]) {
  var chunkU2HBQHQKValue62 = [...arguments].slice(1),
    chunkU2HBQHQKValue63 = Array.from(
      typeof chunkU2HBQHQKParam69 == "string"
        ? [chunkU2HBQHQKParam69]
        : chunkU2HBQHQKParam69,
    );
  chunkU2HBQHQKValue63[chunkU2HBQHQKValue63.length - 1] = chunkU2HBQHQKValue63[
    chunkU2HBQHQKValue63.length - 1
  ].replace(/\r?\n([\t ]*)$/, "");
  var chunkU2HBQHQKValue64 = chunkU2HBQHQKValue63.reduce(function (
    chunkU2HBQHQKParam70,
    chunkU2HBQHQKParam71,
  ) {
    var chunkU2HBQHQKValue65 =
      chunkU2HBQHQKParam71.match(/\n([\t ]+|(?!\s).)/g);
    return chunkU2HBQHQKValue65
      ? chunkU2HBQHQKParam70.concat(
          chunkU2HBQHQKValue65.map(function (chunkU2HBQHQKParam72) {
            return chunkU2HBQHQKParam72.match(/[\t ]/g)?.length ?? 0;
          }),
        )
      : chunkU2HBQHQKParam70;
  }, []);
  if (chunkU2HBQHQKValue64.length) {
    var chunkU2HBQHQKValue66 = RegExp(
      `
[\t ]{` +
        Math.min.apply(Math, chunkU2HBQHQKValue64) +
        "}",
      "g",
    );
    chunkU2HBQHQKValue63 = chunkU2HBQHQKValue63.map(
      function (chunkU2HBQHQKParam70) {
        return chunkU2HBQHQKParam70.replace(
          chunkU2HBQHQKValue66,
          `
`,
        );
      },
    );
  }
  chunkU2HBQHQKValue63[0] = chunkU2HBQHQKValue63[0].replace(/^\r?\n/, "");
  var chunkU2HBQHQKValue67 = chunkU2HBQHQKValue63[0];
  return (
    chunkU2HBQHQKValue62.forEach(
      function (chunkU2HBQHQKParam70, chunkU2HBQHQKParam71) {
        var chunkU2HBQHQKValue68 = chunkU2HBQHQKValue67.match(/(?:^|\n)( *)$/),
          chunkU2HBQHQKValue69 = chunkU2HBQHQKValue68
            ? chunkU2HBQHQKValue68[1]
            : "",
          chunkU2HBQHQKValue70 = chunkU2HBQHQKParam70;
        (typeof chunkU2HBQHQKParam70 == "string" &&
          chunkU2HBQHQKParam70.includes(`
`) &&
          (chunkU2HBQHQKValue70 = String(chunkU2HBQHQKParam70)
            .split(
              `
`,
            )
            .map(function (chunkU2HBQHQKParam70, chunkU2HBQHQKParam72) {
              return chunkU2HBQHQKParam72 === 0
                ? chunkU2HBQHQKParam70
                : "" + chunkU2HBQHQKValue69 + chunkU2HBQHQKParam70;
            })
            .join(
              `
`,
            )),
          (chunkU2HBQHQKValue67 +=
            chunkU2HBQHQKValue70 +
            chunkU2HBQHQKValue63[chunkU2HBQHQKParam71 + 1]));
      },
    ),
    chunkU2HBQHQKValue67
  );
}
export { chunkU2HBQHQKA, chunkU2HBQHQKR, chunkU2HBQHQKT };
