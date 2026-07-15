// Restored from ref/webview/assets/architectureDiagram-VXUJARFQ-DSHF0-Hw.js
// Flat boundary. Vendored architectureDiagramVXUJARFQ chunk restored from the Codex webview bundle.
import { toEsModule } from "../runtime/commonjs-interop";
import { chunkS3R3BYOJP, chunkS3R3BYOJR } from "./chunk-s3r3byoj";
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  chunkABZYJK2DO,
  _chunkABZYJK2DR,
  _chunkABZYJK2DM,
  _chunkABZYJK2DC,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  _chunkABZYJK2DY,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import {
  chunkJA3XYJ7ZN,
  chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZO,
  chunkJA3XYJ7ZR,
} from "./chunk-ja3xyj7z";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
import cytoscape from "cytoscape";
import { loadCytoscapeFcose } from "./cytoscape-fcose";
const _chunkABZYJK2DB = chunkABZYJK2DN;
var architectureDiagramVXUJARFQValue1 = toEsModule(loadCytoscapeFcose(), 1),
  architectureDiagramVXUJARFQValue2 = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom",
  },
  architectureDiagramVXUJARFQValue3 = {
    L: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam94) =>
        `${architectureDiagramVXUJARFQParam94},${architectureDiagramVXUJARFQParam94 / 2} 0,${architectureDiagramVXUJARFQParam94} 0,0`,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam92) =>
        `0,${architectureDiagramVXUJARFQParam92 / 2} ${architectureDiagramVXUJARFQParam92},0 ${architectureDiagramVXUJARFQParam92},${architectureDiagramVXUJARFQParam92}`,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam95) =>
        `0,0 ${architectureDiagramVXUJARFQParam95},0 ${architectureDiagramVXUJARFQParam95 / 2},${architectureDiagramVXUJARFQParam95}`,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam93) =>
        `${architectureDiagramVXUJARFQParam93 / 2},0 ${architectureDiagramVXUJARFQParam93},${architectureDiagramVXUJARFQParam93} 0,${architectureDiagramVXUJARFQParam93}`,
      "B",
    ),
  },
  architectureDiagramVXUJARFQValue4 = {
    L: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQParam99,
        architectureDiagramVXUJARFQParam100,
      ) =>
        architectureDiagramVXUJARFQParam99 -
        architectureDiagramVXUJARFQParam100 +
        2,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQParam103,
        architectureDiagramVXUJARFQParam104,
      ) => architectureDiagramVXUJARFQParam103 - 2,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQParam101,
        architectureDiagramVXUJARFQParam102,
      ) =>
        architectureDiagramVXUJARFQParam101 -
        architectureDiagramVXUJARFQParam102 +
        2,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQParam105,
        architectureDiagramVXUJARFQParam106,
      ) => architectureDiagramVXUJARFQParam105 - 2,
      "B",
    ),
  },
  architectureDiagramVXUJARFQValue5 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam75,
  ) {
    return architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQParam75)
      ? architectureDiagramVXUJARFQParam75 === "L"
        ? "R"
        : "L"
      : architectureDiagramVXUJARFQParam75 === "T"
        ? "B"
        : "T";
  }, "getOppositeArchitectureDirection"),
  architectureDiagramVXUJARFQValue6 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam68,
  ) {
    let architectureDiagramVXUJARFQValue163 =
      architectureDiagramVXUJARFQParam68;
    return (
      architectureDiagramVXUJARFQValue163 === "L" ||
      architectureDiagramVXUJARFQValue163 === "R" ||
      architectureDiagramVXUJARFQValue163 === "T" ||
      architectureDiagramVXUJARFQValue163 === "B"
    );
  }, "isArchitectureDirection"),
  architectureDiagramVXUJARFQValue7 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam81,
  ) {
    let architectureDiagramVXUJARFQValue167 =
      architectureDiagramVXUJARFQParam81;
    return (
      architectureDiagramVXUJARFQValue167 === "L" ||
      architectureDiagramVXUJARFQValue167 === "R"
    );
  }, "isArchitectureDirectionX"),
  architectureDiagramVXUJARFQValue8 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam82,
  ) {
    let architectureDiagramVXUJARFQValue168 =
      architectureDiagramVXUJARFQParam82;
    return (
      architectureDiagramVXUJARFQValue168 === "T" ||
      architectureDiagramVXUJARFQValue168 === "B"
    );
  }, "isArchitectureDirectionY"),
  architectureDiagramVXUJARFQValue9 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam73,
    architectureDiagramVXUJARFQParam74,
  ) {
    let architectureDiagramVXUJARFQValue164 =
        architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQParam73) &&
        architectureDiagramVXUJARFQValue8(architectureDiagramVXUJARFQParam74),
      architectureDiagramVXUJARFQValue165 =
        architectureDiagramVXUJARFQValue8(architectureDiagramVXUJARFQParam73) &&
        architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQParam74);
    return (
      architectureDiagramVXUJARFQValue164 || architectureDiagramVXUJARFQValue165
    );
  }, "isArchitectureDirectionXY"),
  architectureDiagramVXUJARFQValue10 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam66,
  ) {
    let architectureDiagramVXUJARFQValue157 =
        architectureDiagramVXUJARFQParam66[0],
      architectureDiagramVXUJARFQValue158 =
        architectureDiagramVXUJARFQParam66[1],
      architectureDiagramVXUJARFQValue159 =
        architectureDiagramVXUJARFQValue7(
          architectureDiagramVXUJARFQValue157,
        ) &&
        architectureDiagramVXUJARFQValue8(architectureDiagramVXUJARFQValue158),
      architectureDiagramVXUJARFQValue160 =
        architectureDiagramVXUJARFQValue8(
          architectureDiagramVXUJARFQValue157,
        ) &&
        architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQValue158);
    return (
      architectureDiagramVXUJARFQValue159 || architectureDiagramVXUJARFQValue160
    );
  }, "isArchitecturePairXY"),
  architectureDiagramVXUJARFQValue11 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam78,
  ) {
    return (
      architectureDiagramVXUJARFQParam78 !== "LL" &&
      architectureDiagramVXUJARFQParam78 !== "RR" &&
      architectureDiagramVXUJARFQParam78 !== "TT" &&
      architectureDiagramVXUJARFQParam78 !== "BB"
    );
  }, "isValidArchitectureDirectionPair"),
  architectureDiagramVXUJARFQValue12 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam79,
    architectureDiagramVXUJARFQParam80,
  ) {
    let architectureDiagramVXUJARFQValue166 = `${architectureDiagramVXUJARFQParam79}${architectureDiagramVXUJARFQParam80}`;
    return architectureDiagramVXUJARFQValue11(
      architectureDiagramVXUJARFQValue166,
    )
      ? architectureDiagramVXUJARFQValue166
      : undefined;
  }, "getArchitectureDirectionPair"),
  architectureDiagramVXUJARFQValue13 = chunkAGHRB4JFN(function (
    [architectureDiagramVXUJARFQParam48, architectureDiagramVXUJARFQParam49],
    architectureDiagramVXUJARFQParam50,
  ) {
    let architectureDiagramVXUJARFQValue139 =
        architectureDiagramVXUJARFQParam50[0],
      architectureDiagramVXUJARFQValue140 =
        architectureDiagramVXUJARFQParam50[1];
    return architectureDiagramVXUJARFQValue7(
      architectureDiagramVXUJARFQValue139,
    )
      ? architectureDiagramVXUJARFQValue8(architectureDiagramVXUJARFQValue140)
        ? [
            architectureDiagramVXUJARFQParam48 +
              (architectureDiagramVXUJARFQValue139 === "L" ? -1 : 1),
            architectureDiagramVXUJARFQParam49 +
              (architectureDiagramVXUJARFQValue140 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramVXUJARFQParam48 +
              (architectureDiagramVXUJARFQValue139 === "L" ? -1 : 1),
            architectureDiagramVXUJARFQParam49,
          ]
      : architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQValue140)
        ? [
            architectureDiagramVXUJARFQParam48 +
              (architectureDiagramVXUJARFQValue140 === "L" ? 1 : -1),
            architectureDiagramVXUJARFQParam49 +
              (architectureDiagramVXUJARFQValue139 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramVXUJARFQParam48,
            architectureDiagramVXUJARFQParam49 +
              (architectureDiagramVXUJARFQValue139 === "T" ? 1 : -1),
          ];
  }, "shiftPositionByArchitectureDirectionPair"),
  architectureDiagramVXUJARFQValue14 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam64,
  ) {
    return architectureDiagramVXUJARFQParam64 === "LT" ||
      architectureDiagramVXUJARFQParam64 === "TL"
      ? [1, 1]
      : architectureDiagramVXUJARFQParam64 === "BL" ||
          architectureDiagramVXUJARFQParam64 === "LB"
        ? [1, -1]
        : architectureDiagramVXUJARFQParam64 === "BR" ||
            architectureDiagramVXUJARFQParam64 === "RB"
          ? [-1, -1]
          : [-1, 1];
  }, "getArchitectureDirectionXYFactors"),
  architectureDiagramVXUJARFQValue15 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam76,
    architectureDiagramVXUJARFQParam77,
  ) {
    return architectureDiagramVXUJARFQValue9(
      architectureDiagramVXUJARFQParam76,
      architectureDiagramVXUJARFQParam77,
    )
      ? "bend"
      : architectureDiagramVXUJARFQValue7(architectureDiagramVXUJARFQParam76)
        ? "horizontal"
        : "vertical";
  }, "getArchitectureDirectionAlignment"),
  architectureDiagramVXUJARFQValue16 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam90,
  ) {
    return architectureDiagramVXUJARFQParam90.type === "service";
  }, "isArchitectureService"),
  architectureDiagramVXUJARFQValue17 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam88,
  ) {
    return architectureDiagramVXUJARFQParam88.type === "junction";
  }, "isArchitectureJunction"),
  architectureDiagramVXUJARFQValue18 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQParam107) =>
      architectureDiagramVXUJARFQParam107.data(),
    "edgeData",
  ),
  architectureDiagramVXUJARFQValue19 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQParam108) =>
      architectureDiagramVXUJARFQParam108.data(),
    "nodeData",
  ),
  architectureDiagramVXUJARFQValue20 = chunkABZYJK2DO.architecture,
  architectureDiagramVXUJARFQValue21 = class {
    constructor() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.elements = {};
      this.setAccTitle = chunkABZYJK2DN;
      this.getAccTitle = chunkABZYJK2DR;
      this.setDiagramTitle = _chunkABZYJK2DC;
      this.getDiagramTitle = chunkABZYJK2DF;
      this.getAccDescription = chunkABZYJK2DJ;
      this.setAccDescription = chunkABZYJK2DZ;
      this.clear();
    }
    static {
      chunkAGHRB4JFN(this, "ArchitectureDB");
    }
    clear() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.dataStructures = undefined;
      this.elements = {};
      _chunkABZYJK2DK();
    }
    addService({ id, icon, in: _in, title, iconText }) {
      if (this.registeredIds[id] !== undefined)
        throw Error(
          `The service id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The service [${id}] cannot be placed within itself`);
        if (this.registeredIds[_in] === undefined)
          throw Error(
            `The service [${id}]'s parent does not exist. Please make sure the parent is created before this service`,
          );
        if (this.registeredIds[_in] === "node")
          throw Error(`The service [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "service",
        icon,
        iconText,
        title,
        edges: [],
        in: _in,
      };
    }
    getServices() {
      return Object.values(this.nodes).filter(
        architectureDiagramVXUJARFQValue16,
      );
    }
    addJunction({ id, in: _in }) {
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "junction",
        edges: [],
        in: _in,
      };
    }
    getJunctions() {
      return Object.values(this.nodes).filter(
        architectureDiagramVXUJARFQValue17,
      );
    }
    getNodes() {
      return Object.values(this.nodes);
    }
    getNode(architectureDiagramVXUJARFQParam87) {
      return this.nodes[architectureDiagramVXUJARFQParam87] ?? null;
    }
    addGroup({ id, icon, in: _in, title }) {
      if (this.registeredIds?.[id] !== undefined)
        throw Error(
          `The group id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The group [${id}] cannot be placed within itself`);
        if (this.registeredIds?.[_in] === undefined)
          throw Error(
            `The group [${id}]'s parent does not exist. Please make sure the parent is created before this group`,
          );
        if (this.registeredIds?.[_in] === "node")
          throw Error(`The group [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "group";
      this.groups[id] = {
        id,
        icon,
        title,
        in: _in,
      };
    }
    getGroups() {
      return Object.values(this.groups);
    }
    addEdge({
      lhsId,
      rhsId,
      lhsDir,
      rhsDir,
      lhsInto,
      rhsInto,
      lhsGroup,
      rhsGroup,
      title,
    }) {
      if (!architectureDiagramVXUJARFQValue6(lhsDir))
        throw Error(
          `Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`,
        );
      if (!architectureDiagramVXUJARFQValue6(rhsDir))
        throw Error(
          `Invalid direction given for right hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(rhsDir)}`,
        );
      if (this.nodes[lhsId] === undefined && this.groups[lhsId] === undefined)
        throw Error(
          `The left-hand id [${lhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      if (this.nodes[rhsId] === undefined && this.groups[rhsId] === undefined)
        throw Error(
          `The right-hand id [${rhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      let architectureDiagramVXUJARFQValue51 = this.nodes[lhsId].in,
        architectureDiagramVXUJARFQValue52 = this.nodes[rhsId].in;
      if (
        lhsGroup &&
        architectureDiagramVXUJARFQValue51 &&
        architectureDiagramVXUJARFQValue52 &&
        architectureDiagramVXUJARFQValue51 == architectureDiagramVXUJARFQValue52
      )
        throw Error(
          `The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      if (
        rhsGroup &&
        architectureDiagramVXUJARFQValue51 &&
        architectureDiagramVXUJARFQValue52 &&
        architectureDiagramVXUJARFQValue51 == architectureDiagramVXUJARFQValue52
      )
        throw Error(
          `The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      let architectureDiagramVXUJARFQValue53 = {
        lhsId,
        lhsDir,
        lhsInto,
        lhsGroup,
        rhsId,
        rhsDir,
        rhsInto,
        rhsGroup,
        title,
      };
      this.edges.push(architectureDiagramVXUJARFQValue53);
      this.nodes[lhsId] &&
        this.nodes[rhsId] &&
        (this.nodes[lhsId].edges.push(this.edges[this.edges.length - 1]),
        this.nodes[rhsId].edges.push(this.edges[this.edges.length - 1]));
    }
    getEdges() {
      return this.edges;
    }
    getDataStructures() {
      if (this.dataStructures === undefined) {
        let architectureDiagramVXUJARFQValue54 = {},
          architectureDiagramVXUJARFQValue55 = Object.entries(
            this.nodes,
          ).reduce(
            (
              accumulator,
              [
                architectureDiagramVXUJARFQParam27,
                architectureDiagramVXUJARFQParam28,
              ],
            ) => (
              (accumulator[architectureDiagramVXUJARFQParam27] =
                architectureDiagramVXUJARFQParam28.edges.reduce(
                  (_accumulator, current) => {
                    let architectureDiagramVXUJARFQValue104 = this.getNode(
                        current.lhsId,
                      )?.in,
                      architectureDiagramVXUJARFQValue105 = this.getNode(
                        current.rhsId,
                      )?.in;
                    if (
                      architectureDiagramVXUJARFQValue104 &&
                      architectureDiagramVXUJARFQValue105 &&
                      architectureDiagramVXUJARFQValue104 !==
                        architectureDiagramVXUJARFQValue105
                    ) {
                      let architectureDiagramVXUJARFQValue151 =
                        architectureDiagramVXUJARFQValue15(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramVXUJARFQValue151 !== "bend" &&
                        ((architectureDiagramVXUJARFQValue54[
                          architectureDiagramVXUJARFQValue104
                        ] ??= {}),
                        (architectureDiagramVXUJARFQValue54[
                          architectureDiagramVXUJARFQValue104
                        ][architectureDiagramVXUJARFQValue105] =
                          architectureDiagramVXUJARFQValue151),
                        (architectureDiagramVXUJARFQValue54[
                          architectureDiagramVXUJARFQValue105
                        ] ??= {}),
                        (architectureDiagramVXUJARFQValue54[
                          architectureDiagramVXUJARFQValue105
                        ][architectureDiagramVXUJARFQValue104] =
                          architectureDiagramVXUJARFQValue151));
                    }
                    if (current.lhsId === architectureDiagramVXUJARFQParam27) {
                      let architectureDiagramVXUJARFQValue161 =
                        architectureDiagramVXUJARFQValue12(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramVXUJARFQValue161 &&
                        (_accumulator[architectureDiagramVXUJARFQValue161] =
                          current.rhsId);
                    } else {
                      let architectureDiagramVXUJARFQValue162 =
                        architectureDiagramVXUJARFQValue12(
                          current.rhsDir,
                          current.lhsDir,
                        );
                      architectureDiagramVXUJARFQValue162 &&
                        (_accumulator[architectureDiagramVXUJARFQValue162] =
                          current.lhsId);
                    }
                    return _accumulator;
                  },
                  {},
                )),
              accumulator
            ),
            {},
          ),
          architectureDiagramVXUJARFQValue56 = Object.keys(
            architectureDiagramVXUJARFQValue55,
          )[0],
          architectureDiagramVXUJARFQValue57 = {
            [architectureDiagramVXUJARFQValue56]: 1,
          },
          architectureDiagramVXUJARFQValue58 = Object.keys(
            architectureDiagramVXUJARFQValue55,
          ).reduce(
            (accumulator, current) =>
              current === architectureDiagramVXUJARFQValue56
                ? accumulator
                : {
                    ...accumulator,
                    [current]: 1,
                  },
            {},
          ),
          architectureDiagramVXUJARFQValue59 = chunkAGHRB4JFN(
            (architectureDiagramVXUJARFQParam41) => {
              let architectureDiagramVXUJARFQValue124 = {
                  [architectureDiagramVXUJARFQParam41]: [0, 0],
                },
                architectureDiagramVXUJARFQValue125 = [
                  architectureDiagramVXUJARFQParam41,
                ];
              for (; architectureDiagramVXUJARFQValue125.length > 0; ) {
                let architectureDiagramVXUJARFQValue134 =
                  architectureDiagramVXUJARFQValue125.shift();
                if (architectureDiagramVXUJARFQValue134) {
                  architectureDiagramVXUJARFQValue57[
                    architectureDiagramVXUJARFQValue134
                  ] = 1;
                  delete architectureDiagramVXUJARFQValue58[
                    architectureDiagramVXUJARFQValue134
                  ];
                  let architectureDiagramVXUJARFQValue148 =
                      architectureDiagramVXUJARFQValue55[
                        architectureDiagramVXUJARFQValue134
                      ],
                    [
                      architectureDiagramVXUJARFQValue149,
                      architectureDiagramVXUJARFQValue150,
                    ] =
                      architectureDiagramVXUJARFQValue124[
                        architectureDiagramVXUJARFQValue134
                      ];
                  Object.entries(architectureDiagramVXUJARFQValue148).forEach(
                    ([
                      architectureDiagramVXUJARFQParam71,
                      architectureDiagramVXUJARFQParam72,
                    ]) => {
                      architectureDiagramVXUJARFQValue57[
                        architectureDiagramVXUJARFQParam72
                      ] ||
                        ((architectureDiagramVXUJARFQValue124[
                          architectureDiagramVXUJARFQParam72
                        ] = architectureDiagramVXUJARFQValue13(
                          [
                            architectureDiagramVXUJARFQValue149,
                            architectureDiagramVXUJARFQValue150,
                          ],
                          architectureDiagramVXUJARFQParam71,
                        )),
                        architectureDiagramVXUJARFQValue125.push(
                          architectureDiagramVXUJARFQParam72,
                        ));
                    },
                  );
                }
              }
              return architectureDiagramVXUJARFQValue124;
            },
            "BFS",
          ),
          architectureDiagramVXUJARFQValue60 = [
            architectureDiagramVXUJARFQValue59(
              architectureDiagramVXUJARFQValue56,
            ),
          ];
        for (; Object.keys(architectureDiagramVXUJARFQValue58).length > 0; )
          architectureDiagramVXUJARFQValue60.push(
            architectureDiagramVXUJARFQValue59(
              Object.keys(architectureDiagramVXUJARFQValue58)[0],
            ),
          );
        this.dataStructures = {
          adjList: architectureDiagramVXUJARFQValue55,
          spatialMaps: architectureDiagramVXUJARFQValue60,
          groupAlignments: architectureDiagramVXUJARFQValue54,
        };
      }
      return this.dataStructures;
    }
    setElementForId(
      architectureDiagramVXUJARFQParam84,
      architectureDiagramVXUJARFQParam85,
    ) {
      this.elements[architectureDiagramVXUJARFQParam84] =
        architectureDiagramVXUJARFQParam85;
    }
    getElementById(architectureDiagramVXUJARFQParam86) {
      return this.elements[architectureDiagramVXUJARFQParam86];
    }
    getConfig() {
      return chunkS3R3BYOJP({
        ...architectureDiagramVXUJARFQValue20,
        ..._chunkABZYJK2DY().architecture,
      });
    }
    getConfigField(architectureDiagramVXUJARFQParam83) {
      return this.getConfig()[architectureDiagramVXUJARFQParam83];
    }
  },
  architectureDiagramVXUJARFQValue22 = chunkAGHRB4JFN(
    (
      architectureDiagramVXUJARFQParam60,
      architectureDiagramVXUJARFQParam61,
    ) => {
      chunk4BX2VUAB(
        architectureDiagramVXUJARFQParam60,
        architectureDiagramVXUJARFQParam61,
      );
      architectureDiagramVXUJARFQParam60.groups.map((item) =>
        architectureDiagramVXUJARFQParam61.addGroup(item),
      );
      architectureDiagramVXUJARFQParam60.services.map((item) =>
        architectureDiagramVXUJARFQParam61.addService({
          ...item,
          type: "service",
        }),
      );
      architectureDiagramVXUJARFQParam60.junctions.map((item) =>
        architectureDiagramVXUJARFQParam61.addJunction({
          ...item,
          type: "junction",
        }),
      );
      architectureDiagramVXUJARFQParam60.edges.map((item) =>
        architectureDiagramVXUJARFQParam61.addEdge(item),
      );
    },
    "populateDb",
  ),
  architectureDiagramVXUJARFQValue23 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (architectureDiagramVXUJARFQParam42) => {
      let architectureDiagramVXUJARFQValue130 = await MermaidParserCore(
        "architecture",
        architectureDiagramVXUJARFQParam42,
      );
      chunkAGHRB4JFR.debug(architectureDiagramVXUJARFQValue130);
      let architectureDiagramVXUJARFQValue131 =
        architectureDiagramVXUJARFQValue23.parser?.yy;
      if (
        !(
          architectureDiagramVXUJARFQValue131 instanceof
          architectureDiagramVXUJARFQValue21
        )
      )
        throw Error(
          "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      architectureDiagramVXUJARFQValue22(
        architectureDiagramVXUJARFQValue130,
        architectureDiagramVXUJARFQValue131,
      );
    }, "parse"),
  },
  architectureDiagramVXUJARFQValue24 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQParam37) => `
  .edge {
    stroke-width: ${architectureDiagramVXUJARFQParam37.archEdgeWidth};
    stroke: ${architectureDiagramVXUJARFQParam37.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${architectureDiagramVXUJARFQParam37.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${architectureDiagramVXUJARFQParam37.archGroupBorderColor};
    stroke-width: ${architectureDiagramVXUJARFQParam37.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`,
    "getStyles",
  ),
  architectureDiagramVXUJARFQValue25 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQParam67) =>
      `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${architectureDiagramVXUJARFQParam67}</g>`,
    "wrapIcon",
  ),
  architectureDiagramVXUJARFQValue26 = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: architectureDiagramVXUJARFQValue25(
          '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      server: {
        body: architectureDiagramVXUJARFQValue25(
          '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>',
        ),
      },
      disk: {
        body: architectureDiagramVXUJARFQValue25(
          '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>',
        ),
      },
      internet: {
        body: architectureDiagramVXUJARFQValue25(
          '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      cloud: {
        body: architectureDiagramVXUJARFQValue25(
          '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      unknown: chunkJA3XYJ7ZO,
      blank: {
        body: architectureDiagramVXUJARFQValue25(""),
      },
    },
  },
  architectureDiagramVXUJARFQValue27 = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQParam7,
    architectureDiagramVXUJARFQParam8,
    architectureDiagramVXUJARFQParam9,
  ) {
    let architectureDiagramVXUJARFQValue36 =
        architectureDiagramVXUJARFQParam9.getConfigField("padding"),
      architectureDiagramVXUJARFQValue37 =
        architectureDiagramVXUJARFQParam9.getConfigField("iconSize"),
      architectureDiagramVXUJARFQValue38 =
        architectureDiagramVXUJARFQValue37 / 2,
      architectureDiagramVXUJARFQValue39 =
        architectureDiagramVXUJARFQValue37 / 6,
      architectureDiagramVXUJARFQValue40 =
        architectureDiagramVXUJARFQValue39 / 2;
    await Promise.all(
      architectureDiagramVXUJARFQParam8.edges().map(async (item) => {
        let {
            source,
            sourceDir,
            sourceArrow,
            sourceGroup,
            target,
            targetDir,
            targetArrow,
            targetGroup,
            label: architectureDiagramVXUJARFQValue41,
          } = architectureDiagramVXUJARFQValue18(item),
          { x: _x, y: architectureDiagramVXUJARFQValue42 } =
            item[0].sourceEndpoint(),
          { x: architectureDiagramVXUJARFQValue43, y } = item[0].midpoint(),
          { x, y: _y } = item[0].targetEndpoint(),
          architectureDiagramVXUJARFQValue44 =
            architectureDiagramVXUJARFQValue36 + 4;
        if (
          (sourceGroup &&
            (architectureDiagramVXUJARFQValue7(sourceDir)
              ? (_x +=
                  sourceDir === "L"
                    ? -architectureDiagramVXUJARFQValue44
                    : architectureDiagramVXUJARFQValue44)
              : (architectureDiagramVXUJARFQValue42 +=
                  sourceDir === "T"
                    ? -architectureDiagramVXUJARFQValue44
                    : architectureDiagramVXUJARFQValue44 + 18)),
          targetGroup &&
            (architectureDiagramVXUJARFQValue7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? -architectureDiagramVXUJARFQValue44
                    : architectureDiagramVXUJARFQValue44)
              : (_y +=
                  targetDir === "T"
                    ? -architectureDiagramVXUJARFQValue44
                    : architectureDiagramVXUJARFQValue44 + 18)),
          !sourceGroup &&
            architectureDiagramVXUJARFQParam9.getNode(source)?.type ===
              "junction" &&
            (architectureDiagramVXUJARFQValue7(sourceDir)
              ? (_x +=
                  sourceDir === "L"
                    ? architectureDiagramVXUJARFQValue38
                    : -architectureDiagramVXUJARFQValue38)
              : (architectureDiagramVXUJARFQValue42 +=
                  sourceDir === "T"
                    ? architectureDiagramVXUJARFQValue38
                    : -architectureDiagramVXUJARFQValue38)),
          !targetGroup &&
            architectureDiagramVXUJARFQParam9.getNode(target)?.type ===
              "junction" &&
            (architectureDiagramVXUJARFQValue7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? architectureDiagramVXUJARFQValue38
                    : -architectureDiagramVXUJARFQValue38)
              : (_y +=
                  targetDir === "T"
                    ? architectureDiagramVXUJARFQValue38
                    : -architectureDiagramVXUJARFQValue38)),
          item[0]._private.rscratch)
        ) {
          let architectureDiagramVXUJARFQValue45 =
            architectureDiagramVXUJARFQParam7.insert("g");
          if (
            (architectureDiagramVXUJARFQValue45
              .insert("path")
              .attr(
                "d",
                `M ${_x},${architectureDiagramVXUJARFQValue42} L ${architectureDiagramVXUJARFQValue43},${y} L${x},${_y} `,
              )
              .attr("class", "edge")
              .attr(
                "id",
                chunkS3R3BYOJR(source, target, {
                  prefix: "L",
                }),
              ),
            sourceArrow)
          ) {
            let architectureDiagramVXUJARFQValue141 =
                architectureDiagramVXUJARFQValue7(sourceDir)
                  ? architectureDiagramVXUJARFQValue4[sourceDir](
                      _x,
                      architectureDiagramVXUJARFQValue39,
                    )
                  : _x - architectureDiagramVXUJARFQValue40,
              architectureDiagramVXUJARFQValue142 =
                architectureDiagramVXUJARFQValue8(sourceDir)
                  ? architectureDiagramVXUJARFQValue4[sourceDir](
                      architectureDiagramVXUJARFQValue42,
                      architectureDiagramVXUJARFQValue39,
                    )
                  : architectureDiagramVXUJARFQValue42 -
                    architectureDiagramVXUJARFQValue40;
            architectureDiagramVXUJARFQValue45
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramVXUJARFQValue3[sourceDir](
                  architectureDiagramVXUJARFQValue39,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramVXUJARFQValue141},${architectureDiagramVXUJARFQValue142})`,
              )
              .attr("class", "arrow");
          }
          if (targetArrow) {
            let architectureDiagramVXUJARFQValue143 =
                architectureDiagramVXUJARFQValue7(targetDir)
                  ? architectureDiagramVXUJARFQValue4[targetDir](
                      x,
                      architectureDiagramVXUJARFQValue39,
                    )
                  : x - architectureDiagramVXUJARFQValue40,
              architectureDiagramVXUJARFQValue144 =
                architectureDiagramVXUJARFQValue8(targetDir)
                  ? architectureDiagramVXUJARFQValue4[targetDir](
                      _y,
                      architectureDiagramVXUJARFQValue39,
                    )
                  : _y - architectureDiagramVXUJARFQValue40;
            architectureDiagramVXUJARFQValue45
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramVXUJARFQValue3[targetDir](
                  architectureDiagramVXUJARFQValue39,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramVXUJARFQValue143},${architectureDiagramVXUJARFQValue144})`,
              )
              .attr("class", "arrow");
          }
          if (architectureDiagramVXUJARFQValue41) {
            let architectureDiagramVXUJARFQValue61 =
                architectureDiagramVXUJARFQValue9(sourceDir, targetDir)
                  ? "XY"
                  : architectureDiagramVXUJARFQValue7(sourceDir)
                    ? "X"
                    : "Y",
              architectureDiagramVXUJARFQValue62 = 0;
            architectureDiagramVXUJARFQValue62 =
              architectureDiagramVXUJARFQValue61 === "X"
                ? Math.abs(_x - x)
                : architectureDiagramVXUJARFQValue61 === "Y"
                  ? Math.abs(architectureDiagramVXUJARFQValue42 - _y) / 1.5
                  : Math.abs(_x - x) / 2;
            let architectureDiagramVXUJARFQValue63 =
              architectureDiagramVXUJARFQValue45.append("g");
            if (
              (await chunkJA3XYJ7ZA(
                architectureDiagramVXUJARFQValue63,
                architectureDiagramVXUJARFQValue41,
                {
                  useHtmlLabels: false,
                  width: architectureDiagramVXUJARFQValue62,
                  classes: "architecture-service-label",
                },
                _chunkABZYJK2DB(),
              ),
              architectureDiagramVXUJARFQValue63
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "middle")
                .attr("text-anchor", "middle"),
              architectureDiagramVXUJARFQValue61 === "X")
            )
              architectureDiagramVXUJARFQValue63.attr(
                "transform",
                "translate(" +
                  architectureDiagramVXUJARFQValue43 +
                  ", " +
                  y +
                  ")",
              );
            else if (architectureDiagramVXUJARFQValue61 === "Y")
              architectureDiagramVXUJARFQValue63.attr(
                "transform",
                "translate(" +
                  architectureDiagramVXUJARFQValue43 +
                  ", " +
                  y +
                  ") rotate(-90)",
              );
            else if (architectureDiagramVXUJARFQValue61 === "XY") {
              let architectureDiagramVXUJARFQValue106 =
                architectureDiagramVXUJARFQValue12(sourceDir, targetDir);
              if (
                architectureDiagramVXUJARFQValue106 &&
                architectureDiagramVXUJARFQValue10(
                  architectureDiagramVXUJARFQValue106,
                )
              ) {
                let architectureDiagramVXUJARFQValue108 =
                    architectureDiagramVXUJARFQValue63
                      .node()
                      .getBoundingClientRect(),
                  [
                    architectureDiagramVXUJARFQValue109,
                    architectureDiagramVXUJARFQValue110,
                  ] = architectureDiagramVXUJARFQValue14(
                    architectureDiagramVXUJARFQValue106,
                  );
                architectureDiagramVXUJARFQValue63
                  .attr("dominant-baseline", "auto")
                  .attr(
                    "transform",
                    `rotate(${-1 * architectureDiagramVXUJARFQValue109 * architectureDiagramVXUJARFQValue110 * 45})`,
                  );
                let architectureDiagramVXUJARFQValue111 =
                  architectureDiagramVXUJARFQValue63
                    .node()
                    .getBoundingClientRect();
                architectureDiagramVXUJARFQValue63.attr(
                  "transform",
                  `
                translate(${architectureDiagramVXUJARFQValue43}, ${y - architectureDiagramVXUJARFQValue108.height / 2})
                translate(${(architectureDiagramVXUJARFQValue109 * architectureDiagramVXUJARFQValue111.width) / 2}, ${(architectureDiagramVXUJARFQValue110 * architectureDiagramVXUJARFQValue111.height) / 2})
                rotate(${-1 * architectureDiagramVXUJARFQValue109 * architectureDiagramVXUJARFQValue110 * 45}, 0, ${architectureDiagramVXUJARFQValue108.height / 2})
              `,
                );
              }
            }
          }
        }
      }),
    );
  }, "drawEdges"),
  architectureDiagramVXUJARFQValue28 = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQParam13,
    architectureDiagramVXUJARFQParam14,
    architectureDiagramVXUJARFQParam15,
  ) {
    let architectureDiagramVXUJARFQValue64 =
        architectureDiagramVXUJARFQParam15.getConfigField("padding") * 0.75,
      architectureDiagramVXUJARFQValue65 =
        architectureDiagramVXUJARFQParam15.getConfigField("fontSize"),
      architectureDiagramVXUJARFQValue66 =
        architectureDiagramVXUJARFQParam15.getConfigField("iconSize") / 2;
    await Promise.all(
      architectureDiagramVXUJARFQParam14.nodes().map(async (item) => {
        let architectureDiagramVXUJARFQValue70 =
          architectureDiagramVXUJARFQValue19(item);
        if (architectureDiagramVXUJARFQValue70.type === "group") {
          let { h: _h, w, x1, y1 } = item.boundingBox(),
            architectureDiagramVXUJARFQValue71 =
              architectureDiagramVXUJARFQParam13.append("rect");
          architectureDiagramVXUJARFQValue71
            .attr("id", `group-${architectureDiagramVXUJARFQValue70.id}`)
            .attr("x", x1 + architectureDiagramVXUJARFQValue66)
            .attr("y", y1 + architectureDiagramVXUJARFQValue66)
            .attr("width", w)
            .attr("height", _h)
            .attr("class", "node-bkg");
          let architectureDiagramVXUJARFQValue72 =
              architectureDiagramVXUJARFQParam13.append("g"),
            architectureDiagramVXUJARFQValue73 = x1,
            architectureDiagramVXUJARFQValue74 = y1;
          if (architectureDiagramVXUJARFQValue70.icon) {
            let architectureDiagramVXUJARFQValue129 =
              architectureDiagramVXUJARFQValue72.append("g");
            architectureDiagramVXUJARFQValue129.html(
              `<g>${await chunkJA3XYJ7ZR(
                architectureDiagramVXUJARFQValue70.icon,
                {
                  height: architectureDiagramVXUJARFQValue64,
                  width: architectureDiagramVXUJARFQValue64,
                  fallbackPrefix: architectureDiagramVXUJARFQValue26.prefix,
                },
              )}</g>`,
            );
            architectureDiagramVXUJARFQValue129.attr(
              "transform",
              "translate(" +
                (architectureDiagramVXUJARFQValue73 +
                  architectureDiagramVXUJARFQValue66 +
                  1) +
                ", " +
                (architectureDiagramVXUJARFQValue74 +
                  architectureDiagramVXUJARFQValue66 +
                  1) +
                ")",
            );
            architectureDiagramVXUJARFQValue73 +=
              architectureDiagramVXUJARFQValue64;
            architectureDiagramVXUJARFQValue74 +=
              architectureDiagramVXUJARFQValue65 / 2 - 1 - 2;
          }
          if (architectureDiagramVXUJARFQValue70.label) {
            let architectureDiagramVXUJARFQValue107 =
              architectureDiagramVXUJARFQValue72.append("g");
            await chunkJA3XYJ7ZA(
              architectureDiagramVXUJARFQValue107,
              architectureDiagramVXUJARFQValue70.label,
              {
                useHtmlLabels: false,
                width: w,
                classes: "architecture-service-label",
              },
              _chunkABZYJK2DB(),
            );
            architectureDiagramVXUJARFQValue107
              .attr("dy", "1em")
              .attr("alignment-baseline", "middle")
              .attr("dominant-baseline", "start")
              .attr("text-anchor", "start");
            architectureDiagramVXUJARFQValue107.attr(
              "transform",
              "translate(" +
                (architectureDiagramVXUJARFQValue73 +
                  architectureDiagramVXUJARFQValue66 +
                  4) +
                ", " +
                (architectureDiagramVXUJARFQValue74 +
                  architectureDiagramVXUJARFQValue66 +
                  2) +
                ")",
            );
          }
          architectureDiagramVXUJARFQParam15.setElementForId(
            architectureDiagramVXUJARFQValue70.id,
            architectureDiagramVXUJARFQValue71,
          );
        }
      }),
    );
  }, "drawGroups"),
  architectureDiagramVXUJARFQValue29 = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQParam10,
    architectureDiagramVXUJARFQParam11,
    architectureDiagramVXUJARFQParam12,
  ) {
    let architectureDiagramVXUJARFQValue46 = _chunkABZYJK2DB();
    for (let architectureDiagramVXUJARFQValue47 of architectureDiagramVXUJARFQParam12) {
      let architectureDiagramVXUJARFQValue48 =
          architectureDiagramVXUJARFQParam11.append("g"),
        architectureDiagramVXUJARFQValue49 =
          architectureDiagramVXUJARFQParam10.getConfigField("iconSize");
      if (architectureDiagramVXUJARFQValue47.title) {
        let architectureDiagramVXUJARFQValue118 =
          architectureDiagramVXUJARFQValue48.append("g");
        await chunkJA3XYJ7ZA(
          architectureDiagramVXUJARFQValue118,
          architectureDiagramVXUJARFQValue47.title,
          {
            useHtmlLabels: false,
            width: architectureDiagramVXUJARFQValue49 * 1.5,
            classes: "architecture-service-label",
          },
          architectureDiagramVXUJARFQValue46,
        );
        architectureDiagramVXUJARFQValue118
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle");
        architectureDiagramVXUJARFQValue118.attr(
          "transform",
          "translate(" +
            architectureDiagramVXUJARFQValue49 / 2 +
            ", " +
            architectureDiagramVXUJARFQValue49 +
            ")",
        );
      }
      let architectureDiagramVXUJARFQValue50 =
        architectureDiagramVXUJARFQValue48.append("g");
      if (architectureDiagramVXUJARFQValue47.icon)
        architectureDiagramVXUJARFQValue50.html(
          `<g>${await chunkJA3XYJ7ZR(architectureDiagramVXUJARFQValue47.icon, {
            height: architectureDiagramVXUJARFQValue49,
            width: architectureDiagramVXUJARFQValue49,
            fallbackPrefix: architectureDiagramVXUJARFQValue26.prefix,
          })}</g>`,
        );
      else if (architectureDiagramVXUJARFQValue47.iconText) {
        architectureDiagramVXUJARFQValue50.html(
          `<g>${await chunkJA3XYJ7ZR("blank", {
            height: architectureDiagramVXUJARFQValue49,
            width: architectureDiagramVXUJARFQValue49,
            fallbackPrefix: architectureDiagramVXUJARFQValue26.prefix,
          })}</g>`,
        );
        let architectureDiagramVXUJARFQValue89 =
            architectureDiagramVXUJARFQValue50
              .append("g")
              .append("foreignObject")
              .attr("width", architectureDiagramVXUJARFQValue49)
              .attr("height", architectureDiagramVXUJARFQValue49)
              .append("div")
              .attr("class", "node-icon-text")
              .attr("style", `height: ${architectureDiagramVXUJARFQValue49}px;`)
              .append("div")
              .html(
                _chunkABZYJK2DM(
                  architectureDiagramVXUJARFQValue47.iconText,
                  architectureDiagramVXUJARFQValue46,
                ),
              ),
          architectureDiagramVXUJARFQValue90 =
            parseInt(
              window
                .getComputedStyle(
                  architectureDiagramVXUJARFQValue89.node(),
                  null,
                )
                .getPropertyValue("font-size")
                .replace(/\D/g, ""),
            ) ?? 16;
        architectureDiagramVXUJARFQValue89.attr(
          "style",
          `-webkit-line-clamp: ${Math.floor((architectureDiagramVXUJARFQValue49 - 2) / architectureDiagramVXUJARFQValue90)};`,
        );
      } else
        architectureDiagramVXUJARFQValue50
          .append("path")
          .attr("class", "node-bkg")
          .attr("id", "node-" + architectureDiagramVXUJARFQValue47.id)
          .attr(
            "d",
            `M0 ${architectureDiagramVXUJARFQValue49} v${-architectureDiagramVXUJARFQValue49} q0,-5 5,-5 h${architectureDiagramVXUJARFQValue49} q5,0 5,5 v${architectureDiagramVXUJARFQValue49} H0 Z`,
          );
      architectureDiagramVXUJARFQValue48
        .attr("id", `service-${architectureDiagramVXUJARFQValue47.id}`)
        .attr("class", "architecture-service");
      let { width, height } = architectureDiagramVXUJARFQValue48
        .node()
        .getBBox();
      architectureDiagramVXUJARFQValue47.width = width;
      architectureDiagramVXUJARFQValue47.height = height;
      architectureDiagramVXUJARFQParam10.setElementForId(
        architectureDiagramVXUJARFQValue47.id,
        architectureDiagramVXUJARFQValue48,
      );
    }
    return 0;
  }, "drawServices"),
  architectureDiagramVXUJARFQValue30 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQParam38,
    architectureDiagramVXUJARFQParam39,
    architectureDiagramVXUJARFQParam40,
  ) {
    architectureDiagramVXUJARFQParam40.forEach((item) => {
      let architectureDiagramVXUJARFQValue126 =
          architectureDiagramVXUJARFQParam39.append("g"),
        architectureDiagramVXUJARFQValue127 =
          architectureDiagramVXUJARFQParam38.getConfigField("iconSize");
      architectureDiagramVXUJARFQValue126
        .append("g")
        .append("rect")
        .attr("id", "node-" + item.id)
        .attr("fill-opacity", "0")
        .attr("width", architectureDiagramVXUJARFQValue127)
        .attr("height", architectureDiagramVXUJARFQValue127);
      architectureDiagramVXUJARFQValue126.attr(
        "class",
        "architecture-junction",
      );
      let { width, height } =
        architectureDiagramVXUJARFQValue126._groups[0][0].getBBox();
      architectureDiagramVXUJARFQValue126.width = width;
      architectureDiagramVXUJARFQValue126.height = height;
      architectureDiagramVXUJARFQParam38.setElementForId(
        item.id,
        architectureDiagramVXUJARFQValue126,
      );
    });
  }, "drawJunctions");
chunkJA3XYJ7ZA([
  {
    name: architectureDiagramVXUJARFQValue26.prefix,
    icons: architectureDiagramVXUJARFQValue26,
  },
]);
cytoscape.use(architectureDiagramVXUJARFQValue1.default);
function architectureDiagramVXUJARFQHelper1(
  architectureDiagramVXUJARFQParam43,
  architectureDiagramVXUJARFQParam44,
  architectureDiagramVXUJARFQParam45,
) {
  architectureDiagramVXUJARFQParam43.forEach((item) => {
    architectureDiagramVXUJARFQParam44.add({
      group: "nodes",
      data: {
        type: "service",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
        width: architectureDiagramVXUJARFQParam45.getConfigField("iconSize"),
        height: architectureDiagramVXUJARFQParam45.getConfigField("iconSize"),
      },
      classes: "node-service",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper1, "addServices");
function architectureDiagramVXUJARFQHelper2(
  architectureDiagramVXUJARFQParam51,
  architectureDiagramVXUJARFQParam52,
  architectureDiagramVXUJARFQParam53,
) {
  architectureDiagramVXUJARFQParam51.forEach((item) => {
    architectureDiagramVXUJARFQParam52.add({
      group: "nodes",
      data: {
        type: "junction",
        id: item.id,
        parent: item.in,
        width: architectureDiagramVXUJARFQParam53.getConfigField("iconSize"),
        height: architectureDiagramVXUJARFQParam53.getConfigField("iconSize"),
      },
      classes: "node-junction",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper2, "addJunctions");
function architectureDiagramVXUJARFQHelper3(
  architectureDiagramVXUJARFQParam54,
  architectureDiagramVXUJARFQParam55,
) {
  architectureDiagramVXUJARFQParam55.nodes().map((item) => {
    let architectureDiagramVXUJARFQValue152 =
      architectureDiagramVXUJARFQValue19(item);
    architectureDiagramVXUJARFQValue152.type !== "group" &&
      ((architectureDiagramVXUJARFQValue152.x = item.position().x),
      (architectureDiagramVXUJARFQValue152.y = item.position().y),
      architectureDiagramVXUJARFQParam54
        .getElementById(architectureDiagramVXUJARFQValue152.id)
        .attr(
          "transform",
          "translate(" +
            (architectureDiagramVXUJARFQValue152.x || 0) +
            "," +
            (architectureDiagramVXUJARFQValue152.y || 0) +
            ")",
        ));
  });
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper3, "positionNodes");
function architectureDiagramVXUJARFQHelper4(
  architectureDiagramVXUJARFQParam62,
  architectureDiagramVXUJARFQParam63,
) {
  architectureDiagramVXUJARFQParam62.forEach((item) => {
    architectureDiagramVXUJARFQParam63.add({
      group: "nodes",
      data: {
        type: "group",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
      },
      classes: "node-group",
    });
  });
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper4, "addGroups");
function architectureDiagramVXUJARFQHelper5(
  architectureDiagramVXUJARFQParam19,
  architectureDiagramVXUJARFQParam20,
) {
  architectureDiagramVXUJARFQParam19.forEach((item) => {
    let {
        lhsId,
        rhsId,
        lhsInto,
        lhsGroup,
        rhsInto,
        lhsDir,
        rhsDir,
        rhsGroup,
        title,
      } = item,
      architectureDiagramVXUJARFQValue78 = architectureDiagramVXUJARFQValue9(
        item.lhsDir,
        item.rhsDir,
      )
        ? "segments"
        : "straight",
      architectureDiagramVXUJARFQValue79 = {
        id: `${lhsId}-${rhsId}`,
        label: title,
        source: lhsId,
        sourceDir: lhsDir,
        sourceArrow: lhsInto,
        sourceGroup: lhsGroup,
        sourceEndpoint:
          lhsDir === "L"
            ? "0 50%"
            : lhsDir === "R"
              ? "100% 50%"
              : lhsDir === "T"
                ? "50% 0"
                : "50% 100%",
        target: rhsId,
        targetDir: rhsDir,
        targetArrow: rhsInto,
        targetGroup: rhsGroup,
        targetEndpoint:
          rhsDir === "L"
            ? "0 50%"
            : rhsDir === "R"
              ? "100% 50%"
              : rhsDir === "T"
                ? "50% 0"
                : "50% 100%",
      };
    architectureDiagramVXUJARFQParam20.add({
      group: "edges",
      data: architectureDiagramVXUJARFQValue79,
      classes: architectureDiagramVXUJARFQValue78,
    });
  });
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper5, "addEdges");
function architectureDiagramVXUJARFQHelper6(
  architectureDiagramVXUJARFQParam16,
  architectureDiagramVXUJARFQParam17,
  architectureDiagramVXUJARFQParam18,
) {
  let architectureDiagramVXUJARFQValue67 = chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQParam29,
        architectureDiagramVXUJARFQParam30,
      ) =>
        Object.entries(architectureDiagramVXUJARFQParam29).reduce(
          (
            accumulator,
            [
              architectureDiagramVXUJARFQParam31,
              architectureDiagramVXUJARFQParam32,
            ],
          ) => {
            let architectureDiagramVXUJARFQValue91 = 0,
              architectureDiagramVXUJARFQValue92 = Object.entries(
                architectureDiagramVXUJARFQParam32,
              );
            if (architectureDiagramVXUJARFQValue92.length === 1)
              return (
                (accumulator[architectureDiagramVXUJARFQParam31] =
                  architectureDiagramVXUJARFQValue92[0][1]),
                accumulator
              );
            for (
              let architectureDiagramVXUJARFQValue114 = 0;
              architectureDiagramVXUJARFQValue114 <
              architectureDiagramVXUJARFQValue92.length - 1;
              architectureDiagramVXUJARFQValue114++
            )
              for (
                let architectureDiagramVXUJARFQValue117 =
                  architectureDiagramVXUJARFQValue114 + 1;
                architectureDiagramVXUJARFQValue117 <
                architectureDiagramVXUJARFQValue92.length;
                architectureDiagramVXUJARFQValue117++
              ) {
                let [
                    architectureDiagramVXUJARFQValue120,
                    architectureDiagramVXUJARFQValue121,
                  ] =
                    architectureDiagramVXUJARFQValue92[
                      architectureDiagramVXUJARFQValue114
                    ],
                  [
                    architectureDiagramVXUJARFQValue122,
                    architectureDiagramVXUJARFQValue123,
                  ] =
                    architectureDiagramVXUJARFQValue92[
                      architectureDiagramVXUJARFQValue117
                    ];
                if (
                  architectureDiagramVXUJARFQParam18[
                    architectureDiagramVXUJARFQValue120
                  ]?.[architectureDiagramVXUJARFQValue122] ===
                  architectureDiagramVXUJARFQParam30
                ) {
                  accumulator[architectureDiagramVXUJARFQParam31] ??= [];
                  accumulator[architectureDiagramVXUJARFQParam31] = [
                    ...accumulator[architectureDiagramVXUJARFQParam31],
                    ...architectureDiagramVXUJARFQValue121,
                    ...architectureDiagramVXUJARFQValue123,
                  ];
                } else if (
                  architectureDiagramVXUJARFQValue120 === "default" ||
                  architectureDiagramVXUJARFQValue122 === "default"
                ) {
                  accumulator[architectureDiagramVXUJARFQParam31] ??= [];
                  accumulator[architectureDiagramVXUJARFQParam31] = [
                    ...accumulator[architectureDiagramVXUJARFQParam31],
                    ...architectureDiagramVXUJARFQValue121,
                    ...architectureDiagramVXUJARFQValue123,
                  ];
                } else {
                  let architectureDiagramVXUJARFQValue155 = `${architectureDiagramVXUJARFQParam31}-${architectureDiagramVXUJARFQValue91++}`;
                  accumulator[architectureDiagramVXUJARFQValue155] =
                    architectureDiagramVXUJARFQValue121;
                  let architectureDiagramVXUJARFQValue156 = `${architectureDiagramVXUJARFQParam31}-${architectureDiagramVXUJARFQValue91++}`;
                  accumulator[architectureDiagramVXUJARFQValue156] =
                    architectureDiagramVXUJARFQValue123;
                }
              }
            return accumulator;
          },
          {},
        ),
      "flattenAlignments",
    ),
    [architectureDiagramVXUJARFQValue68, architectureDiagramVXUJARFQValue69] =
      architectureDiagramVXUJARFQParam17
        .map((item) => {
          let architectureDiagramVXUJARFQValue112 = {},
            architectureDiagramVXUJARFQValue113 = {};
          return (
            Object.entries(item).forEach(
              ([
                architectureDiagramVXUJARFQParam56,
                [
                  architectureDiagramVXUJARFQParam57,
                  architectureDiagramVXUJARFQParam58,
                ],
              ]) => {
                let architectureDiagramVXUJARFQValue145 =
                  architectureDiagramVXUJARFQParam16.getNode(
                    architectureDiagramVXUJARFQParam56,
                  )?.in ?? "default";
                architectureDiagramVXUJARFQValue112[
                  architectureDiagramVXUJARFQParam58
                ] ??= {};
                architectureDiagramVXUJARFQValue112[
                  architectureDiagramVXUJARFQParam58
                ][architectureDiagramVXUJARFQValue145] ??= [];
                architectureDiagramVXUJARFQValue112[
                  architectureDiagramVXUJARFQParam58
                ][architectureDiagramVXUJARFQValue145].push(
                  architectureDiagramVXUJARFQParam56,
                );
                architectureDiagramVXUJARFQValue113[
                  architectureDiagramVXUJARFQParam57
                ] ??= {};
                architectureDiagramVXUJARFQValue113[
                  architectureDiagramVXUJARFQParam57
                ][architectureDiagramVXUJARFQValue145] ??= [];
                architectureDiagramVXUJARFQValue113[
                  architectureDiagramVXUJARFQParam57
                ][architectureDiagramVXUJARFQValue145].push(
                  architectureDiagramVXUJARFQParam56,
                );
              },
            ),
            {
              horiz: Object.values(
                architectureDiagramVXUJARFQValue67(
                  architectureDiagramVXUJARFQValue112,
                  "horizontal",
                ),
              ).filter((_item) => _item.length > 1),
              vert: Object.values(
                architectureDiagramVXUJARFQValue67(
                  architectureDiagramVXUJARFQValue113,
                  "vertical",
                ),
              ).filter((_item) => _item.length > 1),
            }
          );
        })
        .reduce(
          (
            [
              architectureDiagramVXUJARFQParam69,
              architectureDiagramVXUJARFQParam70,
            ],
            { horiz, vert },
          ) => [
            [...architectureDiagramVXUJARFQParam69, ...horiz],
            [...architectureDiagramVXUJARFQParam70, ...vert],
          ],
          [[], []],
        );
  return {
    horizontal: architectureDiagramVXUJARFQValue68,
    vertical: architectureDiagramVXUJARFQValue69,
  };
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper6, "getAlignments");
function architectureDiagramVXUJARFQHelper7(
  architectureDiagramVXUJARFQParam21,
  architectureDiagramVXUJARFQParam22,
) {
  let architectureDiagramVXUJARFQValue75 = [],
    architectureDiagramVXUJARFQValue76 = chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam96) =>
        `${architectureDiagramVXUJARFQParam96[0]},${architectureDiagramVXUJARFQParam96[1]}`,
      "posToStr",
    ),
    architectureDiagramVXUJARFQValue77 = chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQParam91) =>
        architectureDiagramVXUJARFQParam91
          .split(",")
          .map((item) => parseInt(item)),
      "strToPos",
    );
  return (
    architectureDiagramVXUJARFQParam21.forEach((item) => {
      let architectureDiagramVXUJARFQValue85 = Object.fromEntries(
          Object.entries(item).map(
            ([
              architectureDiagramVXUJARFQParam97,
              architectureDiagramVXUJARFQParam98,
            ]) => [
              architectureDiagramVXUJARFQValue76(
                architectureDiagramVXUJARFQParam98,
              ),
              architectureDiagramVXUJARFQParam97,
            ],
          ),
        ),
        architectureDiagramVXUJARFQValue86 = [
          architectureDiagramVXUJARFQValue76([0, 0]),
        ],
        architectureDiagramVXUJARFQValue87 = {},
        architectureDiagramVXUJARFQValue88 = {
          L: [-1, 0],
          R: [1, 0],
          T: [0, 1],
          B: [0, -1],
        };
      for (; architectureDiagramVXUJARFQValue86.length > 0; ) {
        let architectureDiagramVXUJARFQValue115 =
          architectureDiagramVXUJARFQValue86.shift();
        if (architectureDiagramVXUJARFQValue115) {
          architectureDiagramVXUJARFQValue87[
            architectureDiagramVXUJARFQValue115
          ] = 1;
          let architectureDiagramVXUJARFQValue119 =
            architectureDiagramVXUJARFQValue85[
              architectureDiagramVXUJARFQValue115
            ];
          if (architectureDiagramVXUJARFQValue119) {
            let architectureDiagramVXUJARFQValue128 =
              architectureDiagramVXUJARFQValue77(
                architectureDiagramVXUJARFQValue115,
              );
            Object.entries(architectureDiagramVXUJARFQValue88).forEach(
              ([
                architectureDiagramVXUJARFQParam46,
                architectureDiagramVXUJARFQParam47,
              ]) => {
                let architectureDiagramVXUJARFQValue132 =
                    architectureDiagramVXUJARFQValue76([
                      architectureDiagramVXUJARFQValue128[0] +
                        architectureDiagramVXUJARFQParam47[0],
                      architectureDiagramVXUJARFQValue128[1] +
                        architectureDiagramVXUJARFQParam47[1],
                    ]),
                  architectureDiagramVXUJARFQValue133 =
                    architectureDiagramVXUJARFQValue85[
                      architectureDiagramVXUJARFQValue132
                    ];
                architectureDiagramVXUJARFQValue133 &&
                  !architectureDiagramVXUJARFQValue87[
                    architectureDiagramVXUJARFQValue132
                  ] &&
                  (architectureDiagramVXUJARFQValue86.push(
                    architectureDiagramVXUJARFQValue132,
                  ),
                  architectureDiagramVXUJARFQValue75.push({
                    [architectureDiagramVXUJARFQValue2[
                      architectureDiagramVXUJARFQParam46
                    ]]: architectureDiagramVXUJARFQValue133,
                    [architectureDiagramVXUJARFQValue2[
                      architectureDiagramVXUJARFQValue5(
                        architectureDiagramVXUJARFQParam46,
                      )
                    ]]: architectureDiagramVXUJARFQValue119,
                    gap:
                      1.5 *
                      architectureDiagramVXUJARFQParam22.getConfigField(
                        "iconSize",
                      ),
                  }));
              },
            );
          }
        }
      }
    }),
    architectureDiagramVXUJARFQValue75
  );
}
chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper7, "getRelativeConstraints");
function $(
  architectureDiagramVXUJARFQParam1,
  architectureDiagramVXUJARFQParam2,
  architectureDiagramVXUJARFQParam3,
  architectureDiagramVXUJARFQParam4,
  architectureDiagramVXUJARFQParam5,
  { spatialMaps, groupAlignments },
) {
  return new Promise((architectureDiagramVXUJARFQParam6) => {
    let architectureDiagramVXUJARFQValue31 = Src("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      architectureDiagramVXUJARFQValue32 = cytoscape({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "straight",
              label: "data(label)",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "edge.segments",
            style: {
              "curve-style": "segments",
              "segment-weights": "0",
              "segment-distances": [0.5],
              "edge-distances": "endpoints",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "node",
            style: {
              "compound-sizing-wrt-labels": "include",
            },
          },
          {
            selector: "node[label]",
            style: {
              "text-valign": "bottom",
              "text-halign": "center",
              "font-size": `${architectureDiagramVXUJARFQParam5.getConfigField("fontSize")}px`,
            },
          },
          {
            selector: ".node-service",
            style: {
              label: "data(label)",
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-junction",
            style: {
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-group",
            style: {
              padding: `${architectureDiagramVXUJARFQParam5.getConfigField("padding")}px`,
            },
          },
        ],
        layout: {
          name: "grid",
          boundingBox: {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100,
          },
        },
      });
    architectureDiagramVXUJARFQValue31.remove();
    architectureDiagramVXUJARFQHelper4(
      architectureDiagramVXUJARFQParam3,
      architectureDiagramVXUJARFQValue32,
    );
    architectureDiagramVXUJARFQHelper1(
      architectureDiagramVXUJARFQParam1,
      architectureDiagramVXUJARFQValue32,
      architectureDiagramVXUJARFQParam5,
    );
    architectureDiagramVXUJARFQHelper2(
      architectureDiagramVXUJARFQParam2,
      architectureDiagramVXUJARFQValue32,
      architectureDiagramVXUJARFQParam5,
    );
    architectureDiagramVXUJARFQHelper5(
      architectureDiagramVXUJARFQParam4,
      architectureDiagramVXUJARFQValue32,
    );
    let architectureDiagramVXUJARFQValue33 = architectureDiagramVXUJARFQHelper6(
        architectureDiagramVXUJARFQParam5,
        spatialMaps,
        groupAlignments,
      ),
      architectureDiagramVXUJARFQValue34 = architectureDiagramVXUJARFQHelper7(
        spatialMaps,
        architectureDiagramVXUJARFQParam5,
      ),
      architectureDiagramVXUJARFQValue35 =
        architectureDiagramVXUJARFQValue32.layout({
          name: "fcose",
          quality: "proof",
          styleEnabled: false,
          animate: false,
          nodeDimensionsIncludeLabels: false,
          idealEdgeLength(architectureDiagramVXUJARFQParam59) {
            let [
                architectureDiagramVXUJARFQValue146,
                architectureDiagramVXUJARFQValue147,
              ] = architectureDiagramVXUJARFQParam59.connectedNodes(),
              { parent } = architectureDiagramVXUJARFQValue19(
                architectureDiagramVXUJARFQValue146,
              ),
              { parent: _parent } = architectureDiagramVXUJARFQValue19(
                architectureDiagramVXUJARFQValue147,
              );
            return parent === _parent
              ? 1.5 *
                  architectureDiagramVXUJARFQParam5.getConfigField("iconSize")
              : 0.5 *
                  architectureDiagramVXUJARFQParam5.getConfigField("iconSize");
          },
          edgeElasticity(architectureDiagramVXUJARFQParam65) {
            let [
                architectureDiagramVXUJARFQValue153,
                architectureDiagramVXUJARFQValue154,
              ] = architectureDiagramVXUJARFQParam65.connectedNodes(),
              { parent } = architectureDiagramVXUJARFQValue19(
                architectureDiagramVXUJARFQValue153,
              ),
              { parent: _parent } = architectureDiagramVXUJARFQValue19(
                architectureDiagramVXUJARFQValue154,
              );
            return parent === _parent ? 0.45 : 0.001;
          },
          alignmentConstraint: architectureDiagramVXUJARFQValue33,
          relativePlacementConstraint: architectureDiagramVXUJARFQValue34,
        });
    architectureDiagramVXUJARFQValue35.one("layoutstop", () => {
      function architectureDiagramVXUJARFQHelper8(
        architectureDiagramVXUJARFQParam23,
        architectureDiagramVXUJARFQParam24,
        architectureDiagramVXUJARFQParam25,
        architectureDiagramVXUJARFQParam26,
      ) {
        let architectureDiagramVXUJARFQValue80,
          architectureDiagramVXUJARFQValue81,
          { x, y } = architectureDiagramVXUJARFQParam23,
          { x: _x, y: _y } = architectureDiagramVXUJARFQParam24;
        architectureDiagramVXUJARFQValue81 =
          (architectureDiagramVXUJARFQParam26 -
            y +
            ((x - architectureDiagramVXUJARFQParam25) * (y - _y)) / (x - _x)) /
          Math.sqrt(1 + ((y - _y) / (x - _x)) ** 2);
        architectureDiagramVXUJARFQValue80 = Math.sqrt(
          (architectureDiagramVXUJARFQParam26 - y) ** 2 +
            (architectureDiagramVXUJARFQParam25 - x) ** 2 -
            architectureDiagramVXUJARFQValue81 ** 2,
        );
        let architectureDiagramVXUJARFQValue82 = Math.sqrt(
          (_x - x) ** 2 + (_y - y) ** 2,
        );
        architectureDiagramVXUJARFQValue80 /=
          architectureDiagramVXUJARFQValue82;
        let architectureDiagramVXUJARFQValue83 =
          (_x - x) * (architectureDiagramVXUJARFQParam26 - y) -
          (_y - y) * (architectureDiagramVXUJARFQParam25 - x);
        switch (true) {
          case architectureDiagramVXUJARFQValue83 >= 0:
            architectureDiagramVXUJARFQValue83 = 1;
            break;
          case architectureDiagramVXUJARFQValue83 < 0:
            architectureDiagramVXUJARFQValue83 = -1;
            break;
        }
        let architectureDiagramVXUJARFQValue84 =
          (_x - x) * (architectureDiagramVXUJARFQParam25 - x) +
          (_y - y) * (architectureDiagramVXUJARFQParam26 - y);
        switch (true) {
          case architectureDiagramVXUJARFQValue84 >= 0:
            architectureDiagramVXUJARFQValue84 = 1;
            break;
          case architectureDiagramVXUJARFQValue84 < 0:
            architectureDiagramVXUJARFQValue84 = -1;
            break;
        }
        return (
          (architectureDiagramVXUJARFQValue81 =
            Math.abs(architectureDiagramVXUJARFQValue81) *
            architectureDiagramVXUJARFQValue83),
          (architectureDiagramVXUJARFQValue80 *=
            architectureDiagramVXUJARFQValue84),
          {
            distances: architectureDiagramVXUJARFQValue81,
            weights: architectureDiagramVXUJARFQValue80,
          }
        );
      }
      chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper8, "getSegmentWeights");
      architectureDiagramVXUJARFQValue32.startBatch();
      for (let architectureDiagramVXUJARFQValue116 of Object.values(
        architectureDiagramVXUJARFQValue32.edges(),
      ))
        if (architectureDiagramVXUJARFQValue116.data?.()) {
          let { x, y } = architectureDiagramVXUJARFQValue116
              .source()
              .position(),
            { x: _x, y: _y } = architectureDiagramVXUJARFQValue116
              .target()
              .position();
          if (x !== _x && y !== _y) {
            let architectureDiagramVXUJARFQValue135 =
                architectureDiagramVXUJARFQValue116.sourceEndpoint(),
              architectureDiagramVXUJARFQValue136 =
                architectureDiagramVXUJARFQValue116.targetEndpoint(),
              { sourceDir } = architectureDiagramVXUJARFQValue18(
                architectureDiagramVXUJARFQValue116,
              ),
              [
                architectureDiagramVXUJARFQValue137,
                architectureDiagramVXUJARFQValue138,
              ] = architectureDiagramVXUJARFQValue8(sourceDir)
                ? [
                    architectureDiagramVXUJARFQValue135.x,
                    architectureDiagramVXUJARFQValue136.y,
                  ]
                : [
                    architectureDiagramVXUJARFQValue136.x,
                    architectureDiagramVXUJARFQValue135.y,
                  ],
              { weights, distances } = architectureDiagramVXUJARFQHelper8(
                architectureDiagramVXUJARFQValue135,
                architectureDiagramVXUJARFQValue136,
                architectureDiagramVXUJARFQValue137,
                architectureDiagramVXUJARFQValue138,
              );
            architectureDiagramVXUJARFQValue116.style(
              "segment-distances",
              distances,
            );
            architectureDiagramVXUJARFQValue116.style(
              "segment-weights",
              weights,
            );
          }
        }
      architectureDiagramVXUJARFQValue32.endBatch();
      architectureDiagramVXUJARFQValue35.run();
    });
    architectureDiagramVXUJARFQValue35.run();
    architectureDiagramVXUJARFQValue32.ready(
      (architectureDiagramVXUJARFQParam89) => {
        chunkAGHRB4JFR.info("Ready", architectureDiagramVXUJARFQParam89);
        architectureDiagramVXUJARFQParam6(architectureDiagramVXUJARFQValue32);
      },
    );
  });
}
chunkAGHRB4JFN($, "layoutArchitecture");
export const ArchitectureDiagramVXUJARFQ = {
  parser: architectureDiagramVXUJARFQValue23,
  get db() {
    return new architectureDiagramVXUJARFQValue21();
  },
  renderer: {
    draw: chunkAGHRB4JFN(
      async (
        architectureDiagramVXUJARFQParam33,
        architectureDiagramVXUJARFQParam34,
        architectureDiagramVXUJARFQParam35,
        architectureDiagramVXUJARFQParam36,
      ) => {
        let architectureDiagramVXUJARFQValue93 =
            architectureDiagramVXUJARFQParam36.db,
          architectureDiagramVXUJARFQValue94 =
            architectureDiagramVXUJARFQValue93.getServices(),
          architectureDiagramVXUJARFQValue95 =
            architectureDiagramVXUJARFQValue93.getJunctions(),
          architectureDiagramVXUJARFQValue96 =
            architectureDiagramVXUJARFQValue93.getGroups(),
          architectureDiagramVXUJARFQValue97 =
            architectureDiagramVXUJARFQValue93.getEdges(),
          architectureDiagramVXUJARFQValue98 =
            architectureDiagramVXUJARFQValue93.getDataStructures(),
          architectureDiagramVXUJARFQValue99 = chunkEXTU4WIE(
            architectureDiagramVXUJARFQParam34,
          ),
          architectureDiagramVXUJARFQValue100 =
            architectureDiagramVXUJARFQValue99.append("g");
        architectureDiagramVXUJARFQValue100.attr("class", "architecture-edges");
        let architectureDiagramVXUJARFQValue101 =
          architectureDiagramVXUJARFQValue99.append("g");
        architectureDiagramVXUJARFQValue101.attr(
          "class",
          "architecture-services",
        );
        let architectureDiagramVXUJARFQValue102 =
          architectureDiagramVXUJARFQValue99.append("g");
        architectureDiagramVXUJARFQValue102.attr(
          "class",
          "architecture-groups",
        );
        await architectureDiagramVXUJARFQValue29(
          architectureDiagramVXUJARFQValue93,
          architectureDiagramVXUJARFQValue101,
          architectureDiagramVXUJARFQValue94,
        );
        architectureDiagramVXUJARFQValue30(
          architectureDiagramVXUJARFQValue93,
          architectureDiagramVXUJARFQValue101,
          architectureDiagramVXUJARFQValue95,
        );
        let architectureDiagramVXUJARFQValue103 = await $(
          architectureDiagramVXUJARFQValue94,
          architectureDiagramVXUJARFQValue95,
          architectureDiagramVXUJARFQValue96,
          architectureDiagramVXUJARFQValue97,
          architectureDiagramVXUJARFQValue93,
          architectureDiagramVXUJARFQValue98,
        );
        await architectureDiagramVXUJARFQValue27(
          architectureDiagramVXUJARFQValue100,
          architectureDiagramVXUJARFQValue103,
          architectureDiagramVXUJARFQValue93,
        );
        await architectureDiagramVXUJARFQValue28(
          architectureDiagramVXUJARFQValue102,
          architectureDiagramVXUJARFQValue103,
          architectureDiagramVXUJARFQValue93,
        );
        architectureDiagramVXUJARFQHelper3(
          architectureDiagramVXUJARFQValue93,
          architectureDiagramVXUJARFQValue103,
        );
        _chunkABZYJK2DR(
          undefined,
          architectureDiagramVXUJARFQValue99,
          architectureDiagramVXUJARFQValue93.getConfigField("padding"),
          architectureDiagramVXUJARFQValue93.getConfigField("useMaxWidth"),
        );
      },
      "draw",
    ),
  },
  styles: architectureDiagramVXUJARFQValue24,
};
