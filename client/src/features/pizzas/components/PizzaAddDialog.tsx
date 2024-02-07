import { useState } from "react";
import { RadixDialog } from "../../../UI/Elements/Dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { Badge } from "@radix-ui/themes";
import { useAppDispatch } from "../../../core/store";
import { Pizza } from "../store/pizza.types";

const initialEntry = {
  name: "",
  toppings: [] as string[],
};

interface AddPizzaAction {
  type: "pizza/addPizza";
  payload: Pizza;
}

export function PizzaAddDialog() {
  const [pizza, setPizza] = useState(initialEntry);
  const [currentTopping, setCurrentTopping] = useState("");
  const dispatch = useAppDispatch();

  function handleAddToppingClick() {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, currentTopping],
    });
    setCurrentTopping("");
  }

  function handleSavePizzaClick() {
    const action: AddPizzaAction = {
      type: "pizza/addPizza",
      payload: pizza,
    };
    dispatch(action);
  }

  function handleToppingInputKeyPress(
    e: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (e.key === "Enter") {
      handleAddToppingClick();
    }
  }

  return (
    <RadixDialog
      triggerContent={
        <span className="w-full h-full text-6xl flex items-center justify-center">
          +
        </span>
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
              onKeyDown={(e) => handleToppingInputKeyPress(e)}
            />
            <button
              onClick={handleAddToppingClick}
              className="disabled:cursor-not-allowed"
              disabled={!currentTopping.length}
            >
              +
            </button>
          </fieldset>
          <div className="flex gap-2 max-w-md flex-wrap">
            {pizza.toppings.map((t) => (
              <Badge key={t} color="orange">
                {t}
              </Badge>
            ))}
          </div>
        </>
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
            <button
              className="Button green disabled:cursor-not-allowed"
              onClick={handleSavePizzaClick}
              disabled={!pizza.toppings.length || !pizza.name.length}
            >
              Save changes
            </button>
          </Dialog.Close>
        </div>
      }
    />
  );
}
