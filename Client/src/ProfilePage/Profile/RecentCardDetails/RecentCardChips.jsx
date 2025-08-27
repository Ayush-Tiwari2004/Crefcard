import React, { useState } from 'react'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import RecentChipsData from "../../../API/RecentChipsData.json";
import { MdOutlineVolumeUp } from 'react-icons/md';
import { GoStarFill } from 'react-icons/go';

const RecentCardChips = () => {
    const modeIcons = {
        RiCheckboxMultipleBlankFill: <RiCheckboxMultipleBlankFill />
    }
    return (
        <>
            {
                RecentChipsData.map((index) => (
                    <section key={index.id} className=''>
                        <div className="group flex justify-center md:justify-start">
                        <div className="flex items-center justify-center gap-2 rounded-md text-white bg-[#2e3856] group-hover:bg-gray-700 py-3 w-60 recentcardchips">
                            <span>{modeIcons[index.icon]}</span>
                            <p>{index.chipscardname}</p>
                        </div>
                        </div>
                    </section>
                ))
            }
        </>
    )
}
export default RecentCardChips;

export const CardFlipFleshcard = ({question, answer}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isActive, setIsActive] = useState("");
    const handleStarClick = (e) =>{
        e.stopPropagation();
        setIsActive(!isActive);
    }
    const today = new Date();
    const localDateString = today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <>
                <div className={`rounded-xl w-full h-full text-white lg:h-[350px] mt-6 [parspective:1000px] cursor-pointer ${isFlipped ? "flipped" : ""}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className={`relative h-full rounded-lg bg-[#2e3856] transition-transform duration-400 [transform-style:preserve-3d] ${isFlipped ? "rotate-x-180" : ""}`}>
                        <div className="absolute p-4 w-full h-full [backface-visibility:hidden]">
                            <div className="flex justify-between mb-2">
                                <p>{localDateString}</p>
                                <div className="flex items-center gap-4 text-xl">
                                    <MdOutlineVolumeUp />
                                    <div onClick={handleStarClick} className='hover:bg-gray-400 p-1 rounded-full'>
                                    <GoStarFill className={isActive ? "text-yellow-400" : ""} />
                                    </div>
                                </div>
                            </div>
                            <div className="h-full text-center flex justify-center items-center pb-10">
                                <h4>{question}</h4>
                            </div>
                        </div>
                        <div className="absolute w-full h-full p-4 rotate-x-180 [backface-visibility:hidden]">
                        <div className="flex justify-between mb-2">
                                <p>{localDateString}</p>
                                <div className="flex items-center gap-4 text-xl">
                                    <MdOutlineVolumeUp />
                                    <div onClick={handleStarClick} className='hover:bg-gray-400 p-1 rounded-full'>
                                    <GoStarFill className={isActive ? "text-yellow-400" : ""} />
                                    </div>
                                </div>
                            </div>
                            <div className="h-full flex justify-center items-center text-center pb-10">
                                <h4>{answer}</h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};















{/* <div
    className={`[perspective:1000px] w-[300px] h-[200px] cursor-pointer m-5 ${isFlipped ? "flipped" : ""}`}
    onClick={() => setIsFlipped(!isFlipped)}
>
    <div
        className={`relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] shadow-md ${isFlipped ? "rotate-y-180" : ""
            }`}
    >
        <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col justify-center items-center p-5 rounded-md bg-[#413535] text-black">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                voluptates?
            </p>
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col justify-center items-center p-5 rounded-md bg-[#205284] text-black rotate-y-180">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                inventore dolore earum.
            </p>
        </div>
    </div>
</div> */}