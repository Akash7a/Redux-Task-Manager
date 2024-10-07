import { createSlice, nanoid } from "@reduxjs/toolkit";

const saveTodoLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}
const loadTodoFromLocalStorage = () => {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
}
const initialState = {
    todos: loadTodoFromLocalStorage()
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(todo);
            saveTodoLocalStorage(state.todos);
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
            saveTodoLocalStorage(state.todos);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
            saveTodoLocalStorage(state.todos);
        },
        toggleTodo: (state, action) => {
            const { id } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
            saveTodoLocalStorage(state.todos);
        }
    }
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer; 