import React, { useState } from 'react'
import { GrLineChart } from "react-icons/gr";
import { GoStarFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineFileUpload, MdOutlineSaveAlt } from "react-icons/md";
import RecentCardChips, { CardFlipFleshcard } from './RecentCardChips';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from 'react-router-dom';

const RecentCardDetails = () => {
  let profiles = useLoaderData();
  if (!Array.isArray(profiles)) {
    profiles = [profiles];
  }
  if (profiles.length === 0) return <p>No book details available.</p>;


  const [active, setActive] = useState(false);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1, // one card at a time
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section className='flex flex-col md:flex-row gap-6 p-4 text-white'>
      {/* Main content section (left side) */}
      {
        profiles.map((index) => (
          <div key={index.id} className='flex-1'>
            {/* Header section with stats and actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{index.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <GrLineChart className="text-red-500" />
                    <span>{index.grow}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div onClick={() => setActive(!active)}>
                      <GoStarFill className="text-yellow-400" />
                    </div>
                    <span>{index.reviews}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 border rounded-full py-1 px-4 border-gray-200  hover:bg-gray-600 transition-colors">
                  <MdOutlineSaveAlt className='text-xl'/>
                  <span>Save</span>
                </button>
                <button className="p-2 border rounded-full border-gray-200 hover:bg-gray-600  transition-colors">
                  <MdOutlineFileUpload className='text-xl'/>
                </button>
                <button className="p-2 border rounded-full border-gray-200 hover:bg-gray-600 transition-colors">
                  <BsThreeDots className='text-xl'/>
                </button>
              </div>
            </div>

            {/* Recent card chips section */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <RecentCardChips />
            </div>

            {/* cardFlipFleshcard */}
            <div className="flex mt-8 items-center gap-2 text-white">
                    <img
                        src={index.user_img}
                        className="rounded-full"
                        style={{
                            backgroundColor: index.Background,
                            width: index.width,
                            height: index.height
                        }}
                        alt=""
                    />
                    <div className="">
                    <p className='text-gray-300 text-[10px]'>Created by</p>
                    <div className="flex items-center gap-2">
                    <p className="text-white font-semibold">{index.user_name}</p>
                    <div className="flex text-[12px] gap-1 bg-[#586380] w-fit px-2 rounded-xl text-white">
                        <span>{index.profession}</span>
                    </div>
                    </div>
                    <p className='text-gray-300 text-[10px]'>Created 1 year ago</p>
                    </div>
                </div>
            <div className="w-full max-w-[800px] mx-auto -ml-2">
              <Slider {...settings}>
                {
                  index.recentCardQuestion && index.recentCardQuestion.map((data, i) => (
                    <div key={i}>
                      <CardFlipFleshcard
                        question={data.question}
                        answer={index.recentCardAnswer?.[i]?.answer || "No answer provided"}
                      /> 
                    </div>
                  ))
                }
              </Slider>
            </div>

          </div>
        ))
      }

      {/* Sidebar section (right side) */}
      {/* <div className="w-full md:w-1/3 lg:w-1/3 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl hidden md:block">
        <h4 className="font-medium text-lg mb-3 text-gray-800 dark:text-white">
          Additional Information
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, temporibus! Sequi omnis quae iusto vero fugiat, voluptatum eaque tempore nemo, animi provident repellendus unde neque, eius fugit reprehenderit quidem illo.
        </p>
        <div className="overflow-hidden rounded-xl w-fit mt-5">
        <iframe width="280" height="480"  src="https://www.youtube.com/embed/QFwJJywzbDs?si=0l5DLfvcqcmrrPR8?autoplay=1&mute=1" title="YouTube video player" muted frameborder="0" allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div> */}
    </section>
  )
}

export default RecentCardDetails;