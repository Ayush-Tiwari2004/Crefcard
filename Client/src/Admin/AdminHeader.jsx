import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const AdminHeader = () => {
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilepic'))
  return (
    <div className="sticky top-0 bg-gray-800 px-3 sm:px-6 flex flex-col sm:flex-row justify-between py-3 shadow-lg">
      <div className="w-full sm:max-w-[50%] sm:flex-1 flex flex-col sm:flex-row items-center gap-4 sm:gap-20 mb-3 sm:mb-0">
        <h3 className="text-xl font-bold">Crefcard</h3>
        <div className="w-full flex gap-2 px-2 rounded-md items-center bg-gray-700">
          <IoSearchSharp className='text-xl text-gray-400'/>
          <input 
            type="text"
            placeholder='Search users...'
            className='bg-transparent outline-none py-2 px-2 w-full text-sm' 
          />
        </div>
      </div>
      <div className="flex gap-3 sm:gap-5 items-center justify-center sm:justify-end">
        <h5 className="text-sm sm:text-base">Hello Admin</h5>
        <div>
          <img 
            src={profilePic} 
            className="h-8 w-8 sm:h-10 sm:w-10 bg-white rounded-full object-cover border-2 border-gray-600" 
            alt="Admin Profile" 
          />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
