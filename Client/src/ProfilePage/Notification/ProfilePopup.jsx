import { useEffect, useRef, useState } from "react";
import { GoTrophy } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode, MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from "../../utils";
import axios from "axios";

export const ProfilePopup = ({ show, onClose }) => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilepic'));
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
        setLoggedInUserEmail(localStorage.getItem('loggedInUserEmail'));
        setProfilePic(localStorage.getItem('profilepic'));
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        handleSuccess('User Logged out');
        navigate('/');
    }

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            handleError("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append('profilepic', file);
        formData.append('userId', localStorage.getItem('userId'));

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/profile/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const newProfilePic = response.data.profilepic;
            setProfilePic(newProfilePic);
            localStorage.setItem('profilepic', newProfilePic);
            handleSuccess("Profile picture updated successfully!");
        } catch (error) {
            handleError("Failed to update profile picture.");
        }
    };

    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex justify-end items-start">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="relative w-full max-w-xs md:max-w-sm text-white bg-[#0a092d] shadow-lg rounded-lg border-[1px] py-4 px-6 m-4 md:m-5 z-10">
                    <div className="flex gap-3 items-center border-b-[1px] pb-4">
                        <div
                            className="h-12 w-12 rounded-full bg-white cursor-pointer hover:opacity-80"
                            onClick={handleImageClick}
                        >
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="h-full w-full object-cover rounded-full"
                            />
                            <input
                                type="file"
                                ref={inputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm md:text-base font-semibold">{loggedInUser}</h3>
                            <h3 className="text-sm md:text-base font-semibold">{loggedInUserEmail}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex gap-2 items-center">
                            <GoTrophy className="text-lg md:text-xl" />
                            <p className="text-sm md:text-base">Achievement</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoSettingsOutline className="text-lg md:text-xl" />
                            <p className="text-sm md:text-base">Setting</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdOutlineLightMode className="text-lg md:text-xl" />
                            <p className="text-sm md:text-base">Light/Dark</p>
                        </div>
                    </div>
                    <div className="py-4 border-t border-b">
                        <NavLink
                            className="flex gap-2 items-center"
                            onClick={handleLogout}
                        >
                            <MdLogout className="text-lg md:text-xl" />
                            <p className="text-sm md:text-base">Logout</p>
                        </NavLink>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex gap-2 items-center">
                            <NavLink className="text-sm md:text-base">Privacy Policy</NavLink>
                        </div>
                        <div className="flex gap-2 items-center">
                            <NavLink className="text-sm md:text-base">Help and feedback</NavLink>
                        </div>
                        <div className="flex gap-2 items-center">
                            <NavLink className="text-sm md:text-base">Upgrade</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};











/// import { useEffect, useRef, useState } from "react";
// import { GoTrophy } from "react-icons/go";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdOutlineLightMode, MdLogout } from "react-icons/md";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { handleError, handleSuccess } from "../../utils";
// import axios from "axios";

// export const ProfilePopup = ({ show, onClose }) => {
//     const [loggedInUser, setloggedInUser] = useState('');
//     const [loggedInUserEmail, setloggedInUserEmail] = useState('');
//     const [profilePic, setProfilePic] = useState(localStorage.getItem('profilepic') || 'http://localhost:5000/images/default.png');
//     const navigate = useNavigate();
//     const inputRef = useRef(null);

//     useEffect(() => {
//         setloggedInUser(localStorage.getItem('loggedInUser'));
//         setloggedInUserEmail(localStorage.getItem('loggedInUserEmail'));
//         setProfilePic(localStorage.getItem('profilepic'));
//     }, []);

//     const handleLogout = () => {
//         localStorage.clear();
//         handleSuccess('User Logged out');
//         navigate('/');
//     }

//     const handleImageClick = () => {
//         inputRef.current.click();
//     }

//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const formData = new FormData();
//             formData.append('profilepic', file);
//             formData.append('userId', localStorage.getItem('userId'));

//             try {
//                 const response = await axios.post('http://localhost:5000/api/profile/upload', formData, {
//                     headers: { 'Content-Type': 'multipart/form-data' }
//                 });
//                 setProfilePic(response.data.profilepic);
//                 localStorage.setItem('profilePic', response.data.profilepic);
//                 handleSuccess("Profile picture updated successfully!");
//             } catch (error) {
//                 handleError("Failed to update profile picture.");
//             }
//         }
//     };

//     if (!show) return null;

//     return (
//         <>
//             <div className="fixed inset-0 z-50 flex justify-end items-start">
//                 <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
//                 <div className="relative w-full max-w-xs md:max-w-sm text-white bg-[#0a092d] shadow-lg rounded-lg border-[1px] py-4 px-6 m-4 md:m-5 z-10">
//                     <div className="flex gap-3 items-center border-b-[1px] pb-4">
//                         <div className="h-12 w-12 rounded-full bg-white" onClick={handleImageClick}>
//                             <img
//                                 src={profilePic}
//                                 alt="Profile"
//                                 className="h-full w-full object-cover rounded-full"
//                             />
//                             <input
//                                 type="file"
//                                 ref={inputRef}
//                                 className="hidden"
//                                 onChange={handleImageChange}
//                             />
//                         </div>
//                         <div className="flex flex-col">
//                             <h3 className="text-sm md:text-base font-semibold">{loggedInUser}</h3>
//                             <h3 className="text-sm md:text-base font-semibold">{loggedInUserEmail}</h3>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-4 py-4">
//                         <div className="flex gap-2 items-center">
//                             <GoTrophy className="text-lg md:text-xl" />
//                             <p className="text-sm md:text-base">Achievement</p>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                             <IoSettingsOutline className="text-lg md:text-xl" />
//                             <p className="text-sm md:text-base">Setting</p>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                             <MdOutlineLightMode className="text-lg md:text-xl" />
//                             <p className="text-sm md:text-base">Light/Dark</p>
//                         </div>
//                     </div>
//                     <div className="py-4 border-t border-b">
//                         <NavLink
//                             className="flex gap-2 items-center"
//                             onClick={handleLogout}>
//                             <MdLogout className="text-lg md:text-xl" />
//                             <p className="text-sm md:text-base">Logout</p>
//                         </NavLink>
//                     </div>
//                     <div className="flex flex-col gap-4 py-4">
//                         <div className="flex gap-2 items-center">
//                             <NavLink className="text-sm md:text-base">Privacy Policy</NavLink>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                             <NavLink className="text-sm md:text-base">Help and feedback</NavLink>
//                         </div>
//                         <div className="flex gap-2 items-center">
//                             <NavLink className="text-sm md:text-base">Upgrade</NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </>
//     )
// }


