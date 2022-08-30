import React from "react";
import { TaskInput } from "./TaskInput";

export function TaskForm({ onSubmitHandler }){
    return (
        <form onSubmit={onSubmitHandler}>
            <TaskInput taskTitle="TITULO" taskType="text" taskPlaceHolder="Título de la tarea"/>
            <TaskInput taskTitle="FECHA" taskType="date"/>
            <TaskInput taskTitle="DESCRIPCIÓN" taskType="textarea" taskPlaceHolder="Descripción de la tarea"/>
        </form>
    )
}