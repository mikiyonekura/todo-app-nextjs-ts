import { Task } from "./types";

//types.tsで定義したTodo型の配列を返す関数を作成
export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch('http://localhost:3001/tasks', {
        cache: 'no-cache',
    });
    const todos = res.json();

    return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const todos = res.json();

    return todos;
};