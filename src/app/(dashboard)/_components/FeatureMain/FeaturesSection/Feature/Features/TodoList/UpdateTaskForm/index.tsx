/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { Button } from "../styles/Button.styled";
// import { IoClose } from "react-icons/io5";
// import { Modal } from "../styles/Modal.styled";
import { updateTask } from "@/slices/todosSlice";
import styles from "./UpdateTaskForm.module.css";
import { updTask } from "@/api/todoApi";
function UpdateTaskForm({
    task,
    setShowModal,
}: {
    task: any;
    setShowModal: any;
}) {
    const dispatch = useDispatch();
    const [newTaskContent, setNewTaskContent] = useState(task.title);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await updTask(task);

        dispatch(updateTask({ id: task._id, title: newTaskContent }));

        setShowModal(false);
    };

    return (
        <div className={styles.modal}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Update Task"
                    className={styles.formInput}
                    value={newTaskContent}
                    onChange={(e) => {
                        setNewTaskContent(e.target.value);
                    }}
                />
                <div className={styles.buttonContainer}>
                    <input
                        type="submit"
                        value="Save"
                        className={styles.formSubmit}
                    />
                    <button
                        className={styles.closeIcon}
                        title="modal"
                        type="button"
                        onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
export default UpdateTaskForm;
