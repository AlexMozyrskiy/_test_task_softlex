import {
    TASK_LIST_DATA, IS_MODAL_WINDOW_CREATE_TASK_ACTIVE,
    SET_ONE_TASK
} from "./actionTypes";

const initialState = {
    taskListData: [{
        id: null,
        username: "",
        email: "",
        text: "",
        status: null
    }],
    totalTaskCount: 1,
    isModalWindowCreateTaskActive: false
};

const taskListReducers = (state = initialState, action) => {
    switch (action.type) {

        case TASK_LIST_DATA: {
            const superState = {
                ...state,
                taskListData: [...action.taskListDataFromBackEnd],
                totalTaskCount: +action.totalTaskCount
            };
            return superState;
        }

        // case SET_ONE_TASK: {
        //     const superState = {
        //         ...state,
        //         taskListData: [action.newTask, ...state.taskListData],
        //         totalTaskCount: state.totalTaskCount + 1
        //     };
        //     debugger
        //     return superState;
        // }

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