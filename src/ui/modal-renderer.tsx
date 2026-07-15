// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Modal host: renders the active modal stack from the app-scope store, wrapping
// each lazy modal component in Suspense and wiring its onClose to pop the stack.
import { memo, Suspense, type ComponentType } from "react";
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import {
  closeModal,
  useModals,
} from "../boundaries/onboarding-commons-externals.facade";

interface ModalProps {
  onClose?: () => void;
  [key: string]: unknown;
}

interface AppModalDescriptor {
  key: string;
  ModalComponent: ComponentType<ModalProps>;
  props?: ModalProps;
}

export interface ModalRendererProps {
  modal: AppModalDescriptor;
}

export const ModalRenderer = memo(function ModalRenderer({
  modal,
}: ModalRendererProps) {
  const { ModalComponent, props = {} } = modal;
  const store = useAppScopeStore();
  const handleClose = () => {
    props?.onClose?.();
    closeModal(store, ModalComponent);
  };
  return (
    <Suspense fallback={null}>
      <ModalComponent {...props} onClose={handleClose} />
    </Suspense>
  );
});

export function ModalHost() {
  const { modals } = useModals() as { modals: AppModalDescriptor[] };
  return <>{modals.map(renderModal)}</>;
}

function renderModal(modal: AppModalDescriptor) {
  return <ModalRenderer key={modal.key} modal={modal} />;
}
