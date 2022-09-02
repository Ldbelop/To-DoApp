import React from "react";

export function Task({ title, description, date, id, onClickHandler}){
    return <form onClick={onClickHandler}  className="mt-[15px] h-[30%] w-[90%]">
        <ul className="border border-roseyred first-letter rounded-[20px] bg-roseybg h-[100%] w-[100%] flex flex-col items-center justify-center shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.75)]">
            <div className="w-[90%] h-[55%]">
                <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Título: </span>{title}</li>
                <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Descripción: </span>{description}</li>
                <li className="font-Poppins text-[17px]"><span className="text-roseywineyred font-semibold">Fecha: </span>{date}</li>
            </div>
            <div className="w-[90%] h-[25%] flex justify-center">
                <button id={id} value="update" className="text-black font-Poppins w-[45%] rounded-[12px] shadow-[0px_0px_1px_0px_rgba(255,163,200,1);] h-full bg-buttongreeny font-semibold text-[17px]" >ACTUALIZAR</button>
                <button id={id} value="delete" className="text-black font-Poppins w-[45%] rounded-[12px] shadow-[0px_0px_1px_0px_rgba(255,163,200,1)] h-full ml-[45px] bg-buttonreddy font-semibold text-[17px]">ELIMINAR</button>
            </div>
        </ul>
    </form>
}