import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <>
      <div className="sticky top-16 left-0 w-[260px] h-[calc(100vh-4rem)] bg-gray-800 text-white">
        <div className="flex flex-col p-5 gap-5">
        <NavLink to="" className="adminSidebar">User Data</NavLink>
        <NavLink to="" className="adminSidebar">Contect us</NavLink>
        <NavLink to="" className="adminSidebar">Pser post</NavLink>
        <NavLink to="" className="adminSidebar">Created cards</NavLink>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar;
