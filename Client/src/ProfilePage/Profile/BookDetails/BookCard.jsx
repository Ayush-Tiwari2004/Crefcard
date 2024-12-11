import { useState, useRef } from "react";
import { FaRegUser } from "react-icons/fa6";
import BookcardData from "../../../API/BookCardData.json";
import { TbCards } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const BookCard = ({Recent}) => {
    const [showControls, setShowControls] = useState(false);
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = direction === 'left' ? -300 : 300;
        sliderRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className="relative py-5 mt-2" 
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            {/* Navigation Arrows - Hidden on mobile */}
            {showControls && (
                <>
                    <button 
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg"
                    >
                        <IoIosArrowBack size={24} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-2 top-[60%] -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg"
                    >
                        <IoIosArrowForward size={24} />
                    </button>
                </>
            )}

            {/* Slider Container */}
            <h1 className="text-xl text-white mb-5">{Recent}</h1>
            <div 
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-5 scroll-smooth"
            >
                {BookcardData.map((index) => (
                    <div 
                        key={index.id} 
                        className="flex-none w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] snap-start"
                    >
                        <BookCards data={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const BookCards = (props) => {
    const footerIcon = {
        verifiedStamp: <VscVerifiedFilled className="text-[16px]" />,
        user: <FaRegUser />,
        fleshcard: <TbCards className="text-[18px]" />
    };
    
    const { id, bookimg, bookname, edition, writer, prise, icon } = props.data;
    
    return (
        <>
        <NavLink to={`/profile/${id}`}>
        <div 
            key={id} 
            className="h-44 p-4 border-b-2 border-b-[#0a092d] hover:border-b-slate-200 flex flex-col justify-between rounded-lg bg-[#2e3856] relative"
        >
            <div className="flex overflow-hidden items-center gap-5">
                <img
                    src={bookimg}
                    className="w-[40%] sm:w-[22%] md:w-[32%] lg:w-[26%] xl:w-[28%] rounded-md"
                    alt=""
                />
                <div className="flex flex-col gap-2 md:gap-5">
                    <h6 className="text-[14px] sm:text-18px text-white">{bookname}</h6>
                    <div>
                        <div className="text-[12px] text-slate-200">
                            <p>{edition}</p>
                            <p className="mb-2">{writer?.length > 15 ? writer.slice(0, 15) + "..." : writer}</p>
                        </div>
                        <div className="text-[12px] flex gap-1 items-center bg-[#586380] w-fit px-2 rounded-xl text-slate-200">
                            <p>{footerIcon[icon]}</p>
                            <p className="text-[12px]">{prise}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
        </>
    );
};
