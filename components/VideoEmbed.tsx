"use client";

import { useState } from "react";

const VIDEO_ID = "2hIYSgVSESI";

export default function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame reveal">
      {playing ? (
        <div className="video-iframe-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Ratinova Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        </div>
      ) : (
        <button
          className="video-thumb"
          onClick={() => setPlaying(true)}
          aria-label="Play Ratinova demo video"
        >
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Ratinova demo video"
            className="video-thumb-img"
          />
          <div className="video-overlay" />
          <div className="play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14z"/>
            </svg>
          </div>
          <div className="video-duration">Full Demo</div>
        </button>
      )}
    </div>
  );
}
