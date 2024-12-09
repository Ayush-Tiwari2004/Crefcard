import React from "react";
import { Button } from "../CommonCompo/Button";
import { MaterialInstantly } from "./MaterialInstantly";
import { TestPrep } from "./TestPrep";
import { TeachersEmpower } from "./TeachersEmpower";

export const HomeDetail = () =>{
    // const NewButtonStyle = "newimg"
    return(
        <>
        <section>
            <div className="container mx-auto flex-1 py-10 md:px-10">
            <div className="grid grid-cols-1 gap-20 md:gap-5 sm:grid-cols-2 justify-between">
                <div className="px-2 flex items-center">
                <div className="flex flex-col text-center md:text-start gap-10">
                    <h2 className="font-[550] text-gray-800">Every class, every test, one ultimate study app</h2>
                    <p>Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime, anywhere with our free app.</p>
                    <div className="flex justify-center md:justify-start gap-5">
                    <Button buttonColor="newimg-1"/>
                    <Button buttonColor="newimg"/>
                    </div>
                </div>
                </div>
                <div className="flex justify-end">
                    <img src="./images/homesec1.avif" className="md:max-w-lg rounded-[12px]" alt="" />
                </div>
            </div>
            </div>
            <MaterialInstantly />
            <TestPrep />
            <TeachersEmpower />
        </section>
        </>
    )
}