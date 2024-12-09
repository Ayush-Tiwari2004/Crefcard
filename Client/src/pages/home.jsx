import React from "react"
import { HomeHeroSec } from "../HomeComp/HomeHeroSec"
import { HomeDetail } from "../HomeComp/HomeDetail"
import { PopularFleshcards } from "../HomeComp/PopularFleshcards"

export const Home = () =>{
    return(
        <>
            <HomeHeroSec />
            <HomeDetail />
            <PopularFleshcards />
        </>
    )
}
