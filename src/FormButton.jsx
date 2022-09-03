import React from "react";


export function FormButton({ buttonValue}){
    if(buttonValue == "ENVÍAR"){
         return <button className="rounded-[10px] w-[495.696px] h-[10%] mt-[30px] font-Poppins font-semibold shadow-[0px_0px_2px_0px_rgba(0,0,0,1)] bg-roseybtn text-black" type="submit">{buttonValue}</button>
    }
    else if(buttonValue == "ACTUALIZAR"){
        return <button className="rounded-[10px] w-[495.696px] h-[10%] mt-[30px] font-Poppins font-semibold shadow-[0px_0px_4px_0px_#645966] bg-[#645966] text-roseybtn" type="submit">{buttonValue}</button>
    }
}