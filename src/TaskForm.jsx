import React from "react";
import { TaskInput } from "./TaskInput";
import { useState } from "react";
import { FormButton } from "./FormButton";

export function TaskForm({ taskValue, setTask, onSubmitHandler, buttonValue }){
    function onChangeHandler(event){
        setTask(currentTask => ({...currentTask, [event.target.id]: event.target.value}))
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-full h-[90%]">
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="title" taskTitle="TITULO" taskType="text" taskPlaceHolder="Título de la tarea"/>
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="date" taskTitle="FECHA" taskType="date"/>
            <TaskInput value={taskValue} onChangeHandler={onChangeHandler} id="description" taskTitle="DESCRIPCIÓN" taskType="textarea" taskPlaceHolder="Descripción de la tarea"/>
            <FormButton buttonValue={buttonValue}/>
        </form>
    )
}