// Restored from ref/webview/assets/gitGraphDiagram-UUTBAWPF-DGICCt1Z.js
// Flat boundary. Vendored gitGraphDiagramUUTBAWPF chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXQ,
  _chunkICPOFSXXS,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import {
  chunk5PVQY5BWC,
  chunk5PVQY5BWO,
  chunk5PVQY5BWP,
} from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
import { ImperativeState } from "../utils/chunk-qzhkn3-vn";
const _chunkICPOFSXXB = chunkICPOFSXXB,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var gitGraphDiagramUUTBAWPFValue1 = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4,
  },
  gitGraphDiagramUUTBAWPFValue2 = chunkICPOFSXXD.gitGraph,
  gitGraphDiagramUUTBAWPFValue3 = chunkAGHRB4JFN(
    () =>
      chunk5PVQY5BWP({
        ...gitGraphDiagramUUTBAWPFValue2,
        ..._chunkICPOFSXXY().gitGraph,
      }),
    "getConfig",
  ),
  gitGraphDiagramUUTBAWPFValue4 = new ImperativeState(() => {
    let gitGraphDiagramUUTBAWPFValue198 = gitGraphDiagramUUTBAWPFValue3(),
      gitGraphDiagramUUTBAWPFValue199 =
        gitGraphDiagramUUTBAWPFValue198.mainBranchName,
      gitGraphDiagramUUTBAWPFValue200 =
        gitGraphDiagramUUTBAWPFValue198.mainBranchOrder;
    return {
      mainBranchName: gitGraphDiagramUUTBAWPFValue199,
      commits: new Map(),
      head: null,
      branchConfig: new Map([
        [
          gitGraphDiagramUUTBAWPFValue199,
          {
            name: gitGraphDiagramUUTBAWPFValue199,
            order: gitGraphDiagramUUTBAWPFValue200,
          },
        ],
      ]),
      branches: new Map([[gitGraphDiagramUUTBAWPFValue199, null]]),
      currBranch: gitGraphDiagramUUTBAWPFValue199,
      direction: "LR",
      seq: 0,
      options: {},
    };
  });
function gitGraphDiagramUUTBAWPFHelper1() {
  return chunk5PVQY5BWO({
    length: 7,
  });
}
chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper1, "getID");
function gitGraphDiagramUUTBAWPFHelper2(
  gitGraphDiagramUUTBAWPFParam74,
  gitGraphDiagramUUTBAWPFParam75,
) {
  let gitGraphDiagramUUTBAWPFValue238 = Object.create(null);
  return gitGraphDiagramUUTBAWPFParam74.reduce((accumulator, current) => {
    let gitGraphDiagramUUTBAWPFValue258 =
      gitGraphDiagramUUTBAWPFParam75(current);
    return (
      gitGraphDiagramUUTBAWPFValue238[gitGraphDiagramUUTBAWPFValue258] ||
        ((gitGraphDiagramUUTBAWPFValue238[gitGraphDiagramUUTBAWPFValue258] =
          true),
        accumulator.push(current)),
      accumulator
    );
  }, []);
}
chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper2, "uniqBy");
var gitGraphDiagramUUTBAWPFValue5 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam97,
  ) {
    gitGraphDiagramUUTBAWPFValue4.records.direction =
      gitGraphDiagramUUTBAWPFParam97;
  }, "setDirection"),
  gitGraphDiagramUUTBAWPFValue6 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam65,
  ) {
    chunkAGHRB4JFR.debug("options str", gitGraphDiagramUUTBAWPFParam65);
    gitGraphDiagramUUTBAWPFParam65 = gitGraphDiagramUUTBAWPFParam65?.trim();
    gitGraphDiagramUUTBAWPFParam65 ||= "{}";
    try {
      gitGraphDiagramUUTBAWPFValue4.records.options = JSON.parse(
        gitGraphDiagramUUTBAWPFParam65,
      );
    } catch (gitGraphDiagramUUTBAWPFValue255) {
      chunkAGHRB4JFR.error(
        "error while parsing gitGraph options",
        gitGraphDiagramUUTBAWPFValue255.message,
      );
    }
  }, "setOptions"),
  gitGraphDiagramUUTBAWPFValue7 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFValue4.records.options;
  }, "getOptions"),
  gitGraphDiagramUUTBAWPFValue8 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam36,
  ) {
    let gitGraphDiagramUUTBAWPFValue155 = gitGraphDiagramUUTBAWPFParam36.msg,
      gitGraphDiagramUUTBAWPFValue156 = gitGraphDiagramUUTBAWPFParam36.id,
      gitGraphDiagramUUTBAWPFValue157 = gitGraphDiagramUUTBAWPFParam36.type,
      gitGraphDiagramUUTBAWPFValue158 = gitGraphDiagramUUTBAWPFParam36.tags;
    chunkAGHRB4JFR.info(
      "commit",
      gitGraphDiagramUUTBAWPFValue155,
      gitGraphDiagramUUTBAWPFValue156,
      gitGraphDiagramUUTBAWPFValue157,
      gitGraphDiagramUUTBAWPFValue158,
    );
    chunkAGHRB4JFR.debug(
      "Entering commit:",
      gitGraphDiagramUUTBAWPFValue155,
      gitGraphDiagramUUTBAWPFValue156,
      gitGraphDiagramUUTBAWPFValue157,
      gitGraphDiagramUUTBAWPFValue158,
    );
    let gitGraphDiagramUUTBAWPFValue159 = gitGraphDiagramUUTBAWPFValue3();
    gitGraphDiagramUUTBAWPFValue156 = _chunkICPOFSXXS.sanitizeText(
      gitGraphDiagramUUTBAWPFValue156,
      gitGraphDiagramUUTBAWPFValue159,
    );
    gitGraphDiagramUUTBAWPFValue155 = _chunkICPOFSXXS.sanitizeText(
      gitGraphDiagramUUTBAWPFValue155,
      gitGraphDiagramUUTBAWPFValue159,
    );
    gitGraphDiagramUUTBAWPFValue158 = gitGraphDiagramUUTBAWPFValue158?.map(
      (gitGraphDiagramUUTBAWPFParam101) =>
        _chunkICPOFSXXS.sanitizeText(
          gitGraphDiagramUUTBAWPFParam101,
          gitGraphDiagramUUTBAWPFValue159,
        ),
    );
    let gitGraphDiagramUUTBAWPFValue160 = {
      id:
        gitGraphDiagramUUTBAWPFValue156 ||
        gitGraphDiagramUUTBAWPFValue4.records.seq +
          "-" +
          gitGraphDiagramUUTBAWPFHelper1(),
      message: gitGraphDiagramUUTBAWPFValue155,
      seq: gitGraphDiagramUUTBAWPFValue4.records.seq++,
      type:
        gitGraphDiagramUUTBAWPFValue157 ?? gitGraphDiagramUUTBAWPFValue1.NORMAL,
      tags: gitGraphDiagramUUTBAWPFValue158 ?? [],
      parents:
        gitGraphDiagramUUTBAWPFValue4.records.head == null
          ? []
          : [gitGraphDiagramUUTBAWPFValue4.records.head.id],
      branch: gitGraphDiagramUUTBAWPFValue4.records.currBranch,
    };
    gitGraphDiagramUUTBAWPFValue4.records.head =
      gitGraphDiagramUUTBAWPFValue160;
    chunkAGHRB4JFR.info(
      "main branch",
      gitGraphDiagramUUTBAWPFValue159.mainBranchName,
    );
    gitGraphDiagramUUTBAWPFValue4.records.commits.has(
      gitGraphDiagramUUTBAWPFValue160.id,
    ) &&
      chunkAGHRB4JFR.warn(
        `Commit ID ${gitGraphDiagramUUTBAWPFValue160.id} already exists`,
      );
    gitGraphDiagramUUTBAWPFValue4.records.commits.set(
      gitGraphDiagramUUTBAWPFValue160.id,
      gitGraphDiagramUUTBAWPFValue160,
    );
    gitGraphDiagramUUTBAWPFValue4.records.branches.set(
      gitGraphDiagramUUTBAWPFValue4.records.currBranch,
      gitGraphDiagramUUTBAWPFValue160.id,
    );
    chunkAGHRB4JFR.debug("in pushCommit " + gitGraphDiagramUUTBAWPFValue160.id);
  }, "commit"),
  gitGraphDiagramUUTBAWPFValue9 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam41,
  ) {
    let gitGraphDiagramUUTBAWPFValue170 = gitGraphDiagramUUTBAWPFParam41.name,
      gitGraphDiagramUUTBAWPFValue171 = gitGraphDiagramUUTBAWPFParam41.order;
    if (
      ((gitGraphDiagramUUTBAWPFValue170 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue170,
        gitGraphDiagramUUTBAWPFValue3(),
      )),
      gitGraphDiagramUUTBAWPFValue4.records.branches.has(
        gitGraphDiagramUUTBAWPFValue170,
      ))
    )
      throw Error(
        `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${gitGraphDiagramUUTBAWPFValue170}")`,
      );
    gitGraphDiagramUUTBAWPFValue4.records.branches.set(
      gitGraphDiagramUUTBAWPFValue170,
      gitGraphDiagramUUTBAWPFValue4.records.head == null
        ? null
        : gitGraphDiagramUUTBAWPFValue4.records.head.id,
    );
    gitGraphDiagramUUTBAWPFValue4.records.branchConfig.set(
      gitGraphDiagramUUTBAWPFValue170,
      {
        name: gitGraphDiagramUUTBAWPFValue170,
        order: gitGraphDiagramUUTBAWPFValue171,
      },
    );
    gitGraphDiagramUUTBAWPFValue12(gitGraphDiagramUUTBAWPFValue170);
    chunkAGHRB4JFR.debug("in createBranch");
  }, "branch"),
  gitGraphDiagramUUTBAWPFValue10 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam7) => {
      let gitGraphDiagramUUTBAWPFValue92 = gitGraphDiagramUUTBAWPFParam7.branch,
        gitGraphDiagramUUTBAWPFValue93 = gitGraphDiagramUUTBAWPFParam7.id,
        gitGraphDiagramUUTBAWPFValue94 = gitGraphDiagramUUTBAWPFParam7.type,
        gitGraphDiagramUUTBAWPFValue95 = gitGraphDiagramUUTBAWPFParam7.tags,
        gitGraphDiagramUUTBAWPFValue96 = gitGraphDiagramUUTBAWPFValue3();
      gitGraphDiagramUUTBAWPFValue92 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue92,
        gitGraphDiagramUUTBAWPFValue96,
      );
      gitGraphDiagramUUTBAWPFValue93 &&= _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue93,
        gitGraphDiagramUUTBAWPFValue96,
      );
      let gitGraphDiagramUUTBAWPFValue97 =
          gitGraphDiagramUUTBAWPFValue4.records.branches.get(
            gitGraphDiagramUUTBAWPFValue4.records.currBranch,
          ),
        gitGraphDiagramUUTBAWPFValue98 =
          gitGraphDiagramUUTBAWPFValue4.records.branches.get(
            gitGraphDiagramUUTBAWPFValue92,
          ),
        gitGraphDiagramUUTBAWPFValue99 = gitGraphDiagramUUTBAWPFValue97
          ? gitGraphDiagramUUTBAWPFValue4.records.commits.get(
              gitGraphDiagramUUTBAWPFValue97,
            )
          : undefined,
        gitGraphDiagramUUTBAWPFValue100 = gitGraphDiagramUUTBAWPFValue98
          ? gitGraphDiagramUUTBAWPFValue4.records.commits.get(
              gitGraphDiagramUUTBAWPFValue98,
            )
          : undefined;
      if (
        gitGraphDiagramUUTBAWPFValue99 &&
        gitGraphDiagramUUTBAWPFValue100 &&
        gitGraphDiagramUUTBAWPFValue99.branch === gitGraphDiagramUUTBAWPFValue92
      )
        throw Error(
          `Cannot merge branch '${gitGraphDiagramUUTBAWPFValue92}' into itself.`,
        );
      if (
        gitGraphDiagramUUTBAWPFValue4.records.currBranch ===
        gitGraphDiagramUUTBAWPFValue92
      ) {
        let gitGraphDiagramUUTBAWPFValue223 = Error(
          'Incorrect usage of "merge". Cannot merge a branch to itself',
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue223.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramUUTBAWPFValue223
        );
      }
      if (
        gitGraphDiagramUUTBAWPFValue99 === undefined ||
        !gitGraphDiagramUUTBAWPFValue99
      ) {
        let gitGraphDiagramUUTBAWPFValue218 = Error(
          `Incorrect usage of "merge". Current branch (${gitGraphDiagramUUTBAWPFValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue218.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            expected: ["commit"],
          }),
          gitGraphDiagramUUTBAWPFValue218
        );
      }
      if (
        !gitGraphDiagramUUTBAWPFValue4.records.branches.has(
          gitGraphDiagramUUTBAWPFValue92,
        )
      ) {
        let gitGraphDiagramUUTBAWPFValue219 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramUUTBAWPFValue92 +
            ") does not exist",
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue219.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            expected: [`branch ${gitGraphDiagramUUTBAWPFValue92}`],
          }),
          gitGraphDiagramUUTBAWPFValue219
        );
      }
      if (
        gitGraphDiagramUUTBAWPFValue100 === undefined ||
        !gitGraphDiagramUUTBAWPFValue100
      ) {
        let gitGraphDiagramUUTBAWPFValue220 = Error(
          'Incorrect usage of "merge". Branch to be merged (' +
            gitGraphDiagramUUTBAWPFValue92 +
            ") has no commits",
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue220.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            expected: ['"commit"'],
          }),
          gitGraphDiagramUUTBAWPFValue220
        );
      }
      if (gitGraphDiagramUUTBAWPFValue99 === gitGraphDiagramUUTBAWPFValue100) {
        let gitGraphDiagramUUTBAWPFValue224 = Error(
          'Incorrect usage of "merge". Both branches have same head',
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue224.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92}`,
            expected: ["branch abc"],
          }),
          gitGraphDiagramUUTBAWPFValue224
        );
      }
      if (
        gitGraphDiagramUUTBAWPFValue93 &&
        gitGraphDiagramUUTBAWPFValue4.records.commits.has(
          gitGraphDiagramUUTBAWPFValue93,
        )
      ) {
        let gitGraphDiagramUUTBAWPFValue191 = Error(
          'Incorrect usage of "merge". Commit with id:' +
            gitGraphDiagramUUTBAWPFValue93 +
            " already exists, use different custom id",
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue191.hash = {
            text: `merge ${gitGraphDiagramUUTBAWPFValue92} ${gitGraphDiagramUUTBAWPFValue93} ${gitGraphDiagramUUTBAWPFValue94} ${gitGraphDiagramUUTBAWPFValue95?.join(" ")}`,
            token: `merge ${gitGraphDiagramUUTBAWPFValue92} ${gitGraphDiagramUUTBAWPFValue93} ${gitGraphDiagramUUTBAWPFValue94} ${gitGraphDiagramUUTBAWPFValue95?.join(" ")}`,
            expected: [
              `merge ${gitGraphDiagramUUTBAWPFValue92} ${gitGraphDiagramUUTBAWPFValue93}_UNIQUE ${gitGraphDiagramUUTBAWPFValue94} ${gitGraphDiagramUUTBAWPFValue95?.join(" ")}`,
            ],
          }),
          gitGraphDiagramUUTBAWPFValue191
        );
      }
      let gitGraphDiagramUUTBAWPFValue101 =
          gitGraphDiagramUUTBAWPFValue98 || "",
        gitGraphDiagramUUTBAWPFValue102 = {
          id:
            gitGraphDiagramUUTBAWPFValue93 ||
            `${gitGraphDiagramUUTBAWPFValue4.records.seq}-${gitGraphDiagramUUTBAWPFHelper1()}`,
          message: `merged branch ${gitGraphDiagramUUTBAWPFValue92} into ${gitGraphDiagramUUTBAWPFValue4.records.currBranch}`,
          seq: gitGraphDiagramUUTBAWPFValue4.records.seq++,
          parents:
            gitGraphDiagramUUTBAWPFValue4.records.head == null
              ? []
              : [
                  gitGraphDiagramUUTBAWPFValue4.records.head.id,
                  gitGraphDiagramUUTBAWPFValue101,
                ],
          branch: gitGraphDiagramUUTBAWPFValue4.records.currBranch,
          type: gitGraphDiagramUUTBAWPFValue1.MERGE,
          customType: gitGraphDiagramUUTBAWPFValue94,
          customId: !!gitGraphDiagramUUTBAWPFValue93,
          tags: gitGraphDiagramUUTBAWPFValue95 ?? [],
        };
      gitGraphDiagramUUTBAWPFValue4.records.head =
        gitGraphDiagramUUTBAWPFValue102;
      gitGraphDiagramUUTBAWPFValue4.records.commits.set(
        gitGraphDiagramUUTBAWPFValue102.id,
        gitGraphDiagramUUTBAWPFValue102,
      );
      gitGraphDiagramUUTBAWPFValue4.records.branches.set(
        gitGraphDiagramUUTBAWPFValue4.records.currBranch,
        gitGraphDiagramUUTBAWPFValue102.id,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramUUTBAWPFValue4.records.branches);
      chunkAGHRB4JFR.debug("in mergeBranch");
    },
    "merge",
  ),
  gitGraphDiagramUUTBAWPFValue11 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam6,
  ) {
    let gitGraphDiagramUUTBAWPFValue85 = gitGraphDiagramUUTBAWPFParam6.id,
      gitGraphDiagramUUTBAWPFValue86 = gitGraphDiagramUUTBAWPFParam6.targetId,
      gitGraphDiagramUUTBAWPFValue87 = gitGraphDiagramUUTBAWPFParam6.tags,
      gitGraphDiagramUUTBAWPFValue88 = gitGraphDiagramUUTBAWPFParam6.parent;
    chunkAGHRB4JFR.debug(
      "Entering cherryPick:",
      gitGraphDiagramUUTBAWPFValue85,
      gitGraphDiagramUUTBAWPFValue86,
      gitGraphDiagramUUTBAWPFValue87,
    );
    let gitGraphDiagramUUTBAWPFValue89 = gitGraphDiagramUUTBAWPFValue3();
    if (
      ((gitGraphDiagramUUTBAWPFValue85 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue85,
        gitGraphDiagramUUTBAWPFValue89,
      )),
      (gitGraphDiagramUUTBAWPFValue86 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue86,
        gitGraphDiagramUUTBAWPFValue89,
      )),
      (gitGraphDiagramUUTBAWPFValue87 = gitGraphDiagramUUTBAWPFValue87?.map(
        (gitGraphDiagramUUTBAWPFParam102) =>
          _chunkICPOFSXXS.sanitizeText(
            gitGraphDiagramUUTBAWPFParam102,
            gitGraphDiagramUUTBAWPFValue89,
          ),
      )),
      (gitGraphDiagramUUTBAWPFValue88 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFValue88,
        gitGraphDiagramUUTBAWPFValue89,
      )),
      !gitGraphDiagramUUTBAWPFValue85 ||
        !gitGraphDiagramUUTBAWPFValue4.records.commits.has(
          gitGraphDiagramUUTBAWPFValue85,
        ))
    ) {
      let gitGraphDiagramUUTBAWPFValue212 = Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
      throw (
        (gitGraphDiagramUUTBAWPFValue212.hash = {
          text: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
          token: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
          expected: ["cherry-pick abc"],
        }),
        gitGraphDiagramUUTBAWPFValue212
      );
    }
    let gitGraphDiagramUUTBAWPFValue90 =
      gitGraphDiagramUUTBAWPFValue4.records.commits.get(
        gitGraphDiagramUUTBAWPFValue85,
      );
    if (
      gitGraphDiagramUUTBAWPFValue90 === undefined ||
      !gitGraphDiagramUUTBAWPFValue90
    )
      throw Error(
        'Incorrect usage of "cherryPick". Source commit id should exist and provided',
      );
    if (
      gitGraphDiagramUUTBAWPFValue88 &&
      !(
        Array.isArray(gitGraphDiagramUUTBAWPFValue90.parents) &&
        gitGraphDiagramUUTBAWPFValue90.parents.includes(
          gitGraphDiagramUUTBAWPFValue88,
        )
      )
    )
      throw Error(
        "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.",
      );
    let gitGraphDiagramUUTBAWPFValue91 = gitGraphDiagramUUTBAWPFValue90.branch;
    if (
      gitGraphDiagramUUTBAWPFValue90.type ===
        gitGraphDiagramUUTBAWPFValue1.MERGE &&
      !gitGraphDiagramUUTBAWPFValue88
    )
      throw Error(
        "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.",
      );
    if (
      !gitGraphDiagramUUTBAWPFValue86 ||
      !gitGraphDiagramUUTBAWPFValue4.records.commits.has(
        gitGraphDiagramUUTBAWPFValue86,
      )
    ) {
      if (
        gitGraphDiagramUUTBAWPFValue91 ===
        gitGraphDiagramUUTBAWPFValue4.records.currBranch
      ) {
        let gitGraphDiagramUUTBAWPFValue213 = Error(
          'Incorrect usage of "cherryPick". Source commit is already on current branch',
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue213.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFValue213
        );
      }
      let gitGraphDiagramUUTBAWPFValue133 =
        gitGraphDiagramUUTBAWPFValue4.records.branches.get(
          gitGraphDiagramUUTBAWPFValue4.records.currBranch,
        );
      if (
        gitGraphDiagramUUTBAWPFValue133 === undefined ||
        !gitGraphDiagramUUTBAWPFValue133
      ) {
        let gitGraphDiagramUUTBAWPFValue207 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramUUTBAWPFValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue207.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFValue207
        );
      }
      let gitGraphDiagramUUTBAWPFValue134 =
        gitGraphDiagramUUTBAWPFValue4.records.commits.get(
          gitGraphDiagramUUTBAWPFValue133,
        );
      if (
        gitGraphDiagramUUTBAWPFValue134 === undefined ||
        !gitGraphDiagramUUTBAWPFValue134
      ) {
        let gitGraphDiagramUUTBAWPFValue208 = Error(
          `Incorrect usage of "cherry-pick". Current branch (${gitGraphDiagramUUTBAWPFValue4.records.currBranch})has no commits`,
        );
        throw (
          (gitGraphDiagramUUTBAWPFValue208.hash = {
            text: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            token: `cherryPick ${gitGraphDiagramUUTBAWPFValue85} ${gitGraphDiagramUUTBAWPFValue86}`,
            expected: ["cherry-pick abc"],
          }),
          gitGraphDiagramUUTBAWPFValue208
        );
      }
      let gitGraphDiagramUUTBAWPFValue135 = {
        id:
          gitGraphDiagramUUTBAWPFValue4.records.seq +
          "-" +
          gitGraphDiagramUUTBAWPFHelper1(),
        message: `cherry-picked ${gitGraphDiagramUUTBAWPFValue90?.message} into ${gitGraphDiagramUUTBAWPFValue4.records.currBranch}`,
        seq: gitGraphDiagramUUTBAWPFValue4.records.seq++,
        parents:
          gitGraphDiagramUUTBAWPFValue4.records.head == null
            ? []
            : [
                gitGraphDiagramUUTBAWPFValue4.records.head.id,
                gitGraphDiagramUUTBAWPFValue90.id,
              ],
        branch: gitGraphDiagramUUTBAWPFValue4.records.currBranch,
        type: gitGraphDiagramUUTBAWPFValue1.CHERRY_PICK,
        tags: gitGraphDiagramUUTBAWPFValue87
          ? gitGraphDiagramUUTBAWPFValue87.filter(Boolean)
          : [
              `cherry-pick:${gitGraphDiagramUUTBAWPFValue90.id}${gitGraphDiagramUUTBAWPFValue90.type === gitGraphDiagramUUTBAWPFValue1.MERGE ? `|parent:${gitGraphDiagramUUTBAWPFValue88}` : ""}`,
            ],
      };
      gitGraphDiagramUUTBAWPFValue4.records.head =
        gitGraphDiagramUUTBAWPFValue135;
      gitGraphDiagramUUTBAWPFValue4.records.commits.set(
        gitGraphDiagramUUTBAWPFValue135.id,
        gitGraphDiagramUUTBAWPFValue135,
      );
      gitGraphDiagramUUTBAWPFValue4.records.branches.set(
        gitGraphDiagramUUTBAWPFValue4.records.currBranch,
        gitGraphDiagramUUTBAWPFValue135.id,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramUUTBAWPFValue4.records.branches);
      chunkAGHRB4JFR.debug("in cherryPick");
    }
  }, "cherryPick"),
  gitGraphDiagramUUTBAWPFValue12 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam39,
  ) {
    if (
      ((gitGraphDiagramUUTBAWPFParam39 = _chunkICPOFSXXS.sanitizeText(
        gitGraphDiagramUUTBAWPFParam39,
        gitGraphDiagramUUTBAWPFValue3(),
      )),
      gitGraphDiagramUUTBAWPFValue4.records.branches.has(
        gitGraphDiagramUUTBAWPFParam39,
      ))
    ) {
      gitGraphDiagramUUTBAWPFValue4.records.currBranch =
        gitGraphDiagramUUTBAWPFParam39;
      let gitGraphDiagramUUTBAWPFValue222 =
        gitGraphDiagramUUTBAWPFValue4.records.branches.get(
          gitGraphDiagramUUTBAWPFValue4.records.currBranch,
        );
      gitGraphDiagramUUTBAWPFValue222 === undefined ||
      !gitGraphDiagramUUTBAWPFValue222
        ? (gitGraphDiagramUUTBAWPFValue4.records.head = null)
        : (gitGraphDiagramUUTBAWPFValue4.records.head =
            gitGraphDiagramUUTBAWPFValue4.records.commits.get(
              gitGraphDiagramUUTBAWPFValue222,
            ) ?? null);
    } else {
      let gitGraphDiagramUUTBAWPFValue214 = Error(
        `Trying to checkout branch which is not yet created. (Help try using "branch ${gitGraphDiagramUUTBAWPFParam39}")`,
      );
      throw (
        (gitGraphDiagramUUTBAWPFValue214.hash = {
          text: `checkout ${gitGraphDiagramUUTBAWPFParam39}`,
          token: `checkout ${gitGraphDiagramUUTBAWPFParam39}`,
          expected: [`branch ${gitGraphDiagramUUTBAWPFParam39}`],
        }),
        gitGraphDiagramUUTBAWPFValue214
      );
    }
  }, "checkout");
function gitGraphDiagramUUTBAWPFHelper3(
  gitGraphDiagramUUTBAWPFParam89,
  gitGraphDiagramUUTBAWPFParam90,
  gitGraphDiagramUUTBAWPFParam91,
) {
  let gitGraphDiagramUUTBAWPFValue254 = gitGraphDiagramUUTBAWPFParam89.indexOf(
    gitGraphDiagramUUTBAWPFParam90,
  );
  gitGraphDiagramUUTBAWPFValue254 === -1
    ? gitGraphDiagramUUTBAWPFParam89.push(gitGraphDiagramUUTBAWPFParam91)
    : gitGraphDiagramUUTBAWPFParam89.splice(
        gitGraphDiagramUUTBAWPFValue254,
        1,
        gitGraphDiagramUUTBAWPFParam91,
      );
}
chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper3, "upsert");
function gitGraphDiagramUUTBAWPFHelper4(gitGraphDiagramUUTBAWPFParam37) {
  let gitGraphDiagramUUTBAWPFValue163 = gitGraphDiagramUUTBAWPFParam37.reduce(
      (accumulator, current) =>
        accumulator.seq > current.seq ? accumulator : current,
      gitGraphDiagramUUTBAWPFParam37[0],
    ),
    gitGraphDiagramUUTBAWPFValue164 = "";
  gitGraphDiagramUUTBAWPFParam37.forEach(function (item) {
    item === gitGraphDiagramUUTBAWPFValue163
      ? (gitGraphDiagramUUTBAWPFValue164 += "\t*")
      : (gitGraphDiagramUUTBAWPFValue164 += "\t|");
  });
  let gitGraphDiagramUUTBAWPFValue165 = [
    gitGraphDiagramUUTBAWPFValue164,
    gitGraphDiagramUUTBAWPFValue163.id,
    gitGraphDiagramUUTBAWPFValue163.seq,
  ];
  for (let gitGraphDiagramUUTBAWPFValue253 in gitGraphDiagramUUTBAWPFValue4
    .records.branches)
    gitGraphDiagramUUTBAWPFValue4.records.branches.get(
      gitGraphDiagramUUTBAWPFValue253,
    ) === gitGraphDiagramUUTBAWPFValue163.id &&
      gitGraphDiagramUUTBAWPFValue165.push(gitGraphDiagramUUTBAWPFValue253);
  if (
    (chunkAGHRB4JFR.debug(gitGraphDiagramUUTBAWPFValue165.join(" ")),
    gitGraphDiagramUUTBAWPFValue163.parents &&
      gitGraphDiagramUUTBAWPFValue163.parents.length == 2 &&
      gitGraphDiagramUUTBAWPFValue163.parents[0] &&
      gitGraphDiagramUUTBAWPFValue163.parents[1])
  ) {
    let gitGraphDiagramUUTBAWPFValue239 =
      gitGraphDiagramUUTBAWPFValue4.records.commits.get(
        gitGraphDiagramUUTBAWPFValue163.parents[0],
      );
    gitGraphDiagramUUTBAWPFHelper3(
      gitGraphDiagramUUTBAWPFParam37,
      gitGraphDiagramUUTBAWPFValue163,
      gitGraphDiagramUUTBAWPFValue239,
    );
    gitGraphDiagramUUTBAWPFValue163.parents[1] &&
      gitGraphDiagramUUTBAWPFParam37.push(
        gitGraphDiagramUUTBAWPFValue4.records.commits.get(
          gitGraphDiagramUUTBAWPFValue163.parents[1],
        ),
      );
  } else if (gitGraphDiagramUUTBAWPFValue163.parents.length == 0) return;
  else if (gitGraphDiagramUUTBAWPFValue163.parents[0]) {
    let gitGraphDiagramUUTBAWPFValue259 =
      gitGraphDiagramUUTBAWPFValue4.records.commits.get(
        gitGraphDiagramUUTBAWPFValue163.parents[0],
      );
    gitGraphDiagramUUTBAWPFHelper3(
      gitGraphDiagramUUTBAWPFParam37,
      gitGraphDiagramUUTBAWPFValue163,
      gitGraphDiagramUUTBAWPFValue259,
    );
  }
  gitGraphDiagramUUTBAWPFParam37 = gitGraphDiagramUUTBAWPFHelper2(
    gitGraphDiagramUUTBAWPFParam37,
    (gitGraphDiagramUUTBAWPFParam119) => gitGraphDiagramUUTBAWPFParam119.id,
  );
  gitGraphDiagramUUTBAWPFHelper4(gitGraphDiagramUUTBAWPFParam37);
}
chunkAGHRB4JFN(gitGraphDiagramUUTBAWPFHelper4, "prettyPrintCommitHistory");
var gitGraphDiagramUUTBAWPFValue13 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFR.debug(gitGraphDiagramUUTBAWPFValue4.records.commits);
    let gitGraphDiagramUUTBAWPFValue256 = gitGraphDiagramUUTBAWPFValue18()[0];
    gitGraphDiagramUUTBAWPFHelper4([gitGraphDiagramUUTBAWPFValue256]);
  }, "prettyPrint"),
  gitGraphDiagramUUTBAWPFValue14 = chunkAGHRB4JFN(function () {
    gitGraphDiagramUUTBAWPFValue4.reset();
    _chunkICPOFSXXA();
  }, "clear"),
  gitGraphDiagramUUTBAWPFValue15 = chunkAGHRB4JFN(function () {
    return [...gitGraphDiagramUUTBAWPFValue4.records.branchConfig.values()]
      .map((item, index) =>
        item.order !== null && item.order !== undefined
          ? item
          : {
              ...item,
              order: parseFloat(`0.${index}`),
            },
      )
      .sort(
        (gitGraphDiagramUUTBAWPFParam98, gitGraphDiagramUUTBAWPFParam99) =>
          (gitGraphDiagramUUTBAWPFParam98.order ?? 0) -
          (gitGraphDiagramUUTBAWPFParam99.order ?? 0),
      )
      .map(({ name }) => ({
        name,
      }));
  }, "getBranchesAsObjArray"),
  gitGraphDiagramUUTBAWPFValue16 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFValue4.records.branches;
  }, "getBranches"),
  gitGraphDiagramUUTBAWPFValue17 = chunkAGHRB4JFN(function () {
    return gitGraphDiagramUUTBAWPFValue4.records.commits;
  }, "getCommits"),
  gitGraphDiagramUUTBAWPFValue18 = chunkAGHRB4JFN(function () {
    let gitGraphDiagramUUTBAWPFValue236 = [
      ...gitGraphDiagramUUTBAWPFValue4.records.commits.values(),
    ];
    return (
      gitGraphDiagramUUTBAWPFValue236.forEach(function (item) {
        chunkAGHRB4JFR.debug(item.id);
      }),
      gitGraphDiagramUUTBAWPFValue236.sort(
        (gitGraphDiagramUUTBAWPFParam105, gitGraphDiagramUUTBAWPFParam106) =>
          gitGraphDiagramUUTBAWPFParam105.seq -
          gitGraphDiagramUUTBAWPFParam106.seq,
      ),
      gitGraphDiagramUUTBAWPFValue236
    );
  }, "getCommitsArray"),
  gitGraphDiagramUUTBAWPFValue19 = {
    commitType: gitGraphDiagramUUTBAWPFValue1,
    getConfig: gitGraphDiagramUUTBAWPFValue3,
    setDirection: gitGraphDiagramUUTBAWPFValue5,
    setOptions: gitGraphDiagramUUTBAWPFValue6,
    getOptions: gitGraphDiagramUUTBAWPFValue7,
    commit: gitGraphDiagramUUTBAWPFValue8,
    branch: gitGraphDiagramUUTBAWPFValue9,
    merge: gitGraphDiagramUUTBAWPFValue10,
    cherryPick: gitGraphDiagramUUTBAWPFValue11,
    checkout: gitGraphDiagramUUTBAWPFValue12,
    prettyPrint: gitGraphDiagramUUTBAWPFValue13,
    clear: gitGraphDiagramUUTBAWPFValue14,
    getBranchesAsObjArray: gitGraphDiagramUUTBAWPFValue15,
    getBranches: gitGraphDiagramUUTBAWPFValue16,
    getCommits: gitGraphDiagramUUTBAWPFValue17,
    getCommitsArray: gitGraphDiagramUUTBAWPFValue18,
    getCurrentBranch: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFValue4.records.currBranch;
    }, "getCurrentBranch"),
    getDirection: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFValue4.records.direction;
    }, "getDirection"),
    getHead: chunkAGHRB4JFN(function () {
      return gitGraphDiagramUUTBAWPFValue4.records.head;
    }, "getHead"),
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXB,
    setDiagramTitle: _chunkICPOFSXXW,
    getDiagramTitle: _chunkICPOFSXXC,
  },
  gitGraphDiagramUUTBAWPFValue20 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam87, gitGraphDiagramUUTBAWPFParam88) => {
      populateCommonDb(
        gitGraphDiagramUUTBAWPFParam87,
        gitGraphDiagramUUTBAWPFParam88,
      );
      gitGraphDiagramUUTBAWPFParam87.dir &&
        gitGraphDiagramUUTBAWPFParam88.setDirection(
          gitGraphDiagramUUTBAWPFParam87.dir,
        );
      for (let gitGraphDiagramUUTBAWPFValue261 of gitGraphDiagramUUTBAWPFParam87.statements)
        gitGraphDiagramUUTBAWPFValue21(
          gitGraphDiagramUUTBAWPFValue261,
          gitGraphDiagramUUTBAWPFParam88,
        );
    },
    "populate",
  ),
  gitGraphDiagramUUTBAWPFValue21 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam45, gitGraphDiagramUUTBAWPFParam46) => {
      let gitGraphDiagramUUTBAWPFValue184 = {
        Commit: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam107) =>
            gitGraphDiagramUUTBAWPFParam46.commit(
              gitGraphDiagramUUTBAWPFValue22(gitGraphDiagramUUTBAWPFParam107),
            ),
          "Commit",
        ),
        Branch: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam108) =>
            gitGraphDiagramUUTBAWPFParam46.branch(
              gitGraphDiagramUUTBAWPFValue23(gitGraphDiagramUUTBAWPFParam108),
            ),
          "Branch",
        ),
        Merge: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam109) =>
            gitGraphDiagramUUTBAWPFParam46.merge(
              _e(gitGraphDiagramUUTBAWPFParam109),
            ),
          "Merge",
        ),
        Checkout: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam104) =>
            gitGraphDiagramUUTBAWPFParam46.checkout(
              gitGraphDiagramUUTBAWPFValue24(gitGraphDiagramUUTBAWPFParam104),
            ),
          "Checkout",
        ),
        CherryPicking: chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam103) =>
            gitGraphDiagramUUTBAWPFParam46.cherryPick(
              gitGraphDiagramUUTBAWPFValue25(gitGraphDiagramUUTBAWPFParam103),
            ),
          "CherryPicking",
        ),
      }[gitGraphDiagramUUTBAWPFParam45.$type];
      gitGraphDiagramUUTBAWPFValue184
        ? gitGraphDiagramUUTBAWPFValue184(gitGraphDiagramUUTBAWPFParam45)
        : chunkAGHRB4JFR.error(
            `Unknown statement type: ${gitGraphDiagramUUTBAWPFParam45.$type}`,
          );
    },
    "parseStatement",
  ),
  gitGraphDiagramUUTBAWPFValue22 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam81) => ({
      id: gitGraphDiagramUUTBAWPFParam81.id,
      msg: gitGraphDiagramUUTBAWPFParam81.message ?? "",
      type:
        gitGraphDiagramUUTBAWPFParam81.type === undefined
          ? gitGraphDiagramUUTBAWPFValue1.NORMAL
          : gitGraphDiagramUUTBAWPFValue1[gitGraphDiagramUUTBAWPFParam81.type],
      tags: gitGraphDiagramUUTBAWPFParam81.tags ?? undefined,
    }),
    "parseCommit",
  ),
  gitGraphDiagramUUTBAWPFValue23 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam96) => ({
      name: gitGraphDiagramUUTBAWPFParam96.name,
      order: gitGraphDiagramUUTBAWPFParam96.order ?? 0,
    }),
    "parseBranch",
  ),
  _e = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam82) => ({
      branch: gitGraphDiagramUUTBAWPFParam82.branch,
      id: gitGraphDiagramUUTBAWPFParam82.id ?? "",
      type:
        gitGraphDiagramUUTBAWPFParam82.type === undefined
          ? undefined
          : gitGraphDiagramUUTBAWPFValue1[gitGraphDiagramUUTBAWPFParam82.type],
      tags: gitGraphDiagramUUTBAWPFParam82.tags ?? undefined,
    }),
    "parseMerge",
  ),
  gitGraphDiagramUUTBAWPFValue24 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam111) => gitGraphDiagramUUTBAWPFParam111.branch,
    "parseCheckout",
  ),
  gitGraphDiagramUUTBAWPFValue25 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam84) => ({
      id: gitGraphDiagramUUTBAWPFParam84.id,
      targetId: "",
      tags:
        gitGraphDiagramUUTBAWPFParam84.tags?.length === 0
          ? undefined
          : gitGraphDiagramUUTBAWPFParam84.tags,
      parent: gitGraphDiagramUUTBAWPFParam84.parent,
    }),
    "parseCherryPicking",
  ),
  be = {
    parse: chunkAGHRB4JFN(async (gitGraphDiagramUUTBAWPFParam92) => {
      let gitGraphDiagramUUTBAWPFValue257 = await MermaidParserCore(
        "gitGraph",
        gitGraphDiagramUUTBAWPFParam92,
      );
      chunkAGHRB4JFR.debug(gitGraphDiagramUUTBAWPFValue257);
      gitGraphDiagramUUTBAWPFValue20(
        gitGraphDiagramUUTBAWPFValue257,
        gitGraphDiagramUUTBAWPFValue19,
      );
    }, "parse"),
  },
  gitGraphDiagramUUTBAWPFValue31 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
  ]),
  gitGraphDiagramUUTBAWPFValue33 = new Set(["redux-color", "redux-dark-color"]),
  gitGraphDiagramUUTBAWPFValue34 = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark",
  ]),
  gitGraphDiagramUUTBAWPFValue35 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam93,
      gitGraphDiagramUUTBAWPFParam94,
      gitGraphDiagramUUTBAWPFParam95 = false,
    ) =>
      gitGraphDiagramUUTBAWPFParam95 && gitGraphDiagramUUTBAWPFParam93 > 0
        ? ((gitGraphDiagramUUTBAWPFParam93 - 1) %
            (gitGraphDiagramUUTBAWPFParam94 - 1)) +
          1
        : gitGraphDiagramUUTBAWPFParam93 % gitGraphDiagramUUTBAWPFParam94,
    "calcColorIndex",
  ),
  gitGraphDiagramUUTBAWPFValue36 = new Map(),
  gitGraphDiagramUUTBAWPFValue37 = new Map(),
  gitGraphDiagramUUTBAWPFValue39 = new Map(),
  gitGraphDiagramUUTBAWPFValue40 = [],
  gitGraphDiagramUUTBAWPFValue41 = 0,
  gitGraphDiagramUUTBAWPFValue42 = "LR",
  gitGraphDiagramUUTBAWPFValue43 = chunkAGHRB4JFN(() => {
    gitGraphDiagramUUTBAWPFValue36.clear();
    gitGraphDiagramUUTBAWPFValue37.clear();
    gitGraphDiagramUUTBAWPFValue39.clear();
    gitGraphDiagramUUTBAWPFValue41 = 0;
    gitGraphDiagramUUTBAWPFValue40 = [];
    gitGraphDiagramUUTBAWPFValue42 = "LR";
  }, "clear"),
  gitGraphDiagramUUTBAWPFValue44 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam38) => {
      let gitGraphDiagramUUTBAWPFValue168 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      return (
        (typeof gitGraphDiagramUUTBAWPFParam38 == "string"
          ? gitGraphDiagramUUTBAWPFParam38.split(/\\n|\n|<br\s*\/?>/gi)
          : gitGraphDiagramUUTBAWPFParam38
        ).forEach((item) => {
          let gitGraphDiagramUUTBAWPFValue190 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          gitGraphDiagramUUTBAWPFValue190.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          gitGraphDiagramUUTBAWPFValue190.setAttribute("dy", "1em");
          gitGraphDiagramUUTBAWPFValue190.setAttribute("x", "0");
          gitGraphDiagramUUTBAWPFValue190.setAttribute("class", "row");
          gitGraphDiagramUUTBAWPFValue190.textContent = item.trim();
          gitGraphDiagramUUTBAWPFValue168.appendChild(
            gitGraphDiagramUUTBAWPFValue190,
          );
        }),
        gitGraphDiagramUUTBAWPFValue168
      );
    },
    "drawText",
  ),
  gitGraphDiagramUUTBAWPFValue45 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam62) => {
      let gitGraphDiagramUUTBAWPFValue209,
        gitGraphDiagramUUTBAWPFValue210,
        gitGraphDiagramUUTBAWPFValue211;
      return (
        gitGraphDiagramUUTBAWPFValue42 === "BT"
          ? ((gitGraphDiagramUUTBAWPFValue210 = chunkAGHRB4JFN(
              (
                gitGraphDiagramUUTBAWPFParam112,
                gitGraphDiagramUUTBAWPFParam113,
              ) =>
                gitGraphDiagramUUTBAWPFParam112 <=
                gitGraphDiagramUUTBAWPFParam113,
              "comparisonFunc",
            )),
            (gitGraphDiagramUUTBAWPFValue211 = 1 / 0))
          : ((gitGraphDiagramUUTBAWPFValue210 = chunkAGHRB4JFN(
              (
                gitGraphDiagramUUTBAWPFParam114,
                gitGraphDiagramUUTBAWPFParam115,
              ) =>
                gitGraphDiagramUUTBAWPFParam114 >=
                gitGraphDiagramUUTBAWPFParam115,
              "comparisonFunc",
            )),
            (gitGraphDiagramUUTBAWPFValue211 = 0)),
        gitGraphDiagramUUTBAWPFParam62.forEach((item) => {
          let gitGraphDiagramUUTBAWPFValue249 =
            gitGraphDiagramUUTBAWPFValue42 === "TB" ||
            gitGraphDiagramUUTBAWPFValue42 == "BT"
              ? gitGraphDiagramUUTBAWPFValue37.get(item)?.y
              : gitGraphDiagramUUTBAWPFValue37.get(item)?.x;
          gitGraphDiagramUUTBAWPFValue249 !== undefined &&
            gitGraphDiagramUUTBAWPFValue210(
              gitGraphDiagramUUTBAWPFValue249,
              gitGraphDiagramUUTBAWPFValue211,
            ) &&
            ((gitGraphDiagramUUTBAWPFValue209 = item),
            (gitGraphDiagramUUTBAWPFValue211 =
              gitGraphDiagramUUTBAWPFValue249));
        }),
        gitGraphDiagramUUTBAWPFValue209
      );
    },
    "findClosestParent",
  ),
  gitGraphDiagramUUTBAWPFValue46 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam83) => {
      let gitGraphDiagramUUTBAWPFValue247 = "",
        gitGraphDiagramUUTBAWPFValue248 = 1 / 0;
      return (
        gitGraphDiagramUUTBAWPFParam83.forEach((item) => {
          let gitGraphDiagramUUTBAWPFValue260 =
            gitGraphDiagramUUTBAWPFValue37.get(item).y;
          gitGraphDiagramUUTBAWPFValue260 <= gitGraphDiagramUUTBAWPFValue248 &&
            ((gitGraphDiagramUUTBAWPFValue247 = item),
            (gitGraphDiagramUUTBAWPFValue248 =
              gitGraphDiagramUUTBAWPFValue260));
        }),
        gitGraphDiagramUUTBAWPFValue247 || undefined
      );
    },
    "findClosestParentBT",
  ),
  gitGraphDiagramUUTBAWPFValue47 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam42,
      gitGraphDiagramUUTBAWPFParam43,
      gitGraphDiagramUUTBAWPFParam44,
    ) => {
      let gitGraphDiagramUUTBAWPFValue172 = gitGraphDiagramUUTBAWPFParam44,
        gitGraphDiagramUUTBAWPFValue173 = gitGraphDiagramUUTBAWPFParam44,
        gitGraphDiagramUUTBAWPFValue174 = [];
      gitGraphDiagramUUTBAWPFParam42.forEach((item) => {
        let gitGraphDiagramUUTBAWPFValue230 =
          gitGraphDiagramUUTBAWPFParam43.get(item);
        if (!gitGraphDiagramUUTBAWPFValue230)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramUUTBAWPFValue230.parents.length
          ? ((gitGraphDiagramUUTBAWPFValue172 = gitGraphDiagramUUTBAWPFValue49(
              gitGraphDiagramUUTBAWPFValue230,
            )),
            (gitGraphDiagramUUTBAWPFValue173 = Math.max(
              gitGraphDiagramUUTBAWPFValue172,
              gitGraphDiagramUUTBAWPFValue173,
            )))
          : gitGraphDiagramUUTBAWPFValue174.push(
              gitGraphDiagramUUTBAWPFValue230,
            );
        gitGraphDiagramUUTBAWPFValue50(
          gitGraphDiagramUUTBAWPFValue230,
          gitGraphDiagramUUTBAWPFValue172,
        );
      });
      gitGraphDiagramUUTBAWPFValue172 = gitGraphDiagramUUTBAWPFValue173;
      gitGraphDiagramUUTBAWPFValue174.forEach((item) => {
        gitGraphDiagramUUTBAWPFValue51(
          item,
          gitGraphDiagramUUTBAWPFValue172,
          gitGraphDiagramUUTBAWPFParam44,
        );
      });
      gitGraphDiagramUUTBAWPFParam42.forEach((item) => {
        let gitGraphDiagramUUTBAWPFValue228 =
          gitGraphDiagramUUTBAWPFParam43.get(item);
        if (gitGraphDiagramUUTBAWPFValue228?.parents.length) {
          let gitGraphDiagramUUTBAWPFValue241 = gitGraphDiagramUUTBAWPFValue46(
            gitGraphDiagramUUTBAWPFValue228.parents,
          );
          gitGraphDiagramUUTBAWPFValue172 =
            gitGraphDiagramUUTBAWPFValue37.get(gitGraphDiagramUUTBAWPFValue241)
              .y - 40;
          gitGraphDiagramUUTBAWPFValue172 <= gitGraphDiagramUUTBAWPFValue173 &&
            (gitGraphDiagramUUTBAWPFValue173 = gitGraphDiagramUUTBAWPFValue172);
          let gitGraphDiagramUUTBAWPFValue242 =
              gitGraphDiagramUUTBAWPFValue36.get(
                gitGraphDiagramUUTBAWPFValue228.branch,
              ).pos,
            gitGraphDiagramUUTBAWPFValue243 =
              gitGraphDiagramUUTBAWPFValue172 - 10;
          gitGraphDiagramUUTBAWPFValue37.set(
            gitGraphDiagramUUTBAWPFValue228.id,
            {
              x: gitGraphDiagramUUTBAWPFValue242,
              y: gitGraphDiagramUUTBAWPFValue243,
            },
          );
        }
      });
    },
    "setParallelBTPos",
  ),
  gitGraphDiagramUUTBAWPFValue48 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam55) => {
      let gitGraphDiagramUUTBAWPFValue201 = gitGraphDiagramUUTBAWPFValue45(
        gitGraphDiagramUUTBAWPFParam55.parents.filter((item) => item !== null),
      );
      if (!gitGraphDiagramUUTBAWPFValue201)
        throw Error(
          `Closest parent not found for commit ${gitGraphDiagramUUTBAWPFParam55.id}`,
        );
      let gitGraphDiagramUUTBAWPFValue202 = gitGraphDiagramUUTBAWPFValue37.get(
        gitGraphDiagramUUTBAWPFValue201,
      )?.y;
      if (gitGraphDiagramUUTBAWPFValue202 === undefined)
        throw Error(
          `Closest parent position not found for commit ${gitGraphDiagramUUTBAWPFParam55.id}`,
        );
      return gitGraphDiagramUUTBAWPFValue202;
    },
    "findClosestParentPos",
  ),
  gitGraphDiagramUUTBAWPFValue49 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam116) =>
      gitGraphDiagramUUTBAWPFValue48(gitGraphDiagramUUTBAWPFParam116) + 40,
    "calculateCommitPosition",
  ),
  gitGraphDiagramUUTBAWPFValue50 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam66, gitGraphDiagramUUTBAWPFParam67) => {
      let gitGraphDiagramUUTBAWPFValue225 = gitGraphDiagramUUTBAWPFValue36.get(
        gitGraphDiagramUUTBAWPFParam66.branch,
      );
      if (!gitGraphDiagramUUTBAWPFValue225)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramUUTBAWPFParam66.id}`,
        );
      let gitGraphDiagramUUTBAWPFValue226 = gitGraphDiagramUUTBAWPFValue225.pos,
        gitGraphDiagramUUTBAWPFValue227 = gitGraphDiagramUUTBAWPFParam67 + 10;
      return (
        gitGraphDiagramUUTBAWPFValue37.set(gitGraphDiagramUUTBAWPFParam66.id, {
          x: gitGraphDiagramUUTBAWPFValue226,
          y: gitGraphDiagramUUTBAWPFValue227,
        }),
        {
          x: gitGraphDiagramUUTBAWPFValue226,
          y: gitGraphDiagramUUTBAWPFValue227,
        }
      );
    },
    "setCommitPosition",
  ),
  gitGraphDiagramUUTBAWPFValue51 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam68,
      gitGraphDiagramUUTBAWPFParam69,
      gitGraphDiagramUUTBAWPFParam70,
    ) => {
      let gitGraphDiagramUUTBAWPFValue231 = gitGraphDiagramUUTBAWPFValue36.get(
        gitGraphDiagramUUTBAWPFParam68.branch,
      );
      if (!gitGraphDiagramUUTBAWPFValue231)
        throw Error(
          `Branch not found for commit ${gitGraphDiagramUUTBAWPFParam68.id}`,
        );
      let gitGraphDiagramUUTBAWPFValue232 =
          gitGraphDiagramUUTBAWPFParam69 + gitGraphDiagramUUTBAWPFParam70,
        gitGraphDiagramUUTBAWPFValue233 = gitGraphDiagramUUTBAWPFValue231.pos;
      gitGraphDiagramUUTBAWPFValue37.set(gitGraphDiagramUUTBAWPFParam68.id, {
        x: gitGraphDiagramUUTBAWPFValue233,
        y: gitGraphDiagramUUTBAWPFValue232,
      });
    },
    "setRootPosition",
  ),
  gitGraphDiagramUUTBAWPFValue52 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam13,
      gitGraphDiagramUUTBAWPFParam14,
      gitGraphDiagramUUTBAWPFParam15,
      gitGraphDiagramUUTBAWPFParam16,
      gitGraphDiagramUUTBAWPFParam17,
      gitGraphDiagramUUTBAWPFParam18,
    ) => {
      let { theme } = _chunkICPOFSXXB(),
        gitGraphDiagramUUTBAWPFValue107 = gitGraphDiagramUUTBAWPFValue31.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFValue108 = gitGraphDiagramUUTBAWPFValue33.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFValue109 = gitGraphDiagramUUTBAWPFValue34.has(
          theme ?? "",
        );
      if (
        gitGraphDiagramUUTBAWPFParam18 ===
        gitGraphDiagramUUTBAWPFValue1.HIGHLIGHT
      ) {
        gitGraphDiagramUUTBAWPFParam13
          .append("rect")
          .attr(
            "x",
            gitGraphDiagramUUTBAWPFParam15.x -
              10 +
              (gitGraphDiagramUUTBAWPFValue107 ? 3 : 0),
          )
          .attr(
            "y",
            gitGraphDiagramUUTBAWPFParam15.y -
              10 +
              (gitGraphDiagramUUTBAWPFValue107 ? 3 : 0),
          )
          .attr("width", gitGraphDiagramUUTBAWPFValue107 ? 14 : 20)
          .attr("height", gitGraphDiagramUUTBAWPFValue107 ? 14 : 20)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} commit-highlight${gitGraphDiagramUUTBAWPFValue35(gitGraphDiagramUUTBAWPFParam17, 8, gitGraphDiagramUUTBAWPFValue108)} ${gitGraphDiagramUUTBAWPFParam16}-outer`,
          );
        gitGraphDiagramUUTBAWPFParam13
          .append("rect")
          .attr(
            "x",
            gitGraphDiagramUUTBAWPFParam15.x -
              6 +
              (gitGraphDiagramUUTBAWPFValue107 ? 2 : 0),
          )
          .attr(
            "y",
            gitGraphDiagramUUTBAWPFParam15.y -
              6 +
              (gitGraphDiagramUUTBAWPFValue107 ? 2 : 0),
          )
          .attr("width", gitGraphDiagramUUTBAWPFValue107 ? 8 : 12)
          .attr("height", gitGraphDiagramUUTBAWPFValue107 ? 8 : 12)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} commit${gitGraphDiagramUUTBAWPFValue35(gitGraphDiagramUUTBAWPFParam17, 8, gitGraphDiagramUUTBAWPFValue108)} ${gitGraphDiagramUUTBAWPFParam16}-inner`,
          );
      } else if (
        gitGraphDiagramUUTBAWPFParam18 ===
        gitGraphDiagramUUTBAWPFValue1.CHERRY_PICK
      ) {
        gitGraphDiagramUUTBAWPFParam13
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFParam15.x)
          .attr("cy", gitGraphDiagramUUTBAWPFParam15.y)
          .attr("r", gitGraphDiagramUUTBAWPFValue107 ? 7 : 10)
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} ${gitGraphDiagramUUTBAWPFParam16}`,
          );
        gitGraphDiagramUUTBAWPFParam13
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFParam15.x - 3)
          .attr("cy", gitGraphDiagramUUTBAWPFParam15.y + 2)
          .attr("r", gitGraphDiagramUUTBAWPFValue107 ? 2.5 : 2.75)
          .attr("fill", gitGraphDiagramUUTBAWPFValue109 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} ${gitGraphDiagramUUTBAWPFParam16}`,
          );
        gitGraphDiagramUUTBAWPFParam13
          .append("circle")
          .attr("cx", gitGraphDiagramUUTBAWPFParam15.x + 3)
          .attr("cy", gitGraphDiagramUUTBAWPFParam15.y + 2)
          .attr("r", gitGraphDiagramUUTBAWPFValue107 ? 2.5 : 2.75)
          .attr("fill", gitGraphDiagramUUTBAWPFValue109 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} ${gitGraphDiagramUUTBAWPFParam16}`,
          );
        gitGraphDiagramUUTBAWPFParam13
          .append("line")
          .attr("x1", gitGraphDiagramUUTBAWPFParam15.x + 3)
          .attr("y1", gitGraphDiagramUUTBAWPFParam15.y + 1)
          .attr("x2", gitGraphDiagramUUTBAWPFParam15.x)
          .attr("y2", gitGraphDiagramUUTBAWPFParam15.y - 5)
          .attr("stroke", gitGraphDiagramUUTBAWPFValue109 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} ${gitGraphDiagramUUTBAWPFParam16}`,
          );
        gitGraphDiagramUUTBAWPFParam13
          .append("line")
          .attr("x1", gitGraphDiagramUUTBAWPFParam15.x - 3)
          .attr("y1", gitGraphDiagramUUTBAWPFParam15.y + 1)
          .attr("x2", gitGraphDiagramUUTBAWPFParam15.x)
          .attr("y2", gitGraphDiagramUUTBAWPFParam15.y - 5)
          .attr("stroke", gitGraphDiagramUUTBAWPFValue109 ? "#000000" : "#fff")
          .attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} ${gitGraphDiagramUUTBAWPFParam16}`,
          );
      } else {
        let gitGraphDiagramUUTBAWPFValue167 =
          gitGraphDiagramUUTBAWPFParam13.append("circle");
        if (
          (gitGraphDiagramUUTBAWPFValue167.attr(
            "cx",
            gitGraphDiagramUUTBAWPFParam15.x,
          ),
          gitGraphDiagramUUTBAWPFValue167.attr(
            "cy",
            gitGraphDiagramUUTBAWPFParam15.y,
          ),
          gitGraphDiagramUUTBAWPFValue167.attr(
            "r",
            gitGraphDiagramUUTBAWPFValue107 ? 7 : 10,
          ),
          gitGraphDiagramUUTBAWPFValue167.attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam14.id} commit${gitGraphDiagramUUTBAWPFValue35(gitGraphDiagramUUTBAWPFParam17, 8, gitGraphDiagramUUTBAWPFValue108)}`,
          ),
          gitGraphDiagramUUTBAWPFParam18 ===
            gitGraphDiagramUUTBAWPFValue1.MERGE)
        ) {
          let gitGraphDiagramUUTBAWPFValue229 =
            gitGraphDiagramUUTBAWPFParam13.append("circle");
          gitGraphDiagramUUTBAWPFValue229.attr(
            "cx",
            gitGraphDiagramUUTBAWPFParam15.x,
          );
          gitGraphDiagramUUTBAWPFValue229.attr(
            "cy",
            gitGraphDiagramUUTBAWPFParam15.y,
          );
          gitGraphDiagramUUTBAWPFValue229.attr(
            "r",
            gitGraphDiagramUUTBAWPFValue107 ? 5 : 6,
          );
          gitGraphDiagramUUTBAWPFValue229.attr(
            "class",
            `commit ${gitGraphDiagramUUTBAWPFParam16} ${gitGraphDiagramUUTBAWPFParam14.id} commit${gitGraphDiagramUUTBAWPFValue35(gitGraphDiagramUUTBAWPFParam17, 8, gitGraphDiagramUUTBAWPFValue108)}`,
          );
        }
        if (
          gitGraphDiagramUUTBAWPFParam18 ===
          gitGraphDiagramUUTBAWPFValue1.REVERSE
        ) {
          let gitGraphDiagramUUTBAWPFValue216 =
              gitGraphDiagramUUTBAWPFParam13.append("path"),
            gitGraphDiagramUUTBAWPFValue217 = gitGraphDiagramUUTBAWPFValue107
              ? 4
              : 5;
          gitGraphDiagramUUTBAWPFValue216
            .attr(
              "d",
              `M ${gitGraphDiagramUUTBAWPFParam15.x - gitGraphDiagramUUTBAWPFValue217},${gitGraphDiagramUUTBAWPFParam15.y - gitGraphDiagramUUTBAWPFValue217}L${gitGraphDiagramUUTBAWPFParam15.x + gitGraphDiagramUUTBAWPFValue217},${gitGraphDiagramUUTBAWPFParam15.y + gitGraphDiagramUUTBAWPFValue217}M${gitGraphDiagramUUTBAWPFParam15.x - gitGraphDiagramUUTBAWPFValue217},${gitGraphDiagramUUTBAWPFParam15.y + gitGraphDiagramUUTBAWPFValue217}L${gitGraphDiagramUUTBAWPFParam15.x + gitGraphDiagramUUTBAWPFValue217},${gitGraphDiagramUUTBAWPFParam15.y - gitGraphDiagramUUTBAWPFValue217}`,
            )
            .attr(
              "class",
              `commit ${gitGraphDiagramUUTBAWPFParam16} ${gitGraphDiagramUUTBAWPFParam14.id} commit${gitGraphDiagramUUTBAWPFValue35(gitGraphDiagramUUTBAWPFParam17, 8, gitGraphDiagramUUTBAWPFValue108)}`,
            );
        }
      }
    },
    "drawCommitBullet",
  ),
  gitGraphDiagramUUTBAWPFValue53 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam27,
      gitGraphDiagramUUTBAWPFParam28,
      gitGraphDiagramUUTBAWPFParam29,
      gitGraphDiagramUUTBAWPFParam30,
      gitGraphDiagramUUTBAWPFParam31,
    ) => {
      if (
        gitGraphDiagramUUTBAWPFParam28.type !==
          gitGraphDiagramUUTBAWPFValue1.CHERRY_PICK &&
        ((gitGraphDiagramUUTBAWPFParam28.customId &&
          gitGraphDiagramUUTBAWPFParam28.type ===
            gitGraphDiagramUUTBAWPFValue1.MERGE) ||
          gitGraphDiagramUUTBAWPFParam28.type !==
            gitGraphDiagramUUTBAWPFValue1.MERGE) &&
        gitGraphDiagramUUTBAWPFParam31.showCommitLabel
      ) {
        let gitGraphDiagramUUTBAWPFValue142 =
            gitGraphDiagramUUTBAWPFParam27.append("g"),
          gitGraphDiagramUUTBAWPFValue143 = gitGraphDiagramUUTBAWPFValue142
            .insert("rect")
            .attr("class", "commit-label-bkg"),
          gitGraphDiagramUUTBAWPFValue144 = gitGraphDiagramUUTBAWPFValue142
            .append("text")
            .attr("x", gitGraphDiagramUUTBAWPFParam30)
            .attr("y", gitGraphDiagramUUTBAWPFParam29.y + 25)
            .attr("class", "commit-label")
            .text(gitGraphDiagramUUTBAWPFParam28.id),
          gitGraphDiagramUUTBAWPFValue145 = gitGraphDiagramUUTBAWPFValue144
            .node()
            ?.getBBox();
        if (
          gitGraphDiagramUUTBAWPFValue145 &&
          (gitGraphDiagramUUTBAWPFValue143
            .attr(
              "x",
              gitGraphDiagramUUTBAWPFParam29.posWithOffset -
                gitGraphDiagramUUTBAWPFValue145.width / 2 -
                2,
            )
            .attr("y", gitGraphDiagramUUTBAWPFParam29.y + 13.5)
            .attr("width", gitGraphDiagramUUTBAWPFValue145.width + 4)
            .attr("height", gitGraphDiagramUUTBAWPFValue145.height + 4),
          gitGraphDiagramUUTBAWPFValue42 === "TB" ||
          gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? (gitGraphDiagramUUTBAWPFValue143
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFParam29.x -
                    (gitGraphDiagramUUTBAWPFValue145.width + 16 + 5),
                )
                .attr("y", gitGraphDiagramUUTBAWPFParam29.y - 12),
              gitGraphDiagramUUTBAWPFValue144
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFParam29.x -
                    (gitGraphDiagramUUTBAWPFValue145.width + 16),
                )
                .attr(
                  "y",
                  gitGraphDiagramUUTBAWPFParam29.y +
                    gitGraphDiagramUUTBAWPFValue145.height -
                    12,
                ))
            : gitGraphDiagramUUTBAWPFValue144.attr(
                "x",
                gitGraphDiagramUUTBAWPFParam29.posWithOffset -
                  gitGraphDiagramUUTBAWPFValue145.width / 2,
              ),
          gitGraphDiagramUUTBAWPFParam31.rotateCommitLabel)
        )
          if (
            gitGraphDiagramUUTBAWPFValue42 === "TB" ||
            gitGraphDiagramUUTBAWPFValue42 === "BT"
          ) {
            gitGraphDiagramUUTBAWPFValue144.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramUUTBAWPFParam29.x +
                ", " +
                gitGraphDiagramUUTBAWPFParam29.y +
                ")",
            );
            gitGraphDiagramUUTBAWPFValue143.attr(
              "transform",
              "rotate(-45, " +
                gitGraphDiagramUUTBAWPFParam29.x +
                ", " +
                gitGraphDiagramUUTBAWPFParam29.y +
                ")",
            );
          } else {
            let gitGraphDiagramUUTBAWPFValue234 =
                -7.5 -
                ((gitGraphDiagramUUTBAWPFValue145.width + 10) / 25) * 9.5,
              gitGraphDiagramUUTBAWPFValue235 =
                10 + (gitGraphDiagramUUTBAWPFValue145.width / 25) * 8.5;
            gitGraphDiagramUUTBAWPFValue142.attr(
              "transform",
              "translate(" +
                gitGraphDiagramUUTBAWPFValue234 +
                ", " +
                gitGraphDiagramUUTBAWPFValue235 +
                ") rotate(-45, " +
                gitGraphDiagramUUTBAWPFParam30 +
                ", " +
                gitGraphDiagramUUTBAWPFParam29.y +
                ")",
            );
          }
      }
    },
    "drawCommitLabel",
  ),
  gitGraphDiagramUUTBAWPFValue54 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam23,
      gitGraphDiagramUUTBAWPFParam24,
      gitGraphDiagramUUTBAWPFParam25,
      gitGraphDiagramUUTBAWPFParam26,
    ) => {
      if (gitGraphDiagramUUTBAWPFParam24.tags.length > 0) {
        let gitGraphDiagramUUTBAWPFValue129 = 0,
          gitGraphDiagramUUTBAWPFValue130 = 0,
          gitGraphDiagramUUTBAWPFValue131 = 0,
          gitGraphDiagramUUTBAWPFValue132 = [];
        for (let gitGraphDiagramUUTBAWPFValue178 of gitGraphDiagramUUTBAWPFParam24.tags.reverse()) {
          let gitGraphDiagramUUTBAWPFValue180 =
              gitGraphDiagramUUTBAWPFParam23.insert("polygon"),
            gitGraphDiagramUUTBAWPFValue181 =
              gitGraphDiagramUUTBAWPFParam23.append("circle"),
            gitGraphDiagramUUTBAWPFValue182 = gitGraphDiagramUUTBAWPFParam23
              .append("text")
              .attr(
                "y",
                gitGraphDiagramUUTBAWPFParam25.y -
                  16 -
                  gitGraphDiagramUUTBAWPFValue129,
              )
              .attr("class", "tag-label")
              .text(gitGraphDiagramUUTBAWPFValue178),
            gitGraphDiagramUUTBAWPFValue183 = gitGraphDiagramUUTBAWPFValue182
              .node()
              ?.getBBox();
          if (!gitGraphDiagramUUTBAWPFValue183)
            throw Error("Tag bbox not found");
          gitGraphDiagramUUTBAWPFValue130 = Math.max(
            gitGraphDiagramUUTBAWPFValue130,
            gitGraphDiagramUUTBAWPFValue183.width,
          );
          gitGraphDiagramUUTBAWPFValue131 = Math.max(
            gitGraphDiagramUUTBAWPFValue131,
            gitGraphDiagramUUTBAWPFValue183.height,
          );
          gitGraphDiagramUUTBAWPFValue182.attr(
            "x",
            gitGraphDiagramUUTBAWPFParam25.posWithOffset -
              gitGraphDiagramUUTBAWPFValue183.width / 2,
          );
          gitGraphDiagramUUTBAWPFValue132.push({
            tag: gitGraphDiagramUUTBAWPFValue182,
            hole: gitGraphDiagramUUTBAWPFValue181,
            rect: gitGraphDiagramUUTBAWPFValue180,
            yOffset: gitGraphDiagramUUTBAWPFValue129,
          });
          gitGraphDiagramUUTBAWPFValue129 += 20;
        }
        for (let {
          tag,
          hole,
          rect,
          yOffset,
        } of gitGraphDiagramUUTBAWPFValue132) {
          let gitGraphDiagramUUTBAWPFValue140 =
              gitGraphDiagramUUTBAWPFValue131 / 2,
            gitGraphDiagramUUTBAWPFValue141 =
              gitGraphDiagramUUTBAWPFParam25.y - 19.2 - yOffset;
          if (
            (rect.attr("class", "tag-label-bkg").attr(
              "points",
              `
      ${gitGraphDiagramUUTBAWPFParam26 - gitGraphDiagramUUTBAWPFValue130 / 2 - 2},${gitGraphDiagramUUTBAWPFValue141 + 2}  
      ${gitGraphDiagramUUTBAWPFParam26 - gitGraphDiagramUUTBAWPFValue130 / 2 - 2},${gitGraphDiagramUUTBAWPFValue141 - 2}
      ${gitGraphDiagramUUTBAWPFParam25.posWithOffset - gitGraphDiagramUUTBAWPFValue130 / 2 - 4},${gitGraphDiagramUUTBAWPFValue141 - gitGraphDiagramUUTBAWPFValue140 - 2}
      ${gitGraphDiagramUUTBAWPFParam25.posWithOffset + gitGraphDiagramUUTBAWPFValue130 / 2 + 4},${gitGraphDiagramUUTBAWPFValue141 - gitGraphDiagramUUTBAWPFValue140 - 2}
      ${gitGraphDiagramUUTBAWPFParam25.posWithOffset + gitGraphDiagramUUTBAWPFValue130 / 2 + 4},${gitGraphDiagramUUTBAWPFValue141 + gitGraphDiagramUUTBAWPFValue140 + 2}
      ${gitGraphDiagramUUTBAWPFParam25.posWithOffset - gitGraphDiagramUUTBAWPFValue130 / 2 - 4},${gitGraphDiagramUUTBAWPFValue141 + gitGraphDiagramUUTBAWPFValue140 + 2}`,
            ),
            hole
              .attr("cy", gitGraphDiagramUUTBAWPFValue141)
              .attr(
                "cx",
                gitGraphDiagramUUTBAWPFParam26 -
                  gitGraphDiagramUUTBAWPFValue130 / 2 +
                  2,
              )
              .attr("r", 1.5)
              .attr("class", "tag-hole"),
            gitGraphDiagramUUTBAWPFValue42 === "TB" ||
              gitGraphDiagramUUTBAWPFValue42 === "BT")
          ) {
            let gitGraphDiagramUUTBAWPFValue166 =
              gitGraphDiagramUUTBAWPFParam26 + yOffset;
            rect
              .attr("class", "tag-label-bkg")
              .attr(
                "points",
                `
        ${gitGraphDiagramUUTBAWPFParam25.x},${gitGraphDiagramUUTBAWPFValue166 + 2}
        ${gitGraphDiagramUUTBAWPFParam25.x},${gitGraphDiagramUUTBAWPFValue166 - 2}
        ${gitGraphDiagramUUTBAWPFParam25.x + 10},${gitGraphDiagramUUTBAWPFValue166 - gitGraphDiagramUUTBAWPFValue140 - 2}
        ${gitGraphDiagramUUTBAWPFParam25.x + 10 + gitGraphDiagramUUTBAWPFValue130 + 4},${gitGraphDiagramUUTBAWPFValue166 - gitGraphDiagramUUTBAWPFValue140 - 2}
        ${gitGraphDiagramUUTBAWPFParam25.x + 10 + gitGraphDiagramUUTBAWPFValue130 + 4},${gitGraphDiagramUUTBAWPFValue166 + gitGraphDiagramUUTBAWPFValue140 + 2}
        ${gitGraphDiagramUUTBAWPFParam25.x + 10},${gitGraphDiagramUUTBAWPFValue166 + gitGraphDiagramUUTBAWPFValue140 + 2}`,
              )
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramUUTBAWPFParam25.x +
                  "," +
                  gitGraphDiagramUUTBAWPFParam26 +
                  ")",
              );
            hole
              .attr("cx", gitGraphDiagramUUTBAWPFParam25.x + 2)
              .attr("cy", gitGraphDiagramUUTBAWPFValue166)
              .attr(
                "transform",
                "translate(12,12) rotate(45, " +
                  gitGraphDiagramUUTBAWPFParam25.x +
                  "," +
                  gitGraphDiagramUUTBAWPFParam26 +
                  ")",
              );
            tag
              .attr("x", gitGraphDiagramUUTBAWPFParam25.x + 5)
              .attr("y", gitGraphDiagramUUTBAWPFValue166 + 3)
              .attr(
                "transform",
                "translate(14,14) rotate(45, " +
                  gitGraphDiagramUUTBAWPFParam25.x +
                  "," +
                  gitGraphDiagramUUTBAWPFParam26 +
                  ")",
              );
          }
        }
      }
    },
    "drawCommitTags",
  ),
  gitGraphDiagramUUTBAWPFValue55 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam50) => {
      switch (
        gitGraphDiagramUUTBAWPFParam50.customType ??
        gitGraphDiagramUUTBAWPFParam50.type
      ) {
        case gitGraphDiagramUUTBAWPFValue1.NORMAL:
          return "commit-normal";
        case gitGraphDiagramUUTBAWPFValue1.REVERSE:
          return "commit-reverse";
        case gitGraphDiagramUUTBAWPFValue1.HIGHLIGHT:
          return "commit-highlight";
        case gitGraphDiagramUUTBAWPFValue1.MERGE:
          return "commit-merge";
        case gitGraphDiagramUUTBAWPFValue1.CHERRY_PICK:
          return "commit-cherry-pick";
        default:
          return "commit-normal";
      }
    },
    "getCommitClassType",
  ),
  gitGraphDiagramUUTBAWPFValue56 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam51,
      gitGraphDiagramUUTBAWPFParam52,
      gitGraphDiagramUUTBAWPFParam53,
      gitGraphDiagramUUTBAWPFParam54,
    ) => {
      let gitGraphDiagramUUTBAWPFValue192 = {
        x: 0,
        y: 0,
      };
      if (gitGraphDiagramUUTBAWPFParam51.parents.length > 0) {
        let gitGraphDiagramUUTBAWPFValue240 = gitGraphDiagramUUTBAWPFValue45(
          gitGraphDiagramUUTBAWPFParam51.parents,
        );
        if (gitGraphDiagramUUTBAWPFValue240) {
          let gitGraphDiagramUUTBAWPFValue252 =
            gitGraphDiagramUUTBAWPFParam54.get(
              gitGraphDiagramUUTBAWPFValue240,
            ) ?? gitGraphDiagramUUTBAWPFValue192;
          return gitGraphDiagramUUTBAWPFParam52 === "TB"
            ? gitGraphDiagramUUTBAWPFValue252.y + 40
            : gitGraphDiagramUUTBAWPFParam52 === "BT"
              ? (
                  gitGraphDiagramUUTBAWPFParam54.get(
                    gitGraphDiagramUUTBAWPFParam51.id,
                  ) ?? gitGraphDiagramUUTBAWPFValue192
                ).y - 40
              : gitGraphDiagramUUTBAWPFValue252.x + 40;
        }
      } else if (gitGraphDiagramUUTBAWPFParam52 === "TB") return 30;
      else if (gitGraphDiagramUUTBAWPFParam52 === "BT")
        return (
          (
            gitGraphDiagramUUTBAWPFParam54.get(
              gitGraphDiagramUUTBAWPFParam51.id,
            ) ?? gitGraphDiagramUUTBAWPFValue192
          ).y - 40
        );
      else return 0;
      return 0;
    },
    "calculatePosition",
  ),
  gitGraphDiagramUUTBAWPFValue57 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam47,
      gitGraphDiagramUUTBAWPFParam48,
      gitGraphDiagramUUTBAWPFParam49,
    ) => {
      let gitGraphDiagramUUTBAWPFValue186 =
          gitGraphDiagramUUTBAWPFValue42 === "BT" &&
          gitGraphDiagramUUTBAWPFParam49
            ? gitGraphDiagramUUTBAWPFParam48
            : gitGraphDiagramUUTBAWPFParam48 + 10,
        gitGraphDiagramUUTBAWPFValue187 = gitGraphDiagramUUTBAWPFValue36.get(
          gitGraphDiagramUUTBAWPFParam47.branch,
        )?.pos,
        gitGraphDiagramUUTBAWPFValue188 =
          gitGraphDiagramUUTBAWPFValue42 === "TB" ||
          gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? gitGraphDiagramUUTBAWPFValue36.get(
                gitGraphDiagramUUTBAWPFParam47.branch,
              )?.pos
            : gitGraphDiagramUUTBAWPFValue186;
      if (
        gitGraphDiagramUUTBAWPFValue188 === undefined ||
        gitGraphDiagramUUTBAWPFValue187 === undefined
      )
        throw Error(
          `Position were undefined for commit ${gitGraphDiagramUUTBAWPFParam47.id}`,
        );
      let gitGraphDiagramUUTBAWPFValue189 = gitGraphDiagramUUTBAWPFValue31.has(
        _chunkICPOFSXXB().theme ?? "",
      );
      return {
        x: gitGraphDiagramUUTBAWPFValue188,
        y:
          gitGraphDiagramUUTBAWPFValue42 === "TB" ||
          gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? gitGraphDiagramUUTBAWPFValue186
            : gitGraphDiagramUUTBAWPFValue187 +
              (gitGraphDiagramUUTBAWPFValue189 ? 7 : -2),
        posWithOffset: gitGraphDiagramUUTBAWPFValue186,
      };
    },
    "getCommitPosition",
  ),
  gitGraphDiagramUUTBAWPFValue58 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam32,
      gitGraphDiagramUUTBAWPFParam33,
      gitGraphDiagramUUTBAWPFParam34,
      gitGraphDiagramUUTBAWPFParam35,
    ) => {
      let gitGraphDiagramUUTBAWPFValue148 = gitGraphDiagramUUTBAWPFParam32
          .append("g")
          .attr("class", "commit-bullets"),
        gitGraphDiagramUUTBAWPFValue149 = gitGraphDiagramUUTBAWPFParam32
          .append("g")
          .attr("class", "commit-labels"),
        gitGraphDiagramUUTBAWPFValue150 =
          gitGraphDiagramUUTBAWPFValue42 === "TB" ||
          gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? 30
            : 0,
        gitGraphDiagramUUTBAWPFValue151 = [
          ...gitGraphDiagramUUTBAWPFParam33.keys(),
        ],
        gitGraphDiagramUUTBAWPFValue152 =
          gitGraphDiagramUUTBAWPFParam35.parallelCommits ?? false,
        gitGraphDiagramUUTBAWPFValue153 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam85, gitGraphDiagramUUTBAWPFParam86) => {
            let gitGraphDiagramUUTBAWPFValue250 =
                gitGraphDiagramUUTBAWPFParam33.get(
                  gitGraphDiagramUUTBAWPFParam85,
                )?.seq,
              gitGraphDiagramUUTBAWPFValue251 =
                gitGraphDiagramUUTBAWPFParam33.get(
                  gitGraphDiagramUUTBAWPFParam86,
                )?.seq;
            return gitGraphDiagramUUTBAWPFValue250 !== undefined &&
              gitGraphDiagramUUTBAWPFValue251 !== undefined
              ? gitGraphDiagramUUTBAWPFValue250 -
                  gitGraphDiagramUUTBAWPFValue251
              : 0;
          },
          "sortKeys",
        ),
        gitGraphDiagramUUTBAWPFValue154 = gitGraphDiagramUUTBAWPFValue151.sort(
          gitGraphDiagramUUTBAWPFValue153,
        );
      gitGraphDiagramUUTBAWPFValue42 === "BT" &&
        (gitGraphDiagramUUTBAWPFValue152 &&
          gitGraphDiagramUUTBAWPFValue47(
            gitGraphDiagramUUTBAWPFValue154,
            gitGraphDiagramUUTBAWPFParam33,
            gitGraphDiagramUUTBAWPFValue150,
          ),
        (gitGraphDiagramUUTBAWPFValue154 =
          gitGraphDiagramUUTBAWPFValue154.reverse()));
      gitGraphDiagramUUTBAWPFValue154.forEach((item) => {
        let gitGraphDiagramUUTBAWPFValue176 =
          gitGraphDiagramUUTBAWPFParam33.get(item);
        if (!gitGraphDiagramUUTBAWPFValue176)
          throw Error(`Commit not found for key ${item}`);
        gitGraphDiagramUUTBAWPFValue152 &&
          (gitGraphDiagramUUTBAWPFValue150 = gitGraphDiagramUUTBAWPFValue56(
            gitGraphDiagramUUTBAWPFValue176,
            gitGraphDiagramUUTBAWPFValue42,
            gitGraphDiagramUUTBAWPFValue150,
            gitGraphDiagramUUTBAWPFValue37,
          ));
        let gitGraphDiagramUUTBAWPFValue177 = gitGraphDiagramUUTBAWPFValue57(
          gitGraphDiagramUUTBAWPFValue176,
          gitGraphDiagramUUTBAWPFValue150,
          gitGraphDiagramUUTBAWPFValue152,
        );
        if (gitGraphDiagramUUTBAWPFParam34) {
          let gitGraphDiagramUUTBAWPFValue244 = gitGraphDiagramUUTBAWPFValue55(
              gitGraphDiagramUUTBAWPFValue176,
            ),
            gitGraphDiagramUUTBAWPFValue245 =
              gitGraphDiagramUUTBAWPFValue176.customType ??
              gitGraphDiagramUUTBAWPFValue176.type;
          gitGraphDiagramUUTBAWPFValue52(
            gitGraphDiagramUUTBAWPFValue148,
            gitGraphDiagramUUTBAWPFValue176,
            gitGraphDiagramUUTBAWPFValue177,
            gitGraphDiagramUUTBAWPFValue244,
            gitGraphDiagramUUTBAWPFValue36.get(
              gitGraphDiagramUUTBAWPFValue176.branch,
            )?.index ?? 0,
            gitGraphDiagramUUTBAWPFValue245,
          );
          gitGraphDiagramUUTBAWPFValue53(
            gitGraphDiagramUUTBAWPFValue149,
            gitGraphDiagramUUTBAWPFValue176,
            gitGraphDiagramUUTBAWPFValue177,
            gitGraphDiagramUUTBAWPFValue150,
            gitGraphDiagramUUTBAWPFParam35,
          );
          gitGraphDiagramUUTBAWPFValue54(
            gitGraphDiagramUUTBAWPFValue149,
            gitGraphDiagramUUTBAWPFValue176,
            gitGraphDiagramUUTBAWPFValue177,
            gitGraphDiagramUUTBAWPFValue150,
          );
        }
        gitGraphDiagramUUTBAWPFValue42 === "TB" ||
        gitGraphDiagramUUTBAWPFValue42 === "BT"
          ? gitGraphDiagramUUTBAWPFValue37.set(
              gitGraphDiagramUUTBAWPFValue176.id,
              {
                x: gitGraphDiagramUUTBAWPFValue177.x,
                y: gitGraphDiagramUUTBAWPFValue177.posWithOffset,
              },
            )
          : gitGraphDiagramUUTBAWPFValue37.set(
              gitGraphDiagramUUTBAWPFValue176.id,
              {
                x: gitGraphDiagramUUTBAWPFValue177.posWithOffset,
                y: gitGraphDiagramUUTBAWPFValue177.y,
              },
            );
        gitGraphDiagramUUTBAWPFValue150 =
          gitGraphDiagramUUTBAWPFValue42 === "BT" &&
          gitGraphDiagramUUTBAWPFValue152
            ? gitGraphDiagramUUTBAWPFValue150 + 40
            : gitGraphDiagramUUTBAWPFValue150 + 40 + 10;
        gitGraphDiagramUUTBAWPFValue150 > gitGraphDiagramUUTBAWPFValue41 &&
          (gitGraphDiagramUUTBAWPFValue41 = gitGraphDiagramUUTBAWPFValue150);
      });
    },
    "drawCommits",
  ),
  gitGraphDiagramUUTBAWPFValue59 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam56,
      gitGraphDiagramUUTBAWPFParam57,
      gitGraphDiagramUUTBAWPFParam58,
      gitGraphDiagramUUTBAWPFParam59,
      gitGraphDiagramUUTBAWPFParam60,
    ) => {
      let gitGraphDiagramUUTBAWPFValue203 = (
          gitGraphDiagramUUTBAWPFValue42 === "TB" ||
          gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? gitGraphDiagramUUTBAWPFParam58.x <
              gitGraphDiagramUUTBAWPFParam59.x
            : gitGraphDiagramUUTBAWPFParam58.y <
              gitGraphDiagramUUTBAWPFParam59.y
        )
          ? gitGraphDiagramUUTBAWPFParam57.branch
          : gitGraphDiagramUUTBAWPFParam56.branch,
        gitGraphDiagramUUTBAWPFValue204 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam110) =>
            gitGraphDiagramUUTBAWPFParam110.branch ===
            gitGraphDiagramUUTBAWPFValue203,
          "isOnBranchToGetCurve",
        ),
        gitGraphDiagramUUTBAWPFValue205 = chunkAGHRB4JFN(
          (gitGraphDiagramUUTBAWPFParam100) =>
            gitGraphDiagramUUTBAWPFParam100.seq >
              gitGraphDiagramUUTBAWPFParam56.seq &&
            gitGraphDiagramUUTBAWPFParam100.seq <
              gitGraphDiagramUUTBAWPFParam57.seq,
          "isBetweenCommits",
        );
      return [...gitGraphDiagramUUTBAWPFParam60.values()].some(
        (item) =>
          gitGraphDiagramUUTBAWPFValue205(item) &&
          gitGraphDiagramUUTBAWPFValue204(item),
      );
    },
    "shouldRerouteArrow",
  ),
  gitGraphDiagramUUTBAWPFValue60 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam71,
      gitGraphDiagramUUTBAWPFParam72,
      gitGraphDiagramUUTBAWPFParam73 = 0,
    ) => {
      let gitGraphDiagramUUTBAWPFValue237 =
        gitGraphDiagramUUTBAWPFParam71 +
        Math.abs(
          gitGraphDiagramUUTBAWPFParam71 - gitGraphDiagramUUTBAWPFParam72,
        ) /
          2;
      return gitGraphDiagramUUTBAWPFParam73 > 5
        ? gitGraphDiagramUUTBAWPFValue237
        : gitGraphDiagramUUTBAWPFValue40.every(
              (item) => Math.abs(item - gitGraphDiagramUUTBAWPFValue237) >= 10,
            )
          ? (gitGraphDiagramUUTBAWPFValue40.push(
              gitGraphDiagramUUTBAWPFValue237,
            ),
            gitGraphDiagramUUTBAWPFValue237)
          : gitGraphDiagramUUTBAWPFValue60(
              gitGraphDiagramUUTBAWPFParam71,
              gitGraphDiagramUUTBAWPFParam72 -
                Math.abs(
                  gitGraphDiagramUUTBAWPFParam71 -
                    gitGraphDiagramUUTBAWPFParam72,
                ) /
                  5,
              gitGraphDiagramUUTBAWPFParam73 + 1,
            );
    },
    "findLane",
  ),
  gitGraphDiagramUUTBAWPFValue61 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam1,
      gitGraphDiagramUUTBAWPFParam2,
      gitGraphDiagramUUTBAWPFParam3,
      gitGraphDiagramUUTBAWPFParam4,
    ) => {
      let { theme } = _chunkICPOFSXXB(),
        gitGraphDiagramUUTBAWPFValue74 = gitGraphDiagramUUTBAWPFValue33.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFValue75 = gitGraphDiagramUUTBAWPFValue37.get(
          gitGraphDiagramUUTBAWPFParam2.id,
        ),
        gitGraphDiagramUUTBAWPFValue76 = gitGraphDiagramUUTBAWPFValue37.get(
          gitGraphDiagramUUTBAWPFParam3.id,
        );
      if (
        gitGraphDiagramUUTBAWPFValue75 === undefined ||
        gitGraphDiagramUUTBAWPFValue76 === undefined
      )
        throw Error(
          `Commit positions not found for commits ${gitGraphDiagramUUTBAWPFParam2.id} and ${gitGraphDiagramUUTBAWPFParam3.id}`,
        );
      let gitGraphDiagramUUTBAWPFValue77 = gitGraphDiagramUUTBAWPFValue59(
          gitGraphDiagramUUTBAWPFParam2,
          gitGraphDiagramUUTBAWPFParam3,
          gitGraphDiagramUUTBAWPFValue75,
          gitGraphDiagramUUTBAWPFValue76,
          gitGraphDiagramUUTBAWPFParam4,
        ),
        gitGraphDiagramUUTBAWPFValue78 = "",
        gitGraphDiagramUUTBAWPFValue79 = "",
        gitGraphDiagramUUTBAWPFValue80 = 0,
        gitGraphDiagramUUTBAWPFValue81 = 0,
        gitGraphDiagramUUTBAWPFValue82 = gitGraphDiagramUUTBAWPFValue36.get(
          gitGraphDiagramUUTBAWPFParam3.branch,
        )?.index;
      gitGraphDiagramUUTBAWPFParam3.type ===
        gitGraphDiagramUUTBAWPFValue1.MERGE &&
        gitGraphDiagramUUTBAWPFParam2.id !==
          gitGraphDiagramUUTBAWPFParam3.parents[0] &&
        (gitGraphDiagramUUTBAWPFValue82 = gitGraphDiagramUUTBAWPFValue36.get(
          gitGraphDiagramUUTBAWPFParam2.branch,
        )?.index);
      let gitGraphDiagramUUTBAWPFValue83;
      if (gitGraphDiagramUUTBAWPFValue77) {
        gitGraphDiagramUUTBAWPFValue78 = "A 10 10, 0, 0, 0,";
        gitGraphDiagramUUTBAWPFValue79 = "A 10 10, 0, 0, 1,";
        gitGraphDiagramUUTBAWPFValue80 = 10;
        gitGraphDiagramUUTBAWPFValue81 = 10;
        let gitGraphDiagramUUTBAWPFValue138 =
            gitGraphDiagramUUTBAWPFValue75.y < gitGraphDiagramUUTBAWPFValue76.y
              ? gitGraphDiagramUUTBAWPFValue60(
                  gitGraphDiagramUUTBAWPFValue75.y,
                  gitGraphDiagramUUTBAWPFValue76.y,
                )
              : gitGraphDiagramUUTBAWPFValue60(
                  gitGraphDiagramUUTBAWPFValue76.y,
                  gitGraphDiagramUUTBAWPFValue75.y,
                ),
          gitGraphDiagramUUTBAWPFValue139 =
            gitGraphDiagramUUTBAWPFValue75.x < gitGraphDiagramUUTBAWPFValue76.x
              ? gitGraphDiagramUUTBAWPFValue60(
                  gitGraphDiagramUUTBAWPFValue75.x,
                  gitGraphDiagramUUTBAWPFValue76.x,
                )
              : gitGraphDiagramUUTBAWPFValue60(
                  gitGraphDiagramUUTBAWPFValue76.x,
                  gitGraphDiagramUUTBAWPFValue75.x,
                );
        gitGraphDiagramUUTBAWPFValue42 === "TB"
          ? gitGraphDiagramUUTBAWPFValue75.x < gitGraphDiagramUUTBAWPFValue76.x
            ? (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue139 - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue75.y + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue76.y - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue139 + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`)
            : ((gitGraphDiagramUUTBAWPFValue82 =
                gitGraphDiagramUUTBAWPFValue36.get(
                  gitGraphDiagramUUTBAWPFParam2.branch,
                )?.index),
              (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue139 + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue75.y + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue76.y - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue139 - gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`))
          : gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? gitGraphDiagramUUTBAWPFValue75.x <
              gitGraphDiagramUUTBAWPFValue76.x
              ? (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue139 - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue75.y - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue76.y + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue139 + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`)
              : ((gitGraphDiagramUUTBAWPFValue82 =
                  gitGraphDiagramUUTBAWPFValue36.get(
                    gitGraphDiagramUUTBAWPFParam2.branch,
                  )?.index),
                (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue139 + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue75.y - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue139} ${gitGraphDiagramUUTBAWPFValue76.y + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue139 - gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`))
            : gitGraphDiagramUUTBAWPFValue75.y <
                gitGraphDiagramUUTBAWPFValue76.y
              ? (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue138 - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue138} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue138} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue138 + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`)
              : ((gitGraphDiagramUUTBAWPFValue82 =
                  gitGraphDiagramUUTBAWPFValue36.get(
                    gitGraphDiagramUUTBAWPFParam2.branch,
                  )?.index),
                (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue138 + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue138} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue138} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue138 - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`));
      } else {
        gitGraphDiagramUUTBAWPFValue78 = "A 20 20, 0, 0, 0,";
        gitGraphDiagramUUTBAWPFValue79 = "A 20 20, 0, 0, 1,";
        gitGraphDiagramUUTBAWPFValue80 = 20;
        gitGraphDiagramUUTBAWPFValue81 = 20;
        gitGraphDiagramUUTBAWPFValue42 === "TB"
          ? (gitGraphDiagramUUTBAWPFValue75.x <
              gitGraphDiagramUUTBAWPFValue76.x &&
              (gitGraphDiagramUUTBAWPFValue83 =
                gitGraphDiagramUUTBAWPFParam3.type ===
                  gitGraphDiagramUUTBAWPFValue1.MERGE &&
                gitGraphDiagramUUTBAWPFParam2.id !==
                  gitGraphDiagramUUTBAWPFParam3.parents[0]
                  ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                  : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`),
            gitGraphDiagramUUTBAWPFValue75.x >
              gitGraphDiagramUUTBAWPFValue76.x &&
              ((gitGraphDiagramUUTBAWPFValue78 = "A 20 20, 0, 0, 0,"),
              (gitGraphDiagramUUTBAWPFValue79 = "A 20 20, 0, 0, 1,"),
              (gitGraphDiagramUUTBAWPFValue80 = 20),
              (gitGraphDiagramUUTBAWPFValue81 = 20),
              (gitGraphDiagramUUTBAWPFValue83 =
                gitGraphDiagramUUTBAWPFParam3.type ===
                  gitGraphDiagramUUTBAWPFValue1.MERGE &&
                gitGraphDiagramUUTBAWPFParam2.id !==
                  gitGraphDiagramUUTBAWPFParam3.parents[0]
                  ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue75.x - gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                  : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`)),
            gitGraphDiagramUUTBAWPFValue75.x ===
              gitGraphDiagramUUTBAWPFValue76.x &&
              (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`))
          : gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? (gitGraphDiagramUUTBAWPFValue75.x <
                gitGraphDiagramUUTBAWPFValue76.x &&
                (gitGraphDiagramUUTBAWPFValue83 =
                  gitGraphDiagramUUTBAWPFParam3.type ===
                    gitGraphDiagramUUTBAWPFValue1.MERGE &&
                  gitGraphDiagramUUTBAWPFParam2.id !==
                    gitGraphDiagramUUTBAWPFParam3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                    : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`),
              gitGraphDiagramUUTBAWPFValue75.x >
                gitGraphDiagramUUTBAWPFValue76.x &&
                ((gitGraphDiagramUUTBAWPFValue78 = "A 20 20, 0, 0, 0,"),
                (gitGraphDiagramUUTBAWPFValue79 = "A 20 20, 0, 0, 1,"),
                (gitGraphDiagramUUTBAWPFValue80 = 20),
                (gitGraphDiagramUUTBAWPFValue81 = 20),
                (gitGraphDiagramUUTBAWPFValue83 =
                  gitGraphDiagramUUTBAWPFParam3.type ===
                    gitGraphDiagramUUTBAWPFValue1.MERGE &&
                  gitGraphDiagramUUTBAWPFParam2.id !==
                    gitGraphDiagramUUTBAWPFParam3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue75.x - gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                    : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`)),
              gitGraphDiagramUUTBAWPFValue75.x ===
                gitGraphDiagramUUTBAWPFValue76.x &&
                (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`))
            : (gitGraphDiagramUUTBAWPFValue75.y <
                gitGraphDiagramUUTBAWPFValue76.y &&
                (gitGraphDiagramUUTBAWPFValue83 =
                  gitGraphDiagramUUTBAWPFParam3.type ===
                    gitGraphDiagramUUTBAWPFValue1.MERGE &&
                  gitGraphDiagramUUTBAWPFParam2.id !==
                    gitGraphDiagramUUTBAWPFParam3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y + gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                    : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`),
              gitGraphDiagramUUTBAWPFValue75.y >
                gitGraphDiagramUUTBAWPFValue76.y &&
                (gitGraphDiagramUUTBAWPFValue83 =
                  gitGraphDiagramUUTBAWPFParam3.type ===
                    gitGraphDiagramUUTBAWPFValue1.MERGE &&
                  gitGraphDiagramUUTBAWPFParam2.id !==
                    gitGraphDiagramUUTBAWPFParam3.parents[0]
                    ? `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x - gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue75.y} ${gitGraphDiagramUUTBAWPFValue78} ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue75.y - gitGraphDiagramUUTBAWPFValue81} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`
                    : `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue76.y + gitGraphDiagramUUTBAWPFValue80} ${gitGraphDiagramUUTBAWPFValue79} ${gitGraphDiagramUUTBAWPFValue75.x + gitGraphDiagramUUTBAWPFValue81} ${gitGraphDiagramUUTBAWPFValue76.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`),
              gitGraphDiagramUUTBAWPFValue75.y ===
                gitGraphDiagramUUTBAWPFValue76.y &&
                (gitGraphDiagramUUTBAWPFValue83 = `M ${gitGraphDiagramUUTBAWPFValue75.x} ${gitGraphDiagramUUTBAWPFValue75.y} L ${gitGraphDiagramUUTBAWPFValue76.x} ${gitGraphDiagramUUTBAWPFValue76.y}`));
      }
      if (gitGraphDiagramUUTBAWPFValue83 === undefined)
        throw Error("Line definition not found");
      gitGraphDiagramUUTBAWPFParam1
        .append("path")
        .attr("d", gitGraphDiagramUUTBAWPFValue83)
        .attr(
          "class",
          "arrow arrow" +
            gitGraphDiagramUUTBAWPFValue35(
              gitGraphDiagramUUTBAWPFValue82,
              8,
              gitGraphDiagramUUTBAWPFValue74,
            ),
        );
    },
    "drawArrow",
  ),
  gitGraphDiagramUUTBAWPFValue62 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam63, gitGraphDiagramUUTBAWPFParam64) => {
      let gitGraphDiagramUUTBAWPFValue215 = gitGraphDiagramUUTBAWPFParam63
        .append("g")
        .attr("class", "commit-arrows");
      [...gitGraphDiagramUUTBAWPFParam64.keys()].forEach((item) => {
        let gitGraphDiagramUUTBAWPFValue246 =
          gitGraphDiagramUUTBAWPFParam64.get(item);
        gitGraphDiagramUUTBAWPFValue246.parents &&
          gitGraphDiagramUUTBAWPFValue246.parents.length > 0 &&
          gitGraphDiagramUUTBAWPFValue246.parents.forEach((_item) => {
            gitGraphDiagramUUTBAWPFValue61(
              gitGraphDiagramUUTBAWPFValue215,
              gitGraphDiagramUUTBAWPFParam64.get(_item),
              gitGraphDiagramUUTBAWPFValue246,
              gitGraphDiagramUUTBAWPFParam64,
            );
          });
      });
    },
    "drawArrows",
  ),
  gitGraphDiagramUUTBAWPFValue63 = chunkAGHRB4JFN(
    (
      gitGraphDiagramUUTBAWPFParam8,
      gitGraphDiagramUUTBAWPFParam9,
      gitGraphDiagramUUTBAWPFParam10,
      gitGraphDiagramUUTBAWPFParam11,
    ) => {
      let { look, theme, themeVariables } = _chunkICPOFSXXB(),
        { dropShadow, THEME_COLOR_LIMIT } = themeVariables,
        gitGraphDiagramUUTBAWPFValue103 = gitGraphDiagramUUTBAWPFValue31.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFValue104 = gitGraphDiagramUUTBAWPFValue33.has(
          theme ?? "",
        ),
        gitGraphDiagramUUTBAWPFValue105 =
          gitGraphDiagramUUTBAWPFParam8.append("g");
      gitGraphDiagramUUTBAWPFParam9.forEach((item, index) => {
        let gitGraphDiagramUUTBAWPFValue110 = gitGraphDiagramUUTBAWPFValue35(
            index,
            gitGraphDiagramUUTBAWPFValue103 ? THEME_COLOR_LIMIT : 8,
            gitGraphDiagramUUTBAWPFValue104,
          ),
          gitGraphDiagramUUTBAWPFValue111 = gitGraphDiagramUUTBAWPFValue36.get(
            item.name,
          )?.pos;
        if (gitGraphDiagramUUTBAWPFValue111 === undefined)
          throw Error(`Position not found for branch ${item.name}`);
        let gitGraphDiagramUUTBAWPFValue112 =
            gitGraphDiagramUUTBAWPFValue42 === "TB" ||
            gitGraphDiagramUUTBAWPFValue42 === "BT"
              ? gitGraphDiagramUUTBAWPFValue111
              : gitGraphDiagramUUTBAWPFValue103
                ? gitGraphDiagramUUTBAWPFValue111 + 6 + 1
                : gitGraphDiagramUUTBAWPFValue111 - 2,
          gitGraphDiagramUUTBAWPFValue113 =
            gitGraphDiagramUUTBAWPFValue105.append("line");
        gitGraphDiagramUUTBAWPFValue113.attr("x1", 0);
        gitGraphDiagramUUTBAWPFValue113.attr(
          "y1",
          gitGraphDiagramUUTBAWPFValue112,
        );
        gitGraphDiagramUUTBAWPFValue113.attr(
          "x2",
          gitGraphDiagramUUTBAWPFValue41,
        );
        gitGraphDiagramUUTBAWPFValue113.attr(
          "y2",
          gitGraphDiagramUUTBAWPFValue112,
        );
        gitGraphDiagramUUTBAWPFValue113.attr(
          "class",
          "branch branch" + gitGraphDiagramUUTBAWPFValue110,
        );
        gitGraphDiagramUUTBAWPFValue42 === "TB"
          ? (gitGraphDiagramUUTBAWPFValue113.attr("y1", 30),
            gitGraphDiagramUUTBAWPFValue113.attr(
              "x1",
              gitGraphDiagramUUTBAWPFValue111,
            ),
            gitGraphDiagramUUTBAWPFValue113.attr(
              "y2",
              gitGraphDiagramUUTBAWPFValue41,
            ),
            gitGraphDiagramUUTBAWPFValue113.attr(
              "x2",
              gitGraphDiagramUUTBAWPFValue111,
            ))
          : gitGraphDiagramUUTBAWPFValue42 === "BT" &&
            (gitGraphDiagramUUTBAWPFValue113.attr(
              "y1",
              gitGraphDiagramUUTBAWPFValue41,
            ),
            gitGraphDiagramUUTBAWPFValue113.attr(
              "x1",
              gitGraphDiagramUUTBAWPFValue111,
            ),
            gitGraphDiagramUUTBAWPFValue113.attr("y2", 30),
            gitGraphDiagramUUTBAWPFValue113.attr(
              "x2",
              gitGraphDiagramUUTBAWPFValue111,
            ));
        gitGraphDiagramUUTBAWPFValue40.push(gitGraphDiagramUUTBAWPFValue112);
        let gitGraphDiagramUUTBAWPFValue114 = item.name,
          gitGraphDiagramUUTBAWPFValue115 = gitGraphDiagramUUTBAWPFValue44(
            gitGraphDiagramUUTBAWPFValue114,
          ),
          gitGraphDiagramUUTBAWPFValue116 =
            gitGraphDiagramUUTBAWPFValue105.insert("rect"),
          gitGraphDiagramUUTBAWPFValue117 = gitGraphDiagramUUTBAWPFValue105
            .insert("g")
            .attr("class", "branchLabel")
            .insert("g")
            .attr(
              "class",
              "label branch-label" + gitGraphDiagramUUTBAWPFValue110,
            );
        gitGraphDiagramUUTBAWPFValue117
          .node()
          .appendChild(gitGraphDiagramUUTBAWPFValue115);
        let gitGraphDiagramUUTBAWPFValue118 =
            gitGraphDiagramUUTBAWPFValue115.getBBox(),
          gitGraphDiagramUUTBAWPFValue119 = gitGraphDiagramUUTBAWPFValue103
            ? 0
            : 4,
          gitGraphDiagramUUTBAWPFValue120 = gitGraphDiagramUUTBAWPFValue103
            ? 16
            : 0,
          gitGraphDiagramUUTBAWPFValue121 = gitGraphDiagramUUTBAWPFValue103
            ? 12
            : 0;
        look === "neo" &&
          gitGraphDiagramUUTBAWPFValue116.attr("data-look", "neo");
        gitGraphDiagramUUTBAWPFValue116
          .attr(
            "class",
            "branchLabelBkg label" + gitGraphDiagramUUTBAWPFValue110,
          )
          .attr(
            "style",
            look === "neo"
              ? `filter:${gitGraphDiagramUUTBAWPFValue103 ? `url(#${gitGraphDiagramUUTBAWPFParam11}-drop-shadow)` : dropShadow}`
              : "",
          )
          .attr("rx", gitGraphDiagramUUTBAWPFValue119)
          .attr("ry", gitGraphDiagramUUTBAWPFValue119)
          .attr(
            "x",
            -gitGraphDiagramUUTBAWPFValue118.width -
              4 -
              (gitGraphDiagramUUTBAWPFParam10.rotateCommitLabel === true
                ? 30
                : 0),
          )
          .attr("y", -gitGraphDiagramUUTBAWPFValue118.height / 2 + 10)
          .attr(
            "width",
            gitGraphDiagramUUTBAWPFValue118.width +
              18 +
              gitGraphDiagramUUTBAWPFValue120,
          )
          .attr(
            "height",
            gitGraphDiagramUUTBAWPFValue118.height +
              4 +
              gitGraphDiagramUUTBAWPFValue121,
          );
        gitGraphDiagramUUTBAWPFValue117.attr(
          "transform",
          "translate(" +
            (-gitGraphDiagramUUTBAWPFValue118.width -
              14 -
              (gitGraphDiagramUUTBAWPFParam10.rotateCommitLabel === true
                ? 30
                : 0) +
              gitGraphDiagramUUTBAWPFValue120 / 2) +
            ", " +
            (gitGraphDiagramUUTBAWPFValue112 -
              gitGraphDiagramUUTBAWPFValue118.height / 2 -
              2) +
            ")",
        );
        gitGraphDiagramUUTBAWPFValue42 === "TB"
          ? (gitGraphDiagramUUTBAWPFValue116
              .attr(
                "x",
                gitGraphDiagramUUTBAWPFValue111 -
                  gitGraphDiagramUUTBAWPFValue118.width / 2 -
                  10,
              )
              .attr("y", 0),
            gitGraphDiagramUUTBAWPFValue117.attr(
              "transform",
              "translate(" +
                (gitGraphDiagramUUTBAWPFValue111 -
                  gitGraphDiagramUUTBAWPFValue118.width / 2 -
                  5) +
                ", 0)",
            ),
            gitGraphDiagramUUTBAWPFValue103 &&
              (gitGraphDiagramUUTBAWPFValue116.attr(
                "transform",
                `translate(${-gitGraphDiagramUUTBAWPFValue120 / 2 - 3}, ${-gitGraphDiagramUUTBAWPFValue121 - 10})`,
              ),
              gitGraphDiagramUUTBAWPFValue117.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramUUTBAWPFValue111 -
                    gitGraphDiagramUUTBAWPFValue118.width / 2 -
                    5) +
                  ", " +
                  (-gitGraphDiagramUUTBAWPFValue121 * 2 + 7) +
                  ")",
              )))
          : gitGraphDiagramUUTBAWPFValue42 === "BT"
            ? (gitGraphDiagramUUTBAWPFValue116
                .attr(
                  "x",
                  gitGraphDiagramUUTBAWPFValue111 -
                    gitGraphDiagramUUTBAWPFValue118.width / 2 -
                    10,
                )
                .attr("y", gitGraphDiagramUUTBAWPFValue41),
              gitGraphDiagramUUTBAWPFValue117.attr(
                "transform",
                "translate(" +
                  (gitGraphDiagramUUTBAWPFValue111 -
                    gitGraphDiagramUUTBAWPFValue118.width / 2 -
                    5) +
                  ", " +
                  gitGraphDiagramUUTBAWPFValue41 +
                  ")",
              ),
              gitGraphDiagramUUTBAWPFValue103 &&
                (gitGraphDiagramUUTBAWPFValue116.attr(
                  "transform",
                  `translate(${-gitGraphDiagramUUTBAWPFValue120 / 2 - 3}, ${gitGraphDiagramUUTBAWPFValue121 + 10})`,
                ),
                gitGraphDiagramUUTBAWPFValue117.attr(
                  "transform",
                  "translate(" +
                    (gitGraphDiagramUUTBAWPFValue111 -
                      gitGraphDiagramUUTBAWPFValue118.width / 2 -
                      5) +
                    ", " +
                    (gitGraphDiagramUUTBAWPFValue41 +
                      gitGraphDiagramUUTBAWPFValue121 * 2 +
                      4) +
                    ")",
                )))
            : gitGraphDiagramUUTBAWPFValue116.attr(
                "transform",
                "translate(-19, " +
                  (gitGraphDiagramUUTBAWPFValue112 -
                    12 -
                    gitGraphDiagramUUTBAWPFValue121 / 2) +
                  ")",
              );
      });
    },
    "drawBranches",
  ),
  gitGraphDiagramUUTBAWPFValue64 = chunkAGHRB4JFN(function (
    gitGraphDiagramUUTBAWPFParam76,
    gitGraphDiagramUUTBAWPFParam77,
    gitGraphDiagramUUTBAWPFParam78,
    gitGraphDiagramUUTBAWPFParam79,
    gitGraphDiagramUUTBAWPFParam80,
  ) {
    return (
      gitGraphDiagramUUTBAWPFValue36.set(gitGraphDiagramUUTBAWPFParam76, {
        pos: gitGraphDiagramUUTBAWPFParam77,
        index: gitGraphDiagramUUTBAWPFParam78,
      }),
      (gitGraphDiagramUUTBAWPFParam77 +=
        50 +
        (gitGraphDiagramUUTBAWPFParam80 ? 40 : 0) +
        (gitGraphDiagramUUTBAWPFValue42 === "TB" ||
        gitGraphDiagramUUTBAWPFValue42 === "BT"
          ? gitGraphDiagramUUTBAWPFParam79.width / 2
          : 0)),
      gitGraphDiagramUUTBAWPFParam77
    );
  }, "setBranchPosition"),
  gitGraphDiagramUUTBAWPFValue65 = {
    draw: chunkAGHRB4JFN(function (
      gitGraphDiagramUUTBAWPFParam19,
      gitGraphDiagramUUTBAWPFParam20,
      gitGraphDiagramUUTBAWPFParam21,
      gitGraphDiagramUUTBAWPFParam22,
    ) {
      gitGraphDiagramUUTBAWPFValue43();
      chunkAGHRB4JFR.debug(
        "in gitgraph renderer",
        gitGraphDiagramUUTBAWPFParam19 + "\n",
        "id:",
        gitGraphDiagramUUTBAWPFParam20,
        gitGraphDiagramUUTBAWPFParam21,
      );
      let gitGraphDiagramUUTBAWPFValue122 = gitGraphDiagramUUTBAWPFParam22.db;
      if (!gitGraphDiagramUUTBAWPFValue122.getConfig) {
        chunkAGHRB4JFR.error("getConfig method is not available on db");
        return;
      }
      let gitGraphDiagramUUTBAWPFValue123 =
          gitGraphDiagramUUTBAWPFValue122.getConfig(),
        gitGraphDiagramUUTBAWPFValue124 =
          gitGraphDiagramUUTBAWPFValue123.rotateCommitLabel ?? false;
      gitGraphDiagramUUTBAWPFValue39 =
        gitGraphDiagramUUTBAWPFValue122.getCommits();
      let gitGraphDiagramUUTBAWPFValue125 =
        gitGraphDiagramUUTBAWPFValue122.getBranchesAsObjArray();
      gitGraphDiagramUUTBAWPFValue42 =
        gitGraphDiagramUUTBAWPFValue122.getDirection();
      let gitGraphDiagramUUTBAWPFValue126 = Src(
          `[id="${gitGraphDiagramUUTBAWPFParam20}"]`,
        ),
        { look, theme, themeVariables } = _chunkICPOFSXXB(),
        {
          useGradient: gitGraphDiagramUUTBAWPFValue127,
          gradientStart,
          gradientStop,
          filterColor,
        } = themeVariables;
      if (gitGraphDiagramUUTBAWPFValue127) {
        let gitGraphDiagramUUTBAWPFValue175 = gitGraphDiagramUUTBAWPFValue126
          .append("defs")
          .append("linearGradient")
          .attr("id", gitGraphDiagramUUTBAWPFParam20 + "-gradient")
          .attr("gradientUnits", "objectBoundingBox")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "0%");
        gitGraphDiagramUUTBAWPFValue175
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", gradientStart)
          .attr("stop-opacity", 1);
        gitGraphDiagramUUTBAWPFValue175
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", gradientStop)
          .attr("stop-opacity", 1);
      }
      look === "neo" &&
        gitGraphDiagramUUTBAWPFValue31.has(theme ?? "") &&
        gitGraphDiagramUUTBAWPFValue126
          .append("defs")
          .append("filter")
          .attr("id", gitGraphDiagramUUTBAWPFParam20 + "-drop-shadow")
          .attr("height", "130%")
          .attr("width", "130%")
          .append("feDropShadow")
          .attr("dx", "4")
          .attr("dy", "4")
          .attr("stdDeviation", 0)
          .attr("flood-opacity", "0.06")
          .attr("flood-color", filterColor);
      let gitGraphDiagramUUTBAWPFValue128 = 0;
      gitGraphDiagramUUTBAWPFValue125.forEach((item, index) => {
        let gitGraphDiagramUUTBAWPFValue193 = gitGraphDiagramUUTBAWPFValue44(
            item.name,
          ),
          gitGraphDiagramUUTBAWPFValue194 =
            gitGraphDiagramUUTBAWPFValue126.append("g"),
          gitGraphDiagramUUTBAWPFValue195 = gitGraphDiagramUUTBAWPFValue194
            .insert("g")
            .attr("class", "branchLabel"),
          gitGraphDiagramUUTBAWPFValue196 = gitGraphDiagramUUTBAWPFValue195
            .insert("g")
            .attr("class", "label branch-label");
        gitGraphDiagramUUTBAWPFValue196
          .node()
          ?.appendChild(gitGraphDiagramUUTBAWPFValue193);
        let gitGraphDiagramUUTBAWPFValue197 =
          gitGraphDiagramUUTBAWPFValue193.getBBox();
        gitGraphDiagramUUTBAWPFValue128 = gitGraphDiagramUUTBAWPFValue64(
          item.name,
          gitGraphDiagramUUTBAWPFValue128,
          index,
          gitGraphDiagramUUTBAWPFValue197,
          gitGraphDiagramUUTBAWPFValue124,
        );
        gitGraphDiagramUUTBAWPFValue196.remove();
        gitGraphDiagramUUTBAWPFValue195.remove();
        gitGraphDiagramUUTBAWPFValue194.remove();
      });
      gitGraphDiagramUUTBAWPFValue58(
        gitGraphDiagramUUTBAWPFValue126,
        gitGraphDiagramUUTBAWPFValue39,
        false,
        gitGraphDiagramUUTBAWPFValue123,
      );
      gitGraphDiagramUUTBAWPFValue123.showBranches &&
        gitGraphDiagramUUTBAWPFValue63(
          gitGraphDiagramUUTBAWPFValue126,
          gitGraphDiagramUUTBAWPFValue125,
          gitGraphDiagramUUTBAWPFValue123,
          gitGraphDiagramUUTBAWPFParam20,
        );
      gitGraphDiagramUUTBAWPFValue62(
        gitGraphDiagramUUTBAWPFValue126,
        gitGraphDiagramUUTBAWPFValue39,
      );
      gitGraphDiagramUUTBAWPFValue58(
        gitGraphDiagramUUTBAWPFValue126,
        gitGraphDiagramUUTBAWPFValue39,
        true,
        gitGraphDiagramUUTBAWPFValue123,
      );
      chunk5PVQY5BWC.insertTitle(
        gitGraphDiagramUUTBAWPFValue126,
        "gitTitleText",
        gitGraphDiagramUUTBAWPFValue123.titleTopMargin ?? 0,
        gitGraphDiagramUUTBAWPFValue122.getDiagramTitle(),
      );
      chunkICPOFSXXQ(
        undefined,
        gitGraphDiagramUUTBAWPFValue126,
        gitGraphDiagramUUTBAWPFValue123.diagramPadding,
        gitGraphDiagramUUTBAWPFValue123.useMaxWidth,
      );
    }, "draw"),
  },
  gitGraphDiagramUUTBAWPFValue67 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
  ]),
  $ = new Set(["redux-color", "redux-dark-color"]),
  gitGraphDiagramUUTBAWPFValue68 = new Set(["neo", "neo-dark"]),
  gitGraphDiagramUUTBAWPFValue69 = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark",
  ]),
  gitGraphDiagramUUTBAWPFValue70 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
    "neo",
    "neo-dark",
  ]),
  gitGraphDiagramUUTBAWPFValue71 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam61) => {
      let { svgId } = gitGraphDiagramUUTBAWPFParam61,
        gitGraphDiagramUUTBAWPFValue206 = "";
      if (gitGraphDiagramUUTBAWPFParam61.useGradient && svgId)
        for (
          let gitGraphDiagramUUTBAWPFValue221 = 0;
          gitGraphDiagramUUTBAWPFValue221 <
          gitGraphDiagramUUTBAWPFParam61.THEME_COLOR_LIMIT;
          gitGraphDiagramUUTBAWPFValue221++
        )
          gitGraphDiagramUUTBAWPFValue206 += `
      .label${gitGraphDiagramUUTBAWPFValue221}  { fill: ${gitGraphDiagramUUTBAWPFParam61.mainBkg}; stroke: url(${svgId}-gradient); stroke-width: ${gitGraphDiagramUUTBAWPFParam61.strokeWidth};}
             `;
      return gitGraphDiagramUUTBAWPFValue206;
    },
    "genGitGraphGradient",
  ),
  gitGraphDiagramUUTBAWPFValue72 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam5) => {
      let { theme, themeVariables } = _chunkICPOFSXXY(),
        { borderColorArray } = themeVariables,
        gitGraphDiagramUUTBAWPFValue84 =
          gitGraphDiagramUUTBAWPFValue67.has(theme);
      if (gitGraphDiagramUUTBAWPFValue68.has(theme)) {
        let gitGraphDiagramUUTBAWPFValue146 = "";
        for (
          let gitGraphDiagramUUTBAWPFValue147 = 0;
          gitGraphDiagramUUTBAWPFValue147 <
          gitGraphDiagramUUTBAWPFParam5.THEME_COLOR_LIMIT;
          gitGraphDiagramUUTBAWPFValue147++
        )
          if (gitGraphDiagramUUTBAWPFValue147 === 0)
            gitGraphDiagramUUTBAWPFValue146 += `
        .branch-label${gitGraphDiagramUUTBAWPFValue147} { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder};}
        .commit${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder};   }
        .commit-highlight${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .arrow${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-cherry-pick${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        ${gitGraphDiagramUUTBAWPFValue71(gitGraphDiagramUUTBAWPFParam5)}`;
          else {
            let gitGraphDiagramUUTBAWPFValue185 =
              gitGraphDiagramUUTBAWPFValue147 % 8;
            gitGraphDiagramUUTBAWPFValue146 += `
        .branch-label${gitGraphDiagramUUTBAWPFValue147} { fill: ${gitGraphDiagramUUTBAWPFParam5["gitBranchLabel" + gitGraphDiagramUUTBAWPFValue185]}; }
        .commit${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5["git" + gitGraphDiagramUUTBAWPFValue185]}; fill: ${gitGraphDiagramUUTBAWPFParam5["git" + gitGraphDiagramUUTBAWPFValue185]}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5["gitInv" + gitGraphDiagramUUTBAWPFValue185]}; fill: ${gitGraphDiagramUUTBAWPFParam5["gitInv" + gitGraphDiagramUUTBAWPFValue185]}; }
        .arrow${gitGraphDiagramUUTBAWPFValue147} { stroke: ${gitGraphDiagramUUTBAWPFParam5["git" + gitGraphDiagramUUTBAWPFValue185]}; }
        `;
          }
        return gitGraphDiagramUUTBAWPFValue146;
      } else if ($.has(theme)) {
        let gitGraphDiagramUUTBAWPFValue136 = "";
        for (
          let gitGraphDiagramUUTBAWPFValue137 = 0;
          gitGraphDiagramUUTBAWPFValue137 <
          gitGraphDiagramUUTBAWPFParam5.THEME_COLOR_LIMIT;
          gitGraphDiagramUUTBAWPFValue137++
        )
          if (gitGraphDiagramUUTBAWPFValue137 === 0)
            gitGraphDiagramUUTBAWPFValue136 += `
        .branch-label${gitGraphDiagramUUTBAWPFValue137} { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; ${gitGraphDiagramUUTBAWPFValue84 ? `font-weight:${gitGraphDiagramUUTBAWPFParam5.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFValue137} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFValue137} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFParam5.mainBkg}; }
        .label${gitGraphDiagramUUTBAWPFValue137}  { fill: ${gitGraphDiagramUUTBAWPFParam5.mainBkg}; stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; stroke-width: ${gitGraphDiagramUUTBAWPFParam5.strokeWidth}; ${gitGraphDiagramUUTBAWPFValue84 ? `font-weight:${gitGraphDiagramUUTBAWPFParam5.noteFontWeight}` : ""} }
        .arrow${gitGraphDiagramUUTBAWPFValue137} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        `;
          else {
            let gitGraphDiagramUUTBAWPFValue169 =
              gitGraphDiagramUUTBAWPFValue137 % borderColorArray.length;
            gitGraphDiagramUUTBAWPFValue136 += `
        .branch-label${gitGraphDiagramUUTBAWPFValue137} { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; ${gitGraphDiagramUUTBAWPFValue84 ? `font-weight:${gitGraphDiagramUUTBAWPFParam5.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFValue137} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; fill: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; }
        .commit-highlight${gitGraphDiagramUUTBAWPFValue137} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; fill: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; }
        .label${gitGraphDiagramUUTBAWPFValue137}  { fill: ${gitGraphDiagramUUTBAWPFValue69.has(theme) ? gitGraphDiagramUUTBAWPFParam5.mainBkg : borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]};  stroke-width: ${gitGraphDiagramUUTBAWPFParam5.strokeWidth}; }
        .arrow${gitGraphDiagramUUTBAWPFValue137} { stroke: ${borderColorArray[gitGraphDiagramUUTBAWPFValue169]}; }
        `;
          }
        return gitGraphDiagramUUTBAWPFValue136;
      } else {
        let gitGraphDiagramUUTBAWPFValue161 = "";
        for (
          let gitGraphDiagramUUTBAWPFValue162 = 0;
          gitGraphDiagramUUTBAWPFValue162 <
          gitGraphDiagramUUTBAWPFParam5.THEME_COLOR_LIMIT;
          gitGraphDiagramUUTBAWPFValue162++
        )
          gitGraphDiagramUUTBAWPFValue161 += `
        .branch-label${gitGraphDiagramUUTBAWPFValue162} { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; ${gitGraphDiagramUUTBAWPFValue84 ? `font-weight:${gitGraphDiagramUUTBAWPFParam5.noteFontWeight}` : ""} }
        .commit${gitGraphDiagramUUTBAWPFValue162} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder};   }
        .commit-highlight${gitGraphDiagramUUTBAWPFValue162} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .label${gitGraphDiagramUUTBAWPFValue162}  { fill: ${gitGraphDiagramUUTBAWPFParam5.mainBkg}; stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; stroke-width: ${gitGraphDiagramUUTBAWPFParam5.strokeWidth}; ${gitGraphDiagramUUTBAWPFValue84 ? `font-weight:${gitGraphDiagramUUTBAWPFParam5.noteFontWeight}` : ""}}
        .arrow${gitGraphDiagramUUTBAWPFValue162} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-bullets { fill: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        .commit-cherry-pick${gitGraphDiagramUUTBAWPFValue162} { stroke: ${gitGraphDiagramUUTBAWPFParam5.nodeBorder}; }
        `;
        return gitGraphDiagramUUTBAWPFValue161;
      }
    },
    "genColor",
  ),
  gitGraphDiagramUUTBAWPFValue73 = chunkAGHRB4JFN(
    (gitGraphDiagramUUTBAWPFParam40) =>
      `${Array.from(
        {
          length: gitGraphDiagramUUTBAWPFParam40.THEME_COLOR_LIMIT,
        },
        (gitGraphDiagramUUTBAWPFParam117, gitGraphDiagramUUTBAWPFParam118) =>
          gitGraphDiagramUUTBAWPFParam118,
      )
        .map((item) => {
          let gitGraphDiagramUUTBAWPFValue179 = item % 8;
          return `
        .branch-label${item} { fill: ${gitGraphDiagramUUTBAWPFParam40["gitBranchLabel" + gitGraphDiagramUUTBAWPFValue179]}; }
        .commit${item} { stroke: ${gitGraphDiagramUUTBAWPFParam40["git" + gitGraphDiagramUUTBAWPFValue179]}; fill: ${gitGraphDiagramUUTBAWPFParam40["git" + gitGraphDiagramUUTBAWPFValue179]}; }
        .commit-highlight${item} { stroke: ${gitGraphDiagramUUTBAWPFParam40["gitInv" + gitGraphDiagramUUTBAWPFValue179]}; fill: ${gitGraphDiagramUUTBAWPFParam40["gitInv" + gitGraphDiagramUUTBAWPFValue179]}; }
        .label${item}  { fill: ${gitGraphDiagramUUTBAWPFParam40["git" + gitGraphDiagramUUTBAWPFValue179]}; }
        .arrow${item} { stroke: ${gitGraphDiagramUUTBAWPFParam40["git" + gitGraphDiagramUUTBAWPFValue179]}; }
        `;
        })
        .join("\n")}`,
    "normalTheme",
  );
export const gitGraphDiagramUUTBAWPF = {
  parser: be,
  db: gitGraphDiagramUUTBAWPFValue19,
  renderer: gitGraphDiagramUUTBAWPFValue65,
  styles: chunkAGHRB4JFN((gitGraphDiagramUUTBAWPFParam12) => {
    let { theme } = _chunkICPOFSXXY(),
      gitGraphDiagramUUTBAWPFValue106 =
        gitGraphDiagramUUTBAWPFValue70.has(theme);
    return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFValue72(gitGraphDiagramUUTBAWPFParam12) : gitGraphDiagramUUTBAWPFValue73(gitGraphDiagramUUTBAWPFParam12)}

  .branch {
    stroke-width: ${gitGraphDiagramUUTBAWPFParam12.strokeWidth};
    stroke: ${gitGraphDiagramUUTBAWPFParam12.commitLineColor ?? gitGraphDiagramUUTBAWPFParam12.lineColor};
    stroke-dasharray:  ${gitGraphDiagramUUTBAWPFValue106 ? "4 2" : "2"};
  }
  .commit-label { font-size: ${gitGraphDiagramUUTBAWPFParam12.commitLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.nodeBorder : gitGraphDiagramUUTBAWPFParam12.commitLabelColor}; ${gitGraphDiagramUUTBAWPFValue106 ? `font-weight:${gitGraphDiagramUUTBAWPFParam12.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${gitGraphDiagramUUTBAWPFParam12.commitLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFValue106 ? "transparent" : gitGraphDiagramUUTBAWPFParam12.commitLabelBackground}; opacity: ${gitGraphDiagramUUTBAWPFValue106 ? "" : 0.5};  }
  .tag-label { font-size: ${gitGraphDiagramUUTBAWPFParam12.tagLabelFontSize}; fill: ${gitGraphDiagramUUTBAWPFParam12.tagLabelColor};}
  .tag-label-bkg { fill: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.tagLabelBackground}; stroke: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.nodeBorder : gitGraphDiagramUUTBAWPFParam12.tagLabelBorder}; ${gitGraphDiagramUUTBAWPFValue106 ? `filter:${gitGraphDiagramUUTBAWPFParam12.dropShadow}` : ""}  }
  .tag-hole { fill: ${gitGraphDiagramUUTBAWPFParam12.textColor}; }

  .commit-merge {
    stroke: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
  }
  .commit-reverse {
    stroke: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
    stroke-width: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
    fill: ${gitGraphDiagramUUTBAWPFValue106 ? gitGraphDiagramUUTBAWPFParam12.mainBkg : gitGraphDiagramUUTBAWPFParam12.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${gitGraphDiagramUUTBAWPFValue67.has(theme) ? gitGraphDiagramUUTBAWPFParam12.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${gitGraphDiagramUUTBAWPFParam12.textColor};
  }
`;
  }, "getStyles"),
};
