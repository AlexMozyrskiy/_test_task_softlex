import {
    TASK_LIST_DATA, IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
    IS_TASKS_LOADED
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
    isTasksLoaded: false,                    // загружены ли таски в стейт после ответа от сервера
    sortByOrder: "asc",
    sortByParameter: "id",
    currentPage: 1
};

const taskListReducers = (state = initialState, action) => {
    switch (action.type) {

        case TASK_LIST_DATA: {
            const superState = {
                ...state,
                taskListData: [...action.taskListDataFromBackEnd],
                totalTaskCount: +action.totalTaskCount,
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

        case IS_TASKS_LOADED: {
            const superState = {
                ...state,
                isTasksLoaded: action.isTasksLoaded
            };
            return superState;
        }

        default: return state;
    }
};

export default taskListReducers;