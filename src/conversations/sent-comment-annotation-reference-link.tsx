// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// File reference link used for artifact/PDF annotation attachments in sent
// comment tooltips.
import {
  FileReferenceLink,
  getFileIconComponent,
} from "../boundaries/onboarding-commons-externals.facade";

export interface AnnotationReference {
  path: string;
}

export interface AnnotationReferenceLinkProps {
  cwd?: string | null;
  hostId?: string | null;
  label: string;
  reference: AnnotationReference;
  tooltipText?: string;
}

export function AnnotationReferenceLink({
  cwd,
  hostId,
  label,
  reference,
  tooltipText,
}: AnnotationReferenceLinkProps) {
  const FileIcon = getFileIconComponent(reference.path);
  return (
    <FileReferenceLink
      className="inline-flex max-w-full min-w-0 overflow-hidden text-xs leading-4"
      reference={reference}
      tooltipText={tooltipText}
      cwd={cwd}
      hostId={hostId}
      openInSidePanel={true}
    >
      <span className="inline-flex max-w-full min-w-0 items-center gap-1 overflow-hidden font-medium text-token-text-link-foreground">
        <FileIcon className="icon-xs shrink-0" />
        <span className="min-w-0 truncate">{label}</span>
      </span>
    </FileReferenceLink>
  );
}
