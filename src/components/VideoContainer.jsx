import React, { useEffect, useState } from 'react';
import { YT_VIDS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  // Import useSelector to access Redux state

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);  // All videos from API
  const [filteredVideos, setFilteredVideos] = useState([]);  // Filtered videos based on search
  const searchQuery = useSelector((state) => state.search.query);  // Get the search query from Redux

  useEffect(() => {
    getVideos();
  }, []); 

  const getVideos = async () => {
    const data = await fetch(YT_VIDS_API);
    const json = await data.json();
    const videoItems = json.items || [];  // Safeguard in case 'items' is undefined
    setVideos(videoItems);
    setFilteredVideos(videoItems);  // Initially, display all videos
  };

  // Update filtered videos when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = videos.filter((video) =>
        video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.snippet.channelTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVideos(filtered);
    } else {
      setFilteredVideos(videos);  // Show all videos if search query is empty
    }
  }, [searchQuery, videos]);

  return (
    <div className='ml-44 absolute -z-10 '>
      
      <div className='flex flex-wrap'>
        {filteredVideos.length === 0 ? (
          <p>No videos found</p>  // Handle no search results
        ) : (
          filteredVideos.map((video) => (
            <Link key={video.id} to={"watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
