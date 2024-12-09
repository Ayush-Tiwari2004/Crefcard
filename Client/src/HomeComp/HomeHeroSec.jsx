import React from "react"
import { Button } from "../CommonCompo/Button"
import { CardSlider } from "./HomeCrousel"

export const HomeHeroSec = () =>{
    const herobtnclr = "bg-[#4255ff] text-white py-3 px-6 w-fit font-semibold"
    return(
        <>
        <section className="bg-[#F6F7FB]">
            <div className="flex flex-col items-center justify-center py-10">
                <div className="max-w-[50rem] flex flex-col gap-3 text-center">
                <h1 className="font-bold">How do you want to study?</h1>
                <p className="text-center text-lg text-gray-900">Master whatever you’re learning with Quizlet’s interactive flashcards, practice tests, and study activities.</p>
                <div className="flex flex-col gap-5 items-center">
                <a href="/register"><Button buttonColor={herobtnclr} label="Sign up for free"/></a>
                <Button buttonColor="text-[#4255ff] " label="I’m a teacher"/>
                </div>
                </div>
            </div>
        <CardSlider />
        </section>
        </>
    )
}