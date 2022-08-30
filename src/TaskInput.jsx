import React from "react";

export function TaskInput({ taskTitle, taskType, taskPlaceHolder }){
    if(taskType == "textarea"){
        return(
            <label>
                { taskTitle }
                <textarea placeholder={ taskPlaceHolder }/>
            </label>
        )
    }

    else{
        return (
            <label >
                { taskTitle }
                <input type={ taskType } placeholder={ taskPlaceHolder }/>
            </label>
        )   
    }
}