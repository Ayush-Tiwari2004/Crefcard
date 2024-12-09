import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const AdminHeader = () => {
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilepic'))
  return (
    <>
      <div className="sticky top-0 bg-gray-800 px-6 flex justify-between py-3">
        <div className="max-w-[50%] flex-1 flex items-center gap-20">
          <h3>Crefcard</h3>
          <div className="w-full flex gap-2 px-2 rounded-md items-center bg-gray-700">
          <IoSearchSharp className='text-xl'/>
          <input 
          type="text"
          placeholder='search'
          className='bg-transparent outline-none py-1 px-2 w-full' />
          </div>
        </div>
        <div className="flex gap-5 items-center">
            <h5>Hello Admin</h5>
            <div>
            <img src={profilePic} className="h-10 w-10 bg-white rounded-full object-cover" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader
