import { useAppSelector } from "../../hooks/useAppSelector";

export default function PizzasPage() {
  const pizzas = useAppSelector((state) => state.pizza);
  return <>{JSON.stringify(pizzas)}</>;
}
