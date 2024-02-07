import * as Dialog from "@radix-ui/react-dialog";
import "./dialog.css";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { AlertDialog, Flex } from "@radix-ui/themes";

interface RadixDialogProps {
  triggerContent: ReactNode;
  saveContent: ReactNode;
  dialogContent: ReactNode;
}

interface RadixAlertDialogProps {
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

export function RadixAlertDialog({
  triggerContent,
  saveContent,
  dialogContent,
}: RadixAlertDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{triggerContent}</AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        {dialogContent}
        <Flex gap="3" mt="4" justify="end">
          {saveContent}
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
