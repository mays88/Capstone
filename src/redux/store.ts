import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import todosReducer from "@/slices/todosSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { todos: todosReducer },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
