import React from 'react'
import { FaRegImages } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { RiEqualLine } from 'react-icons/ri'

const DynamicFlashCards = () => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex-col flex border-b-2 border-b-[#0a092d] text-white hover:border-b-slate-200 rounded-lg bg-[#2e3856]">
                    <div className="flex justify-between w-full p-4">
                        <p>1</p>
                        <div className="flex gap-5 items-center text-xl">
                            <RiEqualLine />
                            <MdDeleteOutline />
                        </div>
                    </div>
                    <hr className='bg-black h-[2px]' />
                    <div className="flex items-center gap-5 w-full px-4 py-6">

                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" placeholder='Enter term' className='bg-transparent w-full outline-none border-b-[3px] py-1' />
                            <label htmlFor="term">Term</label>
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <div className="flex flex-col gap-2 w-[80%]">
                                <input type="text" placeholder='Enter term' className='bg-transparent w-full outline-none border-b-[3px] py-1' />
                                <label htmlFor="term">Definition</label>
                            </div>
                            <div className="flex items-center justify-center flex-col p-3 imgborders">
                                <FaRegImages className='text-2xl'/>
                                <p>images</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex-col flex border-b-2 border-b-[#0a092d] text-white hover:border-b-slate-200 rounded-lg bg-[#2e3856]">
                    <div className="flex justify-between w-full p-4">
                        <p>1</p>
                        <div className="flex gap-5 items-center text-xl">
                            <RiEqualLine />
                            <MdDeleteOutline />
                        </div>
                    </div>
                    <hr className='bg-black h-[2px]' />
                    <div className="flex items-center gap-5 w-full px-4 py-6">

                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" placeholder='Enter term' className='bg-transparent w-full outline-none border-b-[3px] py-1' />
                            <label htmlFor="term">Term</label>
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <div className="flex flex-col gap-2 w-[80%]">
                                <input type="text" placeholder='Enter term' className='bg-transparent w-full outline-none border-b-[3px] py-1' />
                                <label htmlFor="term">Definition</label>
                            </div>
                            <div className="flex items-center justify-center flex-col p-3 imgborders">
                                <FaRegImages className='text-2xl'/>
                                <p>images</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default DynamicFlashCards
