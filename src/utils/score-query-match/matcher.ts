// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
import { ScoreQueryCharacterHelpers } from "./character-helpers";
import {
  MAX_WILDCARD_PATTERN_LENGTH,
  NO_MATCH_SCORE,
  type ScoreQueryMatchMode,
  type ScoreQueryMatchRanges,
} from "./types";

export class CompositeMatcher {
  private readonly mainMatcher: WildcardPatternMatcher;
  private readonly fallbackMatcher: WildcardPatternMatcher | null;

  constructor(
    mainMatcher: WildcardPatternMatcher,
    fallbackMatcher: WildcardPatternMatcher | null,
  ) {
    this.mainMatcher = mainMatcher;
    this.fallbackMatcher = fallbackMatcher;
  }

  matchingDegree(name: string): number {
    let mainRanges = this.mainMatcher.match(name);
    if (mainRanges != null)
      return ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
        this.mainMatcher.matchingDegree(name, false, mainRanges),
        mainRanges,
      );
    if (this.fallbackMatcher == null) return NO_MATCH_SCORE;
    let fallbackRanges = this.fallbackMatcher.match(name);
    return fallbackRanges == null
      ? NO_MATCH_SCORE
      : ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
          this.fallbackMatcher.matchingDegree(name, false, fallbackRanges),
          fallbackRanges,
        );
  }
}

export class WildcardPatternMatcher {
  private readonly myPattern: string[];
  private readonly isLowerCase: boolean[];
  private readonly isUpperCase: boolean[];
  private readonly isWordSeparator: boolean[];
  private readonly toUpperCase: string[];
  private readonly toLowerCase: string[];
  private readonly hardSeparators: string[];
  private readonly matchingMode: ScoreQueryMatchMode;
  private readonly mixedCase: boolean;
  private readonly hasSeparators: boolean;
  private readonly hasDots: boolean;
  private readonly meaningfulCharacters: string[];
  private readonly minNameLength: number;

  constructor(
    pattern: string,
    matchingMode: ScoreQueryMatchMode,
    hardSeparators: string,
  ) {
    let normalizedPattern = pattern.endsWith("* ")
      ? pattern.slice(0, -2)
      : pattern;
    this.myPattern = Array.from(normalizedPattern);
    this.isLowerCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.isUpperCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.isWordSeparator = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.toUpperCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => "",
    );
    this.toLowerCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => "",
    );
    this.hardSeparators = Array.from(hardSeparators);
    this.matchingMode = matchingMode;
    let meaningfulChars: string[] = [],
      hasContentChar = false,
      hasLowerCase = false,
      scoreDelta = false,
      hasDot = false,
      hasSeparator = false;
    for (let i = 0; i < this.myPattern.length; i += 1) {
      let ch = this.myPattern[i],
        isSeparator = ScoreQueryCharacterHelpers.isPatternSeparator(ch),
        isUpper = ScoreQueryCharacterHelpers.isUpperCaseLetter(ch),
        isLower = ScoreQueryCharacterHelpers.isLowerCaseLetter(ch),
        upperChar = ch.toUpperCase(),
        lowerChar = ch.toLowerCase();
      isLower && (hasLowerCase = true);
      ch === "." && (hasDot = true);
      hasContentChar && isUpper && (scoreDelta = true);
      ScoreQueryCharacterHelpers.isWildcardChar(ch) ||
        ((hasContentChar = true),
        meaningfulChars.push(lowerChar),
        meaningfulChars.push(upperChar));
      hasContentChar && isSeparator && (hasSeparator = true);
      this.isWordSeparator[i] = isSeparator;
      this.isUpperCase[i] = isUpper;
      this.isLowerCase[i] = isLower;
      this.toUpperCase[i] = upperChar;
      this.toLowerCase[i] = lowerChar;
    }
    this.hasDots = hasDot;
    this.mixedCase = hasLowerCase && scoreDelta;
    this.hasSeparators = hasSeparator;
    this.meaningfulCharacters = meaningfulChars;
    this.minNameLength = meaningfulChars.length / 2;
  }

  get pattern(): string {
    return this.myPattern.join("");
  }

  matchingDegree(
    name: string,
    valueStartCaseMatch = false,
    ranges: ScoreQueryMatchRanges | null = this.match(name),
  ): number {
    if (ranges == null) return NO_MATCH_SCORE;
    if (ranges.length === 0) return 0;
    let firstRange = ranges[0],
      startMatch = firstRange.startOffset === 0,
      startCaseMatch = startMatch && valueStartCaseMatch,
      scoreDelta = 0,
      patternIndex = -1,
      skippedWordCount = 0,
      wordBoundary = 0,
      caseMatchesUpper = false;
    for (let range of ranges)
      for (
        let offset = range.startOffset;
        offset < range.endOffset;
        offset += 1
      ) {
        let afterGap = offset === range.startOffset && range !== firstRange,
          isWordStart = false;
        for (; wordBoundary <= offset; ) {
          wordBoundary === offset
            ? (isWordStart = true)
            : afterGap && (skippedWordCount += 1);
          wordBoundary = ScoreQueryCharacterHelpers.nextNameWordOffset(
            name,
            wordBoundary,
          );
        }
        let nameChar = name[offset];
        if (
          ((patternIndex = ScoreQueryCharacterHelpers.indexOfChar(
            this.myPattern,
            nameChar,
            patternIndex + 1,
            this.myPattern.length,
            true,
          )),
          patternIndex < 0)
        )
          break;
        isWordStart &&
          (caseMatchesUpper =
            nameChar === this.myPattern[patternIndex] &&
            this.isUpperCase[patternIndex]);
        scoreDelta += this.evaluateCaseMatching(
          startCaseMatch,
          patternIndex,
          caseMatchesUpper,
          offset,
          afterGap,
          isWordStart,
          nameChar,
        );
      }
    let firstMatchOffset = firstRange.startOffset,
      separatorBeforeMatch =
        ScoreQueryCharacterHelpers.indexOfAny(
          name,
          this.hardSeparators,
          0,
          firstMatchOffset,
        ) >= 0,
      matchStartsWord =
        firstMatchOffset === 0 ||
        (ScoreQueryCharacterHelpers.isWordStart(name, firstMatchOffset) &&
          !ScoreQueryCharacterHelpers.isWordStart(name, firstMatchOffset - 1)),
      matchEndsName = ranges[ranges.length - 1].endOffset === name.length;
    return (
      (matchStartsWord ? 1e3 : 0) +
      scoreDelta -
      ranges.length +
      -skippedWordCount * 10 +
      (separatorBeforeMatch ? 0 : 2) +
      (startMatch ? 1 : 0) +
      (matchEndsName ? 1 : 0)
    );
  }

  match(name: string): ScoreQueryMatchRanges | null {
    if (name.length < this.minNameLength) return null;
    if (this.myPattern.length > MAX_WILDCARD_PATTERN_LENGTH)
      return this.matchBySubstring(name);
    let meaningfulIndex = 0;
    for (
      let i = 0;
      i < name.length && meaningfulIndex < this.meaningfulCharacters.length;
      i += 1
    ) {
      let nameChar = name[i];
      (nameChar === this.meaningfulCharacters[meaningfulIndex] ||
        nameChar === this.meaningfulCharacters[meaningfulIndex + 1]) &&
        (meaningfulIndex += 2);
    }
    if (meaningfulIndex < this.minNameLength * 2) return null;
    let matchResult = this.matchWildcards(name, 0, 0);
    return matchResult == null ? null : matchResult.reverse();
  }
  private evaluateCaseMatching(
    startCaseMatch: boolean,
    patternIndex: number,
    caseMatchesUpper: boolean,
    offset: number,
    afterGap: boolean,
    isWordStart: boolean,
    nameChar: string,
  ): number {
    return afterGap && isWordStart && this.isLowerCase[patternIndex]
      ? -10
      : nameChar === this.myPattern[patternIndex]
        ? this.isUpperCase[patternIndex]
          ? 50
          : offset === 0 && startCaseMatch
            ? 150
            : isWordStart
              ? 1
              : 0
        : isWordStart || (this.isLowerCase[patternIndex] && caseMatchesUpper)
          ? -1
          : 0;
  }

  private matchBySubstring(name: string): ScoreQueryMatchRanges | null {
    let infix = this.isPatternChar(0, "*"),
      patternText = ScoreQueryCharacterHelpers.stripWildcards(this.myPattern);
    if (name.length < patternText.length) return null;
    if (infix) {
      let matchIndex = ScoreQueryCharacterHelpers.indexOfSubstringIgnoreCase(
        name,
        patternText,
        0,
        name.length,
      );
      return matchIndex >= 0
        ? [
            {
              startOffset: matchIndex,
              endOffset: matchIndex + patternText.length,
            },
          ]
        : null;
    }
    return ScoreQueryCharacterHelpers.regionMatchesIgnoreCase(
      name,
      0,
      patternText.length,
      patternText,
    )
      ? [
          {
            startOffset: 0,
            endOffset: patternText.length,
          },
        ]
      : null;
  }

  private matchWildcards(
    name: string,
    patternStart: number,
    nameIndex: number,
  ): ScoreQueryMatchRanges | null {
    let patternIndex = patternStart;
    if (nameIndex < 0) return null;
    if (!this.isWildcard(patternIndex))
      return patternIndex === this.myPattern.length
        ? []
        : this.matchFragment(name, patternIndex, nameIndex);
    do patternIndex += 1;
    while (this.isWildcard(patternIndex));
    if (patternIndex === this.myPattern.length) {
      if (
        this.isTrailingSpacePattern() &&
        nameIndex !== name.length &&
        (patternIndex < 2 || !this.isUpperCaseOrDigit(patternIndex - 2))
      ) {
        let spaceIndex = name.indexOf(" ", nameIndex);
        return spaceIndex >= 0
          ? [
              {
                startOffset: spaceIndex,
                endOffset: spaceIndex + 1,
              },
            ]
          : null;
      }
      return [];
    }
    return this.matchSkippingWords(
      name,
      patternIndex,
      this.findNextPatternCharOccurrence(name, nameIndex, patternIndex),
      true,
    );
  }

  private isTrailingSpacePattern(): boolean {
    return this.isPatternChar(this.myPattern.length - 1, " ");
  }

  private isUpperCaseOrDigit(patternIndex: number): boolean {
    return (
      this.isUpperCase[patternIndex] ||
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex])
    );
  }

  private matchSkippingWords(
    name: string,
    patternIndex: number,
    nameIndex: number,
    allowSpecialChars: boolean,
  ): ScoreQueryMatchRanges | null {
    let start = nameIndex,
      maxFoundLength = 0;
    for (; start >= 0; ) {
      let fragmentLength = this.seemsLikeFragmentStart(
        name,
        patternIndex,
        start,
      )
        ? this.maxMatchingFragment(name, patternIndex, start)
        : 0;
      if (
        fragmentLength > maxFoundLength ||
        (start + fragmentLength === name.length &&
          this.isTrailingSpacePattern())
      ) {
        this.isMiddleMatch(name, patternIndex, start) ||
          (maxFoundLength = fragmentLength);
        let fragmentMatch = this.matchInsideFragment(
          name,
          patternIndex,
          start,
          fragmentLength,
        );
        if (fragmentMatch != null) return fragmentMatch;
      }
      let nextOccurrence = this.findNextPatternCharOccurrence(
        name,
        start + 1,
        patternIndex,
      );
      start = allowSpecialChars
        ? nextOccurrence
        : this.checkForSpecialChars(
            name,
            start + 1,
            nextOccurrence,
            patternIndex,
          );
    }
    return null;
  }

  private findNextPatternCharOccurrence(
    name: string,
    nameIndex: number,
    patternIndex: number,
  ): number {
    return !this.isPatternChar(patternIndex - 1, "*") &&
      !this.isWordSeparator[patternIndex]
      ? this.indexOfWordStart(name, patternIndex, nameIndex)
      : this.indexOfIgnoreCase(name, nameIndex, patternIndex);
  }

  private checkForSpecialChars(
    name: string,
    fromIndex: number,
    nextOccurrence: number,
    patternIndex: number,
  ): number {
    return nextOccurrence < 0 ||
      (!this.hasSeparators &&
        !this.mixedCase &&
        ScoreQueryCharacterHelpers.indexOfAny(
          name,
          this.hardSeparators,
          fromIndex,
          nextOccurrence,
        ) !== -1) ||
      (this.hasDots &&
        !this.isPatternChar(patternIndex - 1, ".") &&
        ScoreQueryCharacterHelpers.indexOfCharInRange(
          name,
          ".",
          fromIndex,
          nextOccurrence,
        ) !== -1)
      ? -1
      : nextOccurrence;
  }

  private seemsLikeFragmentStart(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): boolean {
    return !this.isUpperCase[patternIndex] ||
      ScoreQueryCharacterHelpers.isUpperCaseLetter(name[nameIndex]) ||
      ScoreQueryCharacterHelpers.isWordStart(name, nameIndex)
      ? true
      : !this.mixedCase && this.matchingMode !== "MATCH_CASE";
  }

  private charEquals(
    patternChar: string,
    patternIndex: number,
    nameChar: string,
    ignoreCase: boolean,
  ): boolean {
    return patternChar === nameChar
      ? true
      : ignoreCase
        ? this.toLowerCase[patternIndex] === nameChar ||
          this.toUpperCase[patternIndex] === nameChar
        : false;
  }

  private matchFragment(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): ScoreQueryMatchRanges | null {
    let fragmentLength = this.maxMatchingFragment(
      name,
      patternIndex,
      nameIndex,
    );
    return fragmentLength === 0
      ? null
      : this.matchInsideFragment(name, patternIndex, nameIndex, fragmentLength);
  }

  private maxMatchingFragment(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): number {
    if (!this.isFirstCharMatching(name, nameIndex, patternIndex)) return 0;
    let i = 1,
      ignoreCase = this.matchingMode !== "MATCH_CASE";
    for (
      ;
      nameIndex + i < name.length && patternIndex + i < this.myPattern.length;

    ) {
      let nameChar = name[nameIndex + i];
      if (
        !this.charEquals(
          this.myPattern[patternIndex + i],
          patternIndex + i,
          nameChar,
          ignoreCase,
        )
      ) {
        if (
          this.isSkippingDigitBetweenPatternDigits(patternIndex + i, nameChar)
        )
          return 0;
        break;
      }
      i += 1;
    }
    return i;
  }

  private isSkippingDigitBetweenPatternDigits(
    patternIndex: number,
    nameChar: string,
  ): boolean {
    return (
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex]) &&
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex - 1]) &&
      ScoreQueryCharacterHelpers.isDigit(nameChar)
    );
  }

  private matchInsideFragment(
    name: string,
    patternIndex: number,
    nameIndex: number,
    fragmentLength: number,
  ): ScoreQueryMatchRanges | null {
    let minFragment = this.isMiddleMatch(name, patternIndex, nameIndex) ? 3 : 1;
    return (
      this.improveCamelHumps(
        name,
        patternIndex,
        nameIndex,
        fragmentLength,
        minFragment,
      ) ??
      this.findLongestMatchingPrefix(
        name,
        patternIndex,
        nameIndex,
        fragmentLength,
        minFragment,
      )
    );
  }

  private isMiddleMatch(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): boolean {
    return !this.isPatternChar(patternIndex - 1, "*") ||
      this.isWildcard(patternIndex + 1) ||
      !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(name[nameIndex])
      ? false
      : !ScoreQueryCharacterHelpers.isWordStart(name, nameIndex);
  }

  private findLongestMatchingPrefix(
    name: string,
    patternIndex: number,
    nameIndex: number,
    fragmentLength: number,
    minFragment: number,
  ): ScoreQueryMatchRanges | null {
    if (patternIndex + fragmentLength >= this.myPattern.length)
      return [
        {
          startOffset: nameIndex,
          endOffset: nameIndex + fragmentLength,
        },
      ];
    let i = fragmentLength;
    for (; i >= minFragment || (i > 0 && this.isWildcard(patternIndex + i)); ) {
      let matchedRanges: ScoreQueryMatchRanges | null = null;
      if (this.isWildcard(patternIndex + i))
        matchedRanges = this.matchWildcards(
          name,
          patternIndex + i,
          nameIndex + i,
        );
      else {
        let nextOccurrence = this.findNextPatternCharOccurrence(
          name,
          nameIndex + i + 1,
          patternIndex + i,
        );
        nextOccurrence = this.checkForSpecialChars(
          name,
          nameIndex + i,
          nextOccurrence,
          patternIndex + i,
        );
        nextOccurrence >= 0 &&
          (matchedRanges = this.matchSkippingWords(
            name,
            patternIndex + i,
            nextOccurrence,
            false,
          ));
      }
      if (matchedRanges != null)
        return ScoreQueryCharacterHelpers.prependMatchedRange(
          matchedRanges,
          nameIndex,
          i,
        );
      --i;
    }
    return null;
  }
  private improveCamelHumps(
    name: string,
    patternIndex: number,
    nameIndex: number,
    fragmentLength: number,
    minFragment: number,
  ): ScoreQueryMatchRanges | null {
    for (let i = minFragment; i < fragmentLength; i += 1)
      if (
        this.isUppercasePatternVsLowercaseNameChar(
          name,
          patternIndex + i,
          nameIndex + i,
        )
      ) {
        let humpMatch = this.findUppercaseMatchFurther(
          name,
          patternIndex + i,
          nameIndex + i,
        );
        if (humpMatch != null)
          return ScoreQueryCharacterHelpers.prependMatchedRange(
            humpMatch,
            nameIndex,
            i,
          );
      }
    return null;
  }

  private isUppercasePatternVsLowercaseNameChar(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): boolean {
    return (
      this.isUpperCase[patternIndex] &&
      this.myPattern[patternIndex] !== name[nameIndex]
    );
  }

  private findUppercaseMatchFurther(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): ScoreQueryMatchRanges | null {
    let nextWordStart = this.indexOfWordStart(name, patternIndex, nameIndex);
    return this.matchWildcards(name, patternIndex, nextWordStart);
  }

  private isFirstCharMatching(
    name: string,
    nameIndex: number,
    patternIndex: number,
  ): boolean {
    if (nameIndex >= name.length) return false;
    let ignoreCase = this.matchingMode !== "MATCH_CASE",
      patternChar = this.myPattern[patternIndex];
    return this.charEquals(
      patternChar,
      patternIndex,
      name[nameIndex],
      ignoreCase,
    )
      ? this.matchingMode === "FIRST_LETTER" &&
        (patternIndex === 0 || (patternIndex === 1 && this.isWildcard(0))) &&
        this.hasCase(patternIndex)
        ? this.isUpperCase[patternIndex] ===
          ScoreQueryCharacterHelpers.isUpperCaseLetter(name[0])
        : true
      : false;
  }

  private hasCase(patternIndex: number): boolean {
    return this.isUpperCase[patternIndex] || this.isLowerCase[patternIndex];
  }

  private isWildcard(patternIndex: number): boolean {
    return (
      patternIndex >= 0 &&
      patternIndex < this.myPattern.length &&
      ScoreQueryCharacterHelpers.isWildcardChar(this.myPattern[patternIndex])
    );
  }

  private isPatternChar(patternIndex: number, char: string): boolean {
    return patternIndex < 0 || patternIndex >= this.myPattern.length
      ? false
      : this.myPattern[patternIndex] === char;
  }

  private indexOfWordStart(
    name: string,
    patternIndex: number,
    nameIndex: number,
  ): number {
    let patternChar = this.myPattern[patternIndex];
    if (
      nameIndex >= name.length ||
      (this.mixedCase &&
        this.isLowerCase[patternIndex] &&
        !(patternIndex > 0 && this.isWordSeparator[patternIndex - 1]))
    )
      return -1;
    let index = nameIndex,
      isSpecialChar =
        !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(patternChar);
    for (;;) {
      if (
        ((index = this.indexOfIgnoreCase(name, index, patternIndex)), index < 0)
      )
        return -1;
      if (isSpecialChar || ScoreQueryCharacterHelpers.isWordStart(name, index))
        return index;
      index += 1;
    }
  }

  private indexOfIgnoreCase(
    name: string,
    fromIndex: number,
    patternIndex: number,
  ): number {
    let patternChar = this.myPattern[patternIndex];
    if (ScoreQueryCharacterHelpers.isAsciiSingleChar(patternChar)) {
      let upperChar = this.toUpperCase[patternIndex],
        lowerChar = this.toLowerCase[patternIndex];
      for (let i = fromIndex; i < name.length; i += 1) {
        let nameChar = name[i];
        if (nameChar === upperChar || nameChar === lowerChar) return i;
      }
      return -1;
    }
    return ScoreQueryCharacterHelpers.indexOfCharInRange(
      name,
      patternChar,
      fromIndex,
      name.length,
    );
  }
}
