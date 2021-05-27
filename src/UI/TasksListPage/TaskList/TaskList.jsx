import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewTaskButton } from "../CreateNewTaskButton/CreateNewTaskButton";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { selectTaskListData } from "../../../state/features/taskList/selectors";
import styles from "./TaskList.module.css";

export const TaskList = () => {

    // ----------------------- Hoocks ------------------------------
    const dispatch = useDispatch();
    const taskList = useSelector(selectTaskListData);
    // / ----------------------- Hoocks ----------------------------

    // список таксков jsx
    const taskListJSX = taskList.map(item => {
        return (
            <li>
                <div>Task Number: {item.id}</div>
                <div>Name: {item.username}</div>
                <div>Email: {item.email}</div>
                <div>Task Text: {item.text}</div>
                <div>Status: {item.status}</div>
            </li>
        );
    });

    return (
        <div className={styles.task_list_wrapper}>

            <ul>
                {
                    taskListJSX
                }
            </ul>

            <CreateNewTaskButton />

            <ModalWindow />

        </div>
    );
}