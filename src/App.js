import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import { setTaskListThunkCreator } from './state/features/taskList/thunkCreators';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { MyHeader } from './UI/MyHeader/MyHeader';
import { TasksListPage } from './UI/TasksListPage/TasksListPage';

const { Content, Footer } = Layout;

export const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(setTaskListThunkCreator())
  });

  return (
    <div className="App">
      <Layout className="layout">

        <MyHeader />

        <Content>
          <Switch>
            <Route exact path='/' render={() => <TasksListPage />} />
          </Switch>
        </Content>

      </Layout>
    </div>
  );
}