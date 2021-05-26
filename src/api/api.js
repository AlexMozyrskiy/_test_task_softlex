import * as axios from "axios";

const axiosInstance = axios.create({
    // withCredentials: true,
    baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2/",
    // headers: {
    //     "API-KEY": "9aff8b45-5e6b-4151-bfce-c962b4066e73"
    // }
});

/* Константы для запросов */
const developerName = "AlexMozyrskiy";
// const tasksCount = 3;


export const api = {
    getTasks(page = 1, sort_field = "id", sort_direction = "asc", devName = developerName) {
        return axiosInstance.get(`?developer=${devName}&page=${page}&sort_field =${sort_field}$sort_direction=${sort_direction}`)
            .then(response => {
                return response;
            });
    },
    setTask(username, email, text, devName = developerName) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("text", text);
        debugger
        return axiosInstance.post(`/create?developer=${devName}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
};