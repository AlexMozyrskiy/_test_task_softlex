import React from "react";
import styles from "./TaskList.module.css";

export const TaskList = () => {
    return (
        <div className={styles.task_list_wrapper}>
            <ul>
                <li>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Task Text</div>
                    <div>Status</div>
                </li>
                <li>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Task Text</div>
                    <div>Status</div>
                </li>
                <li>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Task Text</div>
                    <div>Status</div>
                </li>
            </ul>
            <div className={styles.task_list_new_task}>Create New Task</div>
        </div>
    );
}