import React from "react";
import { AlertError } from "./AlertError";
import { TaskForm } from "./TaskForm";

export function TaskCreator({ taskValue, setTask, onSubmitHandler, buttonValue, errorValue, setError}){
    let errorTag;

    if(errorValue == true){
        errorTag = <AlertError alertSomething={true}/>
    }

    else{
        errorTag = <AlertError alertSomething={false}/>
    }

    return <>
        <div className="h-[94%] flex flex-col justify-around">
            <h2 className="mb-[10px] text-black h-[18%] w-full flex justify-center items-center text-[40px] font-Poppins font-semibold bg-white rounded-t-[70px] shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">Creación de Tareas</h2>
            <div className="bg-white rounded-b-[70px] h-[80%] w-[623.6px] flex flex-col items-center shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">
                { errorTag }
                <TaskForm taskValue={taskValue} buttonValue={buttonValue} onSubmitHandler={onSubmitHandler} setTask={setTask}/>
            </div>
        </div>
    </>
}