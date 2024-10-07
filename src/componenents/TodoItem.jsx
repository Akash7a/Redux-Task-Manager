import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';

const TodoItem = () => {
    const todos = useSelector(state => state.todos);
    const [editingTodo, setEditingTodo] = useState(null);
    const dispatch = useDispatch();

    return (
        <>
            <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
            <div className="bg-slate-200 flex flex-col">
                {
                    todos.length > 0 ? (
                        todos.map((todo) => (
                            <div key={todo.id} className='bg-white mt-2 flex items-center gap-2 px-2 py-2'>
                                <input type="checkbox" checked={todo.completed}
                                    onChange={() => dispatch(toggleTodo({ id: todo.id }))}
                                    className='w-14 h-14' />
                                <p className={`w-11/12 bg-orange-500 py-3 px-2 ${todo.completed ? "line-through text-red-700 font-bold" : ""}`}>{todo.text}</p>
                                <button className='text-3xl' onClick={()=>{
                                    if(todo.completed) return;
                                    else{
                                        setEditingTodo(todo);
                                    }
                                }} >📝</button>
                                <button className='text-3xl' onClick={() => dispatch(deleteTodo({ id: todo.id }))}>❌</button>
                            </div>
                        ))
                    ) : (
                        <li>No Tasks Added Yet ! Add Your First Task.</li>
                    )
                }
            </div>
        </>
    )
}

export default TodoItem