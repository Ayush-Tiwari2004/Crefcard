import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export const NewHeaderOptions = ({ isVisibles }) => {
    const NewoptionsData = [
        {
            id: "fles10",
            img: "/images/literature.png",
            option: "GCSE",
            dataItem: ["Math", "Bilogy", "Chemistry", "Physics","French"],
        },
        {
            id: "fles21",
            img: "/images/a.png",
            option: "A Levels",
            dataItem: ["Biology",   "Chemistry", "Economics", "English Literature", "Maths"],
        },
        {
            id: "fles32",
            img: "/images/exam.png",
            option: "Art and Humanities",
            dataItem: ["Phylosophy", "History", "English", "Film and TV", "Music", "Dance"],
        },
        {
            id: "fles41",
            img: "/images/translation.png",
            option: "Language",
            dataItem: ["French", "Spanish", "English", "Hindi", "Urdu", "Turki", "Chinies"],
        },
        {
            id: "fles51",
            img: "/images/calculator.png",
            option: "Math",
            dataItem: ["Social Sciences","Other","Arithmetic","Geometry","Algebra","Statistics","Calculus","Probability"],
        },
        {
            id: "fles61",
            img: "/images/chemical.png",
            option: "Science",
            dataItem: ["Biology","Chemistry","Physics","Medicine","Computer Science","Engineering","Earth Science"],
        },
        {
            id: "fles71",
            img: "/images/social-science.png",
            option: "Social Science",
            dataItem: ["Psychology","Business","Sociology","Economics","Law","Human Geography","Political Science"],
        },
        {
            id: "fles81",
            img: "/images/question.png",
            option: "Others",
            dataItem: ["Hobbies","Sports","Computer Skills"],
        },
        
    ];

    return (
        <div className={`bg-white ml-64 shadow absolute top-14 shadow-gray-300 rounded-md py-3 w-60 ${isVisibles ? "" : "hidden"}`}>
            <div className="flex flex-col">
                {NewoptionsData.map((curElems) => (
                    <NewNavoptionData key={curElems.id} data={curElems} />
                ))}
            </div>
        </div>
    );
};

export const NewNavoptionData = (props) => {
    const { img, option, dataItem } = props.data;

    return (
        <div className="flex gap-3 text-black group relative">
            <div className="flex justify-between w-full px-5 py-[9px] hover:bg-gray-200">
            <div className="flex gap-3">
            <img src={img} className="h-[24px] w-[24px]" alt="" />
            <p className="text-gray-600 text-sm cursor-pointer">{option}</p>
            </div>
            <MdKeyboardArrowRight className="text-[20px] font-bold" />
            </div>

            {dataItem && dataItem.length > 0 && (
                <div className="fixed top-14 left-[535px] z-50 hidden group-hover:block overflow-y-scroll scroll-smooth bg-white shadow py-[8px] rounded w-48 h-[360px] text-black">
                    {dataItem.map((item, index) => (
                        <p key={index} className="text-sm mb-1 py-[10px] px-4 cursor-pointer hover:bg-gray-200">{item}</p>
                    ))}
                </div>
            )}
        </div>
    );
};
