/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/slices/todosSlice";
import { useState } from "react";
import styles from "./CreateTodo.module.css";
function CreateTodoForm() {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content) {
            return;
        }

        dispatch(
            addTask({
                userId: 1,
                id: Math.random() + 10 * 10,
                title: content,
                completed: false,
            })
        );
        setContent("");
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="content"
                id="content"
                placeholder="Add Task"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
                className={styles.formInput}
            />
            <input className={styles.formButton} type="submit" value="Add" />
        </form>
    );
}
export default CreateTodoForm;
