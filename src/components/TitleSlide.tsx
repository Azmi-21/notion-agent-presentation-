import React from 'react';
import { DialogueLogo } from './DialogueLogo';

export function TitleSlide() {
  return (
    <div className="w-full h-screen bg-[#F5EFE7] flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl text-center space-y-6">
        <h1 className="text-6xl text-[#2B2B2B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Notion AI Agent:<br />Instant Knowledge Access
        </h1>
        
        {/* Coral underline accent */}
        <div className="w-64 h-1 bg-[#FF9B8A] mx-auto rounded-full"></div>
        
        <p className="text-xl text-[#2B2B2B] opacity-80 mt-6">
          Transforming Documentation into Action
        </p>
      </div>

      {/* Tagline at bottom */}
      <div className="absolute bottom-16 text-[#2B2B2B] tracking-[0.3em] opacity-60 text-sm">
        HEALTH IS EVERYTHING. DON'T SETTLE.
      </div>
    </div>
  );
}
