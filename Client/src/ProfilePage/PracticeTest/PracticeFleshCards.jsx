import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FcTwoSmartphones } from 'react-icons/fc'
import UserData from "../../API/UserData.json"

const PracticeFleshCards = () => {
  return (
    <>
    {
        UserData.map((items, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 my-5 md:my-10 hover:bg-[#2e3856] rounded-md">
                <div className="flex gap-3 items-center">
                    <div className="px-2 py-2 bg-[#2e3856] rounded-md flex items-center text-2xl">
                        <FcTwoSmartphones />
                    </div>
                    <div className="flex flex-col text-[12px] md:text-[14px]">
                        <p className='font-semibold'>{items.aboutyouoryorproject}</p>
                        <p>9 terms <span>by you</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5 mt-3 md:mt-0">
                    <button className="py-[4px] md:py-[6px] px-3 md:px-4 text-white border-[1px] rounded-md border-white bg-transparent hover:bg-gray-600 flex items-center gap-2">
                        Recent
                    </button>
                    <AiOutlinePlusCircle className='text-xl md:text-2xl'/>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default PracticeFleshCards
