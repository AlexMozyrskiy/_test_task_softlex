import {
    TASK_LIST_DATA
} from "./actionTypes";

/* сетаем в стейт полученный с бекенда список задач */
export const setTaskListDataActionCreator = ( taskListDataFromBackEnd ) => {
    return {
        type: TASK_LIST_DATA,
        taskListDataFromBackEnd
    }
};