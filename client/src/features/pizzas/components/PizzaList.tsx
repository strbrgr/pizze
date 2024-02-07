import { RadixDialog } from "../../../UI/Elements/Dialog";
// import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import PizzaCard from "./PizzaCard";
import * as Dialog from "@radix-ui/react-dialog";

export default function PizzaList() {
  const pizzas = useAppSelector((state) => state.pizza);

  function handleAddClick() {
    // useAppDispatch("pizza/addPizza", )
  }

  return (
    <>
      <ul className="flex gap-4">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
        <li className="flex items-center justify-center list-none w-48 border-2 border-gray-50 rounded-md p-4 text-gray-300">
          <span className="text-6xl">+</span>
        </li>
      </ul>
      <RadixDialog
        triggerContent={
          <button className="Button violet" onClick={handleAddClick}>
            Edit profile
          </button>
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
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
        }
        dialogContent={
          <>
            <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input className="Input" id="username" defaultValue="@peduarte" />
            </fieldset>
          </>
        }
      />
    </>
  );
}
