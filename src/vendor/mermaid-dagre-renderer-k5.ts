// Restored from ref/webview/assets/dagre-KV5264BT-wPJhnht8.js
// Flat boundary. Vendored dagreKV5264BT chunk restored from the Codex webview bundle.
import { flattenA } from "./lodash-flatten";
import { unionN } from "./lodash-union";
import { clone } from "./lodash-clone-deep";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { _chunkICPOFSXXB } from "./chunk-icpofsxx";
import { chunkZZ45TVLEN } from "./chunk-zz45tvle";
import { Graphlib } from "./graphlib-alt";
import {
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RC,
  chunk5FUZZQ4RI,
  chunk5FUZZQ4RL,
  chunk5FUZZQ4RN,
  chunk5FUZZQ4RT,
  chunk5FUZZQ4RU,
} from "./mermaid-shape-renderer";
import {
  chunkENJZ2VHEA,
  chunkENJZ2VHEI,
  chunkENJZ2VHEN,
  chunkENJZ2VHER,
  chunkENJZ2VHET,
} from "./mermaid-edge-renderer-k5";
import { Dagre } from "./dagre-alt";
function dagreKV5264BTHelper1(dagreKV5264BTParam25) {
  var dagreKV5264BTValue66 = {
    options: {
      directed: dagreKV5264BTParam25.isDirected(),
      multigraph: dagreKV5264BTParam25.isMultigraph(),
      compound: dagreKV5264BTParam25.isCompound(),
    },
    nodes: dagreKV5264BTHelper2(dagreKV5264BTParam25),
    edges: dagreKV5264BTHelper3(dagreKV5264BTParam25),
  };
  return (
    unionN(dagreKV5264BTParam25.graph()) ||
      (dagreKV5264BTValue66.value = clone(dagreKV5264BTParam25.graph())),
    dagreKV5264BTValue66
  );
}
function dagreKV5264BTHelper2(dagreKV5264BTParam28) {
  return flattenA(
    dagreKV5264BTParam28.nodes(),
    function (dagreKV5264BTParam32) {
      var dagreKV5264BTValue71 =
          dagreKV5264BTParam28.node(dagreKV5264BTParam32),
        dagreKV5264BTValue72 =
          dagreKV5264BTParam28.parent(dagreKV5264BTParam32),
        dagreKV5264BTValue73 = {
          v: dagreKV5264BTParam32,
        };
      return (
        unionN(dagreKV5264BTValue71) ||
          (dagreKV5264BTValue73.value = dagreKV5264BTValue71),
        unionN(dagreKV5264BTValue72) ||
          (dagreKV5264BTValue73.parent = dagreKV5264BTValue72),
        dagreKV5264BTValue73
      );
    },
  );
}
function dagreKV5264BTHelper3(dagreKV5264BTParam29) {
  return flattenA(
    dagreKV5264BTParam29.edges(),
    function (dagreKV5264BTParam33) {
      var dagreKV5264BTValue75 =
          dagreKV5264BTParam29.edge(dagreKV5264BTParam33),
        dagreKV5264BTValue76 = {
          v: dagreKV5264BTParam33.v,
          w: dagreKV5264BTParam33.w,
        };
      return (
        unionN(dagreKV5264BTParam33.name) ||
          (dagreKV5264BTValue76.name = dagreKV5264BTParam33.name),
        unionN(dagreKV5264BTValue75) ||
          (dagreKV5264BTValue76.value = dagreKV5264BTValue75),
        dagreKV5264BTValue76
      );
    },
  );
}
var dagreKV5264BTValue1 = new Map(),
  dagreKV5264BTValue2 = new Map(),
  dagreKV5264BTValue3 = new Map(),
  dagreKV5264BTValue4 = chunkAGHRB4JFN(() => {
    dagreKV5264BTValue2.clear();
    dagreKV5264BTValue3.clear();
    dagreKV5264BTValue1.clear();
  }, "clear"),
  dagreKV5264BTValue5 = chunkAGHRB4JFN(
    (dagreKV5264BTParam30, dagreKV5264BTParam31) => {
      let dagreKV5264BTValue70 =
        dagreKV5264BTValue2.get(dagreKV5264BTParam31) || [];
      return (
        chunkAGHRB4JFR.trace(
          "In isDescendant",
          dagreKV5264BTParam31,
          " ",
          dagreKV5264BTParam30,
          " = ",
          dagreKV5264BTValue70.includes(dagreKV5264BTParam30),
        ),
        dagreKV5264BTValue70.includes(dagreKV5264BTParam30)
      );
    },
    "isDescendant",
  ),
  dagreKV5264BTValue6 = chunkAGHRB4JFN(
    (dagreKV5264BTParam20, dagreKV5264BTParam21) => {
      let dagreKV5264BTValue63 =
        dagreKV5264BTValue2.get(dagreKV5264BTParam21) || [];
      return (
        chunkAGHRB4JFR.info(
          "Descendants of ",
          dagreKV5264BTParam21,
          " is ",
          dagreKV5264BTValue63,
        ),
        chunkAGHRB4JFR.info("Edge is ", dagreKV5264BTParam20),
        dagreKV5264BTParam20.v === dagreKV5264BTParam21 ||
        dagreKV5264BTParam20.w === dagreKV5264BTParam21
          ? false
          : dagreKV5264BTValue63
            ? dagreKV5264BTValue63.includes(dagreKV5264BTParam20.v) ||
              dagreKV5264BTValue5(
                dagreKV5264BTParam20.v,
                dagreKV5264BTParam21,
              ) ||
              dagreKV5264BTValue5(
                dagreKV5264BTParam20.w,
                dagreKV5264BTParam21,
              ) ||
              dagreKV5264BTValue63.includes(dagreKV5264BTParam20.w)
            : (chunkAGHRB4JFR.debug(
                "Tilt, ",
                dagreKV5264BTParam21,
                ",not in descendants",
              ),
              false)
      );
    },
    "edgeInCluster",
  ),
  dagreKV5264BTValue7 = chunkAGHRB4JFN(
    (
      dagreKV5264BTParam13,
      dagreKV5264BTParam14,
      dagreKV5264BTParam15,
      dagreKV5264BTParam16,
    ) => {
      chunkAGHRB4JFR.warn(
        "Copying children of ",
        dagreKV5264BTParam13,
        "root",
        dagreKV5264BTParam16,
        "data",
        dagreKV5264BTParam14.node(dagreKV5264BTParam13),
        dagreKV5264BTParam16,
      );
      let dagreKV5264BTValue29 =
        dagreKV5264BTParam14.children(dagreKV5264BTParam13) || [];
      dagreKV5264BTParam13 !== dagreKV5264BTParam16 &&
        dagreKV5264BTValue29.push(dagreKV5264BTParam13);
      chunkAGHRB4JFR.warn(
        "Copying (nodes) clusterId",
        dagreKV5264BTParam13,
        "nodes",
        dagreKV5264BTValue29,
      );
      dagreKV5264BTValue29.forEach((item) => {
        if (dagreKV5264BTParam14.children(item).length > 0)
          dagreKV5264BTValue7(
            item,
            dagreKV5264BTParam14,
            dagreKV5264BTParam15,
            dagreKV5264BTParam16,
          );
        else {
          let dagreKV5264BTValue33 = dagreKV5264BTParam14.node(item);
          chunkAGHRB4JFR.info(
            "cp ",
            item,
            " to ",
            dagreKV5264BTParam16,
            " with parent ",
            dagreKV5264BTParam13,
          );
          dagreKV5264BTParam15.setNode(item, dagreKV5264BTValue33);
          dagreKV5264BTParam16 !== dagreKV5264BTParam14.parent(item) &&
            (chunkAGHRB4JFR.warn(
              "Setting parent",
              item,
              dagreKV5264BTParam14.parent(item),
            ),
            dagreKV5264BTParam15.setParent(
              item,
              dagreKV5264BTParam14.parent(item),
            ));
          dagreKV5264BTParam13 !== dagreKV5264BTParam16 &&
          item !== dagreKV5264BTParam13
            ? (chunkAGHRB4JFR.debug(
                "Setting parent",
                item,
                dagreKV5264BTParam13,
              ),
              dagreKV5264BTParam15.setParent(item, dagreKV5264BTParam13))
            : (chunkAGHRB4JFR.info(
                "In copy ",
                dagreKV5264BTParam13,
                "root",
                dagreKV5264BTParam16,
                "data",
                dagreKV5264BTParam14.node(dagreKV5264BTParam13),
                dagreKV5264BTParam16,
              ),
              chunkAGHRB4JFR.debug(
                "Not Setting parent for node=",
                item,
                "cluster!==rootId",
                dagreKV5264BTParam13 !== dagreKV5264BTParam16,
                "node!==clusterId",
                item !== dagreKV5264BTParam13,
              ));
          let dagreKV5264BTValue34 = dagreKV5264BTParam14.edges(item);
          chunkAGHRB4JFR.debug("Copying Edges", dagreKV5264BTValue34);
          dagreKV5264BTValue34.forEach((_item) => {
            chunkAGHRB4JFR.info("Edge", _item);
            let dagreKV5264BTValue47 = dagreKV5264BTParam14.edge(
              _item.v,
              _item.w,
              _item.name,
            );
            chunkAGHRB4JFR.info(
              "Edge data",
              dagreKV5264BTValue47,
              dagreKV5264BTParam16,
            );
            try {
              dagreKV5264BTValue6(_item, dagreKV5264BTParam16)
                ? (chunkAGHRB4JFR.info(
                    "Copying as ",
                    _item.v,
                    _item.w,
                    dagreKV5264BTValue47,
                    _item.name,
                  ),
                  dagreKV5264BTParam15.setEdge(
                    _item.v,
                    _item.w,
                    dagreKV5264BTValue47,
                    _item.name,
                  ),
                  chunkAGHRB4JFR.info(
                    "newGraph edges ",
                    dagreKV5264BTParam15.edges(),
                    dagreKV5264BTParam15.edge(dagreKV5264BTParam15.edges()[0]),
                  ))
                : chunkAGHRB4JFR.info(
                    "Skipping copy of edge ",
                    _item.v,
                    "-->",
                    _item.w,
                    " rootId: ",
                    dagreKV5264BTParam16,
                    " clusterId:",
                    dagreKV5264BTParam13,
                  );
            } catch (dagreKV5264BTValue92) {
              chunkAGHRB4JFR.error(dagreKV5264BTValue92);
            }
          });
        }
        chunkAGHRB4JFR.debug("Removing node", item);
        dagreKV5264BTParam14.removeNode(item);
      });
    },
    "copy",
  ),
  dagreKV5264BTValue8 = chunkAGHRB4JFN(
    (dagreKV5264BTParam34, dagreKV5264BTParam35) => {
      let dagreKV5264BTValue79 =
          dagreKV5264BTParam35.children(dagreKV5264BTParam34),
        dagreKV5264BTValue80 = [...dagreKV5264BTValue79];
      for (let dagreKV5264BTValue91 of dagreKV5264BTValue79) {
        dagreKV5264BTValue3.set(dagreKV5264BTValue91, dagreKV5264BTParam34);
        dagreKV5264BTValue80 = [
          ...dagreKV5264BTValue80,
          ...dagreKV5264BTValue8(dagreKV5264BTValue91, dagreKV5264BTParam35),
        ];
      }
      return dagreKV5264BTValue80;
    },
    "extractDescendants",
  ),
  dagreKV5264BTValue9 = chunkAGHRB4JFN(
    (dagreKV5264BTParam17, dagreKV5264BTParam18, dagreKV5264BTParam19) => {
      let dagreKV5264BTValue59 = dagreKV5264BTParam17
          .edges()
          .filter(
            (item) =>
              item.v === dagreKV5264BTParam18 ||
              item.w === dagreKV5264BTParam18,
          ),
        dagreKV5264BTValue60 = dagreKV5264BTParam17
          .edges()
          .filter(
            (item) =>
              item.v === dagreKV5264BTParam19 ||
              item.w === dagreKV5264BTParam19,
          ),
        dagreKV5264BTValue61 = dagreKV5264BTValue59.map((item) => ({
          v: item.v === dagreKV5264BTParam18 ? dagreKV5264BTParam19 : item.v,
          w: item.w === dagreKV5264BTParam18 ? dagreKV5264BTParam18 : item.w,
        })),
        dagreKV5264BTValue62 = dagreKV5264BTValue60.map((item) => ({
          v: item.v,
          w: item.w,
        }));
      return dagreKV5264BTValue61.filter((item) =>
        dagreKV5264BTValue62.some(
          (_item) => item.v === _item.v && item.w === _item.w,
        ),
      );
    },
    "findCommonEdges",
  ),
  dagreKV5264BTValue10 = chunkAGHRB4JFN(
    (dagreKV5264BTParam22, dagreKV5264BTParam23, dagreKV5264BTParam24) => {
      let dagreKV5264BTValue64 =
        dagreKV5264BTParam23.children(dagreKV5264BTParam22);
      if (
        (chunkAGHRB4JFR.trace(
          "Searching children of id ",
          dagreKV5264BTParam22,
          dagreKV5264BTValue64,
        ),
        dagreKV5264BTValue64.length < 1)
      )
        return dagreKV5264BTParam22;
      let dagreKV5264BTValue65;
      for (let dagreKV5264BTValue74 of dagreKV5264BTValue64) {
        let dagreKV5264BTValue82 = dagreKV5264BTValue10(
            dagreKV5264BTValue74,
            dagreKV5264BTParam23,
            dagreKV5264BTParam24,
          ),
          dagreKV5264BTValue83 = dagreKV5264BTValue9(
            dagreKV5264BTParam23,
            dagreKV5264BTParam24,
            dagreKV5264BTValue82,
          );
        if (dagreKV5264BTValue82)
          if (dagreKV5264BTValue83.length > 0)
            dagreKV5264BTValue65 = dagreKV5264BTValue82;
          else return dagreKV5264BTValue82;
      }
      return dagreKV5264BTValue65;
    },
    "findNonClusterChild",
  ),
  dagreKV5264BTValue11 = chunkAGHRB4JFN(
    (dagreKV5264BTParam36) =>
      !dagreKV5264BTValue1.has(dagreKV5264BTParam36) ||
      !dagreKV5264BTValue1.get(dagreKV5264BTParam36).externalConnections
        ? dagreKV5264BTParam36
        : dagreKV5264BTValue1.has(dagreKV5264BTParam36)
          ? dagreKV5264BTValue1.get(dagreKV5264BTParam36).id
          : dagreKV5264BTParam36,
    "getAnchorId",
  ),
  dagreKV5264BTValue12 = chunkAGHRB4JFN(
    (dagreKV5264BTParam11, dagreKV5264BTParam12) => {
      if (!dagreKV5264BTParam11 || dagreKV5264BTParam12 > 10) {
        chunkAGHRB4JFR.debug("Opting out, no graph ");
        return;
      } else chunkAGHRB4JFR.debug("Opting in, graph ");
      dagreKV5264BTParam11.nodes().forEach(function (item) {
        dagreKV5264BTParam11.children(item).length > 0 &&
          (chunkAGHRB4JFR.warn(
            "Cluster identified",
            item,
            " Replacement id in edges: ",
            dagreKV5264BTValue10(item, dagreKV5264BTParam11, item),
          ),
          dagreKV5264BTValue2.set(
            item,
            dagreKV5264BTValue8(item, dagreKV5264BTParam11),
          ),
          dagreKV5264BTValue1.set(item, {
            id: dagreKV5264BTValue10(item, dagreKV5264BTParam11, item),
            clusterData: dagreKV5264BTParam11.node(item),
          }));
      });
      dagreKV5264BTParam11.nodes().forEach(function (item) {
        let dagreKV5264BTValue56 = dagreKV5264BTParam11.children(item),
          dagreKV5264BTValue57 = dagreKV5264BTParam11.edges();
        dagreKV5264BTValue56.length > 0
          ? (chunkAGHRB4JFR.debug(
              "Cluster identified",
              item,
              dagreKV5264BTValue2,
            ),
            dagreKV5264BTValue57.forEach((_item) => {
              dagreKV5264BTValue5(_item.v, item) ^
                dagreKV5264BTValue5(_item.w, item) &&
                (chunkAGHRB4JFR.warn("Edge: ", _item, " leaves cluster ", item),
                chunkAGHRB4JFR.warn(
                  "Descendants of XXX ",
                  item,
                  ": ",
                  dagreKV5264BTValue2.get(item),
                ),
                (dagreKV5264BTValue1.get(item).externalConnections = true));
            }))
          : chunkAGHRB4JFR.debug("Not a cluster ", item, dagreKV5264BTValue2);
      });
      for (let dagreKV5264BTValue69 of dagreKV5264BTValue1.keys()) {
        let dagreKV5264BTValue77 =
            dagreKV5264BTValue1.get(dagreKV5264BTValue69).id,
          dagreKV5264BTValue78 =
            dagreKV5264BTParam11.parent(dagreKV5264BTValue77);
        dagreKV5264BTValue78 !== dagreKV5264BTValue69 &&
          dagreKV5264BTValue1.has(dagreKV5264BTValue78) &&
          !dagreKV5264BTValue1.get(dagreKV5264BTValue78).externalConnections &&
          (dagreKV5264BTValue1.get(dagreKV5264BTValue69).id =
            dagreKV5264BTValue78);
      }
      dagreKV5264BTParam11.edges().forEach(function (item) {
        let dagreKV5264BTValue42 = dagreKV5264BTParam11.edge(item);
        chunkAGHRB4JFR.warn(
          "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
        );
        chunkAGHRB4JFR.warn(
          "Edge " +
            item.v +
            " -> " +
            item.w +
            ": " +
            JSON.stringify(dagreKV5264BTParam11.edge(item)),
        );
        let dagreKV5264BTValue43 = item.v,
          dagreKV5264BTValue44 = item.w;
        if (
          (chunkAGHRB4JFR.warn(
            "Fix XXX",
            dagreKV5264BTValue1,
            "ids:",
            item.v,
            item.w,
            "Translating: ",
            dagreKV5264BTValue1.get(item.v),
            " --- ",
            dagreKV5264BTValue1.get(item.w),
          ),
          dagreKV5264BTValue1.get(item.v) || dagreKV5264BTValue1.get(item.w))
        ) {
          if (
            (chunkAGHRB4JFR.warn(
              "Fixing and trying - removing XXX",
              item.v,
              item.w,
              item.name,
            ),
            (dagreKV5264BTValue43 = dagreKV5264BTValue11(item.v)),
            (dagreKV5264BTValue44 = dagreKV5264BTValue11(item.w)),
            dagreKV5264BTParam11.removeEdge(item.v, item.w, item.name),
            dagreKV5264BTValue43 !== item.v)
          ) {
            let dagreKV5264BTValue84 =
              dagreKV5264BTParam11.parent(dagreKV5264BTValue43);
            dagreKV5264BTValue1.get(dagreKV5264BTValue84).externalConnections =
              true;
            dagreKV5264BTValue42.fromCluster = item.v;
          }
          if (dagreKV5264BTValue44 !== item.w) {
            let dagreKV5264BTValue86 =
              dagreKV5264BTParam11.parent(dagreKV5264BTValue44);
            dagreKV5264BTValue1.get(dagreKV5264BTValue86).externalConnections =
              true;
            dagreKV5264BTValue42.toCluster = item.w;
          }
          chunkAGHRB4JFR.warn(
            "Fix Replacing with XXX",
            dagreKV5264BTValue43,
            dagreKV5264BTValue44,
            item.name,
          );
          dagreKV5264BTParam11.setEdge(
            dagreKV5264BTValue43,
            dagreKV5264BTValue44,
            dagreKV5264BTValue42,
            item.name,
          );
        }
      });
      chunkAGHRB4JFR.warn(
        "Adjusted Graph",
        dagreKV5264BTHelper1(dagreKV5264BTParam11),
      );
      dagreKV5264BTValue13(dagreKV5264BTParam11, 0);
      chunkAGHRB4JFR.trace(dagreKV5264BTValue1);
    },
    "adjustClustersAndEdges",
  ),
  dagreKV5264BTValue13 = chunkAGHRB4JFN(
    (dagreKV5264BTParam9, dagreKV5264BTParam10) => {
      if (
        (chunkAGHRB4JFR.warn(
          "extractor - ",
          dagreKV5264BTParam10,
          dagreKV5264BTHelper1(dagreKV5264BTParam9),
          dagreKV5264BTParam9.children("D"),
        ),
        dagreKV5264BTParam10 > 10)
      ) {
        chunkAGHRB4JFR.error("Bailing out");
        return;
      }
      let dagreKV5264BTValue27 = dagreKV5264BTParam9.nodes(),
        dagreKV5264BTValue28 = false;
      for (let dagreKV5264BTValue88 of dagreKV5264BTValue27) {
        let dagreKV5264BTValue90 =
          dagreKV5264BTParam9.children(dagreKV5264BTValue88);
        dagreKV5264BTValue28 ||= dagreKV5264BTValue90.length > 0;
      }
      if (!dagreKV5264BTValue28) {
        chunkAGHRB4JFR.debug(
          "Done, no node has children",
          dagreKV5264BTParam9.nodes(),
        );
        return;
      }
      chunkAGHRB4JFR.debug(
        "Nodes = ",
        dagreKV5264BTValue27,
        dagreKV5264BTParam10,
      );
      for (let dagreKV5264BTValue30 of dagreKV5264BTValue27)
        if (
          (chunkAGHRB4JFR.debug(
            "Extracting node",
            dagreKV5264BTValue30,
            dagreKV5264BTValue1,
            dagreKV5264BTValue1.has(dagreKV5264BTValue30) &&
              !dagreKV5264BTValue1.get(dagreKV5264BTValue30)
                .externalConnections,
            !dagreKV5264BTParam9.parent(dagreKV5264BTValue30),
            dagreKV5264BTParam9.node(dagreKV5264BTValue30),
            dagreKV5264BTParam9.children("D"),
            " Depth ",
            dagreKV5264BTParam10,
          ),
          !dagreKV5264BTValue1.has(dagreKV5264BTValue30))
        )
          chunkAGHRB4JFR.debug(
            "Not a cluster",
            dagreKV5264BTValue30,
            dagreKV5264BTParam10,
          );
        else if (
          !dagreKV5264BTValue1.get(dagreKV5264BTValue30).externalConnections &&
          dagreKV5264BTParam9.children(dagreKV5264BTValue30) &&
          dagreKV5264BTParam9.children(dagreKV5264BTValue30).length > 0
        ) {
          chunkAGHRB4JFR.warn(
            "Cluster without external connections, without a parent and with children",
            dagreKV5264BTValue30,
            dagreKV5264BTParam10,
          );
          let dagreKV5264BTValue45 =
            dagreKV5264BTParam9.graph().rankdir === "TB" ? "LR" : "TB";
          dagreKV5264BTValue1.get(dagreKV5264BTValue30)?.clusterData?.dir &&
            ((dagreKV5264BTValue45 =
              dagreKV5264BTValue1.get(dagreKV5264BTValue30).clusterData.dir),
            chunkAGHRB4JFR.warn(
              "Fixing dir",
              dagreKV5264BTValue1.get(dagreKV5264BTValue30).clusterData.dir,
              dagreKV5264BTValue45,
            ));
          let dagreKV5264BTValue46 = new Graphlib({
            multigraph: true,
            compound: true,
          })
            .setGraph({
              rankdir: dagreKV5264BTValue45,
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
            dagreKV5264BTHelper1(dagreKV5264BTParam9),
          );
          dagreKV5264BTValue7(
            dagreKV5264BTValue30,
            dagreKV5264BTParam9,
            dagreKV5264BTValue46,
            dagreKV5264BTValue30,
          );
          dagreKV5264BTParam9.setNode(dagreKV5264BTValue30, {
            clusterNode: true,
            id: dagreKV5264BTValue30,
            clusterData:
              dagreKV5264BTValue1.get(dagreKV5264BTValue30).clusterData,
            label: dagreKV5264BTValue1.get(dagreKV5264BTValue30).label,
            graph: dagreKV5264BTValue46,
          });
          chunkAGHRB4JFR.warn(
            "New graph after copy node: (",
            dagreKV5264BTValue30,
            ")",
            dagreKV5264BTHelper1(dagreKV5264BTValue46),
          );
          chunkAGHRB4JFR.debug(
            "Old graph after copy",
            dagreKV5264BTHelper1(dagreKV5264BTParam9),
          );
        } else {
          chunkAGHRB4JFR.warn(
            "Cluster ** ",
            dagreKV5264BTValue30,
            " **not meeting the criteria !externalConnections:",
            !dagreKV5264BTValue1.get(dagreKV5264BTValue30).externalConnections,
            " no parent: ",
            !dagreKV5264BTParam9.parent(dagreKV5264BTValue30),
            " children ",
            dagreKV5264BTParam9.children(dagreKV5264BTValue30) &&
              dagreKV5264BTParam9.children(dagreKV5264BTValue30).length > 0,
            dagreKV5264BTParam9.children("D"),
            dagreKV5264BTParam10,
          );
          chunkAGHRB4JFR.debug(dagreKV5264BTValue1);
        }
      dagreKV5264BTValue27 = dagreKV5264BTParam9.nodes();
      chunkAGHRB4JFR.warn("New list of nodes", dagreKV5264BTValue27);
      for (let dagreKV5264BTValue81 of dagreKV5264BTValue27) {
        let dagreKV5264BTValue87 =
          dagreKV5264BTParam9.node(dagreKV5264BTValue81);
        chunkAGHRB4JFR.warn(
          " Now next level",
          dagreKV5264BTValue81,
          dagreKV5264BTValue87,
        );
        dagreKV5264BTValue87?.clusterNode &&
          dagreKV5264BTValue13(
            dagreKV5264BTValue87.graph,
            dagreKV5264BTParam10 + 1,
          );
      }
    },
    "extractor",
  ),
  dagreKV5264BTValue14 = chunkAGHRB4JFN(
    (dagreKV5264BTParam26, dagreKV5264BTParam27) => {
      if (dagreKV5264BTParam27.length === 0) return [];
      let dagreKV5264BTValue68 = Object.assign([], dagreKV5264BTParam27);
      return (
        dagreKV5264BTParam27.forEach((item) => {
          let dagreKV5264BTValue89 = dagreKV5264BTValue14(
            dagreKV5264BTParam26,
            dagreKV5264BTParam26.children(item),
          );
          dagreKV5264BTValue68 = [
            ...dagreKV5264BTValue68,
            ...dagreKV5264BTValue89,
          ];
        }),
        dagreKV5264BTValue68
      );
    },
    "sorter",
  ),
  dagreKV5264BTValue15 = chunkAGHRB4JFN(
    (dagreKV5264BTParam37) =>
      dagreKV5264BTValue14(
        dagreKV5264BTParam37,
        dagreKV5264BTParam37.children(),
      ),
    "sortNodesByHierarchy",
  ),
  dagreKV5264BTValue16 = chunkAGHRB4JFN(
    async (
      dagreKV5264BTParam1,
      dagreKV5264BTParam2,
      dagreKV5264BTParam3,
      dagreKV5264BTParam4,
      dagreKV5264BTParam5,
      dagreKV5264BTParam6,
    ) => {
      chunkAGHRB4JFR.warn(
        "Graph in recursive render:XAX",
        dagreKV5264BTHelper1(dagreKV5264BTParam2),
        dagreKV5264BTParam5,
      );
      let dagreKV5264BTValue17 = dagreKV5264BTParam2.graph().rankdir;
      chunkAGHRB4JFR.trace(
        "Dir in recursive render - dir:",
        dagreKV5264BTValue17,
      );
      let dagreKV5264BTValue18 = dagreKV5264BTParam1
        .insert("g")
        .attr("class", "root");
      dagreKV5264BTParam2.nodes()
        ? chunkAGHRB4JFR.info(
            "Recursive render XXX",
            dagreKV5264BTParam2.nodes(),
          )
        : chunkAGHRB4JFR.info("No nodes found for", dagreKV5264BTParam2);
      dagreKV5264BTParam2.edges().length > 0 &&
        chunkAGHRB4JFR.info(
          "Recursive edges",
          dagreKV5264BTParam2.edge(dagreKV5264BTParam2.edges()[0]),
        );
      let dagreKV5264BTValue19 = dagreKV5264BTValue18
          .insert("g")
          .attr("class", "clusters"),
        dagreKV5264BTValue20 = dagreKV5264BTValue18
          .insert("g")
          .attr("class", "edgePaths"),
        dagreKV5264BTValue21 = dagreKV5264BTValue18
          .insert("g")
          .attr("class", "edgeLabels"),
        dagreKV5264BTValue22 = dagreKV5264BTValue18
          .insert("g")
          .attr("class", "nodes");
      await Promise.all(
        dagreKV5264BTParam2.nodes().map(async function (item) {
          let dagreKV5264BTValue32 = dagreKV5264BTParam2.node(item);
          if (dagreKV5264BTParam5 !== undefined) {
            let dagreKV5264BTValue58 = JSON.parse(
              JSON.stringify(dagreKV5264BTParam5.clusterData),
            );
            chunkAGHRB4JFR.trace(
              "Setting data for parent cluster XXX\n Node.id = ",
              item,
              "\n data=",
              dagreKV5264BTValue58.height,
              "\nParent cluster",
              dagreKV5264BTParam5.height,
            );
            dagreKV5264BTParam2.setNode(
              dagreKV5264BTParam5.id,
              dagreKV5264BTValue58,
            );
            dagreKV5264BTParam2.parent(item) ||
              (chunkAGHRB4JFR.trace(
                "Setting parent",
                item,
                dagreKV5264BTParam5.id,
              ),
              dagreKV5264BTParam2.setParent(
                item,
                dagreKV5264BTParam5.id,
                dagreKV5264BTValue58,
              ));
          }
          if (
            (chunkAGHRB4JFR.info(
              "(Insert) Node XXX" +
                item +
                ": " +
                JSON.stringify(dagreKV5264BTParam2.node(item)),
            ),
            dagreKV5264BTValue32?.clusterNode)
          ) {
            chunkAGHRB4JFR.info(
              "Cluster identified XBX",
              item,
              dagreKV5264BTValue32.width,
              dagreKV5264BTParam2.node(item),
            );
            let { ranksep, nodesep } = dagreKV5264BTParam2.graph();
            dagreKV5264BTValue32.graph.setGraph({
              ...dagreKV5264BTValue32.graph.graph(),
              ranksep: ranksep + 25,
              nodesep,
            });
            let dagreKV5264BTValue49 = await dagreKV5264BTValue16(
                dagreKV5264BTValue22,
                dagreKV5264BTValue32.graph,
                dagreKV5264BTParam3,
                dagreKV5264BTParam4,
                dagreKV5264BTParam2.node(item),
                dagreKV5264BTParam6,
              ),
              dagreKV5264BTValue50 = dagreKV5264BTValue49.elem;
            chunk5FUZZQ4RU(dagreKV5264BTValue32, dagreKV5264BTValue50);
            dagreKV5264BTValue32.diff = dagreKV5264BTValue49.diff || 0;
            chunkAGHRB4JFR.info(
              "New compound node after recursive render XAX",
              item,
              "width",
              dagreKV5264BTValue32.width,
              "height",
              dagreKV5264BTValue32.height,
            );
            chunk5FUZZQ4RL(dagreKV5264BTValue50, dagreKV5264BTValue32);
          } else
            dagreKV5264BTParam2.children(item).length > 0
              ? (chunkAGHRB4JFR.trace(
                  "Cluster - the non recursive path XBX",
                  item,
                  dagreKV5264BTValue32.id,
                  dagreKV5264BTValue32,
                  dagreKV5264BTValue32.width,
                  "Graph:",
                  dagreKV5264BTParam2,
                ),
                chunkAGHRB4JFR.trace(
                  dagreKV5264BTValue10(
                    dagreKV5264BTValue32.id,
                    dagreKV5264BTParam2,
                  ),
                ),
                dagreKV5264BTValue1.set(dagreKV5264BTValue32.id, {
                  id: dagreKV5264BTValue10(
                    dagreKV5264BTValue32.id,
                    dagreKV5264BTParam2,
                  ),
                  node: dagreKV5264BTValue32,
                }))
              : (chunkAGHRB4JFR.trace(
                  "Node - the non recursive path XAX",
                  item,
                  dagreKV5264BTValue22,
                  dagreKV5264BTParam2.node(item),
                  dagreKV5264BTValue17,
                ),
                await chunk5FUZZQ4RA(
                  dagreKV5264BTValue22,
                  dagreKV5264BTParam2.node(item),
                  {
                    config: dagreKV5264BTParam6,
                    dir: dagreKV5264BTValue17,
                  },
                ));
        }),
      );
      await chunkAGHRB4JFN(async () => {
        let dagreKV5264BTValue48 = dagreKV5264BTParam2
          .edges()
          .map(async function (item) {
            let dagreKV5264BTValue54 = dagreKV5264BTParam2.edge(
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
              JSON.stringify(dagreKV5264BTParam2.edge(item)),
            );
            chunkAGHRB4JFR.info(
              "Fix",
              dagreKV5264BTValue1,
              "ids:",
              item.v,
              item.w,
              "Translating: ",
              dagreKV5264BTValue1.get(item.v),
              dagreKV5264BTValue1.get(item.w),
            );
            await chunkENJZ2VHER(dagreKV5264BTValue21, dagreKV5264BTValue54);
          });
        await Promise.all(dagreKV5264BTValue48);
      }, "processEdges")();
      chunkAGHRB4JFR.info(
        "Graph before layout:",
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTParam2)),
      );
      chunkAGHRB4JFR.info("############################################# XXX");
      chunkAGHRB4JFR.info("###                Layout                 ### XXX");
      chunkAGHRB4JFR.info("############################################# XXX");
      Dagre(dagreKV5264BTParam2);
      chunkAGHRB4JFR.info(
        "Graph after layout:",
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTParam2)),
      );
      let dagreKV5264BTValue23 = 0,
        { subGraphTitleTotalMargin } = chunkZZ45TVLEN(dagreKV5264BTParam6);
      return (
        await Promise.all(
          dagreKV5264BTValue15(dagreKV5264BTParam2).map(async function (item) {
            let dagreKV5264BTValue31 = dagreKV5264BTParam2.node(item);
            if (
              (chunkAGHRB4JFR.info(
                "Position XBX => " + item + ": (" + dagreKV5264BTValue31.x,
                "," + dagreKV5264BTValue31.y,
                ") width: ",
                dagreKV5264BTValue31.width,
                " height: ",
                dagreKV5264BTValue31.height,
              ),
              dagreKV5264BTValue31?.clusterNode)
            ) {
              dagreKV5264BTValue31.y += subGraphTitleTotalMargin;
              chunkAGHRB4JFR.info(
                "A tainted cluster node XBX1",
                item,
                dagreKV5264BTValue31.id,
                dagreKV5264BTValue31.width,
                dagreKV5264BTValue31.height,
                dagreKV5264BTValue31.x,
                dagreKV5264BTValue31.y,
                dagreKV5264BTParam2.parent(item),
              );
              dagreKV5264BTValue1.get(dagreKV5264BTValue31.id).node =
                dagreKV5264BTValue31;
              chunk5FUZZQ4RC(dagreKV5264BTValue31);
            } else if (dagreKV5264BTParam2.children(item).length > 0) {
              chunkAGHRB4JFR.info(
                "A pure cluster node XBX1",
                item,
                dagreKV5264BTValue31.id,
                dagreKV5264BTValue31.x,
                dagreKV5264BTValue31.y,
                dagreKV5264BTValue31.width,
                dagreKV5264BTValue31.height,
                dagreKV5264BTParam2.parent(item),
              );
              dagreKV5264BTValue31.height += subGraphTitleTotalMargin;
              dagreKV5264BTParam2.node(dagreKV5264BTValue31.parentId);
              let dagreKV5264BTValue51 = dagreKV5264BTValue31?.padding / 2 || 0,
                dagreKV5264BTValue52 =
                  dagreKV5264BTValue31?.labelBBox?.height || 0,
                dagreKV5264BTValue53 =
                  dagreKV5264BTValue52 - dagreKV5264BTValue51 || 0;
              chunkAGHRB4JFR.debug(
                "OffsetY",
                dagreKV5264BTValue53,
                "labelHeight",
                dagreKV5264BTValue52,
                "halfPadding",
                dagreKV5264BTValue51,
              );
              await chunk5FUZZQ4RI(dagreKV5264BTValue19, dagreKV5264BTValue31);
              dagreKV5264BTValue1.get(dagreKV5264BTValue31.id).node =
                dagreKV5264BTValue31;
            } else {
              let dagreKV5264BTValue55 = dagreKV5264BTParam2.node(
                dagreKV5264BTValue31.parentId,
              );
              dagreKV5264BTValue31.y += subGraphTitleTotalMargin / 2;
              chunkAGHRB4JFR.info(
                "A regular node XBX1 - using the padding",
                dagreKV5264BTValue31.id,
                "parent",
                dagreKV5264BTValue31.parentId,
                dagreKV5264BTValue31.width,
                dagreKV5264BTValue31.height,
                dagreKV5264BTValue31.x,
                dagreKV5264BTValue31.y,
                "offsetY",
                dagreKV5264BTValue31.offsetY,
                "parent",
                dagreKV5264BTValue55,
                dagreKV5264BTValue55?.offsetY,
                dagreKV5264BTValue31,
              );
              chunk5FUZZQ4RC(dagreKV5264BTValue31);
            }
          }),
        ),
        dagreKV5264BTParam2.edges().forEach(function (item) {
          let dagreKV5264BTValue67 = dagreKV5264BTParam2.edge(item);
          chunkAGHRB4JFR.info(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(dagreKV5264BTValue67),
            dagreKV5264BTValue67,
          );
          dagreKV5264BTValue67.points.forEach(
            (_item) => (_item.y += subGraphTitleTotalMargin / 2),
          );
          chunkENJZ2VHEA(
            dagreKV5264BTValue67,
            chunkENJZ2VHEN(
              dagreKV5264BTValue20,
              dagreKV5264BTValue67,
              dagreKV5264BTValue1,
              dagreKV5264BTParam3,
              dagreKV5264BTParam2.node(item.v),
              dagreKV5264BTParam2.node(item.w),
              dagreKV5264BTParam4,
            ),
          );
        }),
        dagreKV5264BTParam2.nodes().forEach(function (item) {
          let dagreKV5264BTValue85 = dagreKV5264BTParam2.node(item);
          chunkAGHRB4JFR.info(
            item,
            dagreKV5264BTValue85.type,
            dagreKV5264BTValue85.diff,
          );
          dagreKV5264BTValue85.isGroup &&
            (dagreKV5264BTValue23 = dagreKV5264BTValue85.diff);
        }),
        chunkAGHRB4JFR.warn(
          "Returning from recursive render XAX",
          dagreKV5264BTValue18,
          dagreKV5264BTValue23,
        ),
        {
          elem: dagreKV5264BTValue18,
          diff: dagreKV5264BTValue23,
        }
      );
    },
    "recursiveRender",
  );
export const dagreKV5264BT = chunkAGHRB4JFN(
  async (dagreKV5264BTParam7, dagreKV5264BTParam8) => {
    let dagreKV5264BTValue24 = new Graphlib({
        multigraph: true,
        compound: true,
      })
        .setGraph({
          rankdir: dagreKV5264BTParam7.direction,
          nodesep:
            dagreKV5264BTParam7.config?.nodeSpacing ||
            dagreKV5264BTParam7.config?.flowchart?.nodeSpacing ||
            dagreKV5264BTParam7.nodeSpacing,
          ranksep:
            dagreKV5264BTParam7.config?.rankSpacing ||
            dagreKV5264BTParam7.config?.flowchart?.rankSpacing ||
            dagreKV5264BTParam7.rankSpacing,
          marginx: 8,
          marginy: 8,
        })
        .setDefaultEdgeLabel(function () {
          return {};
        }),
      dagreKV5264BTValue25 = dagreKV5264BTParam8.select("g");
    chunkENJZ2VHEI(
      dagreKV5264BTValue25,
      dagreKV5264BTParam7.markers,
      dagreKV5264BTParam7.type,
      dagreKV5264BTParam7.diagramId,
    );
    chunk5FUZZQ4RN();
    chunkENJZ2VHET();
    chunk5FUZZQ4RT();
    dagreKV5264BTValue4();
    dagreKV5264BTParam7.nodes.forEach((item) => {
      dagreKV5264BTValue24.setNode(item.id, {
        ...item,
      });
      item.parentId && dagreKV5264BTValue24.setParent(item.id, item.parentId);
    });
    chunkAGHRB4JFR.debug("Edges:", dagreKV5264BTParam7.edges);
    dagreKV5264BTParam7.edges.forEach((item) => {
      if (item.start === item.end) {
        let dagreKV5264BTValue35 = item.start,
          dagreKV5264BTValue36 =
            dagreKV5264BTValue35 + "---" + dagreKV5264BTValue35 + "---1",
          dagreKV5264BTValue37 =
            dagreKV5264BTValue35 + "---" + dagreKV5264BTValue35 + "---2",
          dagreKV5264BTValue38 =
            dagreKV5264BTValue24.node(dagreKV5264BTValue35);
        dagreKV5264BTValue24.setNode(dagreKV5264BTValue36, {
          domId: dagreKV5264BTValue36,
          id: dagreKV5264BTValue36,
          parentId: dagreKV5264BTValue38.parentId,
          labelStyle: "",
          label: "",
          padding: 0,
          shape: "labelRect",
          style: "",
          width: 10,
          height: 10,
        });
        dagreKV5264BTValue24.setParent(
          dagreKV5264BTValue36,
          dagreKV5264BTValue38.parentId,
        );
        dagreKV5264BTValue24.setNode(dagreKV5264BTValue37, {
          domId: dagreKV5264BTValue37,
          id: dagreKV5264BTValue37,
          parentId: dagreKV5264BTValue38.parentId,
          labelStyle: "",
          padding: 0,
          shape: "labelRect",
          label: "",
          style: "",
          width: 10,
          height: 10,
        });
        dagreKV5264BTValue24.setParent(
          dagreKV5264BTValue37,
          dagreKV5264BTValue38.parentId,
        );
        let dagreKV5264BTValue39 = structuredClone(item),
          dagreKV5264BTValue40 = structuredClone(item),
          dagreKV5264BTValue41 = structuredClone(item);
        dagreKV5264BTValue39.label = "";
        dagreKV5264BTValue39.arrowTypeEnd = "none";
        dagreKV5264BTValue39.id = dagreKV5264BTValue35 + "-cyclic-special-1";
        dagreKV5264BTValue40.arrowTypeStart = "none";
        dagreKV5264BTValue40.arrowTypeEnd = "none";
        dagreKV5264BTValue40.id = dagreKV5264BTValue35 + "-cyclic-special-mid";
        dagreKV5264BTValue41.label = "";
        dagreKV5264BTValue38.isGroup &&
          ((dagreKV5264BTValue39.fromCluster = dagreKV5264BTValue35),
          (dagreKV5264BTValue41.toCluster = dagreKV5264BTValue35));
        dagreKV5264BTValue41.id = dagreKV5264BTValue35 + "-cyclic-special-2";
        dagreKV5264BTValue41.arrowTypeStart = "none";
        dagreKV5264BTValue24.setEdge(
          dagreKV5264BTValue35,
          dagreKV5264BTValue36,
          dagreKV5264BTValue39,
          dagreKV5264BTValue35 + "-cyclic-special-0",
        );
        dagreKV5264BTValue24.setEdge(
          dagreKV5264BTValue36,
          dagreKV5264BTValue37,
          dagreKV5264BTValue40,
          dagreKV5264BTValue35 + "-cyclic-special-1",
        );
        dagreKV5264BTValue24.setEdge(
          dagreKV5264BTValue37,
          dagreKV5264BTValue35,
          dagreKV5264BTValue41,
          dagreKV5264BTValue35 + "-cyc<lic-special-2",
        );
      } else
        dagreKV5264BTValue24.setEdge(
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
      JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTValue24)),
    );
    dagreKV5264BTValue12(dagreKV5264BTValue24);
    chunkAGHRB4JFR.warn(
      "Graph after XAX:",
      JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTValue24)),
    );
    let dagreKV5264BTValue26 = _chunkICPOFSXXB();
    await dagreKV5264BTValue16(
      dagreKV5264BTValue25,
      dagreKV5264BTValue24,
      dagreKV5264BTParam7.type,
      dagreKV5264BTParam7.diagramId,
      undefined,
      dagreKV5264BTValue26,
    );
  },
  "render",
);
