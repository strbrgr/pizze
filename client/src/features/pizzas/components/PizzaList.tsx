import { RootState, useAppSelector } from "../../../core/store";
import { Pizza } from "../store/pizza.types";
import { PizzaAddDialog } from "./PizzaAddDialog";
import PizzaCard from "./PizzaCard";

export default function PizzaList() {
  const pizzas = useAppSelector((state: RootState) => state.pizza);

  return (
    <>
      <ul className="flex gap-4">
        {pizzas.map((pizza: Pizza) => (
          <PizzaCard key={pizza.name} {...pizza} />
        ))}
        <li className="flex items-center cursor-pointer justify-center list-none w-48 border-2 border-gray-50 rounded-md text-gray-300">
          <PizzaAddDialog />
        </li>
      </ul>
    </>
  );
}
