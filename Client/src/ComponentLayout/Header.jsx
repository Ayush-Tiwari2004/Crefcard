import React, { useRef, useState } from "react"
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoAdd,IoMenu } from "react-icons/io5";
import { Button } from "../CommonCompo/Button";
import { HeaderOptions } from "./HeaderOptions";
import { NewHeaderOptions } from "./NextHeaderOPtion";
import { NavLink } from "react-router-dom";
export const Header = () =>{
    const btnColor = "flex text-[#4255ff] items-center font-semibold";
    const secondrybtn = "flex text-white py-2 px-6 rounded-lg bg-[#4255ff] items-center font-semibold gap-2"
    const geticon = {
        IoAdd:<IoAdd />,
    }
    const [isVisible, setisVisible] = useState(false);
    const [isVisibles, setisVisibles] = useState(false);
    const dropdownRef = useRef(null);
    const toggleNaveBar = () =>{
        setisVisible(!isVisible);
    }
    const toggleNaveBarSecond = () =>{
        setisVisibles(!isVisibles);
    }
    const handleClickOutside = (e) => {
        // If the click is outside the dropdhaown, close it
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setisVisible(false);
        }
    };
    return(
        <>
           <header onClick={handleClickOutside} className="sticky z-50 top-0">
            <div className="w-full">
                <div className="px-10 bg-white">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex gap-10 items-center">
                       <NavLink to="/">
                       <h4 className="text-[#4255ff] font-[700]">Crefcard</h4>
                       </NavLink>
                       <a className="md:flex hidden gap-3 text-slate-900 items-center cursor-pointer" onClick={toggleNaveBar} >
                        Study Tools <FaAngleDown />
                        </a>
                        {isVisible &&(
                            <HeaderOptions isVisible={isVisible}  ref={dropdownRef}/>
                        )}
                       <p className="md:flex hidden gap-3 text-slate-900 items-center" onClick={toggleNaveBarSecond}>Subject <FaAngleDown /></p>
                       <NewHeaderOptions isVisibles={isVisibles}/>
                    </div>

                    <div className="md:flex hidden items-center bg-[#edeff4] py-1 px-2 gap-2 w-[600px] rounded-lg">
                    <IoIosSearch className="text-2xl"/>
                    <input 
                    type="text" 
                    placeholder="Find it faster with a search"
                    className="bg-transparent outline-none text-slate-500 w-full" />
                    </div>

                    <div className="flex">
                        <div className="md:flex hidden items-center gap-4">
                            <Button buttonColor={btnColor} icon={geticon.IoAdd}  label="creat"/>
                            <NavLink to="/login">
                            <Button buttonColor={secondrybtn} label="Login"/>
                            </NavLink>
                            <NavLink to="/register">
                            <Button buttonColor={secondrybtn} label="Signup"/>
                            </NavLink>
                        </div>
                        <div className="group">
                            <IoMenu className="text-[24px] md:hidden"/>
                            <NavLink to="/login"><p className="hidden group-hover:flex absolute top-20 right-8 rounded-md bg-[#4255ff] text-white px-3 py-2 ">Click to login first</p></NavLink>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
           </header>
        </>
    )
}
{/* <IoAdd />  */}