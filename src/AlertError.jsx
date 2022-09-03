import React from "react";

export function AlertError( {alertSomething}){
    if(alertSomething == true){
        return <h1 className=" absolute font-Poppins font-semibold text-[23px] rounded-[10px] text-white mt-[5px] bg-roseyred w-[495.696px] h-[40px] flex items-center justify-center">HAY CAMPOS VACÍOS</h1>
    }
    else{
        return null
    }
}