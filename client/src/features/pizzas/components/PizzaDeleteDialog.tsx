import { RadixAlertDialog } from "../../../UI/Elements/Dialog";
import { IconButton } from "@radix-ui/themes";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

type PizzaDeleteDialogProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function PizzaDeleteDialog({ onClick }: PizzaDeleteDialogProps) {
  return (
    <RadixAlertDialog
      triggerContent={
        <div>
          <IconButton size="1">
            <Cross1Icon width="10" height="10" />
          </IconButton>
        </div>
      }
      dialogContent={
        <>
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Are you sure? This pizza will be deleted.
          </AlertDialog.Description>
        </>
      }
      saveContent={
        <div className="flex gap-4 justify-end">
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red" onClick={onClick}>
              Yes, delete Pizza
            </button>
          </AlertDialog.Action>
        </div>
      }
    />
  );
}
