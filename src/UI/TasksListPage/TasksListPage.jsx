import React from "react";
import { selectTotalTaskCount, selectIsTasksLoaded } from "../../state/features/taskList/selectors";
import { useSelector } from "react-redux";
import { TaskList } from "./TaskList/TaskList";
import { TaskListEmpty } from "./TaskList/TaskListEmpty";
import { TaskListLoading } from "./TaskList/TaskListLoading";
import { SortBy } from "./SortBy/SortBy";


export const TasksListPage = () => {

    // ----------------------- Hoocks ------------------------------
    const totalTaskCount = useSelector(selectTotalTaskCount);
    const isTasksLoaded = useSelector(selectIsTasksLoaded);
    // / ----------------------- Hoocks ----------------------------

    return (
        <div>
            <SortBy />

            {
                totalTaskCount && isTasksLoaded && <TaskList />             // если таски загружены в стейт и есть хотябы 1 таска рендерим компонент с тасками
            }
            {
                !totalTaskCount && isTasksLoaded && <TaskListEmpty />       // если таски загружены в стейт и нет тасков рендерим компонент с картинкой тасков нет
            }
            {
                !isTasksLoaded && <TaskListLoading />                       // если таски еще не загружены в стейт рендерим компонент с лоадером
            }
        </div>
    );
}