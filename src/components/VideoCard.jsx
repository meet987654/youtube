import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  // Function to format the view count
  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + 'M views'; // Millions
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + 'K views'; // Thousands
    } else {
      return viewCount + ' views'; // Less than 1K
    }
  };

  return (
    <div className="ml-5 mt-2">
      {thumbnails && thumbnails.medium && (
        <img
          src={thumbnails.medium.url}
          alt="Video thumbnail"
          className="rounded-lg"
        />
      )}
      <ul>
        <li className="font-semibold text-[17px] w-80">{title}</li>
        <li className='text-[15px] text-gray-600'>{channelTitle}</li>
        <li className='text-[15px] text-gray-600'>{statistics && formatViewCount(statistics.viewCount)}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
