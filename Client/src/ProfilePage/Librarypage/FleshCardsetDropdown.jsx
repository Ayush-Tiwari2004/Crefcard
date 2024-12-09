import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export const FleshCardsetDropdown = ({first, second, third, four, five, dropdownName, firstlink, secondlink, thirdlink, fourlink, fivelink}) => {
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
    document.addEventListener('click', handleOutsideClick);
    return () => {
      
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={handleDropdownBtn} className="py-[6px] px-4 text-white border-[1px] rounded-md border-white bg-transparent hover:bg-gray-600 flex items-center gap-2">
        {dropdownName}  <FaAngleDown />
      </button>
      <div
        className={`${
          isDropdownActive ? 'block' : 'hidden'
        } absolute z-10 bg-[#0a092d] text-slate-200 border-[1px] border-slate-400 p-4 mt-2 rounded-md w-56 flex flex-col gap-3`}
      >
        <NavLink to={firstlink}>{first}</NavLink>
        <NavLink to={secondlink}>{second}</NavLink>
        <NavLink to={thirdlink}>{third}</NavLink>
        <NavLink to={fourlink}>{four}</NavLink>
        <NavLink to={fivelink}>{five}</NavLink>
      </div>
    </div>
  );
};

