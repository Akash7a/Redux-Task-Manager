import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const AddTodo = ({ editingTodo, setEditingTodo }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (editingTodo) {
            setTitle(editingTodo.text);
        }
    }, [editingTodo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title) return;
        if (editingTodo) {
            dispatch(updateTodo({ id: editingTodo.id, text: title }));
            setEditingTodo(null);
        } else {
            dispatch(addTodo(title));
        }
        setTitle("");
    }
    return (
        <>
            <form onSubmit={submitHandler} className='bg-white flex items-center px-2 py-3'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='py-3 outline-none  px-2 bg-orange-400  placeholder:text-white w-11/12 shadow-lg shadow-black' placeholder='Enter Your Task... Here.' />
                <input type="submit" value={editingTodo ? "Save Changes" : "Add"} className='px-3 py-3 font-bold bg-blue-500 shadow-lg shadow-black' />
            </form>
        </>
    )
}

export default AddTodo