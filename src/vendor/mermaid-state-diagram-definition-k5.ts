// Restored from ref/webview/assets/stateDiagram-FHFEXIEX-CIdIE1IK.js
// Flat boundary. Vendored stateDiagramFHFEXIEX chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { line } from "./d3-shape-line";
import { stepH } from "./d3-shape-curves";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXB,
  chunkICPOFSXXC,
  _chunkICPOFSXXD,
  _chunkICPOFSXXS,
} from "./chunk-icpofsxx";
import { chunk5PVQY5BWC } from "./chunk-5pvqy5bw";
import { Graphlib } from "./graphlib-alt";
import { Dagre } from "./dagre-alt";
import {
  chunkOYMX7WX6I,
  chunkOYMX7WX6N,
  chunkOYMX7WX6T,
} from "./mermaid-state-diagram-runtime-k5";
var stateDiagramFHFEXIEXValue1 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam36) =>
      stateDiagramFHFEXIEXParam36
        .append("circle")
        .attr("class", "start-state")
        .attr("r", _chunkICPOFSXXB().state.sizeUnit)
        .attr(
          "cx",
          _chunkICPOFSXXB().state.padding + _chunkICPOFSXXB().state.sizeUnit,
        )
        .attr(
          "cy",
          _chunkICPOFSXXB().state.padding + _chunkICPOFSXXB().state.sizeUnit,
        ),
    "drawStartState",
  ),
  stateDiagramFHFEXIEXValue2 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam35) =>
      stateDiagramFHFEXIEXParam35
        .append("line")
        .style("stroke", "grey")
        .style("stroke-dasharray", "3")
        .attr("x1", _chunkICPOFSXXB().state.textHeight)
        .attr("class", "divider")
        .attr("x2", _chunkICPOFSXXB().state.textHeight * 2)
        .attr("y1", 0)
        .attr("y2", 0),
    "drawDivider",
  ),
  stateDiagramFHFEXIEXValue3 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam27, stateDiagramFHFEXIEXParam28) => {
      let stateDiagramFHFEXIEXValue84 = stateDiagramFHFEXIEXParam27
          .append("text")
          .attr("x", 2 * _chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            _chunkICPOFSXXB().state.textHeight +
              2 * _chunkICPOFSXXB().state.padding,
          )
          .attr("font-size", _chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXParam28.id),
        stateDiagramFHFEXIEXValue85 = stateDiagramFHFEXIEXValue84
          .node()
          .getBBox();
      return (
        stateDiagramFHFEXIEXParam27
          .insert("rect", ":first-child")
          .attr("x", _chunkICPOFSXXB().state.padding)
          .attr("y", _chunkICPOFSXXB().state.padding)
          .attr(
            "width",
            stateDiagramFHFEXIEXValue85.width +
              2 * _chunkICPOFSXXB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFHFEXIEXValue85.height +
              2 * _chunkICPOFSXXB().state.padding,
          )
          .attr("rx", _chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXValue84
      );
    },
    "drawSimpleState",
  ),
  stateDiagramFHFEXIEXValue4 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam11, stateDiagramFHFEXIEXParam12) => {
      let stateDiagramFHFEXIEXValue35 = chunkAGHRB4JFN(function (
          stateDiagramFHFEXIEXParam37,
          stateDiagramFHFEXIEXParam38,
          stateDiagramFHFEXIEXParam39,
        ) {
          let stateDiagramFHFEXIEXValue100 = stateDiagramFHFEXIEXParam37
            .append("tspan")
            .attr("x", 2 * _chunkICPOFSXXB().state.padding)
            .text(stateDiagramFHFEXIEXParam38);
          stateDiagramFHFEXIEXParam39 ||
            stateDiagramFHFEXIEXValue100.attr(
              "dy",
              _chunkICPOFSXXB().state.textHeight,
            );
        }, "addTspan"),
        stateDiagramFHFEXIEXValue36 = stateDiagramFHFEXIEXParam11
          .append("text")
          .attr("x", 2 * _chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            _chunkICPOFSXXB().state.textHeight +
              1.3 * _chunkICPOFSXXB().state.padding,
          )
          .attr("font-size", _chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXParam12.descriptions[0])
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXValue37 = stateDiagramFHFEXIEXValue36.height,
        stateDiagramFHFEXIEXValue38 = stateDiagramFHFEXIEXParam11
          .append("text")
          .attr("x", _chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            stateDiagramFHFEXIEXValue37 +
              _chunkICPOFSXXB().state.padding * 0.4 +
              _chunkICPOFSXXB().state.dividerMargin +
              _chunkICPOFSXXB().state.textHeight,
          )
          .attr("class", "state-description"),
        stateDiagramFHFEXIEXValue39 = true,
        stateDiagramFHFEXIEXValue40 = true;
      stateDiagramFHFEXIEXParam12.descriptions.forEach(function (item) {
        stateDiagramFHFEXIEXValue39 ||
          (stateDiagramFHFEXIEXValue35(
            stateDiagramFHFEXIEXValue38,
            item,
            stateDiagramFHFEXIEXValue40,
          ),
          (stateDiagramFHFEXIEXValue40 = false));
        stateDiagramFHFEXIEXValue39 = false;
      });
      let stateDiagramFHFEXIEXValue41 = stateDiagramFHFEXIEXParam11
          .append("line")
          .attr("x1", _chunkICPOFSXXB().state.padding)
          .attr(
            "y1",
            _chunkICPOFSXXB().state.padding +
              stateDiagramFHFEXIEXValue37 +
              _chunkICPOFSXXB().state.dividerMargin / 2,
          )
          .attr(
            "y2",
            _chunkICPOFSXXB().state.padding +
              stateDiagramFHFEXIEXValue37 +
              _chunkICPOFSXXB().state.dividerMargin / 2,
          )
          .attr("class", "descr-divider"),
        stateDiagramFHFEXIEXValue42 = stateDiagramFHFEXIEXValue38
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXValue43 = Math.max(
          stateDiagramFHFEXIEXValue42.width,
          stateDiagramFHFEXIEXValue36.width,
        );
      return (
        stateDiagramFHFEXIEXValue41.attr(
          "x2",
          stateDiagramFHFEXIEXValue43 + 3 * _chunkICPOFSXXB().state.padding,
        ),
        stateDiagramFHFEXIEXParam11
          .insert("rect", ":first-child")
          .attr("x", _chunkICPOFSXXB().state.padding)
          .attr("y", _chunkICPOFSXXB().state.padding)
          .attr(
            "width",
            stateDiagramFHFEXIEXValue43 + 2 * _chunkICPOFSXXB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFHFEXIEXValue42.height +
              stateDiagramFHFEXIEXValue37 +
              2 * _chunkICPOFSXXB().state.padding,
          )
          .attr("rx", _chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXParam11
      );
    },
    "drawDescrState",
  ),
  stateDiagramFHFEXIEXValue5 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXParam13,
      stateDiagramFHFEXIEXParam14,
      stateDiagramFHFEXIEXParam15,
    ) => {
      let stateDiagramFHFEXIEXValue44 = _chunkICPOFSXXB().state.padding,
        stateDiagramFHFEXIEXValue45 = 2 * _chunkICPOFSXXB().state.padding,
        stateDiagramFHFEXIEXValue46 = stateDiagramFHFEXIEXParam13
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXValue47 = stateDiagramFHFEXIEXValue46.width,
        stateDiagramFHFEXIEXValue48 = stateDiagramFHFEXIEXValue46.x,
        stateDiagramFHFEXIEXValue49 = stateDiagramFHFEXIEXParam13
          .append("text")
          .attr("x", 0)
          .attr("y", _chunkICPOFSXXB().state.titleShift)
          .attr("font-size", _chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXParam14.id),
        stateDiagramFHFEXIEXValue50 =
          stateDiagramFHFEXIEXValue49.node().getBBox().width +
          stateDiagramFHFEXIEXValue45,
        stateDiagramFHFEXIEXValue51 = Math.max(
          stateDiagramFHFEXIEXValue50,
          stateDiagramFHFEXIEXValue47,
        );
      stateDiagramFHFEXIEXValue51 === stateDiagramFHFEXIEXValue47 &&
        (stateDiagramFHFEXIEXValue51 += stateDiagramFHFEXIEXValue45);
      let stateDiagramFHFEXIEXValue52,
        stateDiagramFHFEXIEXValue53 = stateDiagramFHFEXIEXParam13
          .node()
          .getBBox();
      stateDiagramFHFEXIEXParam14.doc;
      stateDiagramFHFEXIEXValue52 =
        stateDiagramFHFEXIEXValue48 - stateDiagramFHFEXIEXValue44;
      stateDiagramFHFEXIEXValue50 > stateDiagramFHFEXIEXValue47 &&
        (stateDiagramFHFEXIEXValue52 =
          (stateDiagramFHFEXIEXValue47 - stateDiagramFHFEXIEXValue51) / 2 +
          stateDiagramFHFEXIEXValue44);
      Math.abs(stateDiagramFHFEXIEXValue48 - stateDiagramFHFEXIEXValue53.x) <
        stateDiagramFHFEXIEXValue44 &&
        stateDiagramFHFEXIEXValue50 > stateDiagramFHFEXIEXValue47 &&
        (stateDiagramFHFEXIEXValue52 =
          stateDiagramFHFEXIEXValue48 -
          (stateDiagramFHFEXIEXValue50 - stateDiagramFHFEXIEXValue47) / 2);
      let stateDiagramFHFEXIEXValue54 = 1 - _chunkICPOFSXXB().state.textHeight;
      return (
        stateDiagramFHFEXIEXParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXValue52)
          .attr("y", stateDiagramFHFEXIEXValue54)
          .attr(
            "class",
            stateDiagramFHFEXIEXParam15 ? "alt-composit" : "composit",
          )
          .attr("width", stateDiagramFHFEXIEXValue51)
          .attr(
            "height",
            stateDiagramFHFEXIEXValue53.height +
              _chunkICPOFSXXB().state.textHeight +
              _chunkICPOFSXXB().state.titleShift +
              1,
          )
          .attr("rx", "0"),
        stateDiagramFHFEXIEXValue49.attr(
          "x",
          stateDiagramFHFEXIEXValue52 + stateDiagramFHFEXIEXValue44,
        ),
        stateDiagramFHFEXIEXValue50 <= stateDiagramFHFEXIEXValue47 &&
          stateDiagramFHFEXIEXValue49.attr(
            "x",
            stateDiagramFHFEXIEXValue48 +
              (stateDiagramFHFEXIEXValue51 - stateDiagramFHFEXIEXValue45) / 2 -
              stateDiagramFHFEXIEXValue50 / 2 +
              stateDiagramFHFEXIEXValue44,
          ),
        stateDiagramFHFEXIEXParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXValue52)
          .attr(
            "y",
            _chunkICPOFSXXB().state.titleShift -
              _chunkICPOFSXXB().state.textHeight -
              _chunkICPOFSXXB().state.padding,
          )
          .attr("width", stateDiagramFHFEXIEXValue51)
          .attr("height", _chunkICPOFSXXB().state.textHeight * 3)
          .attr("rx", _chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXValue52)
          .attr(
            "y",
            _chunkICPOFSXXB().state.titleShift -
              _chunkICPOFSXXB().state.textHeight -
              _chunkICPOFSXXB().state.padding,
          )
          .attr("width", stateDiagramFHFEXIEXValue51)
          .attr(
            "height",
            stateDiagramFHFEXIEXValue53.height +
              3 +
              2 * _chunkICPOFSXXB().state.textHeight,
          )
          .attr("rx", _chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXParam13
      );
    },
    "addTitleAndBox",
  ),
  stateDiagramFHFEXIEXValue6 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam26) => (
      stateDiagramFHFEXIEXParam26
        .append("circle")
        .attr("class", "end-state-outer")
        .attr(
          "r",
          _chunkICPOFSXXB().state.sizeUnit +
            _chunkICPOFSXXB().state.miniPadding,
        )
        .attr(
          "cx",
          _chunkICPOFSXXB().state.padding +
            _chunkICPOFSXXB().state.sizeUnit +
            _chunkICPOFSXXB().state.miniPadding,
        )
        .attr(
          "cy",
          _chunkICPOFSXXB().state.padding +
            _chunkICPOFSXXB().state.sizeUnit +
            _chunkICPOFSXXB().state.miniPadding,
        ),
      stateDiagramFHFEXIEXParam26
        .append("circle")
        .attr("class", "end-state-inner")
        .attr("r", _chunkICPOFSXXB().state.sizeUnit)
        .attr(
          "cx",
          _chunkICPOFSXXB().state.padding +
            _chunkICPOFSXXB().state.sizeUnit +
            2,
        )
        .attr(
          "cy",
          _chunkICPOFSXXB().state.padding +
            _chunkICPOFSXXB().state.sizeUnit +
            2,
        )
    ),
    "drawEndState",
  ),
  stateDiagramFHFEXIEXValue7 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam29, stateDiagramFHFEXIEXParam30) => {
      let stateDiagramFHFEXIEXValue88 = _chunkICPOFSXXB().state.forkWidth,
        stateDiagramFHFEXIEXValue89 = _chunkICPOFSXXB().state.forkHeight;
      if (stateDiagramFHFEXIEXParam30.parentId) {
        let stateDiagramFHFEXIEXValue104 = stateDiagramFHFEXIEXValue88;
        stateDiagramFHFEXIEXValue88 = stateDiagramFHFEXIEXValue89;
        stateDiagramFHFEXIEXValue89 = stateDiagramFHFEXIEXValue104;
      }
      return stateDiagramFHFEXIEXParam29
        .append("rect")
        .style("stroke", "black")
        .style("fill", "black")
        .attr("width", stateDiagramFHFEXIEXValue88)
        .attr("height", stateDiagramFHFEXIEXValue89)
        .attr("x", _chunkICPOFSXXB().state.padding)
        .attr("y", _chunkICPOFSXXB().state.padding);
    },
    "drawForkJoinState",
  ),
  stateDiagramFHFEXIEXValue8 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXParam20,
      stateDiagramFHFEXIEXParam21,
      stateDiagramFHFEXIEXParam22,
      stateDiagramFHFEXIEXParam23,
    ) => {
      let stateDiagramFHFEXIEXValue75 = 0,
        stateDiagramFHFEXIEXValue76 =
          stateDiagramFHFEXIEXParam23.append("text");
      stateDiagramFHFEXIEXValue76.style("text-anchor", "start");
      stateDiagramFHFEXIEXValue76.attr("class", "noteText");
      let stateDiagramFHFEXIEXValue77 = stateDiagramFHFEXIEXParam20.replace(
        /\r\n/g,
        "<br/>",
      );
      stateDiagramFHFEXIEXValue77 = stateDiagramFHFEXIEXValue77.replace(
        /\n/g,
        "<br/>",
      );
      let stateDiagramFHFEXIEXValue78 = stateDiagramFHFEXIEXValue77.split(
          _chunkICPOFSXXS.lineBreakRegex,
        ),
        stateDiagramFHFEXIEXValue79 = 1.25 * _chunkICPOFSXXB().state.noteMargin;
      for (let stateDiagramFHFEXIEXValue96 of stateDiagramFHFEXIEXValue78) {
        let stateDiagramFHFEXIEXValue98 = stateDiagramFHFEXIEXValue96.trim();
        if (stateDiagramFHFEXIEXValue98.length > 0) {
          let stateDiagramFHFEXIEXValue99 =
            stateDiagramFHFEXIEXValue76.append("tspan");
          if (
            (stateDiagramFHFEXIEXValue99.text(stateDiagramFHFEXIEXValue98),
            stateDiagramFHFEXIEXValue79 === 0)
          ) {
            let stateDiagramFHFEXIEXValue103 = stateDiagramFHFEXIEXValue99
              .node()
              .getBBox();
            stateDiagramFHFEXIEXValue79 += stateDiagramFHFEXIEXValue103.height;
          }
          stateDiagramFHFEXIEXValue75 += stateDiagramFHFEXIEXValue79;
          stateDiagramFHFEXIEXValue99.attr(
            "x",
            stateDiagramFHFEXIEXParam21 + _chunkICPOFSXXB().state.noteMargin,
          );
          stateDiagramFHFEXIEXValue99.attr(
            "y",
            stateDiagramFHFEXIEXParam22 +
              stateDiagramFHFEXIEXValue75 +
              1.25 * _chunkICPOFSXXB().state.noteMargin,
          );
        }
      }
      return {
        textWidth: stateDiagramFHFEXIEXValue76.node().getBBox().width,
        textHeight: stateDiagramFHFEXIEXValue75,
      };
    },
    "_drawLongText",
  ),
  stateDiagramFHFEXIEXValue9 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam31, stateDiagramFHFEXIEXParam32) => {
      stateDiagramFHFEXIEXParam32.attr("class", "state-note");
      let stateDiagramFHFEXIEXValue92 = stateDiagramFHFEXIEXParam32
          .append("rect")
          .attr("x", 0)
          .attr("y", _chunkICPOFSXXB().state.padding),
        { textWidth, textHeight } = stateDiagramFHFEXIEXValue8(
          stateDiagramFHFEXIEXParam31,
          0,
          0,
          stateDiagramFHFEXIEXParam32.append("g"),
        );
      return (
        stateDiagramFHFEXIEXValue92.attr(
          "height",
          textHeight + 2 * _chunkICPOFSXXB().state.noteMargin,
        ),
        stateDiagramFHFEXIEXValue92.attr(
          "width",
          textWidth + _chunkICPOFSXXB().state.noteMargin * 2,
        ),
        stateDiagramFHFEXIEXValue92
      );
    },
    "drawNote",
  ),
  stateDiagramFHFEXIEXValue10 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXParam24,
    stateDiagramFHFEXIEXParam25,
  ) {
    let stateDiagramFHFEXIEXValue80 = stateDiagramFHFEXIEXParam25.id,
      stateDiagramFHFEXIEXValue81 = {
        id: stateDiagramFHFEXIEXValue80,
        label: stateDiagramFHFEXIEXParam25.id,
        width: 0,
        height: 0,
      },
      stateDiagramFHFEXIEXValue82 = stateDiagramFHFEXIEXParam24
        .append("g")
        .attr("id", stateDiagramFHFEXIEXValue80)
        .attr("class", "stateGroup");
    stateDiagramFHFEXIEXParam25.type === "start" &&
      stateDiagramFHFEXIEXValue1(stateDiagramFHFEXIEXValue82);
    stateDiagramFHFEXIEXParam25.type === "end" &&
      stateDiagramFHFEXIEXValue6(stateDiagramFHFEXIEXValue82);
    (stateDiagramFHFEXIEXParam25.type === "fork" ||
      stateDiagramFHFEXIEXParam25.type === "join") &&
      stateDiagramFHFEXIEXValue7(
        stateDiagramFHFEXIEXValue82,
        stateDiagramFHFEXIEXParam25,
      );
    stateDiagramFHFEXIEXParam25.type === "note" &&
      stateDiagramFHFEXIEXValue9(
        stateDiagramFHFEXIEXParam25.note.text,
        stateDiagramFHFEXIEXValue82,
      );
    stateDiagramFHFEXIEXParam25.type === "divider" &&
      stateDiagramFHFEXIEXValue2(stateDiagramFHFEXIEXValue82);
    stateDiagramFHFEXIEXParam25.type === "default" &&
      stateDiagramFHFEXIEXParam25.descriptions.length === 0 &&
      stateDiagramFHFEXIEXValue3(
        stateDiagramFHFEXIEXValue82,
        stateDiagramFHFEXIEXParam25,
      );
    stateDiagramFHFEXIEXParam25.type === "default" &&
      stateDiagramFHFEXIEXParam25.descriptions.length > 0 &&
      stateDiagramFHFEXIEXValue4(
        stateDiagramFHFEXIEXValue82,
        stateDiagramFHFEXIEXParam25,
      );
    let stateDiagramFHFEXIEXValue83 = stateDiagramFHFEXIEXValue82
      .node()
      .getBBox();
    return (
      (stateDiagramFHFEXIEXValue81.width =
        stateDiagramFHFEXIEXValue83.width +
        2 * _chunkICPOFSXXB().state.padding),
      (stateDiagramFHFEXIEXValue81.height =
        stateDiagramFHFEXIEXValue83.height +
        2 * _chunkICPOFSXXB().state.padding),
      stateDiagramFHFEXIEXValue81
    );
  }, "drawState"),
  stateDiagramFHFEXIEXValue11 = 0,
  stateDiagramFHFEXIEXValue12 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXParam8,
    stateDiagramFHFEXIEXParam9,
    stateDiagramFHFEXIEXParam10,
  ) {
    let stateDiagramFHFEXIEXValue30 = chunkAGHRB4JFN(function (
      stateDiagramFHFEXIEXParam34,
    ) {
      switch (stateDiagramFHFEXIEXParam34) {
        case chunkOYMX7WX6T.relationType.AGGREGATION:
          return "aggregation";
        case chunkOYMX7WX6T.relationType.EXTENSION:
          return "extension";
        case chunkOYMX7WX6T.relationType.COMPOSITION:
          return "composition";
        case chunkOYMX7WX6T.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    stateDiagramFHFEXIEXParam9.points =
      stateDiagramFHFEXIEXParam9.points.filter((item) => !Number.isNaN(item.y));
    let stateDiagramFHFEXIEXValue31 = stateDiagramFHFEXIEXParam9.points,
      stateDiagramFHFEXIEXValue32 = line()
        .x(function (stateDiagramFHFEXIEXParam42) {
          return stateDiagramFHFEXIEXParam42.x;
        })
        .y(function (stateDiagramFHFEXIEXParam43) {
          return stateDiagramFHFEXIEXParam43.y;
        })
        .curve(stepH),
      stateDiagramFHFEXIEXValue33 = stateDiagramFHFEXIEXParam8
        .append("path")
        .attr("d", stateDiagramFHFEXIEXValue32(stateDiagramFHFEXIEXValue31))
        .attr("id", "edge" + stateDiagramFHFEXIEXValue11)
        .attr("class", "transition"),
      stateDiagramFHFEXIEXValue34 = "";
    if (
      (_chunkICPOFSXXB().state.arrowMarkerAbsolute &&
        (stateDiagramFHFEXIEXValue34 = _chunkICPOFSXXD(true)),
      stateDiagramFHFEXIEXValue33.attr(
        "marker-end",
        "url(" +
          stateDiagramFHFEXIEXValue34 +
          "#" +
          stateDiagramFHFEXIEXValue30(chunkOYMX7WX6T.relationType.DEPENDENCY) +
          "End)",
      ),
      stateDiagramFHFEXIEXParam10.title !== undefined)
    ) {
      let stateDiagramFHFEXIEXValue55 = stateDiagramFHFEXIEXParam8
          .append("g")
          .attr("class", "stateLabel"),
        { x, y } = chunk5PVQY5BWC.calcLabelPosition(
          stateDiagramFHFEXIEXParam9.points,
        ),
        stateDiagramFHFEXIEXValue56 = _chunkICPOFSXXS.getRows(
          stateDiagramFHFEXIEXParam10.title,
        ),
        stateDiagramFHFEXIEXValue57 = 0,
        stateDiagramFHFEXIEXValue58 = [],
        stateDiagramFHFEXIEXValue59 = 0,
        stateDiagramFHFEXIEXValue60 = 0;
      for (
        let stateDiagramFHFEXIEXValue86 = 0;
        stateDiagramFHFEXIEXValue86 <= stateDiagramFHFEXIEXValue56.length;
        stateDiagramFHFEXIEXValue86++
      ) {
        let stateDiagramFHFEXIEXValue90 = stateDiagramFHFEXIEXValue55
            .append("text")
            .attr("text-anchor", "middle")
            .text(stateDiagramFHFEXIEXValue56[stateDiagramFHFEXIEXValue86])
            .attr("x", x)
            .attr("y", y + stateDiagramFHFEXIEXValue57),
          stateDiagramFHFEXIEXValue91 = stateDiagramFHFEXIEXValue90
            .node()
            .getBBox();
        stateDiagramFHFEXIEXValue59 = Math.max(
          stateDiagramFHFEXIEXValue59,
          stateDiagramFHFEXIEXValue91.width,
        );
        stateDiagramFHFEXIEXValue60 = Math.min(
          stateDiagramFHFEXIEXValue60,
          stateDiagramFHFEXIEXValue91.x,
        );
        chunkAGHRB4JFR.info(
          stateDiagramFHFEXIEXValue91.x,
          x,
          y + stateDiagramFHFEXIEXValue57,
        );
        stateDiagramFHFEXIEXValue57 === 0 &&
          ((stateDiagramFHFEXIEXValue57 = stateDiagramFHFEXIEXValue90
            .node()
            .getBBox().height),
          chunkAGHRB4JFR.info("Title height", stateDiagramFHFEXIEXValue57, y));
        stateDiagramFHFEXIEXValue58.push(stateDiagramFHFEXIEXValue90);
      }
      let stateDiagramFHFEXIEXValue61 =
        stateDiagramFHFEXIEXValue57 * stateDiagramFHFEXIEXValue56.length;
      if (stateDiagramFHFEXIEXValue56.length > 1) {
        let stateDiagramFHFEXIEXValue102 =
          (stateDiagramFHFEXIEXValue56.length - 1) *
          stateDiagramFHFEXIEXValue57 *
          0.5;
        stateDiagramFHFEXIEXValue58.forEach((item, index) =>
          item.attr(
            "y",
            y +
              index * stateDiagramFHFEXIEXValue57 -
              stateDiagramFHFEXIEXValue102,
          ),
        );
        stateDiagramFHFEXIEXValue61 =
          stateDiagramFHFEXIEXValue57 * stateDiagramFHFEXIEXValue56.length;
      }
      let stateDiagramFHFEXIEXValue62 = stateDiagramFHFEXIEXValue55
        .node()
        .getBBox();
      stateDiagramFHFEXIEXValue55
        .insert("rect", ":first-child")
        .attr("class", "box")
        .attr(
          "x",
          x -
            stateDiagramFHFEXIEXValue59 / 2 -
            _chunkICPOFSXXB().state.padding / 2,
        )
        .attr(
          "y",
          y -
            stateDiagramFHFEXIEXValue61 / 2 -
            _chunkICPOFSXXB().state.padding / 2 -
            3.5,
        )
        .attr(
          "width",
          stateDiagramFHFEXIEXValue59 + _chunkICPOFSXXB().state.padding,
        )
        .attr(
          "height",
          stateDiagramFHFEXIEXValue61 + _chunkICPOFSXXB().state.padding,
        );
      chunkAGHRB4JFR.info(stateDiagramFHFEXIEXValue62);
    }
    stateDiagramFHFEXIEXValue11++;
  }, "drawEdge"),
  stateDiagramFHFEXIEXValue13,
  stateDiagramFHFEXIEXValue14 = {},
  stateDiagramFHFEXIEXValue15 = chunkAGHRB4JFN(function () {}, "setConf"),
  stateDiagramFHFEXIEXValue16 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXParam33,
  ) {
    stateDiagramFHFEXIEXParam33
      .append("defs")
      .append("marker")
      .attr("id", "dependencyEnd")
      .attr("refX", 19)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers"),
  stateDiagramFHFEXIEXValue17 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXParam16,
    stateDiagramFHFEXIEXParam17,
    stateDiagramFHFEXIEXParam18,
    stateDiagramFHFEXIEXParam19,
  ) {
    stateDiagramFHFEXIEXValue13 = _chunkICPOFSXXB().state;
    let stateDiagramFHFEXIEXValue66 = _chunkICPOFSXXB().securityLevel,
      stateDiagramFHFEXIEXValue67;
    stateDiagramFHFEXIEXValue66 === "sandbox" &&
      (stateDiagramFHFEXIEXValue67 = Src("#i" + stateDiagramFHFEXIEXParam17));
    let stateDiagramFHFEXIEXValue68 = Src(
        stateDiagramFHFEXIEXValue66 === "sandbox"
          ? stateDiagramFHFEXIEXValue67.nodes()[0].contentDocument.body
          : "body",
      ),
      stateDiagramFHFEXIEXValue69 =
        stateDiagramFHFEXIEXValue66 === "sandbox"
          ? stateDiagramFHFEXIEXValue67.nodes()[0].contentDocument
          : document;
    chunkAGHRB4JFR.debug("Rendering diagram " + stateDiagramFHFEXIEXParam16);
    let stateDiagramFHFEXIEXValue70 = stateDiagramFHFEXIEXValue68.select(
      `[id='${stateDiagramFHFEXIEXParam17}']`,
    );
    stateDiagramFHFEXIEXValue16(stateDiagramFHFEXIEXValue70);
    stateDiagramFHFEXIEXValue19(
      stateDiagramFHFEXIEXParam19.db.getRootDoc(),
      stateDiagramFHFEXIEXValue70
        .append("g")
        .attr("id", stateDiagramFHFEXIEXParam17 + "-root"),
      undefined,
      false,
      stateDiagramFHFEXIEXValue68,
      stateDiagramFHFEXIEXValue69,
      stateDiagramFHFEXIEXParam19,
    );
    let stateDiagramFHFEXIEXValue71 = stateDiagramFHFEXIEXValue13.padding,
      stateDiagramFHFEXIEXValue72 = stateDiagramFHFEXIEXValue70
        .node()
        .getBBox(),
      stateDiagramFHFEXIEXValue73 =
        stateDiagramFHFEXIEXValue72.width + stateDiagramFHFEXIEXValue71 * 2,
      stateDiagramFHFEXIEXValue74 =
        stateDiagramFHFEXIEXValue72.height + stateDiagramFHFEXIEXValue71 * 2;
    chunkICPOFSXXC(
      stateDiagramFHFEXIEXValue70,
      stateDiagramFHFEXIEXValue74,
      stateDiagramFHFEXIEXValue73 * 1.75,
      stateDiagramFHFEXIEXValue13.useMaxWidth,
    );
    stateDiagramFHFEXIEXValue70.attr(
      "viewBox",
      `${stateDiagramFHFEXIEXValue72.x - stateDiagramFHFEXIEXValue13.padding}  ${stateDiagramFHFEXIEXValue72.y - stateDiagramFHFEXIEXValue13.padding} ` +
        stateDiagramFHFEXIEXValue73 +
        " " +
        stateDiagramFHFEXIEXValue74,
    );
  }, "draw"),
  stateDiagramFHFEXIEXValue18 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXParam41) =>
      stateDiagramFHFEXIEXParam41
        ? stateDiagramFHFEXIEXParam41.length *
          stateDiagramFHFEXIEXValue13.fontSizeFactor
        : 1,
    "getLabelWidth",
  ),
  stateDiagramFHFEXIEXValue19 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXParam1,
      stateDiagramFHFEXIEXParam2,
      stateDiagramFHFEXIEXParam3,
      stateDiagramFHFEXIEXParam4,
      stateDiagramFHFEXIEXParam5,
      stateDiagramFHFEXIEXParam6,
      stateDiagramFHFEXIEXParam7,
    ) => {
      let stateDiagramFHFEXIEXValue20 = new Graphlib({
          compound: true,
          multigraph: true,
        }),
        stateDiagramFHFEXIEXValue21,
        stateDiagramFHFEXIEXValue22 = true;
      for (
        stateDiagramFHFEXIEXValue21 = 0;
        stateDiagramFHFEXIEXValue21 < stateDiagramFHFEXIEXParam1.length;
        stateDiagramFHFEXIEXValue21++
      )
        if (
          stateDiagramFHFEXIEXParam1[stateDiagramFHFEXIEXValue21].stmt ===
          "relation"
        ) {
          stateDiagramFHFEXIEXValue22 = false;
          break;
        }
      stateDiagramFHFEXIEXParam3
        ? stateDiagramFHFEXIEXValue20.setGraph({
            rankdir: "LR",
            multigraph: true,
            compound: true,
            ranker: "tight-tree",
            ranksep: stateDiagramFHFEXIEXValue22
              ? 1
              : stateDiagramFHFEXIEXValue13.edgeLengthFactor,
            nodeSep: stateDiagramFHFEXIEXValue22 ? 1 : 50,
            isMultiGraph: true,
          })
        : stateDiagramFHFEXIEXValue20.setGraph({
            rankdir: "TB",
            multigraph: true,
            compound: true,
            ranksep: stateDiagramFHFEXIEXValue22
              ? 1
              : stateDiagramFHFEXIEXValue13.edgeLengthFactor,
            nodeSep: stateDiagramFHFEXIEXValue22 ? 1 : 50,
            ranker: "tight-tree",
            isMultiGraph: true,
          });
      stateDiagramFHFEXIEXValue20.setDefaultEdgeLabel(function () {
        return {};
      });
      let stateDiagramFHFEXIEXValue23 =
          stateDiagramFHFEXIEXParam7.db.getStates(),
        stateDiagramFHFEXIEXValue24 =
          stateDiagramFHFEXIEXParam7.db.getRelations(),
        stateDiagramFHFEXIEXValue25 = Object.keys(stateDiagramFHFEXIEXValue23);
      for (let stateDiagramFHFEXIEXValue63 of stateDiagramFHFEXIEXValue25) {
        let stateDiagramFHFEXIEXValue64 =
          stateDiagramFHFEXIEXValue23[stateDiagramFHFEXIEXValue63];
        stateDiagramFHFEXIEXParam3 &&
          (stateDiagramFHFEXIEXValue64.parentId = stateDiagramFHFEXIEXParam3);
        let stateDiagramFHFEXIEXValue65;
        if (stateDiagramFHFEXIEXValue64.doc) {
          let stateDiagramFHFEXIEXValue97 = stateDiagramFHFEXIEXParam2
            .append("g")
            .attr("id", stateDiagramFHFEXIEXValue64.id)
            .attr("class", "stateGroup");
          stateDiagramFHFEXIEXValue65 = stateDiagramFHFEXIEXValue19(
            stateDiagramFHFEXIEXValue64.doc,
            stateDiagramFHFEXIEXValue97,
            stateDiagramFHFEXIEXValue64.id,
            !stateDiagramFHFEXIEXParam4,
            stateDiagramFHFEXIEXParam5,
            stateDiagramFHFEXIEXParam6,
            stateDiagramFHFEXIEXParam7,
          );
          {
            stateDiagramFHFEXIEXValue97 = stateDiagramFHFEXIEXValue5(
              stateDiagramFHFEXIEXValue97,
              stateDiagramFHFEXIEXValue64,
              stateDiagramFHFEXIEXParam4,
            );
            let stateDiagramFHFEXIEXValue101 = stateDiagramFHFEXIEXValue97
              .node()
              .getBBox();
            stateDiagramFHFEXIEXValue65.width =
              stateDiagramFHFEXIEXValue101.width;
            stateDiagramFHFEXIEXValue65.height =
              stateDiagramFHFEXIEXValue101.height +
              stateDiagramFHFEXIEXValue13.padding / 2;
            stateDiagramFHFEXIEXValue14[stateDiagramFHFEXIEXValue64.id] = {
              y: stateDiagramFHFEXIEXValue13.compositTitleSize,
            };
          }
        } else
          stateDiagramFHFEXIEXValue65 = stateDiagramFHFEXIEXValue10(
            stateDiagramFHFEXIEXParam2,
            stateDiagramFHFEXIEXValue64,
            stateDiagramFHFEXIEXValue20,
          );
        if (stateDiagramFHFEXIEXValue64.note) {
          let stateDiagramFHFEXIEXValue87 = stateDiagramFHFEXIEXValue10(
            stateDiagramFHFEXIEXParam2,
            {
              descriptions: [],
              id: stateDiagramFHFEXIEXValue64.id + "-note",
              note: stateDiagramFHFEXIEXValue64.note,
              type: "note",
            },
            stateDiagramFHFEXIEXValue20,
          );
          stateDiagramFHFEXIEXValue64.note.position === "left of"
            ? (stateDiagramFHFEXIEXValue20.setNode(
                stateDiagramFHFEXIEXValue65.id + "-note",
                stateDiagramFHFEXIEXValue87,
              ),
              stateDiagramFHFEXIEXValue20.setNode(
                stateDiagramFHFEXIEXValue65.id,
                stateDiagramFHFEXIEXValue65,
              ))
            : (stateDiagramFHFEXIEXValue20.setNode(
                stateDiagramFHFEXIEXValue65.id,
                stateDiagramFHFEXIEXValue65,
              ),
              stateDiagramFHFEXIEXValue20.setNode(
                stateDiagramFHFEXIEXValue65.id + "-note",
                stateDiagramFHFEXIEXValue87,
              ));
          stateDiagramFHFEXIEXValue20.setParent(
            stateDiagramFHFEXIEXValue65.id,
            stateDiagramFHFEXIEXValue65.id + "-group",
          );
          stateDiagramFHFEXIEXValue20.setParent(
            stateDiagramFHFEXIEXValue65.id + "-note",
            stateDiagramFHFEXIEXValue65.id + "-group",
          );
        } else
          stateDiagramFHFEXIEXValue20.setNode(
            stateDiagramFHFEXIEXValue65.id,
            stateDiagramFHFEXIEXValue65,
          );
      }
      chunkAGHRB4JFR.debug(
        "Count=",
        stateDiagramFHFEXIEXValue20.nodeCount(),
        stateDiagramFHFEXIEXValue20,
      );
      let stateDiagramFHFEXIEXValue26 = 0;
      stateDiagramFHFEXIEXValue24.forEach(function (item) {
        stateDiagramFHFEXIEXValue26++;
        chunkAGHRB4JFR.debug("Setting edge", item);
        stateDiagramFHFEXIEXValue20.setEdge(
          item.id1,
          item.id2,
          {
            relation: item,
            width: stateDiagramFHFEXIEXValue18(item.title),
            height:
              stateDiagramFHFEXIEXValue13.labelHeight *
              _chunkICPOFSXXS.getRows(item.title).length,
            labelpos: "c",
          },
          "id" + stateDiagramFHFEXIEXValue26,
        );
      });
      Dagre(stateDiagramFHFEXIEXValue20);
      chunkAGHRB4JFR.debug(
        "Graph after layout",
        stateDiagramFHFEXIEXValue20.nodes(),
      );
      let stateDiagramFHFEXIEXValue27 = stateDiagramFHFEXIEXParam2.node();
      stateDiagramFHFEXIEXValue20.nodes().forEach(function (item) {
        item !== undefined &&
        stateDiagramFHFEXIEXValue20.node(item) !== undefined
          ? (chunkAGHRB4JFR.warn(
              "Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFHFEXIEXValue20.node(item)),
            ),
            stateDiagramFHFEXIEXParam5
              .select("#" + stateDiagramFHFEXIEXValue27.id + " #" + item)
              .attr(
                "transform",
                "translate(" +
                  (stateDiagramFHFEXIEXValue20.node(item).x -
                    stateDiagramFHFEXIEXValue20.node(item).width / 2) +
                  "," +
                  (stateDiagramFHFEXIEXValue20.node(item).y +
                    (stateDiagramFHFEXIEXValue14[item]
                      ? stateDiagramFHFEXIEXValue14[item].y
                      : 0) -
                    stateDiagramFHFEXIEXValue20.node(item).height / 2) +
                  " )",
              ),
            stateDiagramFHFEXIEXParam5
              .select("#" + stateDiagramFHFEXIEXValue27.id + " #" + item)
              .attr(
                "data-x-shift",
                stateDiagramFHFEXIEXValue20.node(item).x -
                  stateDiagramFHFEXIEXValue20.node(item).width / 2,
              ),
            stateDiagramFHFEXIEXParam6
              .querySelectorAll(
                "#" +
                  stateDiagramFHFEXIEXValue27.id +
                  " #" +
                  item +
                  " .divider",
              )
              .forEach((_item) => {
                let stateDiagramFHFEXIEXValue93 = _item.parentElement,
                  stateDiagramFHFEXIEXValue94 = 0,
                  stateDiagramFHFEXIEXValue95 = 0;
                stateDiagramFHFEXIEXValue93 &&
                  (stateDiagramFHFEXIEXValue93.parentElement &&
                    (stateDiagramFHFEXIEXValue94 =
                      stateDiagramFHFEXIEXValue93.parentElement.getBBox()
                        .width),
                  (stateDiagramFHFEXIEXValue95 = parseInt(
                    stateDiagramFHFEXIEXValue93.getAttribute("data-x-shift"),
                    10,
                  )),
                  Number.isNaN(stateDiagramFHFEXIEXValue95) &&
                    (stateDiagramFHFEXIEXValue95 = 0));
                _item.setAttribute("x1", 0 - stateDiagramFHFEXIEXValue95 + 8);
                _item.setAttribute(
                  "x2",
                  stateDiagramFHFEXIEXValue94 - stateDiagramFHFEXIEXValue95 - 8,
                );
              }))
          : chunkAGHRB4JFR.debug(
              "No Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFHFEXIEXValue20.node(item)),
            );
      });
      let stateDiagramFHFEXIEXValue28 = stateDiagramFHFEXIEXValue27.getBBox();
      stateDiagramFHFEXIEXValue20.edges().forEach(function (item) {
        item !== undefined &&
          stateDiagramFHFEXIEXValue20.edge(item) !== undefined &&
          (chunkAGHRB4JFR.debug(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(stateDiagramFHFEXIEXValue20.edge(item)),
          ),
          stateDiagramFHFEXIEXValue12(
            stateDiagramFHFEXIEXParam2,
            stateDiagramFHFEXIEXValue20.edge(item),
            stateDiagramFHFEXIEXValue20.edge(item).relation,
          ));
      });
      stateDiagramFHFEXIEXValue28 = stateDiagramFHFEXIEXValue27.getBBox();
      let stateDiagramFHFEXIEXValue29 = {
        id: stateDiagramFHFEXIEXParam3 || "root",
        label: stateDiagramFHFEXIEXParam3 || "root",
        width: 0,
        height: 0,
      };
      return (
        (stateDiagramFHFEXIEXValue29.width =
          stateDiagramFHFEXIEXValue28.width +
          2 * stateDiagramFHFEXIEXValue13.padding),
        (stateDiagramFHFEXIEXValue29.height =
          stateDiagramFHFEXIEXValue28.height +
          2 * stateDiagramFHFEXIEXValue13.padding),
        chunkAGHRB4JFR.debug(
          "Doc rendered",
          stateDiagramFHFEXIEXValue29,
          stateDiagramFHFEXIEXValue20,
        ),
        stateDiagramFHFEXIEXValue29
      );
    },
    "renderDoc",
  );
export const stateDiagramFHFEXIEX = {
  parser: chunkOYMX7WX6N,
  get db() {
    return new chunkOYMX7WX6T(1);
  },
  renderer: {
    setConf: stateDiagramFHFEXIEXValue15,
    draw: stateDiagramFHFEXIEXValue17,
  },
  styles: chunkOYMX7WX6I,
  init: chunkAGHRB4JFN((stateDiagramFHFEXIEXParam40) => {
    stateDiagramFHFEXIEXParam40.state ||= {};
    stateDiagramFHFEXIEXParam40.state.arrowMarkerAbsolute =
      stateDiagramFHFEXIEXParam40.arrowMarkerAbsolute;
  }, "init"),
};
