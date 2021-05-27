import {
    TASK_LIST_DATA, IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
    // SET_ONE_TASK
} from "./actionTypes";


// /* в случае успешной передачи новой таски на сервер сетаем в стейт */
// export const setOneTaskActionCreator = ( newTask ) => {
//     return {
//         type: SET_ONE_TASK,
//         newTask
//     }
// };

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