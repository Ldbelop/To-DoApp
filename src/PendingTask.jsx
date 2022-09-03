import React from "react";
import { useEffect } from "react";
import { Task } from "./task";
export function PendingTask({ taskArray, onClickHandler, setWantsToUpdate}){
    let title;

    if(taskArray.length == 0){
        title = "No hay tareas pendientes";
    }
    else{
        title = "Tareas pendientes"
    }


    return(
        <div className="h-[94%] flex flex-col justify-around">
            <h2 className="text-roseywineyred h-[18%] w-full flex justify-center items-center text-[40px] font-Poppins font-semibold bg-white rounded-t-[70px] shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">{title}</h2>
            <div className="h-[80%] w-[623.6px] bg-white rounded-b-[70px] shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)] flex justify-center">
                <div id="scrollbar" className=" h-[93%] w-[543.22px] flex flex-col mt-[10px] items-center overflow-auto pt-[5px]">
                    { taskArray.map((task) => {
                            return (
                                <Task title={task.title} description={task.description} date={task.date} id={task.id} key={task.title + "Key" + task.id} onClickHandler={onClickHandler}/>
                            )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}