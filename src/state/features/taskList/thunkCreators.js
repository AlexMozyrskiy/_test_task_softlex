import {
    setTaskListDataActionCreator/*, setOneTaskActionCreator */
} from "./actionCreators";
import { api } from "../../../api/api";


// санка делает запрос на бэк и сетает в стейт таски полученные от сервера
export const setTaskListThunkCreator = () => async (dispatch) => {
    const dataFromBackEnd = await api.getTasks();       // запрос на сервер за тасками
    if (dataFromBackEnd.data.status === "ok") {         // если ответ от сервера успешен
        if (dataFromBackEnd.data.message.tasks.length) {       // если таски есть
            dispatch(setTaskListDataActionCreator(dataFromBackEnd.data.message.tasks, dataFromBackEnd.data.message.total_task_count)); // задиспатчим таски в стейт
        }
    }
}

// санка посылает на сервер информацию по новой таске
export const createNewTaskThunkCreator = (username, email, text) => async (dispatch) => {
    const responseFromBackEnd = await api.setTask(username, email, text);       // шлем на сервер новую таску
    if (responseFromBackEnd.data.status === "ok") {         // если ответ от сервера успешен
        const dataFromBackEnd = await api.getTasks();       // запрос на сервер за тасками
        if (dataFromBackEnd.data.status === "ok") {         // если ответ от сервера успешен
            if (dataFromBackEnd.data.message.tasks.length) {       // если таски есть
                dispatch(setTaskListDataActionCreator(dataFromBackEnd.data.message.tasks, dataFromBackEnd.data.message.total_task_count)); // задиспатчим таски в стейт
            }
        }
    }
}