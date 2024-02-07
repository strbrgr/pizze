import { createSlice } from "@reduxjs/toolkit";

type Pizza = {
  id: number;
  name: string;
  toppings: string[];
};

const initialState: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    toppings: ["Tomato Sauce", "Mozzarella Cheese", "Basil Leaves"],
  },
  {
    id: 2,
    name: "Pepperoni",
    toppings: ["Tomato Sauce", "Pepperoni", "Mozzarella Cheese"],
  },
  {
    id: 3,
    name: "Vegetarian",
    toppings: ["Tomato Sauce", "Bell Peppers", "Onions", "Olives", "Mushrooms"],
  },
];

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // setPizza: (state, action) => {
    // const { key, value } = action.payload;
    // state[key] = value;
    // },
  },
});
