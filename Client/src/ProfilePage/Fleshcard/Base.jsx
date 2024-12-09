import React from 'react'
import { FaRegKeyboard, FaSearch } from "react-icons/fa"
import { Button } from "../../CommonCompo/Button"
import { IoMdAdd } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";

const Base = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 sm:gap-5 sm:flex-row items-center justify-between">
          <h4 className="font-semibold text-[18px] sm:text-[24px] whitespace-nowrap">Create a new flashcard set </h4>
          <div className="flex gap-5 py-2">
            <Button buttonColor="border-2 border-gray-500 px-6 py-1 text-[10px] sm:[text-14px]" label="Create"/>
          <div className="flex gap-5 justify-between items-center bg-[#2e3856] py-[6px] px-6 rounded-lg">
            <input
              type="text"
              className='bg-transparent outline-none w-full'
              placeholder='Filter' />
            <FaSearch className='text-[#939bb4]' />
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
        <div className="p-4 flex gap-3 border-b-2 border-b-[#0a092d] text-white hover:border-b-slate-200 rounded-lg bg-[#2e3856]">
            <p>Tittle</p>
            <input type="text" placeholder="Enter a tittle, like, Chaptor 22: Bilogy-Evolution" className="bg-transparent outline-none w-full"/>
        </div>
        <div className="p-4 flex gap-3 border-b-2 border-b-[#0a092d] text-white hover:border-b-slate-200 rounded-lg bg-[#2e3856]">
            <p>Description</p>
            <input type="text" placeholder="Add a description" className="bg-transparent outline-none w-full"/>
        </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="border-2 border-gray-500 px-4 py-1 text-[14px] flex gap-2 font-semibold rounded-md items-center"><IoMdAdd className="text-xl"/> import</button>
                <button className="border-2 border-gray-500 px-4 py-1 text-[14px] flex gap-2 font-semibold rounded-md items-center"><IoMdAdd className="text-xl"/> Add digram</button>
                <button className="border-2 border-gray-500 px-4 py-1 text-[14px] flex gap-2 font-semibold rounded-md items-center"><BsStars className="text-xl"/> Create form notes <CiLock className="text-lg bg-yellow-400 text-black w-6 rounded-lg"/></button>
            </div>
          <div className="flex gap-5">
            <div className="fleshicons">
          <IoSettingsOutline />
            </div>
            <div className="fleshicons">
            <GoArrowSwitch />
            </div>
            <div className="fleshicons">
            <FaRegKeyboard /> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Base
