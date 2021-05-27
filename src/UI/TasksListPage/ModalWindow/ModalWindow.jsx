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

    // ----------- При нажатии на кнопку ок в модальном окне заполнения новой таски ----------
    const handleOk = (values) => {
        // setIsModalButtonLoading(true);
        setTimeout(() => {
            // setIsModalButtonLoading(false);
            dispatch(setIsModalWindowCreateTaskActiveActionCreator(false));
        }, 3000);
        console.log('Success:', values);
    };
    // ----------- / При нажатии на кнопку ок в модальном окне заполнения новой таски --------

    // ----------- При нажатии на кнопку ок в модальном окне заполнения новой таски ----------
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // ----------- / При нажатии на кнопку ок в модальном окне заполнения новой таски --------



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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