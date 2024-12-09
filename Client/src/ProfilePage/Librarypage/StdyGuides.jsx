import React from 'react'
import ProfileCardData from "../../API/ProfileCardData.json";
import { RecentCards } from '../Profile/ProfilehomePage/RecentCards';

const StdyGuides = () => {
  return (
    <div className='sm:h-[calc(100vh-20vh)]'>
      <RecentCards data={ProfileCardData.slice(0, 3)} Recent="Recent"/>
    </div>
  )
}

export default StdyGuides;


