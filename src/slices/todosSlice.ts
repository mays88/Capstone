import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createTask, deleteTask, updTask } from "@/api/todoApi";
import { AppThunk, RootState } from "@/redux/store";
import axios from "axios";

type MyState = {
    data: any;
    loading: boolean;
    error: string | null;
};

const initialState: MyState = {
    data: null,
    loading: false,
    error: null,
};
// const todos = getTask();
export const fetchData = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchDataStart());
        const data = await fetchTodos(); // Replace this with your promise function
        dispatch(fetchDataSuccess(data));
    } catch (error: any) {
        dispatch(fetchDataFailure(error.message));
    }
};
export const fetchTodos = async () => {
    try {
        const response = await axios.get(
            "https://oyster-app-3xg9q.ondigitalocean.app/api/v1/todos"
        );
        console.log(response.data.data.todos);

        return response.data.data.todos;
    } catch (error) {
        console.error(error);
    }
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask: (state, action) => {
            createTask(action.payload);
        },
        removeTask: (state, action) => {
            deleteTask(action.payload.id);
            // console.log(action.payload.id);
            // state.todos.filter((t) => t.id !== action.payload.id);
        },
        updateTask: (state, action) => {
            updTask(action.payload);

            // return {
            //     ...state,
            //     todos: [...state.data, action.payload],
            // };
            // state.data.map((t) => {
            //     if (t.id === action.payload.id) {
            //         t.title = action.payload.title;
            //     } else return t;
            // });
        },
        fetchDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        // editTask:
        // increase: (state, action) => {
        //     state.count += action.payload;
        // },
        // decrease: (state, action) => {
        //     state.count -= action.payload;
        // },
    },
});

// export main reducer

export default todosSlice.reducer;

// Selectors
export const selectTodos = (state: RootState) => state.todos.data;

// Actions
export const {
    addTask,
    removeTask,
    updateTask,
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
} = todosSlice.actions;
