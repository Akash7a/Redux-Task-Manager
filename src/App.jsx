import React from 'react'
import AddTodo from './componenents/AddTodo'
import TodoItem from './componenents/TodoItem'

const App = () => {
  return (
    <>
      <div className=" shadow-sm shadow-gray  p-3">
        <h1 className='text-center font-bold text-3xl mt-3 text-white py-4'>Redux Toolkit</h1>
        <TodoItem />
      </div>
    </>
  )
}

export default App