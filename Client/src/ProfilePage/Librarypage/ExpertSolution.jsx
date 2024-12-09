import React from 'react'
import ProfileCardData from "../../API/ProfileCardData.json";
import { RecentCards } from '../Profile/ProfilehomePage/RecentCards';
import { FleshCardsetDropdown } from './FleshCardsetDropdown';
import { FaSearch } from "react-icons/fa";

const ExpertSolution = () => {
  return (
    <>
        <div className="py-10">
        <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-5 sm:flex-row justify-between">
          <FleshCardsetDropdown dropdownName="All" first="All" second="Expert Solution" third="Textbooks" />
          <div className="flex gap-5 justify-between items-center bg-[#2e3856] py-[6px] px-6 rounded-lg">
            <input
              type="text"
              className='bg-transparent outline-none'
              placeholder='Filter' />
            <FaSearch className='text-[#939bb4]' />
          </div>
        </div>
      <RecentCards data={ProfileCardData.slice(8, 13)} Recent="Recent"/>
        </div>
        </div>
    </>
  )
}

export default ExpertSolution
