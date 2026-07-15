// Restored from ref/webview/assets/store-489E8Cj_.js
// Store chunk restored from the Codex webview bundle.
function createChildBookkeeping() {
  return {
    childIdByNameId: new Map(),
    childIds: [],
    childPositionById: new Map(),
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function createEmptyChildBookkeeping() {
  return {
    childIdByNameId: null,
    childIds: [],
    childPositionById: null,
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function ensureChildIdByNameId(nodesById, node) {
  if (node.childIdByNameId != null) return node.childIdByNameId;
  let childIdByNameId = new Map();
  for (let childId of node.childIds) {
    let childNode = nodesById[childId];
    childNode != null && childIdByNameId.set(childNode.nameId, childId);
  }
  return ((node.childIdByNameId = childIdByNameId), childIdByNameId);
}
function ensureChildPositionById(node) {
  if (node.childPositionById != null) return node.childPositionById;
  let childPositionById = new Map();
  for (let index = 0; index < node.childIds.length; index++) {
    let childId = node.childIds[index];
    childId != null && childPositionById.set(childId, index);
  }
  return ((node.childPositionById = childPositionById), childPositionById);
}
function appendChild(node, childId) {
  node.childPositionById != null &&
    node.childPositionById.set(childId, node.childIds.length);
  node.childIds.push(childId);
}
function reindexChildPositions(node, startIndex) {
  if (node.childPositionById != null)
    for (let index = startIndex; index < node.childIds.length; index++) {
      let childId = node.childIds[index];
      childId != null && node.childPositionById.set(childId, index);
    }
}
function recomputeChildSubtreeCounts(nodesById, node) {
  let totalSubtreeNodeCount = 0,
    totalVisibleSubtreeCount = 0;
  for (let childId of node.childIds) {
    let childNode = nodesById[childId];
    childNode != null &&
      ((totalSubtreeNodeCount += childNode.subtreeNodeCount),
      (totalVisibleSubtreeCount += childNode.visibleSubtreeCount));
  }
  node.totalChildSubtreeNodeCount = totalSubtreeNodeCount;
  node.totalChildVisibleSubtreeCount = totalVisibleSubtreeCount;
  rebuildChildVisibleChunkSums(nodesById, node);
}
function applyChildSubtreeCountDelta(
  node,
  childId,
  subtreeNodeCountDelta,
  visibleSubtreeCountDelta,
) {
  if (
    ((node.totalChildSubtreeNodeCount += subtreeNodeCountDelta),
    (node.totalChildVisibleSubtreeCount += visibleSubtreeCountDelta),
    node.childVisibleChunkSums == null || visibleSubtreeCountDelta === 0)
  )
    return;
  let childIndex = ensureChildPositionById(node).get(childId);
  if (childIndex === undefined) return;
  let chunkIndex = childIndex >> 5;
  node.childVisibleChunkSums[chunkIndex] += visibleSubtreeCountDelta;
}
function findChildByVisibleIndex(nodesById, node, visibleIndex) {
  let chunkSums = node.childVisibleChunkSums;
  if (chunkSums != null) {
    let _remainingVisible = visibleIndex,
      chunkChildBase = 0;
    for (let chunkSum of chunkSums) {
      if (_remainingVisible < chunkSum) {
        let chunkResult = findChildInChunk(
          nodesById,
          node,
          chunkChildBase,
          _remainingVisible,
        );
        return {
          ...chunkResult,
          childVisibleIndex: visibleIndex - chunkResult.localVisibleIndex,
        };
      }
      _remainingVisible -= chunkSum;
      chunkChildBase += 32;
    }
    throw Error(`Visible child index ${String(visibleIndex)} is out of range`);
  }
  let remainingVisible = visibleIndex;
  for (let childIndex = 0; childIndex < node.childIds.length; childIndex++) {
    let childId = node.childIds[childIndex];
    if (childId == null) continue;
    let childNode = nodesById[childId];
    if (childNode != null) {
      if (remainingVisible < childNode.visibleSubtreeCount)
        return {
          childIndex: childIndex,
          childVisibleIndex: visibleIndex - remainingVisible,
          localVisibleIndex: remainingVisible,
        };
      remainingVisible -= childNode.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(visibleIndex)} is out of range`);
}
function sumVisibleBeforeChildIndex(nodesById, node, childIndex) {
  let visibleCount = 0,
    chunkSums = node.childVisibleChunkSums,
    scannedChildCount = 0;
  if (chunkSums != null) {
    let fullChunkCount = childIndex >> 5;
    for (let chunkIndex = 0; chunkIndex < fullChunkCount; chunkIndex += 1)
      visibleCount += chunkSums[chunkIndex] ?? 0;
    scannedChildCount = fullChunkCount << 5;
  }
  for (let index = scannedChildCount; index < childIndex; index += 1) {
    let childId = node.childIds[index];
    if (childId == null) continue;
    let childNode = nodesById[childId];
    childNode != null && (visibleCount += childNode.visibleSubtreeCount);
  }
  return visibleCount;
}
function rebuildChildVisibleChunkSums(nodesById, node) {
  if (node.childIds.length < 128) {
    node.childVisibleChunkSums = null;
    return;
  }
  let chunkCount = Math.ceil(node.childIds.length / 32),
    chunkSums = new Int32Array(chunkCount);
  for (let index = 0; index < node.childIds.length; index++) {
    let childId = node.childIds[index];
    if (childId == null) continue;
    let childNode = nodesById[childId];
    childNode != null &&
      (chunkSums[index >> 5] += childNode.visibleSubtreeCount);
  }
  node.childVisibleChunkSums = chunkSums;
}
function findChildInChunk(nodesById, node, chunkStart, visibleIndex) {
  let chunkEnd = Math.min(node.childIds.length, chunkStart + 32),
    remainingVisible = visibleIndex;
  for (let childIndex = chunkStart; childIndex < chunkEnd; childIndex++) {
    let childId = node.childIds[childIndex];
    if (childId == null) continue;
    let childNode = nodesById[childId];
    if (childNode != null) {
      if (remainingVisible < childNode.visibleSubtreeCount)
        return {
          childIndex: childIndex,
          localVisibleIndex: remainingVisible,
        };
      remainingVisible -= childNode.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(visibleIndex)} is out of range`);
}
function packDepthAndFlags(depth, flags, isDir = 0) {
  return (depth << 4) | (isDir << 3) | flags;
}
function getDepth(node) {
  return node.depthAndFlags >>> 4;
}
function getIsDirBit(node) {
  return (node.depthAndFlags & 8) >> 3;
}
function isDirectory(node) {
  return (node.depthAndFlags & 8) !== 0;
}
function getFlags(node) {
  return node.depthAndFlags & 7;
}
function hasFlag(node, flagMask) {
  return (getFlags(node) & flagMask) !== 0;
}
function setFlags(node, flags) {
  node.depthAndFlags |= flags;
}
function setDepth(node, depth) {
  node.depthAndFlags = packDepthAndFlags(
    depth,
    getFlags(node),
    getIsDirBit(node),
  );
}
var instrumentationSymbol = Symbol("benchmarkInstrumentation");
function attachInstrumentation(target, instrumentation) {
  return (
    instrumentation == null ||
      Object.defineProperty(target, instrumentationSymbol, {
        configurable: true,
        enumerable: false,
        value: instrumentation,
        writable: false,
      }),
    target
  );
}
function getInstrumentation(target) {
  return target == null ? null : (target[instrumentationSymbol] ?? null);
}
function measurePhase(instrumentation, label, fn) {
  return instrumentation == null
    ? fn()
    : instrumentation.measurePhase(label, fn);
}
function setCounter(instrumentation, counterName, value) {
  !Number.isFinite(value) ||
    instrumentation == null ||
    instrumentation.setCounter(counterName, value);
}
function isDigitCharCode(charCode) {
  return charCode >= 48 && charCode <= 57;
}
function tokenizeNatural(value) {
  let tokens = [],
    segmentStart = 0,
    index = 0;
  for (; index < value.length; ) {
    for (; index < value.length && !isDigitCharCode(value.charCodeAt(index)); )
      index += 1;
    if (index >= value.length) break;
    index > segmentStart && tokens.push(value.slice(segmentStart, index));
    let numericValue = 0;
    for (; index < value.length && isDigitCharCode(value.charCodeAt(index)); ) {
      numericValue = numericValue * 10 + (value.charCodeAt(index) - 48);
      index += 1;
    }
    tokens.push(numericValue);
    segmentStart = index;
  }
  return (
    (segmentStart < value.length || tokens.length === 0) &&
      tokens.push(value.slice(segmentStart)),
    tokens
  );
}
function makeSortKey(value) {
  let lowerValue = value.toLowerCase();
  return {
    lowerValue: lowerValue,
    tokens: tokenizeNatural(lowerValue),
  };
}
function compareTokens(tokensA, tokensB) {
  let minLength = Math.min(tokensA.length, tokensB.length);
  for (let index = 0; index < minLength; index++) {
    let tokenA = tokensA[index],
      tokenB = tokensB[index];
    if (tokenA === tokenB) continue;
    if (typeof tokenA == "number" && typeof tokenB == "number")
      return tokenA < tokenB ? -1 : 1;
    let stringA = String(tokenA),
      stringB = String(tokenB);
    if (stringA !== stringB) return stringA < stringB ? -1 : 1;
  }
  return tokensA.length === tokensB.length
    ? 0
    : tokensA.length < tokensB.length
      ? -1
      : 1;
}
function compareSortKeys(keyA, keyB) {
  if (
    keyA.tokens.length === 1 &&
    keyB.tokens.length === 1 &&
    typeof keyA.tokens[0] == "string" &&
    typeof keyB.tokens[0] == "string"
  )
    return keyA.lowerValue === keyB.lowerValue
      ? 0
      : keyA.lowerValue < keyB.lowerValue
        ? -1
        : 1;
  let tokenComparison = compareTokens(keyA.tokens, keyB.tokens);
  return tokenComparison === 0
    ? keyA.lowerValue === keyB.lowerValue
      ? 0
      : keyA.lowerValue < keyB.lowerValue
        ? -1
        : 1
    : tokenComparison;
}
function compareByKey(valueA, valueB, getSortKey) {
  let comparison = compareSortKeys(getSortKey(valueA), getSortKey(valueB));
  return comparison === 0
    ? valueA === valueB
      ? 0
      : valueA < valueB
        ? -1
        : 1
    : comparison;
}
function compareStrings(a, b) {
  return compareByKey(a, b, makeSortKey);
}
function segmentSortRank(pathInfo, segmentIndex) {
  return segmentIndex === pathInfo.segments.length - 1
    ? pathInfo.isDirectory
      ? 1
      : 0
    : 1;
}
function comparePaths(pathA, pathB) {
  let minSegments = Math.min(pathA.segments.length, pathB.segments.length);
  for (let index = 0; index < minSegments; index++) {
    let segmentA = pathA.segments[index],
      segmentB = pathB.segments[index];
    if (segmentA === segmentB) continue;
    let rankA = segmentSortRank(pathA, index);
    return rankA === segmentSortRank(pathB, index)
      ? compareStrings(segmentA, segmentB)
      : rankA === 1
        ? -1
        : 1;
  }
  return pathA.segments.length === pathB.segments.length
    ? pathA.isDirectory === pathB.isDirectory
      ? 0
      : pathA.isDirectory
        ? -1
        : 1
    : pathA.segments.length < pathB.segments.length
      ? -1
      : 1;
}
function comparePathsDefault(pathA, pathB) {
  return comparePaths(pathA, pathB);
}
function comparePathsCached(pathA, pathB, sortKeyCache) {
  let getSortKey = (segment) => {
      let cached = sortKeyCache.get(segment);
      if (cached != null) return cached;
      let sortKey = makeSortKey(segment);
      return (sortKeyCache.set(segment, sortKey), sortKey);
    },
    minSegments = Math.min(pathA.segments.length, pathB.segments.length);
  for (let index = 0; index < minSegments; index++) {
    let segmentA = pathA.segments[index],
      segmentB = pathB.segments[index];
    if (segmentA === segmentB) continue;
    let rankA = segmentSortRank(pathA, index);
    return rankA === segmentSortRank(pathB, index)
      ? compareByKey(segmentA, segmentB, getSortKey)
      : rankA === 1
        ? -1
        : 1;
  }
  return pathA.segments.length === pathB.segments.length
    ? pathA.isDirectory === pathB.isDirectory
      ? 0
      : pathA.isDirectory
        ? -1
        : 1
    : pathA.segments.length < pathB.segments.length
      ? -1
      : 1;
}
function getSortKeyById(interner, segmentId) {
  let cached = interner.sortKeyById[segmentId];
  if (cached !== undefined) return cached;
  let value = interner.valueById[segmentId],
    sortKey = makeSortKey(value);
  return ((interner.sortKeyById[segmentId] = sortKey), sortKey);
}
function normalizeOptions(options = {}) {
  return {
    flattenEmptyDirectories: options.flattenEmptyDirectories !== false,
    sort: options.sort ?? "default",
  };
}
function splitPathSegments(path) {
  let hasTrailingSlash =
      path.length > 0 && path.charCodeAt(path.length - 1) === 47,
    effectiveLength = hasTrailingSlash ? path.length - 1 : path.length,
    segments = [],
    segmentStart = 0;
  for (let index = 0; index < effectiveLength; index++)
    path.charCodeAt(index) === 47 &&
      (segments.push(path.slice(segmentStart, index)),
      (segmentStart = index + 1));
  return (
    segments.push(path.slice(segmentStart, effectiveLength)),
    {
      hasTrailingSlash: hasTrailingSlash,
      segments: segments,
    }
  );
}
function parsePath(path) {
  let { hasTrailingSlash, segments } = splitPathSegments(path);
  return {
    basename: segments[segments.length - 1] ?? "",
    isDirectory: hasTrailingSlash,
    path: path,
    segments,
  };
}
function parseQueryPath(path) {
  if (path.length === 0)
    return {
      requiresDirectory: false,
      segments: [],
    };
  let { hasTrailingSlash, segments } = splitPathSegments(path);
  return {
    requiresDirectory: hasTrailingSlash,
    segments,
  };
}
function createSegmentTable() {
  let idByValue = new Map();
  return (
    idByValue.set("", 0),
    {
      idByValue: idByValue,
      valueById: [""],
      sortKeyById: [makeSortKey("")],
    }
  );
}
function internSegment(interner, value) {
  let existingId = interner.idByValue.get(value);
  if (existingId !== undefined) return existingId;
  let newId = interner.valueById.length;
  return (
    interner.idByValue.set(value, newId),
    interner.valueById.push(value),
    newId
  );
}
function getSegmentValue(interner, segmentId) {
  let value = interner.valueById[segmentId];
  if (value === undefined)
    throw Error(`Unknown segment ID: ${String(segmentId)}`);
  return value;
}
var preparedInputKindSymbol = Symbol("pathStorePreparedInputKind");
function tagPreparedInput(target, kind) {
  return ((target[preparedInputKindSymbol] = kind), target);
}
function toSortablePathInfo(pathInfo) {
  return {
    basename: pathInfo.basename,
    depth: pathInfo.segments.length,
    isDirectory: pathInfo.isDirectory,
    path: pathInfo.path,
    segments: pathInfo.segments,
  };
}
function compareWithSort(pathA, pathB, sort) {
  return sort === "default"
    ? comparePathsDefault(pathA, pathB)
    : sort(toSortablePathInfo(pathA), toSortablePathInfo(pathB));
}
function createRootNode() {
  return {
    depthAndFlags: packDepthAndFlags(0, 3, 1),
    nameId: 0,
    parentId: 0,
    subtreeNodeCount: 1,
    visibleSubtreeCount: 1,
  };
}
function commonPrefixLength(segmentsA, segmentsB) {
  let minLength = Math.min(segmentsA.length, segmentsB.length);
  for (let index = 0; index < minLength; index++)
    if (segmentsA[index] !== segmentsB[index]) return index;
  return minLength;
}
function getDirectoryDepth(pathInfo) {
  return pathInfo.isDirectory
    ? pathInfo.segments.length
    : pathInfo.segments.length - 1;
}
function isPreparedPathArray(value) {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item == "object" &&
        !!item &&
        typeof item.path == "string" &&
        Array.isArray(item.segments) &&
        typeof item.basename == "string" &&
        typeof item.isDirectory == "boolean",
    )
  );
}
function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item == "string");
}
function preparePathList(paths, options = {}) {
  return preparePathEntries(paths, options).map((item) => item.path);
}
function preparePreparedInput(paths, options = {}) {
  let prepared = preparePathEntries(paths, options);
  return tagPreparedInput(
    {
      paths: prepared.map((item) => item.path),
      preparedPaths: prepared,
    },
    "prepared",
  );
}
function hasAnyDirectoryPath(paths) {
  let count = paths.length,
    hasDirectory = false;
  for (let index = 0; index < count; index += 1) {
    let path = paths[index];
    if (path.length > 0 && path.charCodeAt(path.length - 1) === 47) {
      hasDirectory = true;
      break;
    }
  }
  return tagPreparedInput(
    {
      paths: paths,
      presortedPaths: paths,
      presortedPathsContainDirectories: hasDirectory,
    },
    "presorted",
  );
}
function resolvePreparedPaths(prepared) {
  let input = prepared,
    preparedPaths = input.preparedPaths;
  if (input[preparedInputKindSymbol] === "prepared" && preparedPaths != null)
    return preparedPaths;
  if (!isPreparedPathArray(preparedPaths))
    throw Error("preparedInput must come from PathStore.prepareInput()");
  return preparedPaths;
}
function resolvePresortedPaths(presortedInput) {
  let input = presortedInput;
  return (input[preparedInputKindSymbol] === "presorted" &&
    input.presortedPaths != null) ||
    isStringArray(input.presortedPaths)
    ? input.presortedPaths
    : null;
}
function resolvePresortedContainsDirectories(presortedInput) {
  let input = presortedInput;
  return typeof input.presortedPathsContainDirectories == "boolean"
    ? input.presortedPathsContainDirectories
    : null;
}
function preparePathEntries(paths, options = {}) {
  let _options = normalizeOptions(options),
    instrumentation = getInstrumentation(options);
  setCounter(instrumentation, "workload.inputFiles", paths.length);
  let entries = measurePhase(
    instrumentation,
    "store.preparePathEntries.parse",
    () => paths.map((item) => parsePath(item)),
  );
  return (
    measurePhase(instrumentation, "store.preparePathEntries.sort", () =>
      entries.sort((a, b) => compareWithSort(a, b, _options.sort)),
    ),
    entries
  );
}
var PathTreeBuilder = class {
  directories = new Map();
  directoryStack = [0];
  presortedDirectoryNodeIds = [];
  initialExpandedPathSet;
  createdDirectoriesAllExpanded = false;
  createdDirectoryCount = 0;
  lastPreparedPath = null;
  nodes = [createRootNode()];
  options;
  instrumentation;
  segmentSortKeyCache = new Map();
  segmentTable = createSegmentTable();
  hasDeferredDirectoryIndexes = false;
  constructor(options = {}) {
    this.instrumentation = getInstrumentation(options);
    this.options = normalizeOptions(options);
    let initialExpandedPaths = options.initialExpandedPaths ?? null;
    if (initialExpandedPaths == null || initialExpandedPaths.length === 0)
      this.initialExpandedPathSet = null;
    else {
      let expandedPathSet = new Set(),
        count = initialExpandedPaths.length;
      for (let index = 0; index < count; index += 1) {
        let path = initialExpandedPaths[index],
          length = path.length;
        expandedPathSet.add(
          length > 0 && path.charCodeAt(length - 1) === 47
            ? path.slice(0, length - 1)
            : path,
        );
      }
      this.initialExpandedPathSet = expandedPathSet;
      this.createdDirectoriesAllExpanded = true;
    }
    this.directories.set(0, createChildBookkeeping());
  }
  appendPaths(paths) {
    return measurePhase(
      this.instrumentation,
      "store.builder.appendPaths.parse",
      () => this.appendPreparedPaths(paths.map((item) => parsePath(item))),
    );
  }
  appendPreparedPaths(preparedPaths, checked = true) {
    return (
      (this.createdDirectoriesAllExpanded = false),
      measurePhase(
        this.instrumentation,
        "store.builder.appendPreparedPaths",
        () => {
          for (let preparedPath of preparedPaths)
            this.appendPreparedPath(preparedPath, checked);
        },
      ),
      this
    );
  }
  appendPresortedPaths(paths, containsDirectories = null) {
    return (
      measurePhase(
        this.instrumentation,
        "store.builder.appendPresortedPaths",
        () => {
          if (containsDirectories === false) {
            this.appendPresortedFilePaths(paths);
            return;
          }
          this.createdDirectoriesAllExpanded = false;
          let previousPath = null,
            depth = 0,
            nodes = this.nodes,
            segmentTable = this.segmentTable,
            idByValue = segmentTable.idByValue,
            valueById = segmentTable.valueById,
            directoryStack = this.directoryStack,
            stackDepth = 0,
            sharedPrefix = "",
            sharedPrefixDepth = 0;
          for (let path of paths) {
            if (previousPath === path) throw Error(`Duplicate path: "${path}"`);
            let _isDirectory =
                path.length > 0 && path.charCodeAt(path.length - 1) === 47,
              pathLength = _isDirectory ? path.length - 1 : path.length,
              matchedDepth = 0,
              matchedOffset = 0;
            if (previousPath != null)
              if (
                sharedPrefix.length > 0 &&
                path.length > sharedPrefix.length &&
                path.startsWith(sharedPrefix)
              ) {
                matchedDepth = sharedPrefixDepth;
                matchedOffset = sharedPrefix.length;
              } else {
                let limit = Math.min(pathLength, previousPath.length),
                  prefixMatches = true;
                for (let index = 0; index < limit; index++) {
                  let charCode = path.charCodeAt(index);
                  if (charCode !== previousPath.charCodeAt(index)) {
                    prefixMatches = false;
                    break;
                  }
                  charCode === 47 &&
                    (matchedDepth++, (matchedOffset = index + 1));
                }
                prefixMatches &&
                  _isDirectory &&
                  limit === pathLength &&
                  previousPath.length > pathLength &&
                  previousPath.charCodeAt(pathLength) === 47 &&
                  (matchedDepth++, (matchedOffset = pathLength + 1));
              }
            stackDepth = matchedDepth;
            depth = matchedDepth;
            let segmentStart = matchedOffset,
              slashIndex = path.indexOf("/", segmentStart);
            for (; slashIndex >= 0 && slashIndex < pathLength; ) {
              let parentId = directoryStack[stackDepth];
              if (parentId === undefined)
                throw Error(
                  "Directory stack underflow while building the path store",
                );
              depth++;
              let segment = path.slice(segmentStart, slashIndex),
                nameId = idByValue.get(segment);
              nameId === undefined &&
                ((nameId = valueById.length),
                idByValue.set(segment, nameId),
                valueById.push(segment));
              let nodeId = nodes.length;
              nodes.push({
                depthAndFlags: packDepthAndFlags(depth, 0, 1),
                nameId: nameId,
                parentId: parentId,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              });
              this.recordCreatedDirectoryPath(path.slice(0, slashIndex));
              stackDepth++;
              directoryStack[stackDepth] = nodeId;
              segmentStart = slashIndex + 1;
              slashIndex = path.indexOf("/", segmentStart);
            }
            if (_isDirectory) {
              if (segmentStart < pathLength) {
                let parentId = directoryStack[stackDepth];
                if (parentId === undefined)
                  throw Error(
                    `Unable to resolve directory parent for "${path}"`,
                  );
                depth++;
                let segment = path.slice(segmentStart, pathLength),
                  nameId = idByValue.get(segment);
                nameId === undefined &&
                  ((nameId = valueById.length),
                  idByValue.set(segment, nameId),
                  valueById.push(segment));
                let nodeId = nodes.length;
                nodes.push({
                  depthAndFlags: packDepthAndFlags(depth, 0, 1),
                  nameId: nameId,
                  parentId: parentId,
                  subtreeNodeCount: 1,
                  visibleSubtreeCount: 1,
                });
                stackDepth++;
                directoryStack[stackDepth] = nodeId;
              }
              let directoryNodeId = directoryStack[stackDepth];
              if (directoryNodeId === undefined)
                throw Error(`Unable to resolve directory node for "${path}"`);
              this.promoteDirectoryToExplicit(directoryNodeId, path);
            } else {
              let parentId = directoryStack[stackDepth];
              if (parentId === undefined)
                throw Error(`Unable to resolve file parent for "${path}"`);
              let basename = path.slice(segmentStart),
                nameId = idByValue.get(basename);
              nameId === undefined &&
                ((nameId = valueById.length),
                idByValue.set(basename, nameId),
                valueById.push(basename));
              nodes.push({
                depthAndFlags: packDepthAndFlags(depth + 1, 0),
                nameId: nameId,
                parentId: parentId,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              });
            }
            segmentStart !== sharedPrefix.length &&
              ((sharedPrefix = path.substring(0, segmentStart)),
              (sharedPrefixDepth = depth));
            previousPath = path;
          }
          directoryStack.length = stackDepth + 1;
          previousPath != null &&
            (this.lastPreparedPath = parsePath(previousPath));
          this.hasDeferredDirectoryIndexes = true;
        },
      ),
      this
    );
  }
  appendPresortedFilePaths(paths) {
    let previousPath = null,
      depth = 0,
      nodes = this.nodes,
      segmentTable = this.segmentTable,
      idByValue = segmentTable.idByValue,
      valueById = segmentTable.valueById,
      directoryStack = this.directoryStack,
      stackDepth = 0,
      sharedPrefix = "",
      sharedPrefixDepth = 0;
    for (let path of paths) {
      if (previousPath === path) throw Error(`Duplicate path: "${path}"`);
      let pathLength = path.length,
        matchedDepth = 0,
        matchedOffset = 0;
      if (previousPath != null)
        if (
          sharedPrefix.length > 0 &&
          path.length > sharedPrefix.length &&
          path.startsWith(sharedPrefix)
        ) {
          matchedDepth = sharedPrefixDepth;
          matchedOffset = sharedPrefix.length;
        } else {
          let limit = Math.min(pathLength, previousPath.length);
          for (let index = 0; index < limit; index++) {
            let charCode = path.charCodeAt(index);
            if (charCode !== previousPath.charCodeAt(index)) break;
            charCode === 47 && (matchedDepth++, (matchedOffset = index + 1));
          }
        }
      stackDepth = matchedDepth;
      depth = matchedDepth;
      let segmentStart = matchedOffset,
        slashIndex = path.indexOf("/", segmentStart);
      for (; slashIndex >= 0; ) {
        let _parentId = directoryStack[stackDepth];
        if (_parentId === undefined)
          throw Error(
            "Directory stack underflow while building the path store",
          );
        depth++;
        let segment = path.slice(segmentStart, slashIndex),
          _nameId = idByValue.get(segment);
        _nameId === undefined &&
          ((_nameId = valueById.length),
          idByValue.set(segment, _nameId),
          valueById.push(segment));
        let nodeId = nodes.length;
        nodes.push({
          depthAndFlags: packDepthAndFlags(depth, 0, 1),
          nameId: _nameId,
          parentId: _parentId,
          subtreeNodeCount: 1,
          visibleSubtreeCount: 1,
        });
        this.recordCreatedDirectoryPath(path.slice(0, slashIndex));
        this.presortedDirectoryNodeIds.push(nodeId);
        stackDepth++;
        directoryStack[stackDepth] = nodeId;
        segmentStart = slashIndex + 1;
        slashIndex = path.indexOf("/", segmentStart);
      }
      let parentId = directoryStack[stackDepth];
      if (parentId === undefined)
        throw Error(`Unable to resolve file parent for "${path}"`);
      let basename = path.slice(segmentStart),
        nameId = idByValue.get(basename);
      nameId === undefined &&
        ((nameId = valueById.length),
        idByValue.set(basename, nameId),
        valueById.push(basename));
      nodes.push({
        depthAndFlags: packDepthAndFlags(depth + 1, 0),
        nameId: nameId,
        parentId: parentId,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      });
      segmentStart !== sharedPrefix.length &&
        ((sharedPrefix = path.substring(0, segmentStart)),
        (sharedPrefixDepth = depth));
      previousPath = path;
    }
    directoryStack.length = stackDepth + 1;
    previousPath != null && (this.lastPreparedPath = parsePath(previousPath));
    this.hasDeferredDirectoryIndexes = true;
  }
  finish(options = {}) {
    let skipSubtreeCounts = options.skipSubtreeCountPass === true;
    return (
      this.hasDeferredDirectoryIndexes
        ? (measurePhase(
            this.instrumentation,
            "store.builder.buildDirectoryIndexes",
            () => this.buildPresortedFinish(skipSubtreeCounts),
          ),
          (this.hasDeferredDirectoryIndexes = false))
        : skipSubtreeCounts ||
          measurePhase(
            this.instrumentation,
            "store.builder.computeSubtreeCounts",
            () => this.computeSubtreeCounts(0),
          ),
      {
        directories: this.directories,
        nodes: this.nodes,
        options: this.options,
        rootId: 0,
        segmentTable: this.segmentTable,
        presortedDirectoryNodeIds:
          this.presortedDirectoryNodeIds.length > 0
            ? this.presortedDirectoryNodeIds
            : null,
      }
    );
  }
  didMatchAllInitialExpandedPaths() {
    return (
      this.createdDirectoriesAllExpanded &&
      this.initialExpandedPathSet != null &&
      this.createdDirectoryCount === this.initialExpandedPathSet.size
    );
  }
  appendPreparedPath(preparedPath, checked) {
    if (
      ((this.hasDeferredDirectoryIndexes &&=
        (this.buildDirectoryIndexes(), false)),
      this.lastPreparedPath != null)
    ) {
      if (preparedPath.path === this.lastPreparedPath.path)
        throw Error(`Duplicate path: "${preparedPath.path}"`);
      if (
        checked &&
        (this.options.sort === "default"
          ? comparePathsCached(
              this.lastPreparedPath,
              preparedPath,
              this.segmentSortKeyCache,
            )
          : compareWithSort(
              this.lastPreparedPath,
              preparedPath,
              this.options.sort,
            )) > 0
      )
        throw Error(
          `Builder input must be sorted before appendPaths(): "${preparedPath.path}"`,
        );
    }
    let previousPath = this.lastPreparedPath,
      segmentCount = getDirectoryDepth(preparedPath),
      previousSegmentCount =
        previousPath == null ? 0 : getDirectoryDepth(previousPath),
      sharedSegmentCount =
        previousPath == null
          ? 0
          : commonPrefixLength(previousPath.segments, preparedPath.segments),
      reuseDepth = Math.min(
        sharedSegmentCount,
        segmentCount,
        previousSegmentCount,
      );
    this.directoryStack.length = reuseDepth + 1;
    for (let depth = reuseDepth; depth < segmentCount; depth++) {
      let _parentId = this.directoryStack[this.directoryStack.length - 1];
      if (_parentId === undefined)
        throw Error("Directory stack underflow while building the path store");
      let childId = checked
        ? this.getOrCreateDirectoryChild(
            _parentId,
            preparedPath.segments[depth],
          )
        : this.createDirectoryChild(_parentId, preparedPath.segments[depth]);
      this.directoryStack.push(childId);
    }
    if (preparedPath.isDirectory) {
      let directoryNodeId = this.directoryStack[this.directoryStack.length - 1];
      if (directoryNodeId === undefined)
        throw Error(
          `Unable to resolve directory node for "${preparedPath.path}"`,
        );
      this.promoteDirectoryToExplicit(directoryNodeId, preparedPath.path);
      this.lastPreparedPath = preparedPath;
      return;
    }
    let parentId = this.directoryStack[this.directoryStack.length - 1];
    if (parentId === undefined)
      throw Error(`Unable to resolve file parent for "${preparedPath.path}"`);
    checked
      ? this.createFileChild(parentId, preparedPath.basename, preparedPath.path)
      : this.createFileChildUnchecked(parentId, preparedPath.basename);
    this.lastPreparedPath = preparedPath;
  }
  recordCreatedDirectoryPath(path) {
    !this.createdDirectoriesAllExpanded ||
      this.initialExpandedPathSet == null ||
      ((this.createdDirectoryCount += 1),
      this.initialExpandedPathSet.has(path) ||
        (this.createdDirectoriesAllExpanded = false));
  }
  createFileChild(parentId, basename, path) {
    let nameId = internSegment(this.segmentTable, basename),
      directory = this.getDirectoryIndex(parentId),
      childIdByNameId = directory.childIdByNameId;
    if (childIdByNameId != null && childIdByNameId.get(nameId) !== undefined)
      throw Error(`Path collides with an existing entry: "${path}"`);
    let parentNode = this.nodes[parentId];
    if (parentNode === undefined)
      throw Error(`Unknown parent node ID: ${String(parentId)}`);
    let nodeId = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0),
        nameId: nameId,
        parentId: parentId,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      childIdByNameId?.set(nameId, nodeId),
      appendChild(directory, nodeId),
      nodeId
    );
  }
  createFileChildUnchecked(parentId, basename) {
    let nameId = internSegment(this.segmentTable, basename),
      directory = this.getDirectoryIndex(parentId),
      parentNode = this.nodes[parentId];
    if (parentNode === undefined)
      throw Error(`Unknown parent node ID: ${String(parentId)}`);
    let nodeId = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0),
        nameId: nameId,
        parentId: parentId,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      directory.childIdByNameId != null &&
        directory.childIdByNameId.set(nameId, nodeId),
      appendChild(directory, nodeId),
      nodeId
    );
  }
  getOrCreateDirectoryChild(parentId, name) {
    let nameId = internSegment(this.segmentTable, name),
      directory = this.getDirectoryIndex(parentId);
    if (directory.childIdByNameId != null) {
      let existingChildId = directory.childIdByNameId.get(nameId);
      if (existingChildId !== undefined) {
        let existingNode = this.nodes[existingChildId];
        if (existingNode != null && !isDirectory(existingNode))
          throw Error(
            `Path collides with an existing file while creating directory "${name}"`,
          );
        return existingChildId;
      }
    }
    let parentNode = this.nodes[parentId];
    if (parentNode === undefined)
      throw Error(`Unknown parent node ID: ${String(parentId)}`);
    let nodeId = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0, 1),
        nameId: nameId,
        parentId: parentId,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      directory.childIdByNameId != null &&
        directory.childIdByNameId.set(nameId, nodeId),
      appendChild(directory, nodeId),
      this.directories.set(nodeId, createChildBookkeeping()),
      nodeId
    );
  }
  createDirectoryChild(parentId, name) {
    let nameId = internSegment(this.segmentTable, name),
      directory = this.getDirectoryIndex(parentId),
      parentNode = this.nodes[parentId];
    if (parentNode === undefined)
      throw Error(`Unknown parent node ID: ${String(parentId)}`);
    let nodeId = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0, 1),
        nameId: nameId,
        parentId: parentId,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      directory.childIdByNameId != null &&
        directory.childIdByNameId.set(nameId, nodeId),
      appendChild(directory, nodeId),
      this.directories.set(nodeId, createChildBookkeeping()),
      nodeId
    );
  }
  promoteDirectoryToExplicit(nodeId, path) {
    let node = this.nodes[nodeId];
    if (node === undefined)
      throw Error(`Unknown directory node ID: ${String(nodeId)}`);
    if (!isDirectory(node)) throw Error(`Path is not a directory: "${path}"`);
    if (hasFlag(node, 1)) throw Error(`Duplicate path: "${path}"`);
    setFlags(node, 1);
  }
  getDirectoryIndex(nodeId) {
    let directory = this.directories.get(nodeId);
    if (directory !== undefined) return directory;
    throw Error(`Unknown directory child index for node ${String(nodeId)}`);
  }
  buildPresortedFinish(skipSubtreeCounts) {
    let nodes = this.nodes,
      directories = this.directories;
    directories.set(0, createEmptyChildBookkeeping());
    let lastParentId = -1,
      lastDirectory = null;
    for (let nodeId = 1; nodeId < nodes.length; nodeId++) {
      let node = nodes[nodeId];
      if (node == null) continue;
      if (isDirectory(node)) {
        let directory = createEmptyChildBookkeeping();
        directories.set(nodeId, directory);
        lastParentId = nodeId;
        lastDirectory = directory;
      }
      let parentDirectory;
      node.parentId === lastParentId
        ? (parentDirectory = lastDirectory)
        : ((parentDirectory = directories.get(node.parentId)),
          (lastParentId = node.parentId),
          (lastDirectory = parentDirectory ?? null));
      parentDirectory?.childIds.push(nodeId);
    }
    if (!skipSubtreeCounts)
      for (let nodeId = nodes.length - 1; nodeId >= 1; nodeId--) {
        let node = nodes[nodeId];
        if (node == null) continue;
        let parentNode = nodes[node.parentId];
        parentNode != null &&
          ((parentNode.subtreeNodeCount += node.subtreeNodeCount),
          (parentNode.visibleSubtreeCount += node.visibleSubtreeCount));
      }
  }
  buildDirectoryIndexes() {
    let nodes = this.nodes;
    for (let nodeId = 1; nodeId < nodes.length; nodeId++) {
      let node = nodes[nodeId];
      if (node == null) continue;
      isDirectory(node) &&
        this.directories.set(nodeId, createChildBookkeeping());
      let parentDirectory = this.directories.get(node.parentId);
      parentDirectory != null &&
        (parentDirectory.childIdByNameId != null &&
          parentDirectory.childIdByNameId.set(node.nameId, nodeId),
        appendChild(parentDirectory, nodeId));
    }
  }
  computeSubtreeCounts(nodeId) {
    let node = this.nodes[nodeId];
    if (node === undefined) throw Error(`Unknown node ID: ${String(nodeId)}`);
    if (!isDirectory(node))
      return ((node.subtreeNodeCount = 1), (node.visibleSubtreeCount = 1), 1);
    let directory = this.getDirectoryIndex(nodeId),
      subtreeCount = 1;
    for (let childId of directory.childIds)
      subtreeCount += this.computeSubtreeCounts(childId);
    return (
      recomputeChildSubtreeCounts(this.nodes, directory),
      (node.subtreeNodeCount = subtreeCount),
      (node.visibleSubtreeCount = subtreeCount),
      subtreeCount
    );
  }
};
function createStoreState(
  snapshot,
  initialExpansion = "closed",
  instrumentation = null,
) {
  let defaultExpansion = normalizeInitialExpansion(initialExpansion);
  return {
    activeNodeCount: snapshot.nodes.length - 1,
    collapsedDirectoryIds: new Set(),
    collapseNewDirectoriesByDefault: false,
    defaultExpansion: defaultExpansion,
    directoriesOpenByDefault: defaultExpansion === "open",
    hasCollapsedDirectoryOverrides: false,
    directoryLoadInfoById: new Map(),
    expandedDirectoryIds: new Set(),
    instrumentation: instrumentation,
    listeners: new Map(),
    pathCacheByNodeId: new Map([
      [
        snapshot.rootId,
        {
          path: "",
          version: 0,
        },
      ],
    ]),
    pathCacheVersion: 0,
    snapshot: snapshot,
    transactionStack: [],
  };
}
function createTransactionFrame() {
  return {
    affectedAncestorIds: new Set(),
    affectedNodeIds: new Set(),
    events: [],
  };
}
function normalizeInitialExpansion(initialExpansion) {
  if (typeof initialExpansion != "number") return initialExpansion;
  if (!Number.isInteger(initialExpansion) || initialExpansion < 0)
    throw Error(
      `initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(initialExpansion)}`,
    );
  return initialExpansion;
}
function isExpandedByDefault(state, node) {
  return hasFlag(node, 2) || state.defaultExpansion === "open"
    ? true
    : state.defaultExpansion === "closed"
      ? false
      : getDepth(node) <= state.defaultExpansion;
}
function isDirectoryExpanded(
  state,
  nodeId,
  node = state.snapshot.nodes[nodeId],
) {
  return node == null || !isDirectory(node)
    ? false
    : state.directoriesOpenByDefault && !state.hasCollapsedDirectoryOverrides
      ? true
      : state.collapsedDirectoryIds.has(nodeId)
        ? false
        : state.expandedDirectoryIds.has(nodeId)
          ? true
          : isExpandedByDefault(state, node);
}
function setDirectoryExpanded(
  state,
  nodeId,
  expanded,
  node = state.snapshot.nodes[nodeId],
) {
  if (node == null || !isDirectory(node)) return;
  let expandedByDefault = isExpandedByDefault(state, node);
  if (expanded) {
    if (expandedByDefault) {
      state.collapsedDirectoryIds.delete(nodeId);
      state.hasCollapsedDirectoryOverrides =
        state.collapsedDirectoryIds.size > 0;
      return;
    }
    state.expandedDirectoryIds.add(nodeId);
    return;
  }
  if (expandedByDefault) {
    state.collapsedDirectoryIds.add(nodeId);
    state.hasCollapsedDirectoryOverrides = true;
    return;
  }
  state.expandedDirectoryIds.delete(nodeId);
}
function getOrCreateDirectoryLoadInfo(state, nodeId) {
  let existing = state.directoryLoadInfoById.get(nodeId);
  if (existing != null) return existing;
  let loadInfo = {
    activeAttemptId: null,
    errorMessage: null,
    nextAttemptId: 1,
    state: "loaded",
  };
  return (state.directoryLoadInfoById.set(nodeId, loadInfo), loadInfo);
}
function getDirectoryLoadState(state, nodeId) {
  return state.directoryLoadInfoById.get(nodeId)?.state ?? "loaded";
}
function beginDirectoryLoad(state, nodeId) {
  let loadInfo = getOrCreateDirectoryLoadInfo(state, nodeId);
  if (loadInfo.state === "loading" && loadInfo.activeAttemptId != null)
    return {
      attemptId: loadInfo.activeAttemptId,
      nodeId: nodeId,
      reused: true,
    };
  let attemptId = loadInfo.nextAttemptId;
  return (
    (loadInfo.activeAttemptId = attemptId),
    (loadInfo.errorMessage = null),
    (loadInfo.nextAttemptId += 1),
    (loadInfo.state = "loading"),
    {
      attemptId: attemptId,
      nodeId: nodeId,
      reused: false,
    }
  );
}
function markDirectoryUnloaded(state, nodeId) {
  let loadInfo = getOrCreateDirectoryLoadInfo(state, nodeId);
  loadInfo.activeAttemptId = null;
  loadInfo.errorMessage = null;
  loadInfo.state = "unloaded";
}
function completeDirectoryLoad(state, nodeId, attemptId) {
  let loadInfo = state.directoryLoadInfoById.get(nodeId);
  return loadInfo == null || loadInfo.activeAttemptId !== attemptId
    ? false
    : ((loadInfo.activeAttemptId = null),
      (loadInfo.errorMessage = null),
      (loadInfo.state = "loaded"),
      true);
}
function isLoadAttemptActive(state, nodeId, attemptId) {
  return state.directoryLoadInfoById.get(nodeId)?.activeAttemptId === attemptId;
}
function failDirectoryLoad(state, nodeId, attemptId, errorMessage) {
  let loadInfo = state.directoryLoadInfoById.get(nodeId);
  return loadInfo == null || loadInfo.activeAttemptId !== attemptId
    ? false
    : ((loadInfo.activeAttemptId = null),
      (loadInfo.errorMessage = errorMessage ?? null),
      (loadInfo.state = "error"),
      true);
}
function deleteDirectoryLoadInfo(state, nodeId) {
  state.directoryLoadInfoById.delete(nodeId);
}
function addDirectoryLoadListener(state, nodeId, listener) {
  let _listener = listener,
    listeners = state.listeners.get(nodeId);
  return (
    listeners == null
      ? state.listeners.set(nodeId, new Set([_listener]))
      : listeners.add(_listener),
    () => {
      let _listeners = state.listeners.get(nodeId);
      _listeners != null &&
        (_listeners.delete(_listener),
        _listeners.size === 0 && state.listeners.delete(nodeId));
    }
  );
}
function createAddEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: true,
    operation: "add",
    path: details.path,
    projectionChanged: details.projectionChanged,
    visibleCountDelta: null,
  };
}
function createRemoveEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: true,
    operation: "remove",
    path: details.path,
    projectionChanged: details.projectionChanged,
    recursive: details.recursive,
    visibleCountDelta: null,
  };
}
function createMoveEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: true,
    from: details.from,
    operation: "move",
    projectionChanged: details.projectionChanged,
    to: details.to,
    visibleCountDelta: null,
  };
}
function createExpandEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "expand",
    path: details.path,
    projectionChanged: true,
    visibleCountDelta: null,
  };
}
function createCollapseEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "collapse",
    path: details.path,
    projectionChanged: true,
    visibleCountDelta: null,
  };
}
function createMarkDirectoryUnloadedEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "mark-directory-unloaded",
    path: details.path,
    projectionChanged: details.projectionChanged,
    visibleCountDelta: null,
  };
}
function createBeginChildLoadEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    attemptId: details.attemptId,
    canonicalChanged: false,
    operation: "begin-child-load",
    path: details.path,
    projectionChanged: details.projectionChanged,
    reused: details.reused,
    visibleCountDelta: null,
  };
}
function createApplyChildPatchEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    attemptId: details.attemptId,
    canonicalChanged: details.childEvents.some((item) => item.canonicalChanged),
    childEvents: details.childEvents,
    operation: "apply-child-patch",
    path: details.path,
    projectionChanged: details.projectionChanged,
    visibleCountDelta: null,
  };
}
function createCompleteChildLoadEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    attemptId: details.attemptId,
    canonicalChanged: false,
    operation: "complete-child-load",
    path: details.path,
    projectionChanged: details.projectionChanged,
    stale: details.stale,
    visibleCountDelta: null,
  };
}
function createFailChildLoadEvent(details) {
  return {
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    attemptId: details.attemptId,
    canonicalChanged: false,
    errorMessage: details.errorMessage,
    operation: "fail-child-load",
    path: details.path,
    projectionChanged: details.projectionChanged,
    stale: details.stale,
    visibleCountDelta: null,
  };
}
function createCleanupEvent(details) {
  return {
    activeNodeCountAfter: details.activeNodeCountAfter,
    activeNodeCountBefore: details.activeNodeCountBefore,
    affectedAncestorIds: details.affectedAncestorIds ?? [],
    affectedNodeIds: details.affectedNodeIds ?? [],
    cachedPathEntryCountAfter: details.cachedPathEntryCountAfter,
    cachedPathEntryCountBefore: details.cachedPathEntryCountBefore,
    canonicalChanged: false,
    idsPreserved: details.idsPreserved,
    loadInfoEntryCountAfter: details.loadInfoEntryCountAfter,
    loadInfoEntryCountBefore: details.loadInfoEntryCountBefore,
    mode: details.mode,
    operation: "cleanup",
    projectionChanged: details.projectionChanged,
    reclaimedCachedPathEntryCount: details.reclaimedCachedPathEntryCount,
    reclaimedLoadInfoEntryCount: details.reclaimedLoadInfoEntryCount,
    reclaimedNodeSlotCount: details.reclaimedNodeSlotCount,
    reclaimedSegmentCount: details.reclaimedSegmentCount,
    segmentCountAfter: details.segmentCountAfter,
    segmentCountBefore: details.segmentCountBefore,
    totalNodeSlotCountAfter: details.totalNodeSlotCountAfter,
    totalNodeSlotCountBefore: details.totalNodeSlotCountBefore,
    visibleCountDelta: null,
  };
}
function withVisibleCountDelta(state, previousVisibleCount, event) {
  return {
    ...event,
    visibleCountDelta: getRootVisibleCount(state) - previousVisibleCount,
  };
}
function runTransaction(state, run) {
  let visibleCountBefore = getRootVisibleCount(state),
    frame = createTransactionFrame();
  state.transactionStack.push(frame);
  try {
    run();
  } catch (error) {
    throw (finishTransaction(state, frame, false), error);
  }
  finishTransaction(
    state,
    frame,
    true,
    getRootVisibleCount(state) - visibleCountBefore,
  );
}
function recordEvent(state, event) {
  let instrumentation = state.instrumentation;
  if (instrumentation == null) {
    enqueueEvent(state, event);
    return;
  }
  measurePhase(instrumentation, "store.events.record", () =>
    enqueueEvent(state, event),
  );
}
function enqueueEvent(state, event) {
  let frame = state.transactionStack[state.transactionStack.length - 1] ?? null;
  if (frame == null) {
    emitEvent(state, event);
    return;
  }
  frame.events.push(event);
  mergeAffectedSets(frame, event);
}
function finishTransaction(state, frame, commit, visibleCountDelta = null) {
  if (state.transactionStack.pop() !== frame)
    throw Error("Transaction stack underflow");
  if (!commit) return;
  let parentFrame =
    state.transactionStack[state.transactionStack.length - 1] ?? null;
  if (parentFrame != null) {
    let _instrumentation = state.instrumentation;
    _instrumentation == null
      ? mergeMutationResults(parentFrame, frame)
      : measurePhase(_instrumentation, "store.events.batch.merge", () =>
          mergeMutationResults(parentFrame, frame),
        );
    return;
  }
  let batchEvent = createBatchEvent(frame, visibleCountDelta),
    instrumentation = state.instrumentation;
  if (instrumentation == null) {
    emitEvent(state, batchEvent);
    return;
  }
  measurePhase(instrumentation, "store.events.batch.commit", () =>
    emitEvent(state, batchEvent),
  );
}
function createBatchEvent(frame, visibleCountDelta) {
  return {
    affectedAncestorIds: [...frame.affectedAncestorIds],
    affectedNodeIds: [...frame.affectedNodeIds],
    canonicalChanged: frame.events.some((item) => item.canonicalChanged),
    events: [...frame.events],
    operation: "batch",
    projectionChanged: frame.events.some((item) => item.projectionChanged),
    visibleCountDelta: visibleCountDelta,
  };
}
function mergeAffectedIds(target, source) {
  for (let ancestorId of source.affectedAncestorIds)
    target.affectedAncestorIds.add(ancestorId);
  for (let nodeId of source.affectedNodeIds) target.affectedNodeIds.add(nodeId);
}
function mergeMutationResults(target, source) {
  for (let event of source.events) target.events.push(event);
  mergeAffectedIds(target, source);
}
function mergeAffectedSets(target, source) {
  for (let nodeId of source.affectedNodeIds) target.affectedNodeIds.add(nodeId);
  for (let ancestorId of source.affectedAncestorIds)
    target.affectedAncestorIds.add(ancestorId);
}
function emitEvent(state, event) {
  let instrumentation = state.instrumentation;
  if (instrumentation == null) {
    notifyListeners(state, event);
    return;
  }
  measurePhase(instrumentation, "store.events.emit", () =>
    notifyListeners(state, event),
  );
}
function notifyListeners(state, event) {
  state.listeners.get(event.operation)?.forEach((listener) => listener(event));
  state.listeners.get("*")?.forEach((listener) => listener(event));
}
function getRootVisibleCount(state) {
  return state.snapshot.nodes[state.snapshot.rootId]?.visibleSubtreeCount ?? 0;
}
function getCollapsibleChildId(state, nodeId) {
  if (state.snapshot.options.flattenEmptyDirectories !== true) return null;
  let node = state.snapshot.nodes[nodeId];
  if (node == null || !isDirectory(node) || hasFlag(node, 2)) return null;
  let directory = state.snapshot.directories.get(nodeId);
  if (directory == null || directory.childIds.length !== 1) return null;
  let childId = directory.childIds[0];
  if (childId == null) return null;
  let childNode = state.snapshot.nodes[childId];
  return childNode == null || !isDirectory(childNode) ? null : childId;
}
function findFlattenedLeaf(state, nodeId) {
  let currentId = nodeId;
  for (;;) {
    let nextId = getCollapsibleChildId(state, currentId);
    if (nextId == null) return currentId;
    currentId = nextId;
  }
}
function collectFlattenChain(state, nodeId) {
  let chain = [nodeId],
    currentId = nodeId;
  for (;;) {
    let nextId = getCollapsibleChildId(state, currentId);
    if (nextId == null) return chain;
    chain.push(nextId);
    currentId = nextId;
  }
}
function getVisibleChildren(state, path) {
  let nodeId = path == null ? state.snapshot.rootId : resolvePath(state, path);
  return nodeId == null ? [] : collectDescendantPaths(state, nodeId);
}
function addPath(state, path) {
  let parsed = parsePath(path),
    directorySegments = parsed.isDirectory
      ? parsed.segments
      : parsed.segments.slice(0, -1),
    projectionBefore = serializePathInfo(
      state,
      resolveNodeIdByPath(state, directorySegments),
    ),
    { createdNodeIds, directoryId } = ensureDirectoryPath(
      state,
      directorySegments,
    ),
    affectedNodeIds = new Set(createdNodeIds),
    targetNodeId = directoryId;
  if (parsed.isDirectory) {
    let node = getNode(state, directoryId);
    if (hasFlag(node, 1)) throw Error(`Path already exists: "${path}"`);
    setFlags(node, 1);
    state.pathCacheByNodeId.set(directoryId, {
      path: path,
      version: state.pathCacheVersion,
    });
    affectedNodeIds.add(directoryId);
  } else {
    targetNodeId = createFileNode(state, directoryId, parsed.basename);
    affectedNodeIds.add(targetNodeId);
  }
  recomputeCountsUpwardFrom(state, directoryId);
  let projectionAfter = serializePathInfo(state, directoryId);
  return createAddEvent({
    affectedAncestorIds: collectAncestorIds(state, targetNodeId),
    affectedNodeIds: [...affectedNodeIds],
    path: path,
    projectionChanged: valuesDiffer(projectionBefore, projectionAfter),
  });
}
function removePath(state, path, options) {
  let nodeId = resolvePath(state, path);
  if (nodeId == null) throw Error(`Path does not exist: "${path}"`);
  let node = getNode(state, nodeId);
  if (hasFlag(node, 2)) throw Error("The root node cannot be removed");
  if (
    isDirectory(node) &&
    getDirectory(state, nodeId).childIds.length > 0 &&
    options.recursive !== true
  )
    throw Error(
      `Cannot remove a non-empty directory without recursive: "${path}"`,
    );
  let parentId = node.parentId,
    projectionBefore = serializePathInfo(state, parentId),
    removedNodeIds = removeSubtree(state, nodeId);
  unlinkChildFromParent(state, parentId, nodeId, node.nameId);
  collapseEmptyAncestors(state, parentId);
  recomputeCountsUpwardFrom(state, parentId);
  let projectionAfter = serializePathInfo(state, parentId);
  return createRemoveEvent({
    affectedAncestorIds: collectAncestorIds(state, parentId),
    affectedNodeIds: removedNodeIds,
    path: path,
    projectionChanged: valuesDiffer(projectionBefore, projectionAfter),
    recursive: options.recursive === true,
  });
}
function buildMoveEvent(state, fromPath, toPath, options) {
  let sourceNodeId = resolvePath(state, fromPath);
  if (sourceNodeId == null)
    throw Error(`Source path does not exist: "${fromPath}"`);
  let sourceNode = getNode(state, sourceNodeId);
  if (hasFlag(sourceNode, 2)) throw Error("The root node cannot be moved");
  let collision = options.collision ?? "error",
    destination = resolveMoveDestination(state, sourceNodeId, toPath),
    sourceParentProjectionBefore = serializePathInfo(
      state,
      sourceNode.parentId,
    ),
    destParentProjectionBefore = serializePathInfo(state, destination.parentId),
    sourceName = getSegmentValue(
      state.snapshot.segmentTable,
      sourceNode.nameId,
    ),
    destNameId = internSegment(
      state.snapshot.segmentTable,
      destination.basename,
    );
  if (
    destination.parentId === sourceNode.parentId &&
    sourceName === destination.basename
  )
    return null;
  if (
    isDirectory(sourceNode) &&
    isAncestorOf(state, sourceNodeId, destination.parentId)
  )
    throw Error("Cannot move a directory into one of its descendants");
  let existingChildId = ensureChildIdByNameId(
      state.snapshot.nodes,
      getDirectory(state, destination.parentId),
    ).get(destNameId),
    collisionNodeId = destination.existingNodeId ?? existingChildId ?? null;
  if (
    collisionNodeId != null &&
    collisionNodeId !== sourceNodeId &&
    resolveMoveCollision(
      state,
      collisionNodeId,
      collision,
      getIsDirBit(sourceNode),
    ) === "skip"
  )
    return null;
  let sourceParentId = sourceNode.parentId;
  unlinkChildFromParent(state, sourceParentId, sourceNodeId, sourceNode.nameId);
  sourceNode.parentId = destination.parentId;
  sourceNode.nameId = destNameId;
  state.pathCacheByNodeId.delete(sourceNodeId);
  recomputeSubtreeDepths(state, sourceNodeId);
  linkChildIntoParent(state, destination.parentId, sourceNodeId);
  collapseEmptyAncestors(state, sourceParentId);
  state.pathCacheVersion++;
  recomputeCountsUpwardFrom(state, sourceParentId);
  destination.parentId !== sourceParentId &&
    recomputeCountsUpwardFrom(state, destination.parentId);
  let sourceParentProjectionAfter = serializePathInfo(state, sourceParentId),
    destParentProjectionAfter = serializePathInfo(state, destination.parentId);
  return createMoveEvent({
    affectedAncestorIds: [
      ...new Set([
        ...collectAncestorIds(state, sourceParentId),
        ...collectAncestorIds(state, destination.parentId),
      ]),
    ],
    affectedNodeIds: [sourceNodeId],
    from: fromPath,
    projectionChanged: idArraysDiffer(
      [sourceParentProjectionBefore, destParentProjectionBefore],
      [sourceParentProjectionAfter, destParentProjectionAfter],
    ),
    to: buildNodePath(state, sourceNodeId),
  });
}
function getCachedPath(state, nodeId) {
  let cacheEntry = state.pathCacheByNodeId.get(nodeId);
  return cacheEntry != null && cacheEntry.version === state.pathCacheVersion
    ? cacheEntry.path
    : null;
}
function cachePath(state, nodeId, path) {
  return (
    state.pathCacheByNodeId.set(nodeId, {
      path: path,
      version: state.pathCacheVersion,
    }),
    path
  );
}
function buildNodePath(state, nodeId) {
  let node = getNode(state, nodeId),
    cachedPath = getCachedPath(state, nodeId);
  if (cachedPath != null) return cachedPath;
  if (hasFlag(node, 2)) return cachePath(state, nodeId, "");
  let parentPath = buildNodePath(state, node.parentId),
    segment = getSegmentValue(state.snapshot.segmentTable, node.nameId),
    path = parentPath.length === 0 ? segment : `${parentPath}${segment}`;
  return cachePath(state, nodeId, isDirectory(node) ? `${path}/` : path);
}
function recomputeCountsUpwardFrom(state, nodeId) {
  let instrumentation = state.instrumentation;
  if (instrumentation == null) {
    recomputeAncestorCounts(state, nodeId);
    return;
  }
  measurePhase(instrumentation, "store.recomputeCountsUpwardFrom", () =>
    recomputeAncestorCounts(state, nodeId),
  );
}
function recomputeSubtreeCounts(state, nodeId) {
  let stack = [[nodeId, 0]],
    { nodes, directories } = state.snapshot;
  for (; stack.length > 0; ) {
    let frame = stack[stack.length - 1],
      currentId = frame[0],
      node = nodes[currentId];
    if (node == null || !isDirectory(node)) {
      recomputeNodeCounts(state, currentId, node, true);
      stack.pop();
      continue;
    }
    let directory = directories.get(currentId);
    if (directory == null || frame[1] >= directory.childIds.length) {
      recomputeNodeCounts(state, currentId, node, true);
      stack.pop();
      continue;
    }
    let childId = directory.childIds[frame[1]++];
    stack.push([childId, 0]);
  }
}
function collectAncestorIds(state, nodeId) {
  let ancestorIds = [],
    currentId = nodeId;
  for (; currentId != null; ) {
    let node = getNode(state, currentId);
    if ((ancestorIds.push(currentId), currentId === state.snapshot.rootId))
      break;
    currentId = node.parentId;
  }
  return ancestorIds;
}
function resolvePath(state, path) {
  if (path.length === 0) return state.snapshot.rootId;
  let parsed = parseQueryPath(path);
  return resolveSegmentsToNodeId(
    state,
    parsed.segments,
    parsed.requiresDirectory,
  );
}
function resolveSegmentsToNodeId(state, segments, requireDirectory) {
  let currentNodeId = state.snapshot.rootId;
  for (let segment of segments) {
    let segmentNameId = state.snapshot.segmentTable.idByValue.get(segment);
    if (segmentNameId === undefined) return null;
    let directory = getDirectory(state, currentNodeId),
      childId = ensureChildIdByNameId(state.snapshot.nodes, directory).get(
        segmentNameId,
      );
    if (childId === undefined) return null;
    currentNodeId = childId;
  }
  let node = getNode(state, currentNodeId);
  return requireDirectory && !isDirectory(node) ? null : currentNodeId;
}
function getDirectory(state, nodeId) {
  let directory = state.snapshot.directories.get(nodeId);
  if (directory === undefined)
    throw Error(`Unknown directory child index for node ${String(nodeId)}`);
  return directory;
}
function getNode(state, nodeId) {
  let node = state.snapshot.nodes[nodeId];
  if (node === undefined || hasFlag(node, 4))
    throw Error(`Unknown node ID: ${String(nodeId)}`);
  return node;
}
function collectDescendantPaths(state, nodeId) {
  let node = state.snapshot.nodes[nodeId];
  if (node === undefined || hasFlag(node, 4)) return [];
  if (!isDirectory(node)) return [buildNodePath(state, nodeId)];
  if (getDirectory(state, nodeId).childIds.length === 0)
    return hasFlag(node, 1) && !hasFlag(node, 2)
      ? [buildNodePath(state, nodeId)]
      : [];
  let paths = [],
    stack = [
      {
        childIndex: 0,
        nodeId: nodeId,
      },
    ];
  for (; stack.length > 0; ) {
    let frame = stack[stack.length - 1];
    if (frame == null) break;
    let frameNode = state.snapshot.nodes[frame.nodeId];
    if (frameNode === undefined || hasFlag(frameNode, 4)) {
      stack.pop();
      continue;
    }
    if (!isDirectory(frameNode)) {
      paths.push(buildNodePath(state, frame.nodeId));
      stack.pop();
      continue;
    }
    let frameDirectory = getDirectory(state, frame.nodeId);
    if (frameDirectory.childIds.length === 0) {
      hasFlag(frameNode, 1) &&
        !hasFlag(frameNode, 2) &&
        paths.push(buildNodePath(state, frame.nodeId));
      stack.pop();
      continue;
    }
    let childId = frameDirectory.childIds[frame.childIndex];
    if (childId == null) {
      stack.pop();
      continue;
    }
    frame.childIndex++;
    stack.push({
      childIndex: 0,
      nodeId: childId,
    });
  }
  return paths;
}
function ensureDirectoryPath(state, segments) {
  let createdNodeIds = [],
    currentDirectoryId = state.snapshot.rootId;
  for (let segment of segments) {
    let segmentNameId = internSegment(state.snapshot.segmentTable, segment),
      directory = getDirectory(state, currentDirectoryId),
      childId = ensureChildIdByNameId(state.snapshot.nodes, directory).get(
        segmentNameId,
      );
    if (childId !== undefined) {
      if (!isDirectory(getNode(state, childId)))
        throw Error(
          `Cannot create a directory that collides with an existing file: "${segment}"`,
        );
      currentDirectoryId = childId;
      continue;
    }
    currentDirectoryId = createDirectoryNode(
      state,
      currentDirectoryId,
      segmentNameId,
    );
    createdNodeIds.push(currentDirectoryId);
  }
  return {
    createdNodeIds: createdNodeIds,
    directoryId: currentDirectoryId,
  };
}
function createDirectoryNode(state, parentId, nameId) {
  let parentNode = getNode(state, parentId),
    newNodeId = state.snapshot.nodes.length;
  return (
    state.snapshot.nodes.push({
      depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0, 1),
      nameId: nameId,
      parentId: parentId,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    state.snapshot.directories.set(newNodeId, createChildBookkeeping()),
    linkChildIntoParent(state, parentId, newNodeId),
    state.collapseNewDirectoriesByDefault &&
      (state.collapsedDirectoryIds.add(newNodeId),
      (state.hasCollapsedDirectoryOverrides = true)),
    state.activeNodeCount++,
    newNodeId
  );
}
function createFileNode(state, parentId, name) {
  let nameId = internSegment(state.snapshot.segmentTable, name),
    directory = getDirectory(state, parentId);
  if (ensureChildIdByNameId(state.snapshot.nodes, directory).has(nameId))
    throw Error(
      `Path already exists: "${buildChildPath(state, parentId, name)}"`,
    );
  let parentNode = getNode(state, parentId),
    newNodeId = state.snapshot.nodes.length;
  return (
    state.snapshot.nodes.push({
      depthAndFlags: packDepthAndFlags(getDepth(parentNode) + 1, 0),
      nameId: nameId,
      parentId: parentId,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    linkChildIntoParent(state, parentId, newNodeId),
    state.activeNodeCount++,
    newNodeId
  );
}
function findChildInsertionIndex(state, parentDirectory, childId) {
  let low = 0,
    high = parentDirectory.childIds.length;
  for (; low < high; ) {
    let mid = (low + high) >>> 1,
      midChildId = parentDirectory.childIds[mid];
    if (midChildId == null) {
      high = mid;
      continue;
    }
    compareNodes(state, childId, midChildId) < 0
      ? (high = mid)
      : (low = mid + 1);
  }
  return low;
}
function linkChildIntoParent(state, parentId, childId) {
  let parentDirectory = getDirectory(state, parentId),
    childNode = getNode(state, childId);
  ensureChildIdByNameId(state.snapshot.nodes, parentDirectory).set(
    childNode.nameId,
    childId,
  );
  applyChildSubtreeCountDelta(
    parentDirectory,
    childId,
    childNode.subtreeNodeCount,
    childNode.visibleSubtreeCount,
  );
  let insertIndex = findChildInsertionIndex(state, parentDirectory, childId);
  parentDirectory.childIds.splice(insertIndex, 0, childId);
  reindexChildPositions(parentDirectory, insertIndex);
  rebuildChildVisibleChunkSums(state.snapshot.nodes, parentDirectory);
}
function unlinkChildFromParent(state, parentId, childId, childNameId) {
  let parentDirectory = getDirectory(state, parentId),
    positionById = ensureChildPositionById(parentDirectory),
    childIndex = positionById.get(childId) ?? -1;
  ensureChildIdByNameId(state.snapshot.nodes, parentDirectory).delete(
    childNameId,
  );
  positionById.delete(childId);
  let childNode = state.snapshot.nodes[childId];
  childNode != null &&
    applyChildSubtreeCountDelta(
      parentDirectory,
      childId,
      -childNode.subtreeNodeCount,
      -childNode.visibleSubtreeCount,
    );
  childIndex >= 0 &&
    (parentDirectory.childIds.splice(childIndex, 1),
    reindexChildPositions(parentDirectory, childIndex),
    rebuildChildVisibleChunkSums(state.snapshot.nodes, parentDirectory));
}
function compareNodes(state, nodeIdA, nodeIdB) {
  let sortOption = state.snapshot.options.sort;
  return sortOption === "default"
    ? compareNodesDefault(state, nodeIdA, nodeIdB)
    : sortOption(
        buildNodeSortInfo(state, nodeIdA),
        buildNodeSortInfo(state, nodeIdB),
      );
}
function compareNodesDefault(state, nodeIdA, nodeIdB) {
  let nodeA = getNode(state, nodeIdA),
    nodeB = getNode(state, nodeIdB),
    isDirectoryA = isDirectory(nodeA);
  if (isDirectoryA !== isDirectory(nodeB)) return isDirectoryA ? -1 : 1;
  let segmentCompare = compareSortKeys(
    getSortKeyById(state.snapshot.segmentTable, nodeA.nameId),
    getSortKeyById(state.snapshot.segmentTable, nodeB.nameId),
  );
  if (segmentCompare !== 0) return segmentCompare;
  let basenameA = getSegmentValue(state.snapshot.segmentTable, nodeA.nameId),
    basenameB = getSegmentValue(state.snapshot.segmentTable, nodeB.nameId);
  return basenameA === basenameB
    ? nodeIdA < nodeIdB
      ? -1
      : 1
    : basenameA < basenameB
      ? -1
      : 1;
}
function buildNodeSortInfo(state, nodeId) {
  let node = getNode(state, nodeId),
    path = buildNodePath(state, nodeId),
    _isDirectory = isDirectory(node),
    trimmedPath = _isDirectory ? path.slice(0, -1) : path;
  return {
    basename: getSegmentValue(state.snapshot.segmentTable, node.nameId),
    depth: getDepth(node),
    isDirectory: _isDirectory,
    path: path,
    segments: trimmedPath.length === 0 ? [] : trimmedPath.split("/"),
  };
}
function resolveMoveDestination(state, sourceNodeId, destinationPath) {
  let sourceNode = getNode(state, sourceNodeId),
    existingDestinationId = resolvePath(state, destinationPath);
  if (existingDestinationId != null) {
    let existingDestinationNode = getNode(state, existingDestinationId);
    if (isDirectory(existingDestinationNode))
      return {
        basename: getSegmentValue(
          state.snapshot.segmentTable,
          sourceNode.nameId,
        ),
        existingNodeId: null,
        parentId: existingDestinationId,
      };
    let destinationSegments = parseQueryPath(destinationPath).segments;
    return {
      basename: destinationSegments[destinationSegments.length - 1] ?? "",
      existingNodeId: existingDestinationId,
      parentId: existingDestinationNode.parentId,
    };
  }
  let parsedPath = parseQueryPath(destinationPath),
    basename = parsedPath.segments[parsedPath.segments.length - 1] ?? "",
    parentSegments = parsedPath.segments.slice(0, -1),
    parentId =
      parentSegments.length === 0
        ? state.snapshot.rootId
        : resolveSegmentsToNodeId(state, parentSegments, true);
  if (parentId == null)
    throw Error(`Destination parent does not exist: "${destinationPath}"`);
  return {
    basename: basename,
    existingNodeId: null,
    parentId: parentId,
  };
}
function resolveMoveCollision(state, nodeId, collisionStrategy, kind) {
  if (collisionStrategy === "skip") return "skip";
  if (collisionStrategy === "error")
    throw Error(
      `Destination already exists: "${buildNodePath(state, nodeId)}"`,
    );
  let node = getNode(state, nodeId);
  if (getIsDirBit(node) !== kind)
    throw Error(
      "replace collision requires the same source and destination kinds",
    );
  if (isDirectory(node) && getDirectory(state, nodeId).childIds.length > 0)
    throw Error("replace collision does not support non-empty directories");
  let parentId = node.parentId,
    nameId = node.nameId;
  return (
    removeSubtree(state, nodeId),
    unlinkChildFromParent(state, parentId, nodeId, nameId),
    collapseEmptyAncestors(state, parentId),
    recomputeCountsUpwardFrom(state, parentId),
    "handled"
  );
}
function removeSubtree(state, rootNodeId) {
  let removedNodeIds = [],
    stack = [
      {
        nodeId: rootNodeId,
        visitedChildren: false,
      },
    ];
  for (; stack.length > 0; ) {
    let frame = stack.pop();
    if (frame == null) break;
    let node = getNode(state, frame.nodeId);
    if (frame.visitedChildren || !isDirectory(node)) {
      isDirectory(node) && state.snapshot.directories.delete(frame.nodeId);
      setFlags(node, 4);
      state.pathCacheByNodeId.delete(frame.nodeId);
      state.collapsedDirectoryIds.delete(frame.nodeId) &&
        (state.hasCollapsedDirectoryOverrides =
          state.collapsedDirectoryIds.size > 0);
      state.expandedDirectoryIds.delete(frame.nodeId);
      deleteDirectoryLoadInfo(state, frame.nodeId);
      state.activeNodeCount--;
      removedNodeIds.push(frame.nodeId);
      continue;
    }
    stack.push({
      nodeId: frame.nodeId,
      visitedChildren: true,
    });
    let childBookkeeping = getDirectory(state, frame.nodeId);
    for (
      let index = childBookkeeping.childIds.length - 1;
      index >= 0;
      index--
    ) {
      let childId = childBookkeeping.childIds[index];
      childId != null &&
        stack.push({
          nodeId: childId,
          visitedChildren: false,
        });
    }
  }
  return removedNodeIds;
}
function collapseEmptyAncestors(state, startNodeId) {
  let currentNodeId = startNodeId;
  for (; currentNodeId != null; ) {
    let node = getNode(state, currentNodeId);
    if (
      !isDirectory(node) ||
      hasFlag(node, 2) ||
      getDirectory(state, currentNodeId).childIds.length > 0
    )
      return;
    setFlags(node, 1);
    currentNodeId = node.parentId === currentNodeId ? null : node.parentId;
  }
}
function resolveNodeIdByPath(state, segments) {
  let currentNodeId = state.snapshot.rootId;
  for (let segment of segments) {
    let segmentId = state.snapshot.segmentTable.idByValue.get(segment);
    if (segmentId == null) break;
    let childId = ensureChildIdByNameId(
      state.snapshot.nodes,
      getDirectory(state, currentNodeId),
    ).get(segmentId);
    if (childId == null || !isDirectory(getNode(state, childId))) break;
    currentNodeId = childId;
  }
  return currentNodeId;
}
function serializePathInfo(state, nodeId) {
  let anchorNodeId = findFlattenAnchorNodeId(state, nodeId);
  if (anchorNodeId == null) return null;
  let targetNodeId = findFlattenedLeaf(state, anchorNodeId),
    targetNode = getNode(state, targetNodeId),
    flattenedSegmentPaths =
      anchorNodeId === targetNodeId
        ? null
        : collectFlattenChain(state, anchorNodeId).map((item) =>
            buildNodePath(state, item),
          );
  return JSON.stringify({
    flattenedSegmentPaths: flattenedSegmentPaths,
    hasChildren: getDirectory(state, targetNodeId).childIds.length > 0,
    path: buildNodePath(state, targetNodeId),
    terminalKind: getIsDirBit(targetNode),
  });
}
function valuesDiffer(leftId, rightId) {
  return idArraysDiffer([leftId], [rightId]);
}
function idArraysDiffer(leftIds, rightIds) {
  for (let index = 0; index < leftIds.length; index += 1) {
    let leftId = leftIds[index],
      rightId = rightIds[index];
    if (leftId == null || rightId == null || leftId !== rightId) return true;
  }
  return false;
}
function findFlattenAnchorNodeId(state, nodeId) {
  let currentNodeId = nodeId;
  for (; currentNodeId != null; ) {
    let node = getNode(state, currentNodeId);
    if (!isDirectory(node) || hasFlag(node, 2)) return null;
    if (!isDirectoryExpanded(state, currentNodeId, node)) return currentNodeId;
    currentNodeId = node.parentId;
  }
  return null;
}
function recomputeSubtreeDepths(state, nodeId) {
  let node = getNode(state, nodeId);
  if (
    (setDepth(
      node,
      (nodeId === state.snapshot.rootId
        ? -1
        : getDepth(getNode(state, node.parentId))) + 1,
    ),
    !isDirectory(node))
  )
    return;
  let childBookkeeping = getDirectory(state, nodeId);
  for (let childId of childBookkeeping.childIds)
    recomputeSubtreeDepths(state, childId);
}
function isAncestorOf(state, ancestorId, nodeId) {
  let currentNodeId = nodeId;
  for (; currentNodeId != null; ) {
    if (currentNodeId === ancestorId) return true;
    let node = getNode(state, currentNodeId);
    if (currentNodeId === state.snapshot.rootId) return false;
    currentNodeId = node.parentId;
  }
  return false;
}
function recomputeNodeCounts(
  state,
  nodeId,
  node = getNode(state, nodeId),
  rebuildChildAggregates = false,
) {
  let instrumentation = state.instrumentation;
  if (instrumentation == null) {
    recomputeNodeCountsImpl(state, nodeId, node, rebuildChildAggregates);
    return;
  }
  measurePhase(instrumentation, "store.recomputeNodeCounts", () =>
    recomputeNodeCountsImpl(state, nodeId, node, rebuildChildAggregates),
  );
}
function recomputeAncestorCounts(state, startNodeId) {
  let currentNodeId = startNodeId;
  for (; currentNodeId != null; ) {
    let node = getNode(state, currentNodeId),
      prevSubtreeNodeCount = node.subtreeNodeCount,
      prevVisibleSubtreeCount = node.visibleSubtreeCount;
    if (
      (recomputeNodeCounts(state, currentNodeId, node),
      currentNodeId === state.snapshot.rootId)
    )
      return;
    let subtreeNodeCountDelta = node.subtreeNodeCount - prevSubtreeNodeCount,
      visibleSubtreeCountDelta =
        node.visibleSubtreeCount - prevVisibleSubtreeCount,
      parentId = node.parentId;
    (subtreeNodeCountDelta !== 0 || visibleSubtreeCountDelta !== 0) &&
      applyChildSubtreeCountDelta(
        getDirectory(state, parentId),
        currentNodeId,
        subtreeNodeCountDelta,
        visibleSubtreeCountDelta,
      );
    currentNodeId = parentId;
  }
}
function recomputeNodeCountsImpl(state, nodeId, node, rebuildChildAggregates) {
  if (!isDirectory(node)) {
    node.subtreeNodeCount = 1;
    node.visibleSubtreeCount = 1;
    return;
  }
  let childBookkeeping = getDirectory(state, nodeId);
  if (rebuildChildAggregates) {
    let instrumentation = state.instrumentation;
    instrumentation == null
      ? recomputeChildSubtreeCounts(state.snapshot.nodes, childBookkeeping)
      : measurePhase(
          instrumentation,
          "store.recomputeNodeCounts.rebuildChildAggregates",
          () =>
            recomputeChildSubtreeCounts(state.snapshot.nodes, childBookkeeping),
        );
  }
  let subtreeNodeCount = 1 + childBookkeeping.totalChildSubtreeNodeCount,
    visibleSubtreeCount = childBookkeeping.totalChildVisibleSubtreeCount;
  if (((node.subtreeNodeCount = subtreeNodeCount), hasFlag(node, 2))) {
    node.visibleSubtreeCount = visibleSubtreeCount;
    return;
  }
  node.visibleSubtreeCount =
    getCollapsibleChildId(state, nodeId) == null
      ? isDirectoryExpanded(state, nodeId, node)
        ? 1 + visibleSubtreeCount
        : 1
      : visibleSubtreeCount;
}
function buildChildPath(state, nodeId, suffix) {
  let basePath = buildNodePath(state, nodeId);
  return basePath.length === 0 ? suffix : `${basePath}${suffix}`;
}
function isLiveNode(node) {
  return node != null && !hasFlag(node, 4);
}
function getLiveDirectoryNode(state, nodeId) {
  let node = state.snapshot.nodes[nodeId];
  return !isLiveNode(node) || !isDirectory(node) || hasFlag(node, 2)
    ? null
    : node;
}
function countCachedPathEntries(state) {
  let count = 0;
  for (let [nodeId, cacheEntry] of state.pathCacheByNodeId)
    cacheEntry.version === state.pathCacheVersion &&
      isLiveNode(state.snapshot.nodes[nodeId]) &&
      (count += 1);
  return count;
}
function getSegmentCount(segmentTable) {
  return Math.max(0, segmentTable.valueById.length - 1);
}
function captureStoreMetrics(state) {
  return {
    activeNodeCount: state.activeNodeCount,
    cachedPathEntryCount: countCachedPathEntries(state),
    loadInfoEntryCount: state.directoryLoadInfoById.size,
    segmentCount: getSegmentCount(state.snapshot.segmentTable),
    totalNodeSlotCount: Math.max(0, state.snapshot.nodes.length - 1),
  };
}
function buildCleanupReport(mode, idsPreserved, beforeMetrics, afterMetrics) {
  return {
    activeNodeCountAfter: afterMetrics.activeNodeCount,
    activeNodeCountBefore: beforeMetrics.activeNodeCount,
    cachedPathEntryCountAfter: afterMetrics.cachedPathEntryCount,
    cachedPathEntryCountBefore: beforeMetrics.cachedPathEntryCount,
    idsPreserved: idsPreserved,
    loadInfoEntryCountAfter: afterMetrics.loadInfoEntryCount,
    loadInfoEntryCountBefore: beforeMetrics.loadInfoEntryCount,
    mode: mode,
    reclaimedCachedPathEntryCount:
      beforeMetrics.cachedPathEntryCount - afterMetrics.cachedPathEntryCount,
    reclaimedLoadInfoEntryCount:
      beforeMetrics.loadInfoEntryCount - afterMetrics.loadInfoEntryCount,
    reclaimedNodeSlotCount:
      beforeMetrics.totalNodeSlotCount - afterMetrics.totalNodeSlotCount,
    reclaimedSegmentCount:
      beforeMetrics.segmentCount - afterMetrics.segmentCount,
    segmentCountAfter: afterMetrics.segmentCount,
    segmentCountBefore: beforeMetrics.segmentCount,
    totalNodeSlotCountAfter: afterMetrics.totalNodeSlotCount,
    totalNodeSlotCountBefore: beforeMetrics.totalNodeSlotCount,
  };
}
function collectExpansionPaths(state) {
  let collapsedPaths = [],
    expandedPaths = [];
  for (let collapsedDirectoryId of state.collapsedDirectoryIds)
    getLiveDirectoryNode(state, collapsedDirectoryId) != null &&
      collapsedPaths.push(buildNodePath(state, collapsedDirectoryId));
  for (let expandedDirectoryId of state.expandedDirectoryIds)
    getLiveDirectoryNode(state, expandedDirectoryId) != null &&
      expandedPaths.push(buildNodePath(state, expandedDirectoryId));
  return {
    collapsedPaths: collapsedPaths,
    expandedPaths: expandedPaths,
  };
}
function collectDirectoryLoadInfo(state) {
  let loadInfoEntries = [];
  for (let [directoryId, loadInfo] of state.directoryLoadInfoById)
    getLiveDirectoryNode(state, directoryId) == null ||
      getDirectoryLoadState(state, directoryId) === "loaded" ||
      loadInfoEntries.push({
        info: {
          activeAttemptId: null,
          errorMessage: loadInfo.errorMessage,
          nextAttemptId: loadInfo.nextAttemptId,
          state: loadInfo.state,
        },
        path: buildNodePath(state, directoryId),
      });
  return loadInfoEntries;
}
function restoreExpansionOverrides(state, overrides) {
  state.collapsedDirectoryIds.clear();
  state.hasCollapsedDirectoryOverrides = false;
  state.expandedDirectoryIds.clear();
  for (let path of overrides.expandedPaths) {
    let nodeId = resolvePath(state, path);
    nodeId != null &&
      setDirectoryExpanded(state, nodeId, true, getNode(state, nodeId));
  }
  for (let path of overrides.collapsedPaths) {
    let nodeId = resolvePath(state, path);
    nodeId != null &&
      setDirectoryExpanded(state, nodeId, false, getNode(state, nodeId));
  }
}
function restoreDirectoryLoadInfos(state, loadInfos) {
  state.directoryLoadInfoById.clear();
  for (let loadInfo of loadInfos) {
    let nodeId = resolvePath(state, loadInfo.path);
    nodeId != null &&
      getLiveDirectoryNode(state, nodeId) != null &&
      state.directoryLoadInfoById.set(nodeId, {
        activeAttemptId: null,
        errorMessage: loadInfo.info.errorMessage,
        nextAttemptId: loadInfo.info.nextAttemptId,
        state: loadInfo.info.state,
      });
  }
}
function clearPathCaches(state) {
  state.pathCacheVersion += 1;
  state.pathCacheByNodeId.clear();
  state.pathCacheByNodeId.set(state.snapshot.rootId, {
    path: "",
    version: state.pathCacheVersion,
  });
}
function rebuildSegmentTable(state) {
  let oldSegmentTable = state.snapshot.segmentTable,
    segmentTable = createSegmentTable();
  for (let node of state.snapshot.nodes)
    if (isLiveNode(node)) {
      if (hasFlag(node, 2)) {
        node.nameId = 0;
        continue;
      }
      node.nameId = internSegment(
        segmentTable,
        getSegmentValue(oldSegmentTable, node.nameId),
      );
    }
  state.snapshot.segmentTable = segmentTable;
}
function rebuildDirectoryIndexes(state) {
  for (let [directoryId, directory] of state.snapshot.directories) {
    let node = state.snapshot.nodes[directoryId];
    if (!isLiveNode(node) || !isDirectory(node)) {
      state.snapshot.directories.delete(directoryId);
      continue;
    }
    let liveChildIds = directory.childIds.filter((item) => {
      let childNode = state.snapshot.nodes[item];
      return isLiveNode(childNode) && childNode.parentId === directoryId;
    });
    directory.childIds = liveChildIds;
    directory.childIdByNameId = new Map(
      liveChildIds.map((item) => [getNode(state, item).nameId, item]),
    );
    directory.childPositionById = new Map(
      liveChildIds.map((item, index) => [item, index]),
    );
    recomputeChildSubtreeCounts(state.snapshot.nodes, directory);
  }
}
function trimTrailingRemovedNodeSlots(state) {
  let index = state.snapshot.nodes.length - 1;
  for (; index > state.snapshot.rootId; ) {
    let node = state.snapshot.nodes[index];
    if (isLiveNode(node)) break;
    --index;
  }
  state.snapshot.nodes.length = index + 1;
}
function runStableCleanup(state) {
  let expansionOverrides = collectExpansionPaths(state),
    directoryLoadInfos = collectDirectoryLoadInfo(state);
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.clearPathCaches",
    () => clearPathCaches(state),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.rebuildSegmentTable",
    () => rebuildSegmentTable(state),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.rebuildDirectoryIndexes",
    () => rebuildDirectoryIndexes(state),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.trimTrailingRemovedNodeSlots",
    () => trimTrailingRemovedNodeSlots(state),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.restoreExpansionOverrides",
    () => restoreExpansionOverrides(state, expansionOverrides),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.restoreDirectoryLoadInfos",
    () => restoreDirectoryLoadInfos(state, directoryLoadInfos),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.stable.recomputeCounts",
    () => recomputeSubtreeCounts(state, state.snapshot.rootId),
  );
}
function runAggressiveCleanup(state) {
  let expansionOverrides = collectExpansionPaths(state),
    directoryLoadInfos = collectDirectoryLoadInfo(state),
    paths = measurePhase(
      state.instrumentation,
      "store.cleanup.aggressive.listPaths",
      () => getVisibleChildren(state),
    ),
    builderOptions = attachInstrumentation(
      {
        ...state.snapshot.options,
      },
      state.instrumentation,
    ),
    snapshot = measurePhase(
      state.instrumentation,
      "store.cleanup.aggressive.rebuildSnapshot",
      () => {
        let builder = new PathTreeBuilder(builderOptions);
        return (builder.appendPaths(paths), builder.finish());
      },
    );
  state.snapshot = snapshot;
  state.activeNodeCount = snapshot.nodes.length - 1;
  state.pathCacheByNodeId = new Map([
    [
      snapshot.rootId,
      {
        path: "",
        version: 0,
      },
    ],
  ]);
  state.pathCacheVersion = 0;
  measurePhase(
    state.instrumentation,
    "store.cleanup.aggressive.restoreExpansionOverrides",
    () => restoreExpansionOverrides(state, expansionOverrides),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.aggressive.restoreDirectoryLoadInfos",
    () => restoreDirectoryLoadInfos(state, directoryLoadInfos),
  );
  measurePhase(
    state.instrumentation,
    "store.cleanup.aggressive.recomputeCounts",
    () => recomputeSubtreeCounts(state, state.snapshot.rootId),
  );
}
function hasActiveDirectoryLoad(state) {
  for (let loadInfo of state.directoryLoadInfoById.values())
    if (loadInfo.state === "loading" && loadInfo.activeAttemptId != null)
      return true;
  return false;
}
function runCleanup(state, mode) {
  let statsBefore = captureStoreMetrics(state);
  mode === "stable"
    ? measurePhase(state.instrumentation, "store.cleanup.stable", () =>
        runStableCleanup(state),
      )
    : measurePhase(state.instrumentation, "store.cleanup.aggressive", () =>
        runAggressiveCleanup(state),
      );
  let statsAfter = captureStoreMetrics(state);
  return buildCleanupReport(mode, mode === "stable", statsBefore, statsAfter);
}
function ensureInt32ArrayCapacity(array, count) {
  let requiredLength = count + 2;
  if (requiredLength <= array.length) return array;
  let newLength = array.length;
  for (; newLength < requiredLength; ) newLength *= 2;
  let grownArray = new Int32Array(newLength);
  return (grownArray.fill(-1), grownArray.set(array), grownArray);
}
function getVisibleCount(state) {
  return getNode(state, state.snapshot.rootId).visibleSubtreeCount;
}
function computeSubtreeEndIndex(state, cursor, index, count) {
  let terminalNode = getNode(state, cursor.terminalNodeId),
    visibleSubtreeCount = Math.max(1, terminalNode.visibleSubtreeCount);
  return Math.min(count - 1, index + visibleSubtreeCount - 1);
}
function buildVisibleRowContext(state, entry, visibleCount, ancestorPaths) {
  return {
    ancestorPaths: ancestorPaths,
    index: entry.index,
    posInSet: entry.posInSet,
    row: buildVisibleRowInfo(state, entry.cursor),
    setSize: entry.setSize,
    subtreeEndIndex: computeSubtreeEndIndex(
      state,
      entry.cursor,
      entry.index,
      visibleCount,
    ),
  };
}
function descendToVisibleChild(
  state,
  nodeId,
  visibleIndex,
  index,
  visibleDepth,
  ancestors,
) {
  let parentNode = getDirectory(state, nodeId),
    { childIndex, childVisibleIndex, localVisibleIndex } =
      findChildByVisibleIndex(state.snapshot.nodes, parentNode, visibleIndex),
    childId = parentNode.childIds[childIndex];
  if (childId == null)
    throw Error(`Visible index ${String(visibleIndex)} is out of range`);
  return resolveVisibleCursor(
    state,
    childId,
    localVisibleIndex,
    index + childVisibleIndex,
    visibleDepth + 1,
    childIndex,
    parentNode.childIds.length,
    ancestors,
  );
}
function resolveVisibleCursor(
  state,
  nodeId,
  visibleIndex,
  index,
  visibleDepth,
  posInSet,
  setSize,
  ancestors,
) {
  if (!isDirectory(getNode(state, nodeId))) {
    if (visibleIndex === 0)
      return {
        ancestors: ancestors,
        cursor: {
          headNodeId: nodeId,
          terminalNodeId: nodeId,
          visibleDepth: visibleDepth,
        },
        index: index,
        posInSet: posInSet,
        setSize: setSize,
      };
    throw Error(
      `Visible index ${String(visibleIndex)} is out of range for file`,
    );
  }
  let cursor = flattenDirectoryChain(state, nodeId, visibleDepth);
  if (visibleIndex === 0)
    return {
      ancestors: ancestors,
      cursor: cursor,
      index: index,
      posInSet: posInSet,
      setSize: setSize,
    };
  let terminalNode = getNode(state, cursor.terminalNodeId);
  if (
    !isDirectory(terminalNode) ||
    !isDirectoryExpanded(state, cursor.terminalNodeId, terminalNode)
  )
    throw Error(
      `Visible index ${String(visibleIndex)} is out of range for collapsed directory`,
    );
  return descendToVisibleChild(
    state,
    cursor.terminalNodeId,
    visibleIndex - 1,
    index + 1,
    cursor.visibleDepth,
    [
      ...ancestors,
      {
        cursor: cursor,
        index: index,
        posInSet: posInSet,
        setSize: setSize,
      },
    ],
  );
}
function getVisibleRowContext(state, visibleIndex) {
  let visibleCount = getVisibleCount(state);
  if (visibleIndex < 0 || visibleIndex >= visibleCount) return null;
  let context = descendToVisibleChild(
      state,
      state.snapshot.rootId,
      visibleIndex,
      0,
      -1,
      [],
    ),
    ancestorPaths = context.ancestors.map((item) =>
      buildNodePath(state, item.cursor.terminalNodeId),
    ),
    cachedAncestorRows = null;
  return {
    ancestorPaths: ancestorPaths,
    get ancestorRows() {
      if (cachedAncestorRows != null) return cachedAncestorRows;
      let ancestorRows = [],
        ancestorRowPaths = [];
      for (let ancestorEntry of context.ancestors) {
        let rowContext = buildVisibleRowContext(
          state,
          ancestorEntry,
          visibleCount,
          [...ancestorRowPaths],
        );
        ancestorRows.push(rowContext);
        ancestorRowPaths.push(rowContext.row.path);
      }
      return ((cachedAncestorRows = ancestorRows), cachedAncestorRows);
    },
    index: context.index,
    posInSet: context.posInSet,
    row: buildVisibleRowInfo(state, context.cursor),
    setSize: context.setSize,
    subtreeEndIndex: computeSubtreeEndIndex(
      state,
      context.cursor,
      context.index,
      visibleCount,
    ),
  };
}
function getVisibleSlice(state, startIndex, endIndex) {
  let instrumentation = state.instrumentation,
    visibleCount = getVisibleCount(state);
  if (visibleCount <= 0 || endIndex < startIndex) return [];
  let clampedStart = Math.max(0, Math.min(startIndex, visibleCount - 1)),
    clampedEnd = Math.max(clampedStart, Math.min(endIndex, visibleCount - 1));
  if (instrumentation == null) {
    if (clampedStart === 0) return collectVisibleRows(state, clampedEnd + 1);
    let _rows = [],
      _cursor = resolveVisibleRow(state, clampedStart);
    for (
      let index = clampedStart;
      index <= clampedEnd && _cursor != null;
      index++
    ) {
      let row = buildVisibleRowInfo(state, _cursor);
      _rows.push(row);
      _cursor = advanceToNextVisibleRow(state, _cursor);
    }
    return _rows;
  }
  let rows = [],
    flattenedRowCount = 0,
    flattenedSegmentCount = 0,
    cursor = measurePhase(
      instrumentation,
      "store.getVisibleSlice.selectFirstRow",
      () => resolveVisibleRow(state, clampedStart),
    );
  for (
    let index = clampedStart;
    index <= clampedEnd && cursor != null;
    index++
  ) {
    let row = measurePhase(
      instrumentation,
      "store.getVisibleSlice.materializeRow",
      () => buildVisibleRowInfo(state, cursor),
    );
    rows.push(row);
    row.isFlattened &&
      (flattenedRowCount++,
      (flattenedSegmentCount += row.flattenedSegments?.length ?? 0));
    cursor = measurePhase(
      instrumentation,
      "store.getVisibleSlice.advanceCursor",
      () => advanceToNextVisibleRow(state, cursor),
    );
  }
  return (
    setCounter(instrumentation, "workload.visibleRowsRead", rows.length),
    setCounter(
      instrumentation,
      "workload.flattenedRowsRead",
      flattenedRowCount,
    ),
    setCounter(
      instrumentation,
      "workload.flattenedSegmentsRead",
      flattenedSegmentCount,
    ),
    rows
  );
}
function projectVisibleTree(state, visibleCount = getVisibleCount(state)) {
  let instrumentation = state.instrumentation;
  return instrumentation == null
    ? collectVisiblePaths(state, visibleCount)
    : measurePhase(instrumentation, "store.getVisibleTreeProjection", () =>
        collectVisiblePaths(state, visibleCount),
      );
}
function buildVisibleTreeProjection(state) {
  return buildTreeProjectionRows(projectVisibleTree(state));
}
function computeVisibleIndex(state, path) {
  let nodeId = resolvePath(state, path);
  if (
    nodeId == null ||
    nodeId === state.snapshot.rootId ||
    (isDirectory(getNode(state, nodeId)) &&
      findFlattenedLeaf(state, nodeId) !== nodeId)
  )
    return null;
  let visibleIndex = 0,
    currentNodeId = nodeId,
    { nodes, rootId } = state.snapshot;
  for (; currentNodeId !== rootId; ) {
    let parentId = getNode(state, currentNodeId).parentId,
      parentDirectory = getDirectory(state, parentId),
      childIndex = ensureChildPositionById(parentDirectory).get(currentNodeId);
    if (childIndex == null)
      throw Error(
        `Child ${String(currentNodeId)} was not found in its parent index`,
      );
    if (
      ((visibleIndex += sumVisibleBeforeChildIndex(
        nodes,
        parentDirectory,
        childIndex,
      )),
      parentId !== rootId)
    ) {
      let parentNode = getNode(state, parentId),
        firstVisibleChildId = getCollapsibleChildId(state, parentId);
      if (
        !isDirectoryExpanded(state, parentId, parentNode) &&
        firstVisibleChildId !== currentNodeId
      )
        return null;
      findFlattenedLeaf(state, parentId) === parentId && (visibleIndex += 1);
    }
    currentNodeId = parentId;
  }
  return visibleIndex;
}
function expandPath(state, path) {
  let nodeId = resolvePath(state, path);
  if (nodeId == null) throw Error(`Path does not exist: "${path}"`);
  let node = getNode(state, nodeId);
  if (!isDirectory(node)) throw Error(`Path is not a directory: "${path}"`);
  return isDirectoryExpanded(state, nodeId, node)
    ? null
    : (setDirectoryExpanded(state, nodeId, true, node),
      recomputeCountsUpwardFrom(state, nodeId),
      createExpandEvent({
        affectedAncestorIds: collectAncestorIds(state, nodeId),
        affectedNodeIds: [nodeId],
        path: path,
        projectionChanged: true,
      }));
}
function collapsePath(state, path) {
  let nodeId = resolvePath(state, path);
  if (nodeId == null) throw Error(`Path does not exist: "${path}"`);
  let node = getNode(state, nodeId);
  if (!isDirectory(node)) throw Error(`Path is not a directory: "${path}"`);
  return isDirectoryExpanded(state, nodeId, node)
    ? (setDirectoryExpanded(state, nodeId, false, node),
      recomputeCountsUpwardFrom(state, nodeId),
      createCollapseEvent({
        affectedAncestorIds: collectAncestorIds(state, nodeId),
        affectedNodeIds: [nodeId],
        path: path,
        projectionChanged: true,
      }))
    : null;
}
function resolveVisibleRow(state, visibleIndex) {
  return visibleIndex < 0 || visibleIndex >= getVisibleCount(state)
    ? null
    : descendToVisibleRow(state, state.snapshot.rootId, visibleIndex, -1);
}
function descendToVisibleRow(state, nodeId, visibleIndex, depth) {
  let directoryNode = getDirectory(state, nodeId),
    instrumentation = state.instrumentation,
    { childIndex, localVisibleIndex } =
      instrumentation == null
        ? findChildByVisibleIndex(
            state.snapshot.nodes,
            directoryNode,
            visibleIndex,
          )
        : measurePhase(
            instrumentation,
            "store.getVisibleSlice.selectChildIndex",
            () =>
              findChildByVisibleIndex(
                state.snapshot.nodes,
                directoryNode,
                visibleIndex,
              ),
          ),
    childId = directoryNode.childIds[childIndex];
  if (childId != null)
    return flattenToVisibleRow(state, childId, localVisibleIndex, depth + 1);
  throw Error(`Visible index ${String(visibleIndex)} is out of range`);
}
function flattenToVisibleRow(state, nodeId, visibleIndex, depth) {
  if (!isDirectory(getNode(state, nodeId))) {
    if (visibleIndex === 0)
      return {
        headNodeId: nodeId,
        terminalNodeId: nodeId,
        visibleDepth: depth,
      };
    throw Error(
      `Visible index ${String(visibleIndex)} is out of range for file`,
    );
  }
  let flattenedRow = flattenDirectoryChain(state, nodeId, depth);
  if (visibleIndex === 0) return flattenedRow;
  let terminalNode = getNode(state, flattenedRow.terminalNodeId);
  if (
    !isDirectory(terminalNode) ||
    !isDirectoryExpanded(state, flattenedRow.terminalNodeId, terminalNode)
  )
    throw Error(
      `Visible index ${String(visibleIndex)} is out of range for collapsed directory`,
    );
  return descendToVisibleRow(
    state,
    flattenedRow.terminalNodeId,
    visibleIndex - 1,
    flattenedRow.visibleDepth,
  );
}
function flattenDirectoryChain(state, headNodeId, depth) {
  return isDirectory(getNode(state, headNodeId))
    ? state.instrumentation == null
      ? {
          headNodeId: headNodeId,
          terminalNodeId: findFlattenedLeaf(state, headNodeId),
          visibleDepth: depth,
        }
      : {
          headNodeId: headNodeId,
          terminalNodeId: measurePhase(
            state.instrumentation,
            "store.getVisibleSlice.flatten.resolveTerminalDirectory",
            () => findFlattenedLeaf(state, headNodeId),
          ),
          visibleDepth: depth,
        }
    : {
        headNodeId: headNodeId,
        terminalNodeId: headNodeId,
        visibleDepth: depth,
      };
}
function isLastVisibleChild(state, nodeId) {
  let node = getNode(state, nodeId);
  if (!isDirectory(node)) return true;
  let parentId = node.parentId;
  return parentId === state.snapshot.rootId
    ? true
    : getCollapsibleChildId(state, parentId) !== nodeId;
}
function advanceToNextVisibleRow(state, row) {
  let terminalNode = getNode(state, row.terminalNodeId);
  if (isDirectory(terminalNode)) {
    let directoryNode = getDirectory(state, row.terminalNodeId);
    if (
      isDirectoryExpanded(state, row.terminalNodeId, terminalNode) &&
      directoryNode.childIds.length > 0
    ) {
      let firstChildId = directoryNode.childIds[0];
      return firstChildId == null
        ? null
        : flattenToVisibleRow(state, firstChildId, 0, row.visibleDepth + 1);
    }
  }
  let currentNodeId = row.terminalNodeId,
    currentDepth = row.visibleDepth;
  for (;;) {
    let currentNode = getNode(state, currentNodeId);
    if (currentNodeId === state.snapshot.rootId) return null;
    let parentId = currentNode.parentId,
      parentDirectory = getDirectory(state, parentId),
      childIndex =
        ensureChildPositionById(parentDirectory).get(currentNodeId) ?? -1;
    if (childIndex < 0)
      throw Error(
        `Child ${String(currentNodeId)} was not found in its parent index`,
      );
    let nextSiblingId = parentDirectory.childIds[childIndex + 1] ?? null;
    if (nextSiblingId != null)
      return flattenToVisibleRow(state, nextSiblingId, 0, currentDepth);
    isLastVisibleChild(state, currentNodeId) && currentDepth--;
    currentNodeId = parentId;
  }
}
function buildTreeProjectionRows(projection) {
  let count = projection.paths.length,
    rows = Array(count);
  for (let index = 0; index < count; index += 1) {
    let parentIndex = projection.getParentIndex(index);
    rows[index] = {
      index: index,
      parentPath:
        parentIndex >= 0 ? (projection.paths[parentIndex] ?? null) : null,
      path: projection.paths[index] ?? "",
      posInSet: projection.posInSetByIndex[index] ?? 0,
      setSize: projection.setSizeByIndex[index] ?? 0,
    };
  }
  return {
    getParentIndex: projection.getParentIndex,
    rows: rows,
    get visibleIndexByPath() {
      return projection.visibleIndexByPath;
    },
  };
}
function collectVisiblePaths(state, count) {
  let paths = Array(count),
    parentIndices = new Int32Array(count),
    posInSets = new Int32Array(count),
    setSizes = new Int32Array(count),
    depthStack = new Int32Array(64);
  depthStack.fill(-1);
  let rowCount = 0,
    { nodes, directories, segmentTable } = state.snapshot,
    stack = [[directories.get(state.snapshot.rootId), 0, -1, ""]],
    flattenEmptyDirectories = state.snapshot.options.flattenEmptyDirectories,
    pathCache = state.pathCacheByNodeId,
    pathCacheVersion = state.pathCacheVersion,
    nameValues = segmentTable.valueById;
  for (; stack.length > 0 && rowCount < count; ) {
    let frame = stack[stack.length - 1],
      frameNode = frame[0];
    if (frame[1] >= frameNode.childIds.length) {
      stack.pop();
      continue;
    }
    let childIndex = frame[1],
      childId = frameNode.childIds[frame[1]++],
      childNode = nodes[childId],
      depth = frame[2] + 1,
      parentPath = frame[3];
    depthStack = ensureInt32ArrayCapacity(depthStack, depth);
    let path,
      terminalNodeId = childId;
    if (isDirectory(childNode)) {
      terminalNodeId = flattenEmptyDirectories
        ? findFlattenedLeaf(state, childId)
        : childId;
      path =
        terminalNodeId === childId
          ? `${parentPath}${nameValues[childNode.nameId]}/`
          : buildNodePath(state, terminalNodeId);
    } else {
      let cachedPath = pathCache.get(childId);
      path =
        cachedPath != null && cachedPath.version === pathCacheVersion
          ? cachedPath.path
          : `${parentPath}${nameValues[childNode.nameId]}`;
    }
    parentIndices[rowCount] = depthStack[depth];
    paths[rowCount] = path;
    posInSets[rowCount] = childIndex;
    setSizes[rowCount] = frameNode.childIds.length;
    depthStack[depth + 1] = rowCount;
    rowCount += 1;
    let terminalNode = nodes[terminalNodeId];
    terminalNode != null &&
      isDirectory(terminalNode) &&
      isDirectoryExpanded(state, terminalNodeId, terminalNode) &&
      stack.push([directories.get(terminalNodeId), 0, depth, path]);
  }
  rowCount < count && (paths.length = rowCount);
  let visibleParentIndices = parentIndices.subarray(0, rowCount),
    visiblePosInSets = posInSets.subarray(0, rowCount),
    visibleSetSizes = setSizes.subarray(0, rowCount),
    visibleIndexByPath = null;
  return {
    getParentIndex(index) {
      return index < 0 || index >= rowCount
        ? -1
        : (visibleParentIndices[index] ?? -1);
    },
    paths: paths,
    posInSetByIndex: visiblePosInSets,
    setSizeByIndex: visibleSetSizes,
    get visibleIndexByPath() {
      if (visibleIndexByPath == null) {
        visibleIndexByPath = new Map();
        for (let index = 0; index < rowCount; index += 1)
          visibleIndexByPath.set(paths[index] ?? "", index);
      }
      return visibleIndexByPath;
    },
  };
}
function collectVisibleRows(state, count) {
  let rows = Array(count),
    rowCount = 0,
    { nodes, directories, segmentTable } = state.snapshot,
    stack = [[directories.get(state.snapshot.rootId), 0, -1]],
    nameValues = segmentTable.valueById,
    flattenEmptyDirectories = state.snapshot.options.flattenEmptyDirectories,
    pathCache = state.pathCacheByNodeId,
    pathCacheVersion = state.pathCacheVersion;
  for (; stack.length > 0 && rowCount < count; ) {
    let frame = stack[stack.length - 1],
      frameNode = frame[0];
    if (frame[1] >= frameNode.childIds.length) {
      stack.pop();
      continue;
    }
    let childId = frameNode.childIds[frame[1]++],
      childNode = nodes[childId],
      depth = frame[2] + 1;
    if (!isDirectory(childNode)) {
      let cachedPath = pathCache.get(childId);
      rows[rowCount++] = {
        depth: depth,
        flattenedSegments: undefined,
        hasChildren: false,
        id: childId,
        isExpanded: false,
        isFlattened: false,
        isLoading: false,
        kind: "file",
        loadState: undefined,
        name: nameValues[childNode.nameId],
        path:
          cachedPath != null && cachedPath.version === pathCacheVersion
            ? cachedPath.path
            : buildNodePath(state, childId),
      };
      continue;
    }
    let terminalNodeId = flattenEmptyDirectories
        ? findFlattenedLeaf(state, childId)
        : childId,
      row = {
        headNodeId: childId,
        terminalNodeId: terminalNodeId,
        visibleDepth: depth,
      };
    rows[rowCount++] = buildVisibleRowInfo(state, row);
    let terminalNode = nodes[terminalNodeId];
    terminalNode != null &&
      isDirectory(terminalNode) &&
      isDirectoryExpanded(state, terminalNodeId, terminalNode) &&
      stack.push([directories.get(terminalNodeId), 0, depth]);
  }
  return (rowCount < count && (rows.length = rowCount), rows);
}
function buildVisibleRowInfo(state, row) {
  let terminalNode = getNode(state, row.terminalNodeId),
    loadState = isDirectory(terminalNode)
      ? aggregateDirectoryLoadState(state, row)
      : null,
    path = buildNodePath(state, row.terminalNodeId),
    name = getSegmentValue(state.snapshot.segmentTable, terminalNode.nameId),
    hasChildren =
      isDirectory(terminalNode) &&
      getDirectory(state, row.terminalNodeId).childIds.length > 0,
    isFlattened = row.headNodeId !== row.terminalNodeId,
    instrumentation = state.instrumentation,
    flattenedSegments = isFlattened
      ? instrumentation == null
        ? collectFlattenChain(state, row.headNodeId).map((item) => {
            let segmentNode = getNode(state, item);
            return {
              isTerminal: item === row.terminalNodeId,
              name: getSegmentValue(
                state.snapshot.segmentTable,
                segmentNode.nameId,
              ),
              nodeId: item,
              path: buildNodePath(state, item),
            };
          })
        : measurePhase(
            instrumentation,
            "store.getVisibleSlice.flatten.collectSegments",
            () =>
              collectFlattenChain(state, row.headNodeId).map((item) => {
                let segmentNode = getNode(state, item);
                return {
                  isTerminal: item === row.terminalNodeId,
                  name: getSegmentValue(
                    state.snapshot.segmentTable,
                    segmentNode.nameId,
                  ),
                  nodeId: item,
                  path: buildNodePath(state, item),
                };
              }),
          )
      : undefined;
  return {
    depth: row.visibleDepth,
    flattenedSegments: flattenedSegments,
    hasChildren: hasChildren,
    id: row.terminalNodeId,
    isExpanded:
      isDirectory(terminalNode) &&
      isDirectoryExpanded(state, row.terminalNodeId, terminalNode),
    isFlattened: isFlattened,
    isLoading: loadState === "loading",
    kind: isDirectory(terminalNode) ? "directory" : "file",
    loadState:
      loadState == null || loadState === "loaded" ? undefined : loadState,
    name: name,
    path: path,
  };
}
function aggregateDirectoryLoadState(state, range) {
  if (range.headNodeId === range.terminalNodeId)
    return getDirectoryLoadState(state, range.terminalNodeId);
  let nodeIds = collectFlattenChain(state, range.headNodeId),
    hasUnloaded = false,
    hasError = false;
  for (let nodeId of nodeIds) {
    let loadState = getDirectoryLoadState(state, nodeId);
    if (loadState === "loading") return "loading";
    if (loadState === "error") {
      hasError = true;
      continue;
    }
    loadState === "unloaded" && (hasUnloaded = true);
  }
  return hasError ? "error" : hasUnloaded ? "unloaded" : "loaded";
}
function initializeOpenVisibleCounts(state) {
  let { directories, nodes, options, rootId, presortedDirectoryNodeIds } =
      state.snapshot,
    flattenEmptyDirectories = options.flattenEmptyDirectories === true,
    recomputeDirectoryCounts = (nodeId) => {
      let node = nodes[nodeId];
      if (node == null || !isDirectory(node)) return;
      let directory = directories.get(nodeId);
      if (directory == null)
        throw Error(`Unknown directory child index for node ${String(nodeId)}`);
      let childIds = directory.childIds,
        childCount = childIds.length,
        subtreeNodeCount = 0,
        visibleSubtreeCount = 0;
      for (let index = 0; index < childCount; index++) {
        let childId = childIds[index];
        if (childId == null) continue;
        let childNode = nodes[childId];
        subtreeNodeCount += childNode.subtreeNodeCount;
        visibleSubtreeCount += childNode.visibleSubtreeCount;
      }
      directory.totalChildSubtreeNodeCount = subtreeNodeCount;
      directory.totalChildVisibleSubtreeCount = visibleSubtreeCount;
      childCount >= 128 && rebuildChildVisibleChunkSums(nodes, directory);
      node.subtreeNodeCount = 1 + subtreeNodeCount;
      let visibleCount;
      if (flattenEmptyDirectories && childCount === 1) {
        let onlyChildNode = nodes[childIds[0]];
        visibleCount =
          onlyChildNode != null && isDirectory(onlyChildNode)
            ? visibleSubtreeCount
            : 1 + visibleSubtreeCount;
      } else visibleCount = 1 + visibleSubtreeCount;
      node.visibleSubtreeCount = visibleCount;
    };
  if (presortedDirectoryNodeIds != null)
    for (let index = presortedDirectoryNodeIds.length - 1; index >= 0; index--)
      recomputeDirectoryCounts(presortedDirectoryNodeIds[index]);
  else
    for (let index = nodes.length - 1; index >= 1; index--)
      recomputeDirectoryCounts(index);
  let rootNode = nodes[rootId],
    rootDirectory = directories.get(rootId);
  if (rootNode == null || rootDirectory == null) return;
  let rootChildIds = rootDirectory.childIds,
    rootSubtreeNodeCount = 0,
    rootVisibleSubtreeCount = 0;
  for (let index = 0; index < rootChildIds.length; index++) {
    let childId = rootChildIds[index];
    if (childId == null) continue;
    let childNode = nodes[childId];
    rootSubtreeNodeCount += childNode.subtreeNodeCount;
    rootVisibleSubtreeCount += childNode.visibleSubtreeCount;
  }
  rootDirectory.totalChildSubtreeNodeCount = rootSubtreeNodeCount;
  rootDirectory.totalChildVisibleSubtreeCount = rootVisibleSubtreeCount;
  rebuildChildVisibleChunkSums(nodes, rootDirectory);
  rootNode.subtreeNodeCount = 1 + rootSubtreeNodeCount;
  rootNode.visibleSubtreeCount = rootVisibleSubtreeCount;
}
function isDefaultOpenExpansion(options) {
  return (
    options.initialExpansion === "open" &&
    (options.initialExpandedPaths == null ||
      options.initialExpandedPaths.length === 0)
  );
}
export const Store = class PathTreeStore {
  #state;
  constructor(options = {}) {
    let instrumentation = getInstrumentation(options),
      builder = measurePhase(
        instrumentation,
        "store.builder.create",
        () => new PathTreeBuilder(options),
      );
    if (options.preparedInput != null) {
      let presortedInput = resolvePresortedPaths(options.preparedInput);
      presortedInput == null
        ? builder.appendPreparedPaths(
            resolvePreparedPaths(options.preparedInput),
            false,
          )
        : builder.appendPresortedPaths(
            presortedInput,
            resolvePresortedContainsDirectories(options.preparedInput),
          );
    } else {
      let paths = options.paths ?? [];
      options.presorted === true
        ? builder.appendPaths(paths)
        : builder.appendPreparedPaths(
            measurePhase(instrumentation, "store.preparePathEntries", () =>
              preparePathEntries(paths, options),
            ),
          );
    }
    let snapshot = measurePhase(instrumentation, "store.builder.finish", () =>
        builder.finish({
          skipSubtreeCountPass: true,
        }),
      ),
      allDirectoriesExpanded = measurePhase(
        instrumentation,
        "store.state.detectAllDirectoriesExpanded",
        () =>
          (options.initialExpansion ?? "closed") === "closed" &&
          builder.didMatchAllInitialExpandedPaths(),
      );
    this.#state = measurePhase(instrumentation, "store.state.create", () =>
      createStoreState(
        snapshot,
        allDirectoriesExpanded
          ? "open"
          : (options.initialExpansion ?? "closed"),
        instrumentation,
      ),
    );
    allDirectoriesExpanded &&
      (this.#state.collapseNewDirectoriesByDefault = true);
    let expandedCount = allDirectoriesExpanded
      ? this.#state.snapshot.directories.size - 1
      : measurePhase(
          instrumentation,
          "store.state.initializeExpandedPaths",
          () => this.initializeExpandedPaths(options.initialExpandedPaths),
        );
    allDirectoriesExpanded ||
    isDefaultOpenExpansion(options) ||
    ((options.initialExpansion ?? "closed") === "closed" &&
      expandedCount === this.#state.snapshot.directories.size - 1) ||
    ((options.initialExpandedPaths?.length ?? 0) > 0 &&
      measurePhase(
        instrumentation,
        "store.state.checkAllDirectoriesExpanded",
        () => this.hasAllDirectoriesExpanded(),
      ))
      ? measurePhase(
          instrumentation,
          "store.state.initializeOpenVisibleCounts",
          () => initializeOpenVisibleCounts(this.#state),
        )
      : measurePhase(instrumentation, "store.state.recomputeCounts", () =>
          recomputeSubtreeCounts(this.#state, this.#state.snapshot.rootId),
        );
  }
  static preparePaths(paths, options = {}) {
    return preparePathList(paths, options);
  }
  static prepareInput(input, options = {}) {
    return preparePreparedInput(input, options);
  }
  static preparePresortedInput(input) {
    return hasAnyDirectoryPath(input);
  }
  list(path) {
    return measurePhase(this.#state.instrumentation, "store.list", () =>
      getVisibleChildren(this.#state, path),
    );
  }
  add(path) {
    measurePhase(this.#state.instrumentation, "store.add", () => {
      let previousVisibleCount = getVisibleCount(this.#state);
      recordEvent(
        this.#state,
        withVisibleCountDelta(
          this.#state,
          previousVisibleCount,
          addPath(this.#state, path),
        ),
      );
    });
  }
  remove(path, options = {}) {
    measurePhase(this.#state.instrumentation, "store.remove", () => {
      let previousVisibleCount = getVisibleCount(this.#state);
      recordEvent(
        this.#state,
        withVisibleCountDelta(
          this.#state,
          previousVisibleCount,
          removePath(this.#state, path, options),
        ),
      );
    });
  }
  move(fromPath, toPath, options = {}) {
    measurePhase(this.#state.instrumentation, "store.move", () => {
      let previousVisibleCount = getVisibleCount(this.#state),
        event = buildMoveEvent(this.#state, fromPath, toPath, options);
      event != null &&
        recordEvent(
          this.#state,
          withVisibleCountDelta(this.#state, previousVisibleCount, event),
        );
    });
  }
  batch(operations) {
    runTransaction(this.#state, () => {
      if (typeof operations == "function") {
        operations(this);
        return;
      }
      for (let operation of operations)
        switch (operation.type) {
          case "add":
            this.add(operation.path);
            break;
          case "remove":
            this.remove(operation.path, {
              recursive: operation.recursive,
            });
            break;
          case "move":
            this.move(operation.from, operation.to, {
              collision: operation.collision,
            });
            break;
        }
    });
  }
  getVisibleCount() {
    return measurePhase(
      this.#state.instrumentation,
      "store.getVisibleCount",
      () => getVisibleCount(this.#state),
    );
  }
  getVisibleSlice(startIndex, endIndex) {
    return measurePhase(
      this.#state.instrumentation,
      "store.getVisibleSlice",
      () => getVisibleSlice(this.#state, startIndex, endIndex),
    );
  }
  getVisibleRowContext(visibleIndex) {
    return measurePhase(
      this.#state.instrumentation,
      "store.getVisibleRowContext",
      () => getVisibleRowContext(this.#state, visibleIndex),
    );
  }
  getVisibleTreeProjection() {
    return buildVisibleTreeProjection(this.#state);
  }
  getVisibleTreeProjectionData(options) {
    return projectVisibleTree(this.#state, options);
  }
  getVisibleIndex(path) {
    return measurePhase(
      this.#state.instrumentation,
      "store.getVisibleIndex",
      () => computeVisibleIndex(this.#state, path),
    );
  }
  getPathInfo(path) {
    return measurePhase(
      this.#state.instrumentation,
      "store.getPathInfo",
      () => {
        let nodeId = resolvePath(this.#state, path);
        if (nodeId == null) return null;
        let node = getNode(this.#state, nodeId);
        return {
          depth: getDepth(node),
          kind: isDirectory(node) ? "directory" : "file",
          path: buildNodePath(this.#state, nodeId),
        };
      },
    );
  }
  isExpanded(path) {
    return measurePhase(this.#state.instrumentation, "store.isExpanded", () => {
      let nodeId = this.requireDirectoryNodeId(path),
        node = getNode(this.#state, nodeId);
      return isDirectoryExpanded(this.#state, nodeId, node);
    });
  }
  expand(path) {
    measurePhase(this.#state.instrumentation, "store.expand", () => {
      let previousVisibleCount = getVisibleCount(this.#state),
        event = expandPath(this.#state, path);
      event != null &&
        recordEvent(
          this.#state,
          withVisibleCountDelta(this.#state, previousVisibleCount, event),
        );
    });
  }
  collapse(path) {
    measurePhase(this.#state.instrumentation, "store.collapse", () => {
      let previousVisibleCount = getVisibleCount(this.#state),
        event = collapsePath(this.#state, path);
      event != null &&
        recordEvent(
          this.#state,
          withVisibleCountDelta(this.#state, previousVisibleCount, event),
        );
    });
  }
  on(event, listener) {
    return addDirectoryLoadListener(this.#state, event, listener);
  }
  getDirectoryLoadState(path) {
    let nodeId = this.requireDirectoryNodeId(path);
    return getDirectoryLoadState(this.#state, nodeId);
  }
  markDirectoryUnloaded(path) {
    measurePhase(
      this.#state.instrumentation,
      "store.markDirectoryUnloaded",
      () => {
        let nodeId = this.requireDirectoryNodeId(path);
        if (getDirectory(this.#state, nodeId).childIds.length > 0)
          throw Error(
            `Cannot mark a directory with known children as unloaded: "${path}"`,
          );
        let previousVisibleCount = getVisibleCount(this.#state);
        markDirectoryUnloaded(this.#state, nodeId);
        recordEvent(
          this.#state,
          withVisibleCountDelta(
            this.#state,
            previousVisibleCount,
            createMarkDirectoryUnloadedEvent({
              affectedAncestorIds: collectAncestorIds(this.#state, nodeId),
              affectedNodeIds: [nodeId],
              path: path,
              projectionChanged: this.isDirectoryProjectionVisible(nodeId),
            }),
          ),
        );
      },
    );
  }
  beginChildLoad(path) {
    return measurePhase(
      this.#state.instrumentation,
      "store.beginChildLoad",
      () => {
        let nodeId = this.requireDirectoryNodeId(path),
          previousVisibleCount = getVisibleCount(this.#state),
          loadAttempt = beginDirectoryLoad(this.#state, nodeId);
        return (
          recordEvent(
            this.#state,
            withVisibleCountDelta(
              this.#state,
              previousVisibleCount,
              createBeginChildLoadEvent({
                affectedAncestorIds: collectAncestorIds(this.#state, nodeId),
                affectedNodeIds: [nodeId],
                attemptId: loadAttempt.attemptId,
                path: path,
                projectionChanged: this.isDirectoryProjectionVisible(nodeId),
                reused: loadAttempt.reused,
              }),
            ),
          ),
          loadAttempt
        );
      },
    );
  }
  applyChildPatch(loadHandle, patch) {
    return measurePhase(
      this.#state.instrumentation,
      "store.applyChildPatch",
      () => {
        let nodeId = this.resolveActiveDirectoryNodeId(loadHandle.nodeId);
        if (
          nodeId == null ||
          getDirectoryLoadState(this.#state, nodeId) !== "loading" ||
          !isLoadAttemptActive(this.#state, nodeId, loadHandle.attemptId)
        )
          return false;
        let directoryPath = buildNodePath(this.#state, nodeId);
        this.validateChildPatch(directoryPath, patch);
        let previousVisibleCount = getVisibleCount(this.#state),
          childEvents = [];
        for (let operation of patch.operations) {
          assertOperationWithinPath(directoryPath, operation);
          let operationVisibleCount = getVisibleCount(this.#state);
          switch (operation.type) {
            case "add":
              childEvents.push(
                withVisibleCountDelta(
                  this.#state,
                  operationVisibleCount,
                  addPath(this.#state, operation.path),
                ),
              );
              break;
            case "remove":
              childEvents.push(
                withVisibleCountDelta(
                  this.#state,
                  operationVisibleCount,
                  removePath(this.#state, operation.path, {
                    recursive: operation.recursive,
                  }),
                ),
              );
              break;
            case "move": {
              let moveEvent = buildMoveEvent(
                this.#state,
                operation.from,
                operation.to,
                {
                  collision: operation.collision,
                },
              );
              moveEvent != null &&
                childEvents.push(
                  withVisibleCountDelta(
                    this.#state,
                    operationVisibleCount,
                    moveEvent,
                  ),
                );
              break;
            }
          }
        }
        let projectionChanged =
          childEvents.some((item) => item.projectionChanged) ||
          this.isDirectoryProjectionVisible(nodeId);
        return (
          recordEvent(
            this.#state,
            withVisibleCountDelta(
              this.#state,
              previousVisibleCount,
              createApplyChildPatchEvent({
                affectedAncestorIds: collectAncestorIds(this.#state, nodeId),
                affectedNodeIds: [nodeId],
                attemptId: loadHandle.attemptId,
                childEvents: childEvents,
                path: buildNodePath(this.#state, nodeId),
                projectionChanged: projectionChanged,
              }),
            ),
          ),
          true
        );
      },
    );
  }
  completeChildLoad(loadHandle) {
    return measurePhase(
      this.#state.instrumentation,
      "store.completeChildLoad",
      () => {
        let nodeId = this.resolveActiveDirectoryNodeId(loadHandle.nodeId);
        if (nodeId == null) return false;
        let previousVisibleCount = getVisibleCount(this.#state),
          wasCurrent = completeDirectoryLoad(
            this.#state,
            nodeId,
            loadHandle.attemptId,
          );
        return (
          recordEvent(
            this.#state,
            withVisibleCountDelta(
              this.#state,
              previousVisibleCount,
              createCompleteChildLoadEvent({
                affectedAncestorIds: collectAncestorIds(this.#state, nodeId),
                affectedNodeIds: [nodeId],
                attemptId: loadHandle.attemptId,
                path: buildNodePath(this.#state, nodeId),
                projectionChanged: this.isDirectoryProjectionVisible(nodeId),
                stale: !wasCurrent,
              }),
            ),
          ),
          wasCurrent
        );
      },
    );
  }
  failChildLoad(loadHandle, errorMessage) {
    return measurePhase(
      this.#state.instrumentation,
      "store.failChildLoad",
      () => {
        let nodeId = this.resolveActiveDirectoryNodeId(loadHandle.nodeId);
        if (nodeId == null) return false;
        let previousVisibleCount = getVisibleCount(this.#state),
          wasCurrent = failDirectoryLoad(
            this.#state,
            nodeId,
            loadHandle.attemptId,
            errorMessage,
          );
        return (
          recordEvent(
            this.#state,
            withVisibleCountDelta(
              this.#state,
              previousVisibleCount,
              createFailChildLoadEvent({
                affectedAncestorIds: collectAncestorIds(this.#state, nodeId),
                affectedNodeIds: [nodeId],
                attemptId: loadHandle.attemptId,
                errorMessage: errorMessage,
                path: buildNodePath(this.#state, nodeId),
                projectionChanged: this.isDirectoryProjectionVisible(nodeId),
                stale: !wasCurrent,
              }),
            ),
          ),
          wasCurrent
        );
      },
    );
  }
  cleanup(options = {}) {
    return measurePhase(this.#state.instrumentation, "store.cleanup", () => {
      if (this.#state.transactionStack.length > 0)
        throw Error("Cleanup cannot run during an open batch or transaction.");
      if (hasActiveDirectoryLoad(this.#state))
        throw Error("Cleanup cannot run while directory loads are active.");
      let previousVisibleCount = getVisibleCount(this.#state),
        className = runCleanup(this.#state, options.mode ?? "stable");
      return (
        recordEvent(
          this.#state,
          withVisibleCountDelta(
            this.#state,
            previousVisibleCount,
            createCleanupEvent({
              ...className,
              affectedAncestorIds: [],
              affectedNodeIds: [],
              projectionChanged: className.idsPreserved === false,
            }),
          ),
        ),
        className
      );
    });
  }
  getNodeCount() {
    return this.#state.activeNodeCount;
  }
  initializeExpandedPaths(expandedPaths) {
    if (expandedPaths == null || expandedPaths.length === 0) return 0;
    let expandedCount = 0,
      matchedChildIndices = [],
      matchedNodeIds = [],
      previousPathLength = 0,
      previousPath = null,
      segmentTable = this.#state.snapshot.segmentTable,
      segmentValueById = segmentTable.valueById,
      nodes = this.#state.snapshot.nodes,
      segmentIdByName = new Map();
    for (let path of expandedPaths) {
      previousPath != null &&
        path < previousPath &&
        ((previousPath = null),
        (previousPathLength = 0),
        (matchedChildIndices.length = 0),
        (matchedNodeIds.length = 0));
      let pathLength =
        path.length > 0 && path.charCodeAt(path.length - 1) === 47
          ? path.length - 1
          : path.length;
      if (pathLength === 0) {
        previousPath = path;
        previousPathLength = pathLength;
        matchedChildIndices.length = 0;
        matchedNodeIds.length = 0;
        continue;
      }
      let sharedSegmentCount = 0,
        sharedPrefixEnd = 0;
      if (previousPath != null) {
        let commonLength = Math.min(pathLength, previousPathLength),
          isPrefixMatch = true;
        for (let index = 0; index < commonLength; index += 1) {
          let charCode = path.charCodeAt(index);
          if (charCode !== previousPath.charCodeAt(index)) {
            isPrefixMatch = false;
            break;
          }
          charCode === 47 &&
            ((sharedSegmentCount += 1), (sharedPrefixEnd = index + 1));
        }
        isPrefixMatch &&
          (commonLength === previousPathLength &&
          pathLength > commonLength &&
          path.charCodeAt(commonLength) === 47
            ? ((sharedSegmentCount += 1), (sharedPrefixEnd = commonLength + 1))
            : commonLength === pathLength &&
              previousPathLength > commonLength &&
              previousPath.charCodeAt(commonLength) === 47 &&
              ((sharedSegmentCount += 1), (sharedPrefixEnd = pathLength + 1)));
        sharedSegmentCount = Math.min(
          sharedSegmentCount,
          matchedNodeIds.length,
        );
      }
      let parentNodeId =
          sharedSegmentCount === 0
            ? this.#state.snapshot.rootId
            : (matchedNodeIds[sharedSegmentCount - 1] ??
              this.#state.snapshot.rootId),
        segmentIndex = sharedSegmentCount,
        allSegmentsMatched = true,
        cursor = sharedPrefixEnd;
      for (; cursor <= pathLength; ) {
        let slashIndex = path.indexOf("/", cursor),
          segmentEnd =
            slashIndex === -1 || slashIndex > pathLength
              ? pathLength
              : slashIndex,
          segment = path.slice(cursor, segmentEnd),
          childIds = getDirectory(this.#state, parentNodeId).childIds,
          startIndex =
            segmentIndex === sharedSegmentCount
              ? (matchedChildIndices[segmentIndex] ?? 0)
              : 0,
          scanIndex = startIndex,
          matchedChildId,
          segmentId = segmentIdByName.get(segment) ?? makeSortKey(segment);
        segmentIdByName.set(segment, segmentId);
        let scanRange = (from, to) => {
          for (scanIndex = from; scanIndex < to; scanIndex += 1) {
            let candidateId = childIds[scanIndex],
              candidateNode = nodes[candidateId],
              candidateName = segmentValueById[candidateNode.nameId];
            if (candidateName === segment)
              return ((matchedChildId = candidateId), true);
            let comparison = compareSortKeys(
              getSortKeyById(segmentTable, candidateNode.nameId),
              segmentId,
            );
            if (comparison > 0 || (comparison === 0 && candidateName > segment))
              return false;
          }
          return false;
        };
        if (
          (!scanRange(startIndex, childIds.length) &&
            startIndex > 0 &&
            scanRange(0, startIndex),
          matchedChildId === undefined)
        ) {
          allSegmentsMatched = false;
          break;
        }
        if (!isDirectory(getNode(this.#state, matchedChildId))) {
          allSegmentsMatched = false;
          break;
        }
        if (
          ((matchedChildIndices[segmentIndex] = scanIndex),
          (matchedNodeIds[segmentIndex] = matchedChildId),
          (parentNodeId = matchedChildId),
          (segmentIndex += 1),
          segmentEnd === pathLength)
        )
          break;
        cursor = segmentEnd + 1;
      }
      if (
        ((previousPath = path),
        (previousPathLength = pathLength),
        (matchedChildIndices.length = segmentIndex),
        (matchedNodeIds.length = segmentIndex),
        !allSegmentsMatched)
      ) {
        previousPath = null;
        previousPathLength = 0;
        matchedChildIndices.length = 0;
        matchedNodeIds.length = 0;
        continue;
      }
      for (let index = sharedSegmentCount; index < segmentIndex; index += 1) {
        let nodeId = matchedNodeIds[index];
        if (nodeId == null) continue;
        let node = getNode(this.#state, nodeId);
        isDirectoryExpanded(this.#state, nodeId, node) ||
          (setDirectoryExpanded(this.#state, nodeId, true, node),
          (expandedCount += 1));
      }
    }
    return expandedCount;
  }
  hasAllDirectoriesExpanded() {
    for (let directoryId of this.#state.snapshot.directories.keys()) {
      if (directoryId === this.#state.snapshot.rootId) continue;
      let node = getNode(this.#state, directoryId);
      if (!isDirectoryExpanded(this.#state, directoryId, node)) return false;
    }
    return true;
  }
  requireDirectoryNodeId(path) {
    let nodeId = resolvePath(this.#state, path);
    if (nodeId == null) throw Error(`Path does not exist: "${path}"`);
    if (!isDirectory(getNode(this.#state, nodeId)))
      throw Error(`Path is not a directory: "${path}"`);
    return nodeId;
  }
  resolveActiveDirectoryNodeId(nodeId) {
    try {
      if (!isDirectory(getNode(this.#state, nodeId)))
        throw Error(`Node is not a directory: ${String(nodeId)}`);
      return nodeId;
    } catch {
      return null;
    }
  }
  isDirectoryProjectionVisible(nodeId) {
    let currentId = nodeId;
    for (; currentId !== this.#state.snapshot.rootId; ) {
      let parentId = getNode(this.#state, currentId).parentId;
      if (parentId !== this.#state.snapshot.rootId) {
        let parentNode = getNode(this.#state, parentId),
          visibleChildId = getCollapsibleChildId(this.#state, parentId);
        if (
          !isDirectoryExpanded(this.#state, parentId, parentNode) &&
          visibleChildId !== currentId
        )
          return false;
      }
      currentId = parentId;
    }
    return true;
  }
  validateChildPatch(path, patch) {
    new PathTreeStore({
      paths: this.list(path),
      presorted: true,
      sort: this.#state.snapshot.options.sort,
    }).batch(patch.operations);
  }
};
function assertOperationWithinPath(basePath, operation) {
  switch (operation.type) {
    case "add":
    case "remove":
      if (!operation.path.startsWith(basePath) || operation.path === basePath)
        throw Error(
          `Child patch operation must stay within ${basePath}: "${operation.path}"`,
        );
      break;
    case "move":
      if (
        !operation.from.startsWith(basePath) ||
        !operation.to.startsWith(basePath) ||
        operation.from === basePath ||
        operation.to === basePath
      )
        throw Error(
          `Child patch move must stay within ${basePath}: "${operation.from}" -> "${operation.to}"`,
        );
      break;
  }
}
