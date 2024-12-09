import React from "react"
export const Button = ({label,buttonColor,icon}) =>{
    return(
        <>
        <button className={`rounded-[8px] px-4 py-1 ${buttonColor}`}>{icon} {label}</button>
        </>
    )
} 