import { useState, useRef } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const RecentCards = ({ data = [], Recent, fleshCardLinks}) => {
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
            className="relative py-5 mt-2 max-w-[1260px]"
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

            {/* Title */}
            <h1 className="text-xl text-white mb-5">{Recent}</h1>

            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-5 scroll-smooth"
            >
                {data.slice(0, 10).map((index) => (
                    <div
                        key={index.id}
                        className="flex-none w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] snap-start"
                    >
                        <ProfileCard data={index} fleshCardLinks={fleshCardLinks ? fleshCardLinks(index.id) : null}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ProfileCard = ({ data, fleshCardLinks }) => {
    const footerIcon = {
        verifiedStamp: <VscVerifiedFilled className="text-[16px]" />,
        user: <FaRegUser />,
        fleshcard: <TbCards className="text-[18px]" />
    };

    const {
        id, title, number, user_img, user_name, profession, description,
        Background, width, height, icons, randomUsers, fleshcard,
        userImg, nextw, nexth, noOfCards, classes, pding
    } = data;

    return (
        <NavLink to={fleshCardLinks}>
            <div className="h-44 p-4 border-b-2 border-b-[#0a092d] hover:border-b-slate-200 flex flex-col justify-between rounded-lg bg-[#2e3856] relative text-white">
                <div className="flex flex-col overflow-y-scroll overflow-x-hidden gap-3">
                    <h6 className="text-sm sticky top-0 pb-1 w-full bg-[#2e3856] text-white">{title}</h6>
                    <p className="text-[12px] text-white">{description}</p>
                    <div className="text-[12px] bg-[#586380] w-fit px-2 rounded-xl text-white">
                        <span>{number}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <img
                        src={user_img}
                        className="rounded-full"
                        style={{
                            backgroundColor: Background,
                            width: width,
                            height: height
                        }}
                        alt=""
                    />
                    <p className="text-white">{user_name}</p>
                    <div className="flex text-[12px] gap-1 bg-[#586380] w-fit px-2 rounded-xl text-white">
                        <span>{profession}</span>
                    </div>
                </div>

                {/* Top creators */}
                <div className="flex flex-col justify-between gap-10 absolute text-white">
                    <img
                        src={userImg}
                        className="rounded-full object-cover"
                        style={{
                            width: nextw,
                            height: nexth,
                            backgroundColor: Background
                        }}
                        alt=""
                    />
                    <div className="flex flex-col gap-4">
                        <h6 className="text-[14px] sm:text-[18px] text-white">
                            {randomUsers?.length > 20 ? randomUsers.slice(0, 20) + "..." : randomUsers}
                        </h6>
                        <div className="flex gap-2">
                            <div className="text-[10px] sm:text-[12px] flex gap-1 items-center bg-[#586380] w-fit rounded-xl text-white"
                                style={{ padding: pding }}>
                                <p>{footerIcon[fleshcard]}</p>
                                <p>{noOfCards}</p>
                            </div>
                            <div className="text-[10px] sm:text-[12px] flex gap-1 items-center bg-[#586380] w-fit rounded-xl text-white"
                                style={{ padding: pding }}>
                                <p>{footerIcon[icons]}</p>
                                <p>{classes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};