import React from 'react'
import { FleshCardsetDropdown } from './FleshCardsetDropdown'
import { Button } from '../../CommonCompo/Button'

const Folders = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col gap-5">
          <FleshCardsetDropdown dropdownName="Created" first="Bookmarked" second="Created" third="recent" four="Studit" />
        </div>
        <div className='flex justify-center h-[calc(100vh-15rem)] w-full'>
          <div className='flex flex-col gap-5 items-center justify-center h-full max-w-[500px] text-center'>
            <img src="/images/fileimg.svg" alt="" />
            <div>
            <h5 className='text-[#d9dde8]'>Generate and take practice tests based on your materials</h5>
            <p className='text-[#cccfd9]'>Create a folder to organise your sets</p>
            </div>
            <Button buttonColor="py-2 px-2 bg-blue-500 text-[14px] " label="Start generating" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Folders
