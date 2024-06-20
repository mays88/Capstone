"use client";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/redux/store";
import { fetchData } from "@/slices/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "@/slices/todosSlice";
import Task from "./Task";
import CreateTodoForm from "./CreateTodoForm";
// import { v4 as uuidv4 } from "uuid";
import styles from "./TodoList.module.css";

function TodoList() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useSelector(
        (state: RootState) => state.todos
    );

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const todos = useSelector(selectTodos);

    return (
        <>
            <div className={styles.todoWrapper}>
                <h1>Todo List</h1>
                <CreateTodoForm />

                {todos &&
                    todos.map((item: any) => {
                        return (
                            <Task
                                key={item.id}
                                task={item}
                                // removeTweet={removeTweet}
                                // updateTweet={updateTweet}
                            />
                        );
                    })}
            </div>
        </>
    );
}
export default TodoList;
