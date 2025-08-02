"use client";

import { useState, useRef, SVGProps } from "react";
import { Play, VolumeX, VolumeMax } from "untitledui-js/react";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  className?: string;
}

const VideoPlayer = ({
  videoSrc,
  thumbnailSrc,
  className = "",
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showBottomControls, setShowBottomControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
      setShowBottomControls(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const handleVideoStart = () => {
    setIsPlaying(true);
    setShowBottomControls(true);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group aspect-video ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onClick={handleVideoClick}
        onEnded={handleVideoEnded}
        onPlay={handleVideoStart}
        poster={thumbnailSrc}
        preload="metadata"
        muted={isMuted}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button Overlay */}
      {showControls && !isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300"
          onClick={handleVideoClick}
        >
          <button
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20  bg-alpha-white-40 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Play video"
          >
            <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground-fg-white" />
          </button>
        </div>
      )}

      {/* Bottom Controls */}
      {(showBottomControls || showControls) && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            {/* Left: Play/Pause */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-10 h-10 text-white hover:text-white/80 transition-colors duration-200"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <PauseIcon className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Right: Volume Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-10 h-10 text-white hover:text-white/80 transition-colors duration-200"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <VolumeMax className="w-5 h-5" />
                )}
              </button>
              <div className="w-20 md:w-24 flex justify-center items-center">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ffffff ${
                      (isMuted ? 0 : volume) * 100
                    }%, rgba(255,255,255,0.3) ${
                      (isMuted ? 0 : volume) * 100
                    }%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M3 .25a2.5 2.5 0 0 1 2.5 2.5v12.5a2.5 2.5 0 0 1-5 0V2.75A2.5 2.5 0 0 1 3 .25Zm10 0a2.5 2.5 0 0 1 2.5 2.5v12.5a2.5 2.5 0 0 1-5 0V2.75A2.5 2.5 0 0 1 13 .25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default VideoPlayer;
