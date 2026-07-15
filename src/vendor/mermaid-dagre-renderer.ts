// Restored from ref/webview/assets/dagre-6UL2VRFP-CS6q5ofU.js
// Flat boundary. Vendored dagre6UL2VRFP chunk restored from the Codex webview bundle.
import { _baseUniqM as baseUniqR } from "./lodash-base-uniq";
import { basePickByO as basePickByI } from "./lodash-base-pick-by";
import { Dagre } from "./dagre";
import { clone } from "./lodash-clone";
import { Graphlib } from "./graphlib";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DL as chunkABZYJK2DB } from "./katex-auto-render";
import { chunkCVBHYZKI } from "./mermaid-subgraph-title-margins";
import {
  chunkJZLCHNYAT as chunkJZLCHNYAA,
  chunkJZLCHNYAI as chunkJZLCHNYAC,
  chunkJZLCHNYAN as chunkJZLCHNYAI,
  chunkJZLCHNYAL,
  chunkJZLCHNYAC as chunkJZLCHNYAN,
  chunkJZLCHNYAS as chunkJZLCHNYAT,
  chunkJZLCHNYAU,
} from "./chunk-jzlchnya";
import {
  chunkQXUST7PYA,
  chunkQXUST7PYI,
  chunkQXUST7PYN,
  chunkQXUST7PYR,
  chunkQXUST7PYT,
} from "./mermaid-edge-renderer";
function dagre6UL2VRFPHelper1(dagre6UL2VRFPParam25) {
  var dagre6UL2VRFPValue66 = {
    options: {
      directed: dagre6UL2VRFPParam25.isDirected(),
      multigraph: dagre6UL2VRFPParam25.isMultigraph(),
      compound: dagre6UL2VRFPParam25.isCompound(),
    },
    nodes: dagre6UL2VRFPHelper2(dagre6UL2VRFPParam25),
    edges: dagre6UL2VRFPHelper3(dagre6UL2VRFPParam25),
  };
  return (
    baseUniqR(dagre6UL2VRFPParam25.graph()) ||
      (dagre6UL2VRFPValue66.value = clone(dagre6UL2VRFPParam25.graph())),
    dagre6UL2VRFPValue66
  );
}
function dagre6UL2VRFPHelper2(dagre6UL2VRFPParam28) {
  return basePickByI(
    dagre6UL2VRFPParam28.nodes(),
    function (dagre6UL2VRFPParam32) {
      var dagre6UL2VRFPValue71 =
          dagre6UL2VRFPParam28.node(dagre6UL2VRFPParam32),
        dagre6UL2VRFPValue72 =
          dagre6UL2VRFPParam28.parent(dagre6UL2VRFPParam32),
        dagre6UL2VRFPValue73 = {
          v: dagre6UL2VRFPParam32,
        };
      return (
        baseUniqR(dagre6UL2VRFPValue71) ||
          (dagre6UL2VRFPValue73.value = dagre6UL2VRFPValue71),
        baseUniqR(dagre6UL2VRFPValue72) ||
          (dagre6UL2VRFPValue73.parent = dagre6UL2VRFPValue72),
        dagre6UL2VRFPValue73
      );
    },
  );
}
function dagre6UL2VRFPHelper3(dagre6UL2VRFPParam29) {
  return basePickByI(
    dagre6UL2VRFPParam29.edges(),
    function (dagre6UL2VRFPParam33) {
      var dagre6UL2VRFPValue75 =
          dagre6UL2VRFPParam29.edge(dagre6UL2VRFPParam33),
        dagre6UL2VRFPValue76 = {
          v: dagre6UL2VRFPParam33.v,
          w: dagre6UL2VRFPParam33.w,
        };
      return (
        baseUniqR(dagre6UL2VRFPParam33.name) ||
          (dagre6UL2VRFPValue76.name = dagre6UL2VRFPParam33.name),
        baseUniqR(dagre6UL2VRFPValue75) ||
          (dagre6UL2VRFPValue76.value = dagre6UL2VRFPValue75),
        dagre6UL2VRFPValue76
      );
    },
  );
}
var dagre6UL2VRFPValue1 = new Map(),
  dagre6UL2VRFPValue2 = new Map(),
  dagre6UL2VRFPValue3 = new Map(),
  dagre6UL2VRFPValue4 = chunkAGHRB4JFN(() => {
    dagre6UL2VRFPValue2.clear();
    dagre6UL2VRFPValue3.clear();
    dagre6UL2VRFPValue1.clear();
  }, "clear"),
  dagre6UL2VRFPValue5 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam30, dagre6UL2VRFPParam31) => {
      let dagre6UL2VRFPValue70 =
        dagre6UL2VRFPValue2.get(dagre6UL2VRFPParam31) || [];
      return (
        chunkAGHRB4JFR.trace(
          "In isDescendant",
          dagre6UL2VRFPParam31,
          " ",
          dagre6UL2VRFPParam30,
          " = ",
          dagre6UL2VRFPValue70.includes(dagre6UL2VRFPParam30),
        ),
        dagre6UL2VRFPValue70.includes(dagre6UL2VRFPParam30)
      );
    },
    "isDescendant",
  ),
  dagre6UL2VRFPValue6 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam20, dagre6UL2VRFPParam21) => {
      let dagre6UL2VRFPValue63 =
        dagre6UL2VRFPValue2.get(dagre6UL2VRFPParam21) || [];
      return (
        chunkAGHRB4JFR.info(
          "Descendants of ",
          dagre6UL2VRFPParam21,
          " is ",
          dagre6UL2VRFPValue63,
        ),
        chunkAGHRB4JFR.info("Edge is ", dagre6UL2VRFPParam20),
        dagre6UL2VRFPParam20.v === dagre6UL2VRFPParam21 ||
        dagre6UL2VRFPParam20.w === dagre6UL2VRFPParam21
          ? false
          : dagre6UL2VRFPValue63
            ? dagre6UL2VRFPValue63.includes(dagre6UL2VRFPParam20.v) ||
              dagre6UL2VRFPValue5(
                dagre6UL2VRFPParam20.v,
                dagre6UL2VRFPParam21,
              ) ||
              dagre6UL2VRFPValue5(
                dagre6UL2VRFPParam20.w,
                dagre6UL2VRFPParam21,
              ) ||
              dagre6UL2VRFPValue63.includes(dagre6UL2VRFPParam20.w)
            : (chunkAGHRB4JFR.debug(
                "Tilt, ",
                dagre6UL2VRFPParam21,
                ",not in descendants",
              ),
              false)
      );
    },
    "edgeInCluster",
  ),
  dagre6UL2VRFPValue7 = chunkAGHRB4JFN(
    (
      dagre6UL2VRFPParam13,
      dagre6UL2VRFPParam14,
      dagre6UL2VRFPParam15,
      dagre6UL2VRFPParam16,
    ) => {
      chunkAGHRB4JFR.warn(
        "Copying children of ",
        dagre6UL2VRFPParam13,
        "root",
        dagre6UL2VRFPParam16,
        "data",
        dagre6UL2VRFPParam14.node(dagre6UL2VRFPParam13),
        dagre6UL2VRFPParam16,
      );
      let dagre6UL2VRFPValue29 =
        dagre6UL2VRFPParam14.children(dagre6UL2VRFPParam13) || [];
      dagre6UL2VRFPParam13 !== dagre6UL2VRFPParam16 &&
        dagre6UL2VRFPValue29.push(dagre6UL2VRFPParam13);
      chunkAGHRB4JFR.warn(
        "Copying (nodes) clusterId",
        dagre6UL2VRFPParam13,
        "nodes",
        dagre6UL2VRFPValue29,
      );
      dagre6UL2VRFPValue29.forEach((item) => {
        if (dagre6UL2VRFPParam14.children(item).length > 0)
          dagre6UL2VRFPValue7(
            item,
            dagre6UL2VRFPParam14,
            dagre6UL2VRFPParam15,
            dagre6UL2VRFPParam16,
          );
        else {
          let dagre6UL2VRFPValue33 = dagre6UL2VRFPParam14.node(item);
          chunkAGHRB4JFR.info(
            "cp ",
            item,
            " to ",
            dagre6UL2VRFPParam16,
            " with parent ",
            dagre6UL2VRFPParam13,
          );
          dagre6UL2VRFPParam15.setNode(item, dagre6UL2VRFPValue33);
          dagre6UL2VRFPParam16 !== dagre6UL2VRFPParam14.parent(item) &&
            (chunkAGHRB4JFR.warn(
              "Setting parent",
              item,
              dagre6UL2VRFPParam14.parent(item),
            ),
            dagre6UL2VRFPParam15.setParent(
              item,
              dagre6UL2VRFPParam14.parent(item),
            ));
          dagre6UL2VRFPParam13 !== dagre6UL2VRFPParam16 &&
          item !== dagre6UL2VRFPParam13
            ? (chunkAGHRB4JFR.debug(
                "Setting parent",
                item,
                dagre6UL2VRFPParam13,
              ),
              dagre6UL2VRFPParam15.setParent(item, dagre6UL2VRFPParam13))
            : (chunkAGHRB4JFR.info(
                "In copy ",
                dagre6UL2VRFPParam13,
                "root",
                dagre6UL2VRFPParam16,
                "data",
                dagre6UL2VRFPParam14.node(dagre6UL2VRFPParam13),
                dagre6UL2VRFPParam16,
              ),
              chunkAGHRB4JFR.debug(
                "Not Setting parent for node=",
                item,
                "cluster!==rootId",
                dagre6UL2VRFPParam13 !== dagre6UL2VRFPParam16,
                "node!==clusterId",
                item !== dagre6UL2VRFPParam13,
              ));
          let dagre6UL2VRFPValue34 = dagre6UL2VRFPParam14.edges(item);
          chunkAGHRB4JFR.debug("Copying Edges", dagre6UL2VRFPValue34);
          dagre6UL2VRFPValue34.forEach((_item) => {
            chunkAGHRB4JFR.info("Edge", _item);
            let dagre6UL2VRFPValue47 = dagre6UL2VRFPParam14.edge(
              _item.v,
              _item.w,
              _item.name,
            );
            chunkAGHRB4JFR.info(
              "Edge data",
              dagre6UL2VRFPValue47,
              dagre6UL2VRFPParam16,
            );
            try {
              dagre6UL2VRFPValue6(_item, dagre6UL2VRFPParam16)
                ? (chunkAGHRB4JFR.info(
                    "Copying as ",
                    _item.v,
                    _item.w,
                    dagre6UL2VRFPValue47,
                    _item.name,
                  ),
                  dagre6UL2VRFPParam15.setEdge(
                    _item.v,
                    _item.w,
                    dagre6UL2VRFPValue47,
                    _item.name,
                  ),
                  chunkAGHRB4JFR.info(
                    "newGraph edges ",
                    dagre6UL2VRFPParam15.edges(),
                    dagre6UL2VRFPParam15.edge(dagre6UL2VRFPParam15.edges()[0]),
                  ))
                : chunkAGHRB4JFR.info(
                    "Skipping copy of edge ",
                    _item.v,
                    "-->",
                    _item.w,
                    " rootId: ",
                    dagre6UL2VRFPParam16,
                    " clusterId:",
                    dagre6UL2VRFPParam13,
                  );
            } catch (dagre6UL2VRFPValue92) {
              chunkAGHRB4JFR.error(dagre6UL2VRFPValue92);
            }
          });
        }
        chunkAGHRB4JFR.debug("Removing node", item);
        dagre6UL2VRFPParam14.removeNode(item);
      });
    },
    "copy",
  ),
  dagre6UL2VRFPValue8 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam34, dagre6UL2VRFPParam35) => {
      let dagre6UL2VRFPValue79 =
          dagre6UL2VRFPParam35.children(dagre6UL2VRFPParam34),
        dagre6UL2VRFPValue80 = [...dagre6UL2VRFPValue79];
      for (let dagre6UL2VRFPValue91 of dagre6UL2VRFPValue79) {
        dagre6UL2VRFPValue3.set(dagre6UL2VRFPValue91, dagre6UL2VRFPParam34);
        dagre6UL2VRFPValue80 = [
          ...dagre6UL2VRFPValue80,
          ...dagre6UL2VRFPValue8(dagre6UL2VRFPValue91, dagre6UL2VRFPParam35),
        ];
      }
      return dagre6UL2VRFPValue80;
    },
    "extractDescendants",
  ),
  dagre6UL2VRFPValue9 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam17, dagre6UL2VRFPParam18, dagre6UL2VRFPParam19) => {
      let dagre6UL2VRFPValue59 = dagre6UL2VRFPParam17
          .edges()
          .filter(
            (item) =>
              item.v === dagre6UL2VRFPParam18 ||
              item.w === dagre6UL2VRFPParam18,
          ),
        dagre6UL2VRFPValue60 = dagre6UL2VRFPParam17
          .edges()
          .filter(
            (item) =>
              item.v === dagre6UL2VRFPParam19 ||
              item.w === dagre6UL2VRFPParam19,
          ),
        dagre6UL2VRFPValue61 = dagre6UL2VRFPValue59.map((item) => ({
          v: item.v === dagre6UL2VRFPParam18 ? dagre6UL2VRFPParam19 : item.v,
          w: item.w === dagre6UL2VRFPParam18 ? dagre6UL2VRFPParam18 : item.w,
        })),
        dagre6UL2VRFPValue62 = dagre6UL2VRFPValue60.map((item) => ({
          v: item.v,
          w: item.w,
        }));
      return dagre6UL2VRFPValue61.filter((item) =>
        dagre6UL2VRFPValue62.some(
          (_item) => item.v === _item.v && item.w === _item.w,
        ),
      );
    },
    "findCommonEdges",
  ),
  dagre6UL2VRFPValue10 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam22, dagre6UL2VRFPParam23, dagre6UL2VRFPParam24) => {
      let dagre6UL2VRFPValue64 =
        dagre6UL2VRFPParam23.children(dagre6UL2VRFPParam22);
      if (
        (chunkAGHRB4JFR.trace(
          "Searching children of id ",
          dagre6UL2VRFPParam22,
          dagre6UL2VRFPValue64,
        ),
        dagre6UL2VRFPValue64.length < 1)
      )
        return dagre6UL2VRFPParam22;
      let dagre6UL2VRFPValue65;
      for (let dagre6UL2VRFPValue74 of dagre6UL2VRFPValue64) {
        let dagre6UL2VRFPValue82 = dagre6UL2VRFPValue10(
            dagre6UL2VRFPValue74,
            dagre6UL2VRFPParam23,
            dagre6UL2VRFPParam24,
          ),
          dagre6UL2VRFPValue83 = dagre6UL2VRFPValue9(
            dagre6UL2VRFPParam23,
            dagre6UL2VRFPParam24,
            dagre6UL2VRFPValue82,
          );
        if (dagre6UL2VRFPValue82)
          if (dagre6UL2VRFPValue83.length > 0)
            dagre6UL2VRFPValue65 = dagre6UL2VRFPValue82;
          else return dagre6UL2VRFPValue82;
      }
      return dagre6UL2VRFPValue65;
    },
    "findNonClusterChild",
  ),
  dagre6UL2VRFPValue11 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam36) =>
      !dagre6UL2VRFPValue1.has(dagre6UL2VRFPParam36) ||
      !dagre6UL2VRFPValue1.get(dagre6UL2VRFPParam36).externalConnections
        ? dagre6UL2VRFPParam36
        : dagre6UL2VRFPValue1.has(dagre6UL2VRFPParam36)
          ? dagre6UL2VRFPValue1.get(dagre6UL2VRFPParam36).id
          : dagre6UL2VRFPParam36,
    "getAnchorId",
  ),
  dagre6UL2VRFPValue12 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam11, dagre6UL2VRFPParam12) => {
      if (!dagre6UL2VRFPParam11 || dagre6UL2VRFPParam12 > 10) {
        chunkAGHRB4JFR.debug("Opting out, no graph ");
        return;
      } else chunkAGHRB4JFR.debug("Opting in, graph ");
      dagre6UL2VRFPParam11.nodes().forEach(function (item) {
        dagre6UL2VRFPParam11.children(item).length > 0 &&
          (chunkAGHRB4JFR.warn(
            "Cluster identified",
            item,
            " Replacement id in edges: ",
            dagre6UL2VRFPValue10(item, dagre6UL2VRFPParam11, item),
          ),
          dagre6UL2VRFPValue2.set(
            item,
            dagre6UL2VRFPValue8(item, dagre6UL2VRFPParam11),
          ),
          dagre6UL2VRFPValue1.set(item, {
            id: dagre6UL2VRFPValue10(item, dagre6UL2VRFPParam11, item),
            clusterData: dagre6UL2VRFPParam11.node(item),
          }));
      });
      dagre6UL2VRFPParam11.nodes().forEach(function (item) {
        let dagre6UL2VRFPValue56 = dagre6UL2VRFPParam11.children(item),
          dagre6UL2VRFPValue57 = dagre6UL2VRFPParam11.edges();
        dagre6UL2VRFPValue56.length > 0
          ? (chunkAGHRB4JFR.debug(
              "Cluster identified",
              item,
              dagre6UL2VRFPValue2,
            ),
            dagre6UL2VRFPValue57.forEach((_item) => {
              dagre6UL2VRFPValue5(_item.v, item) ^
                dagre6UL2VRFPValue5(_item.w, item) &&
                (chunkAGHRB4JFR.warn("Edge: ", _item, " leaves cluster ", item),
                chunkAGHRB4JFR.warn(
                  "Descendants of XXX ",
                  item,
                  ": ",
                  dagre6UL2VRFPValue2.get(item),
                ),
                (dagre6UL2VRFPValue1.get(item).externalConnections = true));
            }))
          : chunkAGHRB4JFR.debug("Not a cluster ", item, dagre6UL2VRFPValue2);
      });
      for (let dagre6UL2VRFPValue69 of dagre6UL2VRFPValue1.keys()) {
        let dagre6UL2VRFPValue77 =
            dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue69).id,
          dagre6UL2VRFPValue78 =
            dagre6UL2VRFPParam11.parent(dagre6UL2VRFPValue77);
        dagre6UL2VRFPValue78 !== dagre6UL2VRFPValue69 &&
          dagre6UL2VRFPValue1.has(dagre6UL2VRFPValue78) &&
          !dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue78).externalConnections &&
          (dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue69).id =
            dagre6UL2VRFPValue78);
      }
      dagre6UL2VRFPParam11.edges().forEach(function (item) {
        let dagre6UL2VRFPValue42 = dagre6UL2VRFPParam11.edge(item);
        chunkAGHRB4JFR.warn(
          "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
        );
        chunkAGHRB4JFR.warn(
          "Edge " +
            item.v +
            " -> " +
            item.w +
            ": " +
            JSON.stringify(dagre6UL2VRFPParam11.edge(item)),
        );
        let dagre6UL2VRFPValue43 = item.v,
          dagre6UL2VRFPValue44 = item.w;
        if (
          (chunkAGHRB4JFR.warn(
            "Fix XXX",
            dagre6UL2VRFPValue1,
            "ids:",
            item.v,
            item.w,
            "Translating: ",
            dagre6UL2VRFPValue1.get(item.v),
            " --- ",
            dagre6UL2VRFPValue1.get(item.w),
          ),
          dagre6UL2VRFPValue1.get(item.v) || dagre6UL2VRFPValue1.get(item.w))
        ) {
          if (
            (chunkAGHRB4JFR.warn(
              "Fixing and trying - removing XXX",
              item.v,
              item.w,
              item.name,
            ),
            (dagre6UL2VRFPValue43 = dagre6UL2VRFPValue11(item.v)),
            (dagre6UL2VRFPValue44 = dagre6UL2VRFPValue11(item.w)),
            dagre6UL2VRFPParam11.removeEdge(item.v, item.w, item.name),
            dagre6UL2VRFPValue43 !== item.v)
          ) {
            let dagre6UL2VRFPValue84 =
              dagre6UL2VRFPParam11.parent(dagre6UL2VRFPValue43);
            dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue84).externalConnections =
              true;
            dagre6UL2VRFPValue42.fromCluster = item.v;
          }
          if (dagre6UL2VRFPValue44 !== item.w) {
            let dagre6UL2VRFPValue86 =
              dagre6UL2VRFPParam11.parent(dagre6UL2VRFPValue44);
            dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue86).externalConnections =
              true;
            dagre6UL2VRFPValue42.toCluster = item.w;
          }
          chunkAGHRB4JFR.warn(
            "Fix Replacing with XXX",
            dagre6UL2VRFPValue43,
            dagre6UL2VRFPValue44,
            item.name,
          );
          dagre6UL2VRFPParam11.setEdge(
            dagre6UL2VRFPValue43,
            dagre6UL2VRFPValue44,
            dagre6UL2VRFPValue42,
            item.name,
          );
        }
      });
      chunkAGHRB4JFR.warn(
        "Adjusted Graph",
        dagre6UL2VRFPHelper1(dagre6UL2VRFPParam11),
      );
      dagre6UL2VRFPValue13(dagre6UL2VRFPParam11, 0);
      chunkAGHRB4JFR.trace(dagre6UL2VRFPValue1);
    },
    "adjustClustersAndEdges",
  ),
  dagre6UL2VRFPValue13 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam9, dagre6UL2VRFPParam10) => {
      if (
        (chunkAGHRB4JFR.warn(
          "extractor - ",
          dagre6UL2VRFPParam10,
          dagre6UL2VRFPHelper1(dagre6UL2VRFPParam9),
          dagre6UL2VRFPParam9.children("D"),
        ),
        dagre6UL2VRFPParam10 > 10)
      ) {
        chunkAGHRB4JFR.error("Bailing out");
        return;
      }
      let dagre6UL2VRFPValue27 = dagre6UL2VRFPParam9.nodes(),
        dagre6UL2VRFPValue28 = false;
      for (let dagre6UL2VRFPValue88 of dagre6UL2VRFPValue27) {
        let dagre6UL2VRFPValue90 =
          dagre6UL2VRFPParam9.children(dagre6UL2VRFPValue88);
        dagre6UL2VRFPValue28 ||= dagre6UL2VRFPValue90.length > 0;
      }
      if (!dagre6UL2VRFPValue28) {
        chunkAGHRB4JFR.debug(
          "Done, no node has children",
          dagre6UL2VRFPParam9.nodes(),
        );
        return;
      }
      chunkAGHRB4JFR.debug(
        "Nodes = ",
        dagre6UL2VRFPValue27,
        dagre6UL2VRFPParam10,
      );
      for (let dagre6UL2VRFPValue30 of dagre6UL2VRFPValue27)
        if (
          (chunkAGHRB4JFR.debug(
            "Extracting node",
            dagre6UL2VRFPValue30,
            dagre6UL2VRFPValue1,
            dagre6UL2VRFPValue1.has(dagre6UL2VRFPValue30) &&
              !dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30)
                .externalConnections,
            !dagre6UL2VRFPParam9.parent(dagre6UL2VRFPValue30),
            dagre6UL2VRFPParam9.node(dagre6UL2VRFPValue30),
            dagre6UL2VRFPParam9.children("D"),
            " Depth ",
            dagre6UL2VRFPParam10,
          ),
          !dagre6UL2VRFPValue1.has(dagre6UL2VRFPValue30))
        )
          chunkAGHRB4JFR.debug(
            "Not a cluster",
            dagre6UL2VRFPValue30,
            dagre6UL2VRFPParam10,
          );
        else if (
          !dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).externalConnections &&
          dagre6UL2VRFPParam9.children(dagre6UL2VRFPValue30) &&
          dagre6UL2VRFPParam9.children(dagre6UL2VRFPValue30).length > 0
        ) {
          chunkAGHRB4JFR.warn(
            "Cluster without external connections, without a parent and with children",
            dagre6UL2VRFPValue30,
            dagre6UL2VRFPParam10,
          );
          let dagre6UL2VRFPValue45 =
            dagre6UL2VRFPParam9.graph().rankdir === "TB" ? "LR" : "TB";
          dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30)?.clusterData?.dir &&
            ((dagre6UL2VRFPValue45 =
              dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).clusterData.dir),
            chunkAGHRB4JFR.warn(
              "Fixing dir",
              dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).clusterData.dir,
              dagre6UL2VRFPValue45,
            ));
          let dagre6UL2VRFPValue46 = new Graphlib({
            multigraph: true,
            compound: true,
          })
            .setGraph({
              rankdir: dagre6UL2VRFPValue45,
              nodesep: 50,
              ranksep: 50,
              marginx: 8,
              marginy: 8,
            })
            .setDefaultEdgeLabel(function () {
              return {};
            });
          chunkAGHRB4JFR.warn(
            "Old graph before copy",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPParam9),
          );
          dagre6UL2VRFPValue7(
            dagre6UL2VRFPValue30,
            dagre6UL2VRFPParam9,
            dagre6UL2VRFPValue46,
            dagre6UL2VRFPValue30,
          );
          dagre6UL2VRFPParam9.setNode(dagre6UL2VRFPValue30, {
            clusterNode: true,
            id: dagre6UL2VRFPValue30,
            clusterData:
              dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).clusterData,
            label: dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).label,
            graph: dagre6UL2VRFPValue46,
          });
          chunkAGHRB4JFR.warn(
            "New graph after copy node: (",
            dagre6UL2VRFPValue30,
            ")",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPValue46),
          );
          chunkAGHRB4JFR.debug(
            "Old graph after copy",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPParam9),
          );
        } else {
          chunkAGHRB4JFR.warn(
            "Cluster ** ",
            dagre6UL2VRFPValue30,
            " **not meeting the criteria !externalConnections:",
            !dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue30).externalConnections,
            " no parent: ",
            !dagre6UL2VRFPParam9.parent(dagre6UL2VRFPValue30),
            " children ",
            dagre6UL2VRFPParam9.children(dagre6UL2VRFPValue30) &&
              dagre6UL2VRFPParam9.children(dagre6UL2VRFPValue30).length > 0,
            dagre6UL2VRFPParam9.children("D"),
            dagre6UL2VRFPParam10,
          );
          chunkAGHRB4JFR.debug(dagre6UL2VRFPValue1);
        }
      dagre6UL2VRFPValue27 = dagre6UL2VRFPParam9.nodes();
      chunkAGHRB4JFR.warn("New list of nodes", dagre6UL2VRFPValue27);
      for (let dagre6UL2VRFPValue81 of dagre6UL2VRFPValue27) {
        let dagre6UL2VRFPValue87 =
          dagre6UL2VRFPParam9.node(dagre6UL2VRFPValue81);
        chunkAGHRB4JFR.warn(
          " Now next level",
          dagre6UL2VRFPValue81,
          dagre6UL2VRFPValue87,
        );
        dagre6UL2VRFPValue87?.clusterNode &&
          dagre6UL2VRFPValue13(
            dagre6UL2VRFPValue87.graph,
            dagre6UL2VRFPParam10 + 1,
          );
      }
    },
    "extractor",
  ),
  dagre6UL2VRFPValue14 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam26, dagre6UL2VRFPParam27) => {
      if (dagre6UL2VRFPParam27.length === 0) return [];
      let dagre6UL2VRFPValue68 = Object.assign([], dagre6UL2VRFPParam27);
      return (
        dagre6UL2VRFPParam27.forEach((item) => {
          let dagre6UL2VRFPValue89 = dagre6UL2VRFPValue14(
            dagre6UL2VRFPParam26,
            dagre6UL2VRFPParam26.children(item),
          );
          dagre6UL2VRFPValue68 = [
            ...dagre6UL2VRFPValue68,
            ...dagre6UL2VRFPValue89,
          ];
        }),
        dagre6UL2VRFPValue68
      );
    },
    "sorter",
  ),
  dagre6UL2VRFPValue15 = chunkAGHRB4JFN(
    (dagre6UL2VRFPParam37) =>
      dagre6UL2VRFPValue14(
        dagre6UL2VRFPParam37,
        dagre6UL2VRFPParam37.children(),
      ),
    "sortNodesByHierarchy",
  ),
  dagre6UL2VRFPValue16 = chunkAGHRB4JFN(
    async (
      dagre6UL2VRFPParam1,
      dagre6UL2VRFPParam2,
      dagre6UL2VRFPParam3,
      dagre6UL2VRFPParam4,
      dagre6UL2VRFPParam5,
      dagre6UL2VRFPParam6,
    ) => {
      chunkAGHRB4JFR.warn(
        "Graph in recursive render:XAX",
        dagre6UL2VRFPHelper1(dagre6UL2VRFPParam2),
        dagre6UL2VRFPParam5,
      );
      let dagre6UL2VRFPValue17 = dagre6UL2VRFPParam2.graph().rankdir;
      chunkAGHRB4JFR.trace(
        "Dir in recursive render - dir:",
        dagre6UL2VRFPValue17,
      );
      let dagre6UL2VRFPValue18 = dagre6UL2VRFPParam1
        .insert("g")
        .attr("class", "root");
      dagre6UL2VRFPParam2.nodes()
        ? chunkAGHRB4JFR.info(
            "Recursive render XXX",
            dagre6UL2VRFPParam2.nodes(),
          )
        : chunkAGHRB4JFR.info("No nodes found for", dagre6UL2VRFPParam2);
      dagre6UL2VRFPParam2.edges().length > 0 &&
        chunkAGHRB4JFR.info(
          "Recursive edges",
          dagre6UL2VRFPParam2.edge(dagre6UL2VRFPParam2.edges()[0]),
        );
      let dagre6UL2VRFPValue19 = dagre6UL2VRFPValue18
          .insert("g")
          .attr("class", "clusters"),
        dagre6UL2VRFPValue20 = dagre6UL2VRFPValue18
          .insert("g")
          .attr("class", "edgePaths"),
        dagre6UL2VRFPValue21 = dagre6UL2VRFPValue18
          .insert("g")
          .attr("class", "edgeLabels"),
        dagre6UL2VRFPValue22 = dagre6UL2VRFPValue18
          .insert("g")
          .attr("class", "nodes");
      await Promise.all(
        dagre6UL2VRFPParam2.nodes().map(async function (item) {
          let dagre6UL2VRFPValue32 = dagre6UL2VRFPParam2.node(item);
          if (dagre6UL2VRFPParam5 !== undefined) {
            let dagre6UL2VRFPValue58 = JSON.parse(
              JSON.stringify(dagre6UL2VRFPParam5.clusterData),
            );
            chunkAGHRB4JFR.trace(
              "Setting data for parent cluster XXX\n Node.id = ",
              item,
              "\n data=",
              dagre6UL2VRFPValue58.height,
              "\nParent cluster",
              dagre6UL2VRFPParam5.height,
            );
            dagre6UL2VRFPParam2.setNode(
              dagre6UL2VRFPParam5.id,
              dagre6UL2VRFPValue58,
            );
            dagre6UL2VRFPParam2.parent(item) ||
              (chunkAGHRB4JFR.trace(
                "Setting parent",
                item,
                dagre6UL2VRFPParam5.id,
              ),
              dagre6UL2VRFPParam2.setParent(
                item,
                dagre6UL2VRFPParam5.id,
                dagre6UL2VRFPValue58,
              ));
          }
          if (
            (chunkAGHRB4JFR.info(
              "(Insert) Node XXX" +
                item +
                ": " +
                JSON.stringify(dagre6UL2VRFPParam2.node(item)),
            ),
            dagre6UL2VRFPValue32?.clusterNode)
          ) {
            chunkAGHRB4JFR.info(
              "Cluster identified XBX",
              item,
              dagre6UL2VRFPValue32.width,
              dagre6UL2VRFPParam2.node(item),
            );
            let { ranksep, nodesep } = dagre6UL2VRFPParam2.graph();
            dagre6UL2VRFPValue32.graph.setGraph({
              ...dagre6UL2VRFPValue32.graph.graph(),
              ranksep: ranksep + 25,
              nodesep,
            });
            let dagre6UL2VRFPValue49 = await dagre6UL2VRFPValue16(
                dagre6UL2VRFPValue22,
                dagre6UL2VRFPValue32.graph,
                dagre6UL2VRFPParam3,
                dagre6UL2VRFPParam4,
                dagre6UL2VRFPParam2.node(item),
                dagre6UL2VRFPParam6,
              ),
              dagre6UL2VRFPValue50 = dagre6UL2VRFPValue49.elem;
            chunkJZLCHNYAU(dagre6UL2VRFPValue32, dagre6UL2VRFPValue50);
            dagre6UL2VRFPValue32.diff = dagre6UL2VRFPValue49.diff || 0;
            chunkAGHRB4JFR.info(
              "New compound node after recursive render XAX",
              item,
              "width",
              dagre6UL2VRFPValue32.width,
              "height",
              dagre6UL2VRFPValue32.height,
            );
            chunkJZLCHNYAL(dagre6UL2VRFPValue50, dagre6UL2VRFPValue32);
          } else
            dagre6UL2VRFPParam2.children(item).length > 0
              ? (chunkAGHRB4JFR.trace(
                  "Cluster - the non recursive path XBX",
                  item,
                  dagre6UL2VRFPValue32.id,
                  dagre6UL2VRFPValue32,
                  dagre6UL2VRFPValue32.width,
                  "Graph:",
                  dagre6UL2VRFPParam2,
                ),
                chunkAGHRB4JFR.trace(
                  dagre6UL2VRFPValue10(
                    dagre6UL2VRFPValue32.id,
                    dagre6UL2VRFPParam2,
                  ),
                ),
                dagre6UL2VRFPValue1.set(dagre6UL2VRFPValue32.id, {
                  id: dagre6UL2VRFPValue10(
                    dagre6UL2VRFPValue32.id,
                    dagre6UL2VRFPParam2,
                  ),
                  node: dagre6UL2VRFPValue32,
                }))
              : (chunkAGHRB4JFR.trace(
                  "Node - the non recursive path XAX",
                  item,
                  dagre6UL2VRFPValue22,
                  dagre6UL2VRFPParam2.node(item),
                  dagre6UL2VRFPValue17,
                ),
                await chunkJZLCHNYAA(
                  dagre6UL2VRFPValue22,
                  dagre6UL2VRFPParam2.node(item),
                  {
                    config: dagre6UL2VRFPParam6,
                    dir: dagre6UL2VRFPValue17,
                  },
                ));
        }),
      );
      await chunkAGHRB4JFN(async () => {
        let dagre6UL2VRFPValue48 = dagre6UL2VRFPParam2
          .edges()
          .map(async function (item) {
            let dagre6UL2VRFPValue54 = dagre6UL2VRFPParam2.edge(
              item.v,
              item.w,
              item.name,
            );
            chunkAGHRB4JFR.info(
              "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
            );
            chunkAGHRB4JFR.info(
              "Edge " + item.v + " -> " + item.w + ": ",
              item,
              " ",
              JSON.stringify(dagre6UL2VRFPParam2.edge(item)),
            );
            chunkAGHRB4JFR.info(
              "Fix",
              dagre6UL2VRFPValue1,
              "ids:",
              item.v,
              item.w,
              "Translating: ",
              dagre6UL2VRFPValue1.get(item.v),
              dagre6UL2VRFPValue1.get(item.w),
            );
            await chunkQXUST7PYR(dagre6UL2VRFPValue21, dagre6UL2VRFPValue54);
          });
        await Promise.all(dagre6UL2VRFPValue48);
      }, "processEdges")();
      chunkAGHRB4JFR.info(
        "Graph before layout:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPParam2)),
      );
      chunkAGHRB4JFR.info("############################################# XXX");
      chunkAGHRB4JFR.info("###                Layout                 ### XXX");
      chunkAGHRB4JFR.info("############################################# XXX");
      Dagre(dagre6UL2VRFPParam2);
      chunkAGHRB4JFR.info(
        "Graph after layout:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPParam2)),
      );
      let dagre6UL2VRFPValue23 = 0,
        { subGraphTitleTotalMargin } = chunkCVBHYZKI(dagre6UL2VRFPParam6);
      return (
        await Promise.all(
          dagre6UL2VRFPValue15(dagre6UL2VRFPParam2).map(async function (item) {
            let dagre6UL2VRFPValue31 = dagre6UL2VRFPParam2.node(item);
            if (
              (chunkAGHRB4JFR.info(
                "Position XBX => " + item + ": (" + dagre6UL2VRFPValue31.x,
                "," + dagre6UL2VRFPValue31.y,
                ") width: ",
                dagre6UL2VRFPValue31.width,
                " height: ",
                dagre6UL2VRFPValue31.height,
              ),
              dagre6UL2VRFPValue31?.clusterNode)
            ) {
              dagre6UL2VRFPValue31.y += subGraphTitleTotalMargin;
              chunkAGHRB4JFR.info(
                "A tainted cluster node XBX1",
                item,
                dagre6UL2VRFPValue31.id,
                dagre6UL2VRFPValue31.width,
                dagre6UL2VRFPValue31.height,
                dagre6UL2VRFPValue31.x,
                dagre6UL2VRFPValue31.y,
                dagre6UL2VRFPParam2.parent(item),
              );
              dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue31.id).node =
                dagre6UL2VRFPValue31;
              chunkJZLCHNYAC(dagre6UL2VRFPValue31);
            } else if (dagre6UL2VRFPParam2.children(item).length > 0) {
              chunkAGHRB4JFR.info(
                "A pure cluster node XBX1",
                item,
                dagre6UL2VRFPValue31.id,
                dagre6UL2VRFPValue31.x,
                dagre6UL2VRFPValue31.y,
                dagre6UL2VRFPValue31.width,
                dagre6UL2VRFPValue31.height,
                dagre6UL2VRFPParam2.parent(item),
              );
              dagre6UL2VRFPValue31.height += subGraphTitleTotalMargin;
              dagre6UL2VRFPParam2.node(dagre6UL2VRFPValue31.parentId);
              let dagre6UL2VRFPValue51 = dagre6UL2VRFPValue31?.padding / 2 || 0,
                dagre6UL2VRFPValue52 =
                  dagre6UL2VRFPValue31?.labelBBox?.height || 0,
                dagre6UL2VRFPValue53 =
                  dagre6UL2VRFPValue52 - dagre6UL2VRFPValue51 || 0;
              chunkAGHRB4JFR.debug(
                "OffsetY",
                dagre6UL2VRFPValue53,
                "labelHeight",
                dagre6UL2VRFPValue52,
                "halfPadding",
                dagre6UL2VRFPValue51,
              );
              await chunkJZLCHNYAI(dagre6UL2VRFPValue19, dagre6UL2VRFPValue31);
              dagre6UL2VRFPValue1.get(dagre6UL2VRFPValue31.id).node =
                dagre6UL2VRFPValue31;
            } else {
              let dagre6UL2VRFPValue55 = dagre6UL2VRFPParam2.node(
                dagre6UL2VRFPValue31.parentId,
              );
              dagre6UL2VRFPValue31.y += subGraphTitleTotalMargin / 2;
              chunkAGHRB4JFR.info(
                "A regular node XBX1 - using the padding",
                dagre6UL2VRFPValue31.id,
                "parent",
                dagre6UL2VRFPValue31.parentId,
                dagre6UL2VRFPValue31.width,
                dagre6UL2VRFPValue31.height,
                dagre6UL2VRFPValue31.x,
                dagre6UL2VRFPValue31.y,
                "offsetY",
                dagre6UL2VRFPValue31.offsetY,
                "parent",
                dagre6UL2VRFPValue55,
                dagre6UL2VRFPValue55?.offsetY,
                dagre6UL2VRFPValue31,
              );
              chunkJZLCHNYAC(dagre6UL2VRFPValue31);
            }
          }),
        ),
        dagre6UL2VRFPParam2.edges().forEach(function (item) {
          let dagre6UL2VRFPValue67 = dagre6UL2VRFPParam2.edge(item);
          chunkAGHRB4JFR.info(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(dagre6UL2VRFPValue67),
            dagre6UL2VRFPValue67,
          );
          dagre6UL2VRFPValue67.points.forEach(
            (_item) => (_item.y += subGraphTitleTotalMargin / 2),
          );
          chunkQXUST7PYA(
            dagre6UL2VRFPValue67,
            chunkQXUST7PYN(
              dagre6UL2VRFPValue20,
              dagre6UL2VRFPValue67,
              dagre6UL2VRFPValue1,
              dagre6UL2VRFPParam3,
              dagre6UL2VRFPParam2.node(item.v),
              dagre6UL2VRFPParam2.node(item.w),
              dagre6UL2VRFPParam4,
            ),
          );
        }),
        dagre6UL2VRFPParam2.nodes().forEach(function (item) {
          let dagre6UL2VRFPValue85 = dagre6UL2VRFPParam2.node(item);
          chunkAGHRB4JFR.info(
            item,
            dagre6UL2VRFPValue85.type,
            dagre6UL2VRFPValue85.diff,
          );
          dagre6UL2VRFPValue85.isGroup &&
            (dagre6UL2VRFPValue23 = dagre6UL2VRFPValue85.diff);
        }),
        chunkAGHRB4JFR.warn(
          "Returning from recursive render XAX",
          dagre6UL2VRFPValue18,
          dagre6UL2VRFPValue23,
        ),
        {
          elem: dagre6UL2VRFPValue18,
          diff: dagre6UL2VRFPValue23,
        }
      );
    },
    "recursiveRender",
  );
export const dagre6UL2VRFP = chunkAGHRB4JFN(
  async (dagre6UL2VRFPParam7, dagre6UL2VRFPParam8) => {
    let dagre6UL2VRFPValue24 = new Graphlib({
        multigraph: true,
        compound: true,
      })
        .setGraph({
          rankdir: dagre6UL2VRFPParam7.direction,
          nodesep:
            dagre6UL2VRFPParam7.config?.nodeSpacing ||
            dagre6UL2VRFPParam7.config?.flowchart?.nodeSpacing ||
            dagre6UL2VRFPParam7.nodeSpacing,
          ranksep:
            dagre6UL2VRFPParam7.config?.rankSpacing ||
            dagre6UL2VRFPParam7.config?.flowchart?.rankSpacing ||
            dagre6UL2VRFPParam7.rankSpacing,
          marginx: 8,
          marginy: 8,
        })
        .setDefaultEdgeLabel(function () {
          return {};
        }),
      dagre6UL2VRFPValue25 = dagre6UL2VRFPParam8.select("g");
    chunkQXUST7PYI(
      dagre6UL2VRFPValue25,
      dagre6UL2VRFPParam7.markers,
      dagre6UL2VRFPParam7.type,
      dagre6UL2VRFPParam7.diagramId,
    );
    chunkJZLCHNYAN();
    chunkQXUST7PYT();
    chunkJZLCHNYAT();
    dagre6UL2VRFPValue4();
    dagre6UL2VRFPParam7.nodes.forEach((item) => {
      dagre6UL2VRFPValue24.setNode(item.id, {
        ...item,
      });
      item.parentId && dagre6UL2VRFPValue24.setParent(item.id, item.parentId);
    });
    chunkAGHRB4JFR.debug("Edges:", dagre6UL2VRFPParam7.edges);
    dagre6UL2VRFPParam7.edges.forEach((item) => {
      if (item.start === item.end) {
        let dagre6UL2VRFPValue35 = item.start,
          dagre6UL2VRFPValue36 =
            dagre6UL2VRFPValue35 + "---" + dagre6UL2VRFPValue35 + "---1",
          dagre6UL2VRFPValue37 =
            dagre6UL2VRFPValue35 + "---" + dagre6UL2VRFPValue35 + "---2",
          dagre6UL2VRFPValue38 =
            dagre6UL2VRFPValue24.node(dagre6UL2VRFPValue35);
        dagre6UL2VRFPValue24.setNode(dagre6UL2VRFPValue36, {
          domId: dagre6UL2VRFPValue36,
          id: dagre6UL2VRFPValue36,
          parentId: dagre6UL2VRFPValue38.parentId,
          labelStyle: "",
          label: "",
          padding: 0,
          shape: "labelRect",
          style: "",
          width: 10,
          height: 10,
        });
        dagre6UL2VRFPValue24.setParent(
          dagre6UL2VRFPValue36,
          dagre6UL2VRFPValue38.parentId,
        );
        dagre6UL2VRFPValue24.setNode(dagre6UL2VRFPValue37, {
          domId: dagre6UL2VRFPValue37,
          id: dagre6UL2VRFPValue37,
          parentId: dagre6UL2VRFPValue38.parentId,
          labelStyle: "",
          padding: 0,
          shape: "labelRect",
          label: "",
          style: "",
          width: 10,
          height: 10,
        });
        dagre6UL2VRFPValue24.setParent(
          dagre6UL2VRFPValue37,
          dagre6UL2VRFPValue38.parentId,
        );
        let dagre6UL2VRFPValue39 = structuredClone(item),
          dagre6UL2VRFPValue40 = structuredClone(item),
          dagre6UL2VRFPValue41 = structuredClone(item);
        dagre6UL2VRFPValue39.label = "";
        dagre6UL2VRFPValue39.arrowTypeEnd = "none";
        dagre6UL2VRFPValue39.id = dagre6UL2VRFPValue35 + "-cyclic-special-1";
        dagre6UL2VRFPValue40.arrowTypeStart = "none";
        dagre6UL2VRFPValue40.arrowTypeEnd = "none";
        dagre6UL2VRFPValue40.id = dagre6UL2VRFPValue35 + "-cyclic-special-mid";
        dagre6UL2VRFPValue41.label = "";
        dagre6UL2VRFPValue38.isGroup &&
          ((dagre6UL2VRFPValue39.fromCluster = dagre6UL2VRFPValue35),
          (dagre6UL2VRFPValue41.toCluster = dagre6UL2VRFPValue35));
        dagre6UL2VRFPValue41.id = dagre6UL2VRFPValue35 + "-cyclic-special-2";
        dagre6UL2VRFPValue41.arrowTypeStart = "none";
        dagre6UL2VRFPValue24.setEdge(
          dagre6UL2VRFPValue35,
          dagre6UL2VRFPValue36,
          dagre6UL2VRFPValue39,
          dagre6UL2VRFPValue35 + "-cyclic-special-0",
        );
        dagre6UL2VRFPValue24.setEdge(
          dagre6UL2VRFPValue36,
          dagre6UL2VRFPValue37,
          dagre6UL2VRFPValue40,
          dagre6UL2VRFPValue35 + "-cyclic-special-1",
        );
        dagre6UL2VRFPValue24.setEdge(
          dagre6UL2VRFPValue37,
          dagre6UL2VRFPValue35,
          dagre6UL2VRFPValue41,
          dagre6UL2VRFPValue35 + "-cyc<lic-special-2",
        );
      } else
        dagre6UL2VRFPValue24.setEdge(
          item.start,
          item.end,
          {
            ...item,
          },
          item.id,
        );
    });
    chunkAGHRB4JFR.warn(
      "Graph at first:",
      JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPValue24)),
    );
    dagre6UL2VRFPValue12(dagre6UL2VRFPValue24);
    chunkAGHRB4JFR.warn(
      "Graph after XAX:",
      JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPValue24)),
    );
    let dagre6UL2VRFPValue26 = chunkABZYJK2DB();
    await dagre6UL2VRFPValue16(
      dagre6UL2VRFPValue25,
      dagre6UL2VRFPValue24,
      dagre6UL2VRFPParam7.type,
      dagre6UL2VRFPParam7.diagramId,
      undefined,
      dagre6UL2VRFPValue26,
    );
  },
  "render",
);
