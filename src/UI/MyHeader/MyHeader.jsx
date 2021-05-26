import React from "react";
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const MyHeader = () => {
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><NavLink to="/" >Task List</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/login" >LogIn</NavLink></Menu.Item>
            </Menu>
        </Header>
    );
}