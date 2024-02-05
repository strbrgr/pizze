import { useRoutes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import PizzasPage from "./Pizzas/PizzasPage";

export function AppRoutes() {
  const routes = [
    {
      path: "*",
      element: <HomePage />,
    },
    {
      path: "/pizzas",
      element: <PizzasPage />,
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
