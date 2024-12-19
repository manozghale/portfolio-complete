import React from 'react';

export const VideoBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    >
      <source
        src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-background-99s-1100-large.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
  </div>
);