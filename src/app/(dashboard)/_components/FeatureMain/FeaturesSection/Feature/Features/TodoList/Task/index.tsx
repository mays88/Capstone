/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { removeTask, selectTodos } from "@/slices/todosSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import UpdateTaskForm from "../UpdateTaskForm";
import styles from "./Task.module.css";

type TaskProps = {
    task: any;
};

function Task({ task }: TaskProps) {
    const [showModal, setShowModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    // const todos = useSelector(selectTodos);
    // const [showModal, setShowModal] = useState(false);
    const checkHandler = () => {
        setChecked(!checked);
    };

    return (
        <>
            {showModal &&
                createPortal(
                    <UpdateTaskForm task={task} setShowModal={setShowModal} />,
                    document.body
                )}

            <div className={styles.formContainer}>
                <form
                    className={styles.form}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <input
                        title="checkbox"
                        type="checkbox"
                        name="checkbox"
                        checked={checked}
                        onChange={checkHandler}
                    />

                    <p className={styles.taskTitle}>{task.title}</p>
                    <div className={styles.buttonContainer}>
                        <button
                            type="submit"
                            className={styles.formButton}
                            onClick={(e) => {
                                e.preventDefault();
                                setShowModal(true);
                            }}>
                            edit
                        </button>
                        {checked && (
                            <button
                                type="submit"
                                className={styles.formButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(removeTask({ id: task.id }));
                                }}>
                                delete
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
export default Task;
