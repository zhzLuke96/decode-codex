// Restored from ref/webview/assets/chunk-JA3XYJ7Z-CjR9BG5n.js
// Flat boundary. Vendored chunkJA3XYJ7Z chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJD } from "./chunk-s3r3byoj";
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DM,
  chunkABZYJK2DA,
  _chunkABZYJK2DX,
  chunkABZYJK2DM,
  _chunkABZYJK2DY,
} from "./katex-auto-render";
import {
  resolveIconData,
  iconToSvg,
  wrapSvgContent,
  parseIconName,
  replaceIconIds,
  dedentTemplate,
} from "./iconify-core";
import { marked as chunkJA3XYJ7ZImport1 } from "marked";
var chunkJA3XYJ7ZO = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80,
  },
  chunkJA3XYJ7ZValue1 = new Map(),
  chunkJA3XYJ7ZValue2 = new Map(),
  chunkJA3XYJ7ZValue3 = chunkAGHRB4JFN(
    async (chunkJA3XYJ7ZParam18, chunkJA3XYJ7ZParam19) => {
      let chunkJA3XYJ7ZValue21 = parseIconName(
        chunkJA3XYJ7ZParam18,
        true,
        chunkJA3XYJ7ZParam19 !== undefined,
      );
      if (!chunkJA3XYJ7ZValue21)
        throw Error(`Invalid icon name: ${chunkJA3XYJ7ZParam18}`);
      let chunkJA3XYJ7ZValue22 =
        chunkJA3XYJ7ZValue21.prefix || chunkJA3XYJ7ZParam19;
      if (!chunkJA3XYJ7ZValue22)
        throw Error(`Icon name must contain a prefix: ${chunkJA3XYJ7ZParam18}`);
      let chunkJA3XYJ7ZValue23 = chunkJA3XYJ7ZValue1.get(chunkJA3XYJ7ZValue22);
      if (!chunkJA3XYJ7ZValue23) {
        let chunkJA3XYJ7ZValue40 =
          chunkJA3XYJ7ZValue2.get(chunkJA3XYJ7ZValue22);
        if (!chunkJA3XYJ7ZValue40)
          throw Error(`Icon set not found: ${chunkJA3XYJ7ZValue21.prefix}`);
        try {
          chunkJA3XYJ7ZValue23 = {
            ...(await chunkJA3XYJ7ZValue40()),
            prefix: chunkJA3XYJ7ZValue22,
          };
          chunkJA3XYJ7ZValue1.set(chunkJA3XYJ7ZValue22, chunkJA3XYJ7ZValue23);
        } catch (chunkJA3XYJ7ZValue55) {
          throw (
            chunkAGHRB4JFR.error(chunkJA3XYJ7ZValue55),
            Error(`Failed to load icon set: ${chunkJA3XYJ7ZValue21.prefix}`)
          );
        }
      }
      let chunkJA3XYJ7ZValue24 = resolveIconData(
        chunkJA3XYJ7ZValue23,
        chunkJA3XYJ7ZValue21.name,
      );
      if (!chunkJA3XYJ7ZValue24)
        throw Error(`Icon not found: ${chunkJA3XYJ7ZParam18}`);
      return chunkJA3XYJ7ZValue24;
    },
    "getRegisteredIconData",
  ),
  chunkJA3XYJ7ZValue4 = chunkAGHRB4JFN(async (chunkJA3XYJ7ZParam54) => {
    try {
      return (await chunkJA3XYJ7ZValue3(chunkJA3XYJ7ZParam54), true);
    } catch {
      return false;
    }
  }, "isIconAvailable"),
  chunkJA3XYJ7ZR = chunkAGHRB4JFN(
    async (
      chunkJA3XYJ7ZParam39,
      chunkJA3XYJ7ZParam40,
      chunkJA3XYJ7ZParam41,
    ) => {
      let chunkJA3XYJ7ZValue42;
      try {
        chunkJA3XYJ7ZValue42 = await chunkJA3XYJ7ZValue3(
          chunkJA3XYJ7ZParam39,
          chunkJA3XYJ7ZParam40?.fallbackPrefix,
        );
      } catch (chunkJA3XYJ7ZValue58) {
        chunkAGHRB4JFR.error(chunkJA3XYJ7ZValue58);
        chunkJA3XYJ7ZValue42 = chunkJA3XYJ7ZO;
      }
      let chunkJA3XYJ7ZValue43 = iconToSvg(
        chunkJA3XYJ7ZValue42,
        chunkJA3XYJ7ZParam40,
      );
      return _chunkABZYJK2DM(
        wrapSvgContent(replaceIconIds(chunkJA3XYJ7ZValue43.body), {
          ...chunkJA3XYJ7ZValue43.attributes,
          ...chunkJA3XYJ7ZParam41,
        }),
        _chunkABZYJK2DY(),
      );
    },
    "getIconSVG",
  );
export const chunkJA3XYJ7ZI = chunkAGHRB4JFN((chunkJA3XYJ7ZParam22) => {
  for (let chunkJA3XYJ7ZValue30 of chunkJA3XYJ7ZParam22) {
    if (!chunkJA3XYJ7ZValue30.name)
      throw Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.',
      );
    if (
      (chunkAGHRB4JFR.debug(
        "Registering icon pack:",
        chunkJA3XYJ7ZValue30.name,
      ),
      "loader" in chunkJA3XYJ7ZValue30)
    )
      chunkJA3XYJ7ZValue2.set(
        chunkJA3XYJ7ZValue30.name,
        chunkJA3XYJ7ZValue30.loader,
      );
    else if ("icons" in chunkJA3XYJ7ZValue30)
      chunkJA3XYJ7ZValue1.set(
        chunkJA3XYJ7ZValue30.name,
        chunkJA3XYJ7ZValue30.icons,
      );
    else
      throw (
        chunkAGHRB4JFR.error("Invalid icon loader:", chunkJA3XYJ7ZValue30),
        Error(
          'Invalid icon loader. Must have either "icons" or "loader" property.',
        )
      );
  }
}, "registerIconPacks");
function chunkJA3XYJ7ZHelper1(chunkJA3XYJ7ZParam38, { markdownAutoWrap }) {
  let chunkJA3XYJ7ZValue41 = dedentTemplate(
    chunkJA3XYJ7ZParam38.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"),
  );
  return markdownAutoWrap === false
    ? chunkJA3XYJ7ZValue41.replace(/ /g, "&nbsp;")
    : chunkJA3XYJ7ZValue41;
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper1, "preprocessMarkdown");
function chunkJA3XYJ7ZHelper2(chunkJA3XYJ7ZParam10, chunkJA3XYJ7ZParam11 = {}) {
  let chunkJA3XYJ7ZValue11 = chunkJA3XYJ7ZHelper1(
      chunkJA3XYJ7ZParam10,
      chunkJA3XYJ7ZParam11,
    ),
    chunkJA3XYJ7ZValue12 = chunkJA3XYJ7ZImport1.lexer(chunkJA3XYJ7ZValue11),
    chunkJA3XYJ7ZValue13 = [[]],
    chunkJA3XYJ7ZValue14 = 0;
  function chunkJA3XYJ7ZHelper15(
    chunkJA3XYJ7ZParam20,
    chunkJA3XYJ7ZParam21 = "normal",
  ) {
    chunkJA3XYJ7ZParam20.type === "text"
      ? chunkJA3XYJ7ZParam20.text.split("\n").forEach((item, index) => {
          index !== 0 &&
            (chunkJA3XYJ7ZValue14++, chunkJA3XYJ7ZValue13.push([]));
          item.split(" ").forEach((_item) => {
            _item = _item.replace(/&#39;/g, "'");
            _item &&
              chunkJA3XYJ7ZValue13[chunkJA3XYJ7ZValue14].push({
                content: _item,
                type: chunkJA3XYJ7ZParam21,
              });
          });
        })
      : chunkJA3XYJ7ZParam20.type === "strong" ||
          chunkJA3XYJ7ZParam20.type === "em"
        ? chunkJA3XYJ7ZParam20.tokens.forEach((item) => {
            chunkJA3XYJ7ZHelper15(item, chunkJA3XYJ7ZParam20.type);
          })
        : chunkJA3XYJ7ZParam20.type === "html" &&
          chunkJA3XYJ7ZValue13[chunkJA3XYJ7ZValue14].push({
            content: chunkJA3XYJ7ZParam20.text,
            type: "normal",
          });
  }
  return (
    chunkAGHRB4JFN(chunkJA3XYJ7ZHelper15, "processNode"),
    chunkJA3XYJ7ZValue12.forEach((item) => {
      item.type === "paragraph"
        ? item.tokens?.forEach((chunkJA3XYJ7ZParam59) => {
            chunkJA3XYJ7ZHelper15(chunkJA3XYJ7ZParam59);
          })
        : item.type === "html"
          ? chunkJA3XYJ7ZValue13[chunkJA3XYJ7ZValue14].push({
              content: item.text,
              type: "normal",
            })
          : chunkJA3XYJ7ZValue13[chunkJA3XYJ7ZValue14].push({
              content: item.raw,
              type: "normal",
            });
    }),
    chunkJA3XYJ7ZValue13
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper2, "markdownToLines");
function chunkJA3XYJ7ZHelper3(chunkJA3XYJ7ZParam12, { markdownAutoWrap } = {}) {
  let chunkJA3XYJ7ZValue15 = chunkJA3XYJ7ZImport1.lexer(chunkJA3XYJ7ZParam12);
  function chunkJA3XYJ7ZHelper16(chunkJA3XYJ7ZParam13) {
    return chunkJA3XYJ7ZParam13.type === "text"
      ? markdownAutoWrap === false
        ? chunkJA3XYJ7ZParam13.text
            .replace(/\n */g, "<br/>")
            .replace(/ /g, "&nbsp;")
        : chunkJA3XYJ7ZParam13.text.replace(/\n */g, "<br/>")
      : chunkJA3XYJ7ZParam13.type === "strong"
        ? `<strong>${chunkJA3XYJ7ZParam13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</strong>`
        : chunkJA3XYJ7ZParam13.type === "em"
          ? `<em>${chunkJA3XYJ7ZParam13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</em>`
          : chunkJA3XYJ7ZParam13.type === "paragraph"
            ? `<p>${chunkJA3XYJ7ZParam13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</p>`
            : chunkJA3XYJ7ZParam13.type === "space"
              ? ""
              : chunkJA3XYJ7ZParam13.type === "html"
                ? `${chunkJA3XYJ7ZParam13.text}`
                : chunkJA3XYJ7ZParam13.type === "escape"
                  ? chunkJA3XYJ7ZParam13.text
                  : (chunkAGHRB4JFR.warn(
                      `Unsupported markdown: ${chunkJA3XYJ7ZParam13.type}`,
                    ),
                    chunkJA3XYJ7ZParam13.raw);
  }
  return (
    chunkAGHRB4JFN(chunkJA3XYJ7ZHelper16, "output"),
    chunkJA3XYJ7ZValue15.map(chunkJA3XYJ7ZHelper16).join("")
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper3, "markdownToHTML");
function chunkJA3XYJ7ZHelper4(chunkJA3XYJ7ZParam53) {
  return Intl.Segmenter
    ? [...new Intl.Segmenter().segment(chunkJA3XYJ7ZParam53)].map(
        (item) => item.segment,
      )
    : [...chunkJA3XYJ7ZParam53];
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper4, "splitTextToChars");
function chunkJA3XYJ7ZHelper5(chunkJA3XYJ7ZParam55, chunkJA3XYJ7ZParam56) {
  return chunkJA3XYJ7ZHelper6(
    chunkJA3XYJ7ZParam55,
    [],
    chunkJA3XYJ7ZHelper4(chunkJA3XYJ7ZParam56.content),
    chunkJA3XYJ7ZParam56.type,
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper5, "splitWordToFitWidth");
function chunkJA3XYJ7ZHelper6(
  chunkJA3XYJ7ZParam29,
  chunkJA3XYJ7ZParam30,
  chunkJA3XYJ7ZParam31,
  chunkJA3XYJ7ZParam32,
) {
  if (chunkJA3XYJ7ZParam31.length === 0)
    return [
      {
        content: chunkJA3XYJ7ZParam30.join(""),
        type: chunkJA3XYJ7ZParam32,
      },
      {
        content: "",
        type: chunkJA3XYJ7ZParam32,
      },
    ];
  let [chunkJA3XYJ7ZValue33, ...chunkJA3XYJ7ZValue34] = chunkJA3XYJ7ZParam31,
    chunkJA3XYJ7ZValue35 = [...chunkJA3XYJ7ZParam30, chunkJA3XYJ7ZValue33];
  return chunkJA3XYJ7ZParam29([
    {
      content: chunkJA3XYJ7ZValue35.join(""),
      type: chunkJA3XYJ7ZParam32,
    },
  ])
    ? chunkJA3XYJ7ZHelper6(
        chunkJA3XYJ7ZParam29,
        chunkJA3XYJ7ZValue35,
        chunkJA3XYJ7ZValue34,
        chunkJA3XYJ7ZParam32,
      )
    : (chunkJA3XYJ7ZParam30.length === 0 &&
        chunkJA3XYJ7ZValue33 &&
        (chunkJA3XYJ7ZParam30.push(chunkJA3XYJ7ZValue33),
        chunkJA3XYJ7ZParam31.shift()),
      [
        {
          content: chunkJA3XYJ7ZParam30.join(""),
          type: chunkJA3XYJ7ZParam32,
        },
        {
          content: chunkJA3XYJ7ZParam31.join(""),
          type: chunkJA3XYJ7ZParam32,
        },
      ]);
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper6, "splitWordToFitWidthRecursion");
function chunkJA3XYJ7ZHelper7(chunkJA3XYJ7ZParam45, chunkJA3XYJ7ZParam46) {
  if (chunkJA3XYJ7ZParam45.some(({ content }) => content.includes("\n")))
    throw Error("splitLineToFitWidth does not support newlines in the line");
  return chunkJA3XYJ7ZHelper8(chunkJA3XYJ7ZParam45, chunkJA3XYJ7ZParam46);
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper7, "splitLineToFitWidth");
function chunkJA3XYJ7ZHelper8(
  chunkJA3XYJ7ZParam23,
  chunkJA3XYJ7ZParam24,
  chunkJA3XYJ7ZParam25 = [],
  chunkJA3XYJ7ZParam26 = [],
) {
  if (chunkJA3XYJ7ZParam23.length === 0)
    return (
      chunkJA3XYJ7ZParam26.length > 0 &&
        chunkJA3XYJ7ZParam25.push(chunkJA3XYJ7ZParam26),
      chunkJA3XYJ7ZParam25.length > 0 ? chunkJA3XYJ7ZParam25 : []
    );
  let chunkJA3XYJ7ZValue27 = "";
  chunkJA3XYJ7ZParam23[0].content === " " &&
    ((chunkJA3XYJ7ZValue27 = " "), chunkJA3XYJ7ZParam23.shift());
  let chunkJA3XYJ7ZValue28 = chunkJA3XYJ7ZParam23.shift() ?? {
      content: " ",
      type: "normal",
    },
    chunkJA3XYJ7ZValue29 = [...chunkJA3XYJ7ZParam26];
  if (
    (chunkJA3XYJ7ZValue27 !== "" &&
      chunkJA3XYJ7ZValue29.push({
        content: chunkJA3XYJ7ZValue27,
        type: "normal",
      }),
    chunkJA3XYJ7ZValue29.push(chunkJA3XYJ7ZValue28),
    chunkJA3XYJ7ZParam24(chunkJA3XYJ7ZValue29))
  )
    return chunkJA3XYJ7ZHelper8(
      chunkJA3XYJ7ZParam23,
      chunkJA3XYJ7ZParam24,
      chunkJA3XYJ7ZParam25,
      chunkJA3XYJ7ZValue29,
    );
  if (chunkJA3XYJ7ZParam26.length > 0) {
    chunkJA3XYJ7ZParam25.push(chunkJA3XYJ7ZParam26);
    chunkJA3XYJ7ZParam23.unshift(chunkJA3XYJ7ZValue28);
  } else if (chunkJA3XYJ7ZValue28.content) {
    let [chunkJA3XYJ7ZValue56, chunkJA3XYJ7ZValue57] = chunkJA3XYJ7ZHelper5(
      chunkJA3XYJ7ZParam24,
      chunkJA3XYJ7ZValue28,
    );
    chunkJA3XYJ7ZParam25.push([chunkJA3XYJ7ZValue56]);
    chunkJA3XYJ7ZValue57.content &&
      chunkJA3XYJ7ZParam23.unshift(chunkJA3XYJ7ZValue57);
  }
  return chunkJA3XYJ7ZHelper8(
    chunkJA3XYJ7ZParam23,
    chunkJA3XYJ7ZParam24,
    chunkJA3XYJ7ZParam25,
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper8, "splitLineToFitWidthRecursion");
function chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZParam57, chunkJA3XYJ7ZParam58) {
  chunkJA3XYJ7ZParam58 &&
    chunkJA3XYJ7ZParam57.attr("style", chunkJA3XYJ7ZParam58);
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper9, "applyStyle");
async function chunkJA3XYJ7ZHelper10(
  chunkJA3XYJ7ZParam4,
  chunkJA3XYJ7ZParam5,
  chunkJA3XYJ7ZParam6,
  chunkJA3XYJ7ZParam7,
  chunkJA3XYJ7ZParam8 = false,
  chunkJA3XYJ7ZParam9 = _chunkABZYJK2DY(),
) {
  let chunkJA3XYJ7ZValue5 = chunkJA3XYJ7ZParam4.append("foreignObject");
  chunkJA3XYJ7ZValue5.attr("width", `${10 * chunkJA3XYJ7ZParam6}px`);
  chunkJA3XYJ7ZValue5.attr("height", `${10 * chunkJA3XYJ7ZParam6}px`);
  let chunkJA3XYJ7ZValue6 = chunkJA3XYJ7ZValue5.append("xhtml:div"),
    chunkJA3XYJ7ZValue7 = _chunkABZYJK2DX(chunkJA3XYJ7ZParam5.label)
      ? await chunkABZYJK2DA(
          chunkJA3XYJ7ZParam5.label.replace(
            chunkABZYJK2DM.lineBreakRegex,
            "\n",
          ),
          chunkJA3XYJ7ZParam9,
        )
      : _chunkABZYJK2DM(chunkJA3XYJ7ZParam5.label, chunkJA3XYJ7ZParam9),
    chunkJA3XYJ7ZValue8 = chunkJA3XYJ7ZParam5.isNode
      ? "nodeLabel"
      : "edgeLabel",
    chunkJA3XYJ7ZValue9 = chunkJA3XYJ7ZValue6.append("span");
  chunkJA3XYJ7ZValue9.html(chunkJA3XYJ7ZValue7);
  chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZValue9, chunkJA3XYJ7ZParam5.labelStyle);
  chunkJA3XYJ7ZValue9.attr(
    "class",
    `${chunkJA3XYJ7ZValue8} ${chunkJA3XYJ7ZParam7}`,
  );
  chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZValue6, chunkJA3XYJ7ZParam5.labelStyle);
  chunkJA3XYJ7ZValue6.style("display", "table-cell");
  chunkJA3XYJ7ZValue6.style("white-space", "nowrap");
  chunkJA3XYJ7ZValue6.style("line-height", "1.5");
  chunkJA3XYJ7ZValue6.style("max-width", chunkJA3XYJ7ZParam6 + "px");
  chunkJA3XYJ7ZValue6.style("text-align", "center");
  chunkJA3XYJ7ZValue6.attr("xmlns", "http://www.w3.org/1999/xhtml");
  chunkJA3XYJ7ZParam8 && chunkJA3XYJ7ZValue6.attr("class", "labelBkg");
  let _chunkJA3XYJ7ZO = chunkJA3XYJ7ZValue6.node().getBoundingClientRect();
  return (
    _chunkJA3XYJ7ZO.width === chunkJA3XYJ7ZParam6 &&
      (chunkJA3XYJ7ZValue6.style("display", "table"),
      chunkJA3XYJ7ZValue6.style("white-space", "break-spaces"),
      chunkJA3XYJ7ZValue6.style("width", chunkJA3XYJ7ZParam6 + "px"),
      (_chunkJA3XYJ7ZO = chunkJA3XYJ7ZValue6.node().getBoundingClientRect())),
    chunkJA3XYJ7ZValue5.node()
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper10, "addHtmlSpan");
function chunkJA3XYJ7ZHelper11(
  chunkJA3XYJ7ZParam47,
  chunkJA3XYJ7ZParam48,
  chunkJA3XYJ7ZParam49,
) {
  return chunkJA3XYJ7ZParam47
    .append("tspan")
    .attr("class", "text-outer-tspan")
    .attr("x", 0)
    .attr("y", chunkJA3XYJ7ZParam48 * chunkJA3XYJ7ZParam49 - 0.1 + "em")
    .attr("dy", chunkJA3XYJ7ZParam49 + "em");
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper11, "createTspan");
function chunkJA3XYJ7ZHelper12(
  chunkJA3XYJ7ZParam50,
  chunkJA3XYJ7ZParam51,
  chunkJA3XYJ7ZParam52,
) {
  let chunkJA3XYJ7ZValue50 = chunkJA3XYJ7ZParam50.append("text"),
    chunkJA3XYJ7ZValue51 = chunkJA3XYJ7ZHelper11(
      chunkJA3XYJ7ZValue50,
      1,
      chunkJA3XYJ7ZParam51,
    );
  chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZValue51, chunkJA3XYJ7ZParam52);
  let chunkJA3XYJ7ZValue52 = chunkJA3XYJ7ZValue51
    .node()
    .getComputedTextLength();
  return (chunkJA3XYJ7ZValue50.remove(), chunkJA3XYJ7ZValue52);
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper12, "computeWidthOfText");
function chunkJA3XYJ7ZT(
  chunkJA3XYJ7ZParam42,
  chunkJA3XYJ7ZParam43,
  chunkJA3XYJ7ZParam44,
) {
  let chunkJA3XYJ7ZValue46 = chunkJA3XYJ7ZParam42.append("text"),
    chunkJA3XYJ7ZValue47 = chunkJA3XYJ7ZHelper11(
      chunkJA3XYJ7ZValue46,
      1,
      chunkJA3XYJ7ZParam43,
    );
  chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZValue47, [
    {
      content: chunkJA3XYJ7ZParam44,
      type: "normal",
    },
  ]);
  let chunkJA3XYJ7ZValue48 = chunkJA3XYJ7ZValue47
    .node()
    ?.getBoundingClientRect();
  return (
    chunkJA3XYJ7ZValue48 && chunkJA3XYJ7ZValue46.remove(),
    chunkJA3XYJ7ZValue48
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZT, "computeDimensionOfText");
function chunkJA3XYJ7ZHelper13(
  chunkJA3XYJ7ZParam14,
  chunkJA3XYJ7ZParam15,
  chunkJA3XYJ7ZParam16,
  chunkJA3XYJ7ZParam17 = false,
) {
  let chunkJA3XYJ7ZValue17 = chunkJA3XYJ7ZParam15.append("g"),
    chunkJA3XYJ7ZValue18 = chunkJA3XYJ7ZValue17
      .insert("rect")
      .attr("class", "background")
      .attr("style", "stroke: none"),
    chunkJA3XYJ7ZValue19 = chunkJA3XYJ7ZValue17
      .append("text")
      .attr("y", "-10.1"),
    chunkJA3XYJ7ZValue20 = 0;
  for (let chunkJA3XYJ7ZValue49 of chunkJA3XYJ7ZParam16) {
    let chunkJA3XYJ7ZValue53 = chunkAGHRB4JFN(
        (chunkJA3XYJ7ZParam60) =>
          chunkJA3XYJ7ZHelper12(
            chunkJA3XYJ7ZValue17,
            1.1,
            chunkJA3XYJ7ZParam60,
          ) <= chunkJA3XYJ7ZParam14,
        "checkWidth",
      ),
      chunkJA3XYJ7ZValue54 = chunkJA3XYJ7ZValue53(chunkJA3XYJ7ZValue49)
        ? [chunkJA3XYJ7ZValue49]
        : chunkJA3XYJ7ZHelper7(chunkJA3XYJ7ZValue49, chunkJA3XYJ7ZValue53);
    for (let chunkJA3XYJ7ZValue59 of chunkJA3XYJ7ZValue54) {
      chunkJA3XYJ7ZHelper14(
        chunkJA3XYJ7ZHelper11(chunkJA3XYJ7ZValue19, chunkJA3XYJ7ZValue20, 1.1),
        chunkJA3XYJ7ZValue59,
      );
      chunkJA3XYJ7ZValue20++;
    }
  }
  if (chunkJA3XYJ7ZParam17) {
    let chunkJA3XYJ7ZValue44 = chunkJA3XYJ7ZValue19.node().getBBox();
    return (
      chunkJA3XYJ7ZValue18
        .attr("x", chunkJA3XYJ7ZValue44.x - 2)
        .attr("y", chunkJA3XYJ7ZValue44.y - 2)
        .attr("width", chunkJA3XYJ7ZValue44.width + 4)
        .attr("height", chunkJA3XYJ7ZValue44.height + 4),
      chunkJA3XYJ7ZValue17.node()
    );
  } else return chunkJA3XYJ7ZValue19.node();
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper13, "createFormattedText");
function chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZParam33, chunkJA3XYJ7ZParam34) {
  chunkJA3XYJ7ZParam33.text("");
  chunkJA3XYJ7ZParam34.forEach((item, index) => {
    let chunkJA3XYJ7ZValue36 = chunkJA3XYJ7ZParam33
      .append("tspan")
      .attr("font-style", item.type === "em" ? "italic" : "normal")
      .attr("class", "text-inner-tspan")
      .attr("font-weight", item.type === "strong" ? "bold" : "normal");
    index === 0
      ? chunkJA3XYJ7ZValue36.text(item.content)
      : chunkJA3XYJ7ZValue36.text(" " + item.content);
  });
}
chunkAGHRB4JFN(chunkJA3XYJ7ZHelper14, "updateTextContentAndStyles");
async function chunkJA3XYJ7ZA(chunkJA3XYJ7ZParam27, chunkJA3XYJ7ZParam28 = {}) {
  let chunkJA3XYJ7ZValue31 = [];
  chunkJA3XYJ7ZParam27.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    (chunkJA3XYJ7ZParam35, chunkJA3XYJ7ZParam36, chunkJA3XYJ7ZParam37) => (
      chunkJA3XYJ7ZValue31.push(
        (async () => {
          let chunkJA3XYJ7ZValue45 = `${chunkJA3XYJ7ZParam36}:${chunkJA3XYJ7ZParam37}`;
          return (await chunkJA3XYJ7ZValue4(chunkJA3XYJ7ZValue45))
            ? await chunkJA3XYJ7ZR(chunkJA3XYJ7ZValue45, undefined, {
                class: "label-icon",
              })
            : `<i class='${_chunkABZYJK2DM(chunkJA3XYJ7ZParam35, chunkJA3XYJ7ZParam28).replace(":", " ")}'></i>`;
        })(),
      ),
      chunkJA3XYJ7ZParam35
    ),
  );
  let chunkJA3XYJ7ZValue32 = await Promise.all(chunkJA3XYJ7ZValue31);
  return chunkJA3XYJ7ZParam27.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    () => chunkJA3XYJ7ZValue32.shift() ?? "",
  );
}
chunkAGHRB4JFN(chunkJA3XYJ7ZA, "replaceIconSubstring");
export const chunkJA3XYJ7ZN = chunkAGHRB4JFN(
  async (
    chunkJA3XYJ7ZParam1,
    chunkJA3XYJ7ZParam2 = "",
    {
      style = "",
      isTitle = false,
      classes = "",
      useHtmlLabels = true,
      isNode = true,
      width = 200,
      addSvgBackground = false,
    } = {},
    chunkJA3XYJ7ZParam3,
  ) => {
    if (
      (chunkAGHRB4JFR.debug(
        "XYZ createText",
        chunkJA3XYJ7ZParam2,
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
      let chunkJA3XYJ7ZValue38 = await chunkJA3XYJ7ZA(
          chunkS3R3BYOJD(
            chunkJA3XYJ7ZHelper3(chunkJA3XYJ7ZParam2, chunkJA3XYJ7ZParam3),
          ),
          chunkJA3XYJ7ZParam3,
        ),
        chunkJA3XYJ7ZValue39 = chunkJA3XYJ7ZParam2.replace(/\\\\/g, "\\");
      return await chunkJA3XYJ7ZHelper10(
        chunkJA3XYJ7ZParam1,
        {
          isNode,
          label: _chunkABZYJK2DX(chunkJA3XYJ7ZParam2)
            ? chunkJA3XYJ7ZValue39
            : chunkJA3XYJ7ZValue38,
          labelStyle: style.replace("fill:", "color:"),
        },
        width,
        classes,
        addSvgBackground,
        chunkJA3XYJ7ZParam3,
      );
    } else {
      let chunkJA3XYJ7ZValue10 = chunkJA3XYJ7ZHelper13(
        width,
        chunkJA3XYJ7ZParam1,
        chunkJA3XYJ7ZHelper2(
          chunkJA3XYJ7ZParam2
            .replace(/<br\s*\/?>/g, "<br/>")
            .replace("<br>", "<br/>"),
          chunkJA3XYJ7ZParam3,
        ),
        chunkJA3XYJ7ZParam2 ? addSvgBackground : false,
      );
      if (isNode) {
        /stroke:/.exec(style) &&
          (style = style.replace("stroke:", "lineColor:"));
        let chunkJA3XYJ7ZValue37 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        Src(chunkJA3XYJ7ZValue10).attr("style", chunkJA3XYJ7ZValue37);
      } else {
        let chunkJA3XYJ7ZValue25 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/background:/g, "fill:");
        Src(chunkJA3XYJ7ZValue10)
          .select("rect")
          .attr("style", chunkJA3XYJ7ZValue25.replace(/background:/g, "fill:"));
        let chunkJA3XYJ7ZValue26 = style
          .replace(/stroke:[^;]+;?/g, "")
          .replace(/stroke-width:[^;]+;?/g, "")
          .replace(/fill:[^;]+;?/g, "")
          .replace(/color:/g, "fill:");
        Src(chunkJA3XYJ7ZValue10)
          .select("text")
          .attr("style", chunkJA3XYJ7ZValue26);
      }
      return chunkJA3XYJ7ZValue10;
    }
  },
  "createText",
);
export function initChunkJA3XYJ7Z(): void {}
export { chunkJA3XYJ7ZA, chunkJA3XYJ7ZO, chunkJA3XYJ7ZR, chunkJA3XYJ7ZT };
