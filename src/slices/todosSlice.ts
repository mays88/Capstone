import { createSlice } from "@reduxjs/toolkit";

import { deleteTask, getTask } from "@/api/todoApi";
import { RootState } from "@/redux/store";
type Todo = {
    userId: 1;
    id: 1;
    title: "delectus aut autem";
    completed: false;
};
const todos = async () => {
    const response = await getTask();
    return response;
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: todos,
    },
    reducers: {
        addTask: (state, action) => {
            updateTask(action.payload);
        },
        removeTask: (state, action) => {
            deleteTask(action.payload.id);
            // console.log(action.payload.id);
            // state.todos.filter((t) => t.id !== action.payload.id);
        },
        updateTask: (state, action) => {
            console.log(state.todos);

            // state.todos.map((t) => {
            //     if (t.id === action.payload.id) {
            //         t.title = action.payload.title;
            //     } else return t;
            // });
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
export const selectTodos = (state: RootState) => state.todos.todos;

// Actions
export const { addTask, removeTask, updateTask } = todosSlice.actions;
