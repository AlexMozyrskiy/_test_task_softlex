import { setTaskListDataActionCreator } from "./actionCreators";
import taskListReducers from "./reducer";

let initialState = {
    taskListData: [{
        id: null,
        username: "",
        email: "",
        text: "",
        status: null
    }],
};

const dataFromBackEnd = [
    {
        id: 1,
        username: "John",
        email: "john@example.com",
        text: "test 1",
        status: 10
    },
    {
        id: 2,
        username: "Marta",
        email: "Marta@example.com",
        text: "test 2",
        status: 10
    },
    {
        id: 3,
        username: "Fred",
        email: "Fred@example.com",
        text: "test 3",
        status: 10
    }
];

it("Тест после сета в стейт данных по таскам общее их количество должно === 3", () => {
    // 1. test data
    let action = setTaskListDataActionCreator(dataFromBackEnd);

    // 2. action
    let newState = taskListReducers(initialState, action);

    // 3. expectation
    expect(newState.taskListData.length).toBe(3);
});
/* / Тест после сета в стейт данных по таскам общее их количество должно === 3 */

it("Тест после сета в стейт данных по таскам имя 3 у третьего таска === Fred", () => {
    // 1. test data
    let action = setTaskListDataActionCreator(dataFromBackEnd);

    // 2. action
    let newState = taskListReducers(initialState, action);

    // 3. expectation
    expect(newState.taskListData[2].username).toBe("Fred");
});
/* / Тест после сета в стейт данных по таскам имя 3 у третьего таска === Fred */