import { NavLink } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";

export const Footer = () =>{
    return(
        <>
        <div className="flex justify-between bg-[#0a092d] items-center text-white w-full py-6 px-6">
            <div className="flex gap-5">
                <NavLink>Privacy</NavLink>
                <NavLink>Terms</NavLink>
            </div>
                <NavLink className="flex items-center gap-3">Languages <FaAngleDown /></NavLink>
        </div>
        </>
    )
}