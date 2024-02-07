import { pizzaSlice } from "../../features/pizzas/store/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  pizza: pizzaSlice.reducer,
});

export const storeConfig = {
  reducer: rootReducer,
};

export const store = configureStore(storeConfig);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
