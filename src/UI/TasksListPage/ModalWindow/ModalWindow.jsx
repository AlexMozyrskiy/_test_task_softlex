import React from "react";
import { setIsModalWindowCreateTaskActiveActionCreator } from "../../../state/features/taskList/actionCreators";
import { Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalWindowCreateTaskActive } from "../../../state/features/taskList/selectors";
import { ModalWindowForm } from "./ModalWindowForm/ModalWindowForm";

export const ModalWindow = () => {
    // ----------------------- Hoocks ------------------------------
    const dispatch = useDispatch();
    const isModalVisible = useSelector(selectIsModalWindowCreateTaskActive);
    // / ----------------------- Hoocks ----------------------------

    return (
        <>
            <Modal
                visible={isModalVisible}
                title="Creating New Task"
                onCancel={() => dispatch(setIsModalWindowCreateTaskActiveActionCreator(false))}
                footer={[]}
            >
                <ModalWindowForm />

            </Modal>
        </>
    );
}