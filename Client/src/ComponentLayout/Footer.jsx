import React from "react"
import { NavLink } from "react-router-dom"

export const Footer = () =>{
    const countryData = [
        {
            id: "20",
            countryName: "India",
            country_img: "https://th.bing.com/th/id/OIP.ofw3TU4aVP-v2XEizJ0eJwAAAA?rs=1&pid=ImgDetMain",
            bgColors: "#ffa200",
        },
        {
            id: "21",
            countryName: "Australia",
            country_img: "https://th.bing.com/th/id/OIP.QKAwVkdAJozjKHCUkCTt4wHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#0056ff",
        },
        {
            id: "22",
            countryName: "New Zealand",
            country_img: "https://th.bing.com/th?id=ODL.23a9ea2bc9afab58f8ed2df73b6e1781&w=298&h=149&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=13.1",
            bgColors: "#0031d9",
        },
        {
            id: "23",
            countryName: "Germany",
            country_img: "https://th.bing.com/th?id=OIP.zi4fkdZa56AlGdBRKzNvMQAAAA&w=300&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#bcff00db",
        },
        {
            id: "24",
            countryName: "France",
            country_img: "https://th.bing.com/th?id=OIP.mO2EfRE-TxiZgZ20kE6aOwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#8300ffdb",
        },
        {
            id: "25",
            countryName: "Spain",
            country_img: "https://th.bing.com/th?id=OIP.nXmX5OE7HHNyF_jRo_HG9QHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#ff0000db",
        },
        {
            id: "26",
            countryName: "Italy",
            country_img: "https://th.bing.com/th?id=OIP.JyEi2JP1B9OcDj6hCSioawHaEk&w=318&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#b7b8bc",
        },
        {
            id: "27",
            countryName: "Japan",
            country_img: "https://www.bing.com/th?id=OIF.Bt7BGO0%2fUPAdOPKZo4bglg&w=155&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#777984",
        },
        {
            id: "28",
            countryName: "South Korea",
            country_img: "https://th.bing.com/th?id=OIP.OoaMd1_7pKeuZ37cJAat_AHaEL&w=332&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#590707",
        },
        {
            id: "29",
            countryName: "United Kingdom",
            country_img: "https://th.bing.com/th?id=OIP.cyNqMDQVMmOPWatffFsBxwHaFJ&w=300&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#01165c",
        },
        {
            id: "30",
            countryName: "China",
            country_img: "https://th.bing.com/th?id=OIP.-lBSmVb_l1cA_AX_LVlQFgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#c32b5f",
        },
        {
            id: "31",
            countryName: "Mexico",
            country_img: "https://th.bing.com/th?id=OSK.HERObOK7cL5weJye4hkb11IjSYiprgsFUnDAT5B5z5zMPG8&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM",
            bgColors: "#12c863",
        },
        {
            id: "32",
            countryName: "Sweden",
            country_img: "https://www.bing.com/th?id=OIP.05oklddF2AY9XvT6BhnvAwHaE8&w=312&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            bgColors: "#6ae622",
        },
        {
            id: "33",
            countryName: "Netherlands",
            country_img: "https://th.bing.com/th/id/OIP.fKeI3M5JelkSg9iqiANCcgHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "rgb(59 130 246 / 0.5)",
        },
        {
            id: "34",
            countryName: "Switzerland",
            country_img: "https://th.bing.com/th/id/OIP.r0H_ftow6o0Lc9z9yMWguQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#caccd0",
        },
        {
            id: "35",
            countryName: "Brazil",
            country_img: "https://th.bing.com/th/id/OIP.yDNN_c0M-kCSuSDZuZUSjAHaEo?w=308&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#00ff00",
        },
        {
            id: "36",
            countryName: "Poland",
            country_img: "https://th.bing.com/th/id/OIP.9L0hpvw3Ihf5AxRM1jpi1QHaEo?rs=1&pid=ImgDetMain",
            bgColors: "#ff00b6",
        },
        {
            id: "37",
            countryName: "Turkey",
            country_img: "https://th.bing.com/th/id/OIP.9FeiZHGL9b1q55yhp3qEgAHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#991f40",
        },
        {
            id: "38",
            countryName: "Ukraine",
            country_img: "https://th.bing.com/th/id/OIP.nhy9PfUuGXnGFhV3_8Fi3AHaE7?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#f9c300",
        },
        {
            id: "39",
            countryName: "Taiwan",
            country_img: "https://th.bing.com/th/id/OIP.ghtKH7IvjF7ExxXYygylngHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#606dff",
        },
        {
            id: "40",
            countryName: "Vietnam",
            country_img: "https://th.bing.com/th/id/OIP.tVM5VTTIcoeuqLziZxDmGwHaE7?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#ab7e07",
        },
        {
            id: "41",
            countryName: "Indonesia",
            country_img: "https://th.bing.com/th/id/OIP.ElCOMqvy5nK0QHlAwZ5WowHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#c9546d",
        },
        {
            id: "42",
            countryName: "Philippines",
            country_img: "https://th.bing.com/th/id/OIP.ZuoxURZjUxGqlMuAh93XrAHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#8d16f6",
        },
        {
            id: "43",
            countryName: "Russia",
            country_img: "https://th.bing.com/th/id/OIP.uW9Hi1USsULyX2e4Y7iy-gAAAA?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            bgColors: "#9776cc",
        }
    ];
    
    return(
        <>
            <section className="bg-gray-200 flex flex-col mt-24 items-center justify-center">
                <div className="max-w-[1280px] flex-1 py-10 static bottom-0 w-full">
                   <div className="grid grid-cols-1 md:grid-cols-4 my-5 md:my-10 mx-5 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col md:gap-3 gap-1">
                        <h4>About us</h4>
                        <NavLink to="#" className="arun">About Quizlet</NavLink>
                        <NavLink to="#" className="arun">Careers</NavLink>
                        <NavLink to="#" className="arun">Advertise with us</NavLink>
                        <NavLink to="#" className="arun">Get the app</NavLink>
                    </div>
                    <div className="flex flex-col md:gap-3 gap-1">
                        <h4>About us</h4>
                        <NavLink to="#" className="arun">Flashcards</NavLink>
                        <NavLink to="#" className="arun">Test</NavLink>
                        <NavLink to="#" className="arun">Learn</NavLink>
                        <NavLink to="#" className="arun">Solutions</NavLink>
                        <NavLink to="#" className="arun">Q-Chat: your AI tutor</NavLink>
                        <NavLink to="#" className="arun">Spaced repetition</NavLink>
                        <NavLink to="#" className="arun">Modern Learning Lab</NavLink>
                        <NavLink to="#" className="arun">Quizlet Plus</NavLink>
                        <NavLink to="#" className="arun">Study Guides</NavLink>
                    </div>
                    <div className="flex flex-col md:gap-3 gap-1">
                        <h4>About us</h4>
                        <NavLink className="arun" to="#">Live</NavLink>
                        <NavLink className="arun" to="#">Checkpoint</NavLink>
                        <NavLink className="arun" to="#">Blog</NavLink>
                        <NavLink className="arun" to="#">Quizlet for teachers</NavLink>
                    </div>
                    <div className="flex flex-col md:gap-3 gap-1">
                        <h4>About us</h4>
                        <NavLink to="#" className="arun">Help centre</NavLink>
                        <NavLink to="#" className="arun">Sign up</NavLink>
                        <NavLink to="#" className="arun">Honour Code</NavLink>
                        <NavLink to="#" className="arun">Community Guidelines</NavLink>
                        <NavLink to="#" className="arun">Privacy</NavLink>
                        <NavLink to="#" className="arun">Terms</NavLink>
                        <NavLink to="#" className="arun">Ad and Cookie Policy</NavLink>
                        <NavLink to="#" className="arun">Quizlet for Schools</NavLink>
                        <NavLink to="#" className="arun">Parents</NavLink>
                    </div>
                   </div>
                    <hr className="h-[0.1rem] bg-gray-400"/>
                </div>
                <div className="mb-5 flex max-w-[850px] flex-wrap justify-center gap-5">
                {
                    countryData.map((CurEleme) =>(
                        <CountryChips key={CurEleme.id} data={CurEleme}/>
                    ))
                }
                </div>
            </section>
        </>
    )
}


export const CountryChips = (props) =>{
    const {countryName, country_img, bgColors} = props.data;
    return(
        <div 
        className="py-[2px] flex items-center gap-4 w-fit rounded-[16px] pl-[.2rem] pr-4"
        style={{backgroundColor:bgColors,}}
        >
            <img src={country_img} className="h-7 w-7 rounded-full" alt="country images" />
            <NavLink to="#" className="text-white">{countryName}</NavLink>
        </div>
    )
}