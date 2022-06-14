import React from "react";
import YouTube from "react-youtube";

export interface YoutubeProps {
  className?: string;
  videoId?: string;
}

export default function YoutubeVideo({ className, videoId }: YoutubeProps) {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  return (
    <YouTube
      videoId={videoId ?? "Pi8BmaV3f_M"}
      opts={opts}
      className={className}
    />
  );
}
