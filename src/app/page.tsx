import Image from 'next/image'
import TodoList from './components/todoList'
import AddTask from './components/addTask'
import { getAllTodos } from '@/pages/api';
import {usestate} from 'react'


export default async function Home() {
const todos = await getAllTodos();

//基本的にサーバーサイドでレンダリングされるから、console.logはサーバーサイドで実行される
//ブラウザでコンソール出したい場合は"use client"する
console.log(todos);

  return (
      <main className='flex flex-col items-center min-h-screen mt-5'>
        <h1>Next.jsでTodoApp</h1>
        <div className='w-full max-w-xl mt-5 bg-white '>
          <AddTask />
          <TodoList todos = {todos} />
        </div>
      </ main>
  )
}
