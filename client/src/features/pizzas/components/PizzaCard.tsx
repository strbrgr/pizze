import { Pizza } from "../store/pizza.types";
import { PizzaDeleteDialog } from "./PizzaDeleteDialog";

export default function PizzaCard(pizza: Pizza) {
  function handleDeleteClick() {
    console.log("deleted");
  }

  return (
    <li
      key={pizza.id}
      className="list-none w-48 border-2 border-gray-50 rounded-md p-4 text-gray-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{pizza.name}</h3>
        <PizzaDeleteDialog onClick={handleDeleteClick} />
      </div>

      {pizza.toppings.map((t) => (
        <span key={t} className="font-semibold">
          {`${t + ", "}`}
        </span>
      ))}
    </li>
  );
}
