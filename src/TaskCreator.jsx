import React from "react";
import { TaskForm } from "./TaskForm";

export function TaskCreator({ taskValue, setTask, onSubmitHandler}){
    return <>
        <div className="h-[94%] flex flex-col justify-around">
            <h2 className="text-roseywineyred h-[18%] w-full flex justify-center items-center text-[40px] font-Poppins font-semibold bg-white rounded-t-[70px] shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">Creación de Tareas</h2>
            <div className="bg-white rounded-b-[70px] h-[80%] w-[623.6px] flex flex-col items-center shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">
                <TaskForm taskValue={taskValue}  onSubmitHandler={onSubmitHandler} setTask={setTask}/>
            </div>
        </div>
    </>
}