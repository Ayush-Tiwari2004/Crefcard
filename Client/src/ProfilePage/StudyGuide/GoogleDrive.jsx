import React from 'react'
import { MdUpload } from 'react-icons/md'

const GoogleDrive = () => {
  return (
    <>
      <div className="my-10">
        <div className="w-full flex justify-center items-center flex-col gap-5 p-4 border-2 border-slate-500 text-white rounded-md">
            <img src="/images/google-drive.png" className='h-16' alt="" />
            <div className="text-center flex flex-col gap-3">
                <h5>Select a doc or presentation from your Google Drive</h5>
                <input type="file" id='browse' className='hidden'/>
                <div className="flex flex-col gap-1 text-[14px] text-gray-400">
                <p>Allow pop-up windows on the Quizlet site before connecting your Google account. Make sure your docs or presentations contain between 100 and 100,000 characters.</p>
                </div>
            </div>
                <button className="py-[6px] px-4 w-fit text-white border-[1px] rounded-md border-white bg-transparent hover:bg-gray-600 flex items-center gap-2">Recent</button>
        </div>
      </div>
    </>
  )
}

export default GoogleDrive;
