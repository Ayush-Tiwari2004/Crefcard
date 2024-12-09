import React from "react";
import { Button } from "../CommonCompo/Button";

export const TestPrep = () =>{
    const MaterialInstantly = "text-white rounded-lg bg-[#4255ff] items-center font-semibold py-3 px-6 gap-2"
    return(
        <>
        <section>
            <div className="container mx-auto flex-1 py-10 md:px-10">
            <div className="grid grid-cols-1 gap-20 md:gap-5 sm:grid-cols-2 justify-between">
                <div className="px-3 flex items-center">
                <div className="flex flex-col text-center md:text-start gap-10">
                    <h2 className="font-[550] text-gray-800">Test prep for any subject</h2>
                    <p>Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say Quizlet has improved their understanding.</p>
                    <div className="flex justify-center md:justify-start gap-5">
                    <Button buttonColor={MaterialInstantly} label="Try it now"/>
                    </div>
                </div>
                </div>
                <div className="flex justify-end">
                    <img src="./images/homesec3.avif" className="md:max-w-lg rounded-[12px]" alt="" />
                </div>
            </div>
            </div>
        </section>
        </>
    )
}