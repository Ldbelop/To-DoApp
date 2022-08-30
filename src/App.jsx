import { useState } from 'react'
import React from 'react'
import { TaskCreator } from './TaskCreator'
import { PendingTask } from './PendingTask'

function App() {
  return <>
    <h1 className="h-[15%] mb-[20px] flex flex-row justify-center items-center text-[80px] font-Poppins font-bold tracking-[-2px]">
      <span className="text-roseyred">
        To-Do&nbsp;
      </span>
      App
    </h1>
    <div className='flex justify-around h-[85%]'>
      <TaskCreator />
      <PendingTask />
    </div>
  </>
}

export default App
