import React, { useEffect, useState } from 'react';
import { YT_VIDS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []); 

  const getVideos = async () => {
    const data = await fetch(YT_VIDS_API);
    const json = await data.json();
    setVideos(json.items || []); // Set videos only if 'items' exists
  };

  return (
    <div className='ml-5 flex flex-wrap'>
      {videos.map(
        (video)=>
           (
           <Link to={"watch?v="+video.id} ><VideoCard key={video.id} info={video } />
           </Link>)
      )}
    </div>
  );
};

export default VideoContainer;
