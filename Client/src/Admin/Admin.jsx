import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"

export const Admin = () =>{
    return(
        <>
        <div className="w-full text-white bg-gray-900">
            <AdminHeader />
            <div className="flex">
            <AdminSidebar />
            <Outlet />
            </div>
        </div>
        </>
    )
}