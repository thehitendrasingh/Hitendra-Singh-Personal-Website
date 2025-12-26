import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-sky-500/40 shadow-[0_0_25px_rgba(90,130,255,0.45)] hover:shadow-[0_0_35px_rgba(90,130,255,0.7)] transition-all duration-300 bg-neutral-900">
      <YouTube 
        videoId={videoId} 
        opts={opts} 
        className="w-full h-full"
        iframeClassName="w-full h-full"
      />
    </div>
  );
};

export default YouTubePlayer;