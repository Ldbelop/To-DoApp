import React from "react";
import { TaskInput } from "./TaskInput";

export function TaskForm({ onSubmitHandler }){
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-full h-[90%]">
            <TaskInput taskTitle="TITULO" taskType="text" taskPlaceHolder="Título de la tarea"/>
            <TaskInput taskTitle="FECHA" taskType="date"/>
            <TaskInput taskTitle="DESCRIPCIÓN" taskType="textarea" taskPlaceHolder="Descripción de la tarea"/>
            <button className="rounded-[15px] w-[40%] h-[10%] mt-[30px] font-Poppins font-semibold shadow-[0px_0px_2px_0px_rgba(0,0,0,1)] bg-cottonrosey text-black" type="submit">ENVÍAR</button>
        </form>
    )
}