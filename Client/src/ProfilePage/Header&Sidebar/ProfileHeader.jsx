import React, { useEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { SiQuizlet } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ProfilePopup } from '../Notification/ProfilePopup';

const ProfileHeader = ({ toggleSidebar }) => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilepic'));

    const togglePopup = () => {
        setShowProfilePopup(!showProfilePopup);
    }

    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownBtn = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownActive(false);
        }
    };

    useEffect(() => {
        // setProfilePic(localStorage.getItem('profilepic'));
        document.addEventListener('click', handleOutsideClick);
        return () => {

            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <header className='sticky top-0 z-50'>
                <div id='ayush'>
                    <div className="md:h-16 flex flex-col gap-2 h-24 bg-[#0a092d]">
                        <div className="flex gap-10 items-center justify-between w-full text-white py-2 px-5">
                            <div className="flex gap-5 text-3xl">
                                <IoMenu onClick={toggleSidebar} className='cursor-pointer' />
                                <NavLink to="/profile">
                                    <SiQuizlet />
                                </NavLink>
                            </div>

                            <div className="md:flex flex-grow max-w-[40rem] gap-5 hidden items-center bg-[#2e3856] py-[0.4rem] px-4 rounded-lg">
                                <FaSearch className='text-[#939bb4]' />
                                <input
                                    type="text"
                                    className='bg-transparent outline-none'
                                    placeholder='Search for fleshcards' />
                            </div>

                            <div className="flex gap-3 md:gap-5">
                                <div ref={dropdownRef} className="bg-blue-600 p-2 flex items-center rounded-lg relative">
                                    <FaPlus onClick={handleDropdownBtn} className='text-xl shadow-xl cursor-pointer' />
                                    <div
                                        className={`${isDropdownActive ? 'block' : 'hidden'
                                            } absolute top-8 -left-52 z-10 bg-[#0a092d] text-slate-200 border-[1px] border-slate-400 p-4 mt-2 rounded-md w-56 flex flex-col gap-3`}
                                    >
                                        <NavLink to="/library/sets">Flashcard Sets</NavLink>
                                        <NavLink to="/studyguide/past-text">Study Guide</NavLink>
                                        <NavLink to="/practicetest/flesh-card">Practice Test</NavLink>
                                        <NavLink>Folder</NavLink>
                                        <NavLink>Class</NavLink>
                                        <NavLink to="/createpost">Create Post</NavLink>
                                    </div>
                                </div>
                                    <button className='bg-[#FFCD1F] rounded-lg px-0 md:px-4 text-black font-[500]'>
                                        <span className='hidden md:flex'>Upgrade: Free 7 day-trail</span> 
                                        {/* <span className='hidden text-[12px]'>Free trail</span>  */}
                                    </button>
                                <div className=''>
                                    <NavLink
                                        onClick={(e) => {
                                            e.preventDefault();
                                            togglePopup();
                                        }}>
                                        <img src={profilePic} className='h-10 w-10 rounded-full bg-white object-cover' alt="" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 md:hidden items-center bg-[#2e3856] py-[0.1rem] sm:py-[0.4rem] px-4 mx-5 rounded-lg">
                            <FaSearch className='text-[#939bb4] text-[30px]' />
                            <input
                                type="text"
                                className='w-[32rem] bg-transparent outline-none'
                                placeholder='Search for fleshcards' />
                        </div>

                    </div>
                </div>
            </header>
            <ProfilePopup show={showProfilePopup} onClose={() => { setShowProfilePopup(false) }} />
        </>
    )
}

export default ProfileHeader;
