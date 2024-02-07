import { Button } from "@radix-ui/themes";
import { Container } from "../../UI/Elements/Container/Container";
import PizzaList from "../../features/pizzas/components/PizzaList";

export default function PizzasPage() {
  return (
    <>
      <Container>
        <PizzaList />
        <Button>T</Button>
      </Container>
    </>
  );
}
