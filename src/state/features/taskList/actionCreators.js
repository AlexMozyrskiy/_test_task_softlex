import {
    TASK_LIST_DATA, IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
    IS_TASKS_LOADED
} from "./actionTypes";

/* сетаем в стейт полученный с бекенда список задач */
export const setTaskListDataActionCreator = ( taskListDataFromBackEnd, totalTaskCount ) => {
    return {
        type: TASK_LIST_DATA,
        taskListDataFromBackEnd,
        totalTaskCount
    }
};

/* сетаем в стейт активно ли модальное окно создание новой таски */
export const setIsModalWindowCreateTaskActiveActionCreator = ( boolVar ) => {
    return {
        type: IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
        isModalWindowCreateTaskActive: boolVar
    }
};

/* загружены ли в стейт таски из ответа от сервера */
export const setIsTasksLoadedActionCreator = ( boolVar ) => {
    return {
        type: IS_TASKS_LOADED,
        isTasksLoaded: boolVar
    }
};