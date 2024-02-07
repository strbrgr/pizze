import { IconButton } from "@radix-ui/themes";
import { Pizza } from "../store";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function PizzaCard(pizza: Pizza) {
  function handleDeleteClick() {}

  return (
    <li
      key={pizza.id}
      className="list-none w-48 border-2 border-gray-50 rounded-md p-4 text-gray-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{pizza.name}</h3>
        <IconButton size="1" onClick={handleDeleteClick}>
          <Cross1Icon width="10" height="10" />
        </IconButton>
      </div>

      {pizza.toppings.map((t) => (
        <span key={t} className="font-semibold">
          {`${t + ", "}`}
        </span>
      ))}
    </li>
  );
}
