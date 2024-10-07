(
   (1.) useSelector ( when you recieve data
             const todos = useSelector(state => state.todos);
     )
)

(2.) useDisptch( when you send Data
             const dispatch = useDispatch();
)

(3.) ( store cofigration(
 import { configureStore } from "@reduxjs/toolkit";
  import todoReducer from '../features/todo/todoSlice';

  export const store = configureStore({
    reducer: todoReducer
});

(4.) features/reduces(
    import { createSlice, nanoid } from "@reduxjs/toolkit";

const saveTodosToLocalSorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const loadTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
}
const initialState = {
    todos: loadTodosFromLocalStorage(),
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed:false,
            }
            state.todos.push(todo);
            saveTodosToLocalSorage(state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            saveTodosToLocalSorage(state.todos);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, text } : todo)
            saveTodosToLocalSorage(state.todos);
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
)
)
)