import { useState } from "react";
import { RadixDialog } from "../../../UI/Elements/Dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { Badge } from "@radix-ui/themes";

interface PizzaAddDialogProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const initialEntry = {
  name: "",
  toppings: [""],
};

export function PizzaAddDialog({ onClick }: PizzaAddDialogProps) {
  const [pizza, setPizza] = useState(initialEntry);
  const [currentTopping, setCurrentTopping] = useState("");

  function handleAddToppingClick() {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, currentTopping],
    });
    setCurrentTopping("");
  }

  return (
    <RadixDialog
      triggerContent={
        <span className="w-full h-full text-6xl flex items-center justify-center">
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
            <input
              className="Input"
              id="name"
              value={pizza.name}
              placeholder="Add a Name"
              onChange={(e) =>
                setPizza({
                  ...pizza,
                  name: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="toppings">
              Toppings
            </label>
            <input
              className="Input"
              type="text"
              id="toppings"
              value={currentTopping}
              placeholder="Add a topping"
              onChange={(e) => setCurrentTopping(e.target.value)}
            />
            <button onClick={handleAddToppingClick}>+</button>
          </fieldset>
          <div className="flex gap-2">
            {pizza.toppings.map((t) => (
              <Badge key={t} color="orange">
                {t}
              </Badge>
            ))}
          </div>
        </>
      }
    />
  );
}
