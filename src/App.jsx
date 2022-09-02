import { useEffect, useState } from 'react'
import React from 'react'
import { TaskCreator } from './TaskCreator'
import { PendingTask } from './PendingTask'

function App() {

  const [task, setTask] = useState({
    title: "",
    date: "",
    description: "",
    id: 0
  })

  const [taskArray, setTaskArray] = useState([])



  const [wantsToUpdate, setWantsToUpdate] = useState(false)

  useEffect(() => {
    localStorage.setItem('llave', JSON.stringify(taskArray))
  }, [taskArray]);


  function onClickHandler(event){
    event.preventDefault()
    if(event.target.value == "delete"){
        // deleteHandler() pasar cuando este rtodo listo
        const respuesta = confirm("¿Desea eliminar la tarea?")
        if(respuesta){
          const auxNewArray = taskArray.filter((task) => task.id != event.target.id)
          setTaskArray(auxNewArray)
        }
    }
    else if(event.target.value == "update"){
        let taskToUpdate = taskArray.filter((task) => task.id == event.target.id);
        taskToUpdate = taskToUpdate[0]
        setTask(taskToUpdate)
        setWantsToUpdate(true)
    }
}

  function onSubmitHandler(event){
    event.preventDefault()
    setTask(currentTask => ({...currentTask, id: parseInt([currentTask.id])+ 1}))
    if(wantsToUpdate == false){
      setTaskArray(currentArray => [...currentArray, task])
    }
    else if(wantsToUpdate == true){
      let updatedTaskArray = taskArray.map((taskObje) => taskObje.id === task.id ? task : taskObje);

      setTaskArray(updatedTaskArray)
      setWantsToUpdate(false)
    }

    setTask({
    title: "",
    date: "",
    description: "",
    id: 0
  })
}

  return <>
    <h1 className="h-[15%] mb-[20px] flex flex-row justify-center items-center text-[80px] font-Poppins font-bold tracking-[-2px]">
      <span className="text-roseyred">
        To-Do&nbsp;
      </span>
      App
    </h1>
    <div className='flex justify-around h-[85%]'>
      <TaskCreator taskValue={task} setTask={setTask} onSubmitHandler={onSubmitHandler}/>
      <PendingTask setTask={setTask} taskArray={taskArray} onClickHandler={onClickHandler}/>
    </div>
  </>
}

export default App
