import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { Heart, HandHeart, Compass, Users, TrendingUp } from 'lucide-react';

export function ValuesSlide() {
  const values = [
    {
      title: 'Always Put Members First',
      icon: Heart,
      description: 'Faster answers = better care',
    },
    {
      title: 'We Deeply Care',
      icon: HandHeart,
      description: 'Reduces team frustration',
    },
    {
      title: 'We Are Shackletons',
      icon: Compass,
      description: 'Innovative knowledge management',
    },
    {
      title: 'We Play to Win as a Team',
      icon: Users,
      description: 'Collective intelligence for all',
    },
    {
      title: 'Keep It Simple',
      icon: TrendingUp,
      description: 'One question → immediate answer',
    },
  ];

  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-4xl text-[#2B2B2B] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Aligned with What Dialogue Stands For
        </h2>

        {/* Values Cards */}
        <div className="space-y-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-[#F9F5ED] rounded-2xl p-5 flex items-center gap-5 border border-[#FF9B8A]/20 hover:border-[#FF9B8A]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#FF9B8A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#2B2B2B] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#2B2B2B] opacity-70 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
