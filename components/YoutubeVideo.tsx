import React from "react";
import YouTube from "react-youtube";

export interface YoutubeProps {
  className?: string;
  videoId?: string;
  height?: number;
  width?: number;
}

export default function YoutubeVideo({
  className,
  videoId,
  height,
  width,
}: YoutubeProps) {
  const opts = {
    height: height ? height.toString() : "390",
    width: width ? width.toString() : "640",
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
