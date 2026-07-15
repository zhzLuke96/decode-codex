// Restored from ref/webview/assets/gitGraphDiagram-NY62KEGX-CsIEzHiX.js
// Flat boundary. Vendored gitGraphDiagramNY62KEGX chunk restored from the Codex webview bundle.
import {
  chunkS3R3BYOJC,
  chunkS3R3BYOJO,
  chunkS3R3BYOJP,
} from "./chunk-s3r3byoj";
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  chunkABZYJK2DO,
  _chunkABZYJK2DS,
  chunkABZYJK2DM,
  _chunkABZYJK2DC,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  _chunkABZYJK2DY,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
import { ChunkQZHKN3VN } from "./mermaid-imperative-state";
const _chunkABZYJK2DB = chunkABZYJK2DN;
var gitGraphDiagramNY62KEGXValue1 = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4,
  },
  gitGraphDiagramNY62KEGXValue2 = chunkABZYJK2DO.gitGraph,
  gitGraphDiagramNY62KEGXValue3 = chunkAGHRB4JFN(
    () =>
      chunkS3R3BYOJP({
        ...gitGraphDiagramNY62KEGXValue2,
        ..._chunkABZYJK2DY().gitGraph,
      }),
    "getConfig",
  ),
  gitGraphDiagramNY62KEGXValue4 = new ChunkQZHKN3VN(() => {
    let gitGraphDiagramNY62KEGXValue159 = gitGraphDiagramNY62KEGXValue3(),
      gitGraphDiagramNY62KEGXValue160 =
        gitGraphDiagramNY62KEGXValue159.mainBranchName,
      gitGraphDiagramNY62KEGXValue161 =
        gitGraphDiagramNY62KEGXValue159.mainBranchOrder;
    return {
      mainBranchName: gitGraphDiagramNY62KEGXValue160,
      commits: new Map(),
      head: null,
      branchConfig: new Map([
        [
          gitGraphDiagramNY62KEGXValue160,
          {
            name: gitGraphDiagramNY62KEGXValue160,
            order: gitGraphDiagramNY62KEGXValue161,
          },
        ],
      ]),
      branches: new Map([[gitGraphDiagramNY62KEGXValue160, null]]),
      currBranch: gitGraphDiagramNY62KEGXValue160,
      direction: "LR",
      seq: 0,
      options: {},
    };
  });
function gitGraphDiagramNY62KEGXHelper1() {
  return chunkS3R3BYOJO({
    length: 7,
  });
}
chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper1, "getID");
function gitGraphDiagramNY62KEGXHelper2(
  gitGraphDiagramNY62KEGXParam67,
  gitGraphDiagramNY62KEGXParam68,
) {
  let gitGraphDiagramNY62KEGXValue195 = Object.create(null);
  return gitGraphDiagramNY62KEGXParam67.reduce((accumulator, current) => {
    let gitGraphDiagramNY62KEGXValue215 =
      gitGraphDiagramNY62KEGXParam68(current);
    return (
      gitGraphDiagramNY62KEGXValue195[gitGraphDiagramNY62KEGXValue215] ||
        ((gitGraphDiagramNY62KEGXValue195[gitGraphDiagramNY62KEGXValue215] =
          true),
        accumulator.push(current)),
      accumulator
    );
  }, []);
}
chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper2, "uniqBy");
var gitGraphDiagramNY62KEGXValue5 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam87,
  ) {
    gitGraphDiagramNY62KEGXValue4.records.direction =
      gitGraphDiagramNY62KEGXParam87;
  }, "setDirection"),
  gitGraphDiagramNY62KEGXValue6 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam58,
  ) {
    chunkAGHRB4JFR.debug("options str", gitGraphDiagramNY62KEGXParam58);
    gitGraphDiagramNY62KEGXParam58 = gitGraphDiagramNY62KEGXParam58?.trim();
    gitGraphDiagramNY62KEGXParam58 ||= "{}";
    try {
      gitGraphDiagramNY62KEGXValue4.records.options = JSON.parse(
        gitGraphDiagramNY62KEGXParam58,
      );
    } catch (gitGraphDiagramNY62KEGXValue212) {
      chunkAGHRB4JFR.error(
        "error while parsing gitGraph options",
        gitGraphDiagramNY62KEGXValue212.message,
      );
    }
  }, "setOptions"),
  gitGraphDiagramNY62KEGXValue7 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXValue4.records.options;
  }, "getOptions"),
  gitGraphDiagramNY62KEGXValue8 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam31,
  ) {
    let gitGraphDiagramNY62KEGXValue123 = gitGraphDiagramNY62KEGXParam31.msg,
      gitGraphDiagramNY62KEGXValue124 = gitGraphDiagramNY62KEGXParam31.id,
      gitGraphDiagramNY62KEGXValue125 = gitGraphDiagramNY62KEGXParam31.type,
      gitGraphDiagramNY62KEGXValue126 = gitGraphDiagramNY62KEGXParam31.tags;
    chunkAGHRB4JFR.info(
      "commit",
      gitGraphDiagramNY62KEGXValue123,
      gitGraphDiagramNY62KEGXValue124,
      gitGraphDiagramNY62KEGXValue125,
      gitGraphDiagramNY62KEGXValue126,
    );
    chunkAGHRB4JFR.debug(
      "Entering commit:",
      gitGraphDiagramNY62KEGXValue123,
      gitGraphDiagramNY62KEGXValue124,
      gitGraphDiagramNY62KEGXValue125,
      gitGraphDiagramNY62KEGXValue126,
    );
    let gitGraphDiagramNY62KEGXValue127 = gitGraphDiagramNY62KEGXValue3();
    gitGraphDiagramNY62KEGXValue124 = chunkABZYJK2DM.sanitizeText(
      gitGraphDiagramNY62KEGXValue124,
      gitGraphDiagramNY62KEGXValue127,
    );
    gitGraphDiagramNY62KEGXValue123 = chunkABZYJK2DM.sanitizeText(
      gitGraphDiagramNY62KEGXValue123,
      gitGraphDiagramNY62KEGXValue127,
    );
    gitGraphDiagramNY62KEGXValue126 = gitGraphDiagramNY62KEGXValue126?.map(
      (gitGraphDiagramNY62KEGXParam91) =>
        chunkABZYJK2DM.sanitizeText(
          gitGraphDiagramNY62KEGXParam91,
          gitGraphDiagramNY62KEGXValue127,
        ),
    );
    let gitGraphDiagramNY62KEGXValue128 = {
      id:
        gitGraphDiagramNY62KEGXValue124 ||
        gitGraphDiagramNY62KEGXValue4.records.seq +
          "-" +
          gitGraphDiagramNY62KEGXHelper1(),
      message: gitGraphDiagramNY62KEGXValue123,
      seq: gitGraphDiagramNY62KEGXValue4.records.seq++,
      type:
        gitGraphDiagramNY62KEGXValue125 ?? gitGraphDiagramNY62KEGXValue1.NORMAL,
      tags: gitGraphDiagramNY62KEGXValue126 ?? [],
      parents:
        gitGraphDiagramNY62KEGXValue4.records.head == null
          ? []
          : [gitGraphDiagramNY62KEGXValue4.records.head.id],
      branch: gitGraphDiagramNY62KEGXValue4.records.currBranch,
    };
    gitGraphDiagramNY62KEGXValue4.records.head =
      gitGraphDiagramNY62KEGXValue128;
    chunkAGHRB4JFR.info(
      "main branch",
      gitGraphDiagramNY62KEGXValue127.mainBranchName,
    );
    gitGraphDiagramNY62KEGXValue4.records.commits.has(
      gitGraphDiagramNY62KEGXValue128.id,
    ) &&
      chunkAGHRB4JFR.warn(
        `Commit ID ${gitGraphDiagramNY62KEGXValue128.id} already exists`,
      );
    gitGraphDiagramNY62KEGXValue4.records.commits.set(
      gitGraphDiagramNY62KEGXValue128.id,
      gitGraphDiagramNY62KEGXValue128,
    );
    gitGraphDiagramNY62KEGXValue4.records.branches.set(
      gitGraphDiagramNY62KEGXValue4.records.currBranch,
      gitGraphDiagramNY62KEGXValue128.id,
    );
    chunkAGHRB4JFR.debug("in pushCommit " + gitGraphDiagramNY62KEGXValue128.id);
  }, "commit"),
  gitGraphDiagramNY62KEGXValue9 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam35,
  ) {
    let gitGraphDiagramNY62KEGXValue135 = gitGraphDiagramNY62KEGXParam35.name,
      gitGraphDiagramNY62KEGXValue136 = gitGraphDiagramNY62KEGXParam35.order;
    if (
      ((gitGraphDiagramNY62KEGXValue135 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue135,
        gitGraphDiagramNY62KEGXValue3(),
      )),
      gitGraphDiagramNY62KEGXValue4.records.branches.has(
        gitGraphDiagramNY62KEGXValue135,
      ))
    )
      throw Error(
        `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${gitGraphDiagramNY62KEGXValue135}")`,
      );
    gitGraphDiagramNY62KEGXValue4.records.branches.set(
      gitGraphDiagramNY62KEGXValue135,
      gitGraphDiagramNY62KEGXValue4.records.head == null
        ? null
        : gitGraphDiagramNY62KEGXValue4.records.head.id,
    );
    gitGraphDiagramNY62KEGXValue4.records.branchConfig.set(
      gitGraphDiagramNY62KEGXValue135,
      {
        name: gitGraphDiagramNY62KEGXValue135,
        order: gitGraphDiagramNY62KEGXValue136,
      },
    );
    gitGraphDiagramNY62KEGXValue12(gitGraphDiagramNY62KEGXValue135);
    chunkAGHRB4JFR.debug("in createBranch");
  }, "branch"),
  gitGraphDiagramNY62KEGXValue10 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam6) => {
      let gitGraphDiagramNY62KEGXValue76 = gitGraphDiagramNY62KEGXParam6.branch,
        gitGraphDiagramNY62KEGXValue77 = gitGraphDiagramNY62KEGXParam6.id,
        gitGraphDiagramNY62KEGXValue78 = gitGraphDiagramNY62KEGXParam6.type,
        gitGraphDiagramNY62KEGXValue79 = gitGraphDiagramNY62KEGXParam6.tags,
        gitGraphDiagramNY62KEGXValue80 = gitGraphDiagramNY62KEGXValue3();
      gitGraphDiagramNY62KEGXValue76 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue76,
        gitGraphDiagramNY62KEGXValue80,
      );
      gitGraphDiagramNY62KEGXValue77 &&= chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue77,
        gitGraphDiagramNY62KEGXValue80,
      );
      let gitGraphDiagramNY62KEGXValue81 =
          gitGraphDiagramNY62KEGXValue4.records.branches.get(
            gitGraphDiagramNY62KEGXValue4.records.currBranch,
          ),
        gitGraphDiagramNY62KEGXValue82 =
          gitGraphDiagramNY62KEGXValue4.records.branches.get(
            gitGraphDiagramNY62KEGXValue76,
          ),
        gitGraphDiagramNY62KEGXValue83 = gitGraphDiagramNY62KEGXValue81
          ? gitGraphDiagramNY62KEGXValue4.records.commits.get(
              gitGraphDiagramNY62KEGXValue81,
            )
          : undefined,
        gitGraphDiagramNY62KEGXValue84 = gitGraphDiagramNY62KEGXValue82
          ? gitGraphDiagramNY62KEGXValue4.records.commits.get(
              gitGraphDiagramNY62KEGXValue82,
            )
          : undefined;
      if (
        gitGraphDiagramNY62KEGXValue83 &&
        gitGraphDiagramNY62KEGXValue84 &&
        gitGraphDiagramNY62KEGXValue83.branch === gitGraphDiagramNY62KEGXValue76
      )
        throw Error(
          `Cannot merge branch '${gitGraphDiagramNY62KEGXValue76}' into itself.`,
        );
      if (
        gitGraphDiagramNY62KEGXValue4.records.currBranch ===
        gitGraphDiagramNY62KEGXValue76
      ) {
        let gitGraphDiagramNY62KEGXValue180 = Error(
          'Incorrect usage of "merge". Cannot merge a branch to itself',
        );
        throw (
          (gitGraphDiagramNY62KEGXValue180.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramNY62KEGXValue180
        );
      }
      if (
        gitGraphDiagramNY62KEGXValue83 === undefined ||
        !gitGraphDiagramNY62KEGXValue83
      ) {
        let gitGraphDiagramNY62KEGXValue176 = Error(
          `Incorrect usage of "merge". Current branch (${gitGraphDiagramNY62KEGXValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXValue176.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            expected: ["commit"],
          }),
          gitGraphDiagramNY62KEGXValue176
        );
      }
      if (
        !gitGraphDiagramNY62KEGXValue4.records.branches.has(
          gitGraphDiagramNY62KEGXValue76,
        )
      ) {
        let gitGraphDiagramNY62KEGXValue177 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramNY62KEGXValue76 +
            ") does not exist",
        );
        throw (
          (gitGraphDiagramNY62KEGXValue177.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            expected: [`branch ${gitGraphDiagramNY62KEGXValue76}`],
          }),
          gitGraphDiagramNY62KEGXValue177
        );
      }
      if (
        gitGraphDiagramNY62KEGXValue84 === undefined ||
        !gitGraphDiagramNY62KEGXValue84
      ) {
        let gitGraphDiagramNY62KEGXValue178 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramNY62KEGXValue76 +
            ") has no commits",
        );
        throw (
          (gitGraphDiagramNY62KEGXValue178.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            expected: ['"commit"'],
          }),
          gitGraphDiagramNY62KEGXValue178
        );
      }
      if (gitGraphDiagramNY62KEGXValue83 === gitGraphDiagramNY62KEGXValue84) {
        let gitGraphDiagramNY62KEGXValue181 = Error(
          'Incorrect usage of "merge". Both branches have same head',
        );
        throw (
          (gitGraphDiagramNY62KEGXValue181.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramNY62KEGXValue181
        );
      }
      if (
        gitGraphDiagramNY62KEGXValue77 &&
        gitGraphDiagramNY62KEGXValue4.records.commits.has(
          gitGraphDiagramNY62KEGXValue77,
        )
      ) {
        let gitGraphDiagramNY62KEGXValue149 = Error(
          'Incorrect usage of "merge". Commit with id:' +
            gitGraphDiagramNY62KEGXValue77 +
            " already exists, use different custom id",
        );
        throw (
          (gitGraphDiagramNY62KEGXValue149.hash = {
            text: `merge ${gitGraphDiagramNY62KEGXValue76} ${gitGraphDiagramNY62KEGXValue77} ${gitGraphDiagramNY62KEGXValue78} ${gitGraphDiagramNY62KEGXValue79?.join(" ")}`,
            token: `merge ${gitGraphDiagramNY62KEGXValue76} ${gitGraphDiagramNY62KEGXValue77} ${gitGraphDiagramNY62KEGXValue78} ${gitGraphDiagramNY62KEGXValue79?.join(" ")}`,
            expected: [
              `merge ${gitGraphDiagramNY62KEGXValue76} ${gitGraphDiagramNY62KEGXValue77}_UNIQUE ${gitGraphDiagramNY62KEGXValue78} ${gitGraphDiagramNY62KEGXValue79?.join(" ")}`,
            ],
          }),
          gitGraphDiagramNY62KEGXValue149
        );
      }
      let gitGraphDiagramNY62KEGXValue85 = gitGraphDiagramNY62KEGXValue82 || "",
        gitGraphDiagramNY62KEGXValue86 = {
          id:
            gitGraphDiagramNY62KEGXValue77 ||
            `${gitGraphDiagramNY62KEGXValue4.records.seq}-${gitGraphDiagramNY62KEGXHelper1()}`,
          message: `merged branch ${gitGraphDiagramNY62KEGXValue76} into ${gitGraphDiagramNY62KEGXValue4.records.currBranch}`,
          seq: gitGraphDiagramNY62KEGXValue4.records.seq++,
          parents:
            gitGraphDiagramNY62KEGXValue4.records.head == null
              ? []
              : [
                  gitGraphDiagramNY62KEGXValue4.records.head.id,
                  gitGraphDiagramNY62KEGXValue85,
                ],
          branch: gitGraphDiagramNY62KEGXValue4.records.currBranch,
          type: gitGraphDiagramNY62KEGXValue1.MERGE,
          customType: gitGraphDiagramNY62KEGXValue78,
          customId: !!gitGraphDiagramNY62KEGXValue77,
          tags: gitGraphDiagramNY62KEGXValue79 ?? [],
        };
      gitGraphDiagramNY62KEGXValue4.records.head =
        gitGraphDiagramNY62KEGXValue86;
      gitGraphDiagramNY62KEGXValue4.records.commits.set(
        gitGraphDiagramNY62KEGXValue86.id,
        gitGraphDiagramNY62KEGXValue86,
      );
      gitGraphDiagramNY62KEGXValue4.records.branches.set(
        gitGraphDiagramNY62KEGXValue4.records.currBranch,
        gitGraphDiagramNY62KEGXValue86.id,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramNY62KEGXValue4.records.branches);
      chunkAGHRB4JFR.debug("in mergeBranch");
    },
    "merge",
  ),
  gitGraphDiagramNY62KEGXValue11 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam5,
  ) {
    let gitGraphDiagramNY62KEGXValue69 = gitGraphDiagramNY62KEGXParam5.id,
      gitGraphDiagramNY62KEGXValue70 = gitGraphDiagramNY62KEGXParam5.targetId,
      gitGraphDiagramNY62KEGXValue71 = gitGraphDiagramNY62KEGXParam5.tags,
      gitGraphDiagramNY62KEGXValue72 = gitGraphDiagramNY62KEGXParam5.parent;
    chunkAGHRB4JFR.debug(
      "Entering cherryPick:",
      gitGraphDiagramNY62KEGXValue69,
      gitGraphDiagramNY62KEGXValue70,
      gitGraphDiagramNY62KEGXValue71,
    );
    let gitGraphDiagramNY62KEGXValue73 = gitGraphDiagramNY62KEGXValue3();
    if (
      ((gitGraphDiagramNY62KEGXValue69 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue69,
        gitGraphDiagramNY62KEGXValue73,
      )),
      (gitGraphDiagramNY62KEGXValue70 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue70,
        gitGraphDiagramNY62KEGXValue73,
      )),
      (gitGraphDiagramNY62KEGXValue71 = gitGraphDiagramNY62KEGXValue71?.map(
        (gitGraphDiagramNY62KEGXParam92) =>
          chunkABZYJK2DM.sanitizeText(
            gitGraphDiagramNY62KEGXParam92,
            gitGraphDiagramNY62KEGXValue73,
          ),
      )),
      (gitGraphDiagramNY62KEGXValue72 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXValue72,
        gitGraphDiagramNY62KEGXValue73,
      )),
      !gitGraphDiagramNY62KEGXValue69 ||
        !gitGraphDiagramNY62KEGXValue4.records.commits.has(
          gitGraphDiagramNY62KEGXValue69,
        ))
    ) {
      let gitGraphDiagramNY62KEGXValue172 = Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
      throw (
        (gitGraphDiagramNY62KEGXValue172.hash = {
          text: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
          token: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
          expected: ["cherry-pick abc"],
        }),
        gitGraphDiagramNY62KEGXValue172
      );
    }
    let gitGraphDiagramNY62KEGXValue74 =
      gitGraphDiagramNY62KEGXValue4.records.commits.get(
        gitGraphDiagramNY62KEGXValue69,
      );
    if (
      gitGraphDiagramNY62KEGXValue74 === undefined ||
      !gitGraphDiagramNY62KEGXValue74
    )
      throw Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
    if (
      gitGraphDiagramNY62KEGXValue72 &&
      !(
        Array.isArray(gitGraphDiagramNY62KEGXValue74.parents) &&
        gitGraphDiagramNY62KEGXValue74.parents.includes(
          gitGraphDiagramNY62KEGXValue72,
        )
      )
    )
      throw Error(
        "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.",
      );
    let gitGraphDiagramNY62KEGXValue75 = gitGraphDiagramNY62KEGXValue74.branch;
    if (
      gitGraphDiagramNY62KEGXValue74.type ===
        gitGraphDiagramNY62KEGXValue1.MERGE &&
      !gitGraphDiagramNY62KEGXValue72
    )
      throw Error(
        "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.",
      );
    if (
      !gitGraphDiagramNY62KEGXValue70 ||
      !gitGraphDiagramNY62KEGXValue4.records.commits.has(
        gitGraphDiagramNY62KEGXValue70,
      )
    ) {
      if (
        gitGraphDiagramNY62KEGXValue75 ===
        gitGraphDiagramNY62KEGXValue4.records.currBranch
      ) {
        let gitGraphDiagramNY62KEGXValue173 = Error(
          'Incorrect usage of "cherryPick". Source commit is already on current branch',
        );
        throw (
          (gitGraphDiagramNY62KEGXValue173.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXValue173
        );
      }
      let gitGraphDiagramNY62KEGXValue91 =
        gitGraphDiagramNY62KEGXValue4.records.branches.get(
          gitGraphDiagramNY62KEGXValue4.records.currBranch,
        );
      if (
        gitGraphDiagramNY62KEGXValue91 === undefined ||
        !gitGraphDiagramNY62KEGXValue91
      ) {
        let gitGraphDiagramNY62KEGXValue167 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramNY62KEGXValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXValue167.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXValue167
        );
      }
      let gitGraphDiagramNY62KEGXValue92 =
        gitGraphDiagramNY62KEGXValue4.records.commits.get(
          gitGraphDiagramNY62KEGXValue91,
        );
      if (
        gitGraphDiagramNY62KEGXValue92 === undefined ||
        !gitGraphDiagramNY62KEGXValue92
      ) {
        let gitGraphDiagramNY62KEGXValue168 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramNY62KEGXValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramNY62KEGXValue168.hash = {
            text: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            token: `cherryPick ${gitGraphDiagramNY62KEGXValue69} ${gitGraphDiagramNY62KEGXValue70}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramNY62KEGXValue168
        );
      }
      let gitGraphDiagramNY62KEGXValue93 = {
        id:
          gitGraphDiagramNY62KEGXValue4.records.seq +
          "-" +
          gitGraphDiagramNY62KEGXHelper1(),
        message: `cherry-picked ${gitGraphDiagramNY62KEGXValue74?.message} into ${gitGraphDiagramNY62KEGXValue4.records.currBranch}`,
        seq: gitGraphDiagramNY62KEGXValue4.records.seq++,
        parents:
          gitGraphDiagramNY62KEGXValue4.records.head == null
            ? []
            : [
                gitGraphDiagramNY62KEGXValue4.records.head.id,
                gitGraphDiagramNY62KEGXValue74.id,
              ],
        branch: gitGraphDiagramNY62KEGXValue4.records.currBranch,
        type: gitGraphDiagramNY62KEGXValue1.CHERRY_PICK,
        tags: gitGraphDiagramNY62KEGXValue71
          ? gitGraphDiagramNY62KEGXValue71.filter(Boolean)
          : [
              `cherry-pick:${gitGraphDiagramNY62KEGXValue74.id}${gitGraphDiagramNY62KEGXValue74.type === gitGraphDiagramNY62KEGXValue1.MERGE ? `|parent:${gitGraphDiagramNY62KEGXValue72}` : ""}`,
            ],
      };
      gitGraphDiagramNY62KEGXValue4.records.head =
        gitGraphDiagramNY62KEGXValue93;
      gitGraphDiagramNY62KEGXValue4.records.commits.set(
        gitGraphDiagramNY62KEGXValue93.id,
        gitGraphDiagramNY62KEGXValue93,
      );
      gitGraphDiagramNY62KEGXValue4.records.branches.set(
        gitGraphDiagramNY62KEGXValue4.records.currBranch,
        gitGraphDiagramNY62KEGXValue93.id,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramNY62KEGXValue4.records.branches);
      chunkAGHRB4JFR.debug("in cherryPick");
    }
  }, "cherryPick"),
  gitGraphDiagramNY62KEGXValue12 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam34,
  ) {
    if (
      ((gitGraphDiagramNY62KEGXParam34 = chunkABZYJK2DM.sanitizeText(
        gitGraphDiagramNY62KEGXParam34,
        gitGraphDiagramNY62KEGXValue3(),
      )),
      gitGraphDiagramNY62KEGXValue4.records.branches.has(
        gitGraphDiagramNY62KEGXParam34,
      ))
    ) {
      gitGraphDiagramNY62KEGXValue4.records.currBranch =
        gitGraphDiagramNY62KEGXParam34;
      let gitGraphDiagramNY62KEGXValue179 =
        gitGraphDiagramNY62KEGXValue4.records.branches.get(
          gitGraphDiagramNY62KEGXValue4.records.currBranch,
        );
      gitGraphDiagramNY62KEGXValue179 === undefined ||
      !gitGraphDiagramNY62KEGXValue179
        ? (gitGraphDiagramNY62KEGXValue4.records.head = null)
        : (gitGraphDiagramNY62KEGXValue4.records.head =
            gitGraphDiagramNY62KEGXValue4.records.commits.get(
              gitGraphDiagramNY62KEGXValue179,
            ) ?? null);
    } else {
      let gitGraphDiagramNY62KEGXValue174 = Error(
        `Trying to checkout branch which is not yet created. (Help try using "branch ${gitGraphDiagramNY62KEGXParam34}")`,
      );
      throw (
        (gitGraphDiagramNY62KEGXValue174.hash = {
          text: `checkout ${gitGraphDiagramNY62KEGXParam34}`,
          token: `checkout ${gitGraphDiagramNY62KEGXParam34}`,
          expected: [`branch ${gitGraphDiagramNY62KEGXParam34}`],
        }),
        gitGraphDiagramNY62KEGXValue174
      );
    }
  }, "checkout");
function gitGraphDiagramNY62KEGXHelper3(
  gitGraphDiagramNY62KEGXParam82,
  gitGraphDiagramNY62KEGXParam83,
  gitGraphDiagramNY62KEGXParam84,
) {
  let gitGraphDiagramNY62KEGXValue211 = gitGraphDiagramNY62KEGXParam82.indexOf(
    gitGraphDiagramNY62KEGXParam83,
  );
  gitGraphDiagramNY62KEGXValue211 === -1
    ? gitGraphDiagramNY62KEGXParam82.push(gitGraphDiagramNY62KEGXParam84)
    : gitGraphDiagramNY62KEGXParam82.splice(
        gitGraphDiagramNY62KEGXValue211,
        1,
        gitGraphDiagramNY62KEGXParam84,
      );
}
chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper3, "upsert");
function gitGraphDiagramNY62KEGXHelper4(gitGraphDiagramNY62KEGXParam32) {
  let gitGraphDiagramNY62KEGXValue129 = gitGraphDiagramNY62KEGXParam32.reduce(
      (accumulator, current) =>
        accumulator.seq > current.seq ? accumulator : current,
      gitGraphDiagramNY62KEGXParam32[0],
    ),
    gitGraphDiagramNY62KEGXValue130 = "";
  gitGraphDiagramNY62KEGXParam32.forEach(function (item) {
    item === gitGraphDiagramNY62KEGXValue129
      ? (gitGraphDiagramNY62KEGXValue130 += "\t*")
      : (gitGraphDiagramNY62KEGXValue130 += "\t|");
  });
  let gitGraphDiagramNY62KEGXValue131 = [
    gitGraphDiagramNY62KEGXValue130,
    gitGraphDiagramNY62KEGXValue129.id,
    gitGraphDiagramNY62KEGXValue129.seq,
  ];
  for (let gitGraphDiagramNY62KEGXValue210 in gitGraphDiagramNY62KEGXValue4
    .records.branches)
    gitGraphDiagramNY62KEGXValue4.records.branches.get(
      gitGraphDiagramNY62KEGXValue210,
    ) === gitGraphDiagramNY62KEGXValue129.id &&
      gitGraphDiagramNY62KEGXValue131.push(gitGraphDiagramNY62KEGXValue210);
  if (
    (chunkAGHRB4JFR.debug(gitGraphDiagramNY62KEGXValue131.join(" ")),
    gitGraphDiagramNY62KEGXValue129.parents &&
      gitGraphDiagramNY62KEGXValue129.parents.length == 2 &&
      gitGraphDiagramNY62KEGXValue129.parents[0] &&
      gitGraphDiagramNY62KEGXValue129.parents[1])
  ) {
    let gitGraphDiagramNY62KEGXValue196 =
      gitGraphDiagramNY62KEGXValue4.records.commits.get(
        gitGraphDiagramNY62KEGXValue129.parents[0],
      );
    gitGraphDiagramNY62KEGXHelper3(
      gitGraphDiagramNY62KEGXParam32,
      gitGraphDiagramNY62KEGXValue129,
      gitGraphDiagramNY62KEGXValue196,
    );
    gitGraphDiagramNY62KEGXValue129.parents[1] &&
      gitGraphDiagramNY62KEGXParam32.push(
        gitGraphDiagramNY62KEGXValue4.records.commits.get(
          gitGraphDiagramNY62KEGXValue129.parents[1],
        ),
      );
  } else if (gitGraphDiagramNY62KEGXValue129.parents.length == 0) return;
  else if (gitGraphDiagramNY62KEGXValue129.parents[0]) {
    let gitGraphDiagramNY62KEGXValue216 =
      gitGraphDiagramNY62KEGXValue4.records.commits.get(
        gitGraphDiagramNY62KEGXValue129.parents[0],
      );
    gitGraphDiagramNY62KEGXHelper3(
      gitGraphDiagramNY62KEGXParam32,
      gitGraphDiagramNY62KEGXValue129,
      gitGraphDiagramNY62KEGXValue216,
    );
  }
  gitGraphDiagramNY62KEGXParam32 = gitGraphDiagramNY62KEGXHelper2(
    gitGraphDiagramNY62KEGXParam32,
    (gitGraphDiagramNY62KEGXParam107) => gitGraphDiagramNY62KEGXParam107.id,
  );
  gitGraphDiagramNY62KEGXHelper4(gitGraphDiagramNY62KEGXParam32);
}
chunkAGHRB4JFN(gitGraphDiagramNY62KEGXHelper4, "prettyPrintCommitHistory");
var gitGraphDiagramNY62KEGXValue13 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFR.debug(gitGraphDiagramNY62KEGXValue4.records.commits);
    let gitGraphDiagramNY62KEGXValue213 = gitGraphDiagramNY62KEGXValue18()[0];
    gitGraphDiagramNY62KEGXHelper4([gitGraphDiagramNY62KEGXValue213]);
  }, "prettyPrint"),
  gitGraphDiagramNY62KEGXValue14 = chunkAGHRB4JFN(function () {
    gitGraphDiagramNY62KEGXValue4.reset();
    _chunkABZYJK2DK();
  }, "clear"),
  gitGraphDiagramNY62KEGXValue15 = chunkAGHRB4JFN(function () {
    return [...gitGraphDiagramNY62KEGXValue4.records.branchConfig.values()]
      .map((item, index) =>
        item.order !== null && item.order !== undefined
          ? item
          : {
              ...item,
              order: parseFloat(`0.${index}`),
            },
      )
      .sort(
        (gitGraphDiagramNY62KEGXParam88, gitGraphDiagramNY62KEGXParam89) =>
          (gitGraphDiagramNY62KEGXParam88.order ?? 0) -
          (gitGraphDiagramNY62KEGXParam89.order ?? 0),
      )
      .map(({ name }) => ({
        name,
      }));
  }, "getBranchesAsObjArray"),
  gitGraphDiagramNY62KEGXValue16 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXValue4.records.branches;
  }, "getBranches"),
  gitGraphDiagramNY62KEGXValue17 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramNY62KEGXValue4.records.commits;
  }, "getCommits"),
  gitGraphDiagramNY62KEGXValue18 = chunkAGHRB4JFN(function () {
    let gitGraphDiagramNY62KEGXValue193 = [
      ...gitGraphDiagramNY62KEGXValue4.records.commits.values(),
    ];
    return (
      gitGraphDiagramNY62KEGXValue193.forEach(function (item) {
        chunkAGHRB4JFR.debug(item.id);
      }),
      gitGraphDiagramNY62KEGXValue193.sort(
        (gitGraphDiagramNY62KEGXParam95, gitGraphDiagramNY62KEGXParam96) =>
          gitGraphDiagramNY62KEGXParam95.seq -
          gitGraphDiagramNY62KEGXParam96.seq,
      ),
      gitGraphDiagramNY62KEGXValue193
    );
  }, "getCommitsArray"),
  gitGraphDiagramNY62KEGXValue19 = {
    commitType: gitGraphDiagramNY62KEGXValue1,
    getConfig: gitGraphDiagramNY62KEGXValue3,
    setDirection: gitGraphDiagramNY62KEGXValue5,
    setOptions: gitGraphDiagramNY62KEGXValue6,
    getOptions: gitGraphDiagramNY62KEGXValue7,
    commit: gitGraphDiagramNY62KEGXValue8,
    branch: gitGraphDiagramNY62KEGXValue9,
    merge: gitGraphDiagramNY62KEGXValue10,
    cherryPick: gitGraphDiagramNY62KEGXValue11,
    checkout: gitGraphDiagramNY62KEGXValue12,
    prettyPrint: gitGraphDiagramNY62KEGXValue13,
    clear: gitGraphDiagramNY62KEGXValue14,
    getBranchesAsObjArray: gitGraphDiagramNY62KEGXValue15,
    getBranches: gitGraphDiagramNY62KEGXValue16,
    getCommits: gitGraphDiagramNY62KEGXValue17,
    getCommitsArray: gitGraphDiagramNY62KEGXValue18,
    getCurrentBranch: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXValue4.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXValue4.records.direction;
    }, "getDirection"),
    getHead: chunkAGHRB4JFN(function () {
      return gitGraphDiagramNY62KEGXValue4.records.head;
    }, "getHead"),
    setAccTitle: chunkABZYJK2DN,
    getAccTitle: chunkABZYJK2DR,
    getAccDescription: chunkABZYJK2DJ,
    setAccDescription: chunkABZYJK2DZ,
    setDiagramTitle: _chunkABZYJK2DC,
    getDiagramTitle: chunkABZYJK2DF,
  },
  gitGraphDiagramNY62KEGXValue20 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam80, gitGraphDiagramNY62KEGXParam81) => {
      chunk4BX2VUAB(
        gitGraphDiagramNY62KEGXParam80,
        gitGraphDiagramNY62KEGXParam81,
      );
      gitGraphDiagramNY62KEGXParam80.dir &&
        gitGraphDiagramNY62KEGXParam81.setDirection(
          gitGraphDiagramNY62KEGXParam80.dir,
        );
      for (let gitGraphDiagramNY62KEGXValue218 of gitGraphDiagramNY62KEGXParam80.statements)
        gitGraphDiagramNY62KEGXValue21(
          gitGraphDiagramNY62KEGXValue218,
          gitGraphDiagramNY62KEGXParam81,
        );
    },
    "populate",
  ),
  gitGraphDiagramNY62KEGXValue21 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam39, gitGraphDiagramNY62KEGXParam40) => {
      let gitGraphDiagramNY62KEGXValue147 = {
        Commit: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam97) =>
            gitGraphDiagramNY62KEGXParam40.commit(
              gitGraphDiagramNY62KEGXValue22(gitGraphDiagramNY62KEGXParam97),
            ),
          "Commit",
        ),
        Branch: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam98) =>
            gitGraphDiagramNY62KEGXParam40.branch(
              gitGraphDiagramNY62KEGXValue23(gitGraphDiagramNY62KEGXParam98),
            ),
          "Branch",
        ),
        Merge: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam99) =>
            gitGraphDiagramNY62KEGXParam40.merge(
              gitGraphDiagramNY62KEGXValue24(gitGraphDiagramNY62KEGXParam99),
            ),
          "Merge",
        ),
        Checkout: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam94) =>
            gitGraphDiagramNY62KEGXParam40.checkout(
              gitGraphDiagramNY62KEGXValue25(gitGraphDiagramNY62KEGXParam94),
            ),
          "Checkout",
        ),
        CherryPicking: chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam93) =>
            gitGraphDiagramNY62KEGXParam40.cherryPick(
              gitGraphDiagramNY62KEGXValue26(gitGraphDiagramNY62KEGXParam93),
            ),
          "CherryPicking",
        ),
      }[gitGraphDiagramNY62KEGXParam39.$type];
      gitGraphDiagramNY62KEGXValue147
        ? gitGraphDiagramNY62KEGXValue147(gitGraphDiagramNY62KEGXParam39)
        : chunkAGHRB4JFR.error(
            `Unknown statement type: ${gitGraphDiagramNY62KEGXParam39.$type}`,
          );
    },
    "parseStatement",
  ),
  gitGraphDiagramNY62KEGXValue22 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam74) => ({
      id: gitGraphDiagramNY62KEGXParam74.id,
      msg: gitGraphDiagramNY62KEGXParam74.message ?? "",
      type:
        gitGraphDiagramNY62KEGXParam74.type === undefined
          ? gitGraphDiagramNY62KEGXValue1.NORMAL
          : gitGraphDiagramNY62KEGXValue1[gitGraphDiagramNY62KEGXParam74.type],
      tags: gitGraphDiagramNY62KEGXParam74.tags ?? undefined,
    }),
    "parseCommit",
  ),
  gitGraphDiagramNY62KEGXValue23 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam86) => ({
      name: gitGraphDiagramNY62KEGXParam86.name,
      order: gitGraphDiagramNY62KEGXParam86.order ?? 0,
    }),
    "parseBranch",
  ),
  gitGraphDiagramNY62KEGXValue24 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam75) => ({
      branch: gitGraphDiagramNY62KEGXParam75.branch,
      id: gitGraphDiagramNY62KEGXParam75.id ?? "",
      type:
        gitGraphDiagramNY62KEGXParam75.type === undefined
          ? undefined
          : gitGraphDiagramNY62KEGXValue1[gitGraphDiagramNY62KEGXParam75.type],
      tags: gitGraphDiagramNY62KEGXParam75.tags ?? undefined,
    }),
    "parseMerge",
  ),
  gitGraphDiagramNY62KEGXValue25 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam101) => gitGraphDiagramNY62KEGXParam101.branch,
    "parseCheckout",
  ),
  gitGraphDiagramNY62KEGXValue26 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam77) => ({
      id: gitGraphDiagramNY62KEGXParam77.id,
      targetId: "",
      tags:
        gitGraphDiagramNY62KEGXParam77.tags?.length === 0
          ? undefined
          : gitGraphDiagramNY62KEGXParam77.tags,
      parent: gitGraphDiagramNY62KEGXParam77.parent,
    }),
    "parseCherryPicking",
  ),
  gitGraphDiagramNY62KEGXValue27 = {
    parse: chunkAGHRB4JFN(async (gitGraphDiagramNY62KEGXParam85) => {
      let gitGraphDiagramNY62KEGXValue214 = await MermaidParserCore(
        "gitGraph",
        gitGraphDiagramNY62KEGXParam85,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramNY62KEGXValue214);
      gitGraphDiagramNY62KEGXValue20(
        gitGraphDiagramNY62KEGXValue214,
        gitGraphDiagramNY62KEGXValue19,
      );
    }, "parse"),
  },
  gitGraphDiagramNY62KEGXValue28 = _chunkABZYJK2DB()?.gitGraph,
  gitGraphDiagramNY62KEGXValue34 = new Map(),
  gitGraphDiagramNY62KEGXValue35 = new Map(),
  gitGraphDiagramNY62KEGXValue37 = new Map(),
  gitGraphDiagramNY62KEGXValue38 = [],
  gitGraphDiagramNY62KEGXValue39 = 0,
  gitGraphDiagramNY62KEGXValue40 = "LR",
  gitGraphDiagramNY62KEGXValue41 = chunkAGHRB4JFN(() => {
    gitGraphDiagramNY62KEGXValue34.clear();
    gitGraphDiagramNY62KEGXValue35.clear();
    gitGraphDiagramNY62KEGXValue37.clear();
    gitGraphDiagramNY62KEGXValue39 = 0;
    gitGraphDiagramNY62KEGXValue38 = [];
    gitGraphDiagramNY62KEGXValue40 = "LR";
  }, "clear"),
  gitGraphDiagramNY62KEGXValue42 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam33) => {
      let gitGraphDiagramNY62KEGXValue134 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      return (
        (typeof gitGraphDiagramNY62KEGXParam33 == "string"
          ? gitGraphDiagramNY62KEGXParam33.split(/\\n|\n|<br\s*\/?>/gi)
          : gitGraphDiagramNY62KEGXParam33
        ).forEach((item) => {
          let gitGraphDiagramNY62KEGXValue148 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          gitGraphDiagramNY62KEGXValue148.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          gitGraphDiagramNY62KEGXValue148.setAttribute("dy", "1em");
          gitGraphDiagramNY62KEGXValue148.setAttribute("x", "0");
          gitGraphDiagramNY62KEGXValue148.setAttribute("class", "row");
          gitGraphDiagramNY62KEGXValue148.textContent = item.trim();
          gitGraphDiagramNY62KEGXValue134.appendChild(
            gitGraphDiagramNY62KEGXValue148,
          );
        }),
        gitGraphDiagramNY62KEGXValue134
      );
    },
    "drawText",
  ),
  gitGraphDiagramNY62KEGXValue43 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam55) => {
      let gitGraphDiagramNY62KEGXValue169,
        gitGraphDiagramNY62KEGXValue170,
        gitGraphDiagramNY62KEGXValue171;
      return (
        gitGraphDiagramNY62KEGXValue40 === "BT"
          ? ((gitGraphDiagramNY62KEGXValue170 = chunkAGHRB4JFN(
              (
                gitGraphDiagramNY62KEGXParam102,
                gitGraphDiagramNY62KEGXParam103,
              ) =>
                gitGraphDiagramNY62KEGXParam102 <=
                gitGraphDiagramNY62KEGXParam103,
              "comparisonFunc",
            )),
            (gitGraphDiagramNY62KEGXValue171 = 1 / 0))
          : ((gitGraphDiagramNY62KEGXValue170 = chunkAGHRB4JFN(
              (
                gitGraphDiagramNY62KEGXParam104,
                gitGraphDiagramNY62KEGXParam105,
              ) =>
                gitGraphDiagramNY62KEGXParam104 >=
                gitGraphDiagramNY62KEGXParam105,
              "comparisonFunc",
            )),
            (gitGraphDiagramNY62KEGXValue171 = 0)),
        gitGraphDiagramNY62KEGXParam55.forEach((item) => {
          let gitGraphDiagramNY62KEGXValue206 =
            gitGraphDiagramNY62KEGXValue40 === "TB" ||
            gitGraphDiagramNY62KEGXValue40 == "BT"
              ? gitGraphDiagramNY62KEGXValue35.get(item)?.y
              : gitGraphDiagramNY62KEGXValue35.get(item)?.x;
          gitGraphDiagramNY62KEGXValue206 !== undefined &&
            gitGraphDiagramNY62KEGXValue170(
              gitGraphDiagramNY62KEGXValue206,
              gitGraphDiagramNY62KEGXValue171,
            ) &&
            ((gitGraphDiagramNY62KEGXValue169 = item),
            (gitGraphDiagramNY62KEGXValue171 =
              gitGraphDiagramNY62KEGXValue206));
        }),
        gitGraphDiagramNY62KEGXValue169
      );
    },
    "findClosestParent",
  ),
  _e = chunkAGHRB4JFN((gitGraphDiagramNY62KEGXParam76) => {
    let gitGraphDiagramNY62KEGXValue204 = "",
      gitGraphDiagramNY62KEGXValue205 = 1 / 0;
    return (
      gitGraphDiagramNY62KEGXParam76.forEach((item) => {
        let gitGraphDiagramNY62KEGXValue217 =
          gitGraphDiagramNY62KEGXValue35.get(item).y;
        gitGraphDiagramNY62KEGXValue217 <= gitGraphDiagramNY62KEGXValue205 &&
          ((gitGraphDiagramNY62KEGXValue204 = item),
          (gitGraphDiagramNY62KEGXValue205 = gitGraphDiagramNY62KEGXValue217));
      }),
      gitGraphDiagramNY62KEGXValue204 || undefined
    );
  }, "findClosestParentBT"),
  gitGraphDiagramNY62KEGXValue44 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam36,
      gitGraphDiagramNY62KEGXParam37,
      gitGraphDiagramNY62KEGXParam38,
    ) => {
      let gitGraphDiagramNY62KEGXValue137 = gitGraphDiagramNY62KEGXParam38,
        gitGraphDiagramNY62KEGXValue138 = gitGraphDiagramNY62KEGXParam38,
        gitGraphDiagramNY62KEGXValue139 = [];
      gitGraphDiagramNY62KEGXParam36.forEach((item) => {
        let gitGraphDiagramNY62KEGXValue186 =
          gitGraphDiagramNY62KEGXParam37.get(item);
        if (!gitGraphDiagramNY62KEGXValue186)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramNY62KEGXValue186.parents.length
          ? ((gitGraphDiagramNY62KEGXValue137 = be(
              gitGraphDiagramNY62KEGXValue186,
            )),
            (gitGraphDiagramNY62KEGXValue138 = Math.max(
              gitGraphDiagramNY62KEGXValue137,
              gitGraphDiagramNY62KEGXValue138,
            )))
          : gitGraphDiagramNY62KEGXValue139.push(
              gitGraphDiagramNY62KEGXValue186,
            );
        gitGraphDiagramNY62KEGXValue46(
          gitGraphDiagramNY62KEGXValue186,
          gitGraphDiagramNY62KEGXValue137,
        );
      });
      gitGraphDiagramNY62KEGXValue137 = gitGraphDiagramNY62KEGXValue138;
      gitGraphDiagramNY62KEGXValue139.forEach((item) => {
        gitGraphDiagramNY62KEGXValue47(
          item,
          gitGraphDiagramNY62KEGXValue137,
          gitGraphDiagramNY62KEGXParam38,
        );
      });
      gitGraphDiagramNY62KEGXParam36.forEach((item) => {
        let gitGraphDiagramNY62KEGXValue185 =
          gitGraphDiagramNY62KEGXParam37.get(item);
        if (gitGraphDiagramNY62KEGXValue185?.parents.length) {
          let gitGraphDiagramNY62KEGXValue198 = _e(
            gitGraphDiagramNY62KEGXValue185.parents,
          );
          gitGraphDiagramNY62KEGXValue137 =
            gitGraphDiagramNY62KEGXValue35.get(gitGraphDiagramNY62KEGXValue198)
              .y - 40;
          gitGraphDiagramNY62KEGXValue137 <= gitGraphDiagramNY62KEGXValue138 &&
            (gitGraphDiagramNY62KEGXValue138 = gitGraphDiagramNY62KEGXValue137);
          let gitGraphDiagramNY62KEGXValue199 =
              gitGraphDiagramNY62KEGXValue34.get(
                gitGraphDiagramNY62KEGXValue185.branch,
              ).pos,
            gitGraphDiagramNY62KEGXValue200 =
              gitGraphDiagramNY62KEGXValue137 - 10;
          gitGraphDiagramNY62KEGXValue35.set(
            gitGraphDiagramNY62KEGXValue185.id,
            {
              x: gitGraphDiagramNY62KEGXValue199,
              y: gitGraphDiagramNY62KEGXValue200,
            },
          );
        }
      });
    },
    "setParallelBTPos",
  ),
  gitGraphDiagramNY62KEGXValue45 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam49) => {
      let gitGraphDiagramNY62KEGXValue162 = gitGraphDiagramNY62KEGXValue43(
        gitGraphDiagramNY62KEGXParam49.parents.filter((item) => item !== null),
      );
      if (!gitGraphDiagramNY62KEGXValue162)
        throw Error(
          `Closest parent not found for commit ${gitGraphDiagramNY62KEGXParam49.id}`,
        );
      let gitGraphDiagramNY62KEGXValue163 = gitGraphDiagramNY62KEGXValue35.get(
        gitGraphDiagramNY62KEGXValue162,
      )?.y;
      if (gitGraphDiagramNY62KEGXValue163 === undefined)
        throw Error(
          `Closest parent position not found for commit ${gitGraphDiagramNY62KEGXParam49.id}`,
        );
      return gitGraphDiagramNY62KEGXValue163;
    },
    "findClosestParentPos",
  ),
  be = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam106) =>
      gitGraphDiagramNY62KEGXValue45(gitGraphDiagramNY62KEGXParam106) + 40,
    "calculateCommitPosition",
  ),
  gitGraphDiagramNY62KEGXValue46 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam59, gitGraphDiagramNY62KEGXParam60) => {
      let gitGraphDiagramNY62KEGXValue182 = gitGraphDiagramNY62KEGXValue34.get(
        gitGraphDiagramNY62KEGXParam59.branch,
      );
      if (!gitGraphDiagramNY62KEGXValue182)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramNY62KEGXParam59.id}`,
        );
      let gitGraphDiagramNY62KEGXValue183 = gitGraphDiagramNY62KEGXValue182.pos,
        gitGraphDiagramNY62KEGXValue184 = gitGraphDiagramNY62KEGXParam60 + 10;
      return (
        gitGraphDiagramNY62KEGXValue35.set(gitGraphDiagramNY62KEGXParam59.id, {
          x: gitGraphDiagramNY62KEGXValue183,
          y: gitGraphDiagramNY62KEGXValue184,
        }),
        {
          x: gitGraphDiagramNY62KEGXValue183,
          y: gitGraphDiagramNY62KEGXValue184,
        }
      );
    },
    "setCommitPosition",
  ),
  gitGraphDiagramNY62KEGXValue47 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam61,
      gitGraphDiagramNY62KEGXParam62,
      gitGraphDiagramNY62KEGXParam63,
    ) => {
      let gitGraphDiagramNY62KEGXValue187 = gitGraphDiagramNY62KEGXValue34.get(
        gitGraphDiagramNY62KEGXParam61.branch,
      );
      if (!gitGraphDiagramNY62KEGXValue187)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramNY62KEGXParam61.id}`,
        );
      let gitGraphDiagramNY62KEGXValue188 =
          gitGraphDiagramNY62KEGXParam62 + gitGraphDiagramNY62KEGXParam63,
        gitGraphDiagramNY62KEGXValue189 = gitGraphDiagramNY62KEGXValue187.pos;
      gitGraphDiagramNY62KEGXValue35.set(gitGraphDiagramNY62KEGXParam61.id, {
        x: gitGraphDiagramNY62KEGXValue189,
        y: gitGraphDiagramNY62KEGXValue188,
      });
    },
    "setRootPosition",
  ),
  gitGraphDiagramNY62KEGXValue48 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam8,
      gitGraphDiagramNY62KEGXParam9,
      gitGraphDiagramNY62KEGXParam10,
      gitGraphDiagramNY62KEGXParam11,
      gitGraphDiagramNY62KEGXParam12,
      gitGraphDiagramNY62KEGXParam13,
    ) => {
      if (
        gitGraphDiagramNY62KEGXParam13 ===
        gitGraphDiagramNY62KEGXValue1.HIGHLIGHT
      ) {
        gitGraphDiagramNY62KEGXParam8
          .append("rect")
          .attr("x", gitGraphDiagramNY62KEGXParam10.x - 10)
          .attr("y", gitGraphDiagramNY62KEGXParam10.y - 10)
          .attr("width", 20)
          .attr("height", 20)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} commit-highlight${gitGraphDiagramNY62KEGXParam12 % 8} ${gitGraphDiagramNY62KEGXParam11}-outer`,
          );
        gitGraphDiagramNY62KEGXParam8
          .append("rect")
          .attr("x", gitGraphDiagramNY62KEGXParam10.x - 6)
          .attr("y", gitGraphDiagramNY62KEGXParam10.y - 6)
          .attr("width", 12)
          .attr("height", 12)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} commit${gitGraphDiagramNY62KEGXParam12 % 8} ${gitGraphDiagramNY62KEGXParam11}-inner`,
          );
      } else if (
        gitGraphDiagramNY62KEGXParam13 ===
        gitGraphDiagramNY62KEGXValue1.CHERRY_PICK
      ) {
        gitGraphDiagramNY62KEGXParam8
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXParam10.x)
          .attr("cy", gitGraphDiagramNY62KEGXParam10.y)
          .attr("r", 10)
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} ${gitGraphDiagramNY62KEGXParam11}`,
          );
        gitGraphDiagramNY62KEGXParam8
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXParam10.x - 3)
          .attr("cy", gitGraphDiagramNY62KEGXParam10.y + 2)
          .attr("r", 2.75)
          .attr("fill", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} ${gitGraphDiagramNY62KEGXParam11}`,
          );
        gitGraphDiagramNY62KEGXParam8
          .append("circle")
          .attr("cx", gitGraphDiagramNY62KEGXParam10.x + 3)
          .attr("cy", gitGraphDiagramNY62KEGXParam10.y + 2)
          .attr("r", 2.75)
          .attr("fill", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} ${gitGraphDiagramNY62KEGXParam11}`,
          );
        gitGraphDiagramNY62KEGXParam8
          .append("line")
          .attr("x1", gitGraphDiagramNY62KEGXParam10.x + 3)
          .attr("y1", gitGraphDiagramNY62KEGXParam10.y + 1)
          .attr("x2", gitGraphDiagramNY62KEGXParam10.x)
          .attr("y2", gitGraphDiagramNY62KEGXParam10.y - 5)
          .attr("stroke", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} ${gitGraphDiagramNY62KEGXParam11}`,
          );
        gitGraphDiagramNY62KEGXParam8
          .append("line")
          .attr("x1", gitGraphDiagramNY62KEGXParam10.x - 3)
          .attr("y1", gitGraphDiagramNY62KEGXParam10.y + 1)
          .attr("x2", gitGraphDiagramNY62KEGXParam10.x)
          .attr("y2", gitGraphDiagramNY62KEGXParam10.y - 5)
          .attr("stroke", "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} ${gitGraphDiagramNY62KEGXParam11}`,
          );
      } else {
        let gitGraphDiagramNY62KEGXValue133 =
          gitGraphDiagramNY62KEGXParam8.append("circle");
        if (
          (gitGraphDiagramNY62KEGXValue133.attr(
            "cx",
            gitGraphDiagramNY62KEGXParam10.x,
          ),
          gitGraphDiagramNY62KEGXValue133.attr(
            "cy",
            gitGraphDiagramNY62KEGXParam10.y,
          ),
          gitGraphDiagramNY62KEGXValue133.attr(
            "r",
            gitGraphDiagramNY62KEGXParam9.type ===
              gitGraphDiagramNY62KEGXValue1.MERGE
              ? 9
              : 10,
          ),
          gitGraphDiagramNY62KEGXValue133.attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam9.id} commit${gitGraphDiagramNY62KEGXParam12 % 8}`,
          ),
          gitGraphDiagramNY62KEGXParam13 ===
            gitGraphDiagramNY62KEGXValue1.MERGE)
        ) {
          let gitGraphDiagramNY62KEGXValue192 =
            gitGraphDiagramNY62KEGXParam8.append("circle");
          gitGraphDiagramNY62KEGXValue192.attr(
            "cx",
            gitGraphDiagramNY62KEGXParam10.x,
          );
          gitGraphDiagramNY62KEGXValue192.attr(
            "cy",
            gitGraphDiagramNY62KEGXParam10.y,
          );
          gitGraphDiagramNY62KEGXValue192.attr("r", 6);
          gitGraphDiagramNY62KEGXValue192.attr(
            "class",
            `commit ${gitGraphDiagramNY62KEGXParam11} ${gitGraphDiagramNY62KEGXParam9.id} commit${gitGraphDiagramNY62KEGXParam12 % 8}`,
          );
        }
        gitGraphDiagramNY62KEGXParam13 ===
          gitGraphDiagramNY62KEGXValue1.REVERSE &&
          gitGraphDiagramNY62KEGXParam8
            .append("path")
            .attr(
              "d",
              `M ${gitGraphDiagramNY62KEGXParam10.x - 5},${gitGraphDiagramNY62KEGXParam10.y - 5}L${gitGraphDiagramNY62KEGXParam10.x + 5},${gitGraphDiagramNY62KEGXParam10.y + 5}M${gitGraphDiagramNY62KEGXParam10.x - 5},${gitGraphDiagramNY62KEGXParam10.y + 5}L${gitGraphDiagramNY62KEGXParam10.x + 5},${gitGraphDiagramNY62KEGXParam10.y - 5}`,
            )
            .attr(
              "class",
              `commit ${gitGraphDiagramNY62KEGXParam11} ${gitGraphDiagramNY62KEGXParam9.id} commit${gitGraphDiagramNY62KEGXParam12 % 8}`,
            );
      }
    },
    "drawCommitBullet",
  ),
  gitGraphDiagramNY62KEGXValue49 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam20,
      gitGraphDiagramNY62KEGXParam21,
      gitGraphDiagramNY62KEGXParam22,
      gitGraphDiagramNY62KEGXParam23,
    ) => {
      if (
        gitGraphDiagramNY62KEGXParam21.type !==
          gitGraphDiagramNY62KEGXValue1.CHERRY_PICK &&
        ((gitGraphDiagramNY62KEGXParam21.customId &&
          gitGraphDiagramNY62KEGXParam21.type ===
            gitGraphDiagramNY62KEGXValue1.MERGE) ||
          gitGraphDiagramNY62KEGXParam21.type !==
            gitGraphDiagramNY62KEGXValue1.MERGE) &&
        gitGraphDiagramNY62KEGXValue28?.showCommitLabel
      ) {
        let gitGraphDiagramNY62KEGXValue107 =
            gitGraphDiagramNY62KEGXParam20.append("g"),
          gitGraphDiagramNY62KEGXValue108 = gitGraphDiagramNY62KEGXValue107
            .insert("rect")
            .attr("class", "commit-label-bkg"),
          gitGraphDiagramNY62KEGXValue109 = gitGraphDiagramNY62KEGXValue107
            .append("text")
            .attr("x", gitGraphDiagramNY62KEGXParam23)
            .attr("y", gitGraphDiagramNY62KEGXParam22.y + 25)
            .attr("class", "commit-label")
            .text(gitGraphDiagramNY62KEGXParam21.id),
          gitGraphDiagramNY62KEGXValue110 = gitGraphDiagramNY62KEGXValue109
            .node()
            ?.getBBox();
        if (
          gitGraphDiagramNY62KEGXValue110 &&
          (gitGraphDiagramNY62KEGXValue108
            .attr(
              "x",
              gitGraphDiagramNY62KEGXParam22.posWithOffset -
                gitGraphDiagramNY62KEGXValue110.width / 2 -
                2,
            )
            .attr("y", gitGraphDiagramNY62KEGXParam22.y + 13.5)
            .attr("width", gitGraphDiagramNY62KEGXValue110.width + 4)
            .attr("height", gitGraphDiagramNY62KEGXValue110.height + 4),
          gitGraphDiagramNY62KEGXValue40 === "TB" ||
          gitGraphDiagramNY62KEGXValue40 === "BT"
            ? (gitGraphDiagramNY62KEGXValue108
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXParam22.x -
                    (gitGraphDiagramNY62KEGXValue110.width + 16 + 5),
                )
                .attr("y", gitGraphDiagramNY62KEGXParam22.y - 12),
              gitGraphDiagramNY62KEGXValue109
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXParam22.x -
                    (gitGraphDiagramNY62KEGXValue110.width + 16),
                )
                .attr(
                  "y",
                  gitGraphDiagramNY62KEGXParam22.y +
                    gitGraphDiagramNY62KEGXValue110.height -
                    12,
                ))
            : gitGraphDiagramNY62KEGXValue109.attr(
                "x",
                gitGraphDiagramNY62KEGXParam22.posWithOffset -
                  gitGraphDiagramNY62KEGXValue110.width / 2,
              ),
          gitGraphDiagramNY62KEGXValue28.rotateCommitLabel)
        )
          if (
            gitGraphDiagramNY62KEGXValue40 === "TB" ||
            gitGraphDiagramNY62KEGXValue40 === "BT"
          ) {
            gitGraphDiagramNY62KEGXValue109.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramNY62KEGXParam22.x +
                ", " +
                gitGraphDiagramNY62KEGXParam22.y +
                ")",
            );
            gitGraphDiagramNY62KEGXValue108.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramNY62KEGXParam22.x +
                ", " +
                gitGraphDiagramNY62KEGXParam22.y +
                ")",
            );
          } else {
            let gitGraphDiagramNY62KEGXValue190 =
                -7.5 -
                ((gitGraphDiagramNY62KEGXValue110.width + 10) / 25) * 9.5,
              gitGraphDiagramNY62KEGXValue191 =
                10 + (gitGraphDiagramNY62KEGXValue110.width / 25) * 8.5;
            gitGraphDiagramNY62KEGXValue107.attr(
              "transform",
              "translate(" +
                gitGraphDiagramNY62KEGXValue190 +
                ", " +
                gitGraphDiagramNY62KEGXValue191 +
                ") rotate(-45, " +
                gitGraphDiagramNY62KEGXParam23 +
                ", " +
                gitGraphDiagramNY62KEGXParam22.y +
                ")",
            );
          }
      }
    },
    "drawCommitLabel",
  ),
  gitGraphDiagramNY62KEGXValue50 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam14,
      gitGraphDiagramNY62KEGXParam15,
      gitGraphDiagramNY62KEGXParam16,
      gitGraphDiagramNY62KEGXParam17,
    ) => {
      if (gitGraphDiagramNY62KEGXParam15.tags.length > 0) {
        let gitGraphDiagramNY62KEGXValue87 = 0,
          gitGraphDiagramNY62KEGXValue88 = 0,
          gitGraphDiagramNY62KEGXValue89 = 0,
          gitGraphDiagramNY62KEGXValue90 = [];
        for (let gitGraphDiagramNY62KEGXValue140 of gitGraphDiagramNY62KEGXParam15.tags.reverse()) {
          let gitGraphDiagramNY62KEGXValue143 =
              gitGraphDiagramNY62KEGXParam14.insert("polygon"),
            gitGraphDiagramNY62KEGXValue144 =
              gitGraphDiagramNY62KEGXParam14.append("circle"),
            gitGraphDiagramNY62KEGXValue145 = gitGraphDiagramNY62KEGXParam14
              .append("text")
              .attr(
                "y",
                gitGraphDiagramNY62KEGXParam16.y -
                  16 -
                  gitGraphDiagramNY62KEGXValue87,
              )
              .attr("class", "tag-label")
              .text(gitGraphDiagramNY62KEGXValue140),
            gitGraphDiagramNY62KEGXValue146 = gitGraphDiagramNY62KEGXValue145
              .node()
              ?.getBBox();
          if (!gitGraphDiagramNY62KEGXValue146)
            throw Error("Tag bbox not found");
          gitGraphDiagramNY62KEGXValue88 = Math.max(
            gitGraphDiagramNY62KEGXValue88,
            gitGraphDiagramNY62KEGXValue146.width,
          );
          gitGraphDiagramNY62KEGXValue89 = Math.max(
            gitGraphDiagramNY62KEGXValue89,
            gitGraphDiagramNY62KEGXValue146.height,
          );
          gitGraphDiagramNY62KEGXValue145.attr(
            "x",
            gitGraphDiagramNY62KEGXParam16.posWithOffset -
              gitGraphDiagramNY62KEGXValue146.width / 2,
          );
          gitGraphDiagramNY62KEGXValue90.push({
            tag: gitGraphDiagramNY62KEGXValue145,
            hole: gitGraphDiagramNY62KEGXValue144,
            rect: gitGraphDiagramNY62KEGXValue143,
            yOffset: gitGraphDiagramNY62KEGXValue87,
          });
          gitGraphDiagramNY62KEGXValue87 += 20;
        }
        for (let {
          tag,
          hole,
          rect,
          yOffset,
        } of gitGraphDiagramNY62KEGXValue90) {
          let gitGraphDiagramNY62KEGXValue105 =
              gitGraphDiagramNY62KEGXValue89 / 2,
            gitGraphDiagramNY62KEGXValue106 =
              gitGraphDiagramNY62KEGXParam16.y - 19.2 - yOffset;
          if (
            (rect.attr("class", "tag-label-bkg").attr(
              "points",
              `
      ${gitGraphDiagramNY62KEGXParam17 - gitGraphDiagramNY62KEGXValue88 / 2 - 2},${gitGraphDiagramNY62KEGXValue106 + 2}  
      ${gitGraphDiagramNY62KEGXParam17 - gitGraphDiagramNY62KEGXValue88 / 2 - 2},${gitGraphDiagramNY62KEGXValue106 - 2}
      ${gitGraphDiagramNY62KEGXParam16.posWithOffset - gitGraphDiagramNY62KEGXValue88 / 2 - 4},${gitGraphDiagramNY62KEGXValue106 - gitGraphDiagramNY62KEGXValue105 - 2}
      ${gitGraphDiagramNY62KEGXParam16.posWithOffset + gitGraphDiagramNY62KEGXValue88 / 2 + 4},${gitGraphDiagramNY62KEGXValue106 - gitGraphDiagramNY62KEGXValue105 - 2}
      ${gitGraphDiagramNY62KEGXParam16.posWithOffset + gitGraphDiagramNY62KEGXValue88 / 2 + 4},${gitGraphDiagramNY62KEGXValue106 + gitGraphDiagramNY62KEGXValue105 + 2}
      ${gitGraphDiagramNY62KEGXParam16.posWithOffset - gitGraphDiagramNY62KEGXValue88 / 2 - 4},${gitGraphDiagramNY62KEGXValue106 + gitGraphDiagramNY62KEGXValue105 + 2}`,
            ),
            hole
              .attr("cy", gitGraphDiagramNY62KEGXValue106)
              .attr(
                "cx",
                gitGraphDiagramNY62KEGXParam17 -
                  gitGraphDiagramNY62KEGXValue88 / 2 +
                  2,
              )
              .attr("r", 1.5)
              .attr("class", "tag-hole"),
            gitGraphDiagramNY62KEGXValue40 === "TB" ||
              gitGraphDiagramNY62KEGXValue40 === "BT")
          ) {
            let gitGraphDiagramNY62KEGXValue132 =
              gitGraphDiagramNY62KEGXParam17 + yOffset;
            rect
              .attr("class", "tag-label-bkg")
              .attr(
                "points",
                `
        ${gitGraphDiagramNY62KEGXParam16.x},${gitGraphDiagramNY62KEGXValue132 + 2}
        ${gitGraphDiagramNY62KEGXParam16.x},${gitGraphDiagramNY62KEGXValue132 - 2}
        ${gitGraphDiagramNY62KEGXParam16.x + 10},${gitGraphDiagramNY62KEGXValue132 - gitGraphDiagramNY62KEGXValue105 - 2}
        ${gitGraphDiagramNY62KEGXParam16.x + 10 + gitGraphDiagramNY62KEGXValue88 + 4},${gitGraphDiagramNY62KEGXValue132 - gitGraphDiagramNY62KEGXValue105 - 2}
        ${gitGraphDiagramNY62KEGXParam16.x + 10 + gitGraphDiagramNY62KEGXValue88 + 4},${gitGraphDiagramNY62KEGXValue132 + gitGraphDiagramNY62KEGXValue105 + 2}
        ${gitGraphDiagramNY62KEGXParam16.x + 10},${gitGraphDiagramNY62KEGXValue132 + gitGraphDiagramNY62KEGXValue105 + 2}`,
              )
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramNY62KEGXParam16.x +
                  "," +
                  gitGraphDiagramNY62KEGXParam17 +
                  ")",
              );
            hole
              .attr("cx", gitGraphDiagramNY62KEGXParam16.x + 2)
              .attr("cy", gitGraphDiagramNY62KEGXValue132)
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramNY62KEGXParam16.x +
                  "," +
                  gitGraphDiagramNY62KEGXParam17 +
                  ")",
              );
            tag
              .attr("x", gitGraphDiagramNY62KEGXParam16.x + 5)
              .attr("y", gitGraphDiagramNY62KEGXValue132 + 3)
              .attr(
                "transform",
                "translate(14,14) rotate(45, " +
                  gitGraphDiagramNY62KEGXParam16.x +
                  "," +
                  gitGraphDiagramNY62KEGXParam17 +
                  ")",
              );
          }
        }
      }
    },
    "drawCommitTags",
  ),
  gitGraphDiagramNY62KEGXValue51 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam41) => {
      switch (
        gitGraphDiagramNY62KEGXParam41.customType ??
        gitGraphDiagramNY62KEGXParam41.type
      ) {
        case gitGraphDiagramNY62KEGXValue1.NORMAL:
          return "commit-normal";
        case gitGraphDiagramNY62KEGXValue1.REVERSE:
          return "commit-reverse";
        case gitGraphDiagramNY62KEGXValue1.HIGHLIGHT:
          return "commit-highlight";
        case gitGraphDiagramNY62KEGXValue1.MERGE:
          return "commit-merge";
        case gitGraphDiagramNY62KEGXValue1.CHERRY_PICK:
          return "commit-cherry-pick";
        default:
          return "commit-normal";
      }
    },
    "getCommitClassType",
  ),
  gitGraphDiagramNY62KEGXValue52 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam42,
      gitGraphDiagramNY62KEGXParam43,
      gitGraphDiagramNY62KEGXParam44,
      gitGraphDiagramNY62KEGXParam45,
    ) => {
      let gitGraphDiagramNY62KEGXValue150 = {
        x: 0,
        y: 0,
      };
      if (gitGraphDiagramNY62KEGXParam42.parents.length > 0) {
        let gitGraphDiagramNY62KEGXValue197 = gitGraphDiagramNY62KEGXValue43(
          gitGraphDiagramNY62KEGXParam42.parents,
        );
        if (gitGraphDiagramNY62KEGXValue197) {
          let gitGraphDiagramNY62KEGXValue209 =
            gitGraphDiagramNY62KEGXParam45.get(
              gitGraphDiagramNY62KEGXValue197,
            ) ?? gitGraphDiagramNY62KEGXValue150;
          return gitGraphDiagramNY62KEGXParam43 === "TB"
            ? gitGraphDiagramNY62KEGXValue209.y + 40
            : gitGraphDiagramNY62KEGXParam43 === "BT"
              ? (
                  gitGraphDiagramNY62KEGXParam45.get(
                    gitGraphDiagramNY62KEGXParam42.id,
                  ) ?? gitGraphDiagramNY62KEGXValue150
                ).y - 40
              : gitGraphDiagramNY62KEGXValue209.x + 40;
        }
      } else if (gitGraphDiagramNY62KEGXParam43 === "TB") return 30;
      else if (gitGraphDiagramNY62KEGXParam43 === "BT")
        return (
          (
            gitGraphDiagramNY62KEGXParam45.get(
              gitGraphDiagramNY62KEGXParam42.id,
            ) ?? gitGraphDiagramNY62KEGXValue150
          ).y - 40
        );
      else return 0;
      return 0;
    },
    "calculatePosition",
  ),
  gitGraphDiagramNY62KEGXValue53 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam46,
      gitGraphDiagramNY62KEGXParam47,
      gitGraphDiagramNY62KEGXParam48,
    ) => {
      let gitGraphDiagramNY62KEGXValue151 =
          gitGraphDiagramNY62KEGXValue40 === "BT" &&
          gitGraphDiagramNY62KEGXParam48
            ? gitGraphDiagramNY62KEGXParam47
            : gitGraphDiagramNY62KEGXParam47 + 10,
        gitGraphDiagramNY62KEGXValue152 =
          gitGraphDiagramNY62KEGXValue40 === "TB" ||
          gitGraphDiagramNY62KEGXValue40 === "BT"
            ? gitGraphDiagramNY62KEGXValue151
            : gitGraphDiagramNY62KEGXValue34.get(
                gitGraphDiagramNY62KEGXParam46.branch,
              )?.pos,
        gitGraphDiagramNY62KEGXValue153 =
          gitGraphDiagramNY62KEGXValue40 === "TB" ||
          gitGraphDiagramNY62KEGXValue40 === "BT"
            ? gitGraphDiagramNY62KEGXValue34.get(
                gitGraphDiagramNY62KEGXParam46.branch,
              )?.pos
            : gitGraphDiagramNY62KEGXValue151;
      if (
        gitGraphDiagramNY62KEGXValue153 === undefined ||
        gitGraphDiagramNY62KEGXValue152 === undefined
      )
        throw Error(
          `Position were undefined for commit ${gitGraphDiagramNY62KEGXParam46.id}`,
        );
      return {
        x: gitGraphDiagramNY62KEGXValue153,
        y: gitGraphDiagramNY62KEGXValue152,
        posWithOffset: gitGraphDiagramNY62KEGXValue151,
      };
    },
    "getCommitPosition",
  ),
  gitGraphDiagramNY62KEGXValue54 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam24,
      gitGraphDiagramNY62KEGXParam25,
      gitGraphDiagramNY62KEGXParam26,
    ) => {
      if (!gitGraphDiagramNY62KEGXValue28)
        throw Error("GitGraph config not found");
      let gitGraphDiagramNY62KEGXValue111 = gitGraphDiagramNY62KEGXParam24
          .append("g")
          .attr("class", "commit-bullets"),
        gitGraphDiagramNY62KEGXValue112 = gitGraphDiagramNY62KEGXParam24
          .append("g")
          .attr("class", "commit-labels"),
        gitGraphDiagramNY62KEGXValue113 =
          gitGraphDiagramNY62KEGXValue40 === "TB" ||
          gitGraphDiagramNY62KEGXValue40 === "BT"
            ? 30
            : 0,
        gitGraphDiagramNY62KEGXValue114 = [
          ...gitGraphDiagramNY62KEGXParam25.keys(),
        ],
        gitGraphDiagramNY62KEGXValue115 =
          gitGraphDiagramNY62KEGXValue28?.parallelCommits ?? false,
        gitGraphDiagramNY62KEGXValue116 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam78, gitGraphDiagramNY62KEGXParam79) => {
            let gitGraphDiagramNY62KEGXValue207 =
                gitGraphDiagramNY62KEGXParam25.get(
                  gitGraphDiagramNY62KEGXParam78,
                )?.seq,
              gitGraphDiagramNY62KEGXValue208 =
                gitGraphDiagramNY62KEGXParam25.get(
                  gitGraphDiagramNY62KEGXParam79,
                )?.seq;
            return gitGraphDiagramNY62KEGXValue207 !== undefined &&
              gitGraphDiagramNY62KEGXValue208 !== undefined
              ? gitGraphDiagramNY62KEGXValue207 -
                  gitGraphDiagramNY62KEGXValue208
              : 0;
          },
          "sortKeys",
        ),
        gitGraphDiagramNY62KEGXValue117 = gitGraphDiagramNY62KEGXValue114.sort(
          gitGraphDiagramNY62KEGXValue116,
        );
      gitGraphDiagramNY62KEGXValue40 === "BT" &&
        (gitGraphDiagramNY62KEGXValue115 &&
          gitGraphDiagramNY62KEGXValue44(
            gitGraphDiagramNY62KEGXValue117,
            gitGraphDiagramNY62KEGXParam25,
            gitGraphDiagramNY62KEGXValue113,
          ),
        (gitGraphDiagramNY62KEGXValue117 =
          gitGraphDiagramNY62KEGXValue117.reverse()));
      gitGraphDiagramNY62KEGXValue117.forEach((item) => {
        let gitGraphDiagramNY62KEGXValue141 =
          gitGraphDiagramNY62KEGXParam25.get(item);
        if (!gitGraphDiagramNY62KEGXValue141)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramNY62KEGXValue115 &&
          (gitGraphDiagramNY62KEGXValue113 = gitGraphDiagramNY62KEGXValue52(
            gitGraphDiagramNY62KEGXValue141,
            gitGraphDiagramNY62KEGXValue40,
            gitGraphDiagramNY62KEGXValue113,
            gitGraphDiagramNY62KEGXValue35,
          ));
        let gitGraphDiagramNY62KEGXValue142 = gitGraphDiagramNY62KEGXValue53(
          gitGraphDiagramNY62KEGXValue141,
          gitGraphDiagramNY62KEGXValue113,
          gitGraphDiagramNY62KEGXValue115,
        );
        if (gitGraphDiagramNY62KEGXParam26) {
          let gitGraphDiagramNY62KEGXValue201 = gitGraphDiagramNY62KEGXValue51(
              gitGraphDiagramNY62KEGXValue141,
            ),
            gitGraphDiagramNY62KEGXValue202 =
              gitGraphDiagramNY62KEGXValue141.customType ??
              gitGraphDiagramNY62KEGXValue141.type;
          gitGraphDiagramNY62KEGXValue48(
            gitGraphDiagramNY62KEGXValue111,
            gitGraphDiagramNY62KEGXValue141,
            gitGraphDiagramNY62KEGXValue142,
            gitGraphDiagramNY62KEGXValue201,
            gitGraphDiagramNY62KEGXValue34.get(
              gitGraphDiagramNY62KEGXValue141.branch,
            )?.index ?? 0,
            gitGraphDiagramNY62KEGXValue202,
          );
          gitGraphDiagramNY62KEGXValue49(
            gitGraphDiagramNY62KEGXValue112,
            gitGraphDiagramNY62KEGXValue141,
            gitGraphDiagramNY62KEGXValue142,
            gitGraphDiagramNY62KEGXValue113,
          );
          gitGraphDiagramNY62KEGXValue50(
            gitGraphDiagramNY62KEGXValue112,
            gitGraphDiagramNY62KEGXValue141,
            gitGraphDiagramNY62KEGXValue142,
            gitGraphDiagramNY62KEGXValue113,
          );
        }
        gitGraphDiagramNY62KEGXValue40 === "TB" ||
        gitGraphDiagramNY62KEGXValue40 === "BT"
          ? gitGraphDiagramNY62KEGXValue35.set(
              gitGraphDiagramNY62KEGXValue141.id,
              {
                x: gitGraphDiagramNY62KEGXValue142.x,
                y: gitGraphDiagramNY62KEGXValue142.posWithOffset,
              },
            )
          : gitGraphDiagramNY62KEGXValue35.set(
              gitGraphDiagramNY62KEGXValue141.id,
              {
                x: gitGraphDiagramNY62KEGXValue142.posWithOffset,
                y: gitGraphDiagramNY62KEGXValue142.y,
              },
            );
        gitGraphDiagramNY62KEGXValue113 =
          gitGraphDiagramNY62KEGXValue40 === "BT" &&
          gitGraphDiagramNY62KEGXValue115
            ? gitGraphDiagramNY62KEGXValue113 + 40
            : gitGraphDiagramNY62KEGXValue113 + 40 + 10;
        gitGraphDiagramNY62KEGXValue113 > gitGraphDiagramNY62KEGXValue39 &&
          (gitGraphDiagramNY62KEGXValue39 = gitGraphDiagramNY62KEGXValue113);
      });
    },
    "drawCommits",
  ),
  gitGraphDiagramNY62KEGXValue55 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam50,
      gitGraphDiagramNY62KEGXParam51,
      gitGraphDiagramNY62KEGXParam52,
      gitGraphDiagramNY62KEGXParam53,
      gitGraphDiagramNY62KEGXParam54,
    ) => {
      let gitGraphDiagramNY62KEGXValue164 = (
          gitGraphDiagramNY62KEGXValue40 === "TB" ||
          gitGraphDiagramNY62KEGXValue40 === "BT"
            ? gitGraphDiagramNY62KEGXParam52.x <
              gitGraphDiagramNY62KEGXParam53.x
            : gitGraphDiagramNY62KEGXParam52.y <
              gitGraphDiagramNY62KEGXParam53.y
        )
          ? gitGraphDiagramNY62KEGXParam51.branch
          : gitGraphDiagramNY62KEGXParam50.branch,
        gitGraphDiagramNY62KEGXValue165 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam100) =>
            gitGraphDiagramNY62KEGXParam100.branch ===
            gitGraphDiagramNY62KEGXValue164,
          "isOnBranchToGetCurve",
        ),
        gitGraphDiagramNY62KEGXValue166 = chunkAGHRB4JFN(
          (gitGraphDiagramNY62KEGXParam90) =>
            gitGraphDiagramNY62KEGXParam90.seq >
              gitGraphDiagramNY62KEGXParam50.seq &&
            gitGraphDiagramNY62KEGXParam90.seq <
              gitGraphDiagramNY62KEGXParam51.seq,
          "isBetweenCommits",
        );
      return [...gitGraphDiagramNY62KEGXParam54.values()].some(
        (item) =>
          gitGraphDiagramNY62KEGXValue166(item) &&
          gitGraphDiagramNY62KEGXValue165(item),
      );
    },
    "shouldRerouteArrow",
  ),
  $ = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam64,
      gitGraphDiagramNY62KEGXParam65,
      gitGraphDiagramNY62KEGXParam66 = 0,
    ) => {
      let gitGraphDiagramNY62KEGXValue194 =
        gitGraphDiagramNY62KEGXParam64 +
        Math.abs(
          gitGraphDiagramNY62KEGXParam64 - gitGraphDiagramNY62KEGXParam65,
        ) /
          2;
      return gitGraphDiagramNY62KEGXParam66 > 5
        ? gitGraphDiagramNY62KEGXValue194
        : gitGraphDiagramNY62KEGXValue38.every(
              (item) => Math.abs(item - gitGraphDiagramNY62KEGXValue194) >= 10,
            )
          ? (gitGraphDiagramNY62KEGXValue38.push(
              gitGraphDiagramNY62KEGXValue194,
            ),
            gitGraphDiagramNY62KEGXValue194)
          : $(
              gitGraphDiagramNY62KEGXParam64,
              gitGraphDiagramNY62KEGXParam65 -
                Math.abs(
                  gitGraphDiagramNY62KEGXParam64 -
                    gitGraphDiagramNY62KEGXParam65,
                ) /
                  5,
              gitGraphDiagramNY62KEGXParam66 + 1,
            );
    },
    "findLane",
  ),
  gitGraphDiagramNY62KEGXValue56 = chunkAGHRB4JFN(
    (
      gitGraphDiagramNY62KEGXParam1,
      gitGraphDiagramNY62KEGXParam2,
      gitGraphDiagramNY62KEGXParam3,
      gitGraphDiagramNY62KEGXParam4,
    ) => {
      let gitGraphDiagramNY62KEGXValue60 = gitGraphDiagramNY62KEGXValue35.get(
          gitGraphDiagramNY62KEGXParam2.id,
        ),
        gitGraphDiagramNY62KEGXValue61 = gitGraphDiagramNY62KEGXValue35.get(
          gitGraphDiagramNY62KEGXParam3.id,
        );
      if (
        gitGraphDiagramNY62KEGXValue60 === undefined ||
        gitGraphDiagramNY62KEGXValue61 === undefined
      )
        throw Error(
          `Commit positions not found for commits ${gitGraphDiagramNY62KEGXParam2.id} and ${gitGraphDiagramNY62KEGXParam3.id}`,
        );
      let gitGraphDiagramNY62KEGXValue62 = gitGraphDiagramNY62KEGXValue55(
          gitGraphDiagramNY62KEGXParam2,
          gitGraphDiagramNY62KEGXParam3,
          gitGraphDiagramNY62KEGXValue60,
          gitGraphDiagramNY62KEGXValue61,
          gitGraphDiagramNY62KEGXParam4,
        ),
        gitGraphDiagramNY62KEGXValue63 = "",
        gitGraphDiagramNY62KEGXValue64 = "",
        gitGraphDiagramNY62KEGXValue65 = 0,
        gitGraphDiagramNY62KEGXValue66 = 0,
        gitGraphDiagramNY62KEGXValue67 = gitGraphDiagramNY62KEGXValue34.get(
          gitGraphDiagramNY62KEGXParam3.branch,
        )?.index;
      gitGraphDiagramNY62KEGXParam3.type ===
        gitGraphDiagramNY62KEGXValue1.MERGE &&
        gitGraphDiagramNY62KEGXParam2.id !==
          gitGraphDiagramNY62KEGXParam3.parents[0] &&
        (gitGraphDiagramNY62KEGXValue67 = gitGraphDiagramNY62KEGXValue34.get(
          gitGraphDiagramNY62KEGXParam2.branch,
        )?.index);
      let gitGraphDiagramNY62KEGXValue68;
      if (gitGraphDiagramNY62KEGXValue62) {
        gitGraphDiagramNY62KEGXValue63 = "A 10 10, 0, 0, 0,";
        gitGraphDiagramNY62KEGXValue64 = "A 10 10, 0, 0, 1,";
        gitGraphDiagramNY62KEGXValue65 = 10;
        gitGraphDiagramNY62KEGXValue66 = 10;
        let gitGraphDiagramNY62KEGXValue103 =
            gitGraphDiagramNY62KEGXValue60.y < gitGraphDiagramNY62KEGXValue61.y
              ? $(
                  gitGraphDiagramNY62KEGXValue60.y,
                  gitGraphDiagramNY62KEGXValue61.y,
                )
              : $(
                  gitGraphDiagramNY62KEGXValue61.y,
                  gitGraphDiagramNY62KEGXValue60.y,
                ),
          gitGraphDiagramNY62KEGXValue104 =
            gitGraphDiagramNY62KEGXValue60.x < gitGraphDiagramNY62KEGXValue61.x
              ? $(
                  gitGraphDiagramNY62KEGXValue60.x,
                  gitGraphDiagramNY62KEGXValue61.x,
                )
              : $(
                  gitGraphDiagramNY62KEGXValue61.x,
                  gitGraphDiagramNY62KEGXValue60.x,
                );
        gitGraphDiagramNY62KEGXValue40 === "TB"
          ? gitGraphDiagramNY62KEGXValue60.x < gitGraphDiagramNY62KEGXValue61.x
            ? (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue104 - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue60.y + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue61.y - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue104 + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`)
            : ((gitGraphDiagramNY62KEGXValue67 =
                gitGraphDiagramNY62KEGXValue34.get(
                  gitGraphDiagramNY62KEGXParam2.branch,
                )?.index),
              (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue104 + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue60.y + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue61.y - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue104 - gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`))
          : gitGraphDiagramNY62KEGXValue40 === "BT"
            ? gitGraphDiagramNY62KEGXValue60.x <
              gitGraphDiagramNY62KEGXValue61.x
              ? (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue104 - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue60.y - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue61.y + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue104 + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`)
              : ((gitGraphDiagramNY62KEGXValue67 =
                  gitGraphDiagramNY62KEGXValue34.get(
                    gitGraphDiagramNY62KEGXParam2.branch,
                  )?.index),
                (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue104 + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue60.y - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue104} ${gitGraphDiagramNY62KEGXValue61.y + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue104 - gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`))
            : gitGraphDiagramNY62KEGXValue60.y <
                gitGraphDiagramNY62KEGXValue61.y
              ? (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue103 - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue103} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue103} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue103 + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`)
              : ((gitGraphDiagramNY62KEGXValue67 =
                  gitGraphDiagramNY62KEGXValue34.get(
                    gitGraphDiagramNY62KEGXParam2.branch,
                  )?.index),
                (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue103 + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue103} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue103} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue103 - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`));
      } else {
        gitGraphDiagramNY62KEGXValue63 = "A 20 20, 0, 0, 0,";
        gitGraphDiagramNY62KEGXValue64 = "A 20 20, 0, 0, 1,";
        gitGraphDiagramNY62KEGXValue65 = 20;
        gitGraphDiagramNY62KEGXValue66 = 20;
        gitGraphDiagramNY62KEGXValue40 === "TB"
          ? (gitGraphDiagramNY62KEGXValue60.x <
              gitGraphDiagramNY62KEGXValue61.x &&
              (gitGraphDiagramNY62KEGXValue68 =
                gitGraphDiagramNY62KEGXParam3.type ===
                  gitGraphDiagramNY62KEGXValue1.MERGE &&
                gitGraphDiagramNY62KEGXParam2.id !==
                  gitGraphDiagramNY62KEGXParam3.parents[0]
                  ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                  : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`),
            gitGraphDiagramNY62KEGXValue60.x >
              gitGraphDiagramNY62KEGXValue61.x &&
              ((gitGraphDiagramNY62KEGXValue63 = "A 20 20, 0, 0, 0,"),
              (gitGraphDiagramNY62KEGXValue64 = "A 20 20, 0, 0, 1,"),
              (gitGraphDiagramNY62KEGXValue65 = 20),
              (gitGraphDiagramNY62KEGXValue66 = 20),
              (gitGraphDiagramNY62KEGXValue68 =
                gitGraphDiagramNY62KEGXParam3.type ===
                  gitGraphDiagramNY62KEGXValue1.MERGE &&
                gitGraphDiagramNY62KEGXParam2.id !==
                  gitGraphDiagramNY62KEGXParam3.parents[0]
                  ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue60.x - gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                  : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`)),
            gitGraphDiagramNY62KEGXValue60.x ===
              gitGraphDiagramNY62KEGXValue61.x &&
              (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`))
          : gitGraphDiagramNY62KEGXValue40 === "BT"
            ? (gitGraphDiagramNY62KEGXValue60.x <
                gitGraphDiagramNY62KEGXValue61.x &&
                (gitGraphDiagramNY62KEGXValue68 =
                  gitGraphDiagramNY62KEGXParam3.type ===
                    gitGraphDiagramNY62KEGXValue1.MERGE &&
                  gitGraphDiagramNY62KEGXParam2.id !==
                    gitGraphDiagramNY62KEGXParam3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                    : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`),
              gitGraphDiagramNY62KEGXValue60.x >
                gitGraphDiagramNY62KEGXValue61.x &&
                ((gitGraphDiagramNY62KEGXValue63 = "A 20 20, 0, 0, 0,"),
                (gitGraphDiagramNY62KEGXValue64 = "A 20 20, 0, 0, 1,"),
                (gitGraphDiagramNY62KEGXValue65 = 20),
                (gitGraphDiagramNY62KEGXValue66 = 20),
                (gitGraphDiagramNY62KEGXValue68 =
                  gitGraphDiagramNY62KEGXParam3.type ===
                    gitGraphDiagramNY62KEGXValue1.MERGE &&
                  gitGraphDiagramNY62KEGXParam2.id !==
                    gitGraphDiagramNY62KEGXParam3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue60.x - gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                    : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`)),
              gitGraphDiagramNY62KEGXValue60.x ===
                gitGraphDiagramNY62KEGXValue61.x &&
                (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`))
            : (gitGraphDiagramNY62KEGXValue60.y <
                gitGraphDiagramNY62KEGXValue61.y &&
                (gitGraphDiagramNY62KEGXValue68 =
                  gitGraphDiagramNY62KEGXParam3.type ===
                    gitGraphDiagramNY62KEGXValue1.MERGE &&
                  gitGraphDiagramNY62KEGXParam2.id !==
                    gitGraphDiagramNY62KEGXParam3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y + gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                    : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`),
              gitGraphDiagramNY62KEGXValue60.y >
                gitGraphDiagramNY62KEGXValue61.y &&
                (gitGraphDiagramNY62KEGXValue68 =
                  gitGraphDiagramNY62KEGXParam3.type ===
                    gitGraphDiagramNY62KEGXValue1.MERGE &&
                  gitGraphDiagramNY62KEGXParam2.id !==
                    gitGraphDiagramNY62KEGXParam3.parents[0]
                    ? `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x - gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue60.y} ${gitGraphDiagramNY62KEGXValue63} ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue60.y - gitGraphDiagramNY62KEGXValue66} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`
                    : `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue61.y + gitGraphDiagramNY62KEGXValue65} ${gitGraphDiagramNY62KEGXValue64} ${gitGraphDiagramNY62KEGXValue60.x + gitGraphDiagramNY62KEGXValue66} ${gitGraphDiagramNY62KEGXValue61.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`),
              gitGraphDiagramNY62KEGXValue60.y ===
                gitGraphDiagramNY62KEGXValue61.y &&
                (gitGraphDiagramNY62KEGXValue68 = `M ${gitGraphDiagramNY62KEGXValue60.x} ${gitGraphDiagramNY62KEGXValue60.y} L ${gitGraphDiagramNY62KEGXValue61.x} ${gitGraphDiagramNY62KEGXValue61.y}`));
      }
      if (gitGraphDiagramNY62KEGXValue68 === undefined)
        throw Error("Line definition not found");
      gitGraphDiagramNY62KEGXParam1
        .append("path")
        .attr("d", gitGraphDiagramNY62KEGXValue68)
        .attr("class", "arrow arrow" + (gitGraphDiagramNY62KEGXValue67 % 8));
    },
    "drawArrow",
  ),
  gitGraphDiagramNY62KEGXValue57 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam56, gitGraphDiagramNY62KEGXParam57) => {
      let gitGraphDiagramNY62KEGXValue175 = gitGraphDiagramNY62KEGXParam56
        .append("g")
        .attr("class", "commit-arrows");
      [...gitGraphDiagramNY62KEGXParam57.keys()].forEach((item) => {
        let gitGraphDiagramNY62KEGXValue203 =
          gitGraphDiagramNY62KEGXParam57.get(item);
        gitGraphDiagramNY62KEGXValue203.parents &&
          gitGraphDiagramNY62KEGXValue203.parents.length > 0 &&
          gitGraphDiagramNY62KEGXValue203.parents.forEach((_item) => {
            gitGraphDiagramNY62KEGXValue56(
              gitGraphDiagramNY62KEGXValue175,
              gitGraphDiagramNY62KEGXParam57.get(_item),
              gitGraphDiagramNY62KEGXValue203,
              gitGraphDiagramNY62KEGXParam57,
            );
          });
      });
    },
    "drawArrows",
  ),
  gitGraphDiagramNY62KEGXValue58 = chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam18, gitGraphDiagramNY62KEGXParam19) => {
      let gitGraphDiagramNY62KEGXValue94 =
        gitGraphDiagramNY62KEGXParam18.append("g");
      gitGraphDiagramNY62KEGXParam19.forEach((item, index) => {
        let gitGraphDiagramNY62KEGXValue95 = index % 8,
          gitGraphDiagramNY62KEGXValue96 = gitGraphDiagramNY62KEGXValue34.get(
            item.name,
          )?.pos;
        if (gitGraphDiagramNY62KEGXValue96 === undefined)
          throw Error(`Position not found for branch ${item.name}`);
        let gitGraphDiagramNY62KEGXValue97 =
          gitGraphDiagramNY62KEGXValue94.append("line");
        gitGraphDiagramNY62KEGXValue97.attr("x1", 0);
        gitGraphDiagramNY62KEGXValue97.attr(
          "y1",
          gitGraphDiagramNY62KEGXValue96,
        );
        gitGraphDiagramNY62KEGXValue97.attr(
          "x2",
          gitGraphDiagramNY62KEGXValue39,
        );
        gitGraphDiagramNY62KEGXValue97.attr(
          "y2",
          gitGraphDiagramNY62KEGXValue96,
        );
        gitGraphDiagramNY62KEGXValue97.attr(
          "class",
          "branch branch" + gitGraphDiagramNY62KEGXValue95,
        );
        gitGraphDiagramNY62KEGXValue40 === "TB"
          ? (gitGraphDiagramNY62KEGXValue97.attr("y1", 30),
            gitGraphDiagramNY62KEGXValue97.attr(
              "x1",
              gitGraphDiagramNY62KEGXValue96,
            ),
            gitGraphDiagramNY62KEGXValue97.attr(
              "y2",
              gitGraphDiagramNY62KEGXValue39,
            ),
            gitGraphDiagramNY62KEGXValue97.attr(
              "x2",
              gitGraphDiagramNY62KEGXValue96,
            ))
          : gitGraphDiagramNY62KEGXValue40 === "BT" &&
            (gitGraphDiagramNY62KEGXValue97.attr(
              "y1",
              gitGraphDiagramNY62KEGXValue39,
            ),
            gitGraphDiagramNY62KEGXValue97.attr(
              "x1",
              gitGraphDiagramNY62KEGXValue96,
            ),
            gitGraphDiagramNY62KEGXValue97.attr("y2", 30),
            gitGraphDiagramNY62KEGXValue97.attr(
              "x2",
              gitGraphDiagramNY62KEGXValue96,
            ));
        gitGraphDiagramNY62KEGXValue38.push(gitGraphDiagramNY62KEGXValue96);
        let gitGraphDiagramNY62KEGXValue98 = item.name,
          gitGraphDiagramNY62KEGXValue99 = gitGraphDiagramNY62KEGXValue42(
            gitGraphDiagramNY62KEGXValue98,
          ),
          gitGraphDiagramNY62KEGXValue100 =
            gitGraphDiagramNY62KEGXValue94.insert("rect"),
          gitGraphDiagramNY62KEGXValue101 = gitGraphDiagramNY62KEGXValue94
            .insert("g")
            .attr("class", "branchLabel")
            .insert("g")
            .attr(
              "class",
              "label branch-label" + gitGraphDiagramNY62KEGXValue95,
            );
        gitGraphDiagramNY62KEGXValue101
          .node()
          .appendChild(gitGraphDiagramNY62KEGXValue99);
        let gitGraphDiagramNY62KEGXValue102 =
          gitGraphDiagramNY62KEGXValue99.getBBox();
        gitGraphDiagramNY62KEGXValue100
          .attr(
            "class",
            "branchLabelBkg label" + gitGraphDiagramNY62KEGXValue95,
          )
          .attr("rx", 4)
          .attr("ry", 4)
          .attr(
            "x",
            -gitGraphDiagramNY62KEGXValue102.width -
              4 -
              (gitGraphDiagramNY62KEGXValue28?.rotateCommitLabel === true
                ? 30
                : 0),
          )
          .attr("y", -gitGraphDiagramNY62KEGXValue102.height / 2 + 8)
          .attr("width", gitGraphDiagramNY62KEGXValue102.width + 18)
          .attr("height", gitGraphDiagramNY62KEGXValue102.height + 4);
        gitGraphDiagramNY62KEGXValue101.attr(
          "transform",
          "translate(" +
            (-gitGraphDiagramNY62KEGXValue102.width -
              14 -
              (gitGraphDiagramNY62KEGXValue28?.rotateCommitLabel === true
                ? 30
                : 0)) +
            ", " +
            (gitGraphDiagramNY62KEGXValue96 -
              gitGraphDiagramNY62KEGXValue102.height / 2 -
              1) +
            ")",
        );
        gitGraphDiagramNY62KEGXValue40 === "TB"
          ? (gitGraphDiagramNY62KEGXValue100
              .attr(
                "x",
                gitGraphDiagramNY62KEGXValue96 -
                  gitGraphDiagramNY62KEGXValue102.width / 2 -
                  10,
              )
              .attr("y", 0),
            gitGraphDiagramNY62KEGXValue101.attr(
              "transform",
              "translate(" +
                (gitGraphDiagramNY62KEGXValue96 -
                  gitGraphDiagramNY62KEGXValue102.width / 2 -
                  5) +
                ", 0)",
            ))
          : gitGraphDiagramNY62KEGXValue40 === "BT"
            ? (gitGraphDiagramNY62KEGXValue100
                .attr(
                  "x",
                  gitGraphDiagramNY62KEGXValue96 -
                    gitGraphDiagramNY62KEGXValue102.width / 2 -
                    10,
                )
                .attr("y", gitGraphDiagramNY62KEGXValue39),
              gitGraphDiagramNY62KEGXValue101.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramNY62KEGXValue96 -
                    gitGraphDiagramNY62KEGXValue102.width / 2 -
                    5) +
                  ", " +
                  gitGraphDiagramNY62KEGXValue39 +
                  ")",
              ))
            : gitGraphDiagramNY62KEGXValue100.attr(
                "transform",
                "translate(-19, " +
                  (gitGraphDiagramNY62KEGXValue96 -
                    gitGraphDiagramNY62KEGXValue102.height / 2) +
                  ")",
              );
      });
    },
    "drawBranches",
  ),
  gitGraphDiagramNY62KEGXValue59 = chunkAGHRB4JFN(function (
    gitGraphDiagramNY62KEGXParam69,
    gitGraphDiagramNY62KEGXParam70,
    gitGraphDiagramNY62KEGXParam71,
    gitGraphDiagramNY62KEGXParam72,
    gitGraphDiagramNY62KEGXParam73,
  ) {
    return (
      gitGraphDiagramNY62KEGXValue34.set(gitGraphDiagramNY62KEGXParam69, {
        pos: gitGraphDiagramNY62KEGXParam70,
        index: gitGraphDiagramNY62KEGXParam71,
      }),
      (gitGraphDiagramNY62KEGXParam70 +=
        50 +
        (gitGraphDiagramNY62KEGXParam73 ? 40 : 0) +
        (gitGraphDiagramNY62KEGXValue40 === "TB" ||
        gitGraphDiagramNY62KEGXValue40 === "BT"
          ? gitGraphDiagramNY62KEGXParam72.width / 2
          : 0)),
      gitGraphDiagramNY62KEGXParam70
    );
  }, "setBranchPosition");
export const gitGraphDiagramNY62KEGX = {
  parser: gitGraphDiagramNY62KEGXValue27,
  db: gitGraphDiagramNY62KEGXValue19,
  renderer: {
    draw: chunkAGHRB4JFN(function (
      gitGraphDiagramNY62KEGXParam27,
      gitGraphDiagramNY62KEGXParam28,
      gitGraphDiagramNY62KEGXParam29,
      gitGraphDiagramNY62KEGXParam30,
    ) {
      if (
        (gitGraphDiagramNY62KEGXValue41(),
        chunkAGHRB4JFR.debug(
          "in gitgraph renderer",
          gitGraphDiagramNY62KEGXParam27 + "\n",
          "id:",
          gitGraphDiagramNY62KEGXParam28,
          gitGraphDiagramNY62KEGXParam29,
        ),
        !gitGraphDiagramNY62KEGXValue28)
      )
        throw Error("GitGraph config not found");
      let gitGraphDiagramNY62KEGXValue118 =
          gitGraphDiagramNY62KEGXValue28.rotateCommitLabel ?? false,
        gitGraphDiagramNY62KEGXValue119 = gitGraphDiagramNY62KEGXParam30.db;
      gitGraphDiagramNY62KEGXValue37 =
        gitGraphDiagramNY62KEGXValue119.getCommits();
      let gitGraphDiagramNY62KEGXValue120 =
        gitGraphDiagramNY62KEGXValue119.getBranchesAsObjArray();
      gitGraphDiagramNY62KEGXValue40 =
        gitGraphDiagramNY62KEGXValue119.getDirection();
      let gitGraphDiagramNY62KEGXValue121 = Src(
          `[id="${gitGraphDiagramNY62KEGXParam28}"]`,
        ),
        gitGraphDiagramNY62KEGXValue122 = 0;
      gitGraphDiagramNY62KEGXValue120.forEach((item, index) => {
        let gitGraphDiagramNY62KEGXValue154 = gitGraphDiagramNY62KEGXValue42(
            item.name,
          ),
          gitGraphDiagramNY62KEGXValue155 =
            gitGraphDiagramNY62KEGXValue121.append("g"),
          gitGraphDiagramNY62KEGXValue156 = gitGraphDiagramNY62KEGXValue155
            .insert("g")
            .attr("class", "branchLabel"),
          gitGraphDiagramNY62KEGXValue157 = gitGraphDiagramNY62KEGXValue156
            .insert("g")
            .attr("class", "label branch-label");
        gitGraphDiagramNY62KEGXValue157
          .node()
          ?.appendChild(gitGraphDiagramNY62KEGXValue154);
        let gitGraphDiagramNY62KEGXValue158 =
          gitGraphDiagramNY62KEGXValue154.getBBox();
        gitGraphDiagramNY62KEGXValue122 = gitGraphDiagramNY62KEGXValue59(
          item.name,
          gitGraphDiagramNY62KEGXValue122,
          index,
          gitGraphDiagramNY62KEGXValue158,
          gitGraphDiagramNY62KEGXValue118,
        );
        gitGraphDiagramNY62KEGXValue157.remove();
        gitGraphDiagramNY62KEGXValue156.remove();
        gitGraphDiagramNY62KEGXValue155.remove();
      });
      gitGraphDiagramNY62KEGXValue54(
        gitGraphDiagramNY62KEGXValue121,
        gitGraphDiagramNY62KEGXValue37,
        false,
      );
      gitGraphDiagramNY62KEGXValue28.showBranches &&
        gitGraphDiagramNY62KEGXValue58(
          gitGraphDiagramNY62KEGXValue121,
          gitGraphDiagramNY62KEGXValue120,
        );
      gitGraphDiagramNY62KEGXValue57(
        gitGraphDiagramNY62KEGXValue121,
        gitGraphDiagramNY62KEGXValue37,
      );
      gitGraphDiagramNY62KEGXValue54(
        gitGraphDiagramNY62KEGXValue121,
        gitGraphDiagramNY62KEGXValue37,
        true,
      );
      chunkS3R3BYOJC.insertTitle(
        gitGraphDiagramNY62KEGXValue121,
        "gitTitleText",
        gitGraphDiagramNY62KEGXValue28.titleTopMargin ?? 0,
        gitGraphDiagramNY62KEGXValue119.getDiagramTitle(),
      );
      _chunkABZYJK2DS(
        undefined,
        gitGraphDiagramNY62KEGXValue121,
        gitGraphDiagramNY62KEGXValue28.diagramPadding,
        gitGraphDiagramNY62KEGXValue28.useMaxWidth,
      );
    }, "draw"),
  },
  styles: chunkAGHRB4JFN(
    (gitGraphDiagramNY62KEGXParam7) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7]
    .map(
      (item) => `
        .branch-label${item} { fill: ${gitGraphDiagramNY62KEGXParam7["gitBranchLabel" + item]}; }
        .commit${item} { stroke: ${gitGraphDiagramNY62KEGXParam7["git" + item]}; fill: ${gitGraphDiagramNY62KEGXParam7["git" + item]}; }
        .commit-highlight${item} { stroke: ${gitGraphDiagramNY62KEGXParam7["gitInv" + item]}; fill: ${gitGraphDiagramNY62KEGXParam7["gitInv" + item]}; }
        .label${item}  { fill: ${gitGraphDiagramNY62KEGXParam7["git" + item]}; }
        .arrow${item} { stroke: ${gitGraphDiagramNY62KEGXParam7["git" + item]}; }
        `,
    )
    .join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${gitGraphDiagramNY62KEGXParam7.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${gitGraphDiagramNY62KEGXParam7.commitLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXParam7.commitLabelColor};}
  .commit-label-bkg { font-size: ${gitGraphDiagramNY62KEGXParam7.commitLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXParam7.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${gitGraphDiagramNY62KEGXParam7.tagLabelFontSize}; fill: ${gitGraphDiagramNY62KEGXParam7.tagLabelColor};}
  .tag-label-bkg { fill: ${gitGraphDiagramNY62KEGXParam7.tagLabelBackground}; stroke: ${gitGraphDiagramNY62KEGXParam7.tagLabelBorder}; }
  .tag-hole { fill: ${gitGraphDiagramNY62KEGXParam7.textColor}; }

  .commit-merge {
    stroke: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
  }
  .commit-reverse {
    stroke: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
    fill: ${gitGraphDiagramNY62KEGXParam7.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${gitGraphDiagramNY62KEGXParam7.textColor};
  }
`,
    "getStyles",
  ),
};
