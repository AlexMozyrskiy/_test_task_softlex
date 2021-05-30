export const selectTaskListData = (state) => {
    return state.taskList.taskListData;
}

export const selectTotalTaskCount = (state) => {
    return state.taskList.totalTaskCount;
}

export const selectIsModalWindowCreateTaskActive = (state) => {
    return state.taskList.isModalWindowCreateTaskActive;
}

export const selectIsTasksLoaded = (state) => {
    return state.taskList.isTasksLoaded;
}

