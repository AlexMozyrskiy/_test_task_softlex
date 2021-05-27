import React from "react";
import { Table, Radio, Divider } from 'antd';
import { selectTaskListData, selectTotalTaskCount } from "../../state/features/taskList/selectors";
import { useSelector } from "react-redux";
import { TaskList } from "./TaskList/TaskList";

export const TasksListPage = () => {

    // ----------------------- Hoocks ------------------------------
    const taskListData = useSelector(selectTaskListData);
    const totalTaskCount = useSelector(selectTotalTaskCount);
    // / ----------------------- Hoocks ----------------------------

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'userName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Task Text',
            dataIndex: 'text',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];

    const data = taskListData.map(item => {
        return {
            key: item.id,
            userName: item.username,
            email: item.email,
            text: item.text,
            status: item.status
        }
    });

    return (
        <div>
            {
                totalTaskCount
                ? <TaskList />
                : "Task List is Empty"
            }
        </div>
    );
}