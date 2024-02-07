import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pizza } from "./pizza.types";

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
    addPizza: (state, action: PayloadAction<Pizza>) => {
      return [...state, action.payload];
    },
  },
});
