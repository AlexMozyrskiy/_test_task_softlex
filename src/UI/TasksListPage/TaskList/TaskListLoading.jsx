import React from "react";
import { Spin, Space } from 'antd';
import styles from "./TaskList.module.css";

export const TaskListLoading = () => {

    return (
        <div className={styles.task_list_wrapper}>

                <Spin size="large" />

        </div>
    );
}