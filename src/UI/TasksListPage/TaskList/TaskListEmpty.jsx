import React from "react";
import { Empty } from 'antd';
import styles from "./TaskList.module.css";

export const TaskListEmpty = () => {

    return (
        <div className={styles.task_list_wrapper}>

            <Empty />

        </div>
    );
}