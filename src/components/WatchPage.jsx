import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { hideSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';
const WatchPage = () => {

  const [searchParams]=useSearchParams();
  

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(hideSideBar())
  },[])

  return (
    
    <div className='mt-28 mx-10'>
      <div className='flex'>
      <iframe 
      width="1200" 
      height="600"
       src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
       title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" 
         allowFullScreen></iframe>
         <div className='w-[420px]'>
          <LiveChat/>
         </div>
         </div>
          <CommentSection/>
   
    </div>
  )
}

export default WatchPage