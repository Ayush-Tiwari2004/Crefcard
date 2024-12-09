import React from 'react'
import { FleshCardsetDropdown } from './FleshCardsetDropdown'
import { Button } from '../../CommonCompo/Button'

const Classes = () => {
  return (
    <>
       <div className="py-10">
        <div className='flex justify-center h-[calc(100vh-15rem)] w-full'>
          <div className='flex flex-col gap-5 items-center justify-center h-full max-w-[500px] text-center'>
            <img src="/images/fileimg2.svg" alt="" />
            <div>
            <h5 className='text-[#d9dde8]'>You haven't created or joined any classes</h5>
            <p className='text-[#cccfd9]'>Create a class to help organise your sets and share them with your classmates</p>
            </div>
            <Button buttonColor="py-2 px-2 bg-blue-500 text-[14px] " label="Start generating" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Classes
