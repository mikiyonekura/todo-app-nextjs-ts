"use client";
import React, { ChangeEvent } from 'react'
import { FormEvent } from 'react'
import { useState } from 'react'
import { addTodo } from '../../pages/api'

const addTask = () => {

    const [taskTitle, setTaskTitle] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        await addTodo({ id: "4", text: taskTitle});

        setTaskTitle("");
    }  // この行に閉じる波括弧を追加しました

    return (
        <div className='mt-5 mx-5'>

            <form className='mb-4 space-y-3' onSubmit={handleSubmit}>
                
                <input 
                    type="text" 
                    className='w-full border px-4 py-2 rounded-lg color-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => 
                        setTaskTitle(e.target.value) 
                    } 
                    value={taskTitle} placeholder='タスクを入力してください'
                />
                <button type="submit" className='w-full border bg-blue-500 hover:bg-blue-300 hover:scale-95 rounded-lg'>追加</button>
            </form>

        </div>
    );
}  // この行の波括弧を削除しました

export default addTask;
