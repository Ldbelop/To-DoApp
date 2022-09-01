import { useState, useEffect } from 'react'
import React from 'react'
import { TaskCreator } from './TaskCreator'
import { PendingTask } from './PendingTask'

function App() {

  let [taskArray, setTaskArray] = useState([])
  let [task, setTask] = useState({
    title: "",
    date: "",
    description: "",
    id: 0
  })

  function onSubmitHandler(event){
    event.preventDefault()
    setTask(currentTask => ({...currentTask, id: parseInt([currentTask.id])+ 1}))
    setTaskArray(currentArray => [...currentArray, task])
}

  return <>
    <h1 className="h-[15%] mb-[20px] flex flex-row justify-center items-center text-[80px] font-Poppins font-bold tracking-[-2px]">
      <span className="text-roseyred">
        To-Do&nbsp;
      </span>
      App
    </h1>
    <div className='flex justify-around h-[85%]'>
      <TaskCreator setTask={setTask} onSubmitHandler={onSubmitHandler}/>
      <PendingTask taskArray={taskArray}/>
    </div>
  </>
}

export default App
