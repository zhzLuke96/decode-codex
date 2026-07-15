// Restored from ref/webview/assets/diagram-TYMM5635-DG2wO4Kx.js
// Flat boundary. Vendored diagramTYMM5635 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC as chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
const _chunkICPOFSXXC = chunkICPOFSXXC,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var diagramTYMM5635Value1 = chunkICPOFSXXD.packet,
  diagramTYMM5635Value2 = class {
    constructor() {
      this.packet = [];
      this.setAccTitle = chunkICPOFSXXV;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setDiagramTitle = _chunkICPOFSXXW;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setAccDescription = chunkICPOFSXXB;
    }
    static {
      chunkAGHRB4JFN(this, "PacketDB");
    }
    getConfig() {
      let diagramTYMM5635Value36 = chunk5PVQY5BWP({
        ...diagramTYMM5635Value1,
        ..._chunkICPOFSXXY().packet,
      });
      return (
        diagramTYMM5635Value36.showBits &&
          (diagramTYMM5635Value36.paddingY += 10),
        diagramTYMM5635Value36
      );
    }
    getPacket() {
      return this.packet;
    }
    pushWord(diagramTYMM5635Param14) {
      diagramTYMM5635Param14.length > 0 &&
        this.packet.push(diagramTYMM5635Param14);
    }
    clear() {
      _chunkICPOFSXXA();
      this.packet = [];
    }
  },
  diagramTYMM5635Value4 = chunkAGHRB4JFN(
    (diagramTYMM5635Param4, diagramTYMM5635Param5) => {
      populateCommonDb(diagramTYMM5635Param4, diagramTYMM5635Param5);
      let diagramTYMM5635Value18 = -1,
        diagramTYMM5635Value19 = [],
        diagramTYMM5635Value20 = 1,
        { bitsPerRow } = diagramTYMM5635Param5.getConfig();
      for (let { start, end, bits, label } of diagramTYMM5635Param4.blocks) {
        if (start !== undefined && end !== undefined && end < start)
          throw Error(
            `Packet block ${start} - ${end} is invalid. End must be greater than start.`,
          );
        if (
          ((start ??= diagramTYMM5635Value18 + 1),
          start !== diagramTYMM5635Value18 + 1)
        )
          throw Error(
            `Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${diagramTYMM5635Value18 + 1}.`,
          );
        if (bits === 0)
          throw Error(
            `Packet block ${start} is invalid. Cannot have a zero bit field.`,
          );
        for (
          end ??= start + (bits ?? 1) - 1,
            bits ??= end - start + 1,
            diagramTYMM5635Value18 = end,
            chunkAGHRB4JFR.debug(
              `Packet block ${start} - ${diagramTYMM5635Value18} with label ${label}`,
            );
          diagramTYMM5635Value19.length <= bitsPerRow + 1 &&
          diagramTYMM5635Param5.getPacket().length < 1e4;

        ) {
          let [diagramTYMM5635Value34, diagramTYMM5635Value35] =
            diagramTYMM5635Value5(
              {
                start,
                end,
                bits,
                label,
              },
              diagramTYMM5635Value20,
              bitsPerRow,
            );
          if (
            (diagramTYMM5635Value19.push(diagramTYMM5635Value34),
            diagramTYMM5635Value34.end + 1 ===
              diagramTYMM5635Value20 * bitsPerRow &&
              (diagramTYMM5635Param5.pushWord(diagramTYMM5635Value19),
              (diagramTYMM5635Value19 = []),
              diagramTYMM5635Value20++),
            !diagramTYMM5635Value35)
          )
            break;
          ({ start, end, bits, label } = diagramTYMM5635Value35);
        }
      }
      diagramTYMM5635Param5.pushWord(diagramTYMM5635Value19);
    },
    "populate",
  ),
  diagramTYMM5635Value5 = chunkAGHRB4JFN(
    (
      diagramTYMM5635Param10,
      diagramTYMM5635Param11,
      diagramTYMM5635Param12,
    ) => {
      if (diagramTYMM5635Param10.start === undefined)
        throw Error("start should have been set during first phase");
      if (diagramTYMM5635Param10.end === undefined)
        throw Error("end should have been set during first phase");
      if (diagramTYMM5635Param10.start > diagramTYMM5635Param10.end)
        throw Error(
          `Block start ${diagramTYMM5635Param10.start} is greater than block end ${diagramTYMM5635Param10.end}.`,
        );
      if (
        diagramTYMM5635Param10.end + 1 <=
        diagramTYMM5635Param11 * diagramTYMM5635Param12
      )
        return [diagramTYMM5635Param10, undefined];
      let diagramTYMM5635Value29 =
          diagramTYMM5635Param11 * diagramTYMM5635Param12 - 1,
        diagramTYMM5635Value30 =
          diagramTYMM5635Param11 * diagramTYMM5635Param12;
      return [
        {
          start: diagramTYMM5635Param10.start,
          end: diagramTYMM5635Value29,
          label: diagramTYMM5635Param10.label,
          bits: diagramTYMM5635Value29 - diagramTYMM5635Param10.start,
        },
        {
          start: diagramTYMM5635Value30,
          end: diagramTYMM5635Param10.end,
          label: diagramTYMM5635Param10.label,
          bits: diagramTYMM5635Param10.end - diagramTYMM5635Value30,
        },
      ];
    },
    "getNextFittingBlock",
  ),
  diagramTYMM5635Value6 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (diagramTYMM5635Param13) => {
      let diagramTYMM5635Value32 = await MermaidParserCore(
          "packet",
          diagramTYMM5635Param13,
        ),
        diagramTYMM5635Value33 = diagramTYMM5635Value6.parser?.yy;
      if (!(diagramTYMM5635Value33 instanceof diagramTYMM5635Value2))
        throw Error(
          "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      chunkAGHRB4JFR.debug(diagramTYMM5635Value32);
      diagramTYMM5635Value4(diagramTYMM5635Value32, diagramTYMM5635Value33);
    }, "parse"),
  },
  diagramTYMM5635Value7 = chunkAGHRB4JFN(
    (
      diagramTYMM5635Param6,
      diagramTYMM5635Param7,
      diagramTYMM5635Param8,
      diagramTYMM5635Param9,
    ) => {
      let diagramTYMM5635Value21 = diagramTYMM5635Param9.db,
        diagramTYMM5635Value22 = diagramTYMM5635Value21.getConfig(),
        { rowHeight, paddingY, bitWidth, bitsPerRow } = diagramTYMM5635Value22,
        diagramTYMM5635Value23 = diagramTYMM5635Value21.getPacket(),
        diagramTYMM5635Value24 = diagramTYMM5635Value21.getDiagramTitle(),
        diagramTYMM5635Value25 = rowHeight + paddingY,
        diagramTYMM5635Value26 =
          diagramTYMM5635Value25 * (diagramTYMM5635Value23.length + 1) -
          (diagramTYMM5635Value24 ? 0 : rowHeight),
        diagramTYMM5635Value27 = bitWidth * bitsPerRow + 2,
        diagramTYMM5635Value28 = chunk426QAEUC(diagramTYMM5635Param7);
      diagramTYMM5635Value28.attr(
        "viewBox",
        `0 0 ${diagramTYMM5635Value27} ${diagramTYMM5635Value26}`,
      );
      _chunkICPOFSXXC(
        diagramTYMM5635Value28,
        diagramTYMM5635Value26,
        diagramTYMM5635Value27,
        diagramTYMM5635Value22.useMaxWidth,
      );
      for (let [
        diagramTYMM5635Value37,
        diagramTYMM5635Value38,
      ] of diagramTYMM5635Value23.entries())
        diagramTYMM5635Value8(
          diagramTYMM5635Value28,
          diagramTYMM5635Value38,
          diagramTYMM5635Value37,
          diagramTYMM5635Value22,
        );
      diagramTYMM5635Value28
        .append("text")
        .text(diagramTYMM5635Value24)
        .attr("x", diagramTYMM5635Value27 / 2)
        .attr("y", diagramTYMM5635Value26 - diagramTYMM5635Value25 / 2)
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .attr("class", "packetTitle");
    },
    "draw",
  ),
  diagramTYMM5635Value8 = chunkAGHRB4JFN(
    (
      diagramTYMM5635Param1,
      diagramTYMM5635Param2,
      diagramTYMM5635Param3,
      { rowHeight, paddingX, paddingY, bitWidth, bitsPerRow, showBits },
    ) => {
      let diagramTYMM5635Value11 = diagramTYMM5635Param1.append("g"),
        diagramTYMM5635Value12 =
          diagramTYMM5635Param3 * (rowHeight + paddingY) + paddingY;
      for (let diagramTYMM5635Value13 of diagramTYMM5635Param2) {
        let diagramTYMM5635Value14 =
            (diagramTYMM5635Value13.start % bitsPerRow) * bitWidth + 1,
          diagramTYMM5635Value15 =
            (diagramTYMM5635Value13.end - diagramTYMM5635Value13.start + 1) *
              bitWidth -
            paddingX;
        if (
          (diagramTYMM5635Value11
            .append("rect")
            .attr("x", diagramTYMM5635Value14)
            .attr("y", diagramTYMM5635Value12)
            .attr("width", diagramTYMM5635Value15)
            .attr("height", rowHeight)
            .attr("class", "packetBlock"),
          diagramTYMM5635Value11
            .append("text")
            .attr("x", diagramTYMM5635Value14 + diagramTYMM5635Value15 / 2)
            .attr("y", diagramTYMM5635Value12 + rowHeight / 2)
            .attr("class", "packetLabel")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .text(diagramTYMM5635Value13.label),
          !showBits)
        )
          continue;
        let diagramTYMM5635Value16 =
            diagramTYMM5635Value13.end === diagramTYMM5635Value13.start,
          diagramTYMM5635Value17 = diagramTYMM5635Value12 - 2;
        diagramTYMM5635Value11
          .append("text")
          .attr(
            "x",
            diagramTYMM5635Value14 +
              (diagramTYMM5635Value16 ? diagramTYMM5635Value15 / 2 : 0),
          )
          .attr("y", diagramTYMM5635Value17)
          .attr("class", "packetByte start")
          .attr("dominant-baseline", "auto")
          .attr("text-anchor", diagramTYMM5635Value16 ? "middle" : "start")
          .text(diagramTYMM5635Value13.start);
        diagramTYMM5635Value16 ||
          diagramTYMM5635Value11
            .append("text")
            .attr("x", diagramTYMM5635Value14 + diagramTYMM5635Value15)
            .attr("y", diagramTYMM5635Value17)
            .attr("class", "packetByte end")
            .attr("dominant-baseline", "auto")
            .attr("text-anchor", "end")
            .text(diagramTYMM5635Value13.end);
      }
    },
    "drawWord",
  ),
  diagramTYMM5635Value9 = {
    draw: diagramTYMM5635Value7,
  },
  diagramTYMM5635Value10 = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef",
  };
export const DiagramTYMM5635 = {
  parser: diagramTYMM5635Value6,
  get db() {
    return new diagramTYMM5635Value2();
  },
  renderer: diagramTYMM5635Value9,
  styles: chunkAGHRB4JFN(({ packet } = {}) => {
    let diagramTYMM5635Value31 = chunk5PVQY5BWP(diagramTYMM5635Value10, packet);
    return `
	.packetByte {
		font-size: ${diagramTYMM5635Value31.byteFontSize};
	}
	.packetByte.start {
		fill: ${diagramTYMM5635Value31.startByteColor};
	}
	.packetByte.end {
		fill: ${diagramTYMM5635Value31.endByteColor};
	}
	.packetLabel {
		fill: ${diagramTYMM5635Value31.labelColor};
		font-size: ${diagramTYMM5635Value31.labelFontSize};
	}
	.packetTitle {
		fill: ${diagramTYMM5635Value31.titleColor};
		font-size: ${diagramTYMM5635Value31.titleFontSize};
	}
	.packetBlock {
		stroke: ${diagramTYMM5635Value31.blockStrokeColor};
		stroke-width: ${diagramTYMM5635Value31.blockStrokeWidth};
		fill: ${diagramTYMM5635Value31.blockFillColor};
	}
	`;
  }, "styles"),
};
