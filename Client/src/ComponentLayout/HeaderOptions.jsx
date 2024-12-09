import React from "react";

export const HeaderOptions = ({isVisible}) =>{
    const optionsData = [
        {
            id:"fles1",
            img: "fleshcard.svg",
            option: "Fleshcard",
        },
        {
            id:"fles2",
            img: "/images/customer.png",
            option: "Learn",
        },
        {
            id:"fles3",
            img: "/images/exam.png",
            option: "Study Guide",
        },
        {
            id:"fles4",
            img: "/images/test.png",
            option: "Test",
        },
        {
            id:"fles5",
            img: "/images/speed-test.png",
            option: "Expert Solution",
            newData:"Teachers",
            marginTopBottom: "14px 0px"
        },
        {
            id:"fles6",
            img: "/images/live-chat.png",
            option: "Live",
        },
        {
            id:"fles7",
            img: "/images/airplane.png",
            option: "Blast",
        },
        {
            id:"fles8",
            img: "/images/question.png",
            option: "Categories",
        },
        {
            id:"fles9",
            img: "/images/mark.png",
            option: "Checkpoint",
        },
    ];


    return(
        <>
            <div className={`bg-white ml-12 shadow absolute top-14 shadow-gray-300 px-5 rounded-md py-3 w-60 ${isVisible ? "" : "hidden"}`}>
                <div className="flex flex-col gap-3">
                {optionsData.map((curElem) => (
                        <NavoptionData key={curElem.id} data={curElem} />
                ))
                }
                </div>
            </div>
        </>
    )
}


export const NavoptionData = (props) =>{
    const {img,option,newData, marginTopBottom} = props.data;
    return(
        <>
        <div className="flex gap-3 text-black">
                    <img src={img} className="h-[24px] w-[24px]" alt="" />
                    <p className="text-gray-600 text-sm">{option}</p>
                </div>
            <p className="text-gray-500 text-lg"
            style={{margin: marginTopBottom}}>{newData}</p>
        </>
    );
};