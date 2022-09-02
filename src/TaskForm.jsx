import React from "react";
import { TaskInput } from "./TaskInput";
import { useState } from "react";

export function TaskForm({ taskValue, setTask, onSubmitHandler }){
    function onChangeHandler(event){
        setTask(currentTask => ({...currentTask, [event.target.id]: event.target.value}))
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-full h-[90%]">
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="title" taskTitle="TITULO" taskType="text" taskPlaceHolder="Título de la tarea"/>
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="date" taskTitle="FECHA" taskType="date"/>
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="description" taskTitle="DESCRIPCIÓN" taskType="textarea" taskPlaceHolder="Descripción de la tarea"/>
            <button className="rounded-[15px] w-[40%] h-[10%] mt-[30px] font-Poppins font-semibold shadow-[0px_0px_2px_0px_rgba(0,0,0,1)] bg-roseybtn text-black" type="submit">ENVÍAR</button>
        </form>
    )
}