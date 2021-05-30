import React from "react";
import { setTaskListThunkCreator } from "../../../state/features/taskList/thunkCreators";
import styles from "./SortBy.module.css";
import { Select } from 'antd';
import { useDispatch } from "react-redux";

const { Option } = Select;


export const SortBy = () => {

    // ----------------------- Hoocks ------------------------------
    const dispath = useDispatch();
    // / ----------------------- Hoocks ----------------------------

    function handleChangeOrder(value = "asc") {
        console.log(`selected ${value}`);
    }
    function handleChangeParameter(value = "id") {
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.wrapper}>
            <p>Sort &nbsp;</p>

            <Select defaultValue="asc" style={{ width: 180 }} onChange={handleChangeOrder}>
                <Option value="asc">ascending</Option>
                <Option value="desc">descending</Option>
            </Select>

            &nbsp;

            <p>by &nbsp;</p>
            
            <Select defaultValue="id" style={{ width: 180 }} onChange={handleChangeParameter}>
                <Option value="id">Task Number</Option>
                <Option value="username">User Name</Option>
                <Option value="email">Email</Option>
                <Option value="text">Task Text</Option>
            </Select>
        </div>
    );
}