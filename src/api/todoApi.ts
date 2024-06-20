import axios from "axios";

export async function createTask(task: string) {
    try {
        const response = await axios.post(
            `https://oyster-app-3xg9q.ondigitalocean.app/api/v1/todos`,
            { userId: 88, completed: false, title: task }
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updTask(task: any) {
    try {
        const response = await axios.patch(
            `https://oyster-app-3xg9q.ondigitalocean.app/api/v1/todos/${task.id}`,
            { ...task, title: task.title }
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function deleteTask(taskId: any) {
    try {
        const response = await axios.delete(
            `https://oyster-app-3xg9q.ondigitalocean.app/api/v1/todos/${taskId}`
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
