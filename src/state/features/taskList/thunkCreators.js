import {
    setTaskListDataActionCreator
} from "./actionCreators";
import { api } from "../../../api/api";


export const setTaskListThunkCreator = () => async (dispatch) => {
    const dataFromBackEnd = await api.getTasks();       // запрос на сервер за тасками
    if (dataFromBackEnd.data.status === "ok") {         // если ответ от сервера успешен
        if (dataFromBackEnd.data.message.tasks.length) {       // если таски есть
            debugger
            dispatch(setTaskListDataActionCreator(dataFromBackEnd.data.message.tasks, dataFromBackEnd.data.message.total_task_count)); // задиспатчим таски в стейт
        }
    }
}