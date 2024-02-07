import { RadixAlertDialog } from "../../../UI/Elements/Dialog";
import { AlertDialog, Button, IconButton } from "@radix-ui/themes";
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
      saveContent={
        <>
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={onClick}>
              Delete
            </Button>
          </AlertDialog.Action>
        </>
      }
      dialogContent={
        <>
          <AlertDialog.Title>Delete a Pizza</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This pizza will be deleted.
          </AlertDialog.Description>
        </>
      }
    />
  );
}
