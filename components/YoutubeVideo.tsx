import React from "react";
import YouTube from "react-youtube";

export interface YoutubeProps {
  className?: string;
  videoId: string;
  height: number;
  width: number;
}

export default function YoutubeVideo({
  className,
  videoId = "Pi8BmaV3f_M",
  height = 390,
  width = 640,
}: YoutubeProps) {
  const opts = {
    height: height.toString(),
    width: width.toString(),
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  return <YouTube videoId={videoId} opts={opts} className={className} />;
}
