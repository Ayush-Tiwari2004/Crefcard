import React from "react";
import { Button } from "../CommonCompo/Button";

export const MaterialInstantly = () =>{
    const MaterialInstantly = "text-white rounded-lg bg-[#4255ff] items-center font-semibold py-3 px-6 gap-2"
    return(
        <>
        <section>
            <div className="container mx-auto flex-1 py-10 md:px-10">
            <div className="flex md:flex-row flex-col-reverse gap-20 justify-between">
                <div className="flex justify-start">
                    <img src="./images/homesec2.avif" className="md:max-w-lg rounded-[12px]" alt="" />
                </div>
                <div className="px-2 flex items-center">
                <div className="flex flex-col text-center md:text-start gap-10 md:pl-[1.5rem]">
                    <h2 className="font-[550] text-gray-800">Make class material instantly studiable</h2>
                    <p>Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.</p>
                    <div className="flex justify-center md:justify-start gap-5">
                    <Button buttonColor={MaterialInstantly} label="Try it now"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}