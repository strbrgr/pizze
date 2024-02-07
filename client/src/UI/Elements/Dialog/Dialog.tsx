import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./dialog.css";
import "./alertDialog.css";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface RadixDialogProps {
  triggerContent: ReactNode;
  saveContent: ReactNode;
  dialogContent: ReactNode;
}

export function RadixDialog({
  triggerContent,
  dialogContent,
  saveContent,
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

export function RadixAlertDialog({
  triggerContent,
  dialogContent,
  saveContent,
}: RadixDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{triggerContent}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          {dialogContent}
          {saveContent}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
