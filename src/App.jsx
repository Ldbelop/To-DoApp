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

  const [taskArray, setTaskArray] = useState(() => {
    const saved = localStorage.getItem("Array")
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })

  useEffect(() => {
    localStorage.setItem('Array', JSON.stringify(taskArray))
  }, [taskArray]);

  const [wantsToUpdate, setWantsToUpdate] = useState(false)
  const [buttonValue, setButtonValue] = useState("ENVÍAR")
  const [error, setError] = useState()

  function randomId(){
    return Math.random().toString(20).substr(2)
  }

  function onClickHandler(event){
    event.preventDefault()
    if(event.target.value == "delete"){
        // deleteHandler() pasar cuando este rtodo listo
        const respuesta = confirm("¿Desea eliminar la tarea?")
        if(respuesta){
          const auxNewArray = taskArray.filter((task) => task.id != event.target.id)
          setTaskArray(auxNewArray)
          localStorage.setItem('llave', JSON.stringify(taskArray))
        }
    }
    else if(event.target.value == "update"){
        setButtonValue("ACTUALIZAR")
        let taskToUpdate = taskArray.filter((task) => task.id == event.target.id);
        taskToUpdate = taskToUpdate[0]
        setTask(taskToUpdate)
        setWantsToUpdate(true)
    }
}

  function onSubmitHandler(event){
    event.preventDefault()
    if ([task.title, task.date, task.description].includes("")){
      setError(true)
    }
    else{
        setError(false)
        setTask(currentTask => ({...currentTask, id: randomId()}))
        if(taskArray.length == 0 && wantsToUpdate == false){
          setTaskArray([task])
        }
        
        else if(wantsToUpdate == false){
          setTaskArray(currentArray => [...currentArray, task])
        }
        else if(wantsToUpdate == true){
          
          let updatedTaskArray = taskArray.map((taskObje) => taskObje.id === task.id ? task : taskObje);
          setTaskArray(updatedTaskArray)
          setWantsToUpdate(false)
          setButtonValue("ENVÍAR")
        }

        console.log(taskArray)
        setTask({
        title: "",
        date: "",
        description: "",
        id: randomId()
      })
    }
}

  return <>
    <h1 className="h-[15%] mb-[20px] flex flex-row justify-center items-center text-[80px] font-Poppins font-bold tracking-[-2px]">
      <span className="text-roseyred">
        To-Do&nbsp;
      </span>
      App
    </h1>
    <div className='flex justify-around h-[85%]'>
      <TaskCreator taskValue={task} setTask={setTask} onSubmitHandler={onSubmitHandler} buttonValue={buttonValue} errorValue={error} setError={setError}/>
      <PendingTask setTask={setTask} taskArray={taskArray} onClickHandler={onClickHandler}/>
    </div>
  </>
}

export default App
