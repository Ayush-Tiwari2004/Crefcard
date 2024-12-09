import React from 'react'
import { Button } from '../../CommonCompo/Button'

const Tests = () => {
  return (
    <div className='flex justify-center h-[calc(100vh-10rem)] w-full'>
    <div className='flex flex-col gap-5 items-center justify-center h-full max-w-[500px] text-center'>
      <img src="/images/test.png" className='h-[20%]' alt="" />
      <h5 className='text-[#d9dde8]'>Generate and take practice tests based on your materials</h5>
      <Button buttonColor="py-2 px-2 bg-blue-500 text-[14px] " label="Start generating"/>
    </div>
    </div>
  )
}

export default Tests;

