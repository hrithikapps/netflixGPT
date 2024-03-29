import React from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useVideoTrailer(movieId);

  return (
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&rel=0&showinfo=0`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoBackground;
