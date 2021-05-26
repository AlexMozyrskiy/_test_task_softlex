import './App.css';
import { useEffect } from 'react';
import { setTaskListThunkCreator } from './state/features/taskList/thunkCreators';
import { api } from "./api/api";
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(setTaskListThunkCreator())
    // setTaskListThunkCreator()
    // api.setTask()
  });

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}