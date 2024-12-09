import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Starthere = () => {
  return (
    <>
      <div className="bg-[#0a092d] text-white w-full p-6">
        <h3 className='my-5 text-[16px] sm:text-[30px]'>Your Library</h3>

        <div className="libraryLinks text-[14px] flex gap-5 border-b-2 border-b-gray-500 pb-1 overflow-scroll whitespace-nowrap">
          <NavLink to="sets" className="links" end>Fleshcard sets</NavLink>
          <NavLink to="sets/tests" className="links">Practice tests</NavLink>
          <NavLink to="sets/guide" className="links">Study guides</NavLink>
          <NavLink to="sets/expert-solution" className="links">Expert solution</NavLink>
          <NavLink to="sets/folders" className="links">Folders</NavLink>
          <NavLink to="sets/classes" className="links">Classes</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  )
}
  
export default Starthere;