import React from 'react'
import { FleshCardsetDropdown } from './FleshCardsetDropdown'
import { FaSearch } from "react-icons/fa";
import FleshCardSetsData from "../../API/FleshCardSetsData.json"

const FleshCardSets = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="flex justify-between w-full">
          <FleshCardsetDropdown dropdownName="Recent" first="Created" second="Recent" third="Studied"/>
          <div className="w-[50%] flex gap-5 items-center bg-[#2e3856] py-[6px] px-6 mx-5 rounded-lg">
            <input
              type="text"
              className='w-full bg-transparent outline-none'
              placeholder='Search fleshcards' />
            <FaSearch className='text-[#939bb4]' />
          </div>
        </div>
        
          {
            FleshCardSetsData.map((index) => (
              <SetsCard key={index.id} data={index}/>
            ))
          }

      </div>
    </div>
  )
}

export default FleshCardSets


export const SetsCard = (props) =>{
  const {title, profession, profileimg_url, terms, username, createdDate} = props.data;
  return(
    <>
    <div className="py-10 flex flex-col gap-4">
          <div className="flex w-full whitespace-nowrap gap-5 items-center">
            <p>{createdDate}</p>
            <hr className='bg-gray-600 h-[1px] w-full' />
          </div>
          <div className="p-4 border-b-2 border-b-[#0a092d] hover:border-b-slate-200 flex flex-col justify-between rounded-lg bg-[#2e3856] relative">

            <div className="flex flex-col text-[14px] overflow-y-scroll overflow-x-hidden gap-3">
              <div className="flex gap-3">
                <p className='flex items-center'>{terms} <span className='text-[20px] text-slate-900 pl-3'>|</span></p>
                <div className="flex gap-3 items-center">
                  <img src={profileimg_url} className='h-8 w-8 object-top rounded-full bg-white' alt="" />
                  <p>{username}</p>
                  <div className="flex text-[12px] font-semibold gap-1 bg-[#586380] w-fit px-2 rounded-xl">
                    <span>{profession}</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h5>{title}</h5>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}