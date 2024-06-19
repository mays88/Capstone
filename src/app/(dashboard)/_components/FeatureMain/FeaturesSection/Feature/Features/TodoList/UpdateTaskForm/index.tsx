/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { Button } from "../styles/Button.styled";
// import { IoClose } from "react-icons/io5";
// import { Modal } from "../styles/Modal.styled";
import { updateTask } from "@/slices/todosSlice";
import styles from "./UpdateTaskForm.module.css";
function UpdateTaskForm({
    task,
    setShowModal,
}: {
    task: any;
    setShowModal: any;
}) {
    const dispatch = useDispatch();
    const [newTaskContent, setNewTaskContent] = useState(task.title);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(updateTask({ id: task.id, title: newTaskContent }));
        // updateTweet(tweet.id, newTweetContent);
        setShowModal(false);
    };

    return (
        <div className={styles.modal}>
            <div className="closeIcon">
                <button
                    title="modal"
                    type="button"
                    onClick={() => setShowModal(false)}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Update Task"
                    value={newTaskContent}
                    onChange={(e) => {
                        setNewTaskContent(e.target.value);
                    }}
                />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}
export default UpdateTaskForm;
