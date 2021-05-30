import {
    TASK_LIST_DATA, IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
} from "./actionTypes";

const initialState = {
    taskListData: [{
        id: null,
        username: "",
        email: "",
        text: "",
        status: null
    }],
    totalTaskCount: 0,
    isModalWindowCreateTaskActive: false,
    isTasksLoaded: false                    // загружены ли таски в стейт после ответа от сервера
};

const taskListReducers = (state = initialState, action) => {
    switch (action.type) {

        case TASK_LIST_DATA: {
            const superState = {
                ...state,
                taskListData: [...action.taskListDataFromBackEnd],
                totalTaskCount: +action.totalTaskCount,
                isTasksLoaded: true
            };
            return superState;
        }

        case IS_MODAL_WINDOW_CREATE_TASK_ACTIVE: {
            const superState = {
                ...state,
                isModalWindowCreateTaskActive: action.isModalWindowCreateTaskActive
            };
            return superState;
        }

        default: return state;
    }
};

export default taskListReducers;