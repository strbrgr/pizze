import * as Dialog from "@radix-ui/react-dialog";
import "./dialog.css";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface RadixDialogProps {
  triggerContent: ReactNode;
  saveContent: ReactNode;
  dialogContent: ReactNode;
}

export function RadixDialog({
  triggerContent,
  saveContent,
  dialogContent,
}: RadixDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerContent}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {dialogContent}
          {saveContent}
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
