import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import {
  selectSortByParameter, selectSortByOrder,
  selectCurrentPage, selectIsTasksLoaded
} from "./state/features/taskList/selectors";
import { setTaskListThunkCreator } from './state/features/taskList/thunkCreators';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import { MyHeader } from './UI/MyHeader/MyHeader';
import { TasksListPage } from './UI/TasksListPage/TasksListPage';

const { Content } = Layout;

export const App = () => {

  // ----------------------- Hoocks ------------------------------
  const sortByOrder = useSelector(selectSortByOrder);
  const sortByParameter = useSelector(selectSortByParameter);
  const currentPage = useSelector(selectCurrentPage);
  const isTasksLoaded = useSelector(selectIsTasksLoaded);
  const dispath = useDispatch();

  useEffect(() => {
    if (!isTasksLoaded) {
      dispath(setTaskListThunkCreator(currentPage, sortByParameter, sortByOrder))
    }
  });
  // / ----------------------- Hoocks ----------------------------

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