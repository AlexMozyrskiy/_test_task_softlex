import React, { useState } from "react";
import { setIsModalWindowCreateTaskActiveActionCreator } from "../../../state/features/taskList/actionCreators";
import styles from "./CreateNewTaskButton.module.css";
import { useDispatch } from "react-redux";

export const CreateNewTaskButton = () => {

    // ----------------------- Hoocks ------------------------------
    const dispatch = useDispatch();
    // / ----------------------- Hoocks ----------------------------

    return (
        <div className={styles.task_list_new_task} onClick={() => dispatch(setIsModalWindowCreateTaskActiveActionCreator(true))}>Create New Task</div>
    );
}