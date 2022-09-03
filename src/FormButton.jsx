import React from "react";


export function FormButton({ buttonValue}){
    if(buttonValue == "ENVÍAR"){
         return <button className="rounded-[10px] w-[495.696px] h-[10%] mt-[20px] font-Poppins font-semibold bg-roseybtn text-black" type="submit">{buttonValue}</button>
    }
    else if(buttonValue == "ACTUALIZAR"){
        return <button className="rounded-[10px] w-[495.696px] h-[10%] mt-[20px] font-Poppins font-semibold  bg-[#b3a3ae] text-black" type="submit">{buttonValue}</button>
    }
}