"use client";
import React, { useState, useEffect } from 'react';

interface BackgroundVideoWithTextProps {
  videoSources: {
    small: string;
    large: string;
  }
  posters?:  {
    small: string;
    large: string;
  }
  videoDescription?: string;
}

const BackgroundVideoWithText: React.FC<BackgroundVideoWithTextProps> = ({ videoSources, posters, videoDescription }) => {
  const [selectedVideo, setSelectedVideo] = useState(videoSources.small);
  const [selectedPoster, setSelectedPoster] = useState(posters?.small);

  useEffect( () => {

    const updateVideoSource = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSelectedVideo(videoSources.small);
        setSelectedPoster(posters?.small);
      } else {
        setSelectedVideo(videoSources.large);
        setSelectedPoster(posters?.large);
      }
    };

    window.addEventListener('resize', updateVideoSource);
    updateVideoSource(); // to call on initial render

    return () => window.removeEventListener('resize', updateVideoSource);
    }, [videoSources, posters?.small, posters?.large]);

  return (
    <div className="relative overflow-hidden w-full">
      <video
        autoPlay
        loop
        muted
        playsInline // Improves performance on mobile devices
        className="w-full h-auto"
       
        style={{
          objectFit: 'contain', // Ensure video is fully visible without cutting
        }}
        src={selectedVideo}
        poster={selectedPoster}
        aria-label="Background video"
        aria-describedby="videoDescription"
      >  
       <div id='videoDescription' className='sr-only'>{videoDescription}</div>     
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideoWithText;