/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { removeTask, selectTodos } from "@/slices/todosSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import UpdateTaskForm from "../UpdateTaskForm";

type TaskProps = {
    task: any;
};

function Task({ task }: TaskProps) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    // const todos = useSelector(selectTodos);
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal &&
                createPortal(
                    <UpdateTaskForm task={task} setShowModal={setShowModal} />,
                    document.body
                )}

            <form style={{ display: "flex", justifyContent: "space-between" }}>
                <input title="checkbox" type="checkbox" name="checkbox" />

                <div>{task.title}</div>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                    }}>
                    edit
                </button>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeTask({ id: task.id }));
                    }}>
                    delete
                </button>
            </form>
        </>
    );
}
export default Task;
