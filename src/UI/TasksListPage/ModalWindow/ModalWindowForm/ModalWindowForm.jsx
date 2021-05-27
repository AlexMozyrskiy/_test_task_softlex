import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { createNewTaskThunkCreator } from "../../../../state/features/taskList/thunkCreators";
import { useDispatch } from "react-redux";

export const ModalWindowForm = () => {

    // ----------------------- Hoocks ------------------------------
    const dispatch = useDispatch();
    const [isButtonLoadingActive, setIsButtonLoadingActive] = useState(false);
    // ----------------------- / Hoocks ----------------------------


    const onFinish = (values) => {
        const {username, email, text} = {...values}
        debugger
        setIsButtonLoadingActive(true);                                 // включаем лоадер на кнопке
        dispatch(createNewTaskThunkCreator(username, email, text));     // посылаем на сервер новую таску и в случае положтельного ответа от сервера сетаем ее встейт
        setIsButtonLoadingActive(false);                                // отключаем лоадер на кнопке
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: 'Is not a valid email!',
        },
    };

    return (
        <>
            <Form
                name="newTaskForm"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Task Text"
                    name="text"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 20 },
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ margin: "0 auto" }} loading={isButtonLoadingActive} >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}