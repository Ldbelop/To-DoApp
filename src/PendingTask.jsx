import React from "react";

export function PendingTask({ taskArray }){
    return(
        <div className="h-[94%] flex flex-col justify-around">
            <h2 className="text-roseywineyred h-[18%] w-full flex justify-center items-center text-[40px] font-Poppins font-semibold bg-white rounded-t-[70px] shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">No hay tareas pendientes</h2>
            <div className="bg-white rounded-b-[70px] h-[80%] w-[623.6px] flex flex-col items-center shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">
                    { taskArray.map((task) => <ul className="rounded-[20px] mt-[15px] bg-roseybg h-[30%] w-[90%] flex flex-col items-center justify-center shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]" key={task.title + "Key" + task.id}>
                                <div className="w-[90%] h-[55%]">
                                    <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Título: </span>{task.title}</li>
                                    <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Descripción: </span>{task.description}</li>
                                    <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Fecha: </span>{task.date}</li>
                                </div>
                                <div className="w-[90%] h-[25%] flex justify-center">
                                    <button className="text-black font-Poppins w-[45%] rounded-[12px] shadow-[0px_0px_1px_0px_rgba(255,163,200,1);] h-full bg-buttongreeny font-semibold text-[17px]" >ACTUALIZAR</button>
                                    <button className="text-black font-Poppins w-[45%] rounded-[12px] shadow-[0px_0px_1px_0px_rgba(255,163,200,1)] h-full ml-[45px] bg-buttonreddy font-semibold text-[17px]">ELIMINAR</button>
                                </div>
                            </ul>
                        )
                    }
            </div>
        </div>
    )
}