import React from 'react'
import { Task } from '@/pages/types'

interface TodoProps {
    todo: Task;
}

const Todo = ({todo}: TodoProps) => {
  return (
    <li key={todo.id} className='flex border px-4 py-2 rounded-lg justify-between p-4'>
        {todo.text}
        <div>
            <button className='text-green-500 mr-3'>完了</button>
        </div>
    </li>
  )
}

export default Todo
