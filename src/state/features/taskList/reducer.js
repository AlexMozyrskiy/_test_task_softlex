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
    totalTaskCount: 0
};

const taskListReducers = (state = initialState, action) => {
    switch (action.type) {

        case TASK_LIST_DATA: {
            const superState = {
                ...state,
                taskListData: [...action.taskListDataFromBackEnd],
                totalTaskCount: action.totalTaskCount
            };
            return superState;
        }

        default: return state;
    }
};

export default taskListReducers;