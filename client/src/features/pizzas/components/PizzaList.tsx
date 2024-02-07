// import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { PizzaAddDialog } from "./PizzaAddDialog";
import PizzaCard from "./PizzaCard";

export default function PizzaList() {
  const pizzas = useAppSelector((state) => state.pizza);

  function handleSaveClick() {
    console.log("clicked");
  }

  return (
    <>
      <ul className="flex gap-4">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
        <li className="flex items-center cursor-pointer justify-center list-none w-48 border-2 border-gray-50 rounded-md text-gray-300">
          <PizzaAddDialog onClick={handleSaveClick} />
        </li>
      </ul>
    </>
  );
}
