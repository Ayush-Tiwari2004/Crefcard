import { Outlet } from "react-router-dom"
import ProfileHeader from "../Header&Sidebar/ProfileHeader"
import { Sidebar } from "./Sidebar"
import { Footer } from "../Header&Sidebar/Footer"
import { useState } from "react"

export const Profilelayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <ProfileHeader toggleSidebar={() => setShowSidebar((prev) => !prev)} />
            <div className="flex">
                <div
                    className={`col-span-4 transition-all duration-1000 ${showSidebar ? "flex md:hidden" : "hidden md:flex"}`}
                >
                    <Sidebar />
                </div>
                <div className="w-full bg-[#0a092d]">
                    <div className={showSidebar ? "lg:px-32" : ""}>
                        <div className="col-span-8 w-full">
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}