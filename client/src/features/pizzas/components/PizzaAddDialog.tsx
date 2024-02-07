import { RadixDialog } from "../../../UI/Elements/Dialog";
import * as Dialog from "@radix-ui/react-dialog";

interface PizzaAddDialogProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function PizzaAddDialog({ onClick }: PizzaAddDialogProps) {
  return (
    <RadixDialog
      triggerContent={
        <span className="w-full h-full flex items-center justify-center">
          +
        </span>
      }
      saveContent={
        <div
          style={{
            display: "flex",
            marginTop: 25,
            justifyContent: "flex-end",
          }}
        >
          <Dialog.Close asChild>
            <button className="Button green" onClick={onClick}>
              Save changes
            </button>
          </Dialog.Close>
        </div>
      }
      dialogContent={
        <>
          <Dialog.Title className="DialogTitle">Add a Pizza</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Margherita" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="toppings">
              Toppings
            </label>
            <input className="Input" id="toppings" defaultValue="@peduarte" />
          </fieldset>
        </>
      }
    />
  );
}
