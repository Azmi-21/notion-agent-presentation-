import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { TrendingUp, Users, MessageSquare, Heart } from 'lucide-react';

export function ImpactSlide() {
  const benefits = [
    { icon: TrendingUp, text: 'Faster onboarding' },
    { icon: MessageSquare, text: 'Reduced repetitive questions' },
    { icon: Heart, text: 'More time for member care' },
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
          The Results
        </h2>

        {/* Chart */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-end justify-center gap-16 h-80">
            {/* Entry-level bar */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28">
                <div 
                  className="w-full bg-gradient-to-t from-[#FF9B8A] to-[#FFB5A7] rounded-t-3xl"
                  style={{ height: '260px' }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl text-[#2B2B2B]">
                  100%
                </div>
              </div>
              <p className="text-[#2B2B2B] text-center text-sm max-w-[120px]">
                Entry-level team members
              </p>
            </div>

            {/* Senior bar */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28">
                <div 
                  className="w-full bg-gradient-to-t from-[#FFCAB8] to-[#FFD5C9] rounded-t-3xl"
                  style={{ height: '130px' }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl text-[#2B2B2B]">
                  50%
                </div>
              </div>
              <p className="text-[#2B2B2B] text-center text-sm max-w-[120px]">
                Senior team members
              </p>
            </div>
          </div>

          {/* Y-axis label */}
          <div className="text-center mt-6 text-[#2B2B2B] opacity-60 text-sm">
            Efficiency Improvement
          </div>
        </div>

        {/* Benefit Badges */}
        <div className="flex gap-5 justify-center mt-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/50 rounded-full px-6 py-3 flex items-center gap-2 border border-[#FF9B8A]/30"
              >
                <Icon className="w-4 h-4 text-[#FF9B8A]" />
                <span className="text-[#2B2B2B] text-sm">{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
