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
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null);

    const togglePopup = () => {
        setShowProfilePopup(!showProfilePopup);
    }

    const handleDropdownBtn = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <header className='sticky top-0 z-50'>
                <div className='bg-[#0a092d] shadow-lg'>
                    {/* Main Header Container */}
                    <div className="flex flex-col w-full">
                        {/* Top Bar */}
                        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                            {/* Left Section */}
                            <div className="flex items-center gap-3 sm:gap-5">
                                <IoMenu 
                                    onClick={toggleSidebar} 
                                    className='text-white text-2xl sm:text-3xl cursor-pointer hover:text-gray-300' 
                                />
                                <NavLink to="/profile">
                                    <img src="/images/crefcard_logo1.png" className='text-white h-10 hover:text-gray-300' alt="" />
                                </NavLink>
                            </div>

                            {/* Desktop Search Bar */}
                            <div className="hidden md:flex flex-grow max-w-2xl mx-8">
                                <div className="flex items-center w-full bg-[#2e3856] rounded-lg px-4 py-2">
                                    <FaSearch className='text-[#939bb4] text-lg' />
                                    <input
                                        type="text"
                                        className='w-full bg-transparent outline-none text-white ml-3 placeholder-[#939bb4]'
                                        placeholder='Search for flashcards'
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center gap-2 sm:gap-4">
                                {/* Create Button & Dropdown */}
                                <div ref={dropdownRef} className="relative">
                                    <button 
                                        onClick={handleDropdownBtn}
                                        className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg flex items-center text-white"
                                    >
                                        <FaPlus className='text-lg' />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isDropdownActive && (
                                        <div className="absolute right-0 sm:right-auto sm:-left-48 top-full mt-2 w-48 sm:w-56 
                                            bg-[#0a092d] border border-slate-400 rounded-md shadow-lg z-50">
                                            <div className="py-2 px-3">
                                                <NavLink to="/library/sets" className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Flashcard Sets
                                                </NavLink>
                                                <NavLink to="/studyguide/past-text" className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Study Guide
                                                </NavLink>
                                                <NavLink to="/practicetest/flesh-card" className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Practice Test
                                                </NavLink>
                                                <NavLink className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Folder
                                                </NavLink>
                                                <NavLink className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Class
                                                </NavLink>
                                                <NavLink to="/createpost" className="block py-2 px-3 text-sm text-slate-200 hover:bg-slate-700 rounded">
                                                    Create Post
                                                </NavLink>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Upgrade Button */}
                                <button className='hidden sm:block bg-[#FFCD1F] hover:bg-[#e6b91c] rounded-lg px-4 py-2 text-black font-medium text-sm'>
                                    Upgrade: Free 7 day-trial
                                </button>

                                {/* Profile Picture */}
                                <button 
                                    onClick={togglePopup}
                                    className="relative"
                                >
                                    <img 
                                        src={profilePic} 
                                        className='h-8 w-8 bg-white sm:h-10 sm:w-10 rounded-full object-cover border-2 border-transparent hover:border-slate-300' 
                                        alt="Profile" 
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Search Bar */}
                        <div className="md:hidden px-4 pb-3">
                            <div className="flex items-center bg-[#2e3856] rounded-lg px-3 py-2">
                                <FaSearch className='text-[#939bb4] text-lg' />
                                <input
                                    type="text"
                                    className='w-full bg-transparent outline-none text-white ml-3 placeholder-[#939bb4]'
                                    placeholder='Search for flashcards'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Profile Popup */}
            <ProfilePopup 
                show={showProfilePopup} 
                onClose={() => setShowProfilePopup(false)} 
            />
        </>
    )
}

export default ProfileHeader;