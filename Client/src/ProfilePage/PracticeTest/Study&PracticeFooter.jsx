import React from 'react'
import { BsQuestionCircle } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';

const StudyPracticeFooter = () => {
  return (
    <>
    <footer className='sticky bottom-0'>
      <div className="bg-[#0a092d] shadow-lg shadow-slate-400 px-5 sm:px-[5rem]">
        <div className="flex flex-col sm:flex-row gap-3 justify-between py-5">
          <div className="flex flex-col gap-2">
            <div className="flex text-white items-center gap-2">
              <div className="p-1 bg-white rounded-md w-fit">
                <FaCheck className="text-black" />
              </div>
              <p>Viseible to every one</p>
              <BsQuestionCircle className="text-2xl" />
            </div>
            <p className="text-[12px] text-white">This product is enhanced with AI and may provide incorrect or problematic content. Do not enter any personal data</p>
          </div>
          <p className="text-white px-4 bg-gray-500 rounded-md flex items-center">Generate</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default StudyPracticeFooter;
