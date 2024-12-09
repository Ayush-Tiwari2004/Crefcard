import React from "react";
import { Button } from "../CommonCompo/Button";
import { NavLink } from "react-router-dom";

export const TeachersEmpower = () =>{
    const MaterialInstantly = "text-white rounded-lg bg-[#4255ff] w-fit items-center font-semibold py-3 px-6 gap-2"
    return(
        <>
        <section className="bg-[#dbdfff]">
            <div className="container mx-auto flex-1 py-10 md:px-10">
            <div className="grid grid-cols-1 gap-20 md:gap-5 sm:grid-cols-2 justify-between">
                <div className="px-3 flex items-center">
                <div className="flex flex-col text-center md:text-start gap-10">
                    <div className="leading-8">
                    <h5 className="font-bold text-slate-700">TEACHERS</h5>
                    <h2 className="font-[550] text-gray-800">Empower your students</h2>
                    </div>
                    <p>Help every student confidently learn anything. With free flashcard sets, study modes, and in-class games like Quizlet Live, you can instantly create a more engaged classroom.</p>
                    <div className="flex flex-col justify-center md:justify-start gap-10">
                    <Button buttonColor={MaterialInstantly} label="Sign up as a teacher"/>
                    <NavLink to="#" className="text-[#4255ff] font-bold text-[18px]">Sea how teachers use Quizlet</NavLink>
                    </div>
                </div>
                </div>
                <div className="flex justify-end">
                    <img src="./images/homesec4.avif" className="md:max-w-lg rounded-[12px]" alt="" />
                </div>
            </div>
            </div>
        </section>
        </>
    )
}