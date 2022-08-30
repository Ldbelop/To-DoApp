import React from "react";

export function TaskInput({ taskTitle, taskType, taskPlaceHolder }){
    if(taskType == "textarea"){
        return(
            <label className=" w-[495.696px] h-[175px] mt-[15px] font-Poppins text-[20px] text-medium flex flex-col items-start justify-start">
                { taskTitle }
                <textarea className="placeholder:font-light rounded-[15px] w-full h-full text-[15px] px-[10px] py-[10px] shadow-[0px_0px_1.5px_0px_rgba(66,4,14,1)]" placeholder={ taskPlaceHolder }/>
            </label>
        )
    }

    else{
        return (
            <label className="placeholder:light w-[495.696px] h-[80px] mt-[15px] font-Poppins text-[20px] text-medium flex flex-col items-start justify-start">
                { taskTitle }
                <input type={ taskType } className="placeholder:font-light rounded-[15px] w-full h-full text-[15px] px-[10px] shadow-[0px_0px_1.5px_0px_rgba(66,4,14,1)]" placeholder={ taskPlaceHolder }/>
            </label>
        )   
    }
}