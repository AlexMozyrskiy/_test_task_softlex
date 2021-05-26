import {
    TASK_LIST_DATA
} from "./actionTypes";

const initialState = {
    taskListData: [{
        id: null,
        username: "",
        email: "",
        text: "",
        status: null
    }],
};

const taskListReducers = (state = initialState, action) => {
    switch (action.type) {

        case TASK_LIST_DATA: {
            const superState = {
                ...state,
                taskListData: [...action.taskListDataFromBackEnd]

            };
            return superState;
        }

        default: return state;
    }
};

export default taskListReducers;