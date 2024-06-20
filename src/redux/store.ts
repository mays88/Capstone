import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import todosReducer from "@/slices/todosSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { todos: todosReducer },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
