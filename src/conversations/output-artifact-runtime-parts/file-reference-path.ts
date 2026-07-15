// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
type ParsedFileReference = {
  column?: number;
  endColumn?: number;
  endLine?: number;
  line?: number;
  path: string;
};

const FILE_REFERENCE_RE = /(?:^|[\\/])[^\\/]+\.(?!\d+$)[^\\/.]+$/i;
const MAX_SHORT_EXTENSION_LENGTH = 4;
const LONG_FILE_REFERENCE_EXTENSIONS = new Set(
  "7zipx.accdb.asarpack.asciidoc.backup.backupdb.bundle.ccproj.cdrdao.code-workspace.config.debugin.deploy.design.docbook.dockerfile.dockerignore.editorconfig.eslintignore.gitattributes.gitignore.gitignore.gitkeep.gradle.graphqls.ignore.ipynb.keychain.keynote.licensee.lockfile.lockfile.markdown.markup.matlab.mkdocs.models.module.msstyle.notebook.npmignore.output.packageinfo.parquet.pickle.plistx.policy.postcssrc.prettierignore.projectfile.python.readme.review.robots.schema.search.series.settingsjson.shader.sqlite.sqlite3.storyboard.styles.system.target.terraform.update.vertex.webapp.webdoc.webpackrc.widget.workspace.xcodeproj.yarnlock".split(
    ".",
  ),
);

export function isFileReferencePathValue(path: string): boolean {
  const {
    path: parsedPath,
    line,
    column,
    endLine,
    endColumn,
  } = parseFileReference(path);
  if (
    /^[a-z][a-z0-9+.-]*:\/\//i.test(parsedPath) ||
    /^www\./i.test(parsedPath) ||
    /^(mailto|tel):/i.test(parsedPath)
  )
    return false;
  if (
    line !== undefined ||
    column !== undefined ||
    endLine !== undefined ||
    endColumn !== undefined
  )
    return true;
  if (!FILE_REFERENCE_RE.test(parsedPath)) return false;

  const hasDirectory = /[\\/]/.test(parsedPath),
    filename = parsedPath.split(/[\\/]/).pop() ?? "",
    extension = filename.includes(".") ? (filename.split(".").pop() ?? "") : "";
  if (!extension) return false;

  const hasLowercase = /[a-z]/.test(extension),
    hasUppercaseAfterFirst = /[A-Z]/.test(extension.slice(1));
  if (!hasDirectory && hasLowercase && hasUppercaseAfterFirst) return false;
  if (!hasDirectory) {
    const normalizedExtension = extension.toLowerCase();
    if (
      normalizedExtension.length > MAX_SHORT_EXTENSION_LENGTH &&
      !LONG_FILE_REFERENCE_EXTENSIONS.has(normalizedExtension)
    )
      return false;
  }
  return true;
}

export function parseFileReference(path: string): ParsedFileReference {
  const trimmedPath = path.replace(/`/g, "").trim();
  const lineColumnMatch = trimmedPath.match(
    /^(.*?):(\d+)(?::(\d+))?(?:[-–](\d+)(?::(\d+))?)?$/,
  );
  if (lineColumnMatch) {
    const [, filePath, line, column, endLine, endColumn] = lineColumnMatch;
    return {
      path: filePath,
      line: Number.parseInt(line, 10),
      column: column ? Number.parseInt(column, 10) : undefined,
      endLine: endLine ? Number.parseInt(endLine, 10) : undefined,
      endColumn: endColumn ? Number.parseInt(endColumn, 10) : undefined,
    };
  }

  const hashLineMatch = trimmedPath.match(
    /^(.*?)#L(\d+)(?:C(\d+))?(?:-L(\d+)(?:C(\d+))?)?$/,
  );
  if (hashLineMatch) {
    const [, filePath, line, column, endLine, endColumn] = hashLineMatch;
    return {
      path: filePath,
      line: Number.parseInt(line, 10),
      column: column ? Number.parseInt(column, 10) : undefined,
      endLine: endLine ? Number.parseInt(endLine, 10) : undefined,
      endColumn: endColumn ? Number.parseInt(endColumn, 10) : undefined,
    };
  }
  return { path: trimmedPath };
}
