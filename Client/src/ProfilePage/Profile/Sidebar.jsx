import { NavLink } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { NotificationPopup } from "../Notification/NotificationPopup";
import { MdChecklist } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";
import { TbCards } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
export const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClose = () => setShowPopup(false);
  return (
    <>
      <div className="fixed z-20 xl:sticky top-24 md:top-[72px] h-[calc(100vh-4rem)] overflow-y-scroll bg-[#0a092d] md:w-[222px] w-[250px] text-white">
        <div className="sidebar flex flex-col gap-3 px-5 py-2 mt-5 md:mt-0">
          <NavLink to="/profile" className="sidelink"><GoHome className="text-[20px]" />Home</NavLink>
          <NavLink to="/library" className="sidelink"><VscFiles className="text-[20px]"/> Your Library</NavLink>
          <NavLink
            className="sidelink focus:bg-slate-700"
            to=""
            onClick={(e) => {
              e.preventDefault();
              setShowPopup(true);
            }}
          >
           <IoNotificationsOutline className="text-[20px]"/> Notification
          </NavLink>
          <hr />
          <p className="text-sm text-slate-300">Start Here</p>
          <NavLink to="/fleshcard" className="sidelink"><TbCards className="text-[20px]"/> Fleshcards</NavLink>
          <NavLink to="/studyguide" className="sidelink"><SiStudyverse className="text-[20px]"/>Study guide</NavLink>
          <NavLink to="/practicetest" className="sidelink"><MdChecklist className="text-[20px]"/> Practice Test</NavLink>
        </div>
      </div>
      <NotificationPopup show={showPopup} onClose={handleClose} />
    </>
  )
}
