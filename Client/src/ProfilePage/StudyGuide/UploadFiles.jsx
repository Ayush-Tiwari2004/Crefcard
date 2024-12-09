import React from 'react'
import { MdUpload } from 'react-icons/md'

const UploadFiles = () => {
  return (
    <>
      <div className="my-5 md:my-10">
        <div className="w-full h-[250px] md:h-[300px] flex justify-center items-center flex-col gap-3 md:gap-5 p-4 border-2 border-slate-500 text-white rounded-md">
            <div className="fleshicons" style={{ height: 50, width: 50, fontSize: 28 }}>
                <label htmlFor="browser"><MdUpload /></label>
                <input type="file" id='browser' className='hidden' />
            </div>
            <div className="text-center flex flex-col gap-2 md:gap-3">
                <h5 className="text-sm md:text-base">Drag and drop file or <label htmlFor='browse' className='cursor-pointer text-blue-600'>click to browse</label></h5>
                <input type="file" id='browse' className='hidden'/>
                <div className="flex flex-col gap-1 text-[12px] md:text-[14px] text-gray-400">
                    <p>Supported file types: .docx, .pdf, .pptx</p>
                    <p>Make sure your document contains at least 100 characters, but no more than 100,000.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default UploadFiles;
