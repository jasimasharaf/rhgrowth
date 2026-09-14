import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

export default function VideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
      if (newMuteState) {
        videoRef.current.volume = 0;
      } else {
        videoRef.current.volume = volume || 1;
      }
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const curr = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 0;
      setCurrentTime(curr);
      setDuration(dur);
      if (dur > 0) {
        setProgress((curr / dur) * 100);
      }
    }
  };

  const handleSeek = (e) => {
    const seekTo = (parseFloat(e.target.value) / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTo;
      setProgress(parseFloat(e.target.value));
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="custom-video-container" ref={containerRef}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="custom-video-element"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        playsInline
      />

      {/* Video Overlay Controls */}
      <div className="video-controls-overlay">
        {/* Play/Pause Large Center Trigger when paused */}
        {!isPlaying && (
          <button className="video-center-play" onClick={togglePlay} aria-label="Play Video">
            <Play size={32} fill="currentColor" />
          </button>
        )}

        {/* Bottom Control Bar */}
        <div className="video-control-bar">
          <input
            type="range"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleSeek}
            className="video-progress-bar"
          />

          <div className="video-controls-row">
            <div className="controls-left">
              <button className="control-btn" onClick={togglePlay}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <div className="volume-control-group">
                <button className="control-btn" onClick={toggleMute}>
                  {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
              </div>

              <span className="video-time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="controls-right">
              <button className="control-btn" onClick={toggleFullscreen}>
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-video-container {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #000;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-video-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .video-controls-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(4, 9, 10, 0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .custom-video-container:hover .video-controls-overlay,
        .custom-video-container:focus-within .video-controls-overlay {
          opacity: 1;
        }

        .video-center-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(45, 212, 191, 0.9);
          color: #041012;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: 0 0 25px rgba(45, 212, 191, 0.5);
          transition: var(--transition);
        }

        .video-center-play:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: #5eead4;
        }

        .video-control-bar {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .video-progress-bar {
          width: 100%;
          height: 4px;
          appearance: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .video-progress-bar::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-teal);
          cursor: pointer;
        }

        .video-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .controls-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .controls-right {
          display: flex;
          align-items: center;
        }

        .control-btn {
          color: #fff;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: var(--transition);
        }

        .control-btn:hover {
          color: var(--accent-teal);
          background: rgba(255, 255, 255, 0.1);
        }

        .volume-control-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .volume-slider {
          width: 60px;
          height: 4px;
          appearance: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
        }

        .video-time-display {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: monospace;
        }

        @media (max-width: 600px) {
          .volume-slider { width: 40px; }
        }
      `}</style>
    </div>
  );
}
