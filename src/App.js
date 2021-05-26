import styles from './App.module.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import { setTaskListThunkCreator } from './state/features/taskList/thunkCreators';
import { api } from "./api/api";
import { useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MyHeader } from './UI/MyHeader/MyHeader';

const { Header, Content, Footer } = Layout;

export const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    // dispath(setTaskListThunkCreator())
  });

  return (
    <div className="App">
      <Layout className="layout">

        <MyHeader />

        <Content>
          <Switch>
            {/* <Route exact path='/' render={() => <Employer />} /> */}
            {/* <Route exact path='/login' render={() => <TermsOfUse />} /> */}
          </Switch>
        </Content>

        <Footer>Footer</Footer>

      </Layout>
    </div>
  );
}