import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { Laptop, FileText, Clock, BookOpen, Timer, Users, RotateCcw } from 'lucide-react';

export function ProblemSlide() {
  const painPoints = [
    { icon: BookOpen, text: '50+ Notion pages with subsections' },
    { icon: Timer, text: 'Hours spent searching Notion pages' },
    { icon: Users, text: 'New team members overwhelmed' },
    { icon: RotateCcw, text: 'Same questions repeated daily' },
  ];

  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-4xl text-[#2B2B2B] mb-10" style={{ fontFamily: 'Georgia, serif' }}>
          The Challenge
        </h2>

        {/* Visual Diagram */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border-2 border-[#2B2B2B] flex items-center justify-center">
              <Laptop className="w-8 h-8 text-[#2B2B2B]" />
            </div>
            <p className="text-[#2B2B2B] opacity-70 text-center text-xs">CC<br/>Team</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-12 bg-[#2B2B2B] opacity-20 rounded"></div>
              <div className="w-1 h-16 bg-[#2B2B2B] opacity-30 rounded"></div>
              <div className="w-1 h-14 bg-[#2B2B2B] opacity-20 rounded"></div>
              <div className="w-1 h-12 bg-[#2B2B2B] opacity-25 rounded"></div>
            </div>
            <p className="text-[#2B2B2B] opacity-60 text-xs">Searching...</p>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-40" />
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-50" />
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-40" />
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-50" />
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-60" />
            <FileText className="w-6 h-6 text-[#2B2B2B] opacity-40" />
          </div>

          <Clock className="w-12 h-12 text-[#FF9B8A]" />
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white/40 rounded-3xl p-6 border-2 border-[#FF9B8A]/30 flex items-center gap-3"
              >
                <Icon className="w-6 h-6 text-[#FF9B8A] flex-shrink-0" />
                <p className="text-[#2B2B2B]">{point.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
