import React, { useState } from 'react'

const PastText = () => {
    const [count, setCount] = useState("");
    const maxlength = 10000;
    const handleCarChange = (e) =>{
        setCount(e.target.value)
    }

  return (
    <>
    <div className="my-10">
        <textarea 
        placeholder="Past your notes here. we'll do the rest"
        value={count}
        onChange={handleCarChange}
        maxLength={maxlength}
        className='bg-[#2e3856] p-4 rounded-md h-[250px] sm:h-[300px] outline-none w-full resize-none'></textarea>
        <p className='text-end mt-1'>{count.length}/{maxlength} characters</p>
    </div>
    </>
  )
}

export default PastText
