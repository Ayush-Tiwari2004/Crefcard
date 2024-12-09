import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

export const BookDetails = () => {
  // Get the data loaded by the loader function
  let profiles = useLoaderData();
    if (!Array.isArray(profiles)) {
      profiles = [profiles];
    }
  if (profiles.length === 0) return <p>No book details available.</p>;

  const [activeChapters, setActiveChapters] = useState({});

  // Handle accordion click and toggle active state for the clicked chapter
  const handleAccordian = (chaptornumber) => {
    setActiveChapters((prevState) => ({
      ...prevState,
      [chaptornumber]: !prevState[chaptornumber], // Toggle the active state for this chapter
    }));
  };


  return (
    <>
    <div className="profile-page">
      {profiles.map((profile) => (
        <div key={profile.id}>
          <div className="bg-[#0a092d] text-white w-full p-6">


          <div className="flex items-center gap-1">
                 <NavLink>{profile.bookCategory}</NavLink>
                 <span className="text-slate-400"> / </span>
                 <NavLink>{profile.booktype}</NavLink>
             </div>
             <div className="flex gap-5 py-5">
                 <img src={profile.bookimg} className="h-[10%] w-[10%] rounded-md" alt={profile.bookname} />
                 <div className="flex flex-col gap-7 mt-2">
                     <div className="flex flex-col gap-1">
                         <h5>{profile.bookname}</h5>
                         <p>{profile.bookEdition}</p>
                     </div>
                     <div className="flex flex-col gap-1">
                         <p>{profile.isbn}</p>
                         <p>{profile.writer}</p>
                     </div>
                 </div>
             </div>
             <div className="flex gap-4 py-5">
                 <h6>Textbook Solutions</h6>
                 <div className="bg-slate-600 w-fit flex gap-2 items-center rounded-full px-2 py-[1px]">
                     <RiVerifiedBadgeFill />
                     <p>Verified</p>
                 </div>
             </div>
             {profile.chapters && profile.chapters.map((chapter, index) => (
              <div key={index} className="flex items-center justify-between w-full bg-[#2e3856] my-4 rounded-lg overflow-hidden">
                <div className="w-full" onClick={() => handleAccordian(chapter.chaptornumber)}>
                  <details className='w-full'>
                  <summary className='flex justify-between px-8 py-4'>
                  <div className="flex">
                  <p>{chapter.chaptornumber} :</p>
                  <p>{chapter.chaptorname}</p>
                  </div>
                <FaAngleDown className={`${activeChapters[chapter.chaptornumber] ? "rotate-180" : ""} transition-transform duration-300`}/>
                  </summary>
                  <div
                      className="transition-all duration-[5s] ease-in-out overflow-hidden"
                    >
                      <p className='rounded-md py-2 px-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam odio consequuntur aliquam sint doloremque, temporibus error voluptates nisi cupiditate dolor veritatis quae accusamus illum. Rerum asperiores molestiae adipisci veniam aperiam.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            ))}
        </div>
        <div className="">
          <p>{profile.text}</p>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};


